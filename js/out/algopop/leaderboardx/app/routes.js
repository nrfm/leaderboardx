// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('algopop.leaderboardx.app.routes');
goog.require('cljs.core');
goog.require('algopop.leaderboardx.app.views.graph_editor');
goog.require('algopop.leaderboardx.app.views.settings');
goog.require('bidi.bidi');
goog.require('algopop.leaderboardx.app.views.about');
goog.require('algopop.leaderboardx.app.views.details');
goog.require('algopop.leaderboardx.app.views.coach_player');
goog.require('algopop.leaderboardx.app.views.graph_table');
goog.require('algopop.leaderboardx.app.views.assess');
goog.require('algopop.leaderboardx.app.views.coach');
goog.require('algopop.leaderboardx.app.views.endorse');
algopop.leaderboardx.app.routes.view = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$about,new cljs.core.Var(function(){return algopop.leaderboardx.app.views.about.about_page;},cljs.core.cst$sym$algopop$leaderboardx$app$views$about_SLASH_about_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$algopop$leaderboardx$app$views$about,cljs.core.cst$sym$about_DASH_page,"/Users/timothypratley/git/leaderboardx/src/algopop/leaderboardx/app/views/about.cljs",17,1,3,3,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(algopop.leaderboardx.app.views.about.about_page)?algopop.leaderboardx.app.views.about.about_page.cljs$lang$test:null)])),cljs.core.cst$kw$graph_DASH_editor,new cljs.core.Var(function(){return algopop.leaderboardx.app.views.graph_editor.graph_editor_page;},cljs.core.cst$sym$algopop$leaderboardx$app$views$graph_DASH_editor_SLASH_graph_DASH_editor_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$algopop$leaderboardx$app$views$graph_DASH_editor,cljs.core.cst$sym$graph_DASH_editor_DASH_page,"/Users/timothypratley/git/leaderboardx/src/algopop/leaderboardx/app/views/graph_editor.cljs",24,1,70,70,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(algopop.leaderboardx.app.views.graph_editor.graph_editor_page)?algopop.leaderboardx.app.views.graph_editor.graph_editor_page.cljs$lang$test:null)]))], null);
algopop.leaderboardx.app.routes.routes = (function (){var ks = cljs.core.keys(algopop.leaderboardx.app.routes.view);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,ks),ks),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assess/",cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$assessee,"/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword,cljs.core.cst$kw$type], null),"/",cljs.core.cst$kw$date], null),cljs.core.cst$kw$assess], true, false)], null))], null);
})();
algopop.leaderboardx.app.routes.match = (function algopop$leaderboardx$app$routes$match(s){
return bidi.bidi.match_route(algopop.leaderboardx.app.routes.routes,s);
});
algopop.leaderboardx.app.routes.page = (function algopop$leaderboardx$app$routes$page(p__45332){
var map__45335 = p__45332;
var map__45335__$1 = ((((!((map__45335 == null)))?((((map__45335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45335.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45335):map__45335);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45335__$1,cljs.core.cst$kw$handler);
var route_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45335__$1,cljs.core.cst$kw$route_DASH_params);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(algopop.leaderboardx.app.routes.view.cljs$core$IFn$_invoke$arity$2 ? algopop.leaderboardx.app.routes.view.cljs$core$IFn$_invoke$arity$2(handler,algopop.leaderboardx.app.views.about.about_page) : algopop.leaderboardx.app.routes.view.call(null,handler,algopop.leaderboardx.app.views.about.about_page)),route_params], null);
});
