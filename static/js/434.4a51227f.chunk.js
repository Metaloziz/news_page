"use strict";(self.webpackChunkitec=self.webpackChunkitec||[]).push([[434],{6434:function(e,r,t){t.r(r),t.d(r,{default:function(){return C}});var s=t(1413),n=t(4925),a=t(5290),i=t(9434),u=t(1721),l=t(7544),c=t(5917),d=t(7316),o=t(5656),m=t(8770),f=t(8138),h=t(4917),_=t(8214),x=t(5861),j=t(8690),g=t(1095),p=t(6419),R=t(7551),w=t(46),v=t(8002),N=(0,j.hg)("current_news/updateNewsTC",function(){var e=(0,x.Z)((0,_.Z)().mark((function e(r,t){var n,a,i,u,l;return(0,_.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.dispatch,a=t.getState,i=a(),u=i.currentNews.currentNews,e.prev=2,n((0,R.rh)(!0)),e.next=6,g.VM.updateNews(r,u.id);case 6:l=e.sent,l.status===p.GL.UPDATE_NEWS_SUCCESS&&n(w.nx.fulfilled((0,s.Z)((0,s.Z)({},u),r.body),"",u.id)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),(0,v.u$)(n,e.t0);case 14:return e.prev=14,n((0,R.rh)(!1)),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})));return function(r,t){return e.apply(this,arguments)}}()),b=t(2144),Z=t(184),F=["file"],C=function(){var e=(0,h.T)(),r=(0,i.v9)(m.C),t=(0,i.v9)(f.q),_=(0,a.cI)({mode:"onChange"}),x=_.register,j=_.handleSubmit,g=_.formState.errors;return(0,Z.jsxs)("div",{className:c.Z.container,children:[(0,Z.jsx)(u.UZ,{nameButton:"\u043e\u0431\u0440\u0430\u0442\u043d\u043e \u043a \u043d\u043e\u0432\u043e\u0441\u0442\u0438",path:l.y$.CURRENT_NEWS}),(0,Z.jsx)("span",{children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u043e\u0441\u0442\u044c:"}),(0,Z.jsxs)("form",{onSubmit:j((function(r){r.section=Number(r.section);var t=r.file,s=(0,n.Z)(r,F);e(N({body:s,file:t}))})),children:[(0,Z.jsxs)("div",{className:c.Z.header,children:[(0,Z.jsxs)("div",{children:[(0,Z.jsx)("label",{children:"date "}),(0,Z.jsx)("input",(0,s.Z)((0,s.Z)({},x("date")),{},{placeholder:"date",value:(0,b.v)()})),g.date&&(0,Z.jsx)("span",{children:"This field is required"})]}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)("label",{htmlFor:"section",children:"section "}),(0,Z.jsx)("select",(0,s.Z)((0,s.Z)({id:"section",defaultValue:t.section},x("section")),{},{children:(0,Z.jsx)(o.P,{data:r})}))]})]}),(0,Z.jsxs)("div",{className:c.Z.name,children:[(0,Z.jsx)("label",{children:"name "}),(0,Z.jsx)("input",(0,s.Z)((0,s.Z)({},x("name")),{},{placeholder:"name",required:!0,defaultValue:t.name})),g.name&&(0,Z.jsx)("span",{children:"This field is required"})]}),(0,Z.jsx)(d.w,{defaultValues:t,useFormRegisterReturn:x("subtitle_1"),useFormRegisterReturn1:x("full_text_1"),useFormRegisterReturn2:x("image_1"),errors:g}),t.subtitle_2&&(0,Z.jsx)(d.w,{defaultValues:t,useFormRegisterReturn:x("subtitle_2"),useFormRegisterReturn1:x("full_text_2"),useFormRegisterReturn2:x("image_2"),errors:g}),t.subtitle_3&&(0,Z.jsx)(d.w,{defaultValues:t,useFormRegisterReturn:x("subtitle_3"),useFormRegisterReturn1:x("full_text_3"),useFormRegisterReturn2:x("image_3"),errors:g}),(0,Z.jsx)(u.zx,{name:"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",type:"submit"})]})]})}},7316:function(e,r,t){t.d(r,{w:function(){return c}});var s=t(1413),n="NewsBodyForm_container__GBOCd",a="NewsBodyForm_subtitle__ELcMI",i="NewsBodyForm_text__zoDUb",u="NewsBodyForm_image__DDuAu",l=t(184),c=function(e){var r=function(r){var t=e.defaultValues;return e.defaultValues?t["".concat(r)]:""};return(0,l.jsxs)("div",{className:n,children:[(0,l.jsxs)("div",{className:a,children:[(0,l.jsx)("label",{children:"\u041f\u043e\u0434\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"}),(0,l.jsx)("input",(0,s.Z)((0,s.Z)({},e.useFormRegisterReturn),{},{placeholder:"\u041f\u043e\u0434\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",required:!0,defaultValue:r(e.useFormRegisterReturn.name)}))]}),(0,l.jsxs)("div",{className:i,children:[(0,l.jsx)("label",{children:"\u0422\u0435\u043a\u0441\u0442"}),(0,l.jsx)("textarea",(0,s.Z)((0,s.Z)({},e.useFormRegisterReturn1),{},{placeholder:"\u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0442\u0435\u043a\u0441\u0442 \u0431\u043b\u043e\u043a\u0430",required:!0,rows:5,defaultValue:r(e.useFormRegisterReturn1.name)}))]}),(0,l.jsxs)("div",{className:u,children:[(0,l.jsx)("label",{children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 \u0438\u0437 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430"}),(0,l.jsx)("input",(0,s.Z)((0,s.Z)({},e.useFormRegisterReturn2),{},{placeholder:"https://www.ixbt.com/img.jpg",defaultValue:r(e.useFormRegisterReturn2.name)}))]}),e.useFormRegisterReturn3&&(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{children:"file "}),(0,l.jsx)("input",(0,s.Z)((0,s.Z)({},e.useFormRegisterReturn3),{},{type:"file",multiple:!0}))]})]})}},5656:function(e,r,t){t.d(r,{P:function(){return n}});var s=t(184),n=function(e){var r=e.data;return(0,s.jsx)(s.Fragment,{children:r.map((function(e){var r=e.name,t=e.id;return(0,s.jsxs)("option",{value:t,children:[t," - ",r]},t)}))})}},8138:function(e,r,t){t.d(r,{q:function(){return s}});var s=function(e){if(!e.currentNews.currentNews.name){var r=localStorage.getItem("currentNews");if(r)return JSON.parse(r)}return e.currentNews.currentNews}},5917:function(e,r){r.Z={container:"CreateNewsPage_container__EpqUF",header:"CreateNewsPage_header__sMQwT",date:"CreateNewsPage_date__1Dr7y",sections:"CreateNewsPage_sections__8njs9",name:"CreateNewsPage_name__7MO3J",blockTitle:"CreateNewsPage_blockTitle__gIQdJ"}}}]);
//# sourceMappingURL=434.4a51227f.chunk.js.map