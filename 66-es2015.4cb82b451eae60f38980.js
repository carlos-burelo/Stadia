(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{vuQK:function(n,t,e){"use strict";e.r(t),e.d(t,"SearchPageModule",function(){return _});var i=e("ofXK"),o=e("3Pt+"),r=e("TEn/"),c=e("tyNb"),s=e("fXoL"),a=e("UfqK");function l(n,t){1&n&&(s.Lb(0,"div",7),s.Jb(1,"img",8),s.Lb(2,"p"),s.hc(3,"No hay resultados"),s.Kb(),s.Kb())}const u=function(n){return["/anime",n]};function b(n,t){if(1&n&&(s.Lb(0,"div",9),s.Lb(1,"div",10),s.Jb(2,"img",11),s.Lb(3,"div",12),s.hc(4),s.Kb(),s.Kb(),s.Kb()),2&n){const n=t.$implicit;s.Yb("routerLink",s.ac(3,u,n.id)),s.yb(2),s.Yb("src",n.img,s.ec),s.yb(2),s.ic(n.title)}}function d(n,t){if(1&n&&(s.Lb(0,"div",3),s.Lb(1,"div",4),s.gc(2,l,4,0,"div",5),s.gc(3,b,5,5,"div",6),s.Kb(),s.Kb()),2&n){const n=s.Vb();s.yb(2),s.Yb("ngIf",0==(null==n.result?null:n.result.animes)),s.yb(1),s.Yb("ngForOf",null==n.result?null:n.result.animes)}}const g=function(n){return["/gender",n]};function f(n,t){if(1&n&&(s.Lb(0,"button",15),s.hc(1),s.Kb()),2&n){const n=t.$implicit;s.Yb("routerLink",s.ac(2,g,n.id)),s.yb(1),s.ic(n.title)}}function p(n,t){if(1&n&&(s.Lb(0,"div",13),s.gc(1,f,2,4,"button",14),s.Kb()),2&n){const n=s.Vb();s.yb(1),s.Yb("ngForOf",null==n.genders?null:n.genders.genders)}}const h=[{path:"",component:(()=>{class n{constructor(n){this.apiSvc=n,this.rContainer=!1}ngOnInit(){this.getGender()}searchAnime(n){this.rContainer=!0,this.word=n.srcElement.value,this.word=this.word.replace(/ /gi,"+"),console.log(this.word),this.apiSvc.searchAnime(this.word).subscribe(n=>{this.result=n,console.log(this.result)})}getGender(){this.apiSvc.getGenders().subscribe(n=>{this.genders=n})}}return n.\u0275fac=function(t){return new(t||n)(s.Ib(a.a))},n.\u0275cmp=s.Cb({type:n,selectors:[["app-search"]],decls:6,vars:2,consts:[["showCancelButton","focus","debounce","1500",3,"ionChange"],["class","results_container",4,"ngIf"],["class","search_off",4,"ngIf"],[1,"results_container"],[1,"anime_container"],["class","not_results",4,"ngIf"],["class","anime_card",3,"routerLink",4,"ngFor","ngForOf"],[1,"not_results"],["src","../../../assets/src/not_found.gif","alt","Not Found"],[1,"anime_card",3,"routerLink"],[1,"portada"],[3,"src"],[1,"anime_name"],[1,"search_off"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(n,t){1&n&&(s.Lb(0,"ion-header"),s.Lb(1,"ion-toolbar"),s.Lb(2,"ion-searchbar",0),s.Tb("ionChange",function(n){return t.searchAnime(n)}),s.Kb(),s.Kb(),s.Kb(),s.Lb(3,"ion-content"),s.gc(4,d,4,2,"div",1),s.gc(5,p,2,1,"div",2),s.Kb()),2&n&&(s.yb(4),s.Yb("ngIf",1==t.rContainer),s.yb(1),s.Yb("ngIf",0==t.rContainer))},directives:[r.f,r.t,r.o,r.y,r.e,i.i,i.h,r.x,c.h],styles:[".anime_container[_ngcontent-%COMP%]{display:flex;position:relative;flex-wrap:wrap;align-items:center}.anime_card[_ngcontent-%COMP%]{width:calc(33.333333% - 20px);margin:10px;display:block}.anime_card[_ngcontent-%COMP%]   .portada[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:5px;-o-object-fit:cover;object-fit:cover;width:100%;cursor:pointer}.anime_card[_ngcontent-%COMP%]   .anime_name[_ngcontent-%COMP%]{position:relative;bottom:0;font-size:12px;height:20px;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.not_results[_ngcontent-%COMP%]{width:100%;height:100%;position:fixed;top:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.not_results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font-size:24px}.not_results[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:200px}.search_off[_ngcontent-%COMP%]{width:93%;margin:auto;margin-top:25px;display:flex;align-items:center;flex-wrap:wrap}.search_off[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:none;border-radius:10px;background-color:#151515;padding:8px 15px;margin:5px}"]}),n})()}];let m=(()=>{class n{}return n.\u0275mod=s.Gb({type:n}),n.\u0275inj=s.Fb({factory:function(t){return new(t||n)},imports:[[c.i.forChild(h)],c.i]}),n})(),_=(()=>{class n{}return n.\u0275mod=s.Gb({type:n}),n.\u0275inj=s.Fb({factory:function(t){return new(t||n)},imports:[[i.b,o.a,r.u,m]]}),n})()}}]);