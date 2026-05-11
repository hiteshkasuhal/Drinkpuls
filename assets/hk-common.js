$(document).ready(function () {


    document.querySelectorAll('[data-slider-config]').forEach(slider => {
      const config = JSON.parse(slider.dataset.sliderConfig);

      if (!$(slider).hasClass('slick-initialized')) {
        $(slider).slick(config);
      }
    });

});

 $(document).on("click", ".hk-play-button", function (e) {
     var video = jQuery(this).parents('.hk-video-wrapper').find('video');
 if (jQuery(this).hasClass("active")) {
    jQuery(this).parents('.hk-video-wrapper').removeClass('active');
     jQuery(this).removeClass('active');
 video.trigger('pause');
 } else {
 video.trigger('play');
   jQuery(this).parents('.hk-video-wrapper').addClass('active');
     jQuery(this).addClass('active');
 }
 });



 
jQuery(document).ready(function(){
if(navigator.userAgent.indexOf('Mac') > 0) {
jQuery('body').addClass('mac-os');
} else {
jQuery('body').addClass('window-os');
}
});

$(window).on('scroll', function () {
  let scrollTop = $(this).scrollTop();

  if (scrollTop > 30) {
    $('body').addClass('remove_transparent');
  } else {
    $('body').removeClass('remove_transparent');
  }
});



$(document).on("click", ".hk-question", function (e) {
  if (jQuery(this).hasClass("active")) {
    jQuery(this).toggleClass('active');
    jQuery(this).next().slideToggle();
  } else {
    jQuery('.hk-question').removeClass('active');
    jQuery('.hk-question').next().slideUp();
    jQuery(this).toggleClass('active');
    jQuery(this).next().slideToggle();
  }
});


$(document).on("click", "a[href='/#faq']", function (e) {
  const target = document.querySelector('.hk-faq');

  if (target) {
    e.preventDefault();
    target.scrollIntoView({
      behavior: 'smooth'
    });
  }
  // else: do nothing → browser follows the link normally
});
$(document).on("click", "a[href='#reviews']", function (e) {
  e.preventDefault();
  document.querySelector('#reviews').scrollIntoView({
    behavior: 'smooth'
  })
});

$(document).on("click", ".hk-mobile-menu-button", function (e) {
    $('.hk-drawer-menu').addClass('active');
    $('.hk-drawer-menu-bg').show();
    $('body').addClass('hk-overflow-hidden');
});
$(document).on("click", ".hk-mobile-menu-close", function (e) {
    $('.hk-drawer-menu').removeClass('active');
    $('.hk-drawer-menu-bg').hide();
    $('body').removeClass('hk-overflow-hidden');
});

$(document).on("click", ".hk-drawer-menu-bg", function (e) {
    $('.hk-drawer-menu').removeClass('active');
    $('.hk-drawer-menu-bg').hide();
    $('body').removeClass('hk-overflow-hidden');
});




$(document).on("click", ".hk-element-option", function(e) {
$(this).parents('.hk-product').find('.hk-element-option').removeClass('active');
$(this).addClass('active');
var data_tab = $(this).attr('data_tab');
$(this).parents('.hk-product').find('.hk-quantity-data').hide();
$(this).parents('.hk-product').find('.hk-quantity-data[data_tab="'+data_tab+'"]').show();
});


$(document).on("click", ".hk-sub-toggle.active", function(e) {
$(this).removeClass('active');
var sub_tab = 1;
$(this).parents('.hk-product').find('.hk-sub-tab').hide();
$(this).parents('.hk-product').find('.hk-sub-tab[sub_tab="'+sub_tab+'"]').show();
});

$(document).on("click", ".hk-sub-toggle:not(.active)", function(e) {
$(this).addClass('active');
var sub_tab = 2;
$(this).parents('.hk-product').find('.hk-sub-tab').hide();
$(this).parents('.hk-product').find('.hk-sub-tab[sub_tab="'+sub_tab+'"]').show();
});











$(document).on("click", ".hk-cart-button", function (e) {
    $('.hk-cart-drawer').addClass('active');
    $('.hk-drawer-cart-bg').show();
    $('body').addClass('hk-overflow-hidden');
});
$(document).on("click", ".hk-mobile-cart-close, .hk-drawer-cart-bg, a[href='#close_cart']", function (e) {
  e.preventDefault();
    $('.hk-cart-drawer').removeClass('active');
    $('.hk-drawer-cart-bg').hide();
    $('body').removeClass('hk-overflow-hidden');
});














function refreshCartDrawer() {
  $.get(window.location.href, function (response) {
    var newContent = $(response).find('.hk-cart-drawer-js').html();
    $('.hk-cart-drawer-js').html(newContent);
    $('.hk-cart-drawer-js').removeClass('hk-loading-cart');
  });
  
}



    removeShippingProtection();
$(document).on('click', '.hk-cart-drawer-js .hk-quantity-plus, .hk-cart-drawer-js .hk-quantity-minus', function () {
    $('.hk-cart-drawer-js').addClass('hk-loading-cart');
  var $btn = $(this);
  var $wrapper = $btn.closest('.hk-line-item');
  var $input = $wrapper.find('.hk-quantity-input');

  var key = $wrapper.data('key');
  var qty = parseInt($input.val());

  if ($btn.hasClass('hk-quantity-plus')) {
    qty++;
  } else {
    qty--;
  }

  // update UI instantly
  $input.val(qty);

  // Shopify AJAX cart update
  $.ajax({
    url: '/cart/change.js',
    type: 'POST',
    data: {
      id: key,
      quantity: qty
    },
    dataType: 'json',
    success: function (cart) {
        refreshCartDrawer();
    },
    error: function (err) {
      console.error('Cart update failed', err);
    }
  });
});







