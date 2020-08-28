(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{435:function(e,t,n){"use strict";n.r(t);n(13),n(7),n(5),n(4),n(9),n(52);var r=n(12),o=n(2),l=n(363),c=n.n(l);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={layout:"admin",data:function(){var e={last_name:"",name:"",patronymic:"",phone_number:"",email:"",password:"",role:""};return{table:"users",items:[],headers:[{text:"Имя",value:"name"},{text:"Фамилия",value:"last_name"},{text:"Отчество",value:"patronymic"},{text:"Email",value:"email"},{text:"Телефон",value:"phone_number"},{text:"Должность",value:"role"},{text:"",value:"controls"}],query:{role:{$ne:"student"}},roles:[{text:"Директор",value:"director"},{text:"Бухгалтер",value:"bookkeeper"}],editModal:!1,edititingItem:m({},e),defaultItem:e,showAlert:!1,alertText:"",alertColor:""}},mounted:function(){this.fetch()},computed:{isEdit:function(){return!!this.edititingItem._id},modalTitle:function(){return this.isEdit?"Редактирование":"Создание"}},methods:{alert:function(e,text){this.showAlert=!0,this.alertText=text,this.alertColor=e},edit:function(e){this.edititingItem=m({},e),this.edititingItem.password="",this.editModal=!0},create:function(){this.edititingItem=m({},this.defaultItem),this.editModal=!0},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,data,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get("/api/".concat(e.table,"/list?").concat(c.a.stringify(e.query)));case 3:n=t.sent,data=n.data,e.items=data,e.alert("success","Данные успешно загружены"),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0),r=t.t0.response?t.t0.response.data.error:t.t0.message,e.alert("error","Произошла ошибка при загрузке данных. "+r);case 14:case"end":return t.stop()}}),t,null,[[0,9]])})))()},remove:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,1!==t.items.length){n.next=3;break}throw new Error("Невозможно удалить единственную запись пользователя");case 3:return n.next=5,t.$axios.delete("/api/".concat(t.table,"/one?id=").concat(e._id));case 5:return t.alert("success","Запись удалена"),n.next=8,t.fetch();case 8:t.editModal=!1,n.next=16;break;case 11:n.prev=11,n.t0=n.catch(0),console.error(n.t0),r=n.t0.response?n.t0.response.data.error:n.t0.message,t.alert("error","Произошла ошибка при удалении данных. "+r);case 16:case"end":return n.stop()}}),n,null,[[0,11]])})))()},save:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,""===e.edititingItem.password&&delete e.edititingItem.password,!e.isEdit){t.next=7;break}return t.next=5,e.$axios.put("/api/".concat(e.table,"/one/?").concat(c.a.stringify({id:e.edititingItem._id})),e.edititingItem);case 5:t.next=9;break;case 7:return t.next=9,e.$axios.post("/api/".concat(e.table,"/one"),e.edititingItem);case 9:return e.alert("success","Запись сохранена"),t.next=12,e.fetch();case 12:e.editModal=!1,t.next=20;break;case 15:t.prev=15,t.t0=t.catch(0),console.error(t.t0),n=t.t0.response?t.t0.response.data.error:t.t0.message,e.alert("error","Произошла ошибка при сохранении данных. "+n);case 20:case"end":return t.stop()}}),t,null,[[0,15]])})))()}}},f=n(33),x=n(47),h=n.n(x),_=n(159),k=n(334),w=n(331),I=n(432),y=n(430),O=n(371),j=n(139),V=n(411),$=n(372),C=n(431),E=n(329),T=n(362),component=Object(f.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("\n        Администрация\n        "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:""},on:{click:e.create}},[e._v("\n          Создать\n        ")])],1),e._v(" "),n("v-card-text",[n("v-data-table",{attrs:{headers:e.headers,items:e.items,"multi-sort":""},scopedSlots:e._u([{key:"item.role",fn:function(t){var n=t.item;return[e._v("\n          "+e._s(e.roles.find((function(e){return e.value===n.role})).text)+"\n        ")]}},{key:"item.controls",fn:function(t){var r=t.item;return[n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.edit(r)}}},[n("v-icon",[e._v("mdi-pencil")])],1),e._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.remove(r)}}},[n("v-icon",[e._v("mdi-delete")])],1)]}}])})],1)],1),e._v(" "),n("v-dialog",{attrs:{"max-width":"505"},model:{value:e.editModal,callback:function(t){e.editModal=t},expression:"editModal"}},[n("v-card",{staticClass:"edit-modal"},[n("v-card-title",{staticClass:"headline"},[e._v("\n          "+e._s(e.modalTitle)+"\n          "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.save}},[e._v("\n            Сохранить\n          ")])],1),e._v(" "),n("v-card-text",[n("v-text-field",{attrs:{label:"Фамилия"},model:{value:e.edititingItem.last_name,callback:function(t){e.$set(e.edititingItem,"last_name",t)},expression:"edititingItem.last_name"}}),e._v(" "),n("v-text-field",{attrs:{label:"Имя"},model:{value:e.edititingItem.name,callback:function(t){e.$set(e.edititingItem,"name",t)},expression:"edititingItem.name"}}),e._v(" "),n("v-text-field",{attrs:{label:"Отчество"},model:{value:e.edititingItem.patronymic,callback:function(t){e.$set(e.edititingItem,"patronymic",t)},expression:"edititingItem.patronymic"}}),e._v(" "),n("v-text-field",{attrs:{label:"Номер телефона"},model:{value:e.edititingItem.phone_number,callback:function(t){e.$set(e.edititingItem,"phone_number",t)},expression:"edititingItem.phone_number"}}),e._v(" "),n("v-text-field",{attrs:{label:"Email"},model:{value:e.edititingItem.email,callback:function(t){e.$set(e.edititingItem,"email",t)},expression:"edititingItem.email"}}),e._v(" "),n("v-text-field",{attrs:{type:"password",label:"Пароль"},model:{value:e.edititingItem.password,callback:function(t){e.$set(e.edititingItem,"password",t)},expression:"edititingItem.password"}}),e._v(" "),n("v-select",{attrs:{items:e.roles,label:"Должность"},model:{value:e.edititingItem.role,callback:function(t){e.$set(e.edititingItem,"role",t)},expression:"edititingItem.role"}})],1)],1)],1),e._v(" "),n("v-snackbar",{attrs:{color:e.alertColor},scopedSlots:e._u([{key:"action",fn:function(t){var r=t.attrs;return[n("v-btn",e._b({attrs:{dark:"",text:""},on:{click:function(t){e.showAlert=!1}}},"v-btn",r,!1),[e._v("\n          Закрыть\n        ")])]}}]),model:{value:e.showAlert,callback:function(t){e.showAlert=t},expression:"showAlert"}},[e._v("\n      "+e._s(e.alertText)+"\n\n      ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VBtn:_.a,VCard:k.a,VCardText:w.b,VCardTitle:w.c,VDataTable:I.a,VDialog:y.a,VFlex:O.a,VIcon:j.a,VLayout:V.a,VSelect:$.a,VSnackbar:C.a,VSpacer:E.a,VTextField:T.a})}}]);