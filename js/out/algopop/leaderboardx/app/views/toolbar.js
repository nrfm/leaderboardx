// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('algopop.leaderboardx.app.views.toolbar');
goog.require('cljs.core');
goog.require('algopop.leaderboardx.app.seed');
goog.require('algopop.leaderboardx.app.logging');
goog.require('clojure.string');
goog.require('reagent.core');
algopop.leaderboardx.app.views.toolbar.help = (function algopop$leaderboardx$app$views$toolbar$help(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default$dropdown_DASH_toggle,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data_DASH_toggle,"dropdown",cljs.core.cst$kw$aria_DASH_expanded,"false"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$glyphicon$glyphicon_DASH_question_DASH_sign,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$aria_DASH_hidden,"true"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$panel$panel_DASH_default$dropdown_DASH_menu$dropdown_DASH_menu_DASH_right,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"550px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$panel_DASH_body,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$list_DASH_unstyled,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Enter a node name and press ENTER to add it."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Enter a comma separated list of nodes to link to and press ENTER to add them."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"To delete nodes and links, click on the graph or table and press the DELETE key."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Select one name and shift click another to add a link."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Shift click a selected node to change its shape."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Shift click a link to make it dashed."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Drag nodes or edges around with the mouse."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Double click to unpin nodes and edges."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Click on the table row then click again to edit."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"If your names are email addresses, a Gravatar will be drawn."], null)], null)], null)], null)], null);
});
algopop.leaderboardx.app.views.toolbar.save_file = (function algopop$leaderboardx$app$views$toolbar$save_file(filename,t,s){
if(cljs.core.truth_(Blob)){
var b = (new Blob([s],({"type": t})));
if(cljs.core.truth_(window.navigator.msSaveBlob)){
return window.navigator.msSaveBlob(b,filename);
} else {
var link = document.createElement("a");
(link["download"] = filename);

if(cljs.core.truth_(window.webkitURL)){
(link["href"] = window.webkitURL.createObjectURL(b));
} else {
(link["href"] = window.URL.createObjectURL(b));

(link["onclick"] = ((function (link,b){
return (function algopop$leaderboardx$app$views$toolbar$save_file_$_destroy_clicked(e){
return document.body.removeChild(e.target);
});})(link,b))
);

(link["style"]["display"] = "none");

document.body.appendChild(link);
}

return link.click();
}
} else {
return algopop.leaderboardx.app.logging.error("Browser does not support Blob");
}
});
algopop.leaderboardx.app.views.toolbar.ends_with = (function algopop$leaderboardx$app$views$toolbar$ends_with(s,suffix){
return !((s.indexOf(suffix,(s.length - suffix.length)) < (0)));
});
algopop.leaderboardx.app.views.toolbar.read_file = (function algopop$leaderboardx$app$views$toolbar$read_file(g,file,read_graph){
if(cljs.core.truth_(FileReader)){
var reader = (new FileReader());
reader.onload = ((function (reader){
return (function algopop$leaderboardx$app$views$toolbar$read_file_$_csv_loaded(e){
var temp__6753__auto__ = (function (){var G__44264 = e.target.result;
return (read_graph.cljs$core$IFn$_invoke$arity$1 ? read_graph.cljs$core$IFn$_invoke$arity$1(G__44264) : read_graph.call(null,G__44264));
})();
if(cljs.core.truth_(temp__6753__auto__)){
var new_graph = temp__6753__auto__;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(g,new_graph) : cljs.core.reset_BANG_.call(null,g,new_graph));
} else {
return null;
}
});})(reader))
;

return reader.readAsText(file);
} else {
return algopop.leaderboardx.app.logging.error("Browser does not support FileReader");
}
});
algopop.leaderboardx.app.views.toolbar.import_button = (function algopop$leaderboardx$app$views$toolbar$import_button(label,accept,read_graph,g){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$btn$btn_DASH_file,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$name,"import",cljs.core.cst$kw$tab_DASH_index,"-1",cljs.core.cst$kw$accept,accept,cljs.core.cst$kw$value,"",cljs.core.cst$kw$on_DASH_change,(function algopop$leaderboardx$app$views$toolbar$import_button_$_import_csv_change(e){
var temp__6753__auto__ = (e["target"]["files"][(0)]);
if(cljs.core.truth_(temp__6753__auto__)){
var file = temp__6753__auto__;
return null;
} else {
return null;
}
})], null)], null)], null)], null);
});
algopop.leaderboardx.app.views.toolbar.action_button = (function algopop$leaderboardx$app$views$toolbar$action_button(label,f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$btn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,f], null),label], null)], null);
});
algopop.leaderboardx.app.views.toolbar.filename = (function algopop$leaderboardx$app$views$toolbar$filename(p__44265,ext){
var map__44268 = p__44265;
var map__44268__$1 = ((((!((map__44268 == null)))?((((map__44268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44268.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44268):map__44268);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44268__$1,cljs.core.cst$kw$title);
return [cljs.core.str((function (){var or__7085__auto__ = title;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return "graph";
}
})()),cljs.core.str("."),cljs.core.str(ext)].join('');
});
algopop.leaderboardx.app.views.toolbar.format_svg = (function algopop$leaderboardx$app$views$toolbar$format_svg(svg){
return [cljs.core.str("<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">"),cljs.core.str(clojure.string.replace(svg,/ data-reactid=\"[^\"]*\"/,"")),cljs.core.str("</svg>")].join('');
});
algopop.leaderboardx.app.views.toolbar.toolbar = (function algopop$leaderboardx$app$views$toolbar$toolbar(g,get_svg){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_toolbar$pull_DASH_right,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$role,"toolbar"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default$dropdown_DASH_toggle,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data_DASH_toggle,"dropdown",cljs.core.cst$kw$aria_DASH_expanded,"false"], null),"Load"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$dropdown_DASH_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$role,"menu"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.toolbar.action_button,"Empty",(function algopop$leaderboardx$app$views$toolbar$toolbar_$_clear_click(e){
var G__44276 = g;
var G__44277 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nodes,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$edges,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__44276,G__44277) : cljs.core.reset_BANG_.call(null,G__44276,G__44277));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.toolbar.action_button,"Random",(function algopop$leaderboardx$app$views$toolbar$toolbar_$_random_click(e){
return algopop.leaderboardx.app.seed.set_rand_BANG_();
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.toolbar.action_button,"Example",(function algopop$leaderboardx$app$views$toolbar$toolbar_$_random_click(e){
return algopop.leaderboardx.app.seed.set_example_BANG_();
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default$dropdown_DASH_toggle,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data_DASH_toggle,"dropdown",cljs.core.cst$kw$aria_DASH_expanded,"false"], null),"Save"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$dropdown_DASH_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$role,"menu"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.toolbar.action_button,"Image (svg)",(function algopop$leaderboardx$app$views$toolbar$toolbar_$_export_svg(e){
return algopop.leaderboardx.app.views.toolbar.save_file(algopop.leaderboardx.app.views.toolbar.filename((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g) : cljs.core.deref.call(null,g)),"svg"),"image/svg+xml",algopop.leaderboardx.app.views.toolbar.format_svg((get_svg.cljs$core$IFn$_invoke$arity$0 ? get_svg.cljs$core$IFn$_invoke$arity$0() : get_svg.call(null))));
})], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.toolbar.help], null)], null);
});
