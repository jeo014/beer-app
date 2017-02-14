
var BASE_URL = 'http://api.brewerydb.com/v2/';

// from brewerydb node.js docs
var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb('6215e4323cd2d2b9e56954e2dc7a0220');


//how to call a json api? 
var request = require('request');
request('<API Call>', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body)
    }
})

//endpoint for getting back type of beer by name
brewdb.beer.find({ name:"bock" }, callback)


// this doesn't work because this only works with jsonp
function getDataFromApi(searchTerm, callback) {
  var query = {
    key: '6215e4323cd2d2b9e56954e2dc7a0220',
    q: searchTerm
  }
  $.getJSON(BASE_URL, query, callback);
  console.log(query);

}

function displaySearchData(data) {
  console.log(data);
  var resultElement = '';
  for (var i=0; i < data.items.length; i++) {
    //do something to format the data
  $('.js-search-results').html(resultElement);
}

function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displaySearchData);
  });
}

$(function(){watchSubmit();});