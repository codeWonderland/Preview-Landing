ccWaitTries = 10
(->
  if window.$
    (($) ->
      console.log 'in the anon function'
      $(document).ready ->
        $form = $(document.getElementsByClassName('form-container')[0])

        $('.blue-button,.white-button').on 'click', ->
          if ($form.attr('data-form-open') == 'true')
            $form.attr('data-form-open', 'false')
          else
            $form.attr('data-form-open', 'true')
          return

        $('p.exit-button').on 'click', ->
          $form.attr('data-form-open', 'false')
          return
        mq = window.matchMedia( "(min-width: 768px)" )

        if mq.matches
          $('[data-card-color]').css('height' , $('.single-image')[0].clientHeight + 'px')
        return
      return
    ) jQuery
  else
    ccWaitTries--
    if ccWaitTries > 0
      setTimeout waitForJQuery, 50
  return
)()