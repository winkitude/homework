window.onload = function() {
	var button = document.getElementById('new-button');

	button.onclick = function(event) {
	
		event.preventDefault();
		var newText = document.getElementById('new-form').value;
		
	
		var list = document.getElementById('fizzbuzz-output');
		var listItems = "";
		var i;
		for (i = 1; i <= newText; i = i + 1) {
    		listItems += '<li>';
    		if ((i % 3 === 0) && (i % 5 === 0)) {
        	listItems += 'fizzbuz';
    		}
    		else if (i % 3 === 0) {
        	listItems += 'fizz';
    		}
    		else if (i % 5 === 0) {
        	listItems += 'buzz';
    		}
    		else {
        	listItems += i;
    		}
    		listItems += '</li>';
    	}

	list.innerHTML += listItems;
	}
};