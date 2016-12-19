// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('posh.reagent');
goog.require('cljs.core');
goog.require('posh.core');
goog.require('posh.stateful');
goog.require('posh.lib.update');
goog.require('reagent.ratom');
goog.require('reagent.core');
goog.require('posh.lib.db');
goog.require('datascript.core');
posh.reagent.dcfg = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$db,datascript.core.db,cljs.core.cst$kw$pull,datascript.core.pull,cljs.core.cst$kw$q,datascript.core.q,cljs.core.cst$kw$filter,datascript.core.filter,cljs.core.cst$kw$with,datascript.core.with$,cljs.core.cst$kw$entid,datascript.core.entid,cljs.core.cst$kw$transact_BANG_,datascript.core.transact_BANG_], null);
posh.reagent.set_conn_listener_BANG_ = (function posh$reagent$set_conn_listener_BANG_(posh_atom,conn,db_id){
var posh_vars = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$posh_DASH_atom,posh_atom,cljs.core.cst$kw$db_DASH_id,db_id], null);
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.cst$kw$posh_DASH_dispenser,((function (posh_vars){
return (function (var$){
if((var$ instanceof cljs.core.Keyword)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(posh_vars,var$);
} else {
return null;
}
});})(posh_vars))
);

cljs.core.add_watch(conn,cljs.core.cst$kw$posh_DASH_schema_DASH_listener,((function (posh_vars){
return (function (key,ref,old_state,new_state){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(old_state),cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(new_state))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(posh_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,db_id], null),cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(new_state));
} else {
return null;
}
});})(posh_vars))
);

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.cst$kw$posh_DASH_listener,((function (posh_vars){
return (function (tx_report){
var map__34600 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(posh_atom,posh.core.after_transact,cljs.core.PersistentArrayMap.fromArray([conn,tx_report], true, false));
var map__34600__$1 = ((((!((map__34600 == null)))?((((map__34600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34600.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34600):map__34600);
var ratoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34600__$1,cljs.core.cst$kw$ratoms);
var changed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34600__$1,cljs.core.cst$kw$changed);
var seq__34602 = cljs.core.seq(changed);
var chunk__34603 = null;
var count__34604 = (0);
var i__34605 = (0);
while(true){
if((i__34605 < count__34604)){
var vec__34606 = chunk__34603.cljs$core$IIndexed$_nth$arity$2(null,i__34605);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34606,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34606,(1),null);
var G__34609_34616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ratoms,k);
var G__34610_34617 = cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(v);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34609_34616,G__34610_34617) : cljs.core.reset_BANG_.call(null,G__34609_34616,G__34610_34617));

var G__34618 = seq__34602;
var G__34619 = chunk__34603;
var G__34620 = count__34604;
var G__34621 = (i__34605 + (1));
seq__34602 = G__34618;
chunk__34603 = G__34619;
count__34604 = G__34620;
i__34605 = G__34621;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__34602);
if(temp__6753__auto__){
var seq__34602__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34602__$1)){
var c__7991__auto__ = cljs.core.chunk_first(seq__34602__$1);
var G__34622 = cljs.core.chunk_rest(seq__34602__$1);
var G__34623 = c__7991__auto__;
var G__34624 = cljs.core.count(c__7991__auto__);
var G__34625 = (0);
seq__34602 = G__34622;
chunk__34603 = G__34623;
count__34604 = G__34624;
i__34605 = G__34625;
continue;
} else {
var vec__34611 = cljs.core.first(seq__34602__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34611,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34611,(1),null);
var G__34614_34626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ratoms,k);
var G__34615_34627 = cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(v);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34614_34626,G__34615_34627) : cljs.core.reset_BANG_.call(null,G__34614_34626,G__34615_34627));

var G__34628 = cljs.core.next(seq__34602__$1);
var G__34629 = null;
var G__34630 = (0);
var G__34631 = (0);
seq__34602 = G__34628;
chunk__34603 = G__34629;
count__34604 = G__34630;
i__34605 = G__34631;
continue;
}
} else {
return null;
}
}
break;
}
});})(posh_vars))
);

return conn;
});
posh.reagent.posh_BANG_ = (function posh$reagent$posh_BANG_(var_args){
var args__8308__auto__ = [];
var len__8301__auto___34637 = arguments.length;
var i__8302__auto___34638 = (0);
while(true){
if((i__8302__auto___34638 < len__8301__auto___34637)){
args__8308__auto__.push((arguments[i__8302__auto___34638]));

var G__34639 = (i__8302__auto___34638 + (1));
i__8302__auto___34638 = G__34639;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((0) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((0)),(0),null)):null);
return posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__8309__auto__);
});

posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (conns){
var posh_atom = (function (){var G__34633 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34633) : cljs.core.atom.call(null,G__34633));
})();
var G__34634 = posh_atom;
var G__34635 = (function (){var n = (0);
var conns__$1 = conns;
var posh_tree = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh.core.empty_tree(posh.reagent.dcfg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$results], null)),cljs.core.cst$kw$ratoms,cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([cljs.core.cst$kw$reactions,cljs.core.PersistentArrayMap.EMPTY], 0));
while(true){
if(cljs.core.empty_QMARK_(conns__$1)){
return posh_tree;
} else {
var G__34640 = (n + (1));
var G__34641 = cljs.core.rest(conns__$1);
var G__34642 = (function (){var db_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str("conn"),cljs.core.str(n)].join(''));
return posh.core.add_db.cljs$core$IFn$_invoke$arity$4(posh_tree,db_id,posh.reagent.set_conn_listener_BANG_(posh_atom,cljs.core.first(conns__$1),db_id),cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1((function (){var G__34636 = cljs.core.first(conns__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34636) : cljs.core.deref.call(null,G__34636));
})()));
})();
n = G__34640;
conns__$1 = G__34641;
posh_tree = G__34642;
continue;
}
break;
}
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34634,G__34635) : cljs.core.reset_BANG_.call(null,G__34634,G__34635));
});

posh.reagent.posh_BANG_.cljs$lang$maxFixedArity = (0);

posh.reagent.posh_BANG_.cljs$lang$applyTo = (function (seq34632){
return posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34632));
});

posh.reagent.get_conn_var = (function posh$reagent$get_conn_var(conn,var$){
return cljs.core.cst$kw$posh_DASH_dispenser.cljs$core$IFn$_invoke$arity$1((function (){var G__34644 = cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34644) : cljs.core.deref.call(null,G__34644));
})()).call(null,var$);
});
posh.reagent.get_posh_atom = (function posh$reagent$get_posh_atom(poshdb_or_conn){
if(cljs.core.truth_(datascript.core.conn_QMARK_(poshdb_or_conn))){
return posh.reagent.get_conn_var(poshdb_or_conn,cljs.core.cst$kw$posh_DASH_atom);
} else {
return posh.stateful.get_posh_atom(poshdb_or_conn);
}
});
posh.reagent.get_db = (function posh$reagent$get_db(poshdb_or_conn){
if(cljs.core.truth_(datascript.core.conn_QMARK_(poshdb_or_conn))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,posh.reagent.get_conn_var(poshdb_or_conn,cljs.core.cst$kw$db_DASH_id)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$posh,posh.reagent.get_conn_var(poshdb_or_conn,cljs.core.cst$kw$posh_DASH_atom)], null));
} else {
return poshdb_or_conn;
}
});
posh.reagent.rm_posh_item = (function posh$reagent$rm_posh_item(posh_atom,storage_key){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(posh_atom,(function (posh_atom_val){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh.core.remove_item(posh_atom_val,storage_key),cljs.core.cst$kw$ratoms,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ratoms.cljs$core$IFn$_invoke$arity$1(posh_atom_val),storage_key),cljs.core.array_seq([cljs.core.cst$kw$reactions,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reactions.cljs$core$IFn$_invoke$arity$1(posh_atom_val),storage_key)], 0));
}));
});
posh.reagent.make_query_reaction = (function posh$reagent$make_query_reaction(var_args){
var args34645 = [];
var len__8301__auto___34648 = arguments.length;
var i__8302__auto___34649 = (0);
while(true){
if((i__8302__auto___34649 < len__8301__auto___34648)){
args34645.push((arguments[i__8302__auto___34649]));

var G__34650 = (i__8302__auto___34649 + (1));
i__8302__auto___34649 = G__34650;
continue;
} else {
}
break;
}

var G__34647 = args34645.length;
switch (G__34647) {
case 4:
return posh.reagent.make_query_reaction.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return posh.reagent.make_query_reaction.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34645.length)].join('')));

}
});

posh.reagent.make_query_reaction.cljs$core$IFn$_invoke$arity$4 = (function (posh_atom,storage_key,add_query_fn,options){
var temp__6751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reactions.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(posh_atom) : cljs.core.deref.call(null,posh_atom))),storage_key);
if(cljs.core.truth_(temp__6751__auto__)){
var r = temp__6751__auto__;
return r;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reactions.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(posh_atom,((function (temp__6751__auto__){
return (function (posh_atom_val){
var posh_atom_with_query = (add_query_fn.cljs$core$IFn$_invoke$arity$1 ? add_query_fn.cljs$core$IFn$_invoke$arity$1(posh_atom_val) : add_query_fn.call(null,posh_atom_val));
var query_result = cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cache.cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key));
var query_ratom = (function (){var or__7085__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ratoms.cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(query_result);
}
})();
var query_reaction = reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(((function (posh_atom_with_query,query_result,query_ratom,temp__6751__auto__){
return (function (){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(query_ratom) : cljs.core.deref.call(null,query_ratom));
});})(posh_atom_with_query,query_result,query_ratom,temp__6751__auto__))
,cljs.core.array_seq([cljs.core.cst$kw$on_DASH_dispose,((function (posh_atom_with_query,query_result,query_ratom,temp__6751__auto__){
return (function (_,___$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cache.cljs$core$IFn$_invoke$arity$1(options),cljs.core.cst$kw$forever)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(posh_atom,((function (posh_atom_with_query,query_result,query_ratom,temp__6751__auto__){
return (function (posh_atom_val__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh.core.remove_item(posh_atom_val__$1,storage_key),cljs.core.cst$kw$ratoms,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ratoms.cljs$core$IFn$_invoke$arity$1(posh_atom_val__$1),storage_key),cljs.core.array_seq([cljs.core.cst$kw$reactions,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reactions.cljs$core$IFn$_invoke$arity$1(posh_atom_val__$1),storage_key)], 0));
});})(posh_atom_with_query,query_result,query_ratom,temp__6751__auto__))
);
}
});})(posh_atom_with_query,query_result,query_ratom,temp__6751__auto__))
], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh_atom_with_query,cljs.core.cst$kw$ratoms,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$ratoms.cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key,query_ratom),cljs.core.array_seq([cljs.core.cst$kw$reactions,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$reactions.cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key,query_reaction)], 0));
});})(temp__6751__auto__))
)),storage_key);
}
});

posh.reagent.make_query_reaction.cljs$core$IFn$_invoke$arity$3 = (function (posh_atom,storage_key,add_query_fn){
return posh.reagent.make_query_reaction.cljs$core$IFn$_invoke$arity$4(posh_atom,storage_key,add_query_fn,cljs.core.PersistentArrayMap.EMPTY);
});

posh.reagent.make_query_reaction.cljs$lang$maxFixedArity = 4;

/**
 * Returns a reaction of a pull expression. The options argument may specify `:cache :forever`, which keeps query results
 *   cached indefinitely, even if the reaction is disposed.
 */
posh.reagent.pull = (function posh$reagent$pull(var_args){
var args34653 = [];
var len__8301__auto___34656 = arguments.length;
var i__8302__auto___34657 = (0);
while(true){
if((i__8302__auto___34657 < len__8301__auto___34656)){
args34653.push((arguments[i__8302__auto___34657]));

var G__34658 = (i__8302__auto___34657 + (1));
i__8302__auto___34657 = G__34658;
continue;
} else {
}
break;
}

var G__34655 = args34653.length;
switch (G__34655) {
case 4:
return posh.reagent.pull.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return posh.reagent.pull.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34653.length)].join('')));

}
});

posh.reagent.pull.cljs$core$IFn$_invoke$arity$4 = (function (poshdb,pull_pattern,eid,options){
var true_poshdb = posh.reagent.get_db(poshdb);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pull,true_poshdb,pull_pattern,eid], null);
var posh_atom = posh.reagent.get_posh_atom(poshdb);
return posh.reagent.make_query_reaction.cljs$core$IFn$_invoke$arity$4(posh_atom,storage_key,((function (true_poshdb,storage_key,posh_atom){
return (function (p1__34652_SHARP_){
return posh.core.add_pull(p1__34652_SHARP_,true_poshdb,pull_pattern,eid);
});})(true_poshdb,storage_key,posh_atom))
,options);
});

posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 = (function (poshdb,pull_pattern,eid){
return posh.reagent.pull.cljs$core$IFn$_invoke$arity$4(poshdb,pull_pattern,eid,cljs.core.PersistentArrayMap.EMPTY);
});

posh.reagent.pull.cljs$lang$maxFixedArity = 4;

posh.reagent.pull_info = (function posh$reagent$pull_info(poshdb,pull_pattern,eid){
var true_poshdb = posh.reagent.get_db(poshdb);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pull,true_poshdb,pull_pattern,eid], null);
var posh_atom = posh.reagent.get_posh_atom(poshdb);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(posh.lib.update.update_pull((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(posh_atom) : cljs.core.deref.call(null,posh_atom)),storage_key),cljs.core.cst$kw$reload_DASH_fn);
});
posh.reagent.pull_tx = (function posh$reagent$pull_tx(tx_patterns,poshdb,pull_pattern,eid){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["pull-tx is deprecated. Calling pull without your tx-patterns."], 0));

return posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(poshdb,pull_pattern,eid);
});
posh.reagent.parse_q_query = (function posh$reagent$parse_q_query(query){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__34664,query_item){
var vec__34665 = p__34664;
var parsed_query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34665,(0),null);
var last_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34665,(1),null);
if((query_item instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parsed_query,query_item,cljs.core.PersistentVector.EMPTY),query_item], null);
} else {
if(cljs.core.truth_(last_key)){
} else {
throw (new Error("Assert failed: last-key"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$4(parsed_query,last_key,cljs.core.conj,query_item),last_key], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,null], null),query));
});
posh.reagent.q_args_count = (function posh$reagent$q_args_count(query){
var parsed_query = posh.reagent.parse_q_query(query);
var temp__6751__auto__ = cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(parsed_query);
if(cljs.core.truth_(temp__6751__auto__)){
var in_clause = temp__6751__auto__;
return cljs.core.count(in_clause);
} else {
return (1);
}
});
/**
 * Returns a datalog query reaction. If args count doens't match the query's input count, a final options map argument
 *   is accepted. This options map may specify `:cache :forever`, which keeps query results cached even if the reaction is
 *   disposed.
 */
posh.reagent.q = (function posh$reagent$q(var_args){
var args__8308__auto__ = [];
var len__8301__auto___34675 = arguments.length;
var i__8302__auto___34676 = (0);
while(true){
if((i__8302__auto___34676 < len__8301__auto___34675)){
args__8308__auto__.push((arguments[i__8302__auto___34676]));

var G__34677 = (i__8302__auto___34676 + (1));
i__8302__auto___34676 = G__34677;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((1) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((1)),(0),null)):null);
return posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8309__auto__);
});

posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic = (function (query,args){
var n_query_args = posh.reagent.q_args_count(query);
var vec__34672 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n_query_args,cljs.core.count(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n_query_args,(cljs.core.count(args) + (1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.butlast(args),cljs.core.last(args)], null):null));
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34672,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34672,(1),null);
var true_poshdb_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (n_query_args,vec__34672,args__$1,options){
return (function (p1__34668_SHARP_){
if(cljs.core.truth_(datascript.core.conn_QMARK_(p1__34668_SHARP_))){
return posh.reagent.get_db(p1__34668_SHARP_);
} else {
return p1__34668_SHARP_;
}
});})(n_query_args,vec__34672,args__$1,options))
,args__$1);
var posh_atom = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.reagent.get_posh_atom,args__$1)));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$q,query,true_poshdb_args], null);
return posh.reagent.make_query_reaction.cljs$core$IFn$_invoke$arity$4(posh_atom,storage_key,((function (n_query_args,vec__34672,args__$1,options,true_poshdb_args,posh_atom,storage_key){
return (function (p1__34669_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(posh.core.add_q,p1__34669_SHARP_,query),true_poshdb_args);
});})(n_query_args,vec__34672,args__$1,options,true_poshdb_args,posh_atom,storage_key))
,options);
});

posh.reagent.q.cljs$lang$maxFixedArity = (1);

posh.reagent.q.cljs$lang$applyTo = (function (seq34670){
var G__34671 = cljs.core.first(seq34670);
var seq34670__$1 = cljs.core.next(seq34670);
return posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic(G__34671,seq34670__$1);
});

posh.reagent.q_info = (function posh$reagent$q_info(var_args){
var args__8308__auto__ = [];
var len__8301__auto___34681 = arguments.length;
var i__8302__auto___34682 = (0);
while(true){
if((i__8302__auto___34682 < len__8301__auto___34681)){
args__8308__auto__.push((arguments[i__8302__auto___34682]));

var G__34683 = (i__8302__auto___34682 + (1));
i__8302__auto___34682 = G__34683;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((1) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((1)),(0),null)):null);
return posh.reagent.q_info.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8309__auto__);
});

posh.reagent.q_info.cljs$core$IFn$_invoke$arity$variadic = (function (query,args){
var true_poshdb_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34678_SHARP_){
if(cljs.core.truth_(datascript.core.conn_QMARK_(p1__34678_SHARP_))){
return posh.reagent.get_db(p1__34678_SHARP_);
} else {
return p1__34678_SHARP_;
}
}),args);
var posh_atom = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.reagent.get_posh_atom,args)));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$q,query,true_poshdb_args], null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(posh.lib.update.update_q((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(posh_atom) : cljs.core.deref.call(null,posh_atom)),storage_key),cljs.core.cst$kw$reload_DASH_fn);
});

posh.reagent.q_info.cljs$lang$maxFixedArity = (1);

posh.reagent.q_info.cljs$lang$applyTo = (function (seq34679){
var G__34680 = cljs.core.first(seq34679);
var seq34679__$1 = cljs.core.next(seq34679);
return posh.reagent.q_info.cljs$core$IFn$_invoke$arity$variadic(G__34680,seq34679__$1);
});

posh.reagent.q_tx = (function posh$reagent$q_tx(var_args){
var args__8308__auto__ = [];
var len__8301__auto___34687 = arguments.length;
var i__8302__auto___34688 = (0);
while(true){
if((i__8302__auto___34688 < len__8301__auto___34687)){
args__8308__auto__.push((arguments[i__8302__auto___34688]));

var G__34689 = (i__8302__auto___34688 + (1));
i__8302__auto___34688 = G__34689;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((2) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((2)),(0),null)):null);
return posh.reagent.q_tx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8309__auto__);
});

posh.reagent.q_tx.cljs$core$IFn$_invoke$arity$variadic = (function (tx_patterns,query,args){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["q-tx is deprecated. Calling q without your tx-patterns."], 0));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(posh.reagent.q,query,args);
});

posh.reagent.q_tx.cljs$lang$maxFixedArity = (2);

posh.reagent.q_tx.cljs$lang$applyTo = (function (seq34684){
var G__34685 = cljs.core.first(seq34684);
var seq34684__$1 = cljs.core.next(seq34684);
var G__34686 = cljs.core.first(seq34684__$1);
var seq34684__$2 = cljs.core.next(seq34684__$1);
return posh.reagent.q_tx.cljs$core$IFn$_invoke$arity$variadic(G__34685,G__34686,seq34684__$2);
});

posh.reagent.filter_tx = (function posh$reagent$filter_tx(poshdb,tx_patterns){
return posh.stateful.add_filter_tx(posh.reagent.get_db(poshdb),tx_patterns);
});
posh.reagent.filter_pull = (function posh$reagent$filter_pull(poshdb,pull_pattern,eid){
return posh.stateful.add_filter_pull(posh.reagent.get_db(poshdb),pull_pattern,eid);
});
posh.reagent.filter_q = (function posh$reagent$filter_q(var_args){
var args__8308__auto__ = [];
var len__8301__auto___34693 = arguments.length;
var i__8302__auto___34694 = (0);
while(true){
if((i__8302__auto___34694 < len__8301__auto___34693)){
args__8308__auto__.push((arguments[i__8302__auto___34694]));

var G__34695 = (i__8302__auto___34694 + (1));
i__8302__auto___34694 = G__34695;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((1) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((1)),(0),null)):null);
return posh.reagent.filter_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8309__auto__);
});

posh.reagent.filter_q.cljs$core$IFn$_invoke$arity$variadic = (function (query,args){
var true_poshdb_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34690_SHARP_){
if(cljs.core.truth_(datascript.core.conn_QMARK_(p1__34690_SHARP_))){
return posh.reagent.get_db(p1__34690_SHARP_);
} else {
return p1__34690_SHARP_;
}
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(posh.stateful.add_filter_q,query,true_poshdb_args);
});

posh.reagent.filter_q.cljs$lang$maxFixedArity = (1);

posh.reagent.filter_q.cljs$lang$applyTo = (function (seq34691){
var G__34692 = cljs.core.first(seq34691);
var seq34691__$1 = cljs.core.next(seq34691);
return posh.reagent.filter_q.cljs$core$IFn$_invoke$arity$variadic(G__34692,seq34691__$1);
});

posh.reagent.transact_BANG_ = (function posh$reagent$transact_BANG_(poshdb_or_conn,txs){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(datascript.core.conn_QMARK_(poshdb_or_conn))?poshdb_or_conn:posh.stateful.poshdb__GT_conn(poshdb_or_conn)),txs);
});
