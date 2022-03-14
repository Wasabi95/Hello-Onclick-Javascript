/*
function x() {
  let name = (document.querySelector("#demo").innerHTML =
    "Hello JavaScript, I'm Andrey, and I want to learn Javascript!!!");
}
document.querySelector("button").addEventListener("click", x);
*/

document.getElementById("btn").onclick = function changeContent() {
  document.querySelector("#demo").innerHTML =
    "Hello JavaScript, I'm Andrey, and I want to learn Javascript!!!";
  document.getElementById("demo").style = "color: purple;";

  document.querySelector("h2").innerHTML = "Let's Study Javascript!!!";
  document.querySelector("body").style = "background-color: black;";
};
