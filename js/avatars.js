/*! VFM app setup */
function Avatars(e,i){$(".uppa").on("click",(function(){$(".updated").html(""),$("#uppavatar").trigger("click")})),$("#uppavatar").on("change",(function(){$(".export").removeClass("hidden")})),$(".slider").on("change",(function(){$(".updated").html("")})),$(".image-editor").cropit({imageState:{src:e}}),$(".remove-avatar").on("click",(function(){$(".updated").html(""),$(".image-editor").cropit("imageSrc",i),$(".export").removeClass("hidden")})),$(".export").click((function(){var e=$('<i class="fa fa-check-circle fa-lg pull-left text-success"></i>'),i=$(".image-editor").cropit("export"),t=$(".image-name").val();$.ajax({method:"POST",url:"vfm-admin/ajax/avatar.php",data:{imgData:i,imgName:t}}).done((function(i){d=new Date,$(".updated").html(e),$(".avatar").attr("src",i+"?"+d.getTime()),$(".export").addClass("hidden")})).fail((function(){console.log("new avatar failed")}))}))}!function(e,i){"object"==typeof exports&&"object"==typeof module?module.exports=i(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],i):"object"==typeof exports?exports.cropit=i(require("jquery")):e.cropit=i(e.jQuery)}(this,(function(e){return function(e){function i(o){if(t[o])return t[o].exports;var a=t[o]={exports:{},id:o,loaded:!1};return e[o].call(a.exports,a,a.exports,i),a.loaded=!0,a.exports}var t={};return i.m=e,i.c=t,i.p="",i(0)}([function(e,i,t){function o(e){return e&&e.__esModule?e:{default:e}}var a=o(t(1)),n=o(t(2)),r=t(4),s=t(6),h=function(e,i){return e.each((function(){var e=a.default.data(this,r.PLUGIN_KEY);e&&i(e)}))},m=function(e,i,t){var o=e.first().data(r.PLUGIN_KEY);return o&&a.default.isFunction(o[i])?o[i](t):null},l={init:function(e){return this.each((function(){if(!a.default.data(this,r.PLUGIN_KEY)){var i=new n.default(a.default,this,e);a.default.data(this,r.PLUGIN_KEY,i)}}))},destroy:function(){return this.each((function(){a.default.removeData(this,r.PLUGIN_KEY)}))},isZoomable:function(){return m(this,"isZoomable")},export:function(e){return m(this,"getCroppedImageData",e)},imageState:function(){return m(this,"getImageState")},imageSize:function(){return m(this,"getImageSize")},prop:function(e,i){return s.exists(i)?h(this,(function(t){t["set"+s.capitalize(e)](i)})):m(this,"get"+s.capitalize(e))},disable:function(){return h(this,(function(e){e.disable()}))},reenable:function(){return h(this,(function(e){e.reenable()}))}};a.default.fn.cropit=function(e){return l[e]?l[e].apply(this,Array.prototype.slice.call(arguments,1)):["imageSrc","offset","previewSize","zoom","initialZoom","exportZoom","minZoom","maxZoom"].indexOf(e)>=0?l.prop.apply(this,arguments):l.init.apply(this,arguments)}},function(i){i.exports=e},function(e,i,t){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(i,"__esModule",{value:!0});var a=function(){function e(e,i){for(var t=0;t<i.length;t++){var o=i[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(i,t,o){return t&&e(i.prototype,t),o&&e(i,o),i}}(),n=o(t(1)),r=o(t(3)),s=t(4),h=t(5),m=t(6),l=function(){function e(i,t,o){(function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")})(this,e),this.$el=n.default(t);var a=h.loadDefaults(this.$el);this.options=n.default.extend({},a,o),this.init()}return a(e,[{key:"init",value:function(){var e=this;if(this.image=new Image,this.preImage=new Image,this.image.onload=this.onImageLoaded.bind(this),this.preImage.onload=this.onPreImageLoaded.bind(this),this.image.onerror=this.preImage.onerror=function(){e.onImageError.call(e,s.ERRORS.IMAGE_FAILED_TO_LOAD)},this.$fileInput=this.options.$fileInput.attr({accept:"image/*"}),this.$preview=this.options.$preview.css({backgroundRepeat:"no-repeat"}),this.$zoomSlider=this.options.$zoomSlider.attr({min:0,max:1,step:.01}),this.previewSize={w:this.options.width||this.$preview.width(),h:this.options.height||this.$preview.height()},this.options.width&&this.$preview.width(this.previewSize.w),this.options.height&&this.$preview.height(this.previewSize.h),this.options.imageBackground){n.default.isArray(this.options.imageBackgroundBorderWidth)?this.imageBgBorderWidthArray=this.options.imageBackgroundBorderWidth:(this.imageBgBorderWidthArray=[],[0,1,2,3].forEach((function(i){e.imageBgBorderWidthArray[i]=e.options.imageBackgroundBorderWidth})));var i=this.options.$previewContainer;this.$imageBg=n.default("<img />").addClass(s.CLASS_NAMES.IMAGE_BACKGROUND).attr("alt","").css("position","absolute"),this.$imageBgContainer=n.default("<div />").addClass(s.CLASS_NAMES.IMAGE_BACKGROUND_CONTAINER).css({position:"absolute",zIndex:0,left:-this.imageBgBorderWidthArray[3]+window.parseInt(this.$preview.css("border-left-width")||0),top:-this.imageBgBorderWidthArray[0]+window.parseInt(this.$preview.css("border-top-width")||0),width:this.previewSize.w+this.imageBgBorderWidthArray[1]+this.imageBgBorderWidthArray[3],height:this.previewSize.h+this.imageBgBorderWidthArray[0]+this.imageBgBorderWidthArray[2]}).append(this.$imageBg),this.imageBgBorderWidthArray[0]>0&&this.$imageBgContainer.css("overflow","hidden"),i.css("position","relative").prepend(this.$imageBgContainer),this.$preview.css("position","relative"),this.$preview.hover((function(){e.$imageBg.addClass(s.CLASS_NAMES.PREVIEW_HOVERED)}),(function(){e.$imageBg.removeClass(s.CLASS_NAMES.PREVIEW_HOVERED)}))}this.setInitialZoom(this.options.initialZoom),this.imageLoaded=!1,this.moveContinue=!1,this.zoomer=new r.default,this.options.allowDragNDrop&&n.default.event.props.push("dataTransfer"),this.bindListeners(),this.options.imageState&&this.options.imageState.src&&this.loadImage(this.options.imageState.src)}},{key:"bindListeners",value:function(){this.$fileInput.on("change.cropit",this.onFileChange.bind(this)),this.$preview.on(s.EVENTS.PREVIEW,this.onPreviewEvent.bind(this)),this.$zoomSlider.on(s.EVENTS.ZOOM_INPUT,this.onZoomSliderChange.bind(this)),this.options.allowDragNDrop&&(this.$preview.on("dragover.cropit dragleave.cropit",this.onDragOver.bind(this)),this.$preview.on("drop.cropit",this.onDrop.bind(this)))}},{key:"unbindListeners",value:function(){this.$fileInput.off("change.cropit"),this.$preview.off(s.EVENTS.PREVIEW),this.$preview.off("dragover.cropit dragleave.cropit drop.cropit"),this.$zoomSlider.off(s.EVENTS.ZOOM_INPUT)}},{key:"onFileChange",value:function(e){this.options.onFileChange(e),this.$fileInput.get(0).files&&this.loadFileReader(this.$fileInput.get(0).files[0])}},{key:"loadFileReader",value:function(e){var i=new FileReader;e&&e.type.match("image")?(i.readAsDataURL(e),i.onload=this.onFileReaderLoaded.bind(this),i.onerror=this.onFileReaderError.bind(this)):e&&this.onFileReaderError()}},{key:"onFileReaderLoaded",value:function(e){this.loadImage(e.target.result)}},{key:"onFileReaderError",value:function(){this.options.onFileReaderError()}},{key:"onDragOver",value:function(e){e.preventDefault(),e.dataTransfer.dropEffect="copy",this.$preview.toggleClass(s.CLASS_NAMES.DRAG_HOVERED,"dragover"===e.type)}},{key:"onDrop",value:function(e){var i=this;e.preventDefault(),e.stopPropagation(),Array.prototype.slice.call(e.dataTransfer.files,0).some((function(e){return!!e.type.match("image")&&(i.loadFileReader(e),!0)})),this.$preview.removeClass(s.CLASS_NAMES.DRAG_HOVERED)}},{key:"loadImage",value:function(e){e&&(this.options.onImageLoading(),this.setImageLoadingClass(),this.preImage.src=e)}},{key:"setImageSrc",value:function(e){this.loadImage(e)}},{key:"onPreImageLoaded",value:function(){return"reject"===this.options.smallImage&&(this.preImage.width*this.options.maxZoom<this.previewSize.w*this.options.exportZoom||this.preImage.height*this.options.maxZoom<this.previewSize.h*this.options.exportZoom)?(this.onImageError(s.ERRORS.SMALL_IMAGE),void(this.image.src&&this.setImageLoadedClass())):(this.options.allowCrossOrigin&&(this.image.crossOrigin=0===this.preImage.src.indexOf("data:")?null:"Anonymous"),void(this.image.src=this.imageSrc=this.preImage.src))}},{key:"onImageLoaded",value:function(){this.imageSize={w:this.image.width,h:this.image.height},this.setupZoomer(this.options.imageState&&this.options.imageState.zoom||this.initialZoom),this.options.imageState&&this.options.imageState.offset?this.setOffset(this.options.imageState.offset):this.centerImage(),this.options.imageState={},this.$preview.css("background-image","url("+this.imageSrc+")"),this.options.imageBackground&&this.$imageBg.attr("src",this.imageSrc),this.setImageLoadedClass(),this.imageLoaded=!0,this.options.onImageLoaded()}},{key:"onImageError",value:function(){this.options.onImageError.apply(this,arguments),this.removeImageLoadingClass()}},{key:"setImageLoadingClass",value:function(){this.$preview.removeClass(s.CLASS_NAMES.IMAGE_LOADED).addClass(s.CLASS_NAMES.IMAGE_LOADING)}},{key:"setImageLoadedClass",value:function(){this.$preview.removeClass(s.CLASS_NAMES.IMAGE_LOADING).addClass(s.CLASS_NAMES.IMAGE_LOADED)}},{key:"removeImageLoadingClass",value:function(){this.$preview.removeClass(s.CLASS_NAMES.IMAGE_LOADING)}},{key:"getEventPosition",value:function(e){return e.originalEvent&&e.originalEvent.touches&&e.originalEvent.touches[0]&&(e=e.originalEvent.touches[0]),e.clientX&&e.clientY?{x:e.clientX,y:e.clientY}:void 0}},{key:"onPreviewEvent",value:function(e){return this.imageLoaded?(this.moveContinue=!1,this.$preview.off(s.EVENTS.PREVIEW_MOVE),"mousedown"===e.type||"touchstart"===e.type?(this.origin=this.getEventPosition(e),this.moveContinue=!0,this.$preview.on(s.EVENTS.PREVIEW_MOVE,this.onMove.bind(this))):n.default(document.body).focus(),e.stopPropagation(),!1):void 0}},{key:"onMove",value:function(e){var i=this.getEventPosition(e);return this.moveContinue&&i&&this.setOffset({x:this.offset.x+i.x-this.origin.x,y:this.offset.y+i.y-this.origin.y}),this.origin=i,e.stopPropagation(),!1}},{key:"setOffset",value:function(e){e&&m.exists(e.x)&&m.exists(e.y)&&(this.offset=this.fixOffset(e),this.$preview.css("background-position",this.offset.x+"px "+this.offset.y+"px"),this.options.imageBackground&&this.$imageBg.css({left:this.offset.x+this.imageBgBorderWidthArray[3],top:this.offset.y+this.imageBgBorderWidthArray[0]}),this.options.onOffsetChange(e))}},{key:"fixOffset",value:function(e){if(!this.imageLoaded)return e;var i={x:e.x,y:e.y};return this.options.freeMove||(i.x=this.imageSize.w*this.zoom>=this.previewSize.w?Math.min(0,Math.max(i.x,this.previewSize.w-this.imageSize.w*this.zoom)):Math.max(0,Math.min(i.x,this.previewSize.w-this.imageSize.w*this.zoom)),i.y=this.imageSize.h*this.zoom>=this.previewSize.h?Math.min(0,Math.max(i.y,this.previewSize.h-this.imageSize.h*this.zoom)):Math.max(0,Math.min(i.y,this.previewSize.h-this.imageSize.h*this.zoom))),i.x=m.round(i.x),i.y=m.round(i.y),i}},{key:"centerImage",value:function(){this.imageSize&&this.zoom&&this.setOffset({x:(this.previewSize.w-this.imageSize.w*this.zoom)/2,y:(this.previewSize.h-this.imageSize.h*this.zoom)/2})}},{key:"onZoomSliderChange",value:function(){if(this.imageLoaded){this.zoomSliderPos=Number(this.$zoomSlider.val());var e=this.zoomer.getZoom(this.zoomSliderPos);e!==this.zoom&&this.setZoom(e)}}},{key:"enableZoomSlider",value:function(){this.$zoomSlider.removeAttr("disabled"),this.options.onZoomEnabled()}},{key:"disableZoomSlider",value:function(){this.$zoomSlider.attr("disabled",!0),this.options.onZoomDisabled()}},{key:"setupZoomer",value:function(e){this.zoomer.setup({imageSize:this.imageSize,previewSize:this.previewSize,exportZoom:this.options.exportZoom,maxZoom:this.options.maxZoom,minZoom:this.options.minZoom,smallImage:this.options.smallImage}),this.setZoom(m.exists(e)?e:this.zoom),this.isZoomable()?this.enableZoomSlider():this.disableZoomSlider()}},{key:"setZoom",value:function(e){e=this.fixZoom(e);var i=m.round(this.imageSize.w*e),t=m.round(this.imageSize.h*e);if(this.imageLoaded){var o=this.zoom,a=this.previewSize.w/2-(this.previewSize.w/2-this.offset.x)*e/o,n=this.previewSize.h/2-(this.previewSize.h/2-this.offset.y)*e/o;this.zoom=e,this.setOffset({x:a,y:n})}else this.zoom=e;this.zoomSliderPos=this.zoomer.getSliderPos(this.zoom),this.$zoomSlider.val(this.zoomSliderPos),this.$preview.css("background-size",i+"px "+t+"px"),this.options.imageBackground&&this.$imageBg.css({width:i,height:t}),this.options.onZoomChange(e)}},{key:"fixZoom",value:function(e){return this.zoomer.fixZoom(e)}},{key:"isZoomable",value:function(){return this.zoomer.isZoomable()}},{key:"getCroppedImageData",value:function(e){if(this.imageSrc){var i=(e=n.default.extend({},{type:"image/png",quality:.75,originalSize:!1,fillBg:"#fff"},e)).originalSize?1/this.zoom:this.options.exportZoom,t={w:this.zoom*i*this.imageSize.w,h:this.zoom*i*this.imageSize.h},o=n.default("<canvas />").attr({width:this.previewSize.w*i,height:this.previewSize.h*i}).get(0),a=o.getContext("2d");"image/jpeg"===e.type&&(a.fillStyle=e.fillBg,a.fillRect(0,0,o.width,o.height));var r=this.preresizeImage(this.image,t.w,t.h);return a.drawImage(r,this.offset.x*i,this.offset.y*i,t.w,t.h),o.toDataURL(e.type,e.quality)}}},{key:"preresizeImage",value:function(e,i,t){var o=new Image;o.src=e.src;for(var a=document.createElement("canvas"),n=a.getContext("2d"),r=o.width,s=o.height;s/=2,!(i>(r/=2)||t>s);)a.width=r,a.height=s,n.drawImage(o,0,0,r,s),o.src=a.toDataURL();return o}},{key:"getImageState",value:function(){return{src:this.imageSrc,offset:this.offset,zoom:this.zoom}}},{key:"getImageSrc",value:function(){return this.imageSrc}},{key:"getOffset",value:function(){return this.offset}},{key:"getZoom",value:function(){return this.zoom}},{key:"getImageSize",value:function(){return this.imageSize?{width:this.imageSize.w,height:this.imageSize.h}:null}},{key:"getInitialZoom",value:function(){return this.options.initialZoom}},{key:"setInitialZoom",value:function(e){this.options.initialZoom=e,this.initialZoom="min"===e?0:"image"===e?1:0}},{key:"getExportZoom",value:function(){return this.options.exportZoom}},{key:"setExportZoom",value:function(e){this.options.exportZoom=e,this.setupZoomer()}},{key:"getMinZoom",value:function(){return this.options.minZoom}},{key:"setMinZoom",value:function(e){this.options.minZoom=e,this.setupZoomer()}},{key:"getMaxZoom",value:function(){return this.options.maxZoom}},{key:"setMaxZoom",value:function(e){this.options.maxZoom=e,this.setupZoomer()}},{key:"getPreviewSize",value:function(){return{width:this.previewSize.w,height:this.previewSize.h}}},{key:"setPreviewSize",value:function(e){!e||e.width<=0||e.height<=0||(this.previewSize={w:e.width,h:e.height},this.$preview.css({width:this.previewSize.w,height:this.previewSize.h}),this.options.imageBackground&&this.$imageBgContainer.css({width:this.previewSize.w+this.imageBgBorderWidthArray[1]+this.imageBgBorderWidthArray[3],height:this.previewSize.h+this.imageBgBorderWidthArray[0]+this.imageBgBorderWidthArray[2]}),this.imageLoaded&&this.setupZoomer())}},{key:"disable",value:function(){this.unbindListeners(),this.disableZoomSlider(),this.$el.addClass(s.CLASS_NAMES.DISABLED)}},{key:"reenable",value:function(){this.bindListeners(),this.enableZoomSlider(),this.$el.removeClass(s.CLASS_NAMES.DISABLED)}},{key:"$",value:function(e){return this.$el?this.$el.find(e):null}}]),e}();i.default=l,e.exports=i.default},function(e,i){Object.defineProperty(i,"__esModule",{value:!0});var t=function(){function e(e,i){for(var t=0;t<i.length;t++){var o=i[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(i,t,o){return t&&e(i.prototype,t),o&&e(i,o),i}}(),o=function(){function e(){(function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")})(this,e),this.minZoom=this.maxZoom=1}return t(e,[{key:"setup",value:function(e){var i=e.imageSize,t=e.previewSize,o=e.exportZoom,a=e.maxZoom,n=e.minZoom,r=e.smallImage,s=t.w/i.w,h=t.h/i.h;this.minZoom="fit"===n?Math.min(s,h):Math.max(s,h),"allow"===r&&(this.minZoom=Math.min(this.minZoom,1)),this.maxZoom=Math.max(this.minZoom,a/o)}},{key:"getZoom",value:function(e){return this.minZoom&&this.maxZoom?e*(this.maxZoom-this.minZoom)+this.minZoom:null}},{key:"getSliderPos",value:function(e){return this.minZoom&&this.maxZoom?this.minZoom===this.maxZoom?0:(e-this.minZoom)/(this.maxZoom-this.minZoom):null}},{key:"isZoomable",value:function(){return this.minZoom&&this.maxZoom?this.minZoom!==this.maxZoom:null}},{key:"fixZoom",value:function(e){return Math.max(this.minZoom,Math.min(this.maxZoom,e))}}]),e}();i.default=o,e.exports=i.default},function(e,i){Object.defineProperty(i,"__esModule",{value:!0});i.PLUGIN_KEY="cropit";i.CLASS_NAMES={PREVIEW:"cropit-image-preview",PREVIEW_CONTAINER:"cropit-image-preview-container",FILE_INPUT:"cropit-image-input",ZOOM_SLIDER:"cropit-image-zoom-input",IMAGE_BACKGROUND:"cropit-image-background",IMAGE_BACKGROUND_CONTAINER:"cropit-image-background-container",PREVIEW_HOVERED:"cropit-preview-hovered",DRAG_HOVERED:"cropit-drag-hovered",IMAGE_LOADING:"cropit-image-loading",IMAGE_LOADED:"cropit-image-loaded",DISABLED:"cropit-disabled"};i.ERRORS={IMAGE_FAILED_TO_LOAD:{code:0,message:"Image failed to load."},SMALL_IMAGE:{code:1,message:"Image is too small."}};var t=function(e){return e.map((function(e){return e+".cropit"})).join(" ")},o={PREVIEW:t(["mousedown","mouseup","mouseleave","touchstart","touchend","touchcancel","touchleave"]),PREVIEW_MOVE:t(["mousemove","touchmove"]),ZOOM_INPUT:t(["mousemove","touchmove","change"])};i.EVENTS=o},function(e,i,t){Object.defineProperty(i,"__esModule",{value:!0});var o=t(4),a={elements:[{name:"$preview",description:"The HTML element that displays image preview.",defaultSelector:"."+o.CLASS_NAMES.PREVIEW},{name:"$fileInput",description:"File input element.",defaultSelector:"input."+o.CLASS_NAMES.FILE_INPUT},{name:"$zoomSlider",description:"Range input element that controls image zoom.",defaultSelector:"input."+o.CLASS_NAMES.ZOOM_SLIDER},{name:"$previewContainer",description:"Preview container. Only needed when `imageBackground` is true.",defaultSelector:"."+o.CLASS_NAMES.PREVIEW_CONTAINER}].map((function(e){return e.type="jQuery element",e.default="$imageCropper.find('"+e.defaultSelector+"')",e})),values:[{name:"width",type:"number",description:"Width of image preview in pixels. If set, it will override the CSS property.",default:null},{name:"height",type:"number",description:"Height of image preview in pixels. If set, it will override the CSS property.",default:null},{name:"imageBackground",type:"boolean",description:"Whether or not to display the background image beyond the preview area.",default:!1},{name:"imageBackgroundBorderWidth",type:"array or number",description:"Width of background image border in pixels.\n        The four array elements specify the width of background image width on the top, right, bottom, left side respectively.\n        The background image beyond the width will be hidden.\n        If specified as a number, border with uniform width on all sides will be applied.",default:[0,0,0,0]},{name:"exportZoom",type:"number",description:"The ratio between the desired image size to export and the preview size.\n        For example, if the preview size is `300px * 200px`, and `exportZoom = 2`, then\n        the exported image size will be `600px * 400px`.\n        This also affects the maximum zoom level, since the exported image cannot be zoomed to larger than its original size.",default:1},{name:"allowDragNDrop",type:"boolean",description:"When set to true, you can load an image by dragging it from local file browser onto the preview area.",default:!0},{name:"minZoom",type:"string",description:"This options decides the minimal zoom level of the image.\n        If set to `'fill'`, the image has to fill the preview area, i.e. both width and height must not go smaller than the preview area.\n        If set to `'fit'`, the image can shrink further to fit the preview area, i.e. at least one of its edges must not go smaller than the preview area.",default:"fill"},{name:"maxZoom",type:"number",description:"Determines how big the image can be zoomed. E.g. if set to 1.5, the image can be zoomed to 150% of its original size.",default:1},{name:"initialZoom",type:"string",description:"Determines the zoom when an image is loaded.\n        When set to `'min'`, image is zoomed to the smallest when loaded.\n        When set to `'image'`, image is zoomed to 100% when loaded.",default:"min"},{name:"freeMove",type:"boolean",description:"When set to true, you can freely move the image instead of being bound to the container borders",default:!1},{name:"smallImage",type:"string",description:"When set to `'reject'`, `onImageError` would be called when cropit loads an image that is smaller than the container.\n        When set to `'allow'`, images smaller than the container can be zoomed down to its original size, overiding `minZoom` option.\n        When set to `'stretch'`, the minimum zoom of small images would follow `minZoom` option.",default:"reject"},{name:"allowCrossOrigin",type:"boolean",description:"Set to true if you need to crop image served from other domains.",default:!1}],callbacks:[{name:"onFileChange",description:"Called when user selects a file in the select file input.",params:[{name:"event",type:"object",description:"File change event object"}]},{name:"onFileReaderError",description:"Called when `FileReader` encounters an error while loading the image file."},{name:"onImageLoading",description:"Called when image starts to be loaded."},{name:"onImageLoaded",description:"Called when image is loaded."},{name:"onImageError",description:"Called when image cannot be loaded.",params:[{name:"error",type:"object",description:"Error object."},{name:"error.code",type:"number",description:"Error code. `0` means generic image loading failure. `1` means image is too small."},{name:"error.message",type:"string",description:"A message explaining the error."}]},{name:"onZoomEnabled",description:"Called when image the zoom slider is enabled."},{name:"onZoomDisabled",description:"Called when image the zoom slider is disabled."},{name:"onZoomChange",description:"Called when zoom changes.",params:[{name:"zoom",type:"number",description:"New zoom."}]},{name:"onOffsetChange",description:"Called when image offset changes.",params:[{name:"offset",type:"object",description:"New offset, with `x` and `y` values."}]}].map((function(e){return e.type="function",e}))};i.loadDefaults=function(e){var i={};return e&&a.elements.forEach((function(t){i[t.name]=e.find(t.defaultSelector)})),a.values.forEach((function(e){i[e.name]=e.default})),a.callbacks.forEach((function(e){i[e.name]=function(){}})),i},i.default=a},function(e,i){Object.defineProperty(i,"__esModule",{value:!0});i.exists=function(e){return void 0!==e};i.round=function(e){return+(Math.round(100*e)+"e-2")};i.capitalize=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}}])}));