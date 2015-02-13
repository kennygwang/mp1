var divs = document.getElementsByTagName('div');
for(var i=0; i<divs.length; i++) {
  divs[i].addEventListener("click", highlightThis);
  /*
  divs[i].addEventListener("click", highlightThis, true);
  divs[i].addEventListener("click", highlightThis, false);*/
}

function highlightThis(event) {
    //event.stopPropagation();
  
    var backgroundColor = this.style.backgroundColor;
    this.style.backgroundColor='yellow';
    alert(this.className);
    this.style.backgroundColor=backgroundColor;
}

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
    if (scrollTop < 550) {
      directoryItems.removeClass("active");
      $("#section-1-nav").addClass("active");
    } else if (scrollTop < 1000) {
      directoryItems.removeClass("active");
      $("#section-2-nav").addClass("active");
    } else if (scrollTop + $(window).height() === document.body.offsetHeight) {
      directoryItems.removeClass("active");
      $("#section-4-nav").addClass("active");
    } else if (scrollTop < 1450) {
      directoryItems.removeClass("active");
      $("#section-3-nav").addClass("active");
    }



  });
});
