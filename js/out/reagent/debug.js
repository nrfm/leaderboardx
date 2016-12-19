// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__22985__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22986__i = 0, G__22986__a = new Array(arguments.length -  0);
while (G__22986__i < G__22986__a.length) {G__22986__a[G__22986__i] = arguments[G__22986__i + 0]; ++G__22986__i;}
  args = new cljs.core.IndexedSeq(G__22986__a,0);
} 
return G__22985__delegate.call(this,args);};
G__22985.cljs$lang$maxFixedArity = 0;
G__22985.cljs$lang$applyTo = (function (arglist__22987){
var args = cljs.core.seq(arglist__22987);
return G__22985__delegate(args);
});
G__22985.cljs$core$IFn$_invoke$arity$variadic = G__22985__delegate;
return G__22985;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__22988__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22989__i = 0, G__22989__a = new Array(arguments.length -  0);
while (G__22989__i < G__22989__a.length) {G__22989__a[G__22989__i] = arguments[G__22989__i + 0]; ++G__22989__i;}
  args = new cljs.core.IndexedSeq(G__22989__a,0);
} 
return G__22988__delegate.call(this,args);};
G__22988.cljs$lang$maxFixedArity = 0;
G__22988.cljs$lang$applyTo = (function (arglist__22990){
var args = cljs.core.seq(arglist__22990);
return G__22988__delegate(args);
});
G__22988.cljs$core$IFn$_invoke$arity$variadic = G__22988__delegate;
return G__22988;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.debug.warnings) : cljs.core.deref.call(null,reagent.debug.warnings));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

reagent.debug.tracking = false;

return warns;
});
