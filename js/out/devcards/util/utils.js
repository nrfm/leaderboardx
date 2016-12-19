// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__6751__auto__ = goog.global.document;
if(cljs.core.truth_(temp__6751__auto__)){
var doc = temp__6751__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__8172__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15262_15264 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15263_15265 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15262_15264,_STAR_print_fn_STAR_15263_15265,sb__8172__auto__){
return (function (x__8173__auto__){
return sb__8172__auto__.append(x__8173__auto__);
});})(_STAR_print_newline_STAR_15262_15264,_STAR_print_fn_STAR_15263_15265,sb__8172__auto__))
;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15263_15265;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15262_15264;
}
return [cljs.core.str(sb__8172__auto__)].join('');
}catch (e15260){if((e15260 instanceof Error)){
var e1 = e15260;
try{return obj.toString();
}catch (e15261){if((e15261 instanceof Error)){
var e2 = e15261;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e15261;

}
}} else {
throw e15260;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_15267 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str(code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_15267;
}});
