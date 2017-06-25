$(function() {
  // DOM is now ready
  var loading = $('#loading')
  var search = $('.enter-location-view')

  loading.hide();
   search.hide();

  _500px.init({
  	sdk_key: 'd3c5f322efb61d6530389638615d29873bd6da56'
  });

  
   

  $('#login').click(function(){
    _500px.login();
    
  });


  _500px.on('authorization_obtained', function() {
     loading.show()
    console.log("Authorization Success!");
    $('#login').hide();
 
   
    
 
    navigator.geolocation.getCurrentPosition(function(pos){
  

      var lat = pos.coords.latitude;
      var long = pos.coords.longitude;

      var searchOptions = {
        geo: lat + ',' + long + ',' + '25mi',
        only: 'landscapes',
        image_size: 3,
        rpp: 28,
        sort: 'highest_rating'
      };

      console.log(searchOptions)

      _500px.api('/photos/search', searchOptions, function(resp){
       
        $('.image-results-view').show();
      	var photos = resp.data.photos;
        for(var i = 0; i < photos.length; i++){
      		var newImg = $('<img>').attr('src', photos[i].image_url).addClass('image');
      		$('.images').append(newImg);
             loading.hide();
                search.show();
      	  };
        });
        });
    
      $('#get-photos').click(function(){
        $('.images').html('');
   
        var lattitude = $('#latitude').val();
        var longitude = $('#longitude').val();


  var searchOptions = {
        geo: lattitude + ',' + longitude + ',' + '25mi',
        only: 'landscapes',
        image_size: 3,
        rpp: 28,
        sort: 'highest_rating'
      };

 console.log(searchOptions)
      _500px.api('/photos/search', searchOptions, function(resp){
      loading.show();
   
        $('.image-results-view').show();
        var photos = resp.data.photos;
        if(photos == 0){
        $( "#message" ).append( "<p>Oops! No photos here</p>" ); 
        loading.hide();
          
        } else{
        for(var j = 0; j < photos.length; j++){
          var newImg = $('<img>').attr('src', photos[j].image_url).addClass('image');
          $('.images').append(newImg);

          
          };
          loading.hide();
          };
        });
        });
  });

  });


// ('#get-location').on('click', function(event){
//     loading.show();
//     event.preventDefault();

//     // obtain the values that the user has typed in
//     // by getting the element by an ID and calling val()
//     var long = $('#longitude').val();
//     var lati = $('#latitude').val();
// });

