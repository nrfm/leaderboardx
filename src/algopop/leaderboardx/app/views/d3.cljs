(ns algopop.leaderboardx.app.views.d3
  (:require
    [cljsjs.d3]
    [cljs.test]
    [clojure.string :as string]
    [reagent.core :as reagent]
    [reagent.dom :as dom]
    [goog.crypt :as crypt]
    [devcards.core])
  (:require-macros
    [devcards.core :refer [defcard-rg]]
    [reagent.ratom :refer [reaction]])
  (:import
    [goog.crypt Md5]))

(defn update-simulation [simulation node-types edge-types nodes edges]
  (let [particles (concat nodes edges)
        particles-by-id (into {} (for [p particles] [(:db/id p) p]))
        simulation-particles (.nodes simulation)
        kept-particles (clj->js
                         (for [p simulation-particles
                               :let [found (particles-by-id (.-id p))]
                               :when found]
                           (merge (js->clj p) found)))
        existing-ids (set (keys (.-idxs simulation)))
        added-particles (clj->js (remove #(contains? existing-ids (:db/id %)) particles))
        final-particles (concat kept-particles added-particles)
        idxs (zipmap (map #(.-id %) final-particles) (range))]
    (.nodes
      simulation
      (clj->js
        (map-indexed
          (fn [idx particle]
            (set! (.-index particle) idx)
            particle)
          final-particles)))
    (.links
      (.force simulation "link")
      (clj->js
        (map-indexed
          (fn [idx x]
            (assoc x :index idx))
          (apply
            concat
            (for [{:keys [db/id edge/type]
                   {from :db/id} :from
                   {to :db/id} :to} edges
                  :let [distance (:edge/distance (get edge-types type))]]
              (cond->
                [{:link [from id]
                  :source (idxs from)
                  :target (idxs id)
                  :distance distance}
                 {:link [id to]
                  :source (idxs id)
                  :target (idxs to)
                  :distance distance}]
                distance
                (conj {:link [from to]
                       :source (idxs from)
                       :target (idxs to)
                       :distance (* 3 distance)})))))))
    (set! (.-name simulation) "Untitled")
    (set! (.-idxs simulation) idxs)))

(defn restart-simulation [simulation]
  (doto simulation
    (.restart)
    (.alpha 1)))

(defn color-for [uid]
  (if uid
    (let [h (hash uid)]
      [(bit-and 0xff h)
       (bit-and 0xff (bit-shift-right h 8))
       (bit-and 0xff (bit-shift-right h 16))])
    [255 255 255]))

(defn scale-rgb [rgb rank-scale]
  (map int (map * rgb (repeat (+ 0.9 (* 0.5 rank-scale))))))

(defn scale-dist [n rank-scale]
  (+ 5 (* (min (max n 10) 30) rank-scale)))

(defn rgb [[r g b]]
  (str "rgb(" r "," g "," b ")"))

(defn md5-hash [s]
  (let [md5 (Md5.)]
    (.update md5 s)
    (crypt/byteArrayToHex (.digest md5))))

(defn gravatar-background [id r email]
  (let [guid (md5-hash (string/trim email))]
    [:g
     [:defs
      [:pattern
       {:id guid
        :pattern-units "userSpaceOnUse"
        :height (* r 2)
        :width (* r 2)
        :pattern-transform (str "translate(" (- r) "," (- r) ")")}
       [:image
        {:height (* r 2)
         :width (* r 2)
         :xlink-href (str "http://www.gravatar.com/avatar/" guid)}]]]
     [:circle
      {:r r
       :fill (str "url(#" guid ")")}]]))

(defn stringify-points [points]
  (->> points
       (partition-all 2)
       (map #(string/join "," %))
       (string/join " ")))

(defn polygon-background [attrs points]
  [:polygon
   (merge attrs {:points (stringify-points points)})])

(defn triangle-background [attrs r]
  (let [h (Math/sqrt (- (* 4 r r) (* r r)))
        y1 (- (/ h 3))
        y2 (- (* 2 y1))
        points [(- r) y1 r y1 0 y2]]
    [polygon-background attrs points]))

(defn rect-background [attrs r]
  [:rect
   (merge attrs
          {:x (- r)
           :y (- r)
           :width (* r 2)
           :height (* r 2)})])

(defn circle-background [attrs r]
  [:circle
   (merge attrs {:r r})])

(def shapes
  {:circle circle-background
   :triangle triangle-background
   :square rect-background})

(defn shape-background [shape r node-color rank-scale selected?]
  [(shapes shape circle-background)
   {:fill (rgb (scale-rgb node-color rank-scale))
    :stroke (if selected?
              "#6699aa"
              "#9ecae1")
    :style {:cursor "pointer"}}
   r])

(def next-shape
  (zipmap (keys shapes) (rest (cycle (keys shapes)))))

(defn email? [s]
  (and (string? s)
       (->> s
            (string/trim)
            (string/upper-case)
            (re-matches #"[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}"))))

(defn draw-node
  [node-types
   {:keys [db/id node/name pagerank shape uid]}
   node-count
   max-pagerank
   simulation
   mouse-down?
   selected-id
   {:keys [shift-click-node]}
   editing]
  (when-let [idxs (.-idxs simulation)]
    (let [particle (aget (.nodes simulation) (idxs id))
          x (.-x particle)
          y (.-y particle)
          selected? (= id @selected-id)
          rank-scale (if max-pagerank (/ pagerank max-pagerank) 0.5)
          r (scale-dist node-count rank-scale)]
      ^{:key id}
      [:g
       {:transform (str "translate(" x "," y ")"
                        (when selected?
                          " scale(1.25,1.25)"))
        :on-double-click
        (fn node-double-click [e]
          (reset! selected-id nil)
          (js-delete particle "fx")
          (js-delete particle "fy")
          (restart-simulation simulation))
        :on-mouse-down
        (fn node-mouse-down [e]
          (.stopPropagation e)
          (.preventDefault e)
          (let [new-selected-id id]
            (when (and shift-click-node (.-shiftKey e) @selected-id new-selected-id)
              (shift-click-node @selected-id new-selected-id))
            (reset! selected-id new-selected-id)
            (reset! editing nil))
          (reset! mouse-down? true))}
       (if (email? name)
         [gravatar-background id r name]
         [shape-background (keyword shape) r (color-for uid) rank-scale selected?])
       [:text.unselectable
        {:text-anchor "middle"
         :font-size (min (max node-count 8) 22)
         :style {:pointer-events "none"
                 :dominant-baseline "central"}}
        name]])))

(defn average [& args]
  (/ (apply + args) (count args)))

(defn rise-over-run [o a]
  (/ (* 180 (js/Math.atan2 o a)) js/Math.PI))

(defn darken [color]
  ;; TODO: implement
  color)

(defn draw-edge [edge-types edge simulation mouse-down? selected-id {:keys [shift-click-edge]} editing]
  (when-let [idxs (.-idxs simulation)]
    (let [{{from :db/id} :from
           {to :db/id} :to
           :keys [db/id edge/type]} edge
          {:keys [edge/color edge/dasharray]} (get edge-types type)
          idx (idxs id)
          particle (aget (.nodes simulation) idx)
          x2 (.-x particle)
          y2 (.-y particle)
          from-particle (aget (.nodes simulation) (idxs from))
          x1 (.-x from-particle)
          y1 (.-y from-particle)
          to-particle (aget (.nodes simulation) (idxs to))
          x3 (.-x to-particle)
          y3 (.-y to-particle)
          selected? (= id @selected-id)]
      ^{:key id}
      [:g
       {:on-double-click
        (fn link-double-click [e]
          (reset! selected-id nil)
          (let [particle (aget (.nodes simulation) idx)]
            (js-delete particle "fx")
            (js-delete particle "fy"))
          (restart-simulation simulation))
        :on-mouse-down
        (fn link-mouse-down [e]
          (.stopPropagation e)
          (.preventDefault e)
          (reset! mouse-down? true)
          (reset! selected-id id)
          (reset! editing nil)
          (when (and shift-click-edge (.-shiftKey e))
            (shift-click-edge edge)))
        :stroke (cond-> (or color "#9ecae1")
                  selected? (darken))}
       [:path
        {:fill "none"
         :stroke-dasharray dasharray
         :d (str "M " x1 "," y1 " Q " x2 "," y2 " " x3 "," y3)}]
       [:polygon
        {:points "0,-5 0,5 12,0"
         :fill (cond-> (or color "#9ecae1")
                 selected? (darken))
         :transform (str "translate(" (/ (+ x1 x2 x2 x3) 4) "," (/ (+ y1 y2 y2 y3) 4)
                         ") rotate(" (rise-over-run (- y3 y1) (- x3 x1)) ")"
                         (when selected?
                           " scale(1.25,1.25)"))
         :style {:cursor "pointer"}}]])))

(defn bounds [[minx miny maxx maxy] simulation-node]
  [(min minx (.-x simulation-node))
   (min miny (.-y simulation-node))
   (max maxx (.-x simulation-node))
   (max maxy (.-y simulation-node))])

(defn normalize-bounds [[minx miny maxx maxy]]
  (let [width (+ 100 (- maxx minx))
        height (+ 100 (- maxy miny))
        width (max width height)
        height (max height width)
        midx (average maxx minx)
        midy (average maxy miny)]
    [(- midx (/ width 2)) (- midy (/ height 2)) width height]))

(defn initial-bounds [simulation-node]
  (if simulation-node
    [(.-x simulation-node)
     (.-y simulation-node)
     (.-x simulation-node)
     (.-y simulation-node)]
    [0 0 0 0]))

(defn update-bounds [g simulation-nodes]
  (assoc g :bounds (normalize-bounds (reduce bounds (initial-bounds (first simulation-nodes)) simulation-nodes))))

(defn draw-svg [node-types edge-types nodes edges snapshot simulation mouse-down? selected-id callbacks editing]
  (let [{:keys [bounds]} @snapshot
        max-pagerank (reduce max (map :pagerank @nodes))
        node-count (count @nodes)]
    [:svg.unselectable
     {:view-box (string/join " " bounds)
      :style {:width "100%"
              :height "100%"}}
     ;; These are forced with parens instead of vector because the simulation updated
     (doall
       (concat
         (for [edge @edges]
           (draw-edge edge-types edge simulation mouse-down? selected-id callbacks editing))
         (for [node @nodes]
           (draw-node node-types node node-count max-pagerank simulation mouse-down? selected-id callbacks editing))))]))

(defn draw-graph [this node-types edge-types nodes edges snapshot simulation mouse-down? selected-id editing root]
  [:div
   {:style {:height "60vh"}
    :on-mouse-down
    (fn graph-mouse-down [e]
      (.preventDefault e)
      (reset! mouse-down? true)
      (reset! selected-id nil)
      (reset! editing nil))
    :on-mouse-up
    (fn graph-mouse-up [e]
      (reset! mouse-down? nil))
    :on-mouse-move
    (fn graph-mouse-move [e]
      (let [elem (dom/dom-node this)
            r (.getBoundingClientRect elem)
            left (.-left r)
            top (.-top r)
            width (.-width r)
            height (.-height r)
            [bx by bw bh] (:bounds @snapshot)
            cx (+ bx (/ bw 2))
            cy (+ by (/ bh 2))
            scale (/ bw (min width height))
            ex (.-clientX e)
            ey (.-clientY e)
            divx (- ex left (/ width 2))
            divy (- ey top (/ height 2))
            x (+ (* divx scale) cx)
            y (+ (* divy scale) cy)]
        (when (and @selected-id @mouse-down?)
          (let [k @selected-id]
            (when-let [idx (get (.-idxs simulation) k)]
              (when-let [particle (aget (.nodes simulation) idx)]
                (set! (.-fx particle) x)
                (set! (.-fy particle) y)
                (restart-simulation simulation)))))))}
   [draw-svg node-types edge-types nodes edges snapshot simulation mouse-down? selected-id root editing]])

;; TODO: nodes should have a stronger charge than links
(defn create-simulation []
  (-> (js/d3.forceSimulation #js [])
      (.force
        "charge"
        (doto (js/d3.forceManyBody)
          (.distanceMax 300)
          (.strength -100)))
      (.force
        "link"
        (doto (js/d3.forceLink #js [])
          (.distance
            (fn [link idx]
              (or (.-distance link) 30)))))))

(defn graph [node-types edge-types nodes edges selected-id editing callbacks]
  (reagent/with-let
    [snapshot (reagent/atom {:bounds [0 0 0 0]
                             :partilces @nodes})
     simulation (create-simulation)
     mouse-down? (reagent/atom nil)
     watch (reagent/track!
             (fn a-graph-watcher []
               (update-simulation simulation node-types edge-types @nodes @edges)
               (restart-simulation simulation)))]
    (.on simulation "tick"
         (fn simulation-tick []
           (swap! snapshot update-bounds (.nodes simulation))))
    [draw-graph (reagent/current-component) node-types edge-types nodes edges snapshot simulation mouse-down? selected-id editing callbacks]
    (finally
      (reagent/dispose! watch)
      (.stop simulation))))

(defcard-rg graph-example
  (fn []
    (let [nodes (reagent/atom [{:index 0 :db/id 0 :name "foo" :uid "zz"}
                               {:index 1 :db/id 1 :name "bar" :uid "zz"}])
          edges (reagent/atom [{:from 0 :to 1}])
          selected-id (reagent/atom nil)
          editing (reagent/atom nil)
          callbacks {}]
      (fn []
        [:div
         {:style {:border "1px solid black"}}
         [graph nodes edges selected-id editing callbacks]]))))
