webpackJsonp([4,6],{76:function(e,t,a){t=e.exports=a(9)(),t.push([e.id,".temp4 h3[data-v-d5f5913c]{font-size:18px;font-weight:400}.form-group[data-v-d5f5913c]{padding:8px 0;border-bottom:1px solid #eee}.form-group>.question[data-v-d5f5913c]{padding-top:4px;line-height:22px;width:140px;padding-right:30px}.question>label[data-v-d5f5913c]{color:#777}.dec[data-v-d5f5913c]{font-size:12px;line-height:20px;color:#aaa}.child-option[data-v-d5f5913c]{margin-left:28px}","",{version:3,sources:["/./mobile/template/temp4.vue"],names:[],mappings:"AACA,2BACE,eAAgB,AAChB,eAAiB,CAClB,AAED,6BACE,cAAe,AACf,4BAA8B,CAC/B,AACD,uCACE,gBAAiB,AACjB,iBAAkB,AAClB,YAAa,AACb,kBAAoB,CACrB,AACD,iCACE,UAAY,CACb,AACD,sBACE,eAAgB,AAChB,iBAAkB,AAClB,UAAY,CACb,AACD,+BACE,gBAAkB,CACnB",file:"temp4.vue",sourcesContent:["\n.temp4 h3[data-v-d5f5913c] {\n  font-size: 18px;\n  font-weight: 400;\n}\n/*form design*/\n.form-group[data-v-d5f5913c] {\n  padding: 8px 0;\n  border-bottom: 1px solid #eee;\n}\n.form-group>.question[data-v-d5f5913c] {\n  padding-top: 4px;\n  line-height: 22px;\n  width: 140px;\n  padding-right: 30px;\n}\n.question>label[data-v-d5f5913c] {\n  color: #777;\n}\n.dec[data-v-d5f5913c] {\n  font-size: 12px;\n  line-height: 20px;\n  color: #aaa;\n}\n.child-option[data-v-d5f5913c] {\n  margin-left: 28px;\n}\n"],sourceRoot:"webpack://"}])},107:function(e,t,a){var s=a(76);"string"==typeof s&&(s=[[e.id,s,""]]);a(10)(s,{});s.locals&&(e.exports=s.locals)},123:function(e,t,a){a(107);var s=a(1)(a(222),a(156),"data-v-d5f5913c",null);e.exports=s.exports},156:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"temp4"},[a("h3",[e._v("生活")]),e._v(" "),a("div",{staticClass:"form-group flex-row"},[e._m(0),e._v(" "),a("div",{staticClass:"flex-col"},[a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.education,expression:"education"}],attrs:{type:"radio",id:"education1",value:"高中以下"},domProps:{checked:e._q(e.education,"高中以下")},on:{click:function(t){e.education="高中以下"}}}),e._v(" "),a("label",{attrs:{for:"education1"}},[e._v("高中以下")])]),e._v(" "),a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.education,expression:"education"}],attrs:{type:"radio",id:"education2",value:"高中"},domProps:{checked:e._q(e.education,"高中")},on:{click:function(t){e.education="高中"}}}),e._v(" "),a("label",{attrs:{for:"education2"}},[e._v("高中")])]),e._v(" "),a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.education,expression:"education"}],attrs:{type:"radio",id:"education3",value:"大学"},domProps:{checked:e._q(e.education,"大学")},on:{click:function(t){e.education="大学"}}}),e._v(" "),a("label",{attrs:{for:"education3"}},[e._v("大学")])]),e._v(" "),a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.education,expression:"education"}],attrs:{type:"radio",id:"education4",value:"研究生及以上"},domProps:{checked:e._q(e.education,"研究生及以上")},on:{click:function(t){e.education="研究生及以上"}}}),e._v(" "),a("label",{attrs:{for:"education4"}},[e._v("研究生及以上")])])])]),e._v(" "),a("div",{staticClass:"form-group flex-row"},[e._m(1),e._v(" "),a("div",{staticClass:"flex-col"},[a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.work,expression:"work"}],attrs:{type:"radio",value:"已经退休或停止工作",id:"work1"},domProps:{checked:e._q(e.work,"已经退休或停止工作")},on:{click:[function(t){e.work="已经退休或停止工作"},function(t){e.clearn("workHours","workSit6")}]}}),e._v(" "),a("label",{attrs:{for:"work1"}},[e._v("已经退休或停止工作")])]),e._v(" "),a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.work,expression:"work"}],attrs:{type:"radio",value:"还在工作",id:"work2"},domProps:{checked:e._q(e.work,"还在工作")},on:{click:function(t){e.work="还在工作"}}}),e._v(" "),a("label",{attrs:{for:"work2"}},[e._v("还在工作")])]),e._v(" "),"还在工作"===e.work?a("div",{staticClass:"flex-col child-option"},[a("div",{staticClass:"flex-col"},[a("label",{attrs:{for:"workHours"}},[e._v("每天工作时长")]),e._v(" "),a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.workHours,expression:"workHours"}],attrs:{type:"radio",id:"workHours1",value:"小于8小时"},domProps:{checked:e._q(e.workHours,"小于8小时")},on:{click:function(t){e.workHours="小于8小时"}}}),e._v(" "),a("label",{attrs:{for:"workHours1"}},[e._v("小于8小时")])]),e._v(" "),a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.workHours,expression:"workHours"}],attrs:{type:"radio",id:"workHours2",value:"大约8到10小时"},domProps:{checked:e._q(e.workHours,"大约8到10小时")},on:{click:function(t){e.workHours="大约8到10小时"}}}),e._v(" "),a("label",{attrs:{for:"workHours2"}},[e._v("大约8到10小时")])]),e._v(" "),a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.workHours,expression:"workHours"}],attrs:{type:"radio",id:"workHours3",value:"大于10小时"},domProps:{checked:e._q(e.workHours,"大于10小时")},on:{click:function(t){e.workHours="大于10小时"}}}),e._v(" "),a("label",{attrs:{for:"workHours3"}},[e._v("大于10小时")])])])]):e._e()])]),e._v(" "),"还在工作"===e.work?a("div",{staticClass:"form-group flex-row"},[e._m(2),e._v(" "),a("div",{staticClass:"flex-col"},[a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.workSit6,expression:"workSit6"}],staticClass:"btn",attrs:{type:"radio",id:"workSit61",value:"是"},domProps:{checked:e._q(e.workSit6,"是")},on:{click:function(t){e.workSit6="是"}}}),e._v(" "),a("label",{attrs:{for:"workSit61"}},[e._v("是")])]),e._v(" "),a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.workSit6,expression:"workSit6"}],staticClass:"btn",attrs:{type:"radio",id:"workSit62",value:"否"},domProps:{checked:e._q(e.workSit6,"否")},on:{click:function(t){e.workSit6="否"}}}),e._v(" "),a("label",{attrs:{for:"workSit62"}},[e._v("否")])])])]):e._e(),e._v(" "),a("div",{staticClass:"form-group flex-row"},[e._m(3),e._v(" "),a("div",{staticClass:"flex-col"},[a("div",{staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.eat,expression:"eat"}],attrs:{type:"checkbox",value:"饮酒",id:"drink"},domProps:{checked:Array.isArray(e.eat)?e._i(e.eat,"饮酒")>-1:e.eat},on:{click:[function(t){var a=e.eat,s=t.target,o=!!s.checked;if(Array.isArray(a)){var i="饮酒",r=e._i(a,i);o?r<0&&(e.eat=a.concat(i)):r>-1&&(e.eat=a.slice(0,r).concat(a.slice(r+1)))}else e.eat=o},e.eatConfig]}}),e._v(" "),a("label",{attrs:{for:"drink"}},[e._v("喝酒")])]),e._v(" "),a("div",{staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.eat,expression:"eat"}],attrs:{type:"checkbox",value:"肉食",id:"meat"},domProps:{checked:Array.isArray(e.eat)?e._i(e.eat,"肉食")>-1:e.eat},on:{click:[function(t){var a=e.eat,s=t.target,o=!!s.checked;if(Array.isArray(a)){var i="肉食",r=e._i(a,i);o?r<0&&(e.eat=a.concat(i)):r>-1&&(e.eat=a.slice(0,r).concat(a.slice(r+1)))}else e.eat=o},e.eatConfig]}}),e._v(" "),a("label",{attrs:{for:"meat"}},[e._v("肉食")])]),e._v(" "),a("div",{staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.eat,expression:"eat"}],attrs:{type:"checkbox",value:"快餐",id:"snack"},domProps:{checked:Array.isArray(e.eat)?e._i(e.eat,"快餐")>-1:e.eat},on:{click:[function(t){var a=e.eat,s=t.target,o=!!s.checked;if(Array.isArray(a)){var i="快餐",r=e._i(a,i);o?r<0&&(e.eat=a.concat(i)):r>-1&&(e.eat=a.slice(0,r).concat(a.slice(r+1)))}else e.eat=o},e.eatConfig]}}),e._v(" "),a("label",{attrs:{for:"snack"}},[e._v("快餐")])]),e._v(" "),a("div",{staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.eatNone,expression:"eatNone"}],attrs:{type:"checkbox",value:"没有上述习惯",id:"nobadEat"},domProps:{checked:Array.isArray(e.eatNone)?e._i(e.eatNone,"没有上述习惯")>-1:e.eatNone},on:{click:[function(t){var a=e.eatNone,s=t.target,o=!!s.checked;if(Array.isArray(a)){var i="没有上述习惯",r=e._i(a,i);o?r<0&&(e.eatNone=a.concat(i)):r>-1&&(e.eatNone=a.slice(0,r).concat(a.slice(r+1)))}else e.eatNone=o},e.eatSpecial]}}),e._v(" "),a("label",{attrs:{for:"nobadEat"}},[e._v("没有上述习惯")])])])]),e._v(" "),a("div",{staticClass:"form-group flex-row"},[e._m(4),e._v(" "),a("div",{staticClass:"flex-col"},[a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.sport,expression:"sport"}],attrs:{type:"radio",value:"每周达到或超过3次",id:"sport1"},domProps:{checked:e._q(e.sport,"每周达到或超过3次")},on:{click:function(t){e.sport="每周达到或超过3次"}}}),e._v(" "),a("label",{attrs:{for:"sport1"}},[e._v("每周达到或超过3次")])]),e._v(" "),a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.sport,expression:"sport"}],attrs:{type:"radio",value:"每周少于三次",id:"sport2"},domProps:{checked:e._q(e.sport,"每周少于三次")},on:{click:function(t){e.sport="每周少于三次"}}}),e._v(" "),a("label",{attrs:{for:"sport2"}},[e._v("每周少于三次")])]),e._v(" "),a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.sport,expression:"sport"}],attrs:{type:"radio",value:"没有运动习惯",id:"sport3"},domProps:{checked:e._q(e.sport,"没有运动习惯")},on:{click:function(t){e.sport="没有运动习惯"}}}),e._v(" "),a("label",{attrs:{for:"sport3"}},[e._v("没有运动习惯")])])])]),e._v(" "),a("div",{staticClass:"form-group flex-row"},[e._m(5),e._v(" "),a("div",{staticClass:"flex-col"},[a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.weight,expression:"weight"}],attrs:{type:"radio",value:"不需要减肥",id:"weight1"},domProps:{checked:e._q(e.weight,"不需要减肥")},on:{click:function(t){e.weight="不需要减肥"}}}),e._v(" "),a("label",{attrs:{for:"weight1"}},[e._v("不需要减肥")])]),e._v(" "),a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.weight,expression:"weight"}],attrs:{type:"radio",value:"正在减肥，达不到降低5%的目标",id:"weight2"},domProps:{checked:e._q(e.weight,"正在减肥，达不到降低5%的目标")},on:{click:function(t){e.weight="正在减肥，达不到降低5%的目标"}}}),e._v(" "),a("label",{attrs:{for:"weight2"}},[e._v("正在减肥，未达到目标")])]),e._v(" "),a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.weight,expression:"weight"}],attrs:{type:"radio",value:"正在减肥并且达到降低5%的目标",id:"weight3"},domProps:{checked:e._q(e.weight,"正在减肥并且达到降低5%的目标")},on:{click:function(t){e.weight="正在减肥并且达到降低5%的目标"}}}),e._v(" "),a("label",{attrs:{for:"weight3"}},[e._v("正在减肥并且达到目标")])]),e._v(" "),a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.weight,expression:"weight"}],attrs:{type:"radio",value:"多次减肥不成功",id:"weight4"},domProps:{checked:e._q(e.weight,"多次减肥不成功")},on:{click:function(t){e.weight="多次减肥不成功"}}}),e._v(" "),a("label",{attrs:{for:"weight4"}},[e._v("多次减肥不成功")])])])]),e._v(" "),a("h3",[e._v("认知和心理")]),e._v(" "),a("div",{staticClass:"form-group flex-row"},[e._m(6),e._v(" "),a("div",{staticClass:"flex-col"},[a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.diseaseUnderstand,expression:"diseaseUnderstand"}],attrs:{type:"radio",value:"不了解",id:"diseaseUnderstand1"},domProps:{checked:e._q(e.diseaseUnderstand,"不了解")},on:{click:function(t){e.diseaseUnderstand="不了解"}}}),e._v(" "),a("label",{attrs:{for:"diseaseUnderstand1"}},[e._v("不了解")])]),e._v(" "),a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.diseaseUnderstand,expression:"diseaseUnderstand"}],attrs:{type:"radio",value:"一般了解",id:"diseaseUnderstand2"},domProps:{checked:e._q(e.diseaseUnderstand,"一般了解")},on:{click:function(t){e.diseaseUnderstand="一般了解"}}}),e._v(" "),a("label",{attrs:{for:"diseaseUnderstand2"}},[e._v("一般了解")])]),e._v(" "),a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.diseaseUnderstand,expression:"diseaseUnderstand"}],attrs:{type:"radio",value:"较多了解",id:"diseaseUnderstand3"},domProps:{checked:e._q(e.diseaseUnderstand,"较多了解")},on:{click:function(t){e.diseaseUnderstand="较多了解"}}}),e._v(" "),a("label",{attrs:{for:"diseaseUnderstand3"}},[e._v("较多了解")])]),e._v(" "),a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.diseaseUnderstand,expression:"diseaseUnderstand"}],attrs:{type:"radio",value:"非常了解",id:"diseaseUnderstand4"},domProps:{checked:e._q(e.diseaseUnderstand,"非常了解")},on:{click:function(t){e.diseaseUnderstand="非常了解"}}}),e._v(" "),a("label",{attrs:{for:"diseaseUnderstand4"}},[e._v("非常了解")])])])]),e._v(" "),a("div",{staticClass:"form-group flex-row"},[e._m(7),e._v(" "),a("div",{staticClass:"flex-col"},[a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.diseasePsychology,expression:"diseasePsychology"}],attrs:{type:"radio",value:"没有焦虑和紧张",id:"diseasePsychology1"},domProps:{checked:e._q(e.diseasePsychology,"没有焦虑和紧张")},on:{click:function(t){e.diseasePsychology="没有焦虑和紧张"}}}),e._v(" "),a("label",{attrs:{for:"diseasePsychology1"}},[e._v("没有焦虑和紧张")])]),e._v(" "),a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.diseasePsychology,expression:"diseasePsychology"}],attrs:{type:"radio",value:"有一点紧张和焦虑",id:"diseasePsychology2"},domProps:{checked:e._q(e.diseasePsychology,"有一点紧张和焦虑")},on:{click:function(t){e.diseasePsychology="有一点紧张和焦虑"}}}),e._v(" "),a("label",{attrs:{for:"diseasePsychology2"}},[e._v("有一点紧张和焦虑")])]),e._v(" "),a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.diseasePsychology,expression:"diseasePsychology"}],attrs:{type:"radio",value:"比较焦虑和紧张",id:"diseasePsychology3"},domProps:{checked:e._q(e.diseasePsychology,"比较焦虑和紧张")},on:{click:function(t){e.diseasePsychology="比较焦虑和紧张"}}}),e._v(" "),a("label",{attrs:{for:"diseasePsychology3"}},[e._v("比较焦虑和紧张")])]),e._v(" "),a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.diseasePsychology,expression:"diseasePsychology"}],attrs:{type:"radio",value:"非常焦虑和紧张",id:"diseasePsychology4"},domProps:{checked:e._q(e.diseasePsychology,"非常焦虑和紧张")},on:{click:function(t){e.diseasePsychology="非常焦虑和紧张"}}}),e._v(" "),a("label",{attrs:{for:"diseasePsychology4"}},[e._v("非常焦虑和紧张")])])])]),e._v(" "),a("div",{staticClass:"form-group flex-row"},[e._m(8),e._v(" "),a("div",{staticClass:"flex-col"},[a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.CTUnderstand,expression:"CTUnderstand"}],attrs:{type:"radio",value:"不了解",id:"CTUnderstand1"},domProps:{checked:e._q(e.CTUnderstand,"不了解")},on:{click:function(t){e.CTUnderstand="不了解"}}}),e._v(" "),a("label",{attrs:{for:"CTUnderstand1"}},[e._v("不了解")])]),e._v(" "),a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.CTUnderstand,expression:"CTUnderstand"}],attrs:{type:"radio",value:"一般了解",id:"CTUnderstand2"},domProps:{checked:e._q(e.CTUnderstand,"一般了解")},on:{click:function(t){e.CTUnderstand="一般了解"}}}),e._v(" "),a("label",{attrs:{for:"CTUnderstand2"}},[e._v("一般了解")])]),e._v(" "),a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.CTUnderstand,expression:"CTUnderstand"}],attrs:{type:"radio",value:"较多了解",id:"CTUnderstand3"},domProps:{checked:e._q(e.CTUnderstand,"较多了解")},on:{click:function(t){e.CTUnderstand="较多了解"}}}),e._v(" "),a("label",{attrs:{for:"CTUnderstand3"}},[e._v("较多了解")])]),e._v(" "),a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.CTUnderstand,expression:"CTUnderstand"}],attrs:{type:"radio",value:"非常了解",id:"CTUnderstand4"},domProps:{checked:e._q(e.CTUnderstand,"非常了解")},on:{click:function(t){e.CTUnderstand="非常了解"}}}),e._v(" "),a("label",{attrs:{for:"CTUnderstand4"}},[e._v("非常了解")])])])]),e._v(" "),a("div",{staticClass:"form-group flex-row"},[e._m(9),e._v(" "),a("div",{staticClass:"flex-col"},[a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.CTPsychology,expression:"CTPsychology"}],attrs:{type:"radio",value:"没有焦虑和紧张",id:"CTPsychology1"},domProps:{checked:e._q(e.CTPsychology,"没有焦虑和紧张")},on:{click:function(t){e.CTPsychology="没有焦虑和紧张"}}}),e._v(" "),a("label",{attrs:{for:"CTPsychology1"}},[e._v("没有焦虑和紧张")])]),e._v(" "),a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.CTPsychology,expression:"CTPsychology"}],attrs:{type:"radio",value:"有一点紧张和焦虑",id:"CTPsychology2"},domProps:{checked:e._q(e.CTPsychology,"有一点紧张和焦虑")},on:{click:function(t){e.CTPsychology="有一点紧张和焦虑"}}}),e._v(" "),a("label",{attrs:{for:"CTPsychology2"}},[e._v("有一点紧张和焦虑")])]),e._v(" "),a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.CTPsychology,expression:"CTPsychology"}],attrs:{type:"radio",value:"比较焦虑和紧张",id:"CTPsychology3"},domProps:{checked:e._q(e.CTPsychology,"比较焦虑和紧张")},on:{click:function(t){e.CTPsychology="比较焦虑和紧张"}}}),e._v(" "),a("label",{attrs:{for:"CTPsychology3"}},[e._v("比较焦虑和紧张")])]),e._v(" "),a("div",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.CTPsychology,expression:"CTPsychology"}],attrs:{type:"radio",value:"非常焦虑和紧张",id:"CTPsychology4"},domProps:{checked:e._q(e.CTPsychology,"非常焦虑和紧张")},on:{click:function(t){e.CTPsychology="非常焦虑和紧张"}}}),e._v(" "),a("label",{attrs:{for:"CTPsychology4"}},[e._v("非常焦虑和紧张")])])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"question"},[a("label",{staticStyle:{width:"120px"},attrs:{for:"education"}},[e._v("受教育程度")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"question"},[a("label",{staticStyle:{width:"120px"},attrs:{for:"work"}},[e._v("目前的工作状态")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"question"},[a("label",{attrs:{for:"workSit6"}},[e._v("工作中每天是否久坐超过6小时")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"question"},[a("label",{attrs:{for:"eat"}},[e._v("是否有下面这些饮食习惯？")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"question"},[a("label",{attrs:{for:"sport"}},[e._v("是否有坚持运动的习惯？")]),e._v(" "),a("p",{staticClass:"dec"},[e._v("指至少是一小时以上的有氧运动")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"question"},[a("label",{attrs:{for:"weight"}},[e._v("是否正在进行减肥？")]),e._v(" "),a("p",{staticClass:"dec"},[e._v("目标是降低体重5%")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"question"},[a("label",[e._v("对心脏病（冠心病）的了解程度是")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"question"},[a("label",[e._v("对自己的心脏问题是不是会常常感到焦虑或紧张？")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"question"},[a("label",[e._v("对冠心病CT检查的了解程度")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"question"},[a("label",[e._v("对冠心病CT检查有没有畏惧和紧张情绪？")])])}]}},222:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(7),i=s(o),r=a(20),d=s(r),n=a(2),c=s(n),l=a(17);t.default={name:"temp2",components:{Modal:d.default,MButton:c.default},props:{mdid:String,templateid:String,recordid:String,source:{type:Object,default:function(){return{}}}},data:function(){return{education:"",work:"",workHours:"",workSit6:"",eat:[],eatNone:!1,sport:"",weight:"",diseaseUnderstand:"",diseasePsychology:"",CTUnderstand:"",CTPsychology:""}},created:function(){var e=this;"{}"!==(0,i.default)(this.source)&&(this.education=this.source.education,this.work=this.source.work,this.workHours=this.source.workHours,this.workSit6=this.source.workSit6,this.eat=this.source.eat,this.sport=this.source.sport,this.weight=this.source.weight,this.diseaseUnderstand=this.source.diseaseUnderstand,this.diseasePsychology=this.source.diseasePsychology,this.CTUnderstand=this.source.CTUnderstand,this.CTPsychology=this.source.CTPsychology);for(var t in this.$data)this.$watch(t,function(t,a){e.$emit("putsever",{sourceData:e.$data,showData:e.changeData()})})},methods:{eatSpecial:function(){this.eatNone===!0?this.eat=["没有上述习惯"]:this.eat=[]},eatConfig:function(){this.eatNone=!1;var e=this.eat.indexOf("没有上述习惯");e!==-1?this.eat.splice(e,1):""},clearn:function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];for(var s in t){var o=this.$data[t[s]];(0,l.Type)(o),"string"===(0,l.Type)(o)||"date"===(0,l.Type)(o)||"number"===(0,l.Type)(o)?this.$data[t[s]]="":"array"===(0,l.Type)(o)&&(this.$data[t[s]]=[])}},changeData:function(){var e={"教育程度":this.education,"工作状态":this.work,"每天工作时长":this.workHours,"工作中每天是否久坐超过6小时":this.workSit6,"饮食习惯":this.eat.toString(),"运动":this.sport,"减肥":this.weight,"对心脏病的了解程度":this.diseaseUnderstand,"平常对心脏问题的紧张程度":this.diseasePsychology,"对冠心病CT检查的了解程度":this.CTUnderstand,"对冠心病CT检查的紧张程度":this.CTPsychology};return e}}}}});