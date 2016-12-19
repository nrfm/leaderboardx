// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor(reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__8308__auto__ = [];
var len__8301__auto___36102 = arguments.length;
var i__8302__auto___36103 = (0);
while(true){
if((i__8302__auto___36103 < len__8301__auto___36102)){
args__8308__auto__.push((arguments[i__8302__auto___36103]));

var G__36104 = (i__8302__auto___36103 + (1));
i__8302__auto___36103 = G__36104;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((1) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8309__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__36098){
var vec__36099 = p__36098;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36099,(0),null);
var temp_a = reagent.session.cursor(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(temp_a) : cljs.core.deref.call(null,temp_a)) == null))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(temp_a) : cljs.core.deref.call(null,temp_a));
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq36096){
var G__36097 = cljs.core.first(seq36096);
var seq36096__$1 = cljs.core.next(seq36096);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__36097,seq36096__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__8308__auto__ = [];
var len__8301__auto___36113 = arguments.length;
var i__8302__auto___36114 = (0);
while(true){
if((i__8302__auto___36114 < len__8301__auto___36113)){
args__8308__auto__.push((arguments[i__8302__auto___36114]));

var G__36115 = (i__8302__auto___36114 + (1));
i__8302__auto___36114 = G__36115;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((1) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8309__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__36107){
var vec__36108 = p__36107;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36108,(0),null);
var or__7085__auto__ = (function (){var G__36112 = reagent.session.cursor(ks);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36112) : cljs.core.deref.call(null,G__36112));
})();
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq36105){
var G__36106 = cljs.core.first(seq36105);
var seq36105__$1 = cljs.core.next(seq36105);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__36106,seq36105__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__8308__auto__ = [];
var len__8301__auto___36118 = arguments.length;
var i__8302__auto___36119 = (0);
while(true){
if((i__8302__auto___36119 < len__8301__auto___36118)){
args__8308__auto__.push((arguments[i__8302__auto___36119]));

var G__36120 = (i__8302__auto___36119 + (1));
i__8302__auto___36119 = G__36120;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((1) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8309__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq36116){
var G__36117 = cljs.core.first(seq36116);
var seq36116__$1 = cljs.core.next(seq36116);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36117,seq36116__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
var G__36123 = reagent.session.state;
var G__36124 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36123,G__36124) : cljs.core.reset_BANG_.call(null,G__36123,G__36124));
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,m) : cljs.core.reset_BANG_.call(null,reagent.session.state,m));
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__8308__auto__ = [];
var len__8301__auto___36131 = arguments.length;
var i__8302__auto___36132 = (0);
while(true){
if((i__8302__auto___36132 < len__8301__auto___36131)){
args__8308__auto__.push((arguments[i__8302__auto___36132]));

var G__36133 = (i__8302__auto___36132 + (1));
i__8302__auto___36132 = G__36133;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((1) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8309__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__36127){
var vec__36128 = p__36127;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36128,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.array_seq([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq36125){
var G__36126 = cljs.core.first(seq36125);
var seq36125__$1 = cljs.core.next(seq36125);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36126,seq36125__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__8308__auto__ = [];
var len__8301__auto___36140 = arguments.length;
var i__8302__auto___36141 = (0);
while(true){
if((i__8302__auto___36141 < len__8301__auto___36140)){
args__8308__auto__.push((arguments[i__8302__auto___36141]));

var G__36142 = (i__8302__auto___36141 + (1));
i__8302__auto___36141 = G__36142;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((1) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8309__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__36136){
var vec__36137 = p__36136;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36137,(0),null);
var cur = reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(ks,cljs.core.array_seq([default$], 0));
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq36134){
var G__36135 = cljs.core.first(seq36134);
var seq36134__$1 = cljs.core.next(seq36134);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36135,seq36134__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__8308__auto__ = [];
var len__8301__auto___36147 = arguments.length;
var i__8302__auto___36148 = (0);
while(true){
if((i__8302__auto___36148 < len__8301__auto___36147)){
args__8308__auto__.push((arguments[i__8302__auto___36148]));

var G__36149 = (i__8302__auto___36148 + (1));
i__8302__auto___36148 = G__36149;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((2) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8309__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__36143_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update,p1__36143_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq36144){
var G__36145 = cljs.core.first(seq36144);
var seq36144__$1 = cljs.core.next(seq36144);
var G__36146 = cljs.core.first(seq36144__$1);
var seq36144__$2 = cljs.core.next(seq36144__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36145,G__36146,seq36144__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__8308__auto__ = [];
var len__8301__auto___36154 = arguments.length;
var i__8302__auto___36155 = (0);
while(true){
if((i__8302__auto___36155 < len__8301__auto___36154)){
args__8308__auto__.push((arguments[i__8302__auto___36155]));

var G__36156 = (i__8302__auto___36155 + (1));
i__8302__auto___36155 = G__36156;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((2) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8309__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__36150_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__36150_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq36151){
var G__36152 = cljs.core.first(seq36151);
var seq36151__$1 = cljs.core.next(seq36151);
var G__36153 = cljs.core.first(seq36151__$1);
var seq36151__$2 = cljs.core.next(seq36151__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36152,G__36153,seq36151__$2);
});

