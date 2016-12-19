// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('posh.lib.util');
goog.require('cljs.core');
posh.lib.util.exception = (function posh$lib$util$exception(msg){
throw (new Error(msg));
});
posh.lib.util.t_for_datoms = (function posh$lib$util$t_for_datoms(q_fn,db,datoms){
var G__28625 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$_QMARK_a,cljs.core.cst$sym$_QMARK_v,cljs.core.cst$sym$_QMARK_t,cljs.core.cst$kw$in,cljs.core.cst$sym$$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$_QMARK_a,cljs.core.cst$sym$_QMARK_v], null),cljs.core.cst$sym$$$$], null),cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$_QMARK_a,cljs.core.cst$sym$_,cljs.core.cst$sym$_QMARK_t], null)], null);
var G__28626 = db;
var G__28627 = datoms;
return (q_fn.cljs$core$IFn$_invoke$arity$3 ? q_fn.cljs$core$IFn$_invoke$arity$3(G__28625,G__28626,G__28627) : q_fn.call(null,G__28625,G__28626,G__28627));
});
