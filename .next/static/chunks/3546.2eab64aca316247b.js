"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3546],{74428:function(e,t,n){function a(e){return RegExp("^(?:"+e.join("|")+")$","i")}n.r(t),n.d(t,{lua:function(){return m}});var r=a(["_G","_VERSION","assert","collectgarbage","dofile","error","getfenv","getmetatable","ipairs","load","loadfile","loadstring","module","next","pairs","pcall","print","rawequal","rawget","rawset","require","select","setfenv","setmetatable","tonumber","tostring","type","unpack","xpcall","coroutine.create","coroutine.resume","coroutine.running","coroutine.status","coroutine.wrap","coroutine.yield","debug.debug","debug.getfenv","debug.gethook","debug.getinfo","debug.getlocal","debug.getmetatable","debug.getregistry","debug.getupvalue","debug.setfenv","debug.sethook","debug.setlocal","debug.setmetatable","debug.setupvalue","debug.traceback","close","flush","lines","read","seek","setvbuf","write","io.close","io.flush","io.input","io.lines","io.open","io.output","io.popen","io.read","io.stderr","io.stdin","io.stdout","io.tmpfile","io.type","io.write","math.abs","math.acos","math.asin","math.atan","math.atan2","math.ceil","math.cos","math.cosh","math.deg","math.exp","math.floor","math.fmod","math.frexp","math.huge","math.ldexp","math.log","math.log10","math.max","math.min","math.modf","math.pi","math.pow","math.rad","math.random","math.randomseed","math.sin","math.sinh","math.sqrt","math.tan","math.tanh","os.clock","os.date","os.difftime","os.execute","os.exit","os.getenv","os.remove","os.rename","os.setlocale","os.time","os.tmpname","package.cpath","package.loaded","package.loaders","package.loadlib","package.path","package.preload","package.seeall","string.byte","string.char","string.dump","string.find","string.format","string.gmatch","string.gsub","string.len","string.lower","string.match","string.rep","string.reverse","string.sub","string.upper","table.concat","table.insert","table.maxn","table.remove","table.sort"]),o=a(["and","break","elseif","false","nil","not","or","return","true","function","end","if","then","else","do","while","repeat","until","for","in","local"]),i=a(["function","if","repeat","do","\\(","{"]),s=a(["end","until","\\)","}"]),u=RegExp("^(?:end|until|\\)|}|else|elseif)","i");function l(e){for(var t=0;e.eat("=");)++t;return e.eat("["),t}function c(e,t){var n=e.next();return"-"==n&&e.eat("-")?e.eat("[")&&e.eat("[")?(t.cur=g(l(e),"comment"))(e,t):(e.skipToEnd(),"comment"):'"'==n||"'"==n?(t.cur=function(e,t){for(var a,r=!1;null!=(a=e.next())&&(a!=n||r);)r=!r&&"\\"==a;return r||(t.cur=c),"string"})(e,t):"["==n&&/[\[=]/.test(e.peek())?(t.cur=g(l(e),"string"))(e,t):/\d/.test(n)?(e.eatWhile(/[\w.%]/),"number"):/[\w_]/.test(n)?(e.eatWhile(/[\w\\\-_.]/),"variable"):null}function g(e,t){return function(n,a){for(var r,o=null;null!=(r=n.next());)if(null==o)"]"==r&&(o=0);else if("="==r)++o;else if("]"==r&&o==e){a.cur=c;break}else o=null;return t}}let m={name:"lua",startState:function(){return{basecol:0,indentDepth:0,cur:c}},token:function(e,t){if(e.eatSpace())return null;var n=t.cur(e,t),a=e.current();return"variable"==n&&(o.test(a)?n="keyword":r.test(a)&&(n="builtin")),"comment"!=n&&"string"!=n&&(i.test(a)?++t.indentDepth:s.test(a)&&--t.indentDepth),n},indent:function(e,t,n){var a=u.test(t);return e.basecol+n.unit*(e.indentDepth-(a?1:0))},languageData:{indentOnInput:/^\s*(?:end|until|else|\)|\})$/,commentTokens:{line:"--",block:{open:"--[[",close:"]]--"}}}}}}]);