$(document).ready(function () {

  $('.hk-big-section-start').each(function () {

    let $startSection = $(this).closest('.shopify-section');
    let $endSection = $('.hk-big-section-end')
      .eq($('.hk-big-section-start').index(this))
      .closest('.shopify-section');

    let started = false;

    $('.shopify-section').each(function () {

      if ($(this).is($startSection)) {
        started = true;
      }

      if (started) {
        $(this).addClass('hk-big-section');
      }

      if ($(this).is($endSection)) {
        started = false;
      }

    });

  });

});