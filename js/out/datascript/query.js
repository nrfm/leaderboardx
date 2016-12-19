// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('datascript.query');
goog.require('cljs.core');
goog.require('datascript.arrays');
goog.require('clojure.set');
goog.require('datascript.pull_parser');
goog.require('datascript.pull_api');
goog.require('clojure.walk');
goog.require('datascript.parser');
goog.require('datascript.db');
goog.require('datascript.lru');
goog.require('datascript.impl.entity');
goog.require('cljs.reader');
datascript.query.lru_cache_size = (100);

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
datascript.query.Context = (function (rels,sources,rules,__meta,__extmap,__hash){
this.rels = rels;
this.sources = sources;
this.rules = rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7755__auto__,k__7756__auto__){
var self__ = this;
var this__7755__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7755__auto____$1,k__7756__auto__,null);
});

datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7757__auto__,k27772,else__7758__auto__){
var self__ = this;
var this__7757__auto____$1 = this;
var G__27774 = (((k27772 instanceof cljs.core.Keyword))?k27772.fqn:null);
switch (G__27774) {
case "rels":
return self__.rels;

break;
case "sources":
return self__.sources;

break;
case "rules":
return self__.rules;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27772,else__7758__auto__);

}
});

datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7769__auto__,writer__7770__auto__,opts__7771__auto__){
var self__ = this;
var this__7769__auto____$1 = this;
var pr_pair__7772__auto__ = ((function (this__7769__auto____$1){
return (function (keyval__7773__auto__){
return cljs.core.pr_sequential_writer(writer__7770__auto__,cljs.core.pr_writer,""," ","",opts__7771__auto__,keyval__7773__auto__);
});})(this__7769__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7770__auto__,pr_pair__7772__auto__,"#datascript.query.Context{",", ","}",opts__7771__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rels,self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sources,self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rules,self__.rules],null))], null),self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.query.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27771){
var self__ = this;
var G__27771__$1 = this;
return (new cljs.core.RecordIter((0),G__27771__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels,cljs.core.cst$kw$sources,cljs.core.cst$kw$rules], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7753__auto__){
var self__ = this;
var this__7753__auto____$1 = this;
return self__.__meta;
});

datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7749__auto__){
var self__ = this;
var this__7749__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7759__auto__){
var self__ = this;
var this__7759__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7750__auto__){
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

datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7751__auto__,other__7752__auto__){
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

datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7764__auto__,k__7765__auto__){
var self__ = this;
var this__7764__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$sources,null,cljs.core.cst$kw$rules,null,cljs.core.cst$kw$rels,null], null), null),k__7765__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7764__auto____$1),self__.__meta),k__7765__auto__);
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7765__auto__)),null));
}
});

datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7762__auto__,k__7763__auto__,G__27771){
var self__ = this;
var this__7762__auto____$1 = this;
var pred__27775 = cljs.core.keyword_identical_QMARK_;
var expr__27776 = k__7763__auto__;
if(cljs.core.truth_((function (){var G__27778 = cljs.core.cst$kw$rels;
var G__27779 = expr__27776;
return (pred__27775.cljs$core$IFn$_invoke$arity$2 ? pred__27775.cljs$core$IFn$_invoke$arity$2(G__27778,G__27779) : pred__27775.call(null,G__27778,G__27779));
})())){
return (new datascript.query.Context(G__27771,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27780 = cljs.core.cst$kw$sources;
var G__27781 = expr__27776;
return (pred__27775.cljs$core$IFn$_invoke$arity$2 ? pred__27775.cljs$core$IFn$_invoke$arity$2(G__27780,G__27781) : pred__27775.call(null,G__27780,G__27781));
})())){
return (new datascript.query.Context(self__.rels,G__27771,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27782 = cljs.core.cst$kw$rules;
var G__27783 = expr__27776;
return (pred__27775.cljs$core$IFn$_invoke$arity$2 ? pred__27775.cljs$core$IFn$_invoke$arity$2(G__27782,G__27783) : pred__27775.call(null,G__27782,G__27783));
})())){
return (new datascript.query.Context(self__.rels,self__.sources,G__27771,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7763__auto__,G__27771),null));
}
}
}
});

datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7767__auto__){
var self__ = this;
var this__7767__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rels,self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sources,self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rules,self__.rules],null))], null),self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7754__auto__,G__27771){
var self__ = this;
var this__7754__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__27771,self__.__extmap,self__.__hash));
});

datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7760__auto__,entry__7761__auto__){
var self__ = this;
var this__7760__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7761__auto__)){
return cljs.core._assoc(this__7760__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7760__auto____$1,entry__7761__auto__);
}
});

datascript.query.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rels,cljs.core.cst$sym$sources,cljs.core.cst$sym$rules], null);
});

datascript.query.Context.cljs$lang$type = true;

datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__7791__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.query/Context");
});

datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__7791__auto__,writer__7792__auto__){
return cljs.core._write(writer__7792__auto__,"datascript.query/Context");
});

datascript.query.__GT_Context = (function datascript$query$__GT_Context(rels,sources,rules){
return (new datascript.query.Context(rels,sources,rules,null,null,null));
});

datascript.query.map__GT_Context = (function datascript$query$map__GT_Context(G__27773){
return (new datascript.query.Context(cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(G__27773),cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(G__27773),cljs.core.cst$kw$rules.cljs$core$IFn$_invoke$arity$1(G__27773),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27773,cljs.core.cst$kw$rels,cljs.core.array_seq([cljs.core.cst$kw$sources,cljs.core.cst$kw$rules], 0)),null));
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
datascript.query.Relation = (function (attrs,tuples,__meta,__extmap,__hash){
this.attrs = attrs;
this.tuples = tuples;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7755__auto__,k__7756__auto__){
var self__ = this;
var this__7755__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7755__auto____$1,k__7756__auto__,null);
});

datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7757__auto__,k27786,else__7758__auto__){
var self__ = this;
var this__7757__auto____$1 = this;
var G__27788 = (((k27786 instanceof cljs.core.Keyword))?k27786.fqn:null);
switch (G__27788) {
case "attrs":
return self__.attrs;

break;
case "tuples":
return self__.tuples;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27786,else__7758__auto__);

}
});

datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7769__auto__,writer__7770__auto__,opts__7771__auto__){
var self__ = this;
var this__7769__auto____$1 = this;
var pr_pair__7772__auto__ = ((function (this__7769__auto____$1){
return (function (keyval__7773__auto__){
return cljs.core.pr_sequential_writer(writer__7770__auto__,cljs.core.pr_writer,""," ","",opts__7771__auto__,keyval__7773__auto__);
});})(this__7769__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7770__auto__,pr_pair__7772__auto__,"#datascript.query.Relation{",", ","}",opts__7771__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attrs,self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tuples,self__.tuples],null))], null),self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.query.Relation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27785){
var self__ = this;
var G__27785__$1 = this;
return (new cljs.core.RecordIter((0),G__27785__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$tuples], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7753__auto__){
var self__ = this;
var this__7753__auto____$1 = this;
return self__.__meta;
});

datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7749__auto__){
var self__ = this;
var this__7749__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7759__auto__){
var self__ = this;
var this__7759__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7750__auto__){
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

datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7751__auto__,other__7752__auto__){
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

datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7764__auto__,k__7765__auto__){
var self__ = this;
var this__7764__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tuples,null,cljs.core.cst$kw$attrs,null], null), null),k__7765__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7764__auto____$1),self__.__meta),k__7765__auto__);
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7765__auto__)),null));
}
});

datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7762__auto__,k__7763__auto__,G__27785){
var self__ = this;
var this__7762__auto____$1 = this;
var pred__27789 = cljs.core.keyword_identical_QMARK_;
var expr__27790 = k__7763__auto__;
if(cljs.core.truth_((function (){var G__27792 = cljs.core.cst$kw$attrs;
var G__27793 = expr__27790;
return (pred__27789.cljs$core$IFn$_invoke$arity$2 ? pred__27789.cljs$core$IFn$_invoke$arity$2(G__27792,G__27793) : pred__27789.call(null,G__27792,G__27793));
})())){
return (new datascript.query.Relation(G__27785,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27794 = cljs.core.cst$kw$tuples;
var G__27795 = expr__27790;
return (pred__27789.cljs$core$IFn$_invoke$arity$2 ? pred__27789.cljs$core$IFn$_invoke$arity$2(G__27794,G__27795) : pred__27789.call(null,G__27794,G__27795));
})())){
return (new datascript.query.Relation(self__.attrs,G__27785,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7763__auto__,G__27785),null));
}
}
});

datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7767__auto__){
var self__ = this;
var this__7767__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attrs,self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tuples,self__.tuples],null))], null),self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7754__auto__,G__27785){
var self__ = this;
var this__7754__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,G__27785,self__.__extmap,self__.__hash));
});

datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7760__auto__,entry__7761__auto__){
var self__ = this;
var this__7760__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7761__auto__)){
return cljs.core._assoc(this__7760__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7760__auto____$1,entry__7761__auto__);
}
});

datascript.query.Relation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$attrs,cljs.core.cst$sym$tuples], null);
});

datascript.query.Relation.cljs$lang$type = true;

datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__7791__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.query/Relation");
});

datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__7791__auto__,writer__7792__auto__){
return cljs.core._write(writer__7792__auto__,"datascript.query/Relation");
});

datascript.query.__GT_Relation = (function datascript$query$__GT_Relation(attrs,tuples){
return (new datascript.query.Relation(attrs,tuples,null,null,null));
});

datascript.query.map__GT_Relation = (function datascript$query$map__GT_Relation(G__27787){
return (new datascript.query.Relation(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(G__27787),cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(G__27787),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27787,cljs.core.cst$kw$attrs,cljs.core.array_seq([cljs.core.cst$kw$tuples], 0)),null));
});

datascript.query.intersect_keys = (function datascript$query$intersect_keys(attrs1,attrs2){
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs1)),cljs.core.set(cljs.core.keys(attrs2)));
});
datascript.query.concatv = (function datascript$query$concatv(var_args){
var args__8308__auto__ = [];
var len__8301__auto___27798 = arguments.length;
var i__8302__auto___27799 = (0);
while(true){
if((i__8302__auto___27799 < len__8301__auto___27798)){
args__8308__auto__.push((arguments[i__8302__auto___27799]));

var G__27800 = (i__8302__auto___27799 + (1));
i__8302__auto___27799 = G__27800;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((0) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((0)),(0),null)):null);
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__8309__auto__);
});

datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,xs);
});

datascript.query.concatv.cljs$lang$maxFixedArity = (0);

datascript.query.concatv.cljs$lang$applyTo = (function (seq27797){
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27797));
});

datascript.query.looks_like_QMARK_ = (function datascript$query$looks_like_QMARK_(pattern,form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,pattern)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),pattern)){
return cljs.core.sequential_QMARK_(form);
} else {
if((pattern instanceof cljs.core.Symbol)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,pattern);
} else {
if(cljs.core.sequential_QMARK_(pattern)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(pattern),cljs.core.cst$sym$_STAR_)){
return (cljs.core.sequential_QMARK_(form)) && (cljs.core.every_QMARK_((function (p__27821){
var vec__27822 = p__27821;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27822,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27822,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.butlast(pattern),form)));
} else {
return (cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.count(pattern))) && (cljs.core.every_QMARK_((function (p__27829){
var vec__27830 = p__27829;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27830,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27830,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,form)));
}
} else {
return (pattern.cljs$core$IFn$_invoke$arity$1 ? pattern.cljs$core$IFn$_invoke$arity$1(form) : pattern.call(null,form));

}
}
}
}
});
datascript.query.source_QMARK_ = (function datascript$query$source_QMARK_(sym){
return ((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("$",cljs.core.first(cljs.core.name(sym))));
});
datascript.query.free_var_QMARK_ = (function datascript$query$free_var_QMARK_(sym){
return ((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",cljs.core.first(cljs.core.name(sym))));
});
datascript.query.attr_QMARK_ = (function datascript$query$attr_QMARK_(form){
return ((form instanceof cljs.core.Keyword)) || (typeof form === 'string');
});
datascript.query.lookup_ref_QMARK_ = (function datascript$query$lookup_ref_QMARK_(form){
return datascript.query.looks_like_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.attr_QMARK_,cljs.core.cst$sym$_], null),form);
});
datascript.query.join_tuples = (function datascript$query$join_tuples(t1,idxs1,t2,idxs2){
var l1 = idxs1.length;
var l2 = idxs2.length;
var res = (function (){var G__27834 = (l1 + l2);
return (datascript.arrays.make_array.cljs$core$IFn$_invoke$arity$1 ? datascript.arrays.make_array.cljs$core$IFn$_invoke$arity$1(G__27834) : datascript.arrays.make_array.call(null,G__27834));
})();
var n__8101__auto___27835 = l1;
var i_27836 = (0);
while(true){
if((i_27836 < n__8101__auto___27835)){
(res[i_27836] = (t1[(idxs1[i_27836])]));

var G__27837 = (i_27836 + (1));
i_27836 = G__27837;
continue;
} else {
}
break;
}

var n__8101__auto___27838 = l2;
var i_27839 = (0);
while(true){
if((i_27839 < n__8101__auto___27838)){
(res[(l1 + i_27839)] = (t2[(idxs2[i_27839])]));

var G__27840 = (i_27839 + (1));
i_27839 = G__27840;
continue;
} else {
}
break;
}

return res;
});
datascript.query.sum_rel = (function datascript$query$sum_rel(a,b){
return (new datascript.query.Relation(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(a),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(a),cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(b)),null,null,null));
});
datascript.query.prod_rel = (function datascript$query$prod_rel(var_args){
var args27841 = [];
var len__8301__auto___27844 = arguments.length;
var i__8302__auto___27845 = (0);
while(true){
if((i__8302__auto___27845 < len__8301__auto___27844)){
args27841.push((arguments[i__8302__auto___27845]));

var G__27846 = (i__8302__auto___27845 + (1));
i__8302__auto___27845 = G__27846;
continue;
} else {
}
break;
}

var G__27843 = args27841.length;
switch (G__27843) {
case 0:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27841.length)].join('')));

}
});

datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(datascript.arrays.make_array.cljs$core$IFn$_invoke$arity$1 ? datascript.arrays.make_array.cljs$core$IFn$_invoke$arity$1((0)) : datascript.arrays.make_array.call(null,(0)))], null),null,null,null));
});

datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2 = (function (rel1,rel2){
var attrs1 = cljs.core.keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel1));
var attrs2 = cljs.core.keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel2));
var idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel1),attrs1));
var idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel2),attrs2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(attrs1,attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attrs1,attrs2,idxs1,idxs2){
return (function (acc,t1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attrs1,attrs2,idxs1,idxs2){
return (function (acc__$1,t2){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(t1,idxs1,t2,idxs2));
});})(attrs1,attrs2,idxs1,idxs2))
,acc,cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel2));
});})(attrs1,attrs2,idxs1,idxs2))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel1))),null,null,null));
});

datascript.query.prod_rel.cljs$lang$maxFixedArity = 2;

datascript.query._differ_QMARK_ = (function datascript$query$_differ_QMARK_(var_args){
var args__8308__auto__ = [];
var len__8301__auto___27849 = arguments.length;
var i__8302__auto___27850 = (0);
while(true){
if((i__8302__auto___27850 < len__8301__auto___27849)){
args__8308__auto__.push((arguments[i__8302__auto___27850]));

var G__27851 = (i__8302__auto___27850 + (1));
i__8302__auto___27850 = G__27851;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((0) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((0)),(0),null)):null);
return datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__8309__auto__);
});

datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var l = cljs.core.count(xs);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((l / (2)),xs),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((l / (2)),xs));
});

datascript.query._differ_QMARK_.cljs$lang$maxFixedArity = (0);

datascript.query._differ_QMARK_.cljs$lang$applyTo = (function (seq27848){
return datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27848));
});

datascript.query._get_else = (function datascript$query$_get_else(db,e,a,else_val){
if((else_val == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("get-else: nil default value is not supported")].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_where], null));
} else {
}

var temp__6751__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if(cljs.core.truth_(temp__6751__auto__)){
var datom = temp__6751__auto__;
return cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(datom);
} else {
return else_val;
}
});
datascript.query._get_some = (function datascript$query$_get_some(var_args){
var args__8308__auto__ = [];
var len__8301__auto___27855 = arguments.length;
var i__8302__auto___27856 = (0);
while(true){
if((i__8302__auto___27856 < len__8301__auto___27855)){
args__8308__auto__.push((arguments[i__8302__auto___27856]));

var G__27857 = (i__8302__auto___27856 + (1));
i__8302__auto___27856 = G__27857;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((2) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((2)),(0),null)):null);
return datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8309__auto__);
});

datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic = (function (db,e,as){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,a){
var temp__6753__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if(cljs.core.truth_(temp__6753__auto__)){
var datom = temp__6753__auto__;
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a.cljs$core$IFn$_invoke$arity$1(datom),cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(datom)], null));
} else {
return null;
}
}),null,as);
});

datascript.query._get_some.cljs$lang$maxFixedArity = (2);

datascript.query._get_some.cljs$lang$applyTo = (function (seq27852){
var G__27853 = cljs.core.first(seq27852);
var seq27852__$1 = cljs.core.next(seq27852);
var G__27854 = cljs.core.first(seq27852__$1);
var seq27852__$2 = cljs.core.next(seq27852__$1);
return datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic(G__27853,G__27854,seq27852__$2);
});

datascript.query._missing_QMARK_ = (function datascript$query$_missing_QMARK_(db,e,a){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.impl.entity.entity(db,e),a) == null);
});
datascript.query.and_fn = (function datascript$query$and_fn(var_args){
var args__8308__auto__ = [];
var len__8301__auto___27859 = arguments.length;
var i__8302__auto___27860 = (0);
while(true){
if((i__8302__auto___27860 < len__8301__auto___27859)){
args__8308__auto__.push((arguments[i__8302__auto___27860]));

var G__27861 = (i__8302__auto___27860 + (1));
i__8302__auto___27860 = G__27861;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((0) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((0)),(0),null)):null);
return datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__8309__auto__);
});

datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
if(cljs.core.truth_(b)){
return b;
} else {
return cljs.core.reduced(b);
}
}),true,args);
});

datascript.query.and_fn.cljs$lang$maxFixedArity = (0);

datascript.query.and_fn.cljs$lang$applyTo = (function (seq27858){
return datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27858));
});

datascript.query.or_fn = (function datascript$query$or_fn(var_args){
var args__8308__auto__ = [];
var len__8301__auto___27863 = arguments.length;
var i__8302__auto___27864 = (0);
while(true){
if((i__8302__auto___27864 < len__8301__auto___27863)){
args__8308__auto__.push((arguments[i__8302__auto___27864]));

var G__27865 = (i__8302__auto___27864 + (1));
i__8302__auto___27864 = G__27865;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((0) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((0)),(0),null)):null);
return datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__8309__auto__);
});

datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
if(cljs.core.truth_(b)){
return cljs.core.reduced(b);
} else {
return b;
}
}),null,args);
});

datascript.query.or_fn.cljs$lang$maxFixedArity = (0);

datascript.query.or_fn.cljs$lang$applyTo = (function (seq27862){
return datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27862));
});

datascript.query.built_ins = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$true_QMARK_,cljs.core.cst$sym$and,cljs.core.cst$sym$odd_QMARK_,cljs.core.cst$sym$get_DASH_else,cljs.core.cst$sym$_GT__EQ_,cljs.core.cst$sym$print_DASH_str,cljs.core.cst$sym$_GT_,cljs.core.cst$sym$count,cljs.core.cst$sym$get_DASH_some,cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$inc,cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$quot,cljs.core.cst$sym$false_QMARK_,cljs.core.cst$sym$not,cljs.core.cst$sym$identity,cljs.core.cst$sym$_DASH_differ_QMARK_,cljs.core.cst$sym$re_DASH_seq,cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$min,cljs.core.cst$sym$_PLUS_,cljs.core.cst$sym$name,cljs.core.cst$sym$missing_QMARK_,cljs.core.cst$sym$ground,cljs.core.cst$sym$rand_DASH_int,cljs.core.cst$sym$complement,cljs.core.cst$sym$_EQ__EQ_,cljs.core.cst$sym$hash_DASH_map,cljs.core.cst$sym$compare,cljs.core.cst$sym$range,cljs.core.cst$sym$max,cljs.core.cst$sym$empty_QMARK_,cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$pr_DASH_str,cljs.core.cst$sym$println_DASH_str,cljs.core.cst$sym$meta,cljs.core.cst$sym$zero_QMARK_,cljs.core.cst$sym$_BANG__EQ_,cljs.core.cst$sym$prn_DASH_str,cljs.core.cst$sym$dec,cljs.core.cst$sym$vector,cljs.core.cst$sym$not_EQ_,cljs.core.cst$sym$str,cljs.core.cst$sym$_LT_,cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$some_QMARK_,cljs.core.cst$sym$pos_QMARK_,cljs.core.cst$sym$rand,cljs.core.cst$sym$re_DASH_matches,cljs.core.cst$sym$list,cljs.core.cst$sym$subs,cljs.core.cst$sym$mod,cljs.core.cst$sym$array_DASH_map,cljs.core.cst$sym$rem,cljs.core.cst$sym$even_QMARK_,cljs.core.cst$sym$type,cljs.core.cst$sym$neg_QMARK_,cljs.core.cst$sym$not_DASH_empty,cljs.core.cst$sym$or,cljs.core.cst$sym$identical_QMARK_,cljs.core.cst$sym$set,cljs.core.cst$sym$re_DASH_find],[cljs.core.true_QMARK_,datascript.query.and_fn,cljs.core.odd_QMARK_,datascript.query._get_else,cljs.core._GT__EQ_,cljs.core.print_str,cljs.core._GT_,cljs.core.count,datascript.query._get_some,cljs.core.nil_QMARK_,cljs.core.inc,cljs.core._SLASH_,cljs.core.quot,cljs.core.false_QMARK_,cljs.core.not,cljs.core.identity,datascript.query._differ_QMARK_,cljs.core.re_seq,cljs.core._LT__EQ_,cljs.core._EQ_,cljs.core.min,cljs.core._PLUS_,cljs.core.name,datascript.query._missing_QMARK_,cljs.core.identity,cljs.core.rand_int,cljs.core.complement,cljs.core._EQ__EQ_,cljs.core.hash_map,cljs.core.compare,cljs.core.range,cljs.core.max,cljs.core.empty,cljs.core._STAR_,cljs.core.pr_str,cljs.core.println_str,cljs.core.meta,cljs.core.zero_QMARK_,cljs.core.not_EQ_,cljs.core.prn_str,cljs.core.dec,cljs.core.vector,cljs.core.not_EQ_,cljs.core.str,cljs.core._LT_,cljs.core._,cljs.core.some_QMARK_,cljs.core.pos_QMARK_,cljs.core.rand,cljs.core.re_matches,cljs.core.list,cljs.core.subs,cljs.core.mod,cljs.core.array_map,cljs.core.rem,cljs.core.even_QMARK_,cljs.core.type,cljs.core.neg_QMARK_,cljs.core.not_empty,datascript.query.or_fn,cljs.core.identical_QMARK_,cljs.core.set,cljs.core.re_find]);
datascript.query.built_in_aggregates = (function (){var sum = (function datascript$query$sum(coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),coll);
});
var avg = (function datascript$query$avg(coll){
return (sum(coll) / cljs.core.count(coll));
});
var median = (function datascript$query$median(coll){
var terms = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(coll);
var size = cljs.core.count(coll);
var med = (size >> (1));
var G__27883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,med);
if(cljs.core.even_QMARK_(size)){
return ((G__27883 + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,(med - (1)))) / (2));
} else {
return G__27883;
}
});
var variance = (function datascript$query$variance(coll){
var mean = avg(coll);
var sum__$1 = sum((function (){var iter__7942__auto__ = ((function (mean){
return (function datascript$query$variance_$_iter__27890(s__27891){
return (new cljs.core.LazySeq(null,((function (mean){
return (function (){
var s__27891__$1 = s__27891;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__27891__$1);
if(temp__6753__auto__){
var s__27891__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27891__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__27891__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__27893 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__27892 = (0);
while(true){
if((i__27892 < size__7941__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__27892);
var delta = (x - mean);
cljs.core.chunk_append(b__27893,(delta * delta));

var G__27898 = (i__27892 + (1));
i__27892 = G__27898;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27893),datascript$query$variance_$_iter__27890(cljs.core.chunk_rest(s__27891__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27893),null);
}
} else {
var x = cljs.core.first(s__27891__$2);
var delta = (x - mean);
return cljs.core.cons((delta * delta),datascript$query$variance_$_iter__27890(cljs.core.rest(s__27891__$2)));
}
} else {
return null;
}
break;
}
});})(mean))
,null,null));
});})(mean))
;
return iter__7942__auto__(coll);
})());
return (sum__$1 / cljs.core.count(coll));
});
var stddev = (function datascript$query$stddev(coll){
var G__27897 = variance(coll);
return Math.sqrt(G__27897);
});
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$variance,cljs.core.cst$sym$count,cljs.core.cst$sym$median,cljs.core.cst$sym$sum,cljs.core.cst$sym$min,cljs.core.cst$sym$max,cljs.core.cst$sym$count_DASH_distinct,cljs.core.cst$sym$distinct,cljs.core.cst$sym$avg,cljs.core.cst$sym$stddev,cljs.core.cst$sym$rand,cljs.core.cst$sym$sample],[variance,cljs.core.count,median,sum,(function() {
var G__27899 = null;
var G__27899__1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.compare(x,acc) < (0))){
return x;
} else {
return acc;
}
}),cljs.core.first(coll),cljs.core.next(coll));
});
var G__27899__2 = (function (n,coll){
return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.count(acc) < n)){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
} else {
if((cljs.core.compare(x,cljs.core.last(acc)) < (0))){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__27899 = function(n,coll){
switch(arguments.length){
case 1:
return G__27899__1.call(this,n);
case 2:
return G__27899__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27899.cljs$core$IFn$_invoke$arity$1 = G__27899__1;
G__27899.cljs$core$IFn$_invoke$arity$2 = G__27899__2;
return G__27899;
})()
,(function() {
var G__27900 = null;
var G__27900__1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.compare(x,acc) > (0))){
return x;
} else {
return acc;
}
}),cljs.core.first(coll),cljs.core.next(coll));
});
var G__27900__2 = (function (n,coll){
return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.count(acc) < n)){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
} else {
if((cljs.core.compare(x,cljs.core.first(acc)) > (0))){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.next(acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__27900 = function(n,coll){
switch(arguments.length){
case 1:
return G__27900__1.call(this,n);
case 2:
return G__27900__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27900.cljs$core$IFn$_invoke$arity$1 = G__27900__1;
G__27900.cljs$core$IFn$_invoke$arity$2 = G__27900__2;
return G__27900;
})()
,(function (coll){
return cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(coll));
}),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.distinct),avg,stddev,(function() {
var G__27901 = null;
var G__27901__1 = (function (coll){
return cljs.core.rand_nth(coll);
});
var G__27901__2 = (function (n,coll){
return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return cljs.core.rand_nth(coll);
})));
});
G__27901 = function(n,coll){
switch(arguments.length){
case 1:
return G__27901__1.call(this,n);
case 2:
return G__27901__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27901.cljs$core$IFn$_invoke$arity$1 = G__27901__1;
G__27901.cljs$core$IFn$_invoke$arity$2 = G__27901__2;
return G__27901;
})()
,(function (n,coll){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.shuffle(coll)));
})]);
})();
datascript.query.parse_rules = (function datascript$query$parse_rules(rules){
var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string(rules):rules);
return cljs.core.group_by(cljs.core.ffirst,rules__$1);
});
datascript.query.bindable_to_seq_QMARK_ = (function datascript$query$bindable_to_seq_QMARK_(x){
var or__7085__auto__ = (datascript.db.seqable_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.db.seqable_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : datascript.db.seqable_QMARK_.call(null,x));
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return (datascript.arrays.array_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.arrays.array_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : datascript.arrays.array_QMARK_.call(null,x));
}
});
datascript.query.empty_rel = (function datascript$query$empty_rel(binding){
var vars = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,datascript.parser.collect_vars_distinct(binding));
return (new datascript.query.Relation(cljs.core.zipmap(vars,cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.PersistentVector.EMPTY,null,null,null));
});

/**
 * @interface
 */
datascript.query.IBinding = function(){};

datascript.query.in__GT_rel = (function datascript$query$in__GT_rel(binding,value){
if((!((binding == null))) && (!((binding.datascript$query$IBinding$in__GT_rel$arity$2 == null)))){
return binding.datascript$query$IBinding$in__GT_rel$arity$2(binding,value);
} else {
var x__7798__auto__ = (((binding == null))?null:binding);
var m__7799__auto__ = (datascript.query.in__GT_rel[goog.typeOf(x__7798__auto__)]);
if(!((m__7799__auto__ == null))){
return (m__7799__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7799__auto__.cljs$core$IFn$_invoke$arity$2(binding,value) : m__7799__auto__.call(null,binding,value));
} else {
var m__7799__auto____$1 = (datascript.query.in__GT_rel["_"]);
if(!((m__7799__auto____$1 == null))){
return (m__7799__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7799__auto____$1.cljs$core$IFn$_invoke$arity$2(binding,value) : m__7799__auto____$1.call(null,binding,value));
} else {
throw cljs.core.missing_protocol("IBinding.in->rel",binding);
}
}
}
});

datascript.parser.BindIgnore.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindIgnore.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (_,___$1){
var ___$2 = this;
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();
});

datascript.parser.BindScalar.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindScalar.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,value){
var binding__$1 = this;
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.fromArray([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$variable,cljs.core.cst$kw$symbol], null)),(0)], true, false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null))], null),null,null,null));
});

datascript.parser.BindColl.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindColl.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if(cljs.core.not(datascript.query.bindable_to_seq_QMARK_(coll))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Cannot bind value "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([coll], 0))),cljs.core.str(" to collection "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([datascript.parser.source(binding__$1)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_binding,cljs.core.cst$kw$value,coll,cljs.core.cst$kw$binding,datascript.parser.source(binding__$1)], null));
} else {
if(cljs.core.empty_QMARK_(coll)){
return datascript.query.empty_rel(binding__$1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (binding__$1){
return (function (p1__27902_SHARP_){
return datascript.query.in__GT_rel(cljs.core.cst$kw$binding.cljs$core$IFn$_invoke$arity$1(binding__$1),p1__27902_SHARP_);
});})(binding__$1))
,coll));

}
}
});

datascript.parser.BindTuple.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindTuple.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if(cljs.core.not(datascript.query.bindable_to_seq_QMARK_(coll))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Cannot bind value "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([coll], 0))),cljs.core.str(" to tuple "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([datascript.parser.source(binding__$1)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_binding,cljs.core.cst$kw$value,coll,cljs.core.cst$kw$binding,datascript.parser.source(binding__$1)], null));
} else {
if((cljs.core.count(coll) < cljs.core.count(cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(binding__$1)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Not enough elements in a collection "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([coll], 0))),cljs.core.str(" to bind tuple "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([datascript.parser.source(binding__$1)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_binding,cljs.core.cst$kw$value,coll,cljs.core.cst$kw$binding,datascript.parser.source(binding__$1)], null));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (binding__$1){
return (function (p1__27903_SHARP_,p2__27904_SHARP_){
return datascript.query.in__GT_rel(p1__27903_SHARP_,p2__27904_SHARP_);
});})(binding__$1))
,cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(binding__$1),coll));

}
}
});
datascript.query.resolve_in = (function datascript$query$resolve_in(context,p__27905){
var vec__27909 = p__27905;
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27909,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27909,(1),null);
if(((binding instanceof datascript.parser.BindScalar)) && ((cljs.core.cst$kw$variable.cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.SrcVar))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sources], null),cljs.core.assoc,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$variable,cljs.core.cst$kw$symbol], null)),value);
} else {
if(((binding instanceof datascript.parser.BindScalar)) && ((cljs.core.cst$kw$variable.cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.RulesVar))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$rules,datascript.query.parse_rules(value));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),cljs.core.conj,datascript.query.in__GT_rel(binding,value));

}
}
});
datascript.query.resolve_ins = (function datascript$query$resolve_ins(context,bindings,values){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_in,context,cljs.core.zipmap(bindings,values));
});
datascript.query._STAR_lookup_attrs_STAR_ = null;
datascript.query._STAR_lookup_source_STAR_ = null;
datascript.query.getter_fn = (function datascript$query$getter_fn(attrs,attr){
var idx = (attrs.cljs$core$IFn$_invoke$arity$1 ? attrs.cljs$core$IFn$_invoke$arity$1(attr) : attrs.call(null,attr));
if((!((datascript.query._STAR_lookup_attrs_STAR_ == null))) && (cljs.core.contains_QMARK_(datascript.query._STAR_lookup_attrs_STAR_,attr))){
return ((function (idx){
return (function (tuple){
var eid = (tuple[idx]);
if(typeof eid === 'number'){
return eid;
} else {
return datascript.db.entid(datascript.query._STAR_lookup_source_STAR_,eid);
}
});
;})(idx))
} else {
return ((function (idx){
return (function (tuple){
return (tuple[idx]);
});
;})(idx))
}
});
datascript.query.tuple_key_fn = (function datascript$query$tuple_key_fn(getters){
if((cljs.core.count(getters) === (1))){
return cljs.core.first(getters);
} else {
var getters__$1 = cljs.core.to_array(getters);
return ((function (getters__$1){
return (function (tuple){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1(getters__$1.map(((function (getters__$1){
return (function (p1__27912_SHARP_){
return (p1__27912_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27912_SHARP_.cljs$core$IFn$_invoke$arity$1(tuple) : p1__27912_SHARP_.call(null,tuple));
});})(getters__$1))
));
});
;})(getters__$1))
}
});
datascript.query.hash_attrs = (function datascript$query$hash_attrs(key_fn,tuples){
var tuples__$1 = tuples;
var hash_table = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
var temp__6751__auto__ = cljs.core.first(tuples__$1);
if(cljs.core.truth_(temp__6751__auto__)){
var tuple = temp__6751__auto__;
var key = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(tuple) : key_fn.call(null,tuple));
var G__27914 = cljs.core.next(tuples__$1);
var G__27915 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__27914;
hash_table = G__27915;
continue;
} else {
return cljs.core.persistent_BANG_(hash_table);
}
break;
}
});
datascript.query.hash_join = (function datascript$query$hash_join(rel1,rel2){
var tuples1 = cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel1);
var tuples2 = cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel2);
var attrs1 = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel1);
var attrs2 = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel2);
var common_attrs = cljs.core.vec(datascript.query.intersect_keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel1),cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel2)));
var common_gtrs1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tuples1,tuples2,attrs1,attrs2,common_attrs){
return (function (p1__27916_SHARP_){
return datascript.query.getter_fn(attrs1,p1__27916_SHARP_);
});})(tuples1,tuples2,attrs1,attrs2,common_attrs))
,common_attrs);
var common_gtrs2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1){
return (function (p1__27917_SHARP_){
return datascript.query.getter_fn(attrs2,p1__27917_SHARP_);
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1))
,common_attrs);
var keep_attrs1 = cljs.core.keys(attrs1);
var keep_attrs2 = cljs.core.vec(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs2)),cljs.core.set(cljs.core.keys(attrs1))));
var keep_idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs1,keep_attrs1));
var keep_idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs2,keep_attrs2));
var key_fn1 = datascript.query.tuple_key_fn(common_gtrs1);
var hash = datascript.query.hash_attrs(key_fn1,tuples1);
var key_fn2 = datascript.query.tuple_key_fn(common_gtrs2);
var new_tuples = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2){
return (function (acc,tuple2){
var key = (key_fn2.cljs$core$IFn$_invoke$arity$1 ? key_fn2.cljs$core$IFn$_invoke$arity$1(tuple2) : key_fn2.call(null,tuple2));
var temp__6751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hash,key);
if(cljs.core.truth_(temp__6751__auto__)){
var tuples1__$1 = temp__6751__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tuples1__$1,temp__6751__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2){
return (function (acc__$1,tuple1){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(tuple1,keep_idxs1,tuple2,keep_idxs2));
});})(tuples1__$1,temp__6751__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2))
,acc,tuples1__$1);
} else {
return acc;
}
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),tuples2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(keep_attrs1,keep_attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),new_tuples,null,null,null));
});
datascript.query.lookup_pattern_db = (function datascript$query$lookup_pattern_db(db,pattern){
var search_pattern = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__27918_SHARP_){
if((p1__27918_SHARP_ instanceof cljs.core.Symbol)){
return null;
} else {
return p1__27918_SHARP_;
}
}),pattern);
var datoms = datascript.db._search(db,search_pattern);
var attr__GT_prop = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (search_pattern,datoms){
return (function (p__27923){
var vec__27924 = p__27923;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27924,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27924,(1),null);
return datascript.query.free_var_QMARK_(s);
});})(search_pattern,datoms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));
return (new datascript.query.Relation(attr__GT_prop,datoms,null,null,null));
});
datascript.query.matches_pattern_QMARK_ = (function datascript$query$matches_pattern_QMARK_(pattern,tuple){
var tuple__$1 = tuple;
var pattern__$1 = pattern;
while(true){
if(cljs.core.truth_((function (){var and__7073__auto__ = tuple__$1;
if(cljs.core.truth_(and__7073__auto__)){
return pattern__$1;
} else {
return and__7073__auto__;
}
})())){
var t = cljs.core.first(tuple__$1);
var p = cljs.core.first(pattern__$1);
if(((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,p))){
var G__27927 = cljs.core.next(tuple__$1);
var G__27928 = cljs.core.next(pattern__$1);
tuple__$1 = G__27927;
pattern__$1 = G__27928;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
});
datascript.query.lookup_pattern_coll = (function datascript$query$lookup_pattern_coll(coll,pattern){
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__27929_SHARP_){
return datascript.query.matches_pattern_QMARK_(pattern,p1__27929_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (data){
return (function (p__27934){
var vec__27935 = p__27934;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27935,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27935,(1),null);
return datascript.query.free_var_QMARK_(s);
});})(data))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
return (new datascript.query.Relation(attr__GT_idx,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,data),null,null,null));
});
datascript.query.normalize_pattern_clause = (function datascript$query$normalize_pattern_clause(clause){
if(cljs.core.truth_(datascript.query.source_QMARK_(cljs.core.first(clause)))){
return clause;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$$], null),clause);
}
});
datascript.query.lookup_pattern = (function datascript$query$lookup_pattern(source,pattern){
if(((!((source == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$ISearch$)))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source))){
return datascript.query.lookup_pattern_db(source,pattern);
} else {
return datascript.query.lookup_pattern_coll(source,pattern);

}
});
datascript.query.collapse_rels = (function datascript$query$collapse_rels(rels,new_rel){
var rels__$1 = rels;
var new_rel__$1 = new_rel;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__6751__auto__ = cljs.core.first(rels__$1);
if(cljs.core.truth_(temp__6751__auto__)){
var rel = temp__6751__auto__;
if(cljs.core.truth_(cljs.core.not_empty(datascript.query.intersect_keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(new_rel__$1),cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel))))){
var G__27940 = cljs.core.next(rels__$1);
var G__27941 = datascript.query.hash_join(rel,new_rel__$1);
var G__27942 = acc;
rels__$1 = G__27940;
new_rel__$1 = G__27941;
acc = G__27942;
continue;
} else {
var G__27943 = cljs.core.next(rels__$1);
var G__27944 = new_rel__$1;
var G__27945 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,rel);
rels__$1 = G__27943;
new_rel__$1 = G__27944;
acc = G__27945;
continue;
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new_rel__$1);
}
break;
}
});
datascript.query.rel_with_attr = (function datascript$query$rel_with_attr(context,sym){
return cljs.core.some((function (p1__27946_SHARP_){
if(cljs.core.contains_QMARK_(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(p1__27946_SHARP_),sym)){
return p1__27946_SHARP_;
} else {
return null;
}
}),cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context));
});
datascript.query.context_resolve_val = (function datascript$query$context_resolve_val(context,sym){
var temp__6753__auto__ = datascript.query.rel_with_attr(context,sym);
if(cljs.core.truth_(temp__6753__auto__)){
var rel = temp__6753__auto__;
var temp__6753__auto____$1 = cljs.core.first(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel));
if(cljs.core.truth_(temp__6753__auto____$1)){
var tuple = temp__6753__auto____$1;
return (tuple[cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel).call(null,sym)]);
} else {
return null;
}
} else {
return null;
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function datascript$query$rel_contains_attrs_QMARK_(rel,attrs){
return !(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(attrs),cljs.core.set(cljs.core.keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel))))));
});
datascript.query.rel_prod_by_attrs = (function datascript$query$rel_prod_by_attrs(context,attrs){
var rels = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__27947_SHARP_){
return datascript.query.rel_contains_attrs_QMARK_(p1__27947_SHARP_,attrs);
}),cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),((function (rels,production){
return (function (p1__27948_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(rels),p1__27948_SHARP_);
});})(rels,production))
),production], null);
});
datascript.query._call_fn = (function datascript$query$_call_fn(context,rel,f,args){
var sources = cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(context);
var attrs = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel);
var len = cljs.core.count(args);
var static_args = (datascript.arrays.make_array.cljs$core$IFn$_invoke$arity$1 ? datascript.arrays.make_array.cljs$core$IFn$_invoke$arity$1(len) : datascript.arrays.make_array.call(null,len));
var tuples_args = (datascript.arrays.make_array.cljs$core$IFn$_invoke$arity$1 ? datascript.arrays.make_array.cljs$core$IFn$_invoke$arity$1(len) : datascript.arrays.make_array.call(null,len));
var n__8101__auto___27949 = len;
var i_27950 = (0);
while(true){
if((i_27950 < n__8101__auto___27949)){
var arg_27951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,i_27950);
if((arg_27951 instanceof cljs.core.Symbol)){
var temp__6751__auto___27952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sources,arg_27951);
if(cljs.core.truth_(temp__6751__auto___27952)){
var source_27953 = temp__6751__auto___27952;
(static_args[i_27950] = source_27953);
} else {
(tuples_args[i_27950] = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,arg_27951));
}
} else {
(static_args[i_27950] = arg_27951);
}

var G__27954 = (i_27950 + (1));
i_27950 = G__27954;
continue;
} else {
}
break;
}

return ((function (sources,attrs,len,static_args,tuples_args){
return (function (tuple){
var n__8101__auto___27955 = len;
var i_27956 = (0);
while(true){
if((i_27956 < n__8101__auto___27955)){
var temp__6753__auto___27957 = (tuples_args[i_27956]);
if(cljs.core.truth_(temp__6753__auto___27957)){
var tuple_idx_27958 = temp__6753__auto___27957;
var v_27959 = (tuple[tuple_idx_27958]);
(static_args[i_27956] = v_27959);
} else {
}

var G__27960 = (i_27956 + (1));
i_27956 = G__27960;
continue;
} else {
}
break;
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,static_args);
});
;})(sources,attrs,len,static_args,tuples_args))
});
datascript.query.resolve_sym = (function datascript$query$resolve_sym(sym){
return null;
});
datascript.query.filter_by_pred = (function datascript$query$filter_by_pred(context,clause){
var vec__27971 = clause;
var vec__27974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27971,(0),null);
var seq__27975 = cljs.core.seq(vec__27974);
var first__27976 = cljs.core.first(seq__27975);
var seq__27975__$1 = cljs.core.next(seq__27975);
var f = first__27976;
var args = seq__27975__$1;
var pred = (function (){var or__7085__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
var or__7085__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__7085__auto____$1)){
return or__7085__auto____$1;
} else {
var or__7085__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__7085__auto____$2)){
return or__7085__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Unknown predicate '"),cljs.core.str(f),cljs.core.str(" in "),cljs.core.str(clause)].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_where,cljs.core.cst$kw$form,clause,cljs.core.cst$kw$var,f], null));
} else {
return null;
}
}
}
}
})();
var vec__27977 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27977,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27977,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datascript.query._call_fn(context__$1,production,pred,args);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tuples], null),((function (tuple_pred,vec__27971,vec__27974,seq__27975,first__27976,seq__27975__$1,f,args,pred,vec__27977,context__$1,production){
return (function (p1__27961_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(tuple_pred,p1__27961_SHARP_);
});})(tuple_pred,vec__27971,vec__27974,seq__27975,first__27976,seq__27975__$1,f,args,pred,vec__27977,context__$1,production))
);
})():cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,cljs.core.cst$kw$tuples,cljs.core.PersistentVector.EMPTY));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function datascript$query$bind_by_fn(context,clause){
var vec__27995 = clause;
var vec__27998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27995,(0),null);
var seq__27999 = cljs.core.seq(vec__27998);
var first__28000 = cljs.core.first(seq__27999);
var seq__27999__$1 = cljs.core.next(seq__27999);
var f = first__28000;
var args = seq__27999__$1;
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27995,(1),null);
var binding = datascript.parser.parse_binding(out);
var fun = (function (){var or__7085__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
var or__7085__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__7085__auto____$1)){
return or__7085__auto____$1;
} else {
var or__7085__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__7085__auto____$2)){
return or__7085__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Unknown function '"),cljs.core.str(f),cljs.core.str(" in "),cljs.core.str(clause)].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_where,cljs.core.cst$kw$form,clause,cljs.core.cst$kw$var,f], null));
} else {
return null;
}
}
}
}
})();
var vec__28001 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28001,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28001,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datascript.query._call_fn(context__$1,production,fun,args);
var rels = (function (){var iter__7942__auto__ = ((function (tuple_fn,vec__27995,vec__27998,seq__27999,first__28000,seq__27999__$1,f,args,out,binding,fun,vec__28001,context__$1,production){
return (function datascript$query$bind_by_fn_$_iter__28004(s__28005){
return (new cljs.core.LazySeq(null,((function (tuple_fn,vec__27995,vec__27998,seq__27999,first__28000,seq__27999__$1,f,args,out,binding,fun,vec__28001,context__$1,production){
return (function (){
var s__28005__$1 = s__28005;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__28005__$1);
if(temp__6753__auto__){
var s__28005__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28005__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__28005__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__28007 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__28006 = (0);
while(true){
if((i__28006 < size__7941__auto__)){
var tuple = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__28006);
var val = (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(tuple) : tuple_fn.call(null,tuple));
if(!((val == null))){
cljs.core.chunk_append(b__28007,datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)));

var G__28010 = (i__28006 + (1));
i__28006 = G__28010;
continue;
} else {
var G__28011 = (i__28006 + (1));
i__28006 = G__28011;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28007),datascript$query$bind_by_fn_$_iter__28004(cljs.core.chunk_rest(s__28005__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28007),null);
}
} else {
var tuple = cljs.core.first(s__28005__$2);
var val = (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(tuple) : tuple_fn.call(null,tuple));
if(!((val == null))){
return cljs.core.cons(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)),datascript$query$bind_by_fn_$_iter__28004(cljs.core.rest(s__28005__$2)));
} else {
var G__28012 = cljs.core.rest(s__28005__$2);
s__28005__$1 = G__28012;
continue;
}
}
} else {
return null;
}
break;
}
});})(tuple_fn,vec__27995,vec__27998,seq__27999,first__28000,seq__27999__$1,f,args,out,binding,fun,vec__28001,context__$1,production))
,null,null));
});})(tuple_fn,vec__27995,vec__27998,seq__27999,first__28000,seq__27999__$1,f,args,out,binding,fun,vec__28001,context__$1,production))
;
return iter__7942__auto__(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(production));
})();
if(cljs.core.empty_QMARK_(rels)){
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(production,datascript.query.empty_rel(binding));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels);
}
})():datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,cljs.core.cst$kw$tuples,cljs.core.PersistentVector.EMPTY),datascript.query.empty_rel(binding)));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),datascript.query.collapse_rels,new_rel);
});
datascript.query.rule_QMARK_ = (function datascript$query$rule_QMARK_(context,clause){
return (cljs.core.sequential_QMARK_(clause)) && (cljs.core.contains_QMARK_(cljs.core.cst$kw$rules.cljs$core$IFn$_invoke$arity$1(context),(cljs.core.truth_(datascript.query.source_QMARK_(cljs.core.first(clause)))?cljs.core.second(clause):cljs.core.first(clause))));
});
datascript.query.rule_seqid = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
datascript.query.expand_rule = (function datascript$query$expand_rule(clause,context,used_args){
var vec__28047 = clause;
var seq__28048 = cljs.core.seq(vec__28047);
var first__28049 = cljs.core.first(seq__28048);
var seq__28048__$1 = cljs.core.next(seq__28048);
var rule = first__28049;
var call_args = seq__28048__$1;
var seqid = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rules.cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__7942__auto__ = ((function (vec__28047,seq__28048,first__28049,seq__28048__$1,rule,call_args,seqid,branches){
return (function datascript$query$expand_rule_$_iter__28050(s__28051){
return (new cljs.core.LazySeq(null,((function (vec__28047,seq__28048,first__28049,seq__28048__$1,rule,call_args,seqid,branches){
return (function (){
var s__28051__$1 = s__28051;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__28051__$1);
if(temp__6753__auto__){
var s__28051__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28051__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__28051__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__28053 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__28052 = (0);
while(true){
if((i__28052 < size__7941__auto__)){
var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__28052);
var vec__28068 = branch;
var seq__28069 = cljs.core.seq(vec__28068);
var first__28070 = cljs.core.first(seq__28069);
var seq__28069__$1 = cljs.core.next(seq__28069);
var vec__28071 = first__28070;
var seq__28072 = cljs.core.seq(vec__28071);
var first__28073 = cljs.core.first(seq__28072);
var seq__28072__$1 = cljs.core.next(seq__28072);
var _ = first__28073;
var rule_args = seq__28072__$1;
var clauses = seq__28069__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
cljs.core.chunk_append(b__28053,clojure.walk.postwalk(((function (i__28052,vec__28068,seq__28069,first__28070,seq__28069__$1,vec__28071,seq__28072,first__28073,seq__28072__$1,_,rule_args,clauses,replacements,branch,c__7940__auto__,size__7941__auto__,b__28053,s__28051__$2,temp__6753__auto__,vec__28047,seq__28048,first__28049,seq__28048__$1,rule,call_args,seqid,branches){
return (function (p1__28013_SHARP_){
if(cljs.core.truth_(datascript.query.free_var_QMARK_(p1__28013_SHARP_))){
var or__7085__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__28013_SHARP_) : replacements.call(null,p1__28013_SHARP_));
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.core.name(p1__28013_SHARP_)),cljs.core.str("__auto__"),cljs.core.str(seqid)].join(''));
}
} else {
return p1__28013_SHARP_;
}
});})(i__28052,vec__28068,seq__28069,first__28070,seq__28069__$1,vec__28071,seq__28072,first__28073,seq__28072__$1,_,rule_args,clauses,replacements,branch,c__7940__auto__,size__7941__auto__,b__28053,s__28051__$2,temp__6753__auto__,vec__28047,seq__28048,first__28049,seq__28048__$1,rule,call_args,seqid,branches))
,clauses));

var G__28080 = (i__28052 + (1));
i__28052 = G__28080;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28053),datascript$query$expand_rule_$_iter__28050(cljs.core.chunk_rest(s__28051__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28053),null);
}
} else {
var branch = cljs.core.first(s__28051__$2);
var vec__28074 = branch;
var seq__28075 = cljs.core.seq(vec__28074);
var first__28076 = cljs.core.first(seq__28075);
var seq__28075__$1 = cljs.core.next(seq__28075);
var vec__28077 = first__28076;
var seq__28078 = cljs.core.seq(vec__28077);
var first__28079 = cljs.core.first(seq__28078);
var seq__28078__$1 = cljs.core.next(seq__28078);
var _ = first__28079;
var rule_args = seq__28078__$1;
var clauses = seq__28075__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
return cljs.core.cons(clojure.walk.postwalk(((function (vec__28074,seq__28075,first__28076,seq__28075__$1,vec__28077,seq__28078,first__28079,seq__28078__$1,_,rule_args,clauses,replacements,branch,s__28051__$2,temp__6753__auto__,vec__28047,seq__28048,first__28049,seq__28048__$1,rule,call_args,seqid,branches){
return (function (p1__28013_SHARP_){
if(cljs.core.truth_(datascript.query.free_var_QMARK_(p1__28013_SHARP_))){
var or__7085__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__28013_SHARP_) : replacements.call(null,p1__28013_SHARP_));
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.core.name(p1__28013_SHARP_)),cljs.core.str("__auto__"),cljs.core.str(seqid)].join(''));
}
} else {
return p1__28013_SHARP_;
}
});})(vec__28074,seq__28075,first__28076,seq__28075__$1,vec__28077,seq__28078,first__28079,seq__28078__$1,_,rule_args,clauses,replacements,branch,s__28051__$2,temp__6753__auto__,vec__28047,seq__28048,first__28049,seq__28048__$1,rule,call_args,seqid,branches))
,clauses),datascript$query$expand_rule_$_iter__28050(cljs.core.rest(s__28051__$2)));
}
} else {
return null;
}
break;
}
});})(vec__28047,seq__28048,first__28049,seq__28048__$1,rule,call_args,seqid,branches))
,null,null));
});})(vec__28047,seq__28048,first__28049,seq__28048__$1,rule,call_args,seqid,branches))
;
return iter__7942__auto__(branches);
});
datascript.query.remove_pairs = (function datascript$query$remove_pairs(xs,ys){
var pairs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__28085){
var vec__28086 = p__28085;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28086,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28086,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function datascript$query$rule_gen_guards(rule_clause,used_args){
var vec__28110 = rule_clause;
var seq__28111 = cljs.core.seq(vec__28110);
var first__28112 = cljs.core.first(seq__28111);
var seq__28111__$1 = cljs.core.next(seq__28111);
var rule = first__28112;
var call_args = seq__28111__$1;
var prev_call_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(used_args,rule);
var iter__7942__auto__ = ((function (vec__28110,seq__28111,first__28112,seq__28111__$1,rule,call_args,prev_call_args){
return (function datascript$query$rule_gen_guards_$_iter__28113(s__28114){
return (new cljs.core.LazySeq(null,((function (vec__28110,seq__28111,first__28112,seq__28111__$1,rule,call_args,prev_call_args){
return (function (){
var s__28114__$1 = s__28114;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__28114__$1);
if(temp__6753__auto__){
var s__28114__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28114__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__28114__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__28116 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__28115 = (0);
while(true){
if((i__28115 < size__7941__auto__)){
var prev_args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__28115);
var vec__28125 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28125,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28125,(1),null);
cljs.core.chunk_append(b__28116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_DASH_differ_QMARK_], null),call_args__$1,cljs.core.array_seq([prev_args__$1], 0))], null));

var G__28131 = (i__28115 + (1));
i__28115 = G__28131;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28116),datascript$query$rule_gen_guards_$_iter__28113(cljs.core.chunk_rest(s__28114__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28116),null);
}
} else {
var prev_args = cljs.core.first(s__28114__$2);
var vec__28128 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28128,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28128,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_DASH_differ_QMARK_], null),call_args__$1,cljs.core.array_seq([prev_args__$1], 0))], null),datascript$query$rule_gen_guards_$_iter__28113(cljs.core.rest(s__28114__$2)));
}
} else {
return null;
}
break;
}
});})(vec__28110,seq__28111,first__28112,seq__28111__$1,rule,call_args,prev_call_args))
,null,null));
});})(vec__28110,seq__28111,first__28112,seq__28111__$1,rule,call_args,prev_call_args))
;
return iter__7942__auto__(prev_call_args);
});
datascript.query.walk_collect = (function datascript$query$walk_collect(form,pred){
var res = (function (){var G__28134 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28134) : cljs.core.atom.call(null,G__28134));
})();
clojure.walk.postwalk(((function (res){
return (function (p1__28132_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__28132_SHARP_) : pred.call(null,p1__28132_SHARP_)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,p1__28132_SHARP_);
} else {
}

return p1__28132_SHARP_;
});})(res))
,form);

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(res) : cljs.core.deref.call(null,res));
});
datascript.query.split_guards = (function datascript$query$split_guards(clauses,guards){
var bound_vars = cljs.core.set(datascript.query.walk_collect(clauses,datascript.query.free_var_QMARK_));
var pred = ((function (bound_vars){
return (function (p__28142){
var vec__28143 = p__28142;
var vec__28146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28143,(0),null);
var seq__28147 = cljs.core.seq(vec__28146);
var first__28148 = cljs.core.first(seq__28147);
var seq__28147__$1 = cljs.core.next(seq__28147);
var _ = first__28148;
var vars = seq__28147__$1;
return cljs.core.every_QMARK_(bound_vars,vars);
});})(bound_vars))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,guards),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pred,guards)], null);
});
datascript.query.solve_rule = (function datascript$query$solve_rule(context,clause){
var final_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,clause);
var final_attrs_map = cljs.core.zipmap(final_attrs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var solve = ((function (final_attrs,final_attrs_map){
return (function (prefix_context,clauses){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query._resolve_clause,prefix_context,clauses);
});})(final_attrs,final_attrs_map))
;
var empty_rels_QMARK_ = ((function (final_attrs,final_attrs_map,solve){
return (function (context__$1){
return cljs.core.some(((function (final_attrs,final_attrs_map,solve){
return (function (p1__28149_SHARP_){
return cljs.core.empty_QMARK_(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(p1__28149_SHARP_));
});})(final_attrs,final_attrs_map,solve))
,cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context__$1));
});})(final_attrs,final_attrs_map,solve))
;
var stack = (function (){var x__8014__auto__ = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$prefix_DASH_clauses,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$prefix_DASH_context,context,cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$used_DASH_args,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$pending_DASH_guards,cljs.core.PersistentArrayMap.EMPTY], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8014__auto__);
})();
var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY,null,null,null));
while(true){
var temp__6751__auto__ = cljs.core.first(stack);
if(cljs.core.truth_(temp__6751__auto__)){
var frame = temp__6751__auto__;
var vec__28170 = cljs.core.split_with(((function (stack,rel,frame,temp__6751__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__28150_SHARP_){
return cljs.core.not(datascript.query.rule_QMARK_(context,p1__28150_SHARP_));
});})(stack,rel,frame,temp__6751__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28170,(0),null);
var vec__28173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28170,(1),null);
var seq__28174 = cljs.core.seq(vec__28173);
var first__28175 = cljs.core.first(seq__28174);
var seq__28174__$1 = cljs.core.next(seq__28174);
var rule_clause = first__28175;
var next_clauses = seq__28174__$1;
if((rule_clause == null)){
var context__$1 = solve(cljs.core.cst$kw$prefix_DASH_context.cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = (datascript.query._collect.cljs$core$IFn$_invoke$arity$2 ? datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context__$1,final_attrs) : datascript.query._collect.call(null,context__$1,final_attrs));
var new_rel = (new datascript.query.Relation(final_attrs_map,tuples,null,null,null));
var G__28188 = cljs.core.next(stack);
var G__28189 = datascript.query.sum_rel(rel,new_rel);
stack = G__28188;
rel = G__28189;
continue;
} else {
var vec__28176 = rule_clause;
var seq__28177 = cljs.core.seq(vec__28176);
var first__28178 = cljs.core.first(seq__28177);
var seq__28177__$1 = cljs.core.next(seq__28177);
var rule = first__28178;
var call_args = seq__28177__$1;
var guards = datascript.query.rule_gen_guards(rule_clause,cljs.core.cst$kw$used_DASH_args.cljs$core$IFn$_invoke$arity$1(frame));
var vec__28179 = datascript.query.split_guards(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$prefix_DASH_clauses.cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(guards,cljs.core.cst$kw$pending_DASH_guards.cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28179,(0),null);
var pending_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28179,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (stack,rel,vec__28176,seq__28177,first__28178,seq__28177__$1,rule,call_args,guards,vec__28179,active_gs,pending_gs,vec__28170,clauses,vec__28173,seq__28174,first__28175,seq__28174__$1,rule_clause,next_clauses,frame,temp__6751__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__28151_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__28151_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$_DASH_differ_QMARK_)], null));
});})(stack,rel,vec__28176,seq__28177,first__28178,seq__28177__$1,rule,call_args,guards,vec__28179,active_gs,pending_gs,vec__28170,clauses,vec__28173,seq__28174,first__28175,seq__28174__$1,rule_clause,next_clauses,frame,temp__6751__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__28190 = cljs.core.next(stack);
var G__28191 = rel;
stack = G__28190;
rel = G__28191;
continue;
} else {
var prefix_clauses = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clauses,active_gs);
var prefix_context = solve(cljs.core.cst$kw$prefix_DASH_context.cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_(prefix_context))){
var G__28192 = cljs.core.next(stack);
var G__28193 = rel;
stack = G__28192;
rel = G__28193;
continue;
} else {
var used_args = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$used_DASH_args.cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$used_DASH_args.cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datascript.query.expand_rule(rule_clause,context,used_args);
var G__28194 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__7942__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__28176,seq__28177,first__28178,seq__28177__$1,rule,call_args,guards,vec__28179,active_gs,pending_gs,vec__28170,clauses,vec__28173,seq__28174,first__28175,seq__28174__$1,rule_clause,next_clauses,frame,temp__6751__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function datascript$query$solve_rule_$_iter__28182(s__28183){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__28176,seq__28177,first__28178,seq__28177__$1,rule,call_args,guards,vec__28179,active_gs,pending_gs,vec__28170,clauses,vec__28173,seq__28174,first__28175,seq__28174__$1,rule_clause,next_clauses,frame,temp__6751__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__28183__$1 = s__28183;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__28183__$1);
if(temp__6753__auto__){
var s__28183__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28183__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__28183__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__28185 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__28184 = (0);
while(true){
if((i__28184 < size__7941__auto__)){
var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__28184);
cljs.core.chunk_append(b__28185,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$prefix_DASH_clauses,prefix_clauses,cljs.core.cst$kw$prefix_DASH_context,prefix_context,cljs.core.cst$kw$clauses,datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([branch,next_clauses], 0)),cljs.core.cst$kw$used_DASH_args,used_args,cljs.core.cst$kw$pending_DASH_guards,pending_gs], null));

var G__28196 = (i__28184 + (1));
i__28184 = G__28196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28185),datascript$query$solve_rule_$_iter__28182(cljs.core.chunk_rest(s__28183__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28185),null);
}
} else {
var branch = cljs.core.first(s__28183__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$prefix_DASH_clauses,prefix_clauses,cljs.core.cst$kw$prefix_DASH_context,prefix_context,cljs.core.cst$kw$clauses,datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([branch,next_clauses], 0)),cljs.core.cst$kw$used_DASH_args,used_args,cljs.core.cst$kw$pending_DASH_guards,pending_gs], null),datascript$query$solve_rule_$_iter__28182(cljs.core.rest(s__28183__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__28176,seq__28177,first__28178,seq__28177__$1,rule,call_args,guards,vec__28179,active_gs,pending_gs,vec__28170,clauses,vec__28173,seq__28174,first__28175,seq__28174__$1,rule_clause,next_clauses,frame,temp__6751__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__28176,seq__28177,first__28178,seq__28177__$1,rule,call_args,guards,vec__28179,active_gs,pending_gs,vec__28170,clauses,vec__28173,seq__28174,first__28175,seq__28174__$1,rule_clause,next_clauses,frame,temp__6751__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__7942__auto__(branches);
})(),cljs.core.next(stack));
var G__28195 = rel;
stack = G__28194;
rel = G__28195;
continue;
}
}
}
} else {
return rel;
}
break;
}
});
datascript.query.resolve_pattern_lookup_refs = (function datascript$query$resolve_pattern_lookup_refs(source,pattern){
if(((!((source == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$)))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source))){
var vec__28202 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28202,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28202,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28202,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28202,(3),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(datascript.query.lookup_ref_QMARK_(e))?datascript.db.entid_strict(source,e):e),a,(cljs.core.truth_((function (){var and__7073__auto__ = v;
if(cljs.core.truth_(and__7073__auto__)){
var and__7073__auto____$1 = datascript.query.attr_QMARK_(a);
if(cljs.core.truth_(and__7073__auto____$1)){
var and__7073__auto____$2 = datascript.db.ref_QMARK_(source,a);
if(and__7073__auto____$2){
return datascript.query.lookup_ref_QMARK_(v);
} else {
return and__7073__auto____$2;
}
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
})())?datascript.db.entid_strict(source,v):v),(cljs.core.truth_(datascript.query.lookup_ref_QMARK_(tx))?datascript.db.entid_strict(source,tx):tx)], null),(0),cljs.core.count(pattern));
} else {
return pattern;
}
});
datascript.query.dynamic_lookup_attrs = (function datascript$query$dynamic_lookup_attrs(source,pattern){
var vec__28209 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28209,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28209,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28209,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28209,(3),null);
var G__28212 = cljs.core.PersistentHashSet.EMPTY;
var G__28212__$1 = (cljs.core.truth_(datascript.query.free_var_QMARK_(e))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__28212,e):G__28212);
var G__28212__$2 = (cljs.core.truth_(datascript.query.free_var_QMARK_(tx))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__28212__$1,tx):G__28212__$1);
if(cljs.core.truth_((function (){var and__7073__auto__ = datascript.query.free_var_QMARK_(v);
if(cljs.core.truth_(and__7073__auto__)){
return (cljs.core.not(datascript.query.free_var_QMARK_(a))) && (datascript.db.ref_QMARK_(source,a));
} else {
return and__7073__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__28212__$2,v);
} else {
return G__28212__$2;
}
});
datascript.query._resolve_clause = (function datascript$query$_resolve_clause(context,clause){
var pred__28228 = datascript.query.looks_like_QMARK_;
var expr__28229 = clause;
if(cljs.core.truth_((function (){var G__28231 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.cst$sym$_STAR_], null)], null);
var G__28232 = expr__28229;
return (pred__28228.cljs$core$IFn$_invoke$arity$2 ? pred__28228.cljs$core$IFn$_invoke$arity$2(G__28231,G__28232) : pred__28228.call(null,G__28231,G__28232));
})())){
return datascript.query.filter_by_pred(context,clause);
} else {
if(cljs.core.truth_((function (){var G__28233 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.cst$sym$_STAR_], null),cljs.core.cst$sym$_], null);
var G__28234 = expr__28229;
return (pred__28228.cljs$core$IFn$_invoke$arity$2 ? pred__28228.cljs$core$IFn$_invoke$arity$2(G__28233,G__28234) : pred__28228.call(null,G__28233,G__28234));
})())){
return datascript.query.bind_by_fn(context,clause);
} else {
if(cljs.core.truth_((function (){var G__28235 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null);
var G__28236 = expr__28229;
return (pred__28228.cljs$core$IFn$_invoke$arity$2 ? pred__28228.cljs$core$IFn$_invoke$arity$2(G__28235,G__28236) : pred__28228.call(null,G__28235,G__28236));
})())){
var vec__28237 = datascript.query.normalize_pattern_clause(clause);
var seq__28238 = cljs.core.seq(vec__28237);
var first__28239 = cljs.core.first(seq__28238);
var seq__28238__$1 = cljs.core.next(seq__28238);
var source_sym = first__28239;
var pattern = seq__28238__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(context),source_sym);
var pattern__$1 = datascript.query.resolve_pattern_lookup_refs(source,pattern);
var relation = datascript.query.lookup_pattern(source,pattern__$1);
var lookup_source_QMARK_ = ((!((source == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$)))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source));
var _STAR_lookup_source_STAR_28241 = datascript.query._STAR_lookup_source_STAR_;
var _STAR_lookup_attrs_STAR_28242 = datascript.query._STAR_lookup_attrs_STAR_;
datascript.query._STAR_lookup_source_STAR_ = ((lookup_source_QMARK_)?source:null);

datascript.query._STAR_lookup_attrs_STAR_ = ((lookup_source_QMARK_)?datascript.query.dynamic_lookup_attrs(source,pattern__$1):null);

try{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),datascript.query.collapse_rels,relation);
}finally {datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR_28242;

datascript.query._STAR_lookup_source_STAR_ = _STAR_lookup_source_STAR_28241;
}} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28229)].join('')));
}
}
}
});
datascript.query.resolve_clause = (function datascript$query$resolve_clause(context,clause){
if(cljs.core.truth_(datascript.query.rule_QMARK_(context,clause))){
var vec__28246 = (cljs.core.truth_(datascript.query.source_QMARK_(cljs.core.first(clause)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clause),cljs.core.next(clause)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$$,clause], null));
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28246,(0),null);
var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28246,(1),null);
var source__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sources,source], null));
var rel = datascript.query.solve_rule(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$sources,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$$,source__$1], null)),rule);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),datascript.query.collapse_rels,rel);
} else {
return datascript.query._resolve_clause(context,clause);
}
});
datascript.query._q = (function datascript$query$_q(context,clauses){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
});
datascript.query._collect = (function datascript$query$_collect(var_args){
var args28250 = [];
var len__8301__auto___28265 = arguments.length;
var i__8302__auto___28266 = (0);
while(true){
if((i__8302__auto___28266 < len__8301__auto___28265)){
args28250.push((arguments[i__8302__auto___28266]));

var G__28267 = (i__8302__auto___28266 + (1));
i__8302__auto___28266 = G__28267;
continue;
} else {
}
break;
}

var G__28252 = args28250.length;
switch (G__28252) {
case 2:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28250.length)].join('')));

}
});

datascript.query._collect.cljs$core$IFn$_invoke$arity$2 = (function (context,symbols){
var rels = cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context);
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28253 = cljs.core.count(symbols);
return (datascript.arrays.make_array.cljs$core$IFn$_invoke$arity$1 ? datascript.arrays.make_array.cljs$core$IFn$_invoke$arity$1(G__28253) : datascript.arrays.make_array.call(null,G__28253));
})()], null),rels,symbols);
});

datascript.query._collect.cljs$core$IFn$_invoke$arity$3 = (function (acc,rels,symbols){
while(true){
var temp__6751__auto__ = cljs.core.first(rels);
if(cljs.core.truth_(temp__6751__auto__)){
var rel = temp__6751__auto__;
var keep_attrs = cljs.core.select_keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel),symbols);
if(cljs.core.empty_QMARK_(keep_attrs)){
var G__28269 = acc;
var G__28270 = cljs.core.next(rels);
var G__28271 = symbols;
acc = G__28269;
rels = G__28270;
symbols = G__28271;
continue;
} else {
var copy_map = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (acc,rels,symbols,keep_attrs,rel,temp__6751__auto__){
return (function (p1__28249_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keep_attrs,p1__28249_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel,temp__6751__auto__))
,symbols));
var len = cljs.core.count(symbols);
var G__28272 = (function (){var iter__7942__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__6751__auto__){
return (function datascript$query$iter__28254(s__28255){
return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__6751__auto__){
return (function (){
var s__28255__$1 = s__28255;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__28255__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var t1 = cljs.core.first(xs__7309__auto__);
var iterys__7938__auto__ = ((function (s__28255__$1,acc,rels,symbols,t1,xs__7309__auto__,temp__6753__auto__,copy_map,len,keep_attrs,rel,temp__6751__auto__){
return (function datascript$query$iter__28254_$_iter__28256(s__28257){
return (new cljs.core.LazySeq(null,((function (s__28255__$1,acc,rels,symbols,t1,xs__7309__auto__,temp__6753__auto__,copy_map,len,keep_attrs,rel,temp__6751__auto__){
return (function (){
var s__28257__$1 = s__28257;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__28257__$1);
if(temp__6753__auto____$1){
var s__28257__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28257__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__28257__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__28259 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__28258 = (0);
while(true){
if((i__28258 < size__7941__auto__)){
var t2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__28258);
cljs.core.chunk_append(b__28259,(function (){var res = cljs.core.aclone(t1);
var n__8101__auto___28275 = len;
var i_28276 = (0);
while(true){
if((i_28276 < n__8101__auto___28275)){
var temp__6753__auto___28277__$2 = (copy_map[i_28276]);
if(cljs.core.truth_(temp__6753__auto___28277__$2)){
var idx_28278 = temp__6753__auto___28277__$2;
(res[i_28276] = (t2[idx_28278]));
} else {
}

var G__28279 = (i_28276 + (1));
i_28276 = G__28279;
continue;
} else {
}
break;
}

return res;
})());

var G__28280 = (i__28258 + (1));
i__28258 = G__28280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28259),datascript$query$iter__28254_$_iter__28256(cljs.core.chunk_rest(s__28257__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28259),null);
}
} else {
var t2 = cljs.core.first(s__28257__$2);
return cljs.core.cons((function (){var res = cljs.core.aclone(t1);
var n__8101__auto___28281 = len;
var i_28282 = (0);
while(true){
if((i_28282 < n__8101__auto___28281)){
var temp__6753__auto___28283__$2 = (copy_map[i_28282]);
if(cljs.core.truth_(temp__6753__auto___28283__$2)){
var idx_28284 = temp__6753__auto___28283__$2;
(res[i_28282] = (t2[idx_28284]));
} else {
}

var G__28285 = (i_28282 + (1));
i_28282 = G__28285;
continue;
} else {
}
break;
}

return res;
})(),datascript$query$iter__28254_$_iter__28256(cljs.core.rest(s__28257__$2)));
}
} else {
return null;
}
break;
}
});})(s__28255__$1,acc,rels,symbols,t1,xs__7309__auto__,temp__6753__auto__,copy_map,len,keep_attrs,rel,temp__6751__auto__))
,null,null));
});})(s__28255__$1,acc,rels,symbols,t1,xs__7309__auto__,temp__6753__auto__,copy_map,len,keep_attrs,rel,temp__6751__auto__))
;
var fs__7939__auto__ = cljs.core.seq(iterys__7938__auto__(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel)));
if(fs__7939__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7939__auto__,datascript$query$iter__28254(cljs.core.rest(s__28255__$1)));
} else {
var G__28286 = cljs.core.rest(s__28255__$1);
s__28255__$1 = G__28286;
continue;
}
} else {
return null;
}
break;
}
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__6751__auto__))
,null,null));
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__6751__auto__))
;
return iter__7942__auto__(acc);
})();
var G__28273 = cljs.core.next(rels);
var G__28274 = symbols;
acc = G__28272;
rels = G__28273;
symbols = G__28274;
continue;
}
} else {
return acc;
}
break;
}
});

datascript.query._collect.cljs$lang$maxFixedArity = 3;

datascript.query.collect = (function datascript$query$collect(context,symbols){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context,symbols)));
});

/**
 * @interface
 */
datascript.query.IContextResolve = function(){};

datascript.query._context_resolve = (function datascript$query$_context_resolve(var$,context){
if((!((var$ == null))) && (!((var$.datascript$query$IContextResolve$_context_resolve$arity$2 == null)))){
return var$.datascript$query$IContextResolve$_context_resolve$arity$2(var$,context);
} else {
var x__7798__auto__ = (((var$ == null))?null:var$);
var m__7799__auto__ = (datascript.query._context_resolve[goog.typeOf(x__7798__auto__)]);
if(!((m__7799__auto__ == null))){
return (m__7799__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7799__auto__.cljs$core$IFn$_invoke$arity$2(var$,context) : m__7799__auto__.call(null,var$,context));
} else {
var m__7799__auto____$1 = (datascript.query._context_resolve["_"]);
if(!((m__7799__auto____$1 == null))){
return (m__7799__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7799__auto____$1.cljs$core$IFn$_invoke$arity$2(var$,context) : m__7799__auto____$1.call(null,var$,context));
} else {
throw cljs.core.missing_protocol("IContextResolve.-context-resolve",var$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Variable.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return datascript.query.context_resolve_val(context,var$__$1.symbol);
});

datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sources,var$__$1.symbol], null));
});

datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
var or__7085__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_in_aggregates,var$__$1.symbol);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return datascript.query.resolve_sym(var$__$1.symbol);
}
});

datascript.parser.Constant.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Constant.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
return var$__$1.value;
});
datascript.query._aggregate = (function datascript$query$_aggregate(find_elements,context,tuples){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4((function (element,fixed_value,i){
if(cljs.core.truth_(datascript.parser.aggregate_QMARK_(element))){
var f = datascript.query._context_resolve(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(element),context);
var args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (f){
return (function (p1__28287_SHARP_){
return datascript.query._context_resolve(p1__28287_SHARP_,context);
});})(f))
,cljs.core.butlast(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(element)));
var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (f,args){
return (function (p1__28288_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__28288_SHARP_,i);
});})(f,args))
,tuples);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),find_elements,cljs.core.first(tuples),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
datascript.query.idxs_of = (function datascript$query$idxs_of(pred,coll){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__28289_SHARP_,p2__28290_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__28289_SHARP_) : pred.call(null,p1__28289_SHARP_)))){
return p2__28290_SHARP_;
} else {
return null;
}
}),coll,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
datascript.query.aggregate = (function datascript$query$aggregate(find_elements,context,resultset){
var group_idxs = datascript.query.idxs_of(cljs.core.complement(datascript.parser.aggregate_QMARK_),find_elements);
var group_fn = ((function (group_idxs){
return (function (tuple){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (group_idxs){
return (function (p1__28291_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,p1__28291_SHARP_);
});})(group_idxs))
,group_idxs);
});})(group_idxs))
;
var grouped = cljs.core.group_by(group_fn,resultset);
var iter__7942__auto__ = ((function (group_idxs,group_fn,grouped){
return (function datascript$query$aggregate_$_iter__28310(s__28311){
return (new cljs.core.LazySeq(null,((function (group_idxs,group_fn,grouped){
return (function (){
var s__28311__$1 = s__28311;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__28311__$1);
if(temp__6753__auto__){
var s__28311__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28311__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__28311__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__28313 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__28312 = (0);
while(true){
if((i__28312 < size__7941__auto__)){
var vec__28322 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__28312);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28322,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28322,(1),null);
cljs.core.chunk_append(b__28313,datascript.query._aggregate(find_elements,context,tuples));

var G__28328 = (i__28312 + (1));
i__28312 = G__28328;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28313),datascript$query$aggregate_$_iter__28310(cljs.core.chunk_rest(s__28311__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28313),null);
}
} else {
var vec__28325 = cljs.core.first(s__28311__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28325,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28325,(1),null);
return cljs.core.cons(datascript.query._aggregate(find_elements,context,tuples),datascript$query$aggregate_$_iter__28310(cljs.core.rest(s__28311__$2)));
}
} else {
return null;
}
break;
}
});})(group_idxs,group_fn,grouped))
,null,null));
});})(group_idxs,group_fn,grouped))
;
return iter__7942__auto__(grouped);
});

/**
 * @interface
 */
datascript.query.IPostProcess = function(){};

datascript.query._post_process = (function datascript$query$_post_process(find,tuples){
if((!((find == null))) && (!((find.datascript$query$IPostProcess$_post_process$arity$2 == null)))){
return find.datascript$query$IPostProcess$_post_process$arity$2(find,tuples);
} else {
var x__7798__auto__ = (((find == null))?null:find);
var m__7799__auto__ = (datascript.query._post_process[goog.typeOf(x__7798__auto__)]);
if(!((m__7799__auto__ == null))){
return (m__7799__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7799__auto__.cljs$core$IFn$_invoke$arity$2(find,tuples) : m__7799__auto__.call(null,find,tuples));
} else {
var m__7799__auto____$1 = (datascript.query._post_process["_"]);
if(!((m__7799__auto____$1 == null))){
return (m__7799__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7799__auto____$1.cljs$core$IFn$_invoke$arity$2(find,tuples) : m__7799__auto____$1.call(null,find,tuples));
} else {
throw cljs.core.missing_protocol("IPostProcess.-post-process",find);
}
}
}
});

datascript.parser.FindRel.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindRel.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return tuples;
});

datascript.parser.FindColl.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindColl.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),tuples);
});

datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.ffirst(tuples);
});

datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.first(tuples);
});
datascript.query.pull = (function datascript$query$pull(find_elements,context,resultset){
var resolved = (function (){var iter__7942__auto__ = (function datascript$query$pull_$_iter__28353(s__28354){
return (new cljs.core.LazySeq(null,(function (){
var s__28354__$1 = s__28354;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__28354__$1);
if(temp__6753__auto__){
var s__28354__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28354__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__28354__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__28356 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__28355 = (0);
while(true){
if((i__28355 < size__7941__auto__)){
var find = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__28355);
cljs.core.chunk_append(b__28356,(cljs.core.truth_(datascript.parser.pull_QMARK_(find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull(datascript.query._context_resolve(cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(find),context))], null):null));

var G__28377 = (i__28355 + (1));
i__28355 = G__28377;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28356),datascript$query$pull_$_iter__28353(cljs.core.chunk_rest(s__28354__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28356),null);
}
} else {
var find = cljs.core.first(s__28354__$2);
return cljs.core.cons((cljs.core.truth_(datascript.parser.pull_QMARK_(find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull(datascript.query._context_resolve(cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(find),context))], null):null),datascript$query$pull_$_iter__28353(cljs.core.rest(s__28354__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7942__auto__(find_elements);
})();
var iter__7942__auto__ = ((function (resolved){
return (function datascript$query$pull_$_iter__28359(s__28360){
return (new cljs.core.LazySeq(null,((function (resolved){
return (function (){
var s__28360__$1 = s__28360;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__28360__$1);
if(temp__6753__auto__){
var s__28360__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28360__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__28360__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__28362 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__28361 = (0);
while(true){
if((i__28361 < size__7941__auto__)){
var tuple = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__28361);
cljs.core.chunk_append(b__28362,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (i__28361,tuple,c__7940__auto__,size__7941__auto__,b__28362,s__28360__$2,temp__6753__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__28371 = env;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28371,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28371,(1),null);
return datascript.pull_api.pull_spec(src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(i__28361,tuple,c__7940__auto__,size__7941__auto__,b__28362,s__28360__$2,temp__6753__auto__,resolved))
,resolved,tuple));

var G__28378 = (i__28361 + (1));
i__28361 = G__28378;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28362),datascript$query$pull_$_iter__28359(cljs.core.chunk_rest(s__28360__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28362),null);
}
} else {
var tuple = cljs.core.first(s__28360__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (tuple,s__28360__$2,temp__6753__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__28374 = env;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28374,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28374,(1),null);
return datascript.pull_api.pull_spec(src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(tuple,s__28360__$2,temp__6753__auto__,resolved))
,resolved,tuple),datascript$query$pull_$_iter__28359(cljs.core.rest(s__28360__$2)));
}
} else {
return null;
}
break;
}
});})(resolved))
,null,null));
});})(resolved))
;
return iter__7942__auto__(resultset);
});
datascript.query.query_cache = cljs.core.volatile_BANG_(datascript.lru.lru(datascript.query.lru_cache_size));
datascript.query.memoized_parse_query = (function datascript$query$memoized_parse_query(q){
var temp__6751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(datascript.query.query_cache) : cljs.core.deref.call(null,datascript.query.query_cache)),q,null);
if(cljs.core.truth_(temp__6751__auto__)){
var cached = temp__6751__auto__;
return cached;
} else {
var qp = datascript.parser.parse_query(q);
cljs.core._vreset_BANG_(datascript.query.query_cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(datascript.query.query_cache),q,qp));

return qp;
}
});
datascript.query.q = (function datascript$query$q(var_args){
var args__8308__auto__ = [];
var len__8301__auto___28384 = arguments.length;
var i__8302__auto___28385 = (0);
while(true){
if((i__8302__auto___28385 < len__8301__auto___28384)){
args__8308__auto__.push((arguments[i__8302__auto___28385]));

var G__28386 = (i__8302__auto___28385 + (1));
i__8302__auto___28385 = G__28386;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((1) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((1)),(0),null)):null);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8309__auto__);
});

datascript.query.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
var parsed_q = datascript.query.memoized_parse_query(q);
var find = cljs.core.cst$kw$find.cljs$core$IFn$_invoke$arity$1(parsed_q);
var find_elements = datascript.parser.find_elements(find);
var find_vars = datascript.parser.find_vars(find);
var result_arity = cljs.core.count(find_elements);
var with$ = cljs.core.cst$kw$with.cljs$core$IFn$_invoke$arity$1(parsed_q);
var all_vars = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(find_vars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,with$));
var q__$1 = (function (){var G__28382 = q;
if(cljs.core.sequential_QMARK_(q)){
return datascript.parser.query__GT_map(G__28382);
} else {
return G__28382;
}
})();
var wheres = cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$1(q__$1);
var context = datascript.query.resolve_ins((new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(parsed_q),inputs);
var resultset = datascript.query.collect(datascript.query._q(context,wheres),all_vars);
var G__28383 = resultset;
var G__28383__$1 = (cljs.core.truth_(cljs.core.cst$kw$with.cljs$core$IFn$_invoke$arity$1(q__$1))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__28383,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset){
return (function (p1__28379_SHARP_){
return cljs.core.vec(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__28379_SHARP_,(0),result_arity));
});})(G__28383,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset))
,G__28383):G__28383);
var G__28383__$2 = (cljs.core.truth_(cljs.core.some(datascript.parser.aggregate_QMARK_,find_elements))?datascript.query.aggregate(find_elements,context,G__28383__$1):G__28383__$1);
var G__28383__$3 = (cljs.core.truth_(cljs.core.some(datascript.parser.pull_QMARK_,find_elements))?datascript.query.pull(find_elements,context,G__28383__$2):G__28383__$2);
return datascript.query._post_process(find,G__28383__$3);

});

datascript.query.q.cljs$lang$maxFixedArity = (1);

datascript.query.q.cljs$lang$applyTo = (function (seq28380){
var G__28381 = cljs.core.first(seq28380);
var seq28380__$1 = cljs.core.next(seq28380);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic(G__28381,seq28380__$1);
});

