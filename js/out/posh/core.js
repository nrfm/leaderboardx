// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('posh.core');
goog.require('cljs.core');
goog.require('posh.lib.update');
goog.require('posh.lib.util');
goog.require('posh.lib.q_analyze');
goog.require('posh.lib.db');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.graph');
goog.require('posh.lib.pull_analyze');
posh.core.empty_tree = (function posh$core$empty_tree(p__34391,retrieve){
var map__34394 = p__34391;
var map__34394__$1 = ((((!((map__34394 == null)))?((((map__34394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34394.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34394):map__34394);
var dcfg = map__34394__$1;
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34394__$1,cljs.core.cst$kw$q);
var pull = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34394__$1,cljs.core.cst$kw$pull);
var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34394__$1,cljs.core.cst$kw$filter);
var entid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34394__$1,cljs.core.cst$kw$entid);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34394__$1,cljs.core.cst$kw$db);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$filters,cljs.core.cst$kw$retrieve,cljs.core.cst$kw$txs,cljs.core.cst$kw$cache,cljs.core.cst$kw$dbs,cljs.core.cst$kw$schemas,cljs.core.cst$kw$graph,cljs.core.cst$kw$dcfg,cljs.core.cst$kw$conns],[cljs.core.PersistentArrayMap.EMPTY,retrieve,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,dcfg,cljs.core.PersistentArrayMap.EMPTY]);
});
posh.core.add_db = (function posh$core$add_db(var_args){
var args34396 = [];
var len__8301__auto___34402 = arguments.length;
var i__8302__auto___34403 = (0);
while(true){
if((i__8302__auto___34403 < len__8301__auto___34402)){
args34396.push((arguments[i__8302__auto___34403]));

var G__34404 = (i__8302__auto___34403 + (1));
i__8302__auto___34403 = G__34404;
continue;
} else {
}
break;
}

var G__34398 = args34396.length;
switch (G__34398) {
case 4:
return posh.core.add_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return posh.core.add_db.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34396.length)].join('')));

}
});

posh.core.add_db.cljs$core$IFn$_invoke$arity$4 = (function (posh_tree,db_id,conn,schema){
return posh.core.add_db.cljs$core$IFn$_invoke$arity$5(posh_tree,db_id,conn,schema,null);
});

posh.core.add_db.cljs$core$IFn$_invoke$arity$5 = (function (p__34399,db_id,conn,schema,base_filters){
var map__34400 = p__34399;
var map__34400__$1 = ((((!((map__34400 == null)))?((((map__34400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34400):map__34400);
var posh_tree = map__34400__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34400__$1,cljs.core.cst$kw$dcfg);
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34400__$1,cljs.core.cst$kw$conns);
var schemas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34400__$1,cljs.core.cst$kw$schemas);
var dbs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34400__$1,cljs.core.cst$kw$dbs);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34400__$1,cljs.core.cst$kw$cache);
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34400__$1,cljs.core.cst$kw$graph);
var storage_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,db_id], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([posh_tree,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$conns,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(conns,db_id,conn),cljs.core.cst$kw$schemas,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schemas,db_id,schema),cljs.core.cst$kw$filters,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$filters.cljs$core$IFn$_invoke$arity$1(posh_tree),db_id,base_filters),cljs.core.cst$kw$return,storage_key,cljs.core.cst$kw$dbs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dbs,db_id,posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$3(dcfg,conn,base_filters)),cljs.core.cst$kw$cache,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cache,cljs.core.PersistentArrayMap.fromArray([storage_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pass_DASH_patterns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null)], true, false)], 0)),cljs.core.cst$kw$graph,posh.lib.graph.add_item_full(graph,storage_key,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)], null)], 0));
});

posh.core.add_db.cljs$lang$maxFixedArity = 5;

posh.core.set_db = (function posh$core$set_db(var_args){
var args34406 = [];
var len__8301__auto___34412 = arguments.length;
var i__8302__auto___34413 = (0);
while(true){
if((i__8302__auto___34413 < len__8301__auto___34412)){
args34406.push((arguments[i__8302__auto___34413]));

var G__34414 = (i__8302__auto___34413 + (1));
i__8302__auto___34413 = G__34414;
continue;
} else {
}
break;
}

var G__34408 = args34406.length;
switch (G__34408) {
case 3:
return posh.core.set_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return posh.core.set_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34406.length)].join('')));

}
});

posh.core.set_db.cljs$core$IFn$_invoke$arity$3 = (function (posh_tree,db_id,db){
return posh.core.set_db.cljs$core$IFn$_invoke$arity$4(posh_tree,db_id,db,null);
});

posh.core.set_db.cljs$core$IFn$_invoke$arity$4 = (function (p__34409,db_id,db,filter_pred){
var map__34410 = p__34409;
var map__34410__$1 = ((((!((map__34410 == null)))?((((map__34410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34410.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34410):map__34410);
var posh_tree = map__34410__$1;
var dbs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34410__$1,cljs.core.cst$kw$dbs);
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34410__$1,cljs.core.cst$kw$graph);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34410__$1,cljs.core.cst$kw$cache);
var storage_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,db_id], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([posh_tree,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$dbs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dbs,db_id,db),cljs.core.cst$kw$cache,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cache,cljs.core.PersistentArrayMap.fromArray([storage_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pass_DASH_patterns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null)], true, false)], 0)),cljs.core.cst$kw$graph,posh.lib.graph.add_item_full(graph,storage_key,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)], null)], 0));
});

posh.core.set_db.cljs$lang$maxFixedArity = 4;

posh.core.add_filter_tx = (function posh$core$add_filter_tx(p__34416,poshdb,tx_patterns){
var map__34419 = p__34416;
var map__34419__$1 = ((((!((map__34419 == null)))?((((map__34419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34419.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34419):map__34419);
var posh_tree = map__34419__$1;
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34419__$1,cljs.core.cst$kw$cache);
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34419__$1,cljs.core.cst$kw$graph);
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_tx,poshdb,tx_patterns], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$graph,posh.lib.graph.add_item_connect(graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),cljs.core.cst$kw$cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pass_DASH_patterns,tx_patterns], null))], null)], 0))),cljs.core.cst$kw$return,storage_key);
});
posh.core.add_filter_pull = (function posh$core$add_filter_pull(p__34421,poshdb,pull_pattern,eid){
var map__34424 = p__34421;
var map__34424__$1 = ((((!((map__34424 == null)))?((((map__34424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34424.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34424):map__34424);
var posh_tree = map__34424__$1;
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34424__$1,cljs.core.cst$kw$cache);
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34424__$1,cljs.core.cst$kw$graph);
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34424__$1,cljs.core.cst$kw$dcfg);
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34424__$1,cljs.core.cst$kw$conns);
var conns_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34424__$1,cljs.core.cst$kw$conns_DASH_by_DASH_id);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_pull,poshdb,pull_pattern,eid], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$graph,posh.lib.graph.add_item_connect(graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),cljs.core.cst$kw$cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,posh.lib.update.update_filter_pull(posh_tree,storage_key))], null)], 0))),cljs.core.cst$kw$return,storage_key);
});
posh.core.add_filter_q = (function posh$core$add_filter_q(var_args){
var args__8308__auto__ = [];
var len__8301__auto___34434 = arguments.length;
var i__8302__auto___34435 = (0);
while(true){
if((i__8302__auto___34435 < len__8301__auto___34434)){
args__8308__auto__.push((arguments[i__8302__auto___34435]));

var G__34436 = (i__8302__auto___34435 + (1));
i__8302__auto___34435 = G__34436;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((2) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((2)),(0),null)):null);
return posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8309__auto__);
});

posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic = (function (p__34429,query,args){
var map__34430 = p__34429;
var map__34430__$1 = ((((!((map__34430 == null)))?((((map__34430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34430):map__34430);
var posh_tree = map__34430__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34430__$1,cljs.core.cst$kw$graph);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34430__$1,cljs.core.cst$kw$cache);
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34430__$1,cljs.core.cst$kw$dcfg);
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34430__$1,cljs.core.cst$kw$retrieve);
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34430__$1,cljs.core.cst$kw$conns);
var conns_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34430__$1,cljs.core.cst$kw$conns_DASH_by_DASH_id);
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_q,query,args], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:(function (){var map__34432 = posh.lib.update.update_q_with_dbvarmap(posh_tree,storage_key);
var map__34432__$1 = ((((!((map__34432 == null)))?((((map__34432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34432.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34432):map__34432);
var analysis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34432__$1,cljs.core.cst$kw$analysis);
var dbvarmap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34432__$1,cljs.core.cst$kw$dbvarmap);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$graph,posh.lib.graph.add_item_connect(graph,storage_key,cljs.core.vals(dbvarmap)),cljs.core.cst$kw$cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,posh.lib.update.filter_q_transform_analysis(analysis))], null)], 0));
})()),cljs.core.cst$kw$return,storage_key);
});

posh.core.add_filter_q.cljs$lang$maxFixedArity = (2);

posh.core.add_filter_q.cljs$lang$applyTo = (function (seq34426){
var G__34427 = cljs.core.first(seq34426);
var seq34426__$1 = cljs.core.next(seq34426);
var G__34428 = cljs.core.first(seq34426__$1);
var seq34426__$2 = cljs.core.next(seq34426__$1);
return posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic(G__34427,G__34428,seq34426__$2);
});

posh.core.add_pull = (function posh$core$add_pull(p__34437,poshdb,pull_pattern,eid){
var map__34440 = p__34437;
var map__34440__$1 = ((((!((map__34440 == null)))?((((map__34440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34440.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34440):map__34440);
var posh_tree = map__34440__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34440__$1,cljs.core.cst$kw$graph);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34440__$1,cljs.core.cst$kw$cache);
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34440__$1,cljs.core.cst$kw$dcfg);
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34440__$1,cljs.core.cst$kw$conns);
var conns_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34440__$1,cljs.core.cst$kw$conns_DASH_by_DASH_id);
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34440__$1,cljs.core.cst$kw$retrieve);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pull,poshdb,pull_pattern,eid], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:(function (){var analysis = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tx_DASH_t,(0)], null),posh.lib.update.update_pull(posh_tree,storage_key)], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$graph,posh.lib.graph.add_item_connect(graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),cljs.core.cst$kw$cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,analysis)], null)], 0));
})()),cljs.core.cst$kw$return,storage_key);
});
posh.core.add_q = (function posh$core$add_q(var_args){
var args__8308__auto__ = [];
var len__8301__auto___34450 = arguments.length;
var i__8302__auto___34451 = (0);
while(true){
if((i__8302__auto___34451 < len__8301__auto___34450)){
args__8308__auto__.push((arguments[i__8302__auto___34451]));

var G__34452 = (i__8302__auto___34451 + (1));
i__8302__auto___34451 = G__34452;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((2) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((2)),(0),null)):null);
return posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8309__auto__);
});

posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic = (function (p__34445,query,args){
var map__34446 = p__34445;
var map__34446__$1 = ((((!((map__34446 == null)))?((((map__34446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34446):map__34446);
var posh_tree = map__34446__$1;
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34446__$1,cljs.core.cst$kw$cache);
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34446__$1,cljs.core.cst$kw$graph);
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34446__$1,cljs.core.cst$kw$dcfg);
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34446__$1,cljs.core.cst$kw$conns);
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34446__$1,cljs.core.cst$kw$retrieve);
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$q,query,args], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var or__7085__auto__ = cached;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
var map__34448 = posh.lib.update.update_q_with_dbvarmap(posh_tree,storage_key);
var map__34448__$1 = ((((!((map__34448 == null)))?((((map__34448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34448.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34448):map__34448);
var analysis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34448__$1,cljs.core.cst$kw$analysis);
var dbvarmap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34448__$1,cljs.core.cst$kw$dbvarmap);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$graph,posh.lib.graph.add_item_connect(graph,storage_key,cljs.core.vals(dbvarmap)),cljs.core.cst$kw$cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,analysis)], null)], 0));
}
})(),cljs.core.cst$kw$return,storage_key);
});

posh.core.add_q.cljs$lang$maxFixedArity = (2);

posh.core.add_q.cljs$lang$applyTo = (function (seq34442){
var G__34443 = cljs.core.first(seq34442);
var seq34442__$1 = cljs.core.next(seq34442);
var G__34444 = cljs.core.first(seq34442__$1);
var seq34442__$2 = cljs.core.next(seq34442__$1);
return posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic(G__34443,G__34444,seq34442__$2);
});

posh.core.remove_item = (function posh$core$remove_item(p__34453,storage_key){
var map__34456 = p__34453;
var map__34456__$1 = ((((!((map__34456 == null)))?((((map__34456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34456.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34456):map__34456);
var posh_tree = map__34456__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34456__$1,cljs.core.cst$kw$graph);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34456__$1,cljs.core.cst$kw$cache);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh_tree,cljs.core.cst$kw$graph,posh.lib.graph.remove_item(graph,storage_key),cljs.core.array_seq([cljs.core.cst$kw$cache,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cache,storage_key)], 0));
});
posh.core.cache_changes = (function posh$core$cache_changes(p__34458,db_id,tx,new_cache,storage_key){
var map__34463 = p__34458;
var map__34463__$1 = ((((!((map__34463 == null)))?((((map__34463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34463):map__34463);
var posh_tree = map__34463__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34463__$1,cljs.core.cst$kw$graph);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34463__$1,cljs.core.cst$kw$cache);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_cache,storage_key))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var current_analysis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
var reloaded = (cljs.core.truth_(posh.lib.datom_matcher.any_datoms_match_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reload_DASH_patterns.cljs$core$IFn$_invoke$arity$1(current_analysis),db_id),tx))?cljs.core.cst$kw$reload_DASH_fn.cljs$core$IFn$_invoke$arity$1(current_analysis).call(null,posh_tree,storage_key):null);
var analysis = (function (){var or__7085__auto__ = reloaded;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return current_analysis;
}
})();
var map__34465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(graph,storage_key);
var map__34465__$1 = ((((!((map__34465 == null)))?((((map__34465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34465):map__34465);
var outputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34465__$1,cljs.core.cst$kw$outputs);
var children_cache = (function (){var temp__6753__auto__ = (function (){var and__7073__auto__ = !(cljs.core.empty_QMARK_(outputs));
if(and__7073__auto__){
var and__7073__auto____$1 = cljs.core.cst$kw$pass_DASH_patterns.cljs$core$IFn$_invoke$arity$1(analysis);
if(cljs.core.truth_(and__7073__auto____$1)){
return posh.lib.datom_matcher.matching_datoms(cljs.core.cst$kw$pass_DASH_patterns.cljs$core$IFn$_invoke$arity$1(analysis),tx);
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var pass_tx = temp__6753__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pass_tx,temp__6753__auto__,current_analysis,reloaded,analysis,map__34465,map__34465__$1,outputs,map__34463,map__34463__$1,posh_tree,graph,cache){
return (function (acc,k){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([acc,(posh.core.cache_changes.cljs$core$IFn$_invoke$arity$5 ? posh.core.cache_changes.cljs$core$IFn$_invoke$arity$5(posh_tree,db_id,pass_tx,acc,k) : posh.core.cache_changes.call(null,posh_tree,db_id,pass_tx,acc,k))], 0));
});})(pass_tx,temp__6753__auto__,current_analysis,reloaded,analysis,map__34465,map__34465__$1,outputs,map__34463,map__34463__$1,posh_tree,graph,cache))
,new_cache,outputs);
} else {
return null;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([children_cache,(cljs.core.truth_(reloaded)?cljs.core.PersistentArrayMap.fromArray([storage_key,reloaded], true, false):null),cljs.core.PersistentArrayMap.EMPTY], 0));
}
});
posh.core.merge_txs = (function posh$core$merge_txs(oldtx,newtx){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(newtx,oldtx);
});
posh.core.add_tx = (function posh$core$add_tx(p__34467,poshdb,tx){
var map__34470 = p__34467;
var map__34470__$1 = ((((!((map__34470 == null)))?((((map__34470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34470.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34470):map__34470);
var posh_tree = map__34470__$1;
var txs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34470__$1,cljs.core.cst$kw$txs);
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34470__$1,cljs.core.cst$kw$conns);
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns,posh.lib.db.poshdb__GT_db_id(poshdb));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(posh_tree,cljs.core.cst$kw$txs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(txs,conn,posh.core.merge_txs(cljs.core.get.cljs$core$IFn$_invoke$arity$2(txs,conn),tx)));
});
posh.core.group_db_ids_by_conn = (function posh$core$group_db_ids_by_conn(conns){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.group_by(cljs.core.second,conns));
});
posh.core.after_transact = (function posh$core$after_transact(p__34472,conns_results){
var map__34497 = p__34472;
var map__34497__$1 = ((((!((map__34497 == null)))?((((map__34497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34497):map__34497);
var posh_tree = map__34497__$1;
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34497__$1,cljs.core.cst$kw$conns);
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34497__$1,cljs.core.cst$kw$dcfg);
var dbs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34497__$1,cljs.core.cst$kw$dbs);
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34497__$1,cljs.core.cst$kw$filters);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34497__$1,cljs.core.cst$kw$cache);
var new_dbs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var iter__7942__auto__ = ((function (map__34497,map__34497__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function posh$core$after_transact_$_iter__34499(s__34500){
return (new cljs.core.LazySeq(null,((function (map__34497,map__34497__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function (){
var s__34500__$1 = s__34500;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__34500__$1);
if(temp__6753__auto__){
var s__34500__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34500__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__34500__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__34502 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__34501 = (0);
while(true){
if((i__34501 < size__7941__auto__)){
var vec__34511 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__34501);
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34511,(0),null);
var conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34511,(1),null);
cljs.core.chunk_append(b__34502,(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn))?cljs.core.PersistentArrayMap.fromArray([db_id,posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4(dcfg,conn,cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,db_id),cljs.core.cst$kw$db_DASH_after.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn)))], true, false):cljs.core.PersistentArrayMap.fromArray([db_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbs,db_id)], true, false)));

var G__34521 = (i__34501 + (1));
i__34501 = G__34521;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34502),posh$core$after_transact_$_iter__34499(cljs.core.chunk_rest(s__34500__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34502),null);
}
} else {
var vec__34514 = cljs.core.first(s__34500__$2);
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34514,(0),null);
var conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34514,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn))?cljs.core.PersistentArrayMap.fromArray([db_id,posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4(dcfg,conn,cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,db_id),cljs.core.cst$kw$db_DASH_after.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn)))], true, false):cljs.core.PersistentArrayMap.fromArray([db_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbs,db_id)], true, false)),posh$core$after_transact_$_iter__34499(cljs.core.rest(s__34500__$2)));
}
} else {
return null;
}
break;
}
});})(map__34497,map__34497__$1,posh_tree,conns,dcfg,dbs,filters,cache))
,null,null));
});})(map__34497,map__34497__$1,posh_tree,conns,dcfg,dbs,filters,cache))
;
return iter__7942__auto__(conns);
})());
var new_posh_tree = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(posh_tree,cljs.core.cst$kw$dbs,new_dbs);
var changed_cache = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (new_dbs,new_posh_tree,map__34497,map__34497__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function (changed,p__34517){
var vec__34518 = p__34517;
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34518,(0),null);
var conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34518,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([changed,posh.core.cache_changes(new_posh_tree,db_id,cljs.core.cst$kw$tx_DASH_data.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn)),changed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,db_id], null))], 0));
});})(new_dbs,new_posh_tree,map__34497,map__34497__$1,posh_tree,conns,dcfg,dbs,filters,cache))
,cljs.core.PersistentArrayMap.EMPTY,conns);
var really_changed = cljs.core.reduce_kv(((function (new_dbs,new_posh_tree,changed_cache,map__34497,map__34497__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function (m,k,v){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,k))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
});})(new_dbs,new_posh_tree,changed_cache,map__34497,map__34497__$1,posh_tree,conns,dcfg,dbs,filters,cache))
,cljs.core.PersistentArrayMap.EMPTY,changed_cache);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new_posh_tree,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cache,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cache,really_changed], 0)),cljs.core.cst$kw$changed,really_changed], null)], 0));
});
posh.core.process_tx_BANG_ = (function posh$core$process_tx_BANG_(p__34522){
var map__34525 = p__34522;
var map__34525__$1 = ((((!((map__34525 == null)))?((((map__34525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34525.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34525):map__34525);
var posh_tree = map__34525__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34525__$1,cljs.core.cst$kw$dcfg);
var txs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34525__$1,cljs.core.cst$kw$txs);
var conns_results = cljs.core.reduce_kv(((function (map__34525,map__34525__$1,posh_tree,dcfg,txs){
return (function (m,conn,tx){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,conn,cljs.core.cst$kw$transact_BANG_.cljs$core$IFn$_invoke$arity$1(dcfg).call(null,conn,tx));
});})(map__34525,map__34525__$1,posh_tree,dcfg,txs))
,cljs.core.PersistentArrayMap.EMPTY,txs);
return posh.core.after_transact(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(posh_tree,cljs.core.cst$kw$txs,cljs.core.PersistentArrayMap.EMPTY),conns_results);
});
