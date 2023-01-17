import{S as ne,i as ae,s as re,k as m,q as y,a as f,l as p,m as h,r as E,h as u,c as b,n as g,b as q,F as t,M as oe,N as se,B as $}from"../../../chunks/index-6c33eb69.js";const M={_origin:"https://api.emailjs.com"},ie=(a,e="https://api.emailjs.com")=>{M._userID=a,M._origin=e},ee=(a,e,l)=>{if(!a)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!l)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Q{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const te=(a,e,l={})=>new Promise((d,s)=>{const c=new XMLHttpRequest;c.addEventListener("load",({target:r})=>{const _=new Q(r);_.status===200||_.text==="OK"?d(_):s(_)}),c.addEventListener("error",({target:r})=>{s(new Q(r))}),c.open("POST",M._origin+a,!0),Object.keys(l).forEach(r=>{c.setRequestHeader(r,l[r])}),c.send(e)}),le=(a,e,l,d)=>{const s=d||M._userID;ee(s,a,e);const c={lib_version:"3.10.0",user_id:s,service_id:a,template_id:e,template_params:l};return te("/api/v1.0/email/send",JSON.stringify(c),{"Content-type":"application/json"})},de=a=>{let e;if(typeof a=="string"?e=document.querySelector(a):e=a,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},ue=(a,e,l,d)=>{const s=d||M._userID,c=de(l);ee(s,a,e);const r=new FormData(c);return r.append("lib_version","3.10.0"),r.append("service_id",a),r.append("template_id",e),r.append("user_id",s),te("/api/v1.0/email/send-form",r)},ce={init:ie,send:le,sendForm:ue};function me(a){let e,l,d,s,c,r,_,N,n,k,P,D,x,I,L,O,j,T,B,S,C,H,w,U,A,z,F,R,V,J;return{c(){e=m("title"),l=y("Let's have a talk"),d=f(),s=m("h1"),c=y(`Let's have a talk
`),r=m("style"),_=y(`h1{
    color: #f25416;
    font-family: 'Bold'
    font-weight: 'bold';
    font-size: 4em;
  }`),N=f(),n=m("form"),k=m("label"),P=y("Name"),D=f(),x=m("input"),I=f(),L=m("label"),O=y("Email"),j=f(),T=m("input"),B=f(),S=m("label"),C=y("Message"),H=f(),w=m("textarea"),U=f(),A=m("input"),z=f(),F=m("style"),R=y(`/* Style the submit button with a specific background color etc */
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
}`),this.h()},l(o){e=p(o,"TITLE",{});var v=h(e);l=E(v,"Let's have a talk"),v.forEach(u),d=b(o),s=p(o,"H1",{});var Y=h(s);c=E(Y,`Let's have a talk
`),r=p(Y,"STYLE",{});var W=h(r);_=E(W,`h1{
    color: #f25416;
    font-family: 'Bold'
    font-weight: 'bold';
    font-size: 4em;
  }`),W.forEach(u),Y.forEach(u),N=b(o),n=p(o,"FORM",{});var i=h(n);k=p(i,"LABEL",{});var X=h(k);P=E(X,"Name"),X.forEach(u),D=b(i),x=p(i,"INPUT",{type:!0,name:!0}),I=b(i),L=p(i,"LABEL",{});var K=h(L);O=E(K,"Email"),K.forEach(u),j=b(i),T=p(i,"INPUT",{type:!0,name:!0}),B=b(i),S=p(i,"LABEL",{});var Z=h(S);C=E(Z,"Message"),Z.forEach(u),H=b(i),w=p(i,"TEXTAREA",{name:!0}),h(w).forEach(u),U=b(i),A=p(i,"INPUT",{type:!0}),z=b(i),F=p(i,"STYLE",{});var G=h(F);R=E(G,`/* Style the submit button with a specific background color etc */
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
}`),G.forEach(u),i.forEach(u),this.h()},h(){g(x,"type","text"),g(x,"name","user_name"),g(T,"type","email"),g(T,"name","user_email"),g(w,"name","message"),g(A,"type","submit"),A.value="Send"},m(o,v){q(o,e,v),t(e,l),q(o,d,v),q(o,s,v),t(s,c),t(s,r),t(r,_),q(o,N,v),q(o,n,v),t(n,k),t(k,P),t(n,D),t(n,x),t(n,I),t(n,L),t(L,O),t(n,j),t(n,T),t(n,B),t(n,S),t(S,C),t(n,H),t(n,w),t(n,U),t(n,A),t(n,z),t(n,F),t(F,R),V||(J=oe(n,"submit",se(a[0])),V=!0)},p:$,i:$,o:$,d(o){o&&u(e),o&&u(d),o&&u(s),o&&u(N),o&&u(n),V=!1,J()}}}function pe(a){function e(l){ce.sendForm("service_4bzrx0a","template_94gqytg",l.target,"kYZTkMFOPTOCbLSAC").then(d=>{alert("SUCCESS!",d.text)},d=>{alert("FAILED...",d.text)})}return[e]}class he extends ne{constructor(e){super(),ae(this,e,pe,me,re,{})}}export{he as default};
