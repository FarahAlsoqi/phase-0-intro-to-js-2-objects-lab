let employee = {
    name: "S",
    streetAddress:'12 west',
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value,
    };
  }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) { 
    employee.name= "Sam";
    employee.streetAddress= '12 Broadway'
    return{
    ...employee,
    }  
}

function deleteFromEmployeeByKey(employee, key)
{
    let newEmployee = { ...employee };
    delete newEmployee.name;
    return{newEmployee}
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
 let newEmployee = {...destructivelyUpdateEmployeeWithKeyAndValue }; 
 delete employee.name
 {return employee}

 }
