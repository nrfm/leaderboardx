// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('posh.lib.q_analyze');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('datascript.core');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('cljs.core.match');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__7085__auto__ = cljs.core.empty_QMARK_(ls);
if(or__7085__auto__){
return or__7085__auto__;
} else {
var G__33500 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__33500) : stop_at_QMARK_.call(null,G__33500));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__33501 = stop_at_QMARK_;
var G__33502 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__33501,G__33502) : posh.lib.q_analyze.take_until.call(null,G__33501,G__33502));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__7085__auto__ = cljs.core.empty_QMARK_(ls);
if(or__7085__auto__){
return or__7085__auto__;
} else {
var G__33506 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__33506) : rest_at_QMARK_.call(null,G__33506));
}
})())){
return ls;
} else {
var G__33507 = rest_at_QMARK_;
var G__33508 = cljs.core.rest(ls);
rest_at_QMARK_ = G__33507;
ls = G__33508;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.fromArray([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))], true, false),(function (){var G__33511 = split_at_QMARK_;
var G__33512 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__33511,G__33512) : posh.lib.q_analyze.split_list_at.call(null,G__33511,G__33512));
})()], 0));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if(!(cljs.core.map_QMARK_(query))){
return posh.lib.q_analyze.split_list_at(cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first([cljs.core.str(x)].join('')),"$"));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first([cljs.core.str(x)].join('')),"?"));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_(query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(query))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__33517 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__33517) : posh.lib.q_analyze.get_all_vars.call(null,G__33517));
})(),(function (){var G__33518 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__33518) : posh.lib.q_analyze.get_all_vars.call(null,G__33518));
})());
} else {
if(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__33519 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__33519) : posh.lib.q_analyze.get_all_vars.call(null,G__33519));
})(),cljs.core.first(query));
} else {
var G__33520 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__33520) : posh.lib.q_analyze.get_all_vars.call(null,G__33520));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((3284832)) : cljs.core.atom.call(null,(3284832)));
return ((function (qvar_count){
return (function (){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("?var"),cljs.core.str(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(qvar_count,cljs.core.inc))].join(''));
});
;})(qvar_count))
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return (cljs.core.vector_QMARK_(v)) && (cljs.core.not(cljs.core.some(cljs.core.coll_QMARK_,v)));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,cljs.core.cst$sym$_);
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$eav,neweav,cljs.core.cst$kw$vars,vars], null);
} else {
if(cljs.core.truth_((function (){var and__7073__auto__ = cljs.core.first(eav);
if(cljs.core.truth_(and__7073__auto__)){
return cljs.core.not(posh.lib.q_analyze.wildcard_QMARK_(cljs.core.first(eav)));
} else {
return and__7073__auto__;
}
})())){
var G__33529 = cljs.core.rest(eav);
var G__33530 = (n - (1));
var G__33531 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__33532 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__33529,G__33530,G__33531,G__33532) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__33529,G__33530,G__33531,G__33532));
} else {
var var$ = (posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0 ? posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0() : posh.lib.q_analyze.qvar_gen.call(null));
var G__33533 = cljs.core.rest(eav);
var G__33534 = (n - (1));
var G__33535 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__33536 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__33533,G__33534,G__33535,G__33536) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__33533,G__33534,G__33535,G__33536));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = (cljs.core.truth_(posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(eav)))?eav:cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("$"),eav));
return cljs.core.vec(cljs.core.cons(cljs.core.first(dbeav),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$eav.cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper(cljs.core.rest(dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_(where)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([cljs.core.first(where)], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$or_DASH_join,cljs.core.cst$sym$not_DASH_join], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__33539 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__33539) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__33539));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__33540 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__33540) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__33540));
})());
}
} else {
if(cljs.core.truth_(posh.lib.q_analyze.eav_QMARK_(where))){
return posh.lib.q_analyze.normalize_eav(where);
} else {
if((cljs.core.vector_QMARK_(where)) && (cljs.core.list_QMARK_(cljs.core.first(where)))){
return where;
} else {
if(cljs.core.coll_QMARK_(where)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first(where);
if(cljs.core.seq_QMARK_(item)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([cljs.core.first(item)], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$or_DASH_join,cljs.core.cst$sym$not_DASH_join], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__33562 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__33562) : posh.lib.q_analyze.get_eavs.call(null,G__33562));
})(),(function (){var G__33563 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__33563) : posh.lib.q_analyze.get_eavs.call(null,G__33563));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__33564 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__33564) : posh.lib.q_analyze.get_eavs.call(null,G__33564));
})(),(function (){var G__33565 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__33565) : posh.lib.q_analyze.get_eavs.call(null,G__33565));
})());
}
} else {
if(cljs.core.truth_(posh.lib.q_analyze.eav_QMARK_(item))){
return cljs.core.cons(item,(function (){var G__33566 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__33566) : posh.lib.q_analyze.get_eavs.call(null,G__33566));
})());
} else {
if((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item)))){
var ocr_33567 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if((cljs.core.vector_QMARK_(ocr_33567)) && ((cljs.core.count(ocr_33567) === 2))){
try{var ocr_33567_0__33570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33567,(0));
if((cljs.core.vector_QMARK_(ocr_33567_0__33570)) && ((cljs.core.count(ocr_33567_0__33570) === 5))){
try{var ocr_33567_0__33570_0__33572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33567_0__33570,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_33567_0__33570_0__33572,cljs.core.cst$sym$get_DASH_else)){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33567_0__33570,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33567_0__33570,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33567_0__33570,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33567,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__33581 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__33581) : posh.lib.q_analyze.get_eavs.call(null,G__33581));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e33580){if((e33580 instanceof Error)){
var e__32591__auto__ = e33580;
if((e__32591__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto__;
}
} else {
throw e33580;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33579){if((e33579 instanceof Error)){
var e__32591__auto__ = e33579;
if((e__32591__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto__;
}
} else {
throw e33579;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33577){if((e33577 instanceof Error)){
var e__32591__auto__ = e33577;
if((e__32591__auto__ === cljs.core.match.backtrack)){
var G__33578 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__33578) : posh.lib.q_analyze.get_eavs.call(null,G__33578));
} else {
throw e__32591__auto__;
}
} else {
throw e33577;

}
}} else {
var G__33582 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__33582) : posh.lib.q_analyze.get_eavs.call(null,G__33582));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__33587){
var vec__33588 = p__33587;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33588,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33588,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.array_seq([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vs){
return (function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vs){
return (function (p1__33591_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_(p1__33591_SHARP_))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__33591_SHARP_);
} else {
return p1__33591_SHARP_;
}
});})(vs))
,eav));
});})(vs))
,eavs);
}),cljs.core.array_seq([results], 0)));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_(xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(xs))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.array_seq([(function (){var G__33595 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__33595) : posh.lib.q_analyze.count_qvars.call(null,G__33595));
})(),(function (){var G__33596 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__33596) : posh.lib.q_analyze.count_qvars.call(null,G__33596));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.array_seq([(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.fromArray([cljs.core.first(xs),(1)], true, false):null),(function (){var G__33597 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__33597) : posh.lib.q_analyze.count_qvars.call(null,G__33597));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__7942__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__33604(s__33605){
return (new cljs.core.LazySeq(null,(function (){
var s__33605__$1 = s__33605;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__33605__$1);
if(temp__6753__auto__){
var s__33605__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33605__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__33605__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__33607 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__33606 = (0);
while(true){
if((i__33606 < size__7941__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__33606);
cljs.core.chunk_append(b__33607,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__33610 = (i__33606 + (1));
i__33606 = G__33610;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33607),posh$lib$q_analyze$fill_qvar_set_$_iter__33604(cljs.core.chunk_rest(s__33605__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33607),null);
}
} else {
var r = cljs.core.first(s__33605__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__33604(cljs.core.rest(s__33605__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7942__auto__(results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_(seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons((function (){var G__33616 = cljs.core.first(seq1);
var G__33617 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__33616,G__33617) : f.call(null,G__33616,G__33617));
})(),(function (){var G__33618 = f;
var G__33619 = cljs.core.rest(seq1);
var G__33620 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__33618,G__33619,G__33620) : posh.lib.q_analyze.seq_merge_with.call(null,G__33618,G__33619,G__33620));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__33623){
var vec__33713 = p__33623;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33713,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33713,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33713,(2),null);
var eav = vec__33713;
var vec__33716 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33716,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33716,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33716,(2),null);
var iter__7942__auto__ = ((function (vec__33716,qe,qa,qv,vec__33713,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__33719(s__33720){
return (new cljs.core.LazySeq(null,((function (vec__33716,qe,qa,qv,vec__33713,e,a,v,eav){
return (function (){
var s__33720__$1 = s__33720;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__33720__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var ee = cljs.core.first(xs__7309__auto__);
var iterys__7938__auto__ = ((function (s__33720__$1,ee,xs__7309__auto__,temp__6753__auto__,vec__33716,qe,qa,qv,vec__33713,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__33719_$_iter__33721(s__33722){
return (new cljs.core.LazySeq(null,((function (s__33720__$1,ee,xs__7309__auto__,temp__6753__auto__,vec__33716,qe,qa,qv,vec__33713,e,a,v,eav){
return (function (){
var s__33722__$1 = s__33722;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__33722__$1);
if(temp__6753__auto____$1){
var xs__7309__auto____$1 = temp__6753__auto____$1;
var aa = cljs.core.first(xs__7309__auto____$1);
var iterys__7938__auto__ = ((function (s__33722__$1,s__33720__$1,aa,xs__7309__auto____$1,temp__6753__auto____$1,ee,xs__7309__auto__,temp__6753__auto__,vec__33716,qe,qa,qv,vec__33713,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__33719_$_iter__33721_$_iter__33723(s__33724){
return (new cljs.core.LazySeq(null,((function (s__33722__$1,s__33720__$1,aa,xs__7309__auto____$1,temp__6753__auto____$1,ee,xs__7309__auto__,temp__6753__auto__,vec__33716,qe,qa,qv,vec__33713,e,a,v,eav){
return (function (){
var s__33724__$1 = s__33724;
while(true){
var temp__6753__auto____$2 = cljs.core.seq(s__33724__$1);
if(temp__6753__auto____$2){
var s__33724__$2 = temp__6753__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__33724__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__33724__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__33726 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__33725 = (0);
while(true){
if((i__33725 < size__7941__auto__)){
var vv = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__33725);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__33725,s__33724__$1,s__33722__$1,s__33720__$1,vv,c__7940__auto__,size__7941__auto__,b__33726,s__33724__$2,temp__6753__auto____$2,aa,xs__7309__auto____$1,temp__6753__auto____$1,ee,xs__7309__auto__,temp__6753__auto__,vec__33716,qe,qa,qv,vec__33713,e,a,v,eav){
return (function (p1__33621_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,p1__33621_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__33725,s__33724__$1,s__33722__$1,s__33720__$1,vv,c__7940__auto__,size__7941__auto__,b__33726,s__33724__$2,temp__6753__auto____$2,aa,xs__7309__auto____$1,temp__6753__auto____$1,ee,xs__7309__auto__,temp__6753__auto__,vec__33716,qe,qa,qv,vec__33713,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__33725,s__33724__$1,s__33722__$1,s__33720__$1,wildcard_count,vv,c__7940__auto__,size__7941__auto__,b__33726,s__33724__$2,temp__6753__auto____$2,aa,xs__7309__auto____$1,temp__6753__auto____$1,ee,xs__7309__auto__,temp__6753__auto__,vec__33716,qe,qa,qv,vec__33713,e,a,v,eav){
return (function (p__33794){
var vec__33795 = p__33794;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33795,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33795,(1),null);
if(cljs.core.truth_((function (){var and__7073__auto__ = var_QMARK_;
if(cljs.core.truth_(and__7073__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,cljs.core.cst$sym$_);
} else {
return and__7073__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__33725,s__33724__$1,s__33722__$1,s__33720__$1,wildcard_count,vv,c__7940__auto__,size__7941__auto__,b__33726,s__33724__$2,temp__6753__auto____$2,aa,xs__7309__auto____$1,temp__6753__auto____$1,ee,xs__7309__auto__,temp__6753__auto__,vec__33716,qe,qa,qv,vec__33713,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__33725,s__33724__$1,s__33722__$1,s__33720__$1,wildcard_count,exposed_qvars,vv,c__7940__auto__,size__7941__auto__,b__33726,s__33724__$2,temp__6753__auto____$2,aa,xs__7309__auto____$1,temp__6753__auto____$1,ee,xs__7309__auto__,temp__6753__auto__,vec__33716,qe,qa,qv,vec__33713,e,a,v,eav){
return (function (p1__33622_SHARP_){
if(cljs.core.truth_(p1__33622_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__33725,s__33724__$1,s__33722__$1,s__33720__$1,wildcard_count,exposed_qvars,vv,c__7940__auto__,size__7941__auto__,b__33726,s__33724__$2,temp__6753__auto____$2,aa,xs__7309__auto____$1,temp__6753__auto____$1,ee,xs__7309__auto__,temp__6753__auto__,vec__33716,qe,qa,qv,vec__33713,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return ((wildcard_count >= (1))) && ((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars))) || ((qvar_count <= (1)))) && ((wildcard_count <= qvar_count));
})()){
cljs.core.chunk_append(b__33726,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__33802 = (i__33725 + (1));
i__33725 = G__33802;
continue;
} else {
var G__33803 = (i__33725 + (1));
i__33725 = G__33803;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33726),posh$lib$q_analyze$pattern_from_eav__old_$_iter__33719_$_iter__33721_$_iter__33723(cljs.core.chunk_rest(s__33724__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33726),null);
}
} else {
var vv = cljs.core.first(s__33724__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__33724__$1,s__33722__$1,s__33720__$1,vv,s__33724__$2,temp__6753__auto____$2,aa,xs__7309__auto____$1,temp__6753__auto____$1,ee,xs__7309__auto__,temp__6753__auto__,vec__33716,qe,qa,qv,vec__33713,e,a,v,eav){
return (function (p1__33621_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,p1__33621_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__33724__$1,s__33722__$1,s__33720__$1,vv,s__33724__$2,temp__6753__auto____$2,aa,xs__7309__auto____$1,temp__6753__auto____$1,ee,xs__7309__auto__,temp__6753__auto__,vec__33716,qe,qa,qv,vec__33713,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__33724__$1,s__33722__$1,s__33720__$1,wildcard_count,vv,s__33724__$2,temp__6753__auto____$2,aa,xs__7309__auto____$1,temp__6753__auto____$1,ee,xs__7309__auto__,temp__6753__auto__,vec__33716,qe,qa,qv,vec__33713,e,a,v,eav){
return (function (p__33798){
var vec__33799 = p__33798;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33799,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33799,(1),null);
if(cljs.core.truth_((function (){var and__7073__auto__ = var_QMARK_;
if(cljs.core.truth_(and__7073__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,cljs.core.cst$sym$_);
} else {
return and__7073__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__33724__$1,s__33722__$1,s__33720__$1,wildcard_count,vv,s__33724__$2,temp__6753__auto____$2,aa,xs__7309__auto____$1,temp__6753__auto____$1,ee,xs__7309__auto__,temp__6753__auto__,vec__33716,qe,qa,qv,vec__33713,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__33724__$1,s__33722__$1,s__33720__$1,wildcard_count,exposed_qvars,vv,s__33724__$2,temp__6753__auto____$2,aa,xs__7309__auto____$1,temp__6753__auto____$1,ee,xs__7309__auto__,temp__6753__auto__,vec__33716,qe,qa,qv,vec__33713,e,a,v,eav){
return (function (p1__33622_SHARP_){
if(cljs.core.truth_(p1__33622_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__33724__$1,s__33722__$1,s__33720__$1,wildcard_count,exposed_qvars,vv,s__33724__$2,temp__6753__auto____$2,aa,xs__7309__auto____$1,temp__6753__auto____$1,ee,xs__7309__auto__,temp__6753__auto__,vec__33716,qe,qa,qv,vec__33713,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return ((wildcard_count >= (1))) && ((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars))) || ((qvar_count <= (1)))) && ((wildcard_count <= qvar_count));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__33719_$_iter__33721_$_iter__33723(cljs.core.rest(s__33724__$2)));
} else {
var G__33804 = cljs.core.rest(s__33724__$2);
s__33724__$1 = G__33804;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__33722__$1,s__33720__$1,aa,xs__7309__auto____$1,temp__6753__auto____$1,ee,xs__7309__auto__,temp__6753__auto__,vec__33716,qe,qa,qv,vec__33713,e,a,v,eav))
,null,null));
});})(s__33722__$1,s__33720__$1,aa,xs__7309__auto____$1,temp__6753__auto____$1,ee,xs__7309__auto__,temp__6753__auto__,vec__33716,qe,qa,qv,vec__33713,e,a,v,eav))
;
var fs__7939__auto__ = cljs.core.seq(iterys__7938__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__7939__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7939__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__33719_$_iter__33721(cljs.core.rest(s__33722__$1)));
} else {
var G__33805 = cljs.core.rest(s__33722__$1);
s__33722__$1 = G__33805;
continue;
}
} else {
return null;
}
break;
}
});})(s__33720__$1,ee,xs__7309__auto__,temp__6753__auto__,vec__33716,qe,qa,qv,vec__33713,e,a,v,eav))
,null,null));
});})(s__33720__$1,ee,xs__7309__auto__,temp__6753__auto__,vec__33716,qe,qa,qv,vec__33713,e,a,v,eav))
;
var fs__7939__auto__ = cljs.core.seq(iterys__7938__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__7939__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7939__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__33719(cljs.core.rest(s__33720__$1)));
} else {
var G__33806 = cljs.core.rest(s__33720__$1);
s__33720__$1 = G__33806;
continue;
}
} else {
return null;
}
break;
}
});})(vec__33716,qe,qa,qv,vec__33713,e,a,v,eav))
,null,null));
});})(vec__33716,qe,qa,qv,vec__33713,e,a,v,eav))
;
return iter__7942__auto__((cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__7085__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return cljs.core.cst$sym$_;
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_33916 = cljs.core.vec(eav);
var ocr_33917 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if((cljs.core.vector_QMARK_(ocr_33916)) && ((cljs.core.count(ocr_33916) === 3))){
try{var ocr_33916_0__33945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_33916_0__33945,cljs.core.cst$sym$_)){
try{var ocr_33916_1__33946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_33916_1__33946,cljs.core.cst$sym$_)){
try{var ocr_33916_2__33947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_33916_2__33947,cljs.core.cst$sym$_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34021){if((e34021 instanceof Error)){
var e__32591__auto__ = e34021;
if((e__32591__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_(ocr_33917)) && ((cljs.core.count(ocr_33917) === 3))){
try{var ocr_33917_2__33950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(2));
if((ocr_33917_2__33950 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34023){if((e34023 instanceof Error)){
var e__32591__auto____$1 = e34023;
if((e__32591__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_33917_2__33950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(2));
if((ocr_33917_2__33950 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34024){if((e34024 instanceof Error)){
var e__32591__auto____$2 = e34024;
if((e__32591__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$2;
}
} else {
throw e34024;

}
}} else {
throw e__32591__auto____$1;
}
} else {
throw e34023;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34022){if((e34022 instanceof Error)){
var e__32591__auto____$1 = e34022;
if((e__32591__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$1;
}
} else {
throw e34022;

}
}} else {
throw e__32591__auto__;
}
} else {
throw e34021;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34016){if((e34016 instanceof Error)){
var e__32591__auto__ = e34016;
if((e__32591__auto__ === cljs.core.match.backtrack)){
try{var ocr_33916_2__33947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_33916_2__33947,cljs.core.cst$sym$_)){
try{if((cljs.core.vector_QMARK_(ocr_33917)) && ((cljs.core.count(ocr_33917) === 3))){
try{var ocr_33917_1__33952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(1));
if((ocr_33917_1__33952 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,a,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34019){if((e34019 instanceof Error)){
var e__32591__auto____$1 = e34019;
if((e__32591__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_33917_1__33952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(1));
if((ocr_33917_1__33952 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,posh.lib.q_analyze.get_(vars,a),cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34020){if((e34020 instanceof Error)){
var e__32591__auto____$2 = e34020;
if((e__32591__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$2;
}
} else {
throw e34020;

}
}} else {
throw e__32591__auto____$1;
}
} else {
throw e34019;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34018){if((e34018 instanceof Error)){
var e__32591__auto____$1 = e34018;
if((e__32591__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$1;
}
} else {
throw e34018;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34017){if((e34017 instanceof Error)){
var e__32591__auto____$1 = e34017;
if((e__32591__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$1;
}
} else {
throw e34017;

}
}} else {
throw e__32591__auto__;
}
} else {
throw e34016;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33958){if((e33958 instanceof Error)){
var e__32591__auto__ = e33958;
if((e__32591__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_(ocr_33917)) && ((cljs.core.count(ocr_33917) === 3))){
try{var ocr_33917_0__33954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(0));
if((ocr_33917_0__33954 === false)){
try{var ocr_33916_1__33946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_33916_1__33946,cljs.core.cst$sym$_)){
try{var ocr_33916_2__33947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_33916_2__33947,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,cljs.core.cst$sym$_,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34015){if((e34015 instanceof Error)){
var e__32591__auto____$1 = e34015;
if((e__32591__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$1;
}
} else {
throw e34015;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34014){if((e34014 instanceof Error)){
var e__32591__auto____$1 = e34014;
if((e__32591__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$1;
}
} else {
throw e34014;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33960){if((e33960 instanceof Error)){
var e__32591__auto____$1 = e33960;
if((e__32591__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_33917_0__33954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(0));
if((ocr_33917_0__33954 === true)){
try{var ocr_33916_2__33947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_33916_2__33947,cljs.core.cst$sym$_)){
try{var ocr_33916_1__33946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_33916_1__33946,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),cljs.core.cst$sym$_,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34011){if((e34011 instanceof Error)){
var e__32591__auto____$2 = e34011;
if((e__32591__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_33917_1__33955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(1));
if((ocr_33917_1__33955 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),cljs.core.cst$sym$_,cljs.core.cst$sym$_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,posh.lib.q_analyze.get_(vars,a),cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34012){if((e34012 instanceof Error)){
var e__32591__auto____$3 = e34012;
if((e__32591__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_33917_1__33955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(1));
if((ocr_33917_1__33955 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34013){if((e34013 instanceof Error)){
var e__32591__auto____$4 = e34013;
if((e__32591__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$4;
}
} else {
throw e34013;

}
}} else {
throw e__32591__auto____$3;
}
} else {
throw e34012;

}
}} else {
throw e__32591__auto____$2;
}
} else {
throw e34011;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34010){if((e34010 instanceof Error)){
var e__32591__auto____$2 = e34010;
if((e__32591__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$2;
}
} else {
throw e34010;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33961){if((e33961 instanceof Error)){
var e__32591__auto____$2 = e33961;
if((e__32591__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_33917_0__33954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(0));
if((ocr_33917_0__33954 === false)){
try{var ocr_33917_1__33955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(1));
if((ocr_33917_1__33955 === true)){
try{var ocr_33916_2__33947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_33916_2__33947,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34009){if((e34009 instanceof Error)){
var e__32591__auto____$3 = e34009;
if((e__32591__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$3;
}
} else {
throw e34009;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34006){if((e34006 instanceof Error)){
var e__32591__auto____$3 = e34006;
if((e__32591__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_33917_1__33955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(1));
if((ocr_33917_1__33955 === false)){
try{var ocr_33916_2__33947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_33916_2__33947,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34008){if((e34008 instanceof Error)){
var e__32591__auto____$4 = e34008;
if((e__32591__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$4;
}
} else {
throw e34008;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34007){if((e34007 instanceof Error)){
var e__32591__auto____$4 = e34007;
if((e__32591__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$4;
}
} else {
throw e34007;

}
}} else {
throw e__32591__auto____$3;
}
} else {
throw e34006;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33962){if((e33962 instanceof Error)){
var e__32591__auto____$3 = e33962;
if((e__32591__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_33917_2__33956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(2));
if((ocr_33917_2__33956 === true)){
try{var ocr_33917_0__33954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(0));
if((ocr_33917_0__33954 === true)){
try{var ocr_33916_1__33946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_33916_1__33946,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),cljs.core.cst$sym$_,cljs.core.cst$sym$_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34005){if((e34005 instanceof Error)){
var e__32591__auto____$4 = e34005;
if((e__32591__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$4;
}
} else {
throw e34005;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34004){if((e34004 instanceof Error)){
var e__32591__auto____$4 = e34004;
if((e__32591__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$4;
}
} else {
throw e34004;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33963){if((e33963 instanceof Error)){
var e__32591__auto____$4 = e33963;
if((e__32591__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_33917_2__33956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(2));
if((ocr_33917_2__33956 === false)){
try{var ocr_33917_0__33954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(0));
if((ocr_33917_0__33954 === true)){
try{var ocr_33916_1__33946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_33916_1__33946,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),cljs.core.cst$sym$_,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34003){if((e34003 instanceof Error)){
var e__32591__auto____$5 = e34003;
if((e__32591__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$5;
}
} else {
throw e34003;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34002){if((e34002 instanceof Error)){
var e__32591__auto____$5 = e34002;
if((e__32591__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$5;
}
} else {
throw e34002;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33964){if((e33964 instanceof Error)){
var e__32591__auto____$5 = e33964;
if((e__32591__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_33917_2__33956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(2));
if((ocr_33917_2__33956 === true)){
try{var ocr_33917_0__33954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(0));
if((ocr_33917_0__33954 === false)){
try{var ocr_33916_1__33946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_33916_1__33946,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,cljs.core.cst$sym$_,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34001){if((e34001 instanceof Error)){
var e__32591__auto____$6 = e34001;
if((e__32591__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$6;
}
} else {
throw e34001;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34000){if((e34000 instanceof Error)){
var e__32591__auto____$6 = e34000;
if((e__32591__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$6;
}
} else {
throw e34000;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33965){if((e33965 instanceof Error)){
var e__32591__auto____$6 = e33965;
if((e__32591__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_33917_2__33956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(2));
if((ocr_33917_2__33956 === false)){
try{var ocr_33917_0__33954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(0));
if((ocr_33917_0__33954 === false)){
try{var ocr_33916_1__33946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_33916_1__33946,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,cljs.core.cst$sym$_,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33999){if((e33999 instanceof Error)){
var e__32591__auto____$7 = e33999;
if((e__32591__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$7;
}
} else {
throw e33999;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33998){if((e33998 instanceof Error)){
var e__32591__auto____$7 = e33998;
if((e__32591__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$7;
}
} else {
throw e33998;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33966){if((e33966 instanceof Error)){
var e__32591__auto____$7 = e33966;
if((e__32591__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_33917_2__33956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(2));
if((ocr_33917_2__33956 === true)){
try{var ocr_33917_1__33955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(1));
if((ocr_33917_1__33955 === true)){
try{var ocr_33916_0__33945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_33916_0__33945,cljs.core.cst$sym$_)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,posh.lib.q_analyze.get_(vars,a),cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33997){if((e33997 instanceof Error)){
var e__32591__auto____$8 = e33997;
if((e__32591__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$8;
}
} else {
throw e33997;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33996){if((e33996 instanceof Error)){
var e__32591__auto____$8 = e33996;
if((e__32591__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$8;
}
} else {
throw e33996;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33967){if((e33967 instanceof Error)){
var e__32591__auto____$8 = e33967;
if((e__32591__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_33917_2__33956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(2));
if((ocr_33917_2__33956 === false)){
try{var ocr_33917_1__33955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(1));
if((ocr_33917_1__33955 === true)){
try{var ocr_33916_0__33945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_33916_0__33945,cljs.core.cst$sym$_)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33995){if((e33995 instanceof Error)){
var e__32591__auto____$9 = e33995;
if((e__32591__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$9;
}
} else {
throw e33995;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33994){if((e33994 instanceof Error)){
var e__32591__auto____$9 = e33994;
if((e__32591__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$9;
}
} else {
throw e33994;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33968){if((e33968 instanceof Error)){
var e__32591__auto____$9 = e33968;
if((e__32591__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_33917_2__33956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(2));
if((ocr_33917_2__33956 === true)){
try{var ocr_33917_1__33955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(1));
if((ocr_33917_1__33955 === false)){
try{var ocr_33916_0__33945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_33916_0__33945,cljs.core.cst$sym$_)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33993){if((e33993 instanceof Error)){
var e__32591__auto____$10 = e33993;
if((e__32591__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$10;
}
} else {
throw e33993;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33992){if((e33992 instanceof Error)){
var e__32591__auto____$10 = e33992;
if((e__32591__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$10;
}
} else {
throw e33992;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33969){if((e33969 instanceof Error)){
var e__32591__auto____$10 = e33969;
if((e__32591__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_33917_2__33956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(2));
if((ocr_33917_2__33956 === false)){
try{var ocr_33917_1__33955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(1));
if((ocr_33917_1__33955 === false)){
try{var ocr_33916_0__33945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_33916_0__33945,cljs.core.cst$sym$_)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33991){if((e33991 instanceof Error)){
var e__32591__auto____$11 = e33991;
if((e__32591__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$11;
}
} else {
throw e33991;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33990){if((e33990 instanceof Error)){
var e__32591__auto____$11 = e33990;
if((e__32591__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$11;
}
} else {
throw e33990;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33970){if((e33970 instanceof Error)){
var e__32591__auto____$11 = e33970;
if((e__32591__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_33917_2__33956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(2));
if((ocr_33917_2__33956 === true)){
try{var ocr_33917_0__33954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(0));
if((ocr_33917_0__33954 === true)){
try{var ocr_33917_1__33955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(1));
if((ocr_33917_1__33955 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,posh.lib.q_analyze.get_(vars,a),cljs.core.cst$sym$_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),cljs.core.cst$sym$_,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33989){if((e33989 instanceof Error)){
var e__32591__auto____$12 = e33989;
if((e__32591__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$12;
}
} else {
throw e33989;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33984){if((e33984 instanceof Error)){
var e__32591__auto____$12 = e33984;
if((e__32591__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_33917_0__33954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(0));
if((ocr_33917_0__33954 === false)){
try{var ocr_33917_1__33955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(1));
if((ocr_33917_1__33955 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,cljs.core.cst$sym$_,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33988){if((e33988 instanceof Error)){
var e__32591__auto____$13 = e33988;
if((e__32591__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$13;
}
} else {
throw e33988;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33985){if((e33985 instanceof Error)){
var e__32591__auto____$13 = e33985;
if((e__32591__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_33917_0__33954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(0));
if((ocr_33917_0__33954 === true)){
try{var ocr_33917_1__33955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(1));
if((ocr_33917_1__33955 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33987){if((e33987 instanceof Error)){
var e__32591__auto____$14 = e33987;
if((e__32591__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$14;
}
} else {
throw e33987;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33986){if((e33986 instanceof Error)){
var e__32591__auto____$14 = e33986;
if((e__32591__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$14;
}
} else {
throw e33986;

}
}} else {
throw e__32591__auto____$13;
}
} else {
throw e33985;

}
}} else {
throw e__32591__auto____$12;
}
} else {
throw e33984;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33971){if((e33971 instanceof Error)){
var e__32591__auto____$12 = e33971;
if((e__32591__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_33917_2__33956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(2));
if((ocr_33917_2__33956 === false)){
try{var ocr_33917_0__33954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(0));
if((ocr_33917_0__33954 === true)){
try{var ocr_33917_1__33955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(1));
if((ocr_33917_1__33955 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),cljs.core.cst$sym$_,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33983){if((e33983 instanceof Error)){
var e__32591__auto____$13 = e33983;
if((e__32591__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$13;
}
} else {
throw e33983;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33982){if((e33982 instanceof Error)){
var e__32591__auto____$13 = e33982;
if((e__32591__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$13;
}
} else {
throw e33982;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33972){if((e33972 instanceof Error)){
var e__32591__auto____$13 = e33972;
if((e__32591__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_33917_2__33956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(2));
if((ocr_33917_2__33956 === true)){
try{var ocr_33917_0__33954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(0));
if((ocr_33917_0__33954 === false)){
try{var ocr_33917_1__33955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(1));
if((ocr_33917_1__33955 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33981){if((e33981 instanceof Error)){
var e__32591__auto____$14 = e33981;
if((e__32591__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$14;
}
} else {
throw e33981;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33980){if((e33980 instanceof Error)){
var e__32591__auto____$14 = e33980;
if((e__32591__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$14;
}
} else {
throw e33980;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33973){if((e33973 instanceof Error)){
var e__32591__auto____$14 = e33973;
if((e__32591__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_33917_2__33956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(2));
if((ocr_33917_2__33956 === false)){
try{var ocr_33917_0__33954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(0));
if((ocr_33917_0__33954 === true)){
try{var ocr_33917_1__33955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(1));
if((ocr_33917_1__33955 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33979){if((e33979 instanceof Error)){
var e__32591__auto____$15 = e33979;
if((e__32591__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$15;
}
} else {
throw e33979;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33975){if((e33975 instanceof Error)){
var e__32591__auto____$15 = e33975;
if((e__32591__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_33917_0__33954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(0));
if((ocr_33917_0__33954 === false)){
try{var ocr_33917_1__33955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(1));
if((ocr_33917_1__33955 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,cljs.core.cst$sym$_,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33977){if((e33977 instanceof Error)){
var e__32591__auto____$16 = e33977;
if((e__32591__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_33917_1__33955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33917,(1));
if((ocr_33917_1__33955 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_33916,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33978){if((e33978 instanceof Error)){
var e__32591__auto____$17 = e33978;
if((e__32591__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$17;
}
} else {
throw e33978;

}
}} else {
throw e__32591__auto____$16;
}
} else {
throw e33977;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33976){if((e33976 instanceof Error)){
var e__32591__auto____$16 = e33976;
if((e__32591__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$16;
}
} else {
throw e33976;

}
}} else {
throw e__32591__auto____$15;
}
} else {
throw e33975;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33974){if((e33974 instanceof Error)){
var e__32591__auto____$15 = e33974;
if((e__32591__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$15;
}
} else {
throw e33974;

}
}} else {
throw e__32591__auto____$14;
}
} else {
throw e33973;

}
}} else {
throw e__32591__auto____$13;
}
} else {
throw e33972;

}
}} else {
throw e__32591__auto____$12;
}
} else {
throw e33971;

}
}} else {
throw e__32591__auto____$11;
}
} else {
throw e33970;

}
}} else {
throw e__32591__auto____$10;
}
} else {
throw e33969;

}
}} else {
throw e__32591__auto____$9;
}
} else {
throw e33968;

}
}} else {
throw e__32591__auto____$8;
}
} else {
throw e33967;

}
}} else {
throw e__32591__auto____$7;
}
} else {
throw e33966;

}
}} else {
throw e__32591__auto____$6;
}
} else {
throw e33965;

}
}} else {
throw e__32591__auto____$5;
}
} else {
throw e33964;

}
}} else {
throw e__32591__auto____$4;
}
} else {
throw e33963;

}
}} else {
throw e__32591__auto____$3;
}
} else {
throw e33962;

}
}} else {
throw e__32591__auto____$2;
}
} else {
throw e33961;

}
}} else {
throw e__32591__auto____$1;
}
} else {
throw e33960;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33959){if((e33959 instanceof Error)){
var e__32591__auto____$1 = e33959;
if((e__32591__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$1;
}
} else {
throw e33959;

}
}} else {
throw e__32591__auto__;
}
} else {
throw e33958;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e33957){if((e33957 instanceof Error)){
var e__32591__auto__ = e33957;
if((e__32591__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__32591__auto__;
}
} else {
throw e33957;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_34119 = cljs.core.vec(eav);
var ocr_34120 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if((cljs.core.vector_QMARK_(ocr_34119)) && ((cljs.core.count(ocr_34119) === 3))){
try{var ocr_34119_0__34145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34119_0__34145,cljs.core.cst$sym$_)){
try{var ocr_34119_1__34146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34119_1__34146,cljs.core.cst$sym$_)){
try{var ocr_34119_2__34147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34119_2__34147,cljs.core.cst$sym$_)){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e34209){if((e34209 instanceof Error)){
var e__32591__auto__ = e34209;
if((e__32591__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_(ocr_34120)) && ((cljs.core.count(ocr_34120) === 3))){
try{var ocr_34120_2__34150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(2));
if((ocr_34120_2__34150 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34211){if((e34211 instanceof Error)){
var e__32591__auto____$1 = e34211;
if((e__32591__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_34120_2__34150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(2));
if((ocr_34120_2__34150 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34212){if((e34212 instanceof Error)){
var e__32591__auto____$2 = e34212;
if((e__32591__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$2;
}
} else {
throw e34212;

}
}} else {
throw e__32591__auto____$1;
}
} else {
throw e34211;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34210){if((e34210 instanceof Error)){
var e__32591__auto____$1 = e34210;
if((e__32591__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$1;
}
} else {
throw e34210;

}
}} else {
throw e__32591__auto__;
}
} else {
throw e34209;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34204){if((e34204 instanceof Error)){
var e__32591__auto__ = e34204;
if((e__32591__auto__ === cljs.core.match.backtrack)){
try{var ocr_34119_2__34147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34119_2__34147,cljs.core.cst$sym$_)){
try{if((cljs.core.vector_QMARK_(ocr_34120)) && ((cljs.core.count(ocr_34120) === 3))){
try{var ocr_34120_1__34152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(1));
if((ocr_34120_1__34152 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,a,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34207){if((e34207 instanceof Error)){
var e__32591__auto____$1 = e34207;
if((e__32591__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_34120_1__34152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(1));
if((ocr_34120_1__34152 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34208){if((e34208 instanceof Error)){
var e__32591__auto____$2 = e34208;
if((e__32591__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$2;
}
} else {
throw e34208;

}
}} else {
throw e__32591__auto____$1;
}
} else {
throw e34207;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34206){if((e34206 instanceof Error)){
var e__32591__auto____$1 = e34206;
if((e__32591__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$1;
}
} else {
throw e34206;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34205){if((e34205 instanceof Error)){
var e__32591__auto____$1 = e34205;
if((e__32591__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$1;
}
} else {
throw e34205;

}
}} else {
throw e__32591__auto__;
}
} else {
throw e34204;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34158){if((e34158 instanceof Error)){
var e__32591__auto__ = e34158;
if((e__32591__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_(ocr_34120)) && ((cljs.core.count(ocr_34120) === 3))){
try{var ocr_34120_0__34154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(0));
if((ocr_34120_0__34154 === false)){
try{var ocr_34119_1__34146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34119_1__34146,cljs.core.cst$sym$_)){
try{var ocr_34119_2__34147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34119_2__34147,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,cljs.core.cst$sym$_,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34203){if((e34203 instanceof Error)){
var e__32591__auto____$1 = e34203;
if((e__32591__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$1;
}
} else {
throw e34203;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34202){if((e34202 instanceof Error)){
var e__32591__auto____$1 = e34202;
if((e__32591__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$1;
}
} else {
throw e34202;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34160){if((e34160 instanceof Error)){
var e__32591__auto____$1 = e34160;
if((e__32591__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_34120_0__34154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(0));
if((ocr_34120_0__34154 === true)){
try{var ocr_34119_2__34147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34119_2__34147,cljs.core.cst$sym$_)){
try{var ocr_34119_1__34146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34119_1__34146,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),cljs.core.cst$sym$_,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34199){if((e34199 instanceof Error)){
var e__32591__auto____$2 = e34199;
if((e__32591__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_34120_1__34155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(1));
if((ocr_34120_1__34155 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),cljs.core.cst$sym$_,cljs.core.cst$sym$_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34200){if((e34200 instanceof Error)){
var e__32591__auto____$3 = e34200;
if((e__32591__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_34120_1__34155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(1));
if((ocr_34120_1__34155 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34201){if((e34201 instanceof Error)){
var e__32591__auto____$4 = e34201;
if((e__32591__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$4;
}
} else {
throw e34201;

}
}} else {
throw e__32591__auto____$3;
}
} else {
throw e34200;

}
}} else {
throw e__32591__auto____$2;
}
} else {
throw e34199;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34198){if((e34198 instanceof Error)){
var e__32591__auto____$2 = e34198;
if((e__32591__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$2;
}
} else {
throw e34198;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34161){if((e34161 instanceof Error)){
var e__32591__auto____$2 = e34161;
if((e__32591__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_34120_0__34154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(0));
if((ocr_34120_0__34154 === false)){
try{var ocr_34120_1__34155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(1));
if((ocr_34120_1__34155 === true)){
try{var ocr_34119_2__34147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34119_2__34147,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34197){if((e34197 instanceof Error)){
var e__32591__auto____$3 = e34197;
if((e__32591__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$3;
}
} else {
throw e34197;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34196){if((e34196 instanceof Error)){
var e__32591__auto____$3 = e34196;
if((e__32591__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$3;
}
} else {
throw e34196;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34162){if((e34162 instanceof Error)){
var e__32591__auto____$3 = e34162;
if((e__32591__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_34120_2__34156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(2));
if((ocr_34120_2__34156 === true)){
try{var ocr_34120_0__34154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(0));
if((ocr_34120_0__34154 === true)){
try{var ocr_34119_1__34146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34119_1__34146,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),cljs.core.cst$sym$_,cljs.core.cst$sym$_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34195){if((e34195 instanceof Error)){
var e__32591__auto____$4 = e34195;
if((e__32591__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$4;
}
} else {
throw e34195;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34194){if((e34194 instanceof Error)){
var e__32591__auto____$4 = e34194;
if((e__32591__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$4;
}
} else {
throw e34194;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34163){if((e34163 instanceof Error)){
var e__32591__auto____$4 = e34163;
if((e__32591__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_34120_2__34156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(2));
if((ocr_34120_2__34156 === false)){
try{var ocr_34120_0__34154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(0));
if((ocr_34120_0__34154 === true)){
try{var ocr_34119_1__34146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34119_1__34146,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),cljs.core.cst$sym$_,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34193){if((e34193 instanceof Error)){
var e__32591__auto____$5 = e34193;
if((e__32591__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$5;
}
} else {
throw e34193;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34192){if((e34192 instanceof Error)){
var e__32591__auto____$5 = e34192;
if((e__32591__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$5;
}
} else {
throw e34192;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34164){if((e34164 instanceof Error)){
var e__32591__auto____$5 = e34164;
if((e__32591__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_34120_2__34156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(2));
if((ocr_34120_2__34156 === true)){
try{var ocr_34120_0__34154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(0));
if((ocr_34120_0__34154 === false)){
try{var ocr_34119_1__34146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34119_1__34146,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,cljs.core.cst$sym$_,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34191){if((e34191 instanceof Error)){
var e__32591__auto____$6 = e34191;
if((e__32591__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$6;
}
} else {
throw e34191;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34188){if((e34188 instanceof Error)){
var e__32591__auto____$6 = e34188;
if((e__32591__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_34120_1__34155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(1));
if((ocr_34120_1__34155 === true)){
try{var ocr_34119_0__34145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34119_0__34145,cljs.core.cst$sym$_)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34190){if((e34190 instanceof Error)){
var e__32591__auto____$7 = e34190;
if((e__32591__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$7;
}
} else {
throw e34190;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34189){if((e34189 instanceof Error)){
var e__32591__auto____$7 = e34189;
if((e__32591__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$7;
}
} else {
throw e34189;

}
}} else {
throw e__32591__auto____$6;
}
} else {
throw e34188;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34165){if((e34165 instanceof Error)){
var e__32591__auto____$6 = e34165;
if((e__32591__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_34120_2__34156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(2));
if((ocr_34120_2__34156 === false)){
try{var ocr_34120_1__34155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(1));
if((ocr_34120_1__34155 === true)){
try{var ocr_34119_0__34145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34119_0__34145,cljs.core.cst$sym$_)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34187){if((e34187 instanceof Error)){
var e__32591__auto____$7 = e34187;
if((e__32591__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$7;
}
} else {
throw e34187;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34186){if((e34186 instanceof Error)){
var e__32591__auto____$7 = e34186;
if((e__32591__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$7;
}
} else {
throw e34186;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34166){if((e34166 instanceof Error)){
var e__32591__auto____$7 = e34166;
if((e__32591__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_34120_2__34156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(2));
if((ocr_34120_2__34156 === true)){
try{var ocr_34120_1__34155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(1));
if((ocr_34120_1__34155 === false)){
try{var ocr_34119_0__34145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34119_0__34145,cljs.core.cst$sym$_)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34185){if((e34185 instanceof Error)){
var e__32591__auto____$8 = e34185;
if((e__32591__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$8;
}
} else {
throw e34185;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34179){if((e34179 instanceof Error)){
var e__32591__auto____$8 = e34179;
if((e__32591__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_34120_1__34155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(1));
if((ocr_34120_1__34155 === true)){
try{var ocr_34120_0__34154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(0));
if((ocr_34120_0__34154 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),cljs.core.cst$sym$_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),cljs.core.cst$sym$_,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34183){if((e34183 instanceof Error)){
var e__32591__auto____$9 = e34183;
if((e__32591__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_34120_0__34154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(0));
if((ocr_34120_0__34154 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,cljs.core.cst$sym$_,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34184){if((e34184 instanceof Error)){
var e__32591__auto____$10 = e34184;
if((e__32591__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$10;
}
} else {
throw e34184;

}
}} else {
throw e__32591__auto____$9;
}
} else {
throw e34183;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34180){if((e34180 instanceof Error)){
var e__32591__auto____$9 = e34180;
if((e__32591__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_34120_1__34155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(1));
if((ocr_34120_1__34155 === false)){
try{var ocr_34120_0__34154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(0));
if((ocr_34120_0__34154 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34182){if((e34182 instanceof Error)){
var e__32591__auto____$10 = e34182;
if((e__32591__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$10;
}
} else {
throw e34182;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34181){if((e34181 instanceof Error)){
var e__32591__auto____$10 = e34181;
if((e__32591__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$10;
}
} else {
throw e34181;

}
}} else {
throw e__32591__auto____$9;
}
} else {
throw e34180;

}
}} else {
throw e__32591__auto____$8;
}
} else {
throw e34179;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34167){if((e34167 instanceof Error)){
var e__32591__auto____$8 = e34167;
if((e__32591__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_34120_2__34156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(2));
if((ocr_34120_2__34156 === false)){
try{var ocr_34120_0__34154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(0));
if((ocr_34120_0__34154 === true)){
try{var ocr_34120_1__34155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(1));
if((ocr_34120_1__34155 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),cljs.core.cst$sym$_,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34178){if((e34178 instanceof Error)){
var e__32591__auto____$9 = e34178;
if((e__32591__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$9;
}
} else {
throw e34178;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34177){if((e34177 instanceof Error)){
var e__32591__auto____$9 = e34177;
if((e__32591__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$9;
}
} else {
throw e34177;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34168){if((e34168 instanceof Error)){
var e__32591__auto____$9 = e34168;
if((e__32591__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_34120_2__34156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(2));
if((ocr_34120_2__34156 === true)){
try{var ocr_34120_0__34154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(0));
if((ocr_34120_0__34154 === false)){
try{var ocr_34120_1__34155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(1));
if((ocr_34120_1__34155 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34176){if((e34176 instanceof Error)){
var e__32591__auto____$10 = e34176;
if((e__32591__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$10;
}
} else {
throw e34176;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34175){if((e34175 instanceof Error)){
var e__32591__auto____$10 = e34175;
if((e__32591__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$10;
}
} else {
throw e34175;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34169){if((e34169 instanceof Error)){
var e__32591__auto____$10 = e34169;
if((e__32591__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_34120_2__34156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(2));
if((ocr_34120_2__34156 === false)){
try{var ocr_34120_0__34154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(0));
if((ocr_34120_0__34154 === true)){
try{var ocr_34120_1__34155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(1));
if((ocr_34120_1__34155 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34174){if((e34174 instanceof Error)){
var e__32591__auto____$11 = e34174;
if((e__32591__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$11;
}
} else {
throw e34174;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34171){if((e34171 instanceof Error)){
var e__32591__auto____$11 = e34171;
if((e__32591__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_34120_0__34154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(0));
if((ocr_34120_0__34154 === false)){
try{var ocr_34120_1__34155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34120,(1));
if((ocr_34120_1__34155 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34119,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,cljs.core.cst$sym$_,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34173){if((e34173 instanceof Error)){
var e__32591__auto____$12 = e34173;
if((e__32591__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$12;
}
} else {
throw e34173;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34172){if((e34172 instanceof Error)){
var e__32591__auto____$12 = e34172;
if((e__32591__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$12;
}
} else {
throw e34172;

}
}} else {
throw e__32591__auto____$11;
}
} else {
throw e34171;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34170){if((e34170 instanceof Error)){
var e__32591__auto____$11 = e34170;
if((e__32591__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$11;
}
} else {
throw e34170;

}
}} else {
throw e__32591__auto____$10;
}
} else {
throw e34169;

}
}} else {
throw e__32591__auto____$9;
}
} else {
throw e34168;

}
}} else {
throw e__32591__auto____$8;
}
} else {
throw e34167;

}
}} else {
throw e__32591__auto____$7;
}
} else {
throw e34166;

}
}} else {
throw e__32591__auto____$6;
}
} else {
throw e34165;

}
}} else {
throw e__32591__auto____$5;
}
} else {
throw e34164;

}
}} else {
throw e__32591__auto____$4;
}
} else {
throw e34163;

}
}} else {
throw e__32591__auto____$3;
}
} else {
throw e34162;

}
}} else {
throw e__32591__auto____$2;
}
} else {
throw e34161;

}
}} else {
throw e__32591__auto____$1;
}
} else {
throw e34160;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34159){if((e34159 instanceof Error)){
var e__32591__auto____$1 = e34159;
if((e__32591__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__32591__auto____$1;
}
} else {
throw e34159;

}
}} else {
throw e__32591__auto__;
}
} else {
throw e34158;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34157){if((e34157 instanceof Error)){
var e__32591__auto__ = e34157;
if((e__32591__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__32591__auto__;
}
} else {
throw e34157;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34218){
var vec__34219 = p__34218;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34219,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34219,(1),null);
return cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$db_DASH_id.cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (vec__34219,k,v){
return (function (p1__34213_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__34213_SHARP_));
});})(vec__34219,k,v))
,cljs.core.array_seq([v], 0))], true, false);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34227){
var vec__34228 = p__34227;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34228,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34228,(1),null);
return cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$db_DASH_id.cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (vec__34228,k,v){
return (function (p1__34222_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__34222_SHARP_));
});})(vec__34228,k,v))
,cljs.core.array_seq([v], 0))], true, false);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first([cljs.core.str(cljs.core.first(ins))].join('')),"$")))?null:cljs.core.PersistentArrayMap.fromArray([cljs.core.first(ins),cljs.core.first(args)], true, false)),(function (){var G__34233 = cljs.core.rest(ins);
var G__34234 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__34233,G__34234) : posh.lib.q_analyze.just_qvars.call(null,G__34233,G__34234));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if(!(cljs.core.empty_QMARK_(varmap))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(datascript.core.q,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$find,qvars,cljs.core.cst$kw$in,cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (qvars,varvals,varmap){
return (function (p1__34235_SHARP_){
return cljs.core.zipmap(qvars,p1__34235_SHARP_);
});})(qvars,varvals,varmap))
,varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return (cljs.core.coll_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),cljs.core.cst$sym$pull)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(x)));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk((function (x){
if(cljs.core.truth_(posh.lib.q_analyze.pull_pattern_QMARK_(x))){
return cljs.core.second(x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_(qfind)){
if(cljs.core.empty_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(posh.lib.q_analyze.pull_pattern_QMARK_(qfind))){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.second(qfind),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(qfind,(2))], true, false);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_(dbeavs)){
return null;
} else {
var vec__34239 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34239,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34239,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34239,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34239,(3),null);
if(cljs.core.truth_((function (){var or__7085__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e);
if(or__7085__auto__){
return or__7085__auto__;
} else {
var and__7073__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v);
if(and__7073__auto__){
return posh.lib.pull_analyze.ref_QMARK_(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a);
} else {
return and__7073__auto__;
}
}
})())){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__34242 = var$;
var G__34243 = dbvarmap;
var G__34244 = cljs.core.rest(dbeavs);
var$ = G__34242;
dbvarmap = G__34243;
dbeavs = G__34244;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_(vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.fromArray([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)], true, false),(function (){var G__34248 = cljs.core.rest(vars);
var G__34249 = dbvarmap;
var G__34250 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__34248,G__34249,G__34250) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__34248,G__34249,G__34250));
})()], 0));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_(xs__$1)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs__$1),x)){
return n;
} else {
var G__34251 = (n + (1));
var G__34252 = cljs.core.rest(xs__$1);
n = G__34251;
xs__$1 = G__34252;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
var and__7073__auto__ = cljs.core.map_QMARK_(arg);
if(and__7073__auto__){
var and__7073__auto____$1 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__7073__auto____$1)){
return cljs.core.cst$kw$conn.cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34253_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__34253_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__34253_SHARP_) : type.call(null,p1__34253_SHARP_));
} else {
return p1__34253_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.fromArray([cljs.core.first(ins),cljs.core.first(args)], true, false):null),(function (){var G__34256 = cljs.core.rest(ins);
var G__34257 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__34256,G__34257) : posh.lib.q_analyze.make_dbarg_map.call(null,G__34256,G__34257));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34262){
var vec__34263 = p__34262;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34263,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34263,(1),null);
return cljs.core.PersistentArrayMap.fromArray([db_sym,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.rest),db_datoms)], true, false);
}),cljs.core.group_by(cljs.core.first,datoms)));
});
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,input_set){
return cljs.core.set((function (){var iter__7942__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__34272(s__34273){
return (new cljs.core.LazySeq(null,(function (){
var s__34273__$1 = s__34273;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__34273__$1);
if(temp__6753__auto__){
var s__34273__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34273__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__34273__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__34275 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__34274 = (0);
while(true){
if((i__34274 < size__7941__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__34274);
cljs.core.chunk_append(b__34275,((cljs.core.coll_QMARK_(x))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,x) : entid_fn.call(null,db,x)):x));

var G__34278 = (i__34274 + (1));
i__34274 = G__34278;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34275),posh$lib$q_analyze$resolve_any_idents_$_iter__34272(cljs.core.chunk_rest(s__34273__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34275),null);
}
} else {
var x = cljs.core.first(s__34273__$2);
return cljs.core.cons(((cljs.core.coll_QMARK_(x))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,x) : entid_fn.call(null,db,x)):x),posh$lib$q_analyze$resolve_any_idents_$_iter__34272(cljs.core.rest(s__34273__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7942__auto__(input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$$], null)], null),posh.lib.q_analyze.query_to_map(query)], 0));
var where = posh.lib.q_analyze.normalize_all_eavs(cljs.core.vec(cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs(where);
var vars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(eavs));
var newqm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([qm,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$find,vars,cljs.core.cst$kw$where,where], null)], 0));
var newq = posh.lib.q_analyze.qm_to_query(newqm);
var dbvarmap = posh.lib.q_analyze.make_dbarg_map(cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (qm,where,eavs,vars,newqm,newq,dbvarmap){
return (function (p__34306){
var vec__34307 = p__34306;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34307,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34307,(1),null);
var or__7085__auto__ = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return arg;
}
});})(qm,where,eavs,vars,newqm,newq,dbvarmap))
,cljs.core.zipmap(cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$q.cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$datoms_DASH_t,null,cljs.core.cst$kw$datoms,null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$datoms,null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$datoms,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (datoms,qm,where,eavs,vars,newqm,newq,dbvarmap,fixed_args,r){
return (function (p__34310){
var vec__34311 = p__34310;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34311,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34311,(1),null);
return cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$db_DASH_id.cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms], true, false);
});})(datoms,qm,where,eavs,vars,newqm,newq,dbvarmap,fixed_args,r))
,datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$datoms_DASH_t,null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$datoms_DASH_t,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (datoms,qm,where,eavs,vars,newqm,newq,dbvarmap,fixed_args,r){
return (function (p__34314){
var vec__34315 = p__34314;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34315,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34315,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$db_DASH_id.cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(cljs.core.cst$kw$q.cljs$core$IFn$_invoke$arity$1(dcfg),cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(db),db_datoms)], true, false);
});})(datoms,qm,where,eavs,vars,newqm,newq,dbvarmap,fixed_args,r))
,datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$results,null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$results,(function (){var G__34318 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$find,cljs.core.vec(cljs.core.cst$kw$find.cljs$core$IFn$_invoke$arity$1(qm)),cljs.core.cst$kw$in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,cljs.core.cst$sym$$$$], null)], null)], null);
var G__34319 = cljs.core.vec(r);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__34318,G__34319) : datascript.core.q.call(null,G__34318,G__34319));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$filter_DASH_patterns,null,cljs.core.cst$kw$patterns,null,cljs.core.cst$kw$simple_DASH_patterns,null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (in_vars,qm,where,eavs,vars,newqm,newq,dbvarmap,fixed_args,r){
return (function (p__34320){
var vec__34321 = p__34320;
var seq__34322 = cljs.core.seq(vec__34321);
var first__34323 = cljs.core.first(seq__34322);
var seq__34322__$1 = cljs.core.next(seq__34322);
var db = first__34323;
var eav = seq__34322__$1;
return cljs.core.vec(cljs.core.cons(db,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__34321,seq__34322,first__34323,seq__34322__$1,db,eav,in_vars,qm,where,eavs,vars,newqm,newq,dbvarmap,fixed_args,r){
return (function (p1__34281_SHARP_){
var temp__6751__auto__ = (in_vars.cljs$core$IFn$_invoke$arity$1 ? in_vars.cljs$core$IFn$_invoke$arity$1(p1__34281_SHARP_) : in_vars.call(null,p1__34281_SHARP_));
if(cljs.core.truth_(temp__6751__auto__)){
var v = temp__6751__auto__;
return posh.lib.q_analyze.resolve_any_idents(cljs.core.cst$kw$entid.cljs$core$IFn$_invoke$arity$1(dcfg),cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),v);
} else {
return p1__34281_SHARP_;
}
});})(vec__34321,seq__34322,first__34323,seq__34322__$1,db,eav,in_vars,qm,where,eavs,vars,newqm,newq,dbvarmap,fixed_args,r))
,eav)));
});})(in_vars,qm,where,eavs,vars,newqm,newq,dbvarmap,fixed_args,r))
,eavs);
var qvar_count = posh.lib.q_analyze.count_qvars(eavs_ins);
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (in_vars,eavs_ins,qvar_count,qm,where,eavs,vars,newqm,newq,dbvarmap,fixed_args,r){
return (function (p__34324){
var vec__34325 = p__34324;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34325,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34325,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
});})(in_vars,eavs_ins,qvar_count,qm,where,eavs,vars,newqm,newq,dbvarmap,fixed_args,r))
,qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk(((function (in_vars,eavs_ins,qvar_count,linked_qvars,rvars,qm,where,eavs,vars,newqm,newq,dbvarmap,fixed_args,r){
return (function (p1__34282_SHARP_){
if(cljs.core.truth_((function (){var and__7073__auto__ = posh.lib.q_analyze.qvar_QMARK_(p1__34282_SHARP_);
if(cljs.core.truth_(and__7073__auto__)){
return cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__34282_SHARP_) : linked_qvars.call(null,p1__34282_SHARP_)));
} else {
return and__7073__auto__;
}
})())){
return cljs.core.cst$sym$_;
} else {
return p1__34282_SHARP_;
}
});})(in_vars,eavs_ins,qvar_count,linked_qvars,rvars,qm,where,eavs,vars,newqm,newq,dbvarmap,fixed_args,r))
,eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$simple_DASH_patterns,null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$patterns,posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk(((function (in_vars,eavs_ins,qvar_count,linked_qvars,rvars,prepped_eavs,qm,where,eavs,vars,newqm,newq,dbvarmap,fixed_args,r){
return (function (p1__34283_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_(p1__34283_SHARP_))){
return cljs.core.cst$sym$_;
} else {
return p1__34283_SHARP_;
}
});})(in_vars,eavs_ins,qvar_count,linked_qvars,rvars,prepped_eavs,qm,where,eavs,vars,newqm,newq,dbvarmap,fixed_args,r))
,eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$patterns,null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$patterns,posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),cljs.core.cst$kw$linked,linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$filter_DASH_patterns,null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$filter_DASH_patterns,posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});
