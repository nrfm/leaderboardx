// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('datascript.db');
goog.require('cljs.core');
goog.require('goog.array');
goog.require('clojure.walk');
goog.require('datascript.arrays');
goog.require('datascript.btset');
datascript.db.Exception = Error;

datascript.db.IllegalArgumentException = Error;

datascript.db.UnsupportedOperationException = Error;
datascript.db.tx0 = (536870912);
datascript.db.default_schema = null;
datascript.db.seqable_QMARK_ = cljs.core.seqable_QMARK_;
datascript.db.neg_number_QMARK_ = (function datascript$db$neg_number_QMARK_(x){
return (typeof x === 'number') && ((x < (0)));
});
/**
 * Take the &env from a macro, and tell whether we are expanding into cljs.
 */
datascript.db.cljs_env_QMARK_ = (function datascript$db$cljs_env_QMARK_(env){
return cljs.core.boolean$(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
});
datascript.db.combine_hashes = (function datascript$db$combine_hashes(x,y){
return cljs.core.hash_combine(x,y);
});






/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
datascript.db.Datom = (function (e,a,v,tx,added){
this.e = e;
this.a = a;
this.v = v;
this.tx = tx;
this.added = added;
this.cljs$lang$protocol_mask$partition0$ = 2162164496;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
datascript.db.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
var or__7085__auto__ = d__$1.__hash;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return d__$1.__hash = (datascript.db.hash_datom.cljs$core$IFn$_invoke$arity$1 ? datascript.db.hash_datom.cljs$core$IFn$_invoke$arity$1(d__$1) : datascript.db.hash_datom.call(null,d__$1));
}
});

datascript.db.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (d,o){
var self__ = this;
var d__$1 = this;
var and__7073__auto__ = (o instanceof datascript.db.Datom);
if(and__7073__auto__){
return (datascript.db.equiv_datom.cljs$core$IFn$_invoke$arity$2 ? datascript.db.equiv_datom.cljs$core$IFn$_invoke$arity$2(d__$1,o) : datascript.db.equiv_datom.call(null,d__$1,o));
} else {
return and__7073__auto__;
}
});

datascript.db.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
return (datascript.db.seq_datom.cljs$core$IFn$_invoke$arity$1 ? datascript.db.seq_datom.cljs$core$IFn$_invoke$arity$1(d__$1) : datascript.db.seq_datom.call(null,d__$1));
});

datascript.db.Datom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (d,k){
var self__ = this;
var d__$1 = this;
return (datascript.db.val_at_datom.cljs$core$IFn$_invoke$arity$3 ? datascript.db.val_at_datom.cljs$core$IFn$_invoke$arity$3(d__$1,k,null) : datascript.db.val_at_datom.call(null,d__$1,k,null));
});

datascript.db.Datom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (d,k,nf){
var self__ = this;
var d__$1 = this;
return (datascript.db.val_at_datom.cljs$core$IFn$_invoke$arity$3 ? datascript.db.val_at_datom.cljs$core$IFn$_invoke$arity$3(d__$1,k,nf) : datascript.db.val_at_datom.call(null,d__$1,k,nf));
});

datascript.db.Datom.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
return (datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2 ? datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2(this$__$1,i) : datascript.db.nth_datom.call(null,this$__$1,i));
});

datascript.db.Datom.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
return (datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3 ? datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3(this$__$1,i,not_found) : datascript.db.nth_datom.call(null,this$__$1,i,not_found));
});

datascript.db.Datom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (d,k,v__$1){
var self__ = this;
var d__$1 = this;
return (datascript.db.assoc_datom.cljs$core$IFn$_invoke$arity$3 ? datascript.db.assoc_datom.cljs$core$IFn$_invoke$arity$3(d__$1,k,v__$1) : datascript.db.assoc_datom.call(null,d__$1,k,v__$1));
});

datascript.db.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var self__ = this;
var d__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#datascript/Datom ["," ","]",opts,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d__$1.e,d__$1.a,d__$1.v,d__$1.tx,d__$1.added], null));
});

datascript.db.Datom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$e,cljs.core.cst$sym$a,cljs.core.cst$sym$v,cljs.core.cst$sym$tx,cljs.core.cst$sym$added], null);
});

datascript.db.Datom.cljs$lang$type = true;

datascript.db.Datom.cljs$lang$ctorStr = "datascript.db/Datom";

datascript.db.Datom.cljs$lang$ctorPrWriter = (function (this__7737__auto__,writer__7738__auto__,opt__7739__auto__){
return cljs.core._write(writer__7738__auto__,"datascript.db/Datom");
});

datascript.db.__GT_Datom = (function datascript$db$__GT_Datom(e,a,v,tx,added){
return (new datascript.db.Datom(e,a,v,tx,added));
});

datascript.db.datom = (function datascript$db$datom(var_args){
var args24766 = [];
var len__8301__auto___24769 = arguments.length;
var i__8302__auto___24770 = (0);
while(true){
if((i__8302__auto___24770 < len__8301__auto___24769)){
args24766.push((arguments[i__8302__auto___24770]));

var G__24771 = (i__8302__auto___24770 + (1));
i__8302__auto___24770 = G__24771;
continue;
} else {
}
break;
}

var G__24768 = args24766.length;
switch (G__24768) {
case 3:
return datascript.db.datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.db.datom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.db.datom.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24766.length)].join('')));

}
});

datascript.db.datom.cljs$core$IFn$_invoke$arity$3 = (function (e,a,v){
return (new datascript.db.Datom(e,a,v,datascript.db.tx0,true));
});

datascript.db.datom.cljs$core$IFn$_invoke$arity$4 = (function (e,a,v,tx){
return (new datascript.db.Datom(e,a,v,tx,true));
});

datascript.db.datom.cljs$core$IFn$_invoke$arity$5 = (function (e,a,v,tx,added){
return (new datascript.db.Datom(e,a,v,tx,added));
});

datascript.db.datom.cljs$lang$maxFixedArity = 5;

datascript.db.datom_QMARK_ = (function datascript$db$datom_QMARK_(x){
return (x instanceof datascript.db.Datom);
});
datascript.db.hash_datom = (function datascript$db$hash_datom(d){
return datascript.db.combine_hashes(datascript.db.combine_hashes(cljs.core.hash(d.e),cljs.core.hash(d.a)),cljs.core.hash(d.v));
});
datascript.db.equiv_datom = (function datascript$db$equiv_datom(d,o){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d.e,o.e)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d.a,o.a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d.v,o.v));
});
datascript.db.seq_datom = (function datascript$db$seq_datom(d){
var x__8014__auto__ = d.e;
return cljs.core._conj((function (){var x__8014__auto____$1 = d.a;
return cljs.core._conj((function (){var x__8014__auto____$2 = d.v;
return cljs.core._conj((function (){var x__8014__auto____$3 = d.tx;
return cljs.core._conj((function (){var x__8014__auto____$4 = d.added;
return cljs.core._conj(cljs.core.List.EMPTY,x__8014__auto____$4);
})(),x__8014__auto____$3);
})(),x__8014__auto____$2);
})(),x__8014__auto____$1);
})(),x__8014__auto__);
});
datascript.db.val_at_datom = (function datascript$db$val_at_datom(d,k,not_found){
var G__24774 = k;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$v,G__24774)){
return d.v;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("e",G__24774)){
return d.e;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$added,G__24774)){
return d.added;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("v",G__24774)){
return d.v;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$e,G__24774)){
return d.e;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("a",G__24774)){
return d.a;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tx,G__24774)){
return d.tx;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("added",G__24774)){
return d.added;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tx",G__24774)){
return d.tx;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$a,G__24774)){
return d.a;
} else {
return not_found;

}
}
}
}
}
}
}
}
}
}
});
datascript.db.nth_datom = (function datascript$db$nth_datom(var_args){
var args24775 = [];
var len__8301__auto___24780 = arguments.length;
var i__8302__auto___24781 = (0);
while(true){
if((i__8302__auto___24781 < len__8301__auto___24780)){
args24775.push((arguments[i__8302__auto___24781]));

var G__24782 = (i__8302__auto___24781 + (1));
i__8302__auto___24781 = G__24782;
continue;
} else {
}
break;
}

var G__24777 = args24775.length;
switch (G__24777) {
case 2:
return datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24775.length)].join('')));

}
});

datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2 = (function (d,i){
var G__24778 = i;
switch (G__24778) {
case (0):
return d.e;

break;
case (1):
return d.a;

break;
case (2):
return d.v;

break;
case (3):
return d.tx;

break;
case (4):
return d.added;

break;
default:
throw (new Error([cljs.core.str("Datom/-nth: Index out of bounds: "),cljs.core.str(i)].join('')));

}
});

datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3 = (function (d,i,not_found){
var G__24779 = i;
switch (G__24779) {
case (0):
return d.e;

break;
case (1):
return d.a;

break;
case (2):
return d.v;

break;
case (3):
return d.tx;

break;
case (4):
return d.added;

break;
default:
return not_found;

}
});

datascript.db.nth_datom.cljs$lang$maxFixedArity = 3;

datascript.db.assoc_datom = (function datascript$db$assoc_datom(d,k,v){
var G__24787 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__24787) {
case "e":
return (new datascript.db.Datom(v,d.a,d.v,d.tx,d.added));

break;
case "a":
return (new datascript.db.Datom(d.e,v,d.v,d.tx,d.added));

break;
case "v":
return (new datascript.db.Datom(d.e,d.a,v,d.tx,d.added));

break;
case "tx":
return (new datascript.db.Datom(d.e,d.a,d.v,v,d.added));

break;
case "added":
return (new datascript.db.Datom(d.e,d.a,d.v,d.tx,v));

break;
default:
throw (new datascript.db.IllegalArgumentException([cljs.core.str("invalid key for #datascript/Datom: "),cljs.core.str(k)].join('')));

}
});
datascript.db.datom_from_reader = (function datascript$db$datom_from_reader(vec){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(datascript.db.datom,vec);
});
datascript.db.cmp = (function datascript$db$cmp(o1,o2){
if(cljs.core.truth_((function (){var and__7073__auto__ = o1;
if(cljs.core.truth_(and__7073__auto__)){
return o2;
} else {
return and__7073__auto__;
}
})())){
return cljs.core.compare(o1,o2);
} else {
return (0);
}
});
datascript.db.cmp_num = (function datascript$db$cmp_num(n1,n2){
if(cljs.core.truth_((function (){var and__7073__auto__ = n1;
if(cljs.core.truth_(and__7073__auto__)){
return n2;
} else {
return and__7073__auto__;
}
})())){
return (n1 - n2);
} else {
return (0);
}
});
datascript.db.cmp_val = (function datascript$db$cmp_val(o1,o2){
if((cljs.core.some_QMARK_(o1)) && (cljs.core.some_QMARK_(o2))){
return cljs.core.compare(o1,o2);
} else {
return (0);
}
});
datascript.db.cmp_datoms_eavt = (function datascript$db$cmp_datoms_eavt(d1,d2){
var c__24218__auto__ = datascript.db.cmp_num(d1.e,d2.e);
if(((0) === c__24218__auto__)){
var c__24218__auto____$1 = datascript.db.cmp(d1.a,d2.a);
if(((0) === c__24218__auto____$1)){
var c__24218__auto____$2 = datascript.db.cmp_val(d1.v,d2.v);
if(((0) === c__24218__auto____$2)){
var c__24218__auto____$3 = datascript.db.cmp_num(d1.tx,d2.tx);
if(((0) === c__24218__auto____$3)){
return (0);
} else {
return c__24218__auto____$3;
}
} else {
return c__24218__auto____$2;
}
} else {
return c__24218__auto____$1;
}
} else {
return c__24218__auto__;
}
});
datascript.db.cmp_datoms_aevt = (function datascript$db$cmp_datoms_aevt(d1,d2){
var c__24218__auto__ = datascript.db.cmp(d1.a,d2.a);
if(((0) === c__24218__auto__)){
var c__24218__auto____$1 = datascript.db.cmp_num(d1.e,d2.e);
if(((0) === c__24218__auto____$1)){
var c__24218__auto____$2 = datascript.db.cmp_val(d1.v,d2.v);
if(((0) === c__24218__auto____$2)){
var c__24218__auto____$3 = datascript.db.cmp_num(d1.tx,d2.tx);
if(((0) === c__24218__auto____$3)){
return (0);
} else {
return c__24218__auto____$3;
}
} else {
return c__24218__auto____$2;
}
} else {
return c__24218__auto____$1;
}
} else {
return c__24218__auto__;
}
});
datascript.db.cmp_datoms_avet = (function datascript$db$cmp_datoms_avet(d1,d2){
var c__24218__auto__ = datascript.db.cmp(d1.a,d2.a);
if(((0) === c__24218__auto__)){
var c__24218__auto____$1 = datascript.db.cmp_val(d1.v,d2.v);
if(((0) === c__24218__auto____$1)){
var c__24218__auto____$2 = datascript.db.cmp_num(d1.e,d2.e);
if(((0) === c__24218__auto____$2)){
var c__24218__auto____$3 = datascript.db.cmp_num(d1.tx,d2.tx);
if(((0) === c__24218__auto____$3)){
return (0);
} else {
return c__24218__auto____$3;
}
} else {
return c__24218__auto____$2;
}
} else {
return c__24218__auto____$1;
}
} else {
return c__24218__auto__;
}
});
datascript.db.cmp_attr_quick = (function datascript$db$cmp_attr_quick(a1,a2){
if((a1 instanceof cljs.core.Keyword)){
return cljs.core._compare(a1,a2);
} else {
return goog.array.defaultCompare(a1,a2);
}
});
datascript.db.cmp_datoms_eavt_quick = (function datascript$db$cmp_datoms_eavt_quick(d1,d2){
var c__24218__auto__ = (d1.e - d2.e);
if(((0) === c__24218__auto__)){
var c__24218__auto____$1 = datascript.db.cmp_attr_quick(d1.a,d2.a);
if(((0) === c__24218__auto____$1)){
var c__24218__auto____$2 = cljs.core.compare(d1.v,d2.v);
if(((0) === c__24218__auto____$2)){
var c__24218__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__24218__auto____$3)){
return (0);
} else {
return c__24218__auto____$3;
}
} else {
return c__24218__auto____$2;
}
} else {
return c__24218__auto____$1;
}
} else {
return c__24218__auto__;
}
});
datascript.db.cmp_datoms_aevt_quick = (function datascript$db$cmp_datoms_aevt_quick(d1,d2){
var c__24218__auto__ = datascript.db.cmp_attr_quick(d1.a,d2.a);
if(((0) === c__24218__auto__)){
var c__24218__auto____$1 = (d1.e - d2.e);
if(((0) === c__24218__auto____$1)){
var c__24218__auto____$2 = cljs.core.compare(d1.v,d2.v);
if(((0) === c__24218__auto____$2)){
var c__24218__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__24218__auto____$3)){
return (0);
} else {
return c__24218__auto____$3;
}
} else {
return c__24218__auto____$2;
}
} else {
return c__24218__auto____$1;
}
} else {
return c__24218__auto__;
}
});
datascript.db.cmp_datoms_avet_quick = (function datascript$db$cmp_datoms_avet_quick(d1,d2){
var c__24218__auto__ = datascript.db.cmp_attr_quick(d1.a,d2.a);
if(((0) === c__24218__auto__)){
var c__24218__auto____$1 = cljs.core.compare(d1.v,d2.v);
if(((0) === c__24218__auto____$1)){
var c__24218__auto____$2 = (d1.e - d2.e);
if(((0) === c__24218__auto____$2)){
var c__24218__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__24218__auto____$3)){
return (0);
} else {
return c__24218__auto____$3;
}
} else {
return c__24218__auto____$2;
}
} else {
return c__24218__auto____$1;
}
} else {
return c__24218__auto__;
}
});

/**
 * @interface
 */
datascript.db.ISearch = function(){};

datascript.db._search = (function datascript$db$_search(data,pattern){
if((!((data == null))) && (!((data.datascript$db$ISearch$_search$arity$2 == null)))){
return data.datascript$db$ISearch$_search$arity$2(data,pattern);
} else {
var x__7798__auto__ = (((data == null))?null:data);
var m__7799__auto__ = (datascript.db._search[goog.typeOf(x__7798__auto__)]);
if(!((m__7799__auto__ == null))){
return (m__7799__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7799__auto__.cljs$core$IFn$_invoke$arity$2(data,pattern) : m__7799__auto__.call(null,data,pattern));
} else {
var m__7799__auto____$1 = (datascript.db._search["_"]);
if(!((m__7799__auto____$1 == null))){
return (m__7799__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7799__auto____$1.cljs$core$IFn$_invoke$arity$2(data,pattern) : m__7799__auto____$1.call(null,data,pattern));
} else {
throw cljs.core.missing_protocol("ISearch.-search",data);
}
}
}
});


/**
 * @interface
 */
datascript.db.IIndexAccess = function(){};

datascript.db._datoms = (function datascript$db$_datoms(db,index,components){
if((!((db == null))) && (!((db.datascript$db$IIndexAccess$_datoms$arity$3 == null)))){
return db.datascript$db$IIndexAccess$_datoms$arity$3(db,index,components);
} else {
var x__7798__auto__ = (((db == null))?null:db);
var m__7799__auto__ = (datascript.db._datoms[goog.typeOf(x__7798__auto__)]);
if(!((m__7799__auto__ == null))){
return (m__7799__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7799__auto__.cljs$core$IFn$_invoke$arity$3(db,index,components) : m__7799__auto__.call(null,db,index,components));
} else {
var m__7799__auto____$1 = (datascript.db._datoms["_"]);
if(!((m__7799__auto____$1 == null))){
return (m__7799__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7799__auto____$1.cljs$core$IFn$_invoke$arity$3(db,index,components) : m__7799__auto____$1.call(null,db,index,components));
} else {
throw cljs.core.missing_protocol("IIndexAccess.-datoms",db);
}
}
}
});

datascript.db._seek_datoms = (function datascript$db$_seek_datoms(db,index,components){
if((!((db == null))) && (!((db.datascript$db$IIndexAccess$_seek_datoms$arity$3 == null)))){
return db.datascript$db$IIndexAccess$_seek_datoms$arity$3(db,index,components);
} else {
var x__7798__auto__ = (((db == null))?null:db);
var m__7799__auto__ = (datascript.db._seek_datoms[goog.typeOf(x__7798__auto__)]);
if(!((m__7799__auto__ == null))){
return (m__7799__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7799__auto__.cljs$core$IFn$_invoke$arity$3(db,index,components) : m__7799__auto__.call(null,db,index,components));
} else {
var m__7799__auto____$1 = (datascript.db._seek_datoms["_"]);
if(!((m__7799__auto____$1 == null))){
return (m__7799__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7799__auto____$1.cljs$core$IFn$_invoke$arity$3(db,index,components) : m__7799__auto____$1.call(null,db,index,components));
} else {
throw cljs.core.missing_protocol("IIndexAccess.-seek-datoms",db);
}
}
}
});

datascript.db._index_range = (function datascript$db$_index_range(db,attr,start,end){
if((!((db == null))) && (!((db.datascript$db$IIndexAccess$_index_range$arity$4 == null)))){
return db.datascript$db$IIndexAccess$_index_range$arity$4(db,attr,start,end);
} else {
var x__7798__auto__ = (((db == null))?null:db);
var m__7799__auto__ = (datascript.db._index_range[goog.typeOf(x__7798__auto__)]);
if(!((m__7799__auto__ == null))){
return (m__7799__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7799__auto__.cljs$core$IFn$_invoke$arity$4(db,attr,start,end) : m__7799__auto__.call(null,db,attr,start,end));
} else {
var m__7799__auto____$1 = (datascript.db._index_range["_"]);
if(!((m__7799__auto____$1 == null))){
return (m__7799__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7799__auto____$1.cljs$core$IFn$_invoke$arity$4(db,attr,start,end) : m__7799__auto____$1.call(null,db,attr,start,end));
} else {
throw cljs.core.missing_protocol("IIndexAccess.-index-range",db);
}
}
}
});


/**
 * @interface
 */
datascript.db.IDB = function(){};

datascript.db._schema = (function datascript$db$_schema(db){
if((!((db == null))) && (!((db.datascript$db$IDB$_schema$arity$1 == null)))){
return db.datascript$db$IDB$_schema$arity$1(db);
} else {
var x__7798__auto__ = (((db == null))?null:db);
var m__7799__auto__ = (datascript.db._schema[goog.typeOf(x__7798__auto__)]);
if(!((m__7799__auto__ == null))){
return (m__7799__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7799__auto__.cljs$core$IFn$_invoke$arity$1(db) : m__7799__auto__.call(null,db));
} else {
var m__7799__auto____$1 = (datascript.db._schema["_"]);
if(!((m__7799__auto____$1 == null))){
return (m__7799__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7799__auto____$1.cljs$core$IFn$_invoke$arity$1(db) : m__7799__auto____$1.call(null,db));
} else {
throw cljs.core.missing_protocol("IDB.-schema",db);
}
}
}
});

datascript.db._attrs_by = (function datascript$db$_attrs_by(db,property){
if((!((db == null))) && (!((db.datascript$db$IDB$_attrs_by$arity$2 == null)))){
return db.datascript$db$IDB$_attrs_by$arity$2(db,property);
} else {
var x__7798__auto__ = (((db == null))?null:db);
var m__7799__auto__ = (datascript.db._attrs_by[goog.typeOf(x__7798__auto__)]);
if(!((m__7799__auto__ == null))){
return (m__7799__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7799__auto__.cljs$core$IFn$_invoke$arity$2(db,property) : m__7799__auto__.call(null,db,property));
} else {
var m__7799__auto____$1 = (datascript.db._attrs_by["_"]);
if(!((m__7799__auto____$1 == null))){
return (m__7799__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7799__auto____$1.cljs$core$IFn$_invoke$arity$2(db,property) : m__7799__auto____$1.call(null,db,property));
} else {
throw cljs.core.missing_protocol("IDB.-attrs-by",db);
}
}
}
});










/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.db.DB = (function (schema,eavt,aevt,avet,max_eid,max_tx,rschema,hash,__meta,__extmap,__hash){
this.schema = schema;
this.eavt = eavt;
this.aevt = aevt;
this.avet = avet;
this.max_eid = max_eid;
this.max_tx = max_tx;
this.rschema = rschema;
this.hash = hash;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.db.DB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7755__auto__,k__7756__auto__){
var self__ = this;
var this__7755__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7755__auto____$1,k__7756__auto__,null);
});

datascript.db.DB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7757__auto__,k24792,else__7758__auto__){
var self__ = this;
var this__7757__auto____$1 = this;
var G__24794 = (((k24792 instanceof cljs.core.Keyword))?k24792.fqn:null);
switch (G__24794) {
case "schema":
return self__.schema;

break;
case "eavt":
return self__.eavt;

break;
case "aevt":
return self__.aevt;

break;
case "avet":
return self__.avet;

break;
case "max-eid":
return self__.max_eid;

break;
case "max-tx":
return self__.max_tx;

break;
case "rschema":
return self__.rschema;

break;
case "hash":
return self__.hash;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24792,else__7758__auto__);

}
});

datascript.db.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7769__auto__,writer__7770__auto__,opts__7771__auto__){
var self__ = this;
var this__7769__auto____$1 = this;
var pr_pair__7772__auto__ = ((function (this__7769__auto____$1){
return (function (keyval__7773__auto__){
return cljs.core.pr_sequential_writer(writer__7770__auto__,cljs.core.pr_writer,""," ","",opts__7771__auto__,keyval__7773__auto__);
});})(this__7769__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7770__auto__,pr_pair__7772__auto__,"#datascript.db.DB{",", ","}",opts__7771__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$eavt,self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$aevt,self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$avet,self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$max_DASH_eid,self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$max_DASH_tx,self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rschema,self__.rschema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hash,self__.hash],null))], null),self__.__extmap));
});

datascript.db.DB.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24791){
var self__ = this;
var G__24791__$1 = this;
return (new cljs.core.RecordIter((0),G__24791__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$eavt,cljs.core.cst$kw$aevt,cljs.core.cst$kw$avet,cljs.core.cst$kw$max_DASH_eid,cljs.core.cst$kw$max_DASH_tx,cljs.core.cst$kw$rschema,cljs.core.cst$kw$hash], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.db.DB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7753__auto__){
var self__ = this;
var this__7753__auto____$1 = this;
return self__.__meta;
});

datascript.db.DB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7749__auto__){
var self__ = this;
var this__7749__auto____$1 = this;
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.db.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7759__auto__){
var self__ = this;
var this__7759__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
});

datascript.db.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7750__auto__){
var self__ = this;
var this__7750__auto____$1 = this;
var h__7522__auto__ = self__.__hash;
if(!((h__7522__auto__ == null))){
return h__7522__auto__;
} else {
var h__7522__auto____$1 = cljs.core.hash_imap(this__7750__auto____$1);
self__.__hash = h__7522__auto____$1;

return h__7522__auto____$1;
}
});

datascript.db.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7751__auto__,other__7752__auto__){
var self__ = this;
var this__7751__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7073__auto__ = other__7752__auto__;
if(cljs.core.truth_(and__7073__auto__)){
var and__7073__auto____$1 = (this__7751__auto____$1.constructor === other__7752__auto__.constructor);
if(and__7073__auto____$1){
return cljs.core.equiv_map(this__7751__auto____$1,other__7752__auto__);
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.db.DB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7764__auto__,k__7765__auto__){
var self__ = this;
var this__7764__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$max_DASH_tx,null,cljs.core.cst$kw$hash,null,cljs.core.cst$kw$aevt,null,cljs.core.cst$kw$avet,null,cljs.core.cst$kw$max_DASH_eid,null,cljs.core.cst$kw$eavt,null,cljs.core.cst$kw$rschema,null], null), null),k__7765__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7764__auto____$1),self__.__meta),k__7765__auto__);
} else {
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7765__auto__)),null));
}
});

datascript.db.DB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7762__auto__,k__7763__auto__,G__24791){
var self__ = this;
var this__7762__auto____$1 = this;
var pred__24795 = cljs.core.keyword_identical_QMARK_;
var expr__24796 = k__7763__auto__;
if(cljs.core.truth_((function (){var G__24798 = cljs.core.cst$kw$schema;
var G__24799 = expr__24796;
return (pred__24795.cljs$core$IFn$_invoke$arity$2 ? pred__24795.cljs$core$IFn$_invoke$arity$2(G__24798,G__24799) : pred__24795.call(null,G__24798,G__24799));
})())){
return (new datascript.db.DB(G__24791,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24800 = cljs.core.cst$kw$eavt;
var G__24801 = expr__24796;
return (pred__24795.cljs$core$IFn$_invoke$arity$2 ? pred__24795.cljs$core$IFn$_invoke$arity$2(G__24800,G__24801) : pred__24795.call(null,G__24800,G__24801));
})())){
return (new datascript.db.DB(self__.schema,G__24791,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24802 = cljs.core.cst$kw$aevt;
var G__24803 = expr__24796;
return (pred__24795.cljs$core$IFn$_invoke$arity$2 ? pred__24795.cljs$core$IFn$_invoke$arity$2(G__24802,G__24803) : pred__24795.call(null,G__24802,G__24803));
})())){
return (new datascript.db.DB(self__.schema,self__.eavt,G__24791,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24804 = cljs.core.cst$kw$avet;
var G__24805 = expr__24796;
return (pred__24795.cljs$core$IFn$_invoke$arity$2 ? pred__24795.cljs$core$IFn$_invoke$arity$2(G__24804,G__24805) : pred__24795.call(null,G__24804,G__24805));
})())){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,G__24791,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24806 = cljs.core.cst$kw$max_DASH_eid;
var G__24807 = expr__24796;
return (pred__24795.cljs$core$IFn$_invoke$arity$2 ? pred__24795.cljs$core$IFn$_invoke$arity$2(G__24806,G__24807) : pred__24795.call(null,G__24806,G__24807));
})())){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,G__24791,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24808 = cljs.core.cst$kw$max_DASH_tx;
var G__24809 = expr__24796;
return (pred__24795.cljs$core$IFn$_invoke$arity$2 ? pred__24795.cljs$core$IFn$_invoke$arity$2(G__24808,G__24809) : pred__24795.call(null,G__24808,G__24809));
})())){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,G__24791,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24810 = cljs.core.cst$kw$rschema;
var G__24811 = expr__24796;
return (pred__24795.cljs$core$IFn$_invoke$arity$2 ? pred__24795.cljs$core$IFn$_invoke$arity$2(G__24810,G__24811) : pred__24795.call(null,G__24810,G__24811));
})())){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,G__24791,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24812 = cljs.core.cst$kw$hash;
var G__24813 = expr__24796;
return (pred__24795.cljs$core$IFn$_invoke$arity$2 ? pred__24795.cljs$core$IFn$_invoke$arity$2(G__24812,G__24813) : pred__24795.call(null,G__24812,G__24813));
})())){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,G__24791,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7763__auto__,G__24791),null));
}
}
}
}
}
}
}
}
});

datascript.db.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7767__auto__){
var self__ = this;
var this__7767__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$eavt,self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$aevt,self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$avet,self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$max_DASH_eid,self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$max_DASH_tx,self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rschema,self__.rschema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hash,self__.hash],null))], null),self__.__extmap));
});

datascript.db.DB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7754__auto__,G__24791){
var self__ = this;
var this__7754__auto____$1 = this;
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,G__24791,self__.__extmap,self__.__hash));
});

datascript.db.DB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7760__auto__,entry__7761__auto__){
var self__ = this;
var this__7760__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7761__auto__)){
return cljs.core._assoc(this__7760__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7760__auto____$1,entry__7761__auto__);
}
});

datascript.db.DB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$eavt,cljs.core.cst$sym$aevt,cljs.core.cst$sym$avet,cljs.core.cst$sym$max_DASH_eid,cljs.core.cst$sym$max_DASH_tx,cljs.core.cst$sym$rschema,cljs.core.cst$sym$hash], null);
});

datascript.db.DB.cljs$lang$type = true;

datascript.db.DB.cljs$lang$ctorPrSeq = (function (this__7791__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.db/DB");
});

datascript.db.DB.cljs$lang$ctorPrWriter = (function (this__7791__auto__,writer__7792__auto__){
return cljs.core._write(writer__7792__auto__,"datascript.db/DB");
});

datascript.db.__GT_DB = (function datascript$db$__GT_DB(schema,eavt,aevt,avet,max_eid,max_tx,rschema,hash){
return (new datascript.db.DB(schema,eavt,aevt,avet,max_eid,max_tx,rschema,hash,null,null,null));
});

datascript.db.map__GT_DB = (function datascript$db$map__GT_DB(G__24793){
return (new datascript.db.DB(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__24793),cljs.core.cst$kw$eavt.cljs$core$IFn$_invoke$arity$1(G__24793),cljs.core.cst$kw$aevt.cljs$core$IFn$_invoke$arity$1(G__24793),cljs.core.cst$kw$avet.cljs$core$IFn$_invoke$arity$1(G__24793),cljs.core.cst$kw$max_DASH_eid.cljs$core$IFn$_invoke$arity$1(G__24793),cljs.core.cst$kw$max_DASH_tx.cljs$core$IFn$_invoke$arity$1(G__24793),cljs.core.cst$kw$rschema.cljs$core$IFn$_invoke$arity$1(G__24793),cljs.core.cst$kw$hash.cljs$core$IFn$_invoke$arity$1(G__24793),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24793,cljs.core.cst$kw$schema,cljs.core.array_seq([cljs.core.cst$kw$eavt,cljs.core.cst$kw$aevt,cljs.core.cst$kw$avet,cljs.core.cst$kw$max_DASH_eid,cljs.core.cst$kw$max_DASH_tx,cljs.core.cst$kw$rschema,cljs.core.cst$kw$hash], 0)),null));
});


datascript.db.DB.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return (datascript.db.pr_db.cljs$core$IFn$_invoke$arity$3 ? datascript.db.pr_db.cljs$core$IFn$_invoke$arity$3(db__$1,w,opts) : datascript.db.pr_db.call(null,db__$1,w,opts));
});

datascript.db.DB.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.count(db__$1.eavt);
});

datascript.db.DB.prototype.cljs$core$IReversible$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (db){
var db__$1 = this;
return cljs.core._rseq(db__$1.eavt);
});

datascript.db.DB.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (db){
var db__$1 = this;
return (datascript.db.hash_db.cljs$core$IFn$_invoke$arity$1 ? datascript.db.hash_db.cljs$core$IFn$_invoke$arity$1(db__$1) : datascript.db.hash_db.call(null,db__$1));
});

datascript.db.DB.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (db,other){
var db__$1 = this;
return (datascript.db.equiv_db.cljs$core$IFn$_invoke$arity$2 ? datascript.db.equiv_db.cljs$core$IFn$_invoke$arity$2(db__$1,other) : datascript.db.equiv_db.call(null,db__$1,other));
});

datascript.db.DB.prototype.cljs$core$IEmptyableCollection$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (db){
var db__$1 = this;
var G__24814 = db__$1.schema;
return (datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1(G__24814) : datascript.db.empty_db.call(null,G__24814));
});

datascript.db.DB.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (db){
var db__$1 = this;
return cljs.core._seq(db__$1.eavt);
});

datascript.db.DB.prototype.datascript$db$IIndexAccess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.datascript$db$IIndexAccess$_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db__$1,index),(datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$3 ? datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$3(db__$1,index,cs) : datascript.db.components__GT_pattern.call(null,db__$1,index,cs)));
});

datascript.db.DB.prototype.datascript$db$IIndexAccess$_seek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db__$1,index),(datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$3 ? datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$3(db__$1,index,cs) : datascript.db.components__GT_pattern.call(null,db__$1,index,cs)),(new datascript.db.Datom(null,null,null,null,null)));
});

datascript.db.DB.prototype.datascript$db$IIndexAccess$_index_range$arity$4 = (function (db,attr,start,end){
var db__$1 = this;
if(cljs.core.truth_((datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2(db__$1,attr) : datascript.db.indexing_QMARK_.call(null,db__$1,attr)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Attribute"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr], 0)))].join(''),"should be marked as :db/index true");
}

var G__24815_24821 = attr;
var G__24816_24822 = cljs.core._conj(cljs.core._conj((function (){var x__8014__auto__ = attr;
return cljs.core._conj((function (){var x__8014__auto____$1 = start;
return cljs.core._conj((function (){var x__8014__auto____$2 = end;
return cljs.core._conj(cljs.core.List.EMPTY,x__8014__auto____$2);
})(),x__8014__auto____$1);
})(),x__8014__auto__);
})(),cljs.core.cst$sym$db),cljs.core.cst$sym$_DASH_index_DASH_range);
(datascript.db.validate_attr.cljs$core$IFn$_invoke$arity$2 ? datascript.db.validate_attr.cljs$core$IFn$_invoke$arity$2(G__24815_24821,G__24816_24822) : datascript.db.validate_attr.call(null,G__24815_24821,G__24816_24822));

return datascript.btset.slice.cljs$core$IFn$_invoke$arity$3(db__$1.avet,(datascript.db.resolve_datom.cljs$core$IFn$_invoke$arity$5 ? datascript.db.resolve_datom.cljs$core$IFn$_invoke$arity$5(db__$1,null,attr,start,null) : datascript.db.resolve_datom.call(null,db__$1,null,attr,start,null)),(datascript.db.resolve_datom.cljs$core$IFn$_invoke$arity$5 ? datascript.db.resolve_datom.cljs$core$IFn$_invoke$arity$5(db__$1,null,attr,end,null) : datascript.db.resolve_datom.call(null,db__$1,null,attr,end,null)));
});

datascript.db.DB.prototype.datascript$db$IDB$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.datascript$db$IDB$_schema$arity$1 = (function (db){
var db__$1 = this;
return db__$1.schema;
});

datascript.db.DB.prototype.datascript$db$IDB$_attrs_by$arity$2 = (function (db,property){
var db__$1 = this;
return db__$1.rschema.call(null,property);
});

datascript.db.DB.prototype.datascript$db$ISearch$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.datascript$db$ISearch$_search$arity$2 = (function (db,pattern){
var db__$1 = this;
var vec__24817 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24817,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24817,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24817,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24817,(3),null);
var eavt = db__$1.eavt;
var aevt = db__$1.aevt;
var avet = db__$1.avet;
if(cljs.core.truth_(e)){
if(cljs.core.truth_(a)){
if(cljs.core.some_QMARK_(v)){
if(cljs.core.truth_(tx)){
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(eavt,(new datascript.db.Datom(e,a,v,tx,null)));
} else {
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(eavt,(new datascript.db.Datom(e,a,v,null,null)));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__24817,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.tx);
});})(vec__24817,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(eavt,(new datascript.db.Datom(e,a,null,null,null))));
} else {
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(eavt,(new datascript.db.Datom(e,a,null,null,null)));
}
}
} else {
if(cljs.core.some_QMARK_(v)){
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__24817,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.tx));
});})(vec__24817,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(eavt,(new datascript.db.Datom(e,null,null,null,null))));
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__24817,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v);
});})(vec__24817,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(eavt,(new datascript.db.Datom(e,null,null,null,null))));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__24817,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.tx);
});})(vec__24817,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(eavt,(new datascript.db.Datom(e,null,null,null,null))));
} else {
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(eavt,(new datascript.db.Datom(e,null,null,null,null)));
}
}
}
} else {
if(cljs.core.truth_(a)){
if(cljs.core.some_QMARK_(v)){
if(cljs.core.truth_(tx)){
if(cljs.core.truth_((datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2(db__$1,a) : datascript.db.indexing_QMARK_.call(null,db__$1,a)))){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__24817,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.tx);
});})(vec__24817,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(avet,(new datascript.db.Datom(null,a,v,null,null))));
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__24817,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.tx));
});})(vec__24817,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(aevt,(new datascript.db.Datom(null,a,null,null,null))));
}
} else {
if(cljs.core.truth_((datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2(db__$1,a) : datascript.db.indexing_QMARK_.call(null,db__$1,a)))){
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(avet,(new datascript.db.Datom(null,a,v,null,null)));
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__24817,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v);
});})(vec__24817,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(aevt,(new datascript.db.Datom(null,a,null,null,null))));
}
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__24817,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.tx);
});})(vec__24817,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(aevt,(new datascript.db.Datom(null,a,null,null,null))));
} else {
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(aevt,(new datascript.db.Datom(null,a,null,null,null)));
}
}
} else {
if(cljs.core.some_QMARK_(v)){
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__24817,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.tx));
});})(vec__24817,e,a,v,tx,eavt,aevt,avet,db__$1))
,eavt);
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__24817,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v);
});})(vec__24817,e,a,v,tx,eavt,aevt,avet,db__$1))
,eavt);
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__24817,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.tx);
});})(vec__24817,e,a,v,tx,eavt,aevt,avet,db__$1))
,eavt);
} else {
return eavt;
}
}
}
}
});
datascript.db.db_QMARK_ = (function datascript$db$db_QMARK_(x){
var and__7073__auto__ = ((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.datascript$db$ISearch$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,x):false)):cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,x));
if(and__7073__auto__){
var and__7073__auto____$1 = ((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.datascript$db$IIndexAccess$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IIndexAccess,x):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IIndexAccess,x));
if(and__7073__auto____$1){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.datascript$db$IDB$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(datascript.db.IDB,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(datascript.db.IDB,x);
}
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.db.FilteredDB = (function (unfiltered_db,pred,hash,__meta,__extmap,__hash){
this.unfiltered_db = unfiltered_db;
this.pred = pred;
this.hash = hash;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7755__auto__,k__7756__auto__){
var self__ = this;
var this__7755__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7755__auto____$1,k__7756__auto__,null);
});

datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7757__auto__,k24837,else__7758__auto__){
var self__ = this;
var this__7757__auto____$1 = this;
var G__24839 = (((k24837 instanceof cljs.core.Keyword))?k24837.fqn:null);
switch (G__24839) {
case "unfiltered-db":
return self__.unfiltered_db;

break;
case "pred":
return self__.pred;

break;
case "hash":
return self__.hash;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24837,else__7758__auto__);

}
});

datascript.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7769__auto__,writer__7770__auto__,opts__7771__auto__){
var self__ = this;
var this__7769__auto____$1 = this;
var pr_pair__7772__auto__ = ((function (this__7769__auto____$1){
return (function (keyval__7773__auto__){
return cljs.core.pr_sequential_writer(writer__7770__auto__,cljs.core.pr_writer,""," ","",opts__7771__auto__,keyval__7773__auto__);
});})(this__7769__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7770__auto__,pr_pair__7772__auto__,"#datascript.db.FilteredDB{",", ","}",opts__7771__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$unfiltered_DASH_db,self__.unfiltered_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pred,self__.pred],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hash,self__.hash],null))], null),self__.__extmap));
});

datascript.db.FilteredDB.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24836){
var self__ = this;
var G__24836__$1 = this;
return (new cljs.core.RecordIter((0),G__24836__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unfiltered_DASH_db,cljs.core.cst$kw$pred,cljs.core.cst$kw$hash], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.db.FilteredDB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7753__auto__){
var self__ = this;
var this__7753__auto____$1 = this;
return self__.__meta;
});

datascript.db.FilteredDB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7749__auto__){
var self__ = this;
var this__7749__auto____$1 = this;
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.db.FilteredDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7759__auto__){
var self__ = this;
var this__7759__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.db.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7750__auto__){
var self__ = this;
var this__7750__auto____$1 = this;
var h__7522__auto__ = self__.__hash;
if(!((h__7522__auto__ == null))){
return h__7522__auto__;
} else {
var h__7522__auto____$1 = cljs.core.hash_imap(this__7750__auto____$1);
self__.__hash = h__7522__auto____$1;

return h__7522__auto____$1;
}
});

datascript.db.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7751__auto__,other__7752__auto__){
var self__ = this;
var this__7751__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7073__auto__ = other__7752__auto__;
if(cljs.core.truth_(and__7073__auto__)){
var and__7073__auto____$1 = (this__7751__auto____$1.constructor === other__7752__auto__.constructor);
if(and__7073__auto____$1){
return cljs.core.equiv_map(this__7751__auto____$1,other__7752__auto__);
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.db.FilteredDB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7764__auto__,k__7765__auto__){
var self__ = this;
var this__7764__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hash,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$unfiltered_DASH_db,null], null), null),k__7765__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7764__auto____$1),self__.__meta),k__7765__auto__);
} else {
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7765__auto__)),null));
}
});

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7762__auto__,k__7763__auto__,G__24836){
var self__ = this;
var this__7762__auto____$1 = this;
var pred__24840 = cljs.core.keyword_identical_QMARK_;
var expr__24841 = k__7763__auto__;
if(cljs.core.truth_((function (){var G__24843 = cljs.core.cst$kw$unfiltered_DASH_db;
var G__24844 = expr__24841;
return (pred__24840.cljs$core$IFn$_invoke$arity$2 ? pred__24840.cljs$core$IFn$_invoke$arity$2(G__24843,G__24844) : pred__24840.call(null,G__24843,G__24844));
})())){
return (new datascript.db.FilteredDB(G__24836,self__.pred,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24845 = cljs.core.cst$kw$pred;
var G__24846 = expr__24841;
return (pred__24840.cljs$core$IFn$_invoke$arity$2 ? pred__24840.cljs$core$IFn$_invoke$arity$2(G__24845,G__24846) : pred__24840.call(null,G__24845,G__24846));
})())){
return (new datascript.db.FilteredDB(self__.unfiltered_db,G__24836,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24847 = cljs.core.cst$kw$hash;
var G__24848 = expr__24841;
return (pred__24840.cljs$core$IFn$_invoke$arity$2 ? pred__24840.cljs$core$IFn$_invoke$arity$2(G__24847,G__24848) : pred__24840.call(null,G__24847,G__24848));
})())){
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,G__24836,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7763__auto__,G__24836),null));
}
}
}
});

datascript.db.FilteredDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7767__auto__){
var self__ = this;
var this__7767__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$unfiltered_DASH_db,self__.unfiltered_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pred,self__.pred],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hash,self__.hash],null))], null),self__.__extmap));
});

datascript.db.FilteredDB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7754__auto__,G__24836){
var self__ = this;
var this__7754__auto____$1 = this;
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,G__24836,self__.__extmap,self__.__hash));
});

datascript.db.FilteredDB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7760__auto__,entry__7761__auto__){
var self__ = this;
var this__7760__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7761__auto__)){
return cljs.core._assoc(this__7760__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7760__auto____$1,entry__7761__auto__);
}
});

datascript.db.FilteredDB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$unfiltered_DASH_db,cljs.core.cst$sym$pred,cljs.core.cst$sym$hash], null);
});

datascript.db.FilteredDB.cljs$lang$type = true;

datascript.db.FilteredDB.cljs$lang$ctorPrSeq = (function (this__7791__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.db/FilteredDB");
});

datascript.db.FilteredDB.cljs$lang$ctorPrWriter = (function (this__7791__auto__,writer__7792__auto__){
return cljs.core._write(writer__7792__auto__,"datascript.db/FilteredDB");
});

datascript.db.__GT_FilteredDB = (function datascript$db$__GT_FilteredDB(unfiltered_db,pred,hash){
return (new datascript.db.FilteredDB(unfiltered_db,pred,hash,null,null,null));
});

datascript.db.map__GT_FilteredDB = (function datascript$db$map__GT_FilteredDB(G__24838){
return (new datascript.db.FilteredDB(cljs.core.cst$kw$unfiltered_DASH_db.cljs$core$IFn$_invoke$arity$1(G__24838),cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(G__24838),cljs.core.cst$kw$hash.cljs$core$IFn$_invoke$arity$1(G__24838),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24838,cljs.core.cst$kw$unfiltered_DASH_db,cljs.core.array_seq([cljs.core.cst$kw$pred,cljs.core.cst$kw$hash], 0)),null));
});


datascript.db.FilteredDB.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,___$1){
var ___$2 = this;
throw (new Error("-lookup is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,___$1,___$2){
var ___$3 = this;
throw (new Error("-lookup is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return (datascript.db.pr_db.cljs$core$IFn$_invoke$arity$3 ? datascript.db.pr_db.cljs$core$IFn$_invoke$arity$3(db__$1,w,opts) : datascript.db.pr_db.call(null,db__$1,w,opts));
});

datascript.db.FilteredDB.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.count(datascript.db._datoms(db__$1,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY));
});

datascript.db.FilteredDB.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (db){
var db__$1 = this;
return (datascript.db.hash_fdb.cljs$core$IFn$_invoke$arity$1 ? datascript.db.hash_fdb.cljs$core$IFn$_invoke$arity$1(db__$1) : datascript.db.hash_fdb.call(null,db__$1));
});

datascript.db.FilteredDB.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (db,other){
var db__$1 = this;
return (datascript.db.equiv_db.cljs$core$IFn$_invoke$arity$2 ? datascript.db.equiv_db.cljs$core$IFn$_invoke$arity$2(db__$1,other) : datascript.db.equiv_db.call(null,db__$1,other));
});

datascript.db.FilteredDB.prototype.cljs$core$IEmptyableCollection$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var ___$1 = this;
throw (new Error("-empty is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,___$1){
var ___$2 = this;
throw (new Error("-contains-key? is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,___$1,___$2){
var ___$3 = this;
throw (new Error("-assoc is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (db){
var db__$1 = this;
return datascript.db._datoms(db__$1,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY);
});

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(db__$1.pred,datascript.db._datoms(db__$1.unfiltered_db,index,cs));
});

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_seek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(db__$1.pred,datascript.db._seek_datoms(db__$1.unfiltered_db,index,cs));
});

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_index_range$arity$4 = (function (db,attr,start,end){
var db__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(db__$1.pred,datascript.db._index_range(db__$1.unfiltered_db,attr,start,end));
});

datascript.db.FilteredDB.prototype.datascript$db$IDB$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.datascript$db$IDB$_schema$arity$1 = (function (db){
var db__$1 = this;
return datascript.db._schema(db__$1.unfiltered_db);
});

datascript.db.FilteredDB.prototype.datascript$db$IDB$_attrs_by$arity$2 = (function (db,property){
var db__$1 = this;
return datascript.db._attrs_by(db__$1.unfiltered_db,property);
});

datascript.db.FilteredDB.prototype.datascript$db$ISearch$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.datascript$db$ISearch$_search$arity$2 = (function (db,pattern){
var db__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(db__$1.pred,datascript.db._search(db__$1.unfiltered_db,pattern));
});
datascript.db.attr__GT_properties = (function datascript$db$attr__GT_properties(k,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_isComponent,true], null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_isComponent], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$kw$db$type_SLASH_ref)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db$type_SLASH_ref,cljs.core.cst$kw$db_SLASH_index], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$kw$db$cardinality_SLASH_many)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db$cardinality_SLASH_many], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$kw$db$unique_SLASH_identity)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_unique,cljs.core.cst$kw$db$unique_SLASH_identity,cljs.core.cst$kw$db_SLASH_index], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$kw$db$unique_SLASH_value)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_unique,cljs.core.cst$kw$db$unique_SLASH_value,cljs.core.cst$kw$db_SLASH_index], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_index,true], null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_index], null);
} else {
return null;
}
}
}
}
}
}
});
datascript.db.multimap = (function datascript$db$multimap(e,m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__24854){
var vec__24855 = p__24854;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24855,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24855,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,e),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
datascript.db.rschema = (function datascript$db$rschema(schema){
return datascript.db.multimap(cljs.core.PersistentHashSet.EMPTY,(function (){var iter__7942__auto__ = (function datascript$db$rschema_$_iter__24895(s__24896){
return (new cljs.core.LazySeq(null,(function (){
var s__24896__$1 = s__24896;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__24896__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var vec__24918 = cljs.core.first(xs__7309__auto__);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24918,(0),null);
var kv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24918,(1),null);
var iterys__7938__auto__ = ((function (s__24896__$1,vec__24918,a,kv,xs__7309__auto__,temp__6753__auto__){
return (function datascript$db$rschema_$_iter__24895_$_iter__24897(s__24898){
return (new cljs.core.LazySeq(null,((function (s__24896__$1,vec__24918,a,kv,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__24898__$1 = s__24898;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__24898__$1);
if(temp__6753__auto____$1){
var xs__7309__auto____$1 = temp__6753__auto____$1;
var vec__24927 = cljs.core.first(xs__7309__auto____$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24927,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24927,(1),null);
var iterys__7938__auto__ = ((function (s__24898__$1,s__24896__$1,vec__24927,k,v,xs__7309__auto____$1,temp__6753__auto____$1,vec__24918,a,kv,xs__7309__auto__,temp__6753__auto__){
return (function datascript$db$rschema_$_iter__24895_$_iter__24897_$_iter__24899(s__24900){
return (new cljs.core.LazySeq(null,((function (s__24898__$1,s__24896__$1,vec__24927,k,v,xs__7309__auto____$1,temp__6753__auto____$1,vec__24918,a,kv,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__24900__$1 = s__24900;
while(true){
var temp__6753__auto____$2 = cljs.core.seq(s__24900__$1);
if(temp__6753__auto____$2){
var s__24900__$2 = temp__6753__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__24900__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__24900__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__24902 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__24901 = (0);
while(true){
if((i__24901 < size__7941__auto__)){
var prop = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__24901);
cljs.core.chunk_append(b__24902,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,a], null));

var G__24932 = (i__24901 + (1));
i__24901 = G__24932;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24902),datascript$db$rschema_$_iter__24895_$_iter__24897_$_iter__24899(cljs.core.chunk_rest(s__24900__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24902),null);
}
} else {
var prop = cljs.core.first(s__24900__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,a], null),datascript$db$rschema_$_iter__24895_$_iter__24897_$_iter__24899(cljs.core.rest(s__24900__$2)));
}
} else {
return null;
}
break;
}
});})(s__24898__$1,s__24896__$1,vec__24927,k,v,xs__7309__auto____$1,temp__6753__auto____$1,vec__24918,a,kv,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__24898__$1,s__24896__$1,vec__24927,k,v,xs__7309__auto____$1,temp__6753__auto____$1,vec__24918,a,kv,xs__7309__auto__,temp__6753__auto__))
;
var fs__7939__auto__ = cljs.core.seq(iterys__7938__auto__(datascript.db.attr__GT_properties(k,v)));
if(fs__7939__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7939__auto__,datascript$db$rschema_$_iter__24895_$_iter__24897(cljs.core.rest(s__24898__$1)));
} else {
var G__24933 = cljs.core.rest(s__24898__$1);
s__24898__$1 = G__24933;
continue;
}
} else {
return null;
}
break;
}
});})(s__24896__$1,vec__24918,a,kv,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__24896__$1,vec__24918,a,kv,xs__7309__auto__,temp__6753__auto__))
;
var fs__7939__auto__ = cljs.core.seq(iterys__7938__auto__(kv));
if(fs__7939__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7939__auto__,datascript$db$rschema_$_iter__24895(cljs.core.rest(s__24896__$1)));
} else {
var G__24934 = cljs.core.rest(s__24896__$1);
s__24896__$1 = G__24934;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7942__auto__(schema);
})());
});
datascript.db.validate_schema_key = (function datascript$db$validate_schema_key(a,k,v,expected){
if(((v == null)) || (cljs.core.contains_QMARK_(expected,v))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Bad attribute specification for "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.fromArray([a,cljs.core.PersistentArrayMap.fromArray([k,v], true, false)], true, false)], 0))),cljs.core.str(", expected one of "),cljs.core.str(expected)].join(''),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$error,cljs.core.cst$kw$schema_SLASH_validation,cljs.core.cst$kw$attribute,a,cljs.core.cst$kw$key,k,cljs.core.cst$kw$value,v], null));
}
});
datascript.db.validate_schema = (function datascript$db$validate_schema(schema){
var seq__24945_24955 = cljs.core.seq(schema);
var chunk__24946_24956 = null;
var count__24947_24957 = (0);
var i__24948_24958 = (0);
while(true){
if((i__24948_24958 < count__24947_24957)){
var vec__24949_24959 = chunk__24946_24956.cljs$core$IIndexed$_nth$arity$2(null,i__24948_24958);
var a_24960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24949_24959,(0),null);
var kv_24961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24949_24959,(1),null);
var comp_QMARK__24962 = cljs.core.cst$kw$db_SLASH_isComponent.cljs$core$IFn$_invoke$arity$2(kv_24961,false);
datascript.db.validate_schema_key(a_24960,cljs.core.cst$kw$db_SLASH_isComponent,cljs.core.cst$kw$db_SLASH_isComponent.cljs$core$IFn$_invoke$arity$1(kv_24961),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null));

if(cljs.core.truth_((function (){var and__7073__auto__ = comp_QMARK__24962;
if(cljs.core.truth_(and__7073__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db_SLASH_valueType.cljs$core$IFn$_invoke$arity$1(kv_24961),cljs.core.cst$kw$db$type_SLASH_ref);
} else {
return and__7073__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Bad attribute specification for "),cljs.core.str(a_24960),cljs.core.str(": {:db/isComponent true} should also have {:db/valueType :db.type/ref}")].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$schema_SLASH_validation,cljs.core.cst$kw$attribute,a_24960,cljs.core.cst$kw$key,cljs.core.cst$kw$db_SLASH_isComponent], null));
} else {
}

datascript.db.validate_schema_key(a_24960,cljs.core.cst$kw$db_SLASH_unique,cljs.core.cst$kw$db_SLASH_unique.cljs$core$IFn$_invoke$arity$1(kv_24961),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db$unique_SLASH_identity,null,cljs.core.cst$kw$db$unique_SLASH_value,null], null), null));

datascript.db.validate_schema_key(a_24960,cljs.core.cst$kw$db_SLASH_valueType,cljs.core.cst$kw$db_SLASH_valueType.cljs$core$IFn$_invoke$arity$1(kv_24961),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db$type_SLASH_ref,null], null), null));

datascript.db.validate_schema_key(a_24960,cljs.core.cst$kw$db_SLASH_cardinality,cljs.core.cst$kw$db_SLASH_cardinality.cljs$core$IFn$_invoke$arity$1(kv_24961),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db$cardinality_SLASH_many,null,cljs.core.cst$kw$db$cardinality_SLASH_one,null], null), null));

var G__24963 = seq__24945_24955;
var G__24964 = chunk__24946_24956;
var G__24965 = count__24947_24957;
var G__24966 = (i__24948_24958 + (1));
seq__24945_24955 = G__24963;
chunk__24946_24956 = G__24964;
count__24947_24957 = G__24965;
i__24948_24958 = G__24966;
continue;
} else {
var temp__6753__auto___24967 = cljs.core.seq(seq__24945_24955);
if(temp__6753__auto___24967){
var seq__24945_24968__$1 = temp__6753__auto___24967;
if(cljs.core.chunked_seq_QMARK_(seq__24945_24968__$1)){
var c__7991__auto___24969 = cljs.core.chunk_first(seq__24945_24968__$1);
var G__24970 = cljs.core.chunk_rest(seq__24945_24968__$1);
var G__24971 = c__7991__auto___24969;
var G__24972 = cljs.core.count(c__7991__auto___24969);
var G__24973 = (0);
seq__24945_24955 = G__24970;
chunk__24946_24956 = G__24971;
count__24947_24957 = G__24972;
i__24948_24958 = G__24973;
continue;
} else {
var vec__24952_24974 = cljs.core.first(seq__24945_24968__$1);
var a_24975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24952_24974,(0),null);
var kv_24976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24952_24974,(1),null);
var comp_QMARK__24977 = cljs.core.cst$kw$db_SLASH_isComponent.cljs$core$IFn$_invoke$arity$2(kv_24976,false);
datascript.db.validate_schema_key(a_24975,cljs.core.cst$kw$db_SLASH_isComponent,cljs.core.cst$kw$db_SLASH_isComponent.cljs$core$IFn$_invoke$arity$1(kv_24976),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null));

if(cljs.core.truth_((function (){var and__7073__auto__ = comp_QMARK__24977;
if(cljs.core.truth_(and__7073__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db_SLASH_valueType.cljs$core$IFn$_invoke$arity$1(kv_24976),cljs.core.cst$kw$db$type_SLASH_ref);
} else {
return and__7073__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Bad attribute specification for "),cljs.core.str(a_24975),cljs.core.str(": {:db/isComponent true} should also have {:db/valueType :db.type/ref}")].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$schema_SLASH_validation,cljs.core.cst$kw$attribute,a_24975,cljs.core.cst$kw$key,cljs.core.cst$kw$db_SLASH_isComponent], null));
} else {
}

datascript.db.validate_schema_key(a_24975,cljs.core.cst$kw$db_SLASH_unique,cljs.core.cst$kw$db_SLASH_unique.cljs$core$IFn$_invoke$arity$1(kv_24976),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db$unique_SLASH_identity,null,cljs.core.cst$kw$db$unique_SLASH_value,null], null), null));

datascript.db.validate_schema_key(a_24975,cljs.core.cst$kw$db_SLASH_valueType,cljs.core.cst$kw$db_SLASH_valueType.cljs$core$IFn$_invoke$arity$1(kv_24976),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db$type_SLASH_ref,null], null), null));

datascript.db.validate_schema_key(a_24975,cljs.core.cst$kw$db_SLASH_cardinality,cljs.core.cst$kw$db_SLASH_cardinality.cljs$core$IFn$_invoke$arity$1(kv_24976),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db$cardinality_SLASH_many,null,cljs.core.cst$kw$db$cardinality_SLASH_one,null], null), null));

var G__24978 = cljs.core.next(seq__24945_24968__$1);
var G__24979 = null;
var G__24980 = (0);
var G__24981 = (0);
seq__24945_24955 = G__24978;
chunk__24946_24956 = G__24979;
count__24947_24957 = G__24980;
i__24948_24958 = G__24981;
continue;
}
} else {
}
}
break;
}

return schema;
});
datascript.db.empty_db = (function datascript$db$empty_db(var_args){
var args24982 = [];
var len__8301__auto___24985 = arguments.length;
var i__8302__auto___24986 = (0);
while(true){
if((i__8302__auto___24986 < len__8301__auto___24985)){
args24982.push((arguments[i__8302__auto___24986]));

var G__24987 = (i__8302__auto___24986 + (1));
i__8302__auto___24986 = G__24987;
continue;
} else {
}
break;
}

var G__24984 = args24982.length;
switch (G__24984) {
case 0:
return datascript.db.empty_db.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24982.length)].join('')));

}
});

datascript.db.empty_db.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1(datascript.db.default_schema);
});

datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1 = (function (schema){
if(((schema == null)) || (cljs.core.map_QMARK_(schema))){
} else {
throw (new Error("Assert failed: (or (nil? schema) (map? schema))"));
}

return datascript.db.map__GT_DB(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$schema,datascript.db.validate_schema(schema),cljs.core.cst$kw$eavt,datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.db.cmp_datoms_eavt),cljs.core.cst$kw$aevt,datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.db.cmp_datoms_aevt),cljs.core.cst$kw$avet,datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.db.cmp_datoms_avet),cljs.core.cst$kw$max_DASH_eid,(0),cljs.core.cst$kw$max_DASH_tx,datascript.db.tx0,cljs.core.cst$kw$rschema,datascript.db.rschema(schema),cljs.core.cst$kw$hash,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)))], null));
});

datascript.db.empty_db.cljs$lang$maxFixedArity = 1;

datascript.db.init_max_eid = (function datascript$db$init_max_eid(eavt){
var temp__6751__auto__ = datascript.btset.slice.cljs$core$IFn$_invoke$arity$3(eavt,(new datascript.db.Datom(null,null,null,null,null)),(new datascript.db.Datom((datascript.db.tx0 - (1)),null,null,null,null)));
if(cljs.core.truth_(temp__6751__auto__)){
var slice = temp__6751__auto__;
return cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.rseq(slice)));
} else {
return (0);
}
});
datascript.db.init_db = (function datascript$db$init_db(var_args){
var args24989 = [];
var len__8301__auto___24992 = arguments.length;
var i__8302__auto___24993 = (0);
while(true){
if((i__8302__auto___24993 < len__8301__auto___24992)){
args24989.push((arguments[i__8302__auto___24993]));

var G__24994 = (i__8302__auto___24993 + (1));
i__8302__auto___24993 = G__24994;
continue;
} else {
}
break;
}

var G__24991 = args24989.length;
switch (G__24991) {
case 1:
return datascript.db.init_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.db.init_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24989.length)].join('')));

}
});

datascript.db.init_db.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.db.init_db.cljs$core$IFn$_invoke$arity$2(datoms,datascript.db.default_schema);
});

datascript.db.init_db.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
if(cljs.core.empty_QMARK_(datoms)){
return datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1(schema);
} else {
var _ = datascript.db.validate_schema(schema);
var rschema = datascript.db.rschema(schema);
var indexed = cljs.core.cst$kw$db_SLASH_index.cljs$core$IFn$_invoke$arity$1(rschema);
var ds_arr = (datascript.arrays.into_array.cljs$core$IFn$_invoke$arity$1 ? datascript.arrays.into_array.cljs$core$IFn$_invoke$arity$1(datoms) : datascript.arrays.into_array.call(null,datoms));
var eavt = datascript.btset._btset_from_sorted_arr(ds_arr.sort(datascript.db.cmp_datoms_eavt_quick),datascript.db.cmp_datoms_eavt);
var aevt = datascript.btset._btset_from_sorted_arr(ds_arr.sort(datascript.db.cmp_datoms_aevt_quick),datascript.db.cmp_datoms_aevt);
var avet_datoms = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_,rschema,indexed,ds_arr,eavt,aevt){
return (function (arr,d){
if(cljs.core.contains_QMARK_(indexed,d.a)){
arr.push(d);
} else {
}

return arr;
});})(_,rschema,indexed,ds_arr,eavt,aevt))
,[],datoms).sort(datascript.db.cmp_datoms_avet_quick);
var avet = datascript.btset._btset_from_sorted_arr(avet_datoms,datascript.db.cmp_datoms_avet);
var max_eid = datascript.db.init_max_eid(eavt);
var max_tx = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (_,rschema,indexed,ds_arr,eavt,aevt,avet_datoms,avet,max_eid){
return (function (d){
return d.tx;
});})(_,rschema,indexed,ds_arr,eavt,aevt,avet_datoms,avet,max_eid))
),cljs.core.max,datascript.db.tx0,eavt);
return datascript.db.map__GT_DB(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$schema,schema,cljs.core.cst$kw$eavt,eavt,cljs.core.cst$kw$aevt,aevt,cljs.core.cst$kw$avet,avet,cljs.core.cst$kw$max_DASH_eid,max_eid,cljs.core.cst$kw$max_DASH_tx,max_tx,cljs.core.cst$kw$rschema,rschema,cljs.core.cst$kw$hash,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)))], null));
}
});

datascript.db.init_db.cljs$lang$maxFixedArity = 2;

datascript.db.equiv_db_index = (function datascript$db$equiv_db_index(x,y){
var xs = cljs.core.seq(x);
var ys = cljs.core.seq(y);
while(true){
if((xs == null)){
return (ys == null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs),cljs.core.first(ys))){
var G__24996 = cljs.core.next(xs);
var G__24997 = cljs.core.next(ys);
xs = G__24996;
ys = G__24997;
continue;
} else {
return false;

}
}
break;
}
});
datascript.db.hash_db = (function datascript$db$hash_db(db){
var h = (function (){var G__25001 = db.hash;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25001) : cljs.core.deref.call(null,G__25001));
})();
if((h === (0))){
var G__25002 = db.hash;
var G__25003 = datascript.db.combine_hashes(cljs.core.hash(db.schema),cljs.core.hash(db.eavt));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25002,G__25003) : cljs.core.reset_BANG_.call(null,G__25002,G__25003));
} else {
return h;
}
});
datascript.db.hash_fdb = (function datascript$db$hash_fdb(db){
var h = (function (){var G__25007 = db.hash;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25007) : cljs.core.deref.call(null,G__25007));
})();
var datoms = (function (){var or__7085__auto__ = datascript.db._datoms(db,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if((h === (0))){
var datoms__$1 = (function (){var or__7085__auto__ = datascript.db._datoms(db,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var G__25008 = db.hash;
var G__25009 = datascript.db.combine_hashes(cljs.core.hash(datascript.db._schema(db)),cljs.core.hash_unordered_coll(datoms__$1));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25008,G__25009) : cljs.core.reset_BANG_.call(null,G__25008,G__25009));
} else {
return h;
}
});
datascript.db.equiv_db = (function datascript$db$equiv_db(db,other){
var and__7073__auto__ = ((other instanceof datascript.db.DB)) || ((other instanceof datascript.db.FilteredDB));
if(and__7073__auto__){
var and__7073__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(datascript.db._schema(db),datascript.db._schema(other));
if(and__7073__auto____$1){
return datascript.db.equiv_db_index(datascript.db._datoms(db,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY),datascript.db._datoms(other,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY));
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
});
datascript.db.pr_db = (function datascript$db$pr_db(db,w,opts){
cljs.core._write(w,"#datascript/DB {");

cljs.core._write(w,":schema ");

cljs.core.pr_writer(datascript.db._schema(db),w,opts);

cljs.core._write(w,", :datoms ");

cljs.core.pr_sequential_writer(w,(function (d,w__$1,opts__$1){
return cljs.core.pr_sequential_writer(w__$1,cljs.core.pr_writer,"["," ","]",opts__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.e,d.a,d.v,d.tx], null));
}),"["," ","]",opts,datascript.db._datoms(db,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY));

return cljs.core._write(w,"}");
});
datascript.db.db_from_reader = (function datascript$db$db_from_reader(p__25010){
var map__25017 = p__25010;
var map__25017__$1 = ((((!((map__25017 == null)))?((((map__25017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25017.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25017):map__25017);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25017__$1,cljs.core.cst$kw$schema);
var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25017__$1,cljs.core.cst$kw$datoms);
return datascript.db.init_db.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__25017,map__25017__$1,schema,datoms){
return (function (p__25019){
var vec__25020 = p__25019;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25020,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25020,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25020,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25020,(3),null);
return (new datascript.db.Datom(e,a,v,tx,true));
});})(map__25017,map__25017__$1,schema,datoms))
,datoms),schema);
});


datascript.db.resolve_datom = (function datascript$db$resolve_datom(db,e,a,v,t){
if(cljs.core.truth_(a)){
var G__25025_25027 = a;
var G__25026_25028 = cljs.core._conj(cljs.core._conj((function (){var x__8014__auto__ = e;
return cljs.core._conj((function (){var x__8014__auto____$1 = a;
return cljs.core._conj((function (){var x__8014__auto____$2 = v;
return cljs.core._conj((function (){var x__8014__auto____$3 = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__8014__auto____$3);
})(),x__8014__auto____$2);
})(),x__8014__auto____$1);
})(),x__8014__auto__);
})(),cljs.core.cst$sym$db),cljs.core.cst$sym$resolve_DASH_datom);
(datascript.db.validate_attr.cljs$core$IFn$_invoke$arity$2 ? datascript.db.validate_attr.cljs$core$IFn$_invoke$arity$2(G__25025_25027,G__25026_25028) : datascript.db.validate_attr.call(null,G__25025_25027,G__25026_25028));
} else {
}

return (new datascript.db.Datom((datascript.db.entid_some.cljs$core$IFn$_invoke$arity$2 ? datascript.db.entid_some.cljs$core$IFn$_invoke$arity$2(db,e) : datascript.db.entid_some.call(null,db,e)),a,(cljs.core.truth_((function (){var and__7073__auto__ = cljs.core.some_QMARK_(v);
if(and__7073__auto__){
return (datascript.db.ref_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.db.ref_QMARK_.cljs$core$IFn$_invoke$arity$2(db,a) : datascript.db.ref_QMARK_.call(null,db,a));
} else {
return and__7073__auto__;
}
})())?(datascript.db.entid_strict.cljs$core$IFn$_invoke$arity$2 ? datascript.db.entid_strict.cljs$core$IFn$_invoke$arity$2(db,v) : datascript.db.entid_strict.call(null,db,v)):v),(datascript.db.entid_some.cljs$core$IFn$_invoke$arity$2 ? datascript.db.entid_some.cljs$core$IFn$_invoke$arity$2(db,t) : datascript.db.entid_some.call(null,db,t)),null));
});
datascript.db.components__GT_pattern = (function datascript$db$components__GT_pattern(db,index,p__25029){
var vec__25034 = p__25029;
var c0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25034,(0),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25034,(1),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25034,(2),null);
var c3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25034,(3),null);
var G__25037 = (((index instanceof cljs.core.Keyword))?index.fqn:null);
switch (G__25037) {
case "eavt":
return datascript.db.resolve_datom(db,c0,c1,c2,c3);

break;
case "aevt":
return datascript.db.resolve_datom(db,c1,c0,c2,c3);

break;
case "avet":
return datascript.db.resolve_datom(db,c2,c0,c1,c3);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(index)].join('')));

}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.db.TxReport = (function (db_before,db_after,tx_data,tempids,tx_meta,__meta,__extmap,__hash){
this.db_before = db_before;
this.db_after = db_after;
this.tx_data = tx_data;
this.tempids = tempids;
this.tx_meta = tx_meta;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.db.TxReport.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7755__auto__,k__7756__auto__){
var self__ = this;
var this__7755__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7755__auto____$1,k__7756__auto__,null);
});

datascript.db.TxReport.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7757__auto__,k25040,else__7758__auto__){
var self__ = this;
var this__7757__auto____$1 = this;
var G__25042 = (((k25040 instanceof cljs.core.Keyword))?k25040.fqn:null);
switch (G__25042) {
case "db-before":
return self__.db_before;

break;
case "db-after":
return self__.db_after;

break;
case "tx-data":
return self__.tx_data;

break;
case "tempids":
return self__.tempids;

break;
case "tx-meta":
return self__.tx_meta;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25040,else__7758__auto__);

}
});

datascript.db.TxReport.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7769__auto__,writer__7770__auto__,opts__7771__auto__){
var self__ = this;
var this__7769__auto____$1 = this;
var pr_pair__7772__auto__ = ((function (this__7769__auto____$1){
return (function (keyval__7773__auto__){
return cljs.core.pr_sequential_writer(writer__7770__auto__,cljs.core.pr_writer,""," ","",opts__7771__auto__,keyval__7773__auto__);
});})(this__7769__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7770__auto__,pr_pair__7772__auto__,"#datascript.db.TxReport{",", ","}",opts__7771__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$db_DASH_before,self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$db_DASH_after,self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tx_DASH_data,self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tempids,self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tx_DASH_meta,self__.tx_meta],null))], null),self__.__extmap));
});

datascript.db.TxReport.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.TxReport.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25039){
var self__ = this;
var G__25039__$1 = this;
return (new cljs.core.RecordIter((0),G__25039__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_DASH_before,cljs.core.cst$kw$db_DASH_after,cljs.core.cst$kw$tx_DASH_data,cljs.core.cst$kw$tempids,cljs.core.cst$kw$tx_DASH_meta], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.db.TxReport.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7753__auto__){
var self__ = this;
var this__7753__auto____$1 = this;
return self__.__meta;
});

datascript.db.TxReport.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7749__auto__){
var self__ = this;
var this__7749__auto____$1 = this;
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.db.TxReport.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7759__auto__){
var self__ = this;
var this__7759__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

datascript.db.TxReport.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7750__auto__){
var self__ = this;
var this__7750__auto____$1 = this;
var h__7522__auto__ = self__.__hash;
if(!((h__7522__auto__ == null))){
return h__7522__auto__;
} else {
var h__7522__auto____$1 = cljs.core.hash_imap(this__7750__auto____$1);
self__.__hash = h__7522__auto____$1;

return h__7522__auto____$1;
}
});

datascript.db.TxReport.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7751__auto__,other__7752__auto__){
var self__ = this;
var this__7751__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7073__auto__ = other__7752__auto__;
if(cljs.core.truth_(and__7073__auto__)){
var and__7073__auto____$1 = (this__7751__auto____$1.constructor === other__7752__auto__.constructor);
if(and__7073__auto____$1){
return cljs.core.equiv_map(this__7751__auto____$1,other__7752__auto__);
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.db.TxReport.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7764__auto__,k__7765__auto__){
var self__ = this;
var this__7764__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$tempids,null,cljs.core.cst$kw$db_DASH_after,null,cljs.core.cst$kw$db_DASH_before,null,cljs.core.cst$kw$tx_DASH_data,null,cljs.core.cst$kw$tx_DASH_meta,null], null), null),k__7765__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7764__auto____$1),self__.__meta),k__7765__auto__);
} else {
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7765__auto__)),null));
}
});

datascript.db.TxReport.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7762__auto__,k__7763__auto__,G__25039){
var self__ = this;
var this__7762__auto____$1 = this;
var pred__25043 = cljs.core.keyword_identical_QMARK_;
var expr__25044 = k__7763__auto__;
if(cljs.core.truth_((function (){var G__25046 = cljs.core.cst$kw$db_DASH_before;
var G__25047 = expr__25044;
return (pred__25043.cljs$core$IFn$_invoke$arity$2 ? pred__25043.cljs$core$IFn$_invoke$arity$2(G__25046,G__25047) : pred__25043.call(null,G__25046,G__25047));
})())){
return (new datascript.db.TxReport(G__25039,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25048 = cljs.core.cst$kw$db_DASH_after;
var G__25049 = expr__25044;
return (pred__25043.cljs$core$IFn$_invoke$arity$2 ? pred__25043.cljs$core$IFn$_invoke$arity$2(G__25048,G__25049) : pred__25043.call(null,G__25048,G__25049));
})())){
return (new datascript.db.TxReport(self__.db_before,G__25039,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25050 = cljs.core.cst$kw$tx_DASH_data;
var G__25051 = expr__25044;
return (pred__25043.cljs$core$IFn$_invoke$arity$2 ? pred__25043.cljs$core$IFn$_invoke$arity$2(G__25050,G__25051) : pred__25043.call(null,G__25050,G__25051));
})())){
return (new datascript.db.TxReport(self__.db_before,self__.db_after,G__25039,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25052 = cljs.core.cst$kw$tempids;
var G__25053 = expr__25044;
return (pred__25043.cljs$core$IFn$_invoke$arity$2 ? pred__25043.cljs$core$IFn$_invoke$arity$2(G__25052,G__25053) : pred__25043.call(null,G__25052,G__25053));
})())){
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,G__25039,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25054 = cljs.core.cst$kw$tx_DASH_meta;
var G__25055 = expr__25044;
return (pred__25043.cljs$core$IFn$_invoke$arity$2 ? pred__25043.cljs$core$IFn$_invoke$arity$2(G__25054,G__25055) : pred__25043.call(null,G__25054,G__25055));
})())){
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,G__25039,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7763__auto__,G__25039),null));
}
}
}
}
}
});

datascript.db.TxReport.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7767__auto__){
var self__ = this;
var this__7767__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$db_DASH_before,self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$db_DASH_after,self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tx_DASH_data,self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tempids,self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tx_DASH_meta,self__.tx_meta],null))], null),self__.__extmap));
});

datascript.db.TxReport.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7754__auto__,G__25039){
var self__ = this;
var this__7754__auto____$1 = this;
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,G__25039,self__.__extmap,self__.__hash));
});

datascript.db.TxReport.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7760__auto__,entry__7761__auto__){
var self__ = this;
var this__7760__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7761__auto__)){
return cljs.core._assoc(this__7760__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7760__auto____$1,entry__7761__auto__);
}
});

datascript.db.TxReport.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db_DASH_before,cljs.core.cst$sym$db_DASH_after,cljs.core.cst$sym$tx_DASH_data,cljs.core.cst$sym$tempids,cljs.core.cst$sym$tx_DASH_meta], null);
});

datascript.db.TxReport.cljs$lang$type = true;

datascript.db.TxReport.cljs$lang$ctorPrSeq = (function (this__7791__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.db/TxReport");
});

datascript.db.TxReport.cljs$lang$ctorPrWriter = (function (this__7791__auto__,writer__7792__auto__){
return cljs.core._write(writer__7792__auto__,"datascript.db/TxReport");
});

datascript.db.__GT_TxReport = (function datascript$db$__GT_TxReport(db_before,db_after,tx_data,tempids,tx_meta){
return (new datascript.db.TxReport(db_before,db_after,tx_data,tempids,tx_meta,null,null,null));
});

datascript.db.map__GT_TxReport = (function datascript$db$map__GT_TxReport(G__25041){
return (new datascript.db.TxReport(cljs.core.cst$kw$db_DASH_before.cljs$core$IFn$_invoke$arity$1(G__25041),cljs.core.cst$kw$db_DASH_after.cljs$core$IFn$_invoke$arity$1(G__25041),cljs.core.cst$kw$tx_DASH_data.cljs$core$IFn$_invoke$arity$1(G__25041),cljs.core.cst$kw$tempids.cljs$core$IFn$_invoke$arity$1(G__25041),cljs.core.cst$kw$tx_DASH_meta.cljs$core$IFn$_invoke$arity$1(G__25041),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25041,cljs.core.cst$kw$db_DASH_before,cljs.core.array_seq([cljs.core.cst$kw$db_DASH_after,cljs.core.cst$kw$tx_DASH_data,cljs.core.cst$kw$tempids,cljs.core.cst$kw$tx_DASH_meta], 0)),null));
});

datascript.db.is_attr_QMARK_ = (function datascript$db$is_attr_QMARK_(db,attr,property){
return cljs.core.contains_QMARK_(datascript.db._attrs_by(db,property),attr);
});
datascript.db.multival_QMARK_ = (function datascript$db$multival_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,cljs.core.cst$kw$db$cardinality_SLASH_many);
});
datascript.db.ref_QMARK_ = (function datascript$db$ref_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,cljs.core.cst$kw$db$type_SLASH_ref);
});
datascript.db.component_QMARK_ = (function datascript$db$component_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,cljs.core.cst$kw$db_SLASH_isComponent);
});
datascript.db.indexing_QMARK_ = (function datascript$db$indexing_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,cljs.core.cst$kw$db_SLASH_index);
});
datascript.db.entid = (function datascript$db$entid(db,eid){
while(true){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db? db)"));
}

if(typeof eid === 'number'){
return eid;
} else {
if(cljs.core.sequential_QMARK_(eid)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(eid),(2))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Lookup ref should contain 2 elements: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([eid], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$lookup_DASH_ref_SLASH_syntax,cljs.core.cst$kw$entity_DASH_id,eid], null));
} else {
if(!(datascript.db.is_attr_QMARK_(db,cljs.core.first(eid),cljs.core.cst$kw$db_SLASH_unique))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Lookup ref attribute should be marked as :db/unique: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([eid], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$lookup_DASH_ref_SLASH_unique,cljs.core.cst$kw$entity_DASH_id,eid], null));
} else {
if((cljs.core.second(eid) == null)){
return null;
} else {
return cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.db._datoms(db,cljs.core.cst$kw$avet,eid)));

}
}
}
} else {
if(cljs.core.array_QMARK_(eid)){
var G__25057 = db;
var G__25058 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(eid);
db = G__25057;
eid = G__25058;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Expected number or lookup ref for entity id, got "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([eid], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$entity_DASH_id_SLASH_syntax,cljs.core.cst$kw$entity_DASH_id,eid], null));

}
}
}
break;
}
});
datascript.db.entid_strict = (function datascript$db$entid_strict(db,eid){
var or__7085__auto__ = datascript.db.entid(db,eid);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Nothing found for entity id "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([eid], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$entity_DASH_id_SLASH_missing,cljs.core.cst$kw$entity_DASH_id,eid], null));
}
});
datascript.db.entid_some = (function datascript$db$entid_some(db,eid){
if(cljs.core.truth_(eid)){
return datascript.db.entid_strict(db,eid);
} else {
return null;
}
});
datascript.db.validate_datom = (function datascript$db$validate_datom(db,datom){
if(cljs.core.truth_((function (){var and__7073__auto__ = datom.added;
if(cljs.core.truth_(and__7073__auto__)){
return datascript.db.is_attr_QMARK_(db,datom.a,cljs.core.cst$kw$db_SLASH_unique);
} else {
return and__7073__auto__;
}
})())){
var temp__6753__auto__ = cljs.core.not_empty(datascript.db._datoms(db,cljs.core.cst$kw$avet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.a,datom.v], null)));
if(cljs.core.truth_(temp__6753__auto__)){
var found = temp__6753__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Cannot add "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([datom], 0))),cljs.core.str(" because of unique constraint: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([found], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_unique,cljs.core.cst$kw$attribute,datom.a,cljs.core.cst$kw$datom,datom], null));
} else {
return null;
}
} else {
return null;
}
});
datascript.db.validate_eid = (function datascript$db$validate_eid(eid,at){
if(typeof eid === 'number'){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Bad entity id "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([eid], 0))),cljs.core.str(" at "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([at], 0))),cljs.core.str(", expected number")].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$entity_DASH_id,eid,cljs.core.cst$kw$context,at], null));
}
});
datascript.db.validate_attr = (function datascript$db$validate_attr(attr,at){
if(((attr instanceof cljs.core.Keyword)) || (typeof attr === 'string')){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Bad entity attribute "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr], 0))),cljs.core.str(" at "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([at], 0))),cljs.core.str(", expected keyword or string")].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$attribute,attr,cljs.core.cst$kw$context,at], null));
}
});
datascript.db.validate_val = (function datascript$db$validate_val(v,at){
if((v == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Cannot store nil as a value at "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([at], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$value,v,cljs.core.cst$kw$context,at], null));
} else {
return null;
}
});
datascript.db.current_tx = (function datascript$db$current_tx(report){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_DASH_before,cljs.core.cst$kw$max_DASH_tx], null)) + (1));
});
datascript.db.next_eid = (function datascript$db$next_eid(db){
return (cljs.core.cst$kw$max_DASH_eid.cljs$core$IFn$_invoke$arity$1(db) + (1));
});
datascript.db.tx_id_QMARK_ = (function datascript$db$tx_id_QMARK_(e){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,cljs.core.cst$kw$db_SLASH_current_DASH_tx)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,":db/current-tx"));
});
datascript.db.advance_max_eid = (function datascript$db$advance_max_eid(db,eid){
var G__25060 = db;
if(((eid > cljs.core.cst$kw$max_DASH_eid.cljs$core$IFn$_invoke$arity$1(db))) && ((eid < datascript.db.tx0))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25060,cljs.core.cst$kw$max_DASH_eid,eid);
} else {
return G__25060;
}
});
datascript.db.allocate_eid = (function datascript$db$allocate_eid(var_args){
var args25061 = [];
var len__8301__auto___25065 = arguments.length;
var i__8302__auto___25066 = (0);
while(true){
if((i__8302__auto___25066 < len__8301__auto___25065)){
args25061.push((arguments[i__8302__auto___25066]));

var G__25067 = (i__8302__auto___25066 + (1));
i__8302__auto___25066 = G__25067;
continue;
} else {
}
break;
}

var G__25063 = args25061.length;
switch (G__25063) {
case 2:
return datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25061.length)].join('')));

}
});

datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$2 = (function (report,eid){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_DASH_after], null),datascript.db.advance_max_eid,eid);
});

datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3 = (function (report,e,eid){
var G__25064 = report;
var G__25064__$1 = ((datascript.db.neg_number_QMARK_(e))?cljs.core.assoc_in(G__25064,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempids,e], null),eid):G__25064);
var G__25064__$2 = ((datascript.db.tx_id_QMARK_(e))?cljs.core.assoc_in(G__25064__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempids,e], null),eid):G__25064__$1);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__25064__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_DASH_after], null),datascript.db.advance_max_eid,eid);

});

datascript.db.allocate_eid.cljs$lang$maxFixedArity = 3;

datascript.db.with_datom = (function datascript$db$with_datom(db,datom){
datascript.db.validate_datom(db,datom);

var indexing_QMARK_ = datascript.db.indexing_QMARK_(db,datom.a);
if(cljs.core.truth_(datom.added)){
var G__25071 = db;
var G__25071__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__25071,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$eavt], null),datascript.btset.btset_conj,datom,datascript.db.cmp_datoms_eavt_quick)
;
var G__25071__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__25071__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aevt], null),datascript.btset.btset_conj,datom,datascript.db.cmp_datoms_aevt_quick)
;
var G__25071__$3 = ((indexing_QMARK_)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__25071__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$avet], null),datascript.btset.btset_conj,datom,datascript.db.cmp_datoms_avet_quick):G__25071__$2);
var G__25071__$4 = datascript.db.advance_max_eid(G__25071__$3,datom.e)
;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25071__$4,cljs.core.cst$kw$hash,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))));

} else {
var temp__6751__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.e,datom.a,datom.v], null)));
if(cljs.core.truth_(temp__6751__auto__)){
var removing = temp__6751__auto__;
var G__25072 = db;
var G__25072__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__25072,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$eavt], null),datascript.btset.btset_disj,removing,datascript.db.cmp_datoms_eavt_quick)
;
var G__25072__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__25072__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aevt], null),datascript.btset.btset_disj,removing,datascript.db.cmp_datoms_aevt_quick)
;
var G__25072__$3 = ((indexing_QMARK_)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__25072__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$avet], null),datascript.btset.btset_disj,removing,datascript.db.cmp_datoms_avet_quick):G__25072__$2);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25072__$3,cljs.core.cst$kw$hash,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))));

} else {
return db;
}
}
});
datascript.db.transact_report = (function datascript$db$transact_report(report,datom){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_DASH_after], null),datascript.db.with_datom,datom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tx_DASH_data], null),cljs.core.conj,datom);
});
datascript.db.reverse_ref_QMARK_ = (function datascript$db$reverse_ref_QMARK_(attr){
if((attr instanceof cljs.core.Keyword)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.name(attr),(0)));
} else {
if(typeof attr === 'string'){
return cljs.core.boolean$(cljs.core.re_matches(/(?:([^\/]+)\/)?_([^\/]+)/,attr));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Bad attribute type: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr], 0))),cljs.core.str(", expected keyword or string")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$attribute,attr], null));

}
}
});
datascript.db.reverse_ref = (function datascript$db$reverse_ref(attr){
if((attr instanceof cljs.core.Keyword)){
if(datascript.db.reverse_ref_QMARK_(attr)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(attr),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(attr),(1)));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(attr),[cljs.core.str("_"),cljs.core.str(cljs.core.name(attr))].join(''));
}
} else {
if(typeof attr === 'string'){
var vec__25076 = cljs.core.re_matches(/(?:([^\/]+)\/)?([^\/]+)/,attr);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25076,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25076,(1),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25076,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(name,(0)))){
if(cljs.core.truth_(ns)){
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(name,(1)))].join('');
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(name,(1));
}
} else {
if(cljs.core.truth_(ns)){
return [cljs.core.str(ns),cljs.core.str("/_"),cljs.core.str(name)].join('');
} else {
return [cljs.core.str("_"),cljs.core.str(name)].join('');
}
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Bad attribute type: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr], 0))),cljs.core.str(", expected keyword or string")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$attribute,attr], null));

}
}
});
datascript.db.check_upsert_conflict = (function datascript$db$check_upsert_conflict(entity,acc){
var vec__25082 = acc;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25082,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25082,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25082,(2),null);
var _e = cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(entity);
if(((_e == null)) || ((_e < (0))) || ((acc == null)) || ((_e === e))){
return acc;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Conflicting upsert: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)], 0))),cljs.core.str(" resolves to "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0))),cljs.core.str(", but entity already has :db/id "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([_e], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_upsert,cljs.core.cst$kw$entity,entity,cljs.core.cst$kw$assertion,acc], null));
}
});
datascript.db.upsert_eid = (function datascript$db$upsert_eid(db,entity){
var temp__6753__auto__ = cljs.core.not_empty(datascript.db._attrs_by(db,cljs.core.cst$kw$db$unique_SLASH_identity));
if(cljs.core.truth_(temp__6753__auto__)){
var idents = temp__6753__auto__;
return cljs.core.first(datascript.db.check_upsert_conflict(entity,cljs.core.reduce_kv(((function (idents,temp__6753__auto__){
return (function (acc,a,v){
if(cljs.core.contains_QMARK_(idents,a)){
var temp__6751__auto__ = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.db._datoms(db,cljs.core.cst$kw$avet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null))));
if(cljs.core.truth_(temp__6751__auto__)){
var e = temp__6751__auto__;
if((acc == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,(0)),e)){
return acc;
} else {
var vec__25088 = acc;
var _e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25088,(0),null);
var _a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25088,(1),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25088,(2),null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Conflicting upserts: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_a,_v], null)], 0))),cljs.core.str(" resolves to "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([_e], 0))),cljs.core.str(", but "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)], 0))),cljs.core.str(" resolves to "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_upsert,cljs.core.cst$kw$entity,entity,cljs.core.cst$kw$assertion,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null),cljs.core.cst$kw$conflict,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_e,_a,_v], null)], null));

}
}
} else {
return acc;
}
} else {
return acc;
}
});})(idents,temp__6753__auto__))
,null,entity)));
} else {
return null;
}
});
datascript.db.maybe_wrap_multival = (function datascript$db$maybe_wrap_multival(db,a,vs){
if(!((datascript.db.reverse_ref_QMARK_(a)) || (datascript.db.multival_QMARK_(db,a)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
if(cljs.core.not((function (){var or__7085__auto__ = (datascript.arrays.array_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.arrays.array_QMARK_.cljs$core$IFn$_invoke$arity$1(vs) : datascript.arrays.array_QMARK_.call(null,vs));
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return (cljs.core.coll_QMARK_(vs)) && (!(cljs.core.map_QMARK_(vs)));
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(vs),(2))) && (datascript.db.is_attr_QMARK_(db,cljs.core.first(vs),cljs.core.cst$kw$db$unique_SLASH_identity))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
return vs;

}
}
}
});
datascript.db.explode = (function datascript$db$explode(db,entity){
var eid = cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(entity);
var iter__7942__auto__ = ((function (eid){
return (function datascript$db$explode_$_iter__25108(s__25109){
return (new cljs.core.LazySeq(null,((function (eid){
return (function (){
var s__25109__$1 = s__25109;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__25109__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var vec__25120 = cljs.core.first(xs__7309__auto__);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25120,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25120,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.cst$kw$db_SLASH_id)){
var _ = datascript.db.validate_attr(a,cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$db_SLASH_id,eid,a,vs], true, false));
var reverse_QMARK_ = datascript.db.reverse_ref_QMARK_(a);
var straight_a = ((reverse_QMARK_)?datascript.db.reverse_ref(a):a);
var ___$1 = (((reverse_QMARK_) && (!(datascript.db.ref_QMARK_(db,straight_a))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Bad attribute "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([a], 0))),cljs.core.str(": reverse attribute name requires {:db/valueType :db.type/ref} in schema")].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$attribute,a,cljs.core.cst$kw$context,cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$db_SLASH_id,eid,a,vs], true, false)], null))})():null);
var iterys__7938__auto__ = ((function (s__25109__$1,_,reverse_QMARK_,straight_a,___$1,vec__25120,a,vs,xs__7309__auto__,temp__6753__auto__,eid){
return (function datascript$db$explode_$_iter__25108_$_iter__25110(s__25111){
return (new cljs.core.LazySeq(null,((function (s__25109__$1,_,reverse_QMARK_,straight_a,___$1,vec__25120,a,vs,xs__7309__auto__,temp__6753__auto__,eid){
return (function (){
var s__25111__$1 = s__25111;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__25111__$1);
if(temp__6753__auto____$1){
var s__25111__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__25111__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__25111__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__25113 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__25112 = (0);
while(true){
if((i__25112 < size__7941__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__25112);
cljs.core.chunk_append(b__25113,(((datascript.db.ref_QMARK_(db,straight_a)) && (cljs.core.map_QMARK_(v)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,datascript.db.reverse_ref(a),eid):((reverse_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,v,straight_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,eid,straight_a,v], null))));

var G__25125 = (i__25112 + (1));
i__25112 = G__25125;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25113),datascript$db$explode_$_iter__25108_$_iter__25110(cljs.core.chunk_rest(s__25111__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25113),null);
}
} else {
var v = cljs.core.first(s__25111__$2);
return cljs.core.cons((((datascript.db.ref_QMARK_(db,straight_a)) && (cljs.core.map_QMARK_(v)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,datascript.db.reverse_ref(a),eid):((reverse_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,v,straight_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,eid,straight_a,v], null))),datascript$db$explode_$_iter__25108_$_iter__25110(cljs.core.rest(s__25111__$2)));
}
} else {
return null;
}
break;
}
});})(s__25109__$1,_,reverse_QMARK_,straight_a,___$1,vec__25120,a,vs,xs__7309__auto__,temp__6753__auto__,eid))
,null,null));
});})(s__25109__$1,_,reverse_QMARK_,straight_a,___$1,vec__25120,a,vs,xs__7309__auto__,temp__6753__auto__,eid))
;
var fs__7939__auto__ = cljs.core.seq(iterys__7938__auto__(datascript.db.maybe_wrap_multival(db,a,vs)));
if(fs__7939__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7939__auto__,datascript$db$explode_$_iter__25108(cljs.core.rest(s__25109__$1)));
} else {
var G__25126 = cljs.core.rest(s__25109__$1);
s__25109__$1 = G__25126;
continue;
}
} else {
var G__25127 = cljs.core.rest(s__25109__$1);
s__25109__$1 = G__25127;
continue;
}
} else {
return null;
}
break;
}
});})(eid))
,null,null));
});})(eid))
;
return iter__7942__auto__(entity);
});
datascript.db.transact_add = (function datascript$db$transact_add(report,p__25128){
var vec__25132 = p__25128;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25132,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25132,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25132,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25132,(3),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25132,(4),null);
var ent = vec__25132;
datascript.db.validate_attr(a,ent);

datascript.db.validate_val(v,ent);

var tx__$1 = (function (){var or__7085__auto__ = tx;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return datascript.db.current_tx(report);
}
})();
var db = cljs.core.cst$kw$db_DASH_after.cljs$core$IFn$_invoke$arity$1(report);
var e__$1 = datascript.db.entid_strict(db,e);
var v__$1 = ((datascript.db.ref_QMARK_(db,a))?datascript.db.entid_strict(db,v):v);
var datom = (new datascript.db.Datom(e__$1,a,v__$1,tx__$1,true));
if(datascript.db.multival_QMARK_(db,a)){
if(cljs.core.empty_QMARK_(datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a,v__$1], null)))){
return datascript.db.transact_report(report,datom);
} else {
return report;
}
} else {
var temp__6751__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a], null)));
if(cljs.core.truth_(temp__6751__auto__)){
var old_datom = temp__6751__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_datom.v,v__$1)){
return report;
} else {
return datascript.db.transact_report(datascript.db.transact_report(report,(new datascript.db.Datom(e__$1,a,old_datom.v,tx__$1,false))),datom);
}
} else {
return datascript.db.transact_report(report,datom);
}
}
});
datascript.db.transact_retract_datom = (function datascript$db$transact_retract_datom(report,d){
var tx = datascript.db.current_tx(report);
return datascript.db.transact_report(report,(new datascript.db.Datom(d.e,d.a,d.v,tx,false)));
});
datascript.db.retract_components = (function datascript$db$retract_components(db,datoms){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (d){
return datascript.db.component_QMARK_(db,d.a);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db$fn_SLASH_retractEntity,d.v], null);
}))),datoms);
});
datascript.db.retry_with_tempid = (function datascript$db$retry_with_tempid(report,es,tempid,upserted_eid){
if(cljs.core.contains_QMARK_(cljs.core.cst$kw$tempids.cljs$core$IFn$_invoke$arity$1(report),tempid)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Conflicting upsert: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tempid], 0))),cljs.core.str(" resolves"),cljs.core.str(" both to "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([upserted_eid], 0))),cljs.core.str(" and "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tempids.cljs$core$IFn$_invoke$arity$1(report),tempid)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_upsert], null));
} else {
var G__25137 = cljs.core.assoc_in(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempids,tempid], null),upserted_eid);
var G__25138 = es;
return (datascript.db.transact_tx_data.cljs$core$IFn$_invoke$arity$2 ? datascript.db.transact_tx_data.cljs$core$IFn$_invoke$arity$2(G__25137,G__25138) : datascript.db.transact_tx_data.call(null,G__25137,G__25138));
}
});
datascript.db.transact_tx_data = (function datascript$db$transact_tx_data(initial_report,initial_es){
if(((initial_es == null)) || (cljs.core.sequential_QMARK_(initial_es))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Bad transaction data "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([initial_es], 0))),cljs.core.str(", expected sequential collection")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$tx_DASH_data,initial_es], null));
}

var report = initial_report;
var es = initial_es;
while(true){
var vec__25154 = es;
var seq__25155 = cljs.core.seq(vec__25154);
var first__25156 = cljs.core.first(seq__25155);
var seq__25155__$1 = cljs.core.next(seq__25155);
var entity = first__25156;
var entities = seq__25155__$1;
var db = cljs.core.cst$kw$db_DASH_after.cljs$core$IFn$_invoke$arity$1(report);
if((entity == null)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempids,cljs.core.cst$kw$db_SLASH_current_DASH_tx], null),datascript.db.current_tx(report)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_DASH_after,cljs.core.cst$kw$max_DASH_tx], null),cljs.core.inc);
} else {
if(cljs.core.map_QMARK_(entity)){
var old_eid = cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(entity);
if(datascript.db.tx_id_QMARK_(old_eid)){
var id = datascript.db.current_tx(report);
var G__25169 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,old_eid,id);
var G__25170 = cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,cljs.core.cst$kw$db_SLASH_id,id),entities);
report = G__25169;
es = G__25170;
continue;
} else {
if(cljs.core.sequential_QMARK_(old_eid)){
var id = datascript.db.entid_strict(db,old_eid);
var G__25171 = report;
var G__25172 = cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,cljs.core.cst$kw$db_SLASH_id,id),entities);
report = G__25171;
es = G__25172;
continue;
} else {
var temp__6751__auto__ = datascript.db.upsert_eid(db,entity);
if(cljs.core.truth_(temp__6751__auto__)){
var upserted_eid = temp__6751__auto__;
if((datascript.db.neg_number_QMARK_(old_eid)) && (cljs.core.contains_QMARK_(cljs.core.cst$kw$tempids.cljs$core$IFn$_invoke$arity$1(report),old_eid)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(upserted_eid,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tempids.cljs$core$IFn$_invoke$arity$1(report),old_eid)))){
return datascript.db.retry_with_tempid(initial_report,initial_es,old_eid,upserted_eid);
} else {
var G__25173 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,old_eid,upserted_eid);
var G__25174 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.db.explode(db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,cljs.core.cst$kw$db_SLASH_id,upserted_eid)),entities);
report = G__25173;
es = G__25174;
continue;
}
} else {
if((typeof old_eid === 'number') || ((old_eid == null))){
var new_eid = (((old_eid == null))?datascript.db.next_eid(db):(((old_eid < (0)))?(function (){var or__7085__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tempids.cljs$core$IFn$_invoke$arity$1(report),old_eid);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return datascript.db.next_eid(db);
}
})():old_eid
));
var new_entity = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,cljs.core.cst$kw$db_SLASH_id,new_eid);
var G__25175 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,old_eid,new_eid);
var G__25176 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.db.explode(db,new_entity),entities);
report = G__25175;
es = G__25176;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Expected number or lookup ref for :db/id, got "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([old_eid], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$entity_DASH_id_SLASH_syntax,cljs.core.cst$kw$entity,entity], null));

}
}
}
}
} else {
if(cljs.core.sequential_QMARK_(entity)){
var vec__25157 = entity;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25157,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25157,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25157,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25157,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db$fn_SLASH_call)){
var vec__25160 = entity;
var seq__25161 = cljs.core.seq(vec__25160);
var first__25162 = cljs.core.first(seq__25161);
var seq__25161__$1 = cljs.core.next(seq__25161);
var _ = first__25162;
var first__25162__$1 = cljs.core.first(seq__25161__$1);
var seq__25161__$2 = cljs.core.next(seq__25161__$1);
var f = first__25162__$1;
var args = seq__25161__$2;
var G__25177 = report;
var G__25178 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,db,args),entities);
report = G__25177;
es = G__25178;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db$fn_SLASH_cas)){
var vec__25163 = entity;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25163,(0),null);
var e__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25163,(1),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25163,(2),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25163,(3),null);
var nv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25163,(4),null);
var e__$2 = datascript.db.entid_strict(db,e__$1);
var ___$1 = datascript.db.validate_attr(a__$1,entity);
var ov__$1 = ((datascript.db.ref_QMARK_(db,a__$1))?datascript.db.entid_strict(db,ov):ov);
var nv__$1 = ((datascript.db.ref_QMARK_(db,a__$1))?datascript.db.entid_strict(db,nv):nv);
var ___$2 = datascript.db.validate_val(nv__$1,entity);
var datoms = datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$2,a__$1], null));
if(datascript.db.multival_QMARK_(db,a__$1)){
if(cljs.core.truth_(cljs.core.some(((function (report,es,vec__25163,_,e__$1,a__$1,ov,nv,e__$2,___$1,ov__$1,nv__$1,___$2,datoms,vec__25157,op,e,a,v,vec__25154,seq__25155,first__25156,seq__25155__$1,entity,entities,db){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d.v,ov__$1);
});})(report,es,vec__25163,_,e__$1,a__$1,ov,nv,e__$2,___$1,ov__$1,nv__$1,___$2,datoms,vec__25157,op,e,a,v,vec__25154,seq__25155,first__25156,seq__25155__$1,entity,entities,db))
,datoms))){
var G__25179 = datascript.db.transact_add(report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,e__$2,a__$1,nv__$1], null));
var G__25180 = entities;
report = G__25179;
es = G__25180;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str(":db.fn/cas failed on datom ["),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e__$2], 0))),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([a__$1], 0))),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$v,datoms)], 0))),cljs.core.str("], expected "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ov__$1], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_cas,cljs.core.cst$kw$old,datoms,cljs.core.cst$kw$expected,ov__$1,cljs.core.cst$kw$new,nv__$1], null));
}
} else {
var v__$1 = cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,ov__$1)){
var G__25181 = datascript.db.transact_add(report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,e__$2,a__$1,nv__$1], null));
var G__25182 = entities;
report = G__25181;
es = G__25182;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str(":db.fn/cas failed on datom ["),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e__$2], 0))),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([a__$1], 0))),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v__$1], 0))),cljs.core.str("], expected "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ov__$1], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_cas,cljs.core.cst$kw$old,cljs.core.first(datoms),cljs.core.cst$kw$expected,ov__$1,cljs.core.cst$kw$new,nv__$1], null));
}
}
} else {
if(datascript.db.tx_id_QMARK_(e)){
var G__25183 = report;
var G__25184 = cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,datascript.db.current_tx(report),a,v], null),entities);
report = G__25183;
es = G__25184;
continue;
} else {
if((datascript.db.ref_QMARK_(db,a)) && (datascript.db.tx_id_QMARK_(v))){
var G__25185 = report;
var G__25186 = cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,datascript.db.current_tx(report)], null),entities);
report = G__25185;
es = G__25186;
continue;
} else {
if(datascript.db.neg_number_QMARK_(e)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db_SLASH_add)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Negative entity ids are resolved for :db/add only")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$op,entity], null));
} else {
var upserted_eid = ((datascript.db.is_attr_QMARK_(db,a,cljs.core.cst$kw$db$unique_SLASH_identity))?cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.db._datoms(db,cljs.core.cst$kw$avet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)))):null);
var allocated_eid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempids,e], null));
if(cljs.core.truth_((function (){var and__7073__auto__ = upserted_eid;
if(cljs.core.truth_(and__7073__auto__)){
var and__7073__auto____$1 = allocated_eid;
if(cljs.core.truth_(and__7073__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(upserted_eid,allocated_eid);
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
})())){
return datascript.db.retry_with_tempid(initial_report,initial_es,e,upserted_eid);
} else {
var eid = (function (){var or__7085__auto__ = upserted_eid;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
var or__7085__auto____$1 = allocated_eid;
if(cljs.core.truth_(or__7085__auto____$1)){
return or__7085__auto____$1;
} else {
return datascript.db.next_eid(db);
}
}
})();
var G__25187 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,e,eid);
var G__25188 = cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,eid,a,v], null),entities);
report = G__25187;
es = G__25188;
continue;
}
}
} else {
if((datascript.db.ref_QMARK_(db,a)) && (datascript.db.neg_number_QMARK_(v))){
var temp__6751__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempids,v], null));
if(cljs.core.truth_(temp__6751__auto__)){
var vid = temp__6751__auto__;
var G__25189 = report;
var G__25190 = cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,vid], null),entities);
report = G__25189;
es = G__25190;
continue;
} else {
var G__25191 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,v,datascript.db.next_eid(db));
var G__25192 = es;
report = G__25191;
es = G__25192;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db_SLASH_add)){
var G__25193 = datascript.db.transact_add(report,entity);
var G__25194 = entities;
report = G__25193;
es = G__25194;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db_SLASH_retract)){
var temp__6751__auto__ = datascript.db.entid(db,e);
if(cljs.core.truth_(temp__6751__auto__)){
var e__$1 = temp__6751__auto__;
var v__$1 = ((datascript.db.ref_QMARK_(db,a))?datascript.db.entid_strict(db,v):v);
datascript.db.validate_attr(a,entity);

datascript.db.validate_val(v__$1,entity);

var temp__6751__auto____$1 = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a,v__$1], null)));
if(cljs.core.truth_(temp__6751__auto____$1)){
var old_datom = temp__6751__auto____$1;
var G__25195 = datascript.db.transact_retract_datom(report,old_datom);
var G__25196 = entities;
report = G__25195;
es = G__25196;
continue;
} else {
var G__25197 = report;
var G__25198 = entities;
report = G__25197;
es = G__25198;
continue;
}
} else {
var G__25199 = report;
var G__25200 = entities;
report = G__25199;
es = G__25200;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db$fn_SLASH_retractAttribute)){
var temp__6751__auto__ = datascript.db.entid(db,e);
if(cljs.core.truth_(temp__6751__auto__)){
var e__$1 = temp__6751__auto__;
var _ = datascript.db.validate_attr(a,entity);
var datoms = datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a], null));
var G__25201 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.db.transact_retract_datom,report,datoms);
var G__25202 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.db.retract_components(db,datoms),entities);
report = G__25201;
es = G__25202;
continue;
} else {
var G__25203 = report;
var G__25204 = entities;
report = G__25203;
es = G__25204;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db$fn_SLASH_retractEntity)){
var temp__6751__auto__ = datascript.db.entid(db,e);
if(cljs.core.truth_(temp__6751__auto__)){
var e__$1 = temp__6751__auto__;
var e_datoms = datascript.db._search(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1], null));
var v_datoms = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (report,es,e_datoms,e__$1,temp__6751__auto__,vec__25157,op,e,a,v,vec__25154,seq__25155,first__25156,seq__25155__$1,entity,entities,db){
return (function (a__$1){
return datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,a__$1,e__$1], null));
});})(report,es,e_datoms,e__$1,temp__6751__auto__,vec__25157,op,e,a,v,vec__25154,seq__25155,first__25156,seq__25155__$1,entity,entities,db))
,cljs.core.array_seq([datascript.db._attrs_by(db,cljs.core.cst$kw$db$type_SLASH_ref)], 0));
var G__25205 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.db.transact_retract_datom,report,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(e_datoms,v_datoms));
var G__25206 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.db.retract_components(db,e_datoms),entities);
report = G__25205;
es = G__25206;
continue;
} else {
var G__25207 = report;
var G__25208 = entities;
report = G__25207;
es = G__25208;
continue;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Unknown operation at "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([entity], 0))),cljs.core.str(", expected :db/add, :db/retract, :db.fn/call, :db.fn/retractAttribute or :db.fn/retractEntity")].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$operation,op,cljs.core.cst$kw$tx_DASH_data,entity], null));

}
}
}
}
}
}
}
}
}
}
} else {
if(cljs.core.truth_(datascript.db.datom_QMARK_(entity))){
var vec__25166 = entity;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25166,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25166,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25166,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25166,(3),null);
var added = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25166,(4),null);
if(cljs.core.truth_(added)){
var G__25209 = datascript.db.transact_add(report,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,e,a,v,tx], null));
var G__25210 = entities;
report = G__25209;
es = G__25210;
continue;
} else {
var G__25211 = report;
var G__25212 = cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_retract,e,a,v], null),entities);
report = G__25211;
es = G__25212;
continue;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Bad entity type at "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([entity], 0))),cljs.core.str(", expected map or vector")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$tx_DASH_data,entity], null));

}
}
}
}
break;
}
});
