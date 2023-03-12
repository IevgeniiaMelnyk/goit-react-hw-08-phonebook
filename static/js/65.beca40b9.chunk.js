"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[65,240],{8065:function(n,e,t){t.r(e),t.d(e,{default:function(){return mn}});var r,a,o,i,d,l,u,c,s=t(9434),p=function(n){var e=n.contacts.contacts,t=n.filter;if(!t)return e;var r=t.toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(r)}))},f=function(n){return n.contacts.loading},h=function(n){return n.contacts.error},x=t(6342),m=function(n){return n.filter},b=t(5653),g=t(168),v=t(6444),Z=v.default.input(r||(r=(0,g.Z)(["\n  display: block;\n  font-size: 16px;\n  font-weight: 500;\n  color: #051e1e;\n  margin-top: 20px;\n  margin-bottom: 40px;\n  padding: 6px 20px;\n  border-radius: 30px;\n  border: 0;\n  height: 50px;\n  width: 100%;\n  outline: none;\n  background-color: #ffe0bd;\n"]))),j=v.default.label(a||(a=(0,g.Z)(["\n  display: block;\n  font-size: 18px;\n  font-weight: 400;\n  color: #fff;\n"]))),w=t(3329),y=function(n){var e=n.text,t=(0,s.v9)(m),r=(0,s.I0)();return(0,w.jsxs)(j,{children:[e,(0,w.jsx)(Z,{type:"text",name:"filter",placeholder:"Name",value:t,onChange:function(n){r((0,b.T)(n.currentTarget.value))},onBlur:function(){return r((0,b.T)(""))}})]})},k=t(1413),C=t(158),z={name:"",number:""},S=t(3355),N=t(5179),A={name:{type:"text",name:"name",label:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Name",required:!0},number:{type:"tel",name:"number",label:"Number",pattern:"+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Number",required:!0}},P=t(2124),F=(v.default.input(o||(o=(0,g.Z)(["\n  display: block;\n  font-size: 16px;\n  font-weight: 500;\n  color: #051e1e;\n  margin-top: 20px;\n  margin-bottom: 40px;\n  padding: 6px 20px;\n  border-radius: 30px;\n  border: 0;\n  height: 50px;\n  width: 100%;\n  outline: none;\n  background-color: #ffe0bd;\n"]))),v.default.label(i||(i=(0,g.Z)(["\n  display: block;\n  font-size: 18px;\n  font-weight: 400;\n  color: #fff;\n"]))),v.default.form(d||(d=(0,g.Z)(["\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 360px;\n  padding-right: 30px;\n  padding-left: 30px;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  border-radius: 30px;\n  background-color: #153e49;\n"])))),L=function(){var n=(0,s.I0)(),e=(0,C.Z)({initialState:z,onSubmit:function(e){n((0,S.v6)(e))}}),t=e.state,r=e.handleChange,a=e.handleSubmit,o=t.name,i=t.number;return(0,w.jsxs)(F,{onSubmit:a,children:[(0,w.jsx)(N.Z,(0,k.Z)({value:o,handleChange:r},A.name)),(0,w.jsx)(N.Z,(0,k.Z)({value:i,handleChange:r},A.number)),(0,w.jsx)(P.Z,{type:"submit",children:"Add contact"})]})},q=t(9439),B=t(2791),E=t(5080),T=function(n){var e=n.children,t=n.type,r=n.onClick;return(0,w.jsx)(E.zf,{onClick:r,type:t,children:e})},D=T;T.defaultProps={type:"button"};var I,M,_,J,$,G,K,Q=v.default.p(l||(l=(0,g.Z)(["\n  font-size: 18px;\n  margin-top: 2px;\n  margin-bottom: 5px;\n  max-width: 180px;\n"]))),H=v.default.p(u||(u=(0,g.Z)(["\n  font-size: 18px;\n  max-width: 180px;\n"]))),O=v.default.div(c||(c=(0,g.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),R=t(828),U=t(8820),V=t(9983),W=function(n){var e=n.id,t=n.name,r=n.number,a=n.onDeleteContact,o=n.showContact;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{children:[(0,w.jsx)(Q,{children:t}),(0,w.jsx)(H,{children:r})]}),(0,w.jsxs)(O,{children:[(0,w.jsx)(D,{type:"button",onClick:function(){return o(e,t,r)},children:(0,w.jsx)(V.Pd.Provider,{value:{color:"#fff",size:"20px"},children:(0,w.jsx)(U.QML,{})})}),(0,w.jsx)(D,{type:"button",onClick:function(){return a(e)},children:(0,w.jsx)(V.Pd.Provider,{value:{color:"#fff",size:"20px"},children:(0,w.jsx)(R.u2K,{})})})]})]})},X=t(4164),Y=v.default.div(I||(I=(0,g.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 90000;\n\n  overflow-y: scroll;\n\n  background-color: rgba(0, 0, 0, 0.3);\n\n  transition: opacity 250ms var(--time-function),\n    visibility 250ms var(--time-function);\n"]))),nn=v.default.div(M||(M=(0,g.Z)(["\n  border-radius: 30px;\n  background-color: rgb(21, 62, 73);\n  color: #fff;\n  max-height: 40%;\n  width: 360px;\n  padding: 40px 30px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  @media screen and (min-width: 768px) {\n    max-height: 400px;\n    max-width: 600px;\n  }\n  @media screen and (min-width: 1200px) {\n    max-height: 600px;\n    max-width: 800px;\n  } ;\n"]))),en=v.default.div(_||(_=(0,g.Z)(["\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: rgba(100, 100, 100, 0.3);\n"]))),tn=t(71),rn=document.querySelector("#modal-root"),an=function(n){var e=n.close,t=n.children,r=(0,B.useCallback)((function(n){var t=n.target,r=n.currentTarget,a=n.code;t!==r&&"Escape"!==a||e()}),[e]);return(0,B.useEffect)((function(){return document.addEventListener("keydown",r),function(){return document.removeEventListener("keydown",r)}}),[r]),(0,X.createPortal)((0,w.jsxs)(Y,{onClick:r,children:[(0,w.jsx)(en,{onClick:e,children:(0,w.jsx)(V.Pd.Provider,{value:{style:{width:"30px",height:"30px",fill:"white"}},children:(0,w.jsx)(tn.bjh,{})})}),(0,w.jsx)(nn,{children:t})]}),rn)},on=t(4942),dn={name:{type:"text",name:"name",label:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Name",required:!0},number:{type:"tel",name:"number",label:"Number",pattern:"+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Number",required:!0}},ln=function(n){var e=n.contact,t=n.close,r=(0,B.useState)((0,k.Z)({},e)),a=(0,q.Z)(r,2),o=a[0],i=a[1],d=(0,s.I0)(),l=function(n){var e=n.currentTarget,t=e.name,r=e.value;i((function(n){return(0,k.Z)((0,k.Z)({},n),{},(0,on.Z)({},t,r))}))},u=o.name,c=o.number;return(0,w.jsxs)("form",{onSubmit:function(n){n.preventDefault(),d((0,S.LG)(o)),i({}),t()},children:[(0,w.jsx)(N.Z,(0,k.Z)({value:u,handleChange:l},dn.name)),(0,w.jsx)(N.Z,(0,k.Z)({value:c,handleChange:l},dn.number)),(0,w.jsx)(P.Z,{type:"submit",children:"Save contact"})]})},un=v.default.li(J||(J=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 300px;\n  margin-bottom: 10px;\n\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n"]))),cn=v.default.ul($||($=(0,g.Z)(["\n  color: #fff;\n"]))),sn=function(){var n=(0,B.useState)(null),e=(0,q.Z)(n,2),t=e[0],r=e[1],a=(0,s.I0)(),o=(0,s.v9)(p);(0,B.useEffect)((function(){a((0,S.yF)())}),[a]);var i=function(n){a((0,S.in)(n))},d=function(n,e,t){r({id:n,name:e,number:t})},l=function(){r(null)},u=o.map((function(n){var e=n.id,r=n.name,a=n.number;return(0,w.jsxs)(un,{children:[(0,w.jsx)(W,{name:r,number:a,onDeleteContact:i,showContact:d,id:e}),t&&(0,w.jsx)(an,{close:l,children:(0,w.jsx)(ln,{contact:t,close:l})})]},e)}));return(0,w.jsxs)(w.Fragment,{children:[o.length>0&&(0,w.jsx)(cn,{children:u}),";"]})},pn=t(4240),fn=v.default.div(G||(G=(0,g.Z)(["\n  margin-right: auto;\n  margin-left: auto;\n  padding: 40px 30px;\n  max-width: 360px;\n  min-height: 386px;\n  background-color: #b2101e;\n  border-radius: 30px;\n"]))),hn=v.default.div(K||(K=(0,g.Z)(["\n  padding-top: 20px;\n  padding-bottom: 60px;\n  background-color: #051e1e;\n  width: 100vw;\n"]))),xn=function(){var n=(0,s.v9)(f),e=(0,s.v9)(h);return(0,w.jsxs)(hn,{children:[n&&!e&&(0,w.jsx)(pn.default,{}),(0,w.jsx)(x.Z,{title:"Phone Book",children:(0,w.jsx)(L,{})}),(0,w.jsx)(x.Z,{title:"Contacts",children:(0,w.jsxs)(fn,{children:[(0,w.jsx)(y,{text:"Find contacts by name"}),(0,w.jsx)(sn,{})]})})]})},mn=function(){return(0,w.jsx)(xn,{})}},5080:function(n,e,t){t.d(e,{ss:function(){return l},y0:function(){return c},zf:function(){return u}});var r,a,o,i=t(168),d=t(6444),l=d.default.button(r||(r=(0,i.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 150px;\n  height: 50px;\n  padding: 0;\n  font-size: 16px;\n  background-color: #1d2127;\n  border: 0;\n  border-radius: 30px;\n  color: white;\n  cursor: pointer;\n  transition: hover 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: #b2101e;\n  }\n"]))),u=d.default.button(a||(a=(0,i.Z)(["\n  cursor: pointer;\n  height: 50px;\n  width: 50px;\n  border-radius: 30px;\n  border: 0;\n  background-color: #1d2127;\n\n  &:hover {\n    background-color: #153e49;\n  }\n"]))),c=(0,d.default)(l)(o||(o=(0,i.Z)(["\n  margin: 0;\n  color: rgb(255, 224, 189);\n\n  &:hover {\n    background-color: #153e49;\n  }\n"])))},2124:function(n,e,t){var r=t(5080),a=t(3329);e.Z=function(n){var e=n.children,t=n.type,o=n.onSubmit;return(0,a.jsx)(r.ss,{onSubmit:o,type:t,children:e})}},6342:function(n,e,t){t.d(e,{Z:function(){return c}});var r,a,o=t(168),i=t(6444),d=i.default.section(r||(r=(0,o.Z)(["\n  width: 100vw;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 20px;\n  margin: auto;\n  border: none;\n"]))),l=i.default.h2(a||(a=(0,o.Z)(["\n  font-size: 30px;\n  font-weight: 400;\n  margin-bottom: 40px;\n  padding-top: 20px;\n  text-align: center;\n  color: #ffe0bd;\n"]))),u=t(3329);var c=function(n){var e=n.title,t=n.children;return(0,u.jsxs)(d,{children:[e&&(0,u.jsx)(l,{children:e}),t]})}},4240:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var r,a=t(8402),o=t(168),i=t(6444).default.div(r||(r=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vw;\n"]))),d=t(3329),l=function(){return(0,d.jsx)(i,{children:(0,d.jsx)(a.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}},5179:function(n,e,t){t.d(e,{Z:function(){return x}});var r,a,o=t(1413),i=t(5987),d=t(2791),l=t(5984),u=t(168),c=t(6444),s=c.default.input(r||(r=(0,u.Z)(["\n  display: block;\n  font-size: 16px;\n  font-weight: 500;\n  color: #051e1e;\n  margin-top: 20px;\n  margin-bottom: 40px;\n  padding: 6px 20px;\n  border-radius: 30px;\n  border: 0;\n  height: 50px;\n  width: 100%;\n  outline: none;\n  background-color: #ffe0bd;\n"]))),p=c.default.label(a||(a=(0,u.Z)(["\n  display: block;\n  font-size: 18px;\n  font-weight: 400;\n  color: #fff;\n"]))),f=t(3329),h=["label","handleChange"],x=function(n){var e=n.label,t=n.handleChange,r=(0,i.Z)(n,h),a=(0,d.useMemo)((function(){return(0,l.x0)()}),[]);return(0,f.jsxs)("div",{children:[(0,f.jsx)(p,{htmlFor:a,children:e}),(0,f.jsx)(s,(0,o.Z)({id:a,onChange:t},r))]})}},158:function(n,e,t){var r=t(4942),a=t(1413),o=t(9439),i=t(2791);e.Z=function(n){var e=n.initialState,t=n.onSubmit,d=(0,i.useState)((0,a.Z)({},e)),l=(0,o.Z)(d,2),u=l[0],c=l[1];return{state:u,setState:c,handleChange:function(n){var e=n.target;c((function(n){var t=e.name,o=e.value,i=e.checked,d="checkbox"===e.type?i:o;return(0,a.Z)((0,a.Z)({},n),{},(0,r.Z)({},t,d))}))},handleSubmit:function(n){n.preventDefault(),t((0,a.Z)({},u)),c((0,a.Z)({},e))}}}}}]);
//# sourceMappingURL=65.beca40b9.chunk.js.map