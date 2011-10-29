slideCount = 0 # index of array for <section class="slide">
speakerNotesShown = helpMenuShown = controlsShown = false
slides = getElementsByClassName('slide', null, 'section')
notes = getElementsByClassName('note', null, 'aside')
help = getElementsByClassName('help', null, 'aside')
controls = getElementsByClassName('controls', null, 'aside')

load = ->
  if slides?
    console.log "slides are there!"
    for test in slides
      console.log "this is a slide!"
    console.log slides
  else
    console.log "slides are missing"
  console.log "window.location.hash: #{window.location.hash.slice(1)}"
  unless window.location.hash.slice(1).length < 1 # for some reason using unless window.location.hash.slice(1)? ... didn't work
    console.log "check"
    console.log "slide #3 id: #{slides[2].id}"
    for slide in slides # go through and see if the hash tag in the URL matches any of the ID's for the slides.  if not, keep the slideCount at 0
      console.log "slide.id = #{slide.id}, hash = #{window.location.hash.slice(1)}"
      if slide.id = window.location.hash.slice(1)
        slideCount = _i
  console.log "slideCount is currently #{slideCount}"
  j = 0
  for slide in slides # for some reason i can't refer to _j in here like i can refer to _i up above??
    if slideCount = j
      slide.style.display = 'inline'
      slide.style.opacity = 1
    else
      slide.style.display = 'none'
      slide.style.opacity = 0
    j++
  null
  ### old:
  i = 0
  while i < slides.length
    if i = slideCount
      slides[i].style.display = "inline"
      slides[i].style.opacity = 1
    else
      slides[i].style.display = "none"
      slides[i].style.opacity = 0.0
    i++
  ###

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
  elems = getElementsByClassName("slide", null, "section")
  elems[slideCount].style.display = "none"
  elems[slideCount].style.opacity = 0
  slideCount++  if slideCount < (elems.length - 1)
  window.history.pushState "string 1", "title", "/slideshow/index.htm#" + elems[slideCount].id
  elems[slideCount].style.display = "inline"
  elems[slideCount].style.opacity = 1
  elems[slideCount].style.position = "relative"
  elems[slideCount].style.left = "0px"

previousSlide = ->
  elems = getElementsByClassName("slide", null, "section")
  elems[slideCount].style.display = "none"
  elems[slideCount].style.opacity = 0
  slideCount--  if slideCount > 0
  window.history.pushState "string 1", "title", "/slideshow/index.htm#" + elems[slideCount].id
  elems[slideCount].style.display = "inline"
  elems[slideCount].style.opacity = 1
  elems[slideCount].style.position = "relative"
  elems[slideCount].style.left = "0px"



changeSlide = (direction) ->
  slides[slideCount].style.display = 'none'
  slides[slideCount].style.opacity = 0
  # make sure it doesn't go out of bounds
  if direction is 'next'
    slideCount++ if slideCount < slides.length -1
  if direction is 'previous'
    slideCount-- if slideCount > 0
  window.history.pushState('string 1', 'title', '/slideshow/index.htm#' + slides[slideCount].id)
  # need to make this into a css style instead of hard-coded specifying here
  slides[slideCount].style.display = 'inline'
  slides[slideCount].style.opacity = 1
  slides[slideCount].style.position = 'relative'
  slides[slideCount].style.left = '0px'

speakerNotes = ->
  hide(notes) if speakerNotesShown
  display(notes, 'inline') unless speakerNotesShown
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

display = (group, displayType) ->
  unless displayType?
    displayType = 'block'
  for thing in group
    thing.style.display = display

