var currentTallest = 0,
	currentTallestBundle = 0,
    currentRowStart = 0,
    currentRowStartBundle = 0,
    rowDivs = new Array(),
    rowDivsBundle = new Array();

function setConformingHeight(el, newHeight) {
	el.height(newHeight);
}

function getOriginalHeight(el) {
	// if the height has changed, send the originalHeight
	el.css('height', 'auto');
	return el.height();
}

function columnConform() {

	// find the tallest DIV in the row, and set the heights of all of the DIVs to match it.
	$('.product').each(function() {

		// "caching"
		var $el = $(this).children('.product-inner');
		//$el.css('height', 'auto');

		var topPosition = $el.parent().position().top;

		if (currentRowStart != topPosition) {

			// we just came to a new row.  Set all the heights on the completed row
			for(currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) setConformingHeight(rowDivs[currentDiv], currentTallest);

			// set the variables for the new row
			rowDivs.length = 0; // empty the array
			currentRowStart = topPosition;
			currentTallest = getOriginalHeight($el);
			rowDivs.push($el);

		} else {
			// another div on the current row.  Add it to the list and check if it's taller
			rowDivs.push($el);
			currentTallest = (currentTallest < getOriginalHeight($el)) ? (getOriginalHeight($el)) : (currentTallest);
		}
		// do the last row
		for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) setConformingHeight(rowDivs[currentDiv], currentTallest);

	});

	$('.products-bundle .product-wrapper').each(function() {

		// "caching"
		var $el = $(this).children('.product-inner');
		//$el.css('height', 'auto');

		var topPosition = $el.parent().position().top;

		if (currentRowStartBundle != topPosition) {

			// we just came to a new row.  Set all the heights on the completed row
			for(currentDiv = 0 ; currentDiv < rowDivsBundle.length ; currentDiv++) setConformingHeight(rowDivsBundle[currentDiv], currentTallestBundle);

			// set the variables for the new row
			rowDivsBundle.length = 0; // empty the array
			currentRowStartBundle = topPosition;
			currentTallestBundle = getOriginalHeight($el);
			rowDivsBundle.push($el);

		} else {
			// another div on the current row.  Add it to the list and check if it's taller
			rowDivsBundle.push($el);
			currentTallestBundle = (currentTallestBundle < getOriginalHeight($el)) ? (getOriginalHeight($el)) : (currentTallestBundle);
		}
		// do the last row
		for (currentDiv = 0 ; currentDiv < rowDivsBundle.length ; currentDiv++) setConformingHeight(rowDivsBundle[currentDiv], currentTallestBundle);

	});

}


$(window).resize(function() {
	columnConform();
});

// Dom Ready
// You might also want to wait until window.onload if images are the things that
// are unequalizing the blocks
$(function() {
	columnConform();
});

