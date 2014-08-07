$(function() {

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
        console.log("aaa");
    });

    $('.account-type .private-type').on('click', function(e) {
        $('.company-data').hide();
        console.log("bbb");
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
        console.log("aaa");
    });

    $('.payment-method .option2, payment-method .option3').on('click', function(e) {
        $('.credit-card-data').hide();
        console.log("bbb");
    });
})