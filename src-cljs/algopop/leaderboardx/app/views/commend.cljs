(ns algopop.leaderboardx.app.views.commend
  (:require [reagent.session :as session]
            [reagent.core :as reagent]))

(defn item [k {:keys [rank]}]
  [:div
   rank
   [:button.btn.btn-default [:span.glyphicon.glyphicon-chevron-up]]
   [:button.btn.btn-default [:span.glyphicon.glyphicon-chevron-down]]
   k])

(defonce commendations
  (reagent/atom {"jordan" {:rank 1}
                 "usain" {:rank 1}
                 "ronaldo" {:rank 2}
                 "leroy jenkins" {:rank 3}}))

;; TODO: pass in session instead
(defn commend-page []
  [:div
   (into [:ul.list-unstyled]
         (for [[k v] (sort-by :rank @commendations)]
           [:li [item k v]]))])
