var slideCount = 0; //index of array for <section class="slide">
var speakerNotesShown = false;
var helpMenuShown = false;
var controlsShown = false;

//called when page is loaded, looks for #bookmark in url and makes sure the correct slide is shown
function load()
{
	console.log(window.location.hash);
	elems = getElementsByClass("slide", null, "section");
	
	//if the hash tag is set, change the slideCount number
	if (window.location.hash != "")
	{
		for (i = 0; i < elems.length; i++)
		{
			if (elems[i].id == window.location.hash.slice(1))
			{
				slideCount = i;
			}
		}
	}
	
	for (i = 0;  i < elems.length; i++)
	{
		if (i == slideCount)
		{
			elems[i].style.display = "inline";
			elems[i].style.opacity = 1;
		} else {
			elems[i].style.display = "none";
			elems[i].style.opacity = 0.0;
		}
	}
}

//will handle keypresses for slide show
function slideControl(event)
{
	switch(event.which)
	{
		//both of these are 'n' & 'N', respectively
		case 110:
		case 78:
			speakerNotes();
			break;
		//right keyboard arrow
		case 37:
			previousSlide();
			break;
		//left keyboard arrow
		case 39:
			nextSlide();
			break;
		//'h' & 'H'
		case 72:
			helpMenu();
			break;
		//'c' & 'C'
		case 67:
			controlsMenu();
			break;
		default:
			//alert(event.which);
	}
}

//will move to next slide
function nextSlide()
{
	elems = getElementsByClass("slide", null, "section");
	elems[slideCount].style.display = "none";
	elems[slideCount].style.opacity = 0;
	//make sure it doesn't go out of bounds
	if (slideCount < (elems.length - 1))
	{
		slideCount++;
	}
	window.history.pushState("string 1", "title", "/slideshow/index.htm#" + elems[slideCount].id);
	elems[slideCount].style.display = "inline";
	elems[slideCount].style.opacity = 1;
	elems[slideCount].style.position = "relative";
	elems[slideCount].style.left = "0px";
}

//will move to previous slide
function previousSlide()
{
	elems = getElementsByClass("slide", null, "section");
	elems[slideCount].style.display = "none";
	elems[slideCount].style.opacity = 0;
	//make sure it doesn't go out of bounds
	if (slideCount > 0)
	{
		slideCount--;
	}
	window.history.pushState("string 1", "title", "/slideshow/index.htm#" + elems[slideCount].id);
	elems[slideCount].style.display = "inline";
	elems[slideCount].style.opacity = 1;
	elems[slideCount].style.position = "relative";
	elems[slideCount].style.left = "0px";
}

//will toggle speaker notes
function speakerNotes()
{
	elems = getElementsByClass("note", null, "aside");
	if (speakerNotesShown)
	{
		//change CSS so that speaker notes are hidden
		for (i = 0; i < elems.length; i++)
		{
				elems[i].style.display = "none";
		}
	} else {
		//change CSS so that speaker notes are shown
		for (i = 0; i < elems.length; i++)
		{
				elems[i].style.display = "inline";
		}
	}

	speakerNotesShown = !speakerNotesShown;
}

//will toggle help menu
function helpMenu()
{
	elems = getElementsByClass("help", null, "aside");
	if (helpMenuShown)
	{
		//change CSS so that help menu is hidden
		elems[0].style.display = "none";
	} else {
		//change CSS so that help menu is shown
		elems[0].style.display = "block";
	}
	helpMenuShown = !helpMenuShown;
}

//will toggle help menu
function controlsMenu()
{
	elems = getElementsByClass("controls", null, "aside");
	if (controlsShown)
	{
		//change CSS so that help menu is hidden
		elems[0].style.display = "none";
	} else {
		//change CSS so that help menu is shown
		elems[0].style.display = "block";
	}
	controlsShown = !controlsShown;
}
 
function getElementsByClass(searchClass,node,tag) {
	var classElements = new Array();
	if ( node == null )
		node = document;
	if ( tag == null )
		tag = '*';
	var els = node.getElementsByTagName(tag);
	var elsLen = els.length;
	var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
	for (i = 0, j = 0; i < elsLen; i++) {
		if ( pattern.test(els[i].className) ) {
			classElements[j] = els[i];
			j++;
		}
	}
	return classElements;
}
