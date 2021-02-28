/*! ===================================
 *  Author: Nazarkin Roman, Egor Dankov
 *  -----------------------------------
 *  PuzzleThemes
 *  =================================== */
"use strict";!function(e){var t=e(".sp-circle"),a=0;t.one("appear",(function(){var t=e(this);setTimeout((function(){t.circleProgress("value",t.data("value"))}),a),a+=150})),t.circleProgress({value:0,size:125,thickness:2,fill:{color:"#111"},emptyFill:"#ddd",startAngle:300,animation:{duration:2500,easing:"easeInOutQuint"}}).on("circle-animation-progress",(function(t,a,i){e(this).find("span").text((100*i).toFixed(1))})),setInterval((function(){a=0}),1e3),e(window).one("pzt.preloader_done",(function(){t.appear({force_process:!0})}))}(jQuery),function(e){var t=jQuery("#sp-blog-grid");t.length<=0||t.pzt_shuffle({itemSelector:'[class*="col-"]',gutterWidth:0,speed:600,easing:"ease"})}(),function(e){var t=jQuery(".sp-clients-grid");t.length<=0||t.pzt_shuffle({itemSelector:'[class*="col-"]',gutterWidth:0,speed:600,easing:"ease"})}(),
/*! ===================================
 *  Author: Roman Nazarkin, Egor Dankov
 *  -----------------------------------
 *  PuzzleThemes
 *  =================================== */
function(e){e.fn.PZT_ColorSwarm=function(){var t,a=e(this)[0],i=window.resize=function(){a.height=e(a).parent().outerHeight(),a.width=window.innerWidth};e((function(){t=a.getContext("2d"),i();for(var e=[],o=randomColor({luminosity:"light",count:100}),n=0;n<100;n++){var r=Math.random()*a.width,l=Math.random()*a.height,d=new s(r,l,o[n]);d.draw(),e.push(d)}var c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},f=function(){c(f),t.clearRect(0,0,a.width,a.height);for(var i=0;i<e.length;i++)e[i].frame()};f()}));var o,s=function(e,t,a){this.pos=[e,t],this.r=1.5*Math.random()+1,this.c=a,this.v=[.3*(Math.random()-.5),.3*(Math.random()-.5)]};s.prototype.getBound=function(e){return e?a.height:a.width},s.prototype.frame=function(){for(o=0;o<2;o++)(this.pos[o]>this.getBound(o)-10||this.pos[o]<10)&&(this.v[o]*=-1),this.pos[o]+=10*this.v[o];this.draw()},s.prototype.draw=function(){t.fillStyle=this.c,t.beginPath(),t.arc(this.pos[0],this.pos[1],this.r,0,2*Math.PI,!1),t.fill()}}}(jQuery),function(e){e(".sp-color-swarm").each((function(){var t=e('<canvas class="sp-color-swarm-svg" />');e(this).prepend(t),t.PZT_ColorSwarm()}))}(jQuery),(()=>{function e(){var e,t;$("#contact-form").valid()&&(t=$("#email").val(),/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(t)&&(e=$("#phone").val(),/^\d+$/.test(e))&&($("#mail-sent-div").show(),$("#contact-form-div").hide(),setTimeout(()=>{$("#mail-sent-div").hide(),$("#contact-form-div").show()},5e3),function(){let e=new FormData;e.append("name",$("#name").val()||"EMPTY_FIELD"),e.append("email",$("#email").val()||"EMPTY_FIELD"),e.append("phone",$("#phone").val()||"EMPTY_FIELD"),e.append("message",$("#message").val()||"EMPTY_FIELD"),e.append("g-recaptcha-response",$("#recaptcha").val()||"");var t=new XMLHttpRequest;t.open("POST","sendMail.php",!0),t.send(e)}(),$("#name").val(""),$("#email").val(""),$("#phone").val(""),$("#message").val(""),grecaptcha.reset(),$("#mail-send-btn").prop("disabled",!0)))}$("#phone").keyup((function(){var e=$(this).val().replace(/[^\d]/,"");$(this).val(e)})),$(document).ready((function(){$("#contact-form").submit((function(e){e.preventDefault()})),$("#contact-form").validate({rules:{email:{required:!0,email:!0}}}),$("#sendAnotherEmail").click(()=>{$("#mail-sent-div").hide(),$("#contact-form-div").show()}),$("#mail-sent-div").hide(),$("#mail-send-btn").click(()=>{e()})}))})(),function(e){e(".sp-faq-list .sp-faq-card").find("> .card-header").on("click",(function(){var t=e(this).closest(".sp-faq-card");t.closest(".sp-faq-list").find(".sp-faq-card").each((function(){e(this).is(t)||(e(this).find("> .card-contents").collapse("hide"),e(this).removeClass("card-open"))})),t.find("> .card-contents").collapse("show"),t.addClass("card-open")}))}(jQuery),
/*! ===================================
 *  Author: Roman Nazarkin, Egor Dankov
 *  -----------------------------------
 *  PuzzleThemes
 *  =================================== */
function(e){var t=e(window),a=e("#sp-footer"),i=e("#sp-footer-sizing-helper");if(a.hasClass("sp-footer-fixed")){var o=-1;setInterval((function(){o!==a.outerHeight()&&(o=a.outerHeight(),i.css("height",a.outerHeight()),a.outerHeight()>=t.outerHeight()/1.5?(a.css("position","static"),a.find("> div").css("opacity",1),i.hide()):(a.css("position","fixed"),i.show()))}),750),PZTJS.scrollRAF((function(){var e=i.offset().top,o=t.scrollTop()+t.outerHeight();o<=e||"static"===a.css("position")||a.find("> div").css("opacity",(o-e)/a.outerHeight())}))}}(jQuery),function(e){var t=e(".sp-map-place"),a={zoom:16,center:{lat:51.52728,lng:-.08879},disableDefaultUI:!1,scrollwheel:!1,draggable:!0,styles:[{featureType:"water",elementType:"geometry",stylers:[{color:"#dddddd"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"dddddd"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"off"},{color:"#ffffff"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#555555"},{lightness:20}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#aaaaaa"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#f4f4f4"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#f4f4f4"},{lightness:17},{weight:1.2}]}],mapTypeControl:!1,navigationControl:!1,mapTypeId:"roadmap"};t.each((function(){var t=e(this),i=new google.maps.Map(t.get(0),a);t.data("gmap-object",i)})),t.filter("[data-address]").each((function(){var t=e(this),a=t.data("gmap-object"),i=new google.maps.Geocoder;a&&i&&i.geocode({address:t.data("address")},(function(e,i){if(i===google.maps.GeocoderStatus.OK){var o=e[0];a.setCenter(o.geometry.location);var s=new google.maps.InfoWindow({content:"<b>"+o.formatted_address+"</b>",size:new google.maps.Size(150,50)}),n=new google.maps.Marker({position:o.geometry.location,map:a,icon:"assets/images/map-pin.png",title:t.data("address")});google.maps.event.addListener(n,"click",(function(){s.open(a,n)}))}else console.error("Google Maps are unable to find location: "+t.data("address"),i,e)}))}))}(jQuery),function(e){var t=e(".sp-map-place"),a={zoom:16,center:{lat:40.731607,lng:-73.997038},disableDefaultUI:!1,scrollwheel:!1,draggable:!0,styles:[{featureType:"water",elementType:"geometry",stylers:[{color:"#dddddd"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"dddddd"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"off"},{color:"#ffffff"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#555555"},{lightness:20}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#aaaaaa"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#f4f4f4"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#f4f4f4"},{lightness:17},{weight:1.2}]}],mapTypeControl:!1,navigationControl:!1,mapTypeId:"roadmap"};t.each((function(){var t=e(this),i=new google.maps.Map(t.get(0),a);t.data("gmap-object",i)})),t.filter("[data-address]").each((function(){var t=e(this),a=t.data("gmap-object"),i=new google.maps.Geocoder;a&&i&&i.geocode({address:t.data("address")},(function(e,i){if(i===google.maps.GeocoderStatus.OK){var o=e[0];a.setCenter(o.geometry.location);var s=new google.maps.InfoWindow({content:"<b>"+o.formatted_address+"</b>",size:new google.maps.Size(150,50)}),n=new google.maps.Marker({position:o.geometry.location,map:a,icon:"assets/images/map-pin.png",title:t.data("address")});google.maps.event.addListener(n,"click",(function(){s.open(a,n)}))}else console.error("Google Maps are unable to find location: "+t.data("address"),i,e)}))}))}(jQuery),
/*! ===================================
 *  Author: Roman Nazarkin, Egor Dankov
 *  -----------------------------------
 *  PuzzleThemes
 *  =================================== */
function(e){var t=e("html"),a=e("#sp-mobile-nav-container"),i=e("#sp-mobile-nav-trigger"),o=Modernizr.prefixed("animationDelay");a.find(".nav_menu > li").each((function(){var t=e(this);t[0].style[o]=300+150*t.index()+"ms"})),a.find(".menu-item-has-children > a").on("click",(function(t){var i=e(this),o=e(this).parent();a.find(".menu-item-has-children").each((function(){e.contains(this,o.get(0))||e(this).find("> a").removeClass("sub-active").next("ul").slideUp(250)})),!1===i.next("ul").is(":visible")&&i.addClass("sub-active").next("ul").slideDown(250),t.preventDefault()}));var s=!1;i.on("click",(function(i){i.preventDefault(),s=!s,t.toggleClass("sp-active-burger-menu",s);var o=e("#sp-header").outerHeight();a.css("border-top-width",o),a.find(".sub-active").each((function(){e(this).removeClass("sub-active").next("ul").hide()}))})),a.find(".nav_menu a").on("click",(function(){!1===e(this).parent().hasClass("menu-item-has-children")&&s&&i.trigger("click")})),e(document).on("touchmove",(function(t){s&&!e(t.target).closest(a).length&&t.preventDefault()}))}(jQuery),function(e){var t=e(window),a=e("#sp-header");t.on("docready load resize",e.debounce(250,(function(){a.find(".sub-menu").each((function(){var a=e(this);a.offset().left+a.outerWidth()>=t.outerWidth()-25&&a.addClass("invert-attach-point")}))}))),a.find('.nav_menu a[href="#"]').on("click",(function(e){e.preventDefault()}))}(jQuery),function(e){var t=e("#sp-header").find(".sp-search-icon"),a=e("#sp-search-block-container");a.find("> .search-block-inner").on(PZTJS.transitionEnd,(function(){e(this).is(":visible")&&e(this).find(".search-input").focus()})),a.find(".close-search").on("click",(function(e){e.preventDefault(),a.removeClass("open")})),e(document).keyup((function(e){27===e.keyCode&&a.removeClass("open")})),t.on("click",(function(e){e.preventDefault(),a.addClass("open")}))}(jQuery),
/*! ===================================
 *  Author: Roman Nazarkin, Egor Dankov
 *  -----------------------------------
 *  PuzzleThemes
 *  =================================== */
function(e){var t=e(".sp-intro"),a=e(window);t.each((function(){var t=e(this);t.hasClass("sp-intro-carousel")&&function(t){t.addClass("slick-dots-inside"),t.on("init reInit",(function(){e(this).find(".swipebox-video").swipebox()}));t.slick(e.extend({slide:".slider-item",speed:1e3,dots:!0,fade:!0,autoplay:!0,infinite:!0,autoplaySpeed:7500},t.data("slick")))}(t),t.hasClass("sp-intro-video")&&function(e){var t=e.find("> .video-container"),a=t.find("> .video-placeholder"),i=t.find("> .video-controls");t.on("YTPPlay YTPPause",(function(e){"YTPPlay"===e.type&&i.find(".sp-video-play > i").removeClass("icon-ion-ios-play"),"YTPPause"===e.type&&i.find(".sp-video-play > i").addClass("icon-ion-ios-play")})),t.on("YTPMuted YTPUnmuted",(function(e){"YTPMuted"===e.type&&i.find(".sp-video-volume > i").removeClass("icon-ion-android-volume-up"),"YTPUnmuted"===e.type&&i.find(".sp-video-volume > i").addClass("icon-ion-android-volume-up")})),t.YTPlayer({videoURL:t.data("url"),showControls:!1,containment:"self",loop:!0,autoPlay:!0,vol:25,mute:!0,showYTLogo:!1,startAt:t.data("start")||0,stopAt:t.data("stop")||0,onReady:function(){a.fadeOut("fast"),i.fadeIn("fast")}}),i.find(".sp-video-play").on("click",(function(e){e.preventDefault(),t.YTPTogglePlay()})),i.find(".sp-video-volume").on("click",(function(e){e.preventDefault(),t.YTPToggleVolume()}))}(t),t.hasClass("sp-intro-image")&&function(e){e.attr("data-background")&&(e.find("> .intro-bg").length||e.append('<div class="intro-bg"/>'),e.find("> .intro-bg").css("background-image","url("+e.attr("data-background")+")"))}(t)})),a.width()>680&&PZTJS.scrollRAF((function(){t.each((function(){var t=e(this),a=t.height(),i=Math.max(window.pageYOffset,0);if(!(window.pageYOffset>a)){var o=Math.floor(.3*i)+"px";t[0].style[Modernizr.prefixed("transform")]="translate3d(0, "+o+", 0)",t.css("opacity",1-i/a)}}))}))}(jQuery),function(e){e.ajaxChimp.translations.soprano={submit:"Loading, please wait...",0:"We have sent you a confirmation email. Please check your inbox.",1:"The field is empty. Please enter your email.",2:'An email address must contain a single "@" character.',3:"This email seems to be invalid. Please enter a correct one.",4:"This email seems to be invalid. Please enter a correct one.",5:"This email address looks fake or invalid. Please enter a real email address."},e(".sp-subscribe-form").each((function(){var t=e(this).closest("form");t.on("submit",(function(){t.addClass("mc-loading")})),t.ajaxChimp({language:"soprano",label:t.find("> .form-output"),callback:function(e){t.removeClass("mc-loading"),t.toggleClass("mc-valid","success"===e.result),t.toggleClass("mc-invalid","error"===e.result),"success"===e.result&&t.find('input[type="email"]').val(""),setTimeout((function(){t.removeClass("mc-valid mc-invalid"),t.find('input[type="email"]').focus()}),4500)}})}))}(jQuery),jQuery(document).ready((function(){"function"==typeof FastClick&&FastClick.attach(document.body)})),function(){var e,t=document.body;window.addEventListener("scroll",(function(){clearTimeout(e),t.classList.contains("disable-hover")||t.classList.add("disable-hover"),e=setTimeout((function(){t.classList.remove("disable-hover")}),100)}),!1)}(),function(e){e('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click((function(t){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=e(this.hash);(a=a.length?a:e("[name="+this.hash.slice(1)+"]")).length&&(t.preventDefault(),e("html, body").animate({scrollTop:a.offset().top-55},1500,"easeInOutExpo",(function(){var t=e(a);if(t.focus(),t.is(":focus"))return!1;t.attr("tabindex","-1"),t.focus()})))}}))}(jQuery),function(e){var t=e(".sp-scroll-top"),a=e(".sp-about-button");PZTJS.scrollRAF((function(){window.pageYOffset>500?(t.addClass("scroll-top-visible"),a.addClass("scroll-top-visible")):(t.removeClass("scroll-top-visible"),a.removeClass("scroll-top-visible"))})),t.on("mouseover mouseout",(function(){e(this).find(".anno-text").stop().animate({width:"toggle",padding:"toggle"})}))}(jQuery),function(e){var t=e(".sp-portfolio-block");t.length<=0||t.each((function(){var t=e(this),a=t.find(".sp-portfolio-items"),i=t.find(".sp-portfolio-sorting a[data-group]");a.pzt_shuffle({itemSelector:'[class*="col-"]',gutterWidth:0,speed:600,easing:"ease"}),i.on("click",(function(t){var i=e(this);i.parent().siblings().removeClass("active"),i.parent().addClass("active"),a.shuffle("shuffle",i.data("group")),t.preventDefault()}))}))}(jQuery),function(e){var t=e(window);t.on("load",(function(){t.trigger("pzt.preloader_done"),setTimeout((function(){e("body").addClass("sp-page-loaded"),e("#sp-preloader").fadeOut("slow")}),250)}))}(jQuery),function(e){var t=e(".sp-progress-bar"),a=0;t.each((function(){var t=e(this),a=t.find(".progress-value"),i=t.find(".progress-bar");a.html("0%"),i.css("width",0)})),t.one("appear",(function(){var t=e(this),i=t.find(".progress-value"),o=t.find(".progress-bar");setTimeout((function(){o.animate({width:t.data("value")},{duration:2500,easing:"easeInOutQuint",step:function(e,t){i.html(e.toFixed(0)+t.unit)}})}),a),a+=300})),setInterval((function(){a=0}),1e3),e(window).one("pzt.preloader_done",(function(){t.appear({force_process:!0})}))}(jQuery),function(e){var t=e(".sp-animate-numbers h2");t.each((function(t){e(this).attr("data-slno",t),e(this).addClass("roller-title-number-"+t)})),t.one("appear",(function(){var t,a,i,o,s;t=e(this).attr("data-slno"),a=e(".roller-title-number-"+t).attr("data-min"),i=e(".roller-title-number-"+t).attr("data-max"),o=e(".roller-title-number-"+t).attr("data-delay"),s=e(".roller-title-number-"+t).attr("data-increment"),function t(a,i,o,s,n){i<=o?(e(".roller-title-number-"+a).html(i),i=parseInt(i,10)+parseInt(s,10),setTimeout((function(){t(parseInt(a,10),parseInt(i,10),parseInt(o,10),parseInt(s,10),parseInt(n,10))}),n)):e(".roller-title-number-"+a).html(o)}(t,a,i,s,1e3*o/(i-a))})),e(window).one("pzt.preloader_done",(function(){t.appear({force_process:!0})}))}(jQuery),jQuery(".sp-slick-clients").slick({dots:!1,infinite:!0,adaptiveHeight:!0,speed:750,slidesToShow:5,autoplay:!0,arrows:!1,responsive:[{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]}),jQuery(".sp-slick-demo").slick({dots:!1,infinite:!0,adaptiveHeight:!0,speed:750,slidesToShow:3,autoplay:!0,arrows:!1,responsive:[{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]}),jQuery(".sp-slick-testimonials").slick({dots:!0,infinite:!0,speed:750,slidesToShow:1,adaptiveHeight:!0,autoplay:!0,arrows:!1,autoplaySpeed:6500}),jQuery(".sp-slick-imac").slick({dots:!0,infinite:!0,speed:450,slidesToShow:1,adaptiveHeight:!0,autoplay:!0,arrows:!1,fade:!0,easing:"linear"}),jQuery(".sp-slick-post-gallery").slick({dots:!1,infinite:!0,speed:750,slidesToShow:1,adaptiveHeight:!0,autoplay:!0,autoplaySpeed:5e3,nextArrow:'<div class="slick-next circle"><i class="icon-angle-right"></i></div>',prevArrow:'<div class="slick-prev circle"><i class="icon-angle-left"></i></div>'}),function(e){var t=e(".slick-initialized");t.on("initialAnimate reInit afterChange",(function(t,a,i){i=i||0,a=a||e(this).slick("getSlick"),e(a.$slides).removeClass("slick-animated"),e(a.$slides[i]).addClass("slick-animated")})),t.trigger("initialAnimate")}(jQuery),function(e){var t=e(".slick-initialized");PZTJS.scrollRAF(e.throttle(250,(function(){t.each((function(){var t=e(this),a=t.slick("getSlick");PZTJS.isElementInViewport(this)||a.paused||t.slick("pause"),PZTJS.isElementInViewport(this)&&a.paused&&t.slick("play")}))})))}(jQuery),function(e){e(".slick-initialized").on("beforeChange",(function(t,a,i,o){e(a.$slides[o]).find(".wow, .re-animate").each((function(){var t=e(this),a=t.clone(!0);t.before(a),t.remove()}))}))}(jQuery),function(e){e(".sp-sidebar.sticky").stick_in_parent({offset_top:e("#sp-header").outerHeight()+30})}(jQuery),
/*! ===================================
 *  Author: Roman Nazarkin, Egor Dankov
 *  -----------------------------------
 *  PuzzleThemes
 *  =================================== */
function(e){e(".sp-text-rotate").each((function(){var t=e(this);t.textrotator({animation:t.data("animation"),speed:t.data("speed"),separator:"|"})}))}(jQuery),jQuery(window).one("pzt.preloader_done",(function(){var e=jQuery;e("[data-typed-str]").each((function(){var t=e(this),a=t.attr("data-typed-str").split("|");t.html("").append('<span class="typed-container"></span>'),t.find("> .typed-container").typed({strings:a,typeSpeed:65,loop:"yes"===t.attr("data-typed-repeat"),backDelay:1500,showCursor:"yes"===t.attr("data-typed-cursor")})}))})),$("#indexTechnologies").length&&new TypeIt("#indexTechnologies",{speed:350,startDelay:500,loop:!0}).type("Microsoft",{speed:350}).delete(-9,{speed:350}).type("Dynamics 365").delete().type("Office 365").delete().type("Azure Cloud",{speed:350}).delete().type(".NET",{speed:350}).pause(500).go(),"undefined"!=typeof SOPRANO_FONTS&&WebFont.load({google:{families:SOPRANO_FONTS}}),
/*! ===================================
 *  Author: Roman Nazarkin, Egor Dankov
 *  -----------------------------------
 *  PuzzleThemes
 *  =================================== */
function(e){var t=Modernizr.prefixed("animationDuration");if(PZTJS.isMobile())return e(".wow.sequenced").removeClass("wow sequenced"),void e(".wow").removeClass("wow");var a=e(".wow.sequenced").each((function(){var a=e(this),i=a.attr("class"),o=a.data("wow-duration")||"1s",s=a.data("wow-children"),n=/fx-([a-zA-Z]+)/g.exec(i);a.removeClass("wow sequenced fx-"+n[1]);var r=a.find("> *");s?r=a.find(s):a.hasClass("wpb_column")&&(r=a.find(".wpb_wrapper > *")),r.css("visibility","hidden");for(var l=0;l<r.length;l++)r.get(l).style[t]=o;r.one(PZTJS.animationEnd,(function(){e(this).removeClass("animated "+n[1])})),a.data({wow_children:r,wow_fx:n[1]})}));a.one("appear",(function(){var t=e(this),a=null,i=t.data("wow_fx"),o=t.data("wow_children"),s=0,n=0;o.each((function(){var t=e(this),o=t.position().top;o!==a&&(s=0,a=o,n++),setTimeout((function(){t.addClass("animated "+i),t.css("visibility","visible")}),300*s+150*n),s++}))}));var i=new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0,scrollContainer:null,callback:function(e){}});e(window).one("pzt.preloader_done",(function(){a.selector=!1,a.appear({force_process:!0}),i.init()}))}(jQuery);