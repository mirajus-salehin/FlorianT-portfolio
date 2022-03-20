filterSelection("All");

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("col-md-4");
  if (c == "All") c = "";
  for(i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }

}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element,name){
  var i,arr1,arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for(i=0;i<arr2.length;i++){
    while(arr1.indexOf(arr2[i])>-1){
      arr1.splice(arr1.indexOf(arr2[i]),1);
    }
  }
  element.className = arr1.join(" ");
}

var button_container = document.getElementById("portfolio-button-container");
var buttons = button_container.getElementsByClassName("btn btn-outline-secondary");
console.log(buttons.length)
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

