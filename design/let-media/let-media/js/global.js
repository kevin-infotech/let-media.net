function initTopbar(){
	$('#switch').replaceWith(function(){
		return '\
		<div class="switch switch-left'+'" style="'+$(this).attr('style')+'">\
			\
			<div class="switch-current">\
				<div class="switch-icon"><div class="switch-plus"></div></div>\
				<p class="switch-title">'+$(this).attr('title')+'</p>\
			</div>\
			\
			<div class="switch-content">\
				<ul>'+$(this).html()+'</ul>\
			</div>\
		</div>';
	});
	$('.switch').each(function(){
		$(this).width(50+$(this).find('.switch-title').width());
	});
	$('.switch-current').bind('click',function(){
		var tip = $(this).parent();
		if(tip.is(':animated')) return false;
		if(tip.find('.switch-content').css('display') == 'none')
		{
			tip.trigger('slideOut');
		}
		else tip.trigger('slideIn');

	});
	$('.switch').bind('slideOut',function() {
		var tip = $(this);
		var slideOut = tip.find('.switch-content');
		$('.switch-open').trigger('slideIn');
		if(!tip.data('dataIsSet')) {
			tip	.data('origWidth',tip.width())
				.data('origHeight',tip.height())
				.data('dataIsSet',true);
			if(tip.hasClass('openTop')) {
				tip.css({
					bottom	: tip.parent().height()-(tip.position().top+tip.outerHeight()),
					top		: 'auto'
				});
				tip.find('.switch-current').css({position:'absolute',bottom:8});
				tip.find('.switch-content').remove().prependTo(tip);
			}
			if(tip.hasClass('switch-left')) {
				tip.css({
					left	: 'auto'
				});
				tip.find('.switch-current').css({position:'absolute',right:8});
			}
		}
		tip.addClass('switch-open').animate({
			width	: Math.max(slideOut.outerWidth(),tip.data('origWidth')),
			height	: slideOut.outerHeight()+tip.data('origHeight')-10
		},function(){
			slideOut.fadeIn();
		});
	}).bind('slideIn',function(){
		var tip = $(this);
		tip.find('.switch-content').fadeOut('fast',function(){
			tip.animate({
				width	: tip.data('origWidth'),
				height	: tip.data('origHeight')
			},function(){
				tip.removeClass('switch-open');
			});
		});

	});
};


/**
 * @license In-Field Label jQuery Plugin
 * http://fuelyourcoding.com/scripts/infield.html
 *
 * Copyright (c) 2009-2010 Doug Neiner
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://docs.jquery.com/License
 *
 * @version 0.1.2
 */
(function ($) {

  $.InFieldLabels = function (label, field, options) {
    // To avoid scope issues, use 'base' instead of 'this'
    // to reference this class from internal events and functions.
    var base = this;
  
    // Access to jQuery and DOM versions of each element
    base.$label = $(label);
    base.label  = label;

    base.$field = $(field);
    base.field  = field;

    base.$label.data("InFieldLabels", base);
    base.showing = true;

    base.init = function () {
      // Merge supplied options with default options
      base.options = $.extend({}, $.InFieldLabels.defaultOptions, options);

      // Check if the field is already filled in
      if (base.$field.val() !== "") {
        base.$label.hide();
        base.showing = false;
      }

      base.$field.focus(function () {
        base.fadeOnFocus();
      }).blur(function () {
        base.checkForEmpty(true);
      }).bind('keydown.infieldlabel', function (e) {
        // Use of a namespace (.infieldlabel) allows us to
        // unbind just this method later
        base.hideOnChange(e);
      }).bind('paste', function (e) {
        // Since you can not paste an empty string we can assume
        // that the fieldis not empty and the label can be cleared.
        base.setOpacity(0.0);
      }).change(function (e) {
        base.checkForEmpty();
      }).bind('onPropertyChange', function () {
        base.checkForEmpty();
      });
    };

    // If the label is currently showing
    // then fade it down to the amount
    // specified in the settings
    base.fadeOnFocus = function () {
      if (base.showing) {
        base.setOpacity(base.options.fadeOpacity);
      }
    };

    base.setOpacity = function (opacity) {
      base.$label.stop().animate({ opacity: opacity }, base.options.fadeDuration);
      base.showing = (opacity > 0.0);
    };

    // Checks for empty as a fail safe
    // set blur to true when passing from
    // the blur event
    base.checkForEmpty = function (blur) {
      if (base.$field.val() === "") {
        base.prepForShow();
        base.setOpacity(blur ? 1.0 : base.options.fadeOpacity);
      } else {
        base.setOpacity(0.0);
      }
    };

    base.prepForShow = function (e) {
      if (!base.showing) {
        // Prepare for a animate in...
        base.$label.css({opacity: 0.0}).show();

        // Reattach the keydown event
        base.$field.bind('keydown.infieldlabel', function (e) {
          base.hideOnChange(e);
        });
      }
    };

    base.hideOnChange = function (e) {
      if (
          (e.keyCode === 16) || // Skip Shift
          (e.keyCode === 9) // Skip Tab
        ) {
        return; 
      }

      if (base.showing) {
        base.$label.hide();
        base.showing = false;
      }

      // Remove keydown event to save on CPU processing
      base.$field.unbind('keydown.infieldlabel');
    };

    // Run the initialization method
    base.init();
  };

  $.InFieldLabels.defaultOptions = {
    fadeOpacity: 0.5, // Once a field has focus, how transparent should the label be
    fadeDuration: 300 // How long should it take to animate from 1.0 opacity to the fadeOpacity
  };


  $.fn.inFieldLabels = function (options) {
    return this.each(function () {
      // Find input or textarea based on for= attribute
      // The for attribute on the label must contain the ID
      // of the input or textarea element
      var for_attr = $(this).attr('for'), $field;
      if (!for_attr) {
        return; // Nothing to attach, since the for field wasn't used
      }

      // Find the referenced input or textarea element
      $field = $(
        "input#" + for_attr + "[type='text']," + 
        "input#" + for_attr + "[type='search']," + 
        "input#" + for_attr + "[type='tel']," + 
        "input#" + for_attr + "[type='url']," + 
        "input#" + for_attr + "[type='email']," + 
        "input#" + for_attr + "[type='password']," + 
        "textarea#" + for_attr
      );

      if ($field.length === 0) {
        return; // Again, nothing to attach
      } 

      // Only create object for input[text], input[password], or textarea
      (new $.InFieldLabels(this, $field[0], options));
    });
  };

}(jQuery));

	
$(function() {
	
	initTopbar();
	
	$("label").inFieldLabels();
	
	/* global: external-link */
	$("a[rel^='external']").attr('target','_blank');

	/* global: contact-form */
	var revealer = function(Parent,relativeParent,absoluteChild,speed) {
		var revealHeight = absoluteChild.height();
		relativeParent.height(revealHeight);
		relativeParent.addClass('hidden');
		this.toggleReveal = function() {
			if (!relativeParent.parent().find(':animated').length) {
				if (relativeParent.css('display')!='none' ) {
					relativeParent.animate({height: 0}, speed, function() {relativeParent.hide();});
				} else {
	        		relativeParent.height(0).show().animate({height: revealHeight}, speed);
				}
			}
		};
	};
	$('#hd').before($('#contact-us'));
	$("#contact-us").show();
	var contactForm = new revealer(
		$('#contact-us'),
		$('#contact-us .flow'),
		$('#contact-us .flow .contact-form'),
		600
	);
	$('.contact-link').live('click',function(){
	    $('html, body').animate({scrollTop:0}, 'fast');
        contactForm.toggleReveal();
		return false;
	});
	$('#contact-us button[type="reset"]').live('click',function(){
        contactForm.toggleReveal();
		return false;
    });
	$('#contact-us form').live('submit',function(){
		var values = $(this).serialize();
		$.post('/includes/contact/index.php',values,function(markup) {$('#contact-us .contact-form').html(markup);},'html');
		return false;
	});

});
	
	
	