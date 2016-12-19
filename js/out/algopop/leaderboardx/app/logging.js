// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('algopop.leaderboardx.app.logging');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.session');
goog.require('taoensso.encore');
algopop.leaderboardx.app.logging.debug = (function algopop$leaderboardx$app$logging$debug(var_args){
var args__8308__auto__ = [];
var len__8301__auto___44141 = arguments.length;
var i__8302__auto___44142 = (0);
while(true){
if((i__8302__auto___44142 < len__8301__auto___44141)){
args__8308__auto__.push((arguments[i__8302__auto___44142]));

var G__44143 = (i__8302__auto___44142 + (1));
i__8302__auto___44142 = G__44143;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((0) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((0)),(0),null)):null);
return algopop.leaderboardx.app.logging.debug.cljs$core$IFn$_invoke$arity$variadic(argseq__8309__auto__);
});

algopop.leaderboardx.app.logging.debug.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__44140 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",args);
return (taoensso.encore.log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log.cljs$core$IFn$_invoke$arity$1(G__44140) : taoensso.encore.log.call(null,G__44140));
});

algopop.leaderboardx.app.logging.debug.cljs$lang$maxFixedArity = (0);

algopop.leaderboardx.app.logging.debug.cljs$lang$applyTo = (function (seq44139){
return algopop.leaderboardx.app.logging.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44139));
});

algopop.leaderboardx.app.logging.error = (function algopop$leaderboardx$app$logging$error(var_args){
var args__8308__auto__ = [];
var len__8301__auto___44146 = arguments.length;
var i__8302__auto___44147 = (0);
while(true){
if((i__8302__auto___44147 < len__8301__auto___44146)){
args__8308__auto__.push((arguments[i__8302__auto___44147]));

var G__44148 = (i__8302__auto___44147 + (1));
i__8302__auto___44147 = G__44148;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((1) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((1)),(0),null)):null);
return algopop.leaderboardx.app.logging.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8309__auto__);
});

algopop.leaderboardx.app.logging.error.cljs$core$IFn$_invoke$arity$variadic = (function (e,args){
var message = [cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",args)),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)))].join('');
reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors], null),cljs.core.conj,cljs.core.array_seq([message], 0));

return (taoensso.encore.log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log.cljs$core$IFn$_invoke$arity$1(message) : taoensso.encore.log.call(null,message));
});

algopop.leaderboardx.app.logging.error.cljs$lang$maxFixedArity = (1);

algopop.leaderboardx.app.logging.error.cljs$lang$applyTo = (function (seq44144){
var G__44145 = cljs.core.first(seq44144);
var seq44144__$1 = cljs.core.next(seq44144);
return algopop.leaderboardx.app.logging.error.cljs$core$IFn$_invoke$arity$variadic(G__44145,seq44144__$1);
});

