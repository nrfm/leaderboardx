// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('algopop.leaderboardx.app.views.coach');
goog.require('cljs.core');
goog.require('algopop.leaderboardx.app.views.common');
goog.require('algopop.leaderboardx.app.db');
goog.require('clojure.string');
goog.require('reagent.core');
if(typeof algopop.leaderboardx.app.views.coach.goals !== 'undefined'){
} else {
algopop.leaderboardx.app.views.coach.goals = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [(1),"Increase passes per attack on goal from 3 to 4.",(2),"Run faster - team relay 4min."], null));
}
algopop.leaderboardx.app.views.coach.goal_input = (function algopop$leaderboardx$app$views$coach$goal_input(goal,editing_id){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"node-input",cljs.core.cst$kw$component_DASH_did_DASH_mount,algopop.leaderboardx.app.views.common.focus_append,cljs.core.cst$kw$reagent_DASH_render,(function algopop$leaderboardx$app$views$coach$goal_input_$_a_goal_input(goal__$1,editing_id__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$name,"new-goal",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null),cljs.core.cst$kw$default_DASH_value,goal__$1,cljs.core.cst$kw$on_DASH_blur,(function algopop$leaderboardx$app$views$coach$goal_input_$_a_goal_input_$_node_input_blur(e){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(editing_id__$1,null) : cljs.core.reset_BANG_.call(null,editing_id__$1,null));
})], null)], null);
})], null));
});
algopop.leaderboardx.app.views.coach.goal_form = (function algopop$leaderboardx$app$views$coach$goal_form(goal,editing_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,(function algopop$leaderboardx$app$views$coach$goal_form_$_rename_node_submit(e){
var new_goal_45034 = clojure.string.trim(cljs.core.cst$kw$new_DASH_goal.cljs$core$IFn$_invoke$arity$1(algopop.leaderboardx.app.views.common.form_data(e)));
if(cljs.core.seq(new_goal_45034)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(algopop.leaderboardx.app.views.coach.goals,cljs.core.assoc,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(editing_id) : cljs.core.deref.call(null,editing_id)),new_goal_45034);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(algopop.leaderboardx.app.views.coach.goals,cljs.core.dissoc,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(editing_id) : cljs.core.deref.call(null,editing_id)));
}

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(editing_id,null) : cljs.core.reset_BANG_.call(null,editing_id,null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.coach.goal_input,goal,editing_id], null)], null);
});
algopop.leaderboardx.app.views.coach.team_goals = (function algopop$leaderboardx$app$views$coach$team_goals(){
var editing_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return ((function (editing_id){
return (function algopop$leaderboardx$app$views$coach$team_goals_$_a_team_goals(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul], null),(function (){var iter__7942__auto__ = ((function (editing_id){
return (function algopop$leaderboardx$app$views$coach$team_goals_$_a_team_goals_$_iter__45089(s__45090){
return (new cljs.core.LazySeq(null,((function (editing_id){
return (function (){
var s__45090__$1 = s__45090;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__45090__$1);
if(temp__6753__auto__){
var s__45090__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45090__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__45090__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__45092 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__45091 = (0);
while(true){
if((i__45091 < size__7941__auto__)){
var vec__45101 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__45091);
var goal_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45101,(0),null);
var goal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45101,(1),null);
cljs.core.chunk_append(b__45092,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goal_id,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(editing_id) : cljs.core.deref.call(null,editing_id))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.coach.goal_form,goal,editing_id], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (i__45091,vec__45101,goal_id,goal,c__7940__auto__,size__7941__auto__,b__45092,s__45090__$2,temp__6753__auto__,editing_id){
return (function algopop$leaderboardx$app$views$coach$team_goals_$_a_team_goals_$_iter__45089_$_goal_click(e){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(editing_id,goal_id) : cljs.core.reset_BANG_.call(null,editing_id,goal_id));
});})(i__45091,vec__45101,goal_id,goal,c__7940__auto__,size__7941__auto__,b__45092,s__45090__$2,temp__6753__auto__,editing_id))
], null),goal], null))], null));

var G__45107 = (i__45091 + (1));
i__45091 = G__45107;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45092),algopop$leaderboardx$app$views$coach$team_goals_$_a_team_goals_$_iter__45089(cljs.core.chunk_rest(s__45090__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45092),null);
}
} else {
var vec__45104 = cljs.core.first(s__45090__$2);
var goal_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45104,(0),null);
var goal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45104,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goal_id,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(editing_id) : cljs.core.deref.call(null,editing_id))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.coach.goal_form,goal,editing_id], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (vec__45104,goal_id,goal,s__45090__$2,temp__6753__auto__,editing_id){
return (function algopop$leaderboardx$app$views$coach$team_goals_$_a_team_goals_$_iter__45089_$_goal_click(e){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(editing_id,goal_id) : cljs.core.reset_BANG_.call(null,editing_id,goal_id));
});})(vec__45104,goal_id,goal,s__45090__$2,temp__6753__auto__,editing_id))
], null),goal], null))], null),algopop$leaderboardx$app$views$coach$team_goals_$_a_team_goals_$_iter__45089(cljs.core.rest(s__45090__$2)));
}
} else {
return null;
}
break;
}
});})(editing_id))
,null,null));
});})(editing_id))
;
return iter__7942__auto__((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(algopop.leaderboardx.app.views.coach.goals) : cljs.core.deref.call(null,algopop.leaderboardx.app.views.coach.goals)));
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (editing_id){
return (function algopop$leaderboardx$app$views$coach$team_goals_$_a_team_goals_$_on_add_goal_click(e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(algopop.leaderboardx.app.views.coach.goals,cljs.core.assoc,cljs.core.rand_int((1000)),"New goal");
});})(editing_id))
], null),"Add goal"], null)], null);
});
;})(editing_id))
});
algopop.leaderboardx.app.views.coach.assessments = (function algopop$leaderboardx$app$views$coach$assessments(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Sprint time ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#"], null),"Daniel"], null)], null)], null);
});
algopop.leaderboardx.app.views.coach.checkpoints = (function algopop$leaderboardx$app$views$coach$checkpoints(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Quarter finals coming up!"], null)], null);
});
algopop.leaderboardx.app.views.coach.quick_links = (function algopop$leaderboardx$app$views$coach$quick_links(nodes){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" - ",(function (){var iter__7942__auto__ = (function algopop$leaderboardx$app$views$coach$quick_links_$_iter__45126(s__45127){
return (new cljs.core.LazySeq(null,(function (){
var s__45127__$1 = s__45127;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__45127__$1);
if(temp__6753__auto__){
var s__45127__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45127__$2)){
var c__7940__auto__ = cljs.core.chunk_first(s__45127__$2);
var size__7941__auto__ = cljs.core.count(c__7940__auto__);
var b__45129 = cljs.core.chunk_buffer(size__7941__auto__);
if((function (){var i__45128 = (0);
while(true){
if((i__45128 < size__7941__auto__)){
var vec__45138 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7940__auto__,i__45128);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45138,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45138,(1),null);
cljs.core.chunk_append(b__45129,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#"], null),k], null));

var G__45144 = (i__45128 + (1));
i__45128 = G__45144;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45129),algopop$leaderboardx$app$views$coach$quick_links_$_iter__45126(cljs.core.chunk_rest(s__45127__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45129),null);
}
} else {
var vec__45141 = cljs.core.first(s__45127__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45141,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45141,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#"], null),k], null),algopop$leaderboardx$app$views$coach$quick_links_$_iter__45126(cljs.core.rest(s__45127__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7942__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(nodes));
})()))], null);
});
algopop.leaderboardx.app.views.coach.coach_view = (function algopop$leaderboardx$app$views$coach$coach_view(){
var nodes = algopop.leaderboardx.app.db.watch_nodes();
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Team goals:"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.coach.team_goals], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Assessments"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.coach.assessments], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Checkpoints"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.coach.checkpoints], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Quick Links"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [algopop.leaderboardx.app.views.coach.quick_links,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nodes) : cljs.core.deref.call(null,nodes))], null)], null);
});
