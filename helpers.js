var getElementsByClassName;
getElementsByClassName = function(searchClass, node, tag) {
  var classElements, elem, elems, j, pattern, _i, _len;
  if (node == null) {
    node = 'document';
  }
  if (tag == null) {
    tag = '*';
  }
  elems = document.getElementsByTagName(tag);
  pattern = new RegExp("(^|\\s)" + searchClass + "(\\s|$)");
  j = 0;
  classElements = [];
  for (_i = 0, _len = elems.length; _i < _len; _i++) {
    elem = elems[_i];
    if (pattern.test(elem.className)) {
      classElements[j] = elem;
      j++;
    }
  }
  return classElements;
};