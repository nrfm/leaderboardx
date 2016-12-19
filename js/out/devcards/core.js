// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_();
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__7085__auto__ = (function (){var and__7073__auto__ = typeof Symbol !== 'undefined';
if(and__7073__auto__){
var and__7073__auto____$1 = cljs.core.fn_QMARK_(Symbol);
if(and__7073__auto____$1){
var and__7073__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__7073__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__7073__auto____$2;
}
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
})();
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
return (
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__21975_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsreload,p1__21975_SHARP_.detail], null));
}));

return true;
})()
)
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_(m)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$propagated_DASH_errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$options,cljs.core.cst$kw$message,"should be a Map or nil.",cljs.core.cst$kw$value,m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args21976 = [];
var len__8301__auto___21979 = arguments.length;
var i__8302__auto___21980 = (0);
while(true){
if((i__8302__auto___21980 < len__8301__auto___21979)){
args21976.push((arguments[i__8302__auto___21980]));

var G__21981 = (i__8302__auto___21980 + (1));
i__8302__auto___21980 = G__21981;
continue;
} else {
}
break;
}

var G__21978 = args21976.length;
switch (G__21978) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21976.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_(options)) && (cljs.core.map_QMARK_(cljs.core.cst$kw$default_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$base_DASH_card_DASH_options], null),(function (opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,cljs.core.cst$kw$default_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1(options)], 0));
}));
} else {
}

devcards.system.start_ui(devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_();
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;

devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__7073__auto__ = cljs.core.map_QMARK_(c);
if(and__7073__auto__){
var map__21989 = c;
var map__21989__$1 = ((((!((map__21989 == null)))?((((map__21989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21989.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21989):map__21989);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21989__$1,cljs.core.cst$kw$path);
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21989__$1,cljs.core.cst$kw$func);
cljs.core.vector_QMARK_(path);

cljs.core.not_empty(path);

cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_(func);
} else {
return and__7073__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_(c))){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$register_DASH_card,c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,[cljs.core.str(cljs.core.hash(raw_html_str))].join(''),cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,raw_html_str], null)], null)));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__6753__auto__ = (devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2 ? devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2(this$,"code-ref") : devcards.core.ref__GT_node.call(null,this$,"code-ref"));
if(cljs.core.truth_(temp__6753__auto__)){
var node = temp__6753__auto__;
var temp__6753__auto____$1 = devcards.core.get_hljs();
if(cljs.core.truth_(temp__6753__auto____$1)){
var hljs = temp__6753__auto____$1;
var temp__6753__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__6753__auto____$2)){
var highlight_block = temp__6753__auto____$2;
return (highlight_block.cljs$core$IFn$_invoke$arity$1 ? highlight_block.cljs$core$IFn$_invoke$arity$1(node) : highlight_block.call(null,node));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var base__20977__auto___22009 = ({"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "render": (function (){
var this$ = this;
var G__21991 = "pre";
var G__21992 = ({"className": (cljs.core.truth_(devcards.core.get_hljs())?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash((function (){var G__21994 = this$;
var G__21995 = cljs.core.cst$kw$code;
return (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(G__21994,G__21995) : devcards.core.get_props.call(null,G__21994,G__21995));
})())});
var G__21993 = (function (){var G__21996 = "code";
var G__21997 = ({"className": (function (){var or__7085__auto__ = (function (){var G__22001 = this$;
var G__22002 = cljs.core.cst$kw$lang;
return (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(G__22001,G__22002) : devcards.core.get_props.call(null,G__22001,G__22002));
})();
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return "";
}
})(), "ref": "code-ref"});
var G__21998 = sablono.interpreter.interpret((function (){var G__22003 = this$;
var G__22004 = cljs.core.cst$kw$code;
return (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(G__22003,G__22004) : devcards.core.get_props.call(null,G__22003,G__22004));
})());
return React.createElement(G__21996,G__21997,G__21998);
})();
return React.createElement(G__21991,G__21992,G__21993);
})});
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__20977__auto___22009);
}

var seq__22005_22010 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__22006_22011 = null;
var count__22007_22012 = (0);
var i__22008_22013 = (0);
while(true){
if((i__22008_22013 < count__22007_22012)){
var property__20978__auto___22014 = chunk__22006_22011.cljs$core$IIndexed$_nth$arity$2(null,i__22008_22013);
if(cljs.core.truth_((base__20977__auto___22009[property__20978__auto___22014]))){
(devcards.core.CodeHighlight.prototype[property__20978__auto___22014] = (base__20977__auto___22009[property__20978__auto___22014]));
} else {
}

var G__22015 = seq__22005_22010;
var G__22016 = chunk__22006_22011;
var G__22017 = count__22007_22012;
var G__22018 = (i__22008_22013 + (1));
seq__22005_22010 = G__22015;
chunk__22006_22011 = G__22016;
count__22007_22012 = G__22017;
i__22008_22013 = G__22018;
continue;
} else {
var temp__6753__auto___22019 = cljs.core.seq(seq__22005_22010);
if(temp__6753__auto___22019){
var seq__22005_22020__$1 = temp__6753__auto___22019;
if(cljs.core.chunked_seq_QMARK_(seq__22005_22020__$1)){
var c__7991__auto___22021 = cljs.core.chunk_first(seq__22005_22020__$1);
var G__22022 = cljs.core.chunk_rest(seq__22005_22020__$1);
var G__22023 = c__7991__auto___22021;
var G__22024 = cljs.core.count(c__7991__auto___22021);
var G__22025 = (0);
seq__22005_22010 = G__22022;
chunk__22006_22011 = G__22023;
count__22007_22012 = G__22024;
i__22008_22013 = G__22025;
continue;
} else {
var property__20978__auto___22026 = cljs.core.first(seq__22005_22020__$1);
if(cljs.core.truth_((base__20977__auto___22009[property__20978__auto___22026]))){
(devcards.core.CodeHighlight.prototype[property__20978__auto___22026] = (base__20977__auto___22009[property__20978__auto___22026]));
} else {
}

var G__22027 = cljs.core.next(seq__22005_22020__$1);
var G__22028 = null;
var G__22029 = (0);
var G__22030 = (0);
seq__22005_22010 = G__22027;
chunk__22006_22011 = G__22028;
count__22007_22012 = G__22029;
i__22008_22013 = G__22030;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
var G__22033 = devcards.core.CodeHighlight;
var G__22034 = ({"code": code_str, "lang": lang});
return React.createElement(G__22033,G__22034);
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__8111__auto__ = (function (){var G__22035 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22035) : cljs.core.atom.call(null,G__22035));
})();
var prefer_table__8112__auto__ = (function (){var G__22036 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22036) : cljs.core.atom.call(null,G__22036));
})();
var method_cache__8113__auto__ = (function (){var G__22037 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22037) : cljs.core.atom.call(null,G__22037));
})();
var cached_hierarchy__8114__auto__ = (function (){var G__22038 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22038) : cljs.core.atom.call(null,G__22038));
})();
var hierarchy__8115__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","markdown-block->react"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__8115__auto__,method_table__8111__auto__,prefer_table__8112__auto__,method_cache__8113__auto__,cached_hierarchy__8114__auto__));
})();
}
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__22039){
var map__22040 = p__22039;
var map__22040__$1 = ((((!((map__22040 == null)))?((((map__22040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22040.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22040):map__22040);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22040__$1,cljs.core.cst$kw$content);
return devcards.core.react_raw(devcards.util.markdown.markdown_to_html(content));
}));
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$code_DASH_block,(function (p__22042){
var map__22043 = p__22042;
var map__22043__$1 = ((((!((map__22043 == null)))?((((map__22043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22043.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22043):map__22043);
var block = map__22043__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22043__$1,cljs.core.cst$kw$content);
var G__22045 = devcards.core.CodeHighlight;
var G__22046 = ({"code": cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(block), "lang": cljs.core.cst$kw$lang.cljs$core$IFn$_invoke$arity$1(block)});
return React.createElement(G__22045,G__22046);
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__8308__auto__ = [];
var len__8301__auto___22057 = arguments.length;
var i__8302__auto___22058 = (0);
while(true){
if((i__8302__auto___22058 < len__8301__auto___22057)){
args__8308__auto__.push((arguments[i__8302__auto___22058]));

var G__22059 = (i__8302__auto___22058 + (1));
i__8302__auto___22058 = G__22059;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((0) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__8309__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_((devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : devcards.core.react_element_QMARK_.call(null,x)))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code(x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_(cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(devcards.util.markdown.parse_out_blocks,cljs.core.array_seq([strs__$1], 0));
var G__22048 = "div";
var G__22049 = ({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"});
var G__22050 = sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__22048,G__22049,blocks,strs__$1){
return (function (i,data){
var G__22051 = "div";
var G__22052 = ({"key": i});
var G__22053 = sablono.interpreter.interpret((devcards.core.markdown_block__GT_react.cljs$core$IFn$_invoke$arity$1 ? devcards.core.markdown_block__GT_react.cljs$core$IFn$_invoke$arity$1(data) : devcards.core.markdown_block__GT_react.call(null,data)));
return React.createElement(G__22051,G__22052,G__22053);
});})(G__22048,G__22049,blocks,strs__$1))
,blocks));
return React.createElement(G__22048,G__22049,G__22050);
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

var G__22054 = "div";
var G__22055 = ({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"});
var G__22056 = sablono.interpreter.interpret(message);
return React.createElement(G__22054,G__22055,G__22056);
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq22047){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22047));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$classname], null));
var padding_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$padding], null));
var G__22064 = "div";
var G__22065 = ({"key": "devcards_naked-card", "className": (function (){var G__22067 = devcards.system.devcards_rendered_card_class;
var G__22067__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__22067),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__22067);
if(cljs.core.truth_(cljs.core.not_empty(classname))){
return [cljs.core.str(G__22067__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__22067__$1;
}
})()});
var G__22066 = sablono.interpreter.interpret(children);
return React.createElement(G__22064,G__22065,G__22066);
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args22068 = [];
var len__8301__auto___22090 = arguments.length;
var i__8302__auto___22091 = (0);
while(true){
if((i__8302__auto___22091 < len__8301__auto___22090)){
args22068.push((arguments[i__8302__auto___22091]));

var G__22092 = (i__8302__auto___22091 + (1));
i__8302__auto___22091 = G__22092;
continue;
} else {
}
break;
}

var G__22070 = args22068.length;
switch (G__22070) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22068.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__22071 = card;
var map__22071__$1 = ((((!((map__22071 == null)))?((((map__22071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22071):map__22071);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22071__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22071__$1,cljs.core.cst$kw$options);
if(cljs.core.not(cljs.core.cst$kw$hidden.cljs$core$IFn$_invoke$arity$1(options))){
if(cljs.core.cst$kw$heading.cljs$core$IFn$_invoke$arity$1(options) === false){
var G__22073 = "div";
var G__22074 = ({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$hide_DASH_border.cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))});
var G__22075 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__22073,G__22074,G__22075);
} else {
var G__22076 = "div";
var G__22077 = ({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"});
var G__22078 = (function (){var G__22080 = "div";
var G__22081 = ({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"});
var G__22082 = (cljs.core.truth_(path)?sablono.interpreter.interpret((function (){var G__22083 = "a";
var G__22084 = ({"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__22083,G__22080,G__22081,G__22076,G__22077,map__22071,map__22071__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__22083,G__22080,G__22081,G__22076,G__22077,map__22071,map__22071__$1,path,options))
)});
var G__22085 = sablono.interpreter.interpret(cljs.core.name(cljs.core.last(path)));
var G__22086 = " ";
return React.createElement(G__22083,G__22084,G__22085,G__22086);
})()):sablono.interpreter.interpret((function (){var attrs22087 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs22087))?sablono.interpreter.attributes(attrs22087):null),((cljs.core.map_QMARK_(attrs22087))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22087)], null)));
})()));
return React.createElement(G__22080,G__22081,G__22082);
})();
var G__22079 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__22076,G__22077,G__22078,G__22079);
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__7798__auto__ = (((this$ == null))?null:this$);
var m__7799__auto__ = (devcards.core._devcard_options[goog.typeOf(x__7798__auto__)]);
if(!((m__7799__auto__ == null))){
return (m__7799__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7799__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__7799__auto__.call(null,this$,devcard_opts));
} else {
var m__7799__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__7799__auto____$1 == null))){
return (m__7799__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7799__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__7799__auto____$1.call(null,this$,devcard_opts));
} else {
throw cljs.core.missing_protocol("IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__7798__auto__ = (((this$ == null))?null:this$);
var m__7799__auto__ = (devcards.core._devcard[goog.typeOf(x__7798__auto__)]);
if(!((m__7799__auto__ == null))){
return (m__7799__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7799__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__7799__auto__.call(null,this$,devcard_opts));
} else {
var m__7799__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__7799__auto____$1 == null))){
return (m__7799__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7799__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__7799__auto____$1.call(null,this$,devcard_opts));
} else {
throw cljs.core.missing_protocol("IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__6753__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__6753__auto__)){
var comp = temp__6753__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name(k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name(k)]);
} else {
return null;
}
});
var base__20977__auto___22099 = ({"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((next_props["change_count"]),devcards.core.get_props(this$,cljs.core.cst$kw$change_count));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs22094 = devcards.core.get_props(this$,cljs.core.cst$kw$children_thunk);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs22094))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs22094], 0))):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_(attrs22094))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22094)], null)));
})});
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__20977__auto___22099);
}

var seq__22095_22100 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__22096_22101 = null;
var count__22097_22102 = (0);
var i__22098_22103 = (0);
while(true){
if((i__22098_22103 < count__22097_22102)){
var property__20978__auto___22104 = chunk__22096_22101.cljs$core$IIndexed$_nth$arity$2(null,i__22098_22103);
if(cljs.core.truth_((base__20977__auto___22099[property__20978__auto___22104]))){
(devcards.core.DontUpdate.prototype[property__20978__auto___22104] = (base__20977__auto___22099[property__20978__auto___22104]));
} else {
}

var G__22105 = seq__22095_22100;
var G__22106 = chunk__22096_22101;
var G__22107 = count__22097_22102;
var G__22108 = (i__22098_22103 + (1));
seq__22095_22100 = G__22105;
chunk__22096_22101 = G__22106;
count__22097_22102 = G__22107;
i__22098_22103 = G__22108;
continue;
} else {
var temp__6753__auto___22109 = cljs.core.seq(seq__22095_22100);
if(temp__6753__auto___22109){
var seq__22095_22110__$1 = temp__6753__auto___22109;
if(cljs.core.chunked_seq_QMARK_(seq__22095_22110__$1)){
var c__7991__auto___22111 = cljs.core.chunk_first(seq__22095_22110__$1);
var G__22112 = cljs.core.chunk_rest(seq__22095_22110__$1);
var G__22113 = c__7991__auto___22111;
var G__22114 = cljs.core.count(c__7991__auto___22111);
var G__22115 = (0);
seq__22095_22100 = G__22112;
chunk__22096_22101 = G__22113;
count__22097_22102 = G__22114;
i__22098_22103 = G__22115;
continue;
} else {
var property__20978__auto___22116 = cljs.core.first(seq__22095_22110__$1);
if(cljs.core.truth_((base__20977__auto___22099[property__20978__auto___22116]))){
(devcards.core.DontUpdate.prototype[property__20978__auto___22116] = (base__20977__auto___22099[property__20978__auto___22116]));
} else {
}

var G__22117 = cljs.core.next(seq__22095_22110__$1);
var G__22118 = null;
var G__22119 = (0);
var G__22120 = (0);
seq__22095_22100 = G__22117;
chunk__22096_22101 = G__22118;
count__22097_22102 = G__22119;
i__22098_22103 = G__22120;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
var G__22123 = devcards.core.DontUpdate;
var G__22124 = ({"change_count": change_count, "children_thunk": children_thunk});
return React.createElement(G__22123,G__22124);
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__7085__auto__ = cljs.core.cst$kw$initial_DASH_data.cljs$core$IFn$_invoke$arity$1(devcards.core.get_props(this$,cljs.core.cst$kw$card));
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IAtom$)))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data))){
return data;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.atom.call(null,data));
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (this$){
return devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
}):(function (this$){
return devcards.core.wrangle_inital_data(this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_(m)){
return (m.cljs$core$IFn$_invoke$arity$2 ? m.cljs$core$IFn$_invoke$arity$2(data_atom,parent_elem) : m.call(null,data_atom,parent_elem));
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not((devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(main_obj_SINGLEQUOTE_) : devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_)))))?devcards.core.code_highlight(devcards.util.utils.pprint_code(main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(cljs.core.cst$kw$watch_DASH_atom.cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update(change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(options))?(devcards.core.hist_recorder_STAR_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.hist_recorder_STAR_.cljs$core$IFn$_invoke$arity$1(data_atom) : devcards.core.hist_recorder_STAR_.call(null,data_atom)):null);
var document = (function (){var temp__6753__auto__ = cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__6753__auto__)){
var docu = temp__6753__auto__;
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([docu], 0));
} else {
return null;
}
})();
var edn = (cljs.core.truth_(cljs.core.cst$kw$inspect_DASH_data.cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom))):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$hide_DASH_border], null),true):card);
var main__$1 = (function (){var G__22133 = "div";
var G__22134 = ({"key": "devcards-main-section"});
var G__22135 = sablono.interpreter.interpret(main);
return React.createElement(G__22133,G__22134,G__22135);
})();
var children = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var x__8014__auto__ = document;
return cljs.core._conj((function (){var x__8014__auto____$1 = main__$1;
return cljs.core._conj((function (){var x__8014__auto____$2 = hist_ctl;
return cljs.core._conj((function (){var x__8014__auto____$3 = edn;
return cljs.core._conj(cljs.core.List.EMPTY,x__8014__auto____$3);
})(),x__8014__auto____$2);
})(),x__8014__auto____$1);
})(),x__8014__auto__);
})());
if(cljs.core.truth_(cljs.core.cst$kw$frame.cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,card__$1);
} else {
var G__22136 = "div";
var G__22137 = ({"className": "com-rigsomelight-devcards-frameless"});
var G__22138 = sablono.interpreter.interpret(children);
return React.createElement(G__22136,G__22137,G__22138);
}
});
var base__20977__auto___22143 = ({"getInitialState": (function (){
return ({"unique_id": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_base_DASH_), "state_change_count": (0)});
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
var card = devcards.core.get_props(this$,cljs.core.cst$kw$card);
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(cljs.core.cst$kw$static_DASH_state.cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = cljs.core.cst$kw$initial_DASH_data.cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_((devcards.core.atom_like_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.atom_like_QMARK_.cljs$core$IFn$_invoke$arity$1(initial_data) : devcards.core.atom_like_QMARK_.call(null,initial_data)))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(initial_data) : cljs.core.deref.call(null,initial_data)):initial_data);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom)),data)){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom,data) : cljs.core.reset_BANG_.call(null,atom,data));
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
return this$.setState((function (){var or__7085__auto__ = (function (){var and__7073__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
if(cljs.core.truth_(and__7073__auto__)){
return this$.state;
} else {
return and__7073__auto__;
}
})();
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return ({"data_atom": devcards.core.wrangle_inital_data(this$)});
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
var id = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
if(cljs.core.truth_((function (){var and__7073__auto__ = data_atom;
if(cljs.core.truth_(and__7073__auto__)){
return id;
} else {
return and__7073__auto__;
}
})())){
return cljs.core.remove_watch(data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
var temp__6753__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
if(cljs.core.truth_(temp__6753__auto__)){
var data_atom = temp__6753__auto__;
var temp__6753__auto____$1 = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
if(cljs.core.truth_(temp__6753__auto____$1)){
var id = temp__6753__auto____$1;
return cljs.core.add_watch(data_atom,id,((function (id,temp__6753__auto____$1,data_atom,temp__6753__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState(({"state_change_count": (devcards.core.get_state(this$,cljs.core.cst$kw$state_change_count) + (1))}));
});})(id,temp__6753__auto____$1,data_atom,temp__6753__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = (devcards.core.get_data_atom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.get_data_atom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.get_data_atom.call(null,this$));
var card = devcards.core.get_props(this$,cljs.core.cst$kw$card);
var change_count = devcards.core.get_state(this$,cljs.core.cst$kw$state_change_count);
var main = devcards.core.default_derive_main(this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements(main,data_atom,card);
})});
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__20977__auto___22143);
}

var seq__22139_22144 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__22140_22145 = null;
var count__22141_22146 = (0);
var i__22142_22147 = (0);
while(true){
if((i__22142_22147 < count__22141_22146)){
var property__20978__auto___22148 = chunk__22140_22145.cljs$core$IIndexed$_nth$arity$2(null,i__22142_22147);
if(cljs.core.truth_((base__20977__auto___22143[property__20978__auto___22148]))){
(devcards.core.DevcardBase.prototype[property__20978__auto___22148] = (base__20977__auto___22143[property__20978__auto___22148]));
} else {
}

var G__22149 = seq__22139_22144;
var G__22150 = chunk__22140_22145;
var G__22151 = count__22141_22146;
var G__22152 = (i__22142_22147 + (1));
seq__22139_22144 = G__22149;
chunk__22140_22145 = G__22150;
count__22141_22146 = G__22151;
i__22142_22147 = G__22152;
continue;
} else {
var temp__6753__auto___22153 = cljs.core.seq(seq__22139_22144);
if(temp__6753__auto___22153){
var seq__22139_22154__$1 = temp__6753__auto___22153;
if(cljs.core.chunked_seq_QMARK_(seq__22139_22154__$1)){
var c__7991__auto___22155 = cljs.core.chunk_first(seq__22139_22154__$1);
var G__22156 = cljs.core.chunk_rest(seq__22139_22154__$1);
var G__22157 = c__7991__auto___22155;
var G__22158 = cljs.core.count(c__7991__auto___22155);
var G__22159 = (0);
seq__22139_22144 = G__22156;
chunk__22140_22145 = G__22157;
count__22141_22146 = G__22158;
i__22142_22147 = G__22159;
continue;
} else {
var property__20978__auto___22160 = cljs.core.first(seq__22139_22154__$1);
if(cljs.core.truth_((base__20977__auto___22143[property__20978__auto___22160]))){
(devcards.core.DevcardBase.prototype[property__20978__auto___22160] = (base__20977__auto___22143[property__20978__auto___22160]));
} else {
}

var G__22161 = cljs.core.next(seq__22139_22154__$1);
var G__22162 = null;
var G__22163 = (0);
var G__22164 = (0);
seq__22139_22144 = G__22161;
chunk__22140_22145 = G__22162;
count__22141_22146 = G__22163;
i__22142_22147 = G__22164;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (this$){
var temp__6753__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$node_fn);
if(cljs.core.truth_(temp__6753__auto__)){
var node_fn = temp__6753__auto__;
var temp__6753__auto____$1 = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,cljs.core.cst$kw$unique_id));
if(cljs.core.truth_(temp__6753__auto____$1)){
var node = temp__6753__auto____$1;
var G__22165 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__22166 = node;
return (node_fn.cljs$core$IFn$_invoke$arity$2 ? node_fn.cljs$core$IFn$_invoke$arity$2(G__22165,G__22166) : node_fn.call(null,G__22165,G__22166));
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__20977__auto___22173 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_dom_DASH_component_DASH_))].join('')});
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__7073__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$node_fn);
if(cljs.core.truth_(and__7073__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.get_props(this$,cljs.core.cst$kw$node_fn),(prevP["node_fn"]));
} else {
return and__7073__auto__;
}
})())){
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__6753__auto__ = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,cljs.core.cst$kw$unique_id));
if(cljs.core.truth_(temp__6753__auto__)){
var node = temp__6753__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
var G__22167 = ({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state(this$,cljs.core.cst$kw$unique_id)});
var G__22168 = "Card has not mounted DOM node.";
return React.DOM.div(G__22167,G__22168);
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))});
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__20977__auto___22173);
}

var seq__22169_22174 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__22170_22175 = null;
var count__22171_22176 = (0);
var i__22172_22177 = (0);
while(true){
if((i__22172_22177 < count__22171_22176)){
var property__20978__auto___22178 = chunk__22170_22175.cljs$core$IIndexed$_nth$arity$2(null,i__22172_22177);
if(cljs.core.truth_((base__20977__auto___22173[property__20978__auto___22178]))){
(devcards.core.DomComponent.prototype[property__20978__auto___22178] = (base__20977__auto___22173[property__20978__auto___22178]));
} else {
}

var G__22179 = seq__22169_22174;
var G__22180 = chunk__22170_22175;
var G__22181 = count__22171_22176;
var G__22182 = (i__22172_22177 + (1));
seq__22169_22174 = G__22179;
chunk__22170_22175 = G__22180;
count__22171_22176 = G__22181;
i__22172_22177 = G__22182;
continue;
} else {
var temp__6753__auto___22183 = cljs.core.seq(seq__22169_22174);
if(temp__6753__auto___22183){
var seq__22169_22184__$1 = temp__6753__auto___22183;
if(cljs.core.chunked_seq_QMARK_(seq__22169_22184__$1)){
var c__7991__auto___22185 = cljs.core.chunk_first(seq__22169_22184__$1);
var G__22186 = cljs.core.chunk_rest(seq__22169_22184__$1);
var G__22187 = c__7991__auto___22185;
var G__22188 = cljs.core.count(c__7991__auto___22185);
var G__22189 = (0);
seq__22169_22174 = G__22186;
chunk__22170_22175 = G__22187;
count__22171_22176 = G__22188;
i__22172_22177 = G__22189;
continue;
} else {
var property__20978__auto___22190 = cljs.core.first(seq__22169_22184__$1);
if(cljs.core.truth_((base__20977__auto___22173[property__20978__auto___22190]))){
(devcards.core.DomComponent.prototype[property__20978__auto___22190] = (base__20977__auto___22173[property__20978__auto___22190]));
} else {
}

var G__22191 = cljs.core.next(seq__22169_22184__$1);
var G__22192 = null;
var G__22193 = (0);
var G__22194 = (0);
seq__22169_22174 = G__22191;
chunk__22170_22175 = G__22192;
count__22171_22176 = G__22193;
i__22172_22177 = G__22194;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__7085__auto__ = x === true;
if(or__7085__auto__){
return or__7085__auto__;
} else {
var or__7085__auto____$1 = x === false;
if(or__7085__auto____$1){
return or__7085__auto____$1;
} else {
var or__7085__auto____$2 = (x == null);
if(or__7085__auto____$2){
return or__7085__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,key,cljs.core.cst$kw$message,"should be boolean or nil",cljs.core.cst$kw$value,x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__7085__auto__ = typeof x === 'string';
if(or__7085__auto__){
return or__7085__auto__;
} else {
var or__7085__auto____$1 = (x == null);
if(or__7085__auto____$1){
return or__7085__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,key,cljs.core.cst$kw$message,"should be string or nil",cljs.core.cst$kw$value,x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__7085__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_(opts)){
var propagated_errors = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$propagated_DASH_errors], null));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (propagated_errors){
return (function (p1__22195_SHARP_){
return !(p1__22195_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__22204 = opts;
var map__22204__$1 = ((((!((map__22204 == null)))?((((map__22204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22204.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22204):map__22204);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22204__$1,cljs.core.cst$kw$name);
var main_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22204__$1,cljs.core.cst$kw$main_DASH_obj);
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22204__$1,cljs.core.cst$kw$initial_DASH_data);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22204__$1,cljs.core.cst$kw$options);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__7085__auto__ = cljs.core.map_QMARK_(options);
if(or__7085__auto__){
return or__7085__auto__;
} else {
var or__7085__auto____$1 = (options == null);
if(or__7085__auto____$1){
return or__7085__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$options,cljs.core.cst$kw$message,"should be a Map or nil",cljs.core.cst$kw$value,options], null);
}
}
})(),devcards.core.stringer_QMARK_(cljs.core.cst$kw$name,opts),devcards.core.stringer_QMARK_(cljs.core.cst$kw$documentation,opts),(function (){var or__7085__auto__ = (initial_data == null);
if(or__7085__auto__){
return or__7085__auto__;
} else {
var or__7085__auto____$1 = cljs.core.vector_QMARK_(initial_data);
if(or__7085__auto____$1){
return or__7085__auto____$1;
} else {
var or__7085__auto____$2 = cljs.core.map_QMARK_(initial_data);
if(or__7085__auto____$2){
return or__7085__auto____$2;
} else {
var or__7085__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === initial_data.cljs$core$IAtom$)))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data));
if(or__7085__auto____$3){
return or__7085__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$initial_DASH_data,cljs.core.cst$kw$message,"should be an Atom or a Map or nil.",cljs.core.cst$kw$value,initial_data], null);
}
}
}
}
})()], null),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__22204,map__22204__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__22196_SHARP_){
return devcards.core.booler_QMARK_(p1__22196_SHARP_,cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(opts));
});})(map__22204,map__22204__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$frame,cljs.core.cst$kw$heading,cljs.core.cst$kw$padding,cljs.core.cst$kw$inspect_DASH_data,cljs.core.cst$kw$watch_DASH_atom,cljs.core.cst$kw$history,cljs.core.cst$kw$static_DASH_state], null))], 0));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,"Card should be a Map.",cljs.core.cst$kw$value,opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
var G__22227 = "div";
var G__22228 = ({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})});
var G__22229 = sablono.interpreter.interpret((function (){var G__22232 = "code";
var G__22233 = ({"style": ({"flex": "1 100px", "marginRight": "10px"})});
var G__22234 = sablono.interpreter.interpret((cljs.core.truth_(cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e)], 0)):null));
return React.createElement(G__22232,G__22233,G__22234);
})());
var G__22230 = (function (){var G__22235 = "span";
var G__22236 = ({"style": ({"flex": "3 100px", "marginRight": "10px"})});
var G__22237 = sablono.interpreter.interpret(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(e));
return React.createElement(G__22235,G__22236,G__22237);
})();
var G__22231 = (function (){var G__22239 = "span";
var G__22240 = ({"style": ({"flex": "1 100px"})});
var G__22241 = " Received: ";
var G__22242 = (function (){var attrs22238 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(e)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs22238))?sablono.interpreter.attributes(attrs22238):null),((cljs.core.map_QMARK_(attrs22238))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22238)], null)));
})();
return React.createElement(G__22239,G__22240,G__22241,G__22242);
})();
return React.createElement(G__22227,G__22228,G__22229,G__22230,G__22231);
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
var G__22255 = "div";
var G__22256 = ({"className": "com-rigsomelight-devcards-card-base-no-pad"});
var G__22257 = (function (){var attrs22254 = [cljs.core.str((((cljs.core.map_QMARK_(opts)) && (typeof cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs22254))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs22254], 0))):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_(attrs22254))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22254)], null)));
})();
var G__22258 = sablono.interpreter.interpret(devcards.core.naked_card((function (){var G__22260 = "div";
var G__22261 = null;
var G__22262 = (function (){var attrs22259 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.core.error_line,errors);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs22259))?sablono.interpreter.attributes(attrs22259):null),((cljs.core.map_QMARK_(attrs22259))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22259)], null)));
})();
var G__22263 = sablono.interpreter.interpret(((cljs.core.map_QMARK_(opts))?(function (){var attrs22264 = devcards.util.edn_renderer.html_edn(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),cljs.core.dissoc,cljs.core.cst$kw$propagated_DASH_errors));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs22264))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs22264], 0))):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_(attrs22264))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22264)], null)));
})():null));
return React.createElement(G__22260,G__22261,G__22262,G__22263);
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,true], null)], null)));
return React.createElement(G__22255,G__22256,G__22257,G__22258);
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),(function (p1__22265_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state))),p1__22265_SHARP_], 0));
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options(card_options);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return devcards.core.render_errors(card_options,errors);
} else {
var G__22268 = devcards.core.DevcardBase;
var G__22269 = ({"card": devcards.core.add_environment_defaults(card_options)});
return React.createElement(G__22268,G__22269);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7755__auto__,k__7756__auto__){
var self__ = this;
var this__7755__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7755__auto____$1,k__7756__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7757__auto__,k22271,else__7758__auto__){
var self__ = this;
var this__7757__auto____$1 = this;
var G__22273 = (((k22271 instanceof cljs.core.Keyword))?k22271.fqn:null);
switch (G__22273) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22271,else__7758__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7769__auto__,writer__7770__auto__,opts__7771__auto__){
var self__ = this;
var this__7769__auto____$1 = this;
var pr_pair__7772__auto__ = ((function (this__7769__auto____$1){
return (function (keyval__7773__auto__){
return cljs.core.pr_sequential_writer(writer__7770__auto__,cljs.core.pr_writer,""," ","",opts__7771__auto__,keyval__7773__auto__);
});})(this__7769__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7770__auto__,pr_pair__7772__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__7771__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22270){
var self__ = this;
var G__22270__$1 = this;
return (new cljs.core.RecordIter((0),G__22270__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7753__auto__){
var self__ = this;
var this__7753__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7749__auto__){
var self__ = this;
var this__7749__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7759__auto__){
var self__ = this;
var this__7759__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7750__auto__){
var self__ = this;
var this__7750__auto____$1 = this;
var h__7522__auto__ = self__.__hash;
if(!((h__7522__auto__ == null))){
return h__7522__auto__;
} else {
var h__7522__auto____$1 = cljs.core.hash_imap(this__7750__auto____$1);
self__.__hash = h__7522__auto____$1;

return h__7522__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7751__auto__,other__7752__auto__){
var self__ = this;
var this__7751__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7073__auto__ = other__7752__auto__;
if(cljs.core.truth_(and__7073__auto__)){
var and__7073__auto____$1 = (this__7751__auto____$1.constructor === other__7752__auto__.constructor);
if(and__7073__auto____$1){
return cljs.core.equiv_map(this__7751__auto____$1,other__7752__auto__);
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7764__auto__,k__7765__auto__){
var self__ = this;
var this__7764__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__7765__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7764__auto____$1),self__.__meta),k__7765__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7765__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7762__auto__,k__7763__auto__,G__22270){
var self__ = this;
var this__7762__auto____$1 = this;
var pred__22274 = cljs.core.keyword_identical_QMARK_;
var expr__22275 = k__7763__auto__;
if(cljs.core.truth_((function (){var G__22277 = cljs.core.cst$kw$obj;
var G__22278 = expr__22275;
return (pred__22274.cljs$core$IFn$_invoke$arity$2 ? pred__22274.cljs$core$IFn$_invoke$arity$2(G__22277,G__22278) : pred__22274.call(null,G__22277,G__22278));
})())){
return (new devcards.core.IdentiyOptions(G__22270,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7763__auto__,G__22270),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7767__auto__){
var self__ = this;
var this__7767__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7754__auto__,G__22270){
var self__ = this;
var this__7754__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__22270,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7760__auto__,entry__7761__auto__){
var self__ = this;
var this__7760__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7761__auto__)){
return cljs.core._assoc(this__7760__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7760__auto____$1,entry__7761__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__7791__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__7791__auto__,writer__7792__auto__){
return cljs.core._write(writer__7792__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__22272){
return (new devcards.core.IdentiyOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__22272),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22272,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__22280){
var map__22283 = p__22280;
var map__22283__$1 = ((((!((map__22283 == null)))?((((map__22283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22283.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22283):map__22283);
var devcard_opts = map__22283__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22283__$1,cljs.core.cst$kw$options);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts,cljs.core.cst$kw$main_DASH_obj,((function (map__22283,map__22283__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom)));
});})(map__22283,map__22283__$1,devcard_opts,options))
,cljs.core.array_seq([cljs.core.cst$kw$initial_DASH_data,main_obj,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$history,true], null),devcards.core.assert_options_map(options)], 0))], 0));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7755__auto__,k__7756__auto__){
var self__ = this;
var this__7755__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7755__auto____$1,k__7756__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7757__auto__,k22286,else__7758__auto__){
var self__ = this;
var this__7757__auto____$1 = this;
var G__22288 = (((k22286 instanceof cljs.core.Keyword))?k22286.fqn:null);
switch (G__22288) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22286,else__7758__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7769__auto__,writer__7770__auto__,opts__7771__auto__){
var self__ = this;
var this__7769__auto____$1 = this;
var pr_pair__7772__auto__ = ((function (this__7769__auto____$1){
return (function (keyval__7773__auto__){
return cljs.core.pr_sequential_writer(writer__7770__auto__,cljs.core.pr_writer,""," ","",opts__7771__auto__,keyval__7773__auto__);
});})(this__7769__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7770__auto__,pr_pair__7772__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__7771__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22285){
var self__ = this;
var G__22285__$1 = this;
return (new cljs.core.RecordIter((0),G__22285__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7753__auto__){
var self__ = this;
var this__7753__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7749__auto__){
var self__ = this;
var this__7749__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7759__auto__){
var self__ = this;
var this__7759__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7750__auto__){
var self__ = this;
var this__7750__auto____$1 = this;
var h__7522__auto__ = self__.__hash;
if(!((h__7522__auto__ == null))){
return h__7522__auto__;
} else {
var h__7522__auto____$1 = cljs.core.hash_imap(this__7750__auto____$1);
self__.__hash = h__7522__auto____$1;

return h__7522__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7751__auto__,other__7752__auto__){
var self__ = this;
var this__7751__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7073__auto__ = other__7752__auto__;
if(cljs.core.truth_(and__7073__auto__)){
var and__7073__auto____$1 = (this__7751__auto____$1.constructor === other__7752__auto__.constructor);
if(and__7073__auto____$1){
return cljs.core.equiv_map(this__7751__auto____$1,other__7752__auto__);
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7764__auto__,k__7765__auto__){
var self__ = this;
var this__7764__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__7765__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7764__auto____$1),self__.__meta),k__7765__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7765__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7762__auto__,k__7763__auto__,G__22285){
var self__ = this;
var this__7762__auto____$1 = this;
var pred__22289 = cljs.core.keyword_identical_QMARK_;
var expr__22290 = k__7763__auto__;
if(cljs.core.truth_((function (){var G__22292 = cljs.core.cst$kw$obj;
var G__22293 = expr__22290;
return (pred__22289.cljs$core$IFn$_invoke$arity$2 ? pred__22289.cljs$core$IFn$_invoke$arity$2(G__22292,G__22293) : pred__22289.call(null,G__22292,G__22293));
})())){
return (new devcards.core.AtomLikeOptions(G__22285,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7763__auto__,G__22285),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7767__auto__){
var self__ = this;
var this__7767__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options(self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7754__auto__,G__22285){
var self__ = this;
var this__7754__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__22285,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7760__auto__,entry__7761__auto__){
var self__ = this;
var this__7760__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7761__auto__)){
return cljs.core._assoc(this__7760__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7760__auto____$1,entry__7761__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__7791__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__7791__auto__,writer__7792__auto__){
return cljs.core._write(writer__7792__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__22287){
return (new devcards.core.AtomLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__22287),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22287,cljs.core.cst$kw$obj),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(devcard_opts,cljs.core.cst$kw$main_DASH_obj,devcards.util.edn_renderer.html_edn(((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === main_obj.cljs$core$IDeref$)))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj)))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(main_obj) : cljs.core.deref.call(null,main_obj)):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7755__auto__,k__7756__auto__){
var self__ = this;
var this__7755__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7755__auto____$1,k__7756__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7757__auto__,k22298,else__7758__auto__){
var self__ = this;
var this__7757__auto____$1 = this;
var G__22300 = (((k22298 instanceof cljs.core.Keyword))?k22298.fqn:null);
switch (G__22300) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22298,else__7758__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7769__auto__,writer__7770__auto__,opts__7771__auto__){
var self__ = this;
var this__7769__auto____$1 = this;
var pr_pair__7772__auto__ = ((function (this__7769__auto____$1){
return (function (keyval__7773__auto__){
return cljs.core.pr_sequential_writer(writer__7770__auto__,cljs.core.pr_writer,""," ","",opts__7771__auto__,keyval__7773__auto__);
});})(this__7769__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7770__auto__,pr_pair__7772__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__7771__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22297){
var self__ = this;
var G__22297__$1 = this;
return (new cljs.core.RecordIter((0),G__22297__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7753__auto__){
var self__ = this;
var this__7753__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7749__auto__){
var self__ = this;
var this__7749__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7759__auto__){
var self__ = this;
var this__7759__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7750__auto__){
var self__ = this;
var this__7750__auto____$1 = this;
var h__7522__auto__ = self__.__hash;
if(!((h__7522__auto__ == null))){
return h__7522__auto__;
} else {
var h__7522__auto____$1 = cljs.core.hash_imap(this__7750__auto____$1);
self__.__hash = h__7522__auto____$1;

return h__7522__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7751__auto__,other__7752__auto__){
var self__ = this;
var this__7751__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7073__auto__ = other__7752__auto__;
if(cljs.core.truth_(and__7073__auto__)){
var and__7073__auto____$1 = (this__7751__auto____$1.constructor === other__7752__auto__.constructor);
if(and__7073__auto____$1){
return cljs.core.equiv_map(this__7751__auto____$1,other__7752__auto__);
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7764__auto__,k__7765__auto__){
var self__ = this;
var this__7764__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__7765__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7764__auto____$1),self__.__meta),k__7765__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7765__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7762__auto__,k__7763__auto__,G__22297){
var self__ = this;
var this__7762__auto____$1 = this;
var pred__22301 = cljs.core.keyword_identical_QMARK_;
var expr__22302 = k__7763__auto__;
if(cljs.core.truth_((function (){var G__22304 = cljs.core.cst$kw$obj;
var G__22305 = expr__22302;
return (pred__22301.cljs$core$IFn$_invoke$arity$2 ? pred__22301.cljs$core$IFn$_invoke$arity$2(G__22304,G__22305) : pred__22301.call(null,G__22304,G__22305));
})())){
return (new devcards.core.EdnLikeOptions(G__22297,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7763__auto__,G__22297),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7767__auto__){
var self__ = this;
var this__7767__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options(self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7754__auto__,G__22297){
var self__ = this;
var this__7754__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__22297,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7760__auto__,entry__7761__auto__){
var self__ = this;
var this__7760__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7761__auto__)){
return cljs.core._assoc(this__7760__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7761__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7760__auto____$1,entry__7761__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__7791__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__7791__auto__,writer__7792__auto__){
return cljs.core._write(writer__7792__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__22299){
return (new devcards.core.EdnLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__22299),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22299,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__7073__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWatchable$)))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x));
if(and__7073__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
} else {
return and__7073__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === main_obj.devcards$core$IDevcardOptions$)))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_(main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_(main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$path,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__22318 = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__22318 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__22318.devcards$core$IDevcard$))){
return true;
} else {
if((!G__22318.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__22318);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__22318);
}
})()){
return devcards.core._devcard(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors(devcards.core._devcard_options(devcards.core.coerce_to_devcards_options(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
var G__22321 = devcards.core.DomComponent;
var G__22322 = ({"node_fn": node_fn, "data_atom": data_atom});
return React.createElement(G__22321,G__22322);
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main_DASH_obj], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options(this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__22326 = (function (){var G__22327 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22327) : cljs.core.deref.call(null,G__22327));
})();
var map__22326__$1 = ((((!((map__22326 == null)))?((((map__22326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22326):map__22326);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22326__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22326__$1,cljs.core.cst$kw$pointer);
return ((pointer + (1)) < cljs.core.count(history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__22330 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22330) : cljs.core.deref.call(null,G__22330));
})()) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__22332 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22332) : cljs.core.deref.call(null,G__22332));
})()) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__22337 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__22337__$1 = ((((!((map__22337 == null)))?((((map__22337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22337.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22337):map__22337);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22337__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22337__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_back(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer + (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__22339_22341 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__22340_22342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer + (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22339_22341,G__22340_22342) : cljs.core.reset_BANG_.call(null,G__22339_22341,G__22340_22342));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__22347 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__22347__$1 = ((((!((map__22347 == null)))?((((map__22347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22347.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22347):map__22347);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22347__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22347__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer - (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__22349_22351 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__22350_22352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer - (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22349_22351,G__22350_22352) : cljs.core.reset_BANG_.call(null,G__22349_22351,G__22350_22352));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__22357 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__22357__$1 = ((((!((map__22357 == null)))?((((map__22357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22357.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22357):map__22357);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22357__$1,cljs.core.cst$kw$history);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(0),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__22359_22361 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__22360_22362 = cljs.core.first(history);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22359_22361,G__22360_22362) : cljs.core.reset_BANG_.call(null,G__22359_22361,G__22360_22362));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = (function (){var G__22363 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_history_DASH_runner_DASH_))].join(''), "history_atom": (function (){var G__22364 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$history,cljs.core.List.EMPTY,cljs.core.cst$kw$pointer,(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22364) : cljs.core.atom.call(null,G__22364));
})()});
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.core.get_state(this$,cljs.core.cst$kw$history_atom),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$history], null),(function (){var x__8014__auto__ = (function (){var G__22366 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22366) : cljs.core.deref.call(null,G__22366));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__8014__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var id = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
if(cljs.core.truth_((function (){var and__7073__auto__ = data_atom;
if(cljs.core.truth_(and__7073__auto__)){
return id;
} else {
return and__7073__auto__;
}
})())){
return cljs.core.add_watch(data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_(this$))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__22367){
var map__22368 = p__22367;
var map__22368__$1 = ((((!((map__22368 == null)))?((((map__22368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22368):map__22368);
var ha = map__22368__$1;
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22368__$1,cljs.core.cst$kw$pointer);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22368__$1,cljs.core.cst$kw$history);
var ignore_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22368__$1,cljs.core.cst$kw$ignore_DASH_click);
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ha,cljs.core.cst$kw$ignore_DASH_click,false);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ha,cljs.core.cst$kw$history,(function (){var abridged_hist = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(pointer,history);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(abridged_hist))){
return cljs.core.cons(n,abridged_hist);
} else {
return abridged_hist;
}
})(),cljs.core.array_seq([cljs.core.cst$kw$pointer,(0)], 0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$history,(function (){var hist = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(hist))){
return cljs.core.cons(n,hist);
} else {
return hist;
}
})(),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,false], 0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__7085__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())){
var G__22370 = "div";
var G__22371 = ({"style": ({"display": (cljs.core.truth_((function (){var or__7085__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"});
var G__22372 = (function (){var action = ((function (G__22370,G__22371,this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_(this$);
});})(G__22370,G__22371,this$))
;
return sablono.interpreter.interpret((function (){var G__22378 = "button";
var G__22379 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_back(this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action});
var G__22380 = (function (){var G__22381 = "span";
var G__22382 = ({"className": "com-rigsomelight-devcards-history-control-left"});
var G__22383 = "";
return React.createElement(G__22381,G__22382,G__22383);
})();
return React.createElement(G__22378,G__22379,G__22380);
})());
})();
var G__22373 = (function (){var action = ((function (G__22370,G__22371,G__22372,this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__22384 = data_atom;
var G__22385 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22384,G__22385) : cljs.core.reset_BANG_.call(null,G__22384,G__22385));
});})(G__22370,G__22371,G__22372,this$))
;
return sablono.interpreter.interpret((function (){var G__22388 = "button";
var G__22389 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action});
var G__22390 = (function (){var G__22391 = "span";
var G__22392 = ({"className": "com-rigsomelight-devcards-history-stop"});
var G__22393 = "";
return React.createElement(G__22391,G__22392,G__22393);
})();
return React.createElement(G__22388,G__22389,G__22390);
})());
})();
var G__22374 = (function (){var action = ((function (G__22370,G__22371,G__22372,G__22373,this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_(this$);
});})(G__22370,G__22371,G__22372,G__22373,this$))
;
return sablono.interpreter.interpret((function (){var G__22396 = "button";
var G__22397 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action});
var G__22398 = (function (){var G__22399 = "span";
var G__22400 = ({"className": "com-rigsomelight-devcards-history-control-right"});
var G__22401 = "";
return React.createElement(G__22399,G__22400,G__22401);
})();
return React.createElement(G__22396,G__22397,G__22398);
})());
})();
var G__22375 = (function (){var listener = ((function (G__22370,G__22371,G__22372,G__22373,G__22374,this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_(this$);
});})(G__22370,G__22371,G__22372,G__22373,G__22374,this$))
;
return sablono.interpreter.interpret((function (){var G__22408 = "button";
var G__22409 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener});
var G__22410 = (function (){var G__22413 = "span";
var G__22414 = ({"className": "com-rigsomelight-devcards-history-control-small-arrow"});
return React.createElement(G__22413,G__22414);
})();
var G__22411 = (function (){var G__22415 = "span";
var G__22416 = ({"className": "com-rigsomelight-devcards-history-control-small-arrow"});
return React.createElement(G__22415,G__22416);
})();
var G__22412 = (function (){var G__22417 = "span";
var G__22418 = ({"className": "com-rigsomelight-devcards-history-control-block"});
return React.createElement(G__22417,G__22418);
})();
return React.createElement(G__22408,G__22409,G__22410,G__22411,G__22412);
})());
})();
return React.createElement(G__22370,G__22371,G__22372,G__22373,G__22374,G__22375);
} else {
return null;
}
})});
return React.createClass(G__22363);
})();
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
var G__22421 = devcards.core.HistoryComponent;
var G__22422 = ({"data_atom": data_atom, "key": "devcards-history-control-bar"});
return React.createElement(G__22421,G__22422);
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_collect_tests], null),cljs.core.conj,cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(cljs.test.get_current_env(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null)),m], 0))], 0));
});
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$pass], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$pass);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$fail], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$fail);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$error], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$error);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$test_DASH_doc], null),(function (m){
devcards.core.collect_test(m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_22424 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$reporter,cljs.core.cst$kw$_devcards_test_card_reporter);

try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return cljs.test.get_current_env();
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_22424;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__8111__auto__ = (function (){var G__22425 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22425) : cljs.core.atom.call(null,G__22425));
})();
var prefer_table__8112__auto__ = (function (){var G__22426 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22426) : cljs.core.atom.call(null,G__22426));
})();
var method_cache__8113__auto__ = (function (){var G__22427 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22427) : cljs.core.atom.call(null,G__22427));
})();
var cached_hierarchy__8114__auto__ = (function (){var G__22428 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22428) : cljs.core.atom.call(null,G__22428));
})();
var hierarchy__8115__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","test-render"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__8115__auto__,method_table__8111__auto__,prefer_table__8112__auto__,method_cache__8113__auto__,cached_hierarchy__8114__auto__));
})();
}
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (m){
var attrs22429 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs22429))?sablono.interpreter.attributes(attrs22429):null),((cljs.core.map_QMARK_(attrs22429))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22429)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__22430,body){
var map__22438 = p__22430;
var map__22438__$1 = ((((!((map__22438 == null)))?((((map__22438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22438):map__22438);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22438__$1,cljs.core.cst$kw$message);
if(cljs.core.truth_(message)){
var G__22441 = "div";
var G__22442 = null;
var G__22443 = (function (){var attrs22440 = message;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs22440))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs22440], 0))):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_(attrs22440))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22440)], null)));
})();
var G__22444 = sablono.interpreter.interpret(body);
return React.createElement(G__22441,G__22442,G__22443,G__22444);
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__22445){
var map__22479 = p__22445;
var map__22479__$1 = ((((!((map__22479 == null)))?((((map__22479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22479):map__22479);
var m = map__22479__$1;
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22479__$1,cljs.core.cst$kw$expected);
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22479__$1,cljs.core.cst$kw$actual);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22479__$1,cljs.core.cst$kw$type);
return devcards.core.display_message(m,(function (){var attrs22481 = (function (){var G__22482 = devcards.core.CodeHighlight;
var G__22483 = ({"code": devcards.util.utils.pprint_code(expected), "lang": "clojure"});
return React.createElement(G__22482,G__22483);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs22481))?sablono.interpreter.attributes(attrs22481):null),((cljs.core.map_QMARK_(attrs22481))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$fail))?(function (){var G__22486 = "div";
var G__22487 = ({"style": ({"marginTop": "5px"})});
var G__22488 = (function (){var G__22490 = "div";
var G__22491 = ({"style": ({"position": "absolute", "fontSize": "0.9em"})});
var G__22492 = "\u25B6";
return React.createElement(G__22490,G__22491,G__22492);
})();
var G__22489 = (function (){var G__22493 = "div";
var G__22494 = ({"style": ({"marginLeft": "20px"})});
var G__22495 = sablono.interpreter.interpret((function (){var G__22496 = devcards.core.CodeHighlight;
var G__22497 = ({"code": devcards.util.utils.pprint_code(actual), "lang": "clojure"});
return React.createElement(G__22496,G__22497);
})());
return React.createElement(G__22493,G__22494,G__22495);
})();
return React.createElement(G__22486,G__22487,G__22488,G__22489);
})():null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22481),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$fail))?(function (){var G__22500 = "div";
var G__22501 = ({"style": ({"marginTop": "5px"})});
var G__22502 = (function (){var G__22504 = "div";
var G__22505 = ({"style": ({"position": "absolute", "fontSize": "0.9em"})});
var G__22506 = "\u25B6";
return React.createElement(G__22504,G__22505,G__22506);
})();
var G__22503 = (function (){var G__22507 = "div";
var G__22508 = ({"style": ({"marginLeft": "20px"})});
var G__22509 = sablono.interpreter.interpret((function (){var G__22510 = devcards.core.CodeHighlight;
var G__22511 = ({"code": devcards.util.utils.pprint_code(actual), "lang": "clojure"});
return React.createElement(G__22510,G__22511);
})());
return React.createElement(G__22507,G__22508,G__22509);
})();
return React.createElement(G__22500,G__22501,G__22502,G__22503);
})():null))], null)));
})());
});
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$pass,(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fail,(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$error,(function (m){
return devcards.core.display_message(m,(function (){var G__22515 = "div";
var G__22516 = null;
var G__22517 = React.createElement("strong",null,"Error: ");
var G__22518 = (function (){var attrs22514 = [cljs.core.str(cljs.core.cst$kw$actual.cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs22514))?sablono.interpreter.attributes(attrs22514):null),((cljs.core.map_QMARK_(attrs22514))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22514)], null)));
})();
return React.createElement(G__22515,G__22516,G__22517,G__22518);
})());
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$test_DASH_doc,(function (m){
var attrs22519 = devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(m)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs22519))?sablono.interpreter.attributes(attrs22519):null),((cljs.core.map_QMARK_(attrs22519))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22519)], null)));
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$context,(function (p__22520){
var map__22521 = p__22520;
var map__22521__$1 = ((((!((map__22521 == null)))?((((map__22521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22521):map__22521);
var testing_contexts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22521__$1,cljs.core.cst$kw$testing_DASH_contexts);
var attrs22523 = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" / ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__22521,map__22521__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#bbb"], null)], null),t," "], null);
});})(map__22521,map__22521__$1,testing_contexts))
,cljs.core.reverse(cljs.core.rest(testing_contexts))),(function (){var x__8014__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(-1)], null),cljs.core.first(testing_contexts)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8014__auto__);
})()));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs22523))?sablono.interpreter.attributes(attrs22523):null),((cljs.core.map_QMARK_(attrs22523))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22523)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
var G__22525 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$test_DASH_doc,cljs.core.cst$kw$documentation,s], null);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__22525) : cljs.test.report.call(null,G__22525));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([t,i], 0)),cljs.core.cst$kw$className,[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),(devcards.core.test_render.cljs$core$IFn$_invoke$arity$1 ? devcards.core.test_render.cljs$core$IFn$_invoke$arity$1(t) : devcards.core.test_render.call(null,t))], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs22534 = cljs.core.cst$kw$html_DASH_list.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__22535,p__22536){
var map__22537 = p__22535;
var map__22537__$1 = ((((!((map__22537 == null)))?((((map__22537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22537.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22537):map__22537);
var last_context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22537__$1,cljs.core.cst$kw$last_DASH_context);
var html_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22537__$1,cljs.core.cst$kw$html_DASH_list);
var vec__22538 = p__22536;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22538,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22538,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$last_DASH_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t),cljs.core.cst$kw$html_DASH_list,(function (){var res = (function (){var x__8014__auto__ = devcards.core.test_renderer(t,i);
return cljs.core._conj(cljs.core.List.EMPTY,x__8014__auto__);
})();
var res__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty(cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons(devcards.core.test_renderer(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$context], null),cljs.core.select_keys(t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null))], 0)),i),res):res));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.reverse(tests))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs22534))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs22534], 0))):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_(attrs22534))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22534)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (error_QMARK_,tests){
return (function (p__22579){
var map__22580 = p__22579;
var map__22580__$1 = ((((!((map__22580 == null)))?((((map__22580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22580.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22580):map__22580);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22580__$1,cljs.core.cst$kw$type);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$test_DASH_doc);
});})(error_QMARK_,tests))
,cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count(some_tests);
var map__22578 = cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(test_summary);
var map__22578__$1 = ((((!((map__22578 == null)))?((((map__22578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22578.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22578):map__22578);
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22578__$1,cljs.core.cst$kw$fail);
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22578__$1,cljs.core.cst$kw$pass);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22578__$1,cljs.core.cst$kw$error);
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
var G__22583 = "div";
var G__22584 = ({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"});
var G__22585 = (function (){var G__22587 = "div";
var G__22588 = ({"className": "com-rigsomelight-devcards-panel-heading"});
var G__22589 = (function (){var G__22593 = "a";
var G__22594 = ({"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__22593,G__22587,G__22588,G__22583,G__22584,error_QMARK_,tests,some_tests,total_tests,map__22578,map__22578__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__22593,G__22587,G__22588,G__22583,G__22584,error_QMARK_,tests,some_tests,total_tests,map__22578,map__22578__$1,fail,pass,error,error__$1))
)});
var G__22595 = sablono.interpreter.interpret((cljs.core.truth_(path)?[cljs.core.str(cljs.core.name(cljs.core.last(path)))].join(''):null));
return React.createElement(G__22593,G__22594,G__22595);
})();
var G__22590 = (function (){var G__22596 = "button";
var G__22597 = ({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_(((function (G__22596,G__22587,G__22588,G__22589,G__22583,G__22584,error_QMARK_,tests,some_tests,total_tests,map__22578,map__22578__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": cljs.core.identity}));
});})(G__22596,G__22587,G__22588,G__22589,G__22583,G__22584,error_QMARK_,tests,some_tests,total_tests,map__22578,map__22578__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"});
var G__22598 = sablono.interpreter.interpret(total_tests);
return React.createElement(G__22596,G__22597,G__22598);
})();
var G__22591 = sablono.interpreter.interpret(((((fail + error__$1) === (0)))?null:(function (){var G__22599 = "button";
var G__22600 = ({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_(((function (G__22599,G__22587,G__22588,G__22589,G__22590,G__22583,G__22584,error_QMARK_,tests,some_tests,total_tests,map__22578,map__22578__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (G__22599,G__22587,G__22588,G__22589,G__22590,G__22583,G__22584,error_QMARK_,tests,some_tests,total_tests,map__22578,map__22578__$1,fail,pass,error,error__$1){
return (function (p__22602){
var map__22603 = p__22602;
var map__22603__$1 = ((((!((map__22603 == null)))?((((map__22603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22603.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22603):map__22603);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22603__$1,cljs.core.cst$kw$type);
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fail,null,cljs.core.cst$kw$error,null], null), null).call(null,type);
});})(G__22599,G__22587,G__22588,G__22589,G__22590,G__22583,G__22584,error_QMARK_,tests,some_tests,total_tests,map__22578,map__22578__$1,fail,pass,error,error__$1))
}));
});})(G__22599,G__22587,G__22588,G__22589,G__22590,G__22583,G__22584,error_QMARK_,tests,some_tests,total_tests,map__22578,map__22578__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"});
var G__22601 = sablono.interpreter.interpret([cljs.core.str((fail + error__$1))].join(''));
return React.createElement(G__22599,G__22600,G__22601);
})()));
var G__22592 = sablono.interpreter.interpret(((((pass == null)) || ((pass === (0))))?null:(function (){var G__22605 = "button";
var G__22606 = ({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_(((function (G__22605,G__22587,G__22588,G__22589,G__22590,G__22591,G__22583,G__22584,error_QMARK_,tests,some_tests,total_tests,map__22578,map__22578__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (G__22605,G__22587,G__22588,G__22589,G__22590,G__22591,G__22583,G__22584,error_QMARK_,tests,some_tests,total_tests,map__22578,map__22578__$1,fail,pass,error,error__$1){
return (function (p__22608){
var map__22609 = p__22608;
var map__22609__$1 = ((((!((map__22609 == null)))?((((map__22609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22609.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22609):map__22609);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22609__$1,cljs.core.cst$kw$type);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$pass);
});})(G__22605,G__22587,G__22588,G__22589,G__22590,G__22591,G__22583,G__22584,error_QMARK_,tests,some_tests,total_tests,map__22578,map__22578__$1,fail,pass,error,error__$1))
}));
});})(G__22605,G__22587,G__22588,G__22589,G__22590,G__22591,G__22583,G__22584,error_QMARK_,tests,some_tests,total_tests,map__22578,map__22578__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"});
var G__22607 = sablono.interpreter.interpret(pass);
return React.createElement(G__22605,G__22606,G__22607);
})()));
return React.createElement(G__22587,G__22588,G__22589,G__22590,G__22591,G__22592);
})();
var G__22586 = (function (){var G__22611 = "div";
var G__22612 = ({"className": devcards.system.devcards_rendered_card_class});
var G__22613 = sablono.interpreter.interpret(devcards.core.layout_tests(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var or__7085__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$filter);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return cljs.core.identity;
}
})(),tests)));
return React.createElement(G__22611,G__22612,G__22613);
})();
return React.createElement(G__22583,G__22584,G__22585,G__22586);
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var test_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$reporter,cljs.core.cst$kw$_devcards_test_card_reporter);
cljs.test.set_env_BANG_(test_env);

var tests = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.test.get_current_env());

return cljs.core.async.close_BANG_(out);
});})(out,test_env))
], null));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Running tests!!"], 0));

cljs.test.run_block(tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__17028__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17028__auto__){
return (function (){
var f__17029__auto__ = (function (){var switch__16902__auto__ = ((function (c__17028__auto__){
return (function (state_22704){
var state_val_22705 = (state_22704[(1)]);
if((state_val_22705 === (7))){
var state_22704__$1 = state_22704;
var statearr_22706_22755 = state_22704__$1;
(statearr_22706_22755[(2)] = false);

(statearr_22706_22755[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22705 === (20))){
var inst_22642 = (state_22704[(7)]);
var inst_22662 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22642);
var state_22704__$1 = state_22704;
var statearr_22707_22756 = state_22704__$1;
(statearr_22707_22756[(2)] = inst_22662);

(statearr_22707_22756[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22705 === (27))){
var inst_22667 = (state_22704[(8)]);
var inst_22679 = (state_22704[(9)]);
var inst_22683 = (inst_22667.cljs$core$IFn$_invoke$arity$1 ? inst_22667.cljs$core$IFn$_invoke$arity$1(inst_22679) : inst_22667.call(null,inst_22679));
var state_22704__$1 = state_22704;
var statearr_22708_22757 = state_22704__$1;
(statearr_22708_22757[(2)] = inst_22683);

(statearr_22708_22757[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22705 === (1))){
var state_22704__$1 = state_22704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22704__$1,(2),devcards.core.test_channel);
} else {
if((state_val_22705 === (24))){
var state_22704__$1 = state_22704;
var statearr_22709_22758 = state_22704__$1;
(statearr_22709_22758[(2)] = null);

(statearr_22709_22758[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22705 === (4))){
var state_22704__$1 = state_22704;
var statearr_22710_22759 = state_22704__$1;
(statearr_22710_22759[(2)] = false);

(statearr_22710_22759[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22705 === (15))){
var state_22704__$1 = state_22704;
var statearr_22711_22760 = state_22704__$1;
(statearr_22711_22760[(2)] = false);

(statearr_22711_22760[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22705 === (21))){
var inst_22642 = (state_22704[(7)]);
var state_22704__$1 = state_22704;
var statearr_22712_22761 = state_22704__$1;
(statearr_22712_22761[(2)] = inst_22642);

(statearr_22712_22761[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22705 === (13))){
var inst_22702 = (state_22704[(2)]);
var state_22704__$1 = state_22704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22704__$1,inst_22702);
} else {
if((state_val_22705 === (22))){
var inst_22666 = (state_22704[(10)]);
var inst_22665 = (state_22704[(2)]);
var inst_22666__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22665,cljs.core.cst$kw$tests);
var inst_22667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22665,cljs.core.cst$kw$callback);
var state_22704__$1 = (function (){var statearr_22713 = state_22704;
(statearr_22713[(8)] = inst_22667);

(statearr_22713[(10)] = inst_22666__$1);

return statearr_22713;
})();
if(cljs.core.truth_(inst_22666__$1)){
var statearr_22714_22762 = state_22704__$1;
(statearr_22714_22762[(1)] = (23));

} else {
var statearr_22715_22763 = state_22704__$1;
(statearr_22715_22763[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22705 === (29))){
var inst_22693 = (state_22704[(2)]);
var inst_22694 = cljs.test.clear_env_BANG_();
var state_22704__$1 = (function (){var statearr_22716 = state_22704;
(statearr_22716[(11)] = inst_22693);

(statearr_22716[(12)] = inst_22694);

return statearr_22716;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22704__$1,(30),devcards.core.test_channel);
} else {
if((state_val_22705 === (6))){
var state_22704__$1 = state_22704;
var statearr_22717_22764 = state_22704__$1;
(statearr_22717_22764[(2)] = true);

(statearr_22717_22764[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22705 === (28))){
var inst_22667 = (state_22704[(8)]);
var inst_22685 = [cljs.core.cst$kw$type,cljs.core.cst$kw$actual];
var inst_22686 = [cljs.core.cst$kw$error,"Tests timed out. Please check Dev Console for Exceptions"];
var inst_22687 = cljs.core.PersistentHashMap.fromArrays(inst_22685,inst_22686);
var inst_22688 = devcards.core.collect_test(inst_22687);
var inst_22689 = cljs.test.get_current_env();
var inst_22690 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_22689,cljs.core.cst$kw$error,"Execution timed out!");
var inst_22691 = (inst_22667.cljs$core$IFn$_invoke$arity$1 ? inst_22667.cljs$core$IFn$_invoke$arity$1(inst_22690) : inst_22667.call(null,inst_22690));
var state_22704__$1 = (function (){var statearr_22718 = state_22704;
(statearr_22718[(13)] = inst_22688);

return statearr_22718;
})();
var statearr_22719_22765 = state_22704__$1;
(statearr_22719_22765[(2)] = inst_22691);

(statearr_22719_22765[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22705 === (25))){
var inst_22700 = (state_22704[(2)]);
var state_22704__$1 = state_22704;
var statearr_22720_22766 = state_22704__$1;
(statearr_22720_22766[(2)] = inst_22700);

(statearr_22720_22766[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22705 === (17))){
var state_22704__$1 = state_22704;
var statearr_22721_22767 = state_22704__$1;
(statearr_22721_22767[(2)] = true);

(statearr_22721_22767[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22705 === (3))){
var inst_22618 = (state_22704[(14)]);
var inst_22623 = inst_22618.cljs$lang$protocol_mask$partition0$;
var inst_22624 = (inst_22623 & (64));
var inst_22625 = inst_22618.cljs$core$ISeq$;
var inst_22626 = (cljs.core.PROTOCOL_SENTINEL === inst_22625);
var inst_22627 = (inst_22624) || (inst_22626);
var state_22704__$1 = state_22704;
if(cljs.core.truth_(inst_22627)){
var statearr_22722_22768 = state_22704__$1;
(statearr_22722_22768[(1)] = (6));

} else {
var statearr_22723_22769 = state_22704__$1;
(statearr_22723_22769[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22705 === (12))){
var inst_22642 = (state_22704[(7)]);
var inst_22646 = (inst_22642 == null);
var inst_22647 = cljs.core.not(inst_22646);
var state_22704__$1 = state_22704;
if(inst_22647){
var statearr_22724_22770 = state_22704__$1;
(statearr_22724_22770[(1)] = (14));

} else {
var statearr_22725_22771 = state_22704__$1;
(statearr_22725_22771[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22705 === (2))){
var inst_22618 = (state_22704[(14)]);
var inst_22618__$1 = (state_22704[(2)]);
var inst_22620 = (inst_22618__$1 == null);
var inst_22621 = cljs.core.not(inst_22620);
var state_22704__$1 = (function (){var statearr_22726 = state_22704;
(statearr_22726[(14)] = inst_22618__$1);

return statearr_22726;
})();
if(inst_22621){
var statearr_22727_22772 = state_22704__$1;
(statearr_22727_22772[(1)] = (3));

} else {
var statearr_22728_22773 = state_22704__$1;
(statearr_22728_22773[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22705 === (23))){
var inst_22672 = (state_22704[(15)]);
var inst_22666 = (state_22704[(10)]);
var inst_22672__$1 = cljs.core.async.timeout(devcards.core.test_timeout);
var inst_22673 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22674 = devcards.core.run_card_tests(inst_22666);
var inst_22675 = [inst_22674,inst_22672__$1];
var inst_22676 = (new cljs.core.PersistentVector(null,2,(5),inst_22673,inst_22675,null));
var state_22704__$1 = (function (){var statearr_22729 = state_22704;
(statearr_22729[(15)] = inst_22672__$1);

return statearr_22729;
})();
return cljs.core.async.ioc_alts_BANG_(state_22704__$1,(26),inst_22676);
} else {
if((state_val_22705 === (19))){
var inst_22657 = (state_22704[(2)]);
var state_22704__$1 = state_22704;
var statearr_22730_22774 = state_22704__$1;
(statearr_22730_22774[(2)] = inst_22657);

(statearr_22730_22774[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22705 === (11))){
var inst_22618 = (state_22704[(14)]);
var inst_22639 = (state_22704[(2)]);
var inst_22640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22639,cljs.core.cst$kw$tests);
var inst_22641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22639,cljs.core.cst$kw$callback);
var inst_22642 = inst_22618;
var state_22704__$1 = (function (){var statearr_22731 = state_22704;
(statearr_22731[(7)] = inst_22642);

(statearr_22731[(16)] = inst_22640);

(statearr_22731[(17)] = inst_22641);

return statearr_22731;
})();
var statearr_22732_22775 = state_22704__$1;
(statearr_22732_22775[(2)] = null);

(statearr_22732_22775[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22705 === (9))){
var inst_22618 = (state_22704[(14)]);
var inst_22636 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22618);
var state_22704__$1 = state_22704;
var statearr_22733_22776 = state_22704__$1;
(statearr_22733_22776[(2)] = inst_22636);

(statearr_22733_22776[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22705 === (5))){
var inst_22634 = (state_22704[(2)]);
var state_22704__$1 = state_22704;
if(cljs.core.truth_(inst_22634)){
var statearr_22734_22777 = state_22704__$1;
(statearr_22734_22777[(1)] = (9));

} else {
var statearr_22735_22778 = state_22704__$1;
(statearr_22735_22778[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22705 === (14))){
var inst_22642 = (state_22704[(7)]);
var inst_22649 = inst_22642.cljs$lang$protocol_mask$partition0$;
var inst_22650 = (inst_22649 & (64));
var inst_22651 = inst_22642.cljs$core$ISeq$;
var inst_22652 = (cljs.core.PROTOCOL_SENTINEL === inst_22651);
var inst_22653 = (inst_22650) || (inst_22652);
var state_22704__$1 = state_22704;
if(cljs.core.truth_(inst_22653)){
var statearr_22736_22779 = state_22704__$1;
(statearr_22736_22779[(1)] = (17));

} else {
var statearr_22737_22780 = state_22704__$1;
(statearr_22737_22780[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22705 === (26))){
var inst_22672 = (state_22704[(15)]);
var inst_22678 = (state_22704[(2)]);
var inst_22679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22678,(0),null);
var inst_22680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22678,(1),null);
var inst_22681 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_22680,inst_22672);
var state_22704__$1 = (function (){var statearr_22738 = state_22704;
(statearr_22738[(9)] = inst_22679);

return statearr_22738;
})();
if(inst_22681){
var statearr_22739_22781 = state_22704__$1;
(statearr_22739_22781[(1)] = (27));

} else {
var statearr_22740_22782 = state_22704__$1;
(statearr_22740_22782[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22705 === (16))){
var inst_22660 = (state_22704[(2)]);
var state_22704__$1 = state_22704;
if(cljs.core.truth_(inst_22660)){
var statearr_22741_22783 = state_22704__$1;
(statearr_22741_22783[(1)] = (20));

} else {
var statearr_22742_22784 = state_22704__$1;
(statearr_22742_22784[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22705 === (30))){
var inst_22696 = (state_22704[(2)]);
var inst_22642 = inst_22696;
var state_22704__$1 = (function (){var statearr_22743 = state_22704;
(statearr_22743[(7)] = inst_22642);

return statearr_22743;
})();
var statearr_22744_22785 = state_22704__$1;
(statearr_22744_22785[(2)] = null);

(statearr_22744_22785[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22705 === (10))){
var inst_22618 = (state_22704[(14)]);
var state_22704__$1 = state_22704;
var statearr_22745_22786 = state_22704__$1;
(statearr_22745_22786[(2)] = inst_22618);

(statearr_22745_22786[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22705 === (18))){
var state_22704__$1 = state_22704;
var statearr_22746_22787 = state_22704__$1;
(statearr_22746_22787[(2)] = false);

(statearr_22746_22787[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22705 === (8))){
var inst_22631 = (state_22704[(2)]);
var state_22704__$1 = state_22704;
var statearr_22747_22788 = state_22704__$1;
(statearr_22747_22788[(2)] = inst_22631);

(statearr_22747_22788[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17028__auto__))
;
return ((function (switch__16902__auto__,c__17028__auto__){
return (function() {
var devcards$core$state_machine__16903__auto__ = null;
var devcards$core$state_machine__16903__auto____0 = (function (){
var statearr_22751 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22751[(0)] = devcards$core$state_machine__16903__auto__);

(statearr_22751[(1)] = (1));

return statearr_22751;
});
var devcards$core$state_machine__16903__auto____1 = (function (state_22704){
while(true){
var ret_value__16904__auto__ = (function (){try{while(true){
var result__16905__auto__ = switch__16902__auto__(state_22704);
if(cljs.core.keyword_identical_QMARK_(result__16905__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16905__auto__;
}
break;
}
}catch (e22752){if((e22752 instanceof Object)){
var ex__16906__auto__ = e22752;
var statearr_22753_22789 = state_22704;
(statearr_22753_22789[(5)] = ex__16906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22704);

return cljs.core.cst$kw$recur;
} else {
throw e22752;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16904__auto__,cljs.core.cst$kw$recur)){
var G__22790 = state_22704;
state_22704 = G__22790;
continue;
} else {
return ret_value__16904__auto__;
}
break;
}
});
devcards$core$state_machine__16903__auto__ = function(state_22704){
switch(arguments.length){
case 0:
return devcards$core$state_machine__16903__auto____0.call(this);
case 1:
return devcards$core$state_machine__16903__auto____1.call(this,state_22704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__16903__auto____0;
devcards$core$state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__16903__auto____1;
return devcards$core$state_machine__16903__auto__;
})()
;})(switch__16902__auto__,c__17028__auto__))
})();
var state__17030__auto__ = (function (){var statearr_22754 = (f__17029__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17029__auto__.cljs$core$IFn$_invoke$arity$0() : f__17029__auto__.call(null));
(statearr_22754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17028__auto__);

return statearr_22754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
});})(c__17028__auto__))
);

return c__17028__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tests,tests,cljs.core.cst$kw$callback,(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
var base__20977__auto___22795 = ({"componentWillMount": (function (){
var this$ = this;
var temp__6753__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$test_thunks);
if(cljs.core.truth_(temp__6753__auto__)){
var test_thunks = temp__6753__auto__;
return devcards.core.test_card_test_run(this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__6753__auto__ = (next_props[cljs.core.name(cljs.core.cst$kw$test_thunks)]);
if(cljs.core.truth_(temp__6753__auto__)){
var test_thunks = temp__6753__auto__;
return devcards.core.test_card_test_run(this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state(this$,cljs.core.cst$kw$test_results);
var path = devcards.core.get_props(this$,cljs.core.cst$kw$path);
return devcards.core.render_tests(this$,path,test_summary);
})});
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__20977__auto___22795);
}

var seq__22791_22796 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__22792_22797 = null;
var count__22793_22798 = (0);
var i__22794_22799 = (0);
while(true){
if((i__22794_22799 < count__22793_22798)){
var property__20978__auto___22800 = chunk__22792_22797.cljs$core$IIndexed$_nth$arity$2(null,i__22794_22799);
if(cljs.core.truth_((base__20977__auto___22795[property__20978__auto___22800]))){
(devcards.core.TestDevcard.prototype[property__20978__auto___22800] = (base__20977__auto___22795[property__20978__auto___22800]));
} else {
}

var G__22801 = seq__22791_22796;
var G__22802 = chunk__22792_22797;
var G__22803 = count__22793_22798;
var G__22804 = (i__22794_22799 + (1));
seq__22791_22796 = G__22801;
chunk__22792_22797 = G__22802;
count__22793_22798 = G__22803;
i__22794_22799 = G__22804;
continue;
} else {
var temp__6753__auto___22805 = cljs.core.seq(seq__22791_22796);
if(temp__6753__auto___22805){
var seq__22791_22806__$1 = temp__6753__auto___22805;
if(cljs.core.chunked_seq_QMARK_(seq__22791_22806__$1)){
var c__7991__auto___22807 = cljs.core.chunk_first(seq__22791_22806__$1);
var G__22808 = cljs.core.chunk_rest(seq__22791_22806__$1);
var G__22809 = c__7991__auto___22807;
var G__22810 = cljs.core.count(c__7991__auto___22807);
var G__22811 = (0);
seq__22791_22796 = G__22808;
chunk__22792_22797 = G__22809;
count__22793_22798 = G__22810;
i__22794_22799 = G__22811;
continue;
} else {
var property__20978__auto___22812 = cljs.core.first(seq__22791_22806__$1);
if(cljs.core.truth_((base__20977__auto___22795[property__20978__auto___22812]))){
(devcards.core.TestDevcard.prototype[property__20978__auto___22812] = (base__20977__auto___22795[property__20978__auto___22812]));
} else {
}

var G__22813 = cljs.core.next(seq__22791_22806__$1);
var G__22814 = null;
var G__22815 = (0);
var G__22816 = (0);
seq__22791_22796 = G__22813;
chunk__22792_22797 = G__22814;
count__22793_22798 = G__22815;
i__22794_22799 = G__22816;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__8308__auto__ = [];
var len__8301__auto___22823 = arguments.length;
var i__8302__auto___22824 = (0);
while(true){
if((i__8302__auto___22824 < len__8301__auto___22823)){
args__8308__auto__.push((arguments[i__8302__auto___22824]));

var G__22825 = (i__8302__auto___22824 + (1));
i__8302__auto___22824 = G__22825;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((0) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__8309__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core22818 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core22818 = (function (test_thunks,meta22819){
this.test_thunks = test_thunks;
this.meta22819 = meta22819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core22818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22820,meta22819__$1){
var self__ = this;
var _22820__$1 = this;
return (new devcards.core.t_devcards$core22818(self__.test_thunks,meta22819__$1));
});

devcards.core.t_devcards$core22818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22820){
var self__ = this;
var _22820__$1 = this;
return self__.meta22819;
});

devcards.core.t_devcards$core22818.prototype.devcards$core$IDevcard$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.t_devcards$core22818.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
var G__22821 = devcards.core.TestDevcard;
var G__22822 = ({"test_thunks": self__.test_thunks, "path": path});
return React.createElement(G__22821,G__22822);
});

devcards.core.t_devcards$core22818.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$test_DASH_thunks,cljs.core.cst$sym$meta22819], null);
});

devcards.core.t_devcards$core22818.cljs$lang$type = true;

devcards.core.t_devcards$core22818.cljs$lang$ctorStr = "devcards.core/t_devcards$core22818";

devcards.core.t_devcards$core22818.cljs$lang$ctorPrWriter = (function (this__7737__auto__,writer__7738__auto__,opt__7739__auto__){
return cljs.core._write(writer__7738__auto__,"devcards.core/t_devcards$core22818");
});

devcards.core.__GT_t_devcards$core22818 = (function devcards$core$__GT_t_devcards$core22818(test_thunks__$1,meta22819){
return (new devcards.core.t_devcards$core22818(test_thunks__$1,meta22819));
});

}

return (new devcards.core.t_devcards$core22818(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq22817){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22817));
});

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.aget,goog.global,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__6753__auto__ = cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state)));
if(cljs.core.truth_(temp__6753__auto__)){
var cards = temp__6753__auto__;
var temp__6753__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(ns_symbol)], null));
if(cljs.core.truth_(temp__6753__auto____$1)){
var card = temp__6753__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_(devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__6753__auto__ = cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter(cljs.core.name(ns_symbol)));
if(cljs.core.truth_(temp__6753__auto__)){
var base_card_options = temp__6753__auto__;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Adding base card options!",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([base_card_options], 0))], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$base_DASH_card_DASH_options], null),((function (base_card_options,temp__6753__auto__){
return (function (opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,base_card_options], 0));
});})(base_card_options,temp__6753__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__6753__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__6753__auto__)){
var card = temp__6753__auto__;
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str((function (){var G__22828 = (function (){var attrs22829 = devcards.system.render_cards(devcards.system.display_cards(card),devcards.system.app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs22829))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs22829], 0))):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_(attrs22829))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22829)], null)));
})();
return React.renderToString(G__22828);
})()),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__6753__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__6753__auto__)){
var card = temp__6753__auto__;
var G__22833 = (function (){var attrs22835 = devcards.system.render_cards(devcards.system.display_cards(card),app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs22835))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs22835], 0))):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_(attrs22835))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22835)], null)));
})();
var G__22834 = devcards.system.devcards_app_node();
return React.render(G__22833,G__22834);
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

var c__17028__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17028__auto__){
return (function (){
var f__17029__auto__ = (function (){var switch__16902__auto__ = ((function (c__17028__auto__){
return (function (state_22865){
var state_val_22866 = (state_22865[(1)]);
if((state_val_22866 === (1))){
var inst_22856 = devcards.core.load_data_from_channel_BANG_();
var state_22865__$1 = state_22865;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22865__$1,(2),inst_22856);
} else {
if((state_val_22866 === (2))){
var inst_22858 = (state_22865[(2)]);
var inst_22859 = cljs.core.async.timeout((100));
var state_22865__$1 = (function (){var statearr_22867 = state_22865;
(statearr_22867[(7)] = inst_22858);

return statearr_22867;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22865__$1,(3),inst_22859);
} else {
if((state_val_22866 === (3))){
var inst_22861 = (state_22865[(2)]);
var inst_22862 = (function (){return ((function (inst_22861,state_val_22866,c__17028__auto__){
return (function (){
return devcards.core.render_ns(ns_symbol,devcards.system.app_state);
});
;})(inst_22861,state_val_22866,c__17028__auto__))
})();
var inst_22863 = setTimeout(inst_22862,(0));
var state_22865__$1 = (function (){var statearr_22868 = state_22865;
(statearr_22868[(8)] = inst_22861);

return statearr_22868;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22865__$1,inst_22863);
} else {
return null;
}
}
}
});})(c__17028__auto__))
;
return ((function (switch__16902__auto__,c__17028__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__16903__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__16903__auto____0 = (function (){
var statearr_22872 = [null,null,null,null,null,null,null,null,null];
(statearr_22872[(0)] = devcards$core$mount_namespace_$_state_machine__16903__auto__);

(statearr_22872[(1)] = (1));

return statearr_22872;
});
var devcards$core$mount_namespace_$_state_machine__16903__auto____1 = (function (state_22865){
while(true){
var ret_value__16904__auto__ = (function (){try{while(true){
var result__16905__auto__ = switch__16902__auto__(state_22865);
if(cljs.core.keyword_identical_QMARK_(result__16905__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16905__auto__;
}
break;
}
}catch (e22873){if((e22873 instanceof Object)){
var ex__16906__auto__ = e22873;
var statearr_22874_22876 = state_22865;
(statearr_22874_22876[(5)] = ex__16906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22865);

return cljs.core.cst$kw$recur;
} else {
throw e22873;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16904__auto__,cljs.core.cst$kw$recur)){
var G__22877 = state_22865;
state_22865 = G__22877;
continue;
} else {
return ret_value__16904__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__16903__auto__ = function(state_22865){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__16903__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__16903__auto____1.call(this,state_22865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__16903__auto____0;
devcards$core$mount_namespace_$_state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__16903__auto____1;
return devcards$core$mount_namespace_$_state_machine__16903__auto__;
})()
;})(switch__16902__auto__,c__17028__auto__))
})();
var state__17030__auto__ = (function (){var statearr_22875 = (f__17029__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17029__auto__.cljs$core$IFn$_invoke$arity$0() : f__17029__auto__.call(null));
(statearr_22875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17028__auto__);

return statearr_22875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
});})(c__17028__auto__))
);

return c__17028__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return devcards.system.start_ui_with_renderer(devcards.core.devcard_event_chan,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);
