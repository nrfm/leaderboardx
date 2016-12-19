// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('algopop.leaderboardx.app.views.common');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('goog.dom.forms');
goog.require('reagent.core');
goog.require('devcards.core');
goog.require('reagent.dom');
algopop.leaderboardx.app.views.common.focus_append = (function algopop$leaderboardx$app$views$common$focus_append(this$){
var G__35996 = reagent.dom.dom_node(this$);
G__35996.focus();

G__35996.setSelectionRange((100000),(100000));

return G__35996;
});
algopop.leaderboardx.app.views.common.focus_append_input = (function algopop$leaderboardx$app$views$common$focus_append_input(m){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"focus-append-component",cljs.core.cst$kw$component_DASH_did_DASH_mount,algopop.leaderboardx.app.views.common.focus_append,cljs.core.cst$kw$reagent_DASH_render,(function algopop$leaderboardx$app$views$common$focus_append_input_$_focus_append_input_render(m__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$name,"text",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null)], null),m__$1], 0))], null);
})], null));
});
algopop.leaderboardx.app.views.common.key_code_name = new cljs.core.PersistentArrayMap(null, 4, [(13),"ENTER",(27),"ESC",(46),"DELETE",(8),"BACKSPACE"], null);
algopop.leaderboardx.app.views.common.save = (function algopop$leaderboardx$app$views$common$save(model,path,editing,write,e){
e.preventDefault();

var G__36000_36003 = model;
var G__36001_36004 = path;
var G__36002_36005 = e.target.value;
(write.cljs$core$IFn$_invoke$arity$3 ? write.cljs$core$IFn$_invoke$arity$3(G__36000_36003,G__36001_36004,G__36002_36005) : write.call(null,G__36000_36003,G__36001_36004,G__36002_36005));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(editing,null) : cljs.core.reset_BANG_.call(null,editing,null));
});
algopop.leaderboardx.app.views.common.editable_string = (function algopop$leaderboardx$app$views$common$editable_string(var_args){
var args36006 = [];
var len__8301__auto___36013 = arguments.length;
var i__8302__auto___36014 = (0);
while(true){
if((i__8302__auto___36014 < len__8301__auto___36013)){
args36006.push((arguments[i__8302__auto___36014]));

var G__36015 = (i__8302__auto___36014 + (1));
i__8302__auto___36014 = G__36015;
continue;
} else {
}
break;
}

var G__36008 = args36006.length;
switch (G__36008) {
case 3:
return algopop.leaderboardx.app.views.common.editable_string.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return algopop.leaderboardx.app.views.common.editable_string.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36006.length)].join('')));

}
});

algopop.leaderboardx.app.views.common.editable_string.cljs$core$IFn$_invoke$arity$3 = (function (model,path,editing){
return algopop.leaderboardx.app.views.common.editable_string.cljs$core$IFn$_invoke$arity$4(model,path,editing,(function algopop$leaderboardx$app$views$common$update_model(m,p,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(m,cljs.core.assoc_in,p,v);
}));
});

algopop.leaderboardx.app.views.common.editable_string.cljs$core$IFn$_invoke$arity$4 = (function (model,path,editing,write){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(editing) : cljs.core.deref.call(null,editing)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.common.focus_append_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$default_DASH_value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(model) : cljs.core.deref.call(null,model)),path),cljs.core.cst$kw$on_DASH_blur,(function algopop$leaderboardx$app$views$common$editable_string_blur(e){
return algopop.leaderboardx.app.views.common.save(model,path,editing,write,e);
}),cljs.core.cst$kw$on_DASH_key_DASH_down,(function algopop$leaderboardx$app$views$common$editable_string_key_down(e){
var G__36011 = (function (){var G__36012 = e.keyCode;
return (algopop.leaderboardx.app.views.common.key_code_name.cljs$core$IFn$_invoke$arity$1 ? algopop.leaderboardx.app.views.common.key_code_name.cljs$core$IFn$_invoke$arity$1(G__36012) : algopop.leaderboardx.app.views.common.key_code_name.call(null,G__36012));
})();
switch (G__36011) {
case "ESC":
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(editing,null) : cljs.core.reset_BANG_.call(null,editing,null));

break;
case "ENTER":
return algopop.leaderboardx.app.views.common.save(model,path,editing,write,e);

break;
default:
return null;

}
})], null)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$editable,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$on_DASH_click,(function algopop$leaderboardx$app$views$common$editable_string_click(e){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(editing,path) : cljs.core.reset_BANG_.call(null,editing,path));
})], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(model) : cljs.core.deref.call(null,model)),path),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$glyphicon$glyphicon_DASH_pencil$edit], null)], null);
}
});

algopop.leaderboardx.app.views.common.editable_string.cljs$lang$maxFixedArity = 4;


algopop.leaderboardx.app.views.common.some_test = (function algopop$leaderboardx$app$views$common$some_test(){
return cljs.test.test_var(algopop.leaderboardx.app.views.common.some_test.cljs$lang$var);
});
algopop.leaderboardx.app.views.common.some_test.cljs$lang$test = (function (){

cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null),cljs.core.conj,cljs.core.array_seq(["zzz"], 0));

try{try{var values__21642__auto___36020 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(2)),(1));
var result__21643__auto___36021 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21642__auto___36020);
if(cljs.core.truth_(result__21643__auto___36021)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),(2)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21642__auto___36020),cljs.core.cst$kw$message,"nah"], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),(2)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8014__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21642__auto___36020);
return cljs.core._conj(cljs.core.List.EMPTY,x__8014__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,"nah"], null));
}

}catch (e36018){var t__21680__auto___36022 = e36018;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),(2)),cljs.core.cst$kw$actual,t__21680__auto___36022,cljs.core.cst$kw$message,"nah"], null));
}
try{var values__21642__auto__ = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(1)),(1));
var result__21643__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__21642__auto__);
if(cljs.core.truth_(result__21643__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),(1)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__21642__auto__),cljs.core.cst$kw$message,"obviously"], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),(1)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8014__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__21642__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8014__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,"obviously"], null));
}

return result__21643__auto__;
}catch (e36019){var t__21680__auto__ = e36019;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),(1)),cljs.core.cst$kw$actual,t__21680__auto__,cljs.core.cst$kw$message,"obviously"], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null),cljs.core.rest);
}});

algopop.leaderboardx.app.views.common.some_test.cljs$lang$var = new cljs.core.Var(function(){return algopop.leaderboardx.app.views.common.some_test;},cljs.core.cst$sym$algopop$leaderboardx$app$views$common_SLASH_some_DASH_test,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$algopop$leaderboardx$app$views$common,cljs.core.cst$sym$some_DASH_test,"/Users/timothypratley/git/leaderboardx/src/algopop/leaderboardx/app/views/common.cljs",19,1,71,71,cljs.core.List.EMPTY,null,(cljs.core.truth_(algopop.leaderboardx.app.views.common.some_test)?algopop.leaderboardx.app.views.common.some_test.cljs$lang$test:null)]));
algopop.leaderboardx.app.views.common.bound_input = (function algopop$leaderboardx$app$views$common$bound_input(model,path,editing,write){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null),cljs.core.cst$kw$default_DASH_value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(model) : cljs.core.deref.call(null,model)),path),cljs.core.cst$kw$on_DASH_blur,(function algopop$leaderboardx$app$views$common$bound_input_$_editable_string_blur(e){
return algopop.leaderboardx.app.views.common.save(model,path,editing,write,e);
}),cljs.core.cst$kw$on_DASH_key_DASH_down,(function algopop$leaderboardx$app$views$common$bound_input_$_editable_string_key_down(e){
var G__36029 = (function (){var G__36030 = e.keyCode;
return (algopop.leaderboardx.app.views.common.key_code_name.cljs$core$IFn$_invoke$arity$1 ? algopop.leaderboardx.app.views.common.key_code_name.cljs$core$IFn$_invoke$arity$1(G__36030) : algopop.leaderboardx.app.views.common.key_code_name.call(null,G__36030));
})();
switch (G__36029) {
case "ESC":
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(editing,null) : cljs.core.reset_BANG_.call(null,editing,null));

break;
case "ENTER":
return algopop.leaderboardx.app.views.common.save(model,path,editing,write,e);

break;
default:
return null;

}
})], null)], null);
});
/**
 * Returns a kewordized map of forms input name, value pairs.
 */
algopop.leaderboardx.app.views.common.form_data = (function algopop$leaderboardx$app$views$common$form_data(e){
e.preventDefault();

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7942__auto__ = (function algopop$leaderboardx$app$views$common$form_data_$_iter__36051(s__36052){
return (new cljs.core.LazySeq(null,(function (){
var s__36052__$1 = s__36052;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__36052__$1);
if(temp__6753__auto__){
var s__36052__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36052__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__36052__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__36054 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__36053 = (0);
while(true){
if((i__36053 < size__7941__auto__)){
var vec__36063 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__36053);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36063,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36063,(1),null);
cljs.core.chunk_append(b__36054,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(((cljs.core.count(v) <= (1)))?cljs.core.first(v):v)], null));

var G__36070 = (i__36053 + (1));
i__36053 = G__36070;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36054),algopop$leaderboardx$app$views$common$form_data_$_iter__36051(cljs.core.chunk_rest(s__36052__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36054),null);
}
} else {
var vec__36066 = cljs.core.first(s__36052__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36066,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36066,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(((cljs.core.count(v) <= (1)))?cljs.core.first(v):v)], null),algopop$leaderboardx$app$views$common$form_data_$_iter__36051(cljs.core.rest(s__36052__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7942__auto__(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((function (){var G__36069 = e.target;
return goog.dom.forms.getFormDataMap(G__36069);
})().toObject()));
})());
});
algopop.leaderboardx.app.views.common.selectable = (function algopop$leaderboardx$app$views$common$selectable(path,model,editing,options){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(editing) : cljs.core.deref.call(null,editing)),options)) || (cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(model) : cljs.core.deref.call(null,model)),path)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$default_DASH_value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(model) : cljs.core.deref.call(null,model)),path),cljs.core.cst$kw$on_DASH_change,(function algopop$leaderboardx$app$views$common$selectable_$_selection(e){
var temp__6753__auto__ = e.target.selectedIndex;
if(cljs.core.truth_(temp__6753__auto__)){
var idx = temp__6753__auto__;
if(cljs.core.seq(path)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(model,cljs.core.assoc_in,path,(options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(idx) : options.call(null,idx)));
} else {
var G__36083_36091 = model;
var G__36084_36092 = (options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(idx) : options.call(null,idx));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36083_36091,G__36084_36092) : cljs.core.reset_BANG_.call(null,G__36083_36091,G__36084_36092));
}

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(editing,null) : cljs.core.reset_BANG_.call(null,editing,null));
} else {
return null;
}
})], null)], null),(function (){var iter__7942__auto__ = (function algopop$leaderboardx$app$views$common$selectable_$_iter__36085(s__36086){
return (new cljs.core.LazySeq(null,(function (){
var s__36086__$1 = s__36086;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__36086__$1);
if(temp__6753__auto__){
var s__36086__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36086__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__36086__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__36088 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__36087 = (0);
while(true){
if((i__36087 < size__7941__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__36087);
cljs.core.chunk_append(b__36088,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,x], null));

var G__36093 = (i__36087 + (1));
i__36087 = G__36093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36088),algopop$leaderboardx$app$views$common$selectable_$_iter__36085(cljs.core.chunk_rest(s__36086__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36088),null);
}
} else {
var x = cljs.core.first(s__36086__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,x], null),algopop$leaderboardx$app$views$common$selectable_$_iter__36085(cljs.core.rest(s__36086__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7942__auto__(options);
})());
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function algopop$leaderboardx$app$views$common$selectable_$_selectable_click(e){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(editing,options) : cljs.core.reset_BANG_.call(null,editing,options));

return null;
})], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(model) : cljs.core.deref.call(null,model)),path)], null);
}
});
