(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/cdV":function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),e=function(){return function(){}}(),o=t("pMnS"),r=t("4GxJ"),a=t("gIcY"),i=t("A7o+"),s=t("Ip0R"),c=t("ZYCi"),b=function(){function n(n,l){var t=this;this.translate=n,this.router=l,this.router.events.subscribe(function(n){n instanceof c.d&&window.innerWidth<=992&&t.isToggled()&&t.toggleSidebar()})}return n.prototype.ngOnInit=function(){this.pushRightClass="push-right"},n.prototype.isToggled=function(){return document.querySelector("body").classList.contains(this.pushRightClass)},n.prototype.toggleSidebar=function(){document.querySelector("body").classList.toggle(this.pushRightClass)},n.prototype.rltAndLtr=function(){document.querySelector("body").classList.toggle("rtl")},n.prototype.onLoggedout=function(){localStorage.removeItem("isLoggedin")},n.prototype.changeLang=function(n){this.translate.use(n)},n}(),d=u.qb({encapsulation:0,styles:[["[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]{background-color:#222}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#504d4d}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{color:#fff}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]{width:300px}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;padding:5px 10px}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]:last-child{border-bottom:none}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:13px;font-weight:600}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .last[_ngcontent-%COMP%]{font-size:12px;margin:0}"]],data:{}});function g(n){return u.Lb(0,[(n()(),u.sb(0,0,null,null,46,"nav",[["class","navbar navbar-expand-lg fixed-top"]],null,null,null,null,null)),u.rb(1,16384,null,0,r.pb,[],null,null),(n()(),u.sb(2,0,null,null,1,"a",[["class","navbar-brand"],["href","#"]],null,null,null,null,null)),(n()(),u.Jb(-1,null,["Loan Application Process "])),(n()(),u.sb(4,0,null,null,1,"button",[["class","navbar-toggler"],["type","button"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.toggleSidebar()&&u),u},null,null)),(n()(),u.sb(5,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-bars text-muted"]],null,null,null,null,null)),(n()(),u.sb(6,0,null,null,40,"div",[["class","collapse navbar-collapse"]],null,null,null,null,null)),(n()(),u.sb(7,0,null,null,6,"form",[["class","form-inline my-2 my-lg-0"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,t){var e=!0;return"submit"===l&&(e=!1!==u.Cb(n,9).onSubmit(t)&&e),"reset"===l&&(e=!1!==u.Cb(n,9).onReset()&&e),e},null,null)),u.rb(8,16384,null,0,a.A,[],null,null),u.rb(9,4210688,null,0,a.o,[[8,null],[8,null]],null,null),u.Gb(2048,null,a.b,null,[a.o]),u.rb(11,16384,null,0,a.n,[[4,a.b]],null,null),(n()(),u.sb(12,0,null,null,1,"input",[["class","form-control mr-sm-2"],["type","text"]],[[8,"placeholder",0]],null,null,null,null)),u.Eb(131072,i.i,[i.j,u.h]),(n()(),u.sb(14,0,null,null,32,"ul",[["class","navbar-nav ml-auto"]],null,null,null,null,null)),(n()(),u.sb(15,0,null,null,31,"li",[["class","nav-item dropdown"],["ngbDropdown",""]],[[2,"show",null]],null,null,null,null)),u.rb(16,737280,null,3,r.v,[u.h,r.x,s.c,u.A,u.k,u.E,[2,r.pb]],null,null),u.Hb(335544320,1,{_menu:0}),u.Hb(335544320,2,{_menuElement:0}),u.Hb(335544320,3,{_anchor:0}),(n()(),u.sb(20,0,null,null,5,"a",[["aria-haspopup","true"],["class","nav-link dropdown-toggle"],["href","javascript:void(0)"],["ngbDropdownToggle",""]],[[1,"aria-expanded",0]],[[null,"click"],[null,"keydown.ArrowUp"],[null,"keydown.ArrowDown"],[null,"keydown.Home"],[null,"keydown.End"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Cb(n,21).dropdown.toggle()&&e),"keydown.ArrowUp"===l&&(e=!1!==u.Cb(n,21).dropdown.onKeyDown(t)&&e),"keydown.ArrowDown"===l&&(e=!1!==u.Cb(n,21).dropdown.onKeyDown(t)&&e),"keydown.Home"===l&&(e=!1!==u.Cb(n,21).dropdown.onKeyDown(t)&&e),"keydown.End"===l&&(e=!1!==u.Cb(n,21).dropdown.onKeyDown(t)&&e),e},null,null)),u.rb(21,16384,null,0,r.A,[r.v,u.k],null,null),u.Gb(2048,[[3,4]],r.w,null,[r.A]),(n()(),u.sb(23,0,null,null,0,"i",[["class","fa fa-user"]],null,null,null,null,null)),(n()(),u.Jb(-1,null,[" User00 "])),(n()(),u.sb(25,0,null,null,0,"b",[["class","caret"]],null,null,null,null,null)),(n()(),u.sb(26,0,[[2,0]],null,20,"div",[["class","dropdown-menu-right"],["ngbDropdownMenu",""]],[[2,"dropdown-menu",null],[2,"show",null],[1,"x-placement",0]],[[null,"keydown.ArrowUp"],[null,"keydown.ArrowDown"],[null,"keydown.Home"],[null,"keydown.End"],[null,"keydown.Enter"],[null,"keydown.Space"]],function(n,l,t){var e=!0;return"keydown.ArrowUp"===l&&(e=!1!==u.Cb(n,27).dropdown.onKeyDown(t)&&e),"keydown.ArrowDown"===l&&(e=!1!==u.Cb(n,27).dropdown.onKeyDown(t)&&e),"keydown.Home"===l&&(e=!1!==u.Cb(n,27).dropdown.onKeyDown(t)&&e),"keydown.End"===l&&(e=!1!==u.Cb(n,27).dropdown.onKeyDown(t)&&e),"keydown.Enter"===l&&(e=!1!==u.Cb(n,27).dropdown.onKeyDown(t)&&e),"keydown.Space"===l&&(e=!1!==u.Cb(n,27).dropdown.onKeyDown(t)&&e),e},null,null)),u.rb(27,16384,[[1,4]],1,r.y,[r.v],null,null),u.Hb(603979776,4,{menuItems:1}),(n()(),u.sb(29,0,null,null,3,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,null,null,null,null)),(n()(),u.sb(30,0,null,null,0,"i",[["class","fa fa-fw fa-user"]],null,null,null,null,null)),(n()(),u.Jb(31,null,[" "," "])),u.Eb(131072,i.i,[i.j,u.h]),(n()(),u.sb(33,0,null,null,3,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,null,null,null,null)),(n()(),u.sb(34,0,null,null,0,"i",[["class","fa fa-fw fa-envelope"]],null,null,null,null,null)),(n()(),u.Jb(35,null,[" "," "])),u.Eb(131072,i.i,[i.j,u.h]),(n()(),u.sb(37,0,null,null,3,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,null,null,null,null)),(n()(),u.sb(38,0,null,null,0,"i",[["class","fa fa-fw fa-gear"]],null,null,null,null,null)),(n()(),u.Jb(39,null,[" "," "])),u.Eb(131072,i.i,[i.j,u.h]),(n()(),u.sb(41,0,null,null,5,"a",[["class","dropdown-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==u.Cb(n,42).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),"click"===l&&(e=!1!==o.onLoggedout()&&e),e},null,null)),u.rb(42,671744,null,0,c.o,[c.l,c.a,s.i],{routerLink:[0,"routerLink"]},null),u.Db(43,1),(n()(),u.sb(44,0,null,null,0,"i",[["class","fa fa-fw fa-power-off"]],null,null,null,null,null)),(n()(),u.Jb(45,null,[" "," "])),u.Eb(131072,i.i,[i.j,u.h])],function(n,l){n(l,16,0);var t=n(l,43,0,"/login");n(l,42,0,t)},function(n,l){n(l,7,0,u.Cb(l,11).ngClassUntouched,u.Cb(l,11).ngClassTouched,u.Cb(l,11).ngClassPristine,u.Cb(l,11).ngClassDirty,u.Cb(l,11).ngClassValid,u.Cb(l,11).ngClassInvalid,u.Cb(l,11).ngClassPending),n(l,12,0,u.ub(1,"",u.Kb(l,12,0,u.Cb(l,13).transform("Search")),"")),n(l,15,0,u.Cb(l,16).isOpen()),n(l,20,0,u.Cb(l,21).dropdown.isOpen()),n(l,26,0,!0,u.Cb(l,27).dropdown.isOpen(),u.Cb(l,27).placement),n(l,31,0,u.Kb(l,31,0,u.Cb(l,32).transform("Profile"))),n(l,35,0,u.Kb(l,35,0,u.Cb(l,36).transform("Inbox"))),n(l,39,0,u.Kb(l,39,0,u.Cb(l,40).transform("Settings"))),n(l,41,0,u.Cb(l,42).target,u.Cb(l,42).href),n(l,45,0,u.Kb(l,45,0,u.Cb(l,46).transform("Log Out")))})}var p=function(){function n(n,l){var t=this;this.translate=n,this.router=l,this.collapsedEvent=new u.m,this.router.events.subscribe(function(n){n instanceof c.d&&window.innerWidth<=992&&t.isToggled()&&t.toggleSidebar()}),this.loginType=localStorage.getItem("loginType")}return n.prototype.ngOnInit=function(){this.isActive=!1,this.collapsed=!1,this.showMenu="",this.pushRightClass="push-right"},n.prototype.eventCalled=function(){this.isActive=!this.isActive},n.prototype.addExpandClass=function(n){this.showMenu=n===this.showMenu?"0":n},n.prototype.toggleCollapsed=function(){this.collapsed=!this.collapsed,this.collapsedEvent.emit(this.collapsed)},n.prototype.isToggled=function(){return document.querySelector("body").classList.contains(this.pushRightClass)},n.prototype.toggleSidebar=function(){document.querySelector("body").classList.toggle(this.pushRightClass)},n.prototype.rltAndLtr=function(){document.querySelector("body").classList.toggle("rtl")},n.prototype.changeLang=function(n){this.translate.use(n)},n.prototype.onLoggedout=function(){localStorage.removeItem("isLoggedin")},n}(),f=u.qb({encapsulation:0,styles:[[".sidebar[_ngcontent-%COMP%]{border-radius:0;position:fixed;z-index:1000;top:56px;left:235px;width:235px;margin-left:-235px;margin-bottom:48px;border:none;overflow-y:auto;background-color:#222;bottom:0;overflow-x:hidden;padding-bottom:40px;white-space:nowrap;transition:all .2s ease-in-out}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]{background:#222;border:0;border-radius:0;color:#5c5b5b;text-decoration:none}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{margin-right:10px}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.router-link-active[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#151515;color:#fff}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%]{padding-top:10px}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%] > .list-group-item[_ngcontent-%COMP%]:first-child{border-top:1px solid rgba(255,255,255,.2)}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus{border-radius:none;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]{font-size:1rem;height:50px;margin-bottom:0}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999;text-decoration:none;font-weight:400;background:#222}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;display:block;padding:1rem 1.5rem .75rem}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;outline:0;outline-offset:-2px}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]:hover{background:#151515}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]{border-radious:0;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{border-radius:0;background-color:#222;border:0 solid transparent}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover{background:#151515}.nested-menu[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{cursor:pointer}.nested-menu[_ngcontent-%COMP%]   .nested[_ngcontent-%COMP%]{list-style-type:none}.nested-menu[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:none;height:0}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:block;list-style-type:none;height:auto}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;padding:10px;display:block}@media screen and (max-width:992px){.sidebar[_ngcontent-%COMP%]{top:54px;left:0}}@media print{.sidebar[_ngcontent-%COMP%]{display:none!important}}@media (min-width:992px){.header-fields[_ngcontent-%COMP%]{display:none}}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 0 #fff;border-radius:3px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:3px;-webkit-box-shadow:inset 0 0 3px #fff}.toggle-button[_ngcontent-%COMP%]{position:fixed;width:236px;cursor:pointer;padding:12px;bottom:0;color:#999;background:#212529;border-top:1px solid #999;transition:all .2s ease-in-out}.toggle-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:23px}.toggle-button[_ngcontent-%COMP%]:hover{background:#151515;color:#fff}.collapsed[_ngcontent-%COMP%]{width:60px}.collapsed[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}"]],data:{}});function C(n){return u.Lb(0,[(n()(),u.sb(0,0,null,null,39,"div",[["class","naviationItem"]],null,null,null,null,null)),(n()(),u.sb(1,0,null,null,26,"div",[["class","nested-menu"]],null,null,null,null,null)),(n()(),u.sb(2,0,null,null,5,"a",[["class","list-group-item"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.addExpandClass("pages")&&u),u},null,null)),(n()(),u.sb(3,0,null,null,0,"i",[["class","fa fa-plus"]],null,null,null,null,null)),(n()(),u.Jb(-1,null,["\xa0 "])),(n()(),u.sb(5,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),u.Jb(6,null,["",""])),u.Eb(131072,i.i,[i.j,u.h]),(n()(),u.sb(8,0,null,null,19,"li",[["class","nested"]],[[2,"expand",null]],null,null,null,null)),(n()(),u.sb(9,0,null,null,18,"ul",[["class","submenu"]],null,null,null,null,null)),(n()(),u.sb(10,0,null,null,8,"li",[],null,null,null,null,null)),(n()(),u.sb(11,0,null,null,7,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Cb(n,12).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u.rb(12,671744,null,0,c.o,[c.l,c.a,s.i],{routerLink:[0,"routerLink"]},null),u.Db(13,1),(n()(),u.sb(14,0,null,null,0,"i",[["class","fa fa-monument"]],null,null,null,null,null)),(n()(),u.Jb(-1,null,["\xa0 "])),(n()(),u.sb(16,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),u.Jb(17,null,["",""])),u.Eb(131072,i.i,[i.j,u.h]),(n()(),u.sb(19,0,null,null,8,"li",[],null,null,null,null,null)),(n()(),u.sb(20,0,null,null,7,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Cb(n,21).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u.rb(21,671744,null,0,c.o,[c.l,c.a,s.i],{routerLink:[0,"routerLink"]},null),u.Db(22,1),(n()(),u.sb(23,0,null,null,0,"i",[["class","fa fa-monument"]],null,null,null,null,null)),(n()(),u.Jb(-1,null,["\xa0 "])),(n()(),u.sb(25,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),u.Jb(26,null,["",""])),u.Eb(131072,i.i,[i.j,u.h]),(n()(),u.sb(28,0,null,null,11,"a",[["class","list-group-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Cb(n,29).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u.rb(29,671744,[[2,4]],0,c.o,[c.l,c.a,s.i],{routerLink:[0,"routerLink"]},null),u.Db(30,1),u.rb(31,1720320,null,2,c.n,[c.l,u.k,u.E,[2,c.m],[2,c.o]],{routerLinkActive:[0,"routerLinkActive"]},null),u.Hb(603979776,1,{links:1}),u.Hb(603979776,2,{linksWithHrefs:1}),u.Db(34,1),(n()(),u.sb(35,0,null,null,0,"i",[["class","fa fa-file-o"]],null,null,null,null,null)),(n()(),u.Jb(-1,null,["\xa0 "])),(n()(),u.sb(37,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),u.Jb(38,null,["",""])),u.Eb(131072,i.i,[i.j,u.h])],function(n,l){var t=n(l,13,0,"/newloan");n(l,12,0,t);var u=n(l,22,0,"/loanlist");n(l,21,0,u);var e=n(l,30,0,"/blank-page");n(l,29,0,e);var o=n(l,34,0,"router-link-active");n(l,31,0,o)},function(n,l){var t=l.component;n(l,6,0,u.Kb(l,6,0,u.Cb(l,7).transform("Loan Process"))),n(l,8,0,"pages"===t.showMenu),n(l,11,0,u.Cb(l,12).target,u.Cb(l,12).href),n(l,17,0,u.Kb(l,17,0,u.Cb(l,18).transform("New Application"))),n(l,20,0,u.Cb(l,21).target,u.Cb(l,21).href),n(l,26,0,u.Kb(l,26,0,u.Cb(l,27).transform("Loan Applications"))),n(l,28,0,u.Cb(l,29).target,u.Cb(l,29).href),n(l,38,0,u.Kb(l,38,0,u.Cb(l,39).transform("Morgage")))})}function h(n){return u.Lb(0,[(n()(),u.sb(0,0,null,null,19,"div",[["class","naviationItem"]],null,null,null,null,null)),(n()(),u.sb(1,0,null,null,7,"div",[["class","nested-menu"]],null,null,null,null,null)),(n()(),u.sb(2,0,null,null,6,"a",[["active",""],["class","list-group-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Cb(n,3).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u.rb(3,671744,null,0,c.o,[c.l,c.a,s.i],{routerLink:[0,"routerLink"]},null),u.Db(4,1),(n()(),u.sb(5,0,null,null,0,"i",[["class","fa fa-plus"]],null,null,null,null,null)),(n()(),u.Jb(-1,null,["\xa0 "])),(n()(),u.sb(7,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u.Jb(8,null,["",""])),(n()(),u.sb(9,0,null,null,10,"a",[["class","list-group-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Cb(n,10).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u.rb(10,671744,[[4,4]],0,c.o,[c.l,c.a,s.i],{routerLink:[0,"routerLink"]},null),u.Db(11,1),u.rb(12,1720320,null,2,c.n,[c.l,u.k,u.E,[2,c.m],[2,c.o]],{routerLinkActive:[0,"routerLinkActive"]},null),u.Hb(603979776,3,{links:1}),u.Hb(603979776,4,{linksWithHrefs:1}),u.Db(15,1),(n()(),u.sb(16,0,null,null,0,"i",[["class","fa fa-file-o"]],null,null,null,null,null)),(n()(),u.Jb(-1,null,["\xa0 "])),(n()(),u.sb(18,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u.Jb(19,null,["",""]))],function(n,l){var t=n(l,4,0,"/allapplications");n(l,3,0,t);var u=n(l,11,0,"/blank-page");n(l,10,0,u);var e=n(l,15,0,"router-link-active");n(l,12,0,e)},function(n,l){n(l,2,0,u.Cb(l,3).target,u.Cb(l,3).href),n(l,8,0,"All Loan Applications"),n(l,9,0,u.Cb(l,10).target,u.Cb(l,10).href),n(l,19,0,"Morgage Applications")})}function m(n){return u.Lb(0,[(n()(),u.sb(0,0,null,null,45,"nav",[["class","sidebar"]],null,null,null,null,null)),u.Gb(512,null,s.y,s.z,[u.t,u.u,u.k,u.E]),u.rb(2,278528,null,0,s.j,[s.y],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u.Fb(3,{sidebarPushRight:0,collapsed:1}),(n()(),u.sb(4,0,null,null,32,"div",[["class","list-group"]],null,null,null,null,null)),(n()(),u.hb(16777216,null,null,1,null,C)),u.rb(6,16384,null,0,s.l,[u.P,u.M],{ngIf:[0,"ngIf"]},null),(n()(),u.hb(16777216,null,null,1,null,h)),u.rb(8,16384,null,0,s.l,[u.P,u.M],{ngIf:[0,"ngIf"]},null),(n()(),u.sb(9,0,null,null,27,"div",[["class","header-fields"]],null,null,null,null,null)),(n()(),u.sb(10,0,null,null,26,"div",[["class","nested-menu"]],null,null,null,null,null)),(n()(),u.sb(11,0,null,null,3,"a",[["class","list-group-item"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.addExpandClass("profile")&&u),u},null,null)),(n()(),u.sb(12,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),u.sb(13,0,null,null,0,"i",[["class","fa fa-user"]],null,null,null,null,null)),(n()(),u.Jb(-1,null,["\xa0 User00"])),(n()(),u.sb(15,0,null,null,21,"li",[["class","nested"]],[[2,"expand",null]],null,null,null,null)),(n()(),u.sb(16,0,null,null,20,"ul",[["class","submenu"]],null,null,null,null,null)),(n()(),u.sb(17,0,null,null,5,"li",[],null,null,null,null,null)),(n()(),u.sb(18,0,null,null,4,"a",[["href","javascript:void(0)"]],null,null,null,null,null)),(n()(),u.sb(19,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),u.sb(20,0,null,null,0,"i",[["class","fa fa-fw fa-user"]],null,null,null,null,null)),(n()(),u.Jb(21,null,[" ",""])),u.Eb(131072,i.i,[i.j,u.h]),(n()(),u.sb(23,0,null,null,5,"li",[],null,null,null,null,null)),(n()(),u.sb(24,0,null,null,4,"a",[["href","javascript:void(0)"]],null,null,null,null,null)),(n()(),u.sb(25,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),u.sb(26,0,null,null,0,"i",[["class","fa fa-fw fa-gear"]],null,null,null,null,null)),(n()(),u.Jb(27,null,[" ",""])),u.Eb(131072,i.i,[i.j,u.h]),(n()(),u.sb(29,0,null,null,7,"li",[],null,null,null,null,null)),(n()(),u.sb(30,0,null,null,6,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==u.Cb(n,31).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),"click"===l&&(e=!1!==o.onLoggedout()&&e),e},null,null)),u.rb(31,671744,null,0,c.o,[c.l,c.a,s.i],{routerLink:[0,"routerLink"]},null),u.Db(32,1),(n()(),u.sb(33,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),u.sb(34,0,null,null,0,"i",[["class","fa fa-fw fa-power-off"]],null,null,null,null,null)),(n()(),u.Jb(35,null,[" ",""])),u.Eb(131072,i.i,[i.j,u.h]),(n()(),u.sb(37,0,null,null,8,"div",[["class","toggle-button"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.toggleCollapsed()&&u),u},null,null)),u.Gb(512,null,s.y,s.z,[u.t,u.u,u.k,u.E]),u.rb(39,278528,null,0,s.j,[s.y],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u.Fb(40,{collapsed:0}),(n()(),u.sb(41,0,null,null,0,"i",[],[[8,"className",0]],null,null,null,null)),(n()(),u.Jb(-1,null,["\xa0 "])),(n()(),u.sb(43,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),u.Jb(44,null,["",""])),u.Eb(131072,i.i,[i.j,u.h])],function(n,l){var t=l.component,u=n(l,3,0,t.isActive,t.collapsed);n(l,2,0,"sidebar",u),n(l,6,0,"1"===t.loginType),n(l,8,0,"2"===t.loginType);var e=n(l,32,0,"/login");n(l,31,0,e);var o=n(l,40,0,t.collapsed);n(l,39,0,"toggle-button",o)},function(n,l){var t=l.component;n(l,15,0,"profile"===t.showMenu),n(l,21,0,u.Kb(l,21,0,u.Cb(l,22).transform("Profile"))),n(l,27,0,u.Kb(l,27,0,u.Cb(l,28).transform("Settings"))),n(l,30,0,u.Cb(l,31).target,u.Cb(l,31).href),n(l,35,0,u.Kb(l,35,0,u.Cb(l,36).transform("Log Out"))),n(l,41,0,u.ub(1,"fa fa-fw fa-angle-double-",t.collapsed?"right":"left","")),n(l,44,0,u.Kb(l,44,0,u.Cb(l,45).transform("Collapse Sidebar")))})}var M=function(){function n(){}return n.prototype.ngOnInit=function(){},n.prototype.receiveCollapsed=function(n){this.collapedSideBar=n},n}(),P=u.qb({encapsulation:0,styles:[["*[_ngcontent-%COMP%]{transition:margin-left .2s ease-in-out}.main-container[_ngcontent-%COMP%]{margin-top:56px;margin-left:235px;padding:15px;-ms-overflow-x:hidden;overflow-x:hidden;overflow-y:scroll;position:relative;overflow:hidden}.collapsed[_ngcontent-%COMP%]{margin-left:60px}@media screen and (max-width:992px){.main-container[_ngcontent-%COMP%]{margin-left:0!important}}@media print{.main-container[_ngcontent-%COMP%]{margin-top:0!important;margin-left:0!important}}"]],data:{}});function O(n){return u.Lb(0,[(n()(),u.sb(0,0,null,null,1,"app-header",[],null,null,null,g,d)),u.rb(1,114688,null,0,b,[i.j,c.l],null,null),(n()(),u.sb(2,0,null,null,1,"app-sidebar",[],null,[[null,"collapsedEvent"]],function(n,l,t){var u=!0;return"collapsedEvent"===l&&(u=!1!==n.component.receiveCollapsed(t)&&u),u},m,f)),u.rb(3,114688,null,0,p,[i.j,c.l],null,{collapsedEvent:"collapsedEvent"}),(n()(),u.sb(4,0,null,null,5,"section",[["class","main-container"]],null,null,null,null,null)),u.Gb(512,null,s.y,s.z,[u.t,u.u,u.k,u.E]),u.rb(6,278528,null,0,s.j,[s.y],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u.Fb(7,{collapsed:0}),(n()(),u.sb(8,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),u.rb(9,212992,null,0,c.q,[c.b,u.P,u.j,[8,null],u.h],null,null)],function(n,l){var t=l.component;n(l,1,0),n(l,3,0);var u=n(l,7,0,t.collapedSideBar);n(l,6,0,"main-container",u),n(l,9,0)},null)}function _(n){return u.Lb(0,[(n()(),u.sb(0,0,null,null,1,"app-layout",[],null,null,null,O,P)),u.rb(1,114688,null,0,M,[],null,null)],function(n,l){n(l,1,0)},null)}var w=u.ob("app-layout",M,_,{},{},[]),y=t("akr8"),v=function(){return Promise.all([t.e(0),t.e(14)]).then(t.bind(null,"UE8e")).then(function(n){return n.DashboardModuleNgFactory})},k=function(){return Promise.all([t.e(1),t.e(7)]).then(t.bind(null,"rYty")).then(function(n){return n.ChartsModuleNgFactory})},x=function(){return Promise.all([t.e(1),t.e(19)]).then(t.bind(null,"TP0X")).then(function(n){return n.TablesModuleNgFactory})},L=function(){return Promise.all([t.e(0),t.e(1),t.e(13)]).then(t.bind(null,"WgX5")).then(function(n){return n.BsElementModuleNgFactory})},A=function(){return Promise.all([t.e(1),t.e(15)]).then(t.bind(null,"6OTL")).then(function(n){return n.GridModuleNgFactory})},K=function(){return Promise.all([t.e(0),t.e(1),t.e(12)]).then(t.bind(null,"oW3c")).then(function(n){return n.BsComponentModuleNgFactory})},E=function(){return t.e(11).then(t.bind(null,"LcBl")).then(function(n){return n.BlankPageModuleNgFactory})},j=function(){return t.e(9).then(t.bind(null,"cMrq")).then(function(n){return n.NewLoanApplicationModuleNgFactory})},D=function(){return Promise.all([t.e(0),t.e(3),t.e(16)]).then(t.bind(null,"f75s")).then(function(n){return n.ListOfLoanApplicationModuleNgFactory})},J=function(){return t.e(17).then(t.bind(null,"mWzg")).then(function(n){return n.LoanStatusModuleNgFactory})},S=function(){return Promise.all([t.e(0),t.e(3),t.e(18)]).then(t.bind(null,"Nisq")).then(function(n){return n.AllApplicationsModuleNgFactory})},I=function(){return function(){}}();t.d(l,"LayoutModuleNgFactory",function(){return N});var N=u.pb(e,[],function(n){return u.zb([u.Ab(512,u.j,u.cb,[[8,[o.a,w]],[3,u.j],u.y]),u.Ab(4608,s.n,s.m,[u.v,[2,s.B]]),u.Ab(4608,a.x,a.x,[]),u.Ab(4608,y.a,y.a,[]),u.Ab(1073742336,s.b,s.b,[]),u.Ab(1073742336,c.p,c.p,[[2,c.u],[2,c.l]]),u.Ab(1073742336,I,I,[]),u.Ab(1073742336,i.g,i.g,[]),u.Ab(1073742336,r.z,r.z,[]),u.Ab(1073742336,a.w,a.w,[]),u.Ab(1073742336,a.i,a.i,[]),u.Ab(1073742336,e,e,[]),u.Ab(1024,c.j,function(){return[[{path:"",component:M,children:[{path:"",redirectTo:"dashboard",pathMatch:"prefix"},{path:"dashboard",loadChildren:v},{path:"charts",loadChildren:k},{path:"tables",loadChildren:x},{path:"bs-element",loadChildren:L},{path:"grid",loadChildren:A},{path:"components",loadChildren:K},{path:"blank-page",loadChildren:E},{path:"newloan",loadChildren:j},{path:"loanlist",loadChildren:D},{path:"loanstatus",loadChildren:J},{path:"allapplications",loadChildren:S}]}]]},[])])})},akr8:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){return function(){}}()}}]);