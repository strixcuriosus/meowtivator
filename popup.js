
var searchQuery = "motivation cat";
var urllist = [];
var count = 0;

var generateURL = function (searchQuery) {
  var giphyUrl = 'http://api.giphy.com/v1/gifs/search?q=' +
   encodeURIComponent(searchQuery) +
  '&api_key=dc6zaTOxFJmzC';  //giphy's public api key (for testing purposes);
  return giphyUrl;
};

var getGifs = function (callback, url) {
  console.log('giffin');
  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.onload = function(e) {
    console.log('respo');
    var urls = JSON.parse(e.target.response).data.map(function(giphyObj){ return giphyObj.images.fixed_height.url});
    urllist = urllist.concat(urls);
    console.log(urllist);
    callback(urllist[count]);
  }
  req.send();
}

var motivations = ['You can do it!', 'Meowza!', 'Hax0rCats!', 'Prrrrrfect!', 'Less QQ more mew mew'];
var queries = ['lolcats', 'cat+tricks', 'ohai'];

var setCatPic = function (url) {
  document.getElementById('catpic').src = url;
  document.getElementById('catspeak').innerHTML = motivations[count % motivations.length];
}

var el = document.getElementById("outside");
var log = function () {console.log('hey')};
var changeCats = function () {
  count++;
  var next = urllist[(count % urllist.length)];
  console.log(next);
  setCatPic(next);
}

document.addEventListener('DOMContentLoaded', function () {
  queries.forEach(function(query) {
    console.log(query);
    var url = generateURL(query);
    getGifs(setCatPic, url);
  });

  var el = document.getElementById("more");
  el.addEventListener("click", changeCats, false);

});