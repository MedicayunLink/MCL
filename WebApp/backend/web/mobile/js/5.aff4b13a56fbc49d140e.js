webpackJsonp([5,6],{78:function(t,e,a){e=t.exports=a(9)(),e.push([t.id,".form-group[data-v-d5bd3338]{padding:8px 0;border-bottom:1px solid #eee}.form-group>.question[data-v-d5bd3338]{line-height:32px;width:140px;padding-right:30px}.question>label[data-v-d5bd3338]{color:#777}.form-group>div>label[data-v-d5bd3338],.form-group>div input[data-v-d5bd3338]{margin-bottom:8px}","",{version:3,sources:["/./mobile/template/temp6.vue"],names:[],mappings:"AACA,6BACE,cAAe,AACf,4BAA8B,CAC/B,AACD,uCACE,iBAAkB,AAClB,YAAa,AACb,kBAAoB,CACrB,AACD,iCACE,UAAY,CACb,AAID,8EACE,iBAAmB,CACpB",file:"temp6.vue",sourcesContent:["\n.form-group[data-v-d5bd3338] {\n  padding: 8px 0;\n  border-bottom: 1px solid #eee;\n}\n.form-group>.question[data-v-d5bd3338] {\n  line-height: 32px;\n  width: 140px;\n  padding-right: 30px;\n}\n.question>label[data-v-d5bd3338] {\n  color: #777;\n}\n.form-group>div>label[data-v-d5bd3338] {\n  margin-bottom: 8px;\n}\n.form-group>div input[data-v-d5bd3338] {\n  margin-bottom: 8px;\n}\n"],sourceRoot:"webpack://"}])},106:function(t,e,a){var s=a(78);"string"==typeof s&&(s=[[t.id,s,""]]);a(10)(s,{});s.locals&&(t.exports=s.locals)},123:function(t,e,a){a(106);var s=a(1)(a(220),a(152),"data-v-d5bd3338",null);t.exports=s.exports},152:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"temp4"},[a("div",{staticClass:"form-group flex-row",staticStyle:{border:"0"}},[t._m(0),t._v(" "),a("div",{staticClass:"flex-col"},[a("label",[t._v("血生化化验检查日期：")]),t._v(" "),a("datepicker",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],attrs:{width:195},domProps:{value:t.date},on:{input:function(e){t.date=e}}})],1)]),t._v(" "),a("div",{staticClass:"form-group flex-row"},[t._m(1),t._v(" "),a("div",{staticClass:"flex-col"},[a("label",[t._v("肌酐(Cr)")]),t._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.Cr,expression:"Cr"}],attrs:{type:"number"},domProps:{value:t._s(t.Cr)},on:{input:function(e){e.target.composing||(t.Cr=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),a("span",{staticClass:"unit"},[t._v("umol/L")])]),t._v(" "),a("label",[t._v("尿素氮(BUN)")]),t._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.BUN,expression:"BUN"}],attrs:{type:"number"},domProps:{value:t._s(t.BUN)},on:{input:function(e){e.target.composing||(t.BUN=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),a("span",{staticClass:"unit"},[t._v("umol/L")])]),t._v(" "),a("label",[t._v("尿酸(UA)")]),t._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.UA,expression:"UA"}],attrs:{type:"number"},domProps:{value:t._s(t.UA)},on:{input:function(e){e.target.composing||(t.UA=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),a("span",{staticClass:"unit"},[t._v("umol/L")])]),t._v(" "),a("label",[t._v("血糖(Glu)")]),t._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.Glu,expression:"Glu"}],attrs:{type:"number"},domProps:{value:t._s(t.Glu)},on:{input:function(e){e.target.composing||(t.Glu=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),a("span",{staticClass:"unit"},[t._v("mmol/L")])]),t._v(" "),a("label",[t._v("总胆固醇(TCHO)")]),t._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.Tcho,expression:"Tcho"}],attrs:{type:"number"},domProps:{value:t._s(t.Tcho)},on:{input:function(e){e.target.composing||(t.Tcho=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),a("span",{staticClass:"unit"},[t._v("mmol/L")])]),t._v(" "),a("label",[t._v("甘油三酯(TG)")]),t._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.Tg,expression:"Tg"}],attrs:{type:"number"},domProps:{value:t._s(t.Tg)},on:{input:function(e){e.target.composing||(t.Tg=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),a("span",{staticClass:"unit"},[t._v("mmol/L")])]),t._v(" "),a("label",[t._v("高密度脂蛋白(HDL-C)")]),t._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.HDL,expression:"HDL"}],attrs:{type:"number"},domProps:{value:t._s(t.HDL)},on:{input:function(e){e.target.composing||(t.HDL=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),a("span",{staticClass:"unit"},[t._v("mmol/L")])]),t._v(" "),a("label",[t._v("低密度脂蛋白(LDL-C)")]),t._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.LDL,expression:"LDL"}],attrs:{type:"number"},domProps:{value:t._s(t.LDL)},on:{input:function(e){e.target.composing||(t.LDL=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),a("span",{staticClass:"unit"},[t._v("mmol/L")])]),t._v(" "),a("label",[t._v("脂蛋白(a)(LP(a))")]),t._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.LP,expression:"LP"}],attrs:{type:"number"},domProps:{value:t._s(t.LP)},on:{input:function(e){e.target.composing||(t.LP=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),a("span",{staticClass:"unit"},[t._v("mg/L")])]),t._v(" "),a("label",[t._v("载脂蛋白A1(apoA1)")]),t._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.AI,expression:"AI"}],attrs:{type:"number"},domProps:{value:t._s(t.AI)},on:{input:function(e){e.target.composing||(t.AI=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),a("span",{staticClass:"unit"},[t._v("g/L")])]),t._v(" "),a("label",[t._v("载脂蛋白B(apoB)")]),t._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.apoB,expression:"apoB"}],attrs:{type:"number"},domProps:{value:t._s(t.apoB)},on:{input:function(e){e.target.composing||(t.apoB=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),a("span",{staticClass:"unit"},[t._v("g/L")])]),t._v(" "),a("label",[t._v("同型半胱氨酸")]),t._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.hc,expression:"hc"}],attrs:{type:"number"},domProps:{value:t._s(t.hc)},on:{input:function(e){e.target.composing||(t.hc=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),a("span",{staticClass:"unit"},[t._v("g/L")])]),t._v(" "),a("label",[t._v("高敏C反应蛋白(hs-CRP)")]),t._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.hs_crp,expression:"hs_crp"}],attrs:{type:"number"},domProps:{value:t._s(t.hs_crp)},on:{input:function(e){e.target.composing||(t.hs_crp=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),a("span",{staticClass:"unit"},[t._v("mg/L")])]),t._v(" "),a("label",[t._v("糖化血红蛋白(HbA1c)")]),t._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.hb,expression:"hb"}],attrs:{type:"number"},domProps:{value:t._s(t.hb)},on:{input:function(e){e.target.composing||(t.hb=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),a("span",{staticClass:"unit"},[t._v("%")])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"question"},[a("label")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"question"},[a("label",[t._v("近期的血生化化验检查结果")])])}]}},220:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(8),i=s(o),n=a(16),r=s(n);e.default={name:"temp2",components:{Datepicker:r.default},props:{mdid:String,templateid:String,recordid:String,source:{type:Object,default:function(){return{}}}},data:function(){return{date:"",Cr:"",BUN:"",UA:"",Glu:"",Tcho:"",Tg:"",HDL:"",LDL:"",LP:"",AI:"",apoB:"",hc:"",hs_crp:"",hb:""}},created:function(){var t=this;"{}"!==(0,i.default)(this.source)&&(this.date=this.source.date,this.Cr=this.source.Cr,this.BUN=this.source.BUN,this.UA=this.source.UA,this.Glu=this.source.Glu,this.Tcho=this.source.Tcho,this.Tg=this.source.Tg,this.HDL=this.source.HDL,this.LDL=this.source.LDL,this.LP=this.source.LP,this.AI=this.source.AI,this.apoB=this.source.apoB,this.hc=this.source.hc,this.hs_crp=this.source.hs_crp,this.hb=this.source.hb);for(var e in this.$data)this.$watch(e,function(e,a){t.$emit("putsever",{sourceData:t.$data,showData:t.changeData()})})},methods:{changeData:function(){var t={"检查日期":this.date,"肌酐(Cr)":""!==this.Cr?this.Cr+"umol/L":"","尿素氮(BUN)":""!==this.BUN?this.BUN+"umol/L":"","尿酸(UA)":""!==this.UA?this.UA+"umol/L":"","血糖(Glu)":""!==this.Glu?this.Glu+"umol/L":"","总胆固醇(TCHO)":""!==this.Tcho?this.Tcho+"mmol/L":"","甘油三酯(TG)":""!==this.Tg?this.Tg+"mmol/L":"","高密度脂蛋白(HDL-C)":""!==this.HDL?this.HDL+"mmol/L":"","低密度脂蛋白(LDL-C)":""!==this.LDL?this.LDL+"mmol/L":"","脂蛋白(a)(LP(a))":""!==this.LP?this.LP+"mg/L":"","载脂蛋白A1(apoA1)":""!==this.AI?this.AI+"g/L":"","载脂蛋白B(apoB)":""!==this.apoB?this.apoB+"g/L":"","同型半胱氨酸":""!==this.hc?this.hc+"g/L":"","高锰C反应蛋白(hs-CRP)":""!==this.hs_crp?this.hs_crp+"mg/L":"","糖化血红蛋白(HbA1c)":""!==this.hb?this.hb+"%":""};return t}}}}});
//# sourceMappingURL=5.aff4b13a56fbc49d140e.js.map