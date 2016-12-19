// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('cljs.tools.reader.edn');
goog.require('cljs.core');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tools.reader.impl.utils');
goog.require('cljs.tools.reader.impl.commons');
goog.require('cljs.tools.reader');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');


cljs.tools.reader.edn.macro_terminating_QMARK_ = (function cljs$tools$reader$edn$macro_terminating_QMARK_(ch){
var and__7073__auto__ = !(("#" === ch));
if(and__7073__auto__){
var and__7073__auto____$1 = !(("'" === ch));
if(and__7073__auto____$1){
var and__7073__auto____$2 = !((":" === ch));
if(and__7073__auto____$2){
return (cljs.tools.reader.edn.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.edn.macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.tools.reader.edn.macros.call(null,ch));
} else {
return and__7073__auto____$2;
}
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
});
cljs.tools.reader.edn.not_constituent_QMARK_ = (function cljs$tools$reader$edn$not_constituent_QMARK_(ch){
return (("@" === ch)) || (("`" === ch)) || (("~" === ch));
});
cljs.tools.reader.edn.read_token = (function cljs$tools$reader$edn$read_token(var_args){
var args37109 = [];
var len__8301__auto___37113 = arguments.length;
var i__8302__auto___37114 = (0);
while(true){
if((i__8302__auto___37114 < len__8301__auto___37113)){
args37109.push((arguments[i__8302__auto___37114]));

var G__37115 = (i__8302__auto___37114 + (1));
i__8302__auto___37114 = G__37115;
continue;
} else {
}
break;
}

var G__37111 = args37109.length;
switch (G__37111) {
case 2:
return cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37109.length)].join('')));

}
});

cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$2 = (function (rdr,initch){
return cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$3(rdr,initch,true);
});

cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$3 = (function (rdr,initch,validate_leading_QMARK_){
if(cljs.core.not(initch)){
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["EOF while reading"], 0));
} else {
if(cljs.core.truth_((function (){var and__7073__auto__ = validate_leading_QMARK_;
if(cljs.core.truth_(and__7073__auto__)){
return cljs.tools.reader.edn.not_constituent_QMARK_(initch);
} else {
return and__7073__auto__;
}
})())){
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Invalid leading character: ",initch], 0));
} else {
var sb = (new goog.string.StringBuffer());
var ch = (function (){
cljs.tools.reader.reader_types.unread(rdr,initch);

return initch;
})()
;
while(true){
if((cljs.tools.reader.impl.utils.whitespace_QMARK_(ch)) || (cljs.tools.reader.edn.macro_terminating_QMARK_(ch)) || ((ch == null))){
return [cljs.core.str(sb)].join('');
} else {
if(cljs.tools.reader.edn.not_constituent_QMARK_(ch)){
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Invalid constituent character: ",ch], 0));
} else {
var G__37117 = (function (){var G__37112 = sb;
G__37112.append(cljs.tools.reader.reader_types.read_char(rdr));

return G__37112;
})();
var G__37118 = cljs.tools.reader.reader_types.peek_char(rdr);
sb = G__37117;
ch = G__37118;
continue;
}
}
break;
}

}
}
});

cljs.tools.reader.edn.read_token.cljs$lang$maxFixedArity = 3;

cljs.tools.reader.edn.read_dispatch = (function cljs$tools$reader$edn$read_dispatch(rdr,_,opts){
var temp__6751__auto__ = cljs.tools.reader.reader_types.read_char(rdr);
if(cljs.core.truth_(temp__6751__auto__)){
var ch = temp__6751__auto__;
var temp__6751__auto____$1 = (cljs.tools.reader.edn.dispatch_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.edn.dispatch_macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.tools.reader.edn.dispatch_macros.call(null,ch));
if(cljs.core.truth_(temp__6751__auto____$1)){
var dm = temp__6751__auto____$1;
return (dm.cljs$core$IFn$_invoke$arity$3 ? dm.cljs$core$IFn$_invoke$arity$3(rdr,ch,opts) : dm.call(null,rdr,ch,opts));
} else {
var temp__6751__auto____$2 = (function (){var G__37123 = (function (){var G__37126 = rdr;
cljs.tools.reader.reader_types.unread(G__37126,ch);

return G__37126;
})();
var G__37124 = ch;
var G__37125 = opts;
return (cljs.tools.reader.edn.read_tagged.cljs$core$IFn$_invoke$arity$3 ? cljs.tools.reader.edn.read_tagged.cljs$core$IFn$_invoke$arity$3(G__37123,G__37124,G__37125) : cljs.tools.reader.edn.read_tagged.call(null,G__37123,G__37124,G__37125));
})();
if(cljs.core.truth_(temp__6751__auto____$2)){
var obj = temp__6751__auto____$2;
return obj;
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["No dispatch macro for ",ch], 0));
}
}
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["EOF while reading character"], 0));
}
});
cljs.tools.reader.edn.read_unmatched_delimiter = (function cljs$tools$reader$edn$read_unmatched_delimiter(rdr,ch,opts){
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Unmatched delimiter ",ch], 0));
});
cljs.tools.reader.edn.read_unicode_char = (function cljs$tools$reader$edn$read_unicode_char(var_args){
var args37127 = [];
var len__8301__auto___37130 = arguments.length;
var i__8302__auto___37131 = (0);
while(true){
if((i__8302__auto___37131 < len__8301__auto___37130)){
args37127.push((arguments[i__8302__auto___37131]));

var G__37132 = (i__8302__auto___37131 + (1));
i__8302__auto___37131 = G__37132;
continue;
} else {
}
break;
}

var G__37129 = args37127.length;
switch (G__37129) {
case 4:
return cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37127.length)].join('')));

}
});

cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$4 = (function (token,offset,length,base){
var l = (offset + length);
if((cljs.core.count(token) === l)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Invalid unicode character: \\"),cljs.core.str(token)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_argument], null));
}

var i = offset;
var uc = (0);
while(true){
if((i === l)){
return String.fromCharCode(uc);
} else {
var d = cljs.tools.reader.char_code(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(token,i),base);
if((d === (-1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Invalid digit: "),cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(token,i))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_argument], null));
} else {
var G__37134 = (i + (1));
var G__37135 = (d + (uc * base));
i = G__37134;
uc = G__37135;
continue;
}
}
break;
}
});

cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$5 = (function (rdr,initch,base,length,exact_QMARK_){
var i = (1);
var uc = cljs.tools.reader.char_code(initch,base);
while(true){
if((uc === (-1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Invalid digit: "),cljs.core.str(initch)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_argument], null));
} else {
if(!((i === length))){
var ch = cljs.tools.reader.reader_types.peek_char(rdr);
if(cljs.core.truth_((function (){var or__7085__auto__ = cljs.tools.reader.impl.utils.whitespace_QMARK_(ch);
if(or__7085__auto__){
return or__7085__auto__;
} else {
var or__7085__auto____$1 = (cljs.tools.reader.edn.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.edn.macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.tools.reader.edn.macros.call(null,ch));
if(cljs.core.truth_(or__7085__auto____$1)){
return or__7085__auto____$1;
} else {
return (ch == null);
}
}
})())){
if(cljs.core.truth_(exact_QMARK_)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Invalid character length: "),cljs.core.str(i),cljs.core.str(", should be: "),cljs.core.str(length)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_argument], null));
} else {
return String.fromCharCode(uc);
}
} else {
var d = cljs.tools.reader.char_code(ch,base);
cljs.tools.reader.reader_types.read_char(rdr);

if((d === (-1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Invalid digit: "),cljs.core.str(ch)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_argument], null));
} else {
var G__37136 = (i + (1));
var G__37137 = (d + (uc * base));
i = G__37136;
uc = G__37137;
continue;
}
}
} else {
return String.fromCharCode(uc);
}
}
break;
}
});

cljs.tools.reader.edn.read_unicode_char.cljs$lang$maxFixedArity = 5;

cljs.tools.reader.edn.upper_limit = ("\uD7FF" | (0));
cljs.tools.reader.edn.lower_limit = ("\uE000" | (0));
cljs.tools.reader.edn.read_char_STAR_ = (function cljs$tools$reader$edn$read_char_STAR_(rdr,backslash,opts){
var ch = cljs.tools.reader.reader_types.read_char(rdr);
if(!((ch == null))){
var token = (((cljs.tools.reader.edn.macro_terminating_QMARK_(ch)) || (cljs.tools.reader.edn.not_constituent_QMARK_(ch)) || (cljs.tools.reader.impl.utils.whitespace_QMARK_(ch)))?[cljs.core.str(ch)].join(''):cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$3(rdr,ch,false));
var token_len = cljs.core.count(token);
if(((1) === token_len)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(token,(0));
} else {
if((token === "newline")){
return "\n";
} else {
if((token === "space")){
return " ";
} else {
if((token === "tab")){
return "\t";
} else {
if((token === "backspace")){
return "\b";
} else {
if((token === "formfeed")){
return "\f";
} else {
if((token === "return")){
return "\r";
} else {
if(cljs.core.truth_(goog.string.startsWith(token,"u"))){
var c = cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$4(token,(1),(4),(16));
var ic = c.charCodeAt();
if(((ic > cljs.tools.reader.edn.upper_limit)) && ((ic < cljs.tools.reader.edn.lower_limit))){
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Invalid character constant: \\u",c], 0));
} else {
return c;
}
} else {
if(cljs.core.truth_(goog.string.startsWith(token,"o"))){
var len = (token_len - (1));
if((len > (3))){
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Invalid octal escape sequence length: ",len], 0));
} else {
var uc = cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$4(token,(1),len,(8));
if(((uc | (0)) > (255))){
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Octal escape sequence must be in range [0, 377]"], 0));
} else {
return uc;
}
}
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Unsupported character: \\",token], 0));

}
}
}
}
}
}
}
}
}
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["EOF while reading character"], 0));
}
});
cljs.tools.reader.edn.read_delimited = (function cljs$tools$reader$edn$read_delimited(delim,rdr,opts){
var first_line = (cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_(rdr))?cljs.tools.reader.reader_types.get_line_number(rdr):null);
var delim__$1 = cljs.tools.reader.impl.utils.char$(delim);
var a = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var ch = cljs.tools.reader.impl.commons.read_past(cljs.tools.reader.impl.utils.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch)){
} else {
cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["EOF while reading",(cljs.core.truth_(first_line)?[cljs.core.str(", starting at line"),cljs.core.str(first_line)].join(''):null)], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(delim__$1,cljs.tools.reader.impl.utils.char$(ch))){
return cljs.core.persistent_BANG_(a);
} else {
var temp__6751__auto__ = (cljs.tools.reader.edn.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.edn.macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.tools.reader.edn.macros.call(null,ch));
if(cljs.core.truth_(temp__6751__auto__)){
var macrofn = temp__6751__auto__;
var mret = (macrofn.cljs$core$IFn$_invoke$arity$3 ? macrofn.cljs$core$IFn$_invoke$arity$3(rdr,ch,opts) : macrofn.call(null,rdr,ch,opts));
var G__37148 = ((!((mret === rdr)))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,mret):a);
a = G__37148;
continue;
} else {
var o = (function (){var G__37143 = (function (){var G__37147 = rdr;
cljs.tools.reader.reader_types.unread(G__37147,ch);

return G__37147;
})();
var G__37144 = true;
var G__37145 = null;
var G__37146 = opts;
return (cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(G__37143,G__37144,G__37145,G__37146) : cljs.tools.reader.edn.read.call(null,G__37143,G__37144,G__37145,G__37146));
})();
var G__37149 = ((!((o === rdr)))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,o):a);
a = G__37149;
continue;
}
}
break;
}
});
cljs.tools.reader.edn.read_list = (function cljs$tools$reader$edn$read_list(rdr,_,opts){
var the_list = cljs.tools.reader.edn.read_delimited(")",rdr,opts);
if(cljs.core.empty_QMARK_(the_list)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,the_list);
}
});
cljs.tools.reader.edn.read_vector = (function cljs$tools$reader$edn$read_vector(rdr,_,opts){
return cljs.tools.reader.edn.read_delimited("]",rdr,opts);
});
cljs.tools.reader.edn.read_map = (function cljs$tools$reader$edn$read_map(rdr,_,opts){
var l = cljs.core.to_array(cljs.tools.reader.edn.read_delimited("}",rdr,opts));
if(((1) === (l.length & (1)))){
cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Map literal must contain an even number of forms"], 0));
} else {
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,l);
});
cljs.tools.reader.edn.read_number = (function cljs$tools$reader$edn$read_number(reader,initch,opts){
var sb = (function (){var G__37152 = (new goog.string.StringBuffer());
G__37152.append(initch);

return G__37152;
})();
var ch = cljs.tools.reader.reader_types.read_char(reader);
while(true){
if(cljs.core.truth_((function (){var or__7085__auto__ = cljs.tools.reader.impl.utils.whitespace_QMARK_(ch);
if(or__7085__auto__){
return or__7085__auto__;
} else {
var or__7085__auto____$1 = (cljs.tools.reader.edn.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.edn.macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.tools.reader.edn.macros.call(null,ch));
if(cljs.core.truth_(or__7085__auto____$1)){
return or__7085__auto____$1;
} else {
return (ch == null);
}
}
})())){
var s = [cljs.core.str(sb)].join('');
cljs.tools.reader.reader_types.unread(reader,ch);

var or__7085__auto__ = cljs.tools.reader.impl.commons.match_number(s);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Invalid number format [",s,"]"], 0));
}
} else {
var G__37154 = (function (){var G__37153 = sb;
G__37153.append(ch);

return G__37153;
})();
var G__37155 = cljs.tools.reader.reader_types.read_char(reader);
sb = G__37154;
ch = G__37155;
continue;
}
break;
}
});
cljs.tools.reader.edn.escape_char = (function cljs$tools$reader$edn$escape_char(sb,rdr){
var ch = cljs.tools.reader.reader_types.read_char(rdr);
var G__37159 = ch;
switch (G__37159) {
case "t":
return "\t";

break;
case "r":
return "\r";

break;
case "n":
return "\n";

break;
case "\\":
return "\\";

break;
case "\"":
return "\"";

break;
case "b":
return "\b";

break;
case "f":
return "\f";

break;
case "u":
var ch__$1 = cljs.tools.reader.reader_types.read_char(rdr);
if(((-1) === (function (){var G__37160 = (ch__$1 | (0));
var G__37161 = (16);
return parseInt(G__37160,G__37161);
})())){
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Invalid unicode escape: \\u",ch__$1], 0));
} else {
return cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$5(rdr,ch__$1,(16),(4),true);
}

break;
default:
if(cljs.tools.reader.impl.utils.numeric_QMARK_(ch)){
var ch__$1 = cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$5(rdr,ch,(8),(3),false);
if(((ch__$1 | (0)) > (223))){
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Octal escape sequence must be in range [0, 377]"], 0));
} else {
return ch__$1;
}
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Unsupported escape character: \\",ch], 0));
}

}
});
cljs.tools.reader.edn.read_string_STAR_ = (function cljs$tools$reader$edn$read_string_STAR_(reader,_,opts){
var sb = (new goog.string.StringBuffer());
var ch = cljs.tools.reader.reader_types.read_char(reader);
while(true){
var G__37166 = ch;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__37166)){
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading string"], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\\",G__37166)){
var G__37169 = (function (){var G__37167 = sb;
G__37167.append(cljs.tools.reader.edn.escape_char(sb,reader));

return G__37167;
})();
var G__37170 = cljs.tools.reader.reader_types.read_char(reader);
sb = G__37169;
ch = G__37170;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__37166)){
return [cljs.core.str(sb)].join('');
} else {
var G__37171 = (function (){var G__37168 = sb;
G__37168.append(ch);

return G__37168;
})();
var G__37172 = cljs.tools.reader.reader_types.read_char(reader);
sb = G__37171;
ch = G__37172;
continue;

}
}
}
break;
}
});
cljs.tools.reader.edn.read_symbol = (function cljs$tools$reader$edn$read_symbol(rdr,initch){
var temp__6753__auto__ = cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$2(rdr,initch);
if(cljs.core.truth_(temp__6753__auto__)){
var token = temp__6753__auto__;
var G__37174 = token;
switch (G__37174) {
case "nil":
return null;

break;
case "true":
return true;

break;
case "false":
return false;

break;
case "/":
return cljs.core.cst$sym$_SLASH_;

break;
case "NaN":
return Number.NaN;

break;
case "-Infinity":
return Number.NEGATIVE_INFINITY;

break;
case "Infinity":
case "+Infinity":
return Number.POSITIVE_INFINITY;

break;
default:
var or__7085__auto__ = (function (){var temp__6753__auto____$1 = cljs.tools.reader.impl.commons.parse_symbol(token);
if(cljs.core.truth_(temp__6753__auto____$1)){
var p = temp__6753__auto____$1;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1((0)) : p.call(null,(0))),(p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1((1)) : p.call(null,(1))));
} else {
return null;
}
})();
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Invalid token: ",token], 0));
}

}
} else {
return null;
}
});
cljs.tools.reader.edn.read_keyword = (function cljs$tools$reader$edn$read_keyword(reader,initch,opts){
var ch = cljs.tools.reader.reader_types.read_char(reader);
if(!(cljs.tools.reader.impl.utils.whitespace_QMARK_(ch))){
var token = cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$2(reader,ch);
var s = cljs.tools.reader.impl.commons.parse_symbol(token);
if(cljs.core.truth_((function (){var and__7073__auto__ = s;
if(cljs.core.truth_(and__7073__auto__)){
return ((-1) === token.indexOf("::"));
} else {
return and__7073__auto__;
}
})())){
var ns = (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1((0)) : s.call(null,(0)));
var name = (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1((1)) : s.call(null,(1)));
if((":" === cljs.core.nth.cljs$core$IFn$_invoke$arity$2(token,(0)))){
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Invalid token: :",token], 0));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,name);
}
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Invalid token: :",token], 0));
}
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Invalid token: :"], 0));
}
});
cljs.tools.reader.edn.wrapping_reader = (function cljs$tools$reader$edn$wrapping_reader(sym){
return (function (rdr,_,opts){
var x__8014__auto__ = sym;
return cljs.core._conj((function (){var x__8014__auto____$1 = (cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,opts) : cljs.tools.reader.edn.read.call(null,rdr,true,null,opts));
return cljs.core._conj(cljs.core.List.EMPTY,x__8014__auto____$1);
})(),x__8014__auto__);
});
});
cljs.tools.reader.edn.read_meta = (function cljs$tools$reader$edn$read_meta(rdr,_,opts){
var m = cljs.tools.reader.impl.utils.desugar_meta((cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,opts) : cljs.tools.reader.edn.read.call(null,rdr,true,null,opts)));
if(cljs.core.map_QMARK_(m)){
} else {
cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Metadata must be Symbol, Keyword, String or Map"], 0));
}

var o = (cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,opts) : cljs.tools.reader.edn.read.call(null,rdr,true,null,opts));
if(((!((o == null)))?((((o.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IMeta$)))?true:false):false)){
return cljs.core.with_meta(o,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.meta(o),m], 0)));
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Metadata can only be applied to IMetas"], 0));
}
});
cljs.tools.reader.edn.read_set = (function cljs$tools$reader$edn$read_set(rdr,_,opts){
return cljs.core.set(cljs.tools.reader.edn.read_delimited("}",rdr,opts));
});
cljs.tools.reader.edn.read_discard = (function cljs$tools$reader$edn$read_discard(rdr,_,opts){
var G__37179 = rdr;
(cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(G__37179,true,null,true) : cljs.tools.reader.edn.read.call(null,G__37179,true,null,true));

return G__37179;
});
cljs.tools.reader.edn.read_namespaced_map = (function cljs$tools$reader$edn$read_namespaced_map(rdr,_,opts){
var token = cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$2(rdr,cljs.tools.reader.reader_types.read_char(rdr));
var temp__6751__auto__ = (function (){var G__37181 = token;
var G__37181__$1 = (((G__37181 == null))?null:cljs.tools.reader.impl.commons.parse_symbol(G__37181));
if((G__37181__$1 == null)){
return null;
} else {
return cljs.tools.reader.impl.utils.second_SINGLEQUOTE_(G__37181__$1);
}
})();
if(cljs.core.truth_(temp__6751__auto__)){
var ns = temp__6751__auto__;
var ch = cljs.tools.reader.impl.commons.read_past(cljs.tools.reader.impl.utils.whitespace_QMARK_,rdr);
if((ch === "{")){
var items = cljs.tools.reader.edn.read_delimited("}",rdr,opts);
if(cljs.core.odd_QMARK_(cljs.core.count(items))){
cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Map literal must contain an even number of forms"], 0));
} else {
}

var keys = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),items);
var vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(items));
return cljs.core.zipmap(cljs.tools.reader.impl.utils.namespace_keys([cljs.core.str(ns)].join(''),keys),vals);
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Namespaced map must specify a map"], 0));
}
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Invalid token used as namespace in namespaced map: ",token], 0));
}
});
cljs.tools.reader.edn.macros = (function cljs$tools$reader$edn$macros(ch){
var G__37183 = ch;
switch (G__37183) {
case "\"":
return cljs.tools.reader.edn.read_string_STAR_;

break;
case ":":
return cljs.tools.reader.edn.read_keyword;

break;
case ";":
return cljs.tools.reader.impl.commons.read_comment;

break;
case "^":
return cljs.tools.reader.edn.read_meta;

break;
case "(":
return cljs.tools.reader.edn.read_list;

break;
case ")":
return cljs.tools.reader.edn.read_unmatched_delimiter;

break;
case "[":
return cljs.tools.reader.edn.read_vector;

break;
case "]":
return cljs.tools.reader.edn.read_unmatched_delimiter;

break;
case "{":
return cljs.tools.reader.edn.read_map;

break;
case "}":
return cljs.tools.reader.edn.read_unmatched_delimiter;

break;
case "\\":
return cljs.tools.reader.edn.read_char_STAR_;

break;
case "#":
return cljs.tools.reader.edn.read_dispatch;

break;
default:
return null;

}
});
cljs.tools.reader.edn.dispatch_macros = (function cljs$tools$reader$edn$dispatch_macros(ch){
var G__37186 = ch;
switch (G__37186) {
case "^":
return cljs.tools.reader.edn.read_meta;

break;
case "{":
return cljs.tools.reader.edn.read_set;

break;
case "<":
return cljs.tools.reader.impl.commons.throwing_reader("Unreadable form");

break;
case "!":
return cljs.tools.reader.impl.commons.read_comment;

break;
case "_":
return cljs.tools.reader.edn.read_discard;

break;
case ":":
return cljs.tools.reader.edn.read_namespaced_map;

break;
default:
return null;

}
});
cljs.tools.reader.edn.read_tagged = (function cljs$tools$reader$edn$read_tagged(rdr,initch,opts){
var tag = (cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,opts) : cljs.tools.reader.edn.read.call(null,rdr,true,null,opts));
var object = (cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,opts) : cljs.tools.reader.edn.read.call(null,rdr,true,null,opts));
if(!((tag instanceof cljs.core.Symbol))){
cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Reader tag must be a symbol"], 0));
} else {
}

var temp__6751__auto__ = (function (){var or__7085__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$readers.cljs$core$IFn$_invoke$arity$1(opts),tag);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return (cljs.tools.reader.default_data_readers.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.default_data_readers.cljs$core$IFn$_invoke$arity$1(tag) : cljs.tools.reader.default_data_readers.call(null,tag));
}
})();
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(object) : f.call(null,object));
} else {
var temp__6751__auto____$1 = cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__6751__auto____$1)){
var d = temp__6751__auto____$1;
return (d.cljs$core$IFn$_invoke$arity$2 ? d.cljs$core$IFn$_invoke$arity$2(tag,object) : d.call(null,tag,object));
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["No reader function for tag ",cljs.core.name(tag)], 0));
}
}
});
/**
 * Reads the first object from an IPushbackReader or a java.io.PushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * clojure.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
cljs.tools.reader.edn.read = (function cljs$tools$reader$edn$read(var_args){
var args37188 = [];
var len__8301__auto___37195 = arguments.length;
var i__8302__auto___37196 = (0);
while(true){
if((i__8302__auto___37196 < len__8301__auto___37195)){
args37188.push((arguments[i__8302__auto___37196]));

var G__37197 = (i__8302__auto___37196 + (1));
i__8302__auto___37196 = G__37197;
continue;
} else {
}
break;
}

var G__37190 = args37188.length;
switch (G__37190) {
case 1:
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37188.length)].join('')));

}
});

cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,reader);
});

cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2 = (function (p__37191,reader){
var map__37192 = p__37191;
var map__37192__$1 = ((((!((map__37192 == null)))?((((map__37192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37192.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37192):map__37192);
var opts = map__37192__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37192__$1,cljs.core.cst$kw$eof);
var eof_error_QMARK_ = !(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$eof));
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(reader,eof_error_QMARK_,eof,opts);
});

cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
try{while(true){
var ch = cljs.tools.reader.reader_types.read_char(reader);
if(cljs.tools.reader.impl.utils.whitespace_QMARK_(ch)){
continue;
} else {
if((ch == null)){
if(cljs.core.truth_(eof_error_QMARK_)){
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF"], 0));
} else {
return eof;
}
} else {
if(cljs.tools.reader.impl.commons.number_literal_QMARK_(reader,ch)){
return cljs.tools.reader.edn.read_number(reader,ch,opts);
} else {
var f = cljs.tools.reader.edn.macros(ch);
if(cljs.core.truth_(f)){
var res = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(reader,ch,opts) : f.call(null,reader,ch,opts));
if((res === reader)){
continue;
} else {
return res;
}
} else {
return cljs.tools.reader.edn.read_symbol(reader,ch);
}

}
}
}
break;
}
}catch (e37194){if((e37194 instanceof Error)){
var e = e37194;
if(cljs.tools.reader.impl.utils.ex_info_QMARK_(e)){
var d = cljs.core.ex_data(e);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reader_DASH_exception,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(d))){
throw e;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(e.message,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reader_DASH_exception], null),d,(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_(reader))?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,cljs.tools.reader.reader_types.get_line_number(reader),cljs.core.cst$kw$column,cljs.tools.reader.reader_types.get_column_number(reader),cljs.core.cst$kw$file,cljs.tools.reader.reader_types.get_file_name(reader)], null):null)], 0)),e);
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(e.message,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reader_DASH_exception], null),(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_(reader))?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,cljs.tools.reader.reader_types.get_line_number(reader),cljs.core.cst$kw$column,cljs.tools.reader.reader_types.get_column_number(reader),cljs.core.cst$kw$file,cljs.tools.reader.reader_types.get_file_name(reader)], null):null)], 0)),e);
}
} else {
throw e37194;

}
}});

cljs.tools.reader.edn.read.cljs$lang$maxFixedArity = 4;

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per clojure.tools.reader.edn/read
 */
cljs.tools.reader.edn.read_string = (function cljs$tools$reader$edn$read_string(var_args){
var args37199 = [];
var len__8301__auto___37202 = arguments.length;
var i__8302__auto___37203 = (0);
while(true){
if((i__8302__auto___37203 < len__8301__auto___37202)){
args37199.push((arguments[i__8302__auto___37203]));

var G__37204 = (i__8302__auto___37203 + (1));
i__8302__auto___37203 = G__37204;
continue;
} else {
}
break;
}

var G__37201 = args37199.length;
switch (G__37201) {
case 1:
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37199.length)].join('')));

}
});

cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$eof,null], null),s);
});

cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(cljs.core.truth_((function (){var and__7073__auto__ = s;
if(cljs.core.truth_(and__7073__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s,"");
} else {
return and__7073__auto__;
}
})())){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(opts,cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
} else {
return null;
}
});

cljs.tools.reader.edn.read_string.cljs$lang$maxFixedArity = 2;

