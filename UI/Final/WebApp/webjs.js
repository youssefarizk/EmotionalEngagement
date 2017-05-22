var dataAcc = ""; //carries information for graph
var picURL; //carries picture in base64 format

var testing = document.getElementById('test');

var dict = []; //JSON object to be sent


function write_rate(valued) {
  dict.push({
      username:user,
      movieId:vid,
      rate:valued.value,
      time: player.getCurrentTime(),
      picuri: picURL
  });
  dataAcc += String(player.getCurrentTime())+ ", " +valued.value + "\n";
  g2 = new Dygraph(
    document.getElementById("graphdiv2"),
    "Time, Engagement Level\n" + dataAcc        // options
  );
}
