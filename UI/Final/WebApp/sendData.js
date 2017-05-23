/*

Module: SendData

Description: Sends the data via AJAX to the appropriate end point

Owner: Anson

*/

function sendData(){
  str = JSON.stringify(dict, null, 4);
    console.log(str); // Logs output to dev tools console.
    //document.getElementById('test').innerHTML = (str); // Displays output using window.alert()

  $.ajax({
      url: "http://webinterfaceimperialemotion.azurewebsites.net/",
      type: "POST",
      data: str,
      dataType: "json",
      success: function (result) {
          switch (result) {
              case true:
                  processResponse(result);
                  break;
              default:
                  resultDiv.html(result);
          }
      },
      error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
      }
  });
}
