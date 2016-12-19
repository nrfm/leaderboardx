// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('algopop.leaderboardx.app.views.endorse');
goog.require('cljs.core');
goog.require('reagent.session');
goog.require('reagent.core');
algopop.leaderboardx.app.views.endorse.item = (function algopop$leaderboardx$app$views$endorse$item(k,p__45147){
var map__45150 = p__45147;
var map__45150__$1 = ((((!((map__45150 == null)))?((((map__45150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45150):map__45150);
var rank = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45150__$1,cljs.core.cst$kw$rank);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,rank,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$glyphicon$glyphicon_DASH_chevron_DASH_up], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$glyphicon$glyphicon_DASH_chevron_DASH_down], null)], null),k], null);
});
if(typeof algopop.leaderboardx.app.views.endorse.endorsements !== 'undefined'){
} else {
algopop.leaderboardx.app.views.endorse.endorsements = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, ["jordan",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rank,(1)], null),"usain",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rank,(1)], null),"ronaldo",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rank,(2)], null),"leroy jenkins",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rank,(3)], null)], null));
}
algopop.leaderboardx.app.views.endorse.endorse_page = (function algopop$leaderboardx$app$views$endorse$endorse_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$list_DASH_unstyled], null),(function (){var iter__7942__auto__ = (function algopop$leaderboardx$app$views$endorse$endorse_page_$_iter__45170(s__45171){
return (new cljs.core.LazySeq(null,(function (){
var s__45171__$1 = s__45171;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__45171__$1);
if(temp__6753__auto__){
var s__45171__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45171__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__45171__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__45173 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__45172 = (0);
while(true){
if((i__45172 < size__7941__auto__)){
var vec__45182 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__45172);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45182,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45182,(1),null);
cljs.core.chunk_append(b__45173,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.endorse.item,k,v], null)], null));

var G__45188 = (i__45172 + (1));
i__45172 = G__45188;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45173),algopop$leaderboardx$app$views$endorse$endorse_page_$_iter__45170(cljs.core.chunk_rest(s__45171__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45173),null);
}
} else {
var vec__45185 = cljs.core.first(s__45171__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45185,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45185,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.endorse.item,k,v], null)], null),algopop$leaderboardx$app$views$endorse$endorse_page_$_iter__45170(cljs.core.rest(s__45171__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7942__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rank,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(algopop.leaderboardx.app.views.endorse.endorsements) : cljs.core.deref.call(null,algopop.leaderboardx.app.views.endorse.endorsements))));
})())], null);
});
