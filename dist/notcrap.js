/*! Notcrap.js ©Notcrap 2018 v2.5.0
 * License: bru02.000webhostapp.com/license
 */
/*! Sizzle v2.3.4-pre | sizzlejs.com */
!function (window, document) {
	Array.prototype.forEach || (Array.prototype.forEach = function (fn, scope) {
		let i,
		len;
		for (i = 0, len = this.length; i < len; ++i)
			i in this && fn.call(scope, this[i], i, this);
	}),
	NodeList.prototype.forEach || (NodeList.prototype.forEach = Array.prototype.forEach),
	HTMLCollection.prototype.forEach || (HTMLCollection.prototype.forEach = Array.prototype.forEach),

	"function" != typeof Object.assign &&
	// Must be writable: true, enumerable: false, configurable: true
	Object.defineProperty(Object, "assign", {
		value(target, varArgs) {
			// .length of function is 2
			if (null == target)
				throw new TypeError("Cannot convert undefined or null to object");
			for (var to = Object(target), index = 1; index < arguments.length; index++) {
				const nextSource = arguments[index];
				if (null != nextSource)
					for (const nextKey in nextSource)
						Object.prototype.hasOwnProperty.call(nextSource, nextKey) && (to[nextKey] = nextSource[nextKey]);
			}
			return to;
		},
		writable: true,
		configurable: true
	}),
	Array.prototype.unique = function () {
		return this.filter((value, index, self) => self.indexOf(value) === index);
	};
	let Sizzle = Object.assign({}, window);
	!function(e){var t,n,r,i,o,u,l,a,c,s,f,d,p,h,g,m,y,v,w,b="sizzle"+1*new Date,N=e.document,x=0,C=0,E=ue(),D=ue(),S=ue(),A=ue(),T=function(e,t){return e===t&&(f=!0),0},L={}.hasOwnProperty,I=[],q=I.pop,B=I.push,R=I.push,$=I.slice,k=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",z="[\\x20\\t\\r\\n\\f]",H="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+z+"*("+H+")(?:"+z+"*([*^$|!~]?=)"+z+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+H+"))|)"+z+"*\\]",F=":("+H+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(z+"+","g"),j=new RegExp("^"+z+"+|((?:^|[^\\\\])(?:\\\\.)*)"+z+"+$","g"),G=new RegExp("^"+z+"*,"+z+"*"),U=new RegExp("^"+z+"*([>+~]|"+z+")"+z+"*"),V=new RegExp(F),X=new RegExp("^"+H+"$"),J={ID:new RegExp("^#("+H+")"),CLASS:new RegExp("^\\.("+H+")"),TAG:new RegExp("^("+H+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+z+"*(even|odd|(([+-]|)(\\d*)n|)"+z+"*(?:([+-]|)"+z+"*(\\d+)|))"+z+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+z+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+z+"*((?:-\\d)?\\d*)"+z+"*\\)|)(?=[^-]|$)","i")},K=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,W=/^[^{]+\{\s*\[native \w/,Y=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+z+"?|("+z+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){d()},ie=me(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{R.apply(I=$.call(N.childNodes),N.childNodes),I[N.childNodes.length].nodeType}catch(e){R={apply:I.length?function(e,t){B.apply(e,$.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,l,c,s,f,h,y,v=t&&t.ownerDocument,x=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==x&&9!==x&&11!==x)return r;if(!i&&((t?t.ownerDocument||t:N)!==p&&d(t),t=t||p,g)){if(11!==x&&(f=Y.exec(e)))if(o=f[1]){if(9===x){if(!(c=t.getElementById(o)))return r;if(c.id===o)return r.push(c),r}else if(v&&(c=v.getElementById(o))&&w(t,c)&&c.id===o)return r.push(c),r}else{if(f[2])return R.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return R.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!A[e+" "]&&(!m||!m.test(e))){if(1!==x)v=t,y=e;else if("object"!==t.nodeName.toLowerCase()){(s=t.getAttribute("id"))?s=s.replace(te,ne):t.setAttribute("id",s=b),l=(h=u(e)).length;while(l--)h[l]="#"+s+" "+ge(h[l]);y=h.join(","),v=Z.test(e)&&pe(t.parentNode)||t}if(y)try{return R.apply(r,v.querySelectorAll(y)),r}catch(t){A(e)}finally{s===b&&t.removeAttribute("id")}}}return a(e.replace(j,"$1"),t,r,i)}function ue(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function le(e){return e[b]=!0,e}function ae(e){var t=p.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ce(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function se(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function de(e){return le(function(t){return t=+t,le(function(n,r){var i,o=e([],n.length,t),u=o.length;while(u--)n[i=o[u]]&&(n[i]=!(r[i]=n[i]))})})}function pe(e){return e&&void 0!==e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},d=oe.setDocument=function(e){var t,i,u=e?e.ownerDocument||e:N;return u!==p&&9===u.nodeType&&u.documentElement?(p=u,h=p.documentElement,g=!o(p),N!==p&&(i=p.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ae(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ae(function(e){return e.appendChild(p.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=W.test(p.getElementsByClassName),n.getById=ae(function(e){return h.appendChild(e).id=b,!p.getElementsByName||!p.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(_,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(_,ee);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&g)return t.getElementsByClassName(e)},y=[],m=[],(n.qsa=W.test(p.querySelectorAll))&&(ae(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+z+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\["+z+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||m.push("~="),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||m.push(".#.+[+~]")}),ae(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=p.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name"+z+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")})),(n.matchesSelector=W.test(v=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ae(function(e){n.disconnectedMatch=v.call(e,"*"),v.call(e,"[s!='']:x"),y.push("!=",F)}),m=m.length&&new RegExp(m.join("|")),y=y.length&&new RegExp(y.join("|")),t=W.test(h.compareDocumentPosition),w=t||W.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},T=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===p||e.ownerDocument===N&&w(N,e)?-1:t===p||t.ownerDocument===N&&w(N,t)?1:s?k(s,e)-k(s,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,u=[e],l=[t];if(!i||!o)return e===p?-1:t===p?1:i?-1:o?1:s?k(s,e)-k(s,t):0;if(i===o)return se(e,t);n=e;while(n=n.parentNode)u.unshift(n);n=t;while(n=n.parentNode)l.unshift(n);while(u[r]===l[r])r++;return r?se(u[r],l[r]):u[r]===N?-1:l[r]===N?1:0},p):p},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&d(e),n.matchesSelector&&g&&!A[t+" "]&&(!y||!y.test(t))&&(!m||!m.test(t)))try{var r=v.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){A(t)}return oe(t,p,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==p&&d(e),w(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==p&&d(e);var i=r.attrHandle[t.toLowerCase()],o=i&&L.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,s=!n.sortStable&&e.slice(0),e.sort(T),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return s=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:le,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(_,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(_,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return J.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&V.test(n)&&(t=u(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(_,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+z+")"+e+"("+z+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(O," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),u="last"!==e.slice(-4),l="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,a){var c,s,f,d,p,h,g=o!==u?"nextSibling":"previousSibling",m=t.parentNode,y=l&&t.nodeName.toLowerCase(),v=!a&&!l,w=!1;if(m){if(o){while(g){d=t;while(d=d[g])if(l?d.nodeName.toLowerCase()===y:1===d.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[u?m.firstChild:m.lastChild],u&&v){w=(p=(c=(s=(f=(d=m)[b]||(d[b]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]||[])[0]===x&&c[1])&&c[2],d=p&&m.childNodes[p];while(d=++p&&d&&d[g]||(w=p=0)||h.pop())if(1===d.nodeType&&++w&&d===t){s[e]=[x,p,w];break}}else if(v&&(w=p=(c=(s=(f=(d=t)[b]||(d[b]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]||[])[0]===x&&c[1]),!1===w)while(d=++p&&d&&d[g]||(w=p=0)||h.pop())if((l?d.nodeName.toLowerCase()===y:1===d.nodeType)&&++w&&(v&&((s=(f=d[b]||(d[b]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]=[x,w]),d===t))break;return(w-=i)===r||w%r==0&&w/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,n){var r,o=i(e,t),u=o.length;while(u--)e[r=k(e,o[u])]=!(n[r]=o[u])}):function(e){return i(e,0,n)}):i}},pseudos:{not:le(function(e){var t=[],n=[],r=l(e.replace(j,"$1"));return r[b]?le(function(e,t,n,i){var o,u=r(e,null,i,[]),l=e.length;while(l--)(o=u[l])&&(e[l]=!(t[l]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:le(function(e){return function(t){return oe(e,t).length>0}}),contains:le(function(e){return e=e.replace(_,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:le(function(e){return X.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(_,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:fe(!1),disabled:fe(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return K.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:de(function(){return[0]}),last:de(function(e,t){return[t-1]}),eq:de(function(e,t,n){return[n<0?n+t:n]}),even:de(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:de(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:de(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:de(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=function(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}(t);function he(){}he.prototype=r.filters=r.pseudos,r.setFilters=new he,u=oe.tokenize=function(e,t){var n,i,o,u,l,a,c,s=D[e+" "];if(s)return t?0:s.slice(0);l=e,a=[],c=r.preFilter;while(l){n&&!(i=G.exec(l))||(i&&(l=l.slice(i[0].length)||l),a.push(o=[])),n=!1,(i=U.exec(l))&&(n=i.shift(),o.push({value:n,type:i[0].replace(j," ")}),l=l.slice(n.length));for(u in r.filter)!(i=J[u].exec(l))||c[u]&&!(i=c[u](i))||(n=i.shift(),o.push({value:n,type:u,matches:i}),l=l.slice(n.length));if(!n)break}return t?l.length:l?oe.error(e):D(e,a).slice(0)};function ge(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,u=n&&"parentNode"===o,l=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||u)return e(t,n,i);return!1}:function(t,n,a){var c,s,f,d=[x,l];if(a){while(t=t[r])if((1===t.nodeType||u)&&e(t,n,a))return!0}else while(t=t[r])if(1===t.nodeType||u)if(f=t[b]||(t[b]={}),s=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((c=s[o])&&c[0]===x&&c[1]===l)return d[2]=c[2];if(s[o]=d,d[2]=e(t,n,a))return!0}return!1}}function ye(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function ve(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,u=[],l=0,a=e.length,c=null!=t;l<a;l++)(o=e[l])&&(n&&!n(o,r,i)||(u.push(o),c&&t.push(l)));return u}function be(e,t,n,r,i,o){return r&&!r[b]&&(r=be(r)),i&&!i[b]&&(i=be(i,o)),le(function(o,u,l,a){var c,s,f,d=[],p=[],h=u.length,g=o||ve(t||"*",l.nodeType?[l]:l,[]),m=!e||!o&&t?g:we(g,d,e,l,a),y=n?i||(o?e:h||r)?[]:u:m;if(n&&n(m,y,l,a),r){c=we(y,p),r(c,[],l,a),s=c.length;while(s--)(f=c[s])&&(y[p[s]]=!(m[p[s]]=f))}if(o){if(i||e){if(i){c=[],s=y.length;while(s--)(f=y[s])&&c.push(m[s]=f);i(null,y=[],c,a)}s=y.length;while(s--)(f=y[s])&&(c=i?k(o,f):d[s])>-1&&(o[c]=!(u[c]=f))}}else y=we(y===u?y.splice(h,y.length):y),i?i(null,u,y,a):R.apply(u,y)})}function Ne(e){for(var t,n,i,o=e.length,u=r.relative[e[0].type],l=u||r.relative[" "],a=u?1:0,s=me(function(e){return e===t},l,!0),f=me(function(e){return k(t,e)>-1},l,!0),d=[function(e,n,r){var i=!u&&(r||n!==c)||((t=n).nodeType?s(e,n,r):f(e,n,r));return t=null,i}];a<o;a++)if(n=r.relative[e[a].type])d=[me(ye(d),n)];else{if((n=r.filter[e[a].type].apply(null,e[a].matches))[b]){for(i=++a;i<o;i++)if(r.relative[e[i].type])break;return be(a>1&&ye(d),a>1&&ge(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(j,"$1"),n,a<i&&Ne(e.slice(a,i)),i<o&&Ne(e=e.slice(i)),i<o&&ge(e))}d.push(n)}return ye(d)}function xe(e,t){var n=t.length>0,i=e.length>0,o=function(o,u,l,a,s){var f,h,m,y=0,v="0",w=o&&[],b=[],N=c,C=o||i&&r.find.TAG("*",s),E=x+=null==N?1:Math.random()||.1,D=C.length;for(s&&(c=u===p||u||s);v!==D&&null!=(f=C[v]);v++){if(i&&f){h=0,u||f.ownerDocument===p||(d(f),l=!g);while(m=e[h++])if(m(f,u||p,l)){a.push(f);break}s&&(x=E)}n&&((f=!m&&f)&&y--,o&&w.push(f))}if(y+=v,n&&v!==y){h=0;while(m=t[h++])m(w,b,u,l);if(o){if(y>0)while(v--)w[v]||b[v]||(b[v]=q.call(a));b=we(b)}R.apply(a,b),s&&!o&&b.length>0&&y+t.length>1&&oe.uniqueSort(a)}return s&&(x=E,c=N),w};return n?le(o):o}l=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=u(e)),n=t.length;while(n--)(o=Ne(t[n]))[b]?r.push(o):i.push(o);(o=S(e,xe(i,r))).selector=e}return o},a=oe.select=function(e,t,n,i){var o,a,c,s,f,d="function"==typeof e&&e,p=!i&&u(e=d.selector||e);if(n=n||[],1===p.length){if((a=p[0]=p[0].slice(0)).length>2&&"ID"===(c=a[0]).type&&9===t.nodeType&&g&&r.relative[a[1].type]){if(!(t=(r.find.ID(c.matches[0].replace(_,ee),t)||[])[0]))return n;d&&(t=t.parentNode),e=e.slice(a.shift().value.length)}o=J.needsContext.test(e)?0:a.length;while(o--){if(c=a[o],r.relative[s=c.type])break;if((f=r.find[s])&&(i=f(c.matches[0].replace(_,ee),Z.test(a[0].type)&&pe(t.parentNode)||t))){if(a.splice(o,1),!(e=i.length&&ge(a)))return R.apply(n,i),n;break}}}return(d||l(e,p))(i,t,!g,n,!t||Z.test(e)&&pe(t.parentNode)||t),n},n.sortStable=b.split("").sort(T).join("")===b,n.detectDuplicates=!!f,d(),n.sortDetached=ae(function(e){return 1&e.compareDocumentPosition(p.createElement("fieldset"))}),ae(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ce("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ae(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ce("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ae(function(e){return null==e.getAttribute("disabled")})||ce(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null});var Ce=e.Sizzle;oe.noConflict=function(){return e.Sizzle===oe&&(e.Sizzle=Ce),oe},"function"==typeof define&&define.amd?define(function(){return oe}):"undefined"!=typeof module&&module.exports?module.exports=oe:e.Sizzle=oe}(Sizzle);
	Sizzle = Sizzle.Sizzle;
	const get = function (sel, arr) {
		if (sel instanceof NodeList || sel instanceof HTMLCollection)
			return sel;
		if (!sel)
			return [];
		const d = [],
		l = !!sel && ("object" == typeof sel ? notcrap.toArr(sel) : Sizzle(sel.trim()));
		return d.push(...l),
		arr ? notcrap.toNodeList(d) : 1 === d.length ? d[0] : notcrap.toNodeList(d);
	};
	var notcrap = {
		version: "2.5.0",
		methods: {},
		toArr: a => Array.isArray(a) ? [...a] : [a],
		// find a CSS path that uniquely selects this element
		buildIndexCSSPath(elem) {
			if (elem == document)
				return "HTML";
			const parent = elem.parentNode;
			// if this is the root node, include its tag name the start of the string
			if (parent == document)
				return elem.tagName;
			// find this element's index as a child, and recursively ascend
			return `${notcrap.buildIndexCSSPath(parent)} > :nth-child(${Array.prototype.indexOf.call(parent.children, elem) + 1})`;
		},
		toNodeList(list) {
			if (!list || list instanceof NodeList || list instanceof HTMLCollection)
				return list;
			// map all elements to CSS paths
			const superSelector = list.map(elem => notcrap.buildIndexCSSPath(elem)).join(",");
			// join all paths by commas
			if (!superSelector)
				return list;
			// query with comma-joined mega-selector
			return document.querySelectorAll(superSelector);
		},
		setStyle(els, prop, val) {
			get(els, !0).forEach(el => {
				void 0 === val ? prop.split(";").forEach(attr => {
					const parts = attr.split(":");
					parts[0] && parts[1] && (el.style[parts[0].trim()] = parts[1].trim());
				}) : "string" == typeof prop && "string" == typeof val ? el.style[prop] = val : prop.length === val.length && prop.forEach((e, i) => {
						el.style[e] = val[i];
					});
			});
		},
		hide(el) {
			notcrap.setStyle(el, "display:none;visibility:hidden;");
		},
		show(el) {
			notcrap.setStyle(el, "display:block;visibility:visible;");
		},
		addClass(els, cls) {
			get(els, !0).forEach(el => {
				el.classList ? el.classList.add(cls) : hasClass(el, cls) || (el.className += ` ${className}`);
			});
		},
		removeClass(els, cls) {
			get(els, !0).forEach(el => {
				el.classList ? el.classList.remove(cls) : el.className = el.className.replace(RegExp(`\\b${cls}\\b`, "g"), "");
			});
		},
		toggleClass(els, cls) {
			get(els, !0).forEach(el => {
				el.classList ? el.classList.toggle(cls) : el.hasClass(cls) ? el.removeClass(cls) : el.addClass(cls);
			});
		},
		includeHTML(els, ulr) {
			get(els, !0).forEach(el => {
				ajax({
					url: ulr
				}, res => {
					el.innerHTML = res;
				});
			});
		},
		remove(els) {
			get(els, !0).forEach(el => {
				el.parentNode.removeChild(el);
			});
		},
		removeChildren(els) {
			get(els, !0).forEach(el => {
				for (; el.hasChildNodes(); )
					el.removeChild(el.firstChild);
			});
		},
		funcs: {
			htmlObj: {
				parent: {
					get: () => (function (n = 1) {
						let el = this;
						for (let i = 0; i < n; i++) {
							if (!el.parentNode)
								return el;
							if ((el = el.parentNode) == document.body || el == document.head)
								return el;
						}
						return el;
					})
				},
				setStyle: {
					get: () => (function (attr, val) {
						return notcrap.setStyle(this, attr, val),
						this;
					})
				},
				addEvent: {
					get: () => (function (eve, cb) {
						get(this, true).forEach(t => {
							let ev;
							ev = "on" == eve.substr(0, 2) ? eve.substr(2) : eve,
							t.addEventListener ? t.addEventListener(ev, cb) : t.attachEvent && t.attachEvent(`on${ev}`, cb);
						});
					})
				},
				hide: {
					get: () => (function () {
						return notcrap.hide(this),
						this;
					})
				},
				show: {
					get: () => (function () {
						return notcrap.show(this),
						this;
					})
				},
				addClass: {
					get: () => (function (cls) {
						return notcrap.addClass(this, cls),
						this;
					})
				},
				removeClass: {
					get: () => (function (cls) {
						return notcrap.removeClass(this, cls),
						this;
					})
				},
				toggleClass: {
					get: () => (function (cls) {
						return notcrap.toggleClass(this, cls),
						this;
					})
				},
				hasClass: {
					get: () => (function (cls) {
						return this.classList ? this.classList.contains(cls) : RegExp(`\\b${cls}\\b`).test(this.className);
					})
				},
				removeChildren: {
					get: () => (function () {
						return notcrap.removeChildren(this),
						this;
					})
				},
				remove: {
					get: () => (function () {
						return notcrap.remove(this),
						this;
					})
				},
				addChild: {
					get: () => (function (type) {
						const obj = document.createElement(type);
						return this.appendChild(obj),
						obj;
					})
				},
				place: {
					get: () => (function () {
						const el = this;
						for (let cld = el.parentNode.children, l = cld.length, i = 0; l > i; i++)
							if (cld[i] === el)
								return i;
						return -1;
					})
				},
				includeHTML: {
					get: () => (function (ulr) {
						return notcrap.includeHTML(this, ulr),
						this;
					})
				},
				getElementsByAttribute: {
					get: () => (function (attr, val) {
						return this.querySelectorAll(val ? `*[${attr}~=${val}]` : `*[${attr}]`);
					})
				},
				getStyleProperty: {
					get: () => (function (prop) {
						return window.getComputedStyle ? window.getComputedStyle(this).getPropertyValue(prop) : this.currentStyle(prop);
					})
				}
			},
			NodeList: {
				parent: {
					get: () => (function (n = 1) {
						let els = [];
						if (get(this, true).forEach(el => {
								for (let i = 0; i < n; i++)
									el.parentNode && (el = el.parentNode);
									els.push(el);
								}), (els = els.unique()).indexOf(document) > -1)return els;
						return get(els, true);
					})
				},
				setStyle: {
					get: () => (function (attr, val) {
						return notcrap.setStyle(this, attr, val),
						this;
					})
				},
				addEvent: {
					get: () => (function (eve, cb) {
						get(this, true).forEach(t => {
							let ev;
							ev = "on" == eve.substr(0, 2) ? eve.substr(2) : eve,
							t.addEventListener ? t.addEventListener(ev, cb) : t.attachEvent && t.attachEvent(`on${ev}`, cb);
						});
					})
				},
				hide: {
					get: () => (function () {
						return notcrap.hide(this),
						this;
					})
				},
				show: {
					get: () => (function () {
						return notcrap.show(this),
						this;
					})
				},
				addClass: {
					get: () => (function (cls) {
						return notcrap.addClass(this, cls),
						this;
					})
				},
				removeClass: {
					get: () => (function (cls) {
						return notcrap.removeClass(this, cls),
						this;
					})
				},
				toggleClass: {
					get: () => (function (cls) {
						return notcrap.toggleClass(this, cls),
						this;
					})
				},
				hasClass: {
					get: () => (function (cls) {
						return this.forEach(el => {
							if (true === el.classList ? el.classList.contains(cls) : RegExp(`\\b${cls}\\b`).test(el.className))
								return true;
						}),
						false;
					})
				},
				removeChildren: {
					get: () => (function () {
						return notcrap.removeChildren(this),
						this;
					})
				},
				remove: {
					get: () => (function () {
						return notcrap.remove(this),
						this;
					})
				},
				includeHTML: {
					get: () => (function (ulr) {
						return notcrap.includeHTML(this, ulr),
						this;
					})
				},
				getStyleProperty: {
					get: () => (function (prop) {
						const el = this.length ? this[0] : this;
						return window.getComputedStyle ? window.getComputedStyle(el).getPropertyValue(prop) : el.currentStyle(prop);
					})
				}
			}
		}
	};
	Object.defineProperties(HTMLElement.prototype, notcrap.funcs.htmlObj),
	Object.defineProperties(NodeList.prototype, notcrap.funcs.NodeList);
	Object.defineProperties(HTMLCollection.prototype, notcrap.funcs.NodeList);

	let temp = (eve, cb) => {
		let ev;
		ev = "on" == eve.substr(0, 2) ? eve.substr(2) : eve,
		window.addEventListener ? window.addEventListener(ev, cb) : window.attachEvent && window.attachEvent(`on${ev}`, cb);
	};
	const addEvent = temp;
	temp = ((eve, cb) => {
		let ev;
		ev = "on" == eve.substr(0, 2) ? eve.substr(2) : eve,
		document.addEventListener ? document.addEventListener(ev, cb) : document.attachEvent && document.attachEvent(`on${ev}`, cb);
	}),
	document.addEvent = temp,
	// Object.defineProperties(Array.prototype, notcrap.funcs),
	document.getElementsByAttribute = ((attr, val) => get(val ? `*[${attr}~=${val}]` : `*[${attr}]`, !0));
	const ajax = (data, readyfunc) => {
		const f = readyfunc || (res => {
				console.log(res);
			});
		let dataString = null;
		if (!data.url)
			throw "You need to give an URL";
		const type = (data.method || "GET").toUpperCase();
		let xhttp,
		str = data.data;
		(xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")).open(type, data.url),
		xhttp.onreadystatechange = (() => {
			xhttp.readyState > 3 && 200 == xhttp.status && f(xhttp.responseText);
		}),
		"POST" == type && (dataString && (dataString = "string" == typeof str ? str : Object.keys(str).map(r => `${encodeURIComponent(r)}=${encodeURIComponent(str[r])}`).join("&")),
			xhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest")),
		xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
		xhttp.send(dataString);
	};
	String.prototype.replaceAll = function (str1, str2, ignore) {
		return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"), ignore ? "gi" : "g"), "string" == typeof str2 ? str2.replace(/\$/g, "$$$$") : str2);
	},
	Math.map = ((x, in_min, in_max, out_min, out_max) => (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min),
	Math.constrain = ((x, min, max) => min > x ? min : x > max ? max : x),
	Math.randomBetween = ((min, max, round) => {
		const n = Math.map(Math.random(), 0, 1, min, max);
		return round ? Math.floor(n) : n;
	});
	const Script = function (k) {
		this.scr = document.head.addChild("SCRIPT"),
		this.scr.innerHTML = k,
		this.innerHTML = k,
		this.src = null,
		this.update = function () {
			this.scr.innerHTML = this.innerHTML;
			const l = this.scr.innerHTML;
			document.head.removeChild(this.scr),
			this.scr = document.createElement("script"),
			this.src ? this.scr.src = this.src : this.scr.innerHTML = l,
			this.scr.setAttribute("type", "text/javascript"),
			document.head.appendChild(this.scr);
		},
		this.update();
	},
	Css = function (k) {
		this.css = document.head.addChild("style"),
		this.css.innerHTML = k,
		this.innerHTML = k,
		this.href = null,
		this.update = function () {
			if (this.href)
				document.head.removeChild(this.css), this.css = document.createElement("link"),
				this.css.rel = "stylesheet", this.css.type = "text/css", this.css.href = this.href,
				this.css.media = "all", document.head.appendChild(this.css);
			else {
				this.css.innerHTML = this.innerHTML;
				const l = this.css.innerHTML;
				document.head.removeChild(this.css),
				this.css = document.createElement("style"),
				this.css.innerHTML = l,
				this.css.setAttribute("type", "text/css"),
				document.head.appendChild(this.css);
			}
		},
		this.update();
	},
	hide000ad = () => {
		new Css("div[style] a[title] img[alt]{visibility:none}"),
		get("div[style] a[title] img[alt]", !0).forEach(e => {
			e.parentNode.parentNode.remove();
		});
	},
	include = l => {
		switch (l.toLowerCase()) {
		case "jquery":
			if (!window.jQuery)
				return include("https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js");
			break;

		case "angular":
			if (!(window.ng || window.angular))
				return include("https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js");
			break;

		case "bootstrap":
			return window.jQuery || include("Jquery"),
			include("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"),
			include("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js");
			break;

		default:
			switch (function (k) {
				return l.split(".").pop();
			}
				().toUpperCase()) {
			case "JS":
				const o = new Script();
				return o.src = l,
				o.update(),
				o.scr;

			case "CSS":
				const p = new Css();
				return p.href = l,
				p.update(),
				p.css;
			}
		}
	};
	window.require || (window.require = include),
	Object.defineProperties(String.prototype, {
		filter: {
			get: () => (function (l) {
				switch (l.toUpperCase()) {
				case "EMAIL":
					return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(this);

				case "WEBSITE":
					return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(this);

				case "IP":
					return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(this);
				}
			})
		}
	});
	let wloaded = !1,
	dloaded = !1;
	/* Ready: get called when window is loaded */
	const ready = ((t, tr = "d") => {
		if ("d" == tr.toString().toLowerCase().substr(0, 1)) {
			const dcbs = [];
			return document.addEventListener("DOMContentLoaded", () => {
				dloaded = !0,
				dcbs.forEach(f => {
					f();
				});
			}),
			cb => {
				dloaded ? cb() : dcbs.push(cb);
			};
		}
		const wcbs = [];
		return window.addEventListener("load", () => {
			wloaded = !0,
			wcbs.forEach(f => {
				f();
			});
		}),
		cb => {
			wloaded ? cb() : wcbs.push(cb);
		};
	})();
	notcrap.methods = {
		ready,
		ajax,
		include,
		hide000ad,
		Css,
		Script,
		get,
		addEvent
	},
	window = Object.assign(window, {
			notcrap,
			ready,
			ajax,
			include,
			hide000ad,
			Css,
			Script,
			get,
			addEvent
		});
}
(window, document);
