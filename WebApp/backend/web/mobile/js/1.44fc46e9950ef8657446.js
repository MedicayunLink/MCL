webpackJsonp([1,6],{79:function(e,t,o){t=e.exports=o(9)(),t.push([e.id,".form-group[data-v-d64a1e42]{padding:8px 0;border-bottom:1px solid #eee}.form-group>label[data-v-d64a1e42]{line-height:32px;width:170px;color:#777}","",{version:3,sources:["/./mobile/template/temp1.vue"],names:[],mappings:"AACA,6BACE,cAAe,AACf,4BAA8B,CAC/B,AACD,mCACE,iBAAkB,AAClB,YAAa,AACb,UAAY,CACb",file:"temp1.vue",sourcesContent:["\n.form-group[data-v-d64a1e42] {\n  padding: 8px 0;\n  border-bottom: 1px solid #eee;\n}\n.form-group>label[data-v-d64a1e42] {\n  line-height: 32px;\n  width: 170px;\n  color: #777;\n}\n\n\n"],sourceRoot:"webpack://"}])},110:function(e,t,o){var a=o(79);"string"==typeof a&&(a=[[e.id,a,""]]);o(10)(a,{});a.locals&&(e.exports=a.locals)},120:function(e,t,o){o(110);var a=o(1)(o(219),o(159),"data-v-d64a1e42",null);e.exports=a.exports},159:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"main"},[o("div",{staticClass:"form-group",staticStyle:{display:"flex"}},[o("label",{attrs:{for:"adress"}},[e._v("现居住地 ")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],attrs:{type:"text",id:"address",placeholder:"省/市"},domProps:{value:e._s(e.address)},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group",staticStyle:{display:"flex"}},[o("label",{attrs:{for:"phone"}},[e._v("联系电话 ")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"number",id:"phone",placeholder:"手机号码"},domProps:{value:e._s(e.phone)},on:{input:function(t){t.target.composing||(e.phone=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})]),e._v(" "),o("div",{staticClass:"form-group",staticStyle:{display:"flex"}},[o("label",{attrs:{for:"phone2"}},[e._v("备用电话 ")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.phone2,expression:"phone2"}],attrs:{type:"text",id:"phone",placeholder:"固话或手机号"},domProps:{value:e._s(e.phone2)},on:{input:function(t){t.target.composing||(e.phone2=t.target.value)}}})])])},staticRenderFns:[]}},219:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(7),s=a(n);t.default={name:"temp1",props:{mdid:String,templateid:String,recordid:String,source:{type:Object,default:function(){return{}}}},data:function(){return{address:"",phone:"",phone2:""}},created:function(){var e=this;"{}"!==(0,s.default)(this.source)&&(this.address=this.source.address,this.phone=this.source.phone,this.phone2=this.source.phone2);for(var t in this.$data)this.$watch(t,function(t,o){e.$emit("putsever",{sourceData:e.$data,showData:e.changeData()})})},methods:{changeData:function(){var e={"现居住地":this.address,"联系电话":this.phone,"备用电话":this.phone2};return e}}}}});