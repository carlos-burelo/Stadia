(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{cfYA:function(n,t,e){"use strict";e.r(t),e.d(t,"EpisodePageModule",function(){return C});var o=e("ofXK"),i=e("3Pt+"),c=e("TEn/"),r=e("tyNb"),s=e("fXoL"),a=e("UfqK"),b=e("jhN1");function d(n,t){if(1&n){const n=s.Mb();s.Lb(0,"button",17),s.Tb("click",function(){s.cc(n);const e=t.$implicit;return s.Vb().getVideo(e.video)}),s.Jb(1,"ion-icon",18),s.hc(2),s.Kb()}if(2&n){const n=t.$implicit;s.yb(2),s.jc("",n.videoname," ")}}function g(n,t){1&n&&(s.Lb(0,"div",19),s.Jb(1,"ion-icon",20),s.Lb(2,"p"),s.hc(3,"Select any server & click me"),s.Kb(),s.Kb())}function l(n,t){if(1&n){const n=s.Mb();s.Lb(0,"button",21),s.Tb("click",function(){s.cc(n);const t=s.Vb();return t.backButton(t.ep)}),s.Jb(1,"ion-icon",22),s.Kb()}}function p(n,t){if(1&n){const n=s.Mb();s.Lb(0,"button",23),s.Tb("click",function(){s.cc(n);const t=s.Vb();return t.nextButton(t.ep)}),s.Jb(1,"ion-icon",24),s.Kb()}}function u(n,t){if(1&n&&(s.Lb(0,"a",25),s.Jb(1,"ion-icon",26),s.hc(2),s.Kb()),2&n){const n=t.$implicit;s.Yb("href",n.link,s.ec),s.yb(2),s.jc("",n.server," ")}}const f=function(){return["/home"]},_=function(n){return["/anime",n]},O=[{path:"",component:(()=>{class n{constructor(n,t,e,o){this.apiSvc=n,this.route=t,this.router=e,this.sanitizer=o,this.waiting=!0,this.videourl="https://wwww.google.com",this.btn_next=!0,this.btn_back=!0}ngOnInit(){this.getEpisode(),this.getVideo("https://media.discordapp.net/attachments/536165526011904010/538450208376356875/Portada_2.jpg")}getEpisode(){this.apiSvc.getEpisode(this.route.snapshot.params.id).subscribe(n=>{this.episode=n,this.title=this.episode.title,this.animeId=this.episode.animeId,this.videos=this.episode.videos,this.ep=this.episode.epNumber,this.downloads=this.episode.downloads,this.apiSvc.getAnime(this.animeId).subscribe(n=>{this.anime=n,this.totalEpisodes=this.anime.anime.episodes.length})})}nextButton(n){if(console.clear(),n==this.totalEpisodes&&(this.btn_next=!1),n<this.totalEpisodes){let t=n+1,e=this.route.snapshot.params.id.replace(`-episodio-${n}`,"");this.router.navigate(["ver/",`${e}-episodio-${t}`])}}backButton(n){if(console.clear(),n<2&&(this.btn_back=!1,console.log("ya no se puede bajar")),n>1){let t=n-1,e=this.route.snapshot.params.id.replace(`-episodio-${n}`,"");this.router.navigate(["ver/",`${e}-episodio-${t}`])}}unlock(){this.waiting=!1}getVideo(n){this.videourl=n,this.videourlSafe=this.sanitizer.bypassSecurityTrustResourceUrl(this.videourl),console.clear()}}return n.\u0275fac=function(t){return new(t||n)(s.Ib(a.a),s.Ib(r.a),s.Ib(r.g),s.Ib(b.b))},n.\u0275cmp=s.Cb({type:n,selectors:[["app-episode"]],decls:24,vars:13,consts:[["slot","start",3,"routerLink"],["name","arrow-back-outline"],[1,"episode-container"],[1,"servers-container"],[1,"servers"],["class","btn-server",3,"click",4,"ngFor","ngForOf"],[1,"cap_number"],[1,"video-player",3,"click"],["scrolling","no","allowfullscreen","","frameborder","0",3,"src"],["class","bg-wait",4,"ngIf"],[1,"controls"],["class","prev-button",3,"click",4,"ngIf"],[1,"all-episodes",3,"routerLink"],["name","list-outline"],["class","next-button",3,"click",4,"ngIf"],[1,"downloads"],["class","btn-server","target","_blank",3,"href",4,"ngFor","ngForOf"],[1,"btn-server",3,"click"],["name","play"],[1,"bg-wait"],["name","alarm-outline"],[1,"prev-button",3,"click"],["name","chevron-back-outline"],[1,"next-button",3,"click"],["name","chevron-forward-outline"],["target","_blank",1,"btn-server",3,"href"],["name","cloud-download"]],template:function(n,t){1&n&&(s.Lb(0,"ion-header"),s.Lb(1,"ion-toolbar"),s.Lb(2,"ion-buttons",0),s.Jb(3,"ion-icon",1),s.Kb(),s.Lb(4,"ion-title"),s.hc(5),s.Kb(),s.Kb(),s.Kb(),s.Lb(6,"ion-content"),s.Lb(7,"div",2),s.Lb(8,"div",3),s.Lb(9,"div",4),s.gc(10,d,3,1,"button",5),s.Kb(),s.Kb(),s.Lb(11,"div",6),s.Lb(12,"h4"),s.hc(13),s.Kb(),s.Kb(),s.Lb(14,"div",7),s.Tb("click",function(){return t.unlock()}),s.Jb(15,"iframe",8),s.gc(16,g,4,0,"div",9),s.Kb(),s.Lb(17,"div",10),s.gc(18,l,2,0,"button",11),s.Lb(19,"button",12),s.Jb(20,"ion-icon",13),s.Kb(),s.gc(21,p,2,0,"button",14),s.Kb(),s.Lb(22,"div",15),s.gc(23,u,3,2,"a",16),s.Kb(),s.Kb(),s.Kb()),2&n&&(s.yb(2),s.Yb("routerLink",s.Zb(10,f)),s.yb(3),s.ic(t.title),s.yb(5),s.Yb("ngForOf",t.videos),s.yb(3),s.jc(" Capitulo ",t.ep,""),s.yb(2),s.Yb("src",t.videourlSafe,s.dc),s.yb(1),s.Yb("ngIf",1==t.waiting),s.yb(2),s.Yb("ngIf",1==t.btn_back),s.yb(1),s.Yb("routerLink",s.ac(11,_,t.animeId)),s.yb(2),s.Yb("ngIf",1==t.btn_next),s.yb(2),s.Yb("ngForOf",t.downloads))},directives:[c.f,c.t,c.d,c.x,r.h,c.g,c.s,c.e,o.h,o.i],styles:["ion-toolbar[_ngcontent-%COMP%]{width:90%;margin:auto}ion-toolbar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff;font-size:20px}ion-buttons[_ngcontent-%COMP%], ion-buttons[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{outline:none}.episode-container[_ngcontent-%COMP%]{width:90%;margin:auto}.episode-container[_ngcontent-%COMP%]   .servers-container[_ngcontent-%COMP%]   .servers[_ngcontent-%COMP%]{margin-top:30px;width:100%;display:flex;justify-content:space-between;align-items:center;overflow-x:scroll}.episode-container[_ngcontent-%COMP%]   .servers-container[_ngcontent-%COMP%]   .servers[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;border-radius:8px;border:none;outline:none;padding:12px 18px;color:#fff;background-color:#151515;margin-right:15px}.episode-container[_ngcontent-%COMP%]   .servers-container[_ngcontent-%COMP%]   .servers[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:8px;color:#fff}.episode-container[_ngcontent-%COMP%]   .servers-container[_ngcontent-%COMP%]   .servers[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .episode-container[_ngcontent-%COMP%]   .servers-container[_ngcontent-%COMP%]   .servers[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .episode-container[_ngcontent-%COMP%]   .servers-container[_ngcontent-%COMP%]   .servers[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#3d3d3d}.episode-container[_ngcontent-%COMP%]   .servers-container[_ngcontent-%COMP%]   .servers[_ngcontent-%COMP%]::-webkit-scrollbar{background-color:transparent}.episode-container[_ngcontent-%COMP%]   .video-player[_ngcontent-%COMP%]{position:relative;margin-top:30px;width:100%;height:210px}.episode-container[_ngcontent-%COMP%]   .video-player[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{border:0;border-radius:8px}.episode-container[_ngcontent-%COMP%]   .video-player[_ngcontent-%COMP%]   .bg-wait[_ngcontent-%COMP%], .episode-container[_ngcontent-%COMP%]   .video-player[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center;-o-object-fit:cover;object-fit:cover;height:100%}.episode-container[_ngcontent-%COMP%]   .video-player[_ngcontent-%COMP%]   .bg-wait[_ngcontent-%COMP%]{top:0;left:0;position:absolute;flex-direction:column;background-color:rgba(55,55,55,.4117647058823529);border-radius:8px}.episode-container[_ngcontent-%COMP%]   .video-player[_ngcontent-%COMP%]   .bg-wait[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff;font-size:30px}.episode-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{width:100%;margin-top:20px;display:flex;align-items:center;justify-content:center}.episode-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 8px;outline:none;background-color:#151515;padding:20px 18px;border-radius:8px;display:flex;justify-content:center;align-items:center;text-align:center}.episode-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff;font-size:18px}.episode-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .episode-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .episode-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#3d3d3d}.episode-container[_ngcontent-%COMP%]   .downloads[_ngcontent-%COMP%]{margin-top:30px;width:100%;display:flex;justify-content:space-between;align-items:center;overflow-x:scroll}.episode-container[_ngcontent-%COMP%]   .downloads[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;margin:0 8px;outline:none;background-color:#151515;padding:10px 18px;border-radius:8px;display:flex;justify-content:center;align-items:center;text-align:center;color:#fff}.episode-container[_ngcontent-%COMP%]   .downloads[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff;margin-right:8px}.episode-container[_ngcontent-%COMP%]   .downloads[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .episode-container[_ngcontent-%COMP%]   .downloads[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .episode-container[_ngcontent-%COMP%]   .downloads[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#3d3d3d}[_ngcontent-%COMP%]::-webkit-scrollbar{background-color:transparent}.cap_number[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"]}),n})()}];let M=(()=>{class n{}return n.\u0275mod=s.Gb({type:n}),n.\u0275inj=s.Fb({factory:function(t){return new(t||n)},imports:[[r.i.forChild(O)],r.i]}),n})(),C=(()=>{class n{}return n.\u0275mod=s.Gb({type:n}),n.\u0275inj=s.Fb({factory:function(t){return new(t||n)},imports:[[o.b,i.a,c.u,M]]}),n})()}}]);