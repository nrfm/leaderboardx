// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('algopop.leaderboardx.app.views.assess');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('reagent.core');
goog.require('algopop.leaderboardx.app.db');
goog.require('devcards.core');
goog.require('algopop.leaderboardx.app.views.common');
goog.require('reagent.session');
goog.require('reagent.ratom');
goog.require('algopop.leaderboardx.app.seed');
goog.require('clojure.string');
goog.require('algopop.leaderboardx.app.commands');
algopop.leaderboardx.app.views.assess.attr2title = (function algopop$leaderboardx$app$views$assess$attr2title(attr){
return clojure.string.capitalize(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(attr),"-")));
});
algopop.leaderboardx.app.views.assess.title2attr = (function algopop$leaderboardx$app$views$assess$title2attr(title){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("assessment",clojure.string.replace(clojure.string.lower_case(title)," ","-"));
});

algopop.leaderboardx.app.views.assess.titles_test = (function algopop$leaderboardx$app$views$assess$titles_test(){
return cljs.test.test_var(algopop.leaderboardx.app.views.assess.titles_test.cljs$lang$var);
});
algopop.leaderboardx.app.views.assess.titles_test.cljs$lang$test = (function (){
try{var values__21642__auto___45195 = cljs.core._conj((function (){var x__8014__auto__ = algopop.leaderboardx.app.views.assess.title2attr("Group hug please");
return cljs.core._conj(cljs.core.List.EMPTY,x__8014__auto__);
})(),cljs.core.cst$kw$assessment_SLASH_group_DASH_hug_DASH_please);
var result__21643__auto___45196 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21642__auto___45195);
if(cljs.core.truth_(result__21643__auto___45196)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$kw$assessment_SLASH_group_DASH_hug_DASH_please,cljs.core.list(cljs.core.cst$sym$title2attr,"Group hug please")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21642__auto___45195),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$kw$assessment_SLASH_group_DASH_hug_DASH_please,cljs.core.list(cljs.core.cst$sym$title2attr,"Group hug please")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8014__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21642__auto___45195);
return cljs.core._conj(cljs.core.List.EMPTY,x__8014__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e45193){var t__21680__auto___45197 = e45193;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$kw$assessment_SLASH_group_DASH_hug_DASH_please,cljs.core.list(cljs.core.cst$sym$title2attr,"Group hug please")),cljs.core.cst$kw$actual,t__21680__auto___45197,cljs.core.cst$kw$message,null], null));
}
try{var values__21642__auto__ = cljs.core._conj((function (){var x__8014__auto__ = algopop.leaderboardx.app.views.assess.attr2title(cljs.core.cst$kw$assessment_SLASH_group_DASH_hug_DASH_please);
return cljs.core._conj(cljs.core.List.EMPTY,x__8014__auto__);
})(),"Group hug please");
var result__21643__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21642__auto__);
if(cljs.core.truth_(result__21643__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"Group hug please",cljs.core.list(cljs.core.cst$sym$attr2title,cljs.core.cst$kw$assessment_SLASH_group_DASH_hug_DASH_please)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21642__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"Group hug please",cljs.core.list(cljs.core.cst$sym$attr2title,cljs.core.cst$kw$assessment_SLASH_group_DASH_hug_DASH_please)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8014__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21642__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8014__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__21643__auto__;
}catch (e45194){var t__21680__auto__ = e45194;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"Group hug please",cljs.core.list(cljs.core.cst$sym$attr2title,cljs.core.cst$kw$assessment_SLASH_group_DASH_hug_DASH_please)),cljs.core.cst$kw$actual,t__21680__auto__,cljs.core.cst$kw$message,null], null));
}});

algopop.leaderboardx.app.views.assess.titles_test.cljs$lang$var = new cljs.core.Var(function(){return algopop.leaderboardx.app.views.assess.titles_test;},cljs.core.cst$sym$algopop$leaderboardx$app$views$assess_SLASH_titles_DASH_test,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$algopop$leaderboardx$app$views$assess,cljs.core.cst$sym$titles_DASH_test,"/Users/timothypratley/git/leaderboardx/src/algopop/leaderboardx/app/views/assess.cljs",21,1,19,19,cljs.core.List.EMPTY,null,(cljs.core.truth_(algopop.leaderboardx.app.views.assess.titles_test)?algopop.leaderboardx.app.views.assess.titles_test.cljs$lang$test:null)]));
algopop.leaderboardx.app.views.assess.group = (function algopop$leaderboardx$app$views$assess$group(title,model,path,editing,ks){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["SUP FIX ME",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(model) : cljs.core.deref.call(null,model)),path),ks], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,title], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row], null),(function (){var size = cljs.core.quot((12),cljs.core.count(ks));
var iter__7942__auto__ = ((function (size){
return (function algopop$leaderboardx$app$views$assess$group_$_iter__45232(s__45233){
return (new cljs.core.LazySeq(null,((function (size){
return (function (){
var s__45233__$1 = s__45233;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__45233__$1);
if(temp__6753__auto__){
var s__45233__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45233__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__45233__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__45235 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__45234 = (0);
while(true){
if((i__45234 < size__7941__auto__)){
var vec__45252 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__45234);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45252,(0),null);
var ct = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45252,(1),null);
cljs.core.chunk_append(b__45235,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str("col-xs-"),cljs.core.str(size)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$control_DASH_label,[cljs.core.str(t)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,[cljs.core.str(t)].join(''),cljs.core.cst$kw$type,"number",cljs.core.cst$kw$on_DASH_focus,((function (i__45234,vec__45252,t,ct,c__7940__auto__,size__7941__auto__,b__45235,s__45233__$2,temp__6753__auto__,size){
return (function algopop$leaderboardx$app$views$assess$group_$_iter__45232_$_group_focus(e){
var G__45257 = editing;
var G__45258 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,t);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__45257,G__45258) : cljs.core.reset_BANG_.call(null,G__45257,G__45258));
});})(i__45234,vec__45252,t,ct,c__7940__auto__,size__7941__auto__,b__45235,s__45233__$2,temp__6753__auto__,size))
,cljs.core.cst$kw$on_DASH_change,((function (i__45234,vec__45252,t,ct,c__7940__auto__,size__7941__auto__,b__45235,s__45233__$2,temp__6753__auto__,size){
return (function algopop$leaderboardx$app$views$assess$group_$_iter__45232_$_group_change(e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(model,cljs.core.assoc_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,t),e.target.value);
});})(i__45234,vec__45252,t,ct,c__7940__auto__,size__7941__auto__,b__45235,s__45233__$2,temp__6753__auto__,size))
], null)], null)], null));

var G__45266 = (i__45234 + (1));
i__45234 = G__45266;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45235),algopop$leaderboardx$app$views$assess$group_$_iter__45232(cljs.core.chunk_rest(s__45233__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45235),null);
}
} else {
var vec__45259 = cljs.core.first(s__45233__$2);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45259,(0),null);
var ct = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45259,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str("col-xs-"),cljs.core.str(size)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$control_DASH_label,[cljs.core.str(t)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,[cljs.core.str(t)].join(''),cljs.core.cst$kw$type,"number",cljs.core.cst$kw$on_DASH_focus,((function (vec__45259,t,ct,s__45233__$2,temp__6753__auto__,size){
return (function algopop$leaderboardx$app$views$assess$group_$_iter__45232_$_group_focus(e){
var G__45264 = editing;
var G__45265 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,t);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__45264,G__45265) : cljs.core.reset_BANG_.call(null,G__45264,G__45265));
});})(vec__45259,t,ct,s__45233__$2,temp__6753__auto__,size))
,cljs.core.cst$kw$on_DASH_change,((function (vec__45259,t,ct,s__45233__$2,temp__6753__auto__,size){
return (function algopop$leaderboardx$app$views$assess$group_$_iter__45232_$_group_change(e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(model,cljs.core.assoc_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,t),e.target.value);
});})(vec__45259,t,ct,s__45233__$2,temp__6753__auto__,size))
], null)], null)], null),algopop$leaderboardx$app$views$assess$group_$_iter__45232(cljs.core.rest(s__45233__$2)));
}
} else {
return null;
}
break;
}
});})(size))
,null,null));
});})(size))
;
return iter__7942__auto__(ks);
})())], null);
});
algopop.leaderboardx.app.views.assess.conjv = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY);
algopop.leaderboardx.app.views.assess.ol = (function algopop$leaderboardx$app$views$assess$ol(title,model,path,editing){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,title], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function algopop$leaderboardx$app$views$assess$ol_$_a_li(idx,line){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.common.editable_string,model,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,idx),editing], null)], null);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(model) : cljs.core.deref.call(null,model)),path))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$small,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$background,"white"], null),cljs.core.cst$kw$on_DASH_click,(function algopop$leaderboardx$app$views$assess$ol_$_an_ol_add_click(e){
var G__45273_45275 = editing;
var G__45274_45276 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(model) : cljs.core.deref.call(null,model)),path)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__45273_45275,G__45274_45276) : cljs.core.reset_BANG_.call(null,G__45273_45275,G__45274_45276));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(model,cljs.core.update_in,path,algopop.leaderboardx.app.views.assess.conjv,cljs.core.array_seq([""], 0));
})], null),"+ Add"], null))], null);
});
algopop.leaderboardx.app.views.assess.textarea = (function algopop$leaderboardx$app$views$assess$textarea(title,model,path,editing){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea$form_DASH_control,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spellCheck,"true"], null)], null)], null);
});
algopop.leaderboardx.app.views.assess.unknown = (function algopop$leaderboardx$app$views$assess$unknown(type,title){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,[cljs.core.str("Unknown "),cljs.core.str(type),cljs.core.str(": "),cljs.core.str(title)].join('')], null);
});
algopop.leaderboardx.app.views.assess.select5 = (function algopop$leaderboardx$app$views$assess$select5(title,model,path,editing){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$options,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null)], null)], null)], null);
});
algopop.leaderboardx.app.views.assess.dispatch = new cljs.core.PersistentArrayMap(null, 4, ["group",algopop.leaderboardx.app.views.assess.group,"select5",algopop.leaderboardx.app.views.assess.select5,"ol",algopop.leaderboardx.app.views.assess.ol,"textarea",algopop.leaderboardx.app.views.assess.textarea], null);
algopop.leaderboardx.app.views.assess.attribute = (function algopop$leaderboardx$app$views$assess$attribute(type,name,model,path,editing,children){
return (function (){var G__45279 = type;
var G__45280 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(algopop.leaderboardx.app.views.assess.unknown,type);
return (algopop.leaderboardx.app.views.assess.dispatch.cljs$core$IFn$_invoke$arity$2 ? algopop.leaderboardx.app.views.assess.dispatch.cljs$core$IFn$_invoke$arity$2(G__45279,G__45280) : algopop.leaderboardx.app.views.assess.dispatch.call(null,G__45279,G__45280));
})().call(null,name,model,path,editing,children);
});
algopop.leaderboardx.app.views.assess.attributes = (function algopop$leaderboardx$app$views$assess$attributes(p__45281,assess,names,editing){
var vec__45303 = p__45281;
var seq__45304 = cljs.core.seq(vec__45303);
var first__45305 = cljs.core.first(seq__45304);
var seq__45304__$1 = cljs.core.next(seq__45304);
var type = first__45305;
var first__45305__$1 = cljs.core.first(seq__45304__$1);
var seq__45304__$2 = cljs.core.next(seq__45304__$1);
var name = first__45305__$1;
var children = seq__45304__$2;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null),(function (){var iter__7942__auto__ = ((function (vec__45303,seq__45304,first__45305,seq__45304__$1,type,first__45305__$1,seq__45304__$2,name,children){
return (function algopop$leaderboardx$app$views$assess$attributes_$_iter__45306(s__45307){
return (new cljs.core.LazySeq(null,((function (vec__45303,seq__45304,first__45305,seq__45304__$1,type,first__45305__$1,seq__45304__$2,name,children){
return (function (){
var s__45307__$1 = s__45307;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__45307__$1);
if(temp__6753__auto__){
var s__45307__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45307__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__45307__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__45309 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__45308 = (0);
while(true){
if((i__45308 < size__7941__auto__)){
var vec__45318 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__45308);
var seq__45319 = cljs.core.seq(vec__45318);
var first__45320 = cljs.core.first(seq__45319);
var seq__45319__$1 = cljs.core.next(seq__45319);
var type__$1 = first__45320;
var first__45320__$1 = cljs.core.first(seq__45319__$1);
var seq__45319__$2 = cljs.core.next(seq__45319__$1);
var name__$1 = first__45320__$1;
var children__$1 = seq__45319__$2;
cljs.core.chunk_append(b__45309,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.assess.attribute,type__$1,name__$1,assess,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null),editing,children__$1], null));

var G__45324 = (i__45308 + (1));
i__45308 = G__45324;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45309),algopop$leaderboardx$app$views$assess$attributes_$_iter__45306(cljs.core.chunk_rest(s__45307__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45309),null);
}
} else {
var vec__45321 = cljs.core.first(s__45307__$2);
var seq__45322 = cljs.core.seq(vec__45321);
var first__45323 = cljs.core.first(seq__45322);
var seq__45322__$1 = cljs.core.next(seq__45322);
var type__$1 = first__45323;
var first__45323__$1 = cljs.core.first(seq__45322__$1);
var seq__45322__$2 = cljs.core.next(seq__45322__$1);
var name__$1 = first__45323__$1;
var children__$1 = seq__45322__$2;
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.assess.attribute,type__$1,name__$1,assess,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null),editing,children__$1], null),algopop$leaderboardx$app$views$assess$attributes_$_iter__45306(cljs.core.rest(s__45307__$2)));
}
} else {
return null;
}
break;
}
});})(vec__45303,seq__45304,first__45305,seq__45304__$1,type,first__45305__$1,seq__45304__$2,name,children))
,null,null));
});})(vec__45303,seq__45304,first__45305,seq__45304__$1,type,first__45305__$1,seq__45304__$2,name,children))
;
return iter__7942__auto__(children);
})());
});
algopop.leaderboardx.app.views.assess.assess_form = (function algopop$leaderboardx$app$views$assess$assess_form(template,assess,names,editing,selected_id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.common.editable_string,assess,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name], null),editing], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," - "], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.common.selectable,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected], null),names,editing,cljs.core.cst$kw$names.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names) : cljs.core.deref.call(null,names)))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.assess.attributes,template,assess,names,editing], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function algopop$leaderboardx$app$views$assess$assess_form_$_a_save_click(e){
return algopop.leaderboardx.app.commands.save((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(assess) : cljs.core.deref.call(null,assess)));
})], null),"Save"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default,"Schedule"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default,"Publish"], null)], null)], null);
});
algopop.leaderboardx.app.views.assess.assess_view = (function algopop$leaderboardx$app$views$assess$assess_view(p__45325){
var map__45328 = p__45325;
var map__45328__$1 = ((((!((map__45328 == null)))?((((map__45328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45328.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45328):map__45328);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45328__$1,cljs.core.cst$kw$name);
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45328__$1,cljs.core.cst$kw$date);
var ac = algopop.leaderboardx.app.db.assessment_components("player-assessment");
var assess = (function (){var or__7085__auto__ = reagent.session.get(cljs.core.cst$kw$assess);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return cljs.core.cst$kw$assess.cljs$core$IFn$_invoke$arity$1(reagent.session.put_BANG_(cljs.core.cst$kw$assess,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"New"], null))));
}
})();
var nodes = algopop.leaderboardx.app.db.watch_nodes();
var template = reagent.session.get(cljs.core.cst$kw$model);
var names = reagent.ratom.make_reaction(((function (ac,assess,nodes,template,map__45328,map__45328__$1,name,date){
return (function (){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$names,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$node_SLASH_name,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nodes) : cljs.core.deref.call(null,nodes)))], null);
});})(ac,assess,nodes,template,map__45328,map__45328__$1,name,date))
);
var selected_id = (function (){var or__7085__auto__ = reagent.session.get(cljs.core.cst$kw$selected_DASH_id);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return cljs.core.cst$kw$selected_DASH_id.cljs$core$IFn$_invoke$arity$1(reagent.session.put_BANG_(cljs.core.cst$kw$selected_DASH_id,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)));
}
})();
var editing = (function (){var or__7085__auto__ = reagent.session.get(cljs.core.cst$kw$editing);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return cljs.core.cst$kw$editing.cljs$core$IFn$_invoke$arity$1(reagent.session.put_BANG_(cljs.core.cst$kw$editing,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)));
}
})();
return ((function (ac,assess,nodes,template,names,selected_id,editing,map__45328,map__45328__$1,name,date){
return (function algopop$leaderboardx$app$views$assess$assess_view_$_an_assess_form(x){
return algopop.leaderboardx.app.views.assess.assess_form(template,assess,names,editing,selected_id);
});
;})(ac,assess,nodes,template,names,selected_id,editing,map__45328,map__45328__$1,name,date))
});
algopop.leaderboardx.app.views.assess.assesment_template = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["template","player-assessment",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["name","assesse"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["group","metrics",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["select5","productivity"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["select5","leadership"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["select5","happiness"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ol","achievements"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ol","weaknesses"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ol","goach-goals"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ol","player-goals"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["textarea","coach-comments"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["textarea","player-comments"], null)], null);
algopop.leaderboardx.app.views.assess.assessment_example = (function algopop$leaderboardx$app$views$assess$assessment_example(){
var assess = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var selected_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var editing = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var names = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$names,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tim","foo","bar"], null)], null));
return ((function (assess,selected_id,editing,names){
return (function algopop$leaderboardx$app$views$assess$assessment_example_$_an_assessment_example(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.assess.assess_form,algopop.leaderboardx.app.views.assess.assesment_template,assess,names,editing,selected_id], null);
});
;})(assess,selected_id,editing,names))
});
algopop.leaderboardx.app.views.assess.assessments_view = (function algopop$leaderboardx$app$views$assess$assessments_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/#/assess/Tim/fitness/14-Sept-2015"], null),"one"], null)], null)], null)], null);
});
