var changeSlide, controls, controlsMenu, controlsShown, display, help, helpMenu, helpMenuShown, hide, load, nextSlide, notes, previousSlide, slideControl, slideCount, slides, speakerNotes, speakerNotesShown;
slideCount = 0;
speakerNotesShown = helpMenuShown = controlsShown = false;
console.log('about to look for slides');
slides = getElementsByClassName('slide', null, 'section');
notes = getElementsByClassName('note', null, 'aside');
help = getElementsByClassName('help', null, 'aside');
controls = getElementsByClassName('controls', null, 'aside');
load = function() {
  var elems, i, _results;
  console.log("window.location.hash: " + window.location.hash);
  elems = getElementsByClassName("slide", null, "section");
  if (window.location.hash !== "") {
    i = 0;
    while (i < elems.length) {
      if (elems[i].id === window.location.hash.slice(1)) {
        slideCount = i;
      }
      i++;
    }
  }
  i = 0;
  _results = [];
  while (i < elems.length) {
    if (i === slideCount) {
      elems[i].style.display = "inline";
      elems[i].style.opacity = 1;
    } else {
      elems[i].style.display = "none";
      elems[i].style.opacity = 0.0;
    }
    _results.push(i++);
  }
  return _results;
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
  var elems;
  elems = getElementsByClassName("slide", null, "section");
  elems[slideCount].style.display = "none";
  elems[slideCount].style.opacity = 0;
  if (slideCount < (elems.length - 1)) {
    slideCount++;
  }
  window.history.pushState("string 1", "title", "/slideshow/index.htm#" + elems[slideCount].id);
  elems[slideCount].style.display = "inline";
  elems[slideCount].style.opacity = 1;
  elems[slideCount].style.position = "relative";
  return elems[slideCount].style.left = "0px";
};
previousSlide = function() {
  var elems;
  elems = getElementsByClassName("slide", null, "section");
  elems[slideCount].style.display = "none";
  elems[slideCount].style.opacity = 0;
  if (slideCount > 0) {
    slideCount--;
  }
  window.history.pushState("string 1", "title", "/slideshow/index.htm#" + elems[slideCount].id);
  elems[slideCount].style.display = "inline";
  elems[slideCount].style.opacity = 1;
  elems[slideCount].style.position = "relative";
  return elems[slideCount].style.left = "0px";
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