getElementsByClassName = (searchClass, node, tag) ->
  unless node? then node = 'document'
  unless tag? then tag = '*'
  elems = document.getElementsByTagName(tag) # hardcoding in document for now
  console.log "elems: #{elems}"
  j = 0
  classElements = [] # for some reason coffeescript didn't do this for me?
  for elem in elems # CS will automatically return the results of this array
    if elem.className
      classElements[j] = elem
      j++

