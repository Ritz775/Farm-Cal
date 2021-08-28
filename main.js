function cal() {
  number_1 = Number(document.getElementById("input").value);

  var area = number_1 * number_1;
  var perimeter = number_1 * 4;

  document.getElementById("lbl").innerHTML = area;
  document.getElementById("fence").innerHTML = perimeter;
}
