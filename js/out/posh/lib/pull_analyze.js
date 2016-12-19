// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('posh.lib.pull_analyze');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
posh.lib.pull_analyze.reverse_lookup_QMARK_ = (function posh$lib$pull_analyze$reverse_lookup_QMARK_(attr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.name(attr)),"_");
});
posh.lib.pull_analyze.reverse_lookup = (function posh$lib$pull_analyze$reverse_lookup(attr){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.name(attr)),"_")){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.core.namespace(attr)),cljs.core.str("/"),cljs.core.str(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(cljs.core.name(attr))))].join(''));
} else {
return null;
}
});
posh.lib.pull_analyze.dbid_into_vec = (function posh$lib$pull_analyze$dbid_into_vec(v){
if(cljs.core.not(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$_STAR_,null,cljs.core.cst$kw$db_SLASH_id,null], null), null),v))){
return cljs.core.cons(cljs.core.cst$kw$db_SLASH_id,v);
} else {
return v;
}
});
posh.lib.pull_analyze.insert_dbid = (function posh$lib$pull_analyze$insert_dbid(pull_pattern){
if(cljs.core.map_QMARK_(pull_pattern)){
return cljs.core.zipmap(cljs.core.keys(pull_pattern),cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.pull_analyze.insert_dbid,cljs.core.vals(pull_pattern)));
} else {
if(cljs.core.vector_QMARK_(pull_pattern)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28630_SHARP_){
if(cljs.core.coll_QMARK_(p1__28630_SHARP_)){
return (posh.lib.pull_analyze.insert_dbid.cljs$core$IFn$_invoke$arity$1 ? posh.lib.pull_analyze.insert_dbid.cljs$core$IFn$_invoke$arity$1(p1__28630_SHARP_) : posh.lib.pull_analyze.insert_dbid.call(null,p1__28630_SHARP_));
} else {
return p1__28630_SHARP_;
}
}),posh.lib.pull_analyze.dbid_into_vec(pull_pattern)));
} else {
return pull_pattern;

}
}
});
posh.lib.pull_analyze.pull_affected_datoms = (function posh$lib$pull_analyze$pull_affected_datoms(pull_fn,db,pull_pattern,eid){
var G__28634 = db;
var G__28635 = posh.lib.pull_analyze.insert_dbid(pull_pattern);
var G__28636 = eid;
return (pull_fn.cljs$core$IFn$_invoke$arity$3 ? pull_fn.cljs$core$IFn$_invoke$arity$3(G__28634,G__28635,G__28636) : pull_fn.call(null,G__28634,G__28635,G__28636));
});
posh.lib.pull_analyze.pull_ref_one_QMARK_ = (function posh$lib$pull_analyze$pull_ref_one_QMARK_(v){
var and__7073__auto__ = cljs.core.map_QMARK_(v);
if(and__7073__auto__){
return cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(v);
} else {
return and__7073__auto__;
}
});
posh.lib.pull_analyze.pull_ref_many_QMARK_ = (function posh$lib$pull_analyze$pull_ref_many_QMARK_(v){
var and__7073__auto__ = cljs.core.vector_QMARK_(v);
if(and__7073__auto__){
return posh.lib.pull_analyze.pull_ref_one_QMARK_(cljs.core.first(v));
} else {
return and__7073__auto__;
}
});
posh.lib.pull_analyze.ref_QMARK_ = (function posh$lib$pull_analyze$ref_QMARK_(schema,attr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,attr),cljs.core.cst$kw$db_SLASH_valueType),cljs.core.cst$kw$db$type_SLASH_ref);
});
posh.lib.pull_analyze.cardinality_one_QMARK_ = (function posh$lib$pull_analyze$cardinality_one_QMARK_(schema,attr){
var temp__6753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,attr);
if(cljs.core.truth_(temp__6753__auto__)){
var e = temp__6753__auto__;
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db_SLASH_cardinality.cljs$core$IFn$_invoke$arity$1(e),cljs.core.cst$kw$db$cardinality_SLASH_many));
} else {
return null;
}
});
posh.lib.pull_analyze.cardinality_many_QMARK_ = (function posh$lib$pull_analyze$cardinality_many_QMARK_(schema,attr){
var temp__6753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,attr);
if(cljs.core.truth_(temp__6753__auto__)){
var e = temp__6753__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db_SLASH_cardinality.cljs$core$IFn$_invoke$arity$1(e),cljs.core.cst$kw$db$cardinality_SLASH_many);
} else {
return null;
}
});
posh.lib.pull_analyze.tx_datoms_for_pull_map = (function posh$lib$pull_analyze$tx_datoms_for_pull_map(schema,entity_id,pull_map){
if(cljs.core.empty_QMARK_(pull_map)){
return cljs.core.PersistentVector.EMPTY;
} else {
var vec__28658 = cljs.core.first(pull_map);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28658,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28658,(1),null);
var r_QMARK_ = posh.lib.pull_analyze.reverse_lookup_QMARK_(k);
var k__$1 = (cljs.core.truth_(r_QMARK_)?posh.lib.pull_analyze.reverse_lookup(k):k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k__$1,cljs.core.cst$kw$db_SLASH_id)){
var G__28661 = schema;
var G__28662 = entity_id;
var G__28663 = cljs.core.rest(pull_map);
return (posh.lib.pull_analyze.tx_datoms_for_pull_map.cljs$core$IFn$_invoke$arity$3 ? posh.lib.pull_analyze.tx_datoms_for_pull_map.cljs$core$IFn$_invoke$arity$3(G__28661,G__28662,G__28663) : posh.lib.pull_analyze.tx_datoms_for_pull_map.call(null,G__28661,G__28662,G__28663));
} else {
if(cljs.core.truth_(posh.lib.pull_analyze.ref_QMARK_(schema,k__$1))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((function (){var and__7073__auto__ = cljs.core.not(r_QMARK_);
if(and__7073__auto__){
return posh.lib.pull_analyze.cardinality_one_QMARK_(schema,k__$1);
} else {
return and__7073__auto__;
}
})())?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,k__$1,cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(v)], null)], null),(function (){var G__28664 = schema;
var G__28665 = cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(v);
var G__28666 = v;
return (posh.lib.pull_analyze.tx_datoms_for_pull_map.cljs$core$IFn$_invoke$arity$3 ? posh.lib.pull_analyze.tx_datoms_for_pull_map.cljs$core$IFn$_invoke$arity$3(G__28664,G__28665,G__28666) : posh.lib.pull_analyze.tx_datoms_for_pull_map.call(null,G__28664,G__28665,G__28666));
})()):(cljs.core.truth_((function (){var or__7085__auto__ = r_QMARK_;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return posh.lib.pull_analyze.cardinality_many_QMARK_(schema,k__$1);
}
})())?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.not(r_QMARK_))?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (vec__28658,k,v,r_QMARK_,k__$1){
return (function (p1__28637_SHARP_){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,k__$1,cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(p1__28637_SHARP_)], null)],null));
});})(vec__28658,k,v,r_QMARK_,k__$1))
,cljs.core.array_seq([v], 0)):null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (vec__28658,k,v,r_QMARK_,k__$1){
return (function (p1__28638_SHARP_){
var G__28667 = schema;
var G__28668 = cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(p1__28638_SHARP_);
var G__28669 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(r_QMARK_)?cljs.core.PersistentArrayMap.fromArray([k__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_id,entity_id], null)], true, false):null),p1__28638_SHARP_], 0));
return (posh.lib.pull_analyze.tx_datoms_for_pull_map.cljs$core$IFn$_invoke$arity$3 ? posh.lib.pull_analyze.tx_datoms_for_pull_map.cljs$core$IFn$_invoke$arity$3(G__28667,G__28668,G__28669) : posh.lib.pull_analyze.tx_datoms_for_pull_map.call(null,G__28667,G__28668,G__28669));
});})(vec__28658,k,v,r_QMARK_,k__$1))
,cljs.core.array_seq([v], 0))):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,k__$1,v], null)], null)
)),(function (){var G__28670 = schema;
var G__28671 = entity_id;
var G__28672 = cljs.core.rest(pull_map);
return (posh.lib.pull_analyze.tx_datoms_for_pull_map.cljs$core$IFn$_invoke$arity$3 ? posh.lib.pull_analyze.tx_datoms_for_pull_map.cljs$core$IFn$_invoke$arity$3(G__28670,G__28671,G__28672) : posh.lib.pull_analyze.tx_datoms_for_pull_map.call(null,G__28670,G__28671,G__28672));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(posh.lib.pull_analyze.cardinality_many_QMARK_(schema,k__$1))?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (vec__28658,k,v,r_QMARK_,k__$1){
return (function (p1__28639_SHARP_){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,k__$1,p1__28639_SHARP_], null)],null));
});})(vec__28658,k,v,r_QMARK_,k__$1))
,cljs.core.array_seq([v], 0)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,k__$1,v], null)], null)),(function (){var G__28673 = schema;
var G__28674 = entity_id;
var G__28675 = cljs.core.rest(pull_map);
return (posh.lib.pull_analyze.tx_datoms_for_pull_map.cljs$core$IFn$_invoke$arity$3 ? posh.lib.pull_analyze.tx_datoms_for_pull_map.cljs$core$IFn$_invoke$arity$3(G__28673,G__28674,G__28675) : posh.lib.pull_analyze.tx_datoms_for_pull_map.call(null,G__28673,G__28674,G__28675));
})());

}
}
}
});
posh.lib.pull_analyze.generate_affected_tx_datoms_for_pull = (function posh$lib$pull_analyze$generate_affected_tx_datoms_for_pull(schema,affected_pull){
return posh.lib.pull_analyze.tx_datoms_for_pull_map(schema,cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(affected_pull),affected_pull);
});
posh.lib.pull_analyze.limit_spec_QMARK_ = (function posh$lib$pull_analyze$limit_spec_QMARK_(x){
var and__7073__auto__ = cljs.core.seq_QMARK_(x);
if(and__7073__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$limit,null,"limit",null], null), null).call(null,cljs.core.first(x));
} else {
return and__7073__auto__;
}
});
posh.lib.pull_analyze.limit_attr = (function posh$lib$pull_analyze$limit_attr(limit_spec){
return cljs.core.second(limit_spec);
});
posh.lib.pull_analyze.remove_limits = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.walk.postwalk,(function (x){
if(cljs.core.truth_(posh.lib.pull_analyze.limit_spec_QMARK_(x))){
return posh.lib.pull_analyze.limit_attr(x);
} else {
return x;
}
}));
posh.lib.pull_analyze.recursive_val_QMARK_ = (function posh$lib$pull_analyze$recursive_val_QMARK_(v){
return (typeof v === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$sym$$$$));
});
posh.lib.pull_analyze.tx_pattern_for_pull = (function posh$lib$pull_analyze$tx_pattern_for_pull(schema,pull_pattern,affected_pull,refs_only_QMARK_){
var entity_keys = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__28676_SHARP_){
return (cljs.core.map_QMARK_(p1__28676_SHARP_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db_SLASH_id,p1__28676_SHARP_));
}),pull_pattern);
var val_keys = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (entity_keys){
return (function (p1__28677_SHARP_){
var or__7085__auto__ = posh.lib.pull_analyze.reverse_lookup_QMARK_(p1__28677_SHARP_);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return posh.lib.pull_analyze.ref_QMARK_(schema,p1__28677_SHARP_);
}
});})(entity_keys))
,entity_keys);
var ref_keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (entity_keys,val_keys){
return (function (k){
return cljs.core.PersistentArrayMap.fromArray([k,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id], null)], true, false);
});})(entity_keys,val_keys))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(val_keys),entity_keys));
var starred_QMARK_ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_STAR_,null], null), null),val_keys);
var pull_maps = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(ref_keys,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,pull_pattern)));
if(cljs.core.truth_(cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(affected_pull))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.not((function (){var or__7085__auto__ = refs_only_QMARK_;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return cljs.core.empty_QMARK_(val_keys);
}
})()))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(affected_pull),(cljs.core.truth_(starred_QMARK_)?cljs.core.cst$sym$_:cljs.core.set(val_keys)),cljs.core.cst$sym$_], null)], null):null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (entity_keys,val_keys,ref_keys,starred_QMARK_,pull_maps){
return (function (p__28687){
var vec__28688 = p__28687;
var ref_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28688,(0),null);
var ref_pull = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28688,(1),null);
var r_QMARK_ = posh.lib.pull_analyze.reverse_lookup_QMARK_(ref_key);
var unrev_key = (cljs.core.truth_(r_QMARK_)?posh.lib.pull_analyze.reverse_lookup(ref_key):ref_key);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(r_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,unrev_key,cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(affected_pull)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(affected_pull),ref_key,cljs.core.cst$sym$_], null)], null)),(cljs.core.truth_(posh.lib.pull_analyze.recursive_val_QMARK_(ref_pull))?(cljs.core.truth_((ref_key.cljs$core$IFn$_invoke$arity$1 ? ref_key.cljs$core$IFn$_invoke$arity$1(affected_pull) : ref_key.call(null,affected_pull)))?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (r_QMARK_,unrev_key,vec__28688,ref_key,ref_pull,entity_keys,val_keys,ref_keys,starred_QMARK_,pull_maps){
return (function (p1__28678_SHARP_){
return (posh.lib.pull_analyze.tx_pattern_for_pull.cljs$core$IFn$_invoke$arity$4 ? posh.lib.pull_analyze.tx_pattern_for_pull.cljs$core$IFn$_invoke$arity$4(schema,pull_pattern,p1__28678_SHARP_,refs_only_QMARK_) : posh.lib.pull_analyze.tx_pattern_for_pull.call(null,schema,pull_pattern,p1__28678_SHARP_,refs_only_QMARK_));
});})(r_QMARK_,unrev_key,vec__28688,ref_key,ref_pull,entity_keys,val_keys,ref_keys,starred_QMARK_,pull_maps))
,cljs.core.array_seq([(ref_key.cljs$core$IFn$_invoke$arity$1 ? ref_key.cljs$core$IFn$_invoke$arity$1(affected_pull) : ref_key.call(null,affected_pull))], 0)):null):(cljs.core.truth_((function (){var or__7085__auto__ = r_QMARK_;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return posh.lib.pull_analyze.cardinality_many_QMARK_(schema,unrev_key);
}
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (r_QMARK_,unrev_key,vec__28688,ref_key,ref_pull,entity_keys,val_keys,ref_keys,starred_QMARK_,pull_maps){
return (function (p1__28679_SHARP_){
return (posh.lib.pull_analyze.tx_pattern_for_pull.cljs$core$IFn$_invoke$arity$4 ? posh.lib.pull_analyze.tx_pattern_for_pull.cljs$core$IFn$_invoke$arity$4(schema,ref_pull,p1__28679_SHARP_,refs_only_QMARK_) : posh.lib.pull_analyze.tx_pattern_for_pull.call(null,schema,ref_pull,p1__28679_SHARP_,refs_only_QMARK_));
});})(r_QMARK_,unrev_key,vec__28688,ref_key,ref_pull,entity_keys,val_keys,ref_keys,starred_QMARK_,pull_maps))
,cljs.core.array_seq([(ref_key.cljs$core$IFn$_invoke$arity$1 ? ref_key.cljs$core$IFn$_invoke$arity$1(affected_pull) : ref_key.call(null,affected_pull))], 0)):(function (){var G__28691 = schema;
var G__28692 = ref_pull;
var G__28693 = (ref_key.cljs$core$IFn$_invoke$arity$2 ? ref_key.cljs$core$IFn$_invoke$arity$2(affected_pull,refs_only_QMARK_) : ref_key.call(null,affected_pull,refs_only_QMARK_));
return (posh.lib.pull_analyze.tx_pattern_for_pull.cljs$core$IFn$_invoke$arity$3 ? posh.lib.pull_analyze.tx_pattern_for_pull.cljs$core$IFn$_invoke$arity$3(G__28691,G__28692,G__28693) : posh.lib.pull_analyze.tx_pattern_for_pull.call(null,G__28691,G__28692,G__28693));
})()
)));
});})(entity_keys,val_keys,ref_keys,starred_QMARK_,pull_maps))
,cljs.core.array_seq([pull_maps], 0)));
} else {
return null;
}
});
posh.lib.pull_analyze.pull_analyze = (function posh$lib$pull_analyze$pull_analyze(dcfg,retrieve,p__28694,pull_pattern,ent_id){
var map__28697 = p__28694;
var map__28697__$1 = ((((!((map__28697 == null)))?((((map__28697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28697.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28697):map__28697);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28697__$1,cljs.core.cst$kw$db);
var db_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28697__$1,cljs.core.cst$kw$db_DASH_id);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28697__$1,cljs.core.cst$kw$schema);
if(cljs.core.empty_QMARK_(retrieve)){
return null;
} else {
var affected_datoms = posh.lib.pull_analyze.pull_affected_datoms(cljs.core.cst$kw$pull.cljs$core$IFn$_invoke$arity$1(dcfg),db,pull_pattern,cljs.core.cst$kw$entid.cljs$core$IFn$_invoke$arity$1(dcfg).call(null,db,ent_id));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$results,null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$results,affected_datoms], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$datoms_DASH_t,null,cljs.core.cst$kw$datoms,null], null), null),retrieve))?(function (){var datoms = posh.lib.pull_analyze.generate_affected_tx_datoms_for_pull(schema,affected_datoms);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$datoms,null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$datoms,cljs.core.PersistentArrayMap.fromArray([db_id,datoms], true, false)], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$datoms_DASH_t,null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$datoms_DASH_t,cljs.core.PersistentArrayMap.fromArray([db_id,posh.lib.util.t_for_datoms(cljs.core.cst$kw$q.cljs$core$IFn$_invoke$arity$1(dcfg),db,datoms)], true, false)], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ref_DASH_patterns,null,cljs.core.cst$kw$patterns,null], null), null),retrieve))?(function (){var prepped_pull_pattern = posh.lib.pull_analyze.insert_dbid((posh.lib.pull_analyze.remove_limits.cljs$core$IFn$_invoke$arity$1 ? posh.lib.pull_analyze.remove_limits.cljs$core$IFn$_invoke$arity$1(pull_pattern) : posh.lib.pull_analyze.remove_limits.call(null,pull_pattern)));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$patterns,null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$patterns,cljs.core.PersistentArrayMap.fromArray([db_id,posh.lib.datom_matcher.reduce_patterns(posh.lib.pull_analyze.tx_pattern_for_pull(schema,prepped_pull_pattern,affected_datoms,false))], true, false)], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref_DASH_patterns,null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref_DASH_patterns,cljs.core.PersistentArrayMap.fromArray([db_id,posh.lib.datom_matcher.reduce_patterns(posh.lib.pull_analyze.tx_pattern_for_pull(schema,prepped_pull_pattern,affected_datoms,true))], true, false)], null):null)], 0));
})():null)], 0));
}
});
posh.lib.pull_analyze.pull_many_analyze = (function posh$lib$pull_analyze$pull_many_analyze(dcfg,retrieve,p__28702,pull_pattern,ent_ids){
var map__28705 = p__28702;
var map__28705__$1 = ((((!((map__28705 == null)))?((((map__28705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28705.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28705):map__28705);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28705__$1,cljs.core.cst$kw$db);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28705__$1,cljs.core.cst$kw$schema);
var db_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28705__$1,cljs.core.cst$kw$db_DASH_id);
if(cljs.core.empty_QMARK_(retrieve)){
return null;
} else {
var resolved_ent_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__28705,map__28705__$1,db,schema,db_id){
return (function (p1__28699_SHARP_){
return cljs.core.cst$kw$entid.cljs$core$IFn$_invoke$arity$1(dcfg).call(null,db,p1__28699_SHARP_);
});})(map__28705,map__28705__$1,db,schema,db_id))
,ent_ids);
var affected_datoms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (resolved_ent_ids,map__28705,map__28705__$1,db,schema,db_id){
return (function (ent_id){
return posh.lib.pull_analyze.pull_affected_datoms(cljs.core.cst$kw$pull.cljs$core$IFn$_invoke$arity$1(dcfg),db,pull_pattern,ent_id);
});})(resolved_ent_ids,map__28705,map__28705__$1,db,schema,db_id))
,resolved_ent_ids);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$results,null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$results,affected_datoms], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$datoms_DASH_t,null,cljs.core.cst$kw$datoms,null], null), null),retrieve))?(function (){var datoms = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (resolved_ent_ids,affected_datoms,map__28705,map__28705__$1,db,schema,db_id){
return (function (p1__28700_SHARP_){
return posh.lib.pull_analyze.generate_affected_tx_datoms_for_pull(schema,p1__28700_SHARP_);
});})(resolved_ent_ids,affected_datoms,map__28705,map__28705__$1,db,schema,db_id))
,cljs.core.array_seq([affected_datoms], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$datoms,null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$datoms,cljs.core.PersistentArrayMap.fromArray([db_id,datoms], true, false)], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$datoms_DASH_t,null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$datoms_DASH_t,cljs.core.PersistentArrayMap.fromArray([db_id,posh.lib.util.t_for_datoms(cljs.core.cst$kw$q.cljs$core$IFn$_invoke$arity$1(dcfg),db,datoms)], true, false)], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$patterns,null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$patterns,cljs.core.PersistentArrayMap.fromArray([db_id,(function (){var patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (resolved_ent_ids,affected_datoms,map__28705,map__28705__$1,db,schema,db_id){
return (function (p1__28701_SHARP_){
return posh.lib.pull_analyze.tx_pattern_for_pull(schema,posh.lib.pull_analyze.insert_dbid((posh.lib.pull_analyze.remove_limits.cljs$core$IFn$_invoke$arity$1 ? posh.lib.pull_analyze.remove_limits.cljs$core$IFn$_invoke$arity$1(pull_pattern) : posh.lib.pull_analyze.remove_limits.call(null,pull_pattern))),p1__28701_SHARP_,false);
});})(resolved_ent_ids,affected_datoms,map__28705,map__28705__$1,db,schema,db_id))
,affected_datoms);
cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.set(resolved_ent_ids),cljs.core.rest(cljs.core.ffirst(patterns)))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.rest,cljs.core.array_seq([patterns], 0)));

return posh.lib.datom_matcher.reduce_patterns(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,patterns));
})()], true, false)], null):null)], 0));
}
});
