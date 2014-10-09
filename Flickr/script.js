$.getJSON("http://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=75abe3dff111185905f3fa2cc8e309c6&per_page=9&format=json&jsoncallback=?",
        function(data){
			
          $.each(data.photos.photo, function(i,item){
		  var photoURL = 'http://farm' + item.farm + '.static.flickr.com/'  + item.server + '/'  + item.id + '_' + item.secret + '_m.jpg';
            $("<img/>").attr("src", photoURL).appendTo("#images");
            if ( i == 9 ) return false;
          });
        });