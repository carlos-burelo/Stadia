(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{CnhE:function(n,t,i){"use strict";i.r(t),i.d(t,"DirectoryPageModule",(function(){return C}));var e=i("ofXK"),o=i("3Pt+"),c=i("TEn/"),r=i("tyNb"),s=i("mrSG"),a=i("fXoL"),b=i("UfqK");const g=function(n){return["/anime",n]};function l(n,t){if(1&n&&(a.Jb(0,"div",16),a.Hb(1,"img",17),a.Jb(2,"div",18),a.fc(3),a.Ib(),a.Ib()),2&n){const n=t.$implicit;a.Wb("routerLink",a.Yb(3,g,n.id)),a.wb(1),a.Wb("src",n.img,a.cc),a.wb(2),a.gc(n.title)}}function d(n,t){if(1&n&&(a.Jb(0,"div",16),a.Hb(1,"img",17),a.Jb(2,"div",18),a.fc(3),a.Ib(),a.Ib()),2&n){const n=t.$implicit;a.Wb("routerLink",a.Yb(3,g,n.id)),a.wb(1),a.Wb("src",n.img,a.cc),a.wb(2),a.gc(n.title)}}function _(n,t){if(1&n&&(a.Jb(0,"div",16),a.Hb(1,"img",17),a.Jb(2,"div",18),a.fc(3),a.Ib(),a.Ib()),2&n){const n=t.$implicit;a.Wb("routerLink",a.Yb(3,g,n.id)),a.wb(1),a.Wb("src",n.img,a.cc),a.wb(2),a.gc(n.title)}}function m(n,t){if(1&n&&(a.Jb(0,"div",16),a.Hb(1,"img",17),a.Jb(2,"div",18),a.fc(3),a.Ib(),a.Ib()),2&n){const n=t.$implicit;a.Wb("routerLink",a.Yb(3,g,n.id)),a.wb(1),a.Wb("src",n.img,a.cc),a.wb(2),a.gc(n.title)}}const u=function(){return["/category/pelicula"]},f=function(){return["/category/ova"]},p=function(){return["/category/anime"]},v=[{path:"",component:(()=>{class n{constructor(n,t){this.apiSvc=n,this.loadingController=t,this.page=0}ngOnInit(){this.presentLoading("Getting data"),this.getOvas(),this.getLastest(),this.getMovies(),this.getAnimes()}getLastest(){this.page=this.page+1,this.apiSvc.getEmision(this.page).subscribe(n=>{this.emision=n})}getMovies(){this.apiSvc.getCategory("pelicula",this.page).subscribe(n=>{this.movies=n})}getOvas(){this.apiSvc.getCategory("ova",1).subscribe(n=>{this.ovas=n})}getAnimes(){this.apiSvc.getCategory("anime",1).subscribe(n=>{this.anime=n})}presentLoading(n){return Object(s.a)(this,void 0,void 0,(function*(){const t=yield this.loadingController.create({cssClass:"my-custom-class",message:n,duration:1500});return yield t.present()}))}}return n.\u0275fac=function(t){return new(t||n)(a.Gb(b.a),a.Gb(c.w))},n.\u0275cmp=a.Ab({type:n,selectors:[["app-directory"]],decls:49,vars:10,consts:[[1,"emision_container"],[1,"section_directory"],[1,"title_section"],["name","flame"],["color","light","routerLink","/emision","slot","end"],["name","caret-forward"],[1,"slider"],[1,"slides"],["class","emision_card",3,"routerLink",4,"ngFor","ngForOf"],[1,"movies_container"],["name","film"],["color","light","slot","end",3,"routerLink"],[1,"ovas_container"],["name","videocam"],[1,"animes_container"],["name","happy"],[1,"emision_card",3,"routerLink"],[1,"img_capture",3,"src"],[1,"text_capture"]],template:function(n,t){1&n&&(a.Jb(0,"ion-header"),a.Jb(1,"ion-toolbar"),a.Jb(2,"ion-title"),a.fc(3,"Directory"),a.Ib(),a.Ib(),a.Ib(),a.Jb(4,"ion-content"),a.Jb(5,"div",0),a.Jb(6,"div",1),a.Jb(7,"div",2),a.Hb(8,"ion-icon",3),a.fc(9," Emision"),a.Ib(),a.Jb(10,"ion-button",4),a.Hb(11,"ion-icon",5),a.fc(12," Ver mas"),a.Ib(),a.Ib(),a.Jb(13,"div",6),a.Jb(14,"div",7),a.ec(15,l,4,5,"div",8),a.Ib(),a.Ib(),a.Ib(),a.Jb(16,"div",9),a.Jb(17,"div",1),a.Jb(18,"div",2),a.Hb(19,"ion-icon",10),a.fc(20," Peliculas"),a.Ib(),a.Jb(21,"ion-button",11),a.Hb(22,"ion-icon",5),a.fc(23," Ver mas"),a.Ib(),a.Ib(),a.Jb(24,"div",6),a.Jb(25,"div",7),a.ec(26,d,4,5,"div",8),a.Ib(),a.Ib(),a.Ib(),a.Jb(27,"div",12),a.Jb(28,"div",1),a.Jb(29,"div",2),a.Hb(30,"ion-icon",10),a.fc(31," Ovas"),a.Ib(),a.Jb(32,"ion-button",11),a.Hb(33,"ion-icon",13),a.fc(34," Ver mas"),a.Ib(),a.Ib(),a.Jb(35,"div",6),a.Jb(36,"div",7),a.ec(37,_,4,5,"div",8),a.Ib(),a.Ib(),a.Ib(),a.Jb(38,"div",14),a.Jb(39,"div",1),a.Jb(40,"div",2),a.Hb(41,"ion-icon",10),a.fc(42," Animes"),a.Ib(),a.Jb(43,"ion-button",11),a.Hb(44,"ion-icon",15),a.fc(45," Ver mas "),a.Ib(),a.Ib(),a.Jb(46,"div",6),a.Jb(47,"div",7),a.ec(48,m,4,5,"div",8),a.Ib(),a.Ib(),a.Ib(),a.Ib()),2&n&&(a.wb(15),a.Wb("ngForOf",null==t.emision?null:t.emision.animes),a.wb(6),a.Wb("routerLink",a.Xb(7,u)),a.wb(5),a.Wb("ngForOf",null==t.movies?null:t.movies.animes),a.wb(6),a.Wb("routerLink",a.Xb(8,f)),a.wb(5),a.Wb("ngForOf",null==t.ovas?null:t.ovas.animes),a.wb(6),a.Wb("routerLink",a.Xb(9,p)),a.wb(5),a.Wb("ngForOf",null==t.anime?null:t.anime.animes))},directives:[c.f,c.t,c.s,c.e,c.g,c.c,c.y,r.h,e.h],styles:["ion-title[_ngcontent-%COMP%]{display:flex;align-items:center}ion-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#09f}.slides[_ngcontent-%COMP%]{display:flex;width:100%;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}.slides[_ngcontent-%COMP%]::-webkit-scrollbar{width:10px;height:10px;background:#000}.slides[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#000;border-radius:10px}.slides[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#000}.slides[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{scroll-snap-align:start;flex-shrink:0;width:26%;height:100%;margin:0 8px;border-radius:10px;background:#000;transform-origin:center center;transform:scale(1);transition:transform 1s;position:relative;display:flex;justify-content:center;align-items:center;font-size:100px}img.img_capture[_ngcontent-%COMP%]{width:100%;border-radius:5px}img.img_capture[_ngcontent-%COMP%]:focus{outline:none}.emision_container[_ngcontent-%COMP%]{width:92%;margin:auto}.emision_container[_ngcontent-%COMP%]   .section_directory[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.emision_container[_ngcontent-%COMP%]   .section_directory[_ngcontent-%COMP%]   .title_section[_ngcontent-%COMP%]{font-size:20px}.emision_container[_ngcontent-%COMP%]   .section_directory[_ngcontent-%COMP%]   .title_section[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#faab00;font-size:20px}.emision_card[_ngcontent-%COMP%]{position:relative;background-color:#000}.emision_card[_ngcontent-%COMP%]   .text_capture[_ngcontent-%COMP%]{width:100%;height:16px;text-overflow:ellipsis;overflow:hidden;background-color:rgba(0,0,0,.768);font-size:12px;position:absolute;padding:0 8px;bottom:0;left:0}.movies_container[_ngcontent-%COMP%]{width:92%;margin:auto}.movies_container[_ngcontent-%COMP%]   .section_directory[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.movies_container[_ngcontent-%COMP%]   .section_directory[_ngcontent-%COMP%]   .title_section[_ngcontent-%COMP%]{font-size:20px}.movies_container[_ngcontent-%COMP%]   .section_directory[_ngcontent-%COMP%]   .title_section[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#00c3ff;font-size:20px}.ovas_container[_ngcontent-%COMP%]{width:92%;margin:auto}.ovas_container[_ngcontent-%COMP%]   .section_directory[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.ovas_container[_ngcontent-%COMP%]   .section_directory[_ngcontent-%COMP%]   .title_section[_ngcontent-%COMP%]{font-size:20px}.ovas_container[_ngcontent-%COMP%]   .section_directory[_ngcontent-%COMP%]   .title_section[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#00f884;font-size:20px}.animes_container[_ngcontent-%COMP%]{width:92%;margin:auto}.animes_container[_ngcontent-%COMP%]   .section_directory[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.animes_container[_ngcontent-%COMP%]   .section_directory[_ngcontent-%COMP%]   .title_section[_ngcontent-%COMP%]{font-size:20px}.animes_container[_ngcontent-%COMP%]   .section_directory[_ngcontent-%COMP%]   .title_section[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#d22;font-size:20px}.section_directory[_ngcontent-%COMP%]{margin:10px 0}.my-custom-class[_ngcontent-%COMP%]{--background:#222;--spinner-color:red;color:#fff}"]}),n})()}];let O=(()=>{class n{}return n.\u0275mod=a.Eb({type:n}),n.\u0275inj=a.Db({factory:function(t){return new(t||n)},imports:[[r.i.forChild(v)],r.i]}),n})(),C=(()=>{class n{}return n.\u0275mod=a.Eb({type:n}),n.\u0275inj=a.Db({factory:function(t){return new(t||n)},imports:[[e.b,o.a,c.u,O]]}),n})()}}]);