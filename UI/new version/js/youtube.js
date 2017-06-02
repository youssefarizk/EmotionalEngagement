

// 2. This code loads the IFrame Player API code asynchronously.
var testing = document.getElementById('test');
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// var picURL;
var counter = 0;
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

// function clickme(){
//   testing.innerHTML = picURL;
// }

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.

function stopVideo() {
  player.stopVideo();
}

var lcounter=0;

$(document).mouseleave(function(){
  lcounter=lcounter+1;
  //console.log(lcounter);
});

function vid1(a) {
//  idleTime = 0;
//counter=0;
 //alert(lcounter);
 lcounter=0;
// alert(countere);
player.loadVideoById({'videoId': videosID[a],
               'suggestedQuality': 'default'});
               vid=a;

      if(counter == 0){
          counter =1;
      }
      else {
                 str = JSON.stringify(dict, null, 4);
                   console.log(str); // Logs output to dev tools console.

                   $.post("http://projectemotion.azurewebsites.net/",
                         str,
                         function(data, textStatus, jqXHR)
                         {
                             dict = [];
                          //   alert(textStatus);
                          //   alert(data);
                         }).fail(function(jqXHR, textStatus, errorThrown)
                         {
                           dict = [];
                             //alert(jqXHR);
                            // alert(textStatus);
                             //alert(errorThrown);
                         });

  }
}
