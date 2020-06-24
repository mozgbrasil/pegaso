(this["webpackJsonp@mozg/react-pegaso"]=this["webpackJsonp@mozg/react-pegaso"]||[]).push([[17],{348:function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=function extendStatics(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function __(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(__.prototype=r.prototype,new __)}}(),a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&(r[n[a]]=e[n[a]])}return r},s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},l=s(r(68)),i=s(r(0));function getStyle(e,t,r){var n=function getStyleValue(e,t,r){var n=r[e+"Style"]||"",a=t&&t[e]||"";return n?n+";"+a:a}(e,t,r);return n?' style="'+n+'"':""}var c={'"':"&quot;","'":"&apos;","&":"&amp;",">":"&gt;","<":"&lt"};var p=function(e){function JSONPretty(){return null!==e&&e.apply(this,arguments)||this}return n(JSONPretty,e),JSONPretty.prototype.render=function(){var e,t=this.props,r=t.json,n=t.data,s=t.replacer,l=t.space,p=t.themeClassName,y=t.theme,u=t.onJSONPrettyError,f=t.onError,_=t.silent,d=t.mainStyle,m=t.keyStyle,S=t.valueStyle,g=t.stringStyle,v=t.booleanStyle,h=t.errorStyle,O=o(t,["json","data","replacer","space","themeClassName","theme","onJSONPrettyError","onError","silent","mainStyle","keyStyle","valueStyle","stringStyle","booleanStyle","errorStyle"]),b={mainStyle:d,keyStyle:m,valueStyle:S,stringStyle:g,booleanStyle:v,errorStyle:h},j=n||r;if("string"===typeof j)try{j=JSON.parse(j)}catch(N){return _||console.warn("[react-json-pretty]: "+N.message),u&&u(N),!u&&f&&(f(N),console.warn("JSONPretty#onError is deprecated, please use JSONPretty#onJSONPrettyError instead")),i.createElement("div",a({},O,{dangerouslySetInnerHTML:{__html:'<pre class="__json-pretty-error__"'+getStyle("error",y,b)+">"+(e=j,(e?e.replace(/<|>|&|"|'/g,(function(e){return c[e]})):e)+"</pre>")}}))}return i.createElement("div",a({},O,{dangerouslySetInnerHTML:{__html:'<pre class="'+p+'"'+getStyle("main",y,b)+">"+this._pretty(y,j,s,+l,b)+"</pre>"}}))},JSONPretty.prototype._pretty=function(e,t,r,n,a){var o=JSON.stringify(t,"function"===typeof r?r:null,isNaN(n)?2:n);return o?o.replace(/&/g,"&amp;").replace(/\\"([^,])/g,"\\&quot;$1").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^( *)("[^"]+": )?("[^"]*"|[\w.+-]*)?([,[{]|\[\s*\],?|\{\s*\},?)?$/gm,this._replace.bind(null,e,a)):o},JSONPretty.prototype._replace=function(e,t,r,n,a,o,s){var l='<span class="__json-key__"'+getStyle("key",e,t)+">",i='<span class="__json-value__"'+getStyle("value",e,t)+">",c='<span class="__json-string__"'+getStyle("string",e,t)+">",p='<span class="__json-boolean__"'+getStyle("boolean",e,t)+">",y=n||"";return a&&(y=y+'"'+l+a.replace(/^"|":\s$/g,"")+'</span>": '),o&&(y="true"===o||"false"===o?y+p+o+"</span>":y+('"'===o[0]?c:i)+o+"</span>"),y+(s||"")},JSONPretty.propTypes={data:l.any,json:l.any,replacer:l.func,silent:l.bool,space:l.oneOfType([l.number,l.string]),theme:l.object,themeClassName:l.string,onJSONPrettyError:l.func},JSONPretty.defaultProps={data:"",json:"",silent:!0,space:2,themeClassName:"__json-pretty__"},JSONPretty}(i.Component);e.exports=p},349:function(e,t,r){},596:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return y}));var n=r(8),a=r(11),o=r(9),s=r(10),l=r(0),i=r.n(l),c=r(348),p=r.n(c),y=(r(349),function(e){Object(o.a)(WebApis,e);var t=Object(s.a)(WebApis);function WebApis(e){var r;return Object(n.a)(this,WebApis),(r=t.call(this,e)).receiveMessage=function(e){if(e.data.from&&"mozg_content_scripts"===e.data.from){document.getElementsByTagName("header")[0].style="display: none;",document.getElementsByTagName("footer")[0].style="display: none;",console.log("event.data: ",e.data);var t=e.data.data,n=JSON.stringify(t);r.setState({json:n})}},r.state={json:!1},r}return Object(a.a)(WebApis,[{key:"componentDidMount",value:function componentDidMount(){window.postMessage({from:"mozg_jsonviewer"},"*"),window.addEventListener("message",this.receiveMessage,!1);var e=JSON.stringify({a:1,b:2});this.setState({json:e})}},{key:"render",value:function render(){var e=this.state.json;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{class:"container-fluid"},i.a.createElement("div",{class:"card "},i.a.createElement("div",{class:"card-header text-center"},"JSON"),i.a.createElement("div",{class:"card-body"},i.a.createElement(p.a,{id:"json-pretty",data:e})),i.a.createElement("div",{class:"card-footer text-muted"},"\xa0"))),i.a.createElement("p",null,"\xa0"))}}]),WebApis}(i.a.Component))}}]);