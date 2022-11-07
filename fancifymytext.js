function test(){
  alert("Hello, world!");
}

function bigger() {
  var text = document.getElementById("textOriginal");
  text.style.fontSize="24pt";
}

function fancify() {
  var text = document.getElementById("textOriginal");
  alert("The text will be fancified");
  text.style.fontWeight = "bold";
  text.style.color = "blue";
  text.style.textDecoration = "underline";

}

function boring() {
  var text = document.getElementById("textOriginal");
  alert("The text will be boring again :(")
  text.style.fontWeight = "normal";
  text.style.color = "black";
  text.style.textDecoration = "none";

}
function moo() {
  var text = document.getElementById("textOriginal");
  text.style.textTransform="uppercase";
  var parts = text.value.split(".");
  text.value = parts.join("-Moo");

}
