// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('algopop.leaderboardx.app.db');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('devcards.core');
goog.require('posh.reagent');
goog.require('algopop.leaderboardx.app.pagerank');
goog.require('reagent.ratom');
goog.require('datascript.core');
goog.require('datascript.db');
if(typeof algopop.leaderboardx.app.db.schema !== 'undefined'){
} else {
algopop.leaderboardx.app.db.schema = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$assessment_DASH_type_SLASH_name,cljs.core.cst$kw$assessment_SLASH_assessor,cljs.core.cst$kw$assessment_SLASH_date,cljs.core.cst$kw$assessee_SLASH_group,cljs.core.cst$kw$group_SLASH_name,cljs.core.cst$kw$user_SLASH_password,cljs.core.cst$kw$edge_SLASH_name,cljs.core.cst$kw$assessee_SLASH_name,cljs.core.cst$kw$assessment_SLASH_type,cljs.core.cst$kw$user_SLASH_status,cljs.core.cst$kw$group_SLASH_organization,cljs.core.cst$kw$organization_SLASH_administrator,cljs.core.cst$kw$from,cljs.core.cst$kw$assessment_SLASH_status,cljs.core.cst$kw$assessee_SLASH_tag,cljs.core.cst$kw$user_SLASH_email,cljs.core.cst$kw$tag_SLASH_name,cljs.core.cst$kw$assessment_SLASH_duration_DASH_minutes,cljs.core.cst$kw$assessment_SLASH_assessee,cljs.core.cst$kw$assessment_DASH_type_SLASH_attribute,cljs.core.cst$kw$organization_SLASH_name,cljs.core.cst$kw$to,cljs.core.cst$kw$dom_SLASH_child],[new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_index,true], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_valueType,cljs.core.cst$kw$db$type_SLASH_ref], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db_SLASH_cardinality,cljs.core.cst$kw$db$cardinality_SLASH_many,cljs.core.cst$kw$db_SLASH_valueType,cljs.core.cst$kw$db$type_SLASH_ref], null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_index,true], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_valueType,cljs.core.cst$kw$db$type_SLASH_ref], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_valueType,cljs.core.cst$kw$db$type_SLASH_ref], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_valueType,cljs.core.cst$kw$db$type_SLASH_ref], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db_SLASH_cardinality,cljs.core.cst$kw$db$cardinality_SLASH_many,cljs.core.cst$kw$db_SLASH_valueType,cljs.core.cst$kw$db$type_SLASH_ref], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_valueType,cljs.core.cst$kw$db$type_SLASH_ref], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_valueType,cljs.core.cst$kw$db$type_SLASH_ref], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db_SLASH_cardinality,cljs.core.cst$kw$db$cardinality_SLASH_many,cljs.core.cst$kw$db_SLASH_valueType,cljs.core.cst$kw$db$type_SLASH_ref], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_index,true], null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_valueType,cljs.core.cst$kw$db$type_SLASH_ref], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db_SLASH_cardinality,cljs.core.cst$kw$db$cardinality_SLASH_many,cljs.core.cst$kw$db_SLASH_valueType,cljs.core.cst$kw$db$type_SLASH_ref], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_index,true], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_valueType,cljs.core.cst$kw$db$type_SLASH_ref], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db_SLASH_cardinality,cljs.core.cst$kw$db$cardinality_SLASH_many,cljs.core.cst$kw$db_SLASH_valueType,cljs.core.cst$kw$db$type_SLASH_ref,cljs.core.cst$kw$db_SLASH_isComponent,true], null)]);
}
if(typeof algopop.leaderboardx.app.db.conn !== 'undefined'){
} else {
algopop.leaderboardx.app.db.conn = (function (){var G__35641 = datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(algopop.leaderboardx.app.db.schema);
posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([G__35641], 0));

return G__35641;
})();
}
algopop.leaderboardx.app.db.add_assessment = (function algopop$leaderboardx$app$db$add_assessment(coach,player,attrs){
return posh.reagent.transact_BANG_(algopop.leaderboardx.app.db.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$coach,coach,cljs.core.cst$kw$player,player,cljs.core.cst$kw$attrs,attrs], null)], null));
});
if(typeof algopop.leaderboardx.app.db.seed !== 'undefined'){
} else {
algopop.leaderboardx.app.db.seed = (function (){
posh.reagent.transact_BANG_(algopop.leaderboardx.app.db.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"William",cljs.core.cst$kw$somedata,"something about William"], null)], null));

return algopop.leaderboardx.app.db.add_assessment("Coach","William",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$producivity,(7)], null));
})()
;
}
algopop.leaderboardx.app.db.q_player = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$sym$_QMARK_s,cljs.core.cst$sym$_QMARK_attrs,cljs.core.list(cljs.core.cst$sym$pull,cljs.core.cst$sym$_QMARK_e,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null)),cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_a,cljs.core.cst$kw$coach,"Coach"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_a,cljs.core.cst$kw$player,"William"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_a,cljs.core.cst$kw$attrs,cljs.core.cst$sym$_QMARK_attrs], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$kw$name,"William"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$kw$somedata,cljs.core.cst$sym$_QMARK_s], null)], null);
algopop.leaderboardx.app.db.player = (function algopop$leaderboardx$app$db$player(){
return posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic(algopop.leaderboardx.app.db.q_player,cljs.core.array_seq([algopop.leaderboardx.app.db.conn], 0));
});
algopop.leaderboardx.app.db.q_ac = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.list(cljs.core.cst$sym$pull,cljs.core.cst$sym$_QMARK_e,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null)),cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_template,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_e,cljs.core.cst$kw$assessment_DASH_template_SLASH_name,cljs.core.cst$sym$_QMARK_template], null)], null);
algopop.leaderboardx.app.db.assessment_components = (function algopop$leaderboardx$app$db$assessment_components(name){
return posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic(algopop.leaderboardx.app.db.q_ac,cljs.core.array_seq([algopop.leaderboardx.app.db.conn,name], 0));
});
algopop.leaderboardx.app.db.q_ac2 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.list(cljs.core.cst$sym$pull,cljs.core.cst$sym$_QMARK_e,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null)),cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_template,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_e,cljs.core.cst$kw$dom_SLASH_value,cljs.core.cst$sym$_QMARK_template], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_e,cljs.core.cst$kw$dom_SLASH_tag,"template"], null)], null);
algopop.leaderboardx.app.db.ac2 = (function algopop$leaderboardx$app$db$ac2(template){
return posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic(algopop.leaderboardx.app.db.q_ac2,cljs.core.array_seq([algopop.leaderboardx.app.db.conn,template], 0));
});
algopop.leaderboardx.app.db.assess = (function algopop$leaderboardx$app$db$assess(ol){
var iter__7942__auto__ = (function algopop$leaderboardx$app$db$assess_$_iter__35648(s__35649){
return (new cljs.core.LazySeq(null,(function (){
var s__35649__$1 = s__35649;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__35649__$1);
if(temp__6753__auto__){
var s__35649__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35649__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__35649__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__35651 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__35650 = (0);
while(true){
if((i__35650 < size__7941__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__35650);
cljs.core.chunk_append(b__35651,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$order,i,cljs.core.cst$kw$line,(ol.cljs$core$IFn$_invoke$arity$1 ? ol.cljs$core$IFn$_invoke$arity$1(i) : ol.call(null,i))], null));

var G__35654 = (i__35650 + (1));
i__35650 = G__35654;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35651),algopop$leaderboardx$app$db$assess_$_iter__35648(cljs.core.chunk_rest(s__35649__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35651),null);
}
} else {
var i = cljs.core.first(s__35649__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$order,i,cljs.core.cst$kw$line,(ol.cljs$core$IFn$_invoke$arity$1 ? ol.cljs$core$IFn$_invoke$arity$1(i) : ol.call(null,i))], null),algopop$leaderboardx$app$db$assess_$_iter__35648(cljs.core.rest(s__35649__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7942__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ol)));
});
algopop.leaderboardx.app.db.rank_entities = (function algopop$leaderboardx$app$db$rank_entities(ranks){
var iter__7942__auto__ = (function algopop$leaderboardx$app$db$rank_entities_$_iter__35673(s__35674){
return (new cljs.core.LazySeq(null,(function (){
var s__35674__$1 = s__35674;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__35674__$1);
if(temp__6753__auto__){
var s__35674__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35674__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__35674__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__35676 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__35675 = (0);
while(true){
if((i__35675 < size__7941__auto__)){
var vec__35685 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__35675);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35685,(0),null);
var pagerank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35685,(1),null);
var rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35685,(2),null);
cljs.core.chunk_append(b__35676,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db_SLASH_id,id,cljs.core.cst$kw$rank,rank,cljs.core.cst$kw$pagerank,pagerank], null));

var G__35691 = (i__35675 + (1));
i__35675 = G__35691;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35676),algopop$leaderboardx$app$db$rank_entities_$_iter__35673(cljs.core.chunk_rest(s__35674__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35676),null);
}
} else {
var vec__35688 = cljs.core.first(s__35674__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35688,(0),null);
var pagerank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35688,(1),null);
var rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35688,(2),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db_SLASH_id,id,cljs.core.cst$kw$rank,rank,cljs.core.cst$kw$pagerank,pagerank], null),algopop$leaderboardx$app$db$rank_entities_$_iter__35673(cljs.core.rest(s__35674__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7942__auto__(ranks);
});
algopop.leaderboardx.app.db.node_q = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$$$$], null),cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_name,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$kw$node_SLASH_name,cljs.core.cst$sym$_QMARK_name], null)], null);
algopop.leaderboardx.app.db.get_node_by_name = (function algopop$leaderboardx$app$db$get_node_by_name(var_args){
var args35692 = [];
var len__8301__auto___35698 = arguments.length;
var i__8302__auto___35699 = (0);
while(true){
if((i__8302__auto___35699 < len__8301__auto___35698)){
args35692.push((arguments[i__8302__auto___35699]));

var G__35700 = (i__8302__auto___35699 + (1));
i__8302__auto___35699 = G__35700;
continue;
} else {
}
break;
}

var G__35694 = args35692.length;
switch (G__35694) {
case 1:
return algopop.leaderboardx.app.db.get_node_by_name.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return algopop.leaderboardx.app.db.get_node_by_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35692.length)].join('')));

}
});

algopop.leaderboardx.app.db.get_node_by_name.cljs$core$IFn$_invoke$arity$1 = (function (node_name){
return cljs.core.first((function (){var G__35695 = algopop.leaderboardx.app.db.node_q;
var G__35696 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(algopop.leaderboardx.app.db.conn) : cljs.core.deref.call(null,algopop.leaderboardx.app.db.conn));
var G__35697 = node_name;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__35695,G__35696,G__35697) : datascript.core.q.call(null,G__35695,G__35696,G__35697));
})());
});

algopop.leaderboardx.app.db.get_node_by_name.cljs$core$IFn$_invoke$arity$2 = (function (node_name,default$){
var or__7085__auto__ = algopop.leaderboardx.app.db.get_node_by_name.cljs$core$IFn$_invoke$arity$1(node_name);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return default$;
}
});

algopop.leaderboardx.app.db.get_node_by_name.cljs$lang$maxFixedArity = 2;

algopop.leaderboardx.app.db.p = (function algopop$leaderboardx$app$db$p(id){
return posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(algopop.leaderboardx.app.db.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),id);
});
algopop.leaderboardx.app.db.nodes_q = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$$$$], null),cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$kw$node_SLASH_name,cljs.core.cst$sym$_QMARK_name], null)], null);
algopop.leaderboardx.app.db.edges_q = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$sym$$$$], null),cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$kw$from,cljs.core.cst$sym$_QMARK_from], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$kw$to,cljs.core.cst$sym$_QMARK_to], null)], null);
algopop.leaderboardx.app.db.set_ranks_BANG_ = (function algopop$leaderboardx$app$db$set_ranks_BANG_(){
var node_ids = (function (){var G__35709 = algopop.leaderboardx.app.db.nodes_q;
var G__35710 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(algopop.leaderboardx.app.db.conn) : cljs.core.deref.call(null,algopop.leaderboardx.app.db.conn));
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__35709,G__35710) : datascript.core.q.call(null,G__35709,G__35710));
})();
var es = (function (){var G__35711 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(algopop.leaderboardx.app.db.conn) : cljs.core.deref.call(null,algopop.leaderboardx.app.db.conn));
var G__35712 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null);
var G__35713 = (function (){var G__35714 = algopop.leaderboardx.app.db.edges_q;
var G__35715 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(algopop.leaderboardx.app.db.conn) : cljs.core.deref.call(null,algopop.leaderboardx.app.db.conn));
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__35714,G__35715) : datascript.core.q.call(null,G__35714,G__35715));
})();
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__35711,G__35712,G__35713) : datascript.core.pull_many.call(null,G__35711,G__35712,G__35713));
})();
return posh.reagent.transact_BANG_(algopop.leaderboardx.app.db.conn,algopop.leaderboardx.app.db.rank_entities(algopop.leaderboardx.app.pagerank.ranks(node_ids,es)));
});
algopop.leaderboardx.app.db.add_node = (function algopop$leaderboardx$app$db$add_node(name){
posh.reagent.transact_BANG_(algopop.leaderboardx.app.db.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$node_SLASH_name,name], null)], null));

return algopop.leaderboardx.app.db.set_ranks_BANG_();
});
algopop.leaderboardx.app.db.pull_q = (function algopop$leaderboardx$app$db$pull_q(var_args){
var args35716 = [];
var len__8301__auto___35734 = arguments.length;
var i__8302__auto___35735 = (0);
while(true){
if((i__8302__auto___35735 < len__8301__auto___35734)){
args35716.push((arguments[i__8302__auto___35735]));

var G__35736 = (i__8302__auto___35735 + (1));
i__8302__auto___35735 = G__35736;
continue;
} else {
}
break;
}

var G__35722 = args35716.length;
switch (G__35722) {
case 2:
return algopop.leaderboardx.app.db.pull_q.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8324__auto__ = (new cljs.core.IndexedSeq(args35716.slice((3)),(0),null));
return algopop.leaderboardx.app.db.pull_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8324__auto__);

}
});

algopop.leaderboardx.app.db.pull_q.cljs$core$IFn$_invoke$arity$2 = (function (conn,query){
return algopop.leaderboardx.app.db.pull_q(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),query);
});

algopop.leaderboardx.app.db.pull_q.cljs$core$IFn$_invoke$arity$variadic = (function (conn,pattern,query,args){
return reagent.ratom.make_reaction((function (){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__7942__auto__ = (function algopop$leaderboardx$app$db$iter__35723(s__35724){
return (new cljs.core.LazySeq(null,(function (){
var s__35724__$1 = s__35724;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__35724__$1);
if(temp__6753__auto__){
var s__35724__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35724__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__35724__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__35726 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__35725 = (0);
while(true){
if((i__35725 < size__7941__auto__)){
var e = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__35725);
cljs.core.chunk_append(b__35726,(function (){var G__35731 = posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(conn,pattern,e);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35731) : cljs.core.deref.call(null,G__35731));
})());

var G__35738 = (i__35725 + (1));
i__35725 = G__35738;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35726),algopop$leaderboardx$app$db$iter__35723(cljs.core.chunk_rest(s__35724__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35726),null);
}
} else {
var e = cljs.core.first(s__35724__$2);
return cljs.core.cons((function (){var G__35732 = posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(conn,pattern,e);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35732) : cljs.core.deref.call(null,G__35732));
})(),algopop$leaderboardx$app$db$iter__35723(cljs.core.rest(s__35724__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7942__auto__((function (){var G__35733 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(posh.reagent.q,query,conn,args);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35733) : cljs.core.deref.call(null,G__35733));
})());
})());
}));
});

algopop.leaderboardx.app.db.pull_q.cljs$lang$applyTo = (function (seq35717){
var G__35718 = cljs.core.first(seq35717);
var seq35717__$1 = cljs.core.next(seq35717);
var G__35719 = cljs.core.first(seq35717__$1);
var seq35717__$2 = cljs.core.next(seq35717__$1);
var G__35720 = cljs.core.first(seq35717__$2);
var seq35717__$3 = cljs.core.next(seq35717__$2);
return algopop.leaderboardx.app.db.pull_q.cljs$core$IFn$_invoke$arity$variadic(G__35718,G__35719,G__35720,seq35717__$3);
});

algopop.leaderboardx.app.db.pull_q.cljs$lang$maxFixedArity = (3);

algopop.leaderboardx.app.db.watch_nodes = (function algopop$leaderboardx$app$db$watch_nodes(){
return algopop.leaderboardx.app.db.pull_q.cljs$core$IFn$_invoke$arity$2(algopop.leaderboardx.app.db.conn,algopop.leaderboardx.app.db.nodes_q);
});
algopop.leaderboardx.app.db.watch_edges = (function algopop$leaderboardx$app$db$watch_edges(){
return algopop.leaderboardx.app.db.pull_q.cljs$core$IFn$_invoke$arity$2(algopop.leaderboardx.app.db.conn,algopop.leaderboardx.app.db.edges_q);
});
algopop.leaderboardx.app.db.update_nodes = (function algopop$leaderboardx$app$db$update_nodes(nodes){
return posh.reagent.transact_BANG_(algopop.leaderboardx.app.db.conn,nodes);
});
algopop.leaderboardx.app.db.get_out_edges = (function algopop$leaderboardx$app$db$get_out_edges(id){
var G__35740 = posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$sym$_QMARK_edge,cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_node,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_edge,cljs.core.cst$kw$from,cljs.core.cst$sym$_QMARK_node], null)], null),cljs.core.array_seq([algopop.leaderboardx.app.db.conn,id], 0));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35740) : cljs.core.deref.call(null,G__35740));
});
algopop.leaderboardx.app.db.get_in_edges = (function algopop$leaderboardx$app$db$get_in_edges(id){
var G__35742 = posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$sym$_QMARK_edge,cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_node,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_edge,cljs.core.cst$kw$to,cljs.core.cst$sym$_QMARK_node], null)], null),cljs.core.array_seq([algopop.leaderboardx.app.db.conn,id], 0));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35742) : cljs.core.deref.call(null,G__35742));
});
algopop.leaderboardx.app.db.rename_node = (function algopop$leaderboardx$app$db$rename_node(id,new_name){
var map__35781 = algopop.leaderboardx.app.db.p(id);
var map__35781__$1 = ((((!((map__35781 == null)))?((((map__35781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35781.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35781):map__35781);
var node = map__35781__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35781__$1,cljs.core.cst$kw$node_SLASH_name);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_name,name)){
var temp__6751__auto__ = algopop.leaderboardx.app.db.get_node_by_name.cljs$core$IFn$_invoke$arity$1(new_name);
if(cljs.core.truth_(temp__6751__auto__)){
var existing = temp__6751__auto__;
var outs = algopop.leaderboardx.app.db.get_out_edges(id);
var ins = algopop.leaderboardx.app.db.get_in_edges(id);
return algopop.leaderboardx.app.db.update_nodes(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db$fn_SLASH_retractEntity,id], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$db_SLASH_id,existing)], null),(function (){var iter__7942__auto__ = ((function (outs,ins,existing,temp__6751__auto__,map__35781,map__35781__$1,node,name){
return (function algopop$leaderboardx$app$db$rename_node_$_iter__35783(s__35784){
return (new cljs.core.LazySeq(null,((function (outs,ins,existing,temp__6751__auto__,map__35781,map__35781__$1,node,name){
return (function (){
var s__35784__$1 = s__35784;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__35784__$1);
if(temp__6753__auto__){
var s__35784__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35784__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__35784__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__35786 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__35785 = (0);
while(true){
if((i__35785 < size__7941__auto__)){
var vec__35795 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__35785);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35795,(0),null);
cljs.core.chunk_append(b__35786,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db_SLASH_id,out,cljs.core.cst$kw$from,existing], null));

var G__35819 = (i__35785 + (1));
i__35785 = G__35819;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35786),algopop$leaderboardx$app$db$rename_node_$_iter__35783(cljs.core.chunk_rest(s__35784__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35786),null);
}
} else {
var vec__35798 = cljs.core.first(s__35784__$2);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35798,(0),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db_SLASH_id,out,cljs.core.cst$kw$from,existing], null),algopop$leaderboardx$app$db$rename_node_$_iter__35783(cljs.core.rest(s__35784__$2)));
}
} else {
return null;
}
break;
}
});})(outs,ins,existing,temp__6751__auto__,map__35781,map__35781__$1,node,name))
,null,null));
});})(outs,ins,existing,temp__6751__auto__,map__35781,map__35781__$1,node,name))
;
return iter__7942__auto__(outs);
})(),cljs.core.array_seq([(function (){var iter__7942__auto__ = ((function (outs,ins,existing,temp__6751__auto__,map__35781,map__35781__$1,node,name){
return (function algopop$leaderboardx$app$db$rename_node_$_iter__35801(s__35802){
return (new cljs.core.LazySeq(null,((function (outs,ins,existing,temp__6751__auto__,map__35781,map__35781__$1,node,name){
return (function (){
var s__35802__$1 = s__35802;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__35802__$1);
if(temp__6753__auto__){
var s__35802__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35802__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__35802__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__35804 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__35803 = (0);
while(true){
if((i__35803 < size__7941__auto__)){
var vec__35813 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__35803);
var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35813,(0),null);
cljs.core.chunk_append(b__35804,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db_SLASH_id,in$,cljs.core.cst$kw$to,existing], null));

var G__35820 = (i__35803 + (1));
i__35803 = G__35820;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35804),algopop$leaderboardx$app$db$rename_node_$_iter__35801(cljs.core.chunk_rest(s__35802__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35804),null);
}
} else {
var vec__35816 = cljs.core.first(s__35802__$2);
var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35816,(0),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db_SLASH_id,in$,cljs.core.cst$kw$to,existing], null),algopop$leaderboardx$app$db$rename_node_$_iter__35801(cljs.core.rest(s__35802__$2)));
}
} else {
return null;
}
break;
}
});})(outs,ins,existing,temp__6751__auto__,map__35781,map__35781__$1,node,name))
,null,null));
});})(outs,ins,existing,temp__6751__auto__,map__35781,map__35781__$1,node,name))
;
return iter__7942__auto__(ins);
})()], 0)));
} else {
return algopop.leaderboardx.app.db.update_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db_SLASH_id,id,cljs.core.cst$kw$node_SLASH_name,new_name], null)], null));
}
} else {
return null;
}
});
algopop.leaderboardx.app.db.edge_tx = (function algopop$leaderboardx$app$db$edge_tx(edge_id,from,to){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$db_SLASH_id,edge_id,cljs.core.cst$kw$edge_SLASH_name,[cljs.core.str((function (){var G__35827 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(algopop.leaderboardx.app.db.conn) : cljs.core.deref.call(null,algopop.leaderboardx.app.db.conn));
var G__35828 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name_SLASH_name], null);
var G__35829 = from;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__35827,G__35828,G__35829) : datascript.core.pull.call(null,G__35827,G__35828,G__35829));
})()),cljs.core.str(" to "),cljs.core.str((function (){var G__35830 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(algopop.leaderboardx.app.db.conn) : cljs.core.deref.call(null,algopop.leaderboardx.app.db.conn));
var G__35831 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name_SLASH_name], null);
var G__35832 = to;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__35830,G__35831,G__35832) : datascript.core.pull.call(null,G__35830,G__35831,G__35832));
})())].join(''),cljs.core.cst$kw$from,from,cljs.core.cst$kw$to,to], null);
});
algopop.leaderboardx.app.db.add_edge = (function algopop$leaderboardx$app$db$add_edge(from,to){
posh.reagent.transact_BANG_(algopop.leaderboardx.app.db.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.db.edge_tx((-1),from,to)], null));

return algopop.leaderboardx.app.db.set_ranks_BANG_();
});
algopop.leaderboardx.app.db.invert_edge = (function algopop$leaderboardx$app$db$invert_edge(id){
return posh.reagent.transact_BANG_(algopop.leaderboardx.app.db.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db_SLASH_id,id,cljs.core.cst$kw$weight,(300)], null)], null));
});
algopop.leaderboardx.app.db.replace_edges_entities = (function algopop$leaderboardx$app$db$replace_edges_entities(node_name,outs,ins){
var node_id = algopop.leaderboardx.app.db.get_node_by_name.cljs$core$IFn$_invoke$arity$2(node_name,(-1));
var out_count = cljs.core.count(outs);
var in_count = cljs.core.count(ins);
var outs_start = (-2);
var out_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$3(algopop.leaderboardx.app.db.get_node_by_name,outs,cljs.core.iterate(cljs.core.dec,outs_start));
var ins_start = (outs_start - out_count);
var in_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$3(algopop.leaderboardx.app.db.get_node_by_name,ins,cljs.core.iterate(cljs.core.dec,ins_start));
var out_edges_start = (ins_start - in_count);
var out_edge_ids = cljs.core.iterate(cljs.core.dec,out_edges_start);
var in_edges_start = (out_edges_start - out_count);
var in_edge_ids = cljs.core.iterate(cljs.core.dec,in_edges_start);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db_SLASH_id,node_id,cljs.core.cst$kw$node_SLASH_name,node_name], null)], null),(function (){var iter__7942__auto__ = ((function (node_id,out_count,in_count,outs_start,out_ids,ins_start,in_ids,out_edges_start,out_edge_ids,in_edges_start,in_edge_ids){
return (function algopop$leaderboardx$app$db$replace_edges_entities_$_iter__35887(s__35888){
return (new cljs.core.LazySeq(null,((function (node_id,out_count,in_count,outs_start,out_ids,ins_start,in_ids,out_edges_start,out_edge_ids,in_edges_start,in_edge_ids){
return (function (){
var s__35888__$1 = s__35888;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__35888__$1);
if(temp__6753__auto__){
var s__35888__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35888__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__35888__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__35890 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__35889 = (0);
while(true){
if((i__35889 < size__7941__auto__)){
var vec__35899 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__35889);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35899,(0),null);
var adjacent_node_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35899,(1),null);
cljs.core.chunk_append(b__35890,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db_SLASH_id,id,cljs.core.cst$kw$node_SLASH_name,adjacent_node_name], null));

var G__35941 = (i__35889 + (1));
i__35889 = G__35941;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35890),algopop$leaderboardx$app$db$replace_edges_entities_$_iter__35887(cljs.core.chunk_rest(s__35888__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35890),null);
}
} else {
var vec__35902 = cljs.core.first(s__35888__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35902,(0),null);
var adjacent_node_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35902,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db_SLASH_id,id,cljs.core.cst$kw$node_SLASH_name,adjacent_node_name], null),algopop$leaderboardx$app$db$replace_edges_entities_$_iter__35887(cljs.core.rest(s__35888__$2)));
}
} else {
return null;
}
break;
}
});})(node_id,out_count,in_count,outs_start,out_ids,ins_start,in_ids,out_edges_start,out_edge_ids,in_edges_start,in_edge_ids))
,null,null));
});})(node_id,out_count,in_count,outs_start,out_ids,ins_start,in_ids,out_edges_start,out_edge_ids,in_edges_start,in_edge_ids))
;
return iter__7942__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(out_ids,in_ids),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(outs,ins)));
})()),(function (){var iter__7942__auto__ = ((function (node_id,out_count,in_count,outs_start,out_ids,ins_start,in_ids,out_edges_start,out_edge_ids,in_edges_start,in_edge_ids){
return (function algopop$leaderboardx$app$db$replace_edges_entities_$_iter__35905(s__35906){
return (new cljs.core.LazySeq(null,((function (node_id,out_count,in_count,outs_start,out_ids,ins_start,in_ids,out_edges_start,out_edge_ids,in_edges_start,in_edge_ids){
return (function (){
var s__35906__$1 = s__35906;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__35906__$1);
if(temp__6753__auto__){
var s__35906__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35906__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__35906__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__35908 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__35907 = (0);
while(true){
if((i__35907 < size__7941__auto__)){
var vec__35917 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__35907);
var out_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35917,(0),null);
var edge_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35917,(1),null);
var adjacent_node_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35917,(2),null);
cljs.core.chunk_append(b__35908,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$db_SLASH_id,edge_id,cljs.core.cst$kw$edge_SLASH_name,[cljs.core.str(node_name),cljs.core.str(" to "),cljs.core.str(adjacent_node_name)].join(''),cljs.core.cst$kw$from,node_id,cljs.core.cst$kw$to,out_id], null));

var G__35942 = (i__35907 + (1));
i__35907 = G__35942;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35908),algopop$leaderboardx$app$db$replace_edges_entities_$_iter__35905(cljs.core.chunk_rest(s__35906__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35908),null);
}
} else {
var vec__35920 = cljs.core.first(s__35906__$2);
var out_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35920,(0),null);
var edge_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35920,(1),null);
var adjacent_node_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35920,(2),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$db_SLASH_id,edge_id,cljs.core.cst$kw$edge_SLASH_name,[cljs.core.str(node_name),cljs.core.str(" to "),cljs.core.str(adjacent_node_name)].join(''),cljs.core.cst$kw$from,node_id,cljs.core.cst$kw$to,out_id], null),algopop$leaderboardx$app$db$replace_edges_entities_$_iter__35905(cljs.core.rest(s__35906__$2)));
}
} else {
return null;
}
break;
}
});})(node_id,out_count,in_count,outs_start,out_ids,ins_start,in_ids,out_edges_start,out_edge_ids,in_edges_start,in_edge_ids))
,null,null));
});})(node_id,out_count,in_count,outs_start,out_ids,ins_start,in_ids,out_edges_start,out_edge_ids,in_edges_start,in_edge_ids))
;
return iter__7942__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,out_ids,out_edge_ids,outs));
})()),(function (){var iter__7942__auto__ = ((function (node_id,out_count,in_count,outs_start,out_ids,ins_start,in_ids,out_edges_start,out_edge_ids,in_edges_start,in_edge_ids){
return (function algopop$leaderboardx$app$db$replace_edges_entities_$_iter__35923(s__35924){
return (new cljs.core.LazySeq(null,((function (node_id,out_count,in_count,outs_start,out_ids,ins_start,in_ids,out_edges_start,out_edge_ids,in_edges_start,in_edge_ids){
return (function (){
var s__35924__$1 = s__35924;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__35924__$1);
if(temp__6753__auto__){
var s__35924__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35924__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__35924__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__35926 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__35925 = (0);
while(true){
if((i__35925 < size__7941__auto__)){
var vec__35935 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__35925);
var in_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35935,(0),null);
var edge_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35935,(1),null);
var adjacent_node_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35935,(2),null);
cljs.core.chunk_append(b__35926,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$db_SLASH_id,edge_id,cljs.core.cst$kw$edge_SLASH_name,[cljs.core.str(adjacent_node_name),cljs.core.str(" to "),cljs.core.str(node_name)].join(''),cljs.core.cst$kw$from,in_id,cljs.core.cst$kw$to,node_id], null));

var G__35943 = (i__35925 + (1));
i__35925 = G__35943;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35926),algopop$leaderboardx$app$db$replace_edges_entities_$_iter__35923(cljs.core.chunk_rest(s__35924__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35926),null);
}
} else {
var vec__35938 = cljs.core.first(s__35924__$2);
var in_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35938,(0),null);
var edge_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35938,(1),null);
var adjacent_node_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35938,(2),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$db_SLASH_id,edge_id,cljs.core.cst$kw$edge_SLASH_name,[cljs.core.str(adjacent_node_name),cljs.core.str(" to "),cljs.core.str(node_name)].join(''),cljs.core.cst$kw$from,in_id,cljs.core.cst$kw$to,node_id], null),algopop$leaderboardx$app$db$replace_edges_entities_$_iter__35923(cljs.core.rest(s__35924__$2)));
}
} else {
return null;
}
break;
}
});})(node_id,out_count,in_count,outs_start,out_ids,ins_start,in_ids,out_edges_start,out_edge_ids,in_edges_start,in_edge_ids))
,null,null));
});})(node_id,out_count,in_count,outs_start,out_ids,ins_start,in_ids,out_edges_start,out_edge_ids,in_edges_start,in_edge_ids))
;
return iter__7942__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,in_ids,in_edge_ids,ins));
})());
});
algopop.leaderboardx.app.db.replace_edges = (function algopop$leaderboardx$app$db$replace_edges(k,outs,ins){
posh.reagent.transact_BANG_(algopop.leaderboardx.app.db.conn,algopop.leaderboardx.app.db.replace_edges_entities(k,outs,ins));

return algopop.leaderboardx.app.db.set_ranks_BANG_();
});
algopop.leaderboardx.app.db.replace_many_edges = (function algopop$leaderboardx$app$db$replace_many_edges(xs){
var seq__35954_35964 = cljs.core.seq(xs);
var chunk__35955_35965 = null;
var count__35956_35966 = (0);
var i__35957_35967 = (0);
while(true){
if((i__35957_35967 < count__35956_35966)){
var vec__35958_35968 = chunk__35955_35965.cljs$core$IIndexed$_nth$arity$2(null,i__35957_35967);
var k_35969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35958_35968,(0),null);
var outs_35970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35958_35968,(1),null);
var ins_35971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35958_35968,(2),null);
posh.reagent.transact_BANG_(algopop.leaderboardx.app.db.conn,algopop.leaderboardx.app.db.replace_edges_entities(k_35969,outs_35970,ins_35971));

var G__35972 = seq__35954_35964;
var G__35973 = chunk__35955_35965;
var G__35974 = count__35956_35966;
var G__35975 = (i__35957_35967 + (1));
seq__35954_35964 = G__35972;
chunk__35955_35965 = G__35973;
count__35956_35966 = G__35974;
i__35957_35967 = G__35975;
continue;
} else {
var temp__6753__auto___35976 = cljs.core.seq(seq__35954_35964);
if(temp__6753__auto___35976){
var seq__35954_35977__$1 = temp__6753__auto___35976;
if(cljs.core.chunked_seq_QMARK_(seq__35954_35977__$1)){
var c__7991__auto___35978 = cljs.core.chunk_first(seq__35954_35977__$1);
var G__35979 = cljs.core.chunk_rest(seq__35954_35977__$1);
var G__35980 = c__7991__auto___35978;
var G__35981 = cljs.core.count(c__7991__auto___35978);
var G__35982 = (0);
seq__35954_35964 = G__35979;
chunk__35955_35965 = G__35980;
count__35956_35966 = G__35981;
i__35957_35967 = G__35982;
continue;
} else {
var vec__35961_35983 = cljs.core.first(seq__35954_35977__$1);
var k_35984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35961_35983,(0),null);
var outs_35985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35961_35983,(1),null);
var ins_35986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35961_35983,(2),null);
posh.reagent.transact_BANG_(algopop.leaderboardx.app.db.conn,algopop.leaderboardx.app.db.replace_edges_entities(k_35984,outs_35985,ins_35986));

var G__35987 = cljs.core.next(seq__35954_35977__$1);
var G__35988 = null;
var G__35989 = (0);
var G__35990 = (0);
seq__35954_35964 = G__35987;
chunk__35955_35965 = G__35988;
count__35956_35966 = G__35989;
i__35957_35967 = G__35990;
continue;
}
} else {
}
}
break;
}

return algopop.leaderboardx.app.db.set_ranks_BANG_();
});
algopop.leaderboardx.app.db.nodes_for_table = (function algopop$leaderboardx$app$db$nodes_for_table(){
return reagent.ratom.make_reaction((function (){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rank,(function (){var G__35992 = algopop.leaderboardx.app.db.watch_nodes();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35992) : cljs.core.deref.call(null,G__35992));
})());
}));
});
algopop.leaderboardx.app.db.outs_q = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_name,cljs.core.cst$sym$$$$], null),cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_node,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_edge,cljs.core.cst$kw$from,cljs.core.cst$sym$_QMARK_node], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_edge,cljs.core.cst$kw$to,cljs.core.cst$sym$_QMARK_out], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_out,cljs.core.cst$kw$node_SLASH_name,cljs.core.cst$sym$_QMARK_name], null)], null);
algopop.leaderboardx.app.db.outs = (function algopop$leaderboardx$app$db$outs(id){
return posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic(algopop.leaderboardx.app.db.outs_q,cljs.core.array_seq([algopop.leaderboardx.app.db.conn,id], 0));
});
algopop.leaderboardx.app.db.ins_q = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_name,cljs.core.cst$sym$$$$], null),cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_node,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_edge,cljs.core.cst$kw$to,cljs.core.cst$sym$_QMARK_node], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_edge,cljs.core.cst$kw$from,cljs.core.cst$sym$_QMARK_in], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_in,cljs.core.cst$kw$node_SLASH_name,cljs.core.cst$sym$_QMARK_name], null)], null);
algopop.leaderboardx.app.db.ins = (function algopop$leaderboardx$app$db$ins(id){
return posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic(algopop.leaderboardx.app.db.ins_q,cljs.core.array_seq([algopop.leaderboardx.app.db.conn,id], 0));
});
