/* Eventos */
document.write('<hr style="margin: 30pt 0pt 0pt;">');
document.write(
  '<p style="margin: 10pt 100pt 0pt; text-align: center; line-height: normal;">'
);
document.write("<i>");
document.write("©[Copyright]");
document.write("</i></p>");
document.write(
  '<p style="margin: 0pt 100pt 10pt; text-align: center;font-weight: bold; line-height: normal;">'
);
document.write("<i>");
document.write("Proyecto final de CoderHouse");
document.write("</i></p>");
document.write("<hr>");

/* Variables */
const nombre = document.querySelector("#nombre");
const precio = document.querySelector("#precio");
const stock = document.querySelector("#stock");

/* Funciones */
function go() {
  if (
    document.form.pswd.value == "1234" &&
    document.form.user.value == "user"
  ) {
    alert("Usuario válido");
    document.form.submit();
  } else {
    alert(
      "Usuario/contraseña incorrectas. Es Usuario: user y Contraseña:1234."
    );
  }
}

function txtAnimated() {
  $("#test").html("Aún no se puede acceder a la recuperación de contraseñas!");
  $("#test").animate({ left: "100px", top: "100px" }, 500);
}

function cerrarSesion() {
  alert("Usted a cerrado sesión");
  window.location.href = "../../index.html";
}

function listProd() {
  Console.log(
    "Nombre del producto: " +
      nombre +
      ", precio: " +
      precio +
      ", stock: " +
      stock
  );
}

var selectedRow = null;
function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow === null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["fullName"] = document.getElementById("fullName").value;
  formData["empCode"] = document.getElementById("empCode").value;
  formData["salary"] = document.getElementById("salary").value;
  formData["city"] = document.getElementById("city").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullName;
  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.empCode;
  var cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.salary;
  var cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.city;
  var cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<a href="#" onClick='onEdit(this)' class="btn btn-warning">Edit</a>
                        <a href="#" onClick='onDelete(this)' class="btn btn-danger">Delete</a>`;
}

function resetForm() {
  document.getElementById("fullName").value = "";
  document.getElementById("empCode").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("city").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
  document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
  document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullName;
  selectedRow.cells[1].innerHTML = formData.empCode;
  selectedRow.cells[2].innerHTML = formData.salary;
  selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
  if (confirm("Are you sure you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
  }
}

/* Objetos */
