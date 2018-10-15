function add(){
  var table = document.getElementById("students");
  var row = table.insertRow(3);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = document.getElementById("name").value;
  cell2.innerHTML = document.getElementById("surname").value;
  cell3.innerHTML = document.getElementById("faculty").value;
}