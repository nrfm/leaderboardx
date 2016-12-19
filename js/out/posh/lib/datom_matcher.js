// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('posh.lib.datom_matcher');
goog.require('cljs.core');
goog.require('clojure.set');
posh.lib.datom_matcher.datom_match_pattern_QMARK_ = (function posh$lib$datom_matcher$datom_match_pattern_QMARK_(pattern,datom){
while(true){
if(cljs.core.empty_QMARK_(pattern)){
return true;
} else {
if(cljs.core.truth_((function (){var p = cljs.core.first(pattern);
var or__7085__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.cst$sym$_);
if(or__7085__auto__){
return or__7085__auto__;
} else {
var or__7085__auto____$1 = (function (){var and__7073__auto__ = cljs.core.set_QMARK_(p);
if(and__7073__auto__){
var G__23518 = cljs.core.first(datom);
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23518) : p.call(null,G__23518));
} else {
return and__7073__auto__;
}
})();
if(cljs.core.truth_(or__7085__auto____$1)){
return or__7085__auto____$1;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.first(datom));
}
}
})())){
var G__23519 = cljs.core.rest(pattern);
var G__23520 = cljs.core.rest(datom);
pattern = G__23519;
datom = G__23520;
continue;
} else {
return null;
}
}
break;
}
});
posh.lib.datom_matcher.datom_match_QMARK_ = (function posh$lib$datom_matcher$datom_match_QMARK_(patterns,datom){
return cljs.core.some((function (p1__23521_SHARP_){
return posh.lib.datom_matcher.datom_match_pattern_QMARK_(p1__23521_SHARP_,datom);
}),patterns);
});
posh.lib.datom_matcher.any_datoms_match_QMARK_ = (function posh$lib$datom_matcher$any_datoms_match_QMARK_(patterns,datoms){
var G__23524 = patterns;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__23524)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,G__23524)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),G__23524)){
return true;
} else {
return cljs.core.some(((function (G__23524){
return (function (p1__23522_SHARP_){
return posh.lib.datom_matcher.datom_match_QMARK_(patterns,p1__23522_SHARP_);
});})(G__23524))
,datoms);

}
}
}
});
posh.lib.datom_matcher.matching_datoms = (function posh$lib$datom_matcher$matching_datoms(patterns,datoms){
var G__23527 = patterns;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,G__23527)){
return datoms;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),G__23527)){
return datoms;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__23527)){
return null;
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__23527){
return (function (p1__23525_SHARP_){
return posh.lib.datom_matcher.datom_match_QMARK_(patterns,p1__23525_SHARP_);
});})(G__23527))
,datoms);

}
}
}
});
posh.lib.datom_matcher.combine_entids = (function posh$lib$datom_matcher$combine_entids(entids,rest_datom,patterns,new_patterns,leftover_patterns){
while(true){
if(cljs.core.empty_QMARK_(patterns)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$new_DASH_patterns,cljs.core.cons(cljs.core.vec(cljs.core.cons(entids,rest_datom)),new_patterns),cljs.core.cst$kw$leftover_DASH_patterns,leftover_patterns], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rest_datom,cljs.core.rest(cljs.core.first(patterns)))){
var G__23528 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(entids,((cljs.core.set_QMARK_(cljs.core.ffirst(patterns)))?cljs.core.ffirst(patterns):cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ffirst(patterns)], null))));
var G__23529 = rest_datom;
var G__23530 = cljs.core.rest(patterns);
var G__23531 = new_patterns;
var G__23532 = leftover_patterns;
entids = G__23528;
rest_datom = G__23529;
patterns = G__23530;
new_patterns = G__23531;
leftover_patterns = G__23532;
continue;
} else {
var G__23533 = entids;
var G__23534 = rest_datom;
var G__23535 = cljs.core.rest(patterns);
var G__23536 = new_patterns;
var G__23537 = cljs.core.cons(cljs.core.first(patterns),leftover_patterns);
entids = G__23533;
rest_datom = G__23534;
patterns = G__23535;
new_patterns = G__23536;
leftover_patterns = G__23537;
continue;
}
}
break;
}
});
posh.lib.datom_matcher.reduce_patterns = (function posh$lib$datom_matcher$reduce_patterns(patterns){
var new_patterns = cljs.core.PersistentVector.EMPTY;
var leftover_patterns = patterns;
while(true){
if(cljs.core.empty_QMARK_(leftover_patterns)){
return new_patterns;
} else {
if((function (){var id = cljs.core.ffirst(leftover_patterns);
return (cljs.core.set_QMARK_(id)) || (typeof id === 'number');
})()){
var r = posh.lib.datom_matcher.combine_entids(cljs.core.PersistentHashSet.EMPTY,cljs.core.rest(cljs.core.first(leftover_patterns)),leftover_patterns,new_patterns,cljs.core.PersistentVector.EMPTY);
var G__23538 = cljs.core.cst$kw$new_DASH_patterns.cljs$core$IFn$_invoke$arity$1(r);
var G__23539 = cljs.core.cst$kw$leftover_DASH_patterns.cljs$core$IFn$_invoke$arity$1(r);
new_patterns = G__23538;
leftover_patterns = G__23539;
continue;
} else {
var G__23540 = cljs.core.cons(cljs.core.first(leftover_patterns),new_patterns);
var G__23541 = cljs.core.rest(leftover_patterns);
new_patterns = G__23540;
leftover_patterns = G__23541;
continue;
}
}
break;
}
});
