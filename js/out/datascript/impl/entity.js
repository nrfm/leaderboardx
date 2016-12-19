// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('datascript.db');




datascript.impl.entity.entid = (function datascript$impl$entity$entid(db,eid){
if((typeof eid === 'number') || (cljs.core.sequential_QMARK_(eid))){
return datascript.db.entid(db,eid);
} else {
return null;
}
});
datascript.impl.entity.entity = (function datascript$impl$entity$entity(db,eid){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var temp__6753__auto__ = datascript.impl.entity.entid(db,eid);
if(cljs.core.truth_(temp__6753__auto__)){
var e = temp__6753__auto__;
var G__27610 = db;
var G__27611 = e;
var G__27612 = cljs.core.volatile_BANG_(false);
var G__27613 = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
return (datascript.impl.entity.__GT_Entity.cljs$core$IFn$_invoke$arity$4 ? datascript.impl.entity.__GT_Entity.cljs$core$IFn$_invoke$arity$4(G__27610,G__27611,G__27612,G__27613) : datascript.impl.entity.__GT_Entity.call(null,G__27610,G__27611,G__27612,G__27613));
} else {
return null;
}
});
datascript.impl.entity.entity_attr = (function datascript$impl$entity$entity_attr(db,a,datoms){
if(datascript.db.multival_QMARK_(db,a)){
if(datascript.db.ref_QMARK_(db,a)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__27614_SHARP_,p2__27615_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__27614_SHARP_,datascript.impl.entity.entity(db,cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(p2__27615_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__27616_SHARP_,p2__27617_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__27616_SHARP_,cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(p2__27617_SHARP_));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
if(datascript.db.ref_QMARK_(db,a)){
return datascript.impl.entity.entity(db,cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms)));
} else {
return cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms));
}
}
});
datascript.impl.entity._lookup_backwards = (function datascript$impl$entity$_lookup_backwards(db,eid,attr,not_found){
var temp__6751__auto__ = cljs.core.not_empty(datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));
if(cljs.core.truth_(temp__6751__auto__)){
var datoms = temp__6751__auto__;
if(datascript.db.component_QMARK_(db,attr)){
return datascript.impl.entity.entity(db,cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (datoms,temp__6751__auto__){
return (function (p1__27618_SHARP_,p2__27619_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__27618_SHARP_,datascript.impl.entity.entity(db,cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(p2__27619_SHARP_)));
});})(datoms,temp__6751__auto__))
,cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
return not_found;
}
});
datascript.impl.entity.multival__GT_js = (function datascript$impl$entity$multival__GT_js(val){
if(cljs.core.truth_(val)){
return cljs.core.to_array(val);
} else {
return null;
}
});
datascript.impl.entity.js_seq = (function datascript$impl$entity$js_seq(e){
(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(e) : datascript.impl.entity.touch.call(null,e));

var iter__7942__auto__ = (function datascript$impl$entity$js_seq_$_iter__27639(s__27640){
return (new cljs.core.LazySeq(null,(function (){
var s__27640__$1 = s__27640;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__27640__$1);
if(temp__6753__auto__){
var s__27640__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27640__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__27640__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__27642 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__27641 = (0);
while(true){
if((i__27641 < size__7941__auto__)){
var vec__27651 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__27641);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27651,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27651,(1),null);
cljs.core.chunk_append(b__27642,((datascript.db.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));

var G__27658 = (i__27641 + (1));
i__27641 = G__27658;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27642),datascript$impl$entity$js_seq_$_iter__27639(cljs.core.chunk_rest(s__27640__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27642),null);
}
} else {
var vec__27654 = cljs.core.first(s__27640__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27654,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27654,(1),null);
return cljs.core.cons(((datascript.db.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),datascript$impl$entity$js_seq_$_iter__27639(cljs.core.rest(s__27640__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7942__auto__((function (){var G__27657 = e.cache;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27657) : cljs.core.deref.call(null,G__27657));
})());
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {datascript.impl.entity.Object}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
datascript.impl.entity.Entity = (function (db,eid,touched,cache){
this.db = db;
this.eid = eid;
this.touched = touched;
this.cache = cache;
this.cljs$lang$protocol_mask$partition0$ = 2162164483;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
datascript.impl.entity.Entity.prototype.entry_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,datascript.impl.entity.js_seq(this$)));
});

datascript.impl.entity.Entity.prototype.forEach = (function() {
var G__27684 = null;
var G__27684__1 = (function (f){
var self__ = this;
var this$ = this;
var seq__27660 = cljs.core.seq(datascript.impl.entity.js_seq(this$));
var chunk__27661 = null;
var count__27662 = (0);
var i__27663 = (0);
while(true){
if((i__27663 < count__27662)){
var vec__27664 = chunk__27661.cljs$core$IIndexed$_nth$arity$2(null,i__27663);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27664,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27664,(1),null);
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(v,a,this$) : f.call(null,v,a,this$));

var G__27685 = seq__27660;
var G__27686 = chunk__27661;
var G__27687 = count__27662;
var G__27688 = (i__27663 + (1));
seq__27660 = G__27685;
chunk__27661 = G__27686;
count__27662 = G__27687;
i__27663 = G__27688;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__27660);
if(temp__6753__auto__){
var seq__27660__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27660__$1)){
var c__7991__auto__ = cljs.core.chunk_first(seq__27660__$1);
var G__27689 = cljs.core.chunk_rest(seq__27660__$1);
var G__27690 = c__7991__auto__;
var G__27691 = cljs.core.count(c__7991__auto__);
var G__27692 = (0);
seq__27660 = G__27689;
chunk__27661 = G__27690;
count__27662 = G__27691;
i__27663 = G__27692;
continue;
} else {
var vec__27667 = cljs.core.first(seq__27660__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27667,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27667,(1),null);
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(v,a,this$) : f.call(null,v,a,this$));

var G__27693 = cljs.core.next(seq__27660__$1);
var G__27694 = null;
var G__27695 = (0);
var G__27696 = (0);
seq__27660 = G__27693;
chunk__27661 = G__27694;
count__27662 = G__27695;
i__27663 = G__27696;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__27684__2 = (function (f,use_as_this){
var self__ = this;
var this$ = this;
var seq__27670 = cljs.core.seq(datascript.impl.entity.js_seq(this$));
var chunk__27671 = null;
var count__27672 = (0);
var i__27673 = (0);
while(true){
if((i__27673 < count__27672)){
var vec__27674 = chunk__27671.cljs$core$IIndexed$_nth$arity$2(null,i__27673);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27674,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27674,(1),null);
f.call(use_as_this,v,a,this$);

var G__27697 = seq__27670;
var G__27698 = chunk__27671;
var G__27699 = count__27672;
var G__27700 = (i__27673 + (1));
seq__27670 = G__27697;
chunk__27671 = G__27698;
count__27672 = G__27699;
i__27673 = G__27700;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__27670);
if(temp__6753__auto__){
var seq__27670__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27670__$1)){
var c__7991__auto__ = cljs.core.chunk_first(seq__27670__$1);
var G__27701 = cljs.core.chunk_rest(seq__27670__$1);
var G__27702 = c__7991__auto__;
var G__27703 = cljs.core.count(c__7991__auto__);
var G__27704 = (0);
seq__27670 = G__27701;
chunk__27671 = G__27702;
count__27672 = G__27703;
i__27673 = G__27704;
continue;
} else {
var vec__27677 = cljs.core.first(seq__27670__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27677,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27677,(1),null);
f.call(use_as_this,v,a,this$);

var G__27705 = cljs.core.next(seq__27670__$1);
var G__27706 = null;
var G__27707 = (0);
var G__27708 = (0);
seq__27670 = G__27705;
chunk__27671 = G__27706;
count__27672 = G__27707;
i__27673 = G__27708;
continue;
}
} else {
return null;
}
}
break;
}
});
G__27684 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__27684__1.call(this,f);
case 2:
return G__27684__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27684.cljs$core$IFn$_invoke$arity$1 = G__27684__1;
G__27684.cljs$core$IFn$_invoke$arity$2 = G__27684__2;
return G__27684;
})()
;

datascript.impl.entity.Entity.prototype.get = (function (attr){
var self__ = this;
var this$ = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,":db/id")){
return self__.eid;
} else {
if(datascript.db.reverse_ref_QMARK_(attr)){
return datascript.impl.entity.multival__GT_js(datascript.impl.entity._lookup_backwards(self__.db,self__.eid,datascript.db.reverse_ref(attr),null));
} else {
var G__27680 = (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,attr) : datascript.impl.entity.lookup_entity.call(null,this$,attr));
if(datascript.db.multival_QMARK_(self__.db,attr)){
return datascript.impl.entity.multival__GT_js(G__27680);
} else {
return G__27680;
}
}
}
});

datascript.impl.entity.Entity.prototype.key_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.keys(this$));
});

datascript.impl.entity.Entity.prototype.entries = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_entries_iterator(datascript.impl.entity.js_seq(this$));
});

datascript.impl.entity.Entity.prototype.value_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,datascript.impl.entity.js_seq(this$)));
});

datascript.impl.entity.Entity.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_(this$);
});

datascript.impl.entity.Entity.prototype.keys = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator(cljs.core.keys(this$));
});

datascript.impl.entity.Entity.prototype.values = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,datascript.impl.entity.js_seq(this$)));
});

datascript.impl.entity.Entity.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return (datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2(this$,other) : datascript.impl.entity.equiv_entity.call(null,this$,other));
});

datascript.impl.entity.Entity.prototype.has = (function (attr){
var self__ = this;
var this$ = this;
return !((this$.get(attr) == null));
});

datascript.impl.entity.Entity.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return (datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2(this$__$1,o) : datascript.impl.entity.equiv_entity.call(null,this$__$1,o));
});

datascript.impl.entity.Entity.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.eid);
});

datascript.impl.entity.Entity.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.impl.entity.touch.call(null,this$__$1));

return cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.cache) : cljs.core.deref.call(null,self__.cache)));
});

datascript.impl.entity.Entity.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.impl.entity.touch.call(null,this$__$1));

return cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.cache) : cljs.core.deref.call(null,self__.cache)));
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,attr){
var self__ = this;
var this$__$1 = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$__$1,attr,null) : datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,null));
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,attr,not_found){
var self__ = this;
var this$__$1 = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$__$1,attr,not_found) : datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,not_found));
});

datascript.impl.entity.Entity.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$datascript$impl$entity_SLASH_nf,(function (){var G__27681 = this$__$1;
var G__27682 = k;
var G__27683 = cljs.core.cst$kw$datascript$impl$entity_SLASH_nf;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(G__27681,G__27682,G__27683) : datascript.impl.entity.lookup_entity.call(null,G__27681,G__27682,G__27683));
})());
});

datascript.impl.entity.Entity.prototype.call = (function() {
var G__27709 = null;
var G__27709__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,k) : datascript.impl.entity.lookup_entity.call(null,this$,k));
});
var G__27709__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$,k,not_found) : datascript.impl.entity.lookup_entity.call(null,this$,k,not_found));
});
G__27709 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__27709__2.call(this,self__,k);
case 3:
return G__27709__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27709.cljs$core$IFn$_invoke$arity$2 = G__27709__2;
G__27709.cljs$core$IFn$_invoke$arity$3 = G__27709__3;
return G__27709;
})()
;

datascript.impl.entity.Entity.prototype.apply = (function (self__,args27659){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args27659)));
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,k) : datascript.impl.entity.lookup_entity.call(null,this$,k));
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$,k,not_found) : datascript.impl.entity.lookup_entity.call(null,this$,k,not_found));
});

datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.cache) : cljs.core.deref.call(null,self__.cache)),cljs.core.cst$kw$db_SLASH_id,self__.eid),writer,opts);
});

datascript.impl.entity.Entity.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,cljs.core.cst$sym$eid,cljs.core.cst$sym$touched,cljs.core.cst$sym$cache], null);
});

datascript.impl.entity.Entity.cljs$lang$type = true;

datascript.impl.entity.Entity.cljs$lang$ctorStr = "datascript.impl.entity/Entity";

datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__7737__auto__,writer__7738__auto__,opt__7739__auto__){
return cljs.core._write(writer__7738__auto__,"datascript.impl.entity/Entity");
});

datascript.impl.entity.__GT_Entity = (function datascript$impl$entity$__GT_Entity(db,eid,touched,cache){
return (new datascript.impl.entity.Entity(db,eid,touched,cache));
});

datascript.impl.entity.entity_QMARK_ = (function datascript$impl$entity$entity_QMARK_(x){
return (x instanceof datascript.impl.entity.Entity);
});
datascript.impl.entity.equiv_entity = (function datascript$impl$entity$equiv_entity(this$,that){
return ((that instanceof datascript.impl.entity.Entity)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$.eid,that.eid));
});
datascript.impl.entity.lookup_entity = (function datascript$impl$entity$lookup_entity(var_args){
var args27710 = [];
var len__8301__auto___27717 = arguments.length;
var i__8302__auto___27718 = (0);
while(true){
if((i__8302__auto___27718 < len__8301__auto___27717)){
args27710.push((arguments[i__8302__auto___27718]));

var G__27719 = (i__8302__auto___27718 + (1));
i__8302__auto___27718 = G__27719;
continue;
} else {
}
break;
}

var G__27712 = args27710.length;
switch (G__27712) {
case 2:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27710.length)].join('')));

}
});

datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 = (function (this$,attr){
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$,attr,null);
});

datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 = (function (this$,attr,not_found){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,cljs.core.cst$kw$db_SLASH_id)){
return this$.eid;
} else {
if(datascript.db.reverse_ref_QMARK_(attr)){
return datascript.impl.entity._lookup_backwards(this$.db,this$.eid,datascript.db.reverse_ref(attr),not_found);
} else {
var or__7085__auto__ = (function (){var G__27714 = this$.cache;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27714) : cljs.core.deref.call(null,G__27714));
})().call(null,attr);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
if(cljs.core.truth_((function (){var G__27715 = this$.touched;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27715) : cljs.core.deref.call(null,G__27715));
})())){
return not_found;
} else {
var temp__6751__auto__ = cljs.core.not_empty(datascript.db._search(this$.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.eid,attr], null)));
if(cljs.core.truth_(temp__6751__auto__)){
var datoms = temp__6751__auto__;
var value = datascript.impl.entity.entity_attr(this$.db,attr,datoms);
cljs.core.vreset_BANG_(this$.cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__27716 = this$.cache;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27716) : cljs.core.deref.call(null,G__27716));
})(),attr,value));

return value;
} else {
return not_found;
}
}
}
}
}
});

datascript.impl.entity.lookup_entity.cljs$lang$maxFixedArity = 3;

datascript.impl.entity.touch_components = (function datascript$impl$entity$touch_components(db,a__GT_v){
return cljs.core.reduce_kv((function (acc,a,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,a,((datascript.db.component_QMARK_(db,a))?((datascript.db.multival_QMARK_(db,a))?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(datascript.impl.entity.touch,v)):(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(v) : datascript.impl.entity.touch.call(null,v))):v));
}),cljs.core.PersistentArrayMap.EMPTY,a__GT_v);
});
datascript.impl.entity.datoms__GT_cache = (function datascript$impl$entity$datoms__GT_cache(db,datoms){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,part){
var a = cljs.core.cst$kw$a.cljs$core$IFn$_invoke$arity$1(cljs.core.first(part));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,a,datascript.impl.entity.entity_attr(db,a,part));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$a,datoms));
});
datascript.impl.entity.touch = (function datascript$impl$entity$touch(e){
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_(e))){
} else {
throw (new Error("Assert failed: (entity? e)"));
}

if(cljs.core.truth_((function (){var G__27722 = e.touched;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27722) : cljs.core.deref.call(null,G__27722));
})())){
} else {
var temp__6753__auto___27723 = cljs.core.not_empty(datascript.db._search(e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));
if(cljs.core.truth_(temp__6753__auto___27723)){
var datoms_27724 = temp__6753__auto___27723;
cljs.core.vreset_BANG_(e.cache,datascript.impl.entity.touch_components(e.db,datascript.impl.entity.datoms__GT_cache(e.db,datoms_27724)));

cljs.core.vreset_BANG_(e.touched,true);
} else {
}
}

return e;
});
var G__27725_27747 = "datascript.impl.entity.Entity.prototype.get";
var G__27726_27748 = datascript.impl.entity.Entity.prototype.get;
goog.exportSymbol(G__27725_27747,G__27726_27748);

var G__27727_27749 = "datascript.impl.entity.Entity.prototype.has";
var G__27728_27750 = datascript.impl.entity.Entity.prototype.has;
goog.exportSymbol(G__27727_27749,G__27728_27750);

var G__27729_27751 = "datascript.impl.entity.Entity.prototype.forEach";
var G__27730_27752 = datascript.impl.entity.Entity.prototype.forEach;
goog.exportSymbol(G__27729_27751,G__27730_27752);

var G__27731_27753 = "datascript.impl.entity.Entity.prototype.key_set";
var G__27732_27754 = datascript.impl.entity.Entity.prototype.key_set;
goog.exportSymbol(G__27731_27753,G__27732_27754);

var G__27733_27755 = "datascript.impl.entity.Entity.prototype.value_set";
var G__27734_27756 = datascript.impl.entity.Entity.prototype.value_set;
goog.exportSymbol(G__27733_27755,G__27734_27756);

var G__27735_27757 = "datascript.impl.entity.Entity.prototype.entry_set";
var G__27736_27758 = datascript.impl.entity.Entity.prototype.entry_set;
goog.exportSymbol(G__27735_27757,G__27736_27758);

var G__27737_27759 = "datascript.impl.entity.Entity.prototype.keys";
var G__27738_27760 = datascript.impl.entity.Entity.prototype.keys;
goog.exportSymbol(G__27737_27759,G__27738_27760);

var G__27739_27761 = "datascript.impl.entity.Entity.prototype.values";
var G__27740_27762 = datascript.impl.entity.Entity.prototype.values;
goog.exportSymbol(G__27739_27761,G__27740_27762);

var G__27741_27763 = "datascript.impl.entity.Entity.prototype.entries";
var G__27742_27764 = datascript.impl.entity.Entity.prototype.entries;
goog.exportSymbol(G__27741_27763,G__27742_27764);

var G__27743_27765 = "cljs.core.ES6Iterator.prototype.next";
var G__27744_27766 = cljs.core.ES6Iterator.prototype.next;
goog.exportSymbol(G__27743_27765,G__27744_27766);

var G__27745_27767 = "cljs.core.ES6EntriesIterator.prototype.next";
var G__27746_27768 = cljs.core.ES6EntriesIterator.prototype.next;
goog.exportSymbol(G__27745_27767,G__27746_27768);
