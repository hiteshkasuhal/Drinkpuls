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



$(document).on("click", ".hk-more-list1-items", function (e) {
    $('.hk-more-list1-items').removeClass('el-active');
    $(this).addClass('el-active');
    var tab_index = $(this).index() + 1;
     $('.hk-more-box').removeClass('el-active');
     $('.hk-more-box'+tab_index).addClass('el-active');
});
