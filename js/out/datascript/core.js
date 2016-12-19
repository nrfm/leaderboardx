// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('datascript.core');
goog.require('cljs.core');
goog.require('datascript.query');
goog.require('datascript.btset');
goog.require('datascript.db');
goog.require('datascript.pull_api');
goog.require('datascript.impl.entity');
datascript.core.q = datascript.query.q;
goog.exportSymbol('datascript.core.q', datascript.core.q);
datascript.core.entity = datascript.impl.entity.entity;
goog.exportSymbol('datascript.core.entity', datascript.core.entity);
datascript.core.entity_db = (function datascript$core$entity_db(entity){
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_(entity))){
} else {
throw (new Error("Assert failed: (de/entity? entity)"));
}

return entity.db;
});
goog.exportSymbol('datascript.core.entity_db', datascript.core.entity_db);
datascript.core.datom = datascript.db.datom;
goog.exportSymbol('datascript.core.datom', datascript.core.datom);
datascript.core.pull = datascript.pull_api.pull;
goog.exportSymbol('datascript.core.pull', datascript.core.pull);
datascript.core.pull_many = datascript.pull_api.pull_many;
goog.exportSymbol('datascript.core.pull_many', datascript.core.pull_many);
datascript.core.touch = datascript.impl.entity.touch;
goog.exportSymbol('datascript.core.touch', datascript.core.touch);
datascript.core.empty_db = datascript.db.empty_db;
goog.exportSymbol('datascript.core.empty_db', datascript.core.empty_db);
datascript.core.init_db = datascript.db.init_db;
goog.exportSymbol('datascript.core.init_db', datascript.core.init_db);
datascript.core.datom_QMARK_ = datascript.db.datom_QMARK_;
goog.exportSymbol('datascript.core.datom_QMARK_', datascript.core.datom_QMARK_);
datascript.core.db_QMARK_ = datascript.db.db_QMARK_;
goog.exportSymbol('datascript.core.db_QMARK_', datascript.core.db_QMARK_);
datascript.core.tx0 = datascript.db.tx0;
goog.exportSymbol('datascript.core.tx0', datascript.core.tx0);
datascript.core.is_filtered = (function datascript$core$is_filtered(x){
return (x instanceof datascript.db.FilteredDB);
});
goog.exportSymbol('datascript.core.is_filtered', datascript.core.is_filtered);
datascript.core.filter = (function datascript$core$filter(db,pred){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datascript.core.is_filtered(db))){
var fdb = db;
var orig_pred = fdb.pred;
var orig_db = fdb.unfiltered_db;
return (new datascript.db.FilteredDB(orig_db,((function (fdb,orig_pred,orig_db){
return (function (p1__28389_SHARP_){
var and__7073__auto__ = (orig_pred.cljs$core$IFn$_invoke$arity$1 ? orig_pred.cljs$core$IFn$_invoke$arity$1(p1__28389_SHARP_) : orig_pred.call(null,p1__28389_SHARP_));
if(cljs.core.truth_(and__7073__auto__)){
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(orig_db,p1__28389_SHARP_) : pred.call(null,orig_db,p1__28389_SHARP_));
} else {
return and__7073__auto__;
}
});})(fdb,orig_pred,orig_db))
,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),null,null,null));
} else {
return (new datascript.db.FilteredDB(db,(function (p1__28390_SHARP_){
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(db,p1__28390_SHARP_) : pred.call(null,db,p1__28390_SHARP_));
}),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),null,null,null));
}
});
goog.exportSymbol('datascript.core.filter', datascript.core.filter);
datascript.core.with$ = (function datascript$core$with(var_args){
var args28391 = [];
var len__8301__auto___28394 = arguments.length;
var i__8302__auto___28395 = (0);
while(true){
if((i__8302__auto___28395 < len__8301__auto___28394)){
args28391.push((arguments[i__8302__auto___28395]));

var G__28396 = (i__8302__auto___28395 + (1));
i__8302__auto___28395 = G__28396;
continue;
} else {
}
break;
}

var G__28393 = args28391.length;
switch (G__28393) {
case 2:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28391.length)].join('')));

}
});
goog.exportSymbol('datascript.core.with$', datascript.core.with$);

datascript.core.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return datascript.core.with$.cljs$core$IFn$_invoke$arity$3(db,tx_data,null);
});

datascript.core.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datascript.core.is_filtered(db))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Filtered DB cannot be modified",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$transaction_SLASH_filtered], null));
} else {
return datascript.db.transact_tx_data(datascript.db.map__GT_TxReport(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$db_DASH_before,db,cljs.core.cst$kw$db_DASH_after,db,cljs.core.cst$kw$tx_DASH_data,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$tempids,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$tx_DASH_meta,tx_meta], null)),tx_data);
}
});

datascript.core.with$.cljs$lang$maxFixedArity = 3;

datascript.core.db_with = (function datascript$core$db_with(db,tx_data){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return cljs.core.cst$kw$db_DASH_after.cljs$core$IFn$_invoke$arity$1(datascript.core.with$.cljs$core$IFn$_invoke$arity$2(db,tx_data));
});
goog.exportSymbol('datascript.core.db_with', datascript.core.db_with);
datascript.core.datoms = (function datascript$core$datoms(var_args){
var args28398 = [];
var len__8301__auto___28401 = arguments.length;
var i__8302__auto___28402 = (0);
while(true){
if((i__8302__auto___28402 < len__8301__auto___28401)){
args28398.push((arguments[i__8302__auto___28402]));

var G__28403 = (i__8302__auto___28402 + (1));
i__8302__auto___28402 = G__28403;
continue;
} else {
}
break;
}

var G__28400 = args28398.length;
switch (G__28400) {
case 2:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28398.length)].join('')));

}
});
goog.exportSymbol('datascript.core.datoms', datascript.core.datoms);

datascript.core.datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms(db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms(db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms(db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms(db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms(db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.datoms.cljs$lang$maxFixedArity = 6;

datascript.core.seek_datoms = (function datascript$core$seek_datoms(var_args){
var args28405 = [];
var len__8301__auto___28408 = arguments.length;
var i__8302__auto___28409 = (0);
while(true){
if((i__8302__auto___28409 < len__8301__auto___28408)){
args28405.push((arguments[i__8302__auto___28409]));

var G__28410 = (i__8302__auto___28409 + (1));
i__8302__auto___28409 = G__28410;
continue;
} else {
}
break;
}

var G__28407 = args28405.length;
switch (G__28407) {
case 2:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28405.length)].join('')));

}
});
goog.exportSymbol('datascript.core.seek_datoms', datascript.core.seek_datoms);

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms(db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms(db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms(db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms(db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms(db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.seek_datoms.cljs$lang$maxFixedArity = 6;

datascript.core.index_range = (function datascript$core$index_range(db,attr,start,end){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._index_range(db,attr,start,end);
});
goog.exportSymbol('datascript.core.index_range', datascript.core.index_range);
datascript.core.entid = datascript.db.entid;
goog.exportSymbol('datascript.core.entid', datascript.core.entid);
datascript.core.conn_QMARK_ = (function datascript$core$conn_QMARK_(conn){
var and__7073__auto__ = ((!((conn == null)))?((((conn.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === conn.cljs$core$IDeref$)))?true:(((!conn.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,conn):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,conn));
if(and__7073__auto__){
return datascript.db.db_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conn) : cljs.core.deref.call(null,conn)));
} else {
return and__7073__auto__;
}
});
goog.exportSymbol('datascript.core.conn_QMARK_', datascript.core.conn_QMARK_);
datascript.core.conn_from_db = (function datascript$core$conn_from_db(db){
var G__28420 = db;
var G__28421 = cljs.core.cst$kw$meta;
var G__28422 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$listeners,(function (){var G__28423 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28423) : cljs.core.atom.call(null,G__28423));
})()], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$3 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$3(G__28420,G__28421,G__28422) : cljs.core.atom.call(null,G__28420,G__28421,G__28422));
});
goog.exportSymbol('datascript.core.conn_from_db', datascript.core.conn_from_db);
datascript.core.conn_from_datoms = (function datascript$core$conn_from_datoms(var_args){
var args28424 = [];
var len__8301__auto___28427 = arguments.length;
var i__8302__auto___28428 = (0);
while(true){
if((i__8302__auto___28428 < len__8301__auto___28427)){
args28424.push((arguments[i__8302__auto___28428]));

var G__28429 = (i__8302__auto___28428 + (1));
i__8302__auto___28428 = G__28429;
continue;
} else {
}
break;
}

var G__28426 = args28424.length;
switch (G__28426) {
case 1:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28424.length)].join('')));

}
});
goog.exportSymbol('datascript.core.conn_from_datoms', datascript.core.conn_from_datoms);

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.core.conn_from_db((datascript.core.init_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.init_db.cljs$core$IFn$_invoke$arity$1(datoms) : datascript.core.init_db.call(null,datoms)));
});

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return datascript.core.conn_from_db((datascript.core.init_db.cljs$core$IFn$_invoke$arity$2 ? datascript.core.init_db.cljs$core$IFn$_invoke$arity$2(datoms,schema) : datascript.core.init_db.call(null,datoms,schema)));
});

datascript.core.conn_from_datoms.cljs$lang$maxFixedArity = 2;

datascript.core.create_conn = (function datascript$core$create_conn(var_args){
var args28431 = [];
var len__8301__auto___28434 = arguments.length;
var i__8302__auto___28435 = (0);
while(true){
if((i__8302__auto___28435 < len__8301__auto___28434)){
args28431.push((arguments[i__8302__auto___28435]));

var G__28436 = (i__8302__auto___28435 + (1));
i__8302__auto___28435 = G__28436;
continue;
} else {
}
break;
}

var G__28433 = args28431.length;
switch (G__28433) {
case 0:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28431.length)].join('')));

}
});
goog.exportSymbol('datascript.core.create_conn', datascript.core.create_conn);

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.conn_from_db((datascript.core.empty_db.cljs$core$IFn$_invoke$arity$0 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$0() : datascript.core.empty_db.call(null)));
});

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return datascript.core.conn_from_db((datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(schema) : datascript.core.empty_db.call(null,schema)));
});

datascript.core.create_conn.cljs$lang$maxFixedArity = 1;

datascript.core._transact_BANG_ = (function datascript$core$_transact_BANG_(conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(conn,((function (report){
return (function (db){
var r = datascript.core.with$.cljs$core$IFn$_invoke$arity$3(db,tx_data,tx_meta);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(report,r) : cljs.core.reset_BANG_.call(null,report,r));

return cljs.core.cst$kw$db_DASH_after.cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(report) : cljs.core.deref.call(null,report));
});
datascript.core.transact_BANG_ = (function datascript$core$transact_BANG_(var_args){
var args28438 = [];
var len__8301__auto___28452 = arguments.length;
var i__8302__auto___28453 = (0);
while(true){
if((i__8302__auto___28453 < len__8301__auto___28452)){
args28438.push((arguments[i__8302__auto___28453]));

var G__28454 = (i__8302__auto___28453 + (1));
i__8302__auto___28453 = G__28454;
continue;
} else {
}
break;
}

var G__28440 = args28438.length;
switch (G__28440) {
case 2:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28438.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact_BANG_', datascript.core.transact_BANG_);

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,null);
});

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = datascript.core._transact_BANG_(conn,tx_data,tx_meta);
var seq__28441_28456 = cljs.core.seq((function (){var G__28445 = cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28445) : cljs.core.deref.call(null,G__28445));
})());
var chunk__28442_28457 = null;
var count__28443_28458 = (0);
var i__28444_28459 = (0);
while(true){
if((i__28444_28459 < count__28443_28458)){
var vec__28446_28460 = chunk__28442_28457.cljs$core$IIndexed$_nth$arity$2(null,i__28444_28459);
var __28461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28446_28460,(0),null);
var callback_28462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28446_28460,(1),null);
(callback_28462.cljs$core$IFn$_invoke$arity$1 ? callback_28462.cljs$core$IFn$_invoke$arity$1(report) : callback_28462.call(null,report));

var G__28463 = seq__28441_28456;
var G__28464 = chunk__28442_28457;
var G__28465 = count__28443_28458;
var G__28466 = (i__28444_28459 + (1));
seq__28441_28456 = G__28463;
chunk__28442_28457 = G__28464;
count__28443_28458 = G__28465;
i__28444_28459 = G__28466;
continue;
} else {
var temp__6753__auto___28467 = cljs.core.seq(seq__28441_28456);
if(temp__6753__auto___28467){
var seq__28441_28468__$1 = temp__6753__auto___28467;
if(cljs.core.chunked_seq_QMARK_(seq__28441_28468__$1)){
var c__7991__auto___28469 = cljs.core.chunk_first(seq__28441_28468__$1);
var G__28470 = cljs.core.chunk_rest(seq__28441_28468__$1);
var G__28471 = c__7991__auto___28469;
var G__28472 = cljs.core.count(c__7991__auto___28469);
var G__28473 = (0);
seq__28441_28456 = G__28470;
chunk__28442_28457 = G__28471;
count__28443_28458 = G__28472;
i__28444_28459 = G__28473;
continue;
} else {
var vec__28449_28474 = cljs.core.first(seq__28441_28468__$1);
var __28475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28449_28474,(0),null);
var callback_28476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28449_28474,(1),null);
(callback_28476.cljs$core$IFn$_invoke$arity$1 ? callback_28476.cljs$core$IFn$_invoke$arity$1(report) : callback_28476.call(null,report));

var G__28477 = cljs.core.next(seq__28441_28468__$1);
var G__28478 = null;
var G__28479 = (0);
var G__28480 = (0);
seq__28441_28456 = G__28477;
chunk__28442_28457 = G__28478;
count__28443_28458 = G__28479;
i__28444_28459 = G__28480;
continue;
}
} else {
}
}
break;
}

return report;
});

datascript.core.transact_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.reset_conn_BANG_ = (function datascript$core$reset_conn_BANG_(var_args){
var args28482 = [];
var len__8301__auto___28496 = arguments.length;
var i__8302__auto___28497 = (0);
while(true){
if((i__8302__auto___28497 < len__8301__auto___28496)){
args28482.push((arguments[i__8302__auto___28497]));

var G__28498 = (i__8302__auto___28497 + (1));
i__8302__auto___28497 = G__28498;
continue;
} else {
}
break;
}

var G__28484 = args28482.length;
switch (G__28484) {
case 2:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28482.length)].join('')));

}
});
goog.exportSymbol('datascript.core.reset_conn_BANG_', datascript.core.reset_conn_BANG_);

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3(conn,db,null);
});

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,db,tx_meta){
var report = datascript.db.map__GT_TxReport(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$db_DASH_before,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conn) : cljs.core.deref.call(null,conn)),cljs.core.cst$kw$db_DASH_after,db,cljs.core.cst$kw$tx_DASH_data,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28481_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28481_SHARP_,cljs.core.cst$kw$added,false);
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conn) : cljs.core.deref.call(null,conn)),cljs.core.cst$kw$eavt)),datascript.core.datoms.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$eavt)),cljs.core.cst$kw$tx_DASH_meta,tx_meta], null));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(conn,db) : cljs.core.reset_BANG_.call(null,conn,db));

var seq__28485_28500 = cljs.core.seq((function (){var G__28489 = cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28489) : cljs.core.deref.call(null,G__28489));
})());
var chunk__28486_28501 = null;
var count__28487_28502 = (0);
var i__28488_28503 = (0);
while(true){
if((i__28488_28503 < count__28487_28502)){
var vec__28490_28504 = chunk__28486_28501.cljs$core$IIndexed$_nth$arity$2(null,i__28488_28503);
var __28505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28490_28504,(0),null);
var callback_28506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28490_28504,(1),null);
(callback_28506.cljs$core$IFn$_invoke$arity$1 ? callback_28506.cljs$core$IFn$_invoke$arity$1(report) : callback_28506.call(null,report));

var G__28507 = seq__28485_28500;
var G__28508 = chunk__28486_28501;
var G__28509 = count__28487_28502;
var G__28510 = (i__28488_28503 + (1));
seq__28485_28500 = G__28507;
chunk__28486_28501 = G__28508;
count__28487_28502 = G__28509;
i__28488_28503 = G__28510;
continue;
} else {
var temp__6753__auto___28511 = cljs.core.seq(seq__28485_28500);
if(temp__6753__auto___28511){
var seq__28485_28512__$1 = temp__6753__auto___28511;
if(cljs.core.chunked_seq_QMARK_(seq__28485_28512__$1)){
var c__7991__auto___28513 = cljs.core.chunk_first(seq__28485_28512__$1);
var G__28514 = cljs.core.chunk_rest(seq__28485_28512__$1);
var G__28515 = c__7991__auto___28513;
var G__28516 = cljs.core.count(c__7991__auto___28513);
var G__28517 = (0);
seq__28485_28500 = G__28514;
chunk__28486_28501 = G__28515;
count__28487_28502 = G__28516;
i__28488_28503 = G__28517;
continue;
} else {
var vec__28493_28518 = cljs.core.first(seq__28485_28512__$1);
var __28519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28493_28518,(0),null);
var callback_28520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28493_28518,(1),null);
(callback_28520.cljs$core$IFn$_invoke$arity$1 ? callback_28520.cljs$core$IFn$_invoke$arity$1(report) : callback_28520.call(null,report));

var G__28521 = cljs.core.next(seq__28485_28512__$1);
var G__28522 = null;
var G__28523 = (0);
var G__28524 = (0);
seq__28485_28500 = G__28521;
chunk__28486_28501 = G__28522;
count__28487_28502 = G__28523;
i__28488_28503 = G__28524;
continue;
}
} else {
}
}
break;
}

return db;
});

datascript.core.reset_conn_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.listen_BANG_ = (function datascript$core$listen_BANG_(var_args){
var args28525 = [];
var len__8301__auto___28528 = arguments.length;
var i__8302__auto___28529 = (0);
while(true){
if((i__8302__auto___28529 < len__8301__auto___28528)){
args28525.push((arguments[i__8302__auto___28529]));

var G__28530 = (i__8302__auto___28529 + (1));
i__8302__auto___28529 = G__28530;
continue;
} else {
}
break;
}

var G__28527 = args28525.length;
switch (G__28527) {
case 2:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28525.length)].join('')));

}
});
goog.exportSymbol('datascript.core.listen_BANG_', datascript.core.listen_BANG_);

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,callback){
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),callback);
});

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,key,callback){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn)),cljs.core.assoc,key,callback);

return key;
});

datascript.core.listen_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.unlisten_BANG_ = (function datascript$core$unlisten_BANG_(conn,key){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn)),cljs.core.dissoc,key);
});
goog.exportSymbol('datascript.core.unlisten_BANG_', datascript.core.unlisten_BANG_);
datascript.core.data_readers = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$datascript_SLASH_Datom,datascript.db.datom_from_reader,cljs.core.cst$sym$datascript_SLASH_DB,datascript.db.db_from_reader], null);
var seq__28532_28542 = cljs.core.seq(datascript.core.data_readers);
var chunk__28533_28543 = null;
var count__28534_28544 = (0);
var i__28535_28545 = (0);
while(true){
if((i__28535_28545 < count__28534_28544)){
var vec__28536_28546 = chunk__28533_28543.cljs$core$IIndexed$_nth$arity$2(null,i__28535_28545);
var tag_28547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28536_28546,(0),null);
var cb_28548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28536_28546,(1),null);
cljs.reader.register_tag_parser_BANG_(tag_28547,cb_28548);

var G__28549 = seq__28532_28542;
var G__28550 = chunk__28533_28543;
var G__28551 = count__28534_28544;
var G__28552 = (i__28535_28545 + (1));
seq__28532_28542 = G__28549;
chunk__28533_28543 = G__28550;
count__28534_28544 = G__28551;
i__28535_28545 = G__28552;
continue;
} else {
var temp__6753__auto___28553 = cljs.core.seq(seq__28532_28542);
if(temp__6753__auto___28553){
var seq__28532_28554__$1 = temp__6753__auto___28553;
if(cljs.core.chunked_seq_QMARK_(seq__28532_28554__$1)){
var c__7991__auto___28555 = cljs.core.chunk_first(seq__28532_28554__$1);
var G__28556 = cljs.core.chunk_rest(seq__28532_28554__$1);
var G__28557 = c__7991__auto___28555;
var G__28558 = cljs.core.count(c__7991__auto___28555);
var G__28559 = (0);
seq__28532_28542 = G__28556;
chunk__28533_28543 = G__28557;
count__28534_28544 = G__28558;
i__28535_28545 = G__28559;
continue;
} else {
var vec__28539_28560 = cljs.core.first(seq__28532_28554__$1);
var tag_28561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28539_28560,(0),null);
var cb_28562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28539_28560,(1),null);
cljs.reader.register_tag_parser_BANG_(tag_28561,cb_28562);

var G__28563 = cljs.core.next(seq__28532_28554__$1);
var G__28564 = null;
var G__28565 = (0);
var G__28566 = (0);
seq__28532_28542 = G__28563;
chunk__28533_28543 = G__28564;
count__28534_28544 = G__28565;
i__28535_28545 = G__28566;
continue;
}
} else {
}
}
break;
}
datascript.core.last_tempid = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1000000)) : cljs.core.atom.call(null,(-1000000)));
datascript.core.tempid = (function datascript$core$tempid(var_args){
var args28567 = [];
var len__8301__auto___28570 = arguments.length;
var i__8302__auto___28571 = (0);
while(true){
if((i__8302__auto___28571 < len__8301__auto___28570)){
args28567.push((arguments[i__8302__auto___28571]));

var G__28572 = (i__8302__auto___28571 + (1));
i__8302__auto___28571 = G__28572;
continue;
} else {
}
break;
}

var G__28569 = args28567.length;
switch (G__28569) {
case 1:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28567.length)].join('')));

}
});
goog.exportSymbol('datascript.core.tempid', datascript.core.tempid);

datascript.core.tempid.cljs$core$IFn$_invoke$arity$1 = (function (part){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(part,cljs.core.cst$kw$db$part_SLASH_tx)){
return cljs.core.cst$kw$db_SLASH_current_DASH_tx;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.core.last_tempid,cljs.core.dec);
}
});

datascript.core.tempid.cljs$core$IFn$_invoke$arity$2 = (function (part,x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(part,cljs.core.cst$kw$db$part_SLASH_tx)){
return cljs.core.cst$kw$db_SLASH_current_DASH_tx;
} else {
return x;
}
});

datascript.core.tempid.cljs$lang$maxFixedArity = 2;

datascript.core.resolve_tempid = (function datascript$core$resolve_tempid(_db,tempids,tempid){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(tempids,tempid);
});
goog.exportSymbol('datascript.core.resolve_tempid', datascript.core.resolve_tempid);
datascript.core.db = (function datascript$core$db(conn){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conn) : cljs.core.deref.call(null,conn));
});
goog.exportSymbol('datascript.core.db', datascript.core.db);
datascript.core.transact = (function datascript$core$transact(var_args){
var args28574 = [];
var len__8301__auto___28580 = arguments.length;
var i__8302__auto___28581 = (0);
while(true){
if((i__8302__auto___28581 < len__8301__auto___28580)){
args28574.push((arguments[i__8302__auto___28581]));

var G__28582 = (i__8302__auto___28581 + (1));
i__8302__auto___28581 = G__28582;
continue;
} else {
}
break;
}

var G__28576 = args28574.length;
switch (G__28576) {
case 2:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28574.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact', datascript.core.transact);

datascript.core.transact.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact.cljs$core$IFn$_invoke$arity$3(conn,tx_data,null);
});

datascript.core.transact.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var res = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,tx_meta);
if(typeof datascript.core.t_datascript$core28577 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core28577 = (function (conn,tx_data,tx_meta,res,meta28578){
this.conn = conn;
this.tx_data = tx_data;
this.tx_meta = tx_meta;
this.res = res;
this.meta28578 = meta28578;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core28577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_28579,meta28578__$1){
var self__ = this;
var _28579__$1 = this;
return (new datascript.core.t_datascript$core28577(self__.conn,self__.tx_data,self__.tx_meta,self__.res,meta28578__$1));
});})(res))
;

datascript.core.t_datascript$core28577.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_28579){
var self__ = this;
var _28579__$1 = this;
return self__.meta28578;
});})(res))
;

datascript.core.t_datascript$core28577.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core28577.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core28577.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(res))
;

datascript.core.t_datascript$core28577.getBasis = ((function (res){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$conn,cljs.core.cst$sym$tx_DASH_data,cljs.core.cst$sym$tx_DASH_meta,cljs.core.cst$sym$res,cljs.core.cst$sym$meta28578], null);
});})(res))
;

datascript.core.t_datascript$core28577.cljs$lang$type = true;

datascript.core.t_datascript$core28577.cljs$lang$ctorStr = "datascript.core/t_datascript$core28577";

datascript.core.t_datascript$core28577.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__7737__auto__,writer__7738__auto__,opt__7739__auto__){
return cljs.core._write(writer__7738__auto__,"datascript.core/t_datascript$core28577");
});})(res))
;

datascript.core.__GT_t_datascript$core28577 = ((function (res){
return (function datascript$core$__GT_t_datascript$core28577(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta28578){
return (new datascript.core.t_datascript$core28577(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta28578));
});})(res))
;

}

return (new datascript.core.t_datascript$core28577(conn,tx_data,tx_meta,res,cljs.core.PersistentArrayMap.EMPTY));
});

datascript.core.transact.cljs$lang$maxFixedArity = 3;

datascript.core.future_call = (function datascript$core$future_call(f){
var res = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var realized = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
var G__28591_28598 = ((function (res,realized){
return (function (){
var G__28593_28600 = res;
var G__28594_28601 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28593_28600,G__28594_28601) : cljs.core.reset_BANG_.call(null,G__28593_28600,G__28594_28601));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(realized,true) : cljs.core.reset_BANG_.call(null,realized,true));
});})(res,realized))
;
var G__28592_28599 = (0);
setTimeout(G__28591_28598,G__28592_28599);

if(typeof datascript.core.t_datascript$core28595 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core28595 = (function (f,res,realized,meta28596){
this.f = f;
this.res = res;
this.realized = realized;
this.meta28596 = meta28596;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core28595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_28597,meta28596__$1){
var self__ = this;
var _28597__$1 = this;
return (new datascript.core.t_datascript$core28595(self__.f,self__.res,self__.realized,meta28596__$1));
});})(res,realized))
;

datascript.core.t_datascript$core28595.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_28597){
var self__ = this;
var _28597__$1 = this;
return self__.meta28596;
});})(res,realized))
;

datascript.core.t_datascript$core28595.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.res) : cljs.core.deref.call(null,self__.res));
});})(res,realized))
;

datascript.core.t_datascript$core28595.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.realized) : cljs.core.deref.call(null,self__.realized)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.res) : cljs.core.deref.call(null,self__.res));
} else {
return timeout_val;
}
});})(res,realized))
;

datascript.core.t_datascript$core28595.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.realized) : cljs.core.deref.call(null,self__.realized));
});})(res,realized))
;

datascript.core.t_datascript$core28595.getBasis = ((function (res,realized){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$res,cljs.core.cst$sym$realized,cljs.core.cst$sym$meta28596], null);
});})(res,realized))
;

datascript.core.t_datascript$core28595.cljs$lang$type = true;

datascript.core.t_datascript$core28595.cljs$lang$ctorStr = "datascript.core/t_datascript$core28595";

datascript.core.t_datascript$core28595.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__7737__auto__,writer__7738__auto__,opt__7739__auto__){
return cljs.core._write(writer__7738__auto__,"datascript.core/t_datascript$core28595");
});})(res,realized))
;

datascript.core.__GT_t_datascript$core28595 = ((function (res,realized){
return (function datascript$core$future_call_$___GT_t_datascript$core28595(f__$1,res__$1,realized__$1,meta28596){
return (new datascript.core.t_datascript$core28595(f__$1,res__$1,realized__$1,meta28596));
});})(res,realized))
;

}

return (new datascript.core.t_datascript$core28595(f,res,realized,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.core.transact_async = (function datascript$core$transact_async(var_args){
var args28602 = [];
var len__8301__auto___28605 = arguments.length;
var i__8302__auto___28606 = (0);
while(true){
if((i__8302__auto___28606 < len__8301__auto___28605)){
args28602.push((arguments[i__8302__auto___28606]));

var G__28607 = (i__8302__auto___28606 + (1));
i__8302__auto___28606 = G__28607;
continue;
} else {
}
break;
}

var G__28604 = args28602.length;
switch (G__28604) {
case 2:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28602.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact_async', datascript.core.transact_async);

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3(conn,tx_data,null);
});

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return datascript.core.future_call((function (){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,tx_meta);
}));
});

datascript.core.transact_async.cljs$lang$maxFixedArity = 3;

datascript.core.rand_bits = (function datascript$core$rand_bits(pow){
return cljs.core.rand_int(((1) << pow));
});
datascript.core.to_hex_string = (function datascript$core$to_hex_string(n,l){
var s = n.toString((16));
var c = cljs.core.count(s);
if((c > l)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),l);
} else {
if((c < l)){
return [cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((l - c),"0"))),cljs.core.str(s)].join('');
} else {
return s;

}
}
});
datascript.core.squuid = (function datascript$core$squuid(var_args){
var args28609 = [];
var len__8301__auto___28612 = arguments.length;
var i__8302__auto___28613 = (0);
while(true){
if((i__8302__auto___28613 < len__8301__auto___28612)){
args28609.push((arguments[i__8302__auto___28613]));

var G__28614 = (i__8302__auto___28613 + (1));
i__8302__auto___28613 = G__28614;
continue;
} else {
}
break;
}

var G__28611 = args28609.length;
switch (G__28611) {
case 0:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28609.length)].join('')));

}
});
goog.exportSymbol('datascript.core.squuid', datascript.core.squuid);

datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$1((new Date()).getTime());
});

datascript.core.squuid.cljs$core$IFn$_invoke$arity$1 = (function (msec){
return cljs.core.uuid([cljs.core.str(datascript.core.to_hex_string(((msec / (1000)) | (0)),(8))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string(datascript.core.rand_bits((16)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string(((datascript.core.rand_bits((16)) & (4095)) | (16384)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string(((datascript.core.rand_bits((16)) & (16383)) | (32768)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string(datascript.core.rand_bits((16)),(4))),cljs.core.str(datascript.core.to_hex_string(datascript.core.rand_bits((16)),(4))),cljs.core.str(datascript.core.to_hex_string(datascript.core.rand_bits((16)),(4)))].join(''));
});

datascript.core.squuid.cljs$lang$maxFixedArity = 1;

datascript.core.squuid_time_millis = (function datascript$core$squuid_time_millis(uuid){
return ((function (){var G__28618 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3([cljs.core.str(uuid)].join(''),(0),(8));
var G__28619 = (16);
return parseInt(G__28618,G__28619);
})() * (1000));
});
goog.exportSymbol('datascript.core.squuid_time_millis', datascript.core.squuid_time_millis);
