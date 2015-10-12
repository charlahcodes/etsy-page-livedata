(function () {

  var templateString = $('#itemTemplate').text();

  var templateFunction = _.template(templateString);

  var url="https://api.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop";

$.getJSON(url)
    .then(_.each(url.results, function (item) {
    var itemHTML = templateFunction(item);
    $('.resultsContainer').append(itemHTML);
    }));


}());