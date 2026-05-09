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
    $('.hk-more-list1-items').removeClass('hk-active');
    $(this).addClass('hk-active');
    var tab_index = $(this).index() + 1;
     $('.hk-more-box').removeClass('hk-active');
     $('.hk-more-box'+tab_index).addClass('hk-active');
     $('.hk-more-tab-item').removeClass('hk-active');
     $('.hk-more-tab-item'+tab_index).addClass('hk-active');
});




$(document).on('click', '.hk-element-variant', function (e) {
  e.preventDefault();
  e.stopPropagation(); // not immediate
  var $this = $(this);
  var variant_id = parseInt($this.attr('variant_id'), 10); // 1,2,3...

  if (!variant_id) return;

  // Remove active from siblings
  $('.hk-element-variant').removeClass('hk-active');
  // Add active to current
  $this.addClass('hk-active');

$('.hk-variant-trigger').hide().removeClass('hk-active');
$('.hk-variant-trigger[variant_id="'+variant_id+'"]').show().addClass('hk-active');
$('.hk-checkout-button').attr('variant_id',variant_id);



  var tab = parseInt($('.hk-element-sub-option.hk-active').attr('sub_tab'), 10); // 1,2,3...
  if (!tab) return;
var selling_plan = $('.hk-element-variant.hk-active').attr('selling_plan');
if(tab == 1){
$('.hk-checkout-button').attr('selling_plan',selling_plan);
} else {
$('.hk-checkout-button').removeAttr('selling_plan',);
}
});



$(document).on('click', '.hk-element-sub-option', function () {
  var $this = $(this);
  var tab = parseInt($this.attr('sub_tab'), 10); // 1,2,3...

  if (!tab) return;

  // Remove active from siblings
  $('.hk-element-sub-option').removeClass('hk-active');

  // Add active to current
  $this.addClass('hk-active');

$('.hk-sub-trigger').hide();
$('.hk-sub-trigger[sub_tab="'+tab+'"]').show();
var selling_plan = $('.hk-element-variant.hk-active').attr('selling_plan');
if(tab == 1){
$('.hk-checkout-button').attr('selling_plan',selling_plan);
} else {
$('.hk-checkout-button').removeAttr('selling_plan',);
}
});



$(document).on("click", "a[href='#']", function (e) {
  e.preventDefault();
  document.querySelector('.hk-element-variants').scrollIntoView({
    behavior: 'smooth'
  })
});



$(document).on("click", "a[href='#show']", function (e) {
$('.hk-reviews2-list1-item:nth-child(3)~.hk-reviews2-list1-item').slideDown();
$('.hk-pdp-review2-links:has([href="#show"])').hide();
$('.hk-pdp-review2-links:has([href="#hide"])').show();
});


$(document).on("click", "a[href='#hide']", function (e) {
$('.hk-reviews2-list1-item:nth-child(3)~.hk-reviews2-list1-item').slideUp();
$('.hk-pdp-review2-links:has([href="#hide"])').hide();
$('.hk-pdp-review2-links:has([href="#show"])').show();
});
