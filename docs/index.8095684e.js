parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"srQF":[function(require,module,exports) {
$(".main-header__burger").click(function(e){e.preventDefault();var r=$(this);r.toggleClass("main-header__burger--opened"),r.next().slideToggle(1e3)});
},{}],"Focm":[function(require,module,exports) {
"use strict";require("../../components/main-header/main-header.js");var e=$("#find-room__from"),n=$("#find-room__to");e.datepicker({clearButton:!0,todayButton:!0,prevHtml:'<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path style="transform:translate(-15%,-15%) rotate(180deg); transform-origin: center center" d="M8.363.984L16.378 9l-8.015 8.016-1.407-1.407 5.578-5.625H.347V8.016h12.187L6.956 2.39 8.363.984z" fill="#BC9CFF"/></svg>',nextHtml:'<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path style="transform:translate(15%,15%)" d="M8.363.984L16.378 9l-8.015 8.016-1.407-1.407 5.578-5.625H.347V8.016h12.187L6.956 2.39 8.363.984z" fill="#BC9CFF"/></svg>',navTitles:{days:"MM yyyy"},minDate:new Date,offset:9,range:!0,multipleDatesSeparator:"-",onSelect:function(n,t,r){e.val(n.split("-")[0]),$("#find-room__to").val(n.split("-")[1])}});for(var t=document.querySelectorAll(".js-dropdown-guests"),r=0;r<t.length;r++)t[r].addEventListener("click",function(){for(var e=this,n=e.closest(".dropdown-wrapper").querySelector(".dropdown__content"),t=n.querySelectorAll(".dropdown__item:not(.dropdown__buttons)"),r=n.querySelectorAll(".dropdown__amount"),l=n.querySelectorAll(".dropdown__del"),o=n.querySelectorAll(".dropdown__ins"),i=0;i<r.length;i++)l[i].addEventListener("click",a),o[i].addEventListener("click",d);var s=n.querySelector(".dropdown__clear");function a(){var e=this.nextElementSibling;1==e.innerHTML?(e.innerHTML=e.innerHTML-1,this.style="",function(e,n){for(var t=!0,r=0;r<e.length;r++)e[r].innerHTML>0&&(t=!1);t&&(n.style="")}(r,s)):e.innerHTML>1&&(e.innerHTML=e.innerHTML-1)}function d(){var e=this.previousElementSibling;e.innerHTML=+e.innerHTML+1,e.previousElementSibling.style.opacity="1",s.style.display="block"}s.addEventListener("click",function(){for(var e=0;e<r.length;e++)r[e].innerHTML=0,l[e].style="";this.style.display="none"}),n.querySelector(".dropdown__apply").addEventListener("click",function(){e.value="";for(var i,s=0,c=0,v=0;v<t.length;v++){var p=t[v].querySelector(".dropdown__amount").innerHTML;"Младенцы"==t[v].querySelector(".dropdown__title").innerHTML&&(c+=+p),s+=+p}1==c?i=" младенец":c>=2&&c<=4?i=" младенца":(c>=5||0==c)&&(i=" младенцев");1==s?e.value=s+" гость, "+c+i:s>=2&&s<=4?e.value=s+" гостя, "+c+i:(s>=5||0==s)&&(e.value=s+" гостей, "+c+i);n.style="";for(var v=0;v<r.length;v++)l[v].removeEventListener("click",a),o[v].removeEventListener("click",d)}),n.style.display="block"});
},{"../../components/main-header/main-header.js":"srQF"}]},{},["Focm"], null)
//# sourceMappingURL=/index.8095684e.js.map