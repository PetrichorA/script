function closeAlert(){$(".alert-wrap").fadeOut("slow",(function(){$(this).remove()}))}var scrollTimer,closeTimer;function callClipboards(){var e=new Clipboard(".clipme"),a=window.setTimeout((function(){$(".clipme").popover("destroy")}),1e3);e.on("success",(function(e){window.clearTimeout(a),$(".clipme").popover("show"),a=setTimeout((function(){$(".clipme").popover("destroy")}),1e3)}))}function checkNextPrev(e){var a=$("#"+e),t=a.firstAfter(".gallindex").find(".vfm-gall"),n=a.firstBefore(".gallindex").find(".vfm-gall");if(t.length>0){var o=t.data("link"),l=t.data("linkencoded"),i=t.data("name"),r=a.firstAfter(".gallindex").attr("id");$(".nextgall").length<1&&$(".vfm-zoom").append('<a class="nextgall navigall"><span class="fa-stack"><i class="fa fa-angle-right fa-stack-1x fa-inverse"></i></span></a>'),$(".nextgall").data("link",o),$(".nextgall").data("linkencoded",l),$(".nextgall").data("name",i),$(".nextgall").data("id",r)}else $(".nextgall").remove();if(n.length>0){var c=n.data("link"),s=n.data("linkencoded"),d=n.data("name"),p=a.firstBefore(".gallindex").attr("id");$(".prevgall").length<1&&$(".vfm-zoom").append('<a class="prevgall navigall"><span class="fa-stack"><i class="fa fa-angle-left fa-stack-1x fa-inverse"></i></span></a>'),$(".prevgall").data("link",c),$(".prevgall").data("linkencoded",s),$(".prevgall").data("name",d),$(".prevgall").data("id",p)}else $(".prevgall").remove()}function randomstring(){for(var e="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=0;t<8;t++)e+=a.charAt(Math.floor(Math.random()*a.length));return e}function passwidget(){$("#use_pass").prop("checked")?$(".seclink").show():$(".seclink").hide(),$(".sharelink, .passlink").val(""),$(".shalink, #sendfiles, .openmail").hide(),$(".passlink").prop("readonly",!1),$(".createlink-wrap").fadeIn()}function checkSelecta(){$(".selecta").each((function(){var e=$(this).closest(".rowa");$(this).prop("checked")?e.addClass("attivo"):e.removeClass("attivo")})),$(".selecta:checked").length>0?$(".groupact, .manda").attr("disabled",!1):$(".groupact, .manda").attr("disabled",!0)}function getHighest(e){return Math.max.apply(null,e)}function placeHolderheight(){var e,a=[];$(".icon-placeholder").css("height","30px"),$(".inlinethumbs .icon-placeholder").css("height","60px"),$(".gridview .icon-placeholder").each((function(){e=$(this).width(),a.push(e)}));var t=getHighest(a);$(".gridview .icon-placeholder").css("height",t)}function updateSession(e){$.ajax({method:"POST",url:"vfm-admin/ajax/session.php",data:e})}function checkNotiflist(){1==$("#userslist :checkbox:checked").length>0?$(".check-notif").removeClass("fa-circle-o").addClass("fa-check-circle"):$(".check-notif").removeClass("fa-check-circle").addClass("fa-circle-o")}!function(e,a,t){function n(e,a){return typeof e===a}function o(){return"function"!=typeof a.createElement?a.createElement(arguments[0]):u?a.createElementNS.call(a,"http://www.w3.org/2000/svg",arguments[0]):a.createElement.apply(a,arguments)}function l(){var e=a.body;return e||((e=o(u?"svg":"body")).fake=!0),e}var i=[],r=[],c={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,a){var t=this;setTimeout((function(){a(t[e])}),0)},addTest:function(e,a,t){r.push({name:e,fn:a,options:t})},addAsyncTest:function(e){r.push({name:null,fn:e})}},s=function(){};s.prototype=c,s=new s;var d=c._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];c._prefixes=d;var p=a.documentElement,u="svg"===p.nodeName.toLowerCase();s.addTest("video",(function(){var e=o("video"),a=!1;try{(a=!!e.canPlayType)&&((a=new Boolean(a)).ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),a.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),a.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),a.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),a.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(e){}return a}));var f=c.testStyles=function(e,t,n,i){var r,c,s,d,u="modernizr",f=o("div"),m=l();if(parseInt(n,10))for(;n--;)(s=o("div")).id=i?i[n]:u+(n+1),f.appendChild(s);return(r=o("style")).type="text/css",r.id="s"+u,(m.fake?m:f).appendChild(r),m.appendChild(f),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(a.createTextNode(e)),f.id=u,m.fake&&(m.style.background="",m.style.overflow="hidden",d=p.style.overflow,p.style.overflow="hidden",p.appendChild(m)),c=t(f,e),m.fake?(m.parentNode.removeChild(m),p.style.overflow=d,p.offsetHeight):f.parentNode.removeChild(f),!!c};s.addTest("touchevents",(function(){var t;if("ontouchstart"in e||e.DocumentTouch&&a instanceof DocumentTouch)t=!0;else{var n=["@media (",d.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");f(n,(function(e){t=9===e.offsetTop}))}return t})),function(){var e,a,t,o,l,c;for(var d in r)if(r.hasOwnProperty(d)){if(e=[],(a=r[d]).name&&(e.push(a.name.toLowerCase()),a.options&&a.options.aliases&&a.options.aliases.length))for(t=0;t<a.options.aliases.length;t++)e.push(a.options.aliases[t].toLowerCase());for(o=n(a.fn,"function")?a.fn():a.fn,l=0;l<e.length;l++)1===(c=e[l].split(".")).length?s[c[0]]=o:(!s[c[0]]||s[c[0]]instanceof Boolean||(s[c[0]]=new Boolean(s[c[0]])),s[c[0]][c[1]]=o),i.push((o?"":"no-")+c.join("-"))}}(),function(e){var a=p.className,t=s._config.classPrefix||"";if(u&&(a=a.baseVal),s._config.enableJSClass){var n=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");a=a.replace(n,"$1"+t+"js$2")}s._config.enableClasses&&(a+=" "+t+e.join(" "+t),u?p.className.baseVal=a:p.className=a)}(i),delete c.addTest,delete c.addAsyncTest;for(var m=0;m<s._q.length;m++)s._q[m]();e.Modernizr=s}(window,document),function(e,a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):e.bootbox=a(e.jQuery)}(this,(function e(a,t){"use strict";function n(e){var a=m[u.locale];return a?a[e]:m.en[e]}function o(e,t,n){e.stopPropagation(),e.preventDefault(),a.isFunction(n)&&!1===n.call(t,e)||t.modal("hide")}function l(e,t){var n=0;a.each(e,(function(e,a){t(e,a,n++)}))}function i(e){var t,n;if("object"!=typeof e)throw new Error("Please supply an object of options");if(!e.message)throw new Error("Please specify a message");return(e=a.extend({},u,e)).buttons||(e.buttons={}),t=e.buttons,n=function(e){var a,t=0;for(a in e)t++;return t}(t),l(t,(function(e,o,l){if(a.isFunction(o)&&(o=t[e]={callback:o}),"object"!==a.type(o))throw new Error("button with key "+e+" must be an object");o.label||(o.label=e),o.className||(o.className=2>=n&&l===n-1?"btn-primary":"btn-default")})),e}function r(e,t,n){return a.extend(!0,{},e,function(e,a){var t=e.length,n={};if(1>t||t>2)throw new Error("Invalid argument length");return 2===t||"string"==typeof e[0]?(n[a[0]]=e[0],n[a[1]]=e[1]):n=e[0],n}(t,n))}function c(e,a,t,n){return d(r({className:"bootbox-"+e,buttons:s.apply(null,a)},n,t),a)}function s(){for(var e={},a=0,t=arguments.length;t>a;a++){var o=arguments[a],l=o.toLowerCase(),i=o.toUpperCase();e[l]={label:n(i)}}return e}function d(e,a){var n={};return l(a,(function(e,a){n[a]=!0})),l(e.buttons,(function(e){if(n[e]===t)throw new Error("button key "+e+" is not allowed (options are "+a.join("\n")+")")})),e}var p={dialog:"<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",header:"<div class='modal-header'><h4 class='modal-title'></h4></div>",footer:"<div class='modal-footer'></div>",closeButton:"<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",form:"<form class='bootbox-form'></form>",inputs:{text:"<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",textarea:"<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",email:"<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",select:"<select class='bootbox-input bootbox-input-select form-control'></select>",checkbox:"<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",date:"<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",time:"<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",number:"<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",password:"<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"}},u={locale:"en",backdrop:"static",animate:!0,className:null,closeButton:!0,show:!0,container:"body"},f={alert:function(){var e;if((e=c("alert",["ok"],["message","callback"],arguments)).callback&&!a.isFunction(e.callback))throw new Error("alert requires callback property to be a function when provided");return e.buttons.ok.callback=e.onEscape=function(){return!a.isFunction(e.callback)||e.callback.call(this)},f.dialog(e)},confirm:function(){var e;if((e=c("confirm",["cancel","confirm"],["message","callback"],arguments)).buttons.cancel.callback=e.onEscape=function(){return e.callback.call(this,!1)},e.buttons.confirm.callback=function(){return e.callback.call(this,!0)},!a.isFunction(e.callback))throw new Error("confirm requires a callback");return f.dialog(e)},prompt:function(){var e,n,o,i,c,u,m;if(i=a(p.form),n={className:"bootbox-prompt",buttons:s("cancel","confirm"),value:"",inputType:"text"},u=(e=d(r(n,arguments,["title","callback"]),["cancel","confirm"])).show===t||e.show,e.message=i,e.buttons.cancel.callback=e.onEscape=function(){return e.callback.call(this,null)},e.buttons.confirm.callback=function(){var t;switch(e.inputType){case"text":case"textarea":case"email":case"select":case"date":case"time":case"number":case"password":t=c.val();break;case"checkbox":var n=c.find("input:checked");t=[],l(n,(function(e,n){t.push(a(n).val())}))}return e.callback.call(this,t)},e.show=!1,!e.title)throw new Error("prompt requires a title");if(!a.isFunction(e.callback))throw new Error("prompt requires a callback");if(!p.inputs[e.inputType])throw new Error("invalid prompt type");switch(c=a(p.inputs[e.inputType]),e.inputType){case"text":case"textarea":case"email":case"date":case"time":case"number":case"password":c.val(e.value);break;case"select":var h={};if(m=e.inputOptions||[],!a.isArray(m))throw new Error("Please pass an array of input options");if(!m.length)throw new Error("prompt with select requires options");l(m,(function(e,n){var o=c;if(n.value===t||n.text===t)throw new Error("given options in wrong format");n.group&&(h[n.group]||(h[n.group]=a("<optgroup/>").attr("label",n.group)),o=h[n.group]),o.append("<option value='"+n.value+"'>"+n.text+"</option>")})),l(h,(function(e,a){c.append(a)})),c.val(e.value);break;case"checkbox":var v=a.isArray(e.value)?e.value:[e.value];if(!(m=e.inputOptions||[]).length)throw new Error("prompt with checkbox requires options");if(!m[0].value||!m[0].text)throw new Error("given options in wrong format");c=a("<div/>"),l(m,(function(t,n){var o=a(p.inputs[e.inputType]);o.find("input").attr("value",n.value),o.find("label").append(n.text),l(v,(function(e,a){a===n.value&&o.find("input").prop("checked",!0)})),c.append(o)}))}return e.placeholder&&c.attr("placeholder",e.placeholder),e.pattern&&c.attr("pattern",e.pattern),e.maxlength&&c.attr("maxlength",e.maxlength),i.append(c),i.on("submit",(function(e){e.preventDefault(),e.stopPropagation(),o.find(".btn-primary").click()})),(o=f.dialog(e)).off("shown.bs.modal"),o.on("shown.bs.modal",(function(){c.focus()})),!0===u&&o.modal("show"),o}};f.dialog=function(e){e=i(e);var n=a(p.dialog),r=n.find(".modal-dialog"),c=n.find(".modal-body"),s=e.buttons,d="",u={onEscape:e.onEscape};if(a.fn.modal===t)throw new Error("$.fn.modal is not defined; please double check you have included the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ for more details.");if(l(s,(function(e,a){d+="<button data-bb-handler='"+e+"' type='button' class='btn "+a.className+"'>"+a.label+"</button>",u[e]=a.callback})),c.find(".bootbox-body").html(e.message),!0===e.animate&&n.addClass("fade"),e.className&&n.addClass(e.className),"large"===e.size?r.addClass("modal-lg"):"small"===e.size&&r.addClass("modal-sm"),e.title&&c.before(p.header),e.closeButton){var f=a(p.closeButton);e.title?n.find(".modal-header").prepend(f):f.css("margin-top","-10px").prependTo(c)}return e.title&&n.find(".modal-title").html(e.title),d.length&&(c.after(p.footer),n.find(".modal-footer").html(d)),n.on("hidden.bs.modal",(function(e){e.target===this&&n.remove()})),n.on("shown.bs.modal",(function(){n.find(".btn-primary:first").focus()})),"static"!==e.backdrop&&n.on("click.dismiss.bs.modal",(function(e){n.children(".modal-backdrop").length&&(e.currentTarget=n.children(".modal-backdrop").get(0)),e.target===e.currentTarget&&n.trigger("escape.close.bb")})),n.on("escape.close.bb",(function(e){u.onEscape&&o(e,n,u.onEscape)})),n.on("click",".modal-footer button",(function(e){var t=a(this).data("bb-handler");o(e,n,u[t])})),n.on("click",".bootbox-close-button",(function(e){o(e,n,u.onEscape)})),n.on("keyup",(function(e){27===e.which&&n.trigger("escape.close.bb")})),a(e.container).append(n),n.modal({backdrop:!!e.backdrop&&"static",keyboard:!1,show:!1}),e.show&&n.modal("show"),n},f.setDefaults=function(){var e={};2===arguments.length?e[arguments[0]]=arguments[1]:e=arguments[0],a.extend(u,e)},f.hideAll=function(){return a(".bootbox").modal("hide"),f};var m={bg_BG:{OK:"Ок",CANCEL:"Отказ",CONFIRM:"Потвърждавам"},br:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Sim"},cs:{OK:"OK",CANCEL:"Zrušit",CONFIRM:"Potvrdit"},da:{OK:"OK",CANCEL:"Annuller",CONFIRM:"Accepter"},de:{OK:"OK",CANCEL:"Abbrechen",CONFIRM:"Akzeptieren"},el:{OK:"Εντάξει",CANCEL:"Ακύρωση",CONFIRM:"Επιβεβαίωση"},en:{OK:"OK",CANCEL:"Cancel",CONFIRM:"OK"},es:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Aceptar"},et:{OK:"OK",CANCEL:"Katkesta",CONFIRM:"OK"},fa:{OK:"قبول",CANCEL:"لغو",CONFIRM:"تایید"},fi:{OK:"OK",CANCEL:"Peruuta",CONFIRM:"OK"},fr:{OK:"OK",CANCEL:"Annuler",CONFIRM:"D'accord"},he:{OK:"אישור",CANCEL:"ביטול",CONFIRM:"אישור"},hu:{OK:"OK",CANCEL:"Mégsem",CONFIRM:"Megerősít"},hr:{OK:"OK",CANCEL:"Odustani",CONFIRM:"Potvrdi"},id:{OK:"OK",CANCEL:"Batal",CONFIRM:"OK"},it:{OK:"OK",CANCEL:"Annulla",CONFIRM:"Conferma"},ja:{OK:"OK",CANCEL:"キャンセル",CONFIRM:"確認"},lt:{OK:"Gerai",CANCEL:"Atšaukti",CONFIRM:"Patvirtinti"},lv:{OK:"Labi",CANCEL:"Atcelt",CONFIRM:"Apstiprināt"},nl:{OK:"OK",CANCEL:"Annuleren",CONFIRM:"Accepteren"},no:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},pl:{OK:"OK",CANCEL:"Anuluj",CONFIRM:"Potwierdź"},pt:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Confirmar"},ru:{OK:"OK",CANCEL:"Отмена",CONFIRM:"Применить"},sq:{OK:"OK",CANCEL:"Anulo",CONFIRM:"Prano"},sv:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},th:{OK:"ตกลง",CANCEL:"ยกเลิก",CONFIRM:"ยืนยัน"},tr:{OK:"Tamam",CANCEL:"İptal",CONFIRM:"Onayla"},zh_CN:{OK:"OK",CANCEL:"取消",CONFIRM:"确认"},zh_TW:{OK:"OK",CANCEL:"取消",CONFIRM:"確認"}};return f.addLocale=function(e,t){return a.each(["OK","CANCEL","CONFIRM"],(function(e,a){if(!t[a])throw new Error("Please supply a translation for '"+a+"'")})),m[e]={OK:t.OK,CANCEL:t.CANCEL,CONFIRM:t.CONFIRM},f},f.removeLocale=function(e){return delete m[e],f},f.setLocale=function(e){return f.setDefaults("locale",e)},f.init=function(t){return e(t||a)},f})),$(document).on("click",".alert .close",(function(){closeAlert()})),$(window).load((function(){scrollTimer&&clearTimeout(scrollTimer),$(".sticky-alert").length&&(scrollTimer=setTimeout((function(){$(window).one("scroll",(function(){closeTimer&&clearTimeout(closeTimer),scrollTimer=setTimeout((function(){closeAlert()}),2e3)}))}),500))})),$(document).on("click","a.vid",(function(e){e.preventDefault(),$(".navigall").remove();var a=$(this).data("link"),t=$(this).data("linkencoded"),n=$(this).data("name"),o=$(this).parents(".rowa").attr("id"),l=$(this).data("ext");loadVid(a,t,n,o,l)})),$(document).on("click","a.thumb",(function(e){e.preventDefault(),$(".navigall").remove();var a=$(this).data("link"),t=$(this).data("linkencoded"),n=$(this).data("name"),o=$(this).parents(".rowa").attr("id");loadImg(a,t,n,o)})),jQuery.fn.firstAfter=function(e){return this.nextAll(e).first()},jQuery.fn.firstBefore=function(e){return this.prevAll(e).first()},$(document).on("click","a.navigall",(function(e){var a=$(this).data("link"),t=$(this).data("linkencoded"),n=$(this).data("name"),o=$(this).data("id");$(".navigall").remove(),loadImg(a,t,n,o)})),$(document).keydown((function(e){39==e.keyCode&&$(".nextgall").length>0&&$(".nextgall").trigger("click"),37==e.keyCode&&$(".prevgall").length>0&&$(".prevgall").trigger("click")})),$(document).ready((function(e){$("#zoomview").on("hidden.bs.modal",(function(){$(".navigall").remove()}))})),$(document).on("click",".rename a",(function(){var e=$(this).data("thisname"),a=$(this).data("thisdir"),t=$(this).data("thisext");$("#newname").val(e),$("#oldname").val(e),$("#dir").val(a),$("#ext").val(t),$("#modalchangename").modal()})),$(document).on("click",".edituser",(function(){var e=$(this).data("thisname"),a=$(this).data("thisdir"),t=$(this).data("thisext");$("#newname").val(e),$("#oldname").val(e),$("#dir").val(a),$("#ext").val(t)})),$("#usrForm").submit((function(e){$("#oldp").val().length<1&&($("#oldp").focus(),e.preventDefault()),$("#newp").val()!=$("#checknewp").val()&&($("#checknewp").focus(),e.preventDefault())})),$("#rpForm").submit((function(e){$("#rep").val().length<1&&($("#rep").focus(),e.preventDefault()),$("#rep").val()!=$("#repconf").val()&&($("#repconf").focus(),e.preventDefault())})),$(document).on("keyup keypress","#sendpwd",(function(e){if(13===(e.keyCode||e.which))return e.preventDefault(),!1})),$(document).on("submit","#sendpwd",(function(e){e.preventDefault();var a=$(this).serialize(),t=(new Date).getTime();$(".mailpreload").fadeIn((function(){$.ajax({type:"POST",url:"vfm-admin/ajax/sendpwd.php",data:a}).done((function(e){$(".sendresponse").html(e).fadeIn(),$(".mailpreload").fadeOut(),$("#captcha").attr("src","vfm-admin/captcha.php?"+t),$("#sendpwd .panel-body input").val("")})).fail((function(){$(".mailpreload").fadeOut(),$(".sendresponse").html('<div class="alert alert-danger">Error connecting: ajax/sendpwd</div>').fadeIn(),$("#captcha").attr("src","vfm-admin/captcha.php?"+t)}))}))})),$(document).on("click",".shownext",(function(){var e,a,t,n,o=$(this).parent().prev().find(".form-group:last-child .addest");o.val().length<5?o.focus():(n=$('<input name="send_cc[]" type="email" class="form-control addest">'),t=$('<span class="input-group-addon"><i class="fa fa-envelope fa-fw"></i></span>'),a=$('<div class="input-group"></div>').append(t).append(n),e=$('<div class="form-group bcc-address"></div>').append(a),$(".wrap-dest").append(e))})),$.fn.slideFadeToggle=function(e,a,t){return this.animate({opacity:"toggle",height:"toggle"},e,a,t)},$(document).on("click",".openmail",(function(){$("#sendfiles").slideFadeToggle()})),$(document).on("change","#use_pass",(function(){$(".alert").alert("close"),passwidget()})),$(document).on("change",".btn-file :file",(function(){var e=$(this),a=e.get(0).files?e.get(0).files.length:1,t=e.val().replace(/\\/g,"/").replace(/.*\//,"");e.trigger("fileselect",[a,t])})),$(document).on("click","#selectall",(function(e){e.preventDefault(),$(".selecta").prop("checked",!$(".selecta").prop("checked")),checkSelecta()})),$(document).on("click",".gridview .name",(function(e){var a=$(this).parent(".rowa").find(".selecta");a.prop("checked",!a.prop("checked")),checkSelecta()})),$(document).ready((function(){$(".groupact, .manda, .upfolder").attr("disabled",!0),checkSelecta(),$(".upload_dirname").keyup((function(){$(this).val().length>0?$(".upfolder").attr("disabled",!1):$(".upfolder").attr("disabled",!0)}))})),$(document).on("click",".switchview",(function(e){$switcher=$(this),e.preventDefault(),$("#sort").animate({opacity:0},300,"linear",(function(){$("#sort").toggleClass("gridview"),placeHolderheight(),$switcher.hasClass("grid")?($switcher.removeClass("grid"),updateSession({lilstview:"list"}),oTable.columns.adjust().draw("page")):($switcher.addClass("grid"),updateSession({lilstview:"grid"})),$("#sort").animate({opacity:1},300,"linear")}))})),$(window).on("load",(function(){placeHolderheight()})),$(window).resize((function(){placeHolderheight()})),$(document).on("change",".selecta",(function(){checkSelecta()})),$(document).ready((function(){$('[data-toggle="tooltip"]').tooltip({})})),$(document).on("click",".selectallusers",(function(){$(".selectme").prop("checked",!$(".selectme").prop("checked")),checkNotiflist()})),$(document).ready((function(){$("#userslist :checkbox").change((function(){checkNotiflist()}))}));var loaded=!1;$(window).on("load",(function(){loaded||($(".ghost").removeClass("ghost-hidden"),loaded=!0)})),$(document).ready((function(){setTimeout((function(){loaded||($(".ghost").removeClass("ghost-hidden"),loaded=!0)}),3e3)}));var oTable,paginationTemplate={emptyTable:"--",info:"_START_-_END_ / _TOTAL_ ",infoEmpty:"",infoFiltered:"",infoPostFix:"",lengthMenu:"_MENU_",loadingRecords:'<i class="fa fa-refresh fa-spin"></i>',processing:'<i class="fa fa-refresh fa-spin"></i>',search:'<span class="input-group-addon"><i class="fa fa-search"></i></span> ',zeroRecords:"--",paginate:{first:'<i class="fa fa-angle-double-left"></i>',last:'<i class="fa fa-angle-double-right"></i>',previous:'<i class="fa fa-angle-left"></i>',next:'<i class="fa fa-angle-right"></i>'}};function callFoldersTable(e,a,t,n,o){var l;"off"==o?(l="rt",a=-1):l='<"table-controls-top"fl>rt<"table-controls-bottom"ip>',$.extend($.fn.dataTableExt.oStdClasses,{sSortAsc:"header headerSortDown",sSortDesc:"header headerSortUp",sSortable:"header"}),$("#sortable").DataTable({dom:l,pagingType:e,order:[[t,n]],columnDefs:[{width:"5%",targets:[0]},{width:"60%",targets:[1],orderable:!0,searchable:!0,type:"natural"},{width:"20%",targets:[2],orderable:!0},{targets:["_all"],orderable:!1,searchable:!1}],lengthMenu:[[5,10,25,50,100],[5,10,25,50,100]],pageLength:a,language:paginationTemplate,drawCallback:function(){var e=this.api(),a=e.page.info(),t=$(this).parent().find(".dataTables_paginate");a.recordsDisplay<=e.page.len()?t.css("display","none"):t.css("display","block")}})}function callFilesTable(e,a,t,n,o,l){$.extend($.fn.dataTableExt.oStdClasses,{sSortAsc:"header headerSortDown",sSortDesc:"header headerSortUp",sSortable:"header"}),(oTable=$("#sort").DataTable({dom:'<"table-controls-top"fl>rt<"table-controls-bottom"ip>',pagingType:e,paging:a,searching:t,pageLength:n,order:[[o,l]],columnDefs:[{width:"50%",targets:[2],orderable:!0,searchable:!0,type:"natural"},{width:"10%",targets:[3],orderable:!0},{width:"20%",targets:[4],orderable:!0},{targets:["_all"],orderable:!1,searchable:!1}],language:paginationTemplate,drawCallback:function(){checkSelecta(),placeHolderheight();var e=this.api(),a=e.page.info(),t=$(this).parent().find(".dataTables_paginate");a.recordsDisplay<=e.page.len()?t.css("display","none"):t.css("display","block")}})).on("length.dt",(function(e,a,t){updateSession({iDisplayLength:t})}))}function createZip(e,a){$("#zipmodal .ziparrow").html('<i class="fa fa-angle-double-right fa-3x fa-fw passing-animated"></i>'),$("#zipmodal").modal(),$.ajax({cache:!1,type:"POST",url:"vfm-admin/ajax/zip.php?t="+(new Date).getTime(),data:{fold:e,dash:a}}).done((function(e){var a=$.parseJSON(e);if(!1===a.error){var t='<a class="btn btn-primary btn-block downzip" href="'+a.link+'"><i class="fa fa-download"></i> '+a.filename+"</a>";$("#zipmodal .ziparrow").html('<i class="fa fa-check fa-3x fa-fw"></i>')}else{t=a.error;$("#zipmodal .ziparrow").html('<i class="fa fa-times fa-3x fa-fw"></i>')}if($("#zipmodal .zipresp").html(t),$(".downzip").length&&!$("#zipmodal").data("bs.modal").isShown){var n=$(".downzip").attr("href");$(".downzip").remove(),window.location.href=n}})).fail((function(){alert("ERROR generating zip")}))}function callBindZip(e){var a=function(t){var n=$(this).data("zip"),o=$(this).data("thisname"),l=$(this).data("dash"),i=e+": <strong>"+o+"</strong>";t.preventDefault(),$(document).off("click",".zipdir"),bootbox.confirm({size:"small",title:'<i class="fa fa-cloud-download"></i>',message:i,callback:function(e){$(document).on("click",".zipdir",a),e&&createZip(n,l)}})};$(document).on("click",".zipdir",a)}function createShareLink(e,a,t,n,o,l,i,r,c){$(document).on("click","#createlink",(function(){$(".alert").alert("close");var o,l,i='<div class="alert alert-warning alert-dismissible" role="alert">'+e+"</div>";if($("#use_pass").prop("checked"))if($(".setpass").val()){if($(".setpass").val().length<4)return $(".setpass").focus(),void $(".seclink").after(i);l=$(".setpass").val()}else l=randomstring();$.ajax({cache:!1,type:"POST",url:"vfm-admin/ajax/shorten.php",data:{atts:divar.join(","),time:a,hash:t,pass:l}}).done((function(e){o=n+"/?dl="+e,$(".sharelink").val(o),$(".sharebutt").attr("href",o),$(".passlink").val(l),$(".passlink").prop("readonly",!0),$(".createlink-wrap").fadeOut("fast",(function(){$(".shalink").fadeIn(),$(".openmail").fadeIn()}))})).fail((function(){console.log("ERROR generating shortlink")}))})),$(document).on("keyup keypress","#sendfiles",(function(e){if(13===(e.keyCode||e.which))return e.preventDefault(),!1})),$(document).on("click",".manda",(function(){var e,a;divar=[],(e=(a=1==o?$(".selecta:checked",oTable.rows().nodes()):$(".selecta:checked")).size())>0?(a.each((function(){divar.push($(this).val())})),$(".addest").val(""),$(".bcc-address").remove(),$(".seclink, .shalink, .mailresponse, #sendfiles, .openmail").hide(),$(".sharelink, .passlink").val(""),$(".sharebutt").attr("href","#"),$(".createlink-wrap").fadeIn(),passwidget(),$(".attach").val(divar.join(",")),$(".numfiles").html(e),$("#sendfilesmodal").modal(),$("#sendfiles").unbind("submit").submit((function(e){e.preventDefault(),$(".mailpreload").fadeIn();var a=$.now();$.ajax({cache:!1,type:"POST",url:"vfm-admin/ajax/sendfiles.php?t="+a,data:$("#sendfiles").serialize()}).done((function(e){$(".mailresponse").html('<div class="alert alert-success">'+e+"</div>").fadeIn(),$(".addest").val(""),$(".bcc-address").remove(),$(".mailpreload").fadeOut()})).fail((function(){$(".mailpreload").fadeOut(),$(".mailresponse").html('<div class="alert alert-danger">Error</div>')}))}))):alert(i)})),$(document).on("click",".multid",(function(e){var n,s,d;(e.preventDefault(),divar=[],s=1==o?$(".selecta:checked",oTable.rows().nodes()):$(".selecta:checked"),(n=s.size())>0)?(s.each((function(){divar.push($(this).val())})),n>=l?alert(r+" "+l):$.ajax({cache:!1,type:"POST",url:"vfm-admin/ajax/shorten.php",data:{atts:divar.join(","),time:a,hash:t}}).done((function(e){d=c?"download/dl/"+e:"vfm-admin/vfm-downloader.php?dl="+e,$(".sendlink").attr("href",d),$("#downloadmulti .numfiles").html(n),$("#downloadmulti").modal()})).fail((function(){console.log("ERROR generating shortlink")}))):alert(i)}))}function setupDelete(e,a,t,n,o,l,i){var r=function(a){a.preventDefault(),$(document).off("click",".del a");var t=$(this).attr("href"),n="<br><strong>"+$(this).attr("data-name")+"<strong>";bootbox.confirm({title:'<i class="fa fa-trash"></i>',message:e+n,callback:function(e){$(document).on("click",".del a",r),e&&(window.location.href=t)}})};$(document).on("click",".del a",r);var c=function(e){e.preventDefault(),$(document).off("click",".removelink"),bootbox.confirm({title:'<i class="fa fa-trash"></i>',message:a,callback:function(e){$(document).on("click",".removelink",c);var a=$("#delform").serializeArray();e&&$.ajax({type:"POST",url:"vfm-admin/vfm-del.php",data:a}).done((function(e){"ok"==e?window.location=window.location.href.split("&del")[0]:$(".delresp").html(e)})).fail((function(){alert("error")}))}})};$(document).on("click",".removelink",c),$(document).on("click",".multic",(function(e){var a,r;e.preventDefault();var c=[];(a=(r=1==t?$(".selecta:checked",oTable.rows().nodes()):$(".selecta:checked")).size())>0?(r.each((function(){c.push($(this).val())})),$("#delform").append('<input type="hidden" name="setdel" value="'+c+'">'),$("#delform").append('<input type="hidden" name="t" value="'+n+'">'),$("#delform").append('<input type="hidden" name="h" value="'+o+'">'),$("#delform").append('<input type="hidden" name="doit" value="'+l+'">'),$("#deletemulti .numfiles").html(a),$("#deletemulti").modal()):alert(i)}))}function pupulateMoveCopyform(e,a,t,n,o){var l,i=[];(l=1==e?$(".selecta:checked",oTable.rows().nodes()):$(".selecta:checked")).size()>0?(l.each((function(){i.push($(this).val())})),$("#moveform").append('<input type="hidden" name="setmove" value="'+i+'">'),$("#moveform").append('<input type="hidden" name="t" value="'+t+'">'),$("#moveform").append('<input type="hidden" name="h" value="'+n+'">'),$("#moveform").append('<input type="hidden" name="doit" value="'+o+'">'),$("#movemulti").modal()):alert(a)}function setupMove(e,a,t,n,o){$(document).on("click",".multimove",(function(l){l.preventDefault(),$("#moveform").html(""),$("#movemulti .hiddenalert").html(""),pupulateMoveCopyform(e,a,t,n,o)})),$(document).on("click",".multicopy",(function(l){l.preventDefault(),$("#moveform").html(""),$("#movemulti .hiddenalert").html(""),$("#moveform").append('<input type="hidden" name="copy" value="1">'),pupulateMoveCopyform(e,a,t,n,o)})),$(document).on("click",".movelink",(function(e){e.preventDefault();var a=$(this).data("dest");$("#moveform").append('<input type="hidden" name="dest" value="'+a+'">');var t=$("#moveform").serializeArray();$.ajax({cache:!1,type:"POST",url:"vfm-admin/vfm-move.php?t="+(new Date).getTime(),data:t}).done((function(e){if("ok"==e)window.location=window.location.href.split("&del")[0];else{var a='<div class="alert alert-danger" role="alert">'+e+"</div>";$("#movemulti .hiddenalert").html(a)}})).fail((function(){$("#movemulti .hiddenalert").html('<div class="alert alert-danger" role="alert">Error connecting vfm-move.php</div>')}))}))}$(document).on("click",".downzip",(function(){$("#zipmodal").modal("hide")}));