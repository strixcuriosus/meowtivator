
console.log('YOYOYOYOYO');
var searchQuery = "motivation cat";
var urllist = [];
var giphyUrl = 'http://api.giphy.com/v1/gifs/search?q=' +
 encodeURIComponent(searchQuery) +
'&api_key=dc6zaTOxFJmzC';

var giphyUrl3 = 'http://api.giphy.com/v1/gifs/search?q=' +
 encodeURIComponent('cat power') +
'&api_key=dc6zaTOxFJmzC';

var giphyUrl2 = 'http://api.giphy.com/v1/gifs/search?q=' +
 encodeURIComponent('lolcat inspiration') +
'&api_key=dc6zaTOxFJmzC';

var count = 0;

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
// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
  // kittenGenerator.requestKittens();
  console.log('win loaded');
  getGifs(setCatPic, giphyUrl2);
  getGifs(setCatPic, giphyUrl3);
  getGifs(setCatPic, giphyUrl);
  var el = document.getElementById("more");
  el.addEventListener("click", changeCats, false);

});