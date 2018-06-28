function scrolled() {
    var fromTopPx = 0; // distance to trigger
    var noScroll = $(window).scrollTop();
    if (noScroll > fromTopPx) {
        $(".navbar").addClass('scrolled').fadeOut("slow");
    } else {
        $('.navbar').removeClass('scrolled');
    }
}

$(window).scroll(scrolled);
$(window).off("scroll", ".navbar", scrolled);
