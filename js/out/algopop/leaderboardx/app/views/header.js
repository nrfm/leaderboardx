// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('algopop.leaderboardx.app.views.header');
goog.require('cljs.core');
goog.require('algopop.leaderboardx.app.routes');
goog.require('reagent.session');
algopop.leaderboardx.app.views.header.notifications = (function algopop$leaderboardx$app$views$header$notifications(){
var temp__6753__auto__ = reagent.session.get(cljs.core.cst$kw$errors);
if(cljs.core.truth_(temp__6753__auto__)){
var e = temp__6753__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (e,temp__6753__auto__){
return (function algopop$leaderboardx$app$views$header$notifications_$_error_click(e__$1){
return reagent.session.update_in_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors], null),cljs.core.next);
});})(e,temp__6753__auto__))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$navbar_DASH_text,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$glyphicon$glyphicon_DASH_exclamation_DASH_sign], null),[cljs.core.str(" "),cljs.core.str(cljs.core.first(e))].join('')], null)], null);
} else {
return null;
}
});
algopop.leaderboardx.app.views.header.user_menu = (function algopop$leaderboardx$app$views$header$user_menu(){
var username = "tim";
if(cljs.core.truth_(username)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$dropdown,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$dropdown_DASH_toggle,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#",cljs.core.cst$kw$data_DASH_toggle,"dropdown"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kbd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$glyphicon$glyphicon_DASH_user], null),[cljs.core.str(" "),cljs.core.str(username)].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$caret], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$dropdown_DASH_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$role,"menu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#"], null),"preferences"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#"], null),"logout"], null)], null)], null)], null);
} else {
return null;
}
});
algopop.leaderboardx.app.views.header.header = (function algopop$leaderboardx$app$views$header$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav$navbar$navbar_DASH_inverse,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$role,"navigation"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container_DASH_fluid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$navbar_DASH_header,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$navbar_DASH_toggle$collapsed,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$data_DASH_toggle,"collapse",cljs.core.cst$kw$data_DASH_target,"#navbar-collapse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$sr_DASH_only,"Toggle navigation"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$icon_DASH_bar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$icon_DASH_bar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$icon_DASH_bar], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$navbar_DASH_brand,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$panel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"img/brand.png",cljs.core.cst$kw$height,"40px"], null)], null),"  Leaderboard",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,"cursive"], null)], null),"X"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$collapse$navbar_DASH_collapse,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"navbar-collapse"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$nav$navbar_DASH_nav$navbar_DASH_right], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.header.notifications], null)], null),(function (){var iter__7942__auto__ = (function algopop$leaderboardx$app$views$header$header_$_iter__45357(s__45358){
return (new cljs.core.LazySeq(null,(function (){
var s__45358__$1 = s__45358;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__45358__$1);
if(temp__6753__auto__){
var s__45358__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45358__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__45358__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__45360 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__45359 = (0);
while(true){
if((i__45359 < size__7941__auto__)){
var vec__45369 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__45359);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45369,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45369,(1),null);
cljs.core.chunk_append(b__45360,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/"),cljs.core.str(cljs.core.name(k))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kbd,cljs.core.name(k)], null)], null)], null));

var G__45375 = (i__45359 + (1));
i__45359 = G__45375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45360),algopop$leaderboardx$app$views$header$header_$_iter__45357(cljs.core.chunk_rest(s__45358__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45360),null);
}
} else {
var vec__45372 = cljs.core.first(s__45358__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45372,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45372,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/"),cljs.core.str(cljs.core.name(k))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kbd,cljs.core.name(k)], null)], null)], null),algopop$leaderboardx$app$views$header$header_$_iter__45357(cljs.core.rest(s__45358__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7942__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.key,algopop.leaderboardx.app.routes.view));
})()))], null)], null)], null)], null);
});
