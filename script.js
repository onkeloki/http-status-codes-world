/*! For license information please see script.js.LICENSE.txt */
(()=>{"use strict";var e={733:(e,o,n)=>{n.r(o),n.d(o,{Properties:()=>t,VariableDescriptor:()=>r,bootstrapExtra:()=>$,findLayerBoundaries:()=>u,findLayersBoundaries:()=>c,getAllVariables:()=>X,getLayersMap:()=>a,initDoors:()=>D,initPropertiesTemplates:()=>x,initVariableActionLayer:()=>z});class t{constructor(e){this.properties=null!=e?e:[]}get(e){const o=this.properties.filter((o=>o.name===e)).map((e=>e.value));if(o.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==o.length)return o[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,o){const n=this.get(e);if(void 0!==n){if(typeof n!==o)throw new Error('Expected property "'+e+'" to have type "'+o+'"');return n}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,o){const n=this.get(e);if(void 0===n)throw new Error('Property "'+e+'" is missing');if(typeof n!==o)throw new Error('Expected property "'+e+'" to have type "'+o+'"');return n}getType(e){const o=this.properties.filter((o=>o.name===e)).map((e=>e.type));if(o.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==o.length)return o[0]}}class r{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new t(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return!e||WA.player.tags.includes(e)}get isWritable(){const e=this.properties.getString("writableBy");return!e||WA.player.tags.includes(e)}}async function X(){const e=await WA.room.getTiledMap(),o=new Map;return i(e.layers,o),o}function i(e,o){for(const n of e)if("objectgroup"===n.type)for(const e of n.objects)"variable"===e.type&&o.set(e.name,new r(e));else"group"===n.type&&i(n.layers,o)}let p;async function a(){return void 0===p&&(p=async function(){return function(e){const o=new Map;return s(e.layers,"",o),o}(await WA.room.getTiledMap())}()),p}function s(e,o,n){for(const t of e)"group"===t.type?s(t.layers,o+t.name+"/",n):(t.name=o+t.name,n.set(t.name,t))}function u(e){let o=1/0,n=1/0,t=0,r=0;const X=e.data;if("string"==typeof X)throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let i=0;i<e.height;i++)for(let p=0;p<e.width;p++)0!==X[p+i*e.width]&&(o=Math.min(o,p),r=Math.max(r,p),n=Math.min(n,i),t=Math.max(t,i));return{top:n,left:o,right:r+1,bottom:t+1}}function c(e){let o=1/0,n=1/0,t=0,r=0;for(const X of e){const e=u(X);e.left<o&&(o=e.left),e.top<n&&(n=e.top),e.right>r&&(r=e.right),e.bottom>t&&(t=e.bottom)}return{top:n,left:o,right:r,bottom:t}}var l=Object.prototype.toString,A=Array.isArray||function(e){return"[object Array]"===l.call(e)};function m(e){return"function"==typeof e}function d(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function _(e,o){return null!=e&&"object"==typeof e&&o in e}var W=RegExp.prototype.test,g=/\S/;var f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},h=/\s*/,v=/\s+/,P=/\s*=/,y=/\s*\}/,Z=/#|\^|\/|>|\{|&|=|!/;function E(e){this.string=e,this.tail=e,this.pos=0}function b(e,o){this.view=e,this.cache={".":this.view},this.parent=o}function w(){this.templateCache={_cache:{},set:function(e,o){this._cache[e]=o},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}E.prototype.eos=function(){return""===this.tail},E.prototype.scan=function(e){var o=this.tail.match(e);if(!o||0!==o.index)return"";var n=o[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},E.prototype.scanUntil=function(e){var o,n=this.tail.search(e);switch(n){case-1:o=this.tail,this.tail="";break;case 0:o="";break;default:o=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=o.length,o},b.prototype.push=function(e){return new b(e,this)},b.prototype.lookup=function(e){var o,n,t,r=this.cache;if(r.hasOwnProperty(e))o=r[e];else{for(var X,i,p,a=this,s=!1;a;){if(e.indexOf(".")>0)for(X=a.view,i=e.split("."),p=0;null!=X&&p<i.length;)p===i.length-1&&(s=_(X,i[p])||(n=X,t=i[p],null!=n&&"object"!=typeof n&&n.hasOwnProperty&&n.hasOwnProperty(t))),X=X[i[p++]];else X=a.view[e],s=_(a.view,e);if(s){o=X;break}a=a.parent}r[e]=o}return m(o)&&(o=o.call(this.view)),o},w.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},w.prototype.parse=function(e,o){var n=this.templateCache,t=e+":"+(o||L.tags).join(":"),r=void 0!==n,X=r?n.get(t):void 0;return null==X&&(X=function(e,o){if(!e)return[];var n,t,r,X,i=!1,p=[],a=[],s=[],u=!1,c=!1,l="",m=0;function _(){if(u&&!c)for(;s.length;)delete a[s.pop()];else s=[];u=!1,c=!1}function f(e){if("string"==typeof e&&(e=e.split(v,2)),!A(e)||2!==e.length)throw new Error("Invalid tags: "+e);n=new RegExp(d(e[0])+"\\s*"),t=new RegExp("\\s*"+d(e[1])),r=new RegExp("\\s*"+d("}"+e[1]))}f(o||L.tags);for(var b,w,S,C,T,x,M=new E(e);!M.eos();){if(b=M.pos,S=M.scanUntil(n))for(var R=0,V=S.length;R<V;++R)X=C=S.charAt(R),function(e,o){return W.call(e,o)}(g,X)?(c=!0,i=!0,l+=" "):(s.push(a.length),l+=C),a.push(["text",C,b,b+1]),b+=1,"\n"===C&&(_(),l="",m=0,i=!1);if(!M.scan(n))break;if(u=!0,w=M.scan(Z)||"name",M.scan(h),"="===w?(S=M.scanUntil(P),M.scan(P),M.scanUntil(t)):"{"===w?(S=M.scanUntil(r),M.scan(y),M.scanUntil(t),w="&"):S=M.scanUntil(t),!M.scan(t))throw new Error("Unclosed tag at "+M.pos);if(T=">"==w?[w,S,b,M.pos,l,m,i]:[w,S,b,M.pos],m++,a.push(T),"#"===w||"^"===w)p.push(T);else if("/"===w){if(!(x=p.pop()))throw new Error('Unopened section "'+S+'" at '+b);if(x[1]!==S)throw new Error('Unclosed section "'+x[1]+'" at '+b)}else"name"===w||"{"===w||"&"===w?c=!0:"="===w&&f(S)}if(_(),x=p.pop())throw new Error('Unclosed section "'+x[1]+'" at '+M.pos);return function(e){for(var o,n=[],t=n,r=[],X=0,i=e.length;X<i;++X)switch((o=e[X])[0]){case"#":case"^":t.push(o),r.push(o),t=o[4]=[];break;case"/":r.pop()[5]=o[2],t=r.length>0?r[r.length-1][4]:n;break;default:t.push(o)}return n}(function(e){for(var o,n,t=[],r=0,X=e.length;r<X;++r)(o=e[r])&&("text"===o[0]&&n&&"text"===n[0]?(n[1]+=o[1],n[3]=o[3]):(t.push(o),n=o));return t}(a))}(e,o),r&&n.set(t,X)),X},w.prototype.render=function(e,o,n,t){var r=this.getConfigTags(t),X=this.parse(e,r),i=o instanceof b?o:new b(o,void 0);return this.renderTokens(X,i,n,e,t)},w.prototype.renderTokens=function(e,o,n,t,r){for(var X,i,p,a="",s=0,u=e.length;s<u;++s)p=void 0,"#"===(i=(X=e[s])[0])?p=this.renderSection(X,o,n,t,r):"^"===i?p=this.renderInverted(X,o,n,t,r):">"===i?p=this.renderPartial(X,o,n,r):"&"===i?p=this.unescapedValue(X,o):"name"===i?p=this.escapedValue(X,o,r):"text"===i&&(p=this.rawValue(X)),void 0!==p&&(a+=p);return a},w.prototype.renderSection=function(e,o,n,t,r){var X=this,i="",p=o.lookup(e[1]);if(p){if(A(p))for(var a=0,s=p.length;a<s;++a)i+=this.renderTokens(e[4],o.push(p[a]),n,t,r);else if("object"==typeof p||"string"==typeof p||"number"==typeof p)i+=this.renderTokens(e[4],o.push(p),n,t,r);else if(m(p)){if("string"!=typeof t)throw new Error("Cannot use higher-order sections without the original template");null!=(p=p.call(o.view,t.slice(e[3],e[5]),(function(e){return X.render(e,o,n,r)})))&&(i+=p)}else i+=this.renderTokens(e[4],o,n,t,r);return i}},w.prototype.renderInverted=function(e,o,n,t,r){var X=o.lookup(e[1]);if(!X||A(X)&&0===X.length)return this.renderTokens(e[4],o,n,t,r)},w.prototype.indentPartial=function(e,o,n){for(var t=o.replace(/[^ \t]/g,""),r=e.split("\n"),X=0;X<r.length;X++)r[X].length&&(X>0||!n)&&(r[X]=t+r[X]);return r.join("\n")},w.prototype.renderPartial=function(e,o,n,t){if(n){var r=this.getConfigTags(t),X=m(n)?n(e[1]):n[e[1]];if(null!=X){var i=e[6],p=e[5],a=e[4],s=X;0==p&&a&&(s=this.indentPartial(X,a,i));var u=this.parse(s,r);return this.renderTokens(u,o,n,s,t)}}},w.prototype.unescapedValue=function(e,o){var n=o.lookup(e[1]);if(null!=n)return n},w.prototype.escapedValue=function(e,o,n){var t=this.getConfigEscape(n)||L.escape,r=o.lookup(e[1]);if(null!=r)return"number"==typeof r&&t===L.escape?String(r):t(r)},w.prototype.rawValue=function(e){return e[1]},w.prototype.getConfigTags=function(e){return A(e)?e:e&&"object"==typeof e?e.tags:void 0},w.prototype.getConfigEscape=function(e){return e&&"object"==typeof e&&!A(e)?e.escape:void 0};var L={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){S.templateCache=e},get templateCache(){return S.templateCache}},S=new w;L.clearCache=function(){return S.clearCache()},L.parse=function(e,o){return S.parse(e,o)},L.render=function(e,o,n,t){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(A(r=e)?"array":typeof r)+'" was given as the first argument for mustache#render(template, view, partials)');var r;return S.render(e,o,n,t)},L.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return f[e]}))},L.Scanner=E,L.Context=b,L.Writer=w;const C=L;class T{constructor(e,o){this.template=e,this.state=o,this.ast=C.parse(e)}getValue(){return void 0===this.value&&(this.value=C.render(this.template,this.state)),this.value}onChange(e){const o=[];for(const n of this.getUsedVariables().values())o.push(this.state.onVariableChange(n).subscribe((()=>{const o=C.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))})));return{unsubscribe:()=>{for(const e of o)e.unsubscribe()}}}isPureString(){return 0===this.ast.length||1===this.ast.length&&"text"===this.ast[0][0]}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,o){for(const n of e){const e=n[0],t=n[1],r=n[4];["name","&","#","^"].includes(e)&&o.add(t),void 0!==r&&"string"!=typeof r&&this.recursiveGetUsedVariables(r,o)}}}async function x(){var e;const o=await a();for(const[n,t]of o.entries()){const o=null!==(e=t.properties)&&void 0!==e?e:[];for(const e of o){if("int"===e.type||"bool"===e.type||"object"===e.type||"string"!=typeof e.value)continue;const o=new T(e.value,WA.state);if(o.isPureString())continue;const t=o.getValue();M(n,e.name,t),o.onChange((o=>{M(n,e.name,o)}))}}}function M(e,o,n){WA.room.setProperty(e,o,n),"visible"===o&&(n?WA.room.showLayer(e):WA.room.hideLayer(e))}const R="https://unpkg.com/@workadventure/scripting-api-extra@1.1.1/dist";let V,k,U=0,B=0;function G(e){if(WA.state[e.name]){let o=e.properties.mustGetString("openLayer");for(const e of o.split("\n"))WA.room.showLayer(e);o=e.properties.mustGetString("closeLayer");for(const e of o.split("\n"))WA.room.hideLayer(e)}else{let o=e.properties.mustGetString("openLayer");for(const e of o.split("\n"))WA.room.hideLayer(e);o=e.properties.mustGetString("closeLayer");for(const e of o.split("\n"))WA.room.showLayer(e)}}function j(e){return e.map((e=>V.get(e))).filter((e=>"tilelayer"===(null==e?void 0:e.type)))}function O(e){const o=c(j(e)),n=32*((o.right-o.left)/2+o.left),t=32*((o.bottom-o.top)/2+o.top);return Math.sqrt(Math.pow(U-n,2)+Math.pow(B-t,2))}function N(e){WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]?function(e){const o=e.properties.getString("openSound"),n=e.properties.getNumber("soundRadius");let t=1;if(n){const o=O(e.properties.mustGetString("openLayer").split("\n"));if(o>n)return;t=1-o/n}o&&WA.sound.loadSound(o).play({volume:t})}(e):function(e){const o=e.properties.getString("closeSound"),n=e.properties.getNumber("soundRadius");let t=1;if(n){const o=O(e.properties.mustGetString("closeLayer").split("\n"));if(o>n)return;t=1-o/n}o&&WA.sound.loadSound(o).play({volume:t})}(e),G(e)})),G(e)}function F(e,o,n,t){const r=e.name;let X,i,p=!1;const a=n.getString("zone");if(!a)throw new Error('Missing "zone" property on doorstep layer "'+r+'"');const s=n.getString("tag");let u=!0;s&&!WA.player.tags.includes(s)&&(u=!1);const l=!!s;function A(){var e;X&&X.remove(),X=WA.ui.displayActionMessage({message:null!==(e=n.getString("closeTriggerMessage"))&&void 0!==e?e:"Press SPACE to close the door",callback:()=>{WA.state[o.name]=!1,m()}})}function m(){var e;X&&X.remove(),X=WA.ui.displayActionMessage({message:null!==(e=n.getString("openTriggerMessage"))&&void 0!==e?e:"Press SPACE to open the door",callback:()=>{WA.state[o.name]=!0,A()}})}function d(){i&&(WA.room.website.delete(i.name),i=void 0)}WA.room.onEnterZone(a,(()=>{p=!0,n.getBoolean("autoOpen")&&u?WA.state[o.name]=!0:WA.state[o.name]||(!l||u)&&l||!n.getString("code")&&!n.getString("codeVariable")?u&&(WA.state[o.name]?A():m()):function(e){const n=c(j(o.properties.mustGetString("closeLayer").split("\n")));i=WA.room.website.create({name:"doorKeypad"+e,url:t+"/keypad.html#"+encodeURIComponent(e),position:{x:32*n.right,y:32*n.top,width:96,height:128},allowApi:!0})}(r)})),WA.room.onLeaveZone(a,(()=>{p=!1,n.getBoolean("autoClose")&&(WA.state[o.name]=!1),X&&X.remove(),d()})),WA.state.onVariableChange(o.name).subscribe((()=>{p&&(n.getBoolean("autoClose")||!0!==WA.state[o.name]||A(),i&&!0===WA.state[o.name]&&d(),n.getBoolean("autoOpen")||!1!==WA.state[o.name]||m())}))}function q(e){void 0===WA.state[e.name]&&(WA.state[e.name]=0),WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]&&function(e){const o=e.properties.mustGetString("bellSound"),n=e.properties.getNumber("soundRadius");let t=1;if(n){const o=Math.sqrt(Math.pow(e.x-U,2)+Math.pow(e.y-B,2));if(o>n)return;t=1-o/n}WA.sound.loadSound(o).play({volume:t})}(e)}))}function I(e,o){let n;const t=o.mustGetString("zone"),r=o.getString("bellPopup");WA.room.onEnterZone(t,(()=>{var t;r?n=WA.ui.openPopup(r,"",[{label:null!==(t=o.getString("bellButtonText"))&&void 0!==t?t:"Ring",callback:()=>{WA.state[e]=WA.state[e]+1}}]):WA.state[e]=WA.state[e]+1})),WA.room.onLeaveZone(t,(()=>{n&&(n.close(),n=void 0)}))}async function D(e){e=null!=e?e:R;const o=await X();V=await a();for(const e of o.values())e.properties.get("door")&&N(e),e.properties.get("bell")&&q(e);for(const n of V.values()){const r=new t(n.properties),X=r.getString("doorVariable");if(X&&"tilelayer"===n.type){const t=o.get(X);if(void 0===t)throw new Error('Cannot find variable "'+X+'" referred in the "doorVariable" property of layer "'+n.name+'"');F(n,t,r,e)}const i=r.getString("bellVariable");i&&I(i,r)}WA.player.onPlayerMove((e=>{U=e.x,B=e.y}))}function z(e){const o=e.getString("bindVariable");if(o){const n=e.getString("zone");if(!n)throw new Error('A layer with a "bindVariable" property must ALSO have a "zone" property.');!function(e,o,n,t,r,X){X&&!WA.player.tags.includes(X)||(void 0!==n&&WA.room.onEnterZone(o,(()=>{r||(WA.state[e]=n)})),void 0!==t&&WA.room.onLeaveZone(o,(()=>{WA.state[e]=t})))}(o,n,e.get("enterValue"),e.get("leaveValue"),e.getString("triggerMessage"),e.getString("tag"))}}function H(e,o){let n;const t=o.getString("zone");if(!t)throw new Error('Missing "zone" property');const r=o.getString("openConfigAdminTag");let X=!0;function i(){WA.nav.closeCoWebSite()}r&&!WA.player.tags.includes(r)&&(X=!1),WA.room.onEnterZone(t,(()=>{const t=o.getString("openConfigTrigger");var r;X&&(t&&"onaction"===t?(n&&n.remove(),n=WA.ui.displayActionMessage({message:null!==(r=o.getString("openConfigTriggerMessage"))&&void 0!==r?r:"Press SPACE or touch here to configure",callback:()=>K(e)})):K(e))})),WA.room.onLeaveZone(t,(()=>{n?(n.remove(),i()):i()}))}function K(e){const o=e?"#"+e:"";WA.nav.openCoWebSite(R+"/configuration.html"+o,!0)}function $(){return WA.onInit().then((()=>{D().catch((e=>console.error(e))),async function(){const e=await a();for(const o of e.values())z(new t(o.properties))}().catch((e=>console.error(e))),async function(e){const o=await WA.room.getTiledMap();e=null!=e?e:R,k=await a();const n=o.layers.find((e=>"configuration"===e.name));if(n){const o=new t(n.properties).getString("tag");o&&!WA.player.tags.includes(o)||WA.ui.registerMenuCommand("Configure the room",(()=>{WA.nav.openCoWebSite(e+"/configuration.html",!0)}));for(const e of k.values()){const o=new t(e.properties),n=o.getString("openConfig");n&&"tilelayer"===e.type&&H(n,o)}}}().catch((e=>console.error(e))),x().catch((e=>console.error(e)))}))}}},o={};function n(t){var r=o[t];if(void 0!==r)return r.exports;var X=o[t]={exports:{}};return e[t](X,X.exports,n),X.exports}n.d=(e,o)=>{for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},n.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{let e;(0,n(733).bootstrapExtra)().catch((e=>console.error(e)));const o=new Date,t=o.getHours()+":"+o.getMinutes();function r(){void 0!==e&&(e.close(),e=void 0)}WA.room.onEnterZone("XXX_1XX_XXX",(()=>{e=WA.ui.openPopup("codePopup","1XX\n\nInformational response\n",[])})),WA.room.onLeaveZone("XXX_1XX_XXX",r),WA.room.onEnterZone("XXX_100_XXX",(()=>{e=WA.ui.openPopup("codePopup","100\n\nContinue\n",[])})),WA.room.onLeaveZone("XXX_100_XXX",r),WA.room.onEnterZone("XXX_101_XXX",(()=>{e=WA.ui.openPopup("codePopup","101\n\nSwitching Protocols\n",[])})),WA.room.onLeaveZone("XXX_101_XXX",r),WA.room.onEnterZone("XXX_102_XXX",(()=>{e=WA.ui.openPopup("codePopup","102\n\nProcessing\n",[])})),WA.room.onLeaveZone("XXX_102_XXX",r),WA.room.onEnterZone("XXX_103_XXX",(()=>{e=WA.ui.openPopup("codePopup","103\n\nEarly Hints\n",[])})),WA.room.onLeaveZone("XXX_103_XXX",r),WA.room.onEnterZone("XXX_2XX_XXX",(()=>{e=WA.ui.openPopup("codePopup","2XX\n\nsuccess\n",[])})),WA.room.onLeaveZone("XXX_2XX_XXX",r),WA.room.onEnterZone("XXX_200_XXX",(()=>{e=WA.ui.openPopup("codePopup","200\n\nOK\n",[])})),WA.room.onLeaveZone("XXX_200_XXX",r),WA.room.onEnterZone("XXX_201_XXX",(()=>{e=WA.ui.openPopup("codePopup","201\n\nCreated\n",[])})),WA.room.onLeaveZone("XXX_201_XXX",r),WA.room.onEnterZone("XXX_202_XXX",(()=>{e=WA.ui.openPopup("codePopup","202\n\nAccepted\n",[])})),WA.room.onLeaveZone("XXX_202_XXX",r),WA.room.onEnterZone("XXX_203_XXX",(()=>{e=WA.ui.openPopup("codePopup","203\n\nNon-Authoritative Information (since HTTP/1.1)\n",[])})),WA.room.onLeaveZone("XXX_203_XXX",r),WA.room.onEnterZone("XXX_204_XXX",(()=>{e=WA.ui.openPopup("codePopup","204\n\nNo Content\n",[])})),WA.room.onLeaveZone("XXX_204_XXX",r),WA.room.onEnterZone("XXX_205_XXX",(()=>{e=WA.ui.openPopup("codePopup","205\n\nReset Content\n",[])})),WA.room.onLeaveZone("XXX_205_XXX",r),WA.room.onEnterZone("XXX_206_XXX",(()=>{e=WA.ui.openPopup("codePopup","206\n\nPartial Content (RFC 7233)\n",[])})),WA.room.onLeaveZone("XXX_206_XXX",r),WA.room.onEnterZone("XXX_207_XXX",(()=>{e=WA.ui.openPopup("codePopup","207\n\nMulti-Status (WebDAV; RFC 4918)\n",[])})),WA.room.onLeaveZone("XXX_207_XXX",r),WA.room.onEnterZone("XXX_208_XXX",(()=>{e=WA.ui.openPopup("codePopup","208\n\nAlready Reported (WebDAV; RFC 5842)\n",[])})),WA.room.onLeaveZone("XXX_208_XXX",r),WA.room.onEnterZone("XXX_226_XXX",(()=>{e=WA.ui.openPopup("codePopup","226\n\nIM Used (RFC 3229)\n",[])})),WA.room.onLeaveZone("XXX_226_XXX",r),WA.room.onEnterZone("XXX_3XX_XXX",(()=>{e=WA.ui.openPopup("codePopup","3XX\n\nredirection\n",[])})),WA.room.onLeaveZone("XXX_3XX_XXX",r),WA.room.onEnterZone("XXX_300_XXX",(()=>{e=WA.ui.openPopup("codePopup","300\n\nMultiple Choices\n",[])})),WA.room.onLeaveZone("XXX_300_XXX",r),WA.room.onEnterZone("XXX_301_XXX",(()=>{e=WA.ui.openPopup("codePopup","301\n\nMoved Permanently\n",[])})),WA.room.onLeaveZone("XXX_301_XXX",r),WA.room.onEnterZone("XXX_302_XXX",(()=>{e=WA.ui.openPopup("codePopup","302\n\nFound (Previously: Moved temporarily)\n",[])})),WA.room.onLeaveZone("XXX_302_XXX",r),WA.room.onEnterZone("XXX_303_XXX",(()=>{e=WA.ui.openPopup("codePopup","303\n\nSee Other (since HTTP/1.1)\n",[])})),WA.room.onLeaveZone("XXX_303_XXX",r),WA.room.onEnterZone("XXX_304_XXX",(()=>{e=WA.ui.openPopup("codePopup","304\n\nNot Modified (RFC 7232)\n",[])})),WA.room.onLeaveZone("XXX_304_XXX",r),WA.room.onEnterZone("XXX_305_XXX",(()=>{e=WA.ui.openPopup("codePopup","305\n\nUse Proxy (since HTTP/1.1)\n",[])})),WA.room.onLeaveZone("XXX_305_XXX",r),WA.room.onEnterZone("XXX_306_XXX",(()=>{e=WA.ui.openPopup("codePopup","306\n\nSwitch Proxy\n",[])})),WA.room.onLeaveZone("XXX_306_XXX",r),WA.room.onEnterZone("XXX_307_XXX",(()=>{e=WA.ui.openPopup("codePopup","307\n\nTemporary Redirect (since HTTP/1.1)\n",[])})),WA.room.onLeaveZone("XXX_307_XXX",r),WA.room.onEnterZone("XXX_308_XXX",(()=>{e=WA.ui.openPopup("codePopup","308\n\nPermanent Redirect (RFC 7538)\n",[])})),WA.room.onLeaveZone("XXX_308_XXX",r),WA.room.onEnterZone("XXX_4XX_XXX",(()=>{e=WA.ui.openPopup("codePopup","4XX\n\nclient error\n",[])})),WA.room.onLeaveZone("XXX_4XX_XXX",r),WA.room.onEnterZone("XXX_400_XXX",(()=>{e=WA.ui.openPopup("codePopup","400\n\nBad Request\n",[])})),WA.room.onLeaveZone("XXX_400_XXX",r),WA.room.onEnterZone("XXX_401_XXX",(()=>{e=WA.ui.openPopup("codePopup","401\n\nUnauthorized\n",[])})),WA.room.onLeaveZone("XXX_401_XXX",r),WA.room.onEnterZone("XXX_402_XXX",(()=>{e=WA.ui.openPopup("codePopup","402\n\nPayment Required\n",[])})),WA.room.onLeaveZone("XXX_402_XXX",r),WA.room.onEnterZone("XXX_403_XXX",(()=>{e=WA.ui.openPopup("codePopup","403\n\nForbidden\n",[])})),WA.room.onLeaveZone("XXX_403_XXX",r),WA.room.onEnterZone("XXX_404_XXX",(()=>{e=WA.ui.openPopup("codePopup","404\n\nNot Found\n",[])})),WA.room.onLeaveZone("XXX_404_XXX",r),WA.room.onEnterZone("XXX_405_XXX",(()=>{e=WA.ui.openPopup("codePopup","405\n\nMethod Not Allowed\n",[])})),WA.room.onLeaveZone("XXX_405_XXX",r),WA.room.onEnterZone("XXX_406_XXX",(()=>{e=WA.ui.openPopup("codePopup","406\n\nNot Acceptable\n",[])})),WA.room.onLeaveZone("XXX_406_XXX",r),WA.room.onEnterZone("XXX_407_XXX",(()=>{e=WA.ui.openPopup("codePopup","407\n\nProxy Authentication Required\n",[])})),WA.room.onLeaveZone("XXX_407_XXX",r),WA.room.onEnterZone("XXX_408_XXX",(()=>{e=WA.ui.openPopup("codePopup","408\n\nRequest Timeout\n",[])})),WA.room.onLeaveZone("XXX_408_XXX",r),WA.room.onEnterZone("XXX_409_XXX",(()=>{e=WA.ui.openPopup("codePopup","409\n\nConflict\n",[])})),WA.room.onLeaveZone("XXX_409_XXX",r),WA.room.onEnterZone("XXX_410_XXX",(()=>{e=WA.ui.openPopup("codePopup","410\n\nGone\n",[])})),WA.room.onLeaveZone("XXX_410_XXX",r),WA.room.onEnterZone("XXX_411_XXX",(()=>{e=WA.ui.openPopup("codePopup","411\n\nLength Required\n",[])})),WA.room.onLeaveZone("XXX_411_XXX",r),WA.room.onEnterZone("XXX_412_XXX",(()=>{e=WA.ui.openPopup("codePopup","412\n\nPrecondition Failed\n",[])})),WA.room.onLeaveZone("XXX_412_XXX",r),WA.room.onEnterZone("XXX_413_XXX",(()=>{e=WA.ui.openPopup("codePopup","413\n\nPayload Too Large\n",[])})),WA.room.onLeaveZone("XXX_413_XXX",r),WA.room.onEnterZone("XXX_414_XXX",(()=>{e=WA.ui.openPopup("codePopup","414\n\nURI Too Long\n",[])})),WA.room.onLeaveZone("XXX_414_XXX",r),WA.room.onEnterZone("XXX_415_XXX",(()=>{e=WA.ui.openPopup("codePopup","415\n\nUnsupported Media Type\n",[])})),WA.room.onLeaveZone("XXX_415_XXX",r),WA.room.onEnterZone("XXX_416_XXX",(()=>{e=WA.ui.openPopup("codePopup","416\n\nRange Not Satisfiable\n",[])})),WA.room.onLeaveZone("XXX_416_XXX",r),WA.room.onEnterZone("XXX_417_XXX",(()=>{e=WA.ui.openPopup("codePopup","417\n\nExpectation Failed\n",[])})),WA.room.onLeaveZone("XXX_417_XXX",r),WA.room.onEnterZone("XXX_421_XXX",(()=>{e=WA.ui.openPopup("codePopup","421\n\nMisdirected Request\n",[])})),WA.room.onLeaveZone("XXX_421_XXX",r),WA.room.onEnterZone("XXX_422_XXX",(()=>{e=WA.ui.openPopup("codePopup","422\n\nUnprocessable Entity\n",[])})),WA.room.onLeaveZone("XXX_422_XXX",r),WA.room.onEnterZone("XXX_423_XXX",(()=>{e=WA.ui.openPopup("codePopup","423\n\nLocked\n",[])})),WA.room.onLeaveZone("XXX_423_XXX",r),WA.room.onEnterZone("XXX_424_XXX",(()=>{e=WA.ui.openPopup("codePopup","424\n\nFailed Dependency\n",[])})),WA.room.onLeaveZone("XXX_424_XXX",r),WA.room.onEnterZone("XXX_425_XXX",(()=>{e=WA.ui.openPopup("codePopup","425\n\nToo Early\n",[])})),WA.room.onLeaveZone("XXX_425_XXX",r),WA.room.onEnterZone("XXX_426_XXX",(()=>{e=WA.ui.openPopup("codePopup","426\n\nUpgrade Required\n",[])})),WA.room.onLeaveZone("XXX_426_XXX",r),WA.room.onEnterZone("XXX_428_XXX",(()=>{e=WA.ui.openPopup("codePopup","428\n\nPrecondition Required\n",[])})),WA.room.onLeaveZone("XXX_428_XXX",r),WA.room.onEnterZone("XXX_429_XXX",(()=>{e=WA.ui.openPopup("codePopup","429\n\nToo Many Requests\n",[])})),WA.room.onLeaveZone("XXX_429_XXX",r),WA.room.onEnterZone("XXX_431_XXX",(()=>{e=WA.ui.openPopup("codePopup","431\n\nRequest Header Fields Too Large\n",[])})),WA.room.onLeaveZone("XXX_431_XXX",r),WA.room.onEnterZone("XXX_451_XXX",(()=>{e=WA.ui.openPopup("codePopup","451\n\nUnavailable For Legal Reasons\n",[])})),WA.room.onLeaveZone("XXX_451_XXX",r),WA.room.onEnterZone("XXX_5XX_XXX",(()=>{e=WA.ui.openPopup("codePopup","5XX\n\nServer Error\n",[])})),WA.room.onLeaveZone("XXX_5XX_XXX",r),WA.room.onEnterZone("XXX_500_XXX",(()=>{e=WA.ui.openPopup("codePopup","500\n\nInternal Server\n",[])})),WA.room.onLeaveZone("XXX_500_XXX",r),WA.room.onEnterZone("XXX_501_XXX",(()=>{e=WA.ui.openPopup("codePopup","501\n\nNot Implemented\n",[])})),WA.room.onLeaveZone("XXX_501_XXX",r),WA.room.onEnterZone("XXX_502_XXX",(()=>{e=WA.ui.openPopup("codePopup","502\n\nBad Gateway\n",[])})),WA.room.onLeaveZone("XXX_502_XXX",r),WA.room.onEnterZone("XXX_503_XXX",(()=>{e=WA.ui.openPopup("codePopup","503\n\nService Unavailable\n",[])})),WA.room.onLeaveZone("XXX_503_XXX",r),WA.room.onEnterZone("XXX_504_XXX",(()=>{e=WA.ui.openPopup("codePopup","504\n\nGateway Timeout\n",[])})),WA.room.onLeaveZone("XXX_504_XXX",r),WA.room.onEnterZone("XXX_505_XXX",(()=>{e=WA.ui.openPopup("codePopup","505\n\nHTTP Version not supported\n",[])})),WA.room.onLeaveZone("XXX_505_XXX",r),WA.room.onEnterZone("XXX_506_XXX",(()=>{e=WA.ui.openPopup("codePopup","506\n\nVariant Also Negotiates\n",[])})),WA.room.onLeaveZone("XXX_506_XXX",r),WA.room.onEnterZone("XXX_507_XXX",(()=>{e=WA.ui.openPopup("codePopup","507\n\nInsufficient Storage\n",[])})),WA.room.onLeaveZone("XXX_507_XXX",r),WA.room.onEnterZone("XXX_508_XXX",(()=>{e=WA.ui.openPopup("codePopup","508\n\nLoop Detected\n",[])})),WA.room.onLeaveZone("XXX_508_XXX",r),WA.room.onEnterZone("XXX_509_XXX",(()=>{e=WA.ui.openPopup("codePopup","509\n\nBandwidth Limit\n",[])})),WA.room.onLeaveZone("XXX_509_XXX",r),WA.room.onEnterZone("XXX_510_XXX",(()=>{e=WA.ui.openPopup("codePopup","510\n\nNot Extended\n",[])})),WA.room.onLeaveZone("XXX_510_XXX",r),WA.room.onEnterZone("XXX_511_XXX",(()=>{e=WA.ui.openPopup("codePopup","511\n\nNetwork Authentication Required\n",[])})),WA.room.onLeaveZone("XXX_511_XXX",r),WA.room.onEnterZone("XXX_CODE_XXX",(()=>{e=WA.ui.openPopup("clockPopup","It's \n\n"+t,[])})),WA.room.onLeaveZone("XXX_CODE_XXX",r)})()})();
//# sourceMappingURL=script.js.map