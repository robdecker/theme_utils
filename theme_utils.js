(function($) {

Drupal.behaviors.themeUtils = {
  attach: function (context, settings) {

    $('body').append('<div id="theme-utils" />');

    // Browser viewport
    if (settings.themeUtils.browserViewport && settings.themeUtils.browserViewport.show == 'true') {
      $('#theme-utils').append('<div id="theme-utils-browser-viewport" class="tubox" title="Click to hide"></div>');

      function showWidth() {
        var widthPx = $(window).width();
        var widthEm = widthPx / 16;
        $('#theme-utils-browser-viewport').html(widthPx + 'px / ' + widthEm + 'em');
      }
      showWidth();

      $(window).resize(function() {
        showWidth();
      });

      $('#theme-utils-browser-viewport').click(function() {
        $(this).fadeOut(500);
      });
    }

    // Media queries
    if ($(settings.themeUtils.mediaQueries).length) {
      $('#theme-utils').append('<div id="theme-utils-media-query" class="tubox" title="Click to hide"></div>');

      $.each(settings.themeUtils.mediaQueries, function(idx, item) {
        var query = '<div class="query query-' + item.itemNum + '">' + item.query + '</div>';
        $('#theme-utils-media-query').append(query);
      });

      $('#theme-utils-media-query').click(function() {
        $(this).fadeOut(500);
      });
    }

  }
}

})(jQuery);
