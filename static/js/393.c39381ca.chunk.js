"use strict";(self.webpackChunknutrition_ai_consultant=self.webpackChunknutrition_ai_consultant||[]).push([[393],{57393:function(e,n,t){t.r(n),t.d(n,{default:function(){return pe}});var r=t(72791),a=t(61889),o=t(64554),l=t(40854),i=t(1413),s=t(74165),c=t(15861),u=t(29439),d=t(2919),m=t(27247),h=t(41286),x=t(3579),Z=t(36151),p=t(39504),g=t(13400),j=t(40986),_=t(35527),f=t(36314),v=t(89891),y=t(20890),b=t(763),C=t(81405),P=t(57689),w=t(75985),N=t(61865),D=t(75099),I=t(52260),O=t(70810),T=t(85823),k=t(62328),R=t(5712),q=t(94454),S=t(97123),A=t(39157),E=t(68096),F=t(85523),L=t(79012),M=t(47071),V=t(17133),U=t(30829),B=t(23786),z=t(88970),W=t(54535),H=t(48550),G=t(92506),Y=t(81724),J=t(45823),K=t(95414),Q=(t(2665),t(84701)),X=t(98137),$=t(73974),ee=t(80184),ne=[{label:(0,K.Z)("common_weekly")},{label:(0,K.Z)("common_biweekly")},{label:(0,K.Z)("common_monthly")}],te=function(e){var n=e.open,t=e.onClose,l=e.dialogData,u=(0,C.I0)(),d=(0,C.v9)((function(e){return e.common.currencyList})),m=(0,C.v9)((function(e){return e.servicePlan.serviceTypes})),h=(0,b.get)(m,"serviceTypeOnline",!1),x=(0,b.get)(m,"serviceTypeOffline",!1),p=(0,b.get)(m,"serviceTypePhone",!1),g=h||x||p;(0,r.useEffect)((function(){u((0,J.SM)())}),[u]);var j=Y.Ry().shape({planName:Y.Z_().min(5,(0,K.Z)("consultant_error_service_plan_name_too_short")).max(50,(0,K.Z)("consultant_error_service_plan_name_too_long")).required((0,K.Z)("consultant_error_service_plan_name_required")),numberOfConsultant:Y.Rx().required((0,K.Z)("consultant_error_number_of_consultation_required")),sessionName:Y.Z_().when("numberOfConsultant",{is:function(e){return 1!==e},then:Y.Z_().required((0,K.Z)("common_error_consultant_session_required")),otherwise:Y.Z_()}),timeUnit:Y.Rx().required((0,K.Z)("common_error_time_duration_required")),dietPlan:Y.O7().required((0,K.Z)("common_error_diet_plan_required")),currencyId:Y.Ry().required((0,K.Z)("consultant_error_currency_type_required")),amount:Y.Rx().required((0,K.Z)("consultant_error_amount_required")),details:Y.Z_().required((0,K.Z)("consultant_error_description_required"))}),_=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(n){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.currencyId=(0,b.get)(n,"currencyId._id",""),console.log(n,"payload"),"update"===(0,b.get)(l,"formType")&&(n._id=(0,b.get)(l,"rowData._id")),e.next=5,u((0,N.kI)(n)).unwrap().then((function(e){e.status&&(u((0,N.t4)()),t(),w.Am.success(e.message))})).catch((function(e){console.log(" handleAddServicePlan err",e)}));case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,ee.jsx)(ee.Fragment,{children:(0,ee.jsx)($.ZP,{anchor:"right",variant:"temporary",open:n,onClose:t,children:(0,ee.jsxs)("div",{className:"service-plan-add-container",children:[(0,ee.jsxs)("div",{className:"service-plan-add-header",children:[(0,ee.jsx)("h2",{children:(0,K.Z)("consultant_add_service_plan")}),(0,ee.jsx)(Z.Z,{onClick:t,children:(0,ee.jsx)(k.Z,{})})]}),(0,ee.jsx)(G.J9,{initialValues:{planName:(0,b.get)(l,"rowData.planName",""),numberOfConsultant:(0,b.get)(l,"rowData.numberOfConsultant",""),sessionName:(0,b.get)(l,"rowData.sessionName",""),onlineConsultation:(0,b.get)(l,"rowData.onlineConsultation",!1),offlineConsultation:(0,b.get)(l,"rowData.offlineConsultation",!1),phoneConsultation:(0,b.get)(l,"rowData.phoneConsultation",!1),currencyId:(0,b.get)(l,"rowData.currencyId",""),amount:(0,b.get)(l,"rowData.amount",""),timeUnit:(0,b.get)(l,"rowData.timeUnit",30),dietPlan:(0,b.get)(l,"rowData.dietPlan",!0),details:(0,b.get)(l,"rowData.details","")},validationSchema:j,onSubmit:function(e){console.log("Values===",e);var n=e.onlineConsultation||e.phoneConsultation||e.offlineConsultation;g?n?_(e):w.Am.error("Required select on service type",{autoClose:!1}):w.Am.error("Please Setup Your Profile First Then Create Service Plan",{autoClose:!1})},children:function(e){return(0,ee.jsxs)("form",{onSubmit:e.handleSubmit,className:"d-flex flex-column overflow-auto",children:[(0,ee.jsx)(A.Z,{dividers:!0,children:(0,ee.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,ee.jsx)(a.ZP,{item:!0,xs:12,container:!0,children:(0,ee.jsx)(a.ZP,{item:!0,xs:12,sm:9.9,md:7.9,children:(0,ee.jsx)(H.Z,{label:(0,K.Z)("consultant_service_plan_name"),variant:"outlined",name:"planName",value:e.values.planName,onChange:e.handleChange,onBlur:e.handleBlur,error:!(!e.errors.planName||!e.touched.planName),helperText:e.errors.planName&&e.touched.planName?e.errors.planName:null})})}),(0,ee.jsxs)(a.ZP,{item:!0,xs:12,container:!0,spacing:2,children:[(0,ee.jsx)(a.ZP,{item:!0,md:3,sm:4,xs:12,children:(0,ee.jsx)(H.Z,{label:(0,K.Z)("consultant_number_of_consultation"),variant:"outlined",name:"numberOfConsultant",value:e.values.numberOfConsultant,onChange:e.handleChange,onBlur:e.handleBlur,error:!(!e.errors.numberOfConsultant||!e.touched.numberOfConsultant),helperText:e.errors.numberOfConsultant&&e.touched.numberOfConsultant?e.errors.numberOfConsultant:null})}),console.log(e.values.numberOfConsultant,"233"),(0,ee.jsx)(a.ZP,{item:!0,md:4,sm:6,xs:12,children:(0,ee.jsxs)(E.Z,{fullWidth:!0,children:[(0,ee.jsx)(U.Z,{id:"demo-simple-select-label",children:(0,K.Z)("consultant_consultant_sessions")}),(0,ee.jsx)(W.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"sessionName",value:e.values.sessionName,label:(0,K.Z)("consultant_consultant_sessions"),onChange:e.handleChange,disabled:1===parseInt(e.values.numberOfConsultant,10),children:(0,b.map)(ne,(function(e,n){return(0,ee.jsx)(B.Z,{value:e.label,children:e.label},n)}))}),e.errors.sessionName&&e.touched.sessionName?(0,ee.jsx)(M.Z,{error:!0,children:e.errors.sessionName}):null]})}),(0,ee.jsx)(a.ZP,{item:!0,xs:12,md:5,children:(0,ee.jsxs)(E.Z,{component:"fieldset",variant:"standard",children:[(0,ee.jsx)(V.Z,{children:(0,K.Z)("consultant_consultation_type")}),(0,ee.jsxs)(L.Z,{row:!0,children:[(0,ee.jsx)(F.Z,{value:"online",control:(0,ee.jsx)(q.Z,{name:"onlineConsultation",checked:e.values.onlineConsultation,onChange:e.handleChange}),disabled:!h,label:(0,K.Z)("common_online")}),(0,ee.jsx)(F.Z,{control:(0,ee.jsx)(q.Z,{name:"offlineConsultation",checked:e.values.offlineConsultation,onChange:e.handleChange}),disabled:!x,label:(0,K.Z)("common_offline")}),(0,ee.jsx)(F.Z,{control:(0,ee.jsx)(q.Z,{name:"phoneConsultation",checked:e.values.phoneConsultation,onChange:e.handleChange}),disabled:!p,label:(0,K.Z)("common_phone")})]}),e.errors.onlineConsultation&&e.touched.onlineConsultation&&(0,ee.jsx)(M.Z,{error:!0,children:"Type is Required"})]})})]}),(0,ee.jsx)(a.ZP,{item:!0,sm:4,md:3,xs:12,children:(0,ee.jsx)(R.Z,{getOptionLabel:function(e){return(0,b.isEmpty)(e)?"":e.currency},options:d,name:"currencyId",value:e.values.currencyId,isOptionEqualToValue:function(e,n){if(""===n||e._id===n._id)return!0},onChange:function(n,t){e.setFieldValue("currencyId",t)},disablePortal:!0,autoHighlight:!0,disableClearable:!0,noOptionsText:(0,K.Z)("common_no_data"),popupIcon:(0,ee.jsx)(k.Z,{}),renderOption:function(e,n){return(0,ee.jsxs)(o.Z,(0,i.Z)((0,i.Z)({component:"li",sx:{"& > img":{mr:1,flexShrink:0}}},e),{},{children:[(0,ee.jsx)(o.Z,{component:"span",mr:1,children:n.currency}),n.currencySymbol]}),n._id)},renderInput:function(n){return(0,ee.jsx)(H.Z,(0,i.Z)((0,i.Z)({},n),{},{label:(0,K.Z)("consultant_currency_type"),name:"currencyId",error:!(!e.errors.currencyId||!e.touched.currencyId),helperText:e.errors.currencyId&&e.touched.currencyId?e.errors.currencyId:null}))}})}),(0,ee.jsx)(a.ZP,{item:!0,sm:6,md:5,xs:12,children:(0,ee.jsx)(H.Z,{label:(0,K.Z)("consultant_amount"),variant:"outlined",name:"amount",value:e.values.amount,onChange:e.handleChange,onBlur:e.handleBlur,inputProps:{type:"number"},error:!(!e.errors.amount||!e.touched.amount),helperText:e.errors.amount&&e.touched.amount?e.errors.amount:null})}),(0,ee.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,ee.jsxs)(E.Z,{fullWidth:!0,children:[(0,ee.jsx)(V.Z,{htmlFor:"weight",className:"mb-1",children:(0,K.Z)("consultant_time_duration")}),(0,ee.jsxs)(z.Z,{name:"timeUnit",value:e.values.timeUnit,onChange:function(n,t){e.setFieldValue("timeUnit",t)},row:!0,sx:{marginLeft:"10px",marginTop:"10px"},children:[(0,ee.jsx)(F.Z,{value:30,control:(0,ee.jsx)(X.Z,{}),label:"30 "+(0,K.Z)("common_time_length_minute")}),(0,ee.jsx)(F.Z,{value:45,control:(0,ee.jsx)(X.Z,{}),label:"45 "+(0,K.Z)("common_time_length_minute")}),(0,ee.jsx)(F.Z,{value:60,control:(0,ee.jsx)(X.Z,{}),label:"1 "+(0,K.Z)("common_time_length_hour")})]})]})}),(0,ee.jsxs)(a.ZP,{item:!0,xs:12,sm:6,children:[(0,ee.jsx)(E.Z,{fullWidth:!0,children:(0,ee.jsx)(V.Z,{htmlFor:"weight",className:"mb-1",children:(0,K.Z)("common_diet_plan")})}),(0,ee.jsx)(E.Z,{fullWidth:!0,children:(0,ee.jsxs)(z.Z,{name:"dietPlan",value:e.values.dietPlan,onChange:function(n,t){e.setFieldValue("dietPlan",t)},row:!0,sx:{marginLeft:"10px",marginTop:"10px"},children:[(0,ee.jsx)(F.Z,{value:!0,control:(0,ee.jsx)(X.Z,{}),label:(0,K.Z)("common_type_yes")}),(0,ee.jsx)(F.Z,{value:!1,control:(0,ee.jsx)(X.Z,{}),label:(0,K.Z)("common_type_no")})]})})]}),(0,ee.jsx)(a.ZP,{item:!0,xs:12,children:(0,ee.jsx)(Q.Z,{name:"details",value:e.values.details,setFieldValue:e.setFieldValue,error:!(!e.errors.details||!e.touched.details),helperText:e.errors.details&&e.touched.details?e.errors.details:null})})]})}),(0,ee.jsx)(S.Z,{children:(0,ee.jsx)(Z.Z,{variant:"contained",type:"submit",children:(0,K.Z)("common_add")})})]})}})]})})})},re=t(81918),ae=t(72426),oe=t.n(ae),le=function(e){var n,t,r,l=e.open,i=e.onClose,s=e.dialogData,c=(0,b.get)(s,"rowData.details",""),u=null===c||void 0===c?void 0:c.replace(/<[^>]+>/g,"");return(0,ee.jsx)(ee.Fragment,{children:(0,ee.jsxs)($.ZP,{anchor:"right",open:l,onClose:i,className:"plan-details-design",children:[(0,ee.jsx)("div",{children:(0,ee.jsx)(y.Z,{variant:"h6",children:"Plan Details"})}),(0,ee.jsx)("div",{className:"plan_details drawer-content",children:(0,ee.jsx)(a.ZP,{container:!0,spacing:2,children:(0,ee.jsx)(a.ZP,{item:!0,xs:12,sm:12,children:(0,ee.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,ee.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ee.jsx)(y.Z,{variant:"subtitle1",color:"text.primary",children:"Plan Name"})}),(0,ee.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ee.jsx)(y.Z,{variant:"body1",children:(0,b.get)(s,"rowData.planName","")})}),(0,ee.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ee.jsx)(y.Z,{variant:"subtitle1",color:"text.primary",children:"consultation sessions"})}),(0,ee.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ee.jsx)(o.Z,{children:(0,ee.jsx)(re.Z,{label:(0,b.get)(s,"rowData.sessionName",""),sx:{backgroundColor:"secondary.lighter",color:"secondary.dark"}})})}),(0,ee.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ee.jsx)(y.Z,{variant:"subtitle1",color:"text.primary",children:"Duration"})}),(0,ee.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ee.jsxs)(y.Z,{variant:"body1",children:[(0,b.get)(s,"rowData.timeUnit","")," Min"]})}),(0,ee.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ee.jsx)(y.Z,{variant:"subtitle1",color:"text.primary",children:"Post Consultation plan (included)"})}),(0,ee.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ee.jsx)(re.Z,{label:(0,b.get)(s,"rowData.dietPlan",!1)?"Yes":"No",sx:{border:"1px solid",backgroundColor:"transparent",borderColor:"secondary.main",color:"secondary.main"}})}),(0,ee.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ee.jsx)(y.Z,{variant:"subtitle1",color:"text.primary",children:"Service Charges"})}),(0,ee.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ee.jsxs)(y.Z,{variant:"body1",children:[(0,b.get)(s,"rowData.amount","")," ",(0,b.get)(s,"rowData.currencyId.currencySymbol","")]})}),(0,ee.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ee.jsx)(y.Z,{variant:"subtitle1",color:"text.primary",children:"Number of Consultant"})}),(0,ee.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ee.jsx)(y.Z,{variant:"body1",children:(0,b.get)(s,"rowData.numberOfConsultant","")})}),(0,ee.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ee.jsx)(y.Z,{variant:"subtitle1",color:"text.primary",children:"Details"})}),(0,ee.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ee.jsx)(y.Z,{variant:"body1",children:u&&u})}),(0,ee.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ee.jsx)(y.Z,{variant:"subtitle1",color:"text.primary",children:"Consultation Type"})}),(0,ee.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ee.jsxs)(y.Z,{variant:"body1",children:[(null===s||void 0===s||null===(n=s.rowData)||void 0===n?void 0:n.onlineConsultation)&&(0,ee.jsx)("span",{children:"Online "}),(null===s||void 0===s||null===(t=s.rowData)||void 0===t?void 0:t.offlineConsultation)&&(0,ee.jsx)("span",{children:"Ofline "}),(null===s||void 0===s||null===(r=s.rowData)||void 0===r?void 0:r.phoneConsultation)&&(0,ee.jsx)("span",{children:"Phone"})]})}),(0,ee.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ee.jsx)(y.Z,{variant:"subtitle1",color:"text.primary",children:"Time Unit"})}),(0,ee.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ee.jsx)(y.Z,{variant:"body1",children:(0,b.get)(s,"rowData.timeUnit","")})}),(0,ee.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ee.jsx)(y.Z,{variant:"subtitle1",color:"text.primary",children:"Created Date"})}),(0,ee.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ee.jsx)(y.Z,{variant:"subtitle1",color:"text.primary",children:(0,b.isEmpty)((0,b.get)(s,"rowData.createDate",""))?"Date Not Found":oe()(s.rowData.createDate).format("LL")})}),(0,ee.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ee.jsx)(y.Z,{variant:"subtitle1",color:"text.primary",children:"Last Date"})}),(0,ee.jsx)(a.ZP,{item:!0,xs:6,md:6,children:(0,ee.jsx)(y.Z,{variant:"subtitle1",color:"text.primary",children:(0,b.isEmpty)((0,b.get)(s,"rowData.updateDate",""))?"Not Updated":oe()(s.rowData.updateDate).format("LL")})})]})})})})]})})};function ie(){var e=(0,r.useState)(!1),n=(0,u.Z)(e,2),t=n[0],a=n[1],l=(0,r.useState)(!1),k=(0,u.Z)(l,2),R=k[0],q=k[1],S=(0,r.useState)(""),A=(0,u.Z)(S,2),E=A[0],F=A[1],L=(0,r.useState)([]),M=(0,u.Z)(L,2),V=M[0],U=M[1],B=(0,C.I0)(),z=(0,C.v9)((function(e){return e.servicePlan.details})),W=(0,C.v9)((function(e){return e.servicePlan.serviceTypes})),H=(0,C.v9)((function(e){return e.servicePlan.loading})),G=(0,P.s0)(),Y=(0,r.useCallback)((function(){a(!0)}),[]),J=(0,r.useCallback)((function(){a(!1)}),[]),Q=(0,r.useCallback)((function(){q(!0)}),[]),X=(0,r.useCallback)((function(){q(!1)}),[]),$=(0,b.get)(W,"serviceTypeOnline",!1),ne=(0,b.get)(W,"serviceTypeOffline",!1),re=(0,b.get)(W,"serviceTypePhone",!1),ae=(0,r.useCallback)((function(e){B((0,N.KU)(e)).unwrap().then((function(e){e.status&&(B((0,N.t4)()),w.Am.success(e.message))})).catch((function(e){console.log(" handleAddServicePlan err",e)}))}),[B]),oe=(0,r.useCallback)(function(){var e=(0,c.Z)((0,s.Z)().mark((function e(n,t){var r,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(t),r={_id:t,status:n.target.checked},e.next=4,B((0,N.mW)(r)).unwrap().then((function(e){e.status&&(B((0,N.t4)()),w.Am.success(e.message))})).catch((function(e){console.log("Service plan update error=======>",e)}));case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),[B]);(0,r.useEffect)((function(){B((0,N.t4)()),B((0,N.cK)())}),[B]);var ie=(0,r.useMemo)((function(){return[{field:"planName",headerName:(0,K.Z)("consultant_service_plan_name"),width:160},{field:"numberOfConsultant",headerName:(0,K.Z)("consultant_number_of_consultation"),width:130,hide:!0},{field:"sessionName",headerName:(0,K.Z)("consultant_consultant_sessions"),width:130,renderCell:function(e){return(0,ee.jsx)(o.Z,{children:(0,ee.jsx)(D.Z,{color:"secondary",children:(0,b.get)(e,"row.sessionName","")})})}},{field:"currency",headerName:(0,K.Z)("consultant_currency_type"),width:130,hide:!0,renderCell:function(e){return(0,ee.jsxs)(y.Z,{variant:"body2",sx:{display:"flex",alignItems:"center"},children:[(0,b.get)(e,"row.currencyId.currency",""),(0,ee.jsx)(y.Z,{variant:"body1",component:"span",ml:.5,children:(0,b.get)(e,"row.currencyId.currencySymbol","")})]})}},{field:"onlineConsultation,offlineConsultation,phoneConsultation",headerName:(0,K.Z)("consultant_consultation_type"),width:130,hide:!0,renderCell:function(e){return(0,ee.jsxs)(f.Z,{direction:"column",spacing:1,children:[(0,ee.jsxs)(f.Z,{direction:"row",spacing:1,children:[(0,b.get)(e,"row.onlineConsultation",!1)&&(0,ee.jsx)(D.Z,{color:"secondary",children:"Online"}),(0,b.get)(e,"row.offlineConsultation",!1)&&(0,ee.jsx)(D.Z,{color:"secondary",children:"Offline"})]}),(0,b.get)(e,"row.phoneConsultation",!1)&&(0,ee.jsx)(D.Z,{color:"secondary",children:"Phone"})]})}},{field:"timeUnit",headerName:(0,K.Z)("consultant_time_duration"),width:130,renderCell:function(e){return(0,ee.jsxs)(y.Z,{variant:"subtitle2",children:[(0,b.get)(e,"row.timeUnit","")," Min"]})}},{field:"dietPlan",headerName:(0,K.Z)("common_diet_plan"),width:130,renderCell:function(e){return(0,ee.jsx)(D.Z,{color:"secondary",variant:"outlined",children:(0,b.get)(e,"row.dietPlan",!1)?"Yes":"No"})}},{field:"amount,currencyId",headerName:(0,K.Z)("common_service_charges"),width:130,renderCell:function(e){return(0,ee.jsxs)(y.Z,{variant:"body2",sx:{display:"flex",alignItems:"center"},children:[(0,b.get)(e,"row.amount",""),(0,ee.jsx)(y.Z,{variant:"body1",component:"span",ml:.5,children:(0,b.get)(e,"row.currencyId.currencySymbol","")})]})}},{field:"view",headerName:(0,K.Z)("common_view"),headerAlign:"center",width:130,renderCell:function(e){return(0,ee.jsx)(g.Z,{onClick:function(){U((0,i.Z)((0,i.Z)({},V),{},{rowData:e.row,formType:"show"})),Q()},color:"primary",size:"large",children:(0,ee.jsx)(x.Z,{})})}},{field:"Actions",headerName:(0,K.Z)("common_actions"),headerAlign:"center",width:140,renderCell:function(e){return(0,ee.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,ee.jsx)(g.Z,{sx:{color:"success.dark"},onClick:function(){U((0,i.Z)((0,i.Z)({},V),{},{rowData:e.row,formType:"update"})),Y()},children:(0,ee.jsx)(h.Z,{})}),(0,ee.jsx)(v.Z,{checked:(0,b.get)(e,"row.status",!0),onChange:function(n){return oe(n,e.row._id)},disabled:E===e.row._id&&H,inputProps:{"aria-label":"plan-status",role:"switch"}}),(0,ee.jsx)(g.Z,{color:"error",onClick:function(){return ae(e.row._id)},children:(0,ee.jsx)(m.Z,{})})]})}}]}),[V,ae,Y,oe,Q,H,E]);return(0,ee.jsxs)(ee.Fragment,{children:[(0,ee.jsxs)(_.Z,{variant:"outlined",className:"h-100 service-plan-design",children:[(0,ee.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",marginTop:"20px",marginRight:"20px",marginBottom:"0px"},children:$||ne||re?(0,ee.jsx)(Z.Z,{variant:"contained",onClick:function(){U((0,i.Z)((0,i.Z)({},V),{},{rowData:[],formType:"create"})),Y()},children:(0,K.Z)("consultant_add_service_plan")}):(0,ee.jsx)(Z.Z,{endIcon:(0,ee.jsx)(d.Z,{}),onClick:function(){G("/dashboard/appointment/service-type")},children:(0,K.Z)("consultant_setup")})}),(0,ee.jsx)(p.Z,{children:(0,ee.jsx)(I.Z,{rows:(0,b.isEmpty)(z)?[]:z,columns:ie,getRowId:function(e){return e._id},loading:H,components:{Toolbar:function(){return(0,ee.jsx)(O.Z,{align:"right",divider:!0,children:$||ne||re?null:(0,ee.jsx)(Z.Z,{endIcon:(0,ee.jsx)(d.Z,{}),onClick:function(){G("/dashboard/appointment/service-type")},children:(0,K.Z)("consultant_setup")})})},NoRowsOverlay:T.Z,LoadingOverlay:j.Z},className:"min-vh-100"})})]}),(0,ee.jsx)(te,{open:t,onClose:J,dialogData:V}),(0,ee.jsx)(le,{open:R,onClose:X,dialogData:V})]})}var se=t(93704),ce=t(63466),ue=t(61419),de=t(32416),me=function(e){var n=e.open,t=e.onClose,r=e.type,o=(0,C.I0)(),l=(0,C.v9)((function(e){return e.servicePlan.refundPolicy})),s=(0,(0,de.Z)().GetLanguageList)(),c=Y.Ry().shape({content:Y.Z_().required((0,K.Z)("consultant_error_terms_and_policy_required")),language:Y.Ry().shape().required((0,K.Z)("consultant_error_languages_required")).nullable(),refundMethod:Y.Z_().required((0,K.Z)("common_error_required")),percentage:Y.Rx().when("refundMethod",{is:function(e){return"PRO_RATE_CANCEL_CHARGE"===e},then:Y.Rx().min(0,(0,K.Z)("consultant_error_minimum_value_0")).max(100,(0,K.Z)("consultant_error_maximum_value_100")).positive((0,K.Z)("consultant_error_enter_positive_number")).required((0,K.Z)("consultant_error_percentage_required")),otherwise:Y.Rx().notRequired()})});return console.log(l,"refundPolicy"),(0,ee.jsx)(ee.Fragment,{children:(0,ee.jsx)($.ZP,{anchor:"right",open:n,onClose:t,className:"terms-details-design",children:(0,ee.jsx)(G.J9,{initialValues:{content:(0,b.get)(l,"content",""),refundMethod:(0,b.get)(l,"refundMethod","PRO_RATE"),percentage:(0,b.get)(l,"percentage",0),language:(0,b.get)(l,"language","")},validationSchema:c,onSubmit:function(e){console.log("Values===",e),function(e){var n,a,s;console.log(null===e||void 0===e||null===(n=e.language)||void 0===n?void 0:n._id,"63");var c="edit"===r?(0,i.Z)((0,i.Z)({},e),{},{_id:l._id,language:null===e||void 0===e||null===(a=e.language)||void 0===a?void 0:a._id}):(0,i.Z)((0,i.Z)({},e),{},{language:null===e||void 0===e||null===(s=e.language)||void 0===s?void 0:s._id});o((0,N.dt)(c)).unwrap().then((function(e){(0,b.get)(e,"status",!1)?(w.Am.success(e.message),o((0,N.dl)()),t()):w.Am.error(e.message)})).catch((function(e){console.log(e)}))}(e)},children:function(e){return(0,ee.jsxs)("form",{onSubmit:e.handleSubmit,className:"d-flex flex-column overflow-auto",children:[(0,ee.jsx)(A.Z,{dividers:!0,children:(0,ee.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,ee.jsxs)(a.ZP,{item:!0,xs:12,children:[(0,ee.jsx)(y.Z,{variant:"h5",className:"mb-2",children:(0,K.Z)("consultant_terms_and_policy")}),(0,ee.jsx)(Q.Z,{name:"content",value:e.values.content,setFieldValue:e.setFieldValue,error:!(!e.errors.content||!e.touched.content),helperText:e.errors.content&&e.touched.content?e.errors.content:null})]}),(0,ee.jsx)(a.ZP,{item:!0,xs:12,children:(0,ee.jsxs)(E.Z,{fullWidth:!0,children:[(0,ee.jsx)(V.Z,{htmlFor:"language",className:"mb-2",children:(0,K.Z)("common_language")}),(0,ee.jsx)(R.Z,{getOptionLabel:function(e){var n;return null!==(n=e.title)&&void 0!==n?n:""},options:s,name:"language",value:"string"===typeof e.values.language?s.find((function(n){return n._id===e.values.language})):e.values.language,isOptionEqualToValue:function(e,n){if(""===n||e._id===n._id)return!0},onChange:function(n,t){e.setFieldValue("language",t)},onBlur:e.handleBlur,disablePortal:!0,autoHighlight:!0,disableClearable:!0,noOptionsText:(0,K.Z)("common_no_data"),popupIcon:(0,ee.jsx)(k.Z,{}),renderInput:function(n){return(0,ee.jsx)(H.Z,(0,i.Z)((0,i.Z)({},n),{},{placeholder:(0,K.Z)("consultant_select_language"),name:"language",error:!(!e.errors.language||!e.touched.language),helperText:e.errors.language&&e.touched.language?e.errors.language:null}))}})]})}),(0,ee.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,ee.jsxs)(E.Z,{fullWidth:!0,children:[(0,ee.jsx)(V.Z,{className:"mb-1",children:(0,K.Z)("consultant_refund_method")}),(0,ee.jsxs)(z.Z,{name:"refundMethod",value:e.values.refundMethod,onChange:function(n,t){e.setFieldValue("refundMethod",t),e.setFieldValue("percentage",0)},row:!0,children:[(0,ee.jsx)(F.Z,{value:"PRO_RATE",control:(0,ee.jsx)(ue.Z,{}),label:(0,K.Z)("consultant_only_pro_rate")}),(0,ee.jsx)(F.Z,{value:"PRO_RATE_CANCEL_CHARGE",control:(0,ee.jsx)(ue.Z,{}),label:(0,K.Z)("consultant_pro_rate_and_cancellation_charges")})]})]})}),"PRO_RATE_CANCEL_CHARGE"===e.values.refundMethod&&(0,ee.jsxs)(a.ZP,{item:!0,md:4,sm:6,xs:12,children:[(0,ee.jsx)(y.Z,{variant:"body1",className:"mb-2",children:(0,K.Z)("consultant_enter_percentage")}),(0,ee.jsx)(H.Z,{placeholder:"percentage",variant:"outlined",name:"percentage",value:e.values.percentage,onChange:e.handleChange,onBlur:e.handleBlur,inputProps:{type:"number"},InputProps:{endAdornment:(0,ee.jsx)(ce.Z,{position:"end",children:(0,ee.jsx)(se.Z,{})})},error:!(!e.errors.percentage||!e.touched.percentage),helperText:e.errors.percentage&&e.touched.percentage?e.errors.percentage:null})]})]})}),(0,ee.jsx)(S.Z,{children:(0,ee.jsx)(Z.Z,{variant:"contained",type:"submit",children:(0,K.Z)("common_btn_submit")})})]})}})})})},he=function(){var e=(0,r.useState)(!1),n=(0,u.Z)(e,2),t=n[0],a=n[1],o=(0,C.I0)(),l=(0,C.v9)((function(e){return e.servicePlan.refundPolicyLoading})),i=(0,C.v9)((function(e){return e.servicePlan.refundPolicy}));return(0,r.useEffect)((function(){o((0,N.dl)())}),[o]),(0,ee.jsx)(ee.Fragment,{children:(0,ee.jsx)(_.Z,{variant:"outlined",className:"py-2 px-3",children:l?(0,ee.jsx)(j.Z,{}):(0,ee.jsxs)(f.Z,{direction:{xs:"column",sm:"row"},spacing:1,alignItems:"center",justifyContent:"space-between",children:[(0,ee.jsx)(y.Z,{variant:"h6",children:(0,K.Z)("consultant_setup_terms_and_policy")}),(0,ee.jsx)(Z.Z,{variant:"outlined",onClick:function(){a(!0)},children:(0,b.isEmpty)(i)?(0,K.Z)("consultant_setup"):"Edit"}),(0,ee.jsx)(me,{open:t,onClose:function(){a(!1)},type:(0,b.isEmpty)(i)?"add":"edit"})]})})})},xe=function(){return(0,ee.jsx)(ee.Fragment,{children:(0,ee.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,ee.jsx)(a.ZP,{item:!0,xs:12,children:(0,ee.jsx)(he,{})}),(0,ee.jsx)(a.ZP,{item:!0,xs:12,children:(0,ee.jsx)(ie,{})})]})})},Ze=t(12665),pe=function(){return(0,ee.jsx)(ee.Fragment,{children:(0,ee.jsx)(Ze.Z,{title:"Service Plan | InspireMind",children:(0,ee.jsx)(o.Z,{component:"section",className:"w-100",children:(0,ee.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,ee.jsx)(a.ZP,{item:!0,xs:12,children:(0,ee.jsx)(l.Z,{title:"consultant_service_plan",variant:"outlined",elevation:0})}),(0,ee.jsx)(a.ZP,{item:!0,xs:12,children:(0,ee.jsx)(o.Z,{children:(0,ee.jsx)(xe,{})})})]})})})})}},2919:function(e,n,t){var r=t(64836);n.Z=void 0;var a=r(t(45649)),o=t(80184),l=(0,a.default)((0,o.jsx)("path",{d:"M16.01 11H4v2h12.01v3L20 12l-3.99-4z"}),"ArrowRightAlt");n.Z=l},93704:function(e,n,t){var r=t(64836);n.Z=void 0;var a=r(t(45649)),o=t(80184),l=(0,a.default)((0,o.jsx)("path",{d:"M7.5 11C9.43 11 11 9.43 11 7.5S9.43 4 7.5 4 4 5.57 4 7.5 5.57 11 7.5 11zm0-5C8.33 6 9 6.67 9 7.5S8.33 9 7.5 9 6 8.33 6 7.5 6.67 6 7.5 6zM4.0025 18.5832 18.59 3.9955l1.4142 1.4143L5.4167 19.9974zM16.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}),"Percent");n.Z=l},3579:function(e,n,t){var r=t(64836);n.Z=void 0;var a=r(t(45649)),o=t(80184),l=(0,a.default)((0,o.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"RemoveRedEye");n.Z=l}}]);
//# sourceMappingURL=393.c39381ca.chunk.js.map