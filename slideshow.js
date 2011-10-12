var controlsMenu, controlsShown, getElementsByClass, helpMenu, helpMenuShown, load, nextSlide, previousSlide, slideControl, slideCount, speakerNotes, speakerNotesShown;
slideCount = 0;
speakerNotesShown = helpMenuShown = controlsShown = false;
load = function() {
  var elem, elems, slide, _i, _j, _len, _len2, _results;
  console.log(window.location.hash);
  elems = getElementsByClass('slide', null, 'section');
  if (window.location.hash == null) {
    for (_i = 0, _len = elems.length; _i < _len; _i++) {
      elem = elems[_i];
      if (window.location.hash.slice(1) === elem.id) {
        slideCount = _i;
      }
    }
  }
  _results = [];
  for (_j = 0, _len2 = elems.length; _j < _len2; _j++) {
    slide = elems[_j];
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
  var elems;
  elems = getElementsByClass('slide', null, 'section');
  elems[slideCount].style.display = 'none';
  elems[slideCount].style.opacity = 0;
  if (slideCount < elems.length(-1)) {
    slideCount++;
  }
  window.history.pushState('string 1', 'title', '/slideshow/index.htm#' + elems[slideCount].id);
  elems[slideCount].style.display = 'inline';
  elems[slideCount].style.opacity = 1;
  elems[slideCount].style.position = 'relative';
  return elems[slideCount].style.left = '0px';
};
previousSlide = function() {
  var elems;
  elems = getElementsByClass('slide', null, 'section');
  elems[slideCount].style.display = 'none';
  elems[slideCount].style.opacity = 0;
  if (slideCount > 0) {
    slideCount--;
  }
  window.history.pushState('string 2', 'title', '/slideshow/index.htm#' + elems[slideCount].id);
  elems[slideCount].style.display = 'inline';
  elems[slideCount].style.opacity = 1;
  elems[slideCount].style.position = 'relative';
  return elems[slideCount].style.left = '0px';
};
speakerNotes = function() {
  var elems, note, _i, _j, _len, _len2;
  elems = getElementsByClass('note', null, 'aside');
  if (speakerNotesShown) {
    for (_i = 0, _len = elems.length; _i < _len; _i++) {
      note = elems[_i];
      note.style.display = 'none';
    }
  } else {
    for (_j = 0, _len2 = elems.length; _j < _len2; _j++) {
      note = elems[_j];
      note.style.display = 'inline';
    }
  }
  return speakerNotesShown = !speakerNotesShown;
};
helpMenu = function() {
  var elems;
  elems = getElementsByClass('help', null, 'aside');
  if (helpMenuShown) {
    elems[0].style.display = 'none';
  } else {
    elems[0].style.display = 'block';
  }
  return helpMenuShown = !helpMenuShown;
};
controlsMenu = function() {
  var elems;
  elems = getElementsByClass('controls', null, 'aside');
  if (controlsShown) {
    elems[0].style.display = 'none';
  } else {
    elems[0].style.display = 'block';
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