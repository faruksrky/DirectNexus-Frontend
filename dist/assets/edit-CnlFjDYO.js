import{ad as o,r as i,j as a,w as m,p as e,ae as n,H as d,C as l}from"./index-WovwU9Oy.js";import{C as p}from"./Snackbar-DZN8iAT1.js";import{U as u}from"./user-new-edit-form-Y8HnWega.js";import"./form-provider-Cl-ukHw0.js";import"./new-password-icon-BZtC1U1G.js";import"./Button-DoLAt11I.js";function h(){const s=o();return i.useMemo(()=>s,[s])}function x({user:s}){return a.jsxs(m,{children:[a.jsx(p,{heading:"Güncelle",links:[{name:"Dashboard",href:e.dashboard.root},{name:"Kullanıcı",href:e.dashboard.user.root},{name:s==null?void 0:s.name}],sx:{mb:{xs:3,md:5}}}),a.jsx(u,{currentUser:s})]})}const c={title:`User edit | Dashboard - ${l.appName}`};function w(){const{id:s=""}=h(),t=n.find(r=>r.id===s);return a.jsxs(a.Fragment,{children:[a.jsx(d,{children:a.jsxs("title",{children:[" ",c.title]})}),a.jsx(x,{user:t})]})}export{w as default};