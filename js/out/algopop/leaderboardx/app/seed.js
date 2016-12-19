// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('algopop.leaderboardx.app.seed');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('algopop.leaderboardx.app.db');
algopop.leaderboardx.app.seed.names = cljs.core.PersistentVector.fromArray(["Emma","Noah","Olivia","Liam","Sophia","Mason","Isabella","Jacob","Ava","William","Mia","Ethan","Emily","Michael","Abigail","Alexander","Madison","James","Charlotte","Daniel","Harper","Elijah","Sofia","Benjamin","Avery","Logan","Elizabeth","Aiden","Amelia","Jayden","Evelyn","Matthew","Ella","Jackson","Chloe","David","Victoria","Lucas","Aubrey","Joseph","Grace","Anthony","Zoey","Andrew","Natalie","Samuel","Addison","Gabriel","Lillian","Joshua","Brooklyn","John","Lily","Carter","Hannah","Luke","Layla","Dylan","Scarlett","Christopher","Aria","Isaac","Zoe","Oliver","Samantha","Henry","Anna","Sebastian","Leah","Caleb","Audrey","Owen","Ariana","Ryan","Allison","Nathan","Savannah","Wyatt","Arianna","Hunter","Camila","Jack","Penelope","Christian","Gabriella","Landon","Claire","Jonathan","Aaliyah","Levi","Sadie","Jaxon","Riley","Julian","Skylar","Isaiah","Nora","Eli","Sarah","Aaron","Hailey","Charles","Kaylee","Connor","Paisley","Cameron","Kennedy","Thomas","Ellie","Jordan","Peyton","Jeremiah","Annabelle","Nicholas","Caroline","Evan","Madelyn","Adrian","Serenity","Gavin","Aubree","Robert","Lucy","Brayden","Alexa","Grayson","Alexis","Josiah","Nevaeh","Colton","Stella","Austin","Violet","Angel","Genesis","Jace","Mackenzie","Dominic","Bella","Kevin","Autumn","Brandon","Mila","Tyler","Kylie","Parker","Maya","Ayden","Piper","Jason","Alyssa","Jose","Taylor","Ian","Eleanor","Chase","Melanie","Adam","Naomi","Hudson","Faith","Nolan","Eva","Zachary","Katherine","Easton","Lydia","Blake","Brianna","Jaxson","Julia","Cooper","Ashley","Lincoln","Khloe","Xavier","Madeline","Bentley","Ruby","Kayden","Sophie","Carson","Alexandra","Brody","London","Asher","Lauren","Nathaniel","Gianna","Ryder","Isabelle","Justin","Alice","Leo","Vivian","Juan","Hadley","Luis"], true);
algopop.leaderboardx.app.seed.rand_graph = (function algopop$leaderboardx$app$seed$rand_graph(){
var ks = cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.shuffle(algopop.leaderboardx.app.seed.names));
var nodes = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7942__auto__ = ((function (ks){
return (function algopop$leaderboardx$app$seed$rand_graph_$_iter__44187(s__44188){
return (new cljs.core.LazySeq(null,((function (ks){
return (function (){
var s__44188__$1 = s__44188;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__44188__$1);
if(temp__6753__auto__){
var s__44188__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44188__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__44188__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__44190 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__44189 = (0);
while(true){
if((i__44189 < size__7941__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__44189);
cljs.core.chunk_append(b__44190,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hair,cljs.core.rand_nth(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","brown","black","blonde"], null))], null)], null));

var G__44223 = (i__44189 + (1));
i__44189 = G__44223;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44190),algopop$leaderboardx$app$seed$rand_graph_$_iter__44187(cljs.core.chunk_rest(s__44188__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44190),null);
}
} else {
var k = cljs.core.first(s__44188__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hair,cljs.core.rand_nth(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","brown","black","blonde"], null))], null)], null),algopop$leaderboardx$app$seed$rand_graph_$_iter__44187(cljs.core.rest(s__44188__$2)));
}
} else {
return null;
}
break;
}
});})(ks))
,null,null));
});})(ks))
;
return iter__7942__auto__(ks);
})());
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nodes,nodes,cljs.core.cst$kw$edges,(function (){var iter__7942__auto__ = ((function (ks,nodes){
return (function algopop$leaderboardx$app$seed$rand_graph_$_iter__44193(s__44194){
return (new cljs.core.LazySeq(null,((function (ks,nodes){
return (function (){
var s__44194__$1 = s__44194;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__44194__$1);
if(temp__6753__auto__){
var s__44194__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44194__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__44194__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__44196 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__44195 = (0);
while(true){
if((i__44195 < size__7941__auto__)){
var from = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__44195);
cljs.core.chunk_append(b__44196,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7942__auto__ = ((function (i__44195,from,c__7940__auto__,size__7941__auto__,b__44196,s__44194__$2,temp__6753__auto__,ks,nodes){
return (function algopop$leaderboardx$app$seed$rand_graph_$_iter__44193_$_iter__44211(s__44212){
return (new cljs.core.LazySeq(null,((function (i__44195,from,c__7940__auto__,size__7941__auto__,b__44196,s__44194__$2,temp__6753__auto__,ks,nodes){
return (function (){
var s__44212__$1 = s__44212;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__44212__$1);
if(temp__6753__auto____$1){
var s__44212__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__44212__$2)){
var c__7940__auto____$1 = cljs.core.chunk_first(s__44212__$2);
var size__7941__auto____$1 = cljs.core.count(c__7940__auto____$1);
var b__44214 = cljs.core.chunk_buffer(size__7941__auto____$1);
if((function (){var i__44213 = (0);
while(true){
if((i__44213 < size__7941__auto____$1)){
var to = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto____$1,i__44213);
cljs.core.chunk_append(b__44214,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(1)], null)], null));

var G__44224 = (i__44213 + (1));
i__44213 = G__44224;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44214),algopop$leaderboardx$app$seed$rand_graph_$_iter__44193_$_iter__44211(cljs.core.chunk_rest(s__44212__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44214),null);
}
} else {
var to = cljs.core.first(s__44212__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(1)], null)], null),algopop$leaderboardx$app$seed$rand_graph_$_iter__44193_$_iter__44211(cljs.core.rest(s__44212__$2)));
}
} else {
return null;
}
break;
}
});})(i__44195,from,c__7940__auto__,size__7941__auto__,b__44196,s__44194__$2,temp__6753__auto__,ks,nodes))
,null,null));
});})(i__44195,from,c__7940__auto__,size__7941__auto__,b__44196,s__44194__$2,temp__6753__auto__,ks,nodes))
;
return iter__7942__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),cljs.core.shuffle(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([from], true),ks))));
})())], null));

var G__44225 = (i__44195 + (1));
i__44195 = G__44225;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44196),algopop$leaderboardx$app$seed$rand_graph_$_iter__44193(cljs.core.chunk_rest(s__44194__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44196),null);
}
} else {
var from = cljs.core.first(s__44194__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7942__auto__ = ((function (from,s__44194__$2,temp__6753__auto__,ks,nodes){
return (function algopop$leaderboardx$app$seed$rand_graph_$_iter__44193_$_iter__44217(s__44218){
return (new cljs.core.LazySeq(null,((function (from,s__44194__$2,temp__6753__auto__,ks,nodes){
return (function (){
var s__44218__$1 = s__44218;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__44218__$1);
if(temp__6753__auto____$1){
var s__44218__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__44218__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__44218__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__44220 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__44219 = (0);
while(true){
if((i__44219 < size__7941__auto__)){
var to = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__44219);
cljs.core.chunk_append(b__44220,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(1)], null)], null));

var G__44226 = (i__44219 + (1));
i__44219 = G__44226;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44220),algopop$leaderboardx$app$seed$rand_graph_$_iter__44193_$_iter__44217(cljs.core.chunk_rest(s__44218__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44220),null);
}
} else {
var to = cljs.core.first(s__44218__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(1)], null)], null),algopop$leaderboardx$app$seed$rand_graph_$_iter__44193_$_iter__44217(cljs.core.rest(s__44218__$2)));
}
} else {
return null;
}
break;
}
});})(from,s__44194__$2,temp__6753__auto__,ks,nodes))
,null,null));
});})(from,s__44194__$2,temp__6753__auto__,ks,nodes))
;
return iter__7942__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),cljs.core.shuffle(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([from], true),ks))));
})())], null),algopop$leaderboardx$app$seed$rand_graph_$_iter__44193(cljs.core.rest(s__44194__$2)));
}
} else {
return null;
}
break;
}
});})(ks,nodes))
,null,null));
});})(ks,nodes))
;
return iter__7942__auto__(ks);
})()], null);
});
algopop.leaderboardx.app.seed.set_rand_BANG_ = (function algopop$leaderboardx$app$seed$set_rand_BANG_(){
var seq__44237 = cljs.core.seq(cljs.core.cst$kw$edges.cljs$core$IFn$_invoke$arity$1(algopop.leaderboardx.app.seed.rand_graph()));
var chunk__44238 = null;
var count__44239 = (0);
var i__44240 = (0);
while(true){
if((i__44240 < count__44239)){
var vec__44241 = chunk__44238.cljs$core$IIndexed$_nth$arity$2(null,i__44240);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44241,(0),null);
var outs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44241,(1),null);
algopop.leaderboardx.app.db.replace_edges(k,outs,null);

var G__44247 = seq__44237;
var G__44248 = chunk__44238;
var G__44249 = count__44239;
var G__44250 = (i__44240 + (1));
seq__44237 = G__44247;
chunk__44238 = G__44248;
count__44239 = G__44249;
i__44240 = G__44250;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__44237);
if(temp__6753__auto__){
var seq__44237__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44237__$1)){
var c__7991__auto__ = cljs.core.chunk_first(seq__44237__$1);
var G__44251 = cljs.core.chunk_rest(seq__44237__$1);
var G__44252 = c__7991__auto__;
var G__44253 = cljs.core.count(c__7991__auto__);
var G__44254 = (0);
seq__44237 = G__44251;
chunk__44238 = G__44252;
count__44239 = G__44253;
i__44240 = G__44254;
continue;
} else {
var vec__44244 = cljs.core.first(seq__44237__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44244,(0),null);
var outs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44244,(1),null);
algopop.leaderboardx.app.db.replace_edges(k,outs,null);

var G__44255 = cljs.core.next(seq__44237__$1);
var G__44256 = null;
var G__44257 = (0);
var G__44258 = (0);
seq__44237 = G__44255;
chunk__44238 = G__44256;
count__44239 = G__44257;
i__44240 = G__44258;
continue;
}
} else {
return null;
}
}
break;
}
});
algopop.leaderboardx.app.seed.example = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$edges,cljs.core.PersistentVector.fromArray(["Amy",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Lily","Abigail","Emma"], null),"Rhys",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["William","Liam","Matt"], null),"Noah",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["William","Matt"], null),"Michael",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["William","Mason","Abigail"], null),"Toby",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Joel","Mason","Alex"], null),"Olivia",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mia","Claire","Charlotte"], null),"Jayden",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Rhys","Liam","Matt"], null),"Madison",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Isabella","Emily","William"], null),"Daniel",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mason","Jayden","Sophia"], null),"Mia",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Emily","Olivia","Claire"], null),"William",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Matt","Emily","Noah"], null),"Matt",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Liam","Jayden","William"], null),"Claire",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Charlotte","Olivia","Emily"], null),"Sophia",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Emma","Abigail","Rachelle"], null),"Emma",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Abigail","Sophia","Amy"], null),"Joel",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Emily","Alex","Isabella"], null),"Emily",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mia","Joel","William"], null),"Abigail",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Rachelle","Amy","Sophia"], null),"Alex",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mason","Joel","Daniel"], null),"Isabella",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Madison","Emily","Mia"], null),"Lily",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Amy","Sophia","Rachelle"], null),"Charlotte",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Olivia","Emily","Claire"], null),"Liam",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Matt","Jayden","William"], null),"Rachelle",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Abigail","Sophia","Emma"], null),"Mason",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Alex","Daniel","Toby"], null)], true),cljs.core.cst$kw$title,"Example"], null);
algopop.leaderboardx.app.seed.set_example_BANG_ = (function algopop$leaderboardx$app$seed$set_example_BANG_(){
return algopop.leaderboardx.app.db.replace_many_edges(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),cljs.core.cst$kw$edges.cljs$core$IFn$_invoke$arity$1(algopop.leaderboardx.app.seed.example)));
});
