// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('algopop.leaderboardx.app.views.graph_editor');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('algopop.leaderboardx.app.views.d3');
goog.require('algopop.leaderboardx.app.db');
goog.require('algopop.leaderboardx.app.views.common');
goog.require('reagent.session');
goog.require('algopop.leaderboardx.app.views.graph_table');
goog.require('algopop.leaderboardx.app.views.toolbar');
goog.require('algopop.leaderboardx.app.graph');
algopop.leaderboardx.app.views.graph_editor.title_input = (function algopop$leaderboardx$app$views$graph_editor$title_input(title){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"title-input",cljs.core.cst$kw$component_DASH_did_DASH_mount,algopop.leaderboardx.app.views.common.focus_append,cljs.core.cst$kw$reagent_DASH_render,(function algopop$leaderboardx$app$views$graph_editor$title_input_$_title_input_render(title__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$name,"new-title",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"550px"], null),cljs.core.cst$kw$default_DASH_value,title__$1], null)], null);
})], null));
});
algopop.leaderboardx.app.views.graph_editor.title_editor = (function algopop$leaderboardx$app$views$graph_editor$title_editor(g,editing){
var title = cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g) : cljs.core.deref.call(null,g)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(editing) : cljs.core.deref.call(null,editing)),cljs.core.cst$kw$title))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$form_DASH_inline,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,((function (title){
return (function algopop$leaderboardx$app$views$graph_editor$title_editor_$_title_submit(e){
var map__44631 = algopop.leaderboardx.app.views.common.form_data(e);
var map__44631__$1 = ((((!((map__44631 == null)))?((((map__44631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44631.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44631):map__44631);
var new_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44631__$1,cljs.core.cst$kw$new_DASH_title);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(g,cljs.core.assoc,cljs.core.cst$kw$title,new_title);

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(editing,null) : cljs.core.reset_BANG_.call(null,editing,null));
});})(title))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.graph_editor.title_input,title], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (title){
return (function algopop$leaderboardx$app$views$graph_editor$title_editor_$_rename_click(e){
var G__44635 = editing;
var G__44636 = cljs.core.cst$kw$title;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__44635,G__44636) : cljs.core.reset_BANG_.call(null,G__44635,G__44636));
});})(title))
], null),(function (){var or__7085__auto__ = title;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return "Untitled";
}
})()], null))], null)], null);
});
algopop.leaderboardx.app.views.graph_editor.unselect = (function algopop$leaderboardx$app$views$graph_editor$unselect(selected_id,editing){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_id,null) : cljs.core.reset_BANG_.call(null,selected_id,null));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(editing,null) : cljs.core.reset_BANG_.call(null,editing,null));
});
algopop.leaderboardx.app.views.graph_editor.delete_selected = (function algopop$leaderboardx$app$views$graph_editor$delete_selected(selected_id,editing,g){
var temp__6753__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_id) : cljs.core.deref.call(null,selected_id));
if(cljs.core.truth_(temp__6753__auto__)){
var id = temp__6753__auto__;
if(typeof id === 'string'){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(g,algopop.leaderboardx.app.graph.without_node,id);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(g,algopop.leaderboardx.app.graph.without_edge,id);
}

return algopop.leaderboardx.app.views.graph_editor.unselect(selected_id,editing);
} else {
return null;
}
});
algopop.leaderboardx.app.views.graph_editor.maybe_delete = (function algopop$leaderboardx$app$views$graph_editor$maybe_delete(e,selected_id,editing,g){
if((e.target instanceof HTMLInputElement)){
return null;
} else {
e.preventDefault();

return algopop.leaderboardx.app.views.graph_editor.delete_selected(selected_id,editing,g);
}
});
algopop.leaderboardx.app.views.graph_editor.handle_keydown = (function algopop$leaderboardx$app$views$graph_editor$handle_keydown(e,selected_id,editing,g){
var G__44639 = (function (){var G__44640 = e.keyCode;
return (algopop.leaderboardx.app.views.common.key_code_name.cljs$core$IFn$_invoke$arity$1 ? algopop.leaderboardx.app.views.common.key_code_name.cljs$core$IFn$_invoke$arity$1(G__44640) : algopop.leaderboardx.app.views.common.key_code_name.call(null,G__44640));
})();
switch (G__44639) {
case "ESC":
return algopop.leaderboardx.app.views.graph_editor.unselect(selected_id,editing);

break;
case "DELETE":
return algopop.leaderboardx.app.views.graph_editor.maybe_delete(e,selected_id,editing,g);

break;
case "BACKSPACE":
return algopop.leaderboardx.app.views.graph_editor.maybe_delete(e,selected_id,editing,g);

break;
default:
return null;

}
});
algopop.leaderboardx.app.views.graph_editor.get_svg = (function algopop$leaderboardx$app$views$graph_editor$get_svg(){
var G__44643 = document.getElementById("d3g");
var G__44643__$1 = (((G__44643 == null))?null:G__44643.firstChild);
if((G__44643__$1 == null)){
return null;
} else {
return G__44643__$1.innerHTML;
}
});
algopop.leaderboardx.app.views.graph_editor.graph_editor_page = (function algopop$leaderboardx$app$views$graph_editor$graph_editor_page(){
var nodes = algopop.leaderboardx.app.db.watch_nodes();
var edges = algopop.leaderboardx.app.db.watch_edges();
var g = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
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
var keydown_handler = ((function (nodes,edges,g,selected_id,editing){
return (function algopop$leaderboardx$app$views$graph_editor$graph_editor_page_$_a_keydown_handler(e){
return algopop.leaderboardx.app.views.graph_editor.handle_keydown(e,selected_id,editing,g);
});})(nodes,edges,g,selected_id,editing))
;
var callbacks = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$shift_DASH_click_DASH_edge,((function (nodes,edges,g,selected_id,editing,keydown_handler){
return (function (p__44647){
var map__44648 = p__44647;
var map__44648__$1 = ((((!((map__44648 == null)))?((((map__44648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44648.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44648):map__44648);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44648__$1,cljs.core.cst$kw$id);
return algopop.leaderboardx.app.db.invert_edge(id);
});})(nodes,edges,g,selected_id,editing,keydown_handler))
,cljs.core.cst$kw$shift_DASH_click_DASH_node,((function (nodes,edges,g,selected_id,editing,keydown_handler){
return (function (a,b){
return algopop.leaderboardx.app.db.add_edge(a,b);
});})(nodes,edges,g,selected_id,editing,keydown_handler))
], null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"graph-editor",cljs.core.cst$kw$reagent_DASH_render,((function (nodes,edges,g,selected_id,editing,keydown_handler,callbacks){
return (function algopop$leaderboardx$app$views$graph_editor$graph_editor_page_$_graph_editor(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.toolbar.toolbar,g,algopop.leaderboardx.app.views.graph_editor.get_svg], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.graph_editor.title_editor,g,editing], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_d3g,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.d3.graph,nodes,edges,selected_id,editing,callbacks], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.graph_table.table,selected_id,editing], null)], null)], null);
});})(nodes,edges,g,selected_id,editing,keydown_handler,callbacks))
,cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (nodes,edges,g,selected_id,editing,keydown_handler,callbacks){
return (function algopop$leaderboardx$app$views$graph_editor$graph_editor_page_$_graph_editor_did_mount(this$){
return document.addEventListener("keydown",keydown_handler);
});})(nodes,edges,g,selected_id,editing,keydown_handler,callbacks))
,cljs.core.cst$kw$component_DASH_will_DASH_unmount,((function (nodes,edges,g,selected_id,editing,keydown_handler,callbacks){
return (function algopop$leaderboardx$app$views$graph_editor$graph_editor_page_$_graph_editor_will_unmount(this$){
return document.removeEventListener("keydown",keydown_handler);
});})(nodes,edges,g,selected_id,editing,keydown_handler,callbacks))
], null));
});
