// Generated by CoffeeScript 1.12.6
(function() {
  var ccWaitTries;

  ccWaitTries = 10;

  (function() {
    if (window.$) {
      (function($) {
        console.log('in the anon function');
        $(document).ready(function() {
          var $form, mq;
          $form = $(document.getElementsByClassName('form-container')[0]);
          $('.blue-button,.white-button').on('click', function() {
            if ($form.attr('data-form-open') === 'true') {
              $form.attr('data-form-open', 'false');
            } else {
              $form.attr('data-form-open', 'true');
            }
          });
          $('p.exit-button').on('click', function() {
            $form.attr('data-form-open', 'false');
          });
          mq = window.matchMedia("(min-width: 768px)");
          if (mq.matches) {
            $('[data-card-color]').css('height', $('.single-image')[0].clientHeight + 'px');
          }
        });
      })(jQuery);
    } else {
      ccWaitTries--;
      if (ccWaitTries > 0) {
        setTimeout(waitForJQuery, 50);
      }
    }
  })();

}).call(this);

//# sourceMappingURL=landing.js.map
