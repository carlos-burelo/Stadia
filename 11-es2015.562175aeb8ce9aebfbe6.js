(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"1ZBK":function(i,n,t){"use strict";t.r(n),t.d(n,"EmisionPageModule",(function(){return u}));var e=t("ofXK"),o=t("3Pt+"),c=t("TEn/"),r=t("tyNb"),a=t("fXoL"),b=t("UfqK");const s=function(i){return["/anime",i]};function g(i,n){if(1&i&&(a.Jb(0,"div",2),a.Jb(1,"div",3),a.Hb(2,"img",4),a.Jb(3,"div",5),a.fc(4),a.Ib(),a.Ib(),a.Ib()),2&i){const i=n.$implicit;a.Wb("routerLink",a.Yb(3,s,i.id)),a.wb(2),a.Wb("src",i.img,a.cc),a.wb(2),a.gc(i.title)}}function p(i,n){if(1&i&&(a.Jb(0,"div",2),a.Jb(1,"div",3),a.Hb(2,"img",4),a.Jb(3,"div",5),a.fc(4),a.Ib(),a.Ib(),a.Ib()),2&i){const i=n.$implicit;a.Wb("routerLink",a.Yb(3,s,i.id)),a.wb(2),a.Wb("src",i.img,a.cc),a.wb(2),a.gc(i.title)}}function l(i,n){if(1&i&&(a.Jb(0,"div",2),a.Jb(1,"div",3),a.Hb(2,"img",4),a.Jb(3,"div",5),a.fc(4),a.Ib(),a.Ib(),a.Ib()),2&i){const i=n.$implicit;a.Wb("routerLink",a.Yb(3,s,i.id)),a.wb(2),a.Wb("src",i.img,a.cc),a.wb(2),a.gc(i.title)}}const d=[{path:"",component:(()=>{class i{constructor(i){this.apiSvc=i}ngOnInit(){this.getPage1(),this.getPage2(),this.getPage3()}getPage1(){this.apiSvc.getEmision(1).subscribe(i=>{this.page1=i})}getPage2(){this.apiSvc.getEmision(2).subscribe(i=>{this.page2=i})}getPage3(){this.apiSvc.getEmision(3).subscribe(i=>{this.page3=i})}}return i.\u0275fac=function(n){return new(n||i)(a.Gb(b.a))},i.\u0275cmp=a.Ab({type:i,selectors:[["app-emision"]],decls:9,vars:3,consts:[[1,"anime_container"],["class","anime_card",3,"routerLink",4,"ngFor","ngForOf"],[1,"anime_card",3,"routerLink"],[1,"portada"],[3,"src"],[1,"anime_name"]],template:function(i,n){1&i&&(a.Jb(0,"ion-header"),a.Jb(1,"ion-toolbar"),a.Jb(2,"ion-title"),a.fc(3,"Emision"),a.Ib(),a.Ib(),a.Ib(),a.Jb(4,"ion-content"),a.Jb(5,"div",0),a.ec(6,g,5,5,"div",1),a.ec(7,p,5,5,"div",1),a.ec(8,l,5,5,"div",1),a.Ib(),a.Ib()),2&i&&(a.wb(6),a.Wb("ngForOf",null==n.page1?null:n.page1.animes),a.wb(1),a.Wb("ngForOf",null==n.page2?null:n.page2.animes),a.wb(1),a.Wb("ngForOf",null==n.page3?null:n.page3.animes))},directives:[c.f,c.t,c.s,c.e,e.h,c.y,r.h],styles:[".anime_container[_ngcontent-%COMP%]{display:flex;position:relative;flex-wrap:wrap;justify-content:center;align-items:center}.anime_card[_ngcontent-%COMP%]{width:calc(33.333333% - 20px);margin:10px;outline:none;display:block}.anime_card[_ngcontent-%COMP%]   .portada[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:5px;-o-object-fit:cover;object-fit:cover;width:100%;cursor:pointer}.anime_card[_ngcontent-%COMP%]   .anime_name[_ngcontent-%COMP%]{position:relative;bottom:0;font-size:12px;height:20px;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]}),i})()}];let m=(()=>{class i{}return i.\u0275mod=a.Eb({type:i}),i.\u0275inj=a.Db({factory:function(n){return new(n||i)},imports:[[r.i.forChild(d)],r.i]}),i})(),u=(()=>{class i{}return i.\u0275mod=a.Eb({type:i}),i.\u0275inj=a.Db({factory:function(n){return new(n||i)},imports:[[e.b,o.a,c.u,m]]}),i})()}}]);