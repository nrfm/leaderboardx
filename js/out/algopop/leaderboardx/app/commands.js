// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('algopop.leaderboardx.app.commands');
goog.require('cljs.core');
goog.require('reagent.session');
algopop.leaderboardx.app.commands.save = (function algopop$leaderboardx$app$commands$save(m){
var now = (new Date());
reagent.session.assoc_in_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$viewpoint,cljs.core.cst$kw$route,cljs.core.cst$kw$commands,now], null),m);

return now;
});
