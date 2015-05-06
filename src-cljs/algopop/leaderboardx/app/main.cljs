(ns algopop.leaderboardx.app.main
  (:require [algopop.leaderboardx.app.communication :as communication]
            [algopop.leaderboardx.app.views.header :as header]
            [algopop.leaderboardx.app.views.about :as about]
            [algopop.leaderboardx.app.views.home :as home]
            [algopop.leaderboardx.app.views.graph :as graph]
            [reagent.core :as reagent]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [cljsjs.react :as react])
  (:import goog.History))

;; -------------------------
;; Routes

(def page {:home #'home/home-page
           :about #'about/about-page
           :graph #'graph/graph-page})

(defn current-page []
  [:div.container
   [header/header]
   [:div.well
    [(page (session/get-in [:viewpoint :current-page]))]]])

(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (session/assoc-in! [:viewpoint :current-page] :home))
(secretary/defroute "/about" []
  (session/assoc-in! [:viewpoint :current-page] :about))
(secretary/defroute "/graph" []
  (session/assoc-in! [:viewpoint :current-page] :graph))
(secretary/defroute "*" []
  (session/assoc-in! [:viewpoint :current-page] :home))

;; TODO: reflect

;; -------------------------
;; History
;; must be called after routes have been defined

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (hook-browser-navigation!)
  (mount-root))