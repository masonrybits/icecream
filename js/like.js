var txt;

var r = confirm("Do you like vegan ice cream?");
if (r == true) {
  txt = "We have vegan ice cream!";
} else {
  txt = "We have non-vegan ice cream!";
}
document.write('<h3>' + txt + '</h3>')