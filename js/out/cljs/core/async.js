// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args17087 = [];
var len__8301__auto___17093 = arguments.length;
var i__8302__auto___17094 = (0);
while(true){
if((i__8302__auto___17094 < len__8301__auto___17093)){
args17087.push((arguments[i__8302__auto___17094]));

var G__17095 = (i__8302__auto___17094 + (1));
i__8302__auto___17094 = G__17095;
continue;
} else {
}
break;
}

var G__17089 = args17087.length;
switch (G__17089) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17087.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async17090 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17090 = (function (f,blockable,meta17091){
this.f = f;
this.blockable = blockable;
this.meta17091 = meta17091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17092,meta17091__$1){
var self__ = this;
var _17092__$1 = this;
return (new cljs.core.async.t_cljs$core$async17090(self__.f,self__.blockable,meta17091__$1));
});

cljs.core.async.t_cljs$core$async17090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17092){
var self__ = this;
var _17092__$1 = this;
return self__.meta17091;
});

cljs.core.async.t_cljs$core$async17090.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17090.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17090.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17090.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17090.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta17091], null);
});

cljs.core.async.t_cljs$core$async17090.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17090.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17090";

cljs.core.async.t_cljs$core$async17090.cljs$lang$ctorPrWriter = (function (this__7737__auto__,writer__7738__auto__,opt__7739__auto__){
return cljs.core._write(writer__7738__auto__,"cljs.core.async/t_cljs$core$async17090");
});

cljs.core.async.__GT_t_cljs$core$async17090 = (function cljs$core$async$__GT_t_cljs$core$async17090(f__$1,blockable__$1,meta17091){
return (new cljs.core.async.t_cljs$core$async17090(f__$1,blockable__$1,meta17091));
});

}

return (new cljs.core.async.t_cljs$core$async17090(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args17099 = [];
var len__8301__auto___17102 = arguments.length;
var i__8302__auto___17103 = (0);
while(true){
if((i__8302__auto___17103 < len__8301__auto___17102)){
args17099.push((arguments[i__8302__auto___17103]));

var G__17104 = (i__8302__auto___17103 + (1));
i__8302__auto___17103 = G__17104;
continue;
} else {
}
break;
}

var G__17101 = args17099.length;
switch (G__17101) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17099.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args17106 = [];
var len__8301__auto___17109 = arguments.length;
var i__8302__auto___17110 = (0);
while(true){
if((i__8302__auto___17110 < len__8301__auto___17109)){
args17106.push((arguments[i__8302__auto___17110]));

var G__17111 = (i__8302__auto___17110 + (1));
i__8302__auto___17110 = G__17111;
continue;
} else {
}
break;
}

var G__17108 = args17106.length;
switch (G__17108) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17106.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args17113 = [];
var len__8301__auto___17116 = arguments.length;
var i__8302__auto___17117 = (0);
while(true){
if((i__8302__auto___17117 < len__8301__auto___17116)){
args17113.push((arguments[i__8302__auto___17117]));

var G__17118 = (i__8302__auto___17117 + (1));
i__8302__auto___17117 = G__17118;
continue;
} else {
}
break;
}

var G__17115 = args17113.length;
switch (G__17115) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17113.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17120 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17120) : fn1.call(null,val_17120));
} else {
cljs.core.async.impl.dispatch.run(((function (val_17120,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17120) : fn1.call(null,val_17120));
});})(val_17120,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args17121 = [];
var len__8301__auto___17124 = arguments.length;
var i__8302__auto___17125 = (0);
while(true){
if((i__8302__auto___17125 < len__8301__auto___17124)){
args17121.push((arguments[i__8302__auto___17125]));

var G__17126 = (i__8302__auto___17125 + (1));
i__8302__auto___17125 = G__17126;
continue;
} else {
}
break;
}

var G__17123 = args17121.length;
switch (G__17123) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17121.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6751__auto__)){
var ret = temp__6751__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__6751__auto__)){
var retb = temp__6751__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__6751__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__6751__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__8101__auto___17128 = n;
var x_17129 = (0);
while(true){
if((x_17129 < n__8101__auto___17128)){
(a[x_17129] = (0));

var G__17130 = (x_17129 + (1));
x_17129 = G__17130;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__17131 = (i + (1));
i = G__17131;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async17135 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17135 = (function (flag,meta17136){
this.flag = flag;
this.meta17136 = meta17136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17137,meta17136__$1){
var self__ = this;
var _17137__$1 = this;
return (new cljs.core.async.t_cljs$core$async17135(self__.flag,meta17136__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17135.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17137){
var self__ = this;
var _17137__$1 = this;
return self__.meta17136;
});})(flag))
;

cljs.core.async.t_cljs$core$async17135.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17135.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async17135.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17135.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17135.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta17136], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17135.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17135";

cljs.core.async.t_cljs$core$async17135.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7737__auto__,writer__7738__auto__,opt__7739__auto__){
return cljs.core._write(writer__7738__auto__,"cljs.core.async/t_cljs$core$async17135");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17135 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17135(flag__$1,meta17136){
return (new cljs.core.async.t_cljs$core$async17135(flag__$1,meta17136));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17135(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17141 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17141 = (function (flag,cb,meta17142){
this.flag = flag;
this.cb = cb;
this.meta17142 = meta17142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17143,meta17142__$1){
var self__ = this;
var _17143__$1 = this;
return (new cljs.core.async.t_cljs$core$async17141(self__.flag,self__.cb,meta17142__$1));
});

cljs.core.async.t_cljs$core$async17141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17143){
var self__ = this;
var _17143__$1 = this;
return self__.meta17142;
});

cljs.core.async.t_cljs$core$async17141.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17141.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async17141.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17141.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta17142], null);
});

cljs.core.async.t_cljs$core$async17141.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17141";

cljs.core.async.t_cljs$core$async17141.cljs$lang$ctorPrWriter = (function (this__7737__auto__,writer__7738__auto__,opt__7739__auto__){
return cljs.core._write(writer__7738__auto__,"cljs.core.async/t_cljs$core$async17141");
});

cljs.core.async.__GT_t_cljs$core$async17141 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17141(flag__$1,cb__$1,meta17142){
return (new cljs.core.async.t_cljs$core$async17141(flag__$1,cb__$1,meta17142));
});

}

return (new cljs.core.async.t_cljs$core$async17141(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17144_SHARP_){
var G__17148 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17144_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17148) : fret.call(null,G__17148));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17145_SHARP_){
var G__17149 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17145_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17149) : fret.call(null,G__17149));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__7085__auto__ = wport;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17150 = (i + (1));
i = G__17150;
continue;
}
} else {
return null;
}
break;
}
})();
var or__7085__auto__ = ret;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__6753__auto__ = (function (){var and__7073__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__7073__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__7073__auto__;
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var got = temp__6753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__8308__auto__ = [];
var len__8301__auto___17156 = arguments.length;
var i__8302__auto___17157 = (0);
while(true){
if((i__8302__auto___17157 < len__8301__auto___17156)){
args__8308__auto__.push((arguments[i__8302__auto___17157]));

var G__17158 = (i__8302__auto___17157 + (1));
i__8302__auto___17157 = G__17158;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((1) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8309__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17153){
var map__17154 = p__17153;
var map__17154__$1 = ((((!((map__17154 == null)))?((((map__17154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17154.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17154):map__17154);
var opts = map__17154__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17151){
var G__17152 = cljs.core.first(seq17151);
var seq17151__$1 = cljs.core.next(seq17151);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17152,seq17151__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args17159 = [];
var len__8301__auto___17209 = arguments.length;
var i__8302__auto___17210 = (0);
while(true){
if((i__8302__auto___17210 < len__8301__auto___17209)){
args17159.push((arguments[i__8302__auto___17210]));

var G__17211 = (i__8302__auto___17210 + (1));
i__8302__auto___17210 = G__17211;
continue;
} else {
}
break;
}

var G__17161 = args17159.length;
switch (G__17161) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17159.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17028__auto___17213 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17028__auto___17213){
return (function (){
var f__17029__auto__ = (function (){var switch__16902__auto__ = ((function (c__17028__auto___17213){
return (function (state_17185){
var state_val_17186 = (state_17185[(1)]);
if((state_val_17186 === (7))){
var inst_17181 = (state_17185[(2)]);
var state_17185__$1 = state_17185;
var statearr_17187_17214 = state_17185__$1;
(statearr_17187_17214[(2)] = inst_17181);

(statearr_17187_17214[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17186 === (1))){
var state_17185__$1 = state_17185;
var statearr_17188_17215 = state_17185__$1;
(statearr_17188_17215[(2)] = null);

(statearr_17188_17215[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17186 === (4))){
var inst_17164 = (state_17185[(7)]);
var inst_17164__$1 = (state_17185[(2)]);
var inst_17165 = (inst_17164__$1 == null);
var state_17185__$1 = (function (){var statearr_17189 = state_17185;
(statearr_17189[(7)] = inst_17164__$1);

return statearr_17189;
})();
if(cljs.core.truth_(inst_17165)){
var statearr_17190_17216 = state_17185__$1;
(statearr_17190_17216[(1)] = (5));

} else {
var statearr_17191_17217 = state_17185__$1;
(statearr_17191_17217[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17186 === (13))){
var state_17185__$1 = state_17185;
var statearr_17192_17218 = state_17185__$1;
(statearr_17192_17218[(2)] = null);

(statearr_17192_17218[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17186 === (6))){
var inst_17164 = (state_17185[(7)]);
var state_17185__$1 = state_17185;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17185__$1,(11),to,inst_17164);
} else {
if((state_val_17186 === (3))){
var inst_17183 = (state_17185[(2)]);
var state_17185__$1 = state_17185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17185__$1,inst_17183);
} else {
if((state_val_17186 === (12))){
var state_17185__$1 = state_17185;
var statearr_17193_17219 = state_17185__$1;
(statearr_17193_17219[(2)] = null);

(statearr_17193_17219[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17186 === (2))){
var state_17185__$1 = state_17185;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17185__$1,(4),from);
} else {
if((state_val_17186 === (11))){
var inst_17174 = (state_17185[(2)]);
var state_17185__$1 = state_17185;
if(cljs.core.truth_(inst_17174)){
var statearr_17194_17220 = state_17185__$1;
(statearr_17194_17220[(1)] = (12));

} else {
var statearr_17195_17221 = state_17185__$1;
(statearr_17195_17221[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17186 === (9))){
var state_17185__$1 = state_17185;
var statearr_17196_17222 = state_17185__$1;
(statearr_17196_17222[(2)] = null);

(statearr_17196_17222[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17186 === (5))){
var state_17185__$1 = state_17185;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17197_17223 = state_17185__$1;
(statearr_17197_17223[(1)] = (8));

} else {
var statearr_17198_17224 = state_17185__$1;
(statearr_17198_17224[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17186 === (14))){
var inst_17179 = (state_17185[(2)]);
var state_17185__$1 = state_17185;
var statearr_17199_17225 = state_17185__$1;
(statearr_17199_17225[(2)] = inst_17179);

(statearr_17199_17225[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17186 === (10))){
var inst_17171 = (state_17185[(2)]);
var state_17185__$1 = state_17185;
var statearr_17200_17226 = state_17185__$1;
(statearr_17200_17226[(2)] = inst_17171);

(statearr_17200_17226[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17186 === (8))){
var inst_17168 = cljs.core.async.close_BANG_(to);
var state_17185__$1 = state_17185;
var statearr_17201_17227 = state_17185__$1;
(statearr_17201_17227[(2)] = inst_17168);

(statearr_17201_17227[(1)] = (10));


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
});})(c__17028__auto___17213))
;
return ((function (switch__16902__auto__,c__17028__auto___17213){
return (function() {
var cljs$core$async$state_machine__16903__auto__ = null;
var cljs$core$async$state_machine__16903__auto____0 = (function (){
var statearr_17205 = [null,null,null,null,null,null,null,null];
(statearr_17205[(0)] = cljs$core$async$state_machine__16903__auto__);

(statearr_17205[(1)] = (1));

return statearr_17205;
});
var cljs$core$async$state_machine__16903__auto____1 = (function (state_17185){
while(true){
var ret_value__16904__auto__ = (function (){try{while(true){
var result__16905__auto__ = switch__16902__auto__(state_17185);
if(cljs.core.keyword_identical_QMARK_(result__16905__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16905__auto__;
}
break;
}
}catch (e17206){if((e17206 instanceof Object)){
var ex__16906__auto__ = e17206;
var statearr_17207_17228 = state_17185;
(statearr_17207_17228[(5)] = ex__16906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17185);

return cljs.core.cst$kw$recur;
} else {
throw e17206;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16904__auto__,cljs.core.cst$kw$recur)){
var G__17229 = state_17185;
state_17185 = G__17229;
continue;
} else {
return ret_value__16904__auto__;
}
break;
}
});
cljs$core$async$state_machine__16903__auto__ = function(state_17185){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16903__auto____1.call(this,state_17185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16903__auto____0;
cljs$core$async$state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16903__auto____1;
return cljs$core$async$state_machine__16903__auto__;
})()
;})(switch__16902__auto__,c__17028__auto___17213))
})();
var state__17030__auto__ = (function (){var statearr_17208 = (f__17029__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17029__auto__.cljs$core$IFn$_invoke$arity$0() : f__17029__auto__.call(null));
(statearr_17208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17028__auto___17213);

return statearr_17208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
});})(c__17028__auto___17213))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__17417){
var vec__17418 = p__17417;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17418,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17418,(1),null);
var job = vec__17418;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17028__auto___17604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17028__auto___17604,res,vec__17418,v,p,job,jobs,results){
return (function (){
var f__17029__auto__ = (function (){var switch__16902__auto__ = ((function (c__17028__auto___17604,res,vec__17418,v,p,job,jobs,results){
return (function (state_17425){
var state_val_17426 = (state_17425[(1)]);
if((state_val_17426 === (1))){
var state_17425__$1 = state_17425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17425__$1,(2),res,v);
} else {
if((state_val_17426 === (2))){
var inst_17422 = (state_17425[(2)]);
var inst_17423 = cljs.core.async.close_BANG_(res);
var state_17425__$1 = (function (){var statearr_17427 = state_17425;
(statearr_17427[(7)] = inst_17422);

return statearr_17427;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17425__$1,inst_17423);
} else {
return null;
}
}
});})(c__17028__auto___17604,res,vec__17418,v,p,job,jobs,results))
;
return ((function (switch__16902__auto__,c__17028__auto___17604,res,vec__17418,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____0 = (function (){
var statearr_17431 = [null,null,null,null,null,null,null,null];
(statearr_17431[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__);

(statearr_17431[(1)] = (1));

return statearr_17431;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____1 = (function (state_17425){
while(true){
var ret_value__16904__auto__ = (function (){try{while(true){
var result__16905__auto__ = switch__16902__auto__(state_17425);
if(cljs.core.keyword_identical_QMARK_(result__16905__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16905__auto__;
}
break;
}
}catch (e17432){if((e17432 instanceof Object)){
var ex__16906__auto__ = e17432;
var statearr_17433_17605 = state_17425;
(statearr_17433_17605[(5)] = ex__16906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17425);

return cljs.core.cst$kw$recur;
} else {
throw e17432;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16904__auto__,cljs.core.cst$kw$recur)){
var G__17606 = state_17425;
state_17425 = G__17606;
continue;
} else {
return ret_value__16904__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__ = function(state_17425){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____1.call(this,state_17425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__;
})()
;})(switch__16902__auto__,c__17028__auto___17604,res,vec__17418,v,p,job,jobs,results))
})();
var state__17030__auto__ = (function (){var statearr_17434 = (f__17029__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17029__auto__.cljs$core$IFn$_invoke$arity$0() : f__17029__auto__.call(null));
(statearr_17434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17028__auto___17604);

return statearr_17434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
});})(c__17028__auto___17604,res,vec__17418,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17435){
var vec__17436 = p__17435;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17436,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17436,(1),null);
var job = vec__17436;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__8101__auto___17607 = n;
var __17608 = (0);
while(true){
if((__17608 < n__8101__auto___17607)){
var G__17439_17609 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17439_17609) {
case "compute":
var c__17028__auto___17611 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17608,c__17028__auto___17611,G__17439_17609,n__8101__auto___17607,jobs,results,process,async){
return (function (){
var f__17029__auto__ = (function (){var switch__16902__auto__ = ((function (__17608,c__17028__auto___17611,G__17439_17609,n__8101__auto___17607,jobs,results,process,async){
return (function (state_17452){
var state_val_17453 = (state_17452[(1)]);
if((state_val_17453 === (1))){
var state_17452__$1 = state_17452;
var statearr_17454_17612 = state_17452__$1;
(statearr_17454_17612[(2)] = null);

(statearr_17454_17612[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17453 === (2))){
var state_17452__$1 = state_17452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17452__$1,(4),jobs);
} else {
if((state_val_17453 === (3))){
var inst_17450 = (state_17452[(2)]);
var state_17452__$1 = state_17452;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17452__$1,inst_17450);
} else {
if((state_val_17453 === (4))){
var inst_17442 = (state_17452[(2)]);
var inst_17443 = process(inst_17442);
var state_17452__$1 = state_17452;
if(cljs.core.truth_(inst_17443)){
var statearr_17455_17613 = state_17452__$1;
(statearr_17455_17613[(1)] = (5));

} else {
var statearr_17456_17614 = state_17452__$1;
(statearr_17456_17614[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17453 === (5))){
var state_17452__$1 = state_17452;
var statearr_17457_17615 = state_17452__$1;
(statearr_17457_17615[(2)] = null);

(statearr_17457_17615[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17453 === (6))){
var state_17452__$1 = state_17452;
var statearr_17458_17616 = state_17452__$1;
(statearr_17458_17616[(2)] = null);

(statearr_17458_17616[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17453 === (7))){
var inst_17448 = (state_17452[(2)]);
var state_17452__$1 = state_17452;
var statearr_17459_17617 = state_17452__$1;
(statearr_17459_17617[(2)] = inst_17448);

(statearr_17459_17617[(1)] = (3));


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
});})(__17608,c__17028__auto___17611,G__17439_17609,n__8101__auto___17607,jobs,results,process,async))
;
return ((function (__17608,switch__16902__auto__,c__17028__auto___17611,G__17439_17609,n__8101__auto___17607,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____0 = (function (){
var statearr_17463 = [null,null,null,null,null,null,null];
(statearr_17463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__);

(statearr_17463[(1)] = (1));

return statearr_17463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____1 = (function (state_17452){
while(true){
var ret_value__16904__auto__ = (function (){try{while(true){
var result__16905__auto__ = switch__16902__auto__(state_17452);
if(cljs.core.keyword_identical_QMARK_(result__16905__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16905__auto__;
}
break;
}
}catch (e17464){if((e17464 instanceof Object)){
var ex__16906__auto__ = e17464;
var statearr_17465_17618 = state_17452;
(statearr_17465_17618[(5)] = ex__16906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17452);

return cljs.core.cst$kw$recur;
} else {
throw e17464;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16904__auto__,cljs.core.cst$kw$recur)){
var G__17619 = state_17452;
state_17452 = G__17619;
continue;
} else {
return ret_value__16904__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__ = function(state_17452){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____1.call(this,state_17452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__;
})()
;})(__17608,switch__16902__auto__,c__17028__auto___17611,G__17439_17609,n__8101__auto___17607,jobs,results,process,async))
})();
var state__17030__auto__ = (function (){var statearr_17466 = (f__17029__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17029__auto__.cljs$core$IFn$_invoke$arity$0() : f__17029__auto__.call(null));
(statearr_17466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17028__auto___17611);

return statearr_17466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
});})(__17608,c__17028__auto___17611,G__17439_17609,n__8101__auto___17607,jobs,results,process,async))
);


break;
case "async":
var c__17028__auto___17620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17608,c__17028__auto___17620,G__17439_17609,n__8101__auto___17607,jobs,results,process,async){
return (function (){
var f__17029__auto__ = (function (){var switch__16902__auto__ = ((function (__17608,c__17028__auto___17620,G__17439_17609,n__8101__auto___17607,jobs,results,process,async){
return (function (state_17479){
var state_val_17480 = (state_17479[(1)]);
if((state_val_17480 === (1))){
var state_17479__$1 = state_17479;
var statearr_17481_17621 = state_17479__$1;
(statearr_17481_17621[(2)] = null);

(statearr_17481_17621[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17480 === (2))){
var state_17479__$1 = state_17479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17479__$1,(4),jobs);
} else {
if((state_val_17480 === (3))){
var inst_17477 = (state_17479[(2)]);
var state_17479__$1 = state_17479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17479__$1,inst_17477);
} else {
if((state_val_17480 === (4))){
var inst_17469 = (state_17479[(2)]);
var inst_17470 = async(inst_17469);
var state_17479__$1 = state_17479;
if(cljs.core.truth_(inst_17470)){
var statearr_17482_17622 = state_17479__$1;
(statearr_17482_17622[(1)] = (5));

} else {
var statearr_17483_17623 = state_17479__$1;
(statearr_17483_17623[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17480 === (5))){
var state_17479__$1 = state_17479;
var statearr_17484_17624 = state_17479__$1;
(statearr_17484_17624[(2)] = null);

(statearr_17484_17624[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17480 === (6))){
var state_17479__$1 = state_17479;
var statearr_17485_17625 = state_17479__$1;
(statearr_17485_17625[(2)] = null);

(statearr_17485_17625[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17480 === (7))){
var inst_17475 = (state_17479[(2)]);
var state_17479__$1 = state_17479;
var statearr_17486_17626 = state_17479__$1;
(statearr_17486_17626[(2)] = inst_17475);

(statearr_17486_17626[(1)] = (3));


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
});})(__17608,c__17028__auto___17620,G__17439_17609,n__8101__auto___17607,jobs,results,process,async))
;
return ((function (__17608,switch__16902__auto__,c__17028__auto___17620,G__17439_17609,n__8101__auto___17607,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____0 = (function (){
var statearr_17490 = [null,null,null,null,null,null,null];
(statearr_17490[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__);

(statearr_17490[(1)] = (1));

return statearr_17490;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____1 = (function (state_17479){
while(true){
var ret_value__16904__auto__ = (function (){try{while(true){
var result__16905__auto__ = switch__16902__auto__(state_17479);
if(cljs.core.keyword_identical_QMARK_(result__16905__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16905__auto__;
}
break;
}
}catch (e17491){if((e17491 instanceof Object)){
var ex__16906__auto__ = e17491;
var statearr_17492_17627 = state_17479;
(statearr_17492_17627[(5)] = ex__16906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17479);

return cljs.core.cst$kw$recur;
} else {
throw e17491;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16904__auto__,cljs.core.cst$kw$recur)){
var G__17628 = state_17479;
state_17479 = G__17628;
continue;
} else {
return ret_value__16904__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__ = function(state_17479){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____1.call(this,state_17479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__;
})()
;})(__17608,switch__16902__auto__,c__17028__auto___17620,G__17439_17609,n__8101__auto___17607,jobs,results,process,async))
})();
var state__17030__auto__ = (function (){var statearr_17493 = (f__17029__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17029__auto__.cljs$core$IFn$_invoke$arity$0() : f__17029__auto__.call(null));
(statearr_17493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17028__auto___17620);

return statearr_17493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
});})(__17608,c__17028__auto___17620,G__17439_17609,n__8101__auto___17607,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17629 = (__17608 + (1));
__17608 = G__17629;
continue;
} else {
}
break;
}

var c__17028__auto___17630 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17028__auto___17630,jobs,results,process,async){
return (function (){
var f__17029__auto__ = (function (){var switch__16902__auto__ = ((function (c__17028__auto___17630,jobs,results,process,async){
return (function (state_17515){
var state_val_17516 = (state_17515[(1)]);
if((state_val_17516 === (1))){
var state_17515__$1 = state_17515;
var statearr_17517_17631 = state_17515__$1;
(statearr_17517_17631[(2)] = null);

(statearr_17517_17631[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17516 === (2))){
var state_17515__$1 = state_17515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17515__$1,(4),from);
} else {
if((state_val_17516 === (3))){
var inst_17513 = (state_17515[(2)]);
var state_17515__$1 = state_17515;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17515__$1,inst_17513);
} else {
if((state_val_17516 === (4))){
var inst_17496 = (state_17515[(7)]);
var inst_17496__$1 = (state_17515[(2)]);
var inst_17497 = (inst_17496__$1 == null);
var state_17515__$1 = (function (){var statearr_17518 = state_17515;
(statearr_17518[(7)] = inst_17496__$1);

return statearr_17518;
})();
if(cljs.core.truth_(inst_17497)){
var statearr_17519_17632 = state_17515__$1;
(statearr_17519_17632[(1)] = (5));

} else {
var statearr_17520_17633 = state_17515__$1;
(statearr_17520_17633[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17516 === (5))){
var inst_17499 = cljs.core.async.close_BANG_(jobs);
var state_17515__$1 = state_17515;
var statearr_17521_17634 = state_17515__$1;
(statearr_17521_17634[(2)] = inst_17499);

(statearr_17521_17634[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17516 === (6))){
var inst_17501 = (state_17515[(8)]);
var inst_17496 = (state_17515[(7)]);
var inst_17501__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17502 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17503 = [inst_17496,inst_17501__$1];
var inst_17504 = (new cljs.core.PersistentVector(null,2,(5),inst_17502,inst_17503,null));
var state_17515__$1 = (function (){var statearr_17522 = state_17515;
(statearr_17522[(8)] = inst_17501__$1);

return statearr_17522;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17515__$1,(8),jobs,inst_17504);
} else {
if((state_val_17516 === (7))){
var inst_17511 = (state_17515[(2)]);
var state_17515__$1 = state_17515;
var statearr_17523_17635 = state_17515__$1;
(statearr_17523_17635[(2)] = inst_17511);

(statearr_17523_17635[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17516 === (8))){
var inst_17501 = (state_17515[(8)]);
var inst_17506 = (state_17515[(2)]);
var state_17515__$1 = (function (){var statearr_17524 = state_17515;
(statearr_17524[(9)] = inst_17506);

return statearr_17524;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17515__$1,(9),results,inst_17501);
} else {
if((state_val_17516 === (9))){
var inst_17508 = (state_17515[(2)]);
var state_17515__$1 = (function (){var statearr_17525 = state_17515;
(statearr_17525[(10)] = inst_17508);

return statearr_17525;
})();
var statearr_17526_17636 = state_17515__$1;
(statearr_17526_17636[(2)] = null);

(statearr_17526_17636[(1)] = (2));


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
});})(c__17028__auto___17630,jobs,results,process,async))
;
return ((function (switch__16902__auto__,c__17028__auto___17630,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____0 = (function (){
var statearr_17530 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17530[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__);

(statearr_17530[(1)] = (1));

return statearr_17530;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____1 = (function (state_17515){
while(true){
var ret_value__16904__auto__ = (function (){try{while(true){
var result__16905__auto__ = switch__16902__auto__(state_17515);
if(cljs.core.keyword_identical_QMARK_(result__16905__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16905__auto__;
}
break;
}
}catch (e17531){if((e17531 instanceof Object)){
var ex__16906__auto__ = e17531;
var statearr_17532_17637 = state_17515;
(statearr_17532_17637[(5)] = ex__16906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17515);

return cljs.core.cst$kw$recur;
} else {
throw e17531;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16904__auto__,cljs.core.cst$kw$recur)){
var G__17638 = state_17515;
state_17515 = G__17638;
continue;
} else {
return ret_value__16904__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__ = function(state_17515){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____1.call(this,state_17515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__;
})()
;})(switch__16902__auto__,c__17028__auto___17630,jobs,results,process,async))
})();
var state__17030__auto__ = (function (){var statearr_17533 = (f__17029__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17029__auto__.cljs$core$IFn$_invoke$arity$0() : f__17029__auto__.call(null));
(statearr_17533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17028__auto___17630);

return statearr_17533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
});})(c__17028__auto___17630,jobs,results,process,async))
);


var c__17028__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17028__auto__,jobs,results,process,async){
return (function (){
var f__17029__auto__ = (function (){var switch__16902__auto__ = ((function (c__17028__auto__,jobs,results,process,async){
return (function (state_17571){
var state_val_17572 = (state_17571[(1)]);
if((state_val_17572 === (7))){
var inst_17567 = (state_17571[(2)]);
var state_17571__$1 = state_17571;
var statearr_17573_17639 = state_17571__$1;
(statearr_17573_17639[(2)] = inst_17567);

(statearr_17573_17639[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (20))){
var state_17571__$1 = state_17571;
var statearr_17574_17640 = state_17571__$1;
(statearr_17574_17640[(2)] = null);

(statearr_17574_17640[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (1))){
var state_17571__$1 = state_17571;
var statearr_17575_17641 = state_17571__$1;
(statearr_17575_17641[(2)] = null);

(statearr_17575_17641[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (4))){
var inst_17536 = (state_17571[(7)]);
var inst_17536__$1 = (state_17571[(2)]);
var inst_17537 = (inst_17536__$1 == null);
var state_17571__$1 = (function (){var statearr_17576 = state_17571;
(statearr_17576[(7)] = inst_17536__$1);

return statearr_17576;
})();
if(cljs.core.truth_(inst_17537)){
var statearr_17577_17642 = state_17571__$1;
(statearr_17577_17642[(1)] = (5));

} else {
var statearr_17578_17643 = state_17571__$1;
(statearr_17578_17643[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (15))){
var inst_17549 = (state_17571[(8)]);
var state_17571__$1 = state_17571;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17571__$1,(18),to,inst_17549);
} else {
if((state_val_17572 === (21))){
var inst_17562 = (state_17571[(2)]);
var state_17571__$1 = state_17571;
var statearr_17579_17644 = state_17571__$1;
(statearr_17579_17644[(2)] = inst_17562);

(statearr_17579_17644[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (13))){
var inst_17564 = (state_17571[(2)]);
var state_17571__$1 = (function (){var statearr_17580 = state_17571;
(statearr_17580[(9)] = inst_17564);

return statearr_17580;
})();
var statearr_17581_17645 = state_17571__$1;
(statearr_17581_17645[(2)] = null);

(statearr_17581_17645[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (6))){
var inst_17536 = (state_17571[(7)]);
var state_17571__$1 = state_17571;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17571__$1,(11),inst_17536);
} else {
if((state_val_17572 === (17))){
var inst_17557 = (state_17571[(2)]);
var state_17571__$1 = state_17571;
if(cljs.core.truth_(inst_17557)){
var statearr_17582_17646 = state_17571__$1;
(statearr_17582_17646[(1)] = (19));

} else {
var statearr_17583_17647 = state_17571__$1;
(statearr_17583_17647[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (3))){
var inst_17569 = (state_17571[(2)]);
var state_17571__$1 = state_17571;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17571__$1,inst_17569);
} else {
if((state_val_17572 === (12))){
var inst_17546 = (state_17571[(10)]);
var state_17571__$1 = state_17571;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17571__$1,(14),inst_17546);
} else {
if((state_val_17572 === (2))){
var state_17571__$1 = state_17571;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17571__$1,(4),results);
} else {
if((state_val_17572 === (19))){
var state_17571__$1 = state_17571;
var statearr_17584_17648 = state_17571__$1;
(statearr_17584_17648[(2)] = null);

(statearr_17584_17648[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (11))){
var inst_17546 = (state_17571[(2)]);
var state_17571__$1 = (function (){var statearr_17585 = state_17571;
(statearr_17585[(10)] = inst_17546);

return statearr_17585;
})();
var statearr_17586_17649 = state_17571__$1;
(statearr_17586_17649[(2)] = null);

(statearr_17586_17649[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (9))){
var state_17571__$1 = state_17571;
var statearr_17587_17650 = state_17571__$1;
(statearr_17587_17650[(2)] = null);

(statearr_17587_17650[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (5))){
var state_17571__$1 = state_17571;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17588_17651 = state_17571__$1;
(statearr_17588_17651[(1)] = (8));

} else {
var statearr_17589_17652 = state_17571__$1;
(statearr_17589_17652[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (14))){
var inst_17549 = (state_17571[(8)]);
var inst_17551 = (state_17571[(11)]);
var inst_17549__$1 = (state_17571[(2)]);
var inst_17550 = (inst_17549__$1 == null);
var inst_17551__$1 = cljs.core.not(inst_17550);
var state_17571__$1 = (function (){var statearr_17590 = state_17571;
(statearr_17590[(8)] = inst_17549__$1);

(statearr_17590[(11)] = inst_17551__$1);

return statearr_17590;
})();
if(inst_17551__$1){
var statearr_17591_17653 = state_17571__$1;
(statearr_17591_17653[(1)] = (15));

} else {
var statearr_17592_17654 = state_17571__$1;
(statearr_17592_17654[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (16))){
var inst_17551 = (state_17571[(11)]);
var state_17571__$1 = state_17571;
var statearr_17593_17655 = state_17571__$1;
(statearr_17593_17655[(2)] = inst_17551);

(statearr_17593_17655[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (10))){
var inst_17543 = (state_17571[(2)]);
var state_17571__$1 = state_17571;
var statearr_17594_17656 = state_17571__$1;
(statearr_17594_17656[(2)] = inst_17543);

(statearr_17594_17656[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (18))){
var inst_17554 = (state_17571[(2)]);
var state_17571__$1 = state_17571;
var statearr_17595_17657 = state_17571__$1;
(statearr_17595_17657[(2)] = inst_17554);

(statearr_17595_17657[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (8))){
var inst_17540 = cljs.core.async.close_BANG_(to);
var state_17571__$1 = state_17571;
var statearr_17596_17658 = state_17571__$1;
(statearr_17596_17658[(2)] = inst_17540);

(statearr_17596_17658[(1)] = (10));


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
});})(c__17028__auto__,jobs,results,process,async))
;
return ((function (switch__16902__auto__,c__17028__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____0 = (function (){
var statearr_17600 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17600[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__);

(statearr_17600[(1)] = (1));

return statearr_17600;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____1 = (function (state_17571){
while(true){
var ret_value__16904__auto__ = (function (){try{while(true){
var result__16905__auto__ = switch__16902__auto__(state_17571);
if(cljs.core.keyword_identical_QMARK_(result__16905__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16905__auto__;
}
break;
}
}catch (e17601){if((e17601 instanceof Object)){
var ex__16906__auto__ = e17601;
var statearr_17602_17659 = state_17571;
(statearr_17602_17659[(5)] = ex__16906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17571);

return cljs.core.cst$kw$recur;
} else {
throw e17601;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16904__auto__,cljs.core.cst$kw$recur)){
var G__17660 = state_17571;
state_17571 = G__17660;
continue;
} else {
return ret_value__16904__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__ = function(state_17571){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____1.call(this,state_17571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16903__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16903__auto__;
})()
;})(switch__16902__auto__,c__17028__auto__,jobs,results,process,async))
})();
var state__17030__auto__ = (function (){var statearr_17603 = (f__17029__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17029__auto__.cljs$core$IFn$_invoke$arity$0() : f__17029__auto__.call(null));
(statearr_17603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17028__auto__);

return statearr_17603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
});})(c__17028__auto__,jobs,results,process,async))
);

return c__17028__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args17661 = [];
var len__8301__auto___17664 = arguments.length;
var i__8302__auto___17665 = (0);
while(true){
if((i__8302__auto___17665 < len__8301__auto___17664)){
args17661.push((arguments[i__8302__auto___17665]));

var G__17666 = (i__8302__auto___17665 + (1));
i__8302__auto___17665 = G__17666;
continue;
} else {
}
break;
}

var G__17663 = args17661.length;
switch (G__17663) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17661.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args17668 = [];
var len__8301__auto___17671 = arguments.length;
var i__8302__auto___17672 = (0);
while(true){
if((i__8302__auto___17672 < len__8301__auto___17671)){
args17668.push((arguments[i__8302__auto___17672]));

var G__17673 = (i__8302__auto___17672 + (1));
i__8302__auto___17672 = G__17673;
continue;
} else {
}
break;
}

var G__17670 = args17668.length;
switch (G__17670) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17668.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args17675 = [];
var len__8301__auto___17728 = arguments.length;
var i__8302__auto___17729 = (0);
while(true){
if((i__8302__auto___17729 < len__8301__auto___17728)){
args17675.push((arguments[i__8302__auto___17729]));

var G__17730 = (i__8302__auto___17729 + (1));
i__8302__auto___17729 = G__17730;
continue;
} else {
}
break;
}

var G__17677 = args17675.length;
switch (G__17677) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17675.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17028__auto___17732 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17028__auto___17732,tc,fc){
return (function (){
var f__17029__auto__ = (function (){var switch__16902__auto__ = ((function (c__17028__auto___17732,tc,fc){
return (function (state_17703){
var state_val_17704 = (state_17703[(1)]);
if((state_val_17704 === (7))){
var inst_17699 = (state_17703[(2)]);
var state_17703__$1 = state_17703;
var statearr_17705_17733 = state_17703__$1;
(statearr_17705_17733[(2)] = inst_17699);

(statearr_17705_17733[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17704 === (1))){
var state_17703__$1 = state_17703;
var statearr_17706_17734 = state_17703__$1;
(statearr_17706_17734[(2)] = null);

(statearr_17706_17734[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17704 === (4))){
var inst_17680 = (state_17703[(7)]);
var inst_17680__$1 = (state_17703[(2)]);
var inst_17681 = (inst_17680__$1 == null);
var state_17703__$1 = (function (){var statearr_17707 = state_17703;
(statearr_17707[(7)] = inst_17680__$1);

return statearr_17707;
})();
if(cljs.core.truth_(inst_17681)){
var statearr_17708_17735 = state_17703__$1;
(statearr_17708_17735[(1)] = (5));

} else {
var statearr_17709_17736 = state_17703__$1;
(statearr_17709_17736[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17704 === (13))){
var state_17703__$1 = state_17703;
var statearr_17710_17737 = state_17703__$1;
(statearr_17710_17737[(2)] = null);

(statearr_17710_17737[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17704 === (6))){
var inst_17680 = (state_17703[(7)]);
var inst_17686 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17680) : p.call(null,inst_17680));
var state_17703__$1 = state_17703;
if(cljs.core.truth_(inst_17686)){
var statearr_17711_17738 = state_17703__$1;
(statearr_17711_17738[(1)] = (9));

} else {
var statearr_17712_17739 = state_17703__$1;
(statearr_17712_17739[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17704 === (3))){
var inst_17701 = (state_17703[(2)]);
var state_17703__$1 = state_17703;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17703__$1,inst_17701);
} else {
if((state_val_17704 === (12))){
var state_17703__$1 = state_17703;
var statearr_17713_17740 = state_17703__$1;
(statearr_17713_17740[(2)] = null);

(statearr_17713_17740[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17704 === (2))){
var state_17703__$1 = state_17703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17703__$1,(4),ch);
} else {
if((state_val_17704 === (11))){
var inst_17680 = (state_17703[(7)]);
var inst_17690 = (state_17703[(2)]);
var state_17703__$1 = state_17703;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17703__$1,(8),inst_17690,inst_17680);
} else {
if((state_val_17704 === (9))){
var state_17703__$1 = state_17703;
var statearr_17714_17741 = state_17703__$1;
(statearr_17714_17741[(2)] = tc);

(statearr_17714_17741[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17704 === (5))){
var inst_17683 = cljs.core.async.close_BANG_(tc);
var inst_17684 = cljs.core.async.close_BANG_(fc);
var state_17703__$1 = (function (){var statearr_17715 = state_17703;
(statearr_17715[(8)] = inst_17683);

return statearr_17715;
})();
var statearr_17716_17742 = state_17703__$1;
(statearr_17716_17742[(2)] = inst_17684);

(statearr_17716_17742[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17704 === (14))){
var inst_17697 = (state_17703[(2)]);
var state_17703__$1 = state_17703;
var statearr_17717_17743 = state_17703__$1;
(statearr_17717_17743[(2)] = inst_17697);

(statearr_17717_17743[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17704 === (10))){
var state_17703__$1 = state_17703;
var statearr_17718_17744 = state_17703__$1;
(statearr_17718_17744[(2)] = fc);

(statearr_17718_17744[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17704 === (8))){
var inst_17692 = (state_17703[(2)]);
var state_17703__$1 = state_17703;
if(cljs.core.truth_(inst_17692)){
var statearr_17719_17745 = state_17703__$1;
(statearr_17719_17745[(1)] = (12));

} else {
var statearr_17720_17746 = state_17703__$1;
(statearr_17720_17746[(1)] = (13));

}

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
});})(c__17028__auto___17732,tc,fc))
;
return ((function (switch__16902__auto__,c__17028__auto___17732,tc,fc){
return (function() {
var cljs$core$async$state_machine__16903__auto__ = null;
var cljs$core$async$state_machine__16903__auto____0 = (function (){
var statearr_17724 = [null,null,null,null,null,null,null,null,null];
(statearr_17724[(0)] = cljs$core$async$state_machine__16903__auto__);

(statearr_17724[(1)] = (1));

return statearr_17724;
});
var cljs$core$async$state_machine__16903__auto____1 = (function (state_17703){
while(true){
var ret_value__16904__auto__ = (function (){try{while(true){
var result__16905__auto__ = switch__16902__auto__(state_17703);
if(cljs.core.keyword_identical_QMARK_(result__16905__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16905__auto__;
}
break;
}
}catch (e17725){if((e17725 instanceof Object)){
var ex__16906__auto__ = e17725;
var statearr_17726_17747 = state_17703;
(statearr_17726_17747[(5)] = ex__16906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17703);

return cljs.core.cst$kw$recur;
} else {
throw e17725;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16904__auto__,cljs.core.cst$kw$recur)){
var G__17748 = state_17703;
state_17703 = G__17748;
continue;
} else {
return ret_value__16904__auto__;
}
break;
}
});
cljs$core$async$state_machine__16903__auto__ = function(state_17703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16903__auto____1.call(this,state_17703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16903__auto____0;
cljs$core$async$state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16903__auto____1;
return cljs$core$async$state_machine__16903__auto__;
})()
;})(switch__16902__auto__,c__17028__auto___17732,tc,fc))
})();
var state__17030__auto__ = (function (){var statearr_17727 = (f__17029__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17029__auto__.cljs$core$IFn$_invoke$arity$0() : f__17029__auto__.call(null));
(statearr_17727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17028__auto___17732);

return statearr_17727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
});})(c__17028__auto___17732,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17028__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17028__auto__){
return (function (){
var f__17029__auto__ = (function (){var switch__16902__auto__ = ((function (c__17028__auto__){
return (function (state_17812){
var state_val_17813 = (state_17812[(1)]);
if((state_val_17813 === (7))){
var inst_17808 = (state_17812[(2)]);
var state_17812__$1 = state_17812;
var statearr_17814_17835 = state_17812__$1;
(statearr_17814_17835[(2)] = inst_17808);

(statearr_17814_17835[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17813 === (1))){
var inst_17792 = init;
var state_17812__$1 = (function (){var statearr_17815 = state_17812;
(statearr_17815[(7)] = inst_17792);

return statearr_17815;
})();
var statearr_17816_17836 = state_17812__$1;
(statearr_17816_17836[(2)] = null);

(statearr_17816_17836[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17813 === (4))){
var inst_17795 = (state_17812[(8)]);
var inst_17795__$1 = (state_17812[(2)]);
var inst_17796 = (inst_17795__$1 == null);
var state_17812__$1 = (function (){var statearr_17817 = state_17812;
(statearr_17817[(8)] = inst_17795__$1);

return statearr_17817;
})();
if(cljs.core.truth_(inst_17796)){
var statearr_17818_17837 = state_17812__$1;
(statearr_17818_17837[(1)] = (5));

} else {
var statearr_17819_17838 = state_17812__$1;
(statearr_17819_17838[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17813 === (6))){
var inst_17799 = (state_17812[(9)]);
var inst_17792 = (state_17812[(7)]);
var inst_17795 = (state_17812[(8)]);
var inst_17799__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17792,inst_17795) : f.call(null,inst_17792,inst_17795));
var inst_17800 = cljs.core.reduced_QMARK_(inst_17799__$1);
var state_17812__$1 = (function (){var statearr_17820 = state_17812;
(statearr_17820[(9)] = inst_17799__$1);

return statearr_17820;
})();
if(inst_17800){
var statearr_17821_17839 = state_17812__$1;
(statearr_17821_17839[(1)] = (8));

} else {
var statearr_17822_17840 = state_17812__$1;
(statearr_17822_17840[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17813 === (3))){
var inst_17810 = (state_17812[(2)]);
var state_17812__$1 = state_17812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17812__$1,inst_17810);
} else {
if((state_val_17813 === (2))){
var state_17812__$1 = state_17812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17812__$1,(4),ch);
} else {
if((state_val_17813 === (9))){
var inst_17799 = (state_17812[(9)]);
var inst_17792 = inst_17799;
var state_17812__$1 = (function (){var statearr_17823 = state_17812;
(statearr_17823[(7)] = inst_17792);

return statearr_17823;
})();
var statearr_17824_17841 = state_17812__$1;
(statearr_17824_17841[(2)] = null);

(statearr_17824_17841[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17813 === (5))){
var inst_17792 = (state_17812[(7)]);
var state_17812__$1 = state_17812;
var statearr_17825_17842 = state_17812__$1;
(statearr_17825_17842[(2)] = inst_17792);

(statearr_17825_17842[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17813 === (10))){
var inst_17806 = (state_17812[(2)]);
var state_17812__$1 = state_17812;
var statearr_17826_17843 = state_17812__$1;
(statearr_17826_17843[(2)] = inst_17806);

(statearr_17826_17843[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17813 === (8))){
var inst_17799 = (state_17812[(9)]);
var inst_17802 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_17799) : cljs.core.deref.call(null,inst_17799));
var state_17812__$1 = state_17812;
var statearr_17827_17844 = state_17812__$1;
(statearr_17827_17844[(2)] = inst_17802);

(statearr_17827_17844[(1)] = (10));


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
});})(c__17028__auto__))
;
return ((function (switch__16902__auto__,c__17028__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16903__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16903__auto____0 = (function (){
var statearr_17831 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17831[(0)] = cljs$core$async$reduce_$_state_machine__16903__auto__);

(statearr_17831[(1)] = (1));

return statearr_17831;
});
var cljs$core$async$reduce_$_state_machine__16903__auto____1 = (function (state_17812){
while(true){
var ret_value__16904__auto__ = (function (){try{while(true){
var result__16905__auto__ = switch__16902__auto__(state_17812);
if(cljs.core.keyword_identical_QMARK_(result__16905__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16905__auto__;
}
break;
}
}catch (e17832){if((e17832 instanceof Object)){
var ex__16906__auto__ = e17832;
var statearr_17833_17845 = state_17812;
(statearr_17833_17845[(5)] = ex__16906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17812);

return cljs.core.cst$kw$recur;
} else {
throw e17832;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16904__auto__,cljs.core.cst$kw$recur)){
var G__17846 = state_17812;
state_17812 = G__17846;
continue;
} else {
return ret_value__16904__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16903__auto__ = function(state_17812){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16903__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16903__auto____1.call(this,state_17812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16903__auto____0;
cljs$core$async$reduce_$_state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16903__auto____1;
return cljs$core$async$reduce_$_state_machine__16903__auto__;
})()
;})(switch__16902__auto__,c__17028__auto__))
})();
var state__17030__auto__ = (function (){var statearr_17834 = (f__17029__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17029__auto__.cljs$core$IFn$_invoke$arity$0() : f__17029__auto__.call(null));
(statearr_17834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17028__auto__);

return statearr_17834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
});})(c__17028__auto__))
);

return c__17028__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args17847 = [];
var len__8301__auto___17899 = arguments.length;
var i__8302__auto___17900 = (0);
while(true){
if((i__8302__auto___17900 < len__8301__auto___17899)){
args17847.push((arguments[i__8302__auto___17900]));

var G__17901 = (i__8302__auto___17900 + (1));
i__8302__auto___17900 = G__17901;
continue;
} else {
}
break;
}

var G__17849 = args17847.length;
switch (G__17849) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17847.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17028__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17028__auto__){
return (function (){
var f__17029__auto__ = (function (){var switch__16902__auto__ = ((function (c__17028__auto__){
return (function (state_17874){
var state_val_17875 = (state_17874[(1)]);
if((state_val_17875 === (7))){
var inst_17856 = (state_17874[(2)]);
var state_17874__$1 = state_17874;
var statearr_17876_17903 = state_17874__$1;
(statearr_17876_17903[(2)] = inst_17856);

(statearr_17876_17903[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17875 === (1))){
var inst_17850 = cljs.core.seq(coll);
var inst_17851 = inst_17850;
var state_17874__$1 = (function (){var statearr_17877 = state_17874;
(statearr_17877[(7)] = inst_17851);

return statearr_17877;
})();
var statearr_17878_17904 = state_17874__$1;
(statearr_17878_17904[(2)] = null);

(statearr_17878_17904[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17875 === (4))){
var inst_17851 = (state_17874[(7)]);
var inst_17854 = cljs.core.first(inst_17851);
var state_17874__$1 = state_17874;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17874__$1,(7),ch,inst_17854);
} else {
if((state_val_17875 === (13))){
var inst_17868 = (state_17874[(2)]);
var state_17874__$1 = state_17874;
var statearr_17879_17905 = state_17874__$1;
(statearr_17879_17905[(2)] = inst_17868);

(statearr_17879_17905[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17875 === (6))){
var inst_17859 = (state_17874[(2)]);
var state_17874__$1 = state_17874;
if(cljs.core.truth_(inst_17859)){
var statearr_17880_17906 = state_17874__$1;
(statearr_17880_17906[(1)] = (8));

} else {
var statearr_17881_17907 = state_17874__$1;
(statearr_17881_17907[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17875 === (3))){
var inst_17872 = (state_17874[(2)]);
var state_17874__$1 = state_17874;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17874__$1,inst_17872);
} else {
if((state_val_17875 === (12))){
var state_17874__$1 = state_17874;
var statearr_17882_17908 = state_17874__$1;
(statearr_17882_17908[(2)] = null);

(statearr_17882_17908[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17875 === (2))){
var inst_17851 = (state_17874[(7)]);
var state_17874__$1 = state_17874;
if(cljs.core.truth_(inst_17851)){
var statearr_17883_17909 = state_17874__$1;
(statearr_17883_17909[(1)] = (4));

} else {
var statearr_17884_17910 = state_17874__$1;
(statearr_17884_17910[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17875 === (11))){
var inst_17865 = cljs.core.async.close_BANG_(ch);
var state_17874__$1 = state_17874;
var statearr_17885_17911 = state_17874__$1;
(statearr_17885_17911[(2)] = inst_17865);

(statearr_17885_17911[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17875 === (9))){
var state_17874__$1 = state_17874;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17886_17912 = state_17874__$1;
(statearr_17886_17912[(1)] = (11));

} else {
var statearr_17887_17913 = state_17874__$1;
(statearr_17887_17913[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17875 === (5))){
var inst_17851 = (state_17874[(7)]);
var state_17874__$1 = state_17874;
var statearr_17888_17914 = state_17874__$1;
(statearr_17888_17914[(2)] = inst_17851);

(statearr_17888_17914[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17875 === (10))){
var inst_17870 = (state_17874[(2)]);
var state_17874__$1 = state_17874;
var statearr_17889_17915 = state_17874__$1;
(statearr_17889_17915[(2)] = inst_17870);

(statearr_17889_17915[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17875 === (8))){
var inst_17851 = (state_17874[(7)]);
var inst_17861 = cljs.core.next(inst_17851);
var inst_17851__$1 = inst_17861;
var state_17874__$1 = (function (){var statearr_17890 = state_17874;
(statearr_17890[(7)] = inst_17851__$1);

return statearr_17890;
})();
var statearr_17891_17916 = state_17874__$1;
(statearr_17891_17916[(2)] = null);

(statearr_17891_17916[(1)] = (2));


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
});})(c__17028__auto__))
;
return ((function (switch__16902__auto__,c__17028__auto__){
return (function() {
var cljs$core$async$state_machine__16903__auto__ = null;
var cljs$core$async$state_machine__16903__auto____0 = (function (){
var statearr_17895 = [null,null,null,null,null,null,null,null];
(statearr_17895[(0)] = cljs$core$async$state_machine__16903__auto__);

(statearr_17895[(1)] = (1));

return statearr_17895;
});
var cljs$core$async$state_machine__16903__auto____1 = (function (state_17874){
while(true){
var ret_value__16904__auto__ = (function (){try{while(true){
var result__16905__auto__ = switch__16902__auto__(state_17874);
if(cljs.core.keyword_identical_QMARK_(result__16905__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16905__auto__;
}
break;
}
}catch (e17896){if((e17896 instanceof Object)){
var ex__16906__auto__ = e17896;
var statearr_17897_17917 = state_17874;
(statearr_17897_17917[(5)] = ex__16906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17874);

return cljs.core.cst$kw$recur;
} else {
throw e17896;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16904__auto__,cljs.core.cst$kw$recur)){
var G__17918 = state_17874;
state_17874 = G__17918;
continue;
} else {
return ret_value__16904__auto__;
}
break;
}
});
cljs$core$async$state_machine__16903__auto__ = function(state_17874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16903__auto____1.call(this,state_17874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16903__auto____0;
cljs$core$async$state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16903__auto____1;
return cljs$core$async$state_machine__16903__auto__;
})()
;})(switch__16902__auto__,c__17028__auto__))
})();
var state__17030__auto__ = (function (){var statearr_17898 = (f__17029__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17029__auto__.cljs$core$IFn$_invoke$arity$0() : f__17029__auto__.call(null));
(statearr_17898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17028__auto__);

return statearr_17898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
});})(c__17028__auto__))
);

return c__17028__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7798__auto__ = (((_ == null))?null:_);
var m__7799__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7798__auto__)]);
if(!((m__7799__auto__ == null))){
return (m__7799__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7799__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7799__auto__.call(null,_));
} else {
var m__7799__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7799__auto____$1 == null))){
return (m__7799__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7799__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7799__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7798__auto__ = (((m == null))?null:m);
var m__7799__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7798__auto__)]);
if(!((m__7799__auto__ == null))){
return (m__7799__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7799__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7799__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__7799__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7799__auto____$1 == null))){
return (m__7799__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7799__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7799__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7798__auto__ = (((m == null))?null:m);
var m__7799__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7798__auto__)]);
if(!((m__7799__auto__ == null))){
return (m__7799__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7799__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7799__auto__.call(null,m,ch));
} else {
var m__7799__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7799__auto____$1 == null))){
return (m__7799__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7799__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7799__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7798__auto__ = (((m == null))?null:m);
var m__7799__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7798__auto__)]);
if(!((m__7799__auto__ == null))){
return (m__7799__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7799__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7799__auto__.call(null,m));
} else {
var m__7799__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7799__auto____$1 == null))){
return (m__7799__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7799__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7799__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__18147 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18147) : cljs.core.atom.call(null,G__18147));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async18148 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18148 = (function (ch,cs,meta18149){
this.ch = ch;
this.cs = cs;
this.meta18149 = meta18149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18150,meta18149__$1){
var self__ = this;
var _18150__$1 = this;
return (new cljs.core.async.t_cljs$core$async18148(self__.ch,self__.cs,meta18149__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18148.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18150){
var self__ = this;
var _18150__$1 = this;
return self__.meta18149;
});})(cs))
;

cljs.core.async.t_cljs$core$async18148.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18148.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18148.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18148.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18148.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18148.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18151_18375 = self__.cs;
var G__18152_18376 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18151_18375,G__18152_18376) : cljs.core.reset_BANG_.call(null,G__18151_18375,G__18152_18376));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18148.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta18149], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18148.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18148";

cljs.core.async.t_cljs$core$async18148.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7737__auto__,writer__7738__auto__,opt__7739__auto__){
return cljs.core._write(writer__7738__auto__,"cljs.core.async/t_cljs$core$async18148");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18148 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18148(ch__$1,cs__$1,meta18149){
return (new cljs.core.async.t_cljs$core$async18148(ch__$1,cs__$1,meta18149));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18148(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__17028__auto___18377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17028__auto___18377,cs,m,dchan,dctr,done){
return (function (){
var f__17029__auto__ = (function (){var switch__16902__auto__ = ((function (c__17028__auto___18377,cs,m,dchan,dctr,done){
return (function (state_18287){
var state_val_18288 = (state_18287[(1)]);
if((state_val_18288 === (7))){
var inst_18283 = (state_18287[(2)]);
var state_18287__$1 = state_18287;
var statearr_18289_18378 = state_18287__$1;
(statearr_18289_18378[(2)] = inst_18283);

(statearr_18289_18378[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (20))){
var inst_18186 = (state_18287[(7)]);
var inst_18198 = cljs.core.first(inst_18186);
var inst_18199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18198,(0),null);
var inst_18200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18198,(1),null);
var state_18287__$1 = (function (){var statearr_18290 = state_18287;
(statearr_18290[(8)] = inst_18199);

return statearr_18290;
})();
if(cljs.core.truth_(inst_18200)){
var statearr_18291_18379 = state_18287__$1;
(statearr_18291_18379[(1)] = (22));

} else {
var statearr_18292_18380 = state_18287__$1;
(statearr_18292_18380[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (27))){
var inst_18230 = (state_18287[(9)]);
var inst_18155 = (state_18287[(10)]);
var inst_18228 = (state_18287[(11)]);
var inst_18235 = (state_18287[(12)]);
var inst_18235__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18228,inst_18230);
var inst_18236 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18235__$1,inst_18155,done);
var state_18287__$1 = (function (){var statearr_18293 = state_18287;
(statearr_18293[(12)] = inst_18235__$1);

return statearr_18293;
})();
if(cljs.core.truth_(inst_18236)){
var statearr_18294_18381 = state_18287__$1;
(statearr_18294_18381[(1)] = (30));

} else {
var statearr_18295_18382 = state_18287__$1;
(statearr_18295_18382[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (1))){
var state_18287__$1 = state_18287;
var statearr_18296_18383 = state_18287__$1;
(statearr_18296_18383[(2)] = null);

(statearr_18296_18383[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (24))){
var inst_18186 = (state_18287[(7)]);
var inst_18205 = (state_18287[(2)]);
var inst_18206 = cljs.core.next(inst_18186);
var inst_18164 = inst_18206;
var inst_18165 = null;
var inst_18166 = (0);
var inst_18167 = (0);
var state_18287__$1 = (function (){var statearr_18297 = state_18287;
(statearr_18297[(13)] = inst_18165);

(statearr_18297[(14)] = inst_18164);

(statearr_18297[(15)] = inst_18205);

(statearr_18297[(16)] = inst_18167);

(statearr_18297[(17)] = inst_18166);

return statearr_18297;
})();
var statearr_18298_18384 = state_18287__$1;
(statearr_18298_18384[(2)] = null);

(statearr_18298_18384[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (39))){
var state_18287__$1 = state_18287;
var statearr_18302_18385 = state_18287__$1;
(statearr_18302_18385[(2)] = null);

(statearr_18302_18385[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (4))){
var inst_18155 = (state_18287[(10)]);
var inst_18155__$1 = (state_18287[(2)]);
var inst_18156 = (inst_18155__$1 == null);
var state_18287__$1 = (function (){var statearr_18303 = state_18287;
(statearr_18303[(10)] = inst_18155__$1);

return statearr_18303;
})();
if(cljs.core.truth_(inst_18156)){
var statearr_18304_18386 = state_18287__$1;
(statearr_18304_18386[(1)] = (5));

} else {
var statearr_18305_18387 = state_18287__$1;
(statearr_18305_18387[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (15))){
var inst_18165 = (state_18287[(13)]);
var inst_18164 = (state_18287[(14)]);
var inst_18167 = (state_18287[(16)]);
var inst_18166 = (state_18287[(17)]);
var inst_18182 = (state_18287[(2)]);
var inst_18183 = (inst_18167 + (1));
var tmp18299 = inst_18165;
var tmp18300 = inst_18164;
var tmp18301 = inst_18166;
var inst_18164__$1 = tmp18300;
var inst_18165__$1 = tmp18299;
var inst_18166__$1 = tmp18301;
var inst_18167__$1 = inst_18183;
var state_18287__$1 = (function (){var statearr_18306 = state_18287;
(statearr_18306[(13)] = inst_18165__$1);

(statearr_18306[(14)] = inst_18164__$1);

(statearr_18306[(16)] = inst_18167__$1);

(statearr_18306[(18)] = inst_18182);

(statearr_18306[(17)] = inst_18166__$1);

return statearr_18306;
})();
var statearr_18307_18388 = state_18287__$1;
(statearr_18307_18388[(2)] = null);

(statearr_18307_18388[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (21))){
var inst_18209 = (state_18287[(2)]);
var state_18287__$1 = state_18287;
var statearr_18311_18389 = state_18287__$1;
(statearr_18311_18389[(2)] = inst_18209);

(statearr_18311_18389[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (31))){
var inst_18235 = (state_18287[(12)]);
var inst_18239 = done(null);
var inst_18240 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18235);
var state_18287__$1 = (function (){var statearr_18312 = state_18287;
(statearr_18312[(19)] = inst_18239);

return statearr_18312;
})();
var statearr_18313_18390 = state_18287__$1;
(statearr_18313_18390[(2)] = inst_18240);

(statearr_18313_18390[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (32))){
var inst_18230 = (state_18287[(9)]);
var inst_18229 = (state_18287[(20)]);
var inst_18228 = (state_18287[(11)]);
var inst_18227 = (state_18287[(21)]);
var inst_18242 = (state_18287[(2)]);
var inst_18243 = (inst_18230 + (1));
var tmp18308 = inst_18229;
var tmp18309 = inst_18228;
var tmp18310 = inst_18227;
var inst_18227__$1 = tmp18310;
var inst_18228__$1 = tmp18309;
var inst_18229__$1 = tmp18308;
var inst_18230__$1 = inst_18243;
var state_18287__$1 = (function (){var statearr_18314 = state_18287;
(statearr_18314[(9)] = inst_18230__$1);

(statearr_18314[(20)] = inst_18229__$1);

(statearr_18314[(22)] = inst_18242);

(statearr_18314[(11)] = inst_18228__$1);

(statearr_18314[(21)] = inst_18227__$1);

return statearr_18314;
})();
var statearr_18315_18391 = state_18287__$1;
(statearr_18315_18391[(2)] = null);

(statearr_18315_18391[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (40))){
var inst_18255 = (state_18287[(23)]);
var inst_18259 = done(null);
var inst_18260 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18255);
var state_18287__$1 = (function (){var statearr_18316 = state_18287;
(statearr_18316[(24)] = inst_18259);

return statearr_18316;
})();
var statearr_18317_18392 = state_18287__$1;
(statearr_18317_18392[(2)] = inst_18260);

(statearr_18317_18392[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (33))){
var inst_18246 = (state_18287[(25)]);
var inst_18248 = cljs.core.chunked_seq_QMARK_(inst_18246);
var state_18287__$1 = state_18287;
if(inst_18248){
var statearr_18318_18393 = state_18287__$1;
(statearr_18318_18393[(1)] = (36));

} else {
var statearr_18319_18394 = state_18287__$1;
(statearr_18319_18394[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (13))){
var inst_18176 = (state_18287[(26)]);
var inst_18179 = cljs.core.async.close_BANG_(inst_18176);
var state_18287__$1 = state_18287;
var statearr_18320_18395 = state_18287__$1;
(statearr_18320_18395[(2)] = inst_18179);

(statearr_18320_18395[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (22))){
var inst_18199 = (state_18287[(8)]);
var inst_18202 = cljs.core.async.close_BANG_(inst_18199);
var state_18287__$1 = state_18287;
var statearr_18321_18396 = state_18287__$1;
(statearr_18321_18396[(2)] = inst_18202);

(statearr_18321_18396[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (36))){
var inst_18246 = (state_18287[(25)]);
var inst_18250 = cljs.core.chunk_first(inst_18246);
var inst_18251 = cljs.core.chunk_rest(inst_18246);
var inst_18252 = cljs.core.count(inst_18250);
var inst_18227 = inst_18251;
var inst_18228 = inst_18250;
var inst_18229 = inst_18252;
var inst_18230 = (0);
var state_18287__$1 = (function (){var statearr_18322 = state_18287;
(statearr_18322[(9)] = inst_18230);

(statearr_18322[(20)] = inst_18229);

(statearr_18322[(11)] = inst_18228);

(statearr_18322[(21)] = inst_18227);

return statearr_18322;
})();
var statearr_18323_18397 = state_18287__$1;
(statearr_18323_18397[(2)] = null);

(statearr_18323_18397[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (41))){
var inst_18246 = (state_18287[(25)]);
var inst_18262 = (state_18287[(2)]);
var inst_18263 = cljs.core.next(inst_18246);
var inst_18227 = inst_18263;
var inst_18228 = null;
var inst_18229 = (0);
var inst_18230 = (0);
var state_18287__$1 = (function (){var statearr_18324 = state_18287;
(statearr_18324[(9)] = inst_18230);

(statearr_18324[(20)] = inst_18229);

(statearr_18324[(27)] = inst_18262);

(statearr_18324[(11)] = inst_18228);

(statearr_18324[(21)] = inst_18227);

return statearr_18324;
})();
var statearr_18325_18398 = state_18287__$1;
(statearr_18325_18398[(2)] = null);

(statearr_18325_18398[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (43))){
var state_18287__$1 = state_18287;
var statearr_18326_18399 = state_18287__$1;
(statearr_18326_18399[(2)] = null);

(statearr_18326_18399[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (29))){
var inst_18271 = (state_18287[(2)]);
var state_18287__$1 = state_18287;
var statearr_18327_18400 = state_18287__$1;
(statearr_18327_18400[(2)] = inst_18271);

(statearr_18327_18400[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (44))){
var inst_18280 = (state_18287[(2)]);
var state_18287__$1 = (function (){var statearr_18328 = state_18287;
(statearr_18328[(28)] = inst_18280);

return statearr_18328;
})();
var statearr_18329_18401 = state_18287__$1;
(statearr_18329_18401[(2)] = null);

(statearr_18329_18401[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (6))){
var inst_18219 = (state_18287[(29)]);
var inst_18218 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_18219__$1 = cljs.core.keys(inst_18218);
var inst_18220 = cljs.core.count(inst_18219__$1);
var inst_18221 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_18220) : cljs.core.reset_BANG_.call(null,dctr,inst_18220));
var inst_18226 = cljs.core.seq(inst_18219__$1);
var inst_18227 = inst_18226;
var inst_18228 = null;
var inst_18229 = (0);
var inst_18230 = (0);
var state_18287__$1 = (function (){var statearr_18330 = state_18287;
(statearr_18330[(9)] = inst_18230);

(statearr_18330[(20)] = inst_18229);

(statearr_18330[(29)] = inst_18219__$1);

(statearr_18330[(30)] = inst_18221);

(statearr_18330[(11)] = inst_18228);

(statearr_18330[(21)] = inst_18227);

return statearr_18330;
})();
var statearr_18331_18402 = state_18287__$1;
(statearr_18331_18402[(2)] = null);

(statearr_18331_18402[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (28))){
var inst_18246 = (state_18287[(25)]);
var inst_18227 = (state_18287[(21)]);
var inst_18246__$1 = cljs.core.seq(inst_18227);
var state_18287__$1 = (function (){var statearr_18332 = state_18287;
(statearr_18332[(25)] = inst_18246__$1);

return statearr_18332;
})();
if(inst_18246__$1){
var statearr_18333_18403 = state_18287__$1;
(statearr_18333_18403[(1)] = (33));

} else {
var statearr_18334_18404 = state_18287__$1;
(statearr_18334_18404[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (25))){
var inst_18230 = (state_18287[(9)]);
var inst_18229 = (state_18287[(20)]);
var inst_18232 = (inst_18230 < inst_18229);
var inst_18233 = inst_18232;
var state_18287__$1 = state_18287;
if(cljs.core.truth_(inst_18233)){
var statearr_18335_18405 = state_18287__$1;
(statearr_18335_18405[(1)] = (27));

} else {
var statearr_18336_18406 = state_18287__$1;
(statearr_18336_18406[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (34))){
var state_18287__$1 = state_18287;
var statearr_18337_18407 = state_18287__$1;
(statearr_18337_18407[(2)] = null);

(statearr_18337_18407[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (17))){
var state_18287__$1 = state_18287;
var statearr_18338_18408 = state_18287__$1;
(statearr_18338_18408[(2)] = null);

(statearr_18338_18408[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (3))){
var inst_18285 = (state_18287[(2)]);
var state_18287__$1 = state_18287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18287__$1,inst_18285);
} else {
if((state_val_18288 === (12))){
var inst_18214 = (state_18287[(2)]);
var state_18287__$1 = state_18287;
var statearr_18339_18409 = state_18287__$1;
(statearr_18339_18409[(2)] = inst_18214);

(statearr_18339_18409[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (2))){
var state_18287__$1 = state_18287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18287__$1,(4),ch);
} else {
if((state_val_18288 === (23))){
var state_18287__$1 = state_18287;
var statearr_18340_18410 = state_18287__$1;
(statearr_18340_18410[(2)] = null);

(statearr_18340_18410[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (35))){
var inst_18269 = (state_18287[(2)]);
var state_18287__$1 = state_18287;
var statearr_18341_18411 = state_18287__$1;
(statearr_18341_18411[(2)] = inst_18269);

(statearr_18341_18411[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (19))){
var inst_18186 = (state_18287[(7)]);
var inst_18190 = cljs.core.chunk_first(inst_18186);
var inst_18191 = cljs.core.chunk_rest(inst_18186);
var inst_18192 = cljs.core.count(inst_18190);
var inst_18164 = inst_18191;
var inst_18165 = inst_18190;
var inst_18166 = inst_18192;
var inst_18167 = (0);
var state_18287__$1 = (function (){var statearr_18342 = state_18287;
(statearr_18342[(13)] = inst_18165);

(statearr_18342[(14)] = inst_18164);

(statearr_18342[(16)] = inst_18167);

(statearr_18342[(17)] = inst_18166);

return statearr_18342;
})();
var statearr_18343_18412 = state_18287__$1;
(statearr_18343_18412[(2)] = null);

(statearr_18343_18412[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (11))){
var inst_18164 = (state_18287[(14)]);
var inst_18186 = (state_18287[(7)]);
var inst_18186__$1 = cljs.core.seq(inst_18164);
var state_18287__$1 = (function (){var statearr_18344 = state_18287;
(statearr_18344[(7)] = inst_18186__$1);

return statearr_18344;
})();
if(inst_18186__$1){
var statearr_18345_18413 = state_18287__$1;
(statearr_18345_18413[(1)] = (16));

} else {
var statearr_18346_18414 = state_18287__$1;
(statearr_18346_18414[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (9))){
var inst_18216 = (state_18287[(2)]);
var state_18287__$1 = state_18287;
var statearr_18347_18415 = state_18287__$1;
(statearr_18347_18415[(2)] = inst_18216);

(statearr_18347_18415[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (5))){
var inst_18162 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_18163 = cljs.core.seq(inst_18162);
var inst_18164 = inst_18163;
var inst_18165 = null;
var inst_18166 = (0);
var inst_18167 = (0);
var state_18287__$1 = (function (){var statearr_18348 = state_18287;
(statearr_18348[(13)] = inst_18165);

(statearr_18348[(14)] = inst_18164);

(statearr_18348[(16)] = inst_18167);

(statearr_18348[(17)] = inst_18166);

return statearr_18348;
})();
var statearr_18349_18416 = state_18287__$1;
(statearr_18349_18416[(2)] = null);

(statearr_18349_18416[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (14))){
var state_18287__$1 = state_18287;
var statearr_18350_18417 = state_18287__$1;
(statearr_18350_18417[(2)] = null);

(statearr_18350_18417[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (45))){
var inst_18277 = (state_18287[(2)]);
var state_18287__$1 = state_18287;
var statearr_18351_18418 = state_18287__$1;
(statearr_18351_18418[(2)] = inst_18277);

(statearr_18351_18418[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (26))){
var inst_18219 = (state_18287[(29)]);
var inst_18273 = (state_18287[(2)]);
var inst_18274 = cljs.core.seq(inst_18219);
var state_18287__$1 = (function (){var statearr_18352 = state_18287;
(statearr_18352[(31)] = inst_18273);

return statearr_18352;
})();
if(inst_18274){
var statearr_18353_18419 = state_18287__$1;
(statearr_18353_18419[(1)] = (42));

} else {
var statearr_18354_18420 = state_18287__$1;
(statearr_18354_18420[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (16))){
var inst_18186 = (state_18287[(7)]);
var inst_18188 = cljs.core.chunked_seq_QMARK_(inst_18186);
var state_18287__$1 = state_18287;
if(inst_18188){
var statearr_18355_18421 = state_18287__$1;
(statearr_18355_18421[(1)] = (19));

} else {
var statearr_18356_18422 = state_18287__$1;
(statearr_18356_18422[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (38))){
var inst_18266 = (state_18287[(2)]);
var state_18287__$1 = state_18287;
var statearr_18357_18423 = state_18287__$1;
(statearr_18357_18423[(2)] = inst_18266);

(statearr_18357_18423[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (30))){
var state_18287__$1 = state_18287;
var statearr_18358_18424 = state_18287__$1;
(statearr_18358_18424[(2)] = null);

(statearr_18358_18424[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (10))){
var inst_18165 = (state_18287[(13)]);
var inst_18167 = (state_18287[(16)]);
var inst_18175 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18165,inst_18167);
var inst_18176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18175,(0),null);
var inst_18177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18175,(1),null);
var state_18287__$1 = (function (){var statearr_18359 = state_18287;
(statearr_18359[(26)] = inst_18176);

return statearr_18359;
})();
if(cljs.core.truth_(inst_18177)){
var statearr_18360_18425 = state_18287__$1;
(statearr_18360_18425[(1)] = (13));

} else {
var statearr_18361_18426 = state_18287__$1;
(statearr_18361_18426[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (18))){
var inst_18212 = (state_18287[(2)]);
var state_18287__$1 = state_18287;
var statearr_18362_18427 = state_18287__$1;
(statearr_18362_18427[(2)] = inst_18212);

(statearr_18362_18427[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (42))){
var state_18287__$1 = state_18287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18287__$1,(45),dchan);
} else {
if((state_val_18288 === (37))){
var inst_18246 = (state_18287[(25)]);
var inst_18255 = (state_18287[(23)]);
var inst_18155 = (state_18287[(10)]);
var inst_18255__$1 = cljs.core.first(inst_18246);
var inst_18256 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18255__$1,inst_18155,done);
var state_18287__$1 = (function (){var statearr_18363 = state_18287;
(statearr_18363[(23)] = inst_18255__$1);

return statearr_18363;
})();
if(cljs.core.truth_(inst_18256)){
var statearr_18364_18428 = state_18287__$1;
(statearr_18364_18428[(1)] = (39));

} else {
var statearr_18365_18429 = state_18287__$1;
(statearr_18365_18429[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18288 === (8))){
var inst_18167 = (state_18287[(16)]);
var inst_18166 = (state_18287[(17)]);
var inst_18169 = (inst_18167 < inst_18166);
var inst_18170 = inst_18169;
var state_18287__$1 = state_18287;
if(cljs.core.truth_(inst_18170)){
var statearr_18366_18430 = state_18287__$1;
(statearr_18366_18430[(1)] = (10));

} else {
var statearr_18367_18431 = state_18287__$1;
(statearr_18367_18431[(1)] = (11));

}

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
});})(c__17028__auto___18377,cs,m,dchan,dctr,done))
;
return ((function (switch__16902__auto__,c__17028__auto___18377,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16903__auto__ = null;
var cljs$core$async$mult_$_state_machine__16903__auto____0 = (function (){
var statearr_18371 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18371[(0)] = cljs$core$async$mult_$_state_machine__16903__auto__);

(statearr_18371[(1)] = (1));

return statearr_18371;
});
var cljs$core$async$mult_$_state_machine__16903__auto____1 = (function (state_18287){
while(true){
var ret_value__16904__auto__ = (function (){try{while(true){
var result__16905__auto__ = switch__16902__auto__(state_18287);
if(cljs.core.keyword_identical_QMARK_(result__16905__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16905__auto__;
}
break;
}
}catch (e18372){if((e18372 instanceof Object)){
var ex__16906__auto__ = e18372;
var statearr_18373_18432 = state_18287;
(statearr_18373_18432[(5)] = ex__16906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18287);

return cljs.core.cst$kw$recur;
} else {
throw e18372;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16904__auto__,cljs.core.cst$kw$recur)){
var G__18433 = state_18287;
state_18287 = G__18433;
continue;
} else {
return ret_value__16904__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16903__auto__ = function(state_18287){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16903__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16903__auto____1.call(this,state_18287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16903__auto____0;
cljs$core$async$mult_$_state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16903__auto____1;
return cljs$core$async$mult_$_state_machine__16903__auto__;
})()
;})(switch__16902__auto__,c__17028__auto___18377,cs,m,dchan,dctr,done))
})();
var state__17030__auto__ = (function (){var statearr_18374 = (f__17029__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17029__auto__.cljs$core$IFn$_invoke$arity$0() : f__17029__auto__.call(null));
(statearr_18374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17028__auto___18377);

return statearr_18374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
});})(c__17028__auto___18377,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args18434 = [];
var len__8301__auto___18437 = arguments.length;
var i__8302__auto___18438 = (0);
while(true){
if((i__8302__auto___18438 < len__8301__auto___18437)){
args18434.push((arguments[i__8302__auto___18438]));

var G__18439 = (i__8302__auto___18438 + (1));
i__8302__auto___18438 = G__18439;
continue;
} else {
}
break;
}

var G__18436 = args18434.length;
switch (G__18436) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18434.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7798__auto__ = (((m == null))?null:m);
var m__7799__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7798__auto__)]);
if(!((m__7799__auto__ == null))){
return (m__7799__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7799__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7799__auto__.call(null,m,ch));
} else {
var m__7799__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7799__auto____$1 == null))){
return (m__7799__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7799__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7799__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7798__auto__ = (((m == null))?null:m);
var m__7799__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7798__auto__)]);
if(!((m__7799__auto__ == null))){
return (m__7799__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7799__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7799__auto__.call(null,m,ch));
} else {
var m__7799__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7799__auto____$1 == null))){
return (m__7799__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7799__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7799__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7798__auto__ = (((m == null))?null:m);
var m__7799__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7798__auto__)]);
if(!((m__7799__auto__ == null))){
return (m__7799__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7799__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7799__auto__.call(null,m));
} else {
var m__7799__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7799__auto____$1 == null))){
return (m__7799__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7799__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7799__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7798__auto__ = (((m == null))?null:m);
var m__7799__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7798__auto__)]);
if(!((m__7799__auto__ == null))){
return (m__7799__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7799__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7799__auto__.call(null,m,state_map));
} else {
var m__7799__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7799__auto____$1 == null))){
return (m__7799__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7799__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7799__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7798__auto__ = (((m == null))?null:m);
var m__7799__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7798__auto__)]);
if(!((m__7799__auto__ == null))){
return (m__7799__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7799__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7799__auto__.call(null,m,mode));
} else {
var m__7799__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7799__auto____$1 == null))){
return (m__7799__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7799__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7799__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__8308__auto__ = [];
var len__8301__auto___18451 = arguments.length;
var i__8302__auto___18452 = (0);
while(true){
if((i__8302__auto___18452 < len__8301__auto___18451)){
args__8308__auto__.push((arguments[i__8302__auto___18452]));

var G__18453 = (i__8302__auto___18452 + (1));
i__8302__auto___18452 = G__18453;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((3) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8309__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18445){
var map__18446 = p__18445;
var map__18446__$1 = ((((!((map__18446 == null)))?((((map__18446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18446):map__18446);
var opts = map__18446__$1;
var statearr_18448_18454 = state;
(statearr_18448_18454[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts(((function (map__18446,map__18446__$1,opts){
return (function (val){
var statearr_18449_18455 = state;
(statearr_18449_18455[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__18446,map__18446__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_18450_18456 = state;
(statearr_18450_18456[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18441){
var G__18442 = cljs.core.first(seq18441);
var seq18441__$1 = cljs.core.next(seq18441);
var G__18443 = cljs.core.first(seq18441__$1);
var seq18441__$2 = cljs.core.next(seq18441__$1);
var G__18444 = cljs.core.first(seq18441__$2);
var seq18441__$3 = cljs.core.next(seq18441__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18442,G__18443,G__18444,seq18441__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__18628 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18628) : cljs.core.atom.call(null,G__18628));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__18629 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18629) : cljs.core.atom.call(null,G__18629));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async18630 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18630 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta18631){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta18631 = meta18631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18632,meta18631__$1){
var self__ = this;
var _18632__$1 = this;
return (new cljs.core.async.t_cljs$core$async18630(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta18631__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18630.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18632){
var self__ = this;
var _18632__$1 = this;
return self__.meta18631;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18630.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18630.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18630.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18630.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18630.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18630.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18633_18799 = self__.cs;
var G__18634_18800 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18633_18799,G__18634_18800) : cljs.core.reset_BANG_.call(null,G__18633_18799,G__18634_18800));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18630.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18630.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18630.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta18631], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18630.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18630.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18630";

cljs.core.async.t_cljs$core$async18630.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7737__auto__,writer__7738__auto__,opt__7739__auto__){
return cljs.core._write(writer__7738__auto__,"cljs.core.async/t_cljs$core$async18630");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18630 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18630(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18631){
return (new cljs.core.async.t_cljs$core$async18630(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18631));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18630(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17028__auto___18801 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17028__auto___18801,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17029__auto__ = (function (){var switch__16902__auto__ = ((function (c__17028__auto___18801,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18736){
var state_val_18737 = (state_18736[(1)]);
if((state_val_18737 === (7))){
var inst_18651 = (state_18736[(2)]);
var state_18736__$1 = state_18736;
var statearr_18738_18802 = state_18736__$1;
(statearr_18738_18802[(2)] = inst_18651);

(statearr_18738_18802[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (20))){
var inst_18663 = (state_18736[(7)]);
var state_18736__$1 = state_18736;
var statearr_18739_18803 = state_18736__$1;
(statearr_18739_18803[(2)] = inst_18663);

(statearr_18739_18803[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (27))){
var state_18736__$1 = state_18736;
var statearr_18740_18804 = state_18736__$1;
(statearr_18740_18804[(2)] = null);

(statearr_18740_18804[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (1))){
var inst_18638 = (state_18736[(8)]);
var inst_18638__$1 = calc_state();
var inst_18640 = (inst_18638__$1 == null);
var inst_18641 = cljs.core.not(inst_18640);
var state_18736__$1 = (function (){var statearr_18741 = state_18736;
(statearr_18741[(8)] = inst_18638__$1);

return statearr_18741;
})();
if(inst_18641){
var statearr_18742_18805 = state_18736__$1;
(statearr_18742_18805[(1)] = (2));

} else {
var statearr_18743_18806 = state_18736__$1;
(statearr_18743_18806[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (24))){
var inst_18696 = (state_18736[(9)]);
var inst_18687 = (state_18736[(10)]);
var inst_18710 = (state_18736[(11)]);
var inst_18710__$1 = (inst_18687.cljs$core$IFn$_invoke$arity$1 ? inst_18687.cljs$core$IFn$_invoke$arity$1(inst_18696) : inst_18687.call(null,inst_18696));
var state_18736__$1 = (function (){var statearr_18744 = state_18736;
(statearr_18744[(11)] = inst_18710__$1);

return statearr_18744;
})();
if(cljs.core.truth_(inst_18710__$1)){
var statearr_18745_18807 = state_18736__$1;
(statearr_18745_18807[(1)] = (29));

} else {
var statearr_18746_18808 = state_18736__$1;
(statearr_18746_18808[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (4))){
var inst_18654 = (state_18736[(2)]);
var state_18736__$1 = state_18736;
if(cljs.core.truth_(inst_18654)){
var statearr_18747_18809 = state_18736__$1;
(statearr_18747_18809[(1)] = (8));

} else {
var statearr_18748_18810 = state_18736__$1;
(statearr_18748_18810[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (15))){
var inst_18681 = (state_18736[(2)]);
var state_18736__$1 = state_18736;
if(cljs.core.truth_(inst_18681)){
var statearr_18749_18811 = state_18736__$1;
(statearr_18749_18811[(1)] = (19));

} else {
var statearr_18750_18812 = state_18736__$1;
(statearr_18750_18812[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (21))){
var inst_18686 = (state_18736[(12)]);
var inst_18686__$1 = (state_18736[(2)]);
var inst_18687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18686__$1,cljs.core.cst$kw$solos);
var inst_18688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18686__$1,cljs.core.cst$kw$mutes);
var inst_18689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18686__$1,cljs.core.cst$kw$reads);
var state_18736__$1 = (function (){var statearr_18751 = state_18736;
(statearr_18751[(13)] = inst_18688);

(statearr_18751[(10)] = inst_18687);

(statearr_18751[(12)] = inst_18686__$1);

return statearr_18751;
})();
return cljs.core.async.ioc_alts_BANG_(state_18736__$1,(22),inst_18689);
} else {
if((state_val_18737 === (31))){
var inst_18718 = (state_18736[(2)]);
var state_18736__$1 = state_18736;
if(cljs.core.truth_(inst_18718)){
var statearr_18752_18813 = state_18736__$1;
(statearr_18752_18813[(1)] = (32));

} else {
var statearr_18753_18814 = state_18736__$1;
(statearr_18753_18814[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (32))){
var inst_18695 = (state_18736[(14)]);
var state_18736__$1 = state_18736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18736__$1,(35),out,inst_18695);
} else {
if((state_val_18737 === (33))){
var inst_18686 = (state_18736[(12)]);
var inst_18663 = inst_18686;
var state_18736__$1 = (function (){var statearr_18754 = state_18736;
(statearr_18754[(7)] = inst_18663);

return statearr_18754;
})();
var statearr_18755_18815 = state_18736__$1;
(statearr_18755_18815[(2)] = null);

(statearr_18755_18815[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (13))){
var inst_18663 = (state_18736[(7)]);
var inst_18670 = inst_18663.cljs$lang$protocol_mask$partition0$;
var inst_18671 = (inst_18670 & (64));
var inst_18672 = inst_18663.cljs$core$ISeq$;
var inst_18673 = (cljs.core.PROTOCOL_SENTINEL === inst_18672);
var inst_18674 = (inst_18671) || (inst_18673);
var state_18736__$1 = state_18736;
if(cljs.core.truth_(inst_18674)){
var statearr_18756_18816 = state_18736__$1;
(statearr_18756_18816[(1)] = (16));

} else {
var statearr_18757_18817 = state_18736__$1;
(statearr_18757_18817[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (22))){
var inst_18695 = (state_18736[(14)]);
var inst_18696 = (state_18736[(9)]);
var inst_18694 = (state_18736[(2)]);
var inst_18695__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18694,(0),null);
var inst_18696__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18694,(1),null);
var inst_18697 = (inst_18695__$1 == null);
var inst_18698 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18696__$1,change);
var inst_18699 = (inst_18697) || (inst_18698);
var state_18736__$1 = (function (){var statearr_18758 = state_18736;
(statearr_18758[(14)] = inst_18695__$1);

(statearr_18758[(9)] = inst_18696__$1);

return statearr_18758;
})();
if(cljs.core.truth_(inst_18699)){
var statearr_18759_18818 = state_18736__$1;
(statearr_18759_18818[(1)] = (23));

} else {
var statearr_18760_18819 = state_18736__$1;
(statearr_18760_18819[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (36))){
var inst_18686 = (state_18736[(12)]);
var inst_18663 = inst_18686;
var state_18736__$1 = (function (){var statearr_18761 = state_18736;
(statearr_18761[(7)] = inst_18663);

return statearr_18761;
})();
var statearr_18762_18820 = state_18736__$1;
(statearr_18762_18820[(2)] = null);

(statearr_18762_18820[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (29))){
var inst_18710 = (state_18736[(11)]);
var state_18736__$1 = state_18736;
var statearr_18763_18821 = state_18736__$1;
(statearr_18763_18821[(2)] = inst_18710);

(statearr_18763_18821[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (6))){
var state_18736__$1 = state_18736;
var statearr_18764_18822 = state_18736__$1;
(statearr_18764_18822[(2)] = false);

(statearr_18764_18822[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (28))){
var inst_18706 = (state_18736[(2)]);
var inst_18707 = calc_state();
var inst_18663 = inst_18707;
var state_18736__$1 = (function (){var statearr_18765 = state_18736;
(statearr_18765[(15)] = inst_18706);

(statearr_18765[(7)] = inst_18663);

return statearr_18765;
})();
var statearr_18766_18823 = state_18736__$1;
(statearr_18766_18823[(2)] = null);

(statearr_18766_18823[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (25))){
var inst_18732 = (state_18736[(2)]);
var state_18736__$1 = state_18736;
var statearr_18767_18824 = state_18736__$1;
(statearr_18767_18824[(2)] = inst_18732);

(statearr_18767_18824[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (34))){
var inst_18730 = (state_18736[(2)]);
var state_18736__$1 = state_18736;
var statearr_18768_18825 = state_18736__$1;
(statearr_18768_18825[(2)] = inst_18730);

(statearr_18768_18825[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (17))){
var state_18736__$1 = state_18736;
var statearr_18769_18826 = state_18736__$1;
(statearr_18769_18826[(2)] = false);

(statearr_18769_18826[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (3))){
var state_18736__$1 = state_18736;
var statearr_18770_18827 = state_18736__$1;
(statearr_18770_18827[(2)] = false);

(statearr_18770_18827[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (12))){
var inst_18734 = (state_18736[(2)]);
var state_18736__$1 = state_18736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18736__$1,inst_18734);
} else {
if((state_val_18737 === (2))){
var inst_18638 = (state_18736[(8)]);
var inst_18643 = inst_18638.cljs$lang$protocol_mask$partition0$;
var inst_18644 = (inst_18643 & (64));
var inst_18645 = inst_18638.cljs$core$ISeq$;
var inst_18646 = (cljs.core.PROTOCOL_SENTINEL === inst_18645);
var inst_18647 = (inst_18644) || (inst_18646);
var state_18736__$1 = state_18736;
if(cljs.core.truth_(inst_18647)){
var statearr_18771_18828 = state_18736__$1;
(statearr_18771_18828[(1)] = (5));

} else {
var statearr_18772_18829 = state_18736__$1;
(statearr_18772_18829[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (23))){
var inst_18695 = (state_18736[(14)]);
var inst_18701 = (inst_18695 == null);
var state_18736__$1 = state_18736;
if(cljs.core.truth_(inst_18701)){
var statearr_18773_18830 = state_18736__$1;
(statearr_18773_18830[(1)] = (26));

} else {
var statearr_18774_18831 = state_18736__$1;
(statearr_18774_18831[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (35))){
var inst_18721 = (state_18736[(2)]);
var state_18736__$1 = state_18736;
if(cljs.core.truth_(inst_18721)){
var statearr_18775_18832 = state_18736__$1;
(statearr_18775_18832[(1)] = (36));

} else {
var statearr_18776_18833 = state_18736__$1;
(statearr_18776_18833[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (19))){
var inst_18663 = (state_18736[(7)]);
var inst_18683 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18663);
var state_18736__$1 = state_18736;
var statearr_18777_18834 = state_18736__$1;
(statearr_18777_18834[(2)] = inst_18683);

(statearr_18777_18834[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (11))){
var inst_18663 = (state_18736[(7)]);
var inst_18667 = (inst_18663 == null);
var inst_18668 = cljs.core.not(inst_18667);
var state_18736__$1 = state_18736;
if(inst_18668){
var statearr_18778_18835 = state_18736__$1;
(statearr_18778_18835[(1)] = (13));

} else {
var statearr_18779_18836 = state_18736__$1;
(statearr_18779_18836[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (9))){
var inst_18638 = (state_18736[(8)]);
var state_18736__$1 = state_18736;
var statearr_18780_18837 = state_18736__$1;
(statearr_18780_18837[(2)] = inst_18638);

(statearr_18780_18837[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (5))){
var state_18736__$1 = state_18736;
var statearr_18781_18838 = state_18736__$1;
(statearr_18781_18838[(2)] = true);

(statearr_18781_18838[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (14))){
var state_18736__$1 = state_18736;
var statearr_18782_18839 = state_18736__$1;
(statearr_18782_18839[(2)] = false);

(statearr_18782_18839[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (26))){
var inst_18696 = (state_18736[(9)]);
var inst_18703 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18696);
var state_18736__$1 = state_18736;
var statearr_18783_18840 = state_18736__$1;
(statearr_18783_18840[(2)] = inst_18703);

(statearr_18783_18840[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (16))){
var state_18736__$1 = state_18736;
var statearr_18784_18841 = state_18736__$1;
(statearr_18784_18841[(2)] = true);

(statearr_18784_18841[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (38))){
var inst_18726 = (state_18736[(2)]);
var state_18736__$1 = state_18736;
var statearr_18785_18842 = state_18736__$1;
(statearr_18785_18842[(2)] = inst_18726);

(statearr_18785_18842[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (30))){
var inst_18688 = (state_18736[(13)]);
var inst_18696 = (state_18736[(9)]);
var inst_18687 = (state_18736[(10)]);
var inst_18713 = cljs.core.empty_QMARK_(inst_18687);
var inst_18714 = (inst_18688.cljs$core$IFn$_invoke$arity$1 ? inst_18688.cljs$core$IFn$_invoke$arity$1(inst_18696) : inst_18688.call(null,inst_18696));
var inst_18715 = cljs.core.not(inst_18714);
var inst_18716 = (inst_18713) && (inst_18715);
var state_18736__$1 = state_18736;
var statearr_18786_18843 = state_18736__$1;
(statearr_18786_18843[(2)] = inst_18716);

(statearr_18786_18843[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (10))){
var inst_18638 = (state_18736[(8)]);
var inst_18659 = (state_18736[(2)]);
var inst_18660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18659,cljs.core.cst$kw$solos);
var inst_18661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18659,cljs.core.cst$kw$mutes);
var inst_18662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18659,cljs.core.cst$kw$reads);
var inst_18663 = inst_18638;
var state_18736__$1 = (function (){var statearr_18787 = state_18736;
(statearr_18787[(16)] = inst_18662);

(statearr_18787[(17)] = inst_18660);

(statearr_18787[(18)] = inst_18661);

(statearr_18787[(7)] = inst_18663);

return statearr_18787;
})();
var statearr_18788_18844 = state_18736__$1;
(statearr_18788_18844[(2)] = null);

(statearr_18788_18844[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (18))){
var inst_18678 = (state_18736[(2)]);
var state_18736__$1 = state_18736;
var statearr_18789_18845 = state_18736__$1;
(statearr_18789_18845[(2)] = inst_18678);

(statearr_18789_18845[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (37))){
var state_18736__$1 = state_18736;
var statearr_18790_18846 = state_18736__$1;
(statearr_18790_18846[(2)] = null);

(statearr_18790_18846[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18737 === (8))){
var inst_18638 = (state_18736[(8)]);
var inst_18656 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18638);
var state_18736__$1 = state_18736;
var statearr_18791_18847 = state_18736__$1;
(statearr_18791_18847[(2)] = inst_18656);

(statearr_18791_18847[(1)] = (10));


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
}
}
}
}
}
}
}
}
});})(c__17028__auto___18801,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16902__auto__,c__17028__auto___18801,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16903__auto__ = null;
var cljs$core$async$mix_$_state_machine__16903__auto____0 = (function (){
var statearr_18795 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18795[(0)] = cljs$core$async$mix_$_state_machine__16903__auto__);

(statearr_18795[(1)] = (1));

return statearr_18795;
});
var cljs$core$async$mix_$_state_machine__16903__auto____1 = (function (state_18736){
while(true){
var ret_value__16904__auto__ = (function (){try{while(true){
var result__16905__auto__ = switch__16902__auto__(state_18736);
if(cljs.core.keyword_identical_QMARK_(result__16905__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16905__auto__;
}
break;
}
}catch (e18796){if((e18796 instanceof Object)){
var ex__16906__auto__ = e18796;
var statearr_18797_18848 = state_18736;
(statearr_18797_18848[(5)] = ex__16906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18736);

return cljs.core.cst$kw$recur;
} else {
throw e18796;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16904__auto__,cljs.core.cst$kw$recur)){
var G__18849 = state_18736;
state_18736 = G__18849;
continue;
} else {
return ret_value__16904__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16903__auto__ = function(state_18736){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16903__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16903__auto____1.call(this,state_18736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16903__auto____0;
cljs$core$async$mix_$_state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16903__auto____1;
return cljs$core$async$mix_$_state_machine__16903__auto__;
})()
;})(switch__16902__auto__,c__17028__auto___18801,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17030__auto__ = (function (){var statearr_18798 = (f__17029__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17029__auto__.cljs$core$IFn$_invoke$arity$0() : f__17029__auto__.call(null));
(statearr_18798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17028__auto___18801);

return statearr_18798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
});})(c__17028__auto___18801,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7798__auto__ = (((p == null))?null:p);
var m__7799__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7798__auto__)]);
if(!((m__7799__auto__ == null))){
return (m__7799__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7799__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7799__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__7799__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7799__auto____$1 == null))){
return (m__7799__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7799__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7799__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7798__auto__ = (((p == null))?null:p);
var m__7799__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7798__auto__)]);
if(!((m__7799__auto__ == null))){
return (m__7799__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7799__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7799__auto__.call(null,p,v,ch));
} else {
var m__7799__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7799__auto____$1 == null))){
return (m__7799__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7799__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7799__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args18850 = [];
var len__8301__auto___18853 = arguments.length;
var i__8302__auto___18854 = (0);
while(true){
if((i__8302__auto___18854 < len__8301__auto___18853)){
args18850.push((arguments[i__8302__auto___18854]));

var G__18855 = (i__8302__auto___18854 + (1));
i__8302__auto___18854 = G__18855;
continue;
} else {
}
break;
}

var G__18852 = args18850.length;
switch (G__18852) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18850.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7798__auto__ = (((p == null))?null:p);
var m__7799__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7798__auto__)]);
if(!((m__7799__auto__ == null))){
return (m__7799__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7799__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__7799__auto__.call(null,p));
} else {
var m__7799__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7799__auto____$1 == null))){
return (m__7799__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7799__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__7799__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7798__auto__ = (((p == null))?null:p);
var m__7799__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7798__auto__)]);
if(!((m__7799__auto__ == null))){
return (m__7799__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7799__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__7799__auto__.call(null,p,v));
} else {
var m__7799__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7799__auto____$1 == null))){
return (m__7799__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7799__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__7799__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args18858 = [];
var len__8301__auto___18986 = arguments.length;
var i__8302__auto___18987 = (0);
while(true){
if((i__8302__auto___18987 < len__8301__auto___18986)){
args18858.push((arguments[i__8302__auto___18987]));

var G__18988 = (i__8302__auto___18987 + (1));
i__8302__auto___18987 = G__18988;
continue;
} else {
}
break;
}

var G__18860 = args18858.length;
switch (G__18860) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18858.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__18861 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18861) : cljs.core.atom.call(null,G__18861));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__7085__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__7085__auto__,mults){
return (function (p1__18857_SHARP_){
if(cljs.core.truth_((p1__18857_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18857_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18857_SHARP_.call(null,topic)))){
return p1__18857_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18857_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7085__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async18862 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18862 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18863){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18863 = meta18863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18864,meta18863__$1){
var self__ = this;
var _18864__$1 = this;
return (new cljs.core.async.t_cljs$core$async18862(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18863__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18862.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18864){
var self__ = this;
var _18864__$1 = this;
return self__.meta18863;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18862.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18862.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18862.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18862.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18862.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__6753__auto__)){
var m = temp__6753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18862.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18865 = self__.mults;
var G__18866 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18865,G__18866) : cljs.core.reset_BANG_.call(null,G__18865,G__18866));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18862.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18862.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta18863], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18862.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18862";

cljs.core.async.t_cljs$core$async18862.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7737__auto__,writer__7738__auto__,opt__7739__auto__){
return cljs.core._write(writer__7738__auto__,"cljs.core.async/t_cljs$core$async18862");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async18862 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18862(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18863){
return (new cljs.core.async.t_cljs$core$async18862(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18863));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18862(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17028__auto___18990 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17028__auto___18990,mults,ensure_mult,p){
return (function (){
var f__17029__auto__ = (function (){var switch__16902__auto__ = ((function (c__17028__auto___18990,mults,ensure_mult,p){
return (function (state_18938){
var state_val_18939 = (state_18938[(1)]);
if((state_val_18939 === (7))){
var inst_18934 = (state_18938[(2)]);
var state_18938__$1 = state_18938;
var statearr_18940_18991 = state_18938__$1;
(statearr_18940_18991[(2)] = inst_18934);

(statearr_18940_18991[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18939 === (20))){
var state_18938__$1 = state_18938;
var statearr_18941_18992 = state_18938__$1;
(statearr_18941_18992[(2)] = null);

(statearr_18941_18992[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18939 === (1))){
var state_18938__$1 = state_18938;
var statearr_18942_18993 = state_18938__$1;
(statearr_18942_18993[(2)] = null);

(statearr_18942_18993[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18939 === (24))){
var inst_18917 = (state_18938[(7)]);
var inst_18926 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18917);
var state_18938__$1 = state_18938;
var statearr_18943_18994 = state_18938__$1;
(statearr_18943_18994[(2)] = inst_18926);

(statearr_18943_18994[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18939 === (4))){
var inst_18869 = (state_18938[(8)]);
var inst_18869__$1 = (state_18938[(2)]);
var inst_18870 = (inst_18869__$1 == null);
var state_18938__$1 = (function (){var statearr_18944 = state_18938;
(statearr_18944[(8)] = inst_18869__$1);

return statearr_18944;
})();
if(cljs.core.truth_(inst_18870)){
var statearr_18945_18995 = state_18938__$1;
(statearr_18945_18995[(1)] = (5));

} else {
var statearr_18946_18996 = state_18938__$1;
(statearr_18946_18996[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18939 === (15))){
var inst_18911 = (state_18938[(2)]);
var state_18938__$1 = state_18938;
var statearr_18947_18997 = state_18938__$1;
(statearr_18947_18997[(2)] = inst_18911);

(statearr_18947_18997[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18939 === (21))){
var inst_18931 = (state_18938[(2)]);
var state_18938__$1 = (function (){var statearr_18948 = state_18938;
(statearr_18948[(9)] = inst_18931);

return statearr_18948;
})();
var statearr_18949_18998 = state_18938__$1;
(statearr_18949_18998[(2)] = null);

(statearr_18949_18998[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18939 === (13))){
var inst_18893 = (state_18938[(10)]);
var inst_18895 = cljs.core.chunked_seq_QMARK_(inst_18893);
var state_18938__$1 = state_18938;
if(inst_18895){
var statearr_18950_18999 = state_18938__$1;
(statearr_18950_18999[(1)] = (16));

} else {
var statearr_18951_19000 = state_18938__$1;
(statearr_18951_19000[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18939 === (22))){
var inst_18923 = (state_18938[(2)]);
var state_18938__$1 = state_18938;
if(cljs.core.truth_(inst_18923)){
var statearr_18952_19001 = state_18938__$1;
(statearr_18952_19001[(1)] = (23));

} else {
var statearr_18953_19002 = state_18938__$1;
(statearr_18953_19002[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18939 === (6))){
var inst_18917 = (state_18938[(7)]);
var inst_18919 = (state_18938[(11)]);
var inst_18869 = (state_18938[(8)]);
var inst_18917__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18869) : topic_fn.call(null,inst_18869));
var inst_18918 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_18919__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18918,inst_18917__$1);
var state_18938__$1 = (function (){var statearr_18954 = state_18938;
(statearr_18954[(7)] = inst_18917__$1);

(statearr_18954[(11)] = inst_18919__$1);

return statearr_18954;
})();
if(cljs.core.truth_(inst_18919__$1)){
var statearr_18955_19003 = state_18938__$1;
(statearr_18955_19003[(1)] = (19));

} else {
var statearr_18956_19004 = state_18938__$1;
(statearr_18956_19004[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18939 === (25))){
var inst_18928 = (state_18938[(2)]);
var state_18938__$1 = state_18938;
var statearr_18957_19005 = state_18938__$1;
(statearr_18957_19005[(2)] = inst_18928);

(statearr_18957_19005[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18939 === (17))){
var inst_18893 = (state_18938[(10)]);
var inst_18902 = cljs.core.first(inst_18893);
var inst_18903 = cljs.core.async.muxch_STAR_(inst_18902);
var inst_18904 = cljs.core.async.close_BANG_(inst_18903);
var inst_18905 = cljs.core.next(inst_18893);
var inst_18879 = inst_18905;
var inst_18880 = null;
var inst_18881 = (0);
var inst_18882 = (0);
var state_18938__$1 = (function (){var statearr_18958 = state_18938;
(statearr_18958[(12)] = inst_18882);

(statearr_18958[(13)] = inst_18879);

(statearr_18958[(14)] = inst_18904);

(statearr_18958[(15)] = inst_18880);

(statearr_18958[(16)] = inst_18881);

return statearr_18958;
})();
var statearr_18959_19006 = state_18938__$1;
(statearr_18959_19006[(2)] = null);

(statearr_18959_19006[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18939 === (3))){
var inst_18936 = (state_18938[(2)]);
var state_18938__$1 = state_18938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18938__$1,inst_18936);
} else {
if((state_val_18939 === (12))){
var inst_18913 = (state_18938[(2)]);
var state_18938__$1 = state_18938;
var statearr_18960_19007 = state_18938__$1;
(statearr_18960_19007[(2)] = inst_18913);

(statearr_18960_19007[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18939 === (2))){
var state_18938__$1 = state_18938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18938__$1,(4),ch);
} else {
if((state_val_18939 === (23))){
var state_18938__$1 = state_18938;
var statearr_18961_19008 = state_18938__$1;
(statearr_18961_19008[(2)] = null);

(statearr_18961_19008[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18939 === (19))){
var inst_18919 = (state_18938[(11)]);
var inst_18869 = (state_18938[(8)]);
var inst_18921 = cljs.core.async.muxch_STAR_(inst_18919);
var state_18938__$1 = state_18938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18938__$1,(22),inst_18921,inst_18869);
} else {
if((state_val_18939 === (11))){
var inst_18879 = (state_18938[(13)]);
var inst_18893 = (state_18938[(10)]);
var inst_18893__$1 = cljs.core.seq(inst_18879);
var state_18938__$1 = (function (){var statearr_18962 = state_18938;
(statearr_18962[(10)] = inst_18893__$1);

return statearr_18962;
})();
if(inst_18893__$1){
var statearr_18963_19009 = state_18938__$1;
(statearr_18963_19009[(1)] = (13));

} else {
var statearr_18964_19010 = state_18938__$1;
(statearr_18964_19010[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18939 === (9))){
var inst_18915 = (state_18938[(2)]);
var state_18938__$1 = state_18938;
var statearr_18965_19011 = state_18938__$1;
(statearr_18965_19011[(2)] = inst_18915);

(statearr_18965_19011[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18939 === (5))){
var inst_18876 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_18877 = cljs.core.vals(inst_18876);
var inst_18878 = cljs.core.seq(inst_18877);
var inst_18879 = inst_18878;
var inst_18880 = null;
var inst_18881 = (0);
var inst_18882 = (0);
var state_18938__$1 = (function (){var statearr_18966 = state_18938;
(statearr_18966[(12)] = inst_18882);

(statearr_18966[(13)] = inst_18879);

(statearr_18966[(15)] = inst_18880);

(statearr_18966[(16)] = inst_18881);

return statearr_18966;
})();
var statearr_18967_19012 = state_18938__$1;
(statearr_18967_19012[(2)] = null);

(statearr_18967_19012[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18939 === (14))){
var state_18938__$1 = state_18938;
var statearr_18971_19013 = state_18938__$1;
(statearr_18971_19013[(2)] = null);

(statearr_18971_19013[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18939 === (16))){
var inst_18893 = (state_18938[(10)]);
var inst_18897 = cljs.core.chunk_first(inst_18893);
var inst_18898 = cljs.core.chunk_rest(inst_18893);
var inst_18899 = cljs.core.count(inst_18897);
var inst_18879 = inst_18898;
var inst_18880 = inst_18897;
var inst_18881 = inst_18899;
var inst_18882 = (0);
var state_18938__$1 = (function (){var statearr_18972 = state_18938;
(statearr_18972[(12)] = inst_18882);

(statearr_18972[(13)] = inst_18879);

(statearr_18972[(15)] = inst_18880);

(statearr_18972[(16)] = inst_18881);

return statearr_18972;
})();
var statearr_18973_19014 = state_18938__$1;
(statearr_18973_19014[(2)] = null);

(statearr_18973_19014[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18939 === (10))){
var inst_18882 = (state_18938[(12)]);
var inst_18879 = (state_18938[(13)]);
var inst_18880 = (state_18938[(15)]);
var inst_18881 = (state_18938[(16)]);
var inst_18887 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18880,inst_18882);
var inst_18888 = cljs.core.async.muxch_STAR_(inst_18887);
var inst_18889 = cljs.core.async.close_BANG_(inst_18888);
var inst_18890 = (inst_18882 + (1));
var tmp18968 = inst_18879;
var tmp18969 = inst_18880;
var tmp18970 = inst_18881;
var inst_18879__$1 = tmp18968;
var inst_18880__$1 = tmp18969;
var inst_18881__$1 = tmp18970;
var inst_18882__$1 = inst_18890;
var state_18938__$1 = (function (){var statearr_18974 = state_18938;
(statearr_18974[(12)] = inst_18882__$1);

(statearr_18974[(13)] = inst_18879__$1);

(statearr_18974[(15)] = inst_18880__$1);

(statearr_18974[(17)] = inst_18889);

(statearr_18974[(16)] = inst_18881__$1);

return statearr_18974;
})();
var statearr_18975_19015 = state_18938__$1;
(statearr_18975_19015[(2)] = null);

(statearr_18975_19015[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18939 === (18))){
var inst_18908 = (state_18938[(2)]);
var state_18938__$1 = state_18938;
var statearr_18976_19016 = state_18938__$1;
(statearr_18976_19016[(2)] = inst_18908);

(statearr_18976_19016[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18939 === (8))){
var inst_18882 = (state_18938[(12)]);
var inst_18881 = (state_18938[(16)]);
var inst_18884 = (inst_18882 < inst_18881);
var inst_18885 = inst_18884;
var state_18938__$1 = state_18938;
if(cljs.core.truth_(inst_18885)){
var statearr_18977_19017 = state_18938__$1;
(statearr_18977_19017[(1)] = (10));

} else {
var statearr_18978_19018 = state_18938__$1;
(statearr_18978_19018[(1)] = (11));

}

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
});})(c__17028__auto___18990,mults,ensure_mult,p))
;
return ((function (switch__16902__auto__,c__17028__auto___18990,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16903__auto__ = null;
var cljs$core$async$state_machine__16903__auto____0 = (function (){
var statearr_18982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18982[(0)] = cljs$core$async$state_machine__16903__auto__);

(statearr_18982[(1)] = (1));

return statearr_18982;
});
var cljs$core$async$state_machine__16903__auto____1 = (function (state_18938){
while(true){
var ret_value__16904__auto__ = (function (){try{while(true){
var result__16905__auto__ = switch__16902__auto__(state_18938);
if(cljs.core.keyword_identical_QMARK_(result__16905__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16905__auto__;
}
break;
}
}catch (e18983){if((e18983 instanceof Object)){
var ex__16906__auto__ = e18983;
var statearr_18984_19019 = state_18938;
(statearr_18984_19019[(5)] = ex__16906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18938);

return cljs.core.cst$kw$recur;
} else {
throw e18983;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16904__auto__,cljs.core.cst$kw$recur)){
var G__19020 = state_18938;
state_18938 = G__19020;
continue;
} else {
return ret_value__16904__auto__;
}
break;
}
});
cljs$core$async$state_machine__16903__auto__ = function(state_18938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16903__auto____1.call(this,state_18938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16903__auto____0;
cljs$core$async$state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16903__auto____1;
return cljs$core$async$state_machine__16903__auto__;
})()
;})(switch__16902__auto__,c__17028__auto___18990,mults,ensure_mult,p))
})();
var state__17030__auto__ = (function (){var statearr_18985 = (f__17029__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17029__auto__.cljs$core$IFn$_invoke$arity$0() : f__17029__auto__.call(null));
(statearr_18985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17028__auto___18990);

return statearr_18985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
});})(c__17028__auto___18990,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args19021 = [];
var len__8301__auto___19024 = arguments.length;
var i__8302__auto___19025 = (0);
while(true){
if((i__8302__auto___19025 < len__8301__auto___19024)){
args19021.push((arguments[i__8302__auto___19025]));

var G__19026 = (i__8302__auto___19025 + (1));
i__8302__auto___19025 = G__19026;
continue;
} else {
}
break;
}

var G__19023 = args19021.length;
switch (G__19023) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19021.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args19028 = [];
var len__8301__auto___19031 = arguments.length;
var i__8302__auto___19032 = (0);
while(true){
if((i__8302__auto___19032 < len__8301__auto___19031)){
args19028.push((arguments[i__8302__auto___19032]));

var G__19033 = (i__8302__auto___19032 + (1));
i__8302__auto___19032 = G__19033;
continue;
} else {
}
break;
}

var G__19030 = args19028.length;
switch (G__19030) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19028.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args19035 = [];
var len__8301__auto___19106 = arguments.length;
var i__8302__auto___19107 = (0);
while(true){
if((i__8302__auto___19107 < len__8301__auto___19106)){
args19035.push((arguments[i__8302__auto___19107]));

var G__19108 = (i__8302__auto___19107 + (1));
i__8302__auto___19107 = G__19108;
continue;
} else {
}
break;
}

var G__19037 = args19035.length;
switch (G__19037) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19035.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__17028__auto___19110 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17028__auto___19110,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17029__auto__ = (function (){var switch__16902__auto__ = ((function (c__17028__auto___19110,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19076){
var state_val_19077 = (state_19076[(1)]);
if((state_val_19077 === (7))){
var state_19076__$1 = state_19076;
var statearr_19078_19111 = state_19076__$1;
(statearr_19078_19111[(2)] = null);

(statearr_19078_19111[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19077 === (1))){
var state_19076__$1 = state_19076;
var statearr_19079_19112 = state_19076__$1;
(statearr_19079_19112[(2)] = null);

(statearr_19079_19112[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19077 === (4))){
var inst_19040 = (state_19076[(7)]);
var inst_19042 = (inst_19040 < cnt);
var state_19076__$1 = state_19076;
if(cljs.core.truth_(inst_19042)){
var statearr_19080_19113 = state_19076__$1;
(statearr_19080_19113[(1)] = (6));

} else {
var statearr_19081_19114 = state_19076__$1;
(statearr_19081_19114[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19077 === (15))){
var inst_19072 = (state_19076[(2)]);
var state_19076__$1 = state_19076;
var statearr_19082_19115 = state_19076__$1;
(statearr_19082_19115[(2)] = inst_19072);

(statearr_19082_19115[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19077 === (13))){
var inst_19065 = cljs.core.async.close_BANG_(out);
var state_19076__$1 = state_19076;
var statearr_19083_19116 = state_19076__$1;
(statearr_19083_19116[(2)] = inst_19065);

(statearr_19083_19116[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19077 === (6))){
var state_19076__$1 = state_19076;
var statearr_19084_19117 = state_19076__$1;
(statearr_19084_19117[(2)] = null);

(statearr_19084_19117[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19077 === (3))){
var inst_19074 = (state_19076[(2)]);
var state_19076__$1 = state_19076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19076__$1,inst_19074);
} else {
if((state_val_19077 === (12))){
var inst_19062 = (state_19076[(8)]);
var inst_19062__$1 = (state_19076[(2)]);
var inst_19063 = cljs.core.some(cljs.core.nil_QMARK_,inst_19062__$1);
var state_19076__$1 = (function (){var statearr_19085 = state_19076;
(statearr_19085[(8)] = inst_19062__$1);

return statearr_19085;
})();
if(cljs.core.truth_(inst_19063)){
var statearr_19086_19118 = state_19076__$1;
(statearr_19086_19118[(1)] = (13));

} else {
var statearr_19087_19119 = state_19076__$1;
(statearr_19087_19119[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19077 === (2))){
var inst_19039 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_19040 = (0);
var state_19076__$1 = (function (){var statearr_19088 = state_19076;
(statearr_19088[(9)] = inst_19039);

(statearr_19088[(7)] = inst_19040);

return statearr_19088;
})();
var statearr_19089_19120 = state_19076__$1;
(statearr_19089_19120[(2)] = null);

(statearr_19089_19120[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19077 === (11))){
var inst_19040 = (state_19076[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19076,(10),Object,null,(9));
var inst_19049 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19040) : chs__$1.call(null,inst_19040));
var inst_19050 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19040) : done.call(null,inst_19040));
var inst_19051 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19049,inst_19050);
var state_19076__$1 = state_19076;
var statearr_19090_19121 = state_19076__$1;
(statearr_19090_19121[(2)] = inst_19051);


cljs.core.async.impl.ioc_helpers.process_exception(state_19076__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19077 === (9))){
var inst_19040 = (state_19076[(7)]);
var inst_19053 = (state_19076[(2)]);
var inst_19054 = (inst_19040 + (1));
var inst_19040__$1 = inst_19054;
var state_19076__$1 = (function (){var statearr_19091 = state_19076;
(statearr_19091[(10)] = inst_19053);

(statearr_19091[(7)] = inst_19040__$1);

return statearr_19091;
})();
var statearr_19092_19122 = state_19076__$1;
(statearr_19092_19122[(2)] = null);

(statearr_19092_19122[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19077 === (5))){
var inst_19060 = (state_19076[(2)]);
var state_19076__$1 = (function (){var statearr_19093 = state_19076;
(statearr_19093[(11)] = inst_19060);

return statearr_19093;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19076__$1,(12),dchan);
} else {
if((state_val_19077 === (14))){
var inst_19062 = (state_19076[(8)]);
var inst_19067 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19062);
var state_19076__$1 = state_19076;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19076__$1,(16),out,inst_19067);
} else {
if((state_val_19077 === (16))){
var inst_19069 = (state_19076[(2)]);
var state_19076__$1 = (function (){var statearr_19094 = state_19076;
(statearr_19094[(12)] = inst_19069);

return statearr_19094;
})();
var statearr_19095_19123 = state_19076__$1;
(statearr_19095_19123[(2)] = null);

(statearr_19095_19123[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19077 === (10))){
var inst_19044 = (state_19076[(2)]);
var inst_19045 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19076__$1 = (function (){var statearr_19096 = state_19076;
(statearr_19096[(13)] = inst_19044);

return statearr_19096;
})();
var statearr_19097_19124 = state_19076__$1;
(statearr_19097_19124[(2)] = inst_19045);


cljs.core.async.impl.ioc_helpers.process_exception(state_19076__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19077 === (8))){
var inst_19058 = (state_19076[(2)]);
var state_19076__$1 = state_19076;
var statearr_19098_19125 = state_19076__$1;
(statearr_19098_19125[(2)] = inst_19058);

(statearr_19098_19125[(1)] = (5));


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
});})(c__17028__auto___19110,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16902__auto__,c__17028__auto___19110,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16903__auto__ = null;
var cljs$core$async$state_machine__16903__auto____0 = (function (){
var statearr_19102 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19102[(0)] = cljs$core$async$state_machine__16903__auto__);

(statearr_19102[(1)] = (1));

return statearr_19102;
});
var cljs$core$async$state_machine__16903__auto____1 = (function (state_19076){
while(true){
var ret_value__16904__auto__ = (function (){try{while(true){
var result__16905__auto__ = switch__16902__auto__(state_19076);
if(cljs.core.keyword_identical_QMARK_(result__16905__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16905__auto__;
}
break;
}
}catch (e19103){if((e19103 instanceof Object)){
var ex__16906__auto__ = e19103;
var statearr_19104_19126 = state_19076;
(statearr_19104_19126[(5)] = ex__16906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19076);

return cljs.core.cst$kw$recur;
} else {
throw e19103;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16904__auto__,cljs.core.cst$kw$recur)){
var G__19127 = state_19076;
state_19076 = G__19127;
continue;
} else {
return ret_value__16904__auto__;
}
break;
}
});
cljs$core$async$state_machine__16903__auto__ = function(state_19076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16903__auto____1.call(this,state_19076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16903__auto____0;
cljs$core$async$state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16903__auto____1;
return cljs$core$async$state_machine__16903__auto__;
})()
;})(switch__16902__auto__,c__17028__auto___19110,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17030__auto__ = (function (){var statearr_19105 = (f__17029__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17029__auto__.cljs$core$IFn$_invoke$arity$0() : f__17029__auto__.call(null));
(statearr_19105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17028__auto___19110);

return statearr_19105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
});})(c__17028__auto___19110,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args19129 = [];
var len__8301__auto___19187 = arguments.length;
var i__8302__auto___19188 = (0);
while(true){
if((i__8302__auto___19188 < len__8301__auto___19187)){
args19129.push((arguments[i__8302__auto___19188]));

var G__19189 = (i__8302__auto___19188 + (1));
i__8302__auto___19188 = G__19189;
continue;
} else {
}
break;
}

var G__19131 = args19129.length;
switch (G__19131) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19129.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17028__auto___19191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17028__auto___19191,out){
return (function (){
var f__17029__auto__ = (function (){var switch__16902__auto__ = ((function (c__17028__auto___19191,out){
return (function (state_19163){
var state_val_19164 = (state_19163[(1)]);
if((state_val_19164 === (7))){
var inst_19143 = (state_19163[(7)]);
var inst_19142 = (state_19163[(8)]);
var inst_19142__$1 = (state_19163[(2)]);
var inst_19143__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19142__$1,(0),null);
var inst_19144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19142__$1,(1),null);
var inst_19145 = (inst_19143__$1 == null);
var state_19163__$1 = (function (){var statearr_19165 = state_19163;
(statearr_19165[(7)] = inst_19143__$1);

(statearr_19165[(9)] = inst_19144);

(statearr_19165[(8)] = inst_19142__$1);

return statearr_19165;
})();
if(cljs.core.truth_(inst_19145)){
var statearr_19166_19192 = state_19163__$1;
(statearr_19166_19192[(1)] = (8));

} else {
var statearr_19167_19193 = state_19163__$1;
(statearr_19167_19193[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19164 === (1))){
var inst_19132 = cljs.core.vec(chs);
var inst_19133 = inst_19132;
var state_19163__$1 = (function (){var statearr_19168 = state_19163;
(statearr_19168[(10)] = inst_19133);

return statearr_19168;
})();
var statearr_19169_19194 = state_19163__$1;
(statearr_19169_19194[(2)] = null);

(statearr_19169_19194[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19164 === (4))){
var inst_19133 = (state_19163[(10)]);
var state_19163__$1 = state_19163;
return cljs.core.async.ioc_alts_BANG_(state_19163__$1,(7),inst_19133);
} else {
if((state_val_19164 === (6))){
var inst_19159 = (state_19163[(2)]);
var state_19163__$1 = state_19163;
var statearr_19170_19195 = state_19163__$1;
(statearr_19170_19195[(2)] = inst_19159);

(statearr_19170_19195[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19164 === (3))){
var inst_19161 = (state_19163[(2)]);
var state_19163__$1 = state_19163;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19163__$1,inst_19161);
} else {
if((state_val_19164 === (2))){
var inst_19133 = (state_19163[(10)]);
var inst_19135 = cljs.core.count(inst_19133);
var inst_19136 = (inst_19135 > (0));
var state_19163__$1 = state_19163;
if(cljs.core.truth_(inst_19136)){
var statearr_19172_19196 = state_19163__$1;
(statearr_19172_19196[(1)] = (4));

} else {
var statearr_19173_19197 = state_19163__$1;
(statearr_19173_19197[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19164 === (11))){
var inst_19133 = (state_19163[(10)]);
var inst_19152 = (state_19163[(2)]);
var tmp19171 = inst_19133;
var inst_19133__$1 = tmp19171;
var state_19163__$1 = (function (){var statearr_19174 = state_19163;
(statearr_19174[(11)] = inst_19152);

(statearr_19174[(10)] = inst_19133__$1);

return statearr_19174;
})();
var statearr_19175_19198 = state_19163__$1;
(statearr_19175_19198[(2)] = null);

(statearr_19175_19198[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19164 === (9))){
var inst_19143 = (state_19163[(7)]);
var state_19163__$1 = state_19163;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19163__$1,(11),out,inst_19143);
} else {
if((state_val_19164 === (5))){
var inst_19157 = cljs.core.async.close_BANG_(out);
var state_19163__$1 = state_19163;
var statearr_19176_19199 = state_19163__$1;
(statearr_19176_19199[(2)] = inst_19157);

(statearr_19176_19199[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19164 === (10))){
var inst_19155 = (state_19163[(2)]);
var state_19163__$1 = state_19163;
var statearr_19177_19200 = state_19163__$1;
(statearr_19177_19200[(2)] = inst_19155);

(statearr_19177_19200[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19164 === (8))){
var inst_19143 = (state_19163[(7)]);
var inst_19144 = (state_19163[(9)]);
var inst_19133 = (state_19163[(10)]);
var inst_19142 = (state_19163[(8)]);
var inst_19147 = (function (){var cs = inst_19133;
var vec__19138 = inst_19142;
var v = inst_19143;
var c = inst_19144;
return ((function (cs,vec__19138,v,c,inst_19143,inst_19144,inst_19133,inst_19142,state_val_19164,c__17028__auto___19191,out){
return (function (p1__19128_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19128_SHARP_);
});
;})(cs,vec__19138,v,c,inst_19143,inst_19144,inst_19133,inst_19142,state_val_19164,c__17028__auto___19191,out))
})();
var inst_19148 = cljs.core.filterv(inst_19147,inst_19133);
var inst_19133__$1 = inst_19148;
var state_19163__$1 = (function (){var statearr_19178 = state_19163;
(statearr_19178[(10)] = inst_19133__$1);

return statearr_19178;
})();
var statearr_19179_19201 = state_19163__$1;
(statearr_19179_19201[(2)] = null);

(statearr_19179_19201[(1)] = (2));


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
});})(c__17028__auto___19191,out))
;
return ((function (switch__16902__auto__,c__17028__auto___19191,out){
return (function() {
var cljs$core$async$state_machine__16903__auto__ = null;
var cljs$core$async$state_machine__16903__auto____0 = (function (){
var statearr_19183 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19183[(0)] = cljs$core$async$state_machine__16903__auto__);

(statearr_19183[(1)] = (1));

return statearr_19183;
});
var cljs$core$async$state_machine__16903__auto____1 = (function (state_19163){
while(true){
var ret_value__16904__auto__ = (function (){try{while(true){
var result__16905__auto__ = switch__16902__auto__(state_19163);
if(cljs.core.keyword_identical_QMARK_(result__16905__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16905__auto__;
}
break;
}
}catch (e19184){if((e19184 instanceof Object)){
var ex__16906__auto__ = e19184;
var statearr_19185_19202 = state_19163;
(statearr_19185_19202[(5)] = ex__16906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19163);

return cljs.core.cst$kw$recur;
} else {
throw e19184;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16904__auto__,cljs.core.cst$kw$recur)){
var G__19203 = state_19163;
state_19163 = G__19203;
continue;
} else {
return ret_value__16904__auto__;
}
break;
}
});
cljs$core$async$state_machine__16903__auto__ = function(state_19163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16903__auto____1.call(this,state_19163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16903__auto____0;
cljs$core$async$state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16903__auto____1;
return cljs$core$async$state_machine__16903__auto__;
})()
;})(switch__16902__auto__,c__17028__auto___19191,out))
})();
var state__17030__auto__ = (function (){var statearr_19186 = (f__17029__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17029__auto__.cljs$core$IFn$_invoke$arity$0() : f__17029__auto__.call(null));
(statearr_19186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17028__auto___19191);

return statearr_19186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
});})(c__17028__auto___19191,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args19204 = [];
var len__8301__auto___19253 = arguments.length;
var i__8302__auto___19254 = (0);
while(true){
if((i__8302__auto___19254 < len__8301__auto___19253)){
args19204.push((arguments[i__8302__auto___19254]));

var G__19255 = (i__8302__auto___19254 + (1));
i__8302__auto___19254 = G__19255;
continue;
} else {
}
break;
}

var G__19206 = args19204.length;
switch (G__19206) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19204.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17028__auto___19257 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17028__auto___19257,out){
return (function (){
var f__17029__auto__ = (function (){var switch__16902__auto__ = ((function (c__17028__auto___19257,out){
return (function (state_19230){
var state_val_19231 = (state_19230[(1)]);
if((state_val_19231 === (7))){
var inst_19212 = (state_19230[(7)]);
var inst_19212__$1 = (state_19230[(2)]);
var inst_19213 = (inst_19212__$1 == null);
var inst_19214 = cljs.core.not(inst_19213);
var state_19230__$1 = (function (){var statearr_19232 = state_19230;
(statearr_19232[(7)] = inst_19212__$1);

return statearr_19232;
})();
if(inst_19214){
var statearr_19233_19258 = state_19230__$1;
(statearr_19233_19258[(1)] = (8));

} else {
var statearr_19234_19259 = state_19230__$1;
(statearr_19234_19259[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19231 === (1))){
var inst_19207 = (0);
var state_19230__$1 = (function (){var statearr_19235 = state_19230;
(statearr_19235[(8)] = inst_19207);

return statearr_19235;
})();
var statearr_19236_19260 = state_19230__$1;
(statearr_19236_19260[(2)] = null);

(statearr_19236_19260[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19231 === (4))){
var state_19230__$1 = state_19230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19230__$1,(7),ch);
} else {
if((state_val_19231 === (6))){
var inst_19225 = (state_19230[(2)]);
var state_19230__$1 = state_19230;
var statearr_19237_19261 = state_19230__$1;
(statearr_19237_19261[(2)] = inst_19225);

(statearr_19237_19261[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19231 === (3))){
var inst_19227 = (state_19230[(2)]);
var inst_19228 = cljs.core.async.close_BANG_(out);
var state_19230__$1 = (function (){var statearr_19238 = state_19230;
(statearr_19238[(9)] = inst_19227);

return statearr_19238;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19230__$1,inst_19228);
} else {
if((state_val_19231 === (2))){
var inst_19207 = (state_19230[(8)]);
var inst_19209 = (inst_19207 < n);
var state_19230__$1 = state_19230;
if(cljs.core.truth_(inst_19209)){
var statearr_19239_19262 = state_19230__$1;
(statearr_19239_19262[(1)] = (4));

} else {
var statearr_19240_19263 = state_19230__$1;
(statearr_19240_19263[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19231 === (11))){
var inst_19207 = (state_19230[(8)]);
var inst_19217 = (state_19230[(2)]);
var inst_19218 = (inst_19207 + (1));
var inst_19207__$1 = inst_19218;
var state_19230__$1 = (function (){var statearr_19241 = state_19230;
(statearr_19241[(8)] = inst_19207__$1);

(statearr_19241[(10)] = inst_19217);

return statearr_19241;
})();
var statearr_19242_19264 = state_19230__$1;
(statearr_19242_19264[(2)] = null);

(statearr_19242_19264[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19231 === (9))){
var state_19230__$1 = state_19230;
var statearr_19243_19265 = state_19230__$1;
(statearr_19243_19265[(2)] = null);

(statearr_19243_19265[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19231 === (5))){
var state_19230__$1 = state_19230;
var statearr_19244_19266 = state_19230__$1;
(statearr_19244_19266[(2)] = null);

(statearr_19244_19266[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19231 === (10))){
var inst_19222 = (state_19230[(2)]);
var state_19230__$1 = state_19230;
var statearr_19245_19267 = state_19230__$1;
(statearr_19245_19267[(2)] = inst_19222);

(statearr_19245_19267[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19231 === (8))){
var inst_19212 = (state_19230[(7)]);
var state_19230__$1 = state_19230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19230__$1,(11),out,inst_19212);
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
});})(c__17028__auto___19257,out))
;
return ((function (switch__16902__auto__,c__17028__auto___19257,out){
return (function() {
var cljs$core$async$state_machine__16903__auto__ = null;
var cljs$core$async$state_machine__16903__auto____0 = (function (){
var statearr_19249 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19249[(0)] = cljs$core$async$state_machine__16903__auto__);

(statearr_19249[(1)] = (1));

return statearr_19249;
});
var cljs$core$async$state_machine__16903__auto____1 = (function (state_19230){
while(true){
var ret_value__16904__auto__ = (function (){try{while(true){
var result__16905__auto__ = switch__16902__auto__(state_19230);
if(cljs.core.keyword_identical_QMARK_(result__16905__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16905__auto__;
}
break;
}
}catch (e19250){if((e19250 instanceof Object)){
var ex__16906__auto__ = e19250;
var statearr_19251_19268 = state_19230;
(statearr_19251_19268[(5)] = ex__16906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19230);

return cljs.core.cst$kw$recur;
} else {
throw e19250;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16904__auto__,cljs.core.cst$kw$recur)){
var G__19269 = state_19230;
state_19230 = G__19269;
continue;
} else {
return ret_value__16904__auto__;
}
break;
}
});
cljs$core$async$state_machine__16903__auto__ = function(state_19230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16903__auto____1.call(this,state_19230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16903__auto____0;
cljs$core$async$state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16903__auto____1;
return cljs$core$async$state_machine__16903__auto__;
})()
;})(switch__16902__auto__,c__17028__auto___19257,out))
})();
var state__17030__auto__ = (function (){var statearr_19252 = (f__17029__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17029__auto__.cljs$core$IFn$_invoke$arity$0() : f__17029__auto__.call(null));
(statearr_19252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17028__auto___19257);

return statearr_19252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
});})(c__17028__auto___19257,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19279 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19279 = (function (f,ch,meta19280){
this.f = f;
this.ch = ch;
this.meta19280 = meta19280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19281,meta19280__$1){
var self__ = this;
var _19281__$1 = this;
return (new cljs.core.async.t_cljs$core$async19279(self__.f,self__.ch,meta19280__$1));
});

cljs.core.async.t_cljs$core$async19279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19281){
var self__ = this;
var _19281__$1 = this;
return self__.meta19280;
});

cljs.core.async.t_cljs$core$async19279.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19279.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19279.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19279.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19279.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19282 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19282 = (function (f,ch,meta19280,_,fn1,meta19283){
this.f = f;
this.ch = ch;
this.meta19280 = meta19280;
this._ = _;
this.fn1 = fn1;
this.meta19283 = meta19283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19284,meta19283__$1){
var self__ = this;
var _19284__$1 = this;
return (new cljs.core.async.t_cljs$core$async19282(self__.f,self__.ch,self__.meta19280,self__._,self__.fn1,meta19283__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19282.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19284){
var self__ = this;
var _19284__$1 = this;
return self__.meta19283;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19282.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19282.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19282.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19282.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19270_SHARP_){
var G__19285 = (((p1__19270_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19270_SHARP_) : self__.f.call(null,p1__19270_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19285) : f1.call(null,G__19285));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19282.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19280,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async19279], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta19283], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19282.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19282.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19282";

cljs.core.async.t_cljs$core$async19282.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7737__auto__,writer__7738__auto__,opt__7739__auto__){
return cljs.core._write(writer__7738__auto__,"cljs.core.async/t_cljs$core$async19282");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19282 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19282(f__$1,ch__$1,meta19280__$1,___$2,fn1__$1,meta19283){
return (new cljs.core.async.t_cljs$core$async19282(f__$1,ch__$1,meta19280__$1,___$2,fn1__$1,meta19283));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19282(self__.f,self__.ch,self__.meta19280,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7073__auto__ = ret;
if(cljs.core.truth_(and__7073__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__7073__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19286 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19286) : self__.f.call(null,G__19286));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async19279.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19279.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19279.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19280], null);
});

cljs.core.async.t_cljs$core$async19279.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19279";

cljs.core.async.t_cljs$core$async19279.cljs$lang$ctorPrWriter = (function (this__7737__auto__,writer__7738__auto__,opt__7739__auto__){
return cljs.core._write(writer__7738__auto__,"cljs.core.async/t_cljs$core$async19279");
});

cljs.core.async.__GT_t_cljs$core$async19279 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19279(f__$1,ch__$1,meta19280){
return (new cljs.core.async.t_cljs$core$async19279(f__$1,ch__$1,meta19280));
});

}

return (new cljs.core.async.t_cljs$core$async19279(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19290 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19290 = (function (f,ch,meta19291){
this.f = f;
this.ch = ch;
this.meta19291 = meta19291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19292,meta19291__$1){
var self__ = this;
var _19292__$1 = this;
return (new cljs.core.async.t_cljs$core$async19290(self__.f,self__.ch,meta19291__$1));
});

cljs.core.async.t_cljs$core$async19290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19292){
var self__ = this;
var _19292__$1 = this;
return self__.meta19291;
});

cljs.core.async.t_cljs$core$async19290.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19290.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19290.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19290.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19290.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19290.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async19290.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19291], null);
});

cljs.core.async.t_cljs$core$async19290.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19290";

cljs.core.async.t_cljs$core$async19290.cljs$lang$ctorPrWriter = (function (this__7737__auto__,writer__7738__auto__,opt__7739__auto__){
return cljs.core._write(writer__7738__auto__,"cljs.core.async/t_cljs$core$async19290");
});

cljs.core.async.__GT_t_cljs$core$async19290 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19290(f__$1,ch__$1,meta19291){
return (new cljs.core.async.t_cljs$core$async19290(f__$1,ch__$1,meta19291));
});

}

return (new cljs.core.async.t_cljs$core$async19290(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19296 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19296 = (function (p,ch,meta19297){
this.p = p;
this.ch = ch;
this.meta19297 = meta19297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19298,meta19297__$1){
var self__ = this;
var _19298__$1 = this;
return (new cljs.core.async.t_cljs$core$async19296(self__.p,self__.ch,meta19297__$1));
});

cljs.core.async.t_cljs$core$async19296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19298){
var self__ = this;
var _19298__$1 = this;
return self__.meta19297;
});

cljs.core.async.t_cljs$core$async19296.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19296.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19296.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19296.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19296.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19296.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19296.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19297], null);
});

cljs.core.async.t_cljs$core$async19296.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19296";

cljs.core.async.t_cljs$core$async19296.cljs$lang$ctorPrWriter = (function (this__7737__auto__,writer__7738__auto__,opt__7739__auto__){
return cljs.core._write(writer__7738__auto__,"cljs.core.async/t_cljs$core$async19296");
});

cljs.core.async.__GT_t_cljs$core$async19296 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19296(p__$1,ch__$1,meta19297){
return (new cljs.core.async.t_cljs$core$async19296(p__$1,ch__$1,meta19297));
});

}

return (new cljs.core.async.t_cljs$core$async19296(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args19299 = [];
var len__8301__auto___19343 = arguments.length;
var i__8302__auto___19344 = (0);
while(true){
if((i__8302__auto___19344 < len__8301__auto___19343)){
args19299.push((arguments[i__8302__auto___19344]));

var G__19345 = (i__8302__auto___19344 + (1));
i__8302__auto___19344 = G__19345;
continue;
} else {
}
break;
}

var G__19301 = args19299.length;
switch (G__19301) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19299.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17028__auto___19347 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17028__auto___19347,out){
return (function (){
var f__17029__auto__ = (function (){var switch__16902__auto__ = ((function (c__17028__auto___19347,out){
return (function (state_19322){
var state_val_19323 = (state_19322[(1)]);
if((state_val_19323 === (7))){
var inst_19318 = (state_19322[(2)]);
var state_19322__$1 = state_19322;
var statearr_19324_19348 = state_19322__$1;
(statearr_19324_19348[(2)] = inst_19318);

(statearr_19324_19348[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19323 === (1))){
var state_19322__$1 = state_19322;
var statearr_19325_19349 = state_19322__$1;
(statearr_19325_19349[(2)] = null);

(statearr_19325_19349[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19323 === (4))){
var inst_19304 = (state_19322[(7)]);
var inst_19304__$1 = (state_19322[(2)]);
var inst_19305 = (inst_19304__$1 == null);
var state_19322__$1 = (function (){var statearr_19326 = state_19322;
(statearr_19326[(7)] = inst_19304__$1);

return statearr_19326;
})();
if(cljs.core.truth_(inst_19305)){
var statearr_19327_19350 = state_19322__$1;
(statearr_19327_19350[(1)] = (5));

} else {
var statearr_19328_19351 = state_19322__$1;
(statearr_19328_19351[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19323 === (6))){
var inst_19304 = (state_19322[(7)]);
var inst_19309 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19304) : p.call(null,inst_19304));
var state_19322__$1 = state_19322;
if(cljs.core.truth_(inst_19309)){
var statearr_19329_19352 = state_19322__$1;
(statearr_19329_19352[(1)] = (8));

} else {
var statearr_19330_19353 = state_19322__$1;
(statearr_19330_19353[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19323 === (3))){
var inst_19320 = (state_19322[(2)]);
var state_19322__$1 = state_19322;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19322__$1,inst_19320);
} else {
if((state_val_19323 === (2))){
var state_19322__$1 = state_19322;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19322__$1,(4),ch);
} else {
if((state_val_19323 === (11))){
var inst_19312 = (state_19322[(2)]);
var state_19322__$1 = state_19322;
var statearr_19331_19354 = state_19322__$1;
(statearr_19331_19354[(2)] = inst_19312);

(statearr_19331_19354[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19323 === (9))){
var state_19322__$1 = state_19322;
var statearr_19332_19355 = state_19322__$1;
(statearr_19332_19355[(2)] = null);

(statearr_19332_19355[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19323 === (5))){
var inst_19307 = cljs.core.async.close_BANG_(out);
var state_19322__$1 = state_19322;
var statearr_19333_19356 = state_19322__$1;
(statearr_19333_19356[(2)] = inst_19307);

(statearr_19333_19356[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19323 === (10))){
var inst_19315 = (state_19322[(2)]);
var state_19322__$1 = (function (){var statearr_19334 = state_19322;
(statearr_19334[(8)] = inst_19315);

return statearr_19334;
})();
var statearr_19335_19357 = state_19322__$1;
(statearr_19335_19357[(2)] = null);

(statearr_19335_19357[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19323 === (8))){
var inst_19304 = (state_19322[(7)]);
var state_19322__$1 = state_19322;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19322__$1,(11),out,inst_19304);
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
});})(c__17028__auto___19347,out))
;
return ((function (switch__16902__auto__,c__17028__auto___19347,out){
return (function() {
var cljs$core$async$state_machine__16903__auto__ = null;
var cljs$core$async$state_machine__16903__auto____0 = (function (){
var statearr_19339 = [null,null,null,null,null,null,null,null,null];
(statearr_19339[(0)] = cljs$core$async$state_machine__16903__auto__);

(statearr_19339[(1)] = (1));

return statearr_19339;
});
var cljs$core$async$state_machine__16903__auto____1 = (function (state_19322){
while(true){
var ret_value__16904__auto__ = (function (){try{while(true){
var result__16905__auto__ = switch__16902__auto__(state_19322);
if(cljs.core.keyword_identical_QMARK_(result__16905__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16905__auto__;
}
break;
}
}catch (e19340){if((e19340 instanceof Object)){
var ex__16906__auto__ = e19340;
var statearr_19341_19358 = state_19322;
(statearr_19341_19358[(5)] = ex__16906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19322);

return cljs.core.cst$kw$recur;
} else {
throw e19340;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16904__auto__,cljs.core.cst$kw$recur)){
var G__19359 = state_19322;
state_19322 = G__19359;
continue;
} else {
return ret_value__16904__auto__;
}
break;
}
});
cljs$core$async$state_machine__16903__auto__ = function(state_19322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16903__auto____1.call(this,state_19322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16903__auto____0;
cljs$core$async$state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16903__auto____1;
return cljs$core$async$state_machine__16903__auto__;
})()
;})(switch__16902__auto__,c__17028__auto___19347,out))
})();
var state__17030__auto__ = (function (){var statearr_19342 = (f__17029__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17029__auto__.cljs$core$IFn$_invoke$arity$0() : f__17029__auto__.call(null));
(statearr_19342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17028__auto___19347);

return statearr_19342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
});})(c__17028__auto___19347,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19360 = [];
var len__8301__auto___19363 = arguments.length;
var i__8302__auto___19364 = (0);
while(true){
if((i__8302__auto___19364 < len__8301__auto___19363)){
args19360.push((arguments[i__8302__auto___19364]));

var G__19365 = (i__8302__auto___19364 + (1));
i__8302__auto___19364 = G__19365;
continue;
} else {
}
break;
}

var G__19362 = args19360.length;
switch (G__19362) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19360.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17028__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17028__auto__){
return (function (){
var f__17029__auto__ = (function (){var switch__16902__auto__ = ((function (c__17028__auto__){
return (function (state_19532){
var state_val_19533 = (state_19532[(1)]);
if((state_val_19533 === (7))){
var inst_19528 = (state_19532[(2)]);
var state_19532__$1 = state_19532;
var statearr_19534_19575 = state_19532__$1;
(statearr_19534_19575[(2)] = inst_19528);

(statearr_19534_19575[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19533 === (20))){
var inst_19498 = (state_19532[(7)]);
var inst_19509 = (state_19532[(2)]);
var inst_19510 = cljs.core.next(inst_19498);
var inst_19484 = inst_19510;
var inst_19485 = null;
var inst_19486 = (0);
var inst_19487 = (0);
var state_19532__$1 = (function (){var statearr_19535 = state_19532;
(statearr_19535[(8)] = inst_19485);

(statearr_19535[(9)] = inst_19509);

(statearr_19535[(10)] = inst_19486);

(statearr_19535[(11)] = inst_19487);

(statearr_19535[(12)] = inst_19484);

return statearr_19535;
})();
var statearr_19536_19576 = state_19532__$1;
(statearr_19536_19576[(2)] = null);

(statearr_19536_19576[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19533 === (1))){
var state_19532__$1 = state_19532;
var statearr_19537_19577 = state_19532__$1;
(statearr_19537_19577[(2)] = null);

(statearr_19537_19577[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19533 === (4))){
var inst_19473 = (state_19532[(13)]);
var inst_19473__$1 = (state_19532[(2)]);
var inst_19474 = (inst_19473__$1 == null);
var state_19532__$1 = (function (){var statearr_19538 = state_19532;
(statearr_19538[(13)] = inst_19473__$1);

return statearr_19538;
})();
if(cljs.core.truth_(inst_19474)){
var statearr_19539_19578 = state_19532__$1;
(statearr_19539_19578[(1)] = (5));

} else {
var statearr_19540_19579 = state_19532__$1;
(statearr_19540_19579[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19533 === (15))){
var state_19532__$1 = state_19532;
var statearr_19544_19580 = state_19532__$1;
(statearr_19544_19580[(2)] = null);

(statearr_19544_19580[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19533 === (21))){
var state_19532__$1 = state_19532;
var statearr_19545_19581 = state_19532__$1;
(statearr_19545_19581[(2)] = null);

(statearr_19545_19581[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19533 === (13))){
var inst_19485 = (state_19532[(8)]);
var inst_19486 = (state_19532[(10)]);
var inst_19487 = (state_19532[(11)]);
var inst_19484 = (state_19532[(12)]);
var inst_19494 = (state_19532[(2)]);
var inst_19495 = (inst_19487 + (1));
var tmp19541 = inst_19485;
var tmp19542 = inst_19486;
var tmp19543 = inst_19484;
var inst_19484__$1 = tmp19543;
var inst_19485__$1 = tmp19541;
var inst_19486__$1 = tmp19542;
var inst_19487__$1 = inst_19495;
var state_19532__$1 = (function (){var statearr_19546 = state_19532;
(statearr_19546[(8)] = inst_19485__$1);

(statearr_19546[(10)] = inst_19486__$1);

(statearr_19546[(14)] = inst_19494);

(statearr_19546[(11)] = inst_19487__$1);

(statearr_19546[(12)] = inst_19484__$1);

return statearr_19546;
})();
var statearr_19547_19582 = state_19532__$1;
(statearr_19547_19582[(2)] = null);

(statearr_19547_19582[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19533 === (22))){
var state_19532__$1 = state_19532;
var statearr_19548_19583 = state_19532__$1;
(statearr_19548_19583[(2)] = null);

(statearr_19548_19583[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19533 === (6))){
var inst_19473 = (state_19532[(13)]);
var inst_19482 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19473) : f.call(null,inst_19473));
var inst_19483 = cljs.core.seq(inst_19482);
var inst_19484 = inst_19483;
var inst_19485 = null;
var inst_19486 = (0);
var inst_19487 = (0);
var state_19532__$1 = (function (){var statearr_19549 = state_19532;
(statearr_19549[(8)] = inst_19485);

(statearr_19549[(10)] = inst_19486);

(statearr_19549[(11)] = inst_19487);

(statearr_19549[(12)] = inst_19484);

return statearr_19549;
})();
var statearr_19550_19584 = state_19532__$1;
(statearr_19550_19584[(2)] = null);

(statearr_19550_19584[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19533 === (17))){
var inst_19498 = (state_19532[(7)]);
var inst_19502 = cljs.core.chunk_first(inst_19498);
var inst_19503 = cljs.core.chunk_rest(inst_19498);
var inst_19504 = cljs.core.count(inst_19502);
var inst_19484 = inst_19503;
var inst_19485 = inst_19502;
var inst_19486 = inst_19504;
var inst_19487 = (0);
var state_19532__$1 = (function (){var statearr_19551 = state_19532;
(statearr_19551[(8)] = inst_19485);

(statearr_19551[(10)] = inst_19486);

(statearr_19551[(11)] = inst_19487);

(statearr_19551[(12)] = inst_19484);

return statearr_19551;
})();
var statearr_19552_19585 = state_19532__$1;
(statearr_19552_19585[(2)] = null);

(statearr_19552_19585[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19533 === (3))){
var inst_19530 = (state_19532[(2)]);
var state_19532__$1 = state_19532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19532__$1,inst_19530);
} else {
if((state_val_19533 === (12))){
var inst_19518 = (state_19532[(2)]);
var state_19532__$1 = state_19532;
var statearr_19553_19586 = state_19532__$1;
(statearr_19553_19586[(2)] = inst_19518);

(statearr_19553_19586[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19533 === (2))){
var state_19532__$1 = state_19532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19532__$1,(4),in$);
} else {
if((state_val_19533 === (23))){
var inst_19526 = (state_19532[(2)]);
var state_19532__$1 = state_19532;
var statearr_19554_19587 = state_19532__$1;
(statearr_19554_19587[(2)] = inst_19526);

(statearr_19554_19587[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19533 === (19))){
var inst_19513 = (state_19532[(2)]);
var state_19532__$1 = state_19532;
var statearr_19555_19588 = state_19532__$1;
(statearr_19555_19588[(2)] = inst_19513);

(statearr_19555_19588[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19533 === (11))){
var inst_19498 = (state_19532[(7)]);
var inst_19484 = (state_19532[(12)]);
var inst_19498__$1 = cljs.core.seq(inst_19484);
var state_19532__$1 = (function (){var statearr_19556 = state_19532;
(statearr_19556[(7)] = inst_19498__$1);

return statearr_19556;
})();
if(inst_19498__$1){
var statearr_19557_19589 = state_19532__$1;
(statearr_19557_19589[(1)] = (14));

} else {
var statearr_19558_19590 = state_19532__$1;
(statearr_19558_19590[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19533 === (9))){
var inst_19520 = (state_19532[(2)]);
var inst_19521 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19532__$1 = (function (){var statearr_19559 = state_19532;
(statearr_19559[(15)] = inst_19520);

return statearr_19559;
})();
if(cljs.core.truth_(inst_19521)){
var statearr_19560_19591 = state_19532__$1;
(statearr_19560_19591[(1)] = (21));

} else {
var statearr_19561_19592 = state_19532__$1;
(statearr_19561_19592[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19533 === (5))){
var inst_19476 = cljs.core.async.close_BANG_(out);
var state_19532__$1 = state_19532;
var statearr_19562_19593 = state_19532__$1;
(statearr_19562_19593[(2)] = inst_19476);

(statearr_19562_19593[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19533 === (14))){
var inst_19498 = (state_19532[(7)]);
var inst_19500 = cljs.core.chunked_seq_QMARK_(inst_19498);
var state_19532__$1 = state_19532;
if(inst_19500){
var statearr_19563_19594 = state_19532__$1;
(statearr_19563_19594[(1)] = (17));

} else {
var statearr_19564_19595 = state_19532__$1;
(statearr_19564_19595[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19533 === (16))){
var inst_19516 = (state_19532[(2)]);
var state_19532__$1 = state_19532;
var statearr_19565_19596 = state_19532__$1;
(statearr_19565_19596[(2)] = inst_19516);

(statearr_19565_19596[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19533 === (10))){
var inst_19485 = (state_19532[(8)]);
var inst_19487 = (state_19532[(11)]);
var inst_19492 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19485,inst_19487);
var state_19532__$1 = state_19532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19532__$1,(13),out,inst_19492);
} else {
if((state_val_19533 === (18))){
var inst_19498 = (state_19532[(7)]);
var inst_19507 = cljs.core.first(inst_19498);
var state_19532__$1 = state_19532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19532__$1,(20),out,inst_19507);
} else {
if((state_val_19533 === (8))){
var inst_19486 = (state_19532[(10)]);
var inst_19487 = (state_19532[(11)]);
var inst_19489 = (inst_19487 < inst_19486);
var inst_19490 = inst_19489;
var state_19532__$1 = state_19532;
if(cljs.core.truth_(inst_19490)){
var statearr_19566_19597 = state_19532__$1;
(statearr_19566_19597[(1)] = (10));

} else {
var statearr_19567_19598 = state_19532__$1;
(statearr_19567_19598[(1)] = (11));

}

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
});})(c__17028__auto__))
;
return ((function (switch__16902__auto__,c__17028__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16903__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16903__auto____0 = (function (){
var statearr_19571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19571[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16903__auto__);

(statearr_19571[(1)] = (1));

return statearr_19571;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16903__auto____1 = (function (state_19532){
while(true){
var ret_value__16904__auto__ = (function (){try{while(true){
var result__16905__auto__ = switch__16902__auto__(state_19532);
if(cljs.core.keyword_identical_QMARK_(result__16905__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16905__auto__;
}
break;
}
}catch (e19572){if((e19572 instanceof Object)){
var ex__16906__auto__ = e19572;
var statearr_19573_19599 = state_19532;
(statearr_19573_19599[(5)] = ex__16906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19532);

return cljs.core.cst$kw$recur;
} else {
throw e19572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16904__auto__,cljs.core.cst$kw$recur)){
var G__19600 = state_19532;
state_19532 = G__19600;
continue;
} else {
return ret_value__16904__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16903__auto__ = function(state_19532){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16903__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16903__auto____1.call(this,state_19532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16903__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16903__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16903__auto__;
})()
;})(switch__16902__auto__,c__17028__auto__))
})();
var state__17030__auto__ = (function (){var statearr_19574 = (f__17029__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17029__auto__.cljs$core$IFn$_invoke$arity$0() : f__17029__auto__.call(null));
(statearr_19574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17028__auto__);

return statearr_19574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
});})(c__17028__auto__))
);

return c__17028__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args19601 = [];
var len__8301__auto___19604 = arguments.length;
var i__8302__auto___19605 = (0);
while(true){
if((i__8302__auto___19605 < len__8301__auto___19604)){
args19601.push((arguments[i__8302__auto___19605]));

var G__19606 = (i__8302__auto___19605 + (1));
i__8302__auto___19605 = G__19606;
continue;
} else {
}
break;
}

var G__19603 = args19601.length;
switch (G__19603) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19601.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args19608 = [];
var len__8301__auto___19611 = arguments.length;
var i__8302__auto___19612 = (0);
while(true){
if((i__8302__auto___19612 < len__8301__auto___19611)){
args19608.push((arguments[i__8302__auto___19612]));

var G__19613 = (i__8302__auto___19612 + (1));
i__8302__auto___19612 = G__19613;
continue;
} else {
}
break;
}

var G__19610 = args19608.length;
switch (G__19610) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19608.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args19615 = [];
var len__8301__auto___19666 = arguments.length;
var i__8302__auto___19667 = (0);
while(true){
if((i__8302__auto___19667 < len__8301__auto___19666)){
args19615.push((arguments[i__8302__auto___19667]));

var G__19668 = (i__8302__auto___19667 + (1));
i__8302__auto___19667 = G__19668;
continue;
} else {
}
break;
}

var G__19617 = args19615.length;
switch (G__19617) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19615.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17028__auto___19670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17028__auto___19670,out){
return (function (){
var f__17029__auto__ = (function (){var switch__16902__auto__ = ((function (c__17028__auto___19670,out){
return (function (state_19641){
var state_val_19642 = (state_19641[(1)]);
if((state_val_19642 === (7))){
var inst_19636 = (state_19641[(2)]);
var state_19641__$1 = state_19641;
var statearr_19643_19671 = state_19641__$1;
(statearr_19643_19671[(2)] = inst_19636);

(statearr_19643_19671[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19642 === (1))){
var inst_19618 = null;
var state_19641__$1 = (function (){var statearr_19644 = state_19641;
(statearr_19644[(7)] = inst_19618);

return statearr_19644;
})();
var statearr_19645_19672 = state_19641__$1;
(statearr_19645_19672[(2)] = null);

(statearr_19645_19672[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19642 === (4))){
var inst_19621 = (state_19641[(8)]);
var inst_19621__$1 = (state_19641[(2)]);
var inst_19622 = (inst_19621__$1 == null);
var inst_19623 = cljs.core.not(inst_19622);
var state_19641__$1 = (function (){var statearr_19646 = state_19641;
(statearr_19646[(8)] = inst_19621__$1);

return statearr_19646;
})();
if(inst_19623){
var statearr_19647_19673 = state_19641__$1;
(statearr_19647_19673[(1)] = (5));

} else {
var statearr_19648_19674 = state_19641__$1;
(statearr_19648_19674[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19642 === (6))){
var state_19641__$1 = state_19641;
var statearr_19649_19675 = state_19641__$1;
(statearr_19649_19675[(2)] = null);

(statearr_19649_19675[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19642 === (3))){
var inst_19638 = (state_19641[(2)]);
var inst_19639 = cljs.core.async.close_BANG_(out);
var state_19641__$1 = (function (){var statearr_19650 = state_19641;
(statearr_19650[(9)] = inst_19638);

return statearr_19650;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19641__$1,inst_19639);
} else {
if((state_val_19642 === (2))){
var state_19641__$1 = state_19641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19641__$1,(4),ch);
} else {
if((state_val_19642 === (11))){
var inst_19621 = (state_19641[(8)]);
var inst_19630 = (state_19641[(2)]);
var inst_19618 = inst_19621;
var state_19641__$1 = (function (){var statearr_19651 = state_19641;
(statearr_19651[(10)] = inst_19630);

(statearr_19651[(7)] = inst_19618);

return statearr_19651;
})();
var statearr_19652_19676 = state_19641__$1;
(statearr_19652_19676[(2)] = null);

(statearr_19652_19676[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19642 === (9))){
var inst_19621 = (state_19641[(8)]);
var state_19641__$1 = state_19641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19641__$1,(11),out,inst_19621);
} else {
if((state_val_19642 === (5))){
var inst_19621 = (state_19641[(8)]);
var inst_19618 = (state_19641[(7)]);
var inst_19625 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19621,inst_19618);
var state_19641__$1 = state_19641;
if(inst_19625){
var statearr_19654_19677 = state_19641__$1;
(statearr_19654_19677[(1)] = (8));

} else {
var statearr_19655_19678 = state_19641__$1;
(statearr_19655_19678[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19642 === (10))){
var inst_19633 = (state_19641[(2)]);
var state_19641__$1 = state_19641;
var statearr_19656_19679 = state_19641__$1;
(statearr_19656_19679[(2)] = inst_19633);

(statearr_19656_19679[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19642 === (8))){
var inst_19618 = (state_19641[(7)]);
var tmp19653 = inst_19618;
var inst_19618__$1 = tmp19653;
var state_19641__$1 = (function (){var statearr_19657 = state_19641;
(statearr_19657[(7)] = inst_19618__$1);

return statearr_19657;
})();
var statearr_19658_19680 = state_19641__$1;
(statearr_19658_19680[(2)] = null);

(statearr_19658_19680[(1)] = (2));


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
});})(c__17028__auto___19670,out))
;
return ((function (switch__16902__auto__,c__17028__auto___19670,out){
return (function() {
var cljs$core$async$state_machine__16903__auto__ = null;
var cljs$core$async$state_machine__16903__auto____0 = (function (){
var statearr_19662 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19662[(0)] = cljs$core$async$state_machine__16903__auto__);

(statearr_19662[(1)] = (1));

return statearr_19662;
});
var cljs$core$async$state_machine__16903__auto____1 = (function (state_19641){
while(true){
var ret_value__16904__auto__ = (function (){try{while(true){
var result__16905__auto__ = switch__16902__auto__(state_19641);
if(cljs.core.keyword_identical_QMARK_(result__16905__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16905__auto__;
}
break;
}
}catch (e19663){if((e19663 instanceof Object)){
var ex__16906__auto__ = e19663;
var statearr_19664_19681 = state_19641;
(statearr_19664_19681[(5)] = ex__16906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19641);

return cljs.core.cst$kw$recur;
} else {
throw e19663;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16904__auto__,cljs.core.cst$kw$recur)){
var G__19682 = state_19641;
state_19641 = G__19682;
continue;
} else {
return ret_value__16904__auto__;
}
break;
}
});
cljs$core$async$state_machine__16903__auto__ = function(state_19641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16903__auto____1.call(this,state_19641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16903__auto____0;
cljs$core$async$state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16903__auto____1;
return cljs$core$async$state_machine__16903__auto__;
})()
;})(switch__16902__auto__,c__17028__auto___19670,out))
})();
var state__17030__auto__ = (function (){var statearr_19665 = (f__17029__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17029__auto__.cljs$core$IFn$_invoke$arity$0() : f__17029__auto__.call(null));
(statearr_19665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17028__auto___19670);

return statearr_19665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
});})(c__17028__auto___19670,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args19683 = [];
var len__8301__auto___19753 = arguments.length;
var i__8302__auto___19754 = (0);
while(true){
if((i__8302__auto___19754 < len__8301__auto___19753)){
args19683.push((arguments[i__8302__auto___19754]));

var G__19755 = (i__8302__auto___19754 + (1));
i__8302__auto___19754 = G__19755;
continue;
} else {
}
break;
}

var G__19685 = args19683.length;
switch (G__19685) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19683.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17028__auto___19757 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17028__auto___19757,out){
return (function (){
var f__17029__auto__ = (function (){var switch__16902__auto__ = ((function (c__17028__auto___19757,out){
return (function (state_19723){
var state_val_19724 = (state_19723[(1)]);
if((state_val_19724 === (7))){
var inst_19719 = (state_19723[(2)]);
var state_19723__$1 = state_19723;
var statearr_19725_19758 = state_19723__$1;
(statearr_19725_19758[(2)] = inst_19719);

(statearr_19725_19758[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19724 === (1))){
var inst_19686 = (new Array(n));
var inst_19687 = inst_19686;
var inst_19688 = (0);
var state_19723__$1 = (function (){var statearr_19726 = state_19723;
(statearr_19726[(7)] = inst_19688);

(statearr_19726[(8)] = inst_19687);

return statearr_19726;
})();
var statearr_19727_19759 = state_19723__$1;
(statearr_19727_19759[(2)] = null);

(statearr_19727_19759[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19724 === (4))){
var inst_19691 = (state_19723[(9)]);
var inst_19691__$1 = (state_19723[(2)]);
var inst_19692 = (inst_19691__$1 == null);
var inst_19693 = cljs.core.not(inst_19692);
var state_19723__$1 = (function (){var statearr_19728 = state_19723;
(statearr_19728[(9)] = inst_19691__$1);

return statearr_19728;
})();
if(inst_19693){
var statearr_19729_19760 = state_19723__$1;
(statearr_19729_19760[(1)] = (5));

} else {
var statearr_19730_19761 = state_19723__$1;
(statearr_19730_19761[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19724 === (15))){
var inst_19713 = (state_19723[(2)]);
var state_19723__$1 = state_19723;
var statearr_19731_19762 = state_19723__$1;
(statearr_19731_19762[(2)] = inst_19713);

(statearr_19731_19762[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19724 === (13))){
var state_19723__$1 = state_19723;
var statearr_19732_19763 = state_19723__$1;
(statearr_19732_19763[(2)] = null);

(statearr_19732_19763[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19724 === (6))){
var inst_19688 = (state_19723[(7)]);
var inst_19709 = (inst_19688 > (0));
var state_19723__$1 = state_19723;
if(cljs.core.truth_(inst_19709)){
var statearr_19733_19764 = state_19723__$1;
(statearr_19733_19764[(1)] = (12));

} else {
var statearr_19734_19765 = state_19723__$1;
(statearr_19734_19765[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19724 === (3))){
var inst_19721 = (state_19723[(2)]);
var state_19723__$1 = state_19723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19723__$1,inst_19721);
} else {
if((state_val_19724 === (12))){
var inst_19687 = (state_19723[(8)]);
var inst_19711 = cljs.core.vec(inst_19687);
var state_19723__$1 = state_19723;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19723__$1,(15),out,inst_19711);
} else {
if((state_val_19724 === (2))){
var state_19723__$1 = state_19723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19723__$1,(4),ch);
} else {
if((state_val_19724 === (11))){
var inst_19703 = (state_19723[(2)]);
var inst_19704 = (new Array(n));
var inst_19687 = inst_19704;
var inst_19688 = (0);
var state_19723__$1 = (function (){var statearr_19735 = state_19723;
(statearr_19735[(10)] = inst_19703);

(statearr_19735[(7)] = inst_19688);

(statearr_19735[(8)] = inst_19687);

return statearr_19735;
})();
var statearr_19736_19766 = state_19723__$1;
(statearr_19736_19766[(2)] = null);

(statearr_19736_19766[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19724 === (9))){
var inst_19687 = (state_19723[(8)]);
var inst_19701 = cljs.core.vec(inst_19687);
var state_19723__$1 = state_19723;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19723__$1,(11),out,inst_19701);
} else {
if((state_val_19724 === (5))){
var inst_19688 = (state_19723[(7)]);
var inst_19687 = (state_19723[(8)]);
var inst_19691 = (state_19723[(9)]);
var inst_19696 = (state_19723[(11)]);
var inst_19695 = (inst_19687[inst_19688] = inst_19691);
var inst_19696__$1 = (inst_19688 + (1));
var inst_19697 = (inst_19696__$1 < n);
var state_19723__$1 = (function (){var statearr_19737 = state_19723;
(statearr_19737[(12)] = inst_19695);

(statearr_19737[(11)] = inst_19696__$1);

return statearr_19737;
})();
if(cljs.core.truth_(inst_19697)){
var statearr_19738_19767 = state_19723__$1;
(statearr_19738_19767[(1)] = (8));

} else {
var statearr_19739_19768 = state_19723__$1;
(statearr_19739_19768[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19724 === (14))){
var inst_19716 = (state_19723[(2)]);
var inst_19717 = cljs.core.async.close_BANG_(out);
var state_19723__$1 = (function (){var statearr_19741 = state_19723;
(statearr_19741[(13)] = inst_19716);

return statearr_19741;
})();
var statearr_19742_19769 = state_19723__$1;
(statearr_19742_19769[(2)] = inst_19717);

(statearr_19742_19769[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19724 === (10))){
var inst_19707 = (state_19723[(2)]);
var state_19723__$1 = state_19723;
var statearr_19743_19770 = state_19723__$1;
(statearr_19743_19770[(2)] = inst_19707);

(statearr_19743_19770[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19724 === (8))){
var inst_19687 = (state_19723[(8)]);
var inst_19696 = (state_19723[(11)]);
var tmp19740 = inst_19687;
var inst_19687__$1 = tmp19740;
var inst_19688 = inst_19696;
var state_19723__$1 = (function (){var statearr_19744 = state_19723;
(statearr_19744[(7)] = inst_19688);

(statearr_19744[(8)] = inst_19687__$1);

return statearr_19744;
})();
var statearr_19745_19771 = state_19723__$1;
(statearr_19745_19771[(2)] = null);

(statearr_19745_19771[(1)] = (2));


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
});})(c__17028__auto___19757,out))
;
return ((function (switch__16902__auto__,c__17028__auto___19757,out){
return (function() {
var cljs$core$async$state_machine__16903__auto__ = null;
var cljs$core$async$state_machine__16903__auto____0 = (function (){
var statearr_19749 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19749[(0)] = cljs$core$async$state_machine__16903__auto__);

(statearr_19749[(1)] = (1));

return statearr_19749;
});
var cljs$core$async$state_machine__16903__auto____1 = (function (state_19723){
while(true){
var ret_value__16904__auto__ = (function (){try{while(true){
var result__16905__auto__ = switch__16902__auto__(state_19723);
if(cljs.core.keyword_identical_QMARK_(result__16905__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16905__auto__;
}
break;
}
}catch (e19750){if((e19750 instanceof Object)){
var ex__16906__auto__ = e19750;
var statearr_19751_19772 = state_19723;
(statearr_19751_19772[(5)] = ex__16906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19723);

return cljs.core.cst$kw$recur;
} else {
throw e19750;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16904__auto__,cljs.core.cst$kw$recur)){
var G__19773 = state_19723;
state_19723 = G__19773;
continue;
} else {
return ret_value__16904__auto__;
}
break;
}
});
cljs$core$async$state_machine__16903__auto__ = function(state_19723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16903__auto____1.call(this,state_19723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16903__auto____0;
cljs$core$async$state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16903__auto____1;
return cljs$core$async$state_machine__16903__auto__;
})()
;})(switch__16902__auto__,c__17028__auto___19757,out))
})();
var state__17030__auto__ = (function (){var statearr_19752 = (f__17029__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17029__auto__.cljs$core$IFn$_invoke$arity$0() : f__17029__auto__.call(null));
(statearr_19752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17028__auto___19757);

return statearr_19752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
});})(c__17028__auto___19757,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args19774 = [];
var len__8301__auto___19848 = arguments.length;
var i__8302__auto___19849 = (0);
while(true){
if((i__8302__auto___19849 < len__8301__auto___19848)){
args19774.push((arguments[i__8302__auto___19849]));

var G__19850 = (i__8302__auto___19849 + (1));
i__8302__auto___19849 = G__19850;
continue;
} else {
}
break;
}

var G__19776 = args19774.length;
switch (G__19776) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19774.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17028__auto___19852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17028__auto___19852,out){
return (function (){
var f__17029__auto__ = (function (){var switch__16902__auto__ = ((function (c__17028__auto___19852,out){
return (function (state_19818){
var state_val_19819 = (state_19818[(1)]);
if((state_val_19819 === (7))){
var inst_19814 = (state_19818[(2)]);
var state_19818__$1 = state_19818;
var statearr_19820_19853 = state_19818__$1;
(statearr_19820_19853[(2)] = inst_19814);

(statearr_19820_19853[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19819 === (1))){
var inst_19777 = [];
var inst_19778 = inst_19777;
var inst_19779 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_19818__$1 = (function (){var statearr_19821 = state_19818;
(statearr_19821[(7)] = inst_19778);

(statearr_19821[(8)] = inst_19779);

return statearr_19821;
})();
var statearr_19822_19854 = state_19818__$1;
(statearr_19822_19854[(2)] = null);

(statearr_19822_19854[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19819 === (4))){
var inst_19782 = (state_19818[(9)]);
var inst_19782__$1 = (state_19818[(2)]);
var inst_19783 = (inst_19782__$1 == null);
var inst_19784 = cljs.core.not(inst_19783);
var state_19818__$1 = (function (){var statearr_19823 = state_19818;
(statearr_19823[(9)] = inst_19782__$1);

return statearr_19823;
})();
if(inst_19784){
var statearr_19824_19855 = state_19818__$1;
(statearr_19824_19855[(1)] = (5));

} else {
var statearr_19825_19856 = state_19818__$1;
(statearr_19825_19856[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19819 === (15))){
var inst_19808 = (state_19818[(2)]);
var state_19818__$1 = state_19818;
var statearr_19826_19857 = state_19818__$1;
(statearr_19826_19857[(2)] = inst_19808);

(statearr_19826_19857[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19819 === (13))){
var state_19818__$1 = state_19818;
var statearr_19827_19858 = state_19818__$1;
(statearr_19827_19858[(2)] = null);

(statearr_19827_19858[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19819 === (6))){
var inst_19778 = (state_19818[(7)]);
var inst_19803 = inst_19778.length;
var inst_19804 = (inst_19803 > (0));
var state_19818__$1 = state_19818;
if(cljs.core.truth_(inst_19804)){
var statearr_19828_19859 = state_19818__$1;
(statearr_19828_19859[(1)] = (12));

} else {
var statearr_19829_19860 = state_19818__$1;
(statearr_19829_19860[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19819 === (3))){
var inst_19816 = (state_19818[(2)]);
var state_19818__$1 = state_19818;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19818__$1,inst_19816);
} else {
if((state_val_19819 === (12))){
var inst_19778 = (state_19818[(7)]);
var inst_19806 = cljs.core.vec(inst_19778);
var state_19818__$1 = state_19818;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19818__$1,(15),out,inst_19806);
} else {
if((state_val_19819 === (2))){
var state_19818__$1 = state_19818;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19818__$1,(4),ch);
} else {
if((state_val_19819 === (11))){
var inst_19786 = (state_19818[(10)]);
var inst_19782 = (state_19818[(9)]);
var inst_19796 = (state_19818[(2)]);
var inst_19797 = [];
var inst_19798 = inst_19797.push(inst_19782);
var inst_19778 = inst_19797;
var inst_19779 = inst_19786;
var state_19818__$1 = (function (){var statearr_19830 = state_19818;
(statearr_19830[(7)] = inst_19778);

(statearr_19830[(11)] = inst_19796);

(statearr_19830[(8)] = inst_19779);

(statearr_19830[(12)] = inst_19798);

return statearr_19830;
})();
var statearr_19831_19861 = state_19818__$1;
(statearr_19831_19861[(2)] = null);

(statearr_19831_19861[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19819 === (9))){
var inst_19778 = (state_19818[(7)]);
var inst_19794 = cljs.core.vec(inst_19778);
var state_19818__$1 = state_19818;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19818__$1,(11),out,inst_19794);
} else {
if((state_val_19819 === (5))){
var inst_19779 = (state_19818[(8)]);
var inst_19786 = (state_19818[(10)]);
var inst_19782 = (state_19818[(9)]);
var inst_19786__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19782) : f.call(null,inst_19782));
var inst_19787 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19786__$1,inst_19779);
var inst_19788 = cljs.core.keyword_identical_QMARK_(inst_19779,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_19789 = (inst_19787) || (inst_19788);
var state_19818__$1 = (function (){var statearr_19832 = state_19818;
(statearr_19832[(10)] = inst_19786__$1);

return statearr_19832;
})();
if(cljs.core.truth_(inst_19789)){
var statearr_19833_19862 = state_19818__$1;
(statearr_19833_19862[(1)] = (8));

} else {
var statearr_19834_19863 = state_19818__$1;
(statearr_19834_19863[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19819 === (14))){
var inst_19811 = (state_19818[(2)]);
var inst_19812 = cljs.core.async.close_BANG_(out);
var state_19818__$1 = (function (){var statearr_19836 = state_19818;
(statearr_19836[(13)] = inst_19811);

return statearr_19836;
})();
var statearr_19837_19864 = state_19818__$1;
(statearr_19837_19864[(2)] = inst_19812);

(statearr_19837_19864[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19819 === (10))){
var inst_19801 = (state_19818[(2)]);
var state_19818__$1 = state_19818;
var statearr_19838_19865 = state_19818__$1;
(statearr_19838_19865[(2)] = inst_19801);

(statearr_19838_19865[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19819 === (8))){
var inst_19778 = (state_19818[(7)]);
var inst_19786 = (state_19818[(10)]);
var inst_19782 = (state_19818[(9)]);
var inst_19791 = inst_19778.push(inst_19782);
var tmp19835 = inst_19778;
var inst_19778__$1 = tmp19835;
var inst_19779 = inst_19786;
var state_19818__$1 = (function (){var statearr_19839 = state_19818;
(statearr_19839[(7)] = inst_19778__$1);

(statearr_19839[(8)] = inst_19779);

(statearr_19839[(14)] = inst_19791);

return statearr_19839;
})();
var statearr_19840_19866 = state_19818__$1;
(statearr_19840_19866[(2)] = null);

(statearr_19840_19866[(1)] = (2));


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
});})(c__17028__auto___19852,out))
;
return ((function (switch__16902__auto__,c__17028__auto___19852,out){
return (function() {
var cljs$core$async$state_machine__16903__auto__ = null;
var cljs$core$async$state_machine__16903__auto____0 = (function (){
var statearr_19844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19844[(0)] = cljs$core$async$state_machine__16903__auto__);

(statearr_19844[(1)] = (1));

return statearr_19844;
});
var cljs$core$async$state_machine__16903__auto____1 = (function (state_19818){
while(true){
var ret_value__16904__auto__ = (function (){try{while(true){
var result__16905__auto__ = switch__16902__auto__(state_19818);
if(cljs.core.keyword_identical_QMARK_(result__16905__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16905__auto__;
}
break;
}
}catch (e19845){if((e19845 instanceof Object)){
var ex__16906__auto__ = e19845;
var statearr_19846_19867 = state_19818;
(statearr_19846_19867[(5)] = ex__16906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19818);

return cljs.core.cst$kw$recur;
} else {
throw e19845;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16904__auto__,cljs.core.cst$kw$recur)){
var G__19868 = state_19818;
state_19818 = G__19868;
continue;
} else {
return ret_value__16904__auto__;
}
break;
}
});
cljs$core$async$state_machine__16903__auto__ = function(state_19818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16903__auto____1.call(this,state_19818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16903__auto____0;
cljs$core$async$state_machine__16903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16903__auto____1;
return cljs$core$async$state_machine__16903__auto__;
})()
;})(switch__16902__auto__,c__17028__auto___19852,out))
})();
var state__17030__auto__ = (function (){var statearr_19847 = (f__17029__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17029__auto__.cljs$core$IFn$_invoke$arity$0() : f__17029__auto__.call(null));
(statearr_19847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17028__auto___19852);

return statearr_19847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17030__auto__);
});})(c__17028__auto___19852,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

