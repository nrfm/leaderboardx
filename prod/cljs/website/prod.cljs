(ns algopop.leaderboardx.prod
  (:require [algopop.leaderboardx.app.main :as main]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(main/init!)
