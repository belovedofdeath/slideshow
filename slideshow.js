var changeSlide, controls, controlsMenu, controlsShown, display, help, helpMenu, helpMenuShown, hide, load, nextSlide, notes, previousSlide, slideControl, slideCount, slides, speakerNotes, speakerNotesShown;
slideCount = 0;
speakerNotesShown = helpMenuShown = controlsShown = false;
slides = getElementsByClassName('slide', null, 'section');
notes = getElementsByClassName('note', null, 'aside');
help = getElementsByClassName('help', null, 'aside');
controls = getElementsByClassName('controls', null, 'aside');
load = function() {
  var j, slide, test, _i, _j, _k, _len, _len2, _len3;
  if (slides != null) {
    console.log("slides are there!");
    for (_i = 0, _len = slides.length; _i < _len; _i++) {
      test = slides[_i];
      console.log("this is a slide!");
    }
    console.log(slides);
  } else {
    console.log("slides are missing");
  }
  console.log("window.location.hash: " + (window.location.hash.slice(1)));
  if (!(window.location.hash.slice(1).length < 1)) {
    console.log("check");
    console.log("slide #3 id: " + slides[2].id);
    for (_j = 0, _len2 = slides.length; _j < _len2; _j++) {
      slide = slides[_j];
      console.log("slide.id = " + slide.id + ", hash = " + (window.location.hash.slice(1)));
      if (slide.id = window.location.hash.slice(1)) {
        slideCount = _i;
      }
    }
  }
  console.log("slideCount is currently " + slideCount);
  j = 0;
  for (_k = 0, _len3 = slides.length; _k < _len3; _k++) {
    slide = slides[_k];
    if (slideCount = j) {
      slide.style.display = 'inline';
      slide.style.opacity = 1;
    } else {
      slide.style.display = 'none';
      slide.style.opacity = 0;
    }
    j++;
  }
  return null;
  /* old:
  i = 0
  while i < slides.length
    if i = slideCount
      slides[i].style.display = "inline"
      slides[i].style.opacity = 1
    else
      slides[i].style.display = "none"
      slides[i].style.opacity = 0.0
    i++
  */
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