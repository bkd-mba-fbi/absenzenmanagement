!function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var i=u(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return a(this,n)}}function a(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"4vbw":function(t,e,i){"use strict";i.d(e,"a",(function(){return d}));var a,u=i("Xr/R"),c=i("dlU5"),s=i("j+Kt"),f=s.k({Id:s.h,Number:s.i}),l=i("fXoL"),b=i("tk/3"),d=((a=function(t){r(i,t);var e=o(i);function i(t,r){return n(this,i),e.call(this,t,r,f,"StudyClasses","Number")}return i}(c.a)).\u0275fac=function(t){return new(t||a)(l.Xb(b.b),l.Xb(u.a))},a.\u0275prov=l.Gb({token:a,factory:a.\u0275fac,providedIn:"root"}),a)},NPit:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("sWYD");function i(t){return Object.keys(t).reduce((function(e,n){var i=function(t){return t?t instanceof Date?Object(r.a)(t,"yyyy-MM-dd"):String(t):t}(t[n]);return i?Object.assign(Object.assign({},e),function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},n,i)):e}),{})}},Ug8t:function(t,r,i){"use strict";i.d(r,"a",(function(){return O}));var o=i("XNiG"),a=i("jtHE"),u=i("UXun"),c=i("lJxs"),s=i("JX91"),f=i("/uUt"),l=i("pLZG"),b=i("eIep"),d=i("oB13"),p=i("Xr/R"),y=i("fbMX"),h=i("K+0v"),v=i("fXoL"),g=i("tk/3"),O=function(){var t=function(){function t(e,r,i){var a;n(this,t),this.settings=e,this.storageService=r,this.http=i,this.studentConfirmationAvailabilityRecordId$=new o.a,this.personMasterDataAvailability$=this.loadReportAvailability("Person",this.settings.personMasterDataReportId,[Number(null===(a=this.storageService.getPayload())||void 0===a?void 0:a.id_person)]).pipe(Object(u.a)(1)),this.studentConfirmationAvailability$=this.loadReportAvailabilityByAsyncRecordId("Praesenzinformation",this.settings.studentConfirmationReportId,this.studentConfirmationAvailabilityRecordId$),this.studentConfirmationAvailabilitySub=this.studentConfirmationAvailability$.connect()}return e(t,[{key:"ngOnDestroy",value:function(){this.studentConfirmationAvailabilitySub.unsubscribe()}},{key:"getPersonMasterDataUrl",value:function(t){return this.getReportUrl("Person",this.settings.personMasterDataReportId,[t])}},{key:"getStudentConfirmationUrl",value:function(t){return this.getReportUrl("Praesenzinformation",this.settings.studentConfirmationReportId,t)}},{key:"setStudentConfirmationAvailabilityRecordId",value:function(t){this.studentConfirmationAvailabilityRecordId$.next(t)}},{key:"getReportUrl",value:function(t,e,n){return"".concat(this.settings.apiUrl,"/Files/CrystalReports/").concat(t,"/").concat(e,"?ids=").concat(n.join(","),"&token=").concat(this.storageService.getAccessToken())}},{key:"loadReportAvailability",value:function(t,e,n){return this.http.get("".concat(this.settings.apiUrl,"/CrystalReports/AvailableReports/").concat(t,"?ids=").concat(e,"&keys=").concat(n.join(","))).pipe(Object(c.a)(h.e),Object(s.a)(!1),Object(f.a)())}},{key:"loadReportAvailabilityByAsyncRecordId",value:function(t,e,n){var r=this;return n.pipe(Object(l.a)((function(t,e){return 0===e})),Object(b.a)((function(n){return r.loadReportAvailability(t,e,[n])})),Object(d.a)((function(){return new a.a(1)})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(v.Xb(p.a),v.Xb(y.a),v.Xb(g.b))},t.\u0275prov=v.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},jiSq:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r,i=(r={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"},function(t){return null==r?void 0:r[t]}),o=n("efZk"),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,u=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");function c(t,e){return e?t.filter(function(t){var e=s(t);return function(t){return s(t.studentFullName).includes(e)||!!t.studyClassNumber&&s(t.studyClassNumber).includes(e)}}(e)):t}function s(t){return e=t.toLowerCase(),(e=Object(o.a)(e))&&e.replace(a,i).replace(u,"");var e}},vjgy:function(t,i,a){"use strict";a.d(i,"a",(function(){return I}));var u,c=a("Xr/R"),s=a("j+Kt"),f=s.k({Id:s.h,Designation:s.i,Number:s.i}),l=a("eIep"),b=a("lJxs"),d=a("t0ae"),p=a("EY2u"),y=a("LRne"),h=a("RJ6/"),v=a("mbak"),g=a("fXoL"),O=a("tk/3"),m=a("sYmb"),j=a("5eHb"),I=((u=function(t){r(a,t);var i=o(a);function a(t,e,r,o){var u;return n(this,a),(u=i.call(this,t,e,f,"EducationalEvents")).translate=r,u.toastr=o,u.typeaheadCodec=s.k(Object(h.a)(u.codec.props,["Id","Designation","Number"])),u}return e(a,[{key:"getTypeaheadItems",value:function(t){return this.http.get(this.baseUrl+"/CurrentSemester",{params:{fields:["Id","Designation","Number"].join(","),"filter.Designation":"~*".concat(t,"*")}}).pipe(Object(l.a)(Object(d.b)(this.typeaheadCodec)),Object(b.a)((function(t){return t.map((function(t){return{Key:t.Id,Value:"".concat(t.Designation," (").concat(t.Number,")")}}))})))}},{key:"getTypeaheadItemById",value:function(t){var e=this;return this.http.get(this.baseUrl+"/CurrentSemester",{params:{fields:["Id","Designation","Number"].join(","),"filter.Id":"="+t}}).pipe(Object(l.a)(Object(d.b)(this.typeaheadCodec)),Object(l.a)((function(t){return 0===t.length?(e.toastr.error(e.translate.instant("global.rest-errors.notfound-message"),e.translate.instant("global.rest-errors.notfound-title")),p.a):Object(y.a)({Key:t[0].Id,Value:"".concat(t[0].Designation," (").concat(t[0].Number,")")})})))}}]),a}(v.a)).\u0275fac=function(t){return new(t||u)(g.Xb(O.b),g.Xb(c.a),g.Xb(m.d),g.Xb(j.b))},u.\u0275prov=g.Gb({token:u,factory:u.\u0275fac,providedIn:"root"}),u)}}])}();