(function () {

  let templateString = $('#itemTemplate').text();

  let templateFunction = _.template(templateString);

  let etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';

$.ajax({
    url: etsyURL,
    dataType: 'jsonp',
    method: 'get'
  }).then (function(data){
    _.each(data.results, function (item) {
      var itemHTML = templateFunction(item);
      $('.resultsContainer').append(itemHTML);
    });
  });

}());