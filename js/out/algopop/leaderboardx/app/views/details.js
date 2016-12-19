// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('algopop.leaderboardx.app.views.details');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('reagent.core');
goog.require('algopop.leaderboardx.app.db');
goog.require('algopop.leaderboardx.app.views.common');
goog.require('reagent.session');
goog.require('clojure.string');
algopop.leaderboardx.app.views.details.data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"unknown"], null));
algopop.leaderboardx.app.views.details.render_nested_map = (function algopop$leaderboardx$app$views$details$render_nested_map(m,path,model,editing){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$list_DASH_unstyled], null),(function (){var iter__7942__auto__ = (function algopop$leaderboardx$app$views$details$render_nested_map_$_iter__44835(s__44836){
return (new cljs.core.LazySeq(null,(function (){
var s__44836__$1 = s__44836;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__44836__$1);
if(temp__6753__auto__){
var s__44836__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44836__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__44836__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__44838 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__44837 = (0);
while(true){
if((i__44837 < size__7941__auto__)){
var vec__44847 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__44837);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44847,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44847,(1),null);
cljs.core.chunk_append(b__44838,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,(((cljs.core.count(path) > (0)))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_left,"40px"], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str("h"),cljs.core.str(((2) + cljs.core.count(path)))].join('')),cljs.core.name(k)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.details.render,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),model,editing], null)], null));

var G__44853 = (i__44837 + (1));
i__44837 = G__44853;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44838),algopop$leaderboardx$app$views$details$render_nested_map_$_iter__44835(cljs.core.chunk_rest(s__44836__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44838),null);
}
} else {
var vec__44850 = cljs.core.first(s__44836__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44850,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44850,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,(((cljs.core.count(path) > (0)))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_left,"40px"], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str("h"),cljs.core.str(((2) + cljs.core.count(path)))].join('')),cljs.core.name(k)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.details.render,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),model,editing], null)], null),algopop$leaderboardx$app$views$details$render_nested_map_$_iter__44835(cljs.core.rest(s__44836__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7942__auto__(m);
})());
});
algopop.leaderboardx.app.views.details.render_map = (function algopop$leaderboardx$app$views$details$render_map(m,path,model,editing){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$list_DASH_unstyled], null),(function (){var iter__7942__auto__ = (function algopop$leaderboardx$app$views$details$render_map_$_iter__44880(s__44881){
return (new cljs.core.LazySeq(null,(function (){
var s__44881__$1 = s__44881;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__44881__$1);
if(temp__6753__auto__){
var s__44881__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44881__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__44881__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__44883 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__44882 = (0);
while(true){
if((i__44882 < size__7941__auto__)){
var vec__44896 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__44882);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44896,(0),null);
var map__44899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44896,(1),null);
var map__44899__$1 = ((((!((map__44899 == null)))?((((map__44899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44899.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44899):map__44899);
var v = map__44899__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44899__$1,cljs.core.cst$kw$node_SLASH_name);
cljs.core.chunk_append(b__44883,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_xs_DASH_4,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"right"], null)], null),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_xs_DASH_6,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.details.render,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),model,editing], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_xs_DASH_2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default$form_DASH_control,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (i__44882,vec__44896,k,map__44899,map__44899__$1,v,name,c__7940__auto__,size__7941__auto__,b__44883,s__44881__$2,temp__6753__auto__){
return (function algopop$leaderboardx$app$views$details$render_map_$_iter__44880_$_nest_click(e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(model,cljs.core.assoc_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,((cljs.core.map_QMARK_(v))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.keys(v)):v)),cljs.core.PersistentArrayMap.EMPTY);
});})(i__44882,vec__44896,k,map__44899,map__44899__$1,v,name,c__7940__auto__,size__7941__auto__,b__44883,s__44881__$2,temp__6753__auto__))
], null),"nest"], null)], null)], null));

var G__44906 = (i__44882 + (1));
i__44882 = G__44906;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44883),algopop$leaderboardx$app$views$details$render_map_$_iter__44880(cljs.core.chunk_rest(s__44881__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44883),null);
}
} else {
var vec__44901 = cljs.core.first(s__44881__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44901,(0),null);
var map__44904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44901,(1),null);
var map__44904__$1 = ((((!((map__44904 == null)))?((((map__44904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44904.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44904):map__44904);
var v = map__44904__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44904__$1,cljs.core.cst$kw$node_SLASH_name);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_xs_DASH_4,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"right"], null)], null),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_xs_DASH_6,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.details.render,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),model,editing], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_xs_DASH_2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default$form_DASH_control,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (vec__44901,k,map__44904,map__44904__$1,v,name,s__44881__$2,temp__6753__auto__){
return (function algopop$leaderboardx$app$views$details$render_map_$_iter__44880_$_nest_click(e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(model,cljs.core.assoc_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,((cljs.core.map_QMARK_(v))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.keys(v)):v)),cljs.core.PersistentArrayMap.EMPTY);
});})(vec__44901,k,map__44904,map__44904__$1,v,name,s__44881__$2,temp__6753__auto__))
], null),"nest"], null)], null)], null),algopop$leaderboardx$app$views$details$render_map_$_iter__44880(cljs.core.rest(s__44881__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7942__auto__(m);
})());
});
algopop.leaderboardx.app.views.details.render_seq = (function algopop$leaderboardx$app$views$details$render_seq(xs,path,model,editing){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$list_DASH_unstyled], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function algopop$leaderboardx$app$views$details$render_seq_$_a_li(idx,x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.details.render,((cljs.core.set_QMARK_(xs))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,x):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,idx)),model,editing], null)], null);
}),xs));
});
algopop.leaderboardx.app.views.details.render = (function algopop$leaderboardx$app$views$details$render(path,model,editing){
var x = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(model) : cljs.core.deref.call(null,model)),path);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,((cljs.core.map_QMARK_(x))?((cljs.core.seq(path))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.details.render_nested_map,x,path,model,editing], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.details.render_map,x,path,model,editing], null)):((typeof x === 'string')?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.common.editable_string,model,path,editing], null):(((x instanceof cljs.core.Keyword))?cljs.core.name(x):((cljs.core.seq_QMARK_(x))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.details.render_seq,x,path,model,editing], null):[cljs.core.str(x)].join('')
))))], null);
});
algopop.leaderboardx.app.views.details.details = (function algopop$leaderboardx$app$views$details$details(x){
var editing = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var model = reagent.ratom.make_reaction(((function (editing){
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x)));
});})(editing))
);
return ((function (editing,model){
return (function algopop$leaderboardx$app$views$details$details_$_a_details_view(x__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.details.render,cljs.core.PersistentVector.EMPTY,model,editing], null);
});
;})(editing,model))
});
algopop.leaderboardx.app.views.details.details_view = (function algopop$leaderboardx$app$views$details$details_view(){
var w = algopop.leaderboardx.app.db.watch_nodes();
return ((function (w){
return (function algopop$leaderboardx$app$views$details$details_view_$_a_details_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$row,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,((function (w){
return (function algopop$leaderboardx$app$views$details$details_view_$_a_details_view_$_details_submit(e){
var map__44921 = algopop.leaderboardx.app.views.common.form_data(e);
var map__44921__$1 = ((((!((map__44921 == null)))?((((map__44921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44921.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44921):map__44921);
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44921__$1,cljs.core.cst$kw$k);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44921__$1,cljs.core.cst$kw$v);
algopop.leaderboardx.app.db.add_node(v);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(algopop.leaderboardx.app.views.details.data,cljs.core.assoc,k,v);
});})(w))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_xs_DASH_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$name,"k"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_xs_DASH_6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$name,"v"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_xs_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"submit"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.details.details,w], null)], null);
});
;})(w))
});
