/* GET JSON FROM THE WEB, STORE IT TO A VARIABLE AND PASS IT TO HTML

var btn = document.getElementById("btn")
btn.addEventListener("click", function() {

}
)

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://...');
ourRequest.onload=function(){
  var ourData = JSON.parse(ourRequest.responseText);
  renderHTML(ourData);
};

ourRequest.send();

*/
//
// var useer ={};
var dataAcc = "";
var testing = document.getElementById('test');
var dict = [];
var user=document.getElementById('field1');

function onPlayerStateChange(event) {
    if(event.data === 0 ) {
    //  downloadCSV({ filename: "data.csv" });
      str = JSON.stringify(dict, null, 4);
        console.log(str); // Logs output to dev tools console.

        //alert(counter);
       //alert(str);
        //document.getElementById('test').innerHTML = (str); // Displays output using window.alert()
      // $.ajax({
      //     url: "https://projectemotion.azurewebsites.net/",
      //     type: "POST",
      //     data: str,
      //     dataType: "json",
      //     timeout: 10000,
      //     success: function (result) {
      //         switch (result) {
      //             case true:
      //                 processResponse(result);
      //                 break;
      //             default:
      //                 resultDiv.html(result);
      //         }
      //     },
      //     error: function (xhr, ajaxOptions, thrownError) {
      //     alert(xhr.status);
      //     }
      // });
      $.post("https://projectemotion.azurewebsites.net/",
            str,
            function(data, textStatus, jqXHR)
            {
                dict = [];
                // alert(textStatus);
                // alert(data);
            }).fail(function(jqXHR, textStatus, errorThrown)
            {
              dict=[];
                // alert(jqXHR);
                // alert(textStatus);
                // alert(errorThrown);
            });
    }
}


function jsonforname(c){
  var  useer={username:user.value,
                mode:c};

  nam = JSON.stringify(useer, null, 4);
    console.log(nam); // Logs output to dev tools console.

    //alert(counter);
   //alert(nam);

  $.post("https://projectemotion.azurewebsites.net/",
        nam,
        function(data, textStatus, jqXHR)
        {
            useer = [];
            // alert(textStatus);

             //alert(data);

        }).fail(function(jqXHR, textStatus, errorThrown)
        {
          useer = [];
            // alert(jqXHR);
            // alert(textStatus);
            // alert(errorThrown);
        });

}

function convertArrayOfObjectsToCSV(args) {
    var result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data == null || !data.length) {
        return null;
    }

    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function(item) {
        ctr = 0;
        keys.forEach(function(key) {
            if (ctr > 0) result += columnDelimiter;

            result += item[key];
            ctr++;
        });
        result += lineDelimiter;
    });

    return result;
}

function downloadCSV(args) {
    var data, filename, link;

    var csv = convertArrayOfObjectsToCSV({
        data: dict
    });
    if (csv == null) return;

    filename = args.filename || 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
}


function write_rate(valued) {

  dict.push(
            {
                username:user.value,
                movieId:vid,
                rate:valued.value,
                time:player.getCurrentTime(),
                videocompletion:player.getCurrentTime() / player.getDuration(),
                numberofexit: lcounter,
                frequencyofexit: lcounter / player.getCurrentTime(),
                picuri:picURL

            }
          );
  dataAcc += String(player.getCurrentTime())+ ", " +valued.value + "\n";
  g2 = new Dygraph(
    document.getElementById("graphdiv2"),
    "Time, Engagement Level\n" + dataAcc        // options
  );
}
