$(function() {
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

    $('.glyphicon-remove').on('click', function(e) {
        $(this).parent().hide();
        // i treba maknuti filter
    });
})