(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{CnhE:function(n,t,i){"use strict";i.r(t),i.d(t,"DirectoryPageModule",function(){return y});var e=i("ofXK"),o=i("3Pt+"),c=i("TEn/"),r=i("tyNb"),s=i("mrSG"),a=i("fXoL"),b=i("UfqK");const g=function(n){return["/anime",n]};function l(n,t){if(1&n&&(a.Lb(0,"div",17),a.Lb(1,"div",18),a.Jb(2,"img",19),a.Lb(3,"div",20),a.hc(4),a.Kb(),a.Lb(5,"div",21),a.hc(6),a.Lb(7,"mark"),a.hc(8),a.Kb(),a.Kb(),a.Kb(),a.Kb()),2&n){const n=t.$implicit;a.Yb("routerLink",a.ac(5,g,n.id)),a.yb(2),a.Yb("src",n.img,a.ec),a.yb(2),a.ic(n.title),a.yb(2),a.jc("",n.category," "),a.yb(2),a.ic(n.year)}}function d(n,t){if(1&n&&(a.Lb(0,"div",17),a.Lb(1,"div",18),a.Jb(2,"img",19),a.Lb(3,"div",20),a.hc(4),a.Kb(),a.Lb(5,"div",21),a.hc(6),a.Lb(7,"mark"),a.hc(8),a.Kb(),a.Kb(),a.Kb(),a.Kb()),2&n){const n=t.$implicit;a.Yb("routerLink",a.ac(5,g,n.id)),a.yb(2),a.Yb("src",n.img,a.ec),a.yb(2),a.ic(n.title),a.yb(2),a.jc("",n.type," "),a.yb(2),a.ic(n.year)}}function _(n,t){if(1&n&&(a.Lb(0,"div",17),a.Lb(1,"div",18),a.Jb(2,"img",19),a.Lb(3,"div",20),a.hc(4),a.Kb(),a.Lb(5,"div",21),a.hc(6),a.Lb(7,"mark"),a.hc(8),a.Kb(),a.Kb(),a.Kb(),a.Kb()),2&n){const n=t.$implicit;a.Yb("routerLink",a.ac(5,g,n.id)),a.yb(2),a.Yb("src",n.img,a.ec),a.yb(2),a.ic(n.title),a.yb(2),a.jc("",n.type," "),a.yb(2),a.ic(n.year)}}function m(n,t){if(1&n&&(a.Lb(0,"div",17),a.Lb(1,"div",18),a.Jb(2,"img",19),a.Lb(3,"div",20),a.hc(4),a.Kb(),a.Lb(5,"div",21),a.hc(6),a.Lb(7,"mark"),a.hc(8),a.Kb(),a.Kb(),a.Kb(),a.Kb()),2&n){const n=t.$implicit;a.Yb("routerLink",a.ac(5,g,n.id)),a.yb(2),a.Yb("src",n.img,a.ec),a.yb(2),a.ic(n.title),a.yb(2),a.jc("",n.type," "),a.yb(2),a.ic(n.year)}}const p=function(){return["/category/pelicula"]},h=function(){return["/category/ova"]},u=function(){return["/category/anime"]},f=[{path:"",component:(()=>{class n{constructor(n,t){this.apiSvc=n,this.loadingController=t,this.page=0}ngOnInit(){this.presentLoading("Getting data"),this.getOvas(),this.getLastest(),this.getMovies(),this.getAnimes()}getLastest(){this.page=this.page+1,this.apiSvc.getEmision(this.page).subscribe(n=>{this.emision=n})}getMovies(){this.apiSvc.getCategory("pelicula",this.page).subscribe(n=>{this.movies=n})}getOvas(){this.apiSvc.getCategory("ova",1).subscribe(n=>{this.ovas=n})}getAnimes(){this.apiSvc.getCategory("anime",1).subscribe(n=>{this.anime=n})}presentLoading(n){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.loadingController.create({cssClass:"my-custom-class",message:n,duration:1500});return yield t.present()})}doRefresh(n){setTimeout(()=>{this.getLastest(),this.getOvas(),this.getMovies(),this.getAnimes(),n.target.complete()})}}return n.\u0275fac=function(t){return new(t||n)(a.Ib(b.a),a.Ib(c.A))},n.\u0275cmp=a.Cb({type:n,selectors:[["app-directory"]],decls:52,vars:10,consts:[["slot","fixed","pullFactor","0.8","pullMin","60","pullMax","120",3,"ionRefresh"],[1,"emision_container"],[1,"section_directory"],[1,"title_section"],["name","flame"],["color","light","routerLink","/emision","slot","end"],["name","caret-forward"],[1,"slider"],[1,"slides"],["class","emision_card",3,"routerLink",4,"ngFor","ngForOf"],[1,"movies_container"],["name","film"],["color","light","slot","end",3,"routerLink"],[1,"ovas_container"],["name","easel"],[1,"animes_container"],["name","happy"],[1,"emision_card",3,"routerLink"],[1,"portada"],[3,"src"],[1,"anime_name"],[1,"anime_info"]],template:function(n,t){1&n&&(a.Lb(0,"ion-header"),a.Lb(1,"ion-toolbar"),a.Lb(2,"ion-title"),a.hc(3,"Directory"),a.Kb(),a.Kb(),a.Kb(),a.Lb(4,"ion-content"),a.Lb(5,"ion-refresher",0),a.Tb("ionRefresh",function(n){return t.doRefresh(n)}),a.Jb(6,"ion-refresher-content"),a.Kb(),a.Lb(7,"ion-content"),a.Lb(8,"div",1),a.Lb(9,"div",2),a.Lb(10,"div",3),a.Jb(11,"ion-icon",4),a.hc(12," Emision"),a.Kb(),a.Lb(13,"ion-button",5),a.Jb(14,"ion-icon",6),a.hc(15," Ver mas"),a.Kb(),a.Kb(),a.Lb(16,"div",7),a.Lb(17,"div",8),a.gc(18,l,9,7,"div",9),a.Kb(),a.Kb(),a.Kb(),a.Lb(19,"div",10),a.Lb(20,"div",2),a.Lb(21,"div",3),a.Jb(22,"ion-icon",11),a.hc(23," Peliculas"),a.Kb(),a.Lb(24,"ion-button",12),a.Jb(25,"ion-icon",6),a.hc(26," Ver mas"),a.Kb(),a.Kb(),a.Lb(27,"div",7),a.Lb(28,"div",8),a.gc(29,d,9,7,"div",9),a.Kb(),a.Kb(),a.Kb(),a.Lb(30,"div",13),a.Lb(31,"div",2),a.Lb(32,"div",3),a.Jb(33,"ion-icon",14),a.hc(34," Ovas"),a.Kb(),a.Lb(35,"ion-button",12),a.Jb(36,"ion-icon",6),a.hc(37," Ver mas"),a.Kb(),a.Kb(),a.Lb(38,"div",7),a.Lb(39,"div",8),a.gc(40,_,9,7,"div",9),a.Kb(),a.Kb(),a.Kb(),a.Lb(41,"div",15),a.Lb(42,"div",2),a.Lb(43,"div",3),a.Jb(44,"ion-icon",16),a.hc(45," Animes"),a.Kb(),a.Lb(46,"ion-button",12),a.Jb(47,"ion-icon",6),a.hc(48," Ver mas "),a.Kb(),a.Kb(),a.Lb(49,"div",7),a.Lb(50,"div",8),a.gc(51,m,9,7,"div",9),a.Kb(),a.Kb(),a.Kb(),a.Kb(),a.Kb()),2&n&&(a.yb(18),a.Yb("ngForOf",null==t.emision?null:t.emision.animes),a.yb(6),a.Yb("routerLink",a.Zb(7,p)),a.yb(5),a.Yb("ngForOf",null==t.movies?null:t.movies.animes),a.yb(6),a.Yb("routerLink",a.Zb(8,h)),a.yb(5),a.Yb("ngForOf",null==t.ovas?null:t.ovas.animes),a.yb(6),a.Yb("routerLink",a.Zb(9,u)),a.yb(5),a.Yb("ngForOf",null==t.anime?null:t.anime.animes))},directives:[c.h,c.x,c.w,c.g,c.n,c.o,c.i,c.e,c.B,r.h,e.h],styles:["ion-title[_ngcontent-%COMP%]{display:flex;align-items:center}ion-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#09f}.slides[_ngcontent-%COMP%]{display:flex;width:100%;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}.slides[_ngcontent-%COMP%]::-webkit-scrollbar{width:10px;height:10px;background:#000}.slides[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#000;border-radius:10px}.slides[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#000}.slides[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{scroll-snap-align:start;flex-shrink:0;width:26%;height:100%;margin:0 8px;border-radius:10px;background:#000;transform-origin:center center;transform:scale(1);transition:transform 1s;position:relative;display:flex;justify-content:center;align-items:center;font-size:100px}img.img_capture[_ngcontent-%COMP%]{width:100%;border-radius:5px}img.img_capture[_ngcontent-%COMP%]:focus{outline:none}.anime_info[_ngcontent-%COMP%]{position:relative;bottom:20px;font-size:12px;height:20px;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:flex;align-items:center;justify-content:space-between}.anime_info[_ngcontent-%COMP%]   mark[_ngcontent-%COMP%]{background-color:#fff;color:#000;padding:1px 6px;border-radius:10px}.emision_container[_ngcontent-%COMP%]{width:92%;margin:auto}.emision_container[_ngcontent-%COMP%]   .section_directory[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.emision_container[_ngcontent-%COMP%]   .section_directory[_ngcontent-%COMP%]   .title_section[_ngcontent-%COMP%]{font-size:20px}.emision_container[_ngcontent-%COMP%]   .section_directory[_ngcontent-%COMP%]   .title_section[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#faab00}.portada[_ngcontent-%COMP%], .portada[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%}.portada[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:5px;-o-object-fit:cover;object-fit:cover;cursor:pointer}.anime_name[_ngcontent-%COMP%]{position:relative;bottom:18px;font-size:12px;height:20px;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.emision_card[_ngcontent-%COMP%]{position:relative;outline:none;display:block;height:100px}.emision_card[_ngcontent-%COMP%]   .text_capture[_ngcontent-%COMP%]{width:100%;height:16px;text-overflow:ellipsis;overflow:hidden;background-color:rgba(0,0,0,.768);font-size:12px;position:absolute;padding:0 8px;bottom:0;left:0}.movies_container[_ngcontent-%COMP%]{width:92%;margin:auto}.movies_container[_ngcontent-%COMP%]   .section_directory[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.movies_container[_ngcontent-%COMP%]   .section_directory[_ngcontent-%COMP%]   .title_section[_ngcontent-%COMP%]{font-size:20px}.movies_container[_ngcontent-%COMP%]   .section_directory[_ngcontent-%COMP%]   .title_section[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#00c3ff;font-size:20px}.ovas_container[_ngcontent-%COMP%]{width:92%;margin:auto}.ovas_container[_ngcontent-%COMP%]   .section_directory[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.ovas_container[_ngcontent-%COMP%]   .section_directory[_ngcontent-%COMP%]   .title_section[_ngcontent-%COMP%]{font-size:20px}.ovas_container[_ngcontent-%COMP%]   .section_directory[_ngcontent-%COMP%]   .title_section[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#00f884;font-size:20px}.animes_container[_ngcontent-%COMP%]{width:92%;margin:auto}.animes_container[_ngcontent-%COMP%]   .section_directory[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.animes_container[_ngcontent-%COMP%]   .section_directory[_ngcontent-%COMP%]   .title_section[_ngcontent-%COMP%]{font-size:20px}.animes_container[_ngcontent-%COMP%]   .section_directory[_ngcontent-%COMP%]   .title_section[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#d22;font-size:20px}.section_directory[_ngcontent-%COMP%]{margin:10px 0}.my-custom-class[_ngcontent-%COMP%]{--background:#222;--spinner-color:red;color:#fff}.title_section[_ngcontent-%COMP%]{font-size:20px;display:flex;align-items:center}.title_section[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:10px}"]}),n})()}];let v=(()=>{class n{}return n.\u0275mod=a.Gb({type:n}),n.\u0275inj=a.Fb({factory:function(t){return new(t||n)},imports:[[r.i.forChild(f)],r.i]}),n})(),y=(()=>{class n{}return n.\u0275mod=a.Gb({type:n}),n.\u0275inj=a.Fb({factory:function(t){return new(t||n)},imports:[[e.b,o.a,c.y,v]]}),n})()}}]);