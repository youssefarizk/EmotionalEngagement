/*

Module: YouTube Player

Description: Deals with everything related to the YouTube player on the website. Some code is used form the YouTube API start guide

Owner: Youssef Rizk

*/

// 2. This code loads the IFrame Player API code asynchronously.
var testing = document.getElementById('test');
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: '',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function clickme(){
  testing.innerHTML = picURL;
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

function showTime(){
  alert(player.getCurrentTime());
}
// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.

function stopVideo() {
  player.stopVideo();
}

function onPlayerStateChange(event) {
    if(event.data == 0){
// downloadCSV({ filename: "data.csv" });
      sendData();
    }
}
