
(function() {
  // The width and height of the captured photo. We will set the
  // width to the value defined here, but the height will be
  // calculated based on the aspect ratio of the input stream.

  var width1 = 320;    // We will scale the photo width to this
  var height1 = 0;     // This will be computed based on the input stream

  // |streaming| indicates whether or not we're currently streaming
  // video from the camera. Obviously, we start at false.

  var streaming = false;

  // The various HTML elements we need to configure or control. These
  // will be set by the startup() function.

  var video = null;
  var canvas = null;
  var photo = null;


  function startup() {
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    photo = document.getElementById('photo');

    var objbutton1 = document.getElementById('objButton1');
    var objbutton2 = document.getElementById('objButton2');
    var objbutton3 = document.getElementById('objButton3');
    var objbutton4 = document.getElementById('objButton4');
    var objbutton5 = document.getElementById('objButton5');
    var video1 = document.getElementById('video1');
    var video2 = document.getElementById('video2');
    var video3 = document.getElementById('video3');
    var video4 = document.getElementById('video4');
    var video5 = document.getElementById('video5');
    var video6 = document.getElementById('video6');
    var video7 = document.getElementById('video7');
    var video8 = document.getElementById('video8');
    var video9 = document.getElementById('video9');
    var video10 = document.getElementById('video10');
    var video11 = document.getElementById('video11');
    var video12 = document.getElementById('video12');
    var video13 = document.getElementById('video13');
    var video14 = document.getElementById('video14');
    var video15 = document.getElementById('video15');
    var video16 = document.getElementById('video16');
    var video17 = document.getElementById('video17');
    var video18 = document.getElementById('video18');
    var video19 = document.getElementById('video19');
    var video20 = document.getElementById('video20');
    var video21 = document.getElementById('video21');
    var video22 = document.getElementById('video22');
    var video23 = document.getElementById('video23');
    var video24 = document.getElementById('video24');
    var video25 = document.getElementById('video25');
    var video26 = document.getElementById('video26');
    var video27 = document.getElementById('video27');
    var video28 = document.getElementById('video28');
    var video29 = document.getElementById('video29');
    var video30 = document.getElementById('video30');
    var video31 = document.getElementById('video31');
    var video32 = document.getElementById('video32');
    var video33 = document.getElementById('video33');
    var video34 = document.getElementById('video34');
    var video35 = document.getElementById('video35');


    navigator.getMedia = ( navigator.getUserMedia ||
                           navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia ||
                           navigator.msGetUserMedia);

    navigator.getMedia(
      {
        video: true,
        audio: false
      },
      function(stream) {
        if (navigator.mozGetUserMedia) {
          video.mozSrcObject = stream;
        } else {
          var vendorURL = window.URL || window.webkitURL;
          video.src = vendorURL.createObjectURL(stream);
        }
        video.play();
      },
      function(err) {
        console.log("An error occured! " + err);
      }
    );

    video.addEventListener('canplay', function(ev){
      if (!streaming) {
        height1 = video.videoHeight / (video.videoWidth/width1);

        // Firefox currently has a bug where the height can't be read from
        // the video, so we will make assumptions if this happens.

        if (isNaN(height1)) {
          height1 = width1 / (4/3);
        }

        video.setAttribute('width', width1);
        video.setAttribute('height', height1);
        canvas.setAttribute('width', width1);
        canvas.setAttribute('height', height1);
        streaming = true;
      }
    }, false);
// var counter = 1;
//     document.addEventListener('mouseover', function(ev){
// counter = counter +1;
// ev.preventDefault();
//     }, false);

objbutton1.addEventListener('click', function(ev){
write_rate(objbutton1);
takepicture();
ev.preventDefault();
g2 = new Dygraph(
  document.getElementById("graphdiv2"),
  "Time, Engagement Level\n" +
  dataAcc        // options
);
}, false);

objbutton2.addEventListener('click', function(ev){
write_rate(objbutton2);
takepicture();
ev.preventDefault();
g2 = new Dygraph(
  document.getElementById("graphdiv2"),
  "Time, Engagement Level\n" +
  dataAcc        // options
);
}, false);

objbutton3.addEventListener('click', function(ev){
write_rate(objbutton3);
takepicture();
ev.preventDefault();
g2 = new Dygraph(
  document.getElementById("graphdiv2"),
  "Time, Engagement Level\n" +
  dataAcc        // options
);
}, false);

objbutton4.addEventListener('click', function(ev){
write_rate(objbutton4);
takepicture();
ev.preventDefault();
g2 = new Dygraph(
  document.getElementById("graphdiv2"),
  "Time, Engagement Level\n" +
  dataAcc        // options
);
}, false);

objbutton5.addEventListener('click', function(ev){
write_rate(objbutton5);
takepicture();
ev.preventDefault();
g2 = new Dygraph(
  document.getElementById("graphdiv2"),
  "Time, Engagement Level\n" +
  dataAcc        // options
);
}, false);



      video1.addEventListener('click', function(ev){
        takepicture();
        write_rate(video1);
        ev.preventDefault();
        g2 = new Dygraph(
        document.getElementById("graphdiv2"),
        "Time, Engagement Level\n" +
        dataAcc        // options
      );
    }, false);
    video2.addEventListener('click', function(ev){
      takepicture();
      write_rate(video2);
      ev.preventDefault();
      g2 = new Dygraph(
      document.getElementById("graphdiv2"),
      "Time, Engagement Level\n" +
      dataAcc        // options
    );
  }, false);
  video3.addEventListener('click', function(ev){
    takepicture();
    write_rate(video3);
    ev.preventDefault();
    g2 = new Dygraph(
    document.getElementById("graphdiv2"),
    "Time, Engagement Level\n" +
    dataAcc        // options
  );
}, false);
video4.addEventListener('click', function(ev){
  takepicture();
  write_rate(video4);
  ev.preventDefault();
  g2 = new Dygraph(
  document.getElementById("graphdiv2"),
  "Time, Engagement Level\n" +
  dataAcc        // options
);
}, false);
video5.addEventListener('click', function(ev){
  takepicture();
  write_rate(video5);
  ev.preventDefault();
  g2 = new Dygraph(
  document.getElementById("graphdiv2"),
  "Time, Engagement Level\n" +
  dataAcc        // options
);
}, false);
video6.addEventListener('click', function(ev){
  takepicture();
  write_rate(video6);
  ev.preventDefault();
  g2 = new Dygraph(
  document.getElementById("graphdiv2"),
  "Time, Engagement Level\n" +
  dataAcc        // options
);
}, false);
video7.addEventListener('click', function(ev){
takepicture();
write_rate(video7);
ev.preventDefault();
g2 = new Dygraph(
document.getElementById("graphdiv2"),
"Time, Engagement Level\n" +
dataAcc        // options
);
}, false);
video8.addEventListener('click', function(ev){
takepicture();
write_rate(video8);
ev.preventDefault();
g2 = new Dygraph(
document.getElementById("graphdiv2"),
"Time, Engagement Level\n" +
dataAcc        // options
);
}, false);
video9.addEventListener('click', function(ev){
takepicture();
write_rate(video9);
ev.preventDefault();
g2 = new Dygraph(
document.getElementById("graphdiv2"),
"Time, Engagement Level\n" +
dataAcc        // options
);
}, false);
video10.addEventListener('click', function(ev){
takepicture();
write_rate(video10);
ev.preventDefault();
g2 = new Dygraph(
document.getElementById("graphdiv2"),
"Time, Engagement Level\n" +
dataAcc        // options
);
}, false);
video11.addEventListener('click', function(ev){
  takepicture();
  write_rate(video11);
  ev.preventDefault();
  g2 = new Dygraph(
  document.getElementById("graphdiv2"),
  "Time, Engagement Level\n" +
  dataAcc        // options
);
}, false);
video12.addEventListener('click', function(ev){
takepicture();
write_rate(video12);
ev.preventDefault();
g2 = new Dygraph(
document.getElementById("graphdiv2"),
"Time, Engagement Level\n" +
dataAcc        // options
);
}, false);
video13.addEventListener('click', function(ev){
takepicture();
write_rate(video13);
ev.preventDefault();
g2 = new Dygraph(
document.getElementById("graphdiv2"),
"Time, Engagement Level\n" +
dataAcc        // options
);
}, false);
video14.addEventListener('click', function(ev){
takepicture();
write_rate(video14);
ev.preventDefault();
g2 = new Dygraph(
document.getElementById("graphdiv2"),
"Time, Engagement Level\n" +
dataAcc        // options
);
}, false);
video15.addEventListener('click', function(ev){
takepicture();
write_rate(video15);
ev.preventDefault();
g2 = new Dygraph(
document.getElementById("graphdiv2"),
"Time, Engagement Level\n" +
dataAcc        // options
);
}, false);
video16.addEventListener('click', function(ev){
  takepicture();
  write_rate(video16);
  ev.preventDefault();
  g2 = new Dygraph(
  document.getElementById("graphdiv2"),
  "Time, Engagement Level\n" +
  dataAcc        // options
);
}, false);
video17.addEventListener('click', function(ev){
takepicture();
write_rate(video17);
ev.preventDefault();
g2 = new Dygraph(
document.getElementById("graphdiv2"),
"Time, Engagement Level\n" +
dataAcc        // options
);
}, false);
video18.addEventListener('click', function(ev){
takepicture();
write_rate(video18);
ev.preventDefault();
g2 = new Dygraph(
document.getElementById("graphdiv2"),
"Time, Engagement Level\n" +
dataAcc        // options
);
}, false);
video19.addEventListener('click', function(ev){
takepicture();
write_rate(video19);
ev.preventDefault();
g2 = new Dygraph(
document.getElementById("graphdiv2"),
"Time, Engagement Level\n" +
dataAcc        // options
);
}, false);
video20.addEventListener('click', function(ev){
takepicture();
write_rate(video20);
ev.preventDefault();
g2 = new Dygraph(
document.getElementById("graphdiv2"),
"Time, Engagement Level\n" +
dataAcc        // options
);
}, false);
video21.addEventListener('click', function(ev){
  takepicture();
  write_rate(video21);
  ev.preventDefault();
  g2 = new Dygraph(
  document.getElementById("graphdiv2"),
  "Time, Engagement Level\n" +
  dataAcc        // options
);
}, false);
video22.addEventListener('click', function(ev){
takepicture();
write_rate(video22);
ev.preventDefault();
g2 = new Dygraph(
document.getElementById("graphdiv2"),
"Time, Engagement Level\n" +
dataAcc        // options
);
}, false);
video23.addEventListener('click', function(ev){
takepicture();
write_rate(video23);
ev.preventDefault();
g2 = new Dygraph(
document.getElementById("graphdiv2"),
"Time, Engagement Level\n" +
dataAcc        // options
);
}, false);
video24.addEventListener('click', function(ev){
takepicture();
write_rate(video24);
ev.preventDefault();
g2 = new Dygraph(
document.getElementById("graphdiv2"),
"Time, Engagement Level\n" +
dataAcc        // options
);
}, false);
video25.addEventListener('click', function(ev){
takepicture();
write_rate(video25);
ev.preventDefault();
g2 = new Dygraph(
document.getElementById("graphdiv2"),
"Time, Engagement Level\n" +
dataAcc        // options
);
}, false);
video26.addEventListener('click', function(ev){
  takepicture();
  write_rate(video26);
  ev.preventDefault();
  g2 = new Dygraph(
  document.getElementById("graphdiv2"),
  "Time, Engagement Level\n" +
  dataAcc        // options
);
}, false);
video27.addEventListener('click', function(ev){
takepicture();
write_rate(video27);
ev.preventDefault();
g2 = new Dygraph(
document.getElementById("graphdiv2"),
"Time, Engagement Level\n" +
dataAcc        // options
);
}, false);
video28.addEventListener('click', function(ev){
takepicture();
write_rate(video28);
ev.preventDefault();
g2 = new Dygraph(
document.getElementById("graphdiv2"),
"Time, Engagement Level\n" +
dataAcc        // options
);
}, false);
video29.addEventListener('click', function(ev){
takepicture();
write_rate(video29);
ev.preventDefault();
g2 = new Dygraph(
document.getElementById("graphdiv2"),
"Time, Engagement Level\n" +
dataAcc        // options
);
}, false);
video30.addEventListener('click', function(ev){
takepicture();
write_rate(video30);
ev.preventDefault();
g2 = new Dygraph(
document.getElementById("graphdiv2"),
"Time, Engagement Level\n" +
dataAcc        // options
);
}, false);
video31.addEventListener('click', function(ev){
  takepicture();
  write_rate(video31);
  ev.preventDefault();
  g2 = new Dygraph(
  document.getElementById("graphdiv2"),
  "Time, Engagement Level\n" +
  dataAcc        // options
);
}, false);
video32.addEventListener('click', function(ev){
takepicture();
write_rate(video32);
ev.preventDefault();
g2 = new Dygraph(
document.getElementById("graphdiv2"),
"Time, Engagement Level\n" +
dataAcc        // options
);
}, false);
video33.addEventListener('click', function(ev){
takepicture();
write_rate(video33);
ev.preventDefault();
g2 = new Dygraph(
document.getElementById("graphdiv2"),
"Time, Engagement Level\n" +
dataAcc        // options
);
}, false);
video34.addEventListener('click', function(ev){
takepicture();
write_rate(video34);
ev.preventDefault();
g2 = new Dygraph(
document.getElementById("graphdiv2"),
"Time, Engagement Level\n" +
dataAcc        // options
);
}, false);
video35.addEventListener('click', function(ev){
takepicture();
write_rate(video35);
ev.preventDefault();
g2 = new Dygraph(
document.getElementById("graphdiv2"),
"Time, Engagement Level\n" +
dataAcc        // options
);
}, false);



    clearphoto();
  }



  function clearphoto() {
    var context = canvas.getContext('2d');
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    var data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
  }

  // Capture a photo by fetching the current contents of the video
  // and drawing it into a canvas, then converting that to a PNG
  // format data URL. By drawing it on an offscreen canvas and then
  // drawing that to the screen, we can change its size and/or apply
  // other changes before drawing it.

  function takepicture() {
    var context = canvas.getContext('2d');
    if (width1 && height1) {
      canvas.width = width1;
      canvas.height = height1;
      context.drawImage(video, 0, 0, width1, height1);

      var data = canvas.toDataURL('image/png');
      picURL = data;
      photo.setAttribute('src', data);
    } else {
      clearphoto();
    }

  }


  // Set up our event listener to run the startup process
  // once loading is complete.
  window.addEventListener('load', startup, false);
})();
