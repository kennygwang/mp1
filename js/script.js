$(document).ready(function(){
  $(window).scroll(function(){
    var directoryItems = $("#directory li"),
        scrollTop = $(window).scrollTop();

    // Navbar Resizing
    if (scrollTop <= 0) {
      $("header").addClass("larger-header");
    } else {
      $("header").removeClass("larger-header");
    }

    // Position Indicator
    if (scrollTop < 500) {
      directoryItems.removeClass("active");
      $("#section-1-nav").addClass("active");
    } else if (scrollTop < 950) {
      directoryItems.removeClass("active");
      $("#section-2-nav").addClass("active");
    } else if (scrollTop + $(window).height() === document.body.offsetHeight) {
      directoryItems.removeClass("active");
      $("#section-4-nav").addClass("active");
    } else if (scrollTop < 1400) {
      directoryItems.removeClass("active");
      $("#section-3-nav").addClass("active");
    }
  });

  $("#section-1-nav").click(function(){
    console.log("navigating to section 1");
    $('html,body').animate({
      scrollTop: $("#section-1").offset().top
    }, 500);
  });

  $("#section-2-nav").click(function(e){
    console.log("navigating to section 2");
    $('html,body').animate({
      scrollTop: $("#section-2").offset().top
    }, 500);
  });

  $("#section-3-nav").click(function(){
    console.log("navigating to section 3");
    $('html,body').animate({
      scrollTop: $("#section-3").offset().top
    }, 500);
  });

  $("#section-4-nav").click(function(){
    console.log("navigating to section 4");
    $('html,body').animate({
      scrollTop: $("#section-4").offset().top
    }, 500);
  });

  var cimg1 = $("#cimg1");
  var cimg2 = $("#cimg2");
  var cimg3 = $("#cimg3");
  $("#cright").click(function(e){
    if (cimg1.is(":visible")) {
      cimg1.animate({width:'toggle'},350);
      cimg2.animate({width:'toggle'},350);
      return;
    } else if (cimg2.is(":visible")) {
      cimg2.animate({width:'toggle'},350);
      cimg3.animate({width:'toggle'},350);
      return;
    } else if (cimg3.is(":visible")) {
      cimg3.animate({width:'toggle'},350);
      cimg1.animate({width:'toggle'},350);
      return;
    }
  });

  $("#cleft").click(function(){
    if (cimg1.is(":visible")) {
      cimg1.animate({width:'toggle'},350);
      cimg3.animate({width:'toggle'},350);
      return;
    } else if (cimg2.is(":visible")) {
      cimg2.animate({width:'toggle'},350);
      cimg1.animate({width:'toggle'},350);
      return;
    } else if (cimg3.is(":visible")) {
      cimg3.animate({width:'toggle'},350);
      cimg2.animate({width:'toggle'},350);
      return;
    }
  });
});
