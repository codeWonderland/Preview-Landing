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

$(document).ready ->
  $('[data-card-color]').css('height' , $('.single-image')[0].clientHeight + 'px')