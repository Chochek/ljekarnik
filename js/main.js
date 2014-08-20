$(function() {

    //
    // Header shadow
    // ------------------------------

    function addHeightToHeader() {
        if ($(window).scrollTop() !== 0 && !$('nav.navbar-custom').hasClass('has-shadow')) {
            $('nav.navbar-custom').addClass('has-shadow').animate({boxShadow: '0 0 3px #999999'});
        }
        if ($(window).scrollTop() === 0 && $('nav.navbar-custom').hasClass('has-shadow')) {
            $('nav.navbar-custom').removeClass('has-shadow').animate({boxShadow: '0 0 3px #ffffff'});
        }
    }
    addHeightToHeader();

    $(window).scroll(function() {
        addHeightToHeader();
    });


    //
    // Counseling modal
    // ------------------------------

    $('.banner.ask button').on('click', function() {
        $('#counseling-modal').modal();
    });

    // TODO: replace or delete
    $('#counseling-modal .modal-footer .btn-primary').on('click', function() {
        alert('Pošalji ljekarniku...');
        $('#counseling-modal').modal('hide');
    })


    //
    // Login page
    // ------------------------------

    $('.forgot-password a').on('click', function(e) {
        e.preventDefault();
        $('.recover-password').toggle();
    });


    //
    // Register page
    // ------------------------------

    $('.account-type .business-type').on('click', function(e) {
        $('.company-data').show();
    });

    $('.account-type .private-type').on('click', function(e) {
        $('.company-data').hide();
    });


    //
    // Category page
    // ------------------------------

    $('.sorting-dropdown li a').on('click', function(e) {
        e.preventDefault();
        alert('sortiraj');
    });

    $('.filtering-dropdown li a').on('click', function(e) {
        e.preventDefault();
        $('.filters').children().hide();
        var elementId = $(this).attr('href');
        $('.filters').children(elementId).show();
    });

    $('.brand-dropdown li a').on('click', function(e) {
        e.preventDefault();
        alert('filter po brandu');
    });

    $('input.price-range-slider').slider({
        range: true,
        min: 0,
        max: 1000,
        value: [350,650],
        step: 5,
        precision: 2
    });

    $("input.min-price-slider").slider({
        min: 0,
        max: 1000,
        value: 500,
        step: 5,
        precision: 2
    });
    $("input.min-price-slider").on('slide', function(slideEvt) {
        $("span.min-price-value").text(slideEvt.value);
    });

    $("input.max-price-slider").slider({
        min: 0,
        max: 1000,
        value: 500,
        step: 5,
        precision: 2
    });

    $("input.max-price-slider").on('slide', function(slideEvt) {
        $("span.max-price-value").text(slideEvt.value);
    });



    //
    // Product page
    // ------------------------------

    // toggle product reviews on the product page
    $('.product-rating-wrapper .star-rating-caption').on('click', function(e) {
        e.preventDefault();
        $('.product-reviews').toggle();
    });

    // toggle review form on the product page
    $('.new-review').on('click', function(e) {
        e.preventDefault();
        $('.review-form').toggle();
    });

    // Star rating when adding a new review on the product page
    $('.review-rate-product i').on('click', function(e, elem) {
        e.preventDefault();
        var starIndex = this;
        $.each($('.review-rate-product').children('i'), function(index, value) {
            if (index <= $('.review-rate-product i').index(starIndex)) {
                $(this).removeClass('glyphicon-star-empty').addClass('glyphicon-star');
            }
            else {
                $(this).removeClass('glyphicon-star').addClass('glyphicon-star-empty');
            }
        });

        $('#review_rating').val($('.review-rate-product i').index(this) + 1);
    });


    //
    // Checkout pages
    // ------------------------------

    $('.checkout-actions .user-notes').on('click', function(e) {
        e.preventDefault();
        $('.user-notes-text').toggle();
    });

    $('.checkout-address .checkbox input').on('click', function() {
        var checkbox = $(this);
        if (checkbox.is(':checked')) {
            $('.checkout-notes').children('.panel').hide().siblings('.alt-address').show();
        }
        else {
            $('.checkout-notes').children('.panel').show().siblings('.alt-address').hide();
        }
    });

    $('.payment-method .option1').on('click', function(e) {
        $('.credit-card-data').show();
    });

    $('.payment-method .option2, payment-method .option3').on('click', function(e) {
        $('.credit-card-data').hide();
    });


    //
    // Checkout pages
    // ------------------------------

    $('.motivator button').on('click', function() {
        $('.motivator').animate({'bottom': '-1000px'});
    });
})