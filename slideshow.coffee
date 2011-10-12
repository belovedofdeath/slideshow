slideCount = 0 # index of array for <section class="slide">
speakerNotesShown = helpMenuShown = controlsShown = false
slides = getElementsByClass('slide', null, 'section')
notes = getElementsByClass('note', null, 'aside')
help = getElementsByClass('help', null, 'aside')
controls = getElementsByClass('controls', null, 'aside')

load = ->
  console.log window.location.hash
  unless window.location.hash?
    for slide in slides
      slideCount = _i if window.location.hash.slice(1) is slide.id
  for slide in slides
    if i is slideCount
      slide.style.display = 'inline'
      slide.style.opacity = 1
    else
      slide.style.display = 'none'
      slide.style.opacity = 0

slideControl = (event) ->
  switch String.fromCharCode(event.which).toLowerCase() or event.which
    when 'n'
      speakerNotes()
    when 37
      # left arrow
      previousSlide()
    when 39
      # right arrow
      nextSlide()
    when 'h'
      helpMenu()
    when 'c'
      controlsMenu()
    else
      # do nothing

nextSlide = ->
  slides[slideCount].style.display = 'none'
  slides[slideCount].style.opacity = 0
  # make sure it doesn't go out of bounds
  slideCount++ if slideCount < slides.length -1
  window.history.pushState('string 1', 'title', '/slideshow/index.htm#' + slides[slideCount].id)
  slides[slideCount].style.display = 'inline'
  slides[slideCount].style.opacity = 1
  slides[slideCount].style.position = 'relative'
  slides[slideCount].style.left = '0px' # why do i have this in here in the JS again???

previousSlide = ->
  slides[slideCount].style.display = 'none'
  slides[slideCount].style.opacity = 0
  # make sure it doesn't go out of bounds
  slideCount-- if slideCount > 0
  window.history.pushState('string 2', 'title', '/slideshow/index.htm#' + slides[slideCount].id)
  slides[slideCount].style.display = 'inline'
  slides[slideCount].style.opacity = 1
  slides[slideCount].style.position = 'relative'
  slides[slideCount].style.left = '0px'

speakerNotes = ->
  if speakerNotesShown
    # change CSS so that speaker notes are hidden
    for note in notes
      note.style.display = 'none'
  else
    # change CSS so that speaker notes are shown
    for note in notes
      note.style.display = 'inline'
  speakerNotesShown = !speakerNotesShown

helpMenu = ->
  if helpMenuShown
    help[0].style.display = 'none'
  else
    help[0].style.display = 'block'
  helpMenuShown = !helpMenuShown

controlsMenu = ->
  if controlsShown
    controls[0].style.display = 'none'
  else
    controls[0].style.display = 'block'
  controlsShown = !controlsShown

getElementsByClass = (searchClass, node, tag) ->
  if node == null
    node = document
  if tag == null
    tag = '*'
  elems = node.getElementsByTagName(tag)
  pattern = new RegExp("(^|\\s)" + searchClass + "(\\s|$)")
  j = 0
  for elem in elems
    if pattern.test(elem.className)
      classElements[j] = elem
      j++
  return classElements

