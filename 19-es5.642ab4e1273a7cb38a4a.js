!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{cfYA:function(e,o,i){"use strict";i.r(o),i.d(o,"EpisodePageModule",(function(){return m}));var c=i("ofXK"),r=i("3Pt+"),a=i("TEn/"),s=i("tyNb"),b=i("fXoL"),l=i("UfqK"),d=i("jhN1");function g(n,t){if(1&n){var e=b.Kb();b.Jb(0,"button",16),b.Rb("click",(function(){b.ac(e);var n=t.$implicit;return b.Tb().getVideo(n.video)})),b.Hb(1,"ion-icon",17),b.fc(2),b.Ib()}if(2&n){var o=t.$implicit;b.wb(2),b.hc("",o.videoname," ")}}function u(n,t){1&n&&(b.Jb(0,"div",18),b.Hb(1,"ion-icon",19),b.Jb(2,"p"),b.fc(3,"Select any server & click me"),b.Ib(),b.Ib())}function p(n,t){if(1&n){var e=b.Kb();b.Jb(0,"button",20),b.Rb("click",(function(){b.ac(e);var n=b.Tb();return n.backButton(n.ep)})),b.Hb(1,"ion-icon",21),b.Ib()}}function f(n,t){if(1&n){var e=b.Kb();b.Jb(0,"button",22),b.Rb("click",(function(){b.ac(e);var n=b.Tb();return n.nextButton(n.ep)})),b.Hb(1,"ion-icon",23),b.Ib()}}function v(n,t){if(1&n){var e=b.Kb();b.Jb(0,"button",16),b.Rb("click",(function(){b.ac(e);var n=t.$implicit;return b.Tb().getVideo(n.video)})),b.Hb(1,"ion-icon",17),b.fc(2),b.Ib()}if(2&n){var o=t.$implicit;b.wb(2),b.hc("",o.server," ")}}var _,O,C,P=function(){return["/home"]},M=function(n){return["/anime",n]},h=[{path:"",component:(_=function(){function e(t,o,i,c){n(this,e),this.apiSvc=t,this.route=o,this.router=i,this.sanitizer=c,this.waiting=!0,this.videourl="https://wwww.google.com",this.btn_next=!0,this.btn_back=!0}var o,i,c;return o=e,(i=[{key:"ngOnInit",value:function(){this.getEpisode(),this.getVideo("https://www.dlf.pt/png/big/12/126718_please-wait-png.png")}},{key:"getEpisode",value:function(){var n=this;this.apiSvc.getEpisode(this.route.snapshot.params.id).subscribe((function(t){n.episode=t,n.title=n.episode.title,n.animeId=n.episode.animeId,n.videos=n.episode.videos,n.ep=n.episode.epNumber,n.downloads=n.episode.downloads,n.apiSvc.getAnime(n.animeId).subscribe((function(t){n.anime=t,n.totalEpisodes=n.anime.anime.episodes.length}))}))}},{key:"nextButton",value:function(n){if(console.clear(),n==this.totalEpisodes&&(this.btn_next=!1),n<this.totalEpisodes){var t=n+1,e=this.route.snapshot.params.id.replace("-episodio-"+n,"");this.router.navigate(["ver/","".concat(e,"-episodio-").concat(t)])}}},{key:"backButton",value:function(n){if(console.clear(),n<2&&(this.btn_back=!1,console.log("ya no se puede bajar")),n>1){var t=n-1,e=this.route.snapshot.params.id.replace("-episodio-"+n,"");this.router.navigate(["ver/","".concat(e,"-episodio-").concat(t)])}}},{key:"unlock",value:function(){this.waiting=!1}},{key:"getVideo",value:function(n){this.videourl=n,this.videourlSafe=this.sanitizer.bypassSecurityTrustResourceUrl(this.videourl),console.clear()}}])&&t(o.prototype,i),c&&t(o,c),e}(),_.\u0275fac=function(n){return new(n||_)(b.Gb(l.a),b.Gb(s.a),b.Gb(s.g),b.Gb(d.b))},_.\u0275cmp=b.Ab({type:_,selectors:[["app-episode"]],decls:24,vars:13,consts:[["slot","start",3,"routerLink"],["name","arrow-back-outline"],[1,"episode-container"],[1,"servers-container"],[1,"servers"],["class","btn-server",3,"click",4,"ngFor","ngForOf"],[1,"cap_number"],[1,"video-player",3,"click"],["allowfullscreen","","frameborder","0",3,"src"],["class","bg-wait",4,"ngIf"],[1,"controls"],["class","prev-button",3,"click",4,"ngIf"],[1,"all-episodes",3,"routerLink"],["name","list-outline"],["class","next-button",3,"click",4,"ngIf"],[1,"downloads"],[1,"btn-server",3,"click"],["name","play-outline"],[1,"bg-wait"],["name","alarm-outline"],[1,"prev-button",3,"click"],["name","chevron-back-outline"],[1,"next-button",3,"click"],["name","chevron-forward-outline"]],template:function(n,t){1&n&&(b.Jb(0,"ion-header"),b.Jb(1,"ion-toolbar"),b.Jb(2,"ion-buttons",0),b.Hb(3,"ion-icon",1),b.Ib(),b.Jb(4,"ion-title"),b.fc(5),b.Ib(),b.Ib(),b.Ib(),b.Jb(6,"ion-content"),b.Jb(7,"div",2),b.Jb(8,"div",3),b.Jb(9,"div",4),b.ec(10,g,3,1,"button",5),b.Ib(),b.Ib(),b.Jb(11,"div",6),b.Jb(12,"h4"),b.fc(13),b.Ib(),b.Ib(),b.Jb(14,"div",7),b.Rb("click",(function(){return t.unlock()})),b.Hb(15,"iframe",8),b.ec(16,u,4,0,"div",9),b.Ib(),b.Jb(17,"div",10),b.ec(18,p,2,0,"button",11),b.Jb(19,"button",12),b.Hb(20,"ion-icon",13),b.Ib(),b.ec(21,f,2,0,"button",14),b.Ib(),b.Jb(22,"div",15),b.ec(23,v,3,1,"button",5),b.Ib(),b.Ib(),b.Ib()),2&n&&(b.wb(2),b.Wb("routerLink",b.Xb(10,P)),b.wb(3),b.gc(t.title),b.wb(5),b.Wb("ngForOf",t.videos),b.wb(3),b.hc(" Capitulo ",t.ep,""),b.wb(2),b.Wb("src",t.videourlSafe,b.bc),b.wb(1),b.Wb("ngIf",1==t.waiting),b.wb(2),b.Wb("ngIf",1==t.btn_back),b.wb(1),b.Wb("routerLink",b.Yb(11,M,t.animeId)),b.wb(2),b.Wb("ngIf",1==t.btn_next),b.wb(2),b.Wb("ngForOf",t.downloads))},directives:[a.f,a.t,a.d,a.y,s.h,a.g,a.s,a.e,c.h,c.i],styles:["ion-toolbar[_ngcontent-%COMP%]{width:90%;margin:auto}ion-toolbar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff;font-size:20px}ion-buttons[_ngcontent-%COMP%], ion-buttons[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{outline:none}.episode-container[_ngcontent-%COMP%]{width:90%;margin:auto}.episode-container[_ngcontent-%COMP%]   .servers-container[_ngcontent-%COMP%]   .servers[_ngcontent-%COMP%]{margin-top:30px;width:100%;display:flex;justify-content:space-between;align-items:center;overflow-x:scroll}.episode-container[_ngcontent-%COMP%]   .servers-container[_ngcontent-%COMP%]   .servers[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;border-radius:8px;border:none;outline:none;padding:12px 18px;color:#fff;background-color:#151515;margin-right:15px}.episode-container[_ngcontent-%COMP%]   .servers-container[_ngcontent-%COMP%]   .servers[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:8px;color:#fff}.episode-container[_ngcontent-%COMP%]   .servers-container[_ngcontent-%COMP%]   .servers[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .episode-container[_ngcontent-%COMP%]   .servers-container[_ngcontent-%COMP%]   .servers[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .episode-container[_ngcontent-%COMP%]   .servers-container[_ngcontent-%COMP%]   .servers[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#3d3d3d}.episode-container[_ngcontent-%COMP%]   .servers-container[_ngcontent-%COMP%]   .servers[_ngcontent-%COMP%]::-webkit-scrollbar{background-color:transparent}.episode-container[_ngcontent-%COMP%]   .video-player[_ngcontent-%COMP%]{position:relative;margin-top:30px;width:100%;height:210px}.episode-container[_ngcontent-%COMP%]   .video-player[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], .episode-container[_ngcontent-%COMP%]   .video-player[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{top:0;left:0;background-color:#373737;border-radius:8px;border-color:#373737;width:100%;height:100%}.episode-container[_ngcontent-%COMP%]   .video-player[_ngcontent-%COMP%]   .bg-wait[_ngcontent-%COMP%]{top:0;left:0;position:absolute;width:100%;height:100%;display:flex;-o-object-fit:cover;object-fit:cover;flex-direction:column;justify-content:center;background-color:rgba(55,55,55,.4117647058823529);border-radius:8px;align-items:center}.episode-container[_ngcontent-%COMP%]   .video-player[_ngcontent-%COMP%]   .bg-wait[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff;font-size:30px}.episode-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{width:100%;margin-top:20px;display:flex;align-items:center;justify-content:center}.episode-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 8px;outline:none;background-color:#151515;padding:20px 18px;border-radius:8px;display:flex;justify-content:center;align-items:center;text-align:center}.episode-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff;font-size:18px}.episode-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .episode-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .episode-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#3d3d3d}.episode-container[_ngcontent-%COMP%]   .downloads[_ngcontent-%COMP%]{margin-top:30px;width:100%;display:flex;justify-content:space-between;align-items:center;overflow-x:scroll}.episode-container[_ngcontent-%COMP%]   .downloads[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 8px;outline:none;background-color:#151515;padding:10px 18px;border-radius:8px;display:flex;justify-content:center;align-items:center;text-align:center;color:#fff}.episode-container[_ngcontent-%COMP%]   .downloads[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff;margin-right:8px}.episode-container[_ngcontent-%COMP%]   .downloads[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .episode-container[_ngcontent-%COMP%]   .downloads[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .episode-container[_ngcontent-%COMP%]   .downloads[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#3d3d3d}.cap_number[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"]}),_)}],w=((C=function t(){n(this,t)}).\u0275mod=b.Eb({type:C}),C.\u0275inj=b.Db({factory:function(n){return new(n||C)},imports:[[s.i.forChild(h)],s.i]}),C),m=((O=function t(){n(this,t)}).\u0275mod=b.Eb({type:O}),O.\u0275inj=b.Db({factory:function(n){return new(n||O)},imports:[[c.b,r.a,a.u,w]]}),O)}}])}();