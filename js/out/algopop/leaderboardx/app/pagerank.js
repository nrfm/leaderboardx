// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('algopop.leaderboardx.app.pagerank');
goog.require('cljs.core');
/**
 * Returns a proportional vector of sum 1
 */
algopop.leaderboardx.app.pagerank.normalize_vector = (function algopop$leaderboardx$app$pagerank$normalize_vector(v){
var sum = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,v);
if((sum === (0))){
return v;
} else {
var iter__7942__auto__ = ((function (sum){
return (function algopop$leaderboardx$app$pagerank$normalize_vector_$_iter__34704(s__34705){
return (new cljs.core.LazySeq(null,((function (sum){
return (function (){
var s__34705__$1 = s__34705;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__34705__$1);
if(temp__6753__auto__){
var s__34705__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34705__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__34705__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__34707 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__34706 = (0);
while(true){
if((i__34706 < size__7941__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__34706);
cljs.core.chunk_append(b__34707,(x / sum));

var G__34710 = (i__34706 + (1));
i__34706 = G__34710;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34707),algopop$leaderboardx$app$pagerank$normalize_vector_$_iter__34704(cljs.core.chunk_rest(s__34705__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34707),null);
}
} else {
var x = cljs.core.first(s__34705__$2);
return cljs.core.cons((x / sum),algopop$leaderboardx$app$pagerank$normalize_vector_$_iter__34704(cljs.core.rest(s__34705__$2)));
}
} else {
return null;
}
break;
}
});})(sum))
,null,null));
});})(sum))
;
return iter__7942__auto__(v);
}
});
algopop.leaderboardx.app.pagerank.transpose = (function algopop$leaderboardx$app$pagerank$transpose(g){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,g);
});
/**
 * Returns a normalized matrix such that every column sums to 1
 */
algopop.leaderboardx.app.pagerank.normalize_matrix = (function algopop$leaderboardx$app$pagerank$normalize_matrix(g){
return algopop.leaderboardx.app.pagerank.transpose(cljs.core.map.cljs$core$IFn$_invoke$arity$2(algopop.leaderboardx.app.pagerank.normalize_vector,algopop.leaderboardx.app.pagerank.transpose(g)));
});
algopop.leaderboardx.app.pagerank.diff = (function algopop$leaderboardx$app$pagerank$diff(a,b){
if((a < b)){
return (b - a);
} else {
return (a - b);
}
});
algopop.leaderboardx.app.pagerank.vector_diff = (function algopop$leaderboardx$app$pagerank$vector_diff(a,b){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(algopop.leaderboardx.app.pagerank.diff,a,b));
});
algopop.leaderboardx.app.pagerank.vector_almost_equal_QMARK_ = (function algopop$leaderboardx$app$pagerank$vector_almost_equal_QMARK_(a,b,epsilon){
return (algopop.leaderboardx.app.pagerank.vector_diff(a,b) < epsilon);
});
/**
 * multiply inlinks and their pageranks
 */
algopop.leaderboardx.app.pagerank.pagerank_row = (function algopop$leaderboardx$app$pagerank$pagerank_row(prs,row){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,prs,row));
});
algopop.leaderboardx.app.pagerank.stabilized_QMARK_ = (function algopop$leaderboardx$app$pagerank$stabilized_QMARK_(x_old,x,epsilon){
return algopop.leaderboardx.app.pagerank.vector_almost_equal_QMARK_(x_old,x,epsilon);
});
/**
 * Account for new session starts.
 */
algopop.leaderboardx.app.pagerank.normalize_pageranks = (function algopop$leaderboardx$app$pagerank$normalize_pageranks(prs){
var n = cljs.core.count(prs);
var sum = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,prs);
var d = (((1) - sum) / n);
var iter__7942__auto__ = ((function (n,sum,d){
return (function algopop$leaderboardx$app$pagerank$normalize_pageranks_$_iter__34717(s__34718){
return (new cljs.core.LazySeq(null,((function (n,sum,d){
return (function (){
var s__34718__$1 = s__34718;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__34718__$1);
if(temp__6753__auto__){
var s__34718__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34718__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__34718__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__34720 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__34719 = (0);
while(true){
if((i__34719 < size__7941__auto__)){
var pr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__34719);
cljs.core.chunk_append(b__34720,(pr + d));

var G__34723 = (i__34719 + (1));
i__34719 = G__34723;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34720),algopop$leaderboardx$app$pagerank$normalize_pageranks_$_iter__34717(cljs.core.chunk_rest(s__34718__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34720),null);
}
} else {
var pr = cljs.core.first(s__34718__$2);
return cljs.core.cons((pr + d),algopop$leaderboardx$app$pagerank$normalize_pageranks_$_iter__34717(cljs.core.rest(s__34718__$2)));
}
} else {
return null;
}
break;
}
});})(n,sum,d))
,null,null));
});})(n,sum,d))
;
return iter__7942__auto__(prs);
});
/**
 * Given existing pageranks, calculate new pageranks.
 */
algopop.leaderboardx.app.pagerank.improve = (function algopop$leaderboardx$app$pagerank$improve(prs,g,click_through){
return algopop.leaderboardx.app.pagerank.normalize_pageranks((function (){var iter__7942__auto__ = (function algopop$leaderboardx$app$pagerank$improve_$_iter__34730(s__34731){
return (new cljs.core.LazySeq(null,(function (){
var s__34731__$1 = s__34731;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__34731__$1);
if(temp__6753__auto__){
var s__34731__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34731__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__34731__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__34733 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__34732 = (0);
while(true){
if((i__34732 < size__7941__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__34732);
cljs.core.chunk_append(b__34733,(click_through * algopop.leaderboardx.app.pagerank.pagerank_row(prs,row)));

var G__34736 = (i__34732 + (1));
i__34732 = G__34736;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34733),algopop$leaderboardx$app$pagerank$improve_$_iter__34730(cljs.core.chunk_rest(s__34731__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34733),null);
}
} else {
var row = cljs.core.first(s__34731__$2);
return cljs.core.cons((click_through * algopop.leaderboardx.app.pagerank.pagerank_row(prs,row)),algopop$leaderboardx$app$pagerank$improve_$_iter__34730(cljs.core.rest(s__34731__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7942__auto__(g);
})());
});
/**
 * Calls the improve function until the difference between iterations is less than epsilon.
 */
algopop.leaderboardx.app.pagerank.iteratively_improve = (function algopop$leaderboardx$app$pagerank$iteratively_improve(g,click_through,epsilon,previous,prs){
while(true){
if(cljs.core.truth_(algopop.leaderboardx.app.pagerank.stabilized_QMARK_(previous,prs,epsilon))){
return prs;
} else {
var G__34737 = g;
var G__34738 = click_through;
var G__34739 = epsilon;
var G__34740 = prs;
var G__34741 = algopop.leaderboardx.app.pagerank.improve(prs,g,click_through);
g = G__34737;
click_through = G__34738;
epsilon = G__34739;
previous = G__34740;
prs = G__34741;
continue;
}
break;
}
});
/**
 * Calculates the pagerank of each node in a graph.
 *   Takes a 2x2 matrix where a 1 represents a connection.
 *   Returns a vector of Pageranks.
 */
algopop.leaderboardx.app.pagerank.pagerank = (function algopop$leaderboardx$app$pagerank$pagerank(var_args){
var args34742 = [];
var len__8301__auto___34745 = arguments.length;
var i__8302__auto___34746 = (0);
while(true){
if((i__8302__auto___34746 < len__8301__auto___34745)){
args34742.push((arguments[i__8302__auto___34746]));

var G__34747 = (i__8302__auto___34746 + (1));
i__8302__auto___34746 = G__34747;
continue;
} else {
}
break;
}

var G__34744 = args34742.length;
switch (G__34744) {
case 1:
return algopop.leaderboardx.app.pagerank.pagerank.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return algopop.leaderboardx.app.pagerank.pagerank.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34742.length)].join('')));

}
});

algopop.leaderboardx.app.pagerank.pagerank.cljs$core$IFn$_invoke$arity$1 = (function (g){
return algopop.leaderboardx.app.pagerank.pagerank.cljs$core$IFn$_invoke$arity$3(g,0.85,0.001);
});

algopop.leaderboardx.app.pagerank.pagerank.cljs$core$IFn$_invoke$arity$3 = (function (g,click_through,epsilon){
var n = cljs.core.count(g);
var previous = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(1));
var initial_pageranks = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,((1) / n));
return algopop.leaderboardx.app.pagerank.iteratively_improve(algopop.leaderboardx.app.pagerank.normalize_matrix(g),click_through,epsilon,previous,initial_pageranks);
});

algopop.leaderboardx.app.pagerank.pagerank.cljs$lang$maxFixedArity = 3;

algopop.leaderboardx.app.pagerank.matrix_with_link = (function algopop$leaderboardx$app$pagerank$matrix_with_link(acc,p__34749){
var vec__34753 = p__34749;
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34753,(0),null);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34753,(1),null);
return cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to,from], null),(1));
});
algopop.leaderboardx.app.pagerank.graph__GT_matrix = (function algopop$leaderboardx$app$pagerank$graph__GT_matrix(node_ids,edges){
var n = cljs.core.count(node_ids);
var id__GT_idx = cljs.core.zipmap(node_ids,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var matrix = cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0)))));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(algopop.leaderboardx.app.pagerank.matrix_with_link,matrix,(function (){var iter__7942__auto__ = ((function (n,id__GT_idx,matrix){
return (function algopop$leaderboardx$app$pagerank$graph__GT_matrix_$_iter__34786(s__34787){
return (new cljs.core.LazySeq(null,((function (n,id__GT_idx,matrix){
return (function (){
var s__34787__$1 = s__34787;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__34787__$1);
if(temp__6753__auto__){
var s__34787__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34787__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__34787__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__34789 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__34788 = (0);
while(true){
if((i__34788 < size__7941__auto__)){
var map__34804 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__34788);
var map__34804__$1 = ((((!((map__34804 == null)))?((((map__34804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34804.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34804):map__34804);
var map__34805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34804__$1,cljs.core.cst$kw$from);
var map__34805__$1 = ((((!((map__34805 == null)))?((((map__34805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34805):map__34805);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34805__$1,cljs.core.cst$kw$db_SLASH_id);
var map__34806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34804__$1,cljs.core.cst$kw$to);
var map__34806__$1 = ((((!((map__34806 == null)))?((((map__34806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34806.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34806):map__34806);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34806__$1,cljs.core.cst$kw$db_SLASH_id);
cljs.core.chunk_append(b__34789,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(id__GT_idx.cljs$core$IFn$_invoke$arity$1 ? id__GT_idx.cljs$core$IFn$_invoke$arity$1(to) : id__GT_idx.call(null,to)),(id__GT_idx.cljs$core$IFn$_invoke$arity$1 ? id__GT_idx.cljs$core$IFn$_invoke$arity$1(from) : id__GT_idx.call(null,from))], null));

var G__34816 = (i__34788 + (1));
i__34788 = G__34816;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34789),algopop$leaderboardx$app$pagerank$graph__GT_matrix_$_iter__34786(cljs.core.chunk_rest(s__34787__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34789),null);
}
} else {
var map__34810 = cljs.core.first(s__34787__$2);
var map__34810__$1 = ((((!((map__34810 == null)))?((((map__34810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34810.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34810):map__34810);
var map__34811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34810__$1,cljs.core.cst$kw$from);
var map__34811__$1 = ((((!((map__34811 == null)))?((((map__34811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34811):map__34811);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34811__$1,cljs.core.cst$kw$db_SLASH_id);
var map__34812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34810__$1,cljs.core.cst$kw$to);
var map__34812__$1 = ((((!((map__34812 == null)))?((((map__34812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34812.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34812):map__34812);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34812__$1,cljs.core.cst$kw$db_SLASH_id);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(id__GT_idx.cljs$core$IFn$_invoke$arity$1 ? id__GT_idx.cljs$core$IFn$_invoke$arity$1(to) : id__GT_idx.call(null,to)),(id__GT_idx.cljs$core$IFn$_invoke$arity$1 ? id__GT_idx.cljs$core$IFn$_invoke$arity$1(from) : id__GT_idx.call(null,from))], null),algopop$leaderboardx$app$pagerank$graph__GT_matrix_$_iter__34786(cljs.core.rest(s__34787__$2)));
}
} else {
return null;
}
break;
}
});})(n,id__GT_idx,matrix))
,null,null));
});})(n,id__GT_idx,matrix))
;
return iter__7942__auto__(edges);
})());
});
algopop.leaderboardx.app.pagerank.same_rank_dups = (function algopop$leaderboardx$app$pagerank$same_rank_dups(p__34817,p__34818){
var vec__34825 = p__34817;
var prev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34825,(0),null);
var prev_pr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34825,(1),null);
var prev_rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34825,(2),null);
var vec__34828 = p__34818;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34828,(0),null);
var pr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34828,(1),null);
var rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34828,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pr,prev_pr)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,pr,prev_rank], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,pr,rank], null);
}
});
algopop.leaderboardx.app.pagerank.ranks = (function algopop$leaderboardx$app$pagerank$ranks(node_ids,edges){
var prs = algopop.leaderboardx.app.pagerank.pagerank.cljs$core$IFn$_invoke$arity$1(algopop.leaderboardx.app.pagerank.graph__GT_matrix(node_ids,edges));
var id_prs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,node_ids,prs);
var by_pr = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,id_prs));
var with_ranks = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,by_pr,cljs.core.iterate(cljs.core.inc,(1)));
var vec__34834 = with_ranks;
var seq__34835 = cljs.core.seq(vec__34834);
var first__34836 = cljs.core.first(seq__34835);
var seq__34835__$1 = cljs.core.next(seq__34835);
var first_rank = first__34836;
var next_ranks = seq__34835__$1;
var by_pr__$1 = vec__34834;
return cljs.core.cons(first_rank,cljs.core.map.cljs$core$IFn$_invoke$arity$3(algopop.leaderboardx.app.pagerank.same_rank_dups,with_ranks,next_ranks));
});
