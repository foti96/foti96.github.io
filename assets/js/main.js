$(document).ready(function () {
    //mobile navigation 
    $('.mobile-nav-trigger').on('click', function () {
        $('.primary-menu').toggleClass('show');
        $('span.fa', this).toggleClass('fa-bars').toggleClass('fa-close');
    });
    //if statment checks if the user is on a small screen size
    if ($(window).width() < 768) {
        $('.primary-menu li').on('click', function () {
            $('.primary-menu').toggleClass('show');
            $('span.fa', '.mobile-nav-trigger').toggleClass('fa-bars').toggleClass('fa-close');
        });
        //checks if when the user click the site name, if the menu is open or closed
        $('.site-branding').on('click', function () {
             if($('.primary-menu').hasClass("show")){
             $('.primary-menu').toggleClass('show');
            $('span.fa', '.mobile-nav-trigger').toggleClass('fa-bars').toggleClass('fa-close');
        }
        });
        
    }


});
