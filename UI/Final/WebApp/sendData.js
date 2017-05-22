/*

Module: SendData

Description: Sends the data via AJAX to the appropriate end point

Owner: Anson

*/

function sendData(){
  str = JSON.stringify(dict, null, 4);
    console.log(str); // Logs output to dev tools console.
    //document.getElementById('test').innerHTML = (str); // Displays output using window.alert()

<<<<<<< HEAD

=======
>>>>>>> 26beb1af5e5c27bc4e07929ddf93c6f2cbb7a200
  $.ajax({
      url: "https://requestb.in/13a3vxu1",
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
<<<<<<< HEAD
      alert(xhr.status);
      alert(thrownError);
=======
        alert(xhr.status);
        alert(thrownError);
>>>>>>> 26beb1af5e5c27bc4e07929ddf93c6f2cbb7a200
      }
  });
}
