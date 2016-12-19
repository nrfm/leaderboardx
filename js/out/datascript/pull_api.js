// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('datascript.pull_api');
goog.require('cljs.core');
goog.require('datascript.db');
goog.require('datascript.pull_parser');
datascript.pull_api.into_BANG_ = (function datascript$pull_api$into_BANG_(transient_coll,items){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,transient_coll,items);
});
datascript.pull_api._PLUS_default_limit_PLUS_ = (1000);
datascript.pull_api.initial_frame = (function datascript$pull_api$initial_frame(pattern,eids,multi_QMARK_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$multi_QMARK_,cljs.core.cst$kw$eids,cljs.core.cst$kw$state,cljs.core.cst$kw$recursion,cljs.core.cst$kw$specs,cljs.core.cst$kw$wildcard_QMARK_,cljs.core.cst$kw$kvps,cljs.core.cst$kw$pattern,cljs.core.cst$kw$results],[multi_QMARK_,eids,cljs.core.cst$kw$pattern,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$depth,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$seen,cljs.core.PersistentHashSet.EMPTY], null),cljs.core.seq(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(pattern)),cljs.core.cst$kw$wildcard_QMARK_.cljs$core$IFn$_invoke$arity$1(pattern),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),pattern,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)]);
});
datascript.pull_api.subpattern_frame = (function datascript$pull_api$subpattern_frame(pattern,eids,multi_QMARK_,attr){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(datascript.pull_api.initial_frame(pattern,eids,multi_QMARK_),cljs.core.cst$kw$attr,attr);
});
datascript.pull_api.reset_frame = (function datascript$pull_api$reset_frame(frame,eids,kvps){
var pattern = cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(frame);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(frame,cljs.core.cst$kw$eids,eids,cljs.core.array_seq([cljs.core.cst$kw$specs,cljs.core.seq(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(pattern)),cljs.core.cst$kw$wildcard_QMARK_,cljs.core.cst$kw$wildcard_QMARK_.cljs$core$IFn$_invoke$arity$1(pattern),cljs.core.cst$kw$kvps,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$results,(function (){var G__27346 = cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(frame);
if(cljs.core.seq(kvps)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__27346,kvps);
} else {
return G__27346;
}
})()], 0));
});
datascript.pull_api.push_recursion = (function datascript$pull_api$push_recursion(rec,attr,eid){
var map__27349 = rec;
var map__27349__$1 = ((((!((map__27349 == null)))?((((map__27349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27349.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27349):map__27349);
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27349__$1,cljs.core.cst$kw$depth);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27349__$1,cljs.core.cst$kw$seen);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rec,cljs.core.cst$kw$depth,cljs.core.update.cljs$core$IFn$_invoke$arity$3(depth,attr,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))),cljs.core.array_seq([cljs.core.cst$kw$seen,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,eid)], 0));
});
datascript.pull_api.seen_eid_QMARK_ = (function datascript$pull_api$seen_eid_QMARK_(frame,eid){
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$recursion,cljs.core.cst$kw$seen], null),cljs.core.PersistentHashSet.EMPTY),eid);
});
datascript.pull_api.pull_seen_eid = (function datascript$pull_api$pull_seen_eid(frame,frames,eid){
if(cljs.core.truth_(datascript.pull_api.seen_eid_QMARK_(frame,eid))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,cljs.core.update.cljs$core$IFn$_invoke$arity$4(frame,cljs.core.cst$kw$results,cljs.core.conj_BANG_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_id,eid], null)));
} else {
return null;
}
});
datascript.pull_api.single_frame_result = (function datascript$pull_api$single_frame_result(key,frame){
var G__27352 = cljs.core.cst$kw$kvps.cljs$core$IFn$_invoke$arity$1(frame);
var G__27352__$1 = (((G__27352 == null))?null:cljs.core.persistent_BANG_(G__27352));
if((G__27352__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__27352__$1,key);
}
});
datascript.pull_api.recursion_result = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(datascript.pull_api.single_frame_result,cljs.core.cst$kw$datascript$pull_DASH_api_SLASH_recursion);
datascript.pull_api.recursion_frame = (function datascript$pull_api$recursion_frame(parent,eid){
var attr = cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(parent);
var rec = datascript.pull_api.push_recursion(cljs.core.cst$kw$recursion.cljs$core$IFn$_invoke$arity$1(parent),attr,eid);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(datascript.pull_api.subpattern_frame(cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null),false,cljs.core.cst$kw$datascript$pull_DASH_api_SLASH_recursion),cljs.core.cst$kw$recursion,rec);
});
datascript.pull_api.pull_recursion_frame = (function datascript$pull_api$pull_recursion_frame(db,p__27353){
var vec__27358 = p__27353;
var seq__27359 = cljs.core.seq(vec__27358);
var first__27360 = cljs.core.first(seq__27359);
var seq__27359__$1 = cljs.core.next(seq__27359);
var frame = first__27360;
var frames = seq__27359__$1;
var temp__6751__auto__ = cljs.core.seq(cljs.core.cst$kw$eids.cljs$core$IFn$_invoke$arity$1(frame));
if(temp__6751__auto__){
var eids = temp__6751__auto__;
var frame__$1 = datascript.pull_api.reset_frame(frame,cljs.core.rest(eids),(datascript.pull_api.recursion_result.cljs$core$IFn$_invoke$arity$1 ? datascript.pull_api.recursion_result.cljs$core$IFn$_invoke$arity$1(frame) : datascript.pull_api.recursion_result.call(null,frame)));
var eid = cljs.core.first(eids);
var or__7085__auto__ = datascript.pull_api.pull_seen_eid(frame__$1,frames,eid);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,frame__$1,cljs.core.array_seq([datascript.pull_api.recursion_frame(frame__$1,eid)], 0));
}
} else {
var kvps = (datascript.pull_api.recursion_result.cljs$core$IFn$_invoke$arity$1 ? datascript.pull_api.recursion_result.cljs$core$IFn$_invoke$arity$1(frame) : datascript.pull_api.recursion_result.call(null,frame));
var results = (function (){var G__27361 = cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(frame);
if(cljs.core.seq(kvps)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__27361,kvps);
} else {
return G__27361;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(frame,cljs.core.cst$kw$state,cljs.core.cst$kw$done,cljs.core.array_seq([cljs.core.cst$kw$results,results], 0)));
}
});
datascript.pull_api.recurse_attr = (function datascript$pull_api$recurse_attr(db,attr,multi_QMARK_,eids,eid,parent,frames){
var map__27364 = parent;
var map__27364__$1 = ((((!((map__27364 == null)))?((((map__27364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27364):map__27364);
var recursion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27364__$1,cljs.core.cst$kw$recursion);
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27364__$1,cljs.core.cst$kw$pattern);
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(recursion,cljs.core.cst$kw$depth),attr,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$recursion.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(pattern),attr)),depth)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,parent);
} else {
return datascript.pull_api.pull_recursion_frame(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,parent,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$state,cljs.core.cst$kw$recursion,cljs.core.cst$kw$pattern,pattern,cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$multi_QMARK_,multi_QMARK_,cljs.core.cst$kw$eids,eids,cljs.core.cst$kw$recursion,recursion,cljs.core.cst$kw$results,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)], null)], 0)));
}
});
var pattern_27366 = (new datascript.pull_parser.PullSpec(true,cljs.core.PersistentArrayMap.EMPTY,null,null,null));
datascript.pull_api.expand_frame = ((function (pattern_27366){
return (function datascript$pull_api$expand_frame(parent,eid,attr_key,multi_QMARK_,eids){
var rec = datascript.pull_api.push_recursion(cljs.core.cst$kw$recursion.cljs$core$IFn$_invoke$arity$1(parent),attr_key,eid);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(datascript.pull_api.subpattern_frame(pattern_27366,eids,multi_QMARK_,attr_key),cljs.core.cst$kw$recursion,rec);
});})(pattern_27366))
;
datascript.pull_api.pull_attr_datoms = (function datascript$pull_api$pull_attr_datoms(db,attr_key,attr,eid,forward_QMARK_,datoms,opts,p__27368){
var vec__27376 = p__27368;
var seq__27377 = cljs.core.seq(vec__27376);
var first__27378 = cljs.core.first(seq__27377);
var seq__27377__$1 = cljs.core.next(seq__27377);
var parent = first__27378;
var frames = seq__27377__$1;
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$limit,datascript.pull_api._PLUS_default_limit_PLUS_);
var found = cljs.core.not_empty((function (){var G__27379 = datoms;
if(cljs.core.truth_(limit)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1(limit),G__27379);
} else {
return G__27379;
}
})());
if(cljs.core.truth_(found)){
var ref_QMARK_ = datascript.db.ref_QMARK_(db,attr);
var component_QMARK_ = (ref_QMARK_) && (datascript.db.component_QMARK_(db,attr));
var multi_QMARK_ = (cljs.core.truth_(forward_QMARK_)?datascript.db.multival_QMARK_(db,attr):!(component_QMARK_));
var datom_val = (cljs.core.truth_(forward_QMARK_)?((function (ref_QMARK_,component_QMARK_,multi_QMARK_,limit,found,vec__27376,seq__27377,first__27378,seq__27377__$1,parent,frames){
return (function (d){
return d.v;
});})(ref_QMARK_,component_QMARK_,multi_QMARK_,limit,found,vec__27376,seq__27377,first__27378,seq__27377__$1,parent,frames))
:((function (ref_QMARK_,component_QMARK_,multi_QMARK_,limit,found,vec__27376,seq__27377,first__27378,seq__27377__$1,parent,frames){
return (function (d){
return d.e;
});})(ref_QMARK_,component_QMARK_,multi_QMARK_,limit,found,vec__27376,seq__27377,first__27378,seq__27377__$1,parent,frames))
);
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$subpattern)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,parent,cljs.core.array_seq([datascript.pull_api.subpattern_frame(cljs.core.cst$kw$subpattern.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(datom_val,found),multi_QMARK_,attr_key)], 0));
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$recursion)){
return datascript.pull_api.recurse_attr(db,attr_key,multi_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(datom_val,found),eid,parent,frames);
} else {
if(cljs.core.truth_((function (){var and__7073__auto__ = component_QMARK_;
if(and__7073__auto__){
return forward_QMARK_;
} else {
return and__7073__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,parent,cljs.core.array_seq([datascript.pull_api.expand_frame(parent,eid,attr_key,multi_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(datom_val,found))], 0));
} else {
var as_value = (function (){var G__27380 = datom_val;
if(ref_QMARK_){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (G__27380,ref_QMARK_,component_QMARK_,multi_QMARK_,datom_val,limit,found,vec__27376,seq__27377,first__27378,seq__27377__$1,parent,frames){
return (function (p1__27367_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$db_SLASH_id],[p1__27367_SHARP_]);
});})(G__27380,ref_QMARK_,component_QMARK_,multi_QMARK_,datom_val,limit,found,vec__27376,seq__27377,first__27378,seq__27377__$1,parent,frames))
,G__27380);
} else {
return G__27380;
}
})();
var single_QMARK_ = !(multi_QMARK_);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,cljs.core.update.cljs$core$IFn$_invoke$arity$5(parent,cljs.core.cst$kw$kvps,cljs.core.assoc_BANG_,attr_key,(function (){var G__27381 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(as_value),found);
if(single_QMARK_){
return cljs.core.first(G__27381);
} else {
return G__27381;
}
})()));

}
}
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,(function (){var G__27382 = parent;
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__27382,cljs.core.cst$kw$kvps,cljs.core.assoc_BANG_,attr_key,cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts));
} else {
return G__27382;
}
})());
}
});
datascript.pull_api.pull_attr = (function datascript$pull_api$pull_attr(db,spec,eid,frames){
var vec__27386 = spec;
var attr_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27386,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27386,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db_SLASH_id,attr_key)){
if(cljs.core.truth_(cljs.core.not_empty(datascript.db._datoms(db,cljs.core.cst$kw$eavt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(frames),cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.first(frames),cljs.core.cst$kw$kvps,cljs.core.assoc_BANG_,cljs.core.cst$kw$db_SLASH_id,eid));
} else {
return frames;
}
} else {
var attr = cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(opts);
var forward_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr_key,attr);
var results = ((forward_QMARK_)?datascript.db._datoms(db,cljs.core.cst$kw$eavt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid,attr], null)):datascript.db._datoms(db,cljs.core.cst$kw$avet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,eid], null)));
return datascript.pull_api.pull_attr_datoms(db,attr_key,attr,eid,forward_QMARK_,results,opts,frames);
}
});
datascript.pull_api.filter_reverse_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__27389){
var vec__27390 = p__27389;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27390,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27390,(1),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(v));
}));
datascript.pull_api.expand_reverse_subpattern_frame = (function datascript$pull_api$expand_reverse_subpattern_frame(parent,eid,rattrs){
return datascript.pull_api.subpattern_frame(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(parent),cljs.core.cst$kw$attrs,rattrs,cljs.core.array_seq([cljs.core.cst$kw$wildcard_QMARK_,false], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null),false,cljs.core.cst$kw$datascript$pull_DASH_api_SLASH_expand_DASH_rev);
});
datascript.pull_api.expand_result = (function datascript$pull_api$expand_result(frames,kvps){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(frames),cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.first(frames),cljs.core.cst$kw$kvps,datascript.pull_api.into_BANG_,cljs.core.persistent_BANG_(kvps)));
});
datascript.pull_api.pull_expand_reverse_frame = (function datascript$pull_api$pull_expand_reverse_frame(db,p__27393){
var vec__27397 = p__27393;
var seq__27398 = cljs.core.seq(vec__27397);
var first__27399 = cljs.core.first(seq__27398);
var seq__27398__$1 = cljs.core.next(seq__27398);
var frame = first__27399;
var frames = seq__27398__$1;
return datascript.pull_api.expand_result(frames,datascript.pull_api.into_BANG_(cljs.core.cst$kw$expand_DASH_kvps.cljs$core$IFn$_invoke$arity$1(frame),(function (){var or__7085__auto__ = datascript.pull_api.single_frame_result(cljs.core.cst$kw$datascript$pull_DASH_api_SLASH_expand_DASH_rev,frame);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
});
datascript.pull_api.pull_expand_frame = (function datascript$pull_api$pull_expand_frame(db,p__27400){
var vec__27407 = p__27400;
var seq__27408 = cljs.core.seq(vec__27407);
var first__27409 = cljs.core.first(seq__27408);
var seq__27408__$1 = cljs.core.next(seq__27408);
var frame = first__27409;
var frames = seq__27408__$1;
var temp__6751__auto__ = cljs.core.seq(cljs.core.cst$kw$datoms.cljs$core$IFn$_invoke$arity$1(frame));
if(temp__6751__auto__){
var datoms_by_attr = temp__6751__auto__;
var vec__27410 = cljs.core.first(datoms_by_attr);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27410,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27410,(1),null);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pattern,cljs.core.cst$kw$attrs], null)),attr,cljs.core.PersistentArrayMap.EMPTY);
return datascript.pull_api.pull_attr_datoms(db,attr,attr,cljs.core.cst$kw$eid.cljs$core$IFn$_invoke$arity$1(frame),true,datoms,opts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,cljs.core.update.cljs$core$IFn$_invoke$arity$3(frame,cljs.core.cst$kw$datoms,cljs.core.rest)));
} else {
var temp__6751__auto____$1 = cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,datascript.pull_api.filter_reverse_attrs,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pattern,cljs.core.cst$kw$attrs], null))));
if(cljs.core.truth_(temp__6751__auto____$1)){
var rattrs = temp__6751__auto____$1;
var frame__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(frame,cljs.core.cst$kw$state,cljs.core.cst$kw$expand_DASH_rev,cljs.core.array_seq([cljs.core.cst$kw$expand_DASH_kvps,cljs.core.cst$kw$kvps.cljs$core$IFn$_invoke$arity$1(frame),cljs.core.cst$kw$kvps,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)], 0));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,frame__$1,cljs.core.array_seq([datascript.pull_api.expand_reverse_subpattern_frame(frame__$1,cljs.core.cst$kw$eid.cljs$core$IFn$_invoke$arity$1(frame__$1),rattrs)], 0));
} else {
return datascript.pull_api.expand_result(frames,cljs.core.cst$kw$kvps.cljs$core$IFn$_invoke$arity$1(frame));
}
}
});
datascript.pull_api.pull_wildcard_expand = (function datascript$pull_api$pull_wildcard_expand(db,frame,frames,eid,pattern){
var datoms = cljs.core.group_by((function (d){
return d.a;
}),datascript.db._datoms(db,cljs.core.cst$kw$eavt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null)));
var map__27416 = frame;
var map__27416__$1 = ((((!((map__27416 == null)))?((((map__27416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27416.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27416):map__27416);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27416__$1,cljs.core.cst$kw$attr);
var recursion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27416__$1,cljs.core.cst$kw$recursion);
var rec = (function (){var G__27418 = recursion;
if(cljs.core.some_QMARK_(attr)){
return datascript.pull_api.push_recursion(G__27418,attr,eid);
} else {
return G__27418;
}
})();
return datascript.pull_api.pull_expand_frame(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,frame,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$state,cljs.core.cst$kw$expand,cljs.core.cst$kw$kvps,cljs.core.transient$(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_id,eid], null)),cljs.core.cst$kw$eid,eid,cljs.core.cst$kw$pattern,pattern,cljs.core.cst$kw$datoms,cljs.core.seq(datoms),cljs.core.cst$kw$recursion,rec], null)], 0)));
});
datascript.pull_api.pull_wildcard = (function datascript$pull_api$pull_wildcard(db,frame,frames){
var map__27421 = frame;
var map__27421__$1 = ((((!((map__27421 == null)))?((((map__27421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27421):map__27421);
var eid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27421__$1,cljs.core.cst$kw$eid);
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27421__$1,cljs.core.cst$kw$pattern);
var or__7085__auto__ = datascript.pull_api.pull_seen_eid(frame,frames,eid);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return datascript.pull_api.pull_wildcard_expand(db,frame,frames,eid,pattern);
}
});
datascript.pull_api.pull_pattern_frame = (function datascript$pull_api$pull_pattern_frame(db,p__27423){
while(true){
var vec__27427 = p__27423;
var seq__27428 = cljs.core.seq(vec__27427);
var first__27429 = cljs.core.first(seq__27428);
var seq__27428__$1 = cljs.core.next(seq__27428);
var frame = first__27429;
var frames = seq__27428__$1;
var temp__6751__auto__ = cljs.core.seq(cljs.core.cst$kw$eids.cljs$core$IFn$_invoke$arity$1(frame));
if(temp__6751__auto__){
var eids = temp__6751__auto__;
if(cljs.core.truth_(cljs.core.cst$kw$wildcard_QMARK_.cljs$core$IFn$_invoke$arity$1(frame))){
return datascript.pull_api.pull_wildcard(db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(frame,cljs.core.cst$kw$specs,cljs.core.PersistentVector.EMPTY,cljs.core.array_seq([cljs.core.cst$kw$eid,cljs.core.first(eids),cljs.core.cst$kw$wildcard_QMARK_,false], 0)),frames);
} else {
var temp__6751__auto____$1 = cljs.core.seq(cljs.core.cst$kw$specs.cljs$core$IFn$_invoke$arity$1(frame));
if(temp__6751__auto____$1){
var specs = temp__6751__auto____$1;
var spec = cljs.core.first(specs);
var pattern = cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(frame);
var new_frames = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frame,cljs.core.cst$kw$specs,cljs.core.rest(specs)));
return datascript.pull_api.pull_attr(db,spec,cljs.core.first(eids),new_frames);
} else {
var G__27430 = db;
var G__27431 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,datascript.pull_api.reset_frame(frame,cljs.core.rest(eids),cljs.core.not_empty(cljs.core.persistent_BANG_(cljs.core.cst$kw$kvps.cljs$core$IFn$_invoke$arity$1(frame)))));
db = G__27430;
p__27423 = G__27431;
continue;
}
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frame,cljs.core.cst$kw$state,cljs.core.cst$kw$done));
}
break;
}
});
datascript.pull_api.pull_pattern = (function datascript$pull_api$pull_pattern(db,frames){
while(true){
var G__27438 = (((cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cljs.core.first(frames)) instanceof cljs.core.Keyword))?cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cljs.core.first(frames)).fqn:null);
switch (G__27438) {
case "expand":
var G__27445 = db;
var G__27446 = datascript.pull_api.pull_expand_frame(db,frames);
db = G__27445;
frames = G__27446;
continue;

break;
case "expand-rev":
var G__27447 = db;
var G__27448 = datascript.pull_api.pull_expand_reverse_frame(db,frames);
db = G__27447;
frames = G__27448;
continue;

break;
case "pattern":
var G__27449 = db;
var G__27450 = datascript.pull_api.pull_pattern_frame(db,frames);
db = G__27449;
frames = G__27450;
continue;

break;
case "recursion":
var G__27451 = db;
var G__27452 = datascript.pull_api.pull_recursion_frame(db,frames);
db = G__27451;
frames = G__27452;
continue;

break;
case "done":
var vec__27439 = frames;
var seq__27440 = cljs.core.seq(vec__27439);
var first__27441 = cljs.core.first(seq__27440);
var seq__27440__$1 = cljs.core.next(seq__27440);
var f = first__27441;
var remaining = seq__27440__$1;
var result = (function (){var G__27442 = cljs.core.persistent_BANG_(cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(f));
if(cljs.core.not(cljs.core.cst$kw$multi_QMARK_.cljs$core$IFn$_invoke$arity$1(f))){
return cljs.core.first(G__27442);
} else {
return G__27442;
}
})();
if(cljs.core.seq(remaining)){
var G__27453 = db;
var G__27454 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(remaining),(function (){var G__27443 = cljs.core.first(remaining);
if(cljs.core.truth_(result)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__27443,cljs.core.cst$kw$kvps,cljs.core.assoc_BANG_,cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(f),result);
} else {
return G__27443;
}
})());
db = G__27453;
frames = G__27454;
continue;
} else {
return result;
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cljs.core.first(frames)))].join('')));

}
break;
}
});
datascript.pull_api.pull_spec = (function datascript$pull_api$pull_spec(db,pattern,eids,multi_QMARK_){
var eids__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__27455_SHARP_){
return datascript.db.entid_strict(db,p1__27455_SHARP_);
})),eids);
return datascript.pull_api.pull_pattern(db,(function (){var x__8014__auto__ = datascript.pull_api.initial_frame(pattern,eids__$1,multi_QMARK_);
return cljs.core._conj(cljs.core.List.EMPTY,x__8014__auto__);
})());
});
datascript.pull_api.pull = (function datascript$pull_api$pull(db,selector,eid){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.pull_api.pull_spec(db,datascript.pull_parser.parse_pull(selector),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null),false);
});
datascript.pull_api.pull_many = (function datascript$pull_api$pull_many(db,selector,eids){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.pull_api.pull_spec(db,datascript.pull_parser.parse_pull(selector),eids,true);
});