(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{nuB9:function(o,n,t){"use strict";t.r(n),t.d(n,"AnimePageModule",function(){return O});var i=t("ofXK"),e=t("3Pt+"),r=t("TEn/"),c=t("tyNb"),a=t("fXoL"),s=t("UfqK");let l=(()=>{class o{constructor(){}addToFav(o){localStorage.setItem("favorites",JSON.stringify(o));let n=JSON.parse(localStorage.getItem("favorites"));console.log(n)}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275prov=a.Eb({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const d=function(o){return["/gender",o]};function g(o,n){if(1&o&&(a.Lb(0,"button",32),a.hc(1),a.Kb()),2&o){const o=n.$implicit;a.Yb("routerLink",a.ac(2,d,o.id)),a.yb(1),a.ic(o.title)}}const b=function(o){return["/anime",o]};function f(o,n){if(1&o&&(a.Lb(0,"div",33),a.Lb(1,"div",34),a.Jb(2,"img",35),a.Lb(3,"div",36),a.hc(4),a.Kb(),a.Lb(5,"div",37),a.hc(6),a.Lb(7,"mark"),a.hc(8),a.Kb(),a.Kb(),a.Kb(),a.Kb()),2&o){const o=n.$implicit;a.Yb("routerLink",a.ac(5,b,o.id)),a.yb(2),a.Yb("src",o.img,a.ec),a.yb(2),a.ic(o.title),a.yb(2),a.jc("",o.type," "),a.yb(2),a.ic(o.year)}}const p=function(o){return["/ver",o]};function u(o,n){if(1&o&&(a.Lb(0,"div",38),a.Jb(1,"img",39),a.Lb(2,"div",40),a.hc(3),a.Kb(),a.Kb()),2&o){const o=n.$implicit,t=a.Vb();a.Yb("routerLink",a.ac(3,p,o.id)),a.yb(1),a.Yb("src",null==t.anime?null:t.anime.banner,a.ec),a.yb(2),a.jc("Episodio ",o.episode,"")}}function m(o,n){1&o&&(a.Lb(0,"div",41),a.hc(1," No hay capitulos disponibles "),a.Kb())}const h=[{path:"",component:(()=>{class o{constructor(o,n,t){this.apiSvc=o,this.db=n,this.route=t,this.favoriteString=!1}ngOnInit(){this.getAnime()}getAnime(){this.apiSvc.getAnime(this.route.snapshot.params.id).subscribe(o=>{this.anime=o})}doRefresh(o){setTimeout(()=>{this.getAnime(),o.target.complete()},1e3)}addToFavorite(o){this.db.addToFav(o)}}return o.\u0275fac=function(n){return new(n||o)(a.Ib(s.a),a.Ib(l),a.Ib(c.a))},o.\u0275cmp=a.Cb({type:o,selectors:[["app-anime"]],decls:47,vars:13,consts:[["slot","start"],["defaultHref","directory"],["slot","fixed","pullFactor","0.8","pullMin","60","pullMax","120",3,"ionRefresh"],[1,"anime_container"],[1,"info_container"],[1,"banner"],[3,"src","alt"],[1,"bg-dark"],[1,"details"],[1,"portada",3,"src","alt"],[1,"target"],[1,"title"],["name","language"],[1,"status"],["name","play"],[1,"date"],["name","calendar"],[1,"add_fav",3,"click"],[1,"genders"],["class","gender",3,"routerLink",4,"ngFor","ngForOf"],[1,"slides"],[1,"sinopsis"],[1,"title_sinopsis"],[1,"text"],[1,"title_suggestions"],[1,"slider"],[1,"slides-suggestions"],["class","emision_card",3,"routerLink",4,"ngFor","ngForOf"],[1,"episodes"],[1,"title_episodes"],["class","episode",3,"routerLink",4,"ngFor","ngForOf"],["class","episode",4,"ngIf"],[1,"gender",3,"routerLink"],[1,"emision_card",3,"routerLink"],[1,"portada"],[3,"src"],[1,"anime_name"],[1,"anime_info"],[1,"episode",3,"routerLink"],["alt","",3,"src"],[1,"ep_number"],[1,"episode"]],template:function(o,n){1&o&&(a.Lb(0,"ion-header"),a.Lb(1,"ion-toolbar"),a.Lb(2,"ion-buttons",0),a.Jb(3,"ion-back-button",1),a.Kb(),a.Lb(4,"ion-title"),a.hc(5),a.Kb(),a.Kb(),a.Kb(),a.Lb(6,"ion-content"),a.Lb(7,"ion-refresher",2),a.Tb("ionRefresh",function(o){return n.doRefresh(o)}),a.Jb(8,"ion-refresher-content"),a.Kb(),a.Lb(9,"ion-content"),a.Lb(10,"div",3),a.Lb(11,"div",4),a.Lb(12,"div",5),a.Jb(13,"img",6),a.Jb(14,"div",7),a.Kb(),a.Lb(15,"div",8),a.Jb(16,"img",9),a.Lb(17,"div",10),a.Lb(18,"div",11),a.Jb(19,"ion-icon",12),a.hc(20),a.Kb(),a.Lb(21,"div",13),a.Jb(22,"ion-icon",14),a.hc(23),a.Kb(),a.Lb(24,"div",15),a.Jb(25,"ion-icon",16),a.hc(26),a.Kb(),a.Lb(27,"div",17),a.Tb("click",function(){return n.addToFavorite(n.anime)}),a.hc(28,"Add to favorite"),a.Kb(),a.Kb(),a.Kb(),a.Kb(),a.Lb(29,"div",18),a.gc(30,g,2,4,"button",19),a.Kb(),a.Lb(31,"div",20),a.Lb(32,"div",21),a.Lb(33,"div",22),a.hc(34,"Sinopsis"),a.Kb(),a.Lb(35,"p",23),a.hc(36),a.Kb(),a.Lb(37,"div",24),a.hc(38,"Suggestions"),a.Kb(),a.Lb(39,"div",25),a.Lb(40,"div",26),a.gc(41,f,9,7,"div",27),a.Kb(),a.Kb(),a.Kb(),a.Lb(42,"div",28),a.Lb(43,"div",29),a.hc(44,"Episodes"),a.Kb(),a.gc(45,u,4,5,"div",30),a.gc(46,m,2,0,"div",31),a.Kb(),a.Kb(),a.Kb(),a.Kb(),a.Kb()),2&o&&(a.yb(5),a.ic(null==n.anime?null:n.anime.title),a.yb(8),a.Yb("src",null==n.anime?null:n.anime.banner,a.ec)("alt",null==n.anime?null:n.anime.title),a.yb(3),a.Yb("src",null==n.anime?null:n.anime.img,a.ec)("alt",null==n.anime?null:n.anime.title),a.yb(4),a.jc(" ",null==n.anime?null:n.anime.title,""),a.yb(3),a.jc(" ",null==n.anime?null:n.anime.status,""),a.yb(3),a.jc(" ",null==n.anime?null:n.anime.date,""),a.yb(4),a.Yb("ngForOf",null==n.anime?null:n.anime.genders),a.yb(6),a.ic(null==n.anime?null:n.anime.description),a.yb(5),a.Yb("ngForOf",null==n.anime?null:n.anime.sugestions),a.yb(4),a.Yb("ngForOf",null==n.anime?null:n.anime.episodes),a.yb(1),a.Yb("ngIf",0==(null==n.anime?null:n.anime.episodes)))},directives:[r.h,r.x,r.f,r.c,r.d,r.w,r.g,r.n,r.o,r.i,i.h,i.i,r.B,c.h],styles:["[_ngcontent-%COMP%]:root{--main:#1397d5;--ion-color-primary:#1397d5;--ion-color-primary-rgb:56,128,255;--ion-color-primary-contrast:#fff;--ion-color-primary-contrast-rgb:255,255,255;--ion-color-primary-shade:#3171e0;--ion-color-primary-tint:#4c8dff;--ion-color-secondary:#3dc2ff;--ion-color-secondary-rgb:61,194,255;--ion-color-secondary-contrast:#fff;--ion-color-secondary-contrast-rgb:255,255,255;--ion-color-secondary-shade:#36abe0;--ion-color-secondary-tint:#50c8ff;--ion-color-tertiary:#5260ff;--ion-color-tertiary-rgb:82,96,255;--ion-color-tertiary-contrast:#fff;--ion-color-tertiary-contrast-rgb:255,255,255;--ion-color-tertiary-shade:#4854e0;--ion-color-tertiary-tint:#6370ff;--ion-color-success:#2dd36f;--ion-color-success-rgb:45,211,111;--ion-color-success-contrast:#fff;--ion-color-success-contrast-rgb:255,255,255;--ion-color-success-shade:#28ba62;--ion-color-success-tint:#42d77d;--ion-color-warning:#ffc409;--ion-color-warning-rgb:255,196,9;--ion-color-warning-contrast:#000;--ion-color-warning-contrast-rgb:0,0,0;--ion-color-warning-shade:#e0ac08;--ion-color-warning-tint:#ffca22;--ion-color-danger:#eb445a;--ion-color-danger-rgb:235,68,90;--ion-color-danger-contrast:#fff;--ion-color-danger-contrast-rgb:255,255,255;--ion-color-danger-shade:#cf3c4f;--ion-color-danger-tint:#ed576b;--ion-color-dark:#222428;--ion-color-dark-rgb:34,36,40;--ion-color-dark-contrast:#fff;--ion-color-dark-contrast-rgb:255,255,255;--ion-color-dark-shade:#1e2023;--ion-color-dark-tint:#383a3e;--ion-color-medium:#92949c;--ion-color-medium-rgb:146,148,156;--ion-color-medium-contrast:#fff;--ion-color-medium-contrast-rgb:255,255,255;--ion-color-medium-shade:#808289;--ion-color-medium-tint:#9d9fa6;--ion-color-light:#f4f5f8;--ion-color-light-rgb:244,245,248;--ion-color-light-contrast:#000;--ion-color-light-contrast-rgb:0,0,0;--ion-color-light-shade:#d7d8da;--ion-color-light-tint:#f5f6f9}body[_ngcontent-%COMP%]{--ion-color-primary:#1397d5;--ion-color-primary-rgb:66,140,255;--ion-color-primary-contrast:#fff;--ion-color-primary-contrast-rgb:255,255,255;--ion-color-primary-shade:#3a7be0;--ion-color-primary-tint:#5598ff;--ion-color-secondary:#50c8ff;--ion-color-secondary-rgb:80,200,255;--ion-color-secondary-contrast:#fff;--ion-color-secondary-contrast-rgb:255,255,255;--ion-color-secondary-shade:#46b0e0;--ion-color-secondary-tint:#62ceff;--ion-color-tertiary:#6a64ff;--ion-color-tertiary-rgb:106,100,255;--ion-color-tertiary-contrast:#fff;--ion-color-tertiary-contrast-rgb:255,255,255;--ion-color-tertiary-shade:#5d58e0;--ion-color-tertiary-tint:#7974ff;--ion-color-success:#2fdf75;--ion-color-success-rgb:47,223,117;--ion-color-success-contrast:#000;--ion-color-success-contrast-rgb:0,0,0;--ion-color-success-shade:#29c467;--ion-color-success-tint:#44e283;--ion-color-warning:#ffd534;--ion-color-warning-rgb:255,213,52;--ion-color-warning-contrast:#000;--ion-color-warning-contrast-rgb:0,0,0;--ion-color-warning-shade:#e0bb2e;--ion-color-warning-tint:#ffd948;--ion-color-danger:#ff4961;--ion-color-danger-rgb:255,73,97;--ion-color-danger-contrast:#fff;--ion-color-danger-contrast-rgb:255,255,255;--ion-color-danger-shade:#e04055;--ion-color-danger-tint:#ff5b71;--ion-color-dark:#f4f5f8;--ion-color-dark-rgb:244,245,248;--ion-color-dark-contrast:#000;--ion-color-dark-contrast-rgb:0,0,0;--ion-color-dark-shade:#d7d8da;--ion-color-dark-tint:#f5f6f9;--ion-color-medium:#989aa2;--ion-color-medium-rgb:152,154,162;--ion-color-medium-contrast:#000;--ion-color-medium-contrast-rgb:0,0,0;--ion-color-medium-shade:#86888f;--ion-color-medium-tint:#a2a4ab;--ion-color-light:#222428;--ion-color-light-rgb:34,36,40;--ion-color-light-contrast:#fff;--ion-color-light-contrast-rgb:255,255,255;--ion-color-light-shade:#1e2023;--ion-color-light-tint:#383a3e}.ios[_ngcontent-%COMP%]   body[_ngcontent-%COMP%]{--ion-background-color:#000;--ion-background-color-rgb:0,0,0;--ion-text-color:#fff;--ion-text-color-rgb:255,255,255;--ion-color-step-50:#0d0d0d;--ion-color-step-100:#1a1a1a;--ion-color-step-150:#262626;--ion-color-step-200:#333;--ion-color-step-250:#404040;--ion-color-step-300:#4d4d4d;--ion-color-step-350:#595959;--ion-color-step-400:#666;--ion-color-step-450:#737373;--ion-color-step-500:grey;--ion-color-step-550:#8c8c8c;--ion-color-step-600:#999;--ion-color-step-650:#a6a6a6;--ion-color-step-700:#b3b3b3;--ion-color-step-750:#bfbfbf;--ion-color-step-800:#ccc;--ion-color-step-850:#d9d9d9;--ion-color-step-900:#e6e6e6;--ion-color-step-950:#f2f2f2;--ion-toolbar-background:#000;--ion-item-background:#000;--ion-card-background:#000}.md[_ngcontent-%COMP%]   body[_ngcontent-%COMP%]{--ion-background-color:#000;--ion-background-color-rgb:18,18,18;--ion-text-color:#fff;--ion-text-color-rgb:255,255,255;--ion-border-color:#222;--ion-color-step-50:#1e1e1e;--ion-color-step-100:#2a2a2a;--ion-color-step-150:#363636;--ion-color-step-200:#414141;--ion-color-step-250:#4d4d4d;--ion-color-step-300:#595959;--ion-color-step-350:#656565;--ion-color-step-400:#717171;--ion-color-step-450:#7d7d7d;--ion-color-step-500:#898989;--ion-color-step-550:#949494;--ion-color-step-600:#a0a0a0;--ion-color-step-650:#acacac;--ion-color-step-700:#b8b8b8;--ion-color-step-750:#c4c4c4;--ion-color-step-800:#d0d0d0;--ion-color-step-850:#dbdbdb;--ion-color-step-900:#e7e7e7;--ion-color-step-950:#f3f3f3;--ion-item-background:#000;--ion-toolbar-background:#000;--ion-tab-bar-background:#000;--ion-card-background:#000;--tool:#0098df;--text:#fff;--primary:#000;--secondary:#050505;--subtitle:#747474;--subtext:#aaa;--card:#0c0c0c;--button:#1d1d1d;--min-radius:5px;--mid-raduis:10px;--max-radius:20px}*[_ngcontent-%COMP%]{outline:none}ion-toolbar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff;font-size:20px}ion-buttons[_ngcontent-%COMP%], ion-buttons[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{outline:none}.anime_container[_ngcontent-%COMP%]   .info_container[_ngcontent-%COMP%]{position:relative}.anime_container[_ngcontent-%COMP%]   .info_container[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]{position:relative;width:100%;height:200px}.anime_container[_ngcontent-%COMP%]   .info_container[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .bg-dark[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0;background:#000;background:linear-gradient(0deg,#000,rgba(0,0,0,.7427345938) 59%,rgba(0,0,0,.2889530812))}.anime_container[_ngcontent-%COMP%]   .info_container[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;background-position:50%;-o-object-position:center;object-position:center}.anime_container[_ngcontent-%COMP%]   .info_container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{position:absolute;bottom:-30px;display:flex}.anime_container[_ngcontent-%COMP%]   .info_container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .portada[_ngcontent-%COMP%]{width:120px;height:auto;border-radius:5px;margin:0 10px 0 19px}.anime_container[_ngcontent-%COMP%]   .info_container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .target[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.anime_container[_ngcontent-%COMP%]   .info_container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .target[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-bottom:3.5px;margin-right:3px}.anime_container[_ngcontent-%COMP%]   .info_container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .target[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:3px}.anime_container[_ngcontent-%COMP%]   .info_container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .target[_ngcontent-%COMP%]   .add_fav[_ngcontent-%COMP%]{background-color:#1a1a1a;color:#fff;padding:1px 6px;border-radius:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.genders[_ngcontent-%COMP%]{position:relative;display:flex;width:90%;margin:35px auto 0;overflow-x:scroll}.genders[_ngcontent-%COMP%]::-webkit-scrollbar{background-color:#000}.genders[_ngcontent-%COMP%]   .gender[_ngcontent-%COMP%]{border:none;outline:none;padding:6px 16px;font-size:12px;margin-right:10px;color:#fff;background-color:#1a1a1a;border-radius:30px}.genders[_ngcontent-%COMP%]   .gender[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff}.divisor[_ngcontent-%COMP%]{width:100%;height:20px}.slides[_ngcontent-%COMP%]{padding-top:10px;display:flex;width:100%;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth}.slides[_ngcontent-%COMP%]::-webkit-scrollbar{width:10px;height:10px;background:#000}.slides[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#000;border-radius:10px}.slides[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#000}.slides[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{scroll-snap-align:start;flex-shrink:0;width:100%;border-radius:10px;transition:transform 1s;display:flex}.sinopsis[_ngcontent-%COMP%]{font-size:15px;text-align:start;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;flex-direction:column}.sinopsis[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:12px;width:90%;margin:0 auto}.episodes[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;overflow-x:scroll;height:400px}.episodes[_ngcontent-%COMP%]   .episode[_ngcontent-%COMP%]{display:flex;font-size:18px;width:90%;margin:0 auto 10px;align-items:center;height:70px;background-color:#090909;border-radius:5px}.episodes[_ngcontent-%COMP%]   .episode[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:30%;border-radius:5px;-o-object-fit:cover;object-fit:cover;margin-right:20px}.episodes[_ngcontent-%COMP%]   .episode[_ngcontent-%COMP%]:focus, .episodes[_ngcontent-%COMP%]   .episode[_ngcontent-%COMP%]:hover{background-color:#151515}.slides-suggestions[_ngcontent-%COMP%]{display:flex;width:90%;margin:auto;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}.slides-suggestions[_ngcontent-%COMP%]::-webkit-scrollbar{width:10px;height:10px;background:#000}.slides-suggestions[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#000;border-radius:10px}.slides-suggestions[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#000}.slides-suggestions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{scroll-snap-align:start;flex-shrink:0;width:26%;height:100%;margin:0 8px;border-radius:10px;background:#000;transform-origin:center center;transform:scale(1);transition:transform 1s;position:relative;display:flex;justify-content:center;align-items:center;font-size:100px}.emision_card[_ngcontent-%COMP%]{position:relative;outline:none;display:block;height:100px}.emision_card[_ngcontent-%COMP%]   .text_capture[_ngcontent-%COMP%]{width:100%;height:16px;text-overflow:ellipsis;overflow:hidden;background-color:rgba(0,0,0,.768);font-size:12px;position:absolute;padding:0 8px;bottom:0;left:0}.portada[_ngcontent-%COMP%], .portada[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%}.portada[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:5px;-o-object-fit:cover;object-fit:cover;cursor:pointer}.anime_name[_ngcontent-%COMP%]{bottom:18px}.anime_info[_ngcontent-%COMP%], .anime_name[_ngcontent-%COMP%]{position:relative;font-size:12px;height:20px;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.anime_info[_ngcontent-%COMP%]{bottom:20px;display:flex;align-items:center;justify-content:space-between}.anime_info[_ngcontent-%COMP%]   mark[_ngcontent-%COMP%]{background-color:#fff;color:#000;padding:1px 6px;border-radius:10px}.title_episodes[_ngcontent-%COMP%], .title_sinopsis[_ngcontent-%COMP%], .title_suggestions[_ngcontent-%COMP%]{width:90%;margin:0 auto;font-weight:500;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;color:#1397d5}.title_episodes[_ngcontent-%COMP%], .title_sinopsis[_ngcontent-%COMP%]{margin-bottom:20px}.title_suggestions[_ngcontent-%COMP%]{margin-bottom:20px;margin-top:30px}"]}),o})()}];let _=(()=>{class o{}return o.\u0275mod=a.Gb({type:o}),o.\u0275inj=a.Fb({factory:function(n){return new(n||o)},imports:[[c.i.forChild(h)],c.i]}),o})(),O=(()=>{class o{}return o.\u0275mod=a.Gb({type:o}),o.\u0275inj=a.Fb({factory:function(n){return new(n||o)},imports:[[i.b,e.a,r.y,_]]}),o})()}}]);