import{b as T,j as s,r as x,q as S,I as A,d as u,c as F,u as L,v as I,t as B,w as E,p as j,R as D,x as K,y as U,B as v,z,o as O,C as P,H}from"./index-BalJt-EG.js";import"./user-new-edit-form-DQFaJw7V.js";import{T as W,a as m,C as _,F as G,b as g,c as b,u as M,g as $,r as V,d as X,e as Y,f as q,h as J,i as Q,j as Z,k as ee,l as se,m as ae}from"./filters-result-CM1jAMhj.js";import{C as te,a as le}from"./Snackbar-Dh968tdI.js";import{c as k,C as ne,e as N,T as C,d as oe,M as w,f,g as re,h as ie}from"./form-provider-C6f3T22E.js";import{B as ce}from"./Button-CBMUwZRd.js";import"./new-password-icon-BT1ypAhJ.js";function de({row:e,selected:t,onSelectRow:i}){return T(),k(),s.jsx(s.Fragment,{children:s.jsxs(W,{hover:!0,selected:t,"aria-checked":t,tabIndex:-1,children:[s.jsx(m,{padding:"checkbox",children:s.jsx(ne,{id:e.id,checked:t,onClick:i})}),s.jsx(m,{sx:{whiteSpace:"nowrap"},children:e.id}),s.jsx(m,{sx:{whiteSpace:"nowrap"},children:e.firstName}),s.jsx(m,{sx:{whiteSpace:"nowrap"},children:e.lastName}),s.jsx(m,{sx:{whiteSpace:"nowrap"},children:e.email}),s.jsx(m,{sx:{whiteSpace:"nowrap"},children:e.userName})]})})}function he({filters:e,options:t,onResetPage:i}){const r=k(),c=x.useCallback(n=>{i(),e.setState({lastName:n.target.value})},[e,i]),h=x.useCallback(n=>{i(),e.setState({firstName:n.target.value})},[e,i]);return s.jsxs(s.Fragment,{children:[s.jsxs(S,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[s.jsx(N,{sx:{flexShrink:0,width:{xs:1,md:200}},children:s.jsx(C,{fullWidth:!0,label:"Adı",value:e.state.firstName,onChange:h})}),s.jsx(N,{sx:{flexShrink:0,width:{xs:1,md:200}},children:s.jsx(C,{fullWidth:!0,label:"Soyadı",value:e.state.lastName,onChange:c})}),s.jsxs(S,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:[s.jsx(C,{fullWidth:!0,value:e.state.name,onChange:h,placeholder:"Ara...",InputProps:{startAdornment:s.jsx(A,{position:"start",children:s.jsx(u,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),s.jsx(F,{onClick:r.onOpen,children:s.jsx(u,{icon:"eva:more-vertical-fill"})})]})]}),s.jsx(_,{open:r.open,anchorEl:r.anchorEl,onClose:r.onClose,slotProps:{arrow:{placement:"right-top"}},children:s.jsxs(oe,{children:[s.jsxs(w,{onClick:()=>{r.onClose()},children:[s.jsx(u,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),s.jsxs(w,{onClick:()=>{r.onClose()},children:[s.jsx(u,{icon:"solar:import-bold"}),"Import"]}),s.jsxs(w,{onClick:()=>{r.onClose()},children:[s.jsx(u,{icon:"solar:export-bold"}),"Export"]})]})})]})}function xe({filters:e,onResetPage:t,totalResults:i,sx:r}){const c=x.useCallback(()=>{t(),e.setState({firstName:""})},[e,t]),h=x.useCallback(()=>{t(),e.setState({lastName:""})},[e,t]),n=x.useCallback(()=>{t(),e.setState({status:"all"})},[e,t]),l=x.useCallback(()=>{t(),e.onResetState()},[e,t]);return s.jsxs(G,{totalResults:i,onReset:l,sx:r,children:[s.jsx(g,{label:"Servis Tamamlanma Durumu:",isShow:e.state.status!=="all",children:s.jsx(f,{...b,label:e.state.status,onDelete:n,sx:{textTransform:"capitalize"}})}),s.jsx(g,{label:"Adı:",isShow:!!e.state.firstName,children:s.jsx(f,{...b,label:e.state.firstName,onDelete:c})}),s.jsx(g,{label:"Soyadı:",isShow:!!e.state.lastName,children:s.jsx(f,{...b,label:e.state.lastName,onDelete:h})})]})}const me=[{value:"all",label:"Liste"}],ue=[{id:"id",label:"ID"},{id:"firstName",label:"Ad"},{id:"lastName",label:"Soyad"},{id:"email",label:"Email"},{id:"userName",label:"Kullanıcı Adı"}];function pe(){const e=M();L();const t=T(),[i,r]=x.useState(!0),[c,h]=x.useState([]),n=I({firstName:"",lastName:"",status:"all"}),l=sessionStorage.getItem(B);x.useEffect(()=>{(async()=>{try{const d=await O.get(P.usersListUrl,{headers:{Authorization:`Bearer ${l}`}});h(d.data)}catch(d){console.error("error",d)}r(!1)})()},[l]);const o=je({inputData:c,comparator:$(e.order,e.orderBy),filters:n.state});V(o,e.page,e.rowsPerPage);const p=!!n.state.firstName||n.state.lastName,R=!o.length&&p||!o.length,y=(a,d)=>{" "};return s.jsxs(s.Fragment,{children:[s.jsxs(E,{children:[s.jsx(te,{heading:"Kullanıcı Listesi",links:[{name:"Dashboard",href:j.dashboard.root},{name:"Kullanıcı",href:j.dashboard.user.root},{name:"Kullanıcı Listesi"}],action:s.jsx(ce,{component:D,href:j.dashboard.user.new,variant:"contained",startIcon:s.jsx(u,{icon:"mingcute:add-line"}),children:"Yeni Kullanıcı"}),sx:{mb:{xs:3,md:5}}}),s.jsxs(le,{sx:{width:"100%",overflowX:"auto"},children:[s.jsx(re,{value:n.state.status,onChange:y,sx:{px:2.5,boxShadow:a=>`inset 0 -2px 0 0 ${K(a.vars.palette.grey["500Channel"],.08)}`},children:me.map(a=>s.jsx(ie,{iconPosition:"end",value:a.value,label:a.label,icon:s.jsx(U,{variant:(a.value==="all"||a.value===n.state.status)&&"filled"||"soft",children:["active","pending","banned","rejected"].includes(a.value)?c.filter(d=>d.status===a.value).length:c.length})},a.value))}),s.jsx(he,{filters:n,onResetPage:e.onResetPage}),p&&s.jsx(xe,{filters:n,totalResults:o.length,onResetPage:e.onResetPage,sx:{p:2.5,pt:0}}),s.jsxs(v,{sx:{position:"relative"},children:[s.jsx(X,{dense:e.dense,numSelected:e.selected.length,rowCount:o.length,onSelectAllRows:a=>e.onSelectAllRows(a,o.map(d=>d.id))}),s.jsx(v,{sx:{position:"relative",height:"500px",display:"flex",justifyContent:"flex-start",width:"100%",overflowX:"auto"},children:s.jsx(z,{children:s.jsxs(Y,{size:e.dense?"small":"medium",sx:{minWidth:1500,width:"100%"},children:[s.jsx(q,{order:e.order,orderBy:e.orderBy,headLabel:ue,rowCount:o.length,numSelected:e.selected.length,onSort:e.onSort,onSelectAllRows:a=>e.onSelectAllRows(a,o.map(d=>d.id))}),s.jsxs(J,{children:[o.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage).map(a=>s.jsx(de,{row:a,selected:e.selected.includes(a.id),onSelectRow:()=>e.onSelectRow(a.id)},a.id)),s.jsx(Q,{height:e.dense?56:76,emptyRows:Z(e.page,e.rowsPerPage,o.length)}),s.jsx(ee,{notFound:R})]})]})})})]}),s.jsx(se,{page:e.page,dense:e.dense,count:o.length,rowsPerPage:e.rowsPerPage,onPageChange:e.onChangePage,onChangeDense:e.onChangeDense,onRowsPerPageChange:e.onChangeRowsPerPage})]})]}),s.jsx(ae,{open:t.value,onClose:t.onFalse})]})}function je({inputData:e,comparator:t,filters:i}){const{firstName:r,lastName:c,status:h}=i;if(!Array.isArray(e))return console.error("inputData is not an array:",e),[];const n=e.map((l,o)=>[l,o]);return n.sort((l,o)=>{const p=t(l[0],o[0]);return p!==0?p:l[1]-o[1]}),e=n.map(l=>l[0]),r&&(e=e.filter(l=>l.firstName.toLowerCase().includes(r.toLowerCase()))),c&&(e=e.filter(l=>l.lastName.toLowerCase().includes(c.toLowerCase()))),h!=="all"&&(e=e.filter(l=>l.status===h)),e}const ge={title:`Kullanıcı Listesi | Dashboard - ${P.appName}`};function Te(){return s.jsxs(s.Fragment,{children:[s.jsx(H,{children:s.jsx("title",{children:ge.title})}),s.jsx(pe,{})]})}export{Te as default};