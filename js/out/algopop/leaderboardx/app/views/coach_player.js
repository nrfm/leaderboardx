// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('algopop.leaderboardx.app.views.coach_player');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('algopop.leaderboardx.app.db');
algopop.leaderboardx.app.views.coach_player.transpose = (function algopop$leaderboardx$app$views$coach_player$transpose(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.vector,xs);
});
algopop.leaderboardx.app.views.coach_player.player = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["William","April","May"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Productivity",(7),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Leadership",(5),(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Effort",(7),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Attitude",(5),(7)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Happiness",(5),(4)], null)], null));
algopop.leaderboardx.app.views.coach_player.performance_table = (function algopop$leaderboardx$app$views$coach_player$performance_table(p__44925){
var vec__44977 = p__44925;
var seq__44978 = cljs.core.seq(vec__44977);
var first__44979 = cljs.core.first(seq__44978);
var seq__44978__$1 = cljs.core.next(seq__44978);
var headers = first__44979;
var data_rows = seq__44978__$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$table$table_DASH_responsive,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr], null),cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th], null),(function (){var iter__7942__auto__ = ((function (vec__44977,seq__44978,first__44979,seq__44978__$1,headers,data_rows){
return (function algopop$leaderboardx$app$views$coach_player$performance_table_$_iter__44980(s__44981){
return (new cljs.core.LazySeq(null,((function (vec__44977,seq__44978,first__44979,seq__44978__$1,headers,data_rows){
return (function (){
var s__44981__$1 = s__44981;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__44981__$1);
if(temp__6753__auto__){
var s__44981__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44981__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__44981__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__44983 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__44982 = (0);
while(true){
if((i__44982 < size__7941__auto__)){
var date = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__44982);
cljs.core.chunk_append(b__44983,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,date], null));

var G__45028 = (i__44982 + (1));
i__44982 = G__45028;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44983),algopop$leaderboardx$app$views$coach_player$performance_table_$_iter__44980(cljs.core.chunk_rest(s__44981__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44983),null);
}
} else {
var date = cljs.core.first(s__44981__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,date], null),algopop$leaderboardx$app$views$coach_player$performance_table_$_iter__44980(cljs.core.rest(s__44981__$2)));
}
} else {
return null;
}
break;
}
});})(vec__44977,seq__44978,first__44979,seq__44978__$1,headers,data_rows))
,null,null));
});})(vec__44977,seq__44978,first__44979,seq__44978__$1,headers,data_rows))
;
return iter__7942__auto__(cljs.core.rest(headers));
})()))], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody], null),(function (){var iter__7942__auto__ = ((function (vec__44977,seq__44978,first__44979,seq__44978__$1,headers,data_rows){
return (function algopop$leaderboardx$app$views$coach_player$performance_table_$_iter__44986(s__44987){
return (new cljs.core.LazySeq(null,((function (vec__44977,seq__44978,first__44979,seq__44978__$1,headers,data_rows){
return (function (){
var s__44987__$1 = s__44987;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__44987__$1);
if(temp__6753__auto__){
var s__44987__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44987__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__44987__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__44989 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__44988 = (0);
while(true){
if((i__44988 < size__7941__auto__)){
var vec__45010 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__44988);
var seq__45011 = cljs.core.seq(vec__45010);
var first__45012 = cljs.core.first(seq__45011);
var seq__45011__$1 = cljs.core.next(seq__45011);
var attr = first__45012;
var vs = seq__45011__$1;
cljs.core.chunk_append(b__44989,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr], null),cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,attr], null),(function (){var iter__7942__auto__ = ((function (i__44988,vec__45010,seq__45011,first__45012,seq__45011__$1,attr,vs,c__7940__auto__,size__7941__auto__,b__44989,s__44987__$2,temp__6753__auto__,vec__44977,seq__44978,first__44979,seq__44978__$1,headers,data_rows){
return (function algopop$leaderboardx$app$views$coach_player$performance_table_$_iter__44986_$_iter__45013(s__45014){
return (new cljs.core.LazySeq(null,((function (i__44988,vec__45010,seq__45011,first__45012,seq__45011__$1,attr,vs,c__7940__auto__,size__7941__auto__,b__44989,s__44987__$2,temp__6753__auto__,vec__44977,seq__44978,first__44979,seq__44978__$1,headers,data_rows){
return (function (){
var s__45014__$1 = s__45014;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__45014__$1);
if(temp__6753__auto____$1){
var s__45014__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45014__$2)){
var c__7940__auto____$1 = cljs.core.chunk_first(s__45014__$2);
var size__7941__auto____$1 = cljs.core.count(c__7940__auto____$1);
var b__45016 = cljs.core.chunk_buffer(size__7941__auto____$1);
if((function (){var i__45015 = (0);
while(true){
if((i__45015 < size__7941__auto____$1)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto____$1,i__45015);
cljs.core.chunk_append(b__45016,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,v], null));

var G__45029 = (i__45015 + (1));
i__45015 = G__45029;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45016),algopop$leaderboardx$app$views$coach_player$performance_table_$_iter__44986_$_iter__45013(cljs.core.chunk_rest(s__45014__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45016),null);
}
} else {
var v = cljs.core.first(s__45014__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,v], null),algopop$leaderboardx$app$views$coach_player$performance_table_$_iter__44986_$_iter__45013(cljs.core.rest(s__45014__$2)));
}
} else {
return null;
}
break;
}
});})(i__44988,vec__45010,seq__45011,first__45012,seq__45011__$1,attr,vs,c__7940__auto__,size__7941__auto__,b__44989,s__44987__$2,temp__6753__auto__,vec__44977,seq__44978,first__44979,seq__44978__$1,headers,data_rows))
,null,null));
});})(i__44988,vec__45010,seq__45011,first__45012,seq__45011__$1,attr,vs,c__7940__auto__,size__7941__auto__,b__44989,s__44987__$2,temp__6753__auto__,vec__44977,seq__44978,first__44979,seq__44978__$1,headers,data_rows))
;
return iter__7942__auto__(vs);
})())));

var G__45030 = (i__44988 + (1));
i__44988 = G__45030;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44989),algopop$leaderboardx$app$views$coach_player$performance_table_$_iter__44986(cljs.core.chunk_rest(s__44987__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44989),null);
}
} else {
var vec__45019 = cljs.core.first(s__44987__$2);
var seq__45020 = cljs.core.seq(vec__45019);
var first__45021 = cljs.core.first(seq__45020);
var seq__45020__$1 = cljs.core.next(seq__45020);
var attr = first__45021;
var vs = seq__45020__$1;
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr], null),cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,attr], null),(function (){var iter__7942__auto__ = ((function (vec__45019,seq__45020,first__45021,seq__45020__$1,attr,vs,s__44987__$2,temp__6753__auto__,vec__44977,seq__44978,first__44979,seq__44978__$1,headers,data_rows){
return (function algopop$leaderboardx$app$views$coach_player$performance_table_$_iter__44986_$_iter__45022(s__45023){
return (new cljs.core.LazySeq(null,((function (vec__45019,seq__45020,first__45021,seq__45020__$1,attr,vs,s__44987__$2,temp__6753__auto__,vec__44977,seq__44978,first__44979,seq__44978__$1,headers,data_rows){
return (function (){
var s__45023__$1 = s__45023;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__45023__$1);
if(temp__6753__auto____$1){
var s__45023__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45023__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__45023__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__45025 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__45024 = (0);
while(true){
if((i__45024 < size__7941__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__45024);
cljs.core.chunk_append(b__45025,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,v], null));

var G__45031 = (i__45024 + (1));
i__45024 = G__45031;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45025),algopop$leaderboardx$app$views$coach_player$performance_table_$_iter__44986_$_iter__45022(cljs.core.chunk_rest(s__45023__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45025),null);
}
} else {
var v = cljs.core.first(s__45023__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,v], null),algopop$leaderboardx$app$views$coach_player$performance_table_$_iter__44986_$_iter__45022(cljs.core.rest(s__45023__$2)));
}
} else {
return null;
}
break;
}
});})(vec__45019,seq__45020,first__45021,seq__45020__$1,attr,vs,s__44987__$2,temp__6753__auto__,vec__44977,seq__44978,first__44979,seq__44978__$1,headers,data_rows))
,null,null));
});})(vec__45019,seq__45020,first__45021,seq__45020__$1,attr,vs,s__44987__$2,temp__6753__auto__,vec__44977,seq__44978,first__44979,seq__44978__$1,headers,data_rows))
;
return iter__7942__auto__(vs);
})())),algopop$leaderboardx$app$views$coach_player$performance_table_$_iter__44986(cljs.core.rest(s__44987__$2)));
}
} else {
return null;
}
break;
}
});})(vec__44977,seq__44978,first__44979,seq__44978__$1,headers,data_rows))
,null,null));
});})(vec__44977,seq__44978,first__44979,seq__44978__$1,headers,data_rows))
;
return iter__7942__auto__(data_rows);
})())], null);
});
algopop.leaderboardx.app.views.coach_player.acheivements = (function algopop$leaderboardx$app$views$coach_player$acheivements(x){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Acheivements"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Won the spelling bee"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"April: learnt the yoyo"], null)], null)], null);
});
algopop.leaderboardx.app.views.coach_player.needs_improvement = (function algopop$leaderboardx$app$views$coach_player$needs_improvement(x){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Needs improvement"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Sprint times"], null)], null)], null);
});
algopop.leaderboardx.app.views.coach_player.goals = (function algopop$leaderboardx$app$views$coach_player$goals(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Goals"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Train sprinting every second day"], null)], null)], null);
});
algopop.leaderboardx.app.views.coach_player.coach_comments = (function algopop$leaderboardx$app$views$coach_player$coach_comments(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Coach comments"], null)], null);
});
algopop.leaderboardx.app.views.coach_player.player_comments = (function algopop$leaderboardx$app$views$coach_player$player_comments(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Player comments"], null)], null);
});
algopop.leaderboardx.app.views.coach_player.coach_player_view = (function algopop$leaderboardx$app$views$coach_player$coach_player_view(){
var p = algopop.leaderboardx.app.db.player();
return ((function (p){
return (function algopop$leaderboardx$app$views$coach_player$coach_player_view_$_a_coach_player_view(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.deref.call(null,p))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.coach_player.performance_table,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(algopop.leaderboardx.app.views.coach_player.player) : cljs.core.deref.call(null,algopop.leaderboardx.app.views.coach_player.player))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.coach_player.acheivements,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(algopop.leaderboardx.app.views.coach_player.player) : cljs.core.deref.call(null,algopop.leaderboardx.app.views.coach_player.player))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.coach_player.needs_improvement,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(algopop.leaderboardx.app.views.coach_player.player) : cljs.core.deref.call(null,algopop.leaderboardx.app.views.coach_player.player))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.coach_player.goals], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.coach_player.coach_comments,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(algopop.leaderboardx.app.views.coach_player.player) : cljs.core.deref.call(null,algopop.leaderboardx.app.views.coach_player.player))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.coach_player.player_comments,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(algopop.leaderboardx.app.views.coach_player.player) : cljs.core.deref.call(null,algopop.leaderboardx.app.views.coach_player.player))], null)], null);
});
;})(p))
});
