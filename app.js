function onFormSubmit(){
    var formdata= readFormData();
    insertNewRecord(formdata);
    resetForm();
}

function readFormData(){
    var formdata={};
    formdata["fname"]=document.getElementById("fname").value;
    formdata["empcode"]=document.getElementById("empcode").value;
    formdata["salary"]=document.getElementById("salary").value;
    formdata["city"]=document.getElementById("city").value;
    return formdata;

}

function insertNewRecord(data){
    var table=document.getElementById("employeeList").getElementsByTagName("tbody")[0];
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.fname;
    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.empcode;
    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.salary;
    cell4=newRow.insertCell(3);
    cell4.innerHTML=data.city;
    cell5=newRow.insertCell(4);
    cell5=innerHTML=`<a>Edit</a>
                     <a>Delete</a>`;
}


