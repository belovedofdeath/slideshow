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
      if (slide.id === window.location.hash.slice(1)) {
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
  window.location = "#" + slides[slideCount].id;
  return slides[slideCount].style.display = "inline";
};
previousSlide = function() {
  slides[slideCount].style.display = "none";
  if (slideCount > 0) {
    slideCount--;
  }
  window.location = "#" + slides[slideCount].id;
  return slides[slideCount].style.display = "inline";
};
changeSlide = function(direction) {
  if (direction != null) {
    if (direction === 'next') {
      nextSlide();
    }
    if (direction === 'prev') {
      return previousSlide();
    }
  }
};
speakerNotes = function() {
  if (speakerNotesShown) {
    hide(notes);
  } else {
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
    _results.push(thing.style.display = displayType);
  }
  return _results;
};