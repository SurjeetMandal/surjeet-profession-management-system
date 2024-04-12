let employees = [];
let employeesId = 0;

function onClick(){
    let name = document.querySelector("#name").value;
    let profession = document.querySelector("#Profession").value;
    let age = document.querySelector("#age").value;
    let input = document.querySelector("input");

    employeesId++

    let employee = {
        name,
        profession,
        age : parseInt(age)
    };

    if(name === "" || profession === "" || age === ""){
        alert = document.querySelector(".alert")

        let error = document.createElement("p");
        error.classList.add('error');
        error.innerHTML = `Error : Please Make sure All the fields are filled before adding in an employee`;
        alert.appendChild(error);
        
        setTimeout(function () {
            alert.removeChild(error);
        }, 2000);
    }
    else{
        employees.push(employee);

        let success = document.createElement("p");
        success.classList.add('success');
        success.innerHTML = `Success : Employee Added!`;
        alert.appendChild(success);
        
        setTimeout(function () {
            alert.removeChild(success);
        }, 2000);  


        displayEmployees();
    }
}


function displayEmployees() {
    const employeeInfo = document.querySelector('.employee_info');
    employeeInfo.innerHTML = '';


    employees.forEach((employee, index) => {
        const employeeDiv = document.createElement('div');
        employeeDiv.classList.add('employee');
        const employeePara = document.createElement('div');
        employeePara.classList.add('employee_para');
        employeePara.innerHTML = `
            <p class="number">${index + 1}.</p>
            <p class="name">Name : ${employee.name}</p>
            <p class="profession">Profession : ${employee.profession}</p>
            <p class="age">${employee.age}</p>
        `;
        const deleteBtnDiv = document.createElement('div');
        deleteBtnDiv.classList.add('delete_btn');
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.textContent = 'Delete User';
        deleteBtn.addEventListener('click', () => deleteEmployee(index));
        deleteBtnDiv.appendChild(deleteBtn);
        employeeDiv.appendChild(employeePara);
        employeeDiv.appendChild(deleteBtnDiv);
        employeeInfo.appendChild(employeeDiv);

        if(employees.length > 0){
            let fade = document.querySelector(".fade");
            fade.style.display = `none`;
        }
    });
}


function deleteEmployee(index) {
    employees.splice(index, 1);
    displayEmployees();
}





    