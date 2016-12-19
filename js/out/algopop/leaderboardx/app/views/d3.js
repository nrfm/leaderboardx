// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('algopop.leaderboardx.app.views.d3');
goog.require('cljs.core');
goog.require('goog.crypt');
goog.require('goog.crypt.Md5');
goog.require('reagent.core');
goog.require('devcards.core');
goog.require('reagent.dom');
goog.require('cljs.test');
goog.require('clojure.string');
algopop.leaderboardx.app.views.d3.update_simulation = (function algopop$leaderboardx$app$views$d3$update_simulation(simulation,nodes,edges){
var particles = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(nodes,edges);
var particles_by_id = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7942__auto__ = ((function (particles){
return (function algopop$leaderboardx$app$views$d3$update_simulation_$_iter__44362(s__44363){
return (new cljs.core.LazySeq(null,((function (particles){
return (function (){
var s__44363__$1 = s__44363;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__44363__$1);
if(temp__6753__auto__){
var s__44363__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44363__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__44363__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__44365 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__44364 = (0);
while(true){
if((i__44364 < size__7941__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__44364);
cljs.core.chunk_append(b__44365,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(p),p], null));

var G__44442 = (i__44364 + (1));
i__44364 = G__44442;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44365),algopop$leaderboardx$app$views$d3$update_simulation_$_iter__44362(cljs.core.chunk_rest(s__44363__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44365),null);
}
} else {
var p = cljs.core.first(s__44363__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(p),p], null),algopop$leaderboardx$app$views$d3$update_simulation_$_iter__44362(cljs.core.rest(s__44363__$2)));
}
} else {
return null;
}
break;
}
});})(particles))
,null,null));
});})(particles))
;
return iter__7942__auto__(particles);
})());
var simulation_particles = simulation.nodes();
var kept_particles = cljs.core.clj__GT_js((function (){var iter__7942__auto__ = ((function (particles,particles_by_id,simulation_particles){
return (function algopop$leaderboardx$app$views$d3$update_simulation_$_iter__44368(s__44369){
return (new cljs.core.LazySeq(null,((function (particles,particles_by_id,simulation_particles){
return (function (){
var s__44369__$1 = s__44369;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__44369__$1);
if(temp__6753__auto__){
var s__44369__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44369__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__44369__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__44371 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__44370 = (0);
while(true){
if((i__44370 < size__7941__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__44370);
var found = (function (){var G__44376 = p.id;
return (particles_by_id.cljs$core$IFn$_invoke$arity$1 ? particles_by_id.cljs$core$IFn$_invoke$arity$1(G__44376) : particles_by_id.call(null,G__44376));
})();
if(cljs.core.truth_(found)){
cljs.core.chunk_append(b__44371,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p),found], 0)));

var G__44443 = (i__44370 + (1));
i__44370 = G__44443;
continue;
} else {
var G__44444 = (i__44370 + (1));
i__44370 = G__44444;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44371),algopop$leaderboardx$app$views$d3$update_simulation_$_iter__44368(cljs.core.chunk_rest(s__44369__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44371),null);
}
} else {
var p = cljs.core.first(s__44369__$2);
var found = (function (){var G__44377 = p.id;
return (particles_by_id.cljs$core$IFn$_invoke$arity$1 ? particles_by_id.cljs$core$IFn$_invoke$arity$1(G__44377) : particles_by_id.call(null,G__44377));
})();
if(cljs.core.truth_(found)){
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p),found], 0)),algopop$leaderboardx$app$views$d3$update_simulation_$_iter__44368(cljs.core.rest(s__44369__$2)));
} else {
var G__44445 = cljs.core.rest(s__44369__$2);
s__44369__$1 = G__44445;
continue;
}
}
} else {
return null;
}
break;
}
});})(particles,particles_by_id,simulation_particles))
,null,null));
});})(particles,particles_by_id,simulation_particles))
;
return iter__7942__auto__(simulation_particles);
})());
var existing_ids = cljs.core.set(cljs.core.keys(simulation.idxs));
var added_particles = cljs.core.clj__GT_js(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (particles,particles_by_id,simulation_particles,kept_particles,existing_ids){
return (function (p1__44280_SHARP_){
return cljs.core.contains_QMARK_(existing_ids,cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(p1__44280_SHARP_));
});})(particles,particles_by_id,simulation_particles,kept_particles,existing_ids))
,particles));
var final_particles = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(kept_particles,added_particles);
var idxs = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (particles,particles_by_id,simulation_particles,kept_particles,existing_ids,added_particles,final_particles){
return (function (p1__44281_SHARP_){
return p1__44281_SHARP_.id;
});})(particles,particles_by_id,simulation_particles,kept_particles,existing_ids,added_particles,final_particles))
,final_particles),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
simulation.nodes(cljs.core.clj__GT_js(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (particles,particles_by_id,simulation_particles,kept_particles,existing_ids,added_particles,final_particles,idxs){
return (function (idx,particle){
particle.index = idx;

return particle;
});})(particles,particles_by_id,simulation_particles,kept_particles,existing_ids,added_particles,final_particles,idxs))
,final_particles)));

simulation.force("link").links(cljs.core.clj__GT_js(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (particles,particles_by_id,simulation_particles,kept_particles,existing_ids,added_particles,final_particles,idxs){
return (function (idx,x){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,cljs.core.cst$kw$index,idx);
});})(particles,particles_by_id,simulation_particles,kept_particles,existing_ids,added_particles,final_particles,idxs))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__7942__auto__ = ((function (particles,particles_by_id,simulation_particles,kept_particles,existing_ids,added_particles,final_particles,idxs){
return (function algopop$leaderboardx$app$views$d3$update_simulation_$_iter__44378(s__44379){
return (new cljs.core.LazySeq(null,((function (particles,particles_by_id,simulation_particles,kept_particles,existing_ids,added_particles,final_particles,idxs){
return (function (){
var s__44379__$1 = s__44379;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__44379__$1);
if(temp__6753__auto__){
var s__44379__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44379__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__44379__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__44381 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__44380 = (0);
while(true){
if((i__44380 < size__7941__auto__)){
var map__44398 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__44380);
var map__44398__$1 = ((((!((map__44398 == null)))?((((map__44398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44398.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44398):map__44398);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44398__$1,cljs.core.cst$kw$db_SLASH_id);
var map__44399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44398__$1,cljs.core.cst$kw$from);
var map__44399__$1 = ((((!((map__44399 == null)))?((((map__44399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44399.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44399):map__44399);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44399__$1,cljs.core.cst$kw$db_SLASH_id);
var map__44400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44398__$1,cljs.core.cst$kw$to);
var map__44400__$1 = ((((!((map__44400 == null)))?((((map__44400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44400):map__44400);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44400__$1,cljs.core.cst$kw$db_SLASH_id);
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44398__$1,cljs.core.cst$kw$weight);
cljs.core.chunk_append(b__44381,(function (){var G__44404 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$link,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,id], null),cljs.core.cst$kw$source,(idxs.cljs$core$IFn$_invoke$arity$1 ? idxs.cljs$core$IFn$_invoke$arity$1(from) : idxs.call(null,from)),cljs.core.cst$kw$target,(idxs.cljs$core$IFn$_invoke$arity$1 ? idxs.cljs$core$IFn$_invoke$arity$1(id) : idxs.call(null,id)),cljs.core.cst$kw$weight,weight], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$link,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,to], null),cljs.core.cst$kw$source,(idxs.cljs$core$IFn$_invoke$arity$1 ? idxs.cljs$core$IFn$_invoke$arity$1(id) : idxs.call(null,id)),cljs.core.cst$kw$target,(idxs.cljs$core$IFn$_invoke$arity$1 ? idxs.cljs$core$IFn$_invoke$arity$1(to) : idxs.call(null,to)),cljs.core.cst$kw$weight,weight], null)], null);
if(cljs.core.truth_(weight)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__44404,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$link,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,to], null),cljs.core.cst$kw$source,(idxs.cljs$core$IFn$_invoke$arity$1 ? idxs.cljs$core$IFn$_invoke$arity$1(from) : idxs.call(null,from)),cljs.core.cst$kw$target,(idxs.cljs$core$IFn$_invoke$arity$1 ? idxs.cljs$core$IFn$_invoke$arity$1(to) : idxs.call(null,to)),cljs.core.cst$kw$weight,((3) * weight)], null));
} else {
return G__44404;
}
})());

var G__44446 = (i__44380 + (1));
i__44380 = G__44446;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44381),algopop$leaderboardx$app$views$d3$update_simulation_$_iter__44378(cljs.core.chunk_rest(s__44379__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44381),null);
}
} else {
var map__44405 = cljs.core.first(s__44379__$2);
var map__44405__$1 = ((((!((map__44405 == null)))?((((map__44405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44405.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44405):map__44405);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44405__$1,cljs.core.cst$kw$db_SLASH_id);
var map__44406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44405__$1,cljs.core.cst$kw$from);
var map__44406__$1 = ((((!((map__44406 == null)))?((((map__44406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44406):map__44406);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44406__$1,cljs.core.cst$kw$db_SLASH_id);
var map__44407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44405__$1,cljs.core.cst$kw$to);
var map__44407__$1 = ((((!((map__44407 == null)))?((((map__44407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44407):map__44407);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44407__$1,cljs.core.cst$kw$db_SLASH_id);
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44405__$1,cljs.core.cst$kw$weight);
return cljs.core.cons((function (){var G__44411 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$link,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,id], null),cljs.core.cst$kw$source,(idxs.cljs$core$IFn$_invoke$arity$1 ? idxs.cljs$core$IFn$_invoke$arity$1(from) : idxs.call(null,from)),cljs.core.cst$kw$target,(idxs.cljs$core$IFn$_invoke$arity$1 ? idxs.cljs$core$IFn$_invoke$arity$1(id) : idxs.call(null,id)),cljs.core.cst$kw$weight,weight], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$link,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,to], null),cljs.core.cst$kw$source,(idxs.cljs$core$IFn$_invoke$arity$1 ? idxs.cljs$core$IFn$_invoke$arity$1(id) : idxs.call(null,id)),cljs.core.cst$kw$target,(idxs.cljs$core$IFn$_invoke$arity$1 ? idxs.cljs$core$IFn$_invoke$arity$1(to) : idxs.call(null,to)),cljs.core.cst$kw$weight,weight], null)], null);
if(cljs.core.truth_(weight)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__44411,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$link,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,to], null),cljs.core.cst$kw$source,(idxs.cljs$core$IFn$_invoke$arity$1 ? idxs.cljs$core$IFn$_invoke$arity$1(from) : idxs.call(null,from)),cljs.core.cst$kw$target,(idxs.cljs$core$IFn$_invoke$arity$1 ? idxs.cljs$core$IFn$_invoke$arity$1(to) : idxs.call(null,to)),cljs.core.cst$kw$weight,((3) * weight)], null));
} else {
return G__44411;
}
})(),algopop$leaderboardx$app$views$d3$update_simulation_$_iter__44378(cljs.core.rest(s__44379__$2)));
}
} else {
return null;
}
break;
}
});})(particles,particles_by_id,simulation_particles,kept_particles,existing_ids,added_particles,final_particles,idxs))
,null,null));
});})(particles,particles_by_id,simulation_particles,kept_particles,existing_ids,added_particles,final_particles,idxs))
;
return iter__7942__auto__(edges);
})()))));

simulation.name = "Untitled";

simulation.idxs = idxs;

return simulation.paths = (function (){var iter__7942__auto__ = ((function (particles,particles_by_id,simulation_particles,kept_particles,existing_ids,added_particles,final_particles,idxs){
return (function algopop$leaderboardx$app$views$d3$update_simulation_$_iter__44412(s__44413){
return (new cljs.core.LazySeq(null,((function (particles,particles_by_id,simulation_particles,kept_particles,existing_ids,added_particles,final_particles,idxs){
return (function (){
var s__44413__$1 = s__44413;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__44413__$1);
if(temp__6753__auto__){
var s__44413__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44413__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__44413__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__44415 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__44414 = (0);
while(true){
if((i__44414 < size__7941__auto__)){
var map__44430 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__44414);
var map__44430__$1 = ((((!((map__44430 == null)))?((((map__44430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44430):map__44430);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44430__$1,cljs.core.cst$kw$db_SLASH_id);
var map__44431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44430__$1,cljs.core.cst$kw$from);
var map__44431__$1 = ((((!((map__44431 == null)))?((((map__44431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44431.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44431):map__44431);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44431__$1,cljs.core.cst$kw$db_SLASH_id);
var map__44432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44430__$1,cljs.core.cst$kw$to);
var map__44432__$1 = ((((!((map__44432 == null)))?((((map__44432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44432.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44432):map__44432);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44432__$1,cljs.core.cst$kw$db_SLASH_id);
cljs.core.chunk_append(b__44415,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(idxs.cljs$core$IFn$_invoke$arity$1 ? idxs.cljs$core$IFn$_invoke$arity$1(from) : idxs.call(null,from)),(idxs.cljs$core$IFn$_invoke$arity$1 ? idxs.cljs$core$IFn$_invoke$arity$1(id) : idxs.call(null,id)),(idxs.cljs$core$IFn$_invoke$arity$1 ? idxs.cljs$core$IFn$_invoke$arity$1(to) : idxs.call(null,to))], null));

var G__44447 = (i__44414 + (1));
i__44414 = G__44447;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44415),algopop$leaderboardx$app$views$d3$update_simulation_$_iter__44412(cljs.core.chunk_rest(s__44413__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44415),null);
}
} else {
var map__44436 = cljs.core.first(s__44413__$2);
var map__44436__$1 = ((((!((map__44436 == null)))?((((map__44436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44436.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44436):map__44436);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44436__$1,cljs.core.cst$kw$db_SLASH_id);
var map__44437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44436__$1,cljs.core.cst$kw$from);
var map__44437__$1 = ((((!((map__44437 == null)))?((((map__44437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44437.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44437):map__44437);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44437__$1,cljs.core.cst$kw$db_SLASH_id);
var map__44438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44436__$1,cljs.core.cst$kw$to);
var map__44438__$1 = ((((!((map__44438 == null)))?((((map__44438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44438):map__44438);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44438__$1,cljs.core.cst$kw$db_SLASH_id);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(idxs.cljs$core$IFn$_invoke$arity$1 ? idxs.cljs$core$IFn$_invoke$arity$1(from) : idxs.call(null,from)),(idxs.cljs$core$IFn$_invoke$arity$1 ? idxs.cljs$core$IFn$_invoke$arity$1(id) : idxs.call(null,id)),(idxs.cljs$core$IFn$_invoke$arity$1 ? idxs.cljs$core$IFn$_invoke$arity$1(to) : idxs.call(null,to))], null),algopop$leaderboardx$app$views$d3$update_simulation_$_iter__44412(cljs.core.rest(s__44413__$2)));
}
} else {
return null;
}
break;
}
});})(particles,particles_by_id,simulation_particles,kept_particles,existing_ids,added_particles,final_particles,idxs))
,null,null));
});})(particles,particles_by_id,simulation_particles,kept_particles,existing_ids,added_particles,final_particles,idxs))
;
return iter__7942__auto__(edges);
})();
});
algopop.leaderboardx.app.views.d3.restart_simulation = (function algopop$leaderboardx$app$views$d3$restart_simulation(simulation){
var G__44449 = simulation;
G__44449.restart();

G__44449.alpha((1));

return G__44449;
});
algopop.leaderboardx.app.views.d3.color_for = (function algopop$leaderboardx$app$views$d3$color_for(uid){
if(cljs.core.truth_(uid)){
var h = cljs.core.hash(uid);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((255) & h),((255) & (h >> (8))),((255) & (h >> (16)))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null);
}
});
algopop.leaderboardx.app.views.d3.scale_rgb = (function algopop$leaderboardx$app$views$d3$scale_rgb(rgb,rank_scale){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,rgb,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0.9 + (0.5 * rank_scale)))));
});
algopop.leaderboardx.app.views.d3.scale_dist = (function algopop$leaderboardx$app$views$d3$scale_dist(n,rank_scale){
return ((5) + ((function (){var x__7425__auto__ = (function (){var x__7418__auto__ = n;
var y__7419__auto__ = (10);
return ((x__7418__auto__ > y__7419__auto__) ? x__7418__auto__ : y__7419__auto__);
})();
var y__7426__auto__ = (30);
return ((x__7425__auto__ < y__7426__auto__) ? x__7425__auto__ : y__7426__auto__);
})() * rank_scale));
});
algopop.leaderboardx.app.views.d3.rgb = (function algopop$leaderboardx$app$views$d3$rgb(p__44450){
var vec__44454 = p__44450;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44454,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44454,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44454,(2),null);
return [cljs.core.str("rgb("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(")")].join('');
});
algopop.leaderboardx.app.views.d3.md5_hash = (function algopop$leaderboardx$app$views$d3$md5_hash(s){
var md5 = (new goog.crypt.Md5());
md5.update(s);

var G__44458 = md5.digest();
return goog.crypt.byteArrayToHex(G__44458);
});
algopop.leaderboardx.app.views.d3.gravatar_background = (function algopop$leaderboardx$app$views$d3$gravatar_background(id,r,email){
var guid = algopop.leaderboardx.app.views.d3.md5_hash(clojure.string.trim(email));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$defs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pattern,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$id,guid,cljs.core.cst$kw$pattern_DASH_units,"userSpaceOnUse",cljs.core.cst$kw$height,(r * (2)),cljs.core.cst$kw$width,(r * (2)),cljs.core.cst$kw$pattern_DASH_transform,[cljs.core.str("translate("),cljs.core.str((- r)),cljs.core.str(","),cljs.core.str((- r)),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$image,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$height,(r * (2)),cljs.core.cst$kw$width,(r * (2)),cljs.core.cst$kw$xlink_DASH_href,[cljs.core.str("http://www.gravatar.com/avatar/"),cljs.core.str(guid)].join('')], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$r,r,cljs.core.cst$kw$fill,[cljs.core.str("url(#"),cljs.core.str(guid),cljs.core.str(")")].join('')], null)], null)], null);
});
algopop.leaderboardx.app.views.d3.stringify_points = (function algopop$leaderboardx$app$views$d3$stringify_points(points){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44459_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__44459_SHARP_);
}),cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),points)));
});
algopop.leaderboardx.app.views.d3.polygon_background = (function algopop$leaderboardx$app$views$d3$polygon_background(attrs,points){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$polygon,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$points,algopop.leaderboardx.app.views.d3.stringify_points(points)], null)], 0))], null);
});
algopop.leaderboardx.app.views.d3.triangle_background = (function algopop$leaderboardx$app$views$d3$triangle_background(attrs,r){
var h = (function (){var G__44461 = ((((4) * r) * r) - (r * r));
return Math.sqrt(G__44461);
})();
var y1 = (- (h / (3)));
var y2 = (- ((2) * y1));
var points = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- r),y1,r,y1,(0),y2], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.d3.polygon_background,attrs,points], null);
});
algopop.leaderboardx.app.views.d3.rect_background = (function algopop$leaderboardx$app$views$d3$rect_background(attrs,r){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(- r),cljs.core.cst$kw$y,(- r),cljs.core.cst$kw$width,(r * (2)),cljs.core.cst$kw$height,(r * (2))], null)], 0))], null);
});
algopop.leaderboardx.app.views.d3.circle_background = (function algopop$leaderboardx$app$views$d3$circle_background(attrs,r){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$r,r], null)], 0))], null);
});
algopop.leaderboardx.app.views.d3.shapes = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$circle,algopop.leaderboardx.app.views.d3.circle_background,cljs.core.cst$kw$triangle,algopop.leaderboardx.app.views.d3.triangle_background,cljs.core.cst$kw$square,algopop.leaderboardx.app.views.d3.rect_background], null);
algopop.leaderboardx.app.views.d3.shape_background = (function algopop$leaderboardx$app$views$d3$shape_background(shape,r,node_color,rank_scale,selected_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(algopop.leaderboardx.app.views.d3.shapes.cljs$core$IFn$_invoke$arity$2 ? algopop.leaderboardx.app.views.d3.shapes.cljs$core$IFn$_invoke$arity$2(shape,algopop.leaderboardx.app.views.d3.circle_background) : algopop.leaderboardx.app.views.d3.shapes.call(null,shape,algopop.leaderboardx.app.views.d3.circle_background)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$fill,algopop.leaderboardx.app.views.d3.rgb(algopop.leaderboardx.app.views.d3.scale_rgb(node_color,rank_scale)),cljs.core.cst$kw$stroke,(cljs.core.truth_(selected_QMARK_)?"#6699aa":"#9ecae1"),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null)], null),r], null);
});
algopop.leaderboardx.app.views.d3.next_shape = cljs.core.zipmap(cljs.core.keys(algopop.leaderboardx.app.views.d3.shapes),cljs.core.rest(cljs.core.cycle(cljs.core.keys(algopop.leaderboardx.app.views.d3.shapes))));
algopop.leaderboardx.app.views.d3.email_QMARK_ = (function algopop$leaderboardx$app$views$d3$email_QMARK_(s){
var and__7073__auto__ = typeof s === 'string';
if(and__7073__auto__){
return cljs.core.re_matches(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/,clojure.string.upper_case(clojure.string.trim(s)));
} else {
return and__7073__auto__;
}
});
algopop.leaderboardx.app.views.d3.draw_node = (function algopop$leaderboardx$app$views$d3$draw_node(p__44462,node_count,max_pagerank,simulation,mouse_down_QMARK_,selected_id,p__44463,editing){
var map__44472 = p__44462;
var map__44472__$1 = ((((!((map__44472 == null)))?((((map__44472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44472.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44472):map__44472);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44472__$1,cljs.core.cst$kw$id);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44472__$1,cljs.core.cst$kw$name);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44472__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44472__$1,cljs.core.cst$kw$y);
var pagerank = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44472__$1,cljs.core.cst$kw$pagerank);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44472__$1,cljs.core.cst$kw$shape);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44472__$1,cljs.core.cst$kw$uid);
var map__44473 = p__44463;
var map__44473__$1 = ((((!((map__44473 == null)))?((((map__44473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44473):map__44473);
var shift_click_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44473__$1,cljs.core.cst$kw$shift_DASH_click_DASH_node);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_id) : cljs.core.deref.call(null,selected_id)));
var rank_scale = (cljs.core.truth_(max_pagerank)?(pagerank / max_pagerank):0.5);
var r = algopop.leaderboardx.app.views.d3.scale_dist(node_count,rank_scale);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$transform,[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")"),cljs.core.str(((selected_QMARK_)?" scale(1.25,1.25)":null))].join(''),cljs.core.cst$kw$on_DASH_double_DASH_click,((function (selected_QMARK_,rank_scale,r,map__44472,map__44472__$1,id,name,x,y,pagerank,shape,uid,map__44473,map__44473__$1,shift_click_node){
return (function algopop$leaderboardx$app$views$d3$draw_node_$_node_double_click(e){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_id,null) : cljs.core.reset_BANG_.call(null,selected_id,null));

var temp__6753__auto___44480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(simulation.idxs,id);
if(cljs.core.truth_(temp__6753__auto___44480)){
var idx_44481 = temp__6753__auto___44480;
var particle_44482 = (simulation.nodes()[idx_44481]);
delete particle_44482["fx"];

delete particle_44482["fy"];
} else {
}

return algopop.leaderboardx.app.views.d3.restart_simulation(simulation);
});})(selected_QMARK_,rank_scale,r,map__44472,map__44472__$1,id,name,x,y,pagerank,shape,uid,map__44473,map__44473__$1,shift_click_node))
,cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (selected_QMARK_,rank_scale,r,map__44472,map__44472__$1,id,name,x,y,pagerank,shape,uid,map__44473,map__44473__$1,shift_click_node){
return (function algopop$leaderboardx$app$views$d3$draw_node_$_node_mouse_down(e){
e.stopPropagation();

e.preventDefault();

var new_selected_id_44483 = id;
if(cljs.core.truth_((function (){var and__7073__auto__ = shift_click_node;
if(cljs.core.truth_(and__7073__auto__)){
var and__7073__auto____$1 = e.shiftKey;
if(cljs.core.truth_(and__7073__auto____$1)){
var and__7073__auto____$2 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_id) : cljs.core.deref.call(null,selected_id));
if(cljs.core.truth_(and__7073__auto____$2)){
return new_selected_id_44483;
} else {
return and__7073__auto____$2;
}
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
})())){
var G__44478_44484 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_id) : cljs.core.deref.call(null,selected_id));
var G__44479_44485 = new_selected_id_44483;
(shift_click_node.cljs$core$IFn$_invoke$arity$2 ? shift_click_node.cljs$core$IFn$_invoke$arity$2(G__44478_44484,G__44479_44485) : shift_click_node.call(null,G__44478_44484,G__44479_44485));
} else {
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_id,new_selected_id_44483) : cljs.core.reset_BANG_.call(null,selected_id,new_selected_id_44483));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(editing,null) : cljs.core.reset_BANG_.call(null,editing,null));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouse_down_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouse_down_QMARK_,true));
});})(selected_QMARK_,rank_scale,r,map__44472,map__44472__$1,id,name,x,y,pagerank,shape,uid,map__44473,map__44473__$1,shift_click_node))
], null),(cljs.core.truth_(algopop.leaderboardx.app.views.d3.email_QMARK_(name))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.d3.gravatar_background,id,r,name], null):new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.d3.shape_background,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(shape),r,algopop.leaderboardx.app.views.d3.color_for(uid),rank_scale,selected_QMARK_], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text$unselectable,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text_DASH_anchor,"middle",cljs.core.cst$kw$font_DASH_size,(function (){var x__7425__auto__ = (function (){var x__7418__auto__ = node_count;
var y__7419__auto__ = (8);
return ((x__7418__auto__ > y__7419__auto__) ? x__7418__auto__ : y__7419__auto__);
})();
var y__7426__auto__ = (22);
return ((x__7425__auto__ < y__7426__auto__) ? x__7425__auto__ : y__7426__auto__);
})(),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pointer_DASH_events,"none",cljs.core.cst$kw$dominant_DASH_baseline,"central"], null)], null),name], null)], null);
});
algopop.leaderboardx.app.views.d3.average = (function algopop$leaderboardx$app$views$d3$average(var_args){
var args__8308__auto__ = [];
var len__8301__auto___44487 = arguments.length;
var i__8302__auto___44488 = (0);
while(true){
if((i__8302__auto___44488 < len__8301__auto___44487)){
args__8308__auto__.push((arguments[i__8302__auto___44488]));

var G__44489 = (i__8302__auto___44488 + (1));
i__8302__auto___44488 = G__44489;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((0) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((0)),(0),null)):null);
return algopop.leaderboardx.app.views.d3.average.cljs$core$IFn$_invoke$arity$variadic(argseq__8309__auto__);
});

algopop.leaderboardx.app.views.d3.average.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,args) / cljs.core.count(args));
});

algopop.leaderboardx.app.views.d3.average.cljs$lang$maxFixedArity = (0);

algopop.leaderboardx.app.views.d3.average.cljs$lang$applyTo = (function (seq44486){
return algopop.leaderboardx.app.views.d3.average.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44486));
});

algopop.leaderboardx.app.views.d3.rise_over_run = (function algopop$leaderboardx$app$views$d3$rise_over_run(o,a){
return (((180) * Math.atan2(o,a)) / Math.PI);
});
algopop.leaderboardx.app.views.d3.draw_edge = (function algopop$leaderboardx$app$views$d3$draw_edge(p__44490,nodes,simulation,mouse_down_QMARK_,selected_id,p__44491,editing){
var vec__44520 = p__44490;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44520,(0),null);
var mid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44520,(1),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44520,(2),null);
var path = vec__44520;
var map__44523 = p__44491;
var map__44523__$1 = ((((!((map__44523 == null)))?((((map__44523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44523):map__44523);
var shift_click_edge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44523__$1,cljs.core.cst$kw$shift_DASH_click_DASH_edge);
var map__44525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nodes,from);
var map__44525__$1 = ((((!((map__44525 == null)))?((((map__44525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44525.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44525):map__44525);
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44525__$1,cljs.core.cst$kw$x);
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44525__$1,cljs.core.cst$kw$y);
var map__44526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nodes,mid);
var map__44526__$1 = ((((!((map__44526 == null)))?((((map__44526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44526):map__44526);
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44526__$1,cljs.core.cst$kw$x);
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44526__$1,cljs.core.cst$kw$y);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44526__$1,cljs.core.cst$kw$id);
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44526__$1,cljs.core.cst$kw$weight);
var map__44527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nodes,to);
var map__44527__$1 = ((((!((map__44527 == null)))?((((map__44527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44527):map__44527);
var x3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44527__$1,cljs.core.cst$kw$x);
var y3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44527__$1,cljs.core.cst$kw$y);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_id) : cljs.core.deref.call(null,selected_id))));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_double_DASH_click,((function (map__44525,map__44525__$1,x1,y1,map__44526,map__44526__$1,x2,y2,id,weight,map__44527,map__44527__$1,x3,y3,selected_QMARK_,vec__44520,from,mid,to,path,map__44523,map__44523__$1,shift_click_edge){
return (function algopop$leaderboardx$app$views$d3$draw_edge_$_link_double_click(e){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_id,null) : cljs.core.reset_BANG_.call(null,selected_id,null));

var temp__6753__auto___44548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(simulation.idxs,id);
if(cljs.core.truth_(temp__6753__auto___44548)){
var idx_44549 = temp__6753__auto___44548;
var particle_44550 = (simulation.nodes()[idx_44549]);
delete particle_44550["fx"];

delete particle_44550["fy"];
} else {
}

return algopop.leaderboardx.app.views.d3.restart_simulation(simulation);
});})(map__44525,map__44525__$1,x1,y1,map__44526,map__44526__$1,x2,y2,id,weight,map__44527,map__44527__$1,x3,y3,selected_QMARK_,vec__44520,from,mid,to,path,map__44523,map__44523__$1,shift_click_edge))
,cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (map__44525,map__44525__$1,x1,y1,map__44526,map__44526__$1,x2,y2,id,weight,map__44527,map__44527__$1,x3,y3,selected_QMARK_,vec__44520,from,mid,to,path,map__44523,map__44523__$1,shift_click_edge){
return (function algopop$leaderboardx$app$views$d3$draw_edge_$_link_mouse_down(e){
e.stopPropagation();

e.preventDefault();

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouse_down_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouse_down_QMARK_,true));

var G__44534_44551 = selected_id;
var G__44535_44552 = (simulation.nodes()[mid]).id;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__44534_44551,G__44535_44552) : cljs.core.reset_BANG_.call(null,G__44534_44551,G__44535_44552));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(editing,null) : cljs.core.reset_BANG_.call(null,editing,null));

if(cljs.core.truth_((function (){var and__7073__auto__ = shift_click_edge;
if(cljs.core.truth_(and__7073__auto__)){
return e.shiftKey;
} else {
return and__7073__auto__;
}
})())){
var G__44536 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nodes,mid);
return (shift_click_edge.cljs$core$IFn$_invoke$arity$1 ? shift_click_edge.cljs$core$IFn$_invoke$arity$1(G__44536) : shift_click_edge.call(null,G__44536));
} else {
return null;
}
});})(map__44525,map__44525__$1,x1,y1,map__44526,map__44526__$1,x2,y2,id,weight,map__44527,map__44527__$1,x3,y3,selected_QMARK_,vec__44520,from,mid,to,path,map__44523,map__44523__$1,shift_click_edge))
,cljs.core.cst$kw$stroke,(cljs.core.truth_(weight)?((selected_QMARK_)?"#660000":"#9e0000"):((selected_QMARK_)?"#6699aa":"#9ecae1"))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$fill,"none",cljs.core.cst$kw$stroke_DASH_dasharray,(cljs.core.truth_(weight)?"5,5":null),cljs.core.cst$kw$d,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",","," ",","," ",","], null),(function (){var iter__7942__auto__ = ((function (map__44525,map__44525__$1,x1,y1,map__44526,map__44526__$1,x2,y2,id,weight,map__44527,map__44527__$1,x3,y3,selected_QMARK_,vec__44520,from,mid,to,path,map__44523,map__44523__$1,shift_click_edge){
return (function algopop$leaderboardx$app$views$d3$draw_edge_$_iter__44537(s__44538){
return (new cljs.core.LazySeq(null,((function (map__44525,map__44525__$1,x1,y1,map__44526,map__44526__$1,x2,y2,id,weight,map__44527,map__44527__$1,x3,y3,selected_QMARK_,vec__44520,from,mid,to,path,map__44523,map__44523__$1,shift_click_edge){
return (function (){
var s__44538__$1 = s__44538;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__44538__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var idx = cljs.core.first(xs__7309__auto__);
var iterys__7938__auto__ = ((function (s__44538__$1,idx,xs__7309__auto__,temp__6753__auto__,map__44525,map__44525__$1,x1,y1,map__44526,map__44526__$1,x2,y2,id,weight,map__44527,map__44527__$1,x3,y3,selected_QMARK_,vec__44520,from,mid,to,path,map__44523,map__44523__$1,shift_click_edge){
return (function algopop$leaderboardx$app$views$d3$draw_edge_$_iter__44537_$_iter__44539(s__44540){
return (new cljs.core.LazySeq(null,((function (s__44538__$1,idx,xs__7309__auto__,temp__6753__auto__,map__44525,map__44525__$1,x1,y1,map__44526,map__44526__$1,x2,y2,id,weight,map__44527,map__44527__$1,x3,y3,selected_QMARK_,vec__44520,from,mid,to,path,map__44523,map__44523__$1,shift_click_edge){
return (function (){
var s__44540__$1 = s__44540;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__44540__$1);
if(temp__6753__auto____$1){
var s__44540__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__44540__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__44540__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__44542 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__44541 = (0);
while(true){
if((i__44541 < size__7941__auto__)){
var dim = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__44541);
cljs.core.chunk_append(b__44542,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,dim], null)));

var G__44553 = (i__44541 + (1));
i__44541 = G__44553;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44542),algopop$leaderboardx$app$views$d3$draw_edge_$_iter__44537_$_iter__44539(cljs.core.chunk_rest(s__44540__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44542),null);
}
} else {
var dim = cljs.core.first(s__44540__$2);
return cljs.core.cons(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,dim], null)),algopop$leaderboardx$app$views$d3$draw_edge_$_iter__44537_$_iter__44539(cljs.core.rest(s__44540__$2)));
}
} else {
return null;
}
break;
}
});})(s__44538__$1,idx,xs__7309__auto__,temp__6753__auto__,map__44525,map__44525__$1,x1,y1,map__44526,map__44526__$1,x2,y2,id,weight,map__44527,map__44527__$1,x3,y3,selected_QMARK_,vec__44520,from,mid,to,path,map__44523,map__44523__$1,shift_click_edge))
,null,null));
});})(s__44538__$1,idx,xs__7309__auto__,temp__6753__auto__,map__44525,map__44525__$1,x1,y1,map__44526,map__44526__$1,x2,y2,id,weight,map__44527,map__44527__$1,x3,y3,selected_QMARK_,vec__44520,from,mid,to,path,map__44523,map__44523__$1,shift_click_edge))
;
var fs__7939__auto__ = cljs.core.seq(iterys__7938__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$y], null)));
if(fs__7939__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7939__auto__,algopop$leaderboardx$app$views$d3$draw_edge_$_iter__44537(cljs.core.rest(s__44538__$1)));
} else {
var G__44554 = cljs.core.rest(s__44538__$1);
s__44538__$1 = G__44554;
continue;
}
} else {
return null;
}
break;
}
});})(map__44525,map__44525__$1,x1,y1,map__44526,map__44526__$1,x2,y2,id,weight,map__44527,map__44527__$1,x3,y3,selected_QMARK_,vec__44520,from,mid,to,path,map__44523,map__44523__$1,shift_click_edge))
,null,null));
});})(map__44525,map__44525__$1,x1,y1,map__44526,map__44526__$1,x2,y2,id,weight,map__44527,map__44527__$1,x3,y3,selected_QMARK_,vec__44520,from,mid,to,path,map__44523,map__44523__$1,shift_click_edge))
;
return iter__7942__auto__(path);
})()))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$polygon,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$points,"-5,-5 -5,5 7,0",cljs.core.cst$kw$fill,(cljs.core.truth_(weight)?"#9e0000":"#9ecae1"),cljs.core.cst$kw$transform,[cljs.core.str("translate("),cljs.core.str(x2),cljs.core.str(","),cljs.core.str(y2),cljs.core.str(") rotate("),cljs.core.str(algopop.leaderboardx.app.views.d3.rise_over_run((y3 - y1),(x3 - x1))),cljs.core.str(")"),cljs.core.str(((selected_QMARK_)?" scale(1.25,1.25)":null))].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null)], null)], null)], null);
});
algopop.leaderboardx.app.views.d3.bounds = (function algopop$leaderboardx$app$views$d3$bounds(p__44555,simulation_node){
var vec__44559 = p__44555;
var minx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44559,(0),null);
var miny = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44559,(1),null);
var maxx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44559,(2),null);
var maxy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44559,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__7425__auto__ = minx;
var y__7426__auto__ = simulation_node.x;
return ((x__7425__auto__ < y__7426__auto__) ? x__7425__auto__ : y__7426__auto__);
})(),(function (){var x__7425__auto__ = miny;
var y__7426__auto__ = simulation_node.y;
return ((x__7425__auto__ < y__7426__auto__) ? x__7425__auto__ : y__7426__auto__);
})(),(function (){var x__7418__auto__ = maxx;
var y__7419__auto__ = simulation_node.x;
return ((x__7418__auto__ > y__7419__auto__) ? x__7418__auto__ : y__7419__auto__);
})(),(function (){var x__7418__auto__ = maxy;
var y__7419__auto__ = simulation_node.y;
return ((x__7418__auto__ > y__7419__auto__) ? x__7418__auto__ : y__7419__auto__);
})()], null);
});
algopop.leaderboardx.app.views.d3.normalize_bounds = (function algopop$leaderboardx$app$views$d3$normalize_bounds(p__44562){
var vec__44566 = p__44562;
var minx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44566,(0),null);
var miny = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44566,(1),null);
var maxx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44566,(2),null);
var maxy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44566,(3),null);
var width = ((100) + (maxx - minx));
var height = ((100) + (maxy - miny));
var width__$1 = (function (){var x__7418__auto__ = width;
var y__7419__auto__ = height;
return ((x__7418__auto__ > y__7419__auto__) ? x__7418__auto__ : y__7419__auto__);
})();
var height__$1 = (function (){var x__7418__auto__ = height;
var y__7419__auto__ = width__$1;
return ((x__7418__auto__ > y__7419__auto__) ? x__7418__auto__ : y__7419__auto__);
})();
var midx = algopop.leaderboardx.app.views.d3.average.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([maxx,minx], 0));
var midy = algopop.leaderboardx.app.views.d3.average.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([maxy,miny], 0));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(midx - (width__$1 / (2))),(midy - (height__$1 / (2))),width__$1,height__$1], null);
});
algopop.leaderboardx.app.views.d3.initial_bounds = (function algopop$leaderboardx$app$views$d3$initial_bounds(simulation_node){
if(cljs.core.truth_(simulation_node)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [simulation_node.x,simulation_node.y,simulation_node.x,simulation_node.y], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null);
}
});
algopop.leaderboardx.app.views.d3.update_bounds = (function algopop$leaderboardx$app$views$d3$update_bounds(g,simulation_nodes){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(g,cljs.core.cst$kw$bounds,algopop.leaderboardx.app.views.d3.normalize_bounds(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(algopop.leaderboardx.app.views.d3.bounds,algopop.leaderboardx.app.views.d3.initial_bounds(cljs.core.first(simulation_nodes)),simulation_nodes)));
});
algopop.leaderboardx.app.views.d3.draw_svg = (function algopop$leaderboardx$app$views$d3$draw_svg(drawable,simulation,mouse_down_QMARK_,selected_id,callbacks,editing){
var map__44583 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(drawable) : cljs.core.deref.call(null,drawable));
var map__44583__$1 = ((((!((map__44583 == null)))?((((map__44583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44583):map__44583);
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44583__$1,cljs.core.cst$kw$nodes);
var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44583__$1,cljs.core.cst$kw$paths);
var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44583__$1,cljs.core.cst$kw$bounds);
var max_pagerank = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pagerank,nodes));
var non_edge_nodes = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$to,nodes);
var node_count = cljs.core.count(non_edge_nodes);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg$unselectable,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$view_DASH_box,clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",bounds),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__7942__auto__ = ((function (map__44583,map__44583__$1,nodes,paths,bounds,max_pagerank,non_edge_nodes,node_count){
return (function algopop$leaderboardx$app$views$d3$draw_svg_$_iter__44585(s__44586){
return (new cljs.core.LazySeq(null,((function (map__44583,map__44583__$1,nodes,paths,bounds,max_pagerank,non_edge_nodes,node_count){
return (function (){
var s__44586__$1 = s__44586;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__44586__$1);
if(temp__6753__auto__){
var s__44586__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44586__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__44586__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__44588 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__44587 = (0);
while(true){
if((i__44587 < size__7941__auto__)){
var path = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__44587);
cljs.core.chunk_append(b__44588,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.d3.draw_edge,path,nodes,simulation,mouse_down_QMARK_,selected_id,callbacks,editing], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,path], null)));

var G__44597 = (i__44587 + (1));
i__44587 = G__44597;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44588),algopop$leaderboardx$app$views$d3$draw_svg_$_iter__44585(cljs.core.chunk_rest(s__44586__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44588),null);
}
} else {
var path = cljs.core.first(s__44586__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.d3.draw_edge,path,nodes,simulation,mouse_down_QMARK_,selected_id,callbacks,editing], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,path], null)),algopop$leaderboardx$app$views$d3$draw_svg_$_iter__44585(cljs.core.rest(s__44586__$2)));
}
} else {
return null;
}
break;
}
});})(map__44583,map__44583__$1,nodes,paths,bounds,max_pagerank,non_edge_nodes,node_count))
,null,null));
});})(map__44583,map__44583__$1,nodes,paths,bounds,max_pagerank,non_edge_nodes,node_count))
;
return iter__7942__auto__(paths);
})(),(function (){var iter__7942__auto__ = ((function (map__44583,map__44583__$1,nodes,paths,bounds,max_pagerank,non_edge_nodes,node_count){
return (function algopop$leaderboardx$app$views$d3$draw_svg_$_iter__44591(s__44592){
return (new cljs.core.LazySeq(null,((function (map__44583,map__44583__$1,nodes,paths,bounds,max_pagerank,non_edge_nodes,node_count){
return (function (){
var s__44592__$1 = s__44592;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__44592__$1);
if(temp__6753__auto__){
var s__44592__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44592__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__44592__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__44594 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__44593 = (0);
while(true){
if((i__44593 < size__7941__auto__)){
var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__44593);
cljs.core.chunk_append(b__44594,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.d3.draw_node,node,node_count,max_pagerank,simulation,mouse_down_QMARK_,selected_id,callbacks,editing], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node)], null)));

var G__44598 = (i__44593 + (1));
i__44593 = G__44598;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44594),algopop$leaderboardx$app$views$d3$draw_svg_$_iter__44591(cljs.core.chunk_rest(s__44592__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44594),null);
}
} else {
var node = cljs.core.first(s__44592__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.d3.draw_node,node,node_count,max_pagerank,simulation,mouse_down_QMARK_,selected_id,callbacks,editing], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node)], null)),algopop$leaderboardx$app$views$d3$draw_svg_$_iter__44591(cljs.core.rest(s__44592__$2)));
}
} else {
return null;
}
break;
}
});})(map__44583,map__44583__$1,nodes,paths,bounds,max_pagerank,non_edge_nodes,node_count))
,null,null));
});})(map__44583,map__44583__$1,nodes,paths,bounds,max_pagerank,non_edge_nodes,node_count))
;
return iter__7942__auto__(non_edge_nodes);
})()))], null);
});
algopop.leaderboardx.app.views.d3.draw_graph = (function algopop$leaderboardx$app$views$d3$draw_graph(this$,drawable,simulation,mouse_down_QMARK_,selected_id,editing,root){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"60vh"], null),cljs.core.cst$kw$on_DASH_mouse_DASH_down,(function algopop$leaderboardx$app$views$d3$draw_graph_$_graph_mouse_down(e){
e.preventDefault();

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouse_down_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouse_down_QMARK_,true));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_id,null) : cljs.core.reset_BANG_.call(null,selected_id,null));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(editing,null) : cljs.core.reset_BANG_.call(null,editing,null));
}),cljs.core.cst$kw$on_DASH_mouse_DASH_up,(function algopop$leaderboardx$app$views$d3$draw_graph_$_graph_mouse_up(e){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouse_down_QMARK_,null) : cljs.core.reset_BANG_.call(null,mouse_down_QMARK_,null));
}),cljs.core.cst$kw$on_DASH_mouse_DASH_move,(function algopop$leaderboardx$app$views$d3$draw_graph_$_graph_mouse_move(e){
var elem = reagent.dom.dom_node(this$);
var r = elem.getBoundingClientRect();
var left = r.left;
var top = r.top;
var width = r.width;
var height = r.height;
var vec__44608 = cljs.core.cst$kw$bounds.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(drawable) : cljs.core.deref.call(null,drawable)));
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44608,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44608,(1),null);
var bw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44608,(2),null);
var bh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44608,(3),null);
var cx = (bx + (bw / (2)));
var cy = (by + (bh / (2)));
var scale = (bw / (function (){var x__7425__auto__ = width;
var y__7426__auto__ = height;
return ((x__7425__auto__ < y__7426__auto__) ? x__7425__auto__ : y__7426__auto__);
})());
var ex = e.clientX;
var ey = e.clientY;
var divx = ((ex - left) - (width / (2)));
var divy = ((ey - top) - (height / (2)));
var x = ((divx * scale) + cx);
var y = ((divy * scale) + cy);
if(cljs.core.truth_((function (){var and__7073__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_id) : cljs.core.deref.call(null,selected_id));
if(cljs.core.truth_(and__7073__auto__)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mouse_down_QMARK_) : cljs.core.deref.call(null,mouse_down_QMARK_));
} else {
return and__7073__auto__;
}
})())){
var k = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_id) : cljs.core.deref.call(null,selected_id));
var temp__6753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(simulation.idxs,k);
if(cljs.core.truth_(temp__6753__auto__)){
var idx = temp__6753__auto__;
var temp__6753__auto____$1 = (simulation.nodes()[idx]);
if(cljs.core.truth_(temp__6753__auto____$1)){
var particle = temp__6753__auto____$1;
particle.fx = x;

particle.fy = y;

return algopop.leaderboardx.app.views.d3.restart_simulation(simulation);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.d3.draw_svg,drawable,simulation,mouse_down_QMARK_,selected_id,root,editing], null)], null);
});
algopop.leaderboardx.app.views.d3.create_simulation = (function algopop$leaderboardx$app$views$d3$create_simulation(){
return (function (){var G__44615 = [];
return d3.forceSimulation(G__44615);
})().force("charge",(function (){var G__44616 = d3.forceManyBody();
G__44616.distanceMax((300));

G__44616.strength((-100));

return G__44616;
})()).force("link",(function (){var G__44617 = (function (){var G__44618 = [];
return d3.forceLink(G__44618);
})();
G__44617.distance(((function (G__44617){
return (function (link,idx){
var or__7085__auto__ = link.weight;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return (30);
}
});})(G__44617))
);

return G__44617;
})());
});
algopop.leaderboardx.app.views.d3.graph = (function algopop$leaderboardx$app$views$d3$graph(nodes,edges,selected_id,editing,callbacks){
var snapshot = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bounds,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null)], null));
var simulation = algopop.leaderboardx.app.views.d3.create_simulation();
var mouse_down_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var watch = ((function (snapshot,simulation,mouse_down_QMARK_){
return (function algopop$leaderboardx$app$views$d3$graph_$_a_graph_watcher(k,r,a,b){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
algopop.leaderboardx.app.views.d3.update_simulation(simulation,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nodes) : cljs.core.deref.call(null,nodes)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(edges) : cljs.core.deref.call(null,edges)));

return algopop.leaderboardx.app.views.d3.restart_simulation(simulation);
} else {
return null;
}
});})(snapshot,simulation,mouse_down_QMARK_))
;
algopop.leaderboardx.app.views.d3.update_simulation(simulation,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nodes) : cljs.core.deref.call(null,nodes)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(edges) : cljs.core.deref.call(null,edges)));

cljs.core.add_watch(nodes,cljs.core.cst$kw$watch_DASH_nodes,watch);

cljs.core.add_watch(edges,cljs.core.cst$kw$watch_DASH_edges,watch);

simulation.on("tick",((function (snapshot,simulation,mouse_down_QMARK_,watch){
return (function algopop$leaderboardx$app$views$d3$graph_$_simulation_tick(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(snapshot,cljs.core.assoc,cljs.core.cst$kw$nodes,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(simulation.nodes(),cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,true], 0)),cljs.core.array_seq([cljs.core.cst$kw$paths,simulation.paths], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(snapshot,algopop.leaderboardx.app.views.d3.update_bounds,simulation.nodes());
});})(snapshot,simulation,mouse_down_QMARK_,watch))
);

return ((function (snapshot,simulation,mouse_down_QMARK_,watch){
return (function algopop$leaderboardx$app$views$d3$graph_$_graph_render(nodes__$1,edges__$1,selected_id__$1,editing__$1,callbacks__$1){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.d3.draw_graph,reagent.core.current_component(),snapshot,simulation,mouse_down_QMARK_,selected_id__$1,editing__$1,callbacks__$1], null);
});
;})(snapshot,simulation,mouse_down_QMARK_,watch))
});
