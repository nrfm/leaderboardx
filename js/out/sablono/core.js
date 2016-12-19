// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__20544__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__20541 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__20542 = cljs.core.seq(vec__20541);
var first__20543 = cljs.core.first(seq__20542);
var seq__20542__$1 = cljs.core.next(seq__20542);
var tag = first__20543;
var body = seq__20542__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__20544 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20545__i = 0, G__20545__a = new Array(arguments.length -  0);
while (G__20545__i < G__20545__a.length) {G__20545__a[G__20545__i] = arguments[G__20545__i + 0]; ++G__20545__i;}
  args = new cljs.core.IndexedSeq(G__20545__a,0);
} 
return G__20544__delegate.call(this,args);};
G__20544.cljs$lang$maxFixedArity = 0;
G__20544.cljs$lang$applyTo = (function (arglist__20546){
var args = cljs.core.seq(arglist__20546);
return G__20544__delegate(args);
});
G__20544.cljs$core$IFn$_invoke$arity$variadic = G__20544__delegate;
return G__20544;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7942__auto__ = (function sablono$core$update_arglists_$_iter__20553(s__20554){
return (new cljs.core.LazySeq(null,(function (){
var s__20554__$1 = s__20554;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__20554__$1);
if(temp__6753__auto__){
var s__20554__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20554__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__20554__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__20556 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__20555 = (0);
while(true){
if((i__20555 < size__7941__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__20555);
cljs.core.chunk_append(b__20556,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__20559 = (i__20555 + (1));
i__20555 = G__20559;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20556),sablono$core$update_arglists_$_iter__20553(cljs.core.chunk_rest(s__20554__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20556),null);
}
} else {
var args = cljs.core.first(s__20554__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__20553(cljs.core.rest(s__20554__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7942__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__8308__auto__ = [];
var len__8301__auto___20567 = arguments.length;
var i__8302__auto___20568 = (0);
while(true){
if((i__8302__auto___20568 < len__8301__auto___20567)){
args__8308__auto__.push((arguments[i__8302__auto___20568]));

var G__20569 = (i__8302__auto___20568 + (1));
i__8302__auto___20568 = G__20569;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((0) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__8309__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7942__auto__ = (function sablono$core$iter__20561(s__20562){
return (new cljs.core.LazySeq(null,(function (){
var s__20562__$1 = s__20562;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__20562__$1);
if(temp__6753__auto__){
var s__20562__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20562__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__20562__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__20564 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__20563 = (0);
while(true){
if((i__20563 < size__7941__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__20563);
cljs.core.chunk_append(b__20564,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__20570 = (i__20563 + (1));
i__20563 = G__20570;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20564),sablono$core$iter__20561(cljs.core.chunk_rest(s__20562__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20564),null);
}
} else {
var style = cljs.core.first(s__20562__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__20561(cljs.core.rest(s__20562__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7942__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq20560){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20560));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__20575 = goog.dom.getDocument().body;
var G__20576 = (function (){var G__20577 = "script";
var G__20578 = ({"src": src});
return goog.dom.createDom(G__20577,G__20578);
})();
return goog.dom.appendChild(G__20575,G__20576);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to20579 = (function sablono$core$link_to20579(var_args){
var args__8308__auto__ = [];
var len__8301__auto___20582 = arguments.length;
var i__8302__auto___20583 = (0);
while(true){
if((i__8302__auto___20583 < len__8301__auto___20582)){
args__8308__auto__.push((arguments[i__8302__auto___20583]));

var G__20584 = (i__8302__auto___20583 + (1));
i__8302__auto___20583 = G__20584;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((1) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to20579.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8309__auto__);
});

sablono.core.link_to20579.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to20579.cljs$lang$maxFixedArity = (1);

sablono.core.link_to20579.cljs$lang$applyTo = (function (seq20580){
var G__20581 = cljs.core.first(seq20580);
var seq20580__$1 = cljs.core.next(seq20580);
return sablono.core.link_to20579.cljs$core$IFn$_invoke$arity$variadic(G__20581,seq20580__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to20579);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to20585 = (function sablono$core$mail_to20585(var_args){
var args__8308__auto__ = [];
var len__8301__auto___20592 = arguments.length;
var i__8302__auto___20593 = (0);
while(true){
if((i__8302__auto___20593 < len__8301__auto___20592)){
args__8308__auto__.push((arguments[i__8302__auto___20593]));

var G__20594 = (i__8302__auto___20593 + (1));
i__8302__auto___20593 = G__20594;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((1) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to20585.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8309__auto__);
});

sablono.core.mail_to20585.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__20588){
var vec__20589 = p__20588;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20589,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__7085__auto__ = content;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to20585.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to20585.cljs$lang$applyTo = (function (seq20586){
var G__20587 = cljs.core.first(seq20586);
var seq20586__$1 = cljs.core.next(seq20586);
return sablono.core.mail_to20585.cljs$core$IFn$_invoke$arity$variadic(G__20587,seq20586__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to20585);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list20595 = (function sablono$core$unordered_list20595(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__7942__auto__ = (function sablono$core$unordered_list20595_$_iter__20602(s__20603){
return (new cljs.core.LazySeq(null,(function (){
var s__20603__$1 = s__20603;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__20603__$1);
if(temp__6753__auto__){
var s__20603__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20603__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__20603__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__20605 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__20604 = (0);
while(true){
if((i__20604 < size__7941__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__20604);
cljs.core.chunk_append(b__20605,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__20608 = (i__20604 + (1));
i__20604 = G__20608;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20605),sablono$core$unordered_list20595_$_iter__20602(cljs.core.chunk_rest(s__20603__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20605),null);
}
} else {
var x = cljs.core.first(s__20603__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list20595_$_iter__20602(cljs.core.rest(s__20603__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7942__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list20595);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list20609 = (function sablono$core$ordered_list20609(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__7942__auto__ = (function sablono$core$ordered_list20609_$_iter__20616(s__20617){
return (new cljs.core.LazySeq(null,(function (){
var s__20617__$1 = s__20617;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__20617__$1);
if(temp__6753__auto__){
var s__20617__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20617__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__20617__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__20619 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__20618 = (0);
while(true){
if((i__20618 < size__7941__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__20618);
cljs.core.chunk_append(b__20619,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__20622 = (i__20618 + (1));
i__20618 = G__20622;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20619),sablono$core$ordered_list20609_$_iter__20616(cljs.core.chunk_rest(s__20617__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20619),null);
}
} else {
var x = cljs.core.first(s__20617__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list20609_$_iter__20616(cljs.core.rest(s__20617__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7942__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list20609);
/**
 * Create an image element.
 */
sablono.core.image20623 = (function sablono$core$image20623(var_args){
var args20624 = [];
var len__8301__auto___20627 = arguments.length;
var i__8302__auto___20628 = (0);
while(true){
if((i__8302__auto___20628 < len__8301__auto___20627)){
args20624.push((arguments[i__8302__auto___20628]));

var G__20629 = (i__8302__auto___20628 + (1));
i__8302__auto___20628 = G__20629;
continue;
} else {
}
break;
}

var G__20626 = args20624.length;
switch (G__20626) {
case 1:
return sablono.core.image20623.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image20623.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20624.length)].join('')));

}
});

sablono.core.image20623.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image20623.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image20623.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image20623);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__20631_SHARP_,p2__20632_SHARP_){
return [cljs.core.str(p1__20631_SHARP_),cljs.core.str("["),cljs.core.str(p2__20632_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__20633_SHARP_,p2__20634_SHARP_){
return [cljs.core.str(p1__20633_SHARP_),cljs.core.str("-"),cljs.core.str(p2__20634_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__7085__auto__ = value;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field20635 = (function sablono$core$color_field20635(var_args){
var args20636 = [];
var len__8301__auto___20703 = arguments.length;
var i__8302__auto___20704 = (0);
while(true){
if((i__8302__auto___20704 < len__8301__auto___20703)){
args20636.push((arguments[i__8302__auto___20704]));

var G__20705 = (i__8302__auto___20704 + (1));
i__8302__auto___20704 = G__20705;
continue;
} else {
}
break;
}

var G__20638 = args20636.length;
switch (G__20638) {
case 1:
return sablono.core.color_field20635.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field20635.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20636.length)].join('')));

}
});

sablono.core.color_field20635.cljs$core$IFn$_invoke$arity$1 = (function (name__20528__auto__){
return sablono.core.color_field20635.cljs$core$IFn$_invoke$arity$2(name__20528__auto__,null);
});

sablono.core.color_field20635.cljs$core$IFn$_invoke$arity$2 = (function (name__20528__auto__,value__20529__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__20528__auto__,value__20529__auto__);
});

sablono.core.color_field20635.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field20635);

/**
 * Creates a date input field.
 */
sablono.core.date_field20639 = (function sablono$core$date_field20639(var_args){
var args20640 = [];
var len__8301__auto___20707 = arguments.length;
var i__8302__auto___20708 = (0);
while(true){
if((i__8302__auto___20708 < len__8301__auto___20707)){
args20640.push((arguments[i__8302__auto___20708]));

var G__20709 = (i__8302__auto___20708 + (1));
i__8302__auto___20708 = G__20709;
continue;
} else {
}
break;
}

var G__20642 = args20640.length;
switch (G__20642) {
case 1:
return sablono.core.date_field20639.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field20639.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20640.length)].join('')));

}
});

sablono.core.date_field20639.cljs$core$IFn$_invoke$arity$1 = (function (name__20528__auto__){
return sablono.core.date_field20639.cljs$core$IFn$_invoke$arity$2(name__20528__auto__,null);
});

sablono.core.date_field20639.cljs$core$IFn$_invoke$arity$2 = (function (name__20528__auto__,value__20529__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__20528__auto__,value__20529__auto__);
});

sablono.core.date_field20639.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field20639);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field20643 = (function sablono$core$datetime_field20643(var_args){
var args20644 = [];
var len__8301__auto___20711 = arguments.length;
var i__8302__auto___20712 = (0);
while(true){
if((i__8302__auto___20712 < len__8301__auto___20711)){
args20644.push((arguments[i__8302__auto___20712]));

var G__20713 = (i__8302__auto___20712 + (1));
i__8302__auto___20712 = G__20713;
continue;
} else {
}
break;
}

var G__20646 = args20644.length;
switch (G__20646) {
case 1:
return sablono.core.datetime_field20643.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field20643.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20644.length)].join('')));

}
});

sablono.core.datetime_field20643.cljs$core$IFn$_invoke$arity$1 = (function (name__20528__auto__){
return sablono.core.datetime_field20643.cljs$core$IFn$_invoke$arity$2(name__20528__auto__,null);
});

sablono.core.datetime_field20643.cljs$core$IFn$_invoke$arity$2 = (function (name__20528__auto__,value__20529__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__20528__auto__,value__20529__auto__);
});

sablono.core.datetime_field20643.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field20643);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field20647 = (function sablono$core$datetime_local_field20647(var_args){
var args20648 = [];
var len__8301__auto___20715 = arguments.length;
var i__8302__auto___20716 = (0);
while(true){
if((i__8302__auto___20716 < len__8301__auto___20715)){
args20648.push((arguments[i__8302__auto___20716]));

var G__20717 = (i__8302__auto___20716 + (1));
i__8302__auto___20716 = G__20717;
continue;
} else {
}
break;
}

var G__20650 = args20648.length;
switch (G__20650) {
case 1:
return sablono.core.datetime_local_field20647.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field20647.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20648.length)].join('')));

}
});

sablono.core.datetime_local_field20647.cljs$core$IFn$_invoke$arity$1 = (function (name__20528__auto__){
return sablono.core.datetime_local_field20647.cljs$core$IFn$_invoke$arity$2(name__20528__auto__,null);
});

sablono.core.datetime_local_field20647.cljs$core$IFn$_invoke$arity$2 = (function (name__20528__auto__,value__20529__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__20528__auto__,value__20529__auto__);
});

sablono.core.datetime_local_field20647.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field20647);

/**
 * Creates a email input field.
 */
sablono.core.email_field20651 = (function sablono$core$email_field20651(var_args){
var args20652 = [];
var len__8301__auto___20719 = arguments.length;
var i__8302__auto___20720 = (0);
while(true){
if((i__8302__auto___20720 < len__8301__auto___20719)){
args20652.push((arguments[i__8302__auto___20720]));

var G__20721 = (i__8302__auto___20720 + (1));
i__8302__auto___20720 = G__20721;
continue;
} else {
}
break;
}

var G__20654 = args20652.length;
switch (G__20654) {
case 1:
return sablono.core.email_field20651.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field20651.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20652.length)].join('')));

}
});

sablono.core.email_field20651.cljs$core$IFn$_invoke$arity$1 = (function (name__20528__auto__){
return sablono.core.email_field20651.cljs$core$IFn$_invoke$arity$2(name__20528__auto__,null);
});

sablono.core.email_field20651.cljs$core$IFn$_invoke$arity$2 = (function (name__20528__auto__,value__20529__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__20528__auto__,value__20529__auto__);
});

sablono.core.email_field20651.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field20651);

/**
 * Creates a file input field.
 */
sablono.core.file_field20655 = (function sablono$core$file_field20655(var_args){
var args20656 = [];
var len__8301__auto___20723 = arguments.length;
var i__8302__auto___20724 = (0);
while(true){
if((i__8302__auto___20724 < len__8301__auto___20723)){
args20656.push((arguments[i__8302__auto___20724]));

var G__20725 = (i__8302__auto___20724 + (1));
i__8302__auto___20724 = G__20725;
continue;
} else {
}
break;
}

var G__20658 = args20656.length;
switch (G__20658) {
case 1:
return sablono.core.file_field20655.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field20655.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20656.length)].join('')));

}
});

sablono.core.file_field20655.cljs$core$IFn$_invoke$arity$1 = (function (name__20528__auto__){
return sablono.core.file_field20655.cljs$core$IFn$_invoke$arity$2(name__20528__auto__,null);
});

sablono.core.file_field20655.cljs$core$IFn$_invoke$arity$2 = (function (name__20528__auto__,value__20529__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__20528__auto__,value__20529__auto__);
});

sablono.core.file_field20655.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field20655);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field20659 = (function sablono$core$hidden_field20659(var_args){
var args20660 = [];
var len__8301__auto___20727 = arguments.length;
var i__8302__auto___20728 = (0);
while(true){
if((i__8302__auto___20728 < len__8301__auto___20727)){
args20660.push((arguments[i__8302__auto___20728]));

var G__20729 = (i__8302__auto___20728 + (1));
i__8302__auto___20728 = G__20729;
continue;
} else {
}
break;
}

var G__20662 = args20660.length;
switch (G__20662) {
case 1:
return sablono.core.hidden_field20659.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field20659.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20660.length)].join('')));

}
});

sablono.core.hidden_field20659.cljs$core$IFn$_invoke$arity$1 = (function (name__20528__auto__){
return sablono.core.hidden_field20659.cljs$core$IFn$_invoke$arity$2(name__20528__auto__,null);
});

sablono.core.hidden_field20659.cljs$core$IFn$_invoke$arity$2 = (function (name__20528__auto__,value__20529__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__20528__auto__,value__20529__auto__);
});

sablono.core.hidden_field20659.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field20659);

/**
 * Creates a month input field.
 */
sablono.core.month_field20663 = (function sablono$core$month_field20663(var_args){
var args20664 = [];
var len__8301__auto___20731 = arguments.length;
var i__8302__auto___20732 = (0);
while(true){
if((i__8302__auto___20732 < len__8301__auto___20731)){
args20664.push((arguments[i__8302__auto___20732]));

var G__20733 = (i__8302__auto___20732 + (1));
i__8302__auto___20732 = G__20733;
continue;
} else {
}
break;
}

var G__20666 = args20664.length;
switch (G__20666) {
case 1:
return sablono.core.month_field20663.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field20663.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20664.length)].join('')));

}
});

sablono.core.month_field20663.cljs$core$IFn$_invoke$arity$1 = (function (name__20528__auto__){
return sablono.core.month_field20663.cljs$core$IFn$_invoke$arity$2(name__20528__auto__,null);
});

sablono.core.month_field20663.cljs$core$IFn$_invoke$arity$2 = (function (name__20528__auto__,value__20529__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__20528__auto__,value__20529__auto__);
});

sablono.core.month_field20663.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field20663);

/**
 * Creates a number input field.
 */
sablono.core.number_field20667 = (function sablono$core$number_field20667(var_args){
var args20668 = [];
var len__8301__auto___20735 = arguments.length;
var i__8302__auto___20736 = (0);
while(true){
if((i__8302__auto___20736 < len__8301__auto___20735)){
args20668.push((arguments[i__8302__auto___20736]));

var G__20737 = (i__8302__auto___20736 + (1));
i__8302__auto___20736 = G__20737;
continue;
} else {
}
break;
}

var G__20670 = args20668.length;
switch (G__20670) {
case 1:
return sablono.core.number_field20667.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field20667.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20668.length)].join('')));

}
});

sablono.core.number_field20667.cljs$core$IFn$_invoke$arity$1 = (function (name__20528__auto__){
return sablono.core.number_field20667.cljs$core$IFn$_invoke$arity$2(name__20528__auto__,null);
});

sablono.core.number_field20667.cljs$core$IFn$_invoke$arity$2 = (function (name__20528__auto__,value__20529__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__20528__auto__,value__20529__auto__);
});

sablono.core.number_field20667.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field20667);

/**
 * Creates a password input field.
 */
sablono.core.password_field20671 = (function sablono$core$password_field20671(var_args){
var args20672 = [];
var len__8301__auto___20739 = arguments.length;
var i__8302__auto___20740 = (0);
while(true){
if((i__8302__auto___20740 < len__8301__auto___20739)){
args20672.push((arguments[i__8302__auto___20740]));

var G__20741 = (i__8302__auto___20740 + (1));
i__8302__auto___20740 = G__20741;
continue;
} else {
}
break;
}

var G__20674 = args20672.length;
switch (G__20674) {
case 1:
return sablono.core.password_field20671.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field20671.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20672.length)].join('')));

}
});

sablono.core.password_field20671.cljs$core$IFn$_invoke$arity$1 = (function (name__20528__auto__){
return sablono.core.password_field20671.cljs$core$IFn$_invoke$arity$2(name__20528__auto__,null);
});

sablono.core.password_field20671.cljs$core$IFn$_invoke$arity$2 = (function (name__20528__auto__,value__20529__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__20528__auto__,value__20529__auto__);
});

sablono.core.password_field20671.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field20671);

/**
 * Creates a range input field.
 */
sablono.core.range_field20675 = (function sablono$core$range_field20675(var_args){
var args20676 = [];
var len__8301__auto___20743 = arguments.length;
var i__8302__auto___20744 = (0);
while(true){
if((i__8302__auto___20744 < len__8301__auto___20743)){
args20676.push((arguments[i__8302__auto___20744]));

var G__20745 = (i__8302__auto___20744 + (1));
i__8302__auto___20744 = G__20745;
continue;
} else {
}
break;
}

var G__20678 = args20676.length;
switch (G__20678) {
case 1:
return sablono.core.range_field20675.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field20675.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20676.length)].join('')));

}
});

sablono.core.range_field20675.cljs$core$IFn$_invoke$arity$1 = (function (name__20528__auto__){
return sablono.core.range_field20675.cljs$core$IFn$_invoke$arity$2(name__20528__auto__,null);
});

sablono.core.range_field20675.cljs$core$IFn$_invoke$arity$2 = (function (name__20528__auto__,value__20529__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__20528__auto__,value__20529__auto__);
});

sablono.core.range_field20675.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field20675);

/**
 * Creates a search input field.
 */
sablono.core.search_field20679 = (function sablono$core$search_field20679(var_args){
var args20680 = [];
var len__8301__auto___20747 = arguments.length;
var i__8302__auto___20748 = (0);
while(true){
if((i__8302__auto___20748 < len__8301__auto___20747)){
args20680.push((arguments[i__8302__auto___20748]));

var G__20749 = (i__8302__auto___20748 + (1));
i__8302__auto___20748 = G__20749;
continue;
} else {
}
break;
}

var G__20682 = args20680.length;
switch (G__20682) {
case 1:
return sablono.core.search_field20679.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field20679.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20680.length)].join('')));

}
});

sablono.core.search_field20679.cljs$core$IFn$_invoke$arity$1 = (function (name__20528__auto__){
return sablono.core.search_field20679.cljs$core$IFn$_invoke$arity$2(name__20528__auto__,null);
});

sablono.core.search_field20679.cljs$core$IFn$_invoke$arity$2 = (function (name__20528__auto__,value__20529__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__20528__auto__,value__20529__auto__);
});

sablono.core.search_field20679.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field20679);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field20683 = (function sablono$core$tel_field20683(var_args){
var args20684 = [];
var len__8301__auto___20751 = arguments.length;
var i__8302__auto___20752 = (0);
while(true){
if((i__8302__auto___20752 < len__8301__auto___20751)){
args20684.push((arguments[i__8302__auto___20752]));

var G__20753 = (i__8302__auto___20752 + (1));
i__8302__auto___20752 = G__20753;
continue;
} else {
}
break;
}

var G__20686 = args20684.length;
switch (G__20686) {
case 1:
return sablono.core.tel_field20683.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field20683.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20684.length)].join('')));

}
});

sablono.core.tel_field20683.cljs$core$IFn$_invoke$arity$1 = (function (name__20528__auto__){
return sablono.core.tel_field20683.cljs$core$IFn$_invoke$arity$2(name__20528__auto__,null);
});

sablono.core.tel_field20683.cljs$core$IFn$_invoke$arity$2 = (function (name__20528__auto__,value__20529__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__20528__auto__,value__20529__auto__);
});

sablono.core.tel_field20683.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field20683);

/**
 * Creates a text input field.
 */
sablono.core.text_field20687 = (function sablono$core$text_field20687(var_args){
var args20688 = [];
var len__8301__auto___20755 = arguments.length;
var i__8302__auto___20756 = (0);
while(true){
if((i__8302__auto___20756 < len__8301__auto___20755)){
args20688.push((arguments[i__8302__auto___20756]));

var G__20757 = (i__8302__auto___20756 + (1));
i__8302__auto___20756 = G__20757;
continue;
} else {
}
break;
}

var G__20690 = args20688.length;
switch (G__20690) {
case 1:
return sablono.core.text_field20687.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field20687.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20688.length)].join('')));

}
});

sablono.core.text_field20687.cljs$core$IFn$_invoke$arity$1 = (function (name__20528__auto__){
return sablono.core.text_field20687.cljs$core$IFn$_invoke$arity$2(name__20528__auto__,null);
});

sablono.core.text_field20687.cljs$core$IFn$_invoke$arity$2 = (function (name__20528__auto__,value__20529__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__20528__auto__,value__20529__auto__);
});

sablono.core.text_field20687.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field20687);

/**
 * Creates a time input field.
 */
sablono.core.time_field20691 = (function sablono$core$time_field20691(var_args){
var args20692 = [];
var len__8301__auto___20759 = arguments.length;
var i__8302__auto___20760 = (0);
while(true){
if((i__8302__auto___20760 < len__8301__auto___20759)){
args20692.push((arguments[i__8302__auto___20760]));

var G__20761 = (i__8302__auto___20760 + (1));
i__8302__auto___20760 = G__20761;
continue;
} else {
}
break;
}

var G__20694 = args20692.length;
switch (G__20694) {
case 1:
return sablono.core.time_field20691.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field20691.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20692.length)].join('')));

}
});

sablono.core.time_field20691.cljs$core$IFn$_invoke$arity$1 = (function (name__20528__auto__){
return sablono.core.time_field20691.cljs$core$IFn$_invoke$arity$2(name__20528__auto__,null);
});

sablono.core.time_field20691.cljs$core$IFn$_invoke$arity$2 = (function (name__20528__auto__,value__20529__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__20528__auto__,value__20529__auto__);
});

sablono.core.time_field20691.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field20691);

/**
 * Creates a url input field.
 */
sablono.core.url_field20695 = (function sablono$core$url_field20695(var_args){
var args20696 = [];
var len__8301__auto___20763 = arguments.length;
var i__8302__auto___20764 = (0);
while(true){
if((i__8302__auto___20764 < len__8301__auto___20763)){
args20696.push((arguments[i__8302__auto___20764]));

var G__20765 = (i__8302__auto___20764 + (1));
i__8302__auto___20764 = G__20765;
continue;
} else {
}
break;
}

var G__20698 = args20696.length;
switch (G__20698) {
case 1:
return sablono.core.url_field20695.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field20695.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20696.length)].join('')));

}
});

sablono.core.url_field20695.cljs$core$IFn$_invoke$arity$1 = (function (name__20528__auto__){
return sablono.core.url_field20695.cljs$core$IFn$_invoke$arity$2(name__20528__auto__,null);
});

sablono.core.url_field20695.cljs$core$IFn$_invoke$arity$2 = (function (name__20528__auto__,value__20529__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__20528__auto__,value__20529__auto__);
});

sablono.core.url_field20695.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field20695);

/**
 * Creates a week input field.
 */
sablono.core.week_field20699 = (function sablono$core$week_field20699(var_args){
var args20700 = [];
var len__8301__auto___20767 = arguments.length;
var i__8302__auto___20768 = (0);
while(true){
if((i__8302__auto___20768 < len__8301__auto___20767)){
args20700.push((arguments[i__8302__auto___20768]));

var G__20769 = (i__8302__auto___20768 + (1));
i__8302__auto___20768 = G__20769;
continue;
} else {
}
break;
}

var G__20702 = args20700.length;
switch (G__20702) {
case 1:
return sablono.core.week_field20699.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field20699.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20700.length)].join('')));

}
});

sablono.core.week_field20699.cljs$core$IFn$_invoke$arity$1 = (function (name__20528__auto__){
return sablono.core.week_field20699.cljs$core$IFn$_invoke$arity$2(name__20528__auto__,null);
});

sablono.core.week_field20699.cljs$core$IFn$_invoke$arity$2 = (function (name__20528__auto__,value__20529__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__20528__auto__,value__20529__auto__);
});

sablono.core.week_field20699.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field20699);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box20771 = (function sablono$core$check_box20771(var_args){
var args20772 = [];
var len__8301__auto___20775 = arguments.length;
var i__8302__auto___20776 = (0);
while(true){
if((i__8302__auto___20776 < len__8301__auto___20775)){
args20772.push((arguments[i__8302__auto___20776]));

var G__20777 = (i__8302__auto___20776 + (1));
i__8302__auto___20776 = G__20777;
continue;
} else {
}
break;
}

var G__20774 = args20772.length;
switch (G__20774) {
case 1:
return sablono.core.check_box20771.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box20771.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box20771.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20772.length)].join('')));

}
});

sablono.core.check_box20771.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box20771.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box20771.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box20771.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box20771.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__7085__auto__ = value;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box20771.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box20771);
/**
 * Creates a radio button.
 */
sablono.core.radio_button20779 = (function sablono$core$radio_button20779(var_args){
var args20780 = [];
var len__8301__auto___20783 = arguments.length;
var i__8302__auto___20784 = (0);
while(true){
if((i__8302__auto___20784 < len__8301__auto___20783)){
args20780.push((arguments[i__8302__auto___20784]));

var G__20785 = (i__8302__auto___20784 + (1));
i__8302__auto___20784 = G__20785;
continue;
} else {
}
break;
}

var G__20782 = args20780.length;
switch (G__20782) {
case 1:
return sablono.core.radio_button20779.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button20779.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button20779.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20780.length)].join('')));

}
});

sablono.core.radio_button20779.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button20779.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button20779.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button20779.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button20779.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,(function (){var or__7085__auto__ = value;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button20779.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button20779);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__20788 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__20788);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options20789 = (function sablono$core$select_options20789(coll){
var iter__7942__auto__ = (function sablono$core$select_options20789_$_iter__20808(s__20809){
return (new cljs.core.LazySeq(null,(function (){
var s__20809__$1 = s__20809;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__20809__$1);
if(temp__6753__auto__){
var s__20809__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20809__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__20809__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__20811 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__20810 = (0);
while(true){
if((i__20810 < size__7941__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__20810);
cljs.core.chunk_append(b__20811,((cljs.core.sequential_QMARK_(x))?(function (){var vec__20820 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20820,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20820,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20820,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options20789.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options20789.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options20789.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__20826 = (i__20810 + (1));
i__20810 = G__20826;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20811),sablono$core$select_options20789_$_iter__20808(cljs.core.chunk_rest(s__20809__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20811),null);
}
} else {
var x = cljs.core.first(s__20809__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__20823 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20823,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20823,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20823,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options20789.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options20789.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options20789.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options20789_$_iter__20808(cljs.core.rest(s__20809__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7942__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options20789);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down20827 = (function sablono$core$drop_down20827(var_args){
var args20828 = [];
var len__8301__auto___20831 = arguments.length;
var i__8302__auto___20832 = (0);
while(true){
if((i__8302__auto___20832 < len__8301__auto___20831)){
args20828.push((arguments[i__8302__auto___20832]));

var G__20833 = (i__8302__auto___20832 + (1));
i__8302__auto___20832 = G__20833;
continue;
} else {
}
break;
}

var G__20830 = args20828.length;
switch (G__20830) {
case 2:
return sablono.core.drop_down20827.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down20827.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20828.length)].join('')));

}
});

sablono.core.drop_down20827.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down20827.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down20827.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down20827.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down20827);
/**
 * Creates a text area element.
 */
sablono.core.text_area20835 = (function sablono$core$text_area20835(var_args){
var args20836 = [];
var len__8301__auto___20839 = arguments.length;
var i__8302__auto___20840 = (0);
while(true){
if((i__8302__auto___20840 < len__8301__auto___20839)){
args20836.push((arguments[i__8302__auto___20840]));

var G__20841 = (i__8302__auto___20840 + (1));
i__8302__auto___20840 = G__20841;
continue;
} else {
}
break;
}

var G__20838 = args20836.length;
switch (G__20838) {
case 1:
return sablono.core.text_area20835.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area20835.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20836.length)].join('')));

}
});

sablono.core.text_area20835.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area20835.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area20835.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__7085__auto__ = value;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area20835.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area20835);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label20843 = (function sablono$core$label20843(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label20843);
/**
 * Creates a submit button.
 */
sablono.core.submit_button20844 = (function sablono$core$submit_button20844(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button20844);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button20845 = (function sablono$core$reset_button20845(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button20845);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to20846 = (function sablono$core$form_to20846(var_args){
var args__8308__auto__ = [];
var len__8301__auto___20856 = arguments.length;
var i__8302__auto___20857 = (0);
while(true){
if((i__8302__auto___20857 < len__8301__auto___20856)){
args__8308__auto__.push((arguments[i__8302__auto___20857]));

var G__20858 = (i__8302__auto___20857 + (1));
i__8302__auto___20857 = G__20858;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((1) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to20846.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8309__auto__);
});

sablono.core.form_to20846.cljs$core$IFn$_invoke$arity$variadic = (function (p__20849,body){
var vec__20850 = p__20849;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20850,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20850,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__20853 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__20854 = "_method";
var G__20855 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__20853,G__20854,G__20855) : sablono.core.hidden_field.call(null,G__20853,G__20854,G__20855));
})()], null)),body));
});

sablono.core.form_to20846.cljs$lang$maxFixedArity = (1);

sablono.core.form_to20846.cljs$lang$applyTo = (function (seq20847){
var G__20848 = cljs.core.first(seq20847);
var seq20847__$1 = cljs.core.next(seq20847);
return sablono.core.form_to20846.cljs$core$IFn$_invoke$arity$variadic(G__20848,seq20847__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to20846);
