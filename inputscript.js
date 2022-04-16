var slider = document.getElementById("myRangeHtml");
var output = document.getElementById("demoHtml");
output.innerHTML = slider.value + "%";
      
slider.oninput = function() {
output.innerHTML = this.value + "%";
}

var slider2 = document.getElementById("myRangeCss");
var output2 = document.getElementById("demoCss");
output2.innerHTML = slider.value + "%";
  
slider2.oninput = function() {
output2.innerHTML = this.value + "%";
}