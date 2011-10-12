var controls, controlsMenu, controlsShown, getElementsByClass, help, helpMenu, helpMenuShown, load, nextSlide, notes, previousSlide, slideControl, slideCount, slides, speakerNotes, speakerNotesShown;
slideCount = 0;
speakerNotesShown = helpMenuShown = controlsShown = false;
slides = getElementsByClass('slide', null, 'section');
notes = getElementsByClass('note', null, 'aside');
help = getElementsByClass('help', null, 'aside');
controls = getElementsByClass('controls', null, 'aside');
load = function() {
  var slide, _i, _j, _len, _len2, _results;
  console.log(window.location.hash);
  if (window.location.hash == null) {
    for (_i = 0, _len = slides.length; _i < _len; _i++) {
      slide = slides[_i];
      if (window.location.hash.slice(1) === slide.id) {
        slideCount = _i;
      }
    }
  }
  _results = [];
  for (_j = 0, _len2 = slides.length; _j < _len2; _j++) {
    slide = slides[_j];
    _results.push(i === slideCount ? (slide.style.display = 'inline', slide.style.opacity = 1) : (slide.style.display = 'none', slide.style.opacity = 0));
  }
  return _results;
};
slideControl = function(event) {
  switch (String.fromCharCode(event.which).toLowerCase() || event.which) {
    case 'n':
      return speakerNotes();
    case 37:
      return previousSlide();
    case 39:
      return nextSlide();
    case 'h':
      return helpMenu();
    case 'c':
      return controlsMenu();
  }
};
nextSlide = function() {
  slides[slideCount].style.display = 'none';
  slides[slideCount].style.opacity = 0;
  if (slideCount < slides.length(-1)) {
    slideCount++;
  }
  window.history.pushState('string 1', 'title', '/slideshow/index.htm#' + slides[slideCount].id);
  slides[slideCount].style.display = 'inline';
  slides[slideCount].style.opacity = 1;
  slides[slideCount].style.position = 'relative';
  return slides[slideCount].style.left = '0px';
};
previousSlide = function() {
  slides[slideCount].style.display = 'none';
  slides[slideCount].style.opacity = 0;
  if (slideCount > 0) {
    slideCount--;
  }
  window.history.pushState('string 2', 'title', '/slideshow/index.htm#' + slides[slideCount].id);
  slides[slideCount].style.display = 'inline';
  slides[slideCount].style.opacity = 1;
  slides[slideCount].style.position = 'relative';
  return slides[slideCount].style.left = '0px';
};
speakerNotes = function() {
  var note, _i, _j, _len, _len2;
  if (speakerNotesShown) {
    for (_i = 0, _len = notes.length; _i < _len; _i++) {
      note = notes[_i];
      note.style.display = 'none';
    }
  } else {
    for (_j = 0, _len2 = notes.length; _j < _len2; _j++) {
      note = notes[_j];
      note.style.display = 'inline';
    }
  }
  return speakerNotesShown = !speakerNotesShown;
};
helpMenu = function() {
  if (helpMenuShown) {
    help[0].style.display = 'none';
  } else {
    help[0].style.display = 'block';
  }
  return helpMenuShown = !helpMenuShown;
};
controlsMenu = function() {
  if (controlsShown) {
    controls[0].style.display = 'none';
  } else {
    controls[0].style.display = 'block';
  }
  return controlsShown = !controlsShown;
};
getElementsByClass = function(searchClass, node, tag) {
  var elem, elems, j, pattern, _i, _len;
  if (node === null) {
    node = document;
  }
  if (tag === null) {
    tag = '*';
  }
  elems = node.getElementsByTagName(tag);
  pattern = new RegExp("(^|\\s)" + searchClass + "(\\s|$)");
  j = 0;
  for (_i = 0, _len = elems.length; _i < _len; _i++) {
    elem = elems[_i];
    if (pattern.test(elem.className)) {
      classElements[j] = elem;
      j++;
    }
  }
  return classElements;
};