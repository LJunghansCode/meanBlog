jQuery(document).ready(function($) {
    var Min = 1170;
    //primary navigation slide-in effect
    if ($(window).width() > Min) {
        var headerHeight = $('.custom-nav').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop();
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && $('.custom-nav').hasClass('is-fixed')) {
                        $('.custom-nav').addClass('is-visible');
                    } else {
                        $('.custom-nav').removeClass('is-visible is-fixed');
                    }
                } else if (currentTop > this.previousTop) {
                    //if scrolling down...
                    $('.custom-nav').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('.custom-nav').hasClass('is-fixed')) $('.custom-nav').addClass('is-fixed');
                }
                this.previousTop = currentTop;
            });
    }
});
