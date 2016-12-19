// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('algopop.leaderboardx.app.main');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('algopop.leaderboardx.app.db');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('algopop.leaderboardx.app.routes');
goog.require('goog.History');
goog.require('goog.events');
goog.require('algopop.leaderboardx.app.views.header');
algopop.leaderboardx.app.main.container = (function algopop$leaderboardx$app$main$container(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.header.header], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$well,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.routes.page,reagent.session.get_in(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$viewpoint,cljs.core.cst$kw$route], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$well,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"disqus_thread"], null)], null)], null)], null);
});
algopop.leaderboardx.app.main.navigation = (function algopop$leaderboardx$app$main$navigation(event){
return reagent.session.assoc_in_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$viewpoint,cljs.core.cst$kw$route], null),algopop.leaderboardx.app.routes.match(event.token));
});
algopop.leaderboardx.app.main.hook_browser_navigation_BANG_ = (function algopop$leaderboardx$app$main$hook_browser_navigation_BANG_(){
var G__45379 = (new goog.History());
goog.events.listen(G__45379,goog.history.EventType.NAVIGATE,algopop.leaderboardx.app.main.navigation);

G__45379.setEnabled(true);

return G__45379;
});
algopop.leaderboardx.app.main.mount_root = (function algopop$leaderboardx$app$main$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return algopop.leaderboardx.app.main.container;},cljs.core.cst$sym$algopop$leaderboardx$app$main_SLASH_container,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$algopop$leaderboardx$app$main,cljs.core.cst$sym$container,"/Users/timothypratley/git/leaderboardx/src/algopop/leaderboardx/app/main.cljs",16,1,13,13,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(algopop.leaderboardx.app.main.container)?algopop.leaderboardx.app.main.container.cljs$lang$test:null)]))], null),goog.dom.getElement("app"));
});
algopop.leaderboardx.app.main.init_BANG_ = (function algopop$leaderboardx$app$main$init_BANG_(){
algopop.leaderboardx.app.main.hook_browser_navigation_BANG_();

return algopop.leaderboardx.app.main.mount_root();
});
algopop.leaderboardx.app.main.main = (function algopop$leaderboardx$app$main$main(){
return algopop.leaderboardx.app.main.init_BANG_();
});
goog.exportSymbol('algopop.leaderboardx.app.main.main', algopop.leaderboardx.app.main.main);
