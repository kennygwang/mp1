function highlightThis(){var a=this.style.backgroundColor;this.style.backgroundColor="yellow",alert(this.className),this.style.backgroundColor=a}for(var divs=document.getElementsByTagName("div"),i=0;i<divs.length;i++)divs[i].addEventListener("click",highlightThis);$(document).ready(function(){$(window).scroll(function(){var a=$("#directory li"),b=$(window).scrollTop();0>=b?$("header").addClass("larger-header"):$("header").removeClass("larger-header"),550>b?(a.removeClass("active"),$("#section-1-nav").addClass("active")):1e3>b?(a.removeClass("active"),$("#section-2-nav").addClass("active")):b+$(window).height()===document.body.offsetHeight?(a.removeClass("active"),$("#section-4-nav").addClass("active")):1450>b&&(a.removeClass("active"),$("#section-3-nav").addClass("active"))})});