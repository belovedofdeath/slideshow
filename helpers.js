var getElementsByClassName;
getElementsByClassName = function(searchClass, node, tag) {
  var classElements, elem, elems, j, _i, _len, _results;
  if (node == null) {
    node = 'document';
  }
  if (tag == null) {
    tag = '*';
  }
  elems = document.getElementsByTagName(tag);
  console.log("elems: " + elems);
  j = 0;
  classElements = [];
  _results = [];
  for (_i = 0, _len = elems.length; _i < _len; _i++) {
    elem = elems[_i];
    _results.push(elem.className ? (classElements[j] = elem, j++) : void 0);
  }
  return _results;
};