ccWaitTries = 10
mq = window.matchMedia( "(min-width: 768px)" )

(->
  if window.$
    (($) ->
      $(document).ready ->
        $form = $(document.getElementsByClassName('form-container')[0])

        window.onscroll = ->
          scrollFunction()
          return

        scrollFunction = ->
          if mq.matches #desktop
            if ($(this).scrollTop() >= 646)
              $(document.getElementsByClassName("form-container")[0]).addClass('desktop-scrolling')
            else
              $(document.getElementsByClassName("form-container")[0]).removeClass('desktop-scrolling')
          else
            if ($(document).height() - $(window).scrollTop() - $(window).height() < 2838)
              $(document.getElementsByClassName("form-container")[0]).addClass('mobile-scrolling')
            else
              $(document.getElementsByClassName("form-container")[0]).removeClass('mobile-scrolling')
          return

        $('.blue-button,.white-button').on 'click', ->
          if ($form.attr('data-form-open') == 'true')
            $form.attr('data-form-open', 'false')
          else
            $form.attr('data-form-open', 'true')
          return

        $('.blue-button,.white-button').on 'click', ->
          if ($form.attr('data-form-open') == 'true')
            $form.attr('data-form-open', 'false')
            # If our form exists, focus on the first input element.
            if $('.ccLeadContent form input').length
              $('.ccLeadContent form input').first().focus()
          else
            $form.attr('data-form-open', 'true')
          return
        
        $('p.exit-button').on 'click', ->
          $form.attr('data-form-open', 'false')
          return

        if mq.matches
          $('[data-card-color]').css('height' , $('.single-image')[0].clientHeight + 'px')
          $('.double-image img').css('height' , $('.double-image img')[0].clientHeight + 'px')

        $('a').on 'click', ->
          ga('send',
            hitType: 'event',
            eventCategory: 'Preview Landing Page',
            eventAction: 'Link Click',
            eventLabel: this.innerHTML
          )
          return
        return
      return
    ) jQuery
  else
    ccWaitTries--
    if ccWaitTries > 0
      setTimeout waitForJQuery, 50
  return
)()