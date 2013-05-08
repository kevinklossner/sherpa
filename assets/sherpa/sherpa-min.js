"use strict";var head_conf={screens:[767,979,1140],head:"Sherpa",screensCss:{gt:false,gte:false,lt:false,lte:false,eq:false},page:""};
/*!
 * HeadJS     The only script in your <HEAD>
 * Author     Tero Piirainen  (tipiirai)
 * Maintainer Robert Hoffmann (itechnology)
 * License    MIT / http://bit.ly/mit-license
 *
 * Version 0.99
 * http://headjs.com
 */
(function(P,e){function M(b){E[E.length]=b}function G(b){C.className=C.className.replace(RegExp("\\b"+b+"\\b"),"")}function I(g,h){for(var f=0,i=g.length;f<i;f++){h.call(g,g[f],f)}}function z(){C.className=C.className.replace(/ (w-|eq-|gt-|gte-|lt-|lte-|portrait|no-portrait|landscape|no-landscape)\d+/g,"");var a=P.innerWidth||C.clientWidth,f=P.outerWidth||P.screen.width;K.screen.innerWidth=a;K.screen.outerWidth=f;M("w-"+a);I(N.screens,function(b){a>b?(N.screensCss.gt&&M("gt-"+b),N.screensCss.gte&&M("gte-"+b)):a<b?(N.screensCss.lt&&M("lt-"+b),N.screensCss.lte&&M("lte-"+b)):a===b&&(N.screensCss.lte&&M("lte-"+b),N.screensCss.eq&&M("e-q"+b),N.screensCss.gte&&M("gte-"+b))});var f=P.innerHeight||C.clientHeight,c=P.outerHeight||P.screen.height;K.screen.innerHeight=f;K.screen.outerHeight=c;K.feature("portrait",f>a);K.feature("landscape",f<a)}function B(){P.clearTimeout(o);o=P.setTimeout(z,100)}var F=P.document,L=P.navigator,y=P.location,C=F.documentElement,E=[],N={screens:[240,320,480,640,768,800,1024,1280,1440,1680,1920],screensCss:{gt:!0,gte:!1,lt:!0,lte:!1,eq:!1},browsers:[{ie:{min:6,max:10}}],browserCss:{gt:!0,gte:!1,lt:!0,lte:!1,eq:!0},section:"-section",page:"-page",head:"head"};if(P.head_conf){for(var O in P.head_conf){P.head_conf[O]!==e&&(N[O]=P.head_conf[O])}}var K=P[N.head]=function(){K.ready.apply(null,arguments)};K.feature=function(g,f,h){if(!g){return C.className+=" "+E.join(" "),E=[],K}"[object Function]"===Object.prototype.toString.call(f)&&(f=f.call());M((f?"":"no-")+g);K[g]=!!f;h||(G("no-"+g),G(g),K.feature());return K};K.feature("js",!0);O=L.userAgent.toLowerCase();L=/mobile|midp/.test(O);K.feature("mobile",L,!0);K.feature("desktop",!L,!0);O=/(chrome|firefox)[ \/]([\w.]+)/.exec(O)||/(iphone|ipad|ipod)(?:.*version)?[ \/]([\w.]+)/.exec(O)||/(android)(?:.*version)?[ \/]([\w.]+)/.exec(O)||/(webkit|opera)(?:.*version)?[ \/]([\w.]+)/.exec(O)||/(msie) ([\w.]+)/.exec(O)||[];L=O[1];O=parseFloat(O[2]);switch(L){case"msie":L="ie";O=F.documentMode||O;break;case"firefox":L="ff";break;case"ipod":case"ipad":case"iphone":L="ios";break;case"webkit":L="safari"}K.browser={name:L,version:O};K.browser[L]=!0;for(var j=0,d=N.browsers.length;j<d;j++){for(var J in N.browsers[j]){if(L===J){M(J);for(var D=N.browsers[j][J].max,H=N.browsers[j][J].min;H<=D;H++){O>H?(N.browserCss.gt&&M("gt-"+J+H),N.browserCss.gte&&M("gte-"+J+H)):O<H?(N.browserCss.lt&&M("lt-"+J+H),N.browserCss.lte&&M("lte-"+J+H)):O===H&&(N.browserCss.lte&&M("lte-"+J+H),N.browserCss.eq&&M("eq-"+J+H),N.browserCss.gte&&M("gte-"+J+H))}}else{M("no-"+J)}}}"ie"===L&&9>O&&I("abbr article aside audio canvas details figcaption figure footer header hgroup mark meter nav output progress section summary time video".split(" "),function(b){F.createElement(b)});I(y.pathname.split("/"),function(f,c){if(2<this.length&&this[c+1]!==e){c&&M(this.slice(1,c+1).join("-").toLowerCase()+N.section)}else{var k=f||"index",i=k.indexOf(".");0<i&&(k=k.substring(0,i));C.id=k.toLowerCase()+N.page;c||M("root"+N.section)}});K.screen={height:P.screen.height,width:P.screen.width};z();var o=0;P.addEventListener?P.addEventListener("resize",B,!1):P.attachEvent("onresize",B)})(window);(function(j,l){function i(g){var k=g.charAt(0).toUpperCase()+g.substr(1),g=(g+" "+b.join(k+" ")+k).split(" "),m;g:{for(m in g){if(e[g[m]]!==l){m=!0;break g}}m=!1}return !!m}var d=j.document.createElement("i"),e=d.style,p=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),b=["Webkit","Moz","O","ms","Khtml"],c=j[j.head_conf&&j.head_conf.head||"head"],h={gradient:function(){e.cssText=("background-image:"+p.join("gradient(linear,left top,right bottom,from(#9f9),to(#fff));background-image:")+p.join("linear-gradient(left top,#eee,#fff);background-image:")).slice(0,-17);return !!e.backgroundImage},rgba:function(){e.cssText="background-color:rgba(0,0,0,0.5)";return !!e.backgroundColor},opacity:function(){return""===d.style.opacity},textshadow:function(){return""===e.textShadow},multiplebgs:function(){e.cssText="background:url(//:),url(//:),red url(//:)";return/(url\s*\(.*?){3}/.test(e.background)},boxshadow:function(){return i("boxShadow")},borderimage:function(){return i("borderImage")},borderradius:function(){return i("borderRadius")},cssreflections:function(){return i("boxReflect")},csstransforms:function(){return i("transform")},csstransitions:function(){return i("transition")},touch:function(){return"ontouchstart" in j},retina:function(){return 1<j.devicePixelRatio},fontface:function(){var f=c.browser.version;switch(c.browser.name){case"ie":return 9<=f;case"chrome":return 13<=f;case"ff":return 6<=f;case"ios":return 5<=f;case"android":return !1;case"webkit":return 5.1<=f;case"opera":return 10<=f;default:return !1}}},o;for(o in h){h[o]&&c.feature(o,h[o].call(),!0)}c.feature()})(window);(function(af,G){function ab(){}function V(g,f){if(g){"object"===typeof g&&(g=[].slice.call(g));for(var d=0,h=g.length;d<h;d++){f.call(g,g[d],d)}}}function X(d,c){var f=Object.prototype.toString.call(c).slice(8,-1);return c!==G&&null!==c&&f===d}function N(b){return X("Function",b)}function P(b){b=b||ab;b._done||(b(),b._done=1)}function U(d){var c={};if("object"===typeof d){for(var f in d){d[f]&&(c={name:f,url:d[f]})}}else{c=d.split("/"),c=c[c.length-1],f=c.indexOf("?"),c={name:-1!==f?c.substring(0,f):c,url:d}}return(d=Y[c.name])&&d.url===c.url?d:Y[c.name]=c}function aa(d){var d=d||Y,c;for(c in d){if(d.hasOwnProperty(c)&&d[c].state!==j){return !1}}return !0}function L(d,c){c=c||ab;d.state===j?c():d.state===M?ac.ready(d.name,c):d.state===O?d.onpreload.push(function(){L(d,c)}):(d.state=M,R(d,function(){d.state=j;c();V(o[d.name],function(b){P(b)});J&&aa()&&V(o.ALL,function(b){P(b)})}))}function R(a,g){var g=g||ab,b;/\.css[^\.]*$/.test(a.url)?(b=ae.createElement("link"),b.type="text/"+(a.type||"css"),b.rel="stylesheet",b.href=a.url):(b=ae.createElement("script"),b.type="text/"+(a.type||"javascript"),b.src=a.url);b.onload=b.onreadystatechange=function(c){c=c||af.event;if("load"===c.type||/loaded|complete/.test(b.readyState)&&(!ae.documentMode||9>ae.documentMode)){b.onload=b.onreadystatechange=b.onerror=null,g()}};b.onerror=function(){b.onload=b.onreadystatechange=b.onerror=null;g()};b.async=!1;b.defer=!1;var f=ae.head||ae.getElementsByTagName("head")[0];f.insertBefore(b,f.lastChild)}function T(){ae.body?J||(J=!0,V(Z,function(b){P(b)})):(af.clearTimeout(ac.readyTimeout),ac.readyTimeout=af.setTimeout(T,50))}function ad(){ae.addEventListener?(ae.removeEventListener("DOMContentLoaded",ad,!1),T()):"complete"===ae.readyState&&(ae.detachEvent("onreadystatechange",ad),T())}var ae=af.document,Z=[],H=[],o={},Y={},S="async" in ae.createElement("script")||"MozAppearance" in ae.documentElement.style||af.opera,W,J,Q=af.head_conf&&af.head_conf.head||"head",ac=af[Q]=af[Q]||function(){ac.ready.apply(null,arguments)},O=1,M=3,j=4;ac.load=S?function(){var d=arguments,c=d[d.length-1],f={};N(c)||(c=null);V(d,function(b,a){b!==c&&(b=U(b),f[b.name]=b,L(b,c&&a===d.length-2?function(){aa(f)&&P(c)}:null))});return ac}:function(){var f=arguments,d=[].slice.call(f,1),g=d[0];if(!W){return H.push(function(){ac.load.apply(null,f)}),ac}g?(V(d,function(h){if(!N(h)){var c=U(h);c.state===G&&(c.state=O,c.onpreload=[],R({url:c.url,type:"cache"},function(){c.state=2;V(c.onpreload,function(b){b.call()})}))}}),L(U(f[0]),N(g)?g:function(){ac.load.apply(null,d)})):L(U(f[0]));return ac};ac.js=ac.load;ac.test=function(f,d,i,h){f="object"===typeof f?f:{test:f,success:d?X("Array",d)?d:[d]:!1,failure:i?X("Array",i)?i:[i]:!1,callback:h||ab};(d=!!f.test)&&f.success?(f.success.push(f.callback),ac.load.apply(null,f.success)):!d&&f.failure?(f.failure.push(f.callback),ac.load.apply(null,f.failure)):h();return ac};ac.ready=function(b,f){if(b===ae){return J?P(f):Z.push(f),ac}N(b)&&(f=b,b="ALL");if("string"!==typeof b||!N(f)){return ac}var d=Y[b];if(d&&d.state===j||"ALL"===b&&aa()&&J){return P(f),ac}(d=o[b])?d.push(f):o[b]=[f];return ac};ac.ready(ae,function(){aa()&&V(o.ALL,function(b){P(b)});ac.feature&&ac.feature("domloaded",!0)});if("complete"===ae.readyState){T()}else{if(ae.addEventListener){ae.addEventListener("DOMContentLoaded",ad,!1),af.addEventListener("load",T,!1)}else{ae.attachEvent("onreadystatechange",ad);af.attachEvent("onload",T);var e=!1;try{e=null==af.frameElement&&ae.documentElement}catch(I){}e&&e.doScroll&&function K(){if(!J){try{e.doScroll("left")}catch(a){af.clearTimeout(ac.readyTimeout);ac.readyTimeout=af.setTimeout(K,50);return}T()}}()}}setTimeout(function(){W=!0;V(H,function(b){b()})},300)})(window);Sherpa.VERSION="0.1";var SHERPA={};if(SHERPA_CONFIG_OVERRIDES.GLOBAL_CONFIG){SHERPA.GLOBAL_CONFIG=SHERPA_CONFIG_OVERRIDES.GLOBAL_CONFIG}else{SHERPA.GLOBAL_CONFIG="assets/config/global_config.js"}Sherpa.js({config:SHERPA.GLOBAL_CONFIG},function(){Sherpa.counter=function(a){if(a=="report"){console.log(JSON.stringify(Sherpa.counter.obj.time_log,null,5))}else{if(!Sherpa.counter.obj){var b={count:0,start_time:(new Date).getTime(),time_log:{},last_time:0};b.new_time=b.start_time}else{var b=Sherpa.counter.obj;b.new_time=(new Date).getTime()}b.count++;b.elapsed_time=(b.new_time-b.last_time)/1000;b.last_time=b.new_time;if(a&&b.time_log[a]==undefined){b.time_log[a]={};b.time_log[a].start=b.new_time;if(SHERPA.ENABLE_COUNTER){console.log(b.count+": "+a+" - starting timer at:"+(b.last_time-b.start_time)/1000+" seconds")}}else{if(a){b.time_log[a].elapsed_time=b.last_time-b.time_log[a].start;if(SHERPA.ENABLE_COUNTER){console.log(b.count+": "+a+" - elapsed time:"+b.time_log[a].elapsed_time/1000+" seconds")}}else{if(SHERPA.ENABLE_COUNTER){console.log(b.count+": elapsed/total time:"+b.elapsed_time+"/"+b.last_time)}}}Sherpa.counter.obj=b}};Sherpa.counter("Sherpa INIT")});Sherpa.ready("config",function(){if(typeof(a)==="undefined"||SHERPA.DISABLE_CONSOLE_MESSAGES){var a={};a.log=a.error=a.info=a.debug=a.warn=a.trace=a.dir=a.dirxml=a.group=a.groupEnd=a.time=a.timeEnd=a.assert=a.profile=function(){}}Sherpa.js({underscore:SHERPA.UNDERSCORE})});Sherpa.ready("underscore",function(){console.log("loaded: ","underscore");if(_.isObject(SHERPA_CONFIG_OVERRIDES)&&!_.isEmpty(SHERPA_CONFIG_OVERRIDES)){if(SHERPA_CONFIG_OVERRIDES.JS_CORE_LOAD){SHERPA_CONFIG_OVERRIDES.JS_CORE_LOAD=_.union(SHERPA.JS_CORE_LOAD,SHERPA_CONFIG_OVERRIDES.JS_CORE_LOAD)}_.extend(SHERPA,SHERPA_CONFIG_OVERRIDES)}_.each(SHERPA.JS_CORE_LOAD,function(a){console.log("loaded js: ",_.keys(a)[0]);Sherpa.js(a)});_.each(SHERPA.CSS_CORE_LOAD,function(a){console.log("loaded css: ",_.keys(a)[0]);Sherpa.load(a)});if(Sherpa.browser.ie){if($("html").hasClass("ie9")){Sherpa.load({grid:SHERPA.CSS_GRID_IE9})}else{Sherpa.load({grid:SHERPA.CSS_GRID_LTIE9})}_.each(SHERPA.IE_JS_LOAD,function(a){console.log("loaded js: ",_.keys(a)[0]);Sherpa.js(a)})}else{Sherpa.load({grid:SHERPA.CSS_GRID});console.log("loaded css: grid")}Sherpa.load({local_css:SHERPA.PROTOTYPE_CSS});console.log("loaded css: local_css")});var viewModel={config:{}};Sherpa.ready("dateFormat",function(){_.each(SHERPA.SHERPA_CORE_LOAD,function(a){console.log("loaded js: ",_.keys(a)[0]);Sherpa.js(a)});Sherpa.ready("sherpai18n",function(){Sherpa.js({localJSApp:SHERPA.PROTOTYPE_APP});Sherpa.ready("localJSApp",function(){if(SHERPA.ENABLE_GRIDSET_OVERLAY){Sherpa.js(SHERPA.GRIDSET_OVERLAY_JS)}ko.applyBindings(viewModel);$("html").addClass("sherpaReady");Sherpa.session.storeCleanUp();Sherpa.counter("Sherpa INIT")})})});