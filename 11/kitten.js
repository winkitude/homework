$(function(){
	$('#count-down-btn').on('click',function(){	
		var countdown = Math.ceil(Math.random() * 20);
    	var countdownTimer = setInterval(function(){
    		countdown--;
    		document.getElementById("kitten-image").textContent = countdown;
    		if(countdown <= 0){
        		clearInterval(countdownTimer);
       		
       			var elem = document.getElementById("kitten-image");
        		var newElem = document.createElement("img");
				newElem.src = "http://placekitten.com/500/" + parseInt(Math.random() * 1000)

				elem.appendChild(newElem);}
    		},1000);


})

})

