import{S as at,i as rt,s as ot,a as it,e as q,c as st,b as W,g as de,t as B,d as pe,f as F,h as J,j as lt,o as Pe,k as ct,l as ft,m as ut,n as be,p as C,q as dt,r as pt,u as ht,v as H,w as M,x as Ue,y as X,z as Y,A as ce}from"./chunks/index-6c33eb69.js";import{S as tt,I as x,g as We,f as Ge,a as Ee,b as fe,s as z,i as He,c as ue,P as Me,d as mt,e as _t,h as gt}from"./chunks/singletons-08e7a750.js";import{u as wt}from"./chunks/parse-f0c618df.js";function yt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function vt(r){return r.split("%25").map(decodeURI).join("%25")}function bt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const Et=["href","pathname","search","searchParams","toString","toJSON"];function kt(r,e){const n=new URL(r);for(const s of Et){let l=n[s];Object.defineProperty(n,s,{get(){return e(),l},enumerable:!0,configurable:!0})}return Rt(n),n}function Rt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const St="/__data.json";function Lt(r){return r.replace(/\/$/,"")+St}function Pt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=n.length;for(;s;)e=e*33^n[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(r,e)=>((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"&&te.delete(Ie(r)),he(r,e));const te=new Map;function At(r,e){const n=Ie(r,e),s=document.querySelector(n);if(s!=null&&s.textContent){const{body:l,...f}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&te.set(n,{body:l,init:f,ttl:1e3*Number(t)}),Promise.resolve(new Response(l,f))}return he(r,e)}function Ot(r,e,n){if(te.size>0){const s=Ie(r,n),l=te.get(s);if(l){if(performance.now()<l.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(l.body,l.init);te.delete(s)}}return he(e,n)}function Ie(r,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${Pt(e.body)}"]`),s}const $t=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ut(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${Tt(r).map(s=>{const l=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(l)return e.push({name:l[1],matcher:l[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(f)return e.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const t=s.split(/\[(.+?)\](?!\])/);return"/"+t.map((w,m)=>{if(m%2){if(w.startsWith("x+"))return ke(String.fromCharCode(parseInt(w.slice(2),16)));if(w.startsWith("u+"))return ke(String.fromCharCode(...w.slice(2).split("-").map($=>parseInt($,16))));const g=$t.exec(w);if(!g)throw new Error(`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,R,S,D,j]=g;return e.push({name:D,matcher:j,optional:!!R,rest:!!S,chained:S?m===1&&t[0]==="":!1}),S?"(.*?)":R?"([^/]*)?":"([^/]+?)"}return ke(w)}).join("")}).join("")}/?$`),params:e}}function It(r){return!/^\([^)]+\)$/.test(r)}function Tt(r){return r.slice(1).split("/").filter(It)}function Dt(r,e,n){const s={},l=r.slice(1);let f="";for(let t=0;t<e.length;t+=1){const d=e[t];let w=l[t];if(d.chained&&d.rest&&f&&(w=w?f+"/"+w:f),f="",w===void 0)d.rest&&(s[d.name]="");else{if(d.matcher&&!n[d.matcher](w)){if(d.optional&&d.chained){let m=l.indexOf(void 0,t);if(m===-1){const g=e[t+1];if(g!=null&&g.rest&&g.chained)f=w;else return}for(;m>=t;)l[m]=l[m-1],m-=1;continue}return}s[d.name]=w}}if(!f)return s}function ke(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function jt(r,e,n,s){const l=new Set(e);return Object.entries(n).map(([d,[w,m,g]])=>{const{pattern:R,params:S}=Ut(d),D={id:d,exec:j=>{const $=R.exec(j);if($)return Dt($,S,s)},errors:[1,...g||[]].map(j=>r[j]),layouts:[0,...m||[]].map(t),leaf:f(w)};return D.errors.length=D.layouts.length=Math.max(D.errors.length,D.layouts.length),D});function f(d){const w=d<0;return w&&(d=~d),[w,r[d]]}function t(d){return d===void 0?d:[l.has(d),r[d]]}}function Nt(r){let e,n,s;var l=r[0][0];function f(t){return{props:{data:t[2],form:t[1]}}}return l&&(e=H(l,f(r))),{c(){e&&M(e.$$.fragment),n=q()},l(t){e&&Ue(e.$$.fragment,t),n=q()},m(t,d){e&&X(e,t,d),W(t,n,d),s=!0},p(t,d){const w={};if(d&4&&(w.data=t[2]),d&2&&(w.form=t[1]),l!==(l=t[0][0])){if(e){de();const m=e;B(m.$$.fragment,1,0,()=>{Y(m,1)}),pe()}l?(e=H(l,f(t)),M(e.$$.fragment),F(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else l&&e.$set(w)},i(t){s||(e&&F(e.$$.fragment,t),s=!0)},o(t){e&&B(e.$$.fragment,t),s=!1},d(t){t&&J(n),e&&Y(e,t)}}}function Ct(r){let e,n,s;var l=r[0][0];function f(t){return{props:{data:t[2],$$slots:{default:[xt]},$$scope:{ctx:t}}}}return l&&(e=H(l,f(r))),{c(){e&&M(e.$$.fragment),n=q()},l(t){e&&Ue(e.$$.fragment,t),n=q()},m(t,d){e&&X(e,t,d),W(t,n,d),s=!0},p(t,d){const w={};if(d&4&&(w.data=t[2]),d&523&&(w.$$scope={dirty:d,ctx:t}),l!==(l=t[0][0])){if(e){de();const m=e;B(m.$$.fragment,1,0,()=>{Y(m,1)}),pe()}l?(e=H(l,f(t)),M(e.$$.fragment),F(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else l&&e.$set(w)},i(t){s||(e&&F(e.$$.fragment,t),s=!0)},o(t){e&&B(e.$$.fragment,t),s=!1},d(t){t&&J(n),e&&Y(e,t)}}}function xt(r){let e,n,s;var l=r[0][1];function f(t){return{props:{data:t[3],form:t[1]}}}return l&&(e=H(l,f(r))),{c(){e&&M(e.$$.fragment),n=q()},l(t){e&&Ue(e.$$.fragment,t),n=q()},m(t,d){e&&X(e,t,d),W(t,n,d),s=!0},p(t,d){const w={};if(d&8&&(w.data=t[3]),d&2&&(w.form=t[1]),l!==(l=t[0][1])){if(e){de();const m=e;B(m.$$.fragment,1,0,()=>{Y(m,1)}),pe()}l?(e=H(l,f(t)),M(e.$$.fragment),F(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else l&&e.$set(w)},i(t){s||(e&&F(e.$$.fragment,t),s=!0)},o(t){e&&B(e.$$.fragment,t),s=!1},d(t){t&&J(n),e&&Y(e,t)}}}function Xe(r){let e,n=r[5]&&Ye(r);return{c(){e=ct("div"),n&&n.c(),this.h()},l(s){e=ft(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var l=ut(e);n&&n.l(l),l.forEach(J),this.h()},h(){be(e,"id","svelte-announcer"),be(e,"aria-live","assertive"),be(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(s,l){W(s,e,l),n&&n.m(e,null)},p(s,l){s[5]?n?n.p(s,l):(n=Ye(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&J(e),n&&n.d()}}}function Ye(r){let e;return{c(){e=dt(r[6])},l(n){e=pt(n,r[6])},m(n,s){W(n,e,s)},p(n,s){s&64&&ht(e,n[6])},d(n){n&&J(e)}}}function Vt(r){let e,n,s,l,f;const t=[Ct,Nt],d=[];function w(g,R){return g[0][1]?0:1}e=w(r),n=d[e]=t[e](r);let m=r[4]&&Xe(r);return{c(){n.c(),s=it(),m&&m.c(),l=q()},l(g){n.l(g),s=st(g),m&&m.l(g),l=q()},m(g,R){d[e].m(g,R),W(g,s,R),m&&m.m(g,R),W(g,l,R),f=!0},p(g,[R]){let S=e;e=w(g),e===S?d[e].p(g,R):(de(),B(d[S],1,1,()=>{d[S]=null}),pe(),n=d[e],n?n.p(g,R):(n=d[e]=t[e](g),n.c()),F(n,1),n.m(s.parentNode,s)),g[4]?m?m.p(g,R):(m=Xe(g),m.c(),m.m(l.parentNode,l)):m&&(m.d(1),m=null)},i(g){f||(F(n),f=!0)},o(g){B(n),f=!1},d(g){d[e].d(g),g&&J(s),m&&m.d(g),g&&J(l)}}}function qt(r,e,n){let{stores:s}=e,{page:l}=e,{components:f}=e,{form:t}=e,{data_0:d=null}=e,{data_1:w=null}=e;lt(s.page.notify);let m=!1,g=!1,R=null;return Pe(()=>{const S=s.page.subscribe(()=>{m&&(n(5,g=!0),n(6,R=document.title||"untitled page"))});return n(4,m=!0),S}),r.$$set=S=>{"stores"in S&&n(7,s=S.stores),"page"in S&&n(8,l=S.page),"components"in S&&n(0,f=S.components),"form"in S&&n(1,t=S.form),"data_0"in S&&n(2,d=S.data_0),"data_1"in S&&n(3,w=S.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(l)},[f,t,d,w,m,g,R,s,l]}class Bt extends at{constructor(e){super(),rt(this,e,qt,Vt,ot,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ft="modulepreload",Jt=function(r,e){return new URL(r,e).href},Qe={},V=function(e,n,s){if(!n||n.length===0)return e();const l=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Jt(f,s),f in Qe)return;Qe[f]=!0;const t=f.endsWith(".css"),d=t?'[rel="stylesheet"]':"";if(!!s)for(let g=l.length-1;g>=0;g--){const R=l[g];if(R.href===f&&(!t||R.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${d}`))return;const m=document.createElement("link");if(m.rel=t?"stylesheet":Ft,t||(m.as="script",m.crossOrigin=""),m.href=f,document.head.appendChild(m),t)return new Promise((g,R)=>{m.addEventListener("load",g),m.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e())},Kt={},me=[()=>V(()=>import("./chunks/0-49ed792a.js"),["./chunks/0-49ed792a.js","./components/pages/_layout.svelte-8bd96f34.js","./chunks/index-6c33eb69.js","./chunks/stores-aefd299b.js","./chunks/singletons-08e7a750.js","./assets/_layout-024933cf.css"],import.meta.url),()=>V(()=>import("./chunks/1-6580dbbd.js"),["./chunks/1-6580dbbd.js","./components/error.svelte-b47963fc.js","./chunks/index-6c33eb69.js","./chunks/stores-aefd299b.js","./chunks/singletons-08e7a750.js"],import.meta.url),()=>V(()=>import("./chunks/2-658c6b19.js"),["./chunks/2-658c6b19.js","./chunks/_page-da46b06b.js","./components/pages/_page.svelte-e4d35028.js","./chunks/index-6c33eb69.js","./chunks/user-7d2574ba.js","./assets/_page-e814e030.css"],import.meta.url),()=>V(()=>import("./chunks/3-4a667ae6.js"),["./chunks/3-4a667ae6.js","./chunks/_page-6a6e5f22.js","./chunks/environment-9aa685ef.js","./components/pages/about/_page.svelte-9f794d66.js","./chunks/index-6c33eb69.js","./chunks/user-7d2574ba.js"],import.meta.url),()=>V(()=>import("./chunks/4-0d3f2839.js"),["./chunks/4-0d3f2839.js","./components/pages/colegio/_page.svelte-c82de98b.js","./chunks/index-6c33eb69.js"],import.meta.url),()=>V(()=>import("./chunks/5-d488c496.js"),["./chunks/5-d488c496.js","./chunks/_page-189548d5.js","./chunks/environment-9aa685ef.js","./components/pages/contact/_page.svelte-61600454.js","./chunks/index-6c33eb69.js"],import.meta.url),()=>V(()=>import("./chunks/6-bdcab2b8.js"),["./chunks/6-bdcab2b8.js","./components/pages/sverdle/_page.svelte-a482c532.js","./chunks/index-6c33eb69.js","./chunks/parse-f0c618df.js","./chunks/singletons-08e7a750.js","./assets/_page-9d501049.css"],import.meta.url),()=>V(()=>import("./chunks/7-dfaae22b.js"),["./chunks/7-dfaae22b.js","./chunks/_page-9c76c2d7.js","./chunks/environment-9aa685ef.js","./components/pages/sverdle/how-to-play/_page.svelte-a4558705.js","./chunks/index-6c33eb69.js","./assets/_page-89a9e780.css"],import.meta.url)],zt=[],Wt={"/":[2],"/about":[3],"/colegio":[4],"/contact":[5],"/sverdle":[-7],"/sverdle/how-to-play":[7]},Gt={handleError:({error:r})=>{console.error(r)}};class Ae{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ze{constructor(e,n){this.status=e,this.location=n}}async function Ht(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,l])=>[s,await l])));return r}const Re=jt(me,zt,Wt,Kt),Oe=me[0],$e=me[1];Oe();$e();let ne={};try{ne=JSON.parse(sessionStorage[tt])}catch{}function Se(r){ne[r]=ue()}function Mt({target:r,base:e}){var Je;const n=document.documentElement,s=[];let l=null;const f={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},d=!1,w=!1,m=!0,g=!1,R=!1,S=!1,D=!1,j,$=(Je=history.state)==null?void 0:Je[x];$||($=Date.now(),history.replaceState({...history.state,[x]:$},"",location.href));const _e=ne[$];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let K,Te,ae;async function De(){ae=ae||Promise.resolve(),await ae,ae=null;const a=new URL(location.href),o=ie(a,!0);l=null,await Ne(o,a,[])}async function ge(a,{noScroll:o=!1,replaceState:c=!1,keepFocus:i=!1,state:p={},invalidateAll:u=!1},h,y){return typeof a=="string"&&(a=new URL(a,We(document))),se({url:a,scroll:o?ue():null,keepfocus:i,redirect_chain:h,details:{state:p,replaceState:c},nav_token:y,accepted:()=>{u&&(D=!0)},blocked:()=>{},type:"goto"})}async function je(a){const o=ie(a,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);return l={id:o.id,promise:Ve(o).then(c=>(c.type==="loaded"&&c.state.error&&(l=null),c))},l.promise}async function re(...a){const c=Re.filter(i=>a.some(p=>i.exec(p))).map(i=>Promise.all([...i.layouts,i.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(c)}async function Ne(a,o,c,i,p={},u){var y,v;Te=p;let h=a&&await Ve(a);if(h||(h=await Fe(o,{id:null},await ee(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(a==null?void 0:a.url)||o,Te!==p)return!1;if(h.type==="redirect")if(c.length>10||c.includes(o.pathname))h=await oe({status:500,error:await ee(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return ge(new URL(h.location,o).href,{},[...c,o.pathname],p),!1;else((v=(y=h.props)==null?void 0:y.page)==null?void 0:v.status)>=400&&await z.updated.check()&&await le(o);if(s.length=0,D=!1,g=!0,i&&i.details){const{details:_}=i,E=_.replaceState?0:1;_.state[x]=$+=E,history[_.replaceState?"replaceState":"pushState"](_.state,"",o)}if(l=null,w?(t=h.state,h.props.page&&(h.props.page.url=o),j.$set(h.props)):Ce(h),i){const{scroll:_,keepfocus:E}=i;if(E||Le(),await ce(),m){const L=o.hash&&document.getElementById(o.hash.slice(1));_?scrollTo(_.x,_.y):L?L.scrollIntoView():scrollTo(0,0)}}else await ce();m=!0,h.props.page&&(K=h.props.page),u&&u(),g=!1}function Ce(a){var i;t=a.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),K=a.props.page,j=new Bt({target:r,props:{...a.props,stores:z},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((i=t.route)==null?void 0:i.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};f.after_navigate.forEach(p=>p(c)),w=!0}async function Q({url:a,params:o,branch:c,status:i,error:p,route:u,form:h}){const y=c.filter(Boolean);let v="never";for(const P of c)(P==null?void 0:P.slash)!==void 0&&(v=P.slash);a.pathname=yt(a.pathname,v),a.search=a.search;const _={type:"loaded",state:{url:a,params:o,branch:c,error:p,route:u},props:{components:y.map(P=>P.node.component)}};h!==void 0&&(_.props.form=h);let E={},L=!K;for(let P=0;P<y.length;P+=1){const b=y[P];E={...E,...b.data},(L||!t.branch.some(I=>I===b))&&(_.props[`data_${P}`]=E,L=L||Object.keys(b.data??{}).length>0)}return L||(L=Object.keys(K.data).length!==Object.keys(E).length),(!t.url||a.href!==t.url.href||t.error!==p||h!==void 0||L)&&(_.props.page={error:p,params:o,route:{id:(u==null?void 0:u.id)??null},status:i,url:new URL(a),form:h??null,data:L?E:K.data}),_}async function we({loader:a,parent:o,url:c,params:i,route:p,server_data_node:u}){var _,E,L;let h=null;const y={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await a();if((_=v.universal)!=null&&_.load){let N=function(...b){for(const I of b){const{href:T}=new URL(I,c);y.dependencies.add(T)}};const P={route:{get id(){return y.route=!0,p.id}},params:new Proxy(i,{get:(b,I)=>(y.params.add(I),b[I])}),data:(u==null?void 0:u.data)??null,url:kt(c,()=>{y.url=!0}),async fetch(b,I){let T;b instanceof Request?(T=b.url,I={body:b.method==="GET"||b.method==="HEAD"?void 0:await b.blob(),cache:b.cache,credentials:b.credentials,headers:b.headers,integrity:b.integrity,keepalive:b.keepalive,method:b.method,mode:b.mode,redirect:b.redirect,referrer:b.referrer,referrerPolicy:b.referrerPolicy,signal:b.signal,...I}):T=b;const k=new URL(T,c).href;return N(k),w?Ot(T,k,I):At(T,I)},setHeaders:()=>{},depends:N,parent(){return y.parent=!0,o()}};h=await v.universal.load.call(null,P)??null,h=h?await Ht(h):null}return{node:v,loader:a,server:u,universal:(E=v.universal)!=null&&E.load?{type:"data",data:h,uses:y}:null,data:h??(u==null?void 0:u.data)??null,slash:((L=v.universal)==null?void 0:L.trailingSlash)??(u==null?void 0:u.slash)}}function xe(a,o,c,i,p){if(D)return!0;if(!i)return!1;if(i.parent&&a||i.route&&o||i.url&&c)return!0;for(const u of i.params)if(p[u]!==t.params[u])return!0;for(const u of i.dependencies)if(s.some(h=>h(new URL(u))))return!0;return!1}function ye(a,o){return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set(a.uses.dependencies??[]),params:new Set(a.uses.params??[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"?o??null:null}async function Ve({id:a,invalidating:o,url:c,params:i,route:p}){if((l==null?void 0:l.id)===a)return l.promise;const{errors:u,layouts:h,leaf:y}=p,v=[...h,y];u.forEach(k=>k==null?void 0:k().catch(()=>{})),v.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let _=null;const E=t.url?a!==t.url.pathname+t.url.search:!1,L=t.route?a!==t.route.id:!1,N=v.reduce((k,O,U)=>{var Z;const A=t.branch[U],G=!!(O!=null&&O[0])&&((A==null?void 0:A.loader)!==O[1]||xe(k.some(Boolean),L,E,(Z=A.server)==null?void 0:Z.uses,i));return k.push(G),k},[]);if(N.some(Boolean)){try{_=await et(c,N)}catch(k){return oe({status:500,error:await ee(k,{url:c,params:i,route:{id:p.id}}),url:c,route:p})}if(_.type==="redirect")return _}const P=_==null?void 0:_.nodes;let b=!1;const I=v.map(async(k,O)=>{var Z;if(!k)return;const U=t.branch[O],A=P==null?void 0:P[O];if((!A||A.type==="skip")&&k[1]===(U==null?void 0:U.loader)&&!xe(b,L,E,(Z=U.universal)==null?void 0:Z.uses,i))return U;if(b=!0,(A==null?void 0:A.type)==="error")throw A;return we({loader:k[1],url:c,params:i,route:p,parent:async()=>{var ze;const Ke={};for(let ve=0;ve<O;ve+=1)Object.assign(Ke,(ze=await I[ve])==null?void 0:ze.data);return Ke},server_data_node:ye(A===void 0&&k[0]?{type:"skip"}:A??null,U==null?void 0:U.server)})});for(const k of I)k.catch(()=>{});const T=[];for(let k=0;k<v.length;k+=1)if(v[k])try{T.push(await I[k])}catch(O){if(O instanceof Ze)return{type:"redirect",location:O.location};let U=500,A;P!=null&&P.includes(O)?(U=O.status??U,A=O.error):O instanceof Ae?(U=O.status,A=O.body):A=await ee(O,{params:i,url:c,route:{id:p.id}});const G=await qe(k,T,u);return G?await Q({url:c,params:i,branch:T.slice(0,G.idx).concat(G.node),status:U,error:A,route:p}):await Fe(c,{id:p.id},A,U)}else T.push(void 0);return await Q({url:c,params:i,branch:T,status:200,error:null,route:p,form:o?void 0:null})}async function qe(a,o,c){for(;a--;)if(c[a]){let i=a;for(;!o[i];)i-=1;try{return{idx:i+1,node:{node:await c[a](),loader:c[a],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:a,error:o,url:c,route:i}){const p={},u=await Oe();let h=null;if(u.server)try{const _=await et(c,[!0]);if(_.type!=="data"||_.nodes[0]&&_.nodes[0].type!=="data")throw 0;h=_.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||d)&&await le(c)}const y=await we({loader:Oe,url:c,params:p,route:i,parent:()=>Promise.resolve({}),server_data_node:ye(h)}),v={node:await $e(),loader:$e,universal:null,server:null,data:null};return await Q({url:c,params:p,branch:[y,v],status:a,error:o,route:null})}function ie(a,o){if(He(a,e))return;const c=vt(a.pathname.slice(e.length)||"/");for(const i of Re){const p=i.exec(c);if(p)return{id:a.pathname+a.search,invalidating:o,route:i,params:bt(p),url:a}}}function Be({url:a,type:o,intent:c,delta:i}){var y,v;let p=!1;const u={from:{params:t.params,route:{id:((y=t.route)==null?void 0:y.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((v=c==null?void 0:c.route)==null?void 0:v.id)??null},url:a},willUnload:!c,type:o};i!==void 0&&(u.delta=i);const h={...u,cancel:()=>{p=!0}};return R||f.before_navigate.forEach(_=>_(h)),p?null:u}async function se({url:a,scroll:o,keepfocus:c,redirect_chain:i,details:p,type:u,delta:h,nav_token:y,accepted:v,blocked:_}){const E=ie(a,!1),L=Be({url:a,type:u,delta:h,intent:E});if(!L){_();return}Se($),v(),R=!0,w&&z.navigating.set(L),await Ne(E,a,i,{scroll:o,keepfocus:c,details:p},y,()=>{R=!1,f.after_navigate.forEach(N=>N(L)),z.navigating.set(null)})}async function Fe(a,o,c,i){return a.origin===location.origin&&a.pathname===location.pathname&&!d?await oe({status:i,error:c,url:a,route:o}):await le(a)}function le(a){return location.href=a.href,new Promise(()=>{})}function nt(){let a;n.addEventListener("mousemove",u=>{const h=u.target;clearTimeout(a),a=setTimeout(()=>{i(h,2)},20)});function o(u){i(u.composedPath()[0],1)}n.addEventListener("mousedown",o),n.addEventListener("touchstart",o,{passive:!0});const c=new IntersectionObserver(u=>{for(const h of u)h.isIntersecting&&(re(new URL(h.target.href).pathname),c.unobserve(h.target))},{threshold:0});function i(u,h){const y=Ge(u,n);if(!y)return;const{url:v,external:_}=Ee(y,e);if(_)return;const E=fe(y);E.reload||(h<=E.preload_data?je(v):h<=E.preload_code&&re(v.pathname))}function p(){c.disconnect();for(const u of n.querySelectorAll("a")){const{url:h,external:y}=Ee(u,e);if(y)continue;const v=fe(u);v.reload||(v.preload_code===Me.viewport&&c.observe(u),v.preload_code===Me.eager&&re(h.pathname))}}f.after_navigate.push(p),p()}return{after_navigate:a=>{Pe(()=>(f.after_navigate.push(a),()=>{const o=f.after_navigate.indexOf(a);f.after_navigate.splice(o,1)}))},before_navigate:a=>{Pe(()=>(f.before_navigate.push(a),()=>{const o=f.before_navigate.indexOf(a);f.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(g||!w)&&(m=!1)},goto:(a,o={})=>ge(a,o,[]),invalidate:a=>{if(typeof a=="function")s.push(a);else{const{href:o}=new URL(a,location.href);s.push(c=>c.href===o)}return De()},invalidateAll:()=>(D=!0,De()),preload_data:async a=>{const o=new URL(a,We(document));await je(o)},preload_code:re,apply_action:async a=>{if(a.type==="error"){const o=new URL(location.href),{branch:c,route:i}=t;if(!i)return;const p=await qe(t.branch.length,c,i.errors);if(p){const u=await Q({url:o,params:t.params,branch:c.slice(0,p.idx).concat(p.node),status:a.status??500,error:a.error,route:i});t=u.state,j.$set(u.props),ce().then(Le)}}else if(a.type==="redirect")ge(a.location,{invalidateAll:!0},[]);else{const o={form:a.data,page:{...K,form:a.data,status:a.status}};j.$set(o),a.type==="success"&&ce().then(Le)}},_start_router:()=>{var a;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var i;let c=!1;if(!R){const p={from:{params:t.params,route:{id:((i=t.route)==null?void 0:i.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};f.before_navigate.forEach(u=>u(p))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Se($);try{sessionStorage[tt]=JSON.stringify(ne)}catch{}}}),(a=navigator.connection)!=null&&a.saveData||nt(),n.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const c=Ge(o.composedPath()[0],n);if(!c)return;const{url:i,external:p,has:u}=Ee(c,e),h=fe(c);if(!i||!(c instanceof SVGAElement)&&i.protocol!==location.protocol&&!(i.protocol==="https:"||i.protocol==="http:")||u.download)return;if(p||h.reload){Be({url:i,type:"link"})||o.preventDefault(),R=!0;return}const[v,_]=i.href.split("#");if(_!==void 0&&v===location.href.split("#")[0]){S=!0,Se($),t.url=i,z.page.set({...K,url:i}),z.page.notify();return}se({url:i,scroll:h.noscroll?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:i.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),n.addEventListener("submit",o=>{if(o.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(o.target),i=o.submitter;if(((i==null?void 0:i.formMethod)||c.method)!=="get")return;const u=new URL((i==null?void 0:i.hasAttribute("formaction"))&&(i==null?void 0:i.formAction)||c.action);if(He(u,e))return;const h=o.target,{noscroll:y,reload:v}=fe(h);if(v)return;o.preventDefault(),o.stopPropagation();const _=new FormData(h),E=i==null?void 0:i.getAttribute("name");E&&_.append(E,(i==null?void 0:i.getAttribute("value"))??""),u.search=new URLSearchParams(_).toString(),se({url:u,scroll:y?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",o=>{var c;if((c=o.state)!=null&&c[x]){if(o.state[x]===$)return;const i=o.state[x]-$;se({url:new URL(location.href),scroll:ne[o.state[x]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{$=o.state[x]},blocked:()=>{history.go(-i)},type:"popstate",delta:i})}}),addEventListener("hashchange",()=>{S&&(S=!1,history.replaceState({...history.state,[x]:++$},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&z.navigating.set(null)})},_hydrate:async({status:a=200,error:o,node_ids:c,params:i,route:p,data:u,form:h})=>{d=!0;const y=new URL(location.href);({params:i={},route:p={id:null}}=ie(y,!1)||{});let v;try{const _=c.map(async(E,L)=>{const N=u[L];return we({loader:me[E],url:y,params:i,route:p,parent:async()=>{const P={};for(let b=0;b<L;b+=1)Object.assign(P,(await _[b]).data);return P},server_data_node:ye(N)})});v=await Q({url:y,params:i,branch:await Promise.all(_),status:a,error:o,form:h,route:Re.find(({id:E})=>E===p.id)??null})}catch(_){if(_ instanceof Ze){await le(new URL(_.location,location.href));return}v=await oe({status:_ instanceof Ae?_.status:500,error:await ee(_,{url:y,params:i,route:p}),url:y,route:p})}Ce(v)}}}async function et(r,e){var f;const n=new URL(r);n.pathname=Lt(r.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const s=await he(n.href),l=await s.json();if(!s.ok)throw new Error(l);return(f=l.nodes)==null||f.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=wt(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),l}function ee(r,e){return r instanceof Ae?r.body:Gt.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var s;(s=getSelection())==null||s.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function Zt({env:r,hydrate:e,paths:n,target:s,version:l}){mt(n),gt(l);const f=Mt({target:s,base:n.base});_t({client:f}),e?await f._hydrate(e):f.goto(location.href,{replaceState:!0}),f._start_router()}export{Zt as start};
