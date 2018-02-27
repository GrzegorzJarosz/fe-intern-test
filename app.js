
var counter = 0;

var giveMeMore= function(off){
	var results;
	$.ajax({
				url: 'https://codewise-fe-api.herokuapp.com/photos?offset='+off+'&limit=5',
				dataType: 'json',
				success: function(a){
					results= a;
					$.each(results,function(i,e){
						$('#monitor').append($('<div class=\'column\'><img src=\''+ e.url+'\'></div>' ))
					});
				},
				error: function(b){
					alert('błąd żądania');
				}
			});
			return results;
};

$(document).ready(function(){
	giveMeMore(counter);
	if(counter>=50){counter=counter=50}else{counter=counter+5};
})

$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>=($(document).height())-($(window).height()+2)){

			giveMeMore(counter);
			if(counter>=50){counter=counter=50}else{counter=counter+5};
	}
	});
});



/*

    Use https://codewise-fe-api.herokuapp.com/photos endpoint, to get list of objects that contain photos data, e.g.:

    {
        "width":5616,
        "height":3744,
        "author":"Alejandro Escamilla",
        "url":"https://unsplash.com/photos/N7XodRrbzS0/download"
    }

    This endpoint accepts two query parameters: 'offset' and 'limit'. If you use endpoint like this:
    https://codewise-fe-api.herokuapp.com/photos?offset=0&limit=5
    it will return first 5 records from the database,

    if you use it like this:
    https://codewise-fe-api.herokuapp.com/photos?offset=10&limit=5
    it will return records no. 10-14 end so on.

    If you don't pass any parameters, offset is set to 0 end limit is set to 50.

    To use lightweight placeholder images instead of real photos, set truthy value for 'placeholders' parameter, e.g.
    https://codewise-fe-api.herokuapp.com/photos?placeholders=1, or
    https://codewise-fe-api.herokuapp.com/photos?offset=10&limit=5&placeholders=1

    Good luck!

*/
