// runs the function the page has loaded
$(function(){
	var loading = $('#loading-marquee')
	loading.hide();

	// obtain the html element on the page with the ID of 'get-weather'
	// and attach a click event handler
	$('#get-weather').on('click', function(event){
		loading.show();
		event.preventDefault();

		// obtain the values that the user has typed in
		// by getting the element by an ID and calling val()
		var long = $('#longitude').val();
		var lati = $('#latitude').val();

		var baseURL = 'https://js58-proxy.herokuapp.com/forecast/361627b581875357d96024eca6a8fcac/';
		weatherURL = baseURL + "/" + long + "," + lati
		//the WeatherURL result is the baseURL concatenated woth the longitude and latitude
		//seperated by a space

		$.get(weatherURL, function(response){
			loading.hide()
			console.log(response);
			$('#current-temp').html(response.currently.temperature + "°F");
			$('#current-hum').html(response.currently.humidity*100 + "%");
			$('#current-wind').html(response.currently.windSpeed + "MPH");
		})
	});
});