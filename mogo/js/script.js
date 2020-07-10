$(function() {

    const header = $("#header");
    let introH = $("#intro").innerHeight();
    let scrollOffSet = $(window).scrollTop();

    /**header fixed**/
    checkScroll(scrollOffSet);

    $(window).on("scroll", function() {
        scrollOffSet = $(this).scrollTop();

        checkScroll(scrollOffSet)
    })

    function checkScroll(scrollOffSet) {
        if(scrollOffSet >= introH){
            header.addClass("fixed");
        }else {
            header.removeClass("fixed")
        }
    }

    /** smoth scroll**/

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        const $this = $(this)
        const blockId = $(this).data('scroll');
        const blockOffSet = $(blockId).offset().top;

        $("#nav a").removeClass("active")
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffSet
        }, 500)

    });

    /** Nav Toggle**/

    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active")
        $("#nav").toggleClass("active")

    })
    $(".nav__link").on("click", function (event) {
        event.preventDefault();

        $("#nav").toggleClass("active")
        $("#nav_toggle").toggleClass("active")
    })


    /**Collapse**/

    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();

        const $this = $(this)
        const blockId = $(this).data('collapse');

        $this.toggleClass("active")
    })


    /***Slider***/
    $("[data-slider]").slick({
        infinity: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll:1
    })

});