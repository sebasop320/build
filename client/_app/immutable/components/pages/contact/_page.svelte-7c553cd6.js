import{S as se,i as ie,s as le,k as u,q as y,a as f,O as de,l as m,m as h,h as o,r as v,c as b,H as ce,n as w,I as t,b as D,P as ue,Q as me,B as V}from"../../../chunks/index-38fd9b73.js";const N={_origin:"https://api.emailjs.com"},pe=(a,e="https://api.emailjs.com")=>{N._userID=a,N._origin=e},ae=(a,e,c)=>{if(!a)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!c)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class ne{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const re=(a,e,c={})=>new Promise((s,p)=>{const l=new XMLHttpRequest;l.addEventListener("load",({target:r})=>{const g=new ne(r);g.status===200||g.text==="OK"?s(g):p(g)}),l.addEventListener("error",({target:r})=>{p(new ne(r))}),l.open("POST",N._origin+a,!0),Object.keys(c).forEach(r=>{l.setRequestHeader(r,c[r])}),l.send(e)}),he=(a,e,c,s)=>{const p=s||N._userID;ae(p,a,e);const l={lib_version:"3.10.0",user_id:p,service_id:a,template_id:e,template_params:c};return re("/api/v1.0/email/send",JSON.stringify(l),{"Content-type":"application/json"})},fe=a=>{let e;if(typeof a=="string"?e=document.querySelector(a):e=a,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},be=(a,e,c,s)=>{const p=s||N._userID,l=fe(c);ae(p,a,e);const r=new FormData(l);return r.append("lib_version","3.10.0"),r.append("service_id",a),r.append("template_id",e),r.append("user_id",p),re("/api/v1.0/email/send-form",r)},ge={init:pe,send:he,sendForm:be};function _e(a){let e,c,s,p,l,r,g,E,I,j,n,L,q,B,k,O,T,C,M,x,H,S,J,R,P,Q,A,U,F,Z,z,Y;return{c(){e=u("script"),s=u("script"),p=y(`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TNQZ8BJ0PF');
`),l=f(),r=u("h1"),g=y(`Let's have a talk
`),E=u("style"),I=y(`h1{
    color: #f25416;
    font-family: 'Bold'
    font-weight: 'bold';
    font-size: 4em;
  }`),j=f(),n=u("form"),L=u("label"),q=y("Name"),B=f(),k=u("input"),O=f(),T=u("label"),C=y("Email"),M=f(),x=u("input"),H=f(),S=u("label"),J=y("Message"),R=f(),P=u("textarea"),Q=f(),A=u("input"),U=f(),F=u("style"),Z=y(`/* Style the submit button with a specific background color etc */
input[type=submit] {
  background-color: #04AA6D;
  color: white;
  
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}`),this.h()},l(d){const _=de("svelte-csadmg",document.head);e=m(_,"SCRIPT",{src:!0});var oe=h(e);oe.forEach(o),s=m(_,"SCRIPT",{});var $=h(s);p=v($,`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TNQZ8BJ0PF');
`),$.forEach(o),_.forEach(o),l=b(d),r=m(d,"H1",{});var G=h(r);g=v(G,`Let's have a talk
`),E=m(G,"STYLE",{});var W=h(E);I=v(W,`h1{
    color: #f25416;
    font-family: 'Bold'
    font-weight: 'bold';
    font-size: 4em;
  }`),W.forEach(o),G.forEach(o),j=b(d),n=m(d,"FORM",{});var i=h(n);L=m(i,"LABEL",{});var X=h(L);q=v(X,"Name"),X.forEach(o),B=b(i),k=m(i,"INPUT",{type:!0,name:!0}),O=b(i),T=m(i,"LABEL",{});var K=h(T);C=v(K,"Email"),K.forEach(o),M=b(i),x=m(i,"INPUT",{type:!0,name:!0}),H=b(i),S=m(i,"LABEL",{});var ee=h(S);J=v(ee,"Message"),ee.forEach(o),R=b(i),P=m(i,"TEXTAREA",{name:!0}),h(P).forEach(o),Q=b(i),A=m(i,"INPUT",{type:!0}),U=b(i),F=m(i,"STYLE",{});var te=h(F);Z=v(te,`/* Style the submit button with a specific background color etc */
input[type=submit] {
  background-color: #04AA6D;
  color: white;
  
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}`),te.forEach(o),i.forEach(o),this.h()},h(){e.async=!0,ce(e.src,c="https://www.googletagmanager.com/gtag/js?id=G-TNQZ8BJ0PF")||w(e,"src",c),document.title="Let's have a talk",w(k,"type","text"),w(k,"name","user_name"),w(x,"type","email"),w(x,"name","user_email"),w(P,"name","message"),w(A,"type","submit"),A.value="Send"},m(d,_){t(document.head,e),t(document.head,s),t(s,p),D(d,l,_),D(d,r,_),t(r,g),t(r,E),t(E,I),D(d,j,_),D(d,n,_),t(n,L),t(L,q),t(n,B),t(n,k),t(n,O),t(n,T),t(T,C),t(n,M),t(n,x),t(n,H),t(n,S),t(S,J),t(n,R),t(n,P),t(n,Q),t(n,A),t(n,U),t(n,F),t(F,Z),z||(Y=ue(n,"submit",me(a[0])),z=!0)},p:V,i:V,o:V,d(d){o(e),o(s),d&&o(l),d&&o(r),d&&o(j),d&&o(n),z=!1,Y()}}}function ye(a){function e(c){ge.sendForm("service_4bzrx0a","template_vi4kk2g",c.target,"kYZTkMFOPTOCbLSAC").then(s=>{alert("SUCCESS!",s.text)},s=>{alert("FAILED...",s.text)})}return[e]}class we extends se{constructor(e){super(),ie(this,e,ye,_e,le,{})}}export{we as default};
