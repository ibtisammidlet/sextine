(self.webpackChunkpixelfed=self.webpackChunkpixelfed||[]).push([[364],{76668:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});var a=i(19755);const s={data:function(){return{config:window.App.config,profile:{},composeText:"",composeTextLength:0,nsfw:!1,filters:[],ids:[],media:[],carouselCursor:0,visibility:"public",mediaDrawer:!1,composeState:"publish",uploading:!1,uploadProgress:0,composeType:!1}},beforeMount:function(){this.fetchProfile()},mounted:function(){this.mediaWatcher(),this.filters=[["1977","filter-1977"],["Aden","filter-aden"],["Amaro","filter-amaro"],["Ashby","filter-ashby"],["Brannan","filter-brannan"],["Brooklyn","filter-brooklyn"],["Charmes","filter-charmes"],["Clarendon","filter-clarendon"],["Crema","filter-crema"],["Dogpatch","filter-dogpatch"],["Earlybird","filter-earlybird"],["Gingham","filter-gingham"],["Ginza","filter-ginza"],["Hefe","filter-hefe"],["Helena","filter-helena"],["Hudson","filter-hudson"],["Inkwell","filter-inkwell"],["Kelvin","filter-kelvin"],["Kuno","filter-juno"],["Lark","filter-lark"],["Lo-Fi","filter-lofi"],["Ludwig","filter-ludwig"],["Maven","filter-maven"],["Mayfair","filter-mayfair"],["Moon","filter-moon"],["Nashville","filter-nashville"],["Perpetua","filter-perpetua"],["Poprocket","filter-poprocket"],["Reyes","filter-reyes"],["Rise","filter-rise"],["Sierra","filter-sierra"],["Skyline","filter-skyline"],["Slumber","filter-slumber"],["Stinson","filter-stinson"],["Sutro","filter-sutro"],["Toaster","filter-toaster"],["Valencia","filter-valencia"],["Vesper","filter-vesper"],["Walden","filter-walden"],["Willow","filter-willow"],["X-Pro II","filter-xpro-ii"]]},methods:{fetchProfile:function(){var t=this;axios.get("/api/pixelfed/v1/accounts/verify_credentials").then((function(e){t.profile=e.data,1==e.data.locked&&(t.visibility="private")})).catch((function(t){}))},addMedia:function(t){var e=a(t.target);e.attr("disabled",""),a('.file-input[name="media"]').trigger("click"),e.blur(),e.removeAttr("disabled")},mediaWatcher:function(){var t=this;a(document).on("change",".file-input",(function(e){var i=document.querySelector(".file-input");Array.prototype.forEach.call(i.files,(function(e,i){if(t.uploading=!0,t.media&&t.media.length+i>=t.config.uploader.album_limit)swal("Error","You can only upload "+t.config.uploader.album_limit+" photos per album","error");else{var s=e.type,o=t.config.uploader.media_types.split(",");if(-1!=a.inArray(s,o)){var l=new FormData;l.append("file",e);var r={onUploadProgress:function(e){var i=Math.round(100*e.loaded/e.total);t.uploadProgress=i}};axios.post("/api/pixelfed/v1/media",l,r).then((function(e){t.uploadProgress=100,t.ids.push(e.data.id),t.media.push(e.data),setTimeout((function(){t.uploading=!1}),1e3)})).catch((function(i){t.uploading=!1,e.value=null,swal("Oops, something went wrong!","An unexpected error occurred.","error")})),e.value=null,t.uploadProgress=0}else swal("Invalid File Type","The file you are trying to add is not a valid mime type. Please upload a "+t.config.uploader.media_types+" only.","error")}}))}))},toggleFilter:function(t,e){this.media[this.carouselCursor].filter_class=e},updateMedia:function(){this.mediaDrawer=!1},deleteMedia:function(){var t=this;if(0!=window.confirm("Are you sure you want to delete this media?")){var e=this.media[this.carouselCursor].id;axios.delete("/api/pixelfed/v1/media",{params:{id:e}}).then((function(e){1==t.media.length&&(t.mediaDrawer=!1,t.ids=[],t.media=[],t.carouselCursor=0),t.ids.splice(t.carouselCursor,1),t.media.splice(t.carouselCursor,1)})).catch((function(t){swal("Whoops!","An error occured when attempting to delete this, please try again","error")}))}},mediaAltText:function(){},mediaLicense:function(){},compose:function(){var t=this.composeState;if(100==this.uploadProgress&&0!=this.ids.length)if(this.composeText.length>this.config.uploader.max_caption_length)swal("Error","Caption is too long","error");else switch(t){case"publish":if(0==this.media.length)return void swal("Whoops!","You need to add media before you can save this!","warning");"Add optional caption..."==this.composeText&&(this.composeText="");var e={media:this.media,caption:this.composeText,visibility:this.visibility,cw:this.nsfw};return void axios.post("/api/local/status/compose",e).then((function(t){var e=t.data;window.location.href=e})).catch((function(t){var e=t.response.data.message?t.response.data.message:"An unexpected error occured.";swal("Oops, something went wrong!",e,"error")}));case"delete":return this.mediaDrawer=!1,this.ids=[],this.media=[],this.carouselCursor=0,this.composeText="",this.composeTextLength=0,void a("#composeModal").modal("hide")}},about:function(){var t=document.createElement("div");t.innerHTML='\n\t\t\t\t<p class="small font-weight-bold">Please visit the <a href="/site/kb/sharing-media">Sharing Media</a> page for more info.</p>\n\t\t\t',swal({title:"Compose UI v3",content:t,icon:"info"})},closeModal:function(){this.composeType="",a("#composeModal").modal("hide")},composeMessage:function(){var t=this.config;this.composeType;return t.uploader.media_types.includes("video/mp4")?"Click here to add photos or videos":"Click here to add photos"},createCollection:function(){window.location.href="/i/collections/create"},maxSize:function(){return this.config.uploader.max_photo_size/1e3+" MB"},acceptedFormats:function(){return this.config.uploader.media_types.split(",").map((function(t){return" "+t.split("/")[1]})).toString()}}}},9658:(t,e,i)=>{Vue.component("compose-classic",i(64144).default)},68465:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>o});var a=i(23645),s=i.n(a)()((function(t){return t[1]}));s.push([t.id,".media-drawer-filters[data-v-52c4a7c6]{flex-wrap:unset;overflow-x:scroll}.media-drawer-filters .nav-link[data-v-52c4a7c6]{min-width:100px;padding-bottom:1rem;padding-top:1rem}.media-drawer-filters .active[data-v-52c4a7c6]{color:#fff;font-weight:700}@media (hover:none) and (pointer:coarse){.media-drawer-filters[data-v-52c4a7c6]::-webkit-scrollbar{display:none}}",""]);const o=s},58431:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var a=i(93379),s=i.n(a),o=i(68465),l={insert:"head",singleton:!1};s()(o.default,l);const r=o.default.locals||{}},64144:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var a=i(94214),s=i(41600),o={};for(const t in s)"default"!==t&&(o[t]=()=>s[t]);i.d(e,o);i(40243);const l=(0,i(51900).default)(s.default,a.render,a.staticRenderFns,!1,null,"52c4a7c6",null).exports},41600:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>o});var a=i(76668),s={};for(const t in a)"default"!==t&&(s[t]=()=>a[t]);i.d(e,s);const o=a.default},40243:(t,e,i)=>{"use strict";i.r(e);var a=i(58431),s={};for(const t in a)"default"!==t&&(s[t]=()=>a[t]);i.d(e,s)},94214:(t,e,i)=>{"use strict";i.r(e);var a=i(85749),s={};for(const t in a)"default"!==t&&(s[t]=()=>a[t]);i.d(e,s)},85749:(t,e,i)=>{"use strict";i.r(e),i.d(e,{render:()=>a,staticRenderFns:()=>s});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("input",{staticClass:"d-none file-input",attrs:{type:"file",name:"media",multiple:"",accept:t.config.uploader.media_types}}),t._v(" "),i("div",{staticClass:"timeline"},[i("div",{staticClass:"card status-card card-md-rounded-0"},[i("div",{staticClass:"card-header d-inline-flex align-items-center bg-white"},[i("img",{staticClass:"box-shadow",staticStyle:{"border-radius":"32px"},attrs:{src:t.profile.avatar,width:"32px",height:"32px"}}),t._v(" "),i("a",{staticClass:"username font-weight-bold pl-2 text-dark",attrs:{href:t.profile.url}},[t._v("\n\t\t\t\t\t"+t._s(t.profile.username)+"\n\t\t\t\t")]),t._v(" "),i("div",{staticClass:"text-right",staticStyle:{"flex-grow":"1"}},[i("div",{staticClass:"dropdown"},[t._m(0),t._v(" "),i("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"dropdownMenuButton"}},[i("div",{staticClass:"dropdown-item small font-weight-bold",on:{click:t.createCollection}},[t._v("Create Collection")]),t._v(" "),i("div",{staticClass:"dropdown-divider"}),t._v(" "),i("div",{staticClass:"dropdown-item small font-weight-bold",on:{click:t.about}},[t._v("About")]),t._v(" "),i("div",{staticClass:"dropdown-item small font-weight-bold",on:{click:t.closeModal}},[t._v("Close")])])])])]),t._v(" "),i("div",{staticClass:"postPresenterContainer"},[t.uploading?i("div",[i("div",{staticClass:"w-100 h-100 bg-light py-5",staticStyle:{"border-bottom":"1px solid #f1f1f1"}},[i("div",{staticClass:"p-5"},[i("b-progress",{attrs:{value:t.uploadProgress,max:100,striped:"",animated:!0}}),t._v(" "),i("p",{staticClass:"text-center mb-0 font-weight-bold"},[t._v("Uploading ... ("+t._s(t.uploadProgress)+"%)")])],1)])]):i("div",[t.ids.length>0&&t.ids.length!=t.config.uploader.album_limit?i("div",{staticClass:"card-header py-2 bg-primary m-2 rounded cursor-pointer",on:{click:function(e){return t.addMedia(e)}}},[t._m(1)]):t._e(),t._v(" "),0==t.ids.length?i("div",{staticClass:"w-100 h-100 bg-light py-5 cursor-pointer",staticStyle:{"border-bottom":"1px solid #f1f1f1"},on:{click:function(e){return t.addMedia(e)}}},[i("div",{staticClass:"p-5"},[i("p",{staticClass:"text-center font-weight-bold"},[t._v(t._s(t.composeMessage()))]),t._v(" "),i("p",{staticClass:"text-muted mb-0 small text-center"},[t._v("Accepted Formats: "),i("b",[t._v(t._s(t.acceptedFormats()))])]),t._v(" "),i("p",{staticClass:"text-muted mb-0 small text-center"},[t._v("Max File Size: "),i("b",[t._v(t._s(t.maxSize()))])]),t._v(" "),i("p",{staticClass:"text-muted mb-0 small text-center"},[t._v("Albums can contain up to "),i("b",[t._v(t._s(t.config.uploader.album_limit))]),t._v(" photos or videos")])])]):t._e(),t._v(" "),t.ids.length>0?i("div",[i("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"p-carousel",controls:"",indicators:"",background:"#ffffff",interval:0},model:{value:t.carouselCursor,callback:function(e){t.carouselCursor=e},expression:"carouselCursor"}},t._l(t.media,(function(e,a){return t.ids.length>0?i("b-carousel-slide",{key:"preview_media_"+a},[i("div",{class:[t.media[a].filter_class?t.media[a].filter_class:""],staticStyle:{display:"flex","min-height":"320px","align-items":"center"},attrs:{slot:"img"},slot:"img"},[i("img",{staticClass:"d-block img-fluid w-100",attrs:{src:e.url,alt:e.description,title:e.description}})])]):t._e()})),1)],1):t._e(),t._v(" "),t.ids.length>0&&"image"==t.media[t.carouselCursor].type?i("div",{staticClass:"bg-dark align-items-center"},[i("ul",{staticClass:"nav media-drawer-filters text-center"},[i("li",{staticClass:"nav-item"},[i("div",{staticClass:"p-1 pt-3"},[i("img",{staticClass:"cursor-pointer",attrs:{src:t.media[t.carouselCursor].url,width:"100px",height:"60px"},on:{click:function(e){return e.preventDefault(),t.toggleFilter(e,null)}}})]),t._v(" "),i("a",{class:[null==t.media[t.carouselCursor].filter_class?"nav-link text-white active":"nav-link text-muted"],attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toggleFilter(e,null)}}},[t._v("No Filter")])]),t._v(" "),t._l(t.filters,(function(e,a){return i("li",{staticClass:"nav-item"},[i("div",{staticClass:"p-1 pt-3"},[i("img",{class:e[1],attrs:{src:t.media[t.carouselCursor].url,width:"100px",height:"60px"},on:{click:function(i){return i.preventDefault(),t.toggleFilter(i,e[1])}}})]),t._v(" "),i("a",{class:[t.media[t.carouselCursor].filter_class==e[1]?"nav-link text-white active":"nav-link text-muted"],attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.toggleFilter(i,e[1])}}},[t._v(t._s(e[0]))])])}))],2)]):t._e()]),t._v(" "),t.ids.length>0&&-1!=["image","video"].indexOf(t.media[t.carouselCursor].type)?i("div",{staticClass:"bg-lighter p-2 row"},["Image"==t.media[t.carouselCursor].type?i("div",{staticClass:"col-12"},[i("div",{staticClass:"form-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.media[t.carouselCursor].alt,expression:"media[carouselCursor].alt"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Optional image description"},domProps:{value:t.media[t.carouselCursor].alt},on:{input:function(e){e.target.composing||t.$set(t.media[t.carouselCursor],"alt",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.media[t.carouselCursor].license,expression:"media[carouselCursor].license"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Optional media license"},domProps:{value:t.media[t.carouselCursor].license},on:{input:function(e){e.target.composing||t.$set(t.media[t.carouselCursor],"license",e.target.value)}}})])]):t._e(),t._v(" "),i("div",{staticClass:"col-12 text-right pt-2"},[i("button",{staticClass:"btn btn-outline-danger btn-sm font-weight-bold mr-1",on:{click:function(e){return t.deleteMedia()}}},[t._v("Delete Media")])])]):t._e()]),t._v(" "),i("div",{staticClass:"card-body p-0 border-top"},[i("div",{staticClass:"caption"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.composeText,expression:"composeText"}],staticClass:"form-control mb-0 border-0 rounded-0",attrs:{rows:"3",placeholder:"Add an optional caption"},domProps:{value:t.composeText},on:{input:function(e){e.target.composing||(t.composeText=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"card-footer"},[i("div",{staticClass:"d-flex justify-content-between align-items-center"},[i("div",[i("div",{staticClass:"custom-control custom-switch d-inline mr-3"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.nsfw,expression:"nsfw"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"nsfwToggle"},domProps:{checked:Array.isArray(t.nsfw)?t._i(t.nsfw,null)>-1:t.nsfw},on:{change:function(e){var i=t.nsfw,a=e.target,s=!!a.checked;if(Array.isArray(i)){var o=t._i(i,null);a.checked?o<0&&(t.nsfw=i.concat([null])):o>-1&&(t.nsfw=i.slice(0,o).concat(i.slice(o+1)))}else t.nsfw=s}}}),t._v(" "),i("label",{staticClass:"custom-control-label small font-weight-bold text-muted pt-1",attrs:{for:"nsfwToggle"}},[t._v("NSFW")])]),t._v(" "),i("div",{staticClass:"dropdown d-inline"},[i("button",{staticClass:"btn btn-outline-secondary btn-sm py-0 dropdown-toggle",attrs:{type:"button",id:"visibility","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.visibility[0].toUpperCase()+t.visibility.slice(1))+"\n\t\t\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"dropdown-menu",staticStyle:{width:"200px"},attrs:{"aria-labelledby":"visibility"}},[i("a",{class:["public"==t.visibility?"dropdown-item active":"dropdown-item"],attrs:{href:"#","data-id":"public","data-title":"Public"},on:{click:function(e){e.preventDefault(),t.visibility="public"}}},[t._m(2)]),t._v(" "),i("a",{class:["private"==t.visibility?"dropdown-item active":"dropdown-item"],attrs:{href:"#","data-id":"private","data-title":"Followers Only"},on:{click:function(e){e.preventDefault(),t.visibility="private"}}},[t._m(3)]),t._v(" "),i("a",{class:["unlisted"==t.visibility?"dropdown-item active":"dropdown-item"],attrs:{href:"#","data-id":"private","data-title":"Unlisted"},on:{click:function(e){e.preventDefault(),t.visibility="unlisted"}}},[t._m(4)])])])]),t._v(" "),i("div",{staticClass:"small text-muted font-weight-bold"},[t._v("\n\t\t\t\t\t\t"+t._s(t.composeText.length)+" / "+t._s(t.config.uploader.max_caption_length)+"\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"pl-md-5"},[i("button",{staticClass:"btn btn-primary btn-sm font-weight-bold px-3",on:{click:function(e){return t.compose()}}},[t._v("Publish")])])])])])])])},s=[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-link text-dark no-caret dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",title:"Post options"}},[e("span",{staticClass:"fas fa-ellipsis-v fa-lg text-muted"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"text-center mb-0 font-weight-bold text-white"},[i("i",{staticClass:"fas fa-plus mr-1"}),t._v(" Add Photo")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"d-none d-block-sm col-sm-2 px-0 text-center"},[i("i",{staticClass:"fas fa-globe"})]),t._v(" "),i("div",{staticClass:"col-12 col-sm-10 pl-2"},[i("p",{staticClass:"font-weight-bold mb-0"},[t._v("Public")]),t._v(" "),i("p",{staticClass:"small mb-0"},[t._v("Anyone can see")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"d-none d-block-sm col-sm-2 px-0 text-center"},[i("i",{staticClass:"fas fa-lock"})]),t._v(" "),i("div",{staticClass:"col-12 col-sm-10 pl-2"},[i("p",{staticClass:"font-weight-bold mb-0"},[t._v("Followers Only")]),t._v(" "),i("p",{staticClass:"small mb-0"},[t._v("Only followers can see")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"d-none d-block-sm col-sm-2 px-0 text-center"},[i("i",{staticClass:"fas fa-lock"})]),t._v(" "),i("div",{staticClass:"col-12 col-sm-10 pl-2"},[i("p",{staticClass:"font-weight-bold mb-0"},[t._v("Unlisted")]),t._v(" "),i("p",{staticClass:"small mb-0"},[t._v("Not listed on public timelines")])])])}]}},t=>{t.O(0,[898],(()=>{return e=9658,t(t.s=e);var e}));t.O()}]);