var changeSlide, controls, controlsMenu, controlsShown, display, help, helpMenu, helpMenuShown, hide, load, nextSlide, notes, previousSlide, slideControl, slideCount, slides, speakerNotes, speakerNotesShown;
slideCount = 0;
speakerNotesShown = helpMenuShown = controlsShown = false;
slides = document.getElementsByClassName('slide');
notes = document.getElementsByClassName('note');
help = document.getElementsByClassName('help');
controls = document.getElementsByClassName('controls');
load = function() {
  var slide, _i, _j, _len, _len2;
  if (!(window.location.hash.slice(1).length < 1)) {
    for (_i = 0, _len = slides.length; _i < _len; _i++) {
      slide = slides[_i];
      if (slide.id = window.location.hash.slice(1)) {
        slideCount = _i;
      }
    }
  }
  for (_j = 0, _len2 = slides.length; _j < _len2; _j++) {
    slide = slides[_j];
    slide.style.display = 'none';
  }
  return slides[slideCount].style.display = 'inline';
};
slideControl = function(event) {
  switch (event.which) {
    case 110:
    case 78:
      return speakerNotes();
    case 37:
      return previousSlide();
    case 39:
      return nextSlide();
    case 72:
      return helpMenu();
    case 67:
      return controlsMenu();
  }
};
nextSlide = function() {
  slides[slideCount].style.display = "none";
  if (slideCount < (slides.length - 1)) {
    slideCount++;
  }
  return slides[slideCount].style.display = "inline";
};
previousSlide = function() {
  slides[slideCount].style.display = "none";
  if (slideCount > 0) {
    slideCount--;
  }
  return slides[slideCount].style.display = "inline";
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