$(document).ready(function () {

  $('.hk-big-section-start').each(function (index) {

    let $startSection = $(this).closest('.shopify-section');

    let $endSection = $('.hk-big-section-end')
      .eq(index)
      .closest('.shopify-section');

    if (!$startSection.length || !$endSection.length) return;

    let $sections = $startSection.nextUntil($endSection).addBack().add($endSection);

    $sections.wrapAll('<div class="hk-big-section"></div>');

  });

});