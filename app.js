var selectedRow = null;

function onFormSubmit() {
    var formdata = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formdata);
    }
    else {
        updateRecord(formdata);
    }
    resetForm();
}

function readFormData() {
    var formdata = {};
    formdata["fname"] = document.getElementById("fname").value;
    formdata["empcode"] = document.getElementById("empcode").value;
    formdata["salary"] = document.getElementById("salary").value;
    formdata["city"] = document.getElementById("city").value;
    return formdata;

}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empcode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onclick="onEdit(this)">Edit</a>
                     <a onclick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fname").value = "";
    document.getElementById("empcode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empcode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formdata) {
    selectedRow.cells[0].innerHTML = formdata.fname;
    selectedRow.cells[1].innerHTML = formdata.empcode;
    selectedRow.cells[2].innerHTML = formdata.salary;
    selectedRow.cells[3].innerHTML = formdata.city;
}

function onDelete(td) {
    if (confirm('Are you sure you want to delete this entry?')) {
        Row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(Row.rowIndex);
        resetForm();
    }
}


