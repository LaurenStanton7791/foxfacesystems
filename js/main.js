function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function resize(){
  var b = document.getElementById("bars");
  if (b.style.display === "none")
  {
    var x = document.getElementById("myLinks");
    x.style.display = "flex";
  }
}
