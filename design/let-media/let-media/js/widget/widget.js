var switcher_json = '\
{"item": [\
{"title":"Envato","url":"http://envato.com","class":"envato","side":"left"},\
{"title":"ThemeForest","url":"http://themeforest.net","class":"themeforest","side":"left"},\
{"title":"GraphicRiver","url":"http://graphicriver.net","class":"graphicriver","side":"left"},\
{"title":"VideoHive","url":"http://videohive.net","class":"videohive","side":"left"},\
{"title":"AudioJungle","url":"http://audiojungle.net","class":"audiojungle","side":"left"},\
{"title":"CodeCanyon","url":"http://codecanyon.net","class":"codecanyon","side":"left"},\
{"title":"ActiveDen","url":"http://activeden.net","class":"activeden","side":"left"},\
{"title":"3DOcean","url":"http://3docean.net","class":"3docean","side":"left"},\
{"title":"Tuts+ Marketplace","url":"http://marketplace.tutsplus.com/","class":"tutsmarketplace","side":"left"},\
{"title":"Mac.Appstorm","url":"http://mac.appstorm.net","class":"mac","side":"left"},\
{"title":"Web.Appstorm","url":"http://web.appstorm.net","class":"web","side":"left"},\
{"title":"iPhone.Appstorm","url":"http://iphone.appstorm.net","class":"iphone","side":"left"},\
{"title":"Android.Appstorm","url":"http://android.appstorm.net/","class":"android","side":"left"},\
{"title":"iPad.Appstorm","url":"http://ipad.appstorm.net","class":"ipad","side":"left"},\
{"title":"Windows.Appstorm","url":"http://windows.appstorm.net","class":"windows","side":"left"},\
{"title":"FreelanceSwitch","url":"http://freelanceswitch.com","class":"freelanceswitch","side":"right"},\
{"title":"Freelance Jobs","url":"http://jobs.freelanceswitch.com","class":"freelanceswitch-jobs","side":"right"},\
{"title":"Rockable Press","url":"http://rockablepress.com","class":"rockablepress","side":"right"},\
{"title":"Tuts+ Premium","url":"http://tutsplus.com","class":"tutsplus","side":"right"},\
{"title":"Psdtuts+","url":"http://psd.tutsplus.com","class":"psdtuts","side":"right"},\
{"title":"Nettuts+","url":"http://net.tutsplus.com","class":"nettuts","side":"right"},\
{"title":"Vectortuts+","url":"http://vector.tutsplus.com","class":"vectortuts","side":"right"},\
{"title":"Audiotuts+","url":"http://audio.tutsplus.com","class":"audiotuts","side":"right"},\
{"title":"Aetuts+","url":"http://ae.tutsplus.com","class":"aetuts","side":"right"},\
{"title":"Activetuts+","url":"http://active.tutsplus.com","class":"activetuts","side":"right"},\
{"title":"Cgtuts+","url":"http://cg.tutsplus.com","class":"cgtuts","side":"right"},\
{"title":"Phototuts+","url":"http://photo.tutsplus.com","class":"phototuts","side":"right"},\
{"title":"Mobiletuts+","url":"http://mobile.tutsplus.com","class":"mobiletuts","side":"right"},\
{"title":"Webdesigntuts+","url":"http://webdesign.tutsplus.com","class":"webdesigntuts","side":"right"},\
{"title":"Creattica","url":"http://creattica.com","class":"creattica","side":"right"}\
]}';
var support_json = '\
{"item": [\
{"title":"Envato Support Center","url":"http://support.envato.com/support/","class":"kevin-support-center"},\
{"title":"Envato Wiki","url":"http://wiki.envato.com","class":"kevin-wiki"},\
{"title":"Envato Support Twitter","url":"http://twitter.com/envato_support","class":"kevin-support-twitter"}\
]}';
var community_json = '\
{"item": [\
{"title":"Envato Notes","url":"http://notes.envato.com","class":"kevin-notes"},\
{"title":"Envato Newsletter","url":"http://notes.envato.com/newsletter/","class":"kevin-newsletter"},\
{"title":"Envato Podcast","url":"http://notes.envato.com/category/podcasts/","class":"kevin-podcast"},\
{"title":"WP.Envato","url":"http://wp.envato.com/","class":"wp-envato"},\
{"title":"Envato Elite","url":"http://elite.envato.com/","class":"kevin-elite"},\
{"title":"Envato Flickr","url":"http://www.flickr.com/photos/we-are-envato","class":"kevin-flickr"},\
{"title":"Envato Twitter","url":"http://twitter.com/envato","class":"kevin-twitter"},\
{"title":"Envato Facebook","url":"http://www.facebook.com/envato","class":"kevin-facebook"},\
{"title":"Envato Slideshare","url":"http://www.slideshare.net/envato","class":"kevin-slideshare"},\
{"title":"Envato Dribbble","url":"http://dribbble.com/envato","class":"kevin-dribbble"},\
{"title":"Envato Github","url":"https://github.com/envato","class":"kevin-github"}\
]}';
(function ($) {
  EnvatoWidget = {
    init: function () {
      this.create_widget();
    },
    create_widget: function () {
      $('<div id="kevin-widget" class="widget-reset" />').appendTo('body').css('display', 'none');
      this.create_switcher();
      this.create_search();
      this.create_support();
      this.create_community();
      this.create_buttons();
    },
    create_switcher: function () {
      $('<div id="kevin-widget-switcher" />').appendTo('#kevin-widget').wrap('<div id="kevin-widget-switcher-wrap" />');
      $('<span class="switcher-arrow" />').appendTo('#kevin-widget-switcher-wrap');
      this.format_switcher(this.parse_json(switcher_json));
    },
    format_switcher: function (data) {
      $('<ul class="switcher-list-left" /><ul class="switcher-list-right" />').appendTo('#kevin-widget-switcher');
      $.each(data.item, function () {
        $('<li><a href="' + this.url + '" rel="nofollow"><span class="widget-icon icon-' + this.class + '">&nbsp;</span>' + this.title + '</a></li>').appendTo('.switcher-list-' + this.side);
      });
    },
    parse_json: function (data) {
      var rvalidchars = /^[\],:{}\s]*$/,
          rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
          rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
          rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
      if (typeof data !== "string" || !data) return null;
      data = $.trim(data);
      if (rvalidchars.test(data.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, ""))) {
        return window.JSON && window.JSON.parse ? window.JSON.parse(data) : (new Function("return " + data))();
      } else {
        $.error("Invalid JSON: " + data);
      }
    },
    create_search: function () {
      $('<div id="kevin-search" />').appendTo('#kevin-widget').wrap('<div id="kevin-search-wrap" />');
      $('<span class="switcher-arrow" />').appendTo('#kevin-search-wrap');
      $('<form action="" method="post" id="ew-form"><input name="search" type="text" value="" class="ew-input" /><input type="submit" value="Submit" class="ew-button" /></form>').appendTo('#kevin-search');
      this.submit_search();
    },
    submit_search: function () {
      var search = $('input[name=search]'),
          value = 'Search All Envato Sites ...';
      if (search.val() == '') search.val(value);
      search.focus(function () {
        if ($(this).val() == value) $(this).val('');
      });
      search.blur(function () {
        if ($(this).val() == '') $(this).val(value);
      });
      $('#kevin-search form').submit(function () {
        var query = search.val().replace(/ /g, '+');
        $(this).attr('action', 'http://blekko.com/ws/' + query + '+/envato/envato');
      });
    },
    create_support: function () {
      $('<div id="kevin-support" />').appendTo('#kevin-widget').wrap('<div id="kevin-support-wrap" />');
      $('<span class="switcher-arrow" />').appendTo('#kevin-support-wrap');
      this.format_support(this.parse_json(support_json));
    },
    format_support: function (data) {
      $('<span class="kevin-widget-title">Envato Support</span>').appendTo('#kevin-support');
      $('<ul class="support-list" />').appendTo('#kevin-support');
      $.each(data.item, function () {
        $('<li><a href="' + this.url + '" rel="nofollow"><span class="widget-icon icon-' + this.class + '">&nbsp;</span>' + this.title + '</a></li>').appendTo('.support-list');
      });
    },
    create_community: function () {
      $('<div id="kevin-community" />').appendTo('#kevin-widget').wrap('<div id="kevin-community-wrap" />');
      $('<span class="switcher-arrow" />').appendTo('#kevin-community-wrap');
      this.format_community(this.parse_json(community_json));
    },
    format_community: function (data) {
      $('<span class="kevin-widget-title">Envato Community</span>').appendTo('#kevin-community');
      $('<ul class="community-list" />').appendTo('#kevin-community');
      $.each(data.item, function () {
        $('<li><a href="' + this.url + '" rel="nofollow"><span class="widget-icon icon-' + this.class + '">&nbsp;</span>' + this.title + '</a></li>').appendTo('.community-list');
      });
    },
    create_buttons: function () {
      $.each(["envato", "search", "support", "community"], function () {
        var href = 'javascript:void(0);';
        $('<a href="' + href + '" class="widget-button ' + this + '" rel="nofollow">' + this + '</a>').appendTo('#kevin-widget');
      });
      this.click_buttons();
    },
    click_buttons: function () {
      var switcher  = $('#kevin-widget-switcher-wrap'),
          search    = $('#kevin-search-wrap'),
          support   = $('#kevin-support-wrap'),
          community = $('#kevin-community-wrap');
      $('.widget-button').click(function () {
        ($(this).is('.envato')) ? ((switcher.is(':hidden')) ? switcher.show() : switcher.hide()) : switcher.hide();
        ($(this).is('.search')) ? ((search.is(':hidden')) ? search.show() : search.hide()) : search.hide();
        ($(this).is('.support')) ? ((support.is(':hidden')) ? support.show() : support.hide()) : support.hide();
        ($(this).is('.community')) ? ((community.is(':hidden')) ? community.show() : community.hide()) : community.hide();
      });
      $(document).bind('click', function (e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("widget-reset")) {
          switcher.hide();
          search.hide();
          support.hide();
          community.hide();
        }
      });
    }
  };
  $(document).ready(function () {
    EnvatoWidget.init()
  });
})(jQuery);