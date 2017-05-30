

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

//
// var idleTime = 0;
//   $(document).ready(function () {
//       //Increment the idle time counter every minute.
//       var idleInterval = setInterval(timerIncrement, 1000); // 1 minute
//
//       //Zero the idle timer on mouse movement.
//       // $(this).mousemove(function (e) {
//       //     idleTime = 0;
//       // });
//       // $(this).keypress(function (e) {
//       //     idleTime = 0;
//       // });
//   });
//
//   function timerIncrement() {
//       idleTime = idleTime + 1;
//       // if (idleTime > 19) { // 20 minutes
//       //     window.location.reload();
//       // }
//   }

// var counter;
// var countere;
//
// document.getElementById("box1").addEventListener("mouseleave", function(){
//   counter = counter+1;
// },false);
//
//
// document.getElementById("box1").addEventListener("mouseout", function(){
//   countere=countere+1;
// alert("getin");
// },false);
//



function vid1() {
//  idleTime = 0;
// alert(counter);
// alert(countere);
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': 'ZK3O402wf1c',
                           'suggestedQuality': 'default'});
                           vid="Lec 1 MIT 18.06 Linear Algebra Spring 2005";



      }
      else {


        player.loadVideoById({'videoId': 'ZK3O402wf1c',
                       'suggestedQuality': 'default'});
                       vid="Lec 1 MIT 18.06 Linear Algebra Spring 2005";

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
function vid2() {

  if(counter == 0){
      counter =1;

        player.loadVideoById({'videoId': 'mbyG85GZ0PI',
                       'suggestedQuality': 'default'});
                       vid="Lecture 01 - The Learning Problem";
  }
  else {

  player.loadVideoById({'videoId': 'mbyG85GZ0PI',
                 'suggestedQuality': 'default'});
                 vid="Lecture 01 - The Learning Problem";
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
                             //alert(jqXHR);
                             dict = [];
                            // alert(textStatus);
                             //alert(errorThrown);
                         });

}}
function vid3() {
  if(counter == 0){
      counter =1;

        player.loadVideoById({'videoId': 'gv-AB35V2k8',
                       'suggestedQuality': 'default'});
                       vid="Lec 1 MIT 18.086 Mathematical Methods for Engineers II";
  }
  else {

  player.loadVideoById({'videoId': 'gv-AB35V2k8',
                 'suggestedQuality': 'default'});
                 vid="Lec 1 MIT 18.086 Mathematical Methods for Engineers II";
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
                             //alert(jqXHR);
                             dict = [];
                            // alert(textStatus);
                             //alert(errorThrown);
                         });

}}
function vid4() {
  if(counter == 0){
      counter =1;

        player.loadVideoById({'videoId': 'T_I-CUOc_bk',
                       'suggestedQuality': 'default'});
                       vid="Big Picture: Derivatives";
  }
  else {

  player.loadVideoById({'videoId': 'T_I-CUOc_bk',
                 'suggestedQuality': 'default'});
                 vid="Big Picture: Derivatives";
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
                             //alert(jqXHR);
                             dict = [];
                          //   alert(textStatus);
                             //alert(errorThrown);
                         });

}}
function vid5() {
  if(counter == 0){
      counter =1;

        player.loadVideoById({'videoId': 'oo1ZZlvT2LQ',
                       'suggestedQuality': 'default'});
                       vid="The Exponential Function";
  }
  else {

  player.loadVideoById({'videoId': 'oo1ZZlvT2LQ',
                 'suggestedQuality': 'default'});
                 vid="The Exponential Function";
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
                             //alert(jqXHR);
                             dict = [];
                          //   alert(textStatus);
                             //alert(errorThrown);
                         });
}}
function vid6() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': '1A_CAkYt3GY',
                           'suggestedQuality': 'default'});
                           vid="What is Philosophy?: Crash Course Philosophy #1";



      }
      else {


        player.loadVideoById({'videoId': '1A_CAkYt3GY',
                       'suggestedQuality': 'default'});
                       vid="What is Philosophy?: Crash Course Philosophy #1";

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
function vid7() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': 'vCGtkDzELAI',
                           'suggestedQuality': 'default'});
                           vid="Determinism vs Free Will: Crash Course Philosophy #24";



      }
      else {


        player.loadVideoById({'videoId': 'vCGtkDzELAI',
                       'suggestedQuality': 'default'});
                       vid="Determinism vs Free Will: Crash Course Philosophy #24";

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
function vid8() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': 'H0CTHVCkm90',
                           'suggestedQuality': 'default'});
                           vid="What Is Justice?: Crash Course Philosophy #40";



      }
      else {


        player.loadVideoById({'videoId': 'H0CTHVCkm90',
                       'suggestedQuality': 'default'});
                       vid="What Is Justice?: Crash Course Philosophy #40";

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
function vid9() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': 'sQK3Yr4Sc_k',
                           'suggestedQuality': 'default'});
                           vid="Photosynthesis: Crash Course Biology #8";



      }
      else {


        player.loadVideoById({'videoId': 'sQK3Yr4Sc_k',
                       'suggestedQuality': 'default'});
                       vid="Photosynthesis: Crash Course Biology #8";

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
function vid10() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': 'UPggkvB9_dc',
                           'suggestedQuality': 'default'});
                           vid="Human Evolution: Crash Course Big History #6";



      }
      else {


        player.loadVideoById({'videoId': 'UPggkvB9_dc',
                       'suggestedQuality': 'default'});
                       vid="Human Evolution: Crash Course Big History #6";

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
function vid11() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': 'tq6be-CZJ3w',
                           'suggestedQuality': 'default'});
                           vid="The Big Bang: Crash Course Big History #1";



      }
      else {


        player.loadVideoById({'videoId': 'tq6be-CZJ3w',
                       'suggestedQuality': 'default'});
                       vid="The Big Bang: Crash Course Big History #1";

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
function vid12() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': 'Fi30zjQhtWY',
                           'suggestedQuality': 'default'});
                           vid="Exploring the Universe: Crash Course Big History #2";



      }
      else {


        player.loadVideoById({'videoId': 'Fi30zjQhtWY',
                       'suggestedQuality': 'default'});
                       vid="Exploring the Universe: Crash Course Big History #2";

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
function vid13() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': 'l26oaHV7D40',
                           'suggestedQuality': 'default'});
                           vid="Programming Basics: Statements and Functions: Crash Course Computer Science #12";



      }
      else {


        player.loadVideoById({'videoId': 'l26oaHV7D40',
                       'suggestedQuality': 'default'});
                       vid="Programming Basics: Statements and Functions: Crash Course Computer Science #12";

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
function vid14() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': 'rL8X2mlNHPM',
                           'suggestedQuality': 'default'});
                           vid="Intro to Algorithms: Crash Course Computer Science #13";



      }
      else {


        player.loadVideoById({'videoId': 'rL8X2mlNHPM',
                       'suggestedQuality': 'default'});
                       vid="Intro to Algorithms: Crash Course Computer Science #13";

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
function vid15() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': '7kb1VT0J3DE',
                           'suggestedQuality': 'default'});
                           vid="Quantum Mechanics - Part 1: Crash Course Physics #43";



      }
      else {


        player.loadVideoById({'videoId': '7kb1VT0J3DE',
                       'suggestedQuality': 'default'});
                       vid="Quantum Mechanics - Part 1: Crash Course Physics #43";

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
function vid16() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': 'rrBPoVOawFc',
                           'suggestedQuality': 'default'});
                           vid="Stop Waiting for Life to Happen | Peter Sage | TED Talks";



      }
      else {


        player.loadVideoById({'videoId': 'rrBPoVOawFc',
                       'suggestedQuality': 'default'});
                       vid="Stop Waiting for Life to Happen | Peter Sage | TED Talks";

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
function vid17() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': '_YZVvPqq3As',
                           'suggestedQuality': 'default'});
                           vid="Bill Gates 7 Rules of Success | Microsoft Founder | Entrepreneur | Motivational Speech";



      }
      else {


        player.loadVideoById({'videoId': '_YZVvPqq3As',
                       'suggestedQuality': 'default'});
                       vid="Bill Gates 7 Rules of Success | Microsoft Founder | Entrepreneur | Motivational Speech";

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
function vid18() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': 'V7vpw4AH8QQ',
                           'suggestedQuality': 'default'});
                           vid="Time Travel: Einstein's big idea (Theory of Relativity)";



      }
      else {


        player.loadVideoById({'videoId': 'V7vpw4AH8QQ',
                       'suggestedQuality': 'default'});
                       vid="Time Travel: Einstein's big idea (Theory of Relativity)";

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
function vid19() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': '0NbBjNiw4tk',
                           'suggestedQuality': 'default'});
                           vid="Michio Kaku: The Universe in a Nutshell";



      }
      else {


        player.loadVideoById({'videoId': '0NbBjNiw4tk',
                       'suggestedQuality': 'default'});
                       vid="Michio Kaku: The Universe in a Nutshell";

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
function vid20() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': '30KfPtHec4s',
                           'suggestedQuality': 'default'});
                           vid="Einstein's Theory Of Relativity Made Easy";



      }
      else {


        player.loadVideoById({'videoId': '30KfPtHec4s',
                       'suggestedQuality': 'default'});
                       vid="Einstein's Theory Of Relativity Made Easy";

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
function vid21() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': '60Qz051rD_w',
                           'suggestedQuality': 'default'});
                           vid="Semiconductor introduction";



      }
      else {


        player.loadVideoById({'videoId': '60Qz051rD_w',
                       'suggestedQuality': 'default'});
                       vid="Semiconductor introduction";

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
function vid22() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': 'MSKYeWfsNO0',
                           'suggestedQuality': 'default'});
                           vid="Signal-to-Noise Ratio";



      }
      else {


        player.loadVideoById({'videoId': 'MSKYeWfsNO0',
                       'suggestedQuality': 'default'});
                       vid="Signal-to-Noise Ratio";

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
function vid23() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': 'MlF1mf6s94w',
                           'suggestedQuality': 'default'});
                           vid="How To Make A Web App In 7 Minutes";



      }
      else {


        player.loadVideoById({'videoId': 'MlF1mf6s94w',
                       'suggestedQuality': 'default'});
                       vid="How To Make A Web App In 7 Minutes";

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
function vid24() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': 'ToEFkUxFURg',
                           'suggestedQuality': 'default'});
                           vid="1. Introduction and Basic Concepts";



      }
      else {


        player.loadVideoById({'videoId': 'ToEFkUxFURg',
                       'suggestedQuality': 'default'});
                       vid="1. Introduction and Basic Concepts";

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
function vid25() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': '7FYHt5XviKc',
                           'suggestedQuality': 'default'});
                           vid="EEVblog #600 - OpAmps Tutorial - What is an Operational Amplifier?";



      }
      else {


        player.loadVideoById({'videoId': '7FYHt5XviKc',
                       'suggestedQuality': 'default'});
                       vid="EEVblog #600 - OpAmps Tutorial - What is an Operational Amplifier?";

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
function vid26() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': 'vEROU2XtPR8',
                           'suggestedQuality': 'default'});
                           vid="JavaScript Fundamentals For Beginners";



      }
      else {


        player.loadVideoById({'videoId': 'vEROU2XtPR8',
                       'suggestedQuality': 'default'});
                       vid="JavaScript Fundamentals For Beginners";

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
function vid27() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': '41IO4Qe5Jzw',
                           'suggestedQuality': 'default'});
                           vid="Raspberry Pi Robotics #1: GPIO Control";



      }
      else {


        player.loadVideoById({'videoId': '41IO4Qe5Jzw',
                       'suggestedQuality': 'default'});
                       vid="Raspberry Pi Robotics #1: GPIO Control";

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
function vid28() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': 'cosVBV96E2g',
                           'suggestedQuality': 'default'});
                           vid="How to Perform CPR video";



      }
      else {


        player.loadVideoById({'videoId': 'cosVBV96E2g',
                       'suggestedQuality': 'default'});
                       vid="How to Perform CPR video";

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
function vid29() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': 'hmReJCupbNU',
                           'suggestedQuality': 'default'});
                           vid="4. Divide and Conquer: van Emde Boas Trees";



      }
      else {


        player.loadVideoById({'videoId': 'hmReJCupbNU',
                       'suggestedQuality': 'default'});
                       vid="4. Divide and Conquer: van Emde Boas Trees";

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
function vid30() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': 'Tw1k46ywN6E',
                           'suggestedQuality': 'default'});
                           vid="10. Dynamic Programming: Advanced DP";



      }
      else {


        player.loadVideoById({'videoId': 'Tw1k46ywN6E',
                       'suggestedQuality': 'default'});
                       vid="10. Dynamic Programming: Advanced DP";

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
function vid31() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': 'tKwnms5iRBU',
                           'suggestedQuality': 'default'});
                           vid="12. Greedy Algorithms: Minimum Spanning Tree";



      }
      else {


        player.loadVideoById({'videoId': 'tKwnms5iRBU',
                       'suggestedQuality': 'default'});
                       vid="12. Greedy Algorithms: Minimum Spanning Tree";

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
function vid32() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': 'KqqOXndnvic',
                           'suggestedQuality': 'default'});
                           vid="21. Cryptography: Hash Functions";



      }
      else {


        player.loadVideoById({'videoId': 'KqqOXndnvic',
                       'suggestedQuality': 'default'});
                       vid="21. Cryptography: Hash Functions";

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
function vid33() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': '6poHQ2h00ZA',
                           'suggestedQuality': 'default'});
                           vid="Evidence of a Ninth Planet";



      }
      else {


        player.loadVideoById({'videoId': '6poHQ2h00ZA',
                       'suggestedQuality': 'default'});
                       vid="Evidence of a Ninth Planet";

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
function vid34() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': 'XUQAIldqPww',
                           'suggestedQuality': 'default'});
                           vid="Introductory Astronomy: Parallax  the Parsec and Distances";



      }
      else {


        player.loadVideoById({'videoId': 'XUQAIldqPww',
                       'suggestedQuality': 'default'});
                       vid="Introductory Astronomy: Parallax the Parsec and Distances";

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
function vid35() {
      if(counter == 0){
          counter =1;


            player.loadVideoById({'videoId': 'PXHczjOg06w',
                           'suggestedQuality': 'default'});
                           vid="Boaz Almog levitates a superconductor";



      }
      else {


        player.loadVideoById({'videoId': 'PXHczjOg06w',
                       'suggestedQuality': 'default'});
                       vid="Boaz Almog levitates a superconductor";

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
