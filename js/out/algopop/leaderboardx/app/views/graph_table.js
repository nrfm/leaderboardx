// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('algopop.leaderboardx.app.views.graph_table');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.string');
goog.require('algopop.leaderboardx.app.db');
goog.require('algopop.leaderboardx.app.views.common');
goog.require('clojure.string');
goog.require('algopop.leaderboardx.app.graph');
algopop.leaderboardx.app.views.graph_table.delimiter = /[,;]/;
algopop.leaderboardx.app.views.graph_table.replace_edges = (function algopop$leaderboardx$app$views$graph_table$replace_edges(selected_id,source,outs,ins){
var temp__6753__auto__ = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(source,algopop.leaderboardx.app.views.graph_table.delimiter));
if(cljs.core.truth_(temp__6753__auto__)){
var node_name = temp__6753__auto__;
var source__$1 = clojure.string.trim(node_name);
if(cljs.core.seq(source__$1)){
var outs__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(outs,algopop.leaderboardx.app.views.graph_table.delimiter));
var ins__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ins,algopop.leaderboardx.app.views.graph_table.delimiter));
algopop.leaderboardx.app.db.replace_edges(source__$1,outs__$1,ins__$1);

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_id,source__$1) : cljs.core.reset_BANG_.call(null,selected_id,source__$1));
} else {
return null;
}
} else {
return null;
}
});
algopop.leaderboardx.app.views.graph_table.list_edges = (function algopop$leaderboardx$app$views$graph_table$list_edges(edges){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.sort.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(edges) : cljs.core.deref.call(null,edges))));
});
algopop.leaderboardx.app.views.graph_table.add_node = (function algopop$leaderboardx$app$views$graph_table$add_node(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$form_DASH_inline,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,(function algopop$leaderboardx$app$views$graph_table$add_node_$_submit_add(e){
e.preventDefault();

var map__36314 = algopop.leaderboardx.app.views.common.form_data(e);
var map__36314__$1 = ((((!((map__36314 == null)))?((((map__36314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36314):map__36314);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36314__$1,cljs.core.cst$kw$name);
var outs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36314__$1,cljs.core.cst$kw$outs);
var ins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36314__$1,cljs.core.cst$kw$ins);
return algopop.leaderboardx.app.views.graph_table.replace_edges((cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null)),name,outs,ins);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,"Add"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"name"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"outs"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"ins"], null)], null)], null);
});
algopop.leaderboardx.app.views.graph_table.node_types = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Person","Assessment"], null);
algopop.leaderboardx.app.views.graph_table.link_types = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Endorses","Owns"], null);
algopop.leaderboardx.app.views.graph_table.select_type = (function algopop$leaderboardx$app$views$graph_table$select_type(types,editing){
var current_type = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.first(types));
return ((function (current_type){
return (function algopop$leaderboardx$app$views$graph_table$select_type_$_a_select_type(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(editing) : cljs.core.deref.call(null,editing)),types)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change,((function (current_type){
return (function algopop$leaderboardx$app$views$graph_table$select_type_$_a_select_type_$_selection(e){
var temp__6753__auto__ = e.target.selectedIndex;
if(cljs.core.truth_(temp__6753__auto__)){
var idx = temp__6753__auto__;
var G__36348_36356 = current_type;
var G__36349_36357 = (types.cljs$core$IFn$_invoke$arity$1 ? types.cljs$core$IFn$_invoke$arity$1(idx) : types.call(null,idx));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36348_36356,G__36349_36357) : cljs.core.reset_BANG_.call(null,G__36348_36356,G__36349_36357));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(editing,null) : cljs.core.reset_BANG_.call(null,editing,null));
} else {
return null;
}
});})(current_type))
], null)], null),(function (){var iter__7942__auto__ = ((function (current_type){
return (function algopop$leaderboardx$app$views$graph_table$select_type_$_a_select_type_$_iter__36350(s__36351){
return (new cljs.core.LazySeq(null,((function (current_type){
return (function (){
var s__36351__$1 = s__36351;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__36351__$1);
if(temp__6753__auto__){
var s__36351__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36351__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__36351__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__36353 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__36352 = (0);
while(true){
if((i__36352 < size__7941__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__36352);
cljs.core.chunk_append(b__36353,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,t], null));

var G__36358 = (i__36352 + (1));
i__36352 = G__36358;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36353),algopop$leaderboardx$app$views$graph_table$select_type_$_a_select_type_$_iter__36350(cljs.core.chunk_rest(s__36351__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36353),null);
}
} else {
var t = cljs.core.first(s__36351__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,t], null),algopop$leaderboardx$app$views$graph_table$select_type_$_a_select_type_$_iter__36350(cljs.core.rest(s__36351__$2)));
}
} else {
return null;
}
break;
}
});})(current_type))
,null,null));
});})(current_type))
;
return iter__7942__auto__(types);
})())], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (current_type){
return (function algopop$leaderboardx$app$views$graph_table$select_type_$_a_select_type_$_type_click(e){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(editing,types) : cljs.core.reset_BANG_.call(null,editing,types));

return null;
});})(current_type))
], null),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current_type) : cljs.core.deref.call(null,current_type))], null);
}
});
;})(current_type))
});
algopop.leaderboardx.app.views.graph_table.table = (function algopop$leaderboardx$app$views$graph_table$table(selected_id,editing){
var search_term = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var nodes_by_rank = algopop.leaderboardx.app.db.nodes_for_table();
return ((function (search_term,nodes_by_rank){
return (function algopop$leaderboardx$app$views$graph_table$table_$_a_table(selected_id__$1,editing__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.common.editable_string,search_term,cljs.core.PersistentVector.EMPTY,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.graph_table.add_node], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$table$table_DASH_responsive,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Rank"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.graph_table.select_type,algopop.leaderboardx.app.views.graph_table.node_types,editing__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.graph_table.select_type,algopop.leaderboardx.app.views.graph_table.link_types,editing__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"From"], null)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody], null),(function (){var iter__7942__auto__ = ((function (search_term,nodes_by_rank){
return (function algopop$leaderboardx$app$views$graph_table$table_$_a_table_$_iter__36485(s__36486){
return (new cljs.core.LazySeq(null,((function (search_term,nodes_by_rank){
return (function (){
var s__36486__$1 = s__36486;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__36486__$1);
if(temp__6753__auto__){
var s__36486__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36486__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__36486__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__36488 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__36487 = (0);
while(true){
if((i__36487 < size__7941__auto__)){
var map__36509 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__36487);
var map__36509__$1 = ((((!((map__36509 == null)))?((((map__36509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36509):map__36509);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36509__$1,cljs.core.cst$kw$db_SLASH_id);
var rank = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36509__$1,cljs.core.cst$kw$rank);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36509__$1,cljs.core.cst$kw$node_SLASH_name);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_id__$1) : cljs.core.deref.call(null,selected_id__$1)));
var match_QMARK_ = (function (){var and__7073__auto__ = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(search_term) : cljs.core.deref.call(null,search_term)));
if(and__7073__auto__){
var G__36513 = name;
var G__36514 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(search_term) : cljs.core.deref.call(null,search_term));
return goog.string.startsWith(G__36513,G__36514);
} else {
return and__7073__auto__;
}
})();
var outs = algopop.leaderboardx.app.views.graph_table.list_edges(algopop.leaderboardx.app.db.outs(id));
var ins = algopop.leaderboardx.app.views.graph_table.list_edges(algopop.leaderboardx.app.db.ins(id));
cljs.core.chunk_append(b__36488,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,((selected_QMARK_)?"info":(cljs.core.truth_(match_QMARK_)?"warning":null)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$on_DASH_click,((function (i__36487,selected_QMARK_,match_QMARK_,outs,ins,map__36509,map__36509__$1,id,rank,name,c__7940__auto__,size__7941__auto__,b__36488,s__36486__$2,temp__6753__auto__,search_term,nodes_by_rank){
return (function algopop$leaderboardx$app$views$graph_table$table_$_a_table_$_iter__36485_$_table_row_click(e){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_id__$1,id) : cljs.core.reset_BANG_.call(null,selected_id__$1,id));
});})(i__36487,selected_QMARK_,match_QMARK_,outs,ins,map__36509,map__36509__$1,id,rank,name,c__7940__auto__,size__7941__auto__,b__36488,s__36486__$2,temp__6753__auto__,search_term,nodes_by_rank))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,rank], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.common.editable_string,(function (){var G__36515 = cljs.core.PersistentArrayMap.fromArray([id,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name], null)], true, false);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36515) : cljs.core.atom.call(null,G__36515));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.cst$kw$name], null),editing__$1,((function (i__36487,selected_QMARK_,match_QMARK_,outs,ins,map__36509,map__36509__$1,id,rank,name,c__7940__auto__,size__7941__auto__,b__36488,s__36486__$2,temp__6753__auto__,search_term,nodes_by_rank){
return (function algopop$leaderboardx$app$views$graph_table$table_$_a_table_$_iter__36485_$_update_node_name(m,p,v){
return algopop.leaderboardx.app.db.rename_node(id,v);
});})(i__36487,selected_QMARK_,match_QMARK_,outs,ins,map__36509,map__36509__$1,id,rank,name,c__7940__auto__,size__7941__auto__,b__36488,s__36486__$2,temp__6753__auto__,search_term,nodes_by_rank))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.common.editable_string,(function (){var G__36516 = cljs.core.PersistentArrayMap.fromArray([id,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$outs,outs], null)], true, false);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36516) : cljs.core.atom.call(null,G__36516));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.cst$kw$outs], null),editing__$1,((function (i__36487,selected_QMARK_,match_QMARK_,outs,ins,map__36509,map__36509__$1,id,rank,name,c__7940__auto__,size__7941__auto__,b__36488,s__36486__$2,temp__6753__auto__,search_term,nodes_by_rank){
return (function algopop$leaderboardx$app$views$graph_table$table_$_a_table_$_iter__36485_$_update_out_edges(m,p,v){
return algopop.leaderboardx.app.views.graph_table.replace_edges(selected_id__$1,name,v,ins);
});})(i__36487,selected_QMARK_,match_QMARK_,outs,ins,map__36509,map__36509__$1,id,rank,name,c__7940__auto__,size__7941__auto__,b__36488,s__36486__$2,temp__6753__auto__,search_term,nodes_by_rank))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.common.editable_string,(function (){var G__36517 = cljs.core.PersistentArrayMap.fromArray([id,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ins,ins], null)], true, false);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36517) : cljs.core.atom.call(null,G__36517));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.cst$kw$ins], null),editing__$1,((function (i__36487,selected_QMARK_,match_QMARK_,outs,ins,map__36509,map__36509__$1,id,rank,name,c__7940__auto__,size__7941__auto__,b__36488,s__36486__$2,temp__6753__auto__,search_term,nodes_by_rank){
return (function algopop$leaderboardx$app$views$graph_table$table_$_a_table_$_iter__36485_$_update_in_edges(m,p,v){
return algopop.leaderboardx.app.views.graph_table.replace_edges(selected_id__$1,name,outs,v);
});})(i__36487,selected_QMARK_,match_QMARK_,outs,ins,map__36509,map__36509__$1,id,rank,name,c__7940__auto__,size__7941__auto__,b__36488,s__36486__$2,temp__6753__auto__,search_term,nodes_by_rank))
], null)], null)], null));

var G__36527 = (i__36487 + (1));
i__36487 = G__36527;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36488),algopop$leaderboardx$app$views$graph_table$table_$_a_table_$_iter__36485(cljs.core.chunk_rest(s__36486__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36488),null);
}
} else {
var map__36518 = cljs.core.first(s__36486__$2);
var map__36518__$1 = ((((!((map__36518 == null)))?((((map__36518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36518):map__36518);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36518__$1,cljs.core.cst$kw$db_SLASH_id);
var rank = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36518__$1,cljs.core.cst$kw$rank);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36518__$1,cljs.core.cst$kw$node_SLASH_name);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_id__$1) : cljs.core.deref.call(null,selected_id__$1)));
var match_QMARK_ = (function (){var and__7073__auto__ = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(search_term) : cljs.core.deref.call(null,search_term)));
if(and__7073__auto__){
var G__36522 = name;
var G__36523 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(search_term) : cljs.core.deref.call(null,search_term));
return goog.string.startsWith(G__36522,G__36523);
} else {
return and__7073__auto__;
}
})();
var outs = algopop.leaderboardx.app.views.graph_table.list_edges(algopop.leaderboardx.app.db.outs(id));
var ins = algopop.leaderboardx.app.views.graph_table.list_edges(algopop.leaderboardx.app.db.ins(id));
return cljs.core.cons(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,((selected_QMARK_)?"info":(cljs.core.truth_(match_QMARK_)?"warning":null)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$on_DASH_click,((function (selected_QMARK_,match_QMARK_,outs,ins,map__36518,map__36518__$1,id,rank,name,s__36486__$2,temp__6753__auto__,search_term,nodes_by_rank){
return (function algopop$leaderboardx$app$views$graph_table$table_$_a_table_$_iter__36485_$_table_row_click(e){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_id__$1,id) : cljs.core.reset_BANG_.call(null,selected_id__$1,id));
});})(selected_QMARK_,match_QMARK_,outs,ins,map__36518,map__36518__$1,id,rank,name,s__36486__$2,temp__6753__auto__,search_term,nodes_by_rank))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,rank], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.common.editable_string,(function (){var G__36524 = cljs.core.PersistentArrayMap.fromArray([id,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name], null)], true, false);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36524) : cljs.core.atom.call(null,G__36524));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.cst$kw$name], null),editing__$1,((function (selected_QMARK_,match_QMARK_,outs,ins,map__36518,map__36518__$1,id,rank,name,s__36486__$2,temp__6753__auto__,search_term,nodes_by_rank){
return (function algopop$leaderboardx$app$views$graph_table$table_$_a_table_$_iter__36485_$_update_node_name(m,p,v){
return algopop.leaderboardx.app.db.rename_node(id,v);
});})(selected_QMARK_,match_QMARK_,outs,ins,map__36518,map__36518__$1,id,rank,name,s__36486__$2,temp__6753__auto__,search_term,nodes_by_rank))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.common.editable_string,(function (){var G__36525 = cljs.core.PersistentArrayMap.fromArray([id,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$outs,outs], null)], true, false);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36525) : cljs.core.atom.call(null,G__36525));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.cst$kw$outs], null),editing__$1,((function (selected_QMARK_,match_QMARK_,outs,ins,map__36518,map__36518__$1,id,rank,name,s__36486__$2,temp__6753__auto__,search_term,nodes_by_rank){
return (function algopop$leaderboardx$app$views$graph_table$table_$_a_table_$_iter__36485_$_update_out_edges(m,p,v){
return algopop.leaderboardx.app.views.graph_table.replace_edges(selected_id__$1,name,v,ins);
});})(selected_QMARK_,match_QMARK_,outs,ins,map__36518,map__36518__$1,id,rank,name,s__36486__$2,temp__6753__auto__,search_term,nodes_by_rank))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.common.editable_string,(function (){var G__36526 = cljs.core.PersistentArrayMap.fromArray([id,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ins,ins], null)], true, false);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36526) : cljs.core.atom.call(null,G__36526));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.cst$kw$ins], null),editing__$1,((function (selected_QMARK_,match_QMARK_,outs,ins,map__36518,map__36518__$1,id,rank,name,s__36486__$2,temp__6753__auto__,search_term,nodes_by_rank){
return (function algopop$leaderboardx$app$views$graph_table$table_$_a_table_$_iter__36485_$_update_in_edges(m,p,v){
return algopop.leaderboardx.app.views.graph_table.replace_edges(selected_id__$1,name,outs,v);
});})(selected_QMARK_,match_QMARK_,outs,ins,map__36518,map__36518__$1,id,rank,name,s__36486__$2,temp__6753__auto__,search_term,nodes_by_rank))
], null)], null)], null),algopop$leaderboardx$app$views$graph_table$table_$_a_table_$_iter__36485(cljs.core.rest(s__36486__$2)));
}
} else {
return null;
}
break;
}
});})(search_term,nodes_by_rank))
,null,null));
});})(search_term,nodes_by_rank))
;
return iter__7942__auto__((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nodes_by_rank) : cljs.core.deref.call(null,nodes_by_rank)));
})())], null)], null);
});
;})(search_term,nodes_by_rank))
});
algopop.leaderboardx.app.views.graph_table.table_view = (function algopop$leaderboardx$app$views$graph_table$table_view(){
var selected_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var editing = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.graph_table.table,selected_id,editing], null);
});
