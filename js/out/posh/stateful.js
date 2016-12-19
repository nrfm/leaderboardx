// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('posh.stateful');
goog.require('cljs.core');
goog.require('posh.core');
goog.require('posh.lib.db');
goog.require('posh.lib.update');
posh.stateful.get_posh_atom = (function posh$stateful$get_posh_atom(posh_item){
return cljs.core.cst$kw$posh.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(posh_item));
});
posh.stateful.poshdb__GT_conn = (function posh$stateful$poshdb__GT_conn(poshdb){
return cljs.core.cst$kw$conn.cljs$core$IFn$_invoke$arity$1(posh.lib.db.poshdb__GT_attrs((function (){var G__34530 = posh.stateful.get_posh_atom(poshdb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34530) : cljs.core.deref.call(null,G__34530));
})(),poshdb));
});
posh.stateful.new_posh = (function posh$stateful$new_posh(dcfg,retrieve){
var G__34532 = posh.core.empty_tree(dcfg,retrieve);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34532) : cljs.core.atom.call(null,G__34532));
});
posh.stateful.add_db = (function posh$stateful$add_db(posh_atom,db_id,conn,schema,opts){
return cljs.core.with_meta(cljs.core.cst$kw$return.cljs$core$IFn$_invoke$arity$1((function (){var G__34535 = posh_atom;
var G__34536 = posh.core.add_db.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(posh_atom) : cljs.core.deref.call(null,posh_atom)),db_id,conn,schema,opts);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34535,G__34536) : cljs.core.reset_BANG_.call(null,G__34535,G__34536));
})()),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$posh,posh_atom], null));
});
posh.stateful.add_pull = (function posh$stateful$add_pull(poshdb,pull_pattern,eid){
var posh_atom = posh.stateful.get_posh_atom(poshdb);
return cljs.core.with_meta(cljs.core.cst$kw$return.cljs$core$IFn$_invoke$arity$1((function (){var G__34539 = posh_atom;
var G__34540 = posh.core.add_pull((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(posh_atom) : cljs.core.deref.call(null,posh_atom)),poshdb,pull_pattern,eid);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34539,G__34540) : cljs.core.reset_BANG_.call(null,G__34539,G__34540));
})()),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$posh,posh_atom], null));
});
posh.stateful.add_q = (function posh$stateful$add_q(var_args){
var args__8308__auto__ = [];
var len__8301__auto___34545 = arguments.length;
var i__8302__auto___34546 = (0);
while(true){
if((i__8302__auto___34546 < len__8301__auto___34545)){
args__8308__auto__.push((arguments[i__8302__auto___34546]));

var G__34547 = (i__8302__auto___34546 + (1));
i__8302__auto___34546 = G__34547;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((1) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((1)),(0),null)):null);
return posh.stateful.add_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8309__auto__);
});

posh.stateful.add_q.cljs$core$IFn$_invoke$arity$variadic = (function (query,args){
var posh_atom = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.stateful.get_posh_atom,args)));
return cljs.core.with_meta(cljs.core.cst$kw$return.cljs$core$IFn$_invoke$arity$1((function (){var G__34543 = posh_atom;
var G__34544 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(posh.core.add_q,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(posh_atom) : cljs.core.deref.call(null,posh_atom)),query),args);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34543,G__34544) : cljs.core.reset_BANG_.call(null,G__34543,G__34544));
})()),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$posh,posh_atom], null));
});

posh.stateful.add_q.cljs$lang$maxFixedArity = (1);

posh.stateful.add_q.cljs$lang$applyTo = (function (seq34541){
var G__34542 = cljs.core.first(seq34541);
var seq34541__$1 = cljs.core.next(seq34541);
return posh.stateful.add_q.cljs$core$IFn$_invoke$arity$variadic(G__34542,seq34541__$1);
});

posh.stateful.add_filter_tx = (function posh$stateful$add_filter_tx(poshdb,tx_patterns){
var posh_atom = posh.stateful.get_posh_atom(poshdb);
return cljs.core.with_meta(cljs.core.cst$kw$return.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(posh_atom,((function (posh_atom){
return (function (p1__34548_SHARP_){
return posh.core.add_filter_tx(p1__34548_SHARP_,poshdb,tx_patterns);
});})(posh_atom))
)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$posh,posh_atom], null));
});
posh.stateful.add_filter_pull = (function posh$stateful$add_filter_pull(poshdb,pull_pattern,eid){
var posh_atom = posh.stateful.get_posh_atom(poshdb);
return cljs.core.with_meta(cljs.core.cst$kw$return.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(posh_atom,((function (posh_atom){
return (function (p1__34549_SHARP_){
return posh.core.add_filter_pull(p1__34549_SHARP_,poshdb,pull_pattern,eid);
});})(posh_atom))
)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$posh,posh_atom], null));
});
posh.stateful.add_filter_q = (function posh$stateful$add_filter_q(var_args){
var args__8308__auto__ = [];
var len__8301__auto___34553 = arguments.length;
var i__8302__auto___34554 = (0);
while(true){
if((i__8302__auto___34554 < len__8301__auto___34553)){
args__8308__auto__.push((arguments[i__8302__auto___34554]));

var G__34555 = (i__8302__auto___34554 + (1));
i__8302__auto___34554 = G__34555;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((1) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((1)),(0),null)):null);
return posh.stateful.add_filter_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8309__auto__);
});

posh.stateful.add_filter_q.cljs$core$IFn$_invoke$arity$variadic = (function (query,args){
var posh_atom = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.stateful.get_posh_atom,args)));
return cljs.core.with_meta(cljs.core.cst$kw$return.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(posh_atom,((function (posh_atom){
return (function (p1__34550_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(posh.core.add_filter_q,p1__34550_SHARP_,query,args);
});})(posh_atom))
)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$posh,posh_atom], null));
});

posh.stateful.add_filter_q.cljs$lang$maxFixedArity = (1);

posh.stateful.add_filter_q.cljs$lang$applyTo = (function (seq34551){
var G__34552 = cljs.core.first(seq34551);
var seq34551__$1 = cljs.core.next(seq34551);
return posh.stateful.add_filter_q.cljs$core$IFn$_invoke$arity$variadic(G__34552,seq34551__$1);
});

posh.stateful.rm = (function posh$stateful$rm(posh_item){
var posh_atom = posh.stateful.get_posh_atom(posh_item);
var G__34558 = posh_atom;
var G__34559 = posh.core.remove_item((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(posh_atom) : cljs.core.deref.call(null,posh_atom)),posh_item);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34558,G__34559) : cljs.core.reset_BANG_.call(null,G__34558,G__34559));
});
posh.stateful.transact = (function posh$stateful$transact(posh_item,tx){
var posh_atom = posh.stateful.get_posh_atom(posh_item);
var G__34562_34564 = posh_atom;
var G__34563_34565 = posh.core.add_tx((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(posh_atom) : cljs.core.deref.call(null,posh_atom)),posh_item,tx);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34562_34564,G__34563_34565) : cljs.core.reset_BANG_.call(null,G__34562_34564,G__34563_34565));

return true;
});
posh.stateful.transact_all_BANG_ = (function posh$stateful$transact_all_BANG_(posh_atom){
var G__34568 = posh_atom;
var G__34569 = posh.core.process_tx_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(posh_atom) : cljs.core.deref.call(null,posh_atom)));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34568,G__34569) : cljs.core.reset_BANG_.call(null,G__34568,G__34569));
});
posh.stateful.cache = (function posh$stateful$cache(posh_query){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cache.cljs$core$IFn$_invoke$arity$1((function (){var G__34571 = posh.stateful.get_posh_atom(posh_query);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34571) : cljs.core.deref.call(null,G__34571));
})()),posh_query);
});
posh.stateful.results = (function posh$stateful$results(posh_query){
return cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cache.cljs$core$IFn$_invoke$arity$1((function (){var G__34573 = posh.stateful.get_posh_atom(posh_query);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34573) : cljs.core.deref.call(null,G__34573));
})()),posh_query));
});
posh.stateful.reload_patterns = (function posh$stateful$reload_patterns(posh_query){
return cljs.core.cst$kw$reload_DASH_patterns.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cache.cljs$core$IFn$_invoke$arity$1((function (){var G__34575 = posh.stateful.get_posh_atom(posh_query);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34575) : cljs.core.deref.call(null,G__34575));
})()),posh_query));
});
posh.stateful.pass_patterns = (function posh$stateful$pass_patterns(posh_query){
return cljs.core.cst$kw$pass_DASH_patterns.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cache.cljs$core$IFn$_invoke$arity$1((function (){var G__34577 = posh.stateful.get_posh_atom(posh_query);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34577) : cljs.core.deref.call(null,G__34577));
})()),posh_query));
});
posh.stateful.datoms = (function posh$stateful$datoms(posh_query){
return cljs.core.cst$kw$datoms.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cache.cljs$core$IFn$_invoke$arity$1((function (){var G__34579 = posh.stateful.get_posh_atom(posh_query);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34579) : cljs.core.deref.call(null,G__34579));
})()),posh_query));
});
posh.stateful.datoms_t = (function posh$stateful$datoms_t(posh_query){
return cljs.core.cst$kw$datoms_DASH_t.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cache.cljs$core$IFn$_invoke$arity$1((function (){var G__34581 = posh.stateful.get_posh_atom(posh_query);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34581) : cljs.core.deref.call(null,G__34581));
})()),posh_query));
});
