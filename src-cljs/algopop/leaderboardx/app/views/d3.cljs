(ns algopop.leaderboardx.app.views.d3
  (:require [cljsjs.d3]
            [clojure.string :as string]
            [clojure.walk :as walk]
            [reagent.core :as reagent]))

(defn d3g
  ([g] (d3g g {}))
  ([{:keys [nodes edges title]} existing-nodes]
   (let [ks (keys nodes)
         mids (for [[source targets] edges
                    [target] targets]
                [source target])
         ks (concat mids ks)
         k->idx (into {} (map vector ks (range)))
         new-nodes (for [k ks]
                     (merge {:id k}
                            (get existing-nodes k)
                            (walk/stringify-keys (nodes k))))]
     (clj->js {:title title
               :nodes new-nodes
               :idx k->idx
               :paths (for [[source targets] edges
                            [target] targets]
                        [(k->idx source)
                         (k->idx [source target])
                         (k->idx target)])
               :links (apply concat
                             (for [[source targets] edges
                                   [target] targets]
                               [{:id [source target]
                                 :source (k->idx source)
                                 :target (k->idx [source target])}
                                {:id [source target]
                                 :source (k->idx [source target])
                                 :target (k->idx target)}]))}))))

(defn overwrite [k x y]
  (let [a (aget x k)
        b (aget y k)]
    (set! (.-length a) 0)
    (.apply (.-push a) a b)))

(defn assign [k a b]
  (aset a k (aget b k)))

(defn reconcile [g mutable-graph]
  (let [existing (into {} (for [node (.-nodes mutable-graph)]
                            [(.-id node) (js->clj node)]))
        replacement (d3g g existing)]
    (assign "title" mutable-graph replacement)
    (overwrite "nodes" mutable-graph replacement)
    (assign "idx" mutable-graph replacement)
    (overwrite "paths" mutable-graph replacement)
    (overwrite "links" mutable-graph replacement)))

(def node-color [213 210 255])

(defn scale-rgb [rgb rank-scale]
  (map int (map * rgb (repeat (+ 0.9 (* 0.5 rank-scale))))))

(defn rgb [[r g b]]
  (str "rgb(" r "," g "," b ")"))

(defn draw-node [{:keys [id x y rank pagerank]} n max-pagerank idx mutable-graph force-layout mouse-down? selected-id]
  (let [selected? (= id @selected-id)
        rank-scale (/ pagerank max-pagerank)]
    [:g {:transform (str "translate(" x "," y ")"
                         (when selected?
                           " scale(1.25,1.25)"))
         :on-double-click (fn node-double-click [e]
                            (reset! selected-id nil)
                            (aset mutable-graph "nodes" idx "fixed" 0)
                            (.resume force-layout))
         :on-mouse-down (fn node-mouse-down [e]
                          (.stopPropagation e)
                          (.preventDefault e)
                          (reset! mouse-down? true)
                          (reset! selected-id (aget mutable-graph "nodes" idx "id"))
                          (aset mutable-graph "nodes" idx "fixed" 1))}
     [:circle {:r (+ 5 (* (min (max n 10) 30) rank-scale))
               :fill (rgb (scale-rgb node-color rank-scale))
               :stroke (if selected?
                         "#6699aa"
                         "#9ecae1")
               :style {:cursor "pointer"}}]
     [:text.unselectable {:text-anchor "middle"
                          :font-size (min (max n 8) 22)
                          :style {:pointer-events "none"
                                  :dominant-baseline "central"}}
      id]]))

(defn average [& args]
  (/ (apply + args) (count args)))

(defn rise-over-run [o a]
  (/ (* 180 (js/Math.atan2 o a)) Math.PI))

(defn draw-link [[from mid to :as path] nodes mutable-graph force-layout mouse-down? selected-id]
  (let [{x1 :x y1 :y} (get nodes from)
        {x2 :x y2 :y id :id} (get nodes mid)
        {x3 :x y3 :y} (get nodes to)
        mx (average x1 x2 x2 x3)
        my (average y1 y2 y2 y3)
        selected? (= id (js->clj @selected-id))]
    [:g {:on-double-click
         (fn link-double-click [e]
           (reset! selected-id nil)
           (aset mutable-graph "nodes" mid "fixed" 0)
           (.resume force-layout))
         :on-mouse-down
         (fn link-mouse-down [e]
           (.stopPropagation e)
           (.preventDefault e)
           (reset! mouse-down? true)
           (reset! selected-id (aget mutable-graph "nodes" mid "id"))
           (aset mutable-graph "nodes" mid "fixed" 1))
         :stroke (if selected?
                   "#6699aa"
                   "#9ecae1")}
     [:path {:fill "none"
             :d (apply str (interleave
                            ["M" "," "Q" "," " " ","]
                            (for [idx path
                                  dim [:x :y]]
                              (get-in nodes [idx dim]))))}]
     [:polygon {:points "-5,-5 -5,5 7,0"
                :fill "#9ecae1"
                :transform (str "translate(" mx "," my
                                ") rotate(" (rise-over-run (- y3 y1) (- x3 x1)) ")"
                                (when selected?
                                  " scale(1.25,1.25)"))
                :style {:cursor "pointer"}}]]))

(defn bounds [[minx miny maxx maxy] {:keys [x y]}]
  [(min minx x) (min miny y) (max maxx x) (max maxy y)])

(defn normalize-bounds [[minx miny maxx maxy]]
  (let [width (+ 100 (- maxx minx))
        height (+ 100 (- maxy miny))
        width (max width height)
        height (max height width)
        midx (average maxx minx)
        midy (average maxy miny)]
    [(- midx (/ width 2)) (- midy (/ height 2)) width height]))

(defn update-bounds [g]
  (assoc g :bounds (normalize-bounds (reduce bounds [400 400 600 600] (:nodes g)))))

(defn draw-svg [drawable mutable-graph force-layout mouse-down? selected-id]
  (let [{:keys [nodes paths title bounds]} @drawable
        max-pagerank (reduce max (map :pagerank nodes))]
    (into
     [:svg
      {:view-box (string/join " " bounds)
       :style {:width "100%"
               :height "100%"}}]
     (concat
      (for [path paths]
        [draw-link path nodes mutable-graph force-layout mouse-down? selected-id])
      (for [[node idx] (map vector nodes (range))
            :when (not (vector? (:id node)))]
        [draw-node node (count nodes) max-pagerank idx mutable-graph force-layout mouse-down? selected-id])))))

(defn draw-graph [this drawable mutable-graph force-layout mouse-down? selected-id]
  [:div {:style {:height "60vh"}
         :on-mouse-down (fn graph-mouse-down [e]
                          (.preventDefault e)
                          (reset! mouse-down? true)
                          (reset! selected-id nil))
         :on-mouse-up (fn graph-mouse-up [e]
                        (reset! mouse-down? nil))
         :on-mouse-move (fn graph-mouse-move [e]
                          (let [elem (.getDOMNode this)
                                r (.getBoundingClientRect elem)
                                left (.-left r)
                                top (.-top r)
                                width (.-width r)
                                height (.-height r)
                                [bx by bw bh] (:bounds @drawable)
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
                              (let [k (if (string? @selected-id)
                                        @selected-id
                                        (pr-str (js->clj @selected-id)))]
                                (when-let [idx (aget mutable-graph "idx" k)]
                                  (when-let [node (aget mutable-graph "nodes" idx)]
                                    (aset node "px" x)
                                    (aset node "py" y)
                                    (.resume force-layout)))))))}
   [draw-svg drawable mutable-graph force-layout mouse-down? selected-id]])

(defn create-force-layout [g tick]
  (-> (js/d3.layout.force)
      ;(js/cola.d3adaptor)
      (.nodes (.-nodes g))
      (.links (.-links g))
      ;(.linkDistance 100)
      (.charge -250)
      ;(.chargeDistance 300)
      (.size #js [1000, 1000])
      (.on "tick" tick)))

(defn graph [g selected-id]
  (let [mutable-graph (d3g nil)
        drawable (reagent/atom {})
        size (reagent/atom {})
        force-layout (create-force-layout
                      mutable-graph
                      (fn layout-tick []
                        (reset! drawable (js->clj mutable-graph
                                                  :keywordize-keys true))
                        (swap! drawable update-bounds)))
        mouse-down? (reagent/atom nil)]
    (reagent/create-class
     {:display-name "graph"
      :reagent-render
      (fn graph-render [g selected-id]
        (reconcile g mutable-graph)
        (.start force-layout)
        [draw-graph (reagent/current-component) drawable mutable-graph force-layout mouse-down? selected-id])})))
