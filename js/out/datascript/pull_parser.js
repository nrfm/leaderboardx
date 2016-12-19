// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('datascript.pull_parser');
goog.require('cljs.core');
goog.require('datascript.db');

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
datascript.pull_parser.PullSpec = (function (wildcard_QMARK_,attrs,__meta,__extmap,__hash){
this.wildcard_QMARK_ = wildcard_QMARK_;
this.attrs = attrs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7755__auto__,k__7756__auto__){
var self__ = this;
var this__7755__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7755__auto____$1,k__7756__auto__,null);
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7757__auto__,k27222,else__7758__auto__){
var self__ = this;
var this__7757__auto____$1 = this;
var G__27224 = (((k27222 instanceof cljs.core.Keyword))?k27222.fqn:null);
switch (G__27224) {
case "wildcard?":
return self__.wildcard_QMARK_;

break;
case "attrs":
return self__.attrs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27222,else__7758__auto__);

}
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7769__auto__,writer__7770__auto__,opts__7771__auto__){
var self__ = this;
var this__7769__auto____$1 = this;
var pr_pair__7772__auto__ = ((function (this__7769__auto____$1){
return (function (keyval__7773__auto__){
return cljs.core.pr_sequential_writer(writer__7770__auto__,cljs.core.pr_writer,""," ","",opts__7771__auto__,keyval__7773__auto__);
});})(this__7769__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7770__auto__,pr_pair__7772__auto__,"#datascript.pull-parser.PullSpec{",", ","}",opts__7771__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$wildcard_QMARK_,self__.wildcard_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attrs,self__.attrs],null))], null),self__.__extmap));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27221){
var self__ = this;
var G__27221__$1 = this;
return (new cljs.core.RecordIter((0),G__27221__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wildcard_QMARK_,cljs.core.cst$kw$attrs], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7753__auto__){
var self__ = this;
var this__7753__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7749__auto__){
var self__ = this;
var this__7749__auto____$1 = this;
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,self__.attrs,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7759__auto__){
var self__ = this;
var this__7759__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7750__auto__){
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

datascript.pull_parser.PullSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7751__auto__,other__7752__auto__){
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

datascript.pull_parser.PullSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7764__auto__,k__7765__auto__){
var self__ = this;
var this__7764__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$attrs,null,cljs.core.cst$kw$wildcard_QMARK_,null], null), null),k__7765__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7764__auto____$1),self__.__meta),k__7765__auto__);
} else {
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,self__.attrs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7765__auto__)),null));
}
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7762__auto__,k__7763__auto__,G__27221){
var self__ = this;
var this__7762__auto____$1 = this;
var pred__27225 = cljs.core.keyword_identical_QMARK_;
var expr__27226 = k__7763__auto__;
if(cljs.core.truth_((function (){var G__27228 = cljs.core.cst$kw$wildcard_QMARK_;
var G__27229 = expr__27226;
return (pred__27225.cljs$core$IFn$_invoke$arity$2 ? pred__27225.cljs$core$IFn$_invoke$arity$2(G__27228,G__27229) : pred__27225.call(null,G__27228,G__27229));
})())){
return (new datascript.pull_parser.PullSpec(G__27221,self__.attrs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27230 = cljs.core.cst$kw$attrs;
var G__27231 = expr__27226;
return (pred__27225.cljs$core$IFn$_invoke$arity$2 ? pred__27225.cljs$core$IFn$_invoke$arity$2(G__27230,G__27231) : pred__27225.call(null,G__27230,G__27231));
})())){
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,G__27221,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,self__.attrs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7763__auto__,G__27221),null));
}
}
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7767__auto__){
var self__ = this;
var this__7767__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$wildcard_QMARK_,self__.wildcard_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attrs,self__.attrs],null))], null),self__.__extmap));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7754__auto__,G__27221){
var self__ = this;
var this__7754__auto____$1 = this;
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,self__.attrs,G__27221,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7760__auto__,entry__7761__auto__){
var self__ = this;
var this__7760__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7761__auto__)){
return cljs.core._assoc(this__7760__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7760__auto____$1,entry__7761__auto__);
}
});

datascript.pull_parser.PullSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$wildcard_QMARK_,cljs.core.cst$sym$attrs], null);
});

datascript.pull_parser.PullSpec.cljs$lang$type = true;

datascript.pull_parser.PullSpec.cljs$lang$ctorPrSeq = (function (this__7791__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.pull-parser/PullSpec");
});

datascript.pull_parser.PullSpec.cljs$lang$ctorPrWriter = (function (this__7791__auto__,writer__7792__auto__){
return cljs.core._write(writer__7792__auto__,"datascript.pull-parser/PullSpec");
});

datascript.pull_parser.__GT_PullSpec = (function datascript$pull_parser$__GT_PullSpec(wildcard_QMARK_,attrs){
return (new datascript.pull_parser.PullSpec(wildcard_QMARK_,attrs,null,null,null));
});

datascript.pull_parser.map__GT_PullSpec = (function datascript$pull_parser$map__GT_PullSpec(G__27223){
return (new datascript.pull_parser.PullSpec(cljs.core.cst$kw$wildcard_QMARK_.cljs$core$IFn$_invoke$arity$1(G__27223),cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(G__27223),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27223,cljs.core.cst$kw$wildcard_QMARK_,cljs.core.array_seq([cljs.core.cst$kw$attrs], 0)),null));
});


/**
 * @interface
 */
datascript.pull_parser.IPullSpecComponent = function(){};

datascript.pull_parser._as_spec = (function datascript$pull_parser$_as_spec(this$){
if((!((this$ == null))) && (!((this$.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 == null)))){
return this$.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1(this$);
} else {
var x__7798__auto__ = (((this$ == null))?null:this$);
var m__7799__auto__ = (datascript.pull_parser._as_spec[goog.typeOf(x__7798__auto__)]);
if(!((m__7799__auto__ == null))){
return (m__7799__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7799__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7799__auto__.call(null,this$));
} else {
var m__7799__auto____$1 = (datascript.pull_parser._as_spec["_"]);
if(!((m__7799__auto____$1 == null))){
return (m__7799__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7799__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7799__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IPullSpecComponent.-as-spec",this$);
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullAttrName = (function (attr,__meta,__extmap,__hash){
this.attr = attr;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullAttrName.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7755__auto__,k__7756__auto__){
var self__ = this;
var this__7755__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7755__auto____$1,k__7756__auto__,null);
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7757__auto__,k27234,else__7758__auto__){
var self__ = this;
var this__7757__auto____$1 = this;
var G__27236 = (((k27234 instanceof cljs.core.Keyword))?k27234.fqn:null);
switch (G__27236) {
case "attr":
return self__.attr;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27234,else__7758__auto__);

}
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7769__auto__,writer__7770__auto__,opts__7771__auto__){
var self__ = this;
var this__7769__auto____$1 = this;
var pr_pair__7772__auto__ = ((function (this__7769__auto____$1){
return (function (keyval__7773__auto__){
return cljs.core.pr_sequential_writer(writer__7770__auto__,cljs.core.pr_writer,""," ","",opts__7771__auto__,keyval__7773__auto__);
});})(this__7769__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7770__auto__,pr_pair__7772__auto__,"#datascript.pull-parser.PullAttrName{",", ","}",opts__7771__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null))], null),self__.__extmap));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullAttrName.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27233){
var self__ = this;
var G__27233__$1 = this;
return (new cljs.core.RecordIter((0),G__27233__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attr], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7753__auto__){
var self__ = this;
var this__7753__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7749__auto__){
var self__ = this;
var this__7749__auto____$1 = this;
return (new datascript.pull_parser.PullAttrName(self__.attr,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7759__auto__){
var self__ = this;
var this__7759__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7750__auto__){
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

datascript.pull_parser.PullAttrName.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7751__auto__,other__7752__auto__){
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

datascript.pull_parser.PullAttrName.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullAttrName.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$attr,self__.attr], null)], null);
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7764__auto__,k__7765__auto__){
var self__ = this;
var this__7764__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$attr,null], null), null),k__7765__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7764__auto____$1),self__.__meta),k__7765__auto__);
} else {
return (new datascript.pull_parser.PullAttrName(self__.attr,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7765__auto__)),null));
}
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7762__auto__,k__7763__auto__,G__27233){
var self__ = this;
var this__7762__auto____$1 = this;
var pred__27237 = cljs.core.keyword_identical_QMARK_;
var expr__27238 = k__7763__auto__;
if(cljs.core.truth_((function (){var G__27240 = cljs.core.cst$kw$attr;
var G__27241 = expr__27238;
return (pred__27237.cljs$core$IFn$_invoke$arity$2 ? pred__27237.cljs$core$IFn$_invoke$arity$2(G__27240,G__27241) : pred__27237.call(null,G__27240,G__27241));
})())){
return (new datascript.pull_parser.PullAttrName(G__27233,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullAttrName(self__.attr,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7763__auto__,G__27233),null));
}
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7767__auto__){
var self__ = this;
var this__7767__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null))], null),self__.__extmap));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7754__auto__,G__27233){
var self__ = this;
var this__7754__auto____$1 = this;
return (new datascript.pull_parser.PullAttrName(self__.attr,G__27233,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7760__auto__,entry__7761__auto__){
var self__ = this;
var this__7760__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7761__auto__)){
return cljs.core._assoc(this__7760__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7760__auto____$1,entry__7761__auto__);
}
});

datascript.pull_parser.PullAttrName.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$attr], null);
});

datascript.pull_parser.PullAttrName.cljs$lang$type = true;

datascript.pull_parser.PullAttrName.cljs$lang$ctorPrSeq = (function (this__7791__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.pull-parser/PullAttrName");
});

datascript.pull_parser.PullAttrName.cljs$lang$ctorPrWriter = (function (this__7791__auto__,writer__7792__auto__){
return cljs.core._write(writer__7792__auto__,"datascript.pull-parser/PullAttrName");
});

datascript.pull_parser.__GT_PullAttrName = (function datascript$pull_parser$__GT_PullAttrName(attr){
return (new datascript.pull_parser.PullAttrName(attr,null,null,null));
});

datascript.pull_parser.map__GT_PullAttrName = (function datascript$pull_parser$map__GT_PullAttrName(G__27235){
return (new datascript.pull_parser.PullAttrName(cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(G__27235),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27235,cljs.core.cst$kw$attr),null));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullReverseAttrName = (function (attr,rattr,__meta,__extmap,__hash){
this.attr = attr;
this.rattr = rattr;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7755__auto__,k__7756__auto__){
var self__ = this;
var this__7755__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7755__auto____$1,k__7756__auto__,null);
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7757__auto__,k27244,else__7758__auto__){
var self__ = this;
var this__7757__auto____$1 = this;
var G__27246 = (((k27244 instanceof cljs.core.Keyword))?k27244.fqn:null);
switch (G__27246) {
case "attr":
return self__.attr;

break;
case "rattr":
return self__.rattr;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27244,else__7758__auto__);

}
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7769__auto__,writer__7770__auto__,opts__7771__auto__){
var self__ = this;
var this__7769__auto____$1 = this;
var pr_pair__7772__auto__ = ((function (this__7769__auto____$1){
return (function (keyval__7773__auto__){
return cljs.core.pr_sequential_writer(writer__7770__auto__,cljs.core.pr_writer,""," ","",opts__7771__auto__,keyval__7773__auto__);
});})(this__7769__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7770__auto__,pr_pair__7772__auto__,"#datascript.pull-parser.PullReverseAttrName{",", ","}",opts__7771__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rattr,self__.rattr],null))], null),self__.__extmap));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27243){
var self__ = this;
var G__27243__$1 = this;
return (new cljs.core.RecordIter((0),G__27243__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attr,cljs.core.cst$kw$rattr], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7753__auto__){
var self__ = this;
var this__7753__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7749__auto__){
var self__ = this;
var this__7749__auto____$1 = this;
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,self__.rattr,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7759__auto__){
var self__ = this;
var this__7759__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7750__auto__){
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

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7751__auto__,other__7752__auto__){
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

datascript.pull_parser.PullReverseAttrName.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullReverseAttrName.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.rattr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$attr,self__.attr], null)], null);
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7764__auto__,k__7765__auto__){
var self__ = this;
var this__7764__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$rattr,null,cljs.core.cst$kw$attr,null], null), null),k__7765__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7764__auto____$1),self__.__meta),k__7765__auto__);
} else {
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,self__.rattr,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7765__auto__)),null));
}
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7762__auto__,k__7763__auto__,G__27243){
var self__ = this;
var this__7762__auto____$1 = this;
var pred__27247 = cljs.core.keyword_identical_QMARK_;
var expr__27248 = k__7763__auto__;
if(cljs.core.truth_((function (){var G__27250 = cljs.core.cst$kw$attr;
var G__27251 = expr__27248;
return (pred__27247.cljs$core$IFn$_invoke$arity$2 ? pred__27247.cljs$core$IFn$_invoke$arity$2(G__27250,G__27251) : pred__27247.call(null,G__27250,G__27251));
})())){
return (new datascript.pull_parser.PullReverseAttrName(G__27243,self__.rattr,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27252 = cljs.core.cst$kw$rattr;
var G__27253 = expr__27248;
return (pred__27247.cljs$core$IFn$_invoke$arity$2 ? pred__27247.cljs$core$IFn$_invoke$arity$2(G__27252,G__27253) : pred__27247.call(null,G__27252,G__27253));
})())){
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,G__27243,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,self__.rattr,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7763__auto__,G__27243),null));
}
}
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7767__auto__){
var self__ = this;
var this__7767__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rattr,self__.rattr],null))], null),self__.__extmap));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7754__auto__,G__27243){
var self__ = this;
var this__7754__auto____$1 = this;
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,self__.rattr,G__27243,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7760__auto__,entry__7761__auto__){
var self__ = this;
var this__7760__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7761__auto__)){
return cljs.core._assoc(this__7760__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7760__auto____$1,entry__7761__auto__);
}
});

datascript.pull_parser.PullReverseAttrName.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$attr,cljs.core.cst$sym$rattr], null);
});

datascript.pull_parser.PullReverseAttrName.cljs$lang$type = true;

datascript.pull_parser.PullReverseAttrName.cljs$lang$ctorPrSeq = (function (this__7791__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.pull-parser/PullReverseAttrName");
});

datascript.pull_parser.PullReverseAttrName.cljs$lang$ctorPrWriter = (function (this__7791__auto__,writer__7792__auto__){
return cljs.core._write(writer__7792__auto__,"datascript.pull-parser/PullReverseAttrName");
});

datascript.pull_parser.__GT_PullReverseAttrName = (function datascript$pull_parser$__GT_PullReverseAttrName(attr,rattr){
return (new datascript.pull_parser.PullReverseAttrName(attr,rattr,null,null,null));
});

datascript.pull_parser.map__GT_PullReverseAttrName = (function datascript$pull_parser$map__GT_PullReverseAttrName(G__27245){
return (new datascript.pull_parser.PullReverseAttrName(cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(G__27245),cljs.core.cst$kw$rattr.cljs$core$IFn$_invoke$arity$1(G__27245),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27245,cljs.core.cst$kw$attr,cljs.core.array_seq([cljs.core.cst$kw$rattr], 0)),null));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullLimitExpr = (function (attr,limit,__meta,__extmap,__hash){
this.attr = attr;
this.limit = limit;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7755__auto__,k__7756__auto__){
var self__ = this;
var this__7755__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7755__auto____$1,k__7756__auto__,null);
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7757__auto__,k27256,else__7758__auto__){
var self__ = this;
var this__7757__auto____$1 = this;
var G__27258 = (((k27256 instanceof cljs.core.Keyword))?k27256.fqn:null);
switch (G__27258) {
case "attr":
return self__.attr;

break;
case "limit":
return self__.limit;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27256,else__7758__auto__);

}
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7769__auto__,writer__7770__auto__,opts__7771__auto__){
var self__ = this;
var this__7769__auto____$1 = this;
var pr_pair__7772__auto__ = ((function (this__7769__auto____$1){
return (function (keyval__7773__auto__){
return cljs.core.pr_sequential_writer(writer__7770__auto__,cljs.core.pr_writer,""," ","",opts__7771__auto__,keyval__7773__auto__);
});})(this__7769__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7770__auto__,pr_pair__7772__auto__,"#datascript.pull-parser.PullLimitExpr{",", ","}",opts__7771__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$limit,self__.limit],null))], null),self__.__extmap));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27255){
var self__ = this;
var G__27255__$1 = this;
return (new cljs.core.RecordIter((0),G__27255__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attr,cljs.core.cst$kw$limit], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7753__auto__){
var self__ = this;
var this__7753__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7749__auto__){
var self__ = this;
var this__7749__auto____$1 = this;
return (new datascript.pull_parser.PullLimitExpr(self__.attr,self__.limit,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7759__auto__){
var self__ = this;
var this__7759__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7750__auto__){
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

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7751__auto__,other__7752__auto__){
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

datascript.pull_parser.PullLimitExpr.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullLimitExpr.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc_in(datascript.pull_parser._as_spec(self__.attr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$limit], null),self__.limit);
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7764__auto__,k__7765__auto__){
var self__ = this;
var this__7764__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$limit,null,cljs.core.cst$kw$attr,null], null), null),k__7765__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7764__auto____$1),self__.__meta),k__7765__auto__);
} else {
return (new datascript.pull_parser.PullLimitExpr(self__.attr,self__.limit,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7765__auto__)),null));
}
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7762__auto__,k__7763__auto__,G__27255){
var self__ = this;
var this__7762__auto____$1 = this;
var pred__27259 = cljs.core.keyword_identical_QMARK_;
var expr__27260 = k__7763__auto__;
if(cljs.core.truth_((function (){var G__27262 = cljs.core.cst$kw$attr;
var G__27263 = expr__27260;
return (pred__27259.cljs$core$IFn$_invoke$arity$2 ? pred__27259.cljs$core$IFn$_invoke$arity$2(G__27262,G__27263) : pred__27259.call(null,G__27262,G__27263));
})())){
return (new datascript.pull_parser.PullLimitExpr(G__27255,self__.limit,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27264 = cljs.core.cst$kw$limit;
var G__27265 = expr__27260;
return (pred__27259.cljs$core$IFn$_invoke$arity$2 ? pred__27259.cljs$core$IFn$_invoke$arity$2(G__27264,G__27265) : pred__27259.call(null,G__27264,G__27265));
})())){
return (new datascript.pull_parser.PullLimitExpr(self__.attr,G__27255,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullLimitExpr(self__.attr,self__.limit,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7763__auto__,G__27255),null));
}
}
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7767__auto__){
var self__ = this;
var this__7767__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$limit,self__.limit],null))], null),self__.__extmap));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7754__auto__,G__27255){
var self__ = this;
var this__7754__auto____$1 = this;
return (new datascript.pull_parser.PullLimitExpr(self__.attr,self__.limit,G__27255,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7760__auto__,entry__7761__auto__){
var self__ = this;
var this__7760__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7761__auto__)){
return cljs.core._assoc(this__7760__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7760__auto____$1,entry__7761__auto__);
}
});

datascript.pull_parser.PullLimitExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$attr,cljs.core.cst$sym$limit], null);
});

datascript.pull_parser.PullLimitExpr.cljs$lang$type = true;

datascript.pull_parser.PullLimitExpr.cljs$lang$ctorPrSeq = (function (this__7791__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.pull-parser/PullLimitExpr");
});

datascript.pull_parser.PullLimitExpr.cljs$lang$ctorPrWriter = (function (this__7791__auto__,writer__7792__auto__){
return cljs.core._write(writer__7792__auto__,"datascript.pull-parser/PullLimitExpr");
});

datascript.pull_parser.__GT_PullLimitExpr = (function datascript$pull_parser$__GT_PullLimitExpr(attr,limit){
return (new datascript.pull_parser.PullLimitExpr(attr,limit,null,null,null));
});

datascript.pull_parser.map__GT_PullLimitExpr = (function datascript$pull_parser$map__GT_PullLimitExpr(G__27257){
return (new datascript.pull_parser.PullLimitExpr(cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(G__27257),cljs.core.cst$kw$limit.cljs$core$IFn$_invoke$arity$1(G__27257),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27257,cljs.core.cst$kw$attr,cljs.core.array_seq([cljs.core.cst$kw$limit], 0)),null));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullDefaultExpr = (function (attr,value,__meta,__extmap,__hash){
this.attr = attr;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7755__auto__,k__7756__auto__){
var self__ = this;
var this__7755__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7755__auto____$1,k__7756__auto__,null);
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7757__auto__,k27268,else__7758__auto__){
var self__ = this;
var this__7757__auto____$1 = this;
var G__27270 = (((k27268 instanceof cljs.core.Keyword))?k27268.fqn:null);
switch (G__27270) {
case "attr":
return self__.attr;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27268,else__7758__auto__);

}
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7769__auto__,writer__7770__auto__,opts__7771__auto__){
var self__ = this;
var this__7769__auto____$1 = this;
var pr_pair__7772__auto__ = ((function (this__7769__auto____$1){
return (function (keyval__7773__auto__){
return cljs.core.pr_sequential_writer(writer__7770__auto__,cljs.core.pr_writer,""," ","",opts__7771__auto__,keyval__7773__auto__);
});})(this__7769__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7770__auto__,pr_pair__7772__auto__,"#datascript.pull-parser.PullDefaultExpr{",", ","}",opts__7771__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27267){
var self__ = this;
var G__27267__$1 = this;
return (new cljs.core.RecordIter((0),G__27267__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attr,cljs.core.cst$kw$value], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7753__auto__){
var self__ = this;
var this__7753__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7749__auto__){
var self__ = this;
var this__7749__auto____$1 = this;
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7759__auto__){
var self__ = this;
var this__7759__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7750__auto__){
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

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7751__auto__,other__7752__auto__){
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

datascript.pull_parser.PullDefaultExpr.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullDefaultExpr.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc_in(datascript.pull_parser._as_spec(self__.attr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$default], null),self__.value);
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7764__auto__,k__7765__auto__){
var self__ = this;
var this__7764__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,null,cljs.core.cst$kw$attr,null], null), null),k__7765__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7764__auto____$1),self__.__meta),k__7765__auto__);
} else {
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7765__auto__)),null));
}
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7762__auto__,k__7763__auto__,G__27267){
var self__ = this;
var this__7762__auto____$1 = this;
var pred__27271 = cljs.core.keyword_identical_QMARK_;
var expr__27272 = k__7763__auto__;
if(cljs.core.truth_((function (){var G__27274 = cljs.core.cst$kw$attr;
var G__27275 = expr__27272;
return (pred__27271.cljs$core$IFn$_invoke$arity$2 ? pred__27271.cljs$core$IFn$_invoke$arity$2(G__27274,G__27275) : pred__27271.call(null,G__27274,G__27275));
})())){
return (new datascript.pull_parser.PullDefaultExpr(G__27267,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27276 = cljs.core.cst$kw$value;
var G__27277 = expr__27272;
return (pred__27271.cljs$core$IFn$_invoke$arity$2 ? pred__27271.cljs$core$IFn$_invoke$arity$2(G__27276,G__27277) : pred__27271.call(null,G__27276,G__27277));
})())){
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,G__27267,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7763__auto__,G__27267),null));
}
}
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7767__auto__){
var self__ = this;
var this__7767__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7754__auto__,G__27267){
var self__ = this;
var this__7754__auto____$1 = this;
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,self__.value,G__27267,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7760__auto__,entry__7761__auto__){
var self__ = this;
var this__7760__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7761__auto__)){
return cljs.core._assoc(this__7760__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7760__auto____$1,entry__7761__auto__);
}
});

datascript.pull_parser.PullDefaultExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$attr,cljs.core.cst$sym$value], null);
});

datascript.pull_parser.PullDefaultExpr.cljs$lang$type = true;

datascript.pull_parser.PullDefaultExpr.cljs$lang$ctorPrSeq = (function (this__7791__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.pull-parser/PullDefaultExpr");
});

datascript.pull_parser.PullDefaultExpr.cljs$lang$ctorPrWriter = (function (this__7791__auto__,writer__7792__auto__){
return cljs.core._write(writer__7792__auto__,"datascript.pull-parser/PullDefaultExpr");
});

datascript.pull_parser.__GT_PullDefaultExpr = (function datascript$pull_parser$__GT_PullDefaultExpr(attr,value){
return (new datascript.pull_parser.PullDefaultExpr(attr,value,null,null,null));
});

datascript.pull_parser.map__GT_PullDefaultExpr = (function datascript$pull_parser$map__GT_PullDefaultExpr(G__27269){
return (new datascript.pull_parser.PullDefaultExpr(cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(G__27269),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__27269),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27269,cljs.core.cst$kw$attr,cljs.core.array_seq([cljs.core.cst$kw$value], 0)),null));
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
datascript.pull_parser.PullWildcard = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullWildcard.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7755__auto__,k__7756__auto__){
var self__ = this;
var this__7755__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7755__auto____$1,k__7756__auto__,null);
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7757__auto__,k27280,else__7758__auto__){
var self__ = this;
var this__7757__auto____$1 = this;
var G__27282 = k27280;
switch (G__27282) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27280,else__7758__auto__);

}
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7769__auto__,writer__7770__auto__,opts__7771__auto__){
var self__ = this;
var this__7769__auto____$1 = this;
var pr_pair__7772__auto__ = ((function (this__7769__auto____$1){
return (function (keyval__7773__auto__){
return cljs.core.pr_sequential_writer(writer__7770__auto__,cljs.core.pr_writer,""," ","",opts__7771__auto__,keyval__7773__auto__);
});})(this__7769__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7770__auto__,pr_pair__7772__auto__,"#datascript.pull-parser.PullWildcard{",", ","}",opts__7771__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullWildcard.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27279){
var self__ = this;
var G__27279__$1 = this;
return (new cljs.core.RecordIter((0),G__27279__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7753__auto__){
var self__ = this;
var this__7753__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7749__auto__){
var self__ = this;
var this__7749__auto____$1 = this;
return (new datascript.pull_parser.PullWildcard(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7759__auto__){
var self__ = this;
var this__7759__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7750__auto__){
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

datascript.pull_parser.PullWildcard.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7751__auto__,other__7752__auto__){
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

datascript.pull_parser.PullWildcard.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7764__auto__,k__7765__auto__){
var self__ = this;
var this__7764__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__7765__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7764__auto____$1),self__.__meta),k__7765__auto__);
} else {
return (new datascript.pull_parser.PullWildcard(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7765__auto__)),null));
}
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7762__auto__,k__7763__auto__,G__27279){
var self__ = this;
var this__7762__auto____$1 = this;
var pred__27283 = cljs.core.keyword_identical_QMARK_;
var expr__27284 = k__7763__auto__;
return (new datascript.pull_parser.PullWildcard(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7763__auto__,G__27279),null));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7767__auto__){
var self__ = this;
var this__7767__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7754__auto__,G__27279){
var self__ = this;
var this__7754__auto____$1 = this;
return (new datascript.pull_parser.PullWildcard(G__27279,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7760__auto__,entry__7761__auto__){
var self__ = this;
var this__7760__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7761__auto__)){
return cljs.core._assoc(this__7760__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7760__auto____$1,entry__7761__auto__);
}
});

datascript.pull_parser.PullWildcard.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.pull_parser.PullWildcard.cljs$lang$type = true;

datascript.pull_parser.PullWildcard.cljs$lang$ctorPrSeq = (function (this__7791__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.pull-parser/PullWildcard");
});

datascript.pull_parser.PullWildcard.cljs$lang$ctorPrWriter = (function (this__7791__auto__,writer__7792__auto__){
return cljs.core._write(writer__7792__auto__,"datascript.pull-parser/PullWildcard");
});

datascript.pull_parser.__GT_PullWildcard = (function datascript$pull_parser$__GT_PullWildcard(){
return (new datascript.pull_parser.PullWildcard(null,null,null));
});

datascript.pull_parser.map__GT_PullWildcard = (function datascript$pull_parser$map__GT_PullWildcard(G__27281){
return (new datascript.pull_parser.PullWildcard(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__27281),null));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullRecursionLimit = (function (limit,__meta,__extmap,__hash){
this.limit = limit;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7755__auto__,k__7756__auto__){
var self__ = this;
var this__7755__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7755__auto____$1,k__7756__auto__,null);
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7757__auto__,k27288,else__7758__auto__){
var self__ = this;
var this__7757__auto____$1 = this;
var G__27290 = (((k27288 instanceof cljs.core.Keyword))?k27288.fqn:null);
switch (G__27290) {
case "limit":
return self__.limit;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27288,else__7758__auto__);

}
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7769__auto__,writer__7770__auto__,opts__7771__auto__){
var self__ = this;
var this__7769__auto____$1 = this;
var pr_pair__7772__auto__ = ((function (this__7769__auto____$1){
return (function (keyval__7773__auto__){
return cljs.core.pr_sequential_writer(writer__7770__auto__,cljs.core.pr_writer,""," ","",opts__7771__auto__,keyval__7773__auto__);
});})(this__7769__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7770__auto__,pr_pair__7772__auto__,"#datascript.pull-parser.PullRecursionLimit{",", ","}",opts__7771__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$limit,self__.limit],null))], null),self__.__extmap));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27287){
var self__ = this;
var G__27287__$1 = this;
return (new cljs.core.RecordIter((0),G__27287__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$limit], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7753__auto__){
var self__ = this;
var this__7753__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7749__auto__){
var self__ = this;
var this__7749__auto____$1 = this;
return (new datascript.pull_parser.PullRecursionLimit(self__.limit,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7759__auto__){
var self__ = this;
var this__7759__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7750__auto__){
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

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7751__auto__,other__7752__auto__){
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

datascript.pull_parser.PullRecursionLimit.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullRecursionLimit.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$recursion,self__.limit], null);
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7764__auto__,k__7765__auto__){
var self__ = this;
var this__7764__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$limit,null], null), null),k__7765__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7764__auto____$1),self__.__meta),k__7765__auto__);
} else {
return (new datascript.pull_parser.PullRecursionLimit(self__.limit,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7765__auto__)),null));
}
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7762__auto__,k__7763__auto__,G__27287){
var self__ = this;
var this__7762__auto____$1 = this;
var pred__27291 = cljs.core.keyword_identical_QMARK_;
var expr__27292 = k__7763__auto__;
if(cljs.core.truth_((function (){var G__27294 = cljs.core.cst$kw$limit;
var G__27295 = expr__27292;
return (pred__27291.cljs$core$IFn$_invoke$arity$2 ? pred__27291.cljs$core$IFn$_invoke$arity$2(G__27294,G__27295) : pred__27291.call(null,G__27294,G__27295));
})())){
return (new datascript.pull_parser.PullRecursionLimit(G__27287,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullRecursionLimit(self__.limit,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7763__auto__,G__27287),null));
}
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7767__auto__){
var self__ = this;
var this__7767__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$limit,self__.limit],null))], null),self__.__extmap));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7754__auto__,G__27287){
var self__ = this;
var this__7754__auto____$1 = this;
return (new datascript.pull_parser.PullRecursionLimit(self__.limit,G__27287,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7760__auto__,entry__7761__auto__){
var self__ = this;
var this__7760__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7761__auto__)){
return cljs.core._assoc(this__7760__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7760__auto____$1,entry__7761__auto__);
}
});

datascript.pull_parser.PullRecursionLimit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$limit], null);
});

datascript.pull_parser.PullRecursionLimit.cljs$lang$type = true;

datascript.pull_parser.PullRecursionLimit.cljs$lang$ctorPrSeq = (function (this__7791__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.pull-parser/PullRecursionLimit");
});

datascript.pull_parser.PullRecursionLimit.cljs$lang$ctorPrWriter = (function (this__7791__auto__,writer__7792__auto__){
return cljs.core._write(writer__7792__auto__,"datascript.pull-parser/PullRecursionLimit");
});

datascript.pull_parser.__GT_PullRecursionLimit = (function datascript$pull_parser$__GT_PullRecursionLimit(limit){
return (new datascript.pull_parser.PullRecursionLimit(limit,null,null,null));
});

datascript.pull_parser.map__GT_PullRecursionLimit = (function datascript$pull_parser$map__GT_PullRecursionLimit(G__27289){
return (new datascript.pull_parser.PullRecursionLimit(cljs.core.cst$kw$limit.cljs$core$IFn$_invoke$arity$1(G__27289),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27289,cljs.core.cst$kw$limit),null));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullMapSpecEntry = (function (attr,porrl,__meta,__extmap,__hash){
this.attr = attr;
this.porrl = porrl;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7755__auto__,k__7756__auto__){
var self__ = this;
var this__7755__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7755__auto____$1,k__7756__auto__,null);
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7757__auto__,k27298,else__7758__auto__){
var self__ = this;
var this__7757__auto____$1 = this;
var G__27300 = (((k27298 instanceof cljs.core.Keyword))?k27298.fqn:null);
switch (G__27300) {
case "attr":
return self__.attr;

break;
case "porrl":
return self__.porrl;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27298,else__7758__auto__);

}
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7769__auto__,writer__7770__auto__,opts__7771__auto__){
var self__ = this;
var this__7769__auto____$1 = this;
var pr_pair__7772__auto__ = ((function (this__7769__auto____$1){
return (function (keyval__7773__auto__){
return cljs.core.pr_sequential_writer(writer__7770__auto__,cljs.core.pr_writer,""," ","",opts__7771__auto__,keyval__7773__auto__);
});})(this__7769__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7770__auto__,pr_pair__7772__auto__,"#datascript.pull-parser.PullMapSpecEntry{",", ","}",opts__7771__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$porrl,self__.porrl],null))], null),self__.__extmap));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27297){
var self__ = this;
var G__27297__$1 = this;
return (new cljs.core.RecordIter((0),G__27297__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attr,cljs.core.cst$kw$porrl], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7753__auto__){
var self__ = this;
var this__7753__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7749__auto__){
var self__ = this;
var this__7749__auto____$1 = this;
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,self__.porrl,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7759__auto__){
var self__ = this;
var this__7759__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7750__auto__){
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

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7751__auto__,other__7752__auto__){
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

datascript.pull_parser.PullMapSpecEntry.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullMapSpecEntry.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(datascript.pull_parser._as_spec(self__.attr),(1),cljs.core.conj,datascript.pull_parser._as_spec(self__.porrl));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7764__auto__,k__7765__auto__){
var self__ = this;
var this__7764__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$porrl,null,cljs.core.cst$kw$attr,null], null), null),k__7765__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7764__auto____$1),self__.__meta),k__7765__auto__);
} else {
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,self__.porrl,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7765__auto__)),null));
}
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7762__auto__,k__7763__auto__,G__27297){
var self__ = this;
var this__7762__auto____$1 = this;
var pred__27301 = cljs.core.keyword_identical_QMARK_;
var expr__27302 = k__7763__auto__;
if(cljs.core.truth_((function (){var G__27304 = cljs.core.cst$kw$attr;
var G__27305 = expr__27302;
return (pred__27301.cljs$core$IFn$_invoke$arity$2 ? pred__27301.cljs$core$IFn$_invoke$arity$2(G__27304,G__27305) : pred__27301.call(null,G__27304,G__27305));
})())){
return (new datascript.pull_parser.PullMapSpecEntry(G__27297,self__.porrl,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27306 = cljs.core.cst$kw$porrl;
var G__27307 = expr__27302;
return (pred__27301.cljs$core$IFn$_invoke$arity$2 ? pred__27301.cljs$core$IFn$_invoke$arity$2(G__27306,G__27307) : pred__27301.call(null,G__27306,G__27307));
})())){
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,G__27297,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,self__.porrl,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7763__auto__,G__27297),null));
}
}
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7767__auto__){
var self__ = this;
var this__7767__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$porrl,self__.porrl],null))], null),self__.__extmap));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7754__auto__,G__27297){
var self__ = this;
var this__7754__auto____$1 = this;
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,self__.porrl,G__27297,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7760__auto__,entry__7761__auto__){
var self__ = this;
var this__7760__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7761__auto__)){
return cljs.core._assoc(this__7760__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7760__auto____$1,entry__7761__auto__);
}
});

datascript.pull_parser.PullMapSpecEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$attr,cljs.core.cst$sym$porrl], null);
});

datascript.pull_parser.PullMapSpecEntry.cljs$lang$type = true;

datascript.pull_parser.PullMapSpecEntry.cljs$lang$ctorPrSeq = (function (this__7791__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.pull-parser/PullMapSpecEntry");
});

datascript.pull_parser.PullMapSpecEntry.cljs$lang$ctorPrWriter = (function (this__7791__auto__,writer__7792__auto__){
return cljs.core._write(writer__7792__auto__,"datascript.pull-parser/PullMapSpecEntry");
});

datascript.pull_parser.__GT_PullMapSpecEntry = (function datascript$pull_parser$__GT_PullMapSpecEntry(attr,porrl){
return (new datascript.pull_parser.PullMapSpecEntry(attr,porrl,null,null,null));
});

datascript.pull_parser.map__GT_PullMapSpecEntry = (function datascript$pull_parser$map__GT_PullMapSpecEntry(G__27299){
return (new datascript.pull_parser.PullMapSpecEntry(cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(G__27299),cljs.core.cst$kw$porrl.cljs$core$IFn$_invoke$arity$1(G__27299),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27299,cljs.core.cst$kw$attr,cljs.core.array_seq([cljs.core.cst$kw$porrl], 0)),null));
});

datascript.pull_parser.aggregate_specs = (function datascript$pull_parser$aggregate_specs(res,part){
if((part instanceof datascript.pull_parser.PullWildcard)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,cljs.core.cst$kw$wildcard_QMARK_,true);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(res,cljs.core.cst$kw$attrs,cljs.core.conj_BANG_,datascript.pull_parser._as_spec(part));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullPattern = (function (specs,__meta,__extmap,__hash){
this.specs = specs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7755__auto__,k__7756__auto__){
var self__ = this;
var this__7755__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7755__auto____$1,k__7756__auto__,null);
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7757__auto__,k27310,else__7758__auto__){
var self__ = this;
var this__7757__auto____$1 = this;
var G__27312 = (((k27310 instanceof cljs.core.Keyword))?k27310.fqn:null);
switch (G__27312) {
case "specs":
return self__.specs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27310,else__7758__auto__);

}
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7769__auto__,writer__7770__auto__,opts__7771__auto__){
var self__ = this;
var this__7769__auto____$1 = this;
var pr_pair__7772__auto__ = ((function (this__7769__auto____$1){
return (function (keyval__7773__auto__){
return cljs.core.pr_sequential_writer(writer__7770__auto__,cljs.core.pr_writer,""," ","",opts__7771__auto__,keyval__7773__auto__);
});})(this__7769__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7770__auto__,pr_pair__7772__auto__,"#datascript.pull-parser.PullPattern{",", ","}",opts__7771__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$specs,self__.specs],null))], null),self__.__extmap));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullPattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27309){
var self__ = this;
var G__27309__$1 = this;
return (new cljs.core.RecordIter((0),G__27309__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$specs], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7753__auto__){
var self__ = this;
var this__7753__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7749__auto__){
var self__ = this;
var this__7749__auto____$1 = this;
return (new datascript.pull_parser.PullPattern(self__.specs,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7759__auto__){
var self__ = this;
var this__7759__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7750__auto__){
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

datascript.pull_parser.PullPattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7751__auto__,other__7752__auto__){
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

datascript.pull_parser.PullPattern.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullPattern.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var init = (new datascript.pull_parser.PullSpec(false,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),null,null,null));
var spec = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.pull_parser.aggregate_specs,init,self__.specs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$subpattern,cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$attrs,cljs.core.persistent_BANG_)], null);
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7764__auto__,k__7765__auto__){
var self__ = this;
var this__7764__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$specs,null], null), null),k__7765__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7764__auto____$1),self__.__meta),k__7765__auto__);
} else {
return (new datascript.pull_parser.PullPattern(self__.specs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7765__auto__)),null));
}
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7762__auto__,k__7763__auto__,G__27309){
var self__ = this;
var this__7762__auto____$1 = this;
var pred__27313 = cljs.core.keyword_identical_QMARK_;
var expr__27314 = k__7763__auto__;
if(cljs.core.truth_((function (){var G__27316 = cljs.core.cst$kw$specs;
var G__27317 = expr__27314;
return (pred__27313.cljs$core$IFn$_invoke$arity$2 ? pred__27313.cljs$core$IFn$_invoke$arity$2(G__27316,G__27317) : pred__27313.call(null,G__27316,G__27317));
})())){
return (new datascript.pull_parser.PullPattern(G__27309,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullPattern(self__.specs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7763__auto__,G__27309),null));
}
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7767__auto__){
var self__ = this;
var this__7767__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$specs,self__.specs],null))], null),self__.__extmap));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7754__auto__,G__27309){
var self__ = this;
var this__7754__auto____$1 = this;
return (new datascript.pull_parser.PullPattern(self__.specs,G__27309,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7760__auto__,entry__7761__auto__){
var self__ = this;
var this__7760__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7761__auto__)){
return cljs.core._assoc(this__7760__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7760__auto____$1,entry__7761__auto__);
}
});

datascript.pull_parser.PullPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$specs], null);
});

datascript.pull_parser.PullPattern.cljs$lang$type = true;

datascript.pull_parser.PullPattern.cljs$lang$ctorPrSeq = (function (this__7791__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.pull-parser/PullPattern");
});

datascript.pull_parser.PullPattern.cljs$lang$ctorPrWriter = (function (this__7791__auto__,writer__7792__auto__){
return cljs.core._write(writer__7792__auto__,"datascript.pull-parser/PullPattern");
});

datascript.pull_parser.__GT_PullPattern = (function datascript$pull_parser$__GT_PullPattern(specs){
return (new datascript.pull_parser.PullPattern(specs,null,null,null));
});

datascript.pull_parser.map__GT_PullPattern = (function datascript$pull_parser$map__GT_PullPattern(G__27311){
return (new datascript.pull_parser.PullPattern(cljs.core.cst$kw$specs.cljs$core$IFn$_invoke$arity$1(G__27311),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27311,cljs.core.cst$kw$specs),null));
});

datascript.pull_parser.wildcard_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$_STAR_,null,"*",null,cljs.core.cst$sym$_STAR_,null], null), null);
datascript.pull_parser.parse_wildcard = (function datascript$pull_parser$parse_wildcard(spec){
if(cljs.core.truth_((datascript.pull_parser.wildcard_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.pull_parser.wildcard_QMARK_.cljs$core$IFn$_invoke$arity$1(spec) : datascript.pull_parser.wildcard_QMARK_.call(null,spec)))){
return (new datascript.pull_parser.PullWildcard(null,null,null));
} else {
return null;
}
});
datascript.pull_parser.parse_attr_name = (function datascript$pull_parser$parse_attr_name(spec){
if(((spec instanceof cljs.core.Keyword)) || (typeof spec === 'string')){
if(datascript.db.reverse_ref_QMARK_(spec)){
return (new datascript.pull_parser.PullReverseAttrName(datascript.db.reverse_ref(spec),spec,null,null,null));
} else {
return (new datascript.pull_parser.PullAttrName(spec,null,null,null));
}
} else {
return null;
}
});
datascript.pull_parser.unlimited_recursion_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["...",null,cljs.core.cst$sym$$$$,null], null), null);
datascript.pull_parser.parse_recursion_limit = (function datascript$pull_parser$parse_recursion_limit(spec){
if(cljs.core.truth_((datascript.pull_parser.unlimited_recursion_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.pull_parser.unlimited_recursion_QMARK_.cljs$core$IFn$_invoke$arity$1(spec) : datascript.pull_parser.unlimited_recursion_QMARK_.call(null,spec)))){
return (new datascript.pull_parser.PullRecursionLimit(null,null,null,null));
} else {
if((typeof spec === 'number') && ((spec > (0)))){
return (new datascript.pull_parser.PullRecursionLimit(spec,null,null,null));
} else {
return null;
}
}
});
datascript.pull_parser.maybe_attr_expr_QMARK_ = (function datascript$pull_parser$maybe_attr_expr_QMARK_(spec){
return (cljs.core.sequential_QMARK_(spec)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(spec)));
});
datascript.pull_parser.limit_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$limit,null,cljs.core.cst$kw$limit,null,"limit",null], null), null);
datascript.pull_parser.parse_limit_expr = (function datascript$pull_parser$parse_limit_expr(spec){
var vec__27322 = spec;
var limit_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27322,(0),null);
var attr_name_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27322,(1),null);
var pos_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27322,(2),null);
if(cljs.core.truth_((datascript.pull_parser.limit_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.pull_parser.limit_QMARK_.cljs$core$IFn$_invoke$arity$1(limit_sym) : datascript.pull_parser.limit_QMARK_.call(null,limit_sym)))){
var temp__6751__auto__ = (function (){var and__7073__auto__ = ((pos_num == null)) || ((typeof pos_num === 'number') && ((pos_num > (0))));
if(and__7073__auto__){
return datascript.pull_parser.parse_attr_name(attr_name_spec);
} else {
return and__7073__auto__;
}
})();
if(cljs.core.truth_(temp__6751__auto__)){
var attr_name = temp__6751__auto__;
return (new datascript.pull_parser.PullLimitExpr(attr_name,pos_num,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Expected [\"limit\" attr-name (positive-number | nil)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_pull,cljs.core.cst$kw$fragment,spec], null));
}
} else {
return null;
}
});
datascript.pull_parser.default_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$default,null,cljs.core.cst$kw$default,null,"default",null], null), null);
datascript.pull_parser.parse_default_expr = (function datascript$pull_parser$parse_default_expr(spec){
var vec__27328 = spec;
var default_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27328,(0),null);
var attr_name_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27328,(1),null);
var default_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27328,(2),null);
if(cljs.core.truth_((datascript.pull_parser.default_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.pull_parser.default_QMARK_.cljs$core$IFn$_invoke$arity$1(default_sym) : datascript.pull_parser.default_QMARK_.call(null,default_sym)))){
var temp__6751__auto__ = (function (){var and__7073__auto__ = (datascript.pull_parser.default_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.pull_parser.default_QMARK_.cljs$core$IFn$_invoke$arity$1(default_sym) : datascript.pull_parser.default_QMARK_.call(null,default_sym));
if(cljs.core.truth_(and__7073__auto__)){
return datascript.pull_parser.parse_attr_name(attr_name_spec);
} else {
return and__7073__auto__;
}
})();
if(cljs.core.truth_(temp__6751__auto__)){
var attr_name = temp__6751__auto__;
return (new datascript.pull_parser.PullDefaultExpr(attr_name,default_val,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Expected [\"default\" attr-name any-value]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_pull,cljs.core.cst$kw$fragment,spec], null));
}
} else {
return null;
}
});
datascript.pull_parser.parse_map_spec_entry = (function datascript$pull_parser$parse_map_spec_entry(p__27331){
var vec__27335 = p__27331;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27335,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27335,(1),null);
var temp__6751__auto__ = (function (){var or__7085__auto__ = datascript.pull_parser.parse_attr_name(k);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
if(cljs.core.truth_(datascript.pull_parser.maybe_attr_expr_QMARK_(k))){
return datascript.pull_parser.parse_limit_expr(k);
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__6751__auto__)){
var attr_name = temp__6751__auto__;
var temp__6751__auto____$1 = (function (){var or__7085__auto__ = datascript.pull_parser.parse_recursion_limit(v);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return (datascript.pull_parser.parse_pattern.cljs$core$IFn$_invoke$arity$1 ? datascript.pull_parser.parse_pattern.cljs$core$IFn$_invoke$arity$1(v) : datascript.pull_parser.parse_pattern.call(null,v));
}
})();
if(cljs.core.truth_(temp__6751__auto____$1)){
var pattern_or_rec = temp__6751__auto____$1;
return (new datascript.pull_parser.PullMapSpecEntry(attr_name,pattern_or_rec,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Expected (pattern | recursion-limit)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_pull,cljs.core.cst$kw$fragment,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Expected (attr-name | limit-expr)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_pull,cljs.core.cst$kw$fragment,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)], null));
}
});
datascript.pull_parser.parse_map_spec = (function datascript$pull_parser$parse_map_spec(spec){
if(cljs.core.map_QMARK_(spec)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(spec))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Maps should contain exactly 1 entry"),cljs.core.str("\n"),cljs.core.str("(= 1 (count spec))")].join('')));
}

return datascript.pull_parser.parse_map_spec_entry(cljs.core.first(spec));
} else {
return null;
}
});
datascript.pull_parser.parse_attr_expr = (function datascript$pull_parser$parse_attr_expr(spec){
if(cljs.core.truth_(datascript.pull_parser.maybe_attr_expr_QMARK_(spec))){
var or__7085__auto__ = datascript.pull_parser.parse_limit_expr(spec);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return datascript.pull_parser.parse_default_expr(spec);
}
} else {
return null;
}
});
datascript.pull_parser.parse_attr_spec = (function datascript$pull_parser$parse_attr_spec(spec){
var or__7085__auto__ = datascript.pull_parser.parse_attr_name(spec);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
var or__7085__auto____$1 = datascript.pull_parser.parse_wildcard(spec);
if(cljs.core.truth_(or__7085__auto____$1)){
return or__7085__auto____$1;
} else {
var or__7085__auto____$2 = datascript.pull_parser.parse_map_spec(spec);
if(cljs.core.truth_(or__7085__auto____$2)){
return or__7085__auto____$2;
} else {
var or__7085__auto____$3 = datascript.pull_parser.parse_attr_expr(spec);
if(cljs.core.truth_(or__7085__auto____$3)){
return or__7085__auto____$3;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Cannot parse attr-spec, expected: (attr-name | wildcard | map-spec | attr-expr)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_pull,cljs.core.cst$kw$fragment,spec], null));
}
}
}
}
});
datascript.pull_parser.pattern_clause_type = (function datascript$pull_parser$pattern_clause_type(clause){
if(cljs.core.map_QMARK_(clause)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.truth_((datascript.pull_parser.wildcard_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.pull_parser.wildcard_QMARK_.cljs$core$IFn$_invoke$arity$1(clause) : datascript.pull_parser.wildcard_QMARK_.call(null,clause)))){
return cljs.core.cst$kw$wildcard;
} else {
return cljs.core.cst$kw$other;

}
}
});
datascript.pull_parser.expand_map_clause = (function datascript$pull_parser$expand_map_clause(clause){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__27338_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__27338_SHARP_);
})),clause);
});
datascript.pull_parser.simplify_pattern_clauses = (function datascript$pull_parser$simplify_pattern_clauses(pattern){
var groups = cljs.core.group_by(datascript.pull_parser.pattern_clause_type,pattern);
var base = (cljs.core.truth_(cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.cst$kw$wildcard)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null):cljs.core.PersistentVector.EMPTY);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(base,cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.cst$kw$other)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(datascript.pull_parser.expand_map_clause),cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.cst$kw$map));
});
/**
 * Parse an EDN pull pattern into a tree of records using the following
 * grammar:
 * 
 * ```
 * pattern            = [attr-spec+]
 * attr-spec          = attr-name | wildcard | map-spec | attr-expr
 * attr-name          = an edn keyword that names an attr
 * wildcard           = "*" or '*'
 * map-spec           = { ((attr-name | limit-expr) (pattern | recursion-limit))+ }
 * attr-expr          = limit-expr | default-expr
 * limit-expr         = ["limit" attr-name (positive-number | nil)]
 * default-expr       = ["default" attr-name any-value]
 * recursion-limit    = positive-number | '...'
 * ```
 */
datascript.pull_parser.parse_pattern = (function datascript$pull_parser$parse_pattern(pattern){
if(cljs.core.sequential_QMARK_(pattern)){
return (new datascript.pull_parser.PullPattern(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(datascript.pull_parser.parse_attr_spec),datascript.pull_parser.simplify_pattern_clauses(pattern)),null,null,null));
} else {
return null;
}
});
/**
 * Convert a parsed tree of pull pattern records into a `PullSpec` instance,
 * a record type containing two keys:
 * 
 * * `:wildcard?` - a boolean indicating if the pattern contains a wildcard.
 * * `:attrs` - a map of attribute specifications.
 * 
 * The attribute specification map consists of keys which will become the keys
 * in the result map, and values which are themselves maps describing the
 * attribute:
 * 
 * * `:attr`       (required) - The attr name to pull; for reverse attributes
 *                           this will be the normalized attribute name.
 * * `:limit`      (optional) - If present, specifies a custom limit for this
 *                           attribute; Either `nil`, indicating no limit,
 *                           or a positive integer.
 * * `:default`    (optional) - If present, specifies a default value for this
 *                           attribute
 * * `:recursion`  (optional) - If present, specifies a recursion limit for this
 *                           attribute; Either `nil`, indicating no limit, or
 *                           a positive integer.
 * * `:subpattern` (optional) - If present, specifies a sub `PullSpec` instance
 *                           to be applied to entities matched by this
 *                           attribute.
 */
datascript.pull_parser.pattern__GT_spec = (function datascript$pull_parser$pattern__GT_spec(pattern){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(datascript.pull_parser._as_spec(pattern),(1));
});
/**
 * Parse EDN pull `pattern` specification (see `parse-pattern`), and
 * convert the resulting tree into a `PullSpec` instance (see `pattern->spec`).
 * Throws an error if the supplied `pattern` cannot be parsed.
 */
datascript.pull_parser.parse_pull = (function datascript$pull_parser$parse_pull(pattern){
var or__7085__auto__ = (function (){var G__27342 = pattern;
var G__27342__$1 = (((G__27342 == null))?null:datascript.pull_parser.parse_pattern(G__27342));
if((G__27342__$1 == null)){
return null;
} else {
return datascript.pull_parser.pattern__GT_spec(G__27342__$1);
}
})();
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Cannot parse pull pattern, expected: [attr-spec+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_pull,cljs.core.cst$kw$fragment,pattern], null));
}
});
