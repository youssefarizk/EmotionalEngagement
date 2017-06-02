function checkUsername()
{
  var username = document.getElementById('username');
  var message = document.getElementById('confirmUsername');

  /*This is just to see how it works, remove this lines*/
  message.innerHTML = username.value;
  document.getElementById("send").disabled = true;
  /*********************************************/

 $.ajax({
    url : "check_username.php",// your username checker url
    type : "POST",
    data : {username: username},
    success:  function (response) {
        if (response==0)
        {
              message.innerHTML = "Valid Username";
              document.getElementById("send").disabled = false;
	}
	if (response==1)
	{
              message.innerHTML = "Already Used";
              document.getElementById("send").disabled = true;
   	}


     }
 });
}
