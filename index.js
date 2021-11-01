const employee = {
    name: ["Wanda"],
    streetAddress: ["Wilder ave"],
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
   return {
       ...employee,
       [key]:value,
   }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, object, key) {
    const newEmployee = {...employee};
    newEmployee[object] = key;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, object, key) {
    employee[object] = key;
    return employee;
}