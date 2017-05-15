function myFunction(){
  document.getElementById("video").src="https://www.youtube.com/embed/b88GynnrTWU";
  document.getElementById("showVid2").disabled = true;
  for (i = 1; i<4; i++){
    document.getElementById("showVid"+i).disabled = true;
  }
}
