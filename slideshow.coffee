slideCount = 0 # index of array for <section class="slide">
speakerNotesShown = helpMenuShown = controlsShown = false
slides = document.getElementsByClassName('slide')
notes = document.getElementsByClassName('note')
help = document.getElementsByClassName('help')
controls = document.getElementsByClassName('controls')

load = ->
  unless window.location.hash.slice(1).length < 1 # for some reason using unless window.location.hash.slice(1)? ... didn't work
    for slide in slides # go through and see if the hash tag in the URL matches any of the ID's for the slides.  if not, keep the slideCount at 0
      if slide.id = window.location.hash.slice(1)
        slideCount = _i
  for slide in slides
    slide.style.display = 'none'
  slides[slideCount].style.display = 'inline'

slideControl = (event) ->
  switch event.which
    when 110, 78
      speakerNotes()
    when 37
      previousSlide()
    when 39
      nextSlide()
    when 72
      helpMenu()
    when 67
      controlsMenu()
    else

nextSlide = ->
  slides[slideCount].style.display = "none"
  slideCount++ if slideCount < (slides.length - 1)
  # window.history.pushState "string 1", "title", "/slideshow/index.htm#" + slides[slideCount].id
  slides[slideCount].style.display = "inline"

previousSlide = ->
  slides[slideCount].style.display = "none"
  slideCount--  if slideCount > 0
  # window.history.pushState "string 1", "title", "/slideshow/index.htm#" + elems[slideCount].id
  slides[slideCount].style.display = "inline"

changeSlide = (direction) ->
  if direction?
    if direction is 'next'
      nextSlide()
    if direction is 'prev'
      previousSlide()
  # i would like to eventually incorporate a "jump to slide" feature that puts up a little box letting you go back to where you originally came from in the presentation
  # that same (above) idea could also be use to create a table of contents

speakerNotes = ->
  if speakerNotesShown then hide(notes) else display(notes, 'inline')
  speakerNotesShown = !speakerNotesShown

helpMenu = ->
  hide(help) if helpMenuShown
  display(help) unless helpMenuShown
  helpMenuShown = !helpMenuShown

controlsMenu = ->
  hide(controls) if controlsShown
  display(controls) unless controlsShown
  controlsShown = !controlsShown

hide = (group) ->
  for thing in group
    thing.style.display = 'none'

display = (group, displayType) -> # sets default display type to block, include 'inline' to override
  unless displayType?
    displayType = 'block'
  for thing in group
    thing.style.display = displayType

