!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var i=0;i<e.length;i++){var t=e[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"1ZBK":function(i,t,o){"use strict";o.r(t),o.d(t,"EmisionPageModule",function(){return L});var c=o("ofXK"),a=o("3Pt+"),r=o("TEn/"),b=o("tyNb"),s=o("fXoL"),u=o("UfqK"),f=function(n){return["/anime",n]};function g(n,e){if(1&n&&(s.Lb(0,"div",5),s.Lb(1,"div",6),s.Jb(2,"img",7),s.Lb(3,"div",8),s.hc(4),s.Kb(),s.Lb(5,"div",9),s.hc(6),s.Lb(7,"mark"),s.hc(8),s.Kb(),s.Kb(),s.Kb(),s.Kb()),2&n){var i=e.$implicit;s.Yb("routerLink",s.ac(5,f,i.id)),s.yb(2),s.Yb("src",i.img,s.ec),s.yb(2),s.ic(i.title),s.yb(2),s.jc("",i.category," "),s.yb(2),s.ic(i.year)}}function l(n,e){if(1&n&&(s.Lb(0,"div",5),s.Lb(1,"div",6),s.Jb(2,"img",7),s.Lb(3,"div",8),s.hc(4),s.Kb(),s.Lb(5,"div",9),s.hc(6),s.Lb(7,"mark"),s.hc(8),s.Kb(),s.Kb(),s.Kb(),s.Kb()),2&n){var i=e.$implicit;s.Yb("routerLink",s.ac(5,f,i.id)),s.yb(2),s.Yb("src",i.img,s.ec),s.yb(2),s.ic(i.title),s.yb(2),s.jc("",i.category," "),s.yb(2),s.ic(i.year)}}function p(n,e){if(1&n&&(s.Lb(0,"div",5),s.Lb(1,"div",6),s.Jb(2,"img",7),s.Lb(3,"div",8),s.hc(4),s.Kb(),s.Lb(5,"div",9),s.hc(6),s.Lb(7,"mark"),s.hc(8),s.Kb(),s.Kb(),s.Kb(),s.Kb()),2&n){var i=e.$implicit;s.Yb("routerLink",s.ac(5,f,i.id)),s.yb(2),s.Yb("src",i.img,s.ec),s.yb(2),s.ic(i.title),s.yb(2),s.jc("",i.category," "),s.yb(2),s.ic(i.year)}}var d,m,h,v=[{path:"",component:(d=function(){function i(e){n(this,i),this.apiSvc=e}var t,o,c;return t=i,(o=[{key:"ngOnInit",value:function(){this.getPage1(),this.getPage2(),this.getPage3()}},{key:"getPage1",value:function(){var n=this;this.apiSvc.getEmision(1).subscribe(function(e){n.page1=e})}},{key:"getPage2",value:function(){var n=this;this.apiSvc.getEmision(2).subscribe(function(e){n.page2=e})}},{key:"getPage3",value:function(){var n=this;this.apiSvc.getEmision(3).subscribe(function(e){n.page3=e})}},{key:"doRefresh",value:function(n){var e=this;setTimeout(function(){e.getPage1(),e.getPage2(),e.getPage3(),n.target.complete()})}}])&&e(t.prototype,o),c&&e(t,c),i}(),d.\u0275fac=function(n){return new(n||d)(s.Ib(u.a))},d.\u0275cmp=s.Cb({type:d,selectors:[["app-emision"]],decls:14,vars:3,consts:[["slot","start"],["defaultHref","directory"],["slot","fixed","pullFactor","0.8","pullMin","60","pullMax","120",3,"ionRefresh"],[1,"anime_container"],["class","anime_card",3,"routerLink",4,"ngFor","ngForOf"],[1,"anime_card",3,"routerLink"],[1,"portada"],[3,"src"],[1,"anime_name"],[1,"anime_info"]],template:function(n,e){1&n&&(s.Lb(0,"ion-header"),s.Lb(1,"ion-toolbar"),s.Lb(2,"ion-buttons",0),s.Jb(3,"ion-back-button",1),s.Kb(),s.Lb(4,"ion-title"),s.hc(5,"Emision"),s.Kb(),s.Kb(),s.Kb(),s.Lb(6,"ion-content"),s.Lb(7,"ion-refresher",2),s.Tb("ionRefresh",function(n){return e.doRefresh(n)}),s.Jb(8,"ion-refresher-content"),s.Kb(),s.Lb(9,"ion-content"),s.Lb(10,"div",3),s.gc(11,g,9,7,"div",4),s.gc(12,l,9,7,"div",4),s.gc(13,p,9,7,"div",4),s.Kb(),s.Kb(),s.Kb()),2&n&&(s.yb(11),s.Yb("ngForOf",null==e.page1?null:e.page1.animes),s.yb(1),s.Yb("ngForOf",null==e.page2?null:e.page2.animes),s.yb(1),s.Yb("ngForOf",null==e.page3?null:e.page3.animes))},directives:[r.h,r.x,r.f,r.c,r.d,r.w,r.g,r.n,r.o,c.h,r.B,b.h],styles:[".anime_container[_ngcontent-%COMP%]{flex-wrap:wrap;justify-content:center}.anime_container[_ngcontent-%COMP%], .anime_info[_ngcontent-%COMP%]{display:flex;position:relative;align-items:center}.anime_info[_ngcontent-%COMP%]{bottom:0;font-size:12px;height:20px;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;justify-content:space-between}.anime_info[_ngcontent-%COMP%]   mark[_ngcontent-%COMP%]{background-color:hsla(0,0%,100%,.7686274509803922);color:#000;padding:1px 6px;border-radius:10px}.anime_card[_ngcontent-%COMP%]{width:calc(33.333333% - 20px);margin:10px;outline:none;display:block}.anime_card[_ngcontent-%COMP%]   .portada[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:5px;-o-object-fit:cover;object-fit:cover;width:100%;cursor:pointer}.anime_card[_ngcontent-%COMP%]   .anime_name[_ngcontent-%COMP%]{position:relative;bottom:0;font-size:12px;height:20px;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]}),d)}],y=((h=function e(){n(this,e)}).\u0275mod=s.Gb({type:h}),h.\u0275inj=s.Fb({factory:function(n){return new(n||h)},imports:[[b.i.forChild(v)],b.i]}),h),L=((m=function e(){n(this,e)}).\u0275mod=s.Gb({type:m}),m.\u0275inj=s.Fb({factory:function(n){return new(n||m)},imports:[[c.b,a.a,r.y,y]]}),m)}}])}();