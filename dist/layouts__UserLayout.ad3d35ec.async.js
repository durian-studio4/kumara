(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{obeJ:function(e,t,n){"use strict";n.r(t);var r=n("VTBJ"),a=n("Hx5s"),o=n("q1tI"),i=n.n(o),s=n("17x9"),c=n.n(s),u=n("bmMU"),l=n.n(u),p=n("QLaP"),d=n.n(p),f=n("Gytx"),h=n.n(f);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function T(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(a[n]=e[n]);return a}var b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},g=Object.keys(b).map((function(e){return b[e]})),v={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},A=Object.keys(v).reduce((function(e,t){return e[v[t]]=t,e}),{}),C=function(e,t){for(var n=e.length-1;n>=0;n-=1){var r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},O=function(e){var t=C(e,b.TITLE),n=C(e,"titleTemplate");if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,(function(){return t}));var r=C(e,"defaultTitle");return t||r||void 0},E=function(e){return C(e,"onChangeClientState")||function(){}},S=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return m({},e,t)}),{})},j=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a+=1){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},x=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&console&&"function"==typeof console.warn&&console.warn("Helmet: "+e+' should be of type "Array". Instead found type "'+typeof t[e]+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n,o=Object.keys(e),i=0;i<o.length;i+=1){var s=o[i],c=s.toLowerCase();-1===t.indexOf(c)||"rel"===n&&"canonical"===e[n].toLowerCase()||"rel"===c&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(s)||"innerHTML"!==s&&"cssText"!==s&&"itemprop"!==s||(n=s)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i+=1){var s=o[i],c=m({},r[s],a[s]);r[s]=c}return e}),[]).reverse()},I=function(e){return Array.isArray(e)?e.join(""):e},L=[b.NOSCRIPT,b.SCRIPT,b.STYLE],P=function(e,t){return void 0===t&&(t=!0),!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},w=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},k=function(e,t){return void 0===t&&(t={}),Object.keys(e).reduce((function(t,n){return t[v[n]||n]=e[n],t}),t)},M=function(e,t,n){switch(e){case b.TITLE:return{toComponent:function(){return n=t.titleAttributes,(r={key:e=t.title})["data-rh"]=!0,a=k(n,r),[i.a.createElement(b.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=w(n),o=I(t);return a?"<"+e+' data-rh="true" '+a+">"+P(o,r)+"</"+e+">":"<"+e+' data-rh="true">'+P(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return k(t)},toString:function(){return w(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-rh"]=!0,r);return Object.keys(t).forEach((function(e){var n=v[e]||e;"innerHTML"===n||"cssText"===n?a.dangerouslySetInnerHTML={__html:t.innerHTML||t.cssText}:a[n]=t[e]})),i.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!("innerHTML"===e||"cssText"===e)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+P(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===L.indexOf(e);return t+"<"+e+' data-rh="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},H=function(e){var t=e.bodyAttributes,n=e.encode,r=e.htmlAttributes,a=e.linkTags,o=e.metaTags,i=e.noscriptTags,s=e.scriptTags,c=e.styleTags,u=e.title,l=void 0===u?"":u,p=e.titleAttributes;return{base:M(b.BASE,e.baseTag,n),bodyAttributes:M("bodyAttributes",t,n),htmlAttributes:M("htmlAttributes",r,n),link:M(b.LINK,a,n),meta:M(b.META,o,n),noscript:M(b.NOSCRIPT,i,n),script:M(b.SCRIPT,s,n),style:M(b.STYLE,c,n),title:M(b.TITLE,{title:l,titleAttributes:p},n)}},N=i.a.createContext({}),R=c.a.shape({setHelmet:c.a.func,helmetInstances:c.a.shape({get:c.a.func,add:c.a.func,remove:c.a.func})}),q="undefined"!=typeof document,D=function(e){function t(n){var r;return(r=e.call(this,n)||this).instances=[],r.value={setHelmet:function(e){r.props.context.helmet=e},helmetInstances:{get:function(){return r.instances},add:function(e){r.instances.push(e)},remove:function(e){var t=r.instances.indexOf(e);r.instances.splice(t,1)}}},t.canUseDOM||(n.context.helmet=H({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),r}return y(t,e),t.prototype.render=function(){return i.a.createElement(N.Provider,{value:this.value},this.props.children)},t}(o["Component"]);D.canUseDOM=q,D.propTypes={context:c.a.shape({helmet:c.a.shape()}),children:c.a.node.isRequired},D.defaultProps={context:{}},D.displayName="HelmetProvider";var Y=function(e,t){var n,r=document.head||document.querySelector(b.HEAD),a=r.querySelectorAll(e+"[data-rh]"),o=[].slice.call(a),i=[];return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&("innerHTML"===a?r.innerHTML=t.innerHTML:"cssText"===a?r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText)):r.setAttribute(a,void 0===t[a]?"":t[a]));r.setAttribute("data-rh","true"),o.some((function(e,t){return n=t,r.isEqualNode(e)}))?o.splice(n,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},B=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-rh"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),s=0;s<i.length;s+=1){var c=i[s],u=t[c]||"";n.getAttribute(c)!==u&&n.setAttribute(c,u),-1===a.indexOf(c)&&a.push(c);var l=o.indexOf(c);-1!==l&&o.splice(l,1)}for(var p=o.length-1;p>=0;p-=1)n.removeAttribute(o[p]);a.length===o.length?n.removeAttribute("data-rh"):n.getAttribute("data-rh")!==i.join(",")&&n.setAttribute("data-rh",i.join(","))}},U=function(e,t){var n=e.baseTag,r=e.htmlAttributes,a=e.linkTags,o=e.metaTags,i=e.noscriptTags,s=e.onChangeClientState,c=e.scriptTags,u=e.styleTags,l=e.title,p=e.titleAttributes;B(b.BODY,e.bodyAttributes),B(b.HTML,r),function(e,t){void 0!==e&&document.title!==e&&(document.title=I(e)),B(b.TITLE,t)}(l,p);var d={baseTag:Y(b.BASE,n),linkTags:Y(b.LINK,a),metaTags:Y(b.META,o),noscriptTags:Y(b.NOSCRIPT,i),scriptTags:Y(b.SCRIPT,c),styleTags:Y(b.STYLE,u)},f={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(f[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),s(e,f,h)},K=null,_=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).rendered=!1,t}y(t,e);var n=t.prototype;return n.shouldComponentUpdate=function(e){return!h()(e,this.props)},n.componentDidUpdate=function(){this.emitChange()},n.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},n.emitChange=function(){var e,t,n=this.props.context,r=n.setHelmet,a=null,o=(e=n.helmetInstances.get().map((function(e){var t=m({},e.props);return delete t.context,t})),{baseTag:j(["href"],e),bodyAttributes:S("bodyAttributes",e),defer:C(e,"defer"),encode:C(e,"encodeSpecialCharacters"),htmlAttributes:S("htmlAttributes",e),linkTags:x(b.LINK,["rel","href"],e),metaTags:x(b.META,["name","charset","http-equiv","property","itemprop"],e),noscriptTags:x(b.NOSCRIPT,["innerHTML"],e),onChangeClientState:E(e),scriptTags:x(b.SCRIPT,["src","innerHTML"],e),styleTags:x(b.STYLE,["cssText"],e),title:O(e),titleAttributes:S("titleAttributes",e)});D.canUseDOM?(t=o,K&&cancelAnimationFrame(K),t.defer?K=requestAnimationFrame((function(){U(t,(function(){K=null}))})):(U(t),K=null)):H&&(a=H(o)),r(a)},n.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},n.render=function(){return this.init(),null},t}(o["Component"]);_.propTypes={context:R.isRequired},_.displayName="HelmetDispatcher";var F=function(e){function t(){return e.apply(this,arguments)||this}y(t,e);var n=t.prototype;return n.shouldComponentUpdate=function(e){return!l()(this.props,e)},n.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t};default:throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},n.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren;return m({},r,((t={})[n.type]=[].concat(r[n.type]||[],[m({},e.newChildProps,this.mapNestedChildrenToProps(n,e.nestedChildren))]),t))},n.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case b.TITLE:return m({},a,((t={})[r.type]=i,t.titleAttributes=m({},o),t));case b.BODY:return m({},a,{bodyAttributes:m({},o)});case b.HTML:return m({},a,{htmlAttributes:m({},o)});default:return m({},a,((n={})[r.type]=m({},o),n))}},n.mapArrayTypeChildrenToProps=function(e,t){var n=m({},t);return Object.keys(e).forEach((function(t){var r;n=m({},n,((r={})[t]=e[t],r))})),n},n.warnOnInvalidChildren=function(e,t){return d()(g.some((function(t){return e.type===t})),"function"==typeof e.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+g.join(", ")+" are allowed. Helmet does not support rendering <"+e.type+"> elements. Refer to our API for more information."),d()(!t||"string"==typeof t||Array.isArray(t)&&!t.some((function(e){return"string"!=typeof e})),"Helmet expects a string as a child of <"+e.type+">. Did you forget to wrap your children in braces? ( <"+e.type+">{``}</"+e.type+"> ) Refer to our API for more information."),!0},n.mapChildrenToProps=function(e,t){var n=this,r={};return i.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=T(a,["children"]),s=Object.keys(i).reduce((function(e,t){return e[A[t]||t]=i[t],e}),{}),c=e.type;switch("symbol"==typeof c?c=c.toString():n.warnOnInvalidChildren(e,o),c){case b.FRAGMENT:t=n.mapChildrenToProps(o,t);break;case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:s,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:o})}}})),this.mapArrayTypeChildrenToProps(r,t)},n.render=function(){var e=this.props,t=e.children,n=m({},T(e,["children"]));return t&&(n=this.mapChildrenToProps(t,n)),i.a.createElement(N.Consumer,null,(function(e){return i.a.createElement(_,m({},n,{context:e}))}))},t}(o["Component"]);F.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},F.defaultProps={defer:!0,encodeSpecialCharacters:!0},F.displayName="Helmet";var J=n("9kvl"),G=n("roml"),Q=n.n(G),V=function(e){var t=e.route,n=void 0===t?{routes:[]}:t,o=n.routes,s=void 0===o?[]:o,c=e.children,u=e.location,l=void 0===u?{pathname:""}:u,p=Object(J["f"])(),d=p.formatMessage,f=Object(a["d"])(s),h=f.breadcrumb,m=Object(a["e"])(Object(r["a"])({pathname:l.pathname,formatMessage:d,breadcrumb:h},e));return i.a.createElement(D,null,i.a.createElement(F,null,i.a.createElement("title",null,m),i.a.createElement("meta",{name:"description",content:m})),i.a.createElement("div",{className:Q.a.container},i.a.createElement("div",{className:Q.a.content},c)))};t["default"]=Object(J["b"])((function(e){var t=e.settings;return Object(r["a"])({},t)}))(V)},roml:function(e,t,n){e.exports={container:"antd-pro-layouts-user-layout-container",lang:"antd-pro-layouts-user-layout-lang",content:"antd-pro-layouts-user-layout-content",top:"antd-pro-layouts-user-layout-top",header:"antd-pro-layouts-user-layout-header",logo:"antd-pro-layouts-user-layout-logo",title:"antd-pro-layouts-user-layout-title",desc:"antd-pro-layouts-user-layout-desc"}}}]);