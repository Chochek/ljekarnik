$(function() {

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
})