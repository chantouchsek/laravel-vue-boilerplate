webpackJsonp([7],{dyVF:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("Xxa5"),o=r.n(a),s=r("2gGM"),n=r.n(s),i=r("NYxO");var m={scrollToTop:!1,metaInfo:function(){return{title:this.$t("settings")}},data:function(){return{form:new n.a({name:"",email:""})}},computed:Object(i.mapGetters)({user:"auth/user"}),created:function(){var t=this;this.form.keys().forEach(function(e){t.form[e]=t.user[e]})},methods:{update:function(){var t,e=(t=o.a.mark(function t(){var e,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.form.patch("/api/settings/profile");case 2:e=t.sent,r=e.data,this.$store.dispatch("auth/updateUser",{user:r});case 5:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function a(o,s){try{var n=e[o](s),i=n.value}catch(t){return void r(t)}if(!n.done)return Promise.resolve(i).then(function(t){a("next",t)},function(t){a("throw",t)});t(i)}("next")})});return function(){return e.apply(this,arguments)}}()}},l={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("card",{attrs:{title:t.$t("your_info")}},[r("form",{on:{submit:function(e){return e.preventDefault(),t.update(e)},keydown:function(e){t.form.onKeydown(e)}}},[r("alert-success",{attrs:{form:t.form,message:t.$t("info_updated")}}),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("name")))]),t._v(" "),r("div",{staticClass:"col-md-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("email")))]),t._v(" "),r("div",{staticClass:"col-md-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"col-md-9 ml-md-auto"},[r("v-button",{attrs:{loading:t.form.busy,type:"success"}},[t._v(t._s(t.$t("update")))])],1)])],1)])},staticRenderFns:[]},u=r("VU/8")(m,l,!1,null,null,null);e.default=u.exports}});
//# sourceMappingURL=7.b68e1d031ab9cd09b8b4.js.map