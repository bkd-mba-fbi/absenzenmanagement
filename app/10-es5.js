!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var c=Object.prototype.toString.call(e).slice(8,-1);"Object"===c&&e.constructor&&(c=e.constructor.name);if("Map"===c||"Set"===c)return Array.from(e);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,c=new Array(t);n<t;n++)c[n]=e[n];return c}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function i(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=l(e);if(t){var i=l(this).constructor;n=Reflect.construct(c,arguments,i)}else n=c.apply(this,arguments);return o(this,n)}}function o(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{pXY1:function(t,c,a){"use strict";a.r(c),a.d(c,"EditAbsencesModule",(function(){return bt}));var o=a("PCNd"),l=a("tyNb"),b=a("itXk"),u=a("UXun"),d=a("lJxs"),f=a("1G5W"),p=a("v6cN"),h=a("CCnw"),m=a("CqUA"),y=a("KJh6"),v=a("FJ3f"),g=a("eB9A"),O=a("NPit"),P=a("fhBx"),x=a("Xr/R"),j=a("RYjX");function C(e,t,n){return e.map((function(e){var c,i=null;return e.TypeRef.Id&&(i=t.find((function(t){return t.Id===e.TypeRef.Id}))||null),e.ConfirmationStateId&&(c=n.find((function(t){return t.Key===e.ConfirmationStateId}))),new j.b(e,i,c)}))}var I,S,k,E,$=a("fXoL"),T=a("ofXK"),F=((I=function(e){r(c,e);var t=s(c);function c(e,i,r,a,s,o){var l;return n(this,c),(l=t.call(this,e,i,r,"/edit-absences")).lessonPresencesService=a,l.presenceTypesService=s,l.dropDownItemsService=o,l.presenceTypes$=l.loadPresenceTypes().pipe(Object(u.a)(1)),l.absenceConfirmationStates$=l.loadAbsenceConfirmationStates().pipe(Object(d.a)(v.b),Object(u.a)(1)),l.presenceControlEntries$=Object(b.a)([l.entries$,l.presenceTypes$,l.absenceConfirmationStates$]).pipe(Object(d.a)(Object(g.a)(C)),Object(u.a)(1)),l.selected=[],l.queryParamsString$.pipe(Object(f.a)(l.destroy$)).subscribe((function(e){return l.confirmBackLinkParams={returnparams:e}})),l}return i(c,[{key:"resetSelection",value:function(){this.selected=[]}},{key:"getInitialFilter",value:function(){return{student:null,educationalEvent:null,studyClass:null,dateFrom:null,dateTo:null,presenceType:null,confirmationState:null,incidentType:null}}},{key:"isValidFilter",value:function(e){return Boolean(e.student||e.educationalEvent||e.studyClass||e.dateFrom||e.dateTo||e.presenceType||e.confirmationState||e.incidentType)}},{key:"loadEntries",value:function(e,t,n){return this.loadingService.load(this.lessonPresencesService.getFilteredList(e,n,{sort:"StudentFullName.asc,LessonDateTimeFrom.asc"}),P.a)}},{key:"buildParamsFromFilter",value:function(e){return Object(O.a)(e)}},{key:"loadPresenceTypes",value:function(){return this.loadingService.load(this.presenceTypesService.activePresenceTypes$)}},{key:"loadAbsenceConfirmationStates",value:function(){return this.loadingService.load(this.dropDownItemsService.getAbsenceConfirmationStates())}}]),c}(P.b)).\u0275fac=function(e){return new(e||I)($.Xb(T.i),$.Xb(m.a),$.Xb(x.a),$.Xb(h.a),$.Xb(y.a),$.Xb(p.a))},I.\u0275prov=$.Gb({token:I,factory:I.\u0275fac}),I),w=a("qUtt"),G=((S=function(){function e(t){n(this,e),this.state=t}return i(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||S)($.Kb(F))},S.\u0275cmp=$.Eb({type:S,selectors:[["erz-edit-absences"]],features:[$.wb([F,{provide:w.a,useExisting:F}])],decls:1,vars:0,template:function(e,t){1&e&&$.Lb(0,"router-outlet")},directives:[l.i],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),S),A=a("XNiG"),D=a("IzEk"),z=a("wO+i"),L=a("pLZG"),K=a("ulei"),q=((k=function(e){r(c,e);var t=s(c);function c(){return n(this,c),t.apply(this,arguments)}return c}(K.a)).\u0275fac=function(e){return R(e||k)},k.\u0275prov=$.Gb({token:k,factory:k.\u0275fac}),k),R=$.Rb(q),M=a("yl8S"),_=a("KCaQ"),V=a("K+0v"),N=a("EOpz"),B=a("1kSV"),X=a("M34a"),H=a("vlqf"),Q=a("YDIV"),J=a("PAVU"),U=a("vjgy"),Y=a("mmcK"),W=a("4vbw"),Z=a("jSy9"),ee=a("DKSB"),te=a("wnGv"),ne=a("sYmb"),ce=((E=function(){function e(t,c,i,r){n(this,e),this.studentsService=t,this.educationalEventsService=c,this.studyClassService=i,this.state=r,this.filter={student:null,educationalEvent:null,studyClass:null,dateFrom:null,dateTo:null,presenceType:null,confirmationState:null,incidentType:null},this.filterChange=new $.n,this.absenceConfirmationStates$=this.state.absenceConfirmationStates$,this.presenceTypes$=this.state.presenceTypes$.pipe(Object(d.a)((function(e){return e.filter(Object(V.d)(H.d)).filter(Object(V.d)(H.f))})),Object(d.a)(J.a)),this.incidentTypes$=this.state.presenceTypes$.pipe(Object(d.a)((function(e){return e.filter(H.f)})),Object(d.a)(J.a))}return i(e,[{key:"ngOnInit",value:function(){}},{key:"show",value:function(){this.filterChange.emit(Object.assign(Object.assign({},this.filter),{dateFrom:ie(this.filter.dateFrom),dateTo:ie(this.filter.dateTo)}))}}]),e}()).\u0275fac=function(e){return new(e||E)($.Kb(Y.a),$.Kb(U.a),$.Kb(W.a),$.Kb(F))},E.\u0275cmp=$.Eb({type:E,selectors:[["erz-edit-absences-header"]],inputs:{filter:"filter"},outputs:{filterChange:"filterChange"},features:[$.wb([{provide:B.c,useClass:B.d},{provide:B.e,useClass:Q.a}])],decls:49,vars:47,consts:[[1,"filters","mb-2"],[1,"form-group"],[3,"typeaheadService","value","valueChange"],[3,"value","valueChange"],[1,"filters","mt-2"],[3,"options","value","valueChange"],[1,"buttons"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(e,t){1&e&&($.Pb(0,"div",0),$.Pb(1,"div",1),$.Pb(2,"label"),$.Ec(3),$.ec(4,"translate"),$.Ob(),$.Pb(5,"erz-typeahead",2),$.bc("valueChange",(function(e){return t.filter.student=e})),$.Ob(),$.Ob(),$.Pb(6,"div",1),$.Pb(7,"label"),$.Ec(8),$.ec(9,"translate"),$.Ob(),$.Pb(10,"erz-typeahead",2),$.bc("valueChange",(function(e){return t.filter.educationalEvent=e})),$.Ob(),$.Ob(),$.Pb(11,"div",1),$.Pb(12,"label"),$.Ec(13),$.ec(14,"translate"),$.Ob(),$.Pb(15,"erz-typeahead",2),$.bc("valueChange",(function(e){return t.filter.studyClass=e})),$.Ob(),$.Ob(),$.Pb(16,"div",1),$.Pb(17,"label"),$.Ec(18),$.ec(19,"translate"),$.Ob(),$.Pb(20,"erz-date-select",3),$.bc("valueChange",(function(e){return t.filter.dateFrom=e})),$.Ob(),$.Ob(),$.Pb(21,"div",1),$.Pb(22,"label"),$.Ec(23),$.ec(24,"translate"),$.Ob(),$.Pb(25,"erz-date-select",3),$.bc("valueChange",(function(e){return t.filter.dateTo=e})),$.Ob(),$.Ob(),$.Ob(),$.Pb(26,"div",4),$.Pb(27,"div",1),$.Pb(28,"label"),$.Ec(29),$.ec(30,"translate"),$.Ob(),$.Pb(31,"erz-select",5),$.bc("valueChange",(function(e){return t.filter.confirmationState=e})),$.ec(32,"async"),$.Ob(),$.Ob(),$.Pb(33,"div",1),$.Pb(34,"label"),$.Ec(35),$.ec(36,"translate"),$.Ob(),$.Pb(37,"erz-select",5),$.bc("valueChange",(function(e){return t.filter.presenceType=e})),$.ec(38,"async"),$.Ob(),$.Ob(),$.Pb(39,"div",1),$.Pb(40,"label"),$.Ec(41),$.ec(42,"translate"),$.Ob(),$.Pb(43,"erz-select",5),$.bc("valueChange",(function(e){return t.filter.incidentType=e})),$.ec(44,"async"),$.Ob(),$.Ob(),$.Pb(45,"div",6),$.Pb(46,"button",7),$.bc("click",(function(){return t.show()})),$.Ec(47),$.ec(48,"translate"),$.Ob(),$.Ob(),$.Ob()),2&e&&($.xb(3),$.Fc($.fc(4,23,"edit-absences.header.student")),$.xb(2),$.jc("typeaheadService",t.studentsService)("value",t.filter.student),$.xb(3),$.Fc($.fc(9,25,"edit-absences.header.module-instance")),$.xb(2),$.jc("typeaheadService",t.educationalEventsService)("value",t.filter.educationalEvent),$.xb(3),$.Fc($.fc(14,27,"edit-absences.header.study-class")),$.xb(2),$.jc("typeaheadService",t.studyClassService)("value",t.filter.studyClass),$.xb(3),$.Fc($.fc(19,29,"edit-absences.header.date-from")),$.xb(2),$.jc("value",t.filter.dateFrom),$.xb(3),$.Fc($.fc(24,31,"edit-absences.header.date-to")),$.xb(2),$.jc("value",t.filter.dateTo),$.xb(4),$.Fc($.fc(30,33,"edit-absences.header.confirmation-state")),$.xb(2),$.jc("options",$.fc(32,35,t.absenceConfirmationStates$))("value",t.filter.confirmationState),$.xb(4),$.Fc($.fc(36,37,"edit-absences.header.presence-type")),$.xb(2),$.jc("options",$.fc(38,39,t.presenceTypes$))("value",t.filter.presenceType),$.xb(4),$.Fc($.fc(42,41,"edit-absences.header.incident")),$.xb(2),$.jc("options",$.fc(44,43,t.incidentTypes$))("value",t.filter.incidentType),$.xb(4),$.Gc(" ",$.fc(48,45,"edit-absences.header.show")," "))},directives:[Z.a,ee.a,te.a],pipes:[ne.c,T.b],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;padding:1.5rem;border-bottom:1px solid #dee2e6}.filters[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.form-group[_ngcontent-%COMP%]{flex:1;min-width:20rem;max-width:40rem;margin-right:1.5rem;margin-bottom:.75rem}.buttons[_ngcontent-%COMP%]{flex:none;margin-top:2.75rem;margin-right:0}@media (max-width:767.98px){.buttons[_ngcontent-%COMP%]{width:100%;margin-top:1.5rem;margin-bottom:1.5rem}}"],changeDetection:0}),E);function ie(e){return e?Object(X.a)(e):null}var re=a("dlKe"),ae=a("4Kj8"),se=function(e){return{count:e}},oe=function(e){return{returnparams:e}};function le(e,t){if(1&e&&($.Pb(0,"div",12),$.Pb(1,"div",13),$.Ec(2),$.ec(3,"translate"),$.ec(4,"async"),$.ec(5,"translate"),$.Ob(),$.Pb(6,"a",14),$.ec(7,"async"),$.Pb(8,"i",15),$.Ec(9,"edit"),$.Ob(),$.Ob(),$.Ob()),2&e){var n=$.dc(4).erzLet,c=$.dc();$.xb(2),$.Hc(" ",$.gc(3,5,"edit-absences.list.total",$.nc(15,se,$.fc(4,8,c.state.total$)||0)),", ",$.gc(5,10,"edit-absences.list.selected",$.nc(17,se,n.selection.length))," "),$.xb(4),$.Cb("disabled",0===n.selection.length),$.jc("queryParams",$.nc(19,oe,$.fc(7,13,c.state.queryParamsString$)))}}var be=function(e){return["student",e]};function ue(e,t){if(1&e){var n=$.Qb();$.Pb(0,"tr"),$.Pb(1,"td",20),$.bc("click",(function(e){$.uc(n);var t=$.tc(3);return $.dc(6).onCheckboxCellClick(e,t)})),$.Pb(2,"input",17,21),$.bc("change",(function(){$.uc(n);var e=t.$implicit;return $.dc(6).selectionService.toggle(e.lessonPresence)})),$.ec(4,"async"),$.Ob(),$.Ob(),$.Pb(5,"td",18),$.ec(6,"translate"),$.Pb(7,"span",22),$.Pb(8,"i",15),$.Ec(9),$.Ob(),$.Ob(),$.Ob(),$.Pb(10,"td"),$.ec(11,"translate"),$.Pb(12,"a",23),$.ec(13,"async"),$.Ec(14),$.Ob(),$.Lb(15,"br"),$.Ec(16),$.Ob(),$.Pb(17,"td"),$.ec(18,"translate"),$.Ec(19),$.ec(20,"date"),$.Ob(),$.Pb(21,"td"),$.ec(22,"translate"),$.Ec(23),$.ec(24,"date"),$.ec(25,"date"),$.Ob(),$.Pb(26,"td"),$.ec(27,"translate"),$.Ec(28),$.Ob(),$.Pb(29,"td",24),$.ec(30,"translate"),$.Ec(31),$.Ob(),$.Pb(32,"td"),$.ec(33,"translate"),$.Ec(34),$.Ob(),$.Ob()}if(2&e){var c=t.$implicit,i=$.dc(6);$.xb(2),$.jc("checked",$.fc(4,21,i.selectionService.isSelected$(c.lessonPresence))),$.xb(3),$.yb("data-label",$.fc(6,23,"edit-absences.list.header.presence")),$.xb(2),$.jc("className",c.presenceCategory),$.xb(2),$.Fc(c.presenceCategoryIcon),$.xb(1),$.yb("data-label",$.fc(11,25,"edit-absences.list.header.mobil-student-module-instance-study-class")),$.xb(2),$.jc("routerLink",$.nc(48,be,c.lessonPresence.StudentRef.Id))("queryParams",$.nc(50,oe,$.fc(13,27,i.profileReturnParams$))),$.xb(2),$.Gc(" ",c.lessonPresence.StudentFullName," "),$.xb(2),$.Hc(" ",c.lessonPresence.EventDesignation,", ",c.lessonPresence.StudyClassNumber," "),$.xb(1),$.yb("data-label",$.fc(18,29,"edit-absences.list.header.date")),$.xb(2),$.Gc(" ",$.gc(20,31,c.lessonPresence.LessonDateTimeFrom,"mediumDate")," "),$.xb(2),$.yb("data-label",$.fc(22,34,"edit-absences.list.header.time")),$.xb(2),$.Hc(" ",$.gc(24,36,c.lessonPresence.LessonDateTimeFrom,"shortTime"),"\u2013",$.gc(25,39,c.lessonPresence.LessonDateTimeTo,"shortTime")," "),$.xb(3),$.yb("data-label",$.fc(27,42,"edit-absences.list.header.confirmation-state")),$.xb(2),$.Gc(" ",null==c.confirmationState?null:c.confirmationState.Value," "),$.xb(1),$.yb("data-label",$.fc(30,44,"edit-absences.list.header.mobil-presence-type-incident")),$.xb(2),$.Gc(" ",null==c.presenceType?null:c.presenceType.Designation," "),$.xb(1),$.yb("data-label",$.fc(33,46,"edit-absences.list.header.teacher")),$.xb(2),$.Gc(" ",c.lessonPresence.TeacherInformation," ")}}function de(e,t){if(1&e){var n=$.Qb();$.Pb(0,"table",16),$.Pb(1,"thead"),$.Pb(2,"tr"),$.Pb(3,"th"),$.Pb(4,"input",17),$.bc("change",(function(e){return $.uc(n),$.dc(5).toggleAll(e.currentTarget.checked)})),$.Ob(),$.Ob(),$.Pb(5,"th",18),$.Ec(6),$.ec(7,"translate"),$.Ob(),$.Pb(8,"th"),$.Ec(9),$.ec(10,"translate"),$.Lb(11,"br"),$.Ec(12),$.ec(13,"translate"),$.ec(14,"translate"),$.Ob(),$.Pb(15,"th"),$.Ec(16),$.ec(17,"translate"),$.Ob(),$.Pb(18,"th"),$.Ec(19),$.ec(20,"translate"),$.Ob(),$.Pb(21,"th"),$.Ec(22),$.ec(23,"translate"),$.Ob(),$.Pb(24,"th"),$.Ec(25),$.ec(26,"translate"),$.ec(27,"translate"),$.Ob(),$.Pb(28,"th"),$.Ec(29),$.ec(30,"translate"),$.Ob(),$.Ob(),$.Ob(),$.Pb(31,"tbody"),$.Cc(32,ue,35,52,"tr",19),$.Ob(),$.Ob()}if(2&e){var c=$.dc(4).erzLet;$.xb(4),$.jc("checked",c.selection.length===c.entries.length),$.xb(2),$.Gc(" ",$.fc(7,12,"edit-absences.list.header.presence")," "),$.xb(3),$.Gc(" ",$.fc(10,14,"edit-absences.list.header.student")," "),$.xb(3),$.Hc(" ",$.fc(13,16,"edit-absences.list.header.module-instance"),", ",$.fc(14,18,"edit-absences.list.header.study-class")," "),$.xb(4),$.Gc(" ",$.fc(17,20,"edit-absences.list.header.date")," "),$.xb(3),$.Fc($.fc(20,22,"edit-absences.list.header.time")),$.xb(3),$.Gc(" ",$.fc(23,24,"edit-absences.list.header.confirmation-state")," "),$.xb(3),$.Hc(" ",$.fc(26,26,"edit-absences.list.header.presence-type")," / ",$.fc(27,28,"edit-absences.list.header.incident")," "),$.xb(4),$.Fc($.fc(30,30,"edit-absences.list.header.teacher")),$.xb(3),$.jc("ngForOf",c.entries)}}function fe(e,t){1&e&&$.Lb(0,"erz-spinner",25)}function pe(e,t){if(1&e){var n=$.Qb();$.Pb(0,"button",26),$.bc("click",(function(){return $.uc(n),$.dc(5).state.nextPage()})),$.Ec(1),$.ec(2,"translate"),$.Ob()}2&e&&($.xb(1),$.Gc(" ",$.fc(2,1,"global.pagination.load-more")," "))}function he(e,t){if(1&e){var n=$.Qb();$.Pb(0,"div",7),$.bc("scrolled",(function(){return $.uc(n),$.dc(4).onScroll()})),$.Cc(1,le,10,21,"div",8),$.Cc(2,de,33,32,"table",9),$.Cc(3,fe,1,0,"erz-spinner",10),$.Cc(4,pe,3,3,"button",11),$.Ob()}if(2&e){var c=$.dc(3).erzLet;$.xb(1),$.jc("ngIf",c.entries&&c.entries.length>0),$.xb(1),$.jc("ngIf",c.entries&&c.entries.length>0),$.xb(1),$.jc("ngIf",c.loadingPage),$.xb(1),$.jc("ngIf",c.hasMore&&!c.loadingPage)}}function me(e,t){1&e&&($.Pb(0,"p",27),$.Ec(1),$.ec(2,"translate"),$.Ob()),2&e&&($.xb(1),$.Fc($.fc(2,1,"edit-absences.no-entries")))}function ye(e,t){if(1&e&&($.Nb(0),$.Cc(1,he,5,4,"div",5),$.Cc(2,me,3,3,"ng-template",null,6,$.Dc),$.Mb()),2&e){var n=$.tc(3),c=$.dc(2).erzLet;$.xb(1),$.jc("ngIf",c.entries&&c.entries.length>0||c.loadingPage)("ngIfElse",n)}}function ve(e,t){1&e&&$.Lb(0,"erz-spinner")}function ge(e,t){if(1&e&&($.Nb(0),$.Cc(1,ye,4,2,"ng-container",2),$.ec(2,"async"),$.Cc(3,ve,1,0,"ng-template",null,4,$.Dc),$.Mb()),2&e){var n=$.tc(4),c=$.dc(2);$.xb(1),$.jc("ngIf",!$.fc(2,2,c.state.loading$))("ngIfElse",n)}}function Oe(e,t){1&e&&($.Pb(0,"p",27),$.Ec(1),$.ec(2,"translate"),$.Ob()),2&e&&($.xb(1),$.Fc($.fc(2,1,"edit-absences.no-filter")))}function Pe(e,t){if(1&e){var n=$.Qb();$.Nb(0),$.Pb(1,"erz-edit-absences-header",1),$.bc("filterChange",(function(e){return $.uc(n),$.dc().state.setFilter(e)})),$.ec(2,"async"),$.Ob(),$.Cc(3,ge,5,4,"ng-container",2),$.ec(4,"async"),$.Cc(5,Oe,3,3,"ng-template",null,3,$.Dc),$.Mb()}if(2&e){var c=$.tc(6),i=$.dc();$.xb(1),$.jc("filter",$.fc(2,3,i.filterFromParams$)),$.xb(2),$.jc("ngIf",$.fc(4,5,i.state.isFilterValid$))("ngIfElse",c)}}var xe,je=function(e,t,n,c){return{selection:e,entries:t,hasMore:n,loadingPage:c}},Ce=((xe=function(){function e(t,c,i,r){n(this,e),this.state=t,this.selectionService=c,this.scrollPosition=i,this.route=r,this.filterFromParams$=this.route.queryParams.pipe(Object(d.a)(Ie)),this.profileReturnParams$=this.state.queryParamsString$,this.destroy$=new A.a}return i(e,[{key:"ngOnInit",value:function(){var e=this;this.filterFromParams$.pipe(Object(D.a)(1)).subscribe((function(t){return e.state.setFilter(t)})),this.state.validFilter$.pipe(Object(f.a)(this.destroy$)).subscribe((function(){return e.selectionService.clear()})),this.selectionService.selection$.pipe(Object(f.a)(this.destroy$)).subscribe((function(t){return e.state.selected=t})),this.route.queryParams.pipe(Object(D.a)(1),Object(z.a)("reload"),Object(L.a)(V.b)).subscribe((function(){return e.state.resetEntries()}))}},{key:"ngAfterViewInit",value:function(){this.scrollPosition.restore()}},{key:"ngOnDestroy",value:function(){this.destroy$.next()}},{key:"toggleAll",value:function(e){var t=this;this.state.entries$.pipe(Object(D.a)(1)).subscribe((function(n){return t.selectionService.clear(e?n:null)}))}},{key:"onCheckboxCellClick",value:function(e,t){e.target!==t&&t.click()}},{key:"onScroll",value:function(){this.state.nextPage()}}]),e}()).\u0275fac=function(e){return new(e||xe)($.Kb(F),$.Kb(q),$.Kb(M.a),$.Kb(l.a))},xe.\u0275cmp=$.Eb({type:xe,selectors:[["erz-edit-absences-list"]],features:[$.wb([q])],decls:5,vars:14,consts:[[4,"erzLet"],[3,"filter","filterChange"],[4,"ngIf","ngIfElse"],["noFilter",""],["loading",""],["class","p-3","infiniteScroll","",3,"scrolled",4,"ngIf","ngIfElse"],["noEntries",""],["infiniteScroll","",1,"p-3",3,"scrolled"],["class","d-flex align-items-center justify-content-between",4,"ngIf"],["class","table table-striped",4,"ngIf"],["class","inline",4,"ngIf"],["type","button","class","btn btn-secondary btn-sm d-block mx-auto",3,"click",4,"ngIf"],[1,"d-flex","align-items-center","justify-content-between"],[1,"total"],["routerLink","/edit-absences/edit",1,"edit","btn","btn-primary","mt-1","mb-2",3,"queryParams"],[1,"material-icons"],[1,"table","table-striped"],["type","checkbox",3,"checked","change"],[1,"presence-category"],[4,"ngFor","ngForOf"],[1,"edit-absences-checkbox",3,"click"],["checkbox",""],[3,"className"],[1,"student",3,"routerLink","queryParams"],[1,"designation-incident"],[1,"inline"],["type","button",1,"btn","btn-secondary","btn-sm","d-block","mx-auto",3,"click"],[1,"mt-3","px-3"]],template:function(e,t){1&e&&($.Cc(0,Pe,7,7,"ng-container",0),$.ec(1,"async"),$.ec(2,"async"),$.ec(3,"async"),$.ec(4,"async")),2&e&&$.jc("erzLet",$.qc(9,je,$.fc(1,1,t.selectionService.selection$),$.fc(2,3,t.state.presenceControlEntries$),$.fc(3,5,t.state.hasMore$),$.fc(4,7,t.state.loadingPage$)))},directives:[N.a,ce,T.m,re.a,l.g,T.l,ae.a],pipes:[T.b,ne.c,T.e],styles:[".edit[_ngcontent-%COMP%]{line-height:1;font-size:2.2rem}.presence-category[_ngcontent-%COMP%]{text-align:center}.presence-category[_ngcontent-%COMP%]   .absent[_ngcontent-%COMP%]{color:#dc3545}.presence-category[_ngcontent-%COMP%]   .present[_ngcontent-%COMP%]{color:#28a745}.presence-category[_ngcontent-%COMP%]   .unapproved[_ngcontent-%COMP%]{color:#ffa814}.designation-incident[_ngcontent-%COMP%]{max-width:50ch}.student[_ngcontent-%COMP%]{color:#33333d}@media screen and (max-width:820px){.edit-absences-checkbox[_ngcontent-%COMP%]{text-align:left}.presence-category[_ngcontent-%COMP%]{text-align:right}.designation-incident[_ngcontent-%COMP%]{max-width:none}}"],changeDetection:0}),xe);function Ie(e){return{student:e.student?Number(e.student):null,educationalEvent:e.educationalEvent?Number(e.educationalEvent):null,studyClass:e.studyClass?Number(e.studyClass):null,dateFrom:e.dateFrom?Object(_.c)(e.dateFrom):null,dateTo:e.dateTo?Object(_.c)(e.dateTo):null,presenceType:e.presenceType?Number(e.presenceType):null,confirmationState:e.confirmationState?Number(e.confirmationState):null,incidentType:e.incidentType?Number(e.presenceType):null}}var Se,ke=a("3Pt+"),Ee=a("2Vo4"),$e=a("eIep"),Te=a("nYR2"),Fe=a("BeL+"),we=a("CqXF"),Ge=a("LpL1"),Ae=a("IClS"),De=function(e){return e.Absent="absent",e.Dispensation="dispensation",e.HalfDay="half-day",e.Incident="incident",e.Present="present",e}({}),ze=((Se=function(){function t(e,c){n(this,t),this.updateService=e,this.settings=c}return i(t,[{key:"update",value:function(e,t,n,c,i,r){var a=[];switch(n){case De.Present:a=this.createResetBulkRequests(e);break;case De.Absent:a=this.createAbsentEditBulkRequests(e,t,c,i);break;case De.Dispensation:a=this.createEditBulkRequests(e,null,this.settings.dispensationPresenceTypeId);break;case De.HalfDay:a=this.createEditBulkRequests(e,null,this.settings.halfDayPresenceTypeId);break;case De.Incident:a=this.createEditBulkRequests(e,null,r)}return Object(b.a)(a).pipe(Object(we.a)(void 0))}},{key:"createAbsentEditBulkRequests",value:function(t,n,c,i){return c===this.settings.excusedAbsenceStateId?this.createEditBulkRequests(t,c,i):c===this.settings.unexcusedAbsenceStateId?this.createEditBulkRequests(t,c,this.settings.absencePresenceTypeId):[].concat(e(this.createEditBulkRequests(t.filter(Le(n,this.settings)),c,this.settings.absencePresenceTypeId)),e(this.createEditBulkRequests(t.filter(Object(V.d)(Le(n,this.settings))),c,null)))}},{key:"createResetBulkRequests",value:function(e){var t=this;return Object(Ae.a)(e).map((function(e){var n=e.lessonIds,c=e.personIds;return t.updateService.removeLessonPresences(n,c)}))}},{key:"createEditBulkRequests",value:function(e,t,n){var c=this;return Object(Ae.a)(e).map((function(e){var i=e.lessonIds,r=e.personIds;return c.updateService.editLessonPresences(i,r,n||void 0,t||void 0)}))}}]),t}()).\u0275fac=function(e){return new(e||Se)($.Xb(Ge.a),$.Xb(x.a))},Se.\u0275prov=$.Gb({token:Se,factory:Se.\u0275fac,providedIn:"root"}),Se);function Le(e,t){return function(n){var c=e.find((function(e){return e.Id===n.TypeRef.Id}));return!c||c.Id===t.dispensationPresenceTypeId||c.Id===t.halfDayPresenceTypeId||c.IsIncident}}var Ke=a("A6ef"),qe=a("AEFh"),Re=a("5eHb");function Me(e,t){if(1&e&&($.Pb(0,"div",11),$.Ec(1),$.ec(2,"translate"),$.Ob()),2&e){var n=t.$implicit;$.xb(1),$.Gc(" ",$.gc(2,1,"global.validation-errors."+n.error,n.params)," ")}}function _e(e,t){if(1&e&&($.Pb(0,"option",23),$.Ec(1),$.Ob()),2&e){var n=t.$implicit;$.jc("ngValue",n.Id),$.xb(1),$.Gc(" ",n.Designation," ")}}function Ve(e,t){if(1&e&&($.Pb(0,"select",22),$.ec(1,"async"),$.Pb(2,"option",23),$.Ec(3),$.ec(4,"translate"),$.Ob(),$.Cc(5,_e,2,2,"option",24),$.ec(6,"async"),$.Ob()),2&e){var n=$.dc(6);$.Cb("is-invalid",$.fc(1,5,n.absenceTypeIdErrors$).length>0),$.xb(2),$.jc("ngValue",null),$.xb(1),$.Gc(" ",$.fc(4,7,"edit-absences.edit.absence-type-placeholder")," "),$.xb(2),$.jc("ngForOf",$.fc(6,9,n.absenceTypes$))}}function Ne(e,t){if(1&e&&($.Pb(0,"div",25),$.Ec(1),$.ec(2,"translate"),$.Ob()),2&e){var n=t.$implicit;$.xb(1),$.Gc(" ",$.gc(2,1,"global.validation-errors."+n.error,n.params)," ")}}function Be(e,t){if(1&e&&($.Pb(0,"div",18),$.Lb(1,"input",19),$.Pb(2,"label",14),$.Ec(3),$.Ob(),$.Cc(4,Ve,7,11,"select",20),$.Cc(5,Ne,3,4,"div",21),$.ec(6,"async"),$.Ob()),2&e){var n=t.$implicit,c=$.dc(5);$.xb(1),$.jc("id","state-"+n.Key)("value",n.Key),$.xb(1),$.kc("for","state-"+n.Key),$.xb(1),$.Gc(" ",n.Value," "),$.xb(1),$.jc("ngIf",c.isExcused(n)),$.xb(1),$.jc("ngForOf",$.fc(6,6,c.absenceTypeIdErrors$))}}function Xe(e,t){if(1&e&&($.Pb(0,"div",16),$.Cc(1,Be,7,8,"div",17),$.Ob()),2&e){var n=$.dc(3).erzLet;$.xb(1),$.jc("ngForOf",n.confirmationStates)}}function He(e,t){if(1&e&&($.Pb(0,"option",23),$.Ec(1),$.Ob()),2&e){var n=t.$implicit;$.jc("ngValue",n.Id),$.xb(1),$.Gc(" ",n.Designation," ")}}function Qe(e,t){if(1&e&&($.Pb(0,"div",25),$.Ec(1),$.ec(2,"translate"),$.Ob()),2&e){var n=t.$implicit;$.xb(1),$.Gc(" ",$.gc(2,1,"global.validation-errors."+n.error,n.params)," ")}}function Je(e,t){if(1&e&&($.Pb(0,"div",16),$.Pb(1,"select",26),$.ec(2,"async"),$.Pb(3,"option",23),$.Ec(4),$.ec(5,"translate"),$.Ob(),$.Cc(6,He,2,2,"option",24),$.ec(7,"async"),$.Ob(),$.Cc(8,Qe,3,4,"div",21),$.ec(9,"async"),$.Ob()),2&e){var n=$.dc(4);$.xb(1),$.Cb("is-invalid",$.fc(2,6,n.incidentIdErrors$).length>0),$.xb(2),$.jc("ngValue",null),$.xb(1),$.Gc(" ",$.fc(5,8,"edit-absences.edit.incident-placeholder")," "),$.xb(2),$.jc("ngForOf",$.fc(7,10,n.incidents$)),$.xb(2),$.jc("ngForOf",$.fc(9,12,n.incidentIdErrors$))}}function Ue(e,t){if(1&e&&($.Pb(0,"div",12),$.Lb(1,"input",13),$.Pb(2,"label",14),$.Ec(3),$.ec(4,"translate"),$.Ob(),$.Cc(5,Xe,2,1,"div",15),$.Cc(6,Je,10,14,"div",15),$.Ob()),2&e){var n=t.$implicit,c=$.dc(3);$.xb(1),$.jc("id","category-"+n)("value",n),$.xb(1),$.kc("for","category-"+n),$.xb(1),$.Gc(" ",$.fc(4,6,"edit-absences.edit.categories."+n)," "),$.xb(2),$.jc("ngIf",c.isAbsent(n)),$.xb(1),$.jc("ngIf",c.isIncident(n))}}function Ye(e,t){1&e&&($.Pb(0,"div",27),$.Pb(1,"span",28),$.Ec(2,"Loading..."),$.Ob(),$.Ob())}function We(e,t){if(1&e){var n=$.Qb();$.Pb(0,"form",3),$.bc("ngSubmit",(function(){return $.uc(n),$.dc(2).onSubmit()})),$.Cc(1,Me,3,4,"div",4),$.ec(2,"async"),$.Pb(3,"div",5),$.Cc(4,Ue,7,8,"div",6),$.Ob(),$.Pb(5,"div",7),$.Pb(6,"button",8),$.bc("click",(function(){return $.uc(n),$.dc(2).cancel()})),$.ec(7,"async"),$.Ec(8),$.ec(9,"translate"),$.Ob(),$.Pb(10,"button",9),$.ec(11,"async"),$.Ec(12),$.ec(13,"translate"),$.Cc(14,Ye,3,0,"div",10),$.ec(15,"async"),$.Ob(),$.Ob(),$.Ob()}if(2&e){var c=$.dc().erzLet,i=$.dc();$.jc("formGroup",c.formGroup),$.xb(1),$.jc("ngForOf",$.fc(2,8,i.formErrors$)),$.xb(3),$.jc("ngForOf",c.categories),$.xb(2),$.jc("disabled",$.fc(7,10,i.saving$)),$.xb(2),$.Gc(" ",$.fc(9,12,"edit-absences.edit.cancel")," "),$.xb(2),$.jc("disabled",$.fc(11,14,i.saving$)),$.xb(2),$.Gc(" ",$.fc(13,16,"edit-absences.edit.save")," "),$.xb(2),$.jc("ngIf",$.fc(15,18,i.saving$))}}function Ze(e,t){if(1&e&&($.Pb(0,"div",1),$.Cc(1,We,16,20,"form",2),$.Ob()),2&e){var n=t.erzLet;$.xb(1),$.jc("ngIf",n.formGroup&&n.confirmationStates)}}var et,tt,nt,ct=function(e,t,n){return{confirmationStates:e,categories:t,formGroup:n}},it=((et=function(){function e(t,c,i,r,a,s,o,l,b,f){var p=this;n(this,e),this.fb=t,this.router=c,this.route=i,this.toastr=r,this.translate=a,this.state=s,this.dropDownItemsService=o,this.presenceTypesService=l,this.updateService=b,this.settings=f,this.absenceTypes$=this.presenceTypesService.confirmationTypes$,this.incidents$=this.presenceTypesService.incidentTypes$,this.formGroup$=this.createFormGroup(),this.saving$=new Ee.a(!1),this.submitted$=new Ee.a(!1),this.formErrors$=Object(Ke.c)(this.formGroup$,this.submitted$),this.absenceTypeIdErrors$=Object(Ke.c)(this.formGroup$,this.submitted$,"absenceTypeId"),this.incidentIdErrors$=Object(Ke.c)(this.formGroup$,this.submitted$,"incidentId"),this.availableCategories=[De.Absent,De.Dispensation,De.HalfDay,De.Incident,De.Present],this.confirmationStates$=this.dropDownItemsService.getAbsenceConfirmationStates().pipe(Object(d.a)(this.sortAbsenceConfirmationStates.bind(this)),Object(u.a)(1)),this.activeCategories$=this.presenceTypesService.halfDayActive$.pipe(Object(d.a)((function(e){return e?p.availableCategories:p.availableCategories.filter((function(e){return e!==De.HalfDay}))}))),this.destroy$=new A.a}return i(e,[{key:"ngOnInit",value:function(){0===this.state.selected.length&&this.navigateBack(),Object(Ke.b)(this.formGroup$,"category").pipe(Object(f.a)(this.destroy$)).subscribe(this.updateConfirmationValueDisabled.bind(this)),Object(Ke.b)(this.formGroup$,"confirmationValue").pipe(Object(f.a)(this.destroy$)).subscribe(this.updateAbsenceTypeIdDisabled.bind(this))}},{key:"ngOnDestroy",value:function(){this.destroy$.next()}},{key:"isAbsent",value:function(e){return e===De.Absent}},{key:"isExcused",value:function(e){return e.Key===this.settings.excusedAbsenceStateId}},{key:"isIncident",value:function(e){return e===De.Incident}},{key:"onSubmit",value:function(){var e=this;this.submitted$.next(!0),this.formGroup$.pipe(Object(D.a)(1)).subscribe((function(t){t.valid&&e.save(t)}))}},{key:"cancel",value:function(){this.navigateBack()}},{key:"createFormGroup",value:function(){var e=this;return this.getInitialAbsenceTypeId().pipe(Object(d.a)((function(t){return e.fb.group({category:[De.Absent,ke.p.required],confirmationValue:[e.settings.excusedAbsenceStateId,ke.p.required],absenceTypeId:[t,ke.p.required],incidentId:[{value:null,disabled:!0},ke.p.required]})})),Object(u.a)(1))}},{key:"getInitialAbsenceTypeId",value:function(){var e=this;return this.absenceTypes$.pipe(Object(D.a)(1),Object(d.a)((function(t){var n=t.map((function(e){return e.Id})),c=Object(Fe.a)(e.state.selected.map((function(e){return e.TypeRef.Id})));return 1===c.length&&null!=c[0]&&n.includes(c[0])?c[0]:null})))}},{key:"updateConfirmationValueDisabled",value:function(){var e=this;this.formGroup$.pipe(Object(D.a)(1)).subscribe((function(t){var n=t.get("category"),c=t.get("confirmationValue"),i=t.get("absenceTypeId"),r=t.get("incidentId");n&&c&&i&&r&&(n.value===De.Absent?(c.enable(),e.updateAbsenceTypeIdDisabled()):(c.disable(),i.disable()),n.value===De.Incident?r.enable():r.disable())}))}},{key:"updateAbsenceTypeIdDisabled",value:function(){var e=this;this.formGroup$.pipe(Object(D.a)(1)).subscribe((function(t){var n=t.get("confirmationValue"),c=t.get("absenceTypeId");n&&c&&(n.value===e.settings.excusedAbsenceStateId?c.enable():c.disable())}))}},{key:"save",value:function(e){var t=this;this.saving$.next(!0);var n=e.value,c=n.category,i=n.confirmationValue,r=n.absenceTypeId,a=n.incidentId;this.presenceTypesService.presenceTypes$.pipe(Object($e.a)((function(e){return t.updateService.update(t.state.selected,e,c,i,r,a)})),Object(Te.a)((function(){return t.saving$.next(!1)}))).subscribe(this.onSaveSuccess.bind(this))}},{key:"onSaveSuccess",value:function(){this.state.resetSelection(),this.toastr.success(this.translate.instant("edit-absences.edit.save-success")),this.navigateBack(!0)}},{key:"navigateBack",value:function(e){var t=this;this.route.queryParams.pipe(Object(D.a)(1)).subscribe((function(n){t.router.navigate(["/edit-absences"],{queryParams:Object.assign(Object.assign({},Object(qe.a)(n.returnparams)),{reload:e})})}))}},{key:"sortAbsenceConfirmationStates",value:function(e){var t=this;return e.slice().sort((function(e,n){return e.Key===t.settings.excusedAbsenceStateId?-1:n.Key===t.settings.excusedAbsenceStateId?1:e.Value.localeCompare(n.Value)}))}}]),e}()).\u0275fac=function(e){return new(e||et)($.Kb(ke.b),$.Kb(l.e),$.Kb(l.a),$.Kb(Re.b),$.Kb(ne.d),$.Kb(F),$.Kb(p.a),$.Kb(y.a),$.Kb(ze),$.Kb(x.a))},et.\u0275cmp=$.Eb({type:et,selectors:[["erz-edit-absences-edit"]],decls:4,vars:11,consts:[["class","erz-container erz-container-limited erz-container-padding-y",4,"erzLet"],[1,"erz-container","erz-container-limited","erz-container-padding-y"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],["class","alert alert-danger",4,"ngFor","ngForOf"],[1,"form-group","pb-4"],["class","form-check mt-2 mb-3",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end"],["type","button",1,"btn","btn-secondary",3,"disabled","click"],["type","submit",1,"btn","btn-primary","ml-2",3,"disabled"],["class","spinner-border spinner-border-sm align-middle","role","status",4,"ngIf"],[1,"alert","alert-danger"],[1,"form-check","mt-2","mb-3"],["type","radio","formControlName","category",1,"form-check-input",3,"id","value"],[1,"form-check-label",3,"for"],["class","ml-5",4,"ngIf"],[1,"ml-5"],["class","form-check mt-2 mb-2",4,"ngFor","ngForOf"],[1,"form-check","mt-2","mb-2"],["type","radio","formControlName","confirmationValue",1,"form-check-input",3,"id","value"],["class","form-control mt-1","formControlName","absenceTypeId",3,"is-invalid",4,"ngIf"],["class","invalid-feedback",4,"ngFor","ngForOf"],["formControlName","absenceTypeId",1,"form-control","mt-1"],[3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf"],[1,"invalid-feedback"],["formControlName","incidentId",1,"form-control","mt-1"],["role","status",1,"spinner-border","spinner-border-sm","align-middle"],[1,"sr-only"]],template:function(e,t){1&e&&($.Cc(0,Ze,2,1,"div",0),$.ec(1,"async"),$.ec(2,"async"),$.ec(3,"async")),2&e&&$.jc("erzLet",$.pc(7,ct,$.fc(1,1,t.confirmationStates$),$.fc(2,3,t.activeCategories$),$.fc(3,5,t.formGroup$)))},directives:[N.a,T.m,ke.r,ke.i,ke.d,T.l,ke.m,ke.a,ke.h,ke.c,ke.o,ke.l,ke.q],pipes:[T.b,ne.c],styles:[""],changeDetection:0}),et),rt=a("ccj6"),at=a("hH5/"),st=[{path:"",component:G,children:[{path:"",component:Ce,data:{restoreScrollPositionFrom:["/edit-absences/edit","/edit-absences/student/:id"]}},{path:"edit",component:it},{path:"student/:id",children:[{path:"",component:rt.a},{path:"confirm",component:at.a}]}]}],ot=((tt=function e(){n(this,e)}).\u0275mod=$.Ib({type:tt}),tt.\u0275inj=$.Hb({factory:function(e){return new(e||tt)},imports:[[l.h.forChild(st)],l.h]}),tt),lt=a("0HM3"),bt=((nt=function e(){n(this,e)}).\u0275mod=$.Ib({type:nt}),nt.\u0275inj=$.Hb({factory:function(e){return new(e||nt)},providers:[{provide:lt.a,useValue:"/edit-absences"}],imports:[[o.a,ot]]}),nt)}}])}();