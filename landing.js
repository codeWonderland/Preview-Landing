(function() {
    var ccWaitTries, mq;

    ccWaitTries = 10;

    mq = window.matchMedia("(min-width: 768px)");

    (function() {
        if (window.$) {
            (function($) {
                $(document).ready(function() {
                    var $form, callback, config, modal, modalPlayer, observer, scrollFunction;
                    $('video.dynamic-video')[0].play();
                    $form = $(document.getElementsByClassName('form-container')[0]);
                    window.onscroll = function() {
                        scrollFunction();
                    };
                    scrollFunction = function() {
                        if (mq.matches) {
                            if ($(this).scrollTop() >= 646) {
                                $(document.getElementsByClassName("form-container")[0]).addClass('desktop-scrolling');
                            } else {
                                $(document.getElementsByClassName("form-container")[0]).removeClass('desktop-scrolling');
                            }
                        } else {
                            // desktop
                            var fold_height = $("header").height() + $(".video-container").height();

                            if ($(window).scrollTop() >= fold_height) {
                                $(document.getElementsByClassName("form-container")[0]).addClass('mobile-scrolling');
                            } else {
                                $(document.getElementsByClassName("form-container")[0]).removeClass('mobile-scrolling');
                            }
                        }
                    };
                    $('.blue-button,.white-button').on('click', function() {
                        if ($form.attr('data-form-open') === 'true') {
                            $form.attr('data-form-open', 'false');
                            if ($('.ccLeadContent form input').length) {
                                $('.ccLeadContent form input').first().focus();
                            }
                        } else {
                            $form.attr('data-form-open', 'true');
                        }
                    });
                    $('p.exit-button').on('click', function() {
                        $form.attr('data-form-open', 'false');
                    });
                    this.sendGaEvent = function(linkType) {
                        ga('send', {
                            hitType: "event",
                            eventCategory: "Landing Page",
                            eventAction: "Preview Landing Page SP18 Link Click",
                            eventLabel: linkType + " Click: " + this.innerHTML
                        });
                    };
                    modal = $('[data-remodal-id="video-modal"]')[0];
                    modalPlayer = new Vimeo.Player('remodal-video');
                    config = {
                        attributes: true,
                        attributeFilter: ['class']
                    };
                    callback = function(mutationList) {
                        var i, len, mutation;
                        for (i = 0, len = mutationList.length; i < len; i++) {
                            mutation = mutationList[i];
                            if ($(modal).hasClass('remodal-is-opened')) {
                                $('video.dynamic-video')[0].pause();
                            } else {
                                $('video.dynamic-video')[0].play();
                                modalPlayer.pause();
                            }
                        }
                    };
                    observer = new MutationObserver(callback);
                    observer.observe(modal, config);
                    $('.nav-item a').on('click', function(e) {
                        e.preventDefault();
                        ga('send', {
                            hitType: "event",
                            eventCategory: "Landing Page",
                            eventAction: "Preview Landing Page SP18 Link Click",
                            eventLabel: "Nav Link Click: " + this.innerHTML
                        });
                        document.location = $(this).attr("href");
                    });
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

function sendGaEvent(cat, act, label) {
    ga('send', {
        hitType: "event",
        eventCategory: cat,
        eventAction: act,
        eventLabel: label
    });
}