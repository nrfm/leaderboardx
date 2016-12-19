// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('algopop.leaderboardx.app.graph');
goog.require('cljs.core');
goog.require('algopop.leaderboardx.app.pagerank');
goog.require('clojure.set');
goog.require('algopop.leaderboardx.app.db');
algopop.leaderboardx.app.graph.in_edges = (function algopop$leaderboardx$app$graph$in_edges(g,k){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7942__auto__ = (function algopop$leaderboardx$app$graph$in_edges_$_iter__36200(s__36201){
return (new cljs.core.LazySeq(null,(function (){
var s__36201__$1 = s__36201;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__36201__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var vec__36224 = cljs.core.first(xs__7309__auto__);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36224,(0),null);
var es = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36224,(1),null);
var iterys__7938__auto__ = ((function (s__36201__$1,vec__36224,from,es,xs__7309__auto__,temp__6753__auto__){
return (function algopop$leaderboardx$app$graph$in_edges_$_iter__36200_$_iter__36202(s__36203){
return (new cljs.core.LazySeq(null,((function (s__36201__$1,vec__36224,from,es,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__36203__$1 = s__36203;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__36203__$1);
if(temp__6753__auto____$1){
var s__36203__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36203__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__36203__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__36205 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__36204 = (0);
while(true){
if((i__36204 < size__7941__auto__)){
var vec__36235 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__36204);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36235,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36235,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,to)){
cljs.core.chunk_append(b__36205,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,to], null));

var G__36241 = (i__36204 + (1));
i__36204 = G__36241;
continue;
} else {
var G__36242 = (i__36204 + (1));
i__36204 = G__36242;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36205),algopop$leaderboardx$app$graph$in_edges_$_iter__36200_$_iter__36202(cljs.core.chunk_rest(s__36203__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36205),null);
}
} else {
var vec__36238 = cljs.core.first(s__36203__$2);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36238,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36238,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,to)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,to], null),algopop$leaderboardx$app$graph$in_edges_$_iter__36200_$_iter__36202(cljs.core.rest(s__36203__$2)));
} else {
var G__36243 = cljs.core.rest(s__36203__$2);
s__36203__$1 = G__36243;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__36201__$1,vec__36224,from,es,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__36201__$1,vec__36224,from,es,xs__7309__auto__,temp__6753__auto__))
;
var fs__7939__auto__ = cljs.core.seq(iterys__7938__auto__(es));
if(fs__7939__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7939__auto__,algopop$leaderboardx$app$graph$in_edges_$_iter__36200(cljs.core.rest(s__36201__$1)));
} else {
var G__36244 = cljs.core.rest(s__36201__$1);
s__36201__$1 = G__36244;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7942__auto__(cljs.core.cst$kw$edges.cljs$core$IFn$_invoke$arity$1(g));
})());
});
algopop.leaderboardx.app.graph.without_node = (function algopop$leaderboardx$app$graph$without_node(g,id){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nodes], null),cljs.core.dissoc,id),cljs.core.cst$kw$edges,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7942__auto__ = (function algopop$leaderboardx$app$graph$without_node_$_iter__36263(s__36264){
return (new cljs.core.LazySeq(null,(function (){
var s__36264__$1 = s__36264;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__36264__$1);
if(temp__6753__auto__){
var s__36264__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36264__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__36264__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__36266 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__36265 = (0);
while(true){
if((i__36265 < size__7941__auto__)){
var vec__36275 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__36265);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36275,(0),null);
var links = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36275,(1),null);
cljs.core.chunk_append(b__36266,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(links,id)], null));

var G__36281 = (i__36265 + (1));
i__36265 = G__36281;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36266),algopop$leaderboardx$app$graph$without_node_$_iter__36263(cljs.core.chunk_rest(s__36264__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36266),null);
}
} else {
var vec__36278 = cljs.core.first(s__36264__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36278,(0),null);
var links = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36278,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(links,id)], null),algopop$leaderboardx$app$graph$without_node_$_iter__36263(cljs.core.rest(s__36264__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7942__auto__(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$edges.cljs$core$IFn$_invoke$arity$1(g),id));
})()));
});
algopop.leaderboardx.app.graph.with_edge = (function algopop$leaderboardx$app$graph$with_edge(g,p__36282){
var vec__36286 = p__36282;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36286,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36286,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edges,from], null),cljs.core.merge,cljs.core.PersistentArrayMap.fromArray([to,cljs.core.PersistentArrayMap.EMPTY], true, false));
});
algopop.leaderboardx.app.graph.without_edge = (function algopop$leaderboardx$app$graph$without_edge(g,p__36289){
var vec__36293 = p__36289;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36293,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36293,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edges,from], null),cljs.core.dissoc,to);
});
algopop.leaderboardx.app.graph.without_edges = (function algopop$leaderboardx$app$graph$without_edges(var_args){
var args__8308__auto__ = [];
var len__8301__auto___36299 = arguments.length;
var i__8302__auto___36300 = (0);
while(true){
if((i__8302__auto___36300 < len__8301__auto___36299)){
args__8308__auto__.push((arguments[i__8302__auto___36300]));

var G__36301 = (i__8302__auto___36300 + (1));
i__8302__auto___36300 = G__36301;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((2) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((2)),(0),null)):null);
return algopop.leaderboardx.app.graph.without_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8309__auto__);
});

algopop.leaderboardx.app.graph.without_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,from,tos){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edges,from], null),cljs.core.dissoc,tos);
});

algopop.leaderboardx.app.graph.without_edges.cljs$lang$maxFixedArity = (2);

algopop.leaderboardx.app.graph.without_edges.cljs$lang$applyTo = (function (seq36296){
var G__36297 = cljs.core.first(seq36296);
var seq36296__$1 = cljs.core.next(seq36296);
var G__36298 = cljs.core.first(seq36296__$1);
var seq36296__$2 = cljs.core.next(seq36296__$1);
return algopop.leaderboardx.app.graph.without_edges.cljs$core$IFn$_invoke$arity$variadic(G__36297,G__36298,seq36296__$2);
});

algopop.leaderboardx.app.graph.merge_left = (function algopop$leaderboardx$app$graph$merge_left(var_args){
var args__8308__auto__ = [];
var len__8301__auto___36303 = arguments.length;
var i__8302__auto___36304 = (0);
while(true){
if((i__8302__auto___36304 < len__8301__auto___36303)){
args__8308__auto__.push((arguments[i__8302__auto___36304]));

var G__36305 = (i__8302__auto___36304 + (1));
i__8302__auto___36304 = G__36305;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((0) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((0)),(0),null)):null);
return algopop.leaderboardx.app.graph.merge_left.cljs$core$IFn$_invoke$arity$variadic(argseq__8309__auto__);
});

algopop.leaderboardx.app.graph.merge_left.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.reverse(maps));
});

algopop.leaderboardx.app.graph.merge_left.cljs$lang$maxFixedArity = (0);

algopop.leaderboardx.app.graph.merge_left.cljs$lang$applyTo = (function (seq36302){
return algopop.leaderboardx.app.graph.merge_left.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36302));
});

algopop.leaderboardx.app.graph.replace_in_edges = (function algopop$leaderboardx$app$graph$replace_in_edges(g,ins,k){
var old_ins = algopop.leaderboardx.app.graph.in_edges(g,k);
var removals = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(old_ins),cljs.core.set(ins));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (old_ins,removals){
return (function algopop$leaderboardx$app$graph$replace_in_edges_$_collect_ins(acc,in$){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edges,in$,k], null),algopop.leaderboardx.app.graph.merge_left,cljs.core.PersistentArrayMap.EMPTY);
});})(old_ins,removals))
,algopop.leaderboardx.app.graph.without_edges.cljs$core$IFn$_invoke$arity$variadic(g,k,cljs.core.array_seq([removals], 0)),ins);
});
algopop.leaderboardx.app.graph.replace_edges = (function algopop$leaderboardx$app$graph$replace_edges(g,k,outs,ins){
return algopop.leaderboardx.app.graph.replace_in_edges(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$6(g,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nodes], null),algopop.leaderboardx.app.graph.merge_left,cljs.core.PersistentArrayMap.fromArray([k,cljs.core.PersistentArrayMap.EMPTY], true, false),cljs.core.zipmap(outs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)),cljs.core.zipmap(ins,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edges,k], null),algopop.leaderboardx.app.graph.merge_left,cljs.core.zipmap(outs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY))),ins,k);
});
algopop.leaderboardx.app.graph.rename_in_edges = (function algopop$leaderboardx$app$graph$rename_in_edges(g,k,new_k,ins){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function algopop$leaderboardx$app$graph$rename_in_edges_$_rebuild_edges(acc,from){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edges,from], null),cljs.core.dissoc,k),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edges,from], null),algopop.leaderboardx.app.graph.merge_left,cljs.core.PersistentArrayMap.fromArray([new_k,cljs.core.PersistentArrayMap.EMPTY], true, false));
}),g,cljs.core.keys(ins));
});
algopop.leaderboardx.app.graph.rename_node = (function algopop$leaderboardx$app$graph$rename_node(g,k,new_k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new_k)){
return g;
} else {
var node = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nodes,k], null));
var outs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edges,k], null));
var ins = algopop.leaderboardx.app.graph.in_edges(g,k);
return algopop.leaderboardx.app.graph.rename_in_edges(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nodes], null),cljs.core.dissoc,k),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edges], null),cljs.core.dissoc,k),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nodes,new_k], null),algopop.leaderboardx.app.graph.merge_left,node),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edges,new_k], null),algopop.leaderboardx.app.graph.merge_left,outs),k,new_k,ins);
}
});
