(ns algopop.leaderboardx.app.views.about)

(defn about-page []
  [:div
   [:div.jumbotron
    [:h2 "Welcome to Leaderboard" [:span {:style {:font-family "cursive"}} "X"]]
    [:p "How do you rank?"]]
   [:div
    [:p "Contact timothypratley@gmail.com if you like this."]]])