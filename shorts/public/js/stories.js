(self.webpackChunkpixelfed=self.webpackChunkpixelfed||[]).push([[279],{17586:(t,e,s)=>{"use strict";function i(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);"Object"===s&&t.constructor&&(s=t.constructor.name);if("Map"===s||"Set"===s)return Array.from(t);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return o(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,i=new Array(e);s<e;s++)i[s]=t[s];return i}s.r(e),s.d(e,{default:()=>r});const r={props:{pid:{type:String},selfProfile:{type:Object},redirectUrl:{type:String,default:"/"}},data:function(){return{loading:!0,profile:null,account:{local:!1},owner:!1,stories:[],username:"loading...",avatar:"/storage/avatars/default.jpg",storyIndex:0,progress:0,constInterval:383,progressInterval:void 0,composeText:null,paused:!1,muted:!0,reactionEmoji:["❤️","🔥","💯","😂","😎","👀"],activeReactionEmoji:!1,activeReply:!1,showProgress:!1,redirectOnEnd:"/",viewerSid:!1,viewerPage:1,loadingViewers:!1,viewersHasMore:!0,viewers:[],viewWarning:!1,showingPollResults:!1,loadingPollResults:!1,pollResults:[],pollTotalVotes:0}},watch:{composeText:function(t){0==t.length?this.paused&&this.pause():this.paused||this.pause(),event.currentTarget.focus()}},beforeMount:function(){this.redirectOnEnd=this.redirectUrl},mounted:function(){var t=this,e=new URLSearchParams(window.location.search);if(e.has("t"))switch(e.get("t")){case"1":this.redirectOnEnd="/";break;case"2":this.redirectOnEnd="/timeline/public";break;case"3":this.redirectOnEnd="/timeline/network";break;case"4":this.redirectOnEnd="/"+window.location.pathname.split("/").slice(-1).pop()}else this.viewWarning=!0;this.selfProfile&&this.selfProfile.hasOwnProperty("avatar")?this.profile=this.selfProfile:axios.get("/api/pixelfed/v1/accounts/verify_credentials").then((function(e){t.profile=e.data,t.fetchStories()}));var s=document.querySelector("body");s.style.width="100%",s.style.height="100vh !important",s.style.overflow="hidden",s.style.backgroundColor="#262626"},methods:{init:function(){var t=this;clearInterval(this.progressInterval),this.loading=!1,this.constInterval=Math.ceil(38.3*this.stories[this.storyIndex].duration),this.progressInterval=setInterval((function(){t.do()}),this.constInterval)},do:function(){this.loading=!1,100!=this.stories[this.storyIndex].progress?this.stories[this.storyIndex].progress=this.stories[this.storyIndex].progress+4:(clearInterval(this.progressInterval),this.next())},prev:function(){0!=this.storyIndex&&(this.pollResults=[],this.progress=0,this.gotoSlide(this.storyIndex-1))},next:function(){if(axios.post("/api/web/stories/v1/viewed",{id:this.stories[this.storyIndex].id}),this.stories[this.storyIndex].progress=100,this.storyIndex!=this.stories.length-1)this.pollResults=[],this.progress=0,this.muted=!0,this.storyIndex=this.storyIndex+1,this.init();else{if(this.composeText&&this.composeText.length)return;window.location.href=this.redirectOnEnd}},pause:function(){if(event&&event.currentTarget.blur(),this.paused){if(this.paused=!1,"video"==this.stories[this.storyIndex].type)document.getElementById("playr").play();this.init()}else{if(clearInterval(this.progressInterval),"video"==this.stories[this.storyIndex].type)document.getElementById("playr").pause();this.paused=!0}},toggleMute:function(){(event&&event.currentTarget.blur(),"video"==this.stories[this.storyIndex].type)&&(this.muted=!this.muted,document.getElementById("playr").muted=this.muted)},gotoSlide:function(t){this.paused=!1,clearInterval(this.progressInterval),this.progressInterval=null,this.stories=this.stories.map((function(e,s){return e.progress=s<t?100:0,e})),this.storyIndex=t,this.stories[t].progress=0,this.init()},showMenu:function(){this.paused||this.pause(),event.currentTarget.blur(),this.$refs.ctxMenu.show()},react:function(t){var e=this;this.$refs.ctxMenu.hide(),this.activeReactionEmoji=!0,axios.post("/api/web/stories/v1/react",{sid:this.stories[this.storyIndex].id,reaction:t}).then((function(t){setTimeout((function(){e.activeReactionEmoji=!1,e.pause()}),2e3)})).catch((function(t){e.activeReactionEmoji=!1,swal("Error","An error occured when attempting to react to this story. Please try again later.","error")}))},comment:function(){var t=this;this.composeText.length<2||(this.paused||this.pause(),this.activeReply=!0,axios.post("/api/web/stories/v1/comment",{sid:this.stories[this.storyIndex].id,caption:this.composeText}).then((function(e){t.composeText=null,setTimeout((function(){t.activeReply=!1,t.pause()}),2e3)})).catch((function(e){t.activeReply=!1,swal("Error","An error occured when attempting to reply to this story. Please try again later.","error")})))},closeCtxMenu:function(){this.$refs.ctxMenu.hide()},backToFeed:function(){var t=this;this.composeText?swal("Are you sure you want to leave without sending this reply?").then((function(e){e&&(window.location.href=t.redirectOnEnd)})):window.location.href=this.redirectOnEnd},timeago:function(t){return App.util.format.timeAgo(t)},timeahead:function(t){var e=new Date(t);return App.util.format.timeAhead(e.toUTCString())},fetchStories:function(){var t=this,e=this;axios.get("/api/web/stories/v1/profile/"+this.pid).then((function(s){if(0==s.data.length&&(window.location.href=t.redirectOnEnd),e.account=s.data[0].account,0==e.account.local&&(e.account.domain=e.account.acct.split("@")[1]),e.stories=s.data[0].nodes.map((function(t,e){var s={id:t.id,created_at:t.created_at,expires_at:t.expires_at,progress:t.progress,view_count:t.view_count,url:t.src,type:t.type,duration:t.duration,can_reply:t.can_reply,can_react:t.can_react};return"poll"==s.type&&(s.question=t.question,s.options=t.options,s.voted=t.voted,s.voted_index=t.voted_index),s})),e.username=s.data[0].account.username,e.avatar=s.data[0].account.avatar,e.profile.id==s.data[0].account.id&&(t.viewWarning=!1),t.viewWarning)t.loading=!1;else{var i=s.data[0].nodes.filter((function(t,e){return 1==t.seen})).map((function(t,e){return e}));if(i.length&&t.pid!=t.profile.id){var o=i[i.length-1]+1==e.stories.length?i[i.length-1]:i[i.length-1]+1;e.gotoSlide(o)}t.pid==t.profile.id&&e.gotoSlide(e.stories.length-1),e.showProgress=!0,e.profile.id==e.account.id&&(e.owner=!0),0!=s.data.length?t.init():window.location.href=t.redirectOnEnd}})).catch((function(t){}))},fetchViewers:function(){var t=this;this.closeCtxMenu(),this.$refs.viewersModal.show(),this.stories[this.storyIndex].id!=this.viewerSid&&(this.loadingViewers=!0,axios.get("/api/web/stories/v1/viewers",{params:{sid:this.stories[this.storyIndex].id}}).then((function(e){t.viewerSid=t.stories[t.storyIndex].id,t.viewers=e.data,t.loadingViewers=!1,t.viewerPage=2,10==t.viewers.length?t.viewersHasMore=!0:t.viewersHasMore=!1})).catch((function(t){swal("Cannot load viewers","Cannot load viewers of this story, please try again later.","error")})))},viewersLoadMore:function(){var t=this;axios.get("/api/web/stories/v1/viewers",{params:{sid:this.stories[this.storyIndex].id,page:this.viewerPage}}).then((function(e){var s;e.data&&0!=e.data.length?(10!=e.data.length&&(t.viewersHasMore=!1),(s=t.viewers).push.apply(s,i(e.data)),t.viewerPage++):t.viewersHasMore=!1})).catch((function(t){swal("Cannot load viewers","Cannot load viewers of this story, please try again later.","error")}))},closeViewersModal:function(){this.$refs.viewersModal.hide()},deleteStory:function(){var t=this;this.closeCtxMenu(),window.confirm("Are you sure you want to delete this story?")?axios.delete("/api/web/stories/v1/delete/"+this.stories[this.storyIndex].id).then((function(e){t.storyIndex;1!=t.stories.length?window.location.reload():window.location.href="/"})):this.pause()},selectPollOption:function(t){var e=this;this.paused||this.pause(),axios.post("/i/stories/viewed",{id:this.stories[this.storyIndex].id}),axios.post("/api/web/stories/v1/poll/vote",{sid:this.stories[this.storyIndex].id,ci:t}).then((function(s){e.stories[e.storyIndex].voted=!0,e.stories[e.storyIndex].voted_index=t,e.next()}))},ctxMenuReport:function(){this.$refs.ctxMenu.hide(),this.$refs.ctxReport.show()},openCtxReportOtherMenu:function(){this.closeCtxMenu(),this.$refs.ctxReport.hide(),this.$refs.ctxReportOther.show()},ctxReportMenuGoBack:function(){this.closeMenus()},ctxReportOtherMenuGoBack:function(){this.closeMenus()},closeMenus:function(){this.$refs.ctxReportOther.hide(),this.$refs.ctxReport.hide(),this.$refs.ctxMenu.hide()},sendReport:function(t){var e=this,s=this.stories[this.storyIndex].id;swal({title:"Confirm Report",text:"Are you sure you want to report this post?",icon:"warning",buttons:!0,dangerMode:!0}).then((function(i){i?axios.post("/api/web/stories/v1/report",{type:t,id:s}).then((function(t){e.closeMenus(),swal("Report Sent!","We have successfully received your report","success")})).catch((function(t){409===t.response.status?swal("Already reported","You have already reported this story","info"):swal("Oops!","There was an issue reporting this story","error")})):e.closeMenus()}))},cancelViewStory:function(){event.currentTarget.blur(),location.href="/i/web"},confirmViewStory:function(){var t=this,e=this.stories.filter((function(t,e){return 1==t.seen})).map((function(t,e){return e}));if(e.length&&this.pid!=this.profile.id){var s=e[e.length-1]+1==t.stories.length?e[e.length-1]:e[e.length-1]+1;t.gotoSlide(s)}this.pid==this.profile.id&&t.gotoSlide(t.stories.length-1),t.showProgress=!0,t.profile.username==t.username&&(t.owner=!0),this.viewWarning=!1,this.init()},showPollResults:function(){var t=this;this.loadingPollResults=!0,this.paused||this.pause(),axios.get("/api/web/stories/v1/poll/results",{params:{sid:this.stories[this.storyIndex].id}}).then((function(e){t.loadingPollResults=!1,t.pollResults=e.data;t.pollTotalVotes=t.pollResults.reduce((function(t,e){return t+e}))}))},addToStory:function(){window.location.href="/i/stories/new"},pollPercent:function(t){return 0==this.pollTotalVotes?0:Math.round(this.pollResults[t]/this.pollTotalVotes*100)}}}},45021:(t,e,s)=>{Vue.component("story-viewer",s(35179).default)},37061:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(23645),o=s.n(i)()((function(t){return t[1]}));o.push([t.id,"#content[data-v-1bff5ab6]{background-color:#262626;height:100vh!important;overflow:hidden;width:100%}.story-viewer-component-card[data-v-1bff5ab6]{height:100vh}@media(min-width:768px){.story-viewer-component-card[data-v-1bff5ab6]{height:90vh}}.story-viewer-component.bg-black[data-v-1bff5ab6]{background-color:#262626}.story-viewer-component .option-green[data-v-1bff5ab6]{-webkit-text-fill-color:transparent;background:#11998e;background:linear-gradient(180deg,#38ef7d,#11998e);-webkit-background-clip:text;font-size:20px;font-weight:600}.story-viewer-component .option-red[data-v-1bff5ab6]{-webkit-text-fill-color:transparent;background:linear-gradient(90deg,#f27121,#e94057,#8a2387);-webkit-background-clip:text;font-weight:600}.story-viewer-component .bg-black[data-v-1bff5ab6]{background-color:#262626}.story-viewer-component .fade-enter-active[data-v-1bff5ab6],.story-viewer-component .fade-leave-active[data-v-1bff5ab6]{transition:opacity .5s}.story-viewer-component .fade-enter[data-v-1bff5ab6],.story-viewer-component .fade-leave-to[data-v-1bff5ab6]{opacity:0}.story-viewer-component .progress[data-v-1bff5ab6]{background-color:#979a9a}.story-viewer-component .media-slot[data-v-1bff5ab6]{background:#000;background-size:cover!important;border-radius:0;height:100%;left:0;position:absolute;top:0;width:100%;z-index:0}.story-viewer-component .card-body .top-overlay[data-v-1bff5ab6]{background:linear-gradient(180deg,rgba(38,38,38,.8),rgba(38,38,38,0));border-radius:5px;height:100px;margin-left:-35px;margin-right:-35px;margin-top:-20px;padding-bottom:20px}.story-viewer-component .card-footer[data-v-1bff5ab6] ::-moz-placeholder{color:#fff;opacity:1}.story-viewer-component .card-footer[data-v-1bff5ab6] :-ms-input-placeholder{color:#fff;opacity:1}.story-viewer-component .card-footer[data-v-1bff5ab6] ::placeholder{color:#fff;opacity:1}.story-viewer-component .card-footer .bottom-overlay[data-v-1bff5ab6]{background:linear-gradient(0deg,rgba(38,38,38,.8),rgba(38,38,38,0));border-radius:5px;margin-bottom:-20px;margin-left:-35px;margin-right:-35px}.story-viewer-component .card-footer .bottom-overlay .form-group[data-v-1bff5ab6]{margin-bottom:0;padding-bottom:20px;padding-top:40px}",""]);const r=o},54202:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>a});var i=s(93379),o=s.n(i),r=s(37061),n={insert:"head",singleton:!1};o()(r.default,n);const a=r.default.locals||{}},35179:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(74334),o=s(31056),r={};for(const t in o)"default"!==t&&(r[t]=()=>o[t]);s.d(e,r);s(44685);const n=(0,s(51900).default)(o.default,i.render,i.staticRenderFns,!1,null,"1bff5ab6",null).exports},31056:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(17586),o={};for(const t in i)"default"!==t&&(o[t]=()=>i[t]);s.d(e,o);const r=i.default},44685:(t,e,s)=>{"use strict";s.r(e);var i=s(54202),o={};for(const t in i)"default"!==t&&(o[t]=()=>i[t]);s.d(e,o)},74334:(t,e,s)=>{"use strict";s.r(e);var i=s(4912),o={};for(const t in i)"default"!==t&&(o[t]=()=>i[t]);s.d(e,o)},4912:(t,e,s)=>{"use strict";s.r(e),s.d(e,{render:()=>i,staticRenderFns:()=>o});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"story-viewer-component container mt-0 mt-md-5 bg-black"},[s("button",{staticClass:"d-none d-md-block btn btn-link fixed-top",staticStyle:{left:"auto",right:"0"},attrs:{type:"button"},on:{click:t.backToFeed}},[s("i",{staticClass:"fal fa-times-circle fa-2x text-lighter"})]),t._v(" "),t.viewWarning?s("div",{staticClass:"row d-flex justify-content-center align-items-center"},[t.loading?t._e():s("div",{staticClass:"col-12 col-md-6 rounded-lg p-0"},["photo"==t.stories[t.storyIndex].type?s("div",{key:"msl:"+t.storyIndex,staticClass:"media-slot rounded-lg",style:{backgroundImage:"url("+t.stories[t.storyIndex].url+")"}}):t._e(),t._v(" "),s("div",{staticClass:"story-viewer-component-card card bg-transparent border-0 shadow-none d-flex justify-content-center",staticStyle:{"backdrop-filter":"blur(40px) brightness(0.3)","-webkit-backdrop-filter":"blur(10px)"}},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"w-100 h-100 d-flex justify-content-center align-items-center"},[s("div",{staticClass:"text-center"},[s("img",{staticClass:"rounded-circle border mb-3 shadow",attrs:{src:t.profile.avatar,width:"120",height:"120"}}),t._v(" "),s("p",{staticClass:"lead text-lighter mb-1"},[t._v("View as "),s("span",{staticClass:"text-white"},[t._v(t._s(t.profile.username))])]),t._v(" "),s("p",{staticClass:"text-lighter font-weight-lighter px-md-5 py-3"},[s("span",{staticClass:"text-white font-weight-bold"},[t._v(t._s(t.account.acct))]),t._v(" will be able to see that you viewed their story.\n\t\t\t\t\t\t\t")]),t._v(" "),s("button",{staticClass:"btn btn-outline-lighter rounded-pill py-1 font-weight-bold",on:{click:t.confirmViewStory}},[t._v("View Story")]),t._v(" "),s("button",{staticClass:"btn btn-outline-lighter rounded-pill py-1 font-weight-bold",on:{click:t.cancelViewStory}},[t._v("Cancel")])])])])])])]):s("div",{staticClass:"row d-flex justify-content-center align-items-center"},[s("div",{staticClass:"d-none d-md-block col-md-1 cursor-pointer text-center",on:{click:t.prev}},[t.storyIndex>0?s("div",[s("i",{staticClass:"fas fa-chevron-circle-left text-muted fa-2x"})]):t._e()]),t._v(" "),t.loading?t._e():s("div",{staticClass:"col-12 col-md-6 rounded-lg"},[t.activeReactionEmoji?s("div",{staticClass:"w-100 h-100 d-flex justify-content-center align-items-center",staticStyle:{position:"absolute","z-index":"999"}},[t._m(0)]):t._e(),t._v(" "),t.activeReply?s("div",{staticClass:"w-100 h-100 d-flex justify-content-center align-items-center",staticStyle:{position:"absolute","z-index":"999"}},[t._m(1)]):t._e(),t._v(" "),s("transition",{attrs:{name:"fade"}},["photo"==t.stories[t.storyIndex].type?s("div",{key:"msl:"+t.storyIndex,staticClass:"media-slot rounded-lg",style:{background:"url("+t.stories[t.storyIndex].url+")"}}):t._e(),t._v(" "),"poll"==t.stories[t.storyIndex].type?s("div",{key:"msl:"+t.storyIndex,staticClass:"media-slot rounded-lg",style:{background:"linear-gradient(to right, #F27121, #E94057, #8A2387)"}}):t._e(),t._v(" "),"video"==t.stories[t.storyIndex].type?s("video",{key:"plyr"+t.stories[t.storyIndex].id,staticClass:"media-slot rounded-lg",staticStyle:{"object-fit":"contain"},attrs:{id:"playr",loop:"",autoplay:"","no-controls":""},domProps:{muted:t.muted}},[s("source",{attrs:{src:t.stories[t.storyIndex].url,type:"video/mp4"}})]):t._e()]),t._v(" "),s("div",{staticClass:"story-viewer-component-card card bg-transparent border-0 shadow-none d-flex justify-content-center"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"px-0 top-overlay"},[s("div",{staticClass:"pt-4 pt-md-3 px-4 d-flex"},[s("div",{staticClass:"d-none bg-muted",staticStyle:{width:"100%",height:"5px"}}),t._v(" "),t._l(t.stories,(function(e,i){return s("div",{key:"sp:s"+i,staticClass:"w-100 cursor-pointer",class:{"mr-2":i!=t.stories.length-1},on:{click:function(e){return t.gotoSlide(i)}}},[s("div",{staticClass:"progress w-100",staticStyle:{"z-index":"3",height:"4px"},style:{opacity:0==e.progress?.7:.8}},[s("div",{key:"sp:si"+i,staticClass:"progress-bar bg-light",style:{width:e.progress+"%",transition:"none !important"},attrs:{role:"progressbar","aria-valuenow":e.progress,"aria-valuemin":"0","aria-valuemax":"100"}})])])}))],2),t._v(" "),s("div",{staticClass:"pt-4 px-4 media align-items-center"},[s("img",{staticClass:"rounded-circle mr-2",attrs:{src:t.avatar,width:"32",height:"32",onerror:"this.onerror=null;this.src='/storage/avatars/default.png?v=2'"}}),t._v(" "),s("div",{staticClass:"media-body d-flex justify-content-between align-items-center"},[s("div",{staticClass:"user-select-none d-flex align-items-center"},[t.account.local?s("span",{staticClass:"text-white font-weight-bold mr-2"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.username)+"\n\t\t\t\t\t\t\t\t\t")]):s("span",{staticClass:"text-white font-weight-bold mr-3 text-truncate",staticStyle:{"max-width":"200px"}},[s("span",{staticClass:"d-block mb-n2"},[t._v(t._s(t.account.username))]),t._v(" "),s("span",{staticClass:"small"},[t._v(t._s(t.account.domain))])]),t._v(" "),s("span",{staticClass:"text-white font-weight-light",staticStyle:{"font-size":"14px"}},[t._v(t._s(t.timeago(t.stories[t.storyIndex].created_at)))]),t._v(" "),"poll"==t.stories[t.storyIndex].type?s("span",[s("span",{staticClass:"btn btn-outline-light font-weight-light btn-sm px-1 rounded py-0 ml-2"},[t._v("POLL")])]):t._e()]),t._v(" "),s("div",[s("button",{staticClass:"btn btn-link btn-sm text-white mr-0 px-1",on:{click:function(e){return e.preventDefault(),t.pause.apply(null,arguments)}}},[s("i",{staticClass:"fas fa-lg",class:[t.paused?"fa-play":"fa-pause"]})]),t._v(" "),"video"==t.stories[t.storyIndex].type?s("button",{staticClass:"btn btn-link text-white px-2",on:{click:t.toggleMute}},[s("i",{staticClass:"fas fa-lg",class:[t.muted?"fa-volume-mute":"fa-volume-up"]})]):t._e(),t._v(" "),s("button",{staticClass:"btn btn-link text-white px-1",on:{click:t.showMenu}},[s("i",{staticClass:"fas fa-ellipsis-h fa-lg"})]),t._v(" "),s("button",{staticClass:"d-inline-block d-md-none btn btn-link text-white pl-1 pr-0",on:{click:t.backToFeed}},[s("i",{staticClass:"far fa-times-circle fa-lg"})])])])])]),t._v(" "),s("div",{staticStyle:{height:"70vh"},on:{click:t.pause}},["poll"==t.stories[t.storyIndex].type?s("div",{staticClass:"w-100 h-100 d-flex justify-content-center align-items-center"},[s("div",[s("p",{staticClass:"text-white pb-5 text-break font-weight-lighter",class:[t.stories[t.storyIndex].question.length<60?"h1":"h3"]},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.stories[t.storyIndex].question)+"\n\t\t\t\t\t\t\t\t")]),t._v(" "),s("div",{staticClass:"text-center mt-3"},t._l(t.stories[t.storyIndex].options,(function(e,i){return s("div",{staticClass:"mb-3"},[s("button",{staticClass:"btn border px-4 py-3 text-uppercase btn-block",class:[e.length<14?"btn-lg":"",i==t.stories[t.storyIndex].voted_index?"btn-light":"btn-outline-light"],staticStyle:{"min-width":"300px"},attrs:{disabled:t.stories[t.storyIndex].voted||t.owner},on:{click:function(e){return t.selectPollOption(i)}}},[s("span",{staticClass:"text-break",class:[i==t.stories[t.storyIndex].voted_index?"option-red":""]},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),t.owner&&t.pollResults.length?s("p",{staticClass:"small text-left mt-1 text-light"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.pollPercent(i))+"% - "+t._s(t.pollResults[i])+" "+t._s(1==t.pollResults[i]?"vote":"votes")+"\n\t\t\t\t\t\t\t\t\t\t")]):t._e()])})),0),t._v(" "),t.owner&&!t.showingPollResults&&0==t.pollResults.length?s("div",{staticClass:"mt-3 text-center"},[s("button",{staticClass:"btn btn-light font-weight-bold",attrs:{disabled:t.loadingPollResults},on:{click:t.showPollResults}},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.loadingPollResults?"Loading...":"View Results")+"\n\t\t\t\t\t\t\t\t\t")])]):t._e()])]):t._e()])]),t._v(" "),!t.owner&&t.stories[t.storyIndex]&&t.stories[t.storyIndex].can_reply?s("div",{staticClass:"card-footer bg-transparent border-0"},[s("div",{staticClass:"px-0 bottom-overlay"},[s("div",{staticClass:"px-3 form-group d-flex"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.composeText,expression:"composeText"}],staticClass:"form-control bg-transparent border border-white rounded-pill text-white",attrs:{placeholder:"Reply to "+t.username+"..."},domProps:{value:t.composeText},on:{input:function(e){e.target.composing||(t.composeText=e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-outline-light rounded-pill ml-2",on:{click:t.comment}},[t._v("\n\t\t\t\t\t\t\t\tSEND\n\t\t\t\t\t\t\t")])])])]):t._e()])],1),t._v(" "),s("div",{staticClass:"d-none d-md-block col-md-1 cursor-pointer text-center"},[t.storyIndex+1<t.stories.length?s("div",{on:{click:t.next}},[s("i",{staticClass:"fas fa-chevron-circle-right text-muted fa-2x"})]):t._e(),t._v(" "),t.storyIndex+1==t.stories.length&&t.owner?s("div",{on:{click:t.addToStory}},[s("i",{staticClass:"fal fa-plus-circle text-muted fa-2x"})]):t._e()]),t._v(" "),t.loading?s("div",{staticClass:"col-12 col-md-6 rounded-lg"},[t._m(2)]):t._e()]),t._v(" "),s("div",{staticClass:"modal-stack"},[s("b-modal",{ref:"ctxMenu",attrs:{id:"ctx-modal","hide-header":"","hide-footer":"",centered:"",rounded:"",size:"sm","body-class":"list-group-flush p-0 rounded"}},[s("div",{staticClass:"list-group text-center"},[t.owner?s("div",{staticClass:"list-group-item rounded py-3"},[s("div",{staticClass:"d-flex justify-content-between align-items-center font-weight-light"},[s("span",[t._v("Expires in "+t._s(t.timeahead(t.stories[t.storyIndex].expires_at)))]),t._v(" "),s("span",[s("span",{staticClass:"btn btn-light btn-sm font-weight-bold"},[s("i",{staticClass:"fas fa-eye"}),t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.stories[t.storyIndex].view_count)+"\n\t\t\t\t\t\t\t")])])])]):t._e(),t._v(" "),!t.owner&&t.stories[t.storyIndex]&&t.stories[t.storyIndex].can_react?s("div",{staticClass:"list-group-item rounded d-flex justify-content-between"},t._l(t.reactionEmoji,(function(e){return s("button",{staticClass:"btn btn-light rounded-pill py-1 px-2",staticStyle:{"font-size":"20px"},on:{click:function(s){return t.react(e)}}},[t._v("\n\t\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t\t")])})),0):t._e(),t._v(" "),t.owner?s("div",{staticClass:"list-group-item rounded cursor-pointer",on:{click:t.fetchViewers}},[t._v("Viewers")]):t._e(),t._v(" "),t.owner?t._e():s("div",{staticClass:"list-group-item rounded cursor-pointer",on:{click:t.ctxMenuReport}},[t._v("Report")]),t._v(" "),t.owner?s("div",{staticClass:"list-group-item rounded cursor-pointer",on:{click:t.deleteStory}},[t._v("Delete")]):t._e(),t._v(" "),s("div",{staticClass:"list-group-item rounded cursor-pointer text-muted",on:{click:t.closeCtxMenu}},[t._v("Close")])])]),t._v(" "),s("b-modal",{ref:"viewersModal",attrs:{id:"viewers",title:"Viewers","header-class":"border-0","hide-footer":"",centered:"",rounded:"",scrollable:"",lazy:"",size:"sm","body-class":"list-group-flush p-0 rounded"}},[s("div",{staticClass:"list-group",staticStyle:{"max-height":"40vh"}},[t._l(t.viewers,(function(e,i){return s("div",{staticClass:"list-group-item"},[s("div",{staticClass:"media align-items-center"},[s("img",{staticClass:"rounded-circle border mr-2",attrs:{src:e.avatar,width:"32",height:"32"}}),t._v(" "),e.local?s("div",{staticClass:"media-body user-select-none"},[s("p",{staticClass:"font-weight-bold mb-0"},[t._v(t._s(e.username))])]):s("div",{staticClass:"media-body user-select-none"},[s("p",{staticClass:"font-weight-bold mb-0"},[t._v(t._s(e.username))]),t._v(" "),s("p",{staticClass:"mb-0 small mt-n1 text-muted"},[t._v(t._s(e.acct.split("@")[1]))])])])])})),t._v(" "),0==t.viewers.length?s("div",{staticClass:"list-group-item text-center text-dark font-weight-light py-5"},[t._v("\n\t\t\t\t\tNo viewers yet\n\t\t\t\t")]):t._e(),t._v(" "),t.viewersHasMore?s("div",{staticClass:"list-group-item text-center border-bottom-0"},[s("button",{staticClass:"btn btn-light font-weight-bold border rounded-pill",on:{click:t.viewersLoadMore}},[t._v("Load More")])]):t._e(),t._v(" "),s("div",{staticClass:"list-group-item text-center rounded cursor-pointer text-muted",on:{click:t.closeViewersModal}},[t._v("Close")])],2)]),t._v(" "),s("b-modal",{ref:"ctxReport",attrs:{id:"ctx-report","hide-header":"","hide-footer":"",centered:"",rounded:"",size:"sm","body-class":"list-group-flush p-0 rounded"}},[s("p",{staticClass:"py-2 px-3 mb-0"}),s("div",{staticClass:"text-center font-weight-bold text-danger"},[t._v("Report")]),t._v(" "),s("div",{staticClass:"small text-center text-muted"},[t._v("Select one of the following options")]),t._v(" "),s("p"),t._v(" "),s("div",{staticClass:"list-group text-center"},[s("div",{staticClass:"list-group-item rounded cursor-pointer font-weight-bold",on:{click:function(e){return t.sendReport("spam")}}},[t._v("Spam")]),t._v(" "),s("div",{staticClass:"list-group-item rounded cursor-pointer font-weight-bold",on:{click:function(e){return t.sendReport("sensitive")}}},[t._v("Sensitive Content")]),t._v(" "),s("div",{staticClass:"list-group-item rounded cursor-pointer font-weight-bold",on:{click:function(e){return t.sendReport("abusive")}}},[t._v("Abusive or Harmful")]),t._v(" "),s("div",{staticClass:"list-group-item rounded cursor-pointer font-weight-bold",on:{click:function(e){return t.openCtxReportOtherMenu()}}},[t._v("Other")]),t._v(" "),s("div",{staticClass:"list-group-item rounded cursor-pointer text-lighter",on:{click:function(e){return t.ctxReportMenuGoBack()}}},[t._v("Cancel")])])]),t._v(" "),s("b-modal",{ref:"ctxReportOther",attrs:{id:"ctx-report-other","hide-header":"","hide-footer":"",centered:"",rounded:"",size:"sm","body-class":"list-group-flush p-0 rounded"}},[s("p",{staticClass:"py-2 px-3 mb-0"}),s("div",{staticClass:"text-center font-weight-bold text-danger"},[t._v("Report")]),t._v(" "),s("div",{staticClass:"small text-center text-muted"},[t._v("Select one of the following options")]),t._v(" "),s("p"),t._v(" "),s("div",{staticClass:"list-group text-center"},[s("div",{staticClass:"list-group-item rounded cursor-pointer font-weight-bold",on:{click:function(e){return t.sendReport("underage")}}},[t._v("Underage Account")]),t._v(" "),s("div",{staticClass:"list-group-item rounded cursor-pointer font-weight-bold",on:{click:function(e){return t.sendReport("copyright")}}},[t._v("Copyright Infringement")]),t._v(" "),s("div",{staticClass:"list-group-item rounded cursor-pointer font-weight-bold",on:{click:function(e){return t.sendReport("impersonation")}}},[t._v("Impersonation")]),t._v(" "),s("div",{staticClass:"list-group-item rounded cursor-pointer font-weight-bold",on:{click:function(e){return t.sendReport("scam")}}},[t._v("Scam or Fraud")]),t._v(" "),s("div",{staticClass:"list-group-item rounded cursor-pointer text-lighter",on:{click:function(e){return t.ctxReportOtherMenuGoBack()}}},[t._v("Cancel")])])])],1)])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex justify-content-center align-items-center rounded-pill shadow-lg",staticStyle:{width:"120px",height:"30px","font-size":"13px","background-color":"rgba(0, 0, 0, 0.6)"}},[s("span",{staticClass:"text-lighter"},[t._v("Reaction sent")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex justify-content-center align-items-center rounded-pill shadow-lg",staticStyle:{width:"120px",height:"30px","font-size":"13px","background-color":"rgba(0, 0, 0, 0.6)"}},[s("span",{staticClass:"text-lighter"},[t._v("Reply sent")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card border-0 shadow-none d-flex justify-content-center",staticStyle:{background:"#000",height:"90vh"}},[s("div",{staticClass:"card-body d-flex justify-content-center align-items-center"},[s("div",{staticClass:"spinner-border text-lighter",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v("Loading...")])])])])}]}},t=>{t.O(0,[898],(()=>{return e=45021,t(t.s=e);var e}));t.O()}]);