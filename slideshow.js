var changeSlide, controls, controlsMenu, controlsShown, display, getElementsByClass, help, helpMenu, helpMenuShown, hide, load, notes, slideControl, slideCount, slides, speakerNotes, speakerNotesShown;
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
      return changeSlide('previous');
    case 39:
      return changeSlide('next');
    case 'h':
      return helpMenu();
    case 'c':
      return controlsMenu();
  }
};
changeSlide = function(direction) {
  slides[slideCount].style.display = 'none';
  slides[slideCount].style.opacity = 0;
  if (direction === 'next') {
    if (slideCount < slides.length(-1)) {
      slideCount++;
    }
  }
  if (direction === 'previous') {
    if (slideCount > 0) {
      slideCount--;
    }
  }
  window.history.pushState('string 1', 'title', '/slideshow/index.htm#' + slides[slideCount].id);
  slides[slideCount].style.display = 'inline';
  slides[slideCount].style.opacity = 1;
  slides[slideCount].style.position = 'relative';
  return slides[slideCount].style.left = '0px';
};
speakerNotes = function() {
  if (speakerNotesShown) {
    hide(notes);
  }
  if (!speakerNotesShown) {
    display(notes, 'inline');
  }
  return speakerNotesShown = !speakerNotesShown;
};
helpMenu = function() {
  if (helpMenuShown) {
    hide(help);
  }
  if (!helpMenuShown) {
    display(help);
  }
  return helpMenuShown = !helpMenuShown;
};
controlsMenu = function() {
  if (controlsShown) {
    hide(controls);
  }
  if (!controlsShown) {
    display(controls);
  }
  return controlsShown = !controlsShown;
};
hide = function(group) {
  var thing, _i, _len, _results;
  _results = [];
  for (_i = 0, _len = group.length; _i < _len; _i++) {
    thing = group[_i];
    _results.push(thing.style.display = 'none');
  }
  return _results;
};
display = function(group, displayType) {
  var thing, _i, _len, _results;
  if (displayType == null) {
    displayType = 'block';
  }
  _results = [];
  for (_i = 0, _len = group.length; _i < _len; _i++) {
    thing = group[_i];
    _results.push(thing.style.display = display);
  }
  return _results;
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