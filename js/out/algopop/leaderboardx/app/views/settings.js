// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('algopop.leaderboardx.app.views.settings');
goog.require('cljs.core');
goog.require('reagent.session');
algopop.leaderboardx.app.views.settings.settings_view = (function algopop$leaderboardx$app$views$settings$settings_view(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"hello"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"text"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
reagent.session.assoc_in_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$viewpoint,cljs.core.cst$kw$route,cljs.core.cst$kw$foo], null),"bar");

return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["S",reagent.session.state], 0));
})], null),"doit"], null)], null);
});
