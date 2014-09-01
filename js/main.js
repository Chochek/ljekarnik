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
    // Checkout pages
    // ------------------------------

    $('.checkout-actions .user-notes').on('click', function(e) {
        e.preventDefault();
        $('.user-notes-text').toggle();
    });

    $('.checkout-address .customer-address button').on('click', function(e) {
        e.preventDefault();
        $('.new-customer-address').toggle();
    });

    $('.new-customer-address .checkbox input').on('click', function() {
        var checkbox = $(this);
        if (checkbox.is(':checked')) {
            $('.new-customer-address .company-fields').show();
        }
        else {
            $('.new-customer-address .company-fields').hide();
        }
    });

    $('.payment-method .option1').on('click', function(e) {
        $('.credit-card-data').show();
        $('.home-delivery').hide();
        $('.direct-deposit').hide();
        $('.checkout-actions .btn-cart').text('Nastavi na plaćanje kreditnom karticom');
    });

    $('.payment-method .option2').on('click', function(e) {
        $('.credit-card-data').hide();
        $('.home-delivery').show();
        $('.direct-deposit').hide();
        $('.checkout-actions .btn-cart').text('Nastavi na sljedeći korak');
    });

    $('.payment-method .option3').on('click', function(e) {
        $('.credit-card-data').hide();
        $('.home-delivery').hide();
        $('.direct-deposit').show();
        $('.checkout-actions .btn-cart').text('Nastavi na sljedeći korak');
    });


    //
    // Checkout pages
    // ------------------------------

    $('.motivator button').on('click', function() {
        $('.motivator').animate({'bottom': '-1000px'});
    });
})