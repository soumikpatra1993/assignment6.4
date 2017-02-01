var employee = { 
	name: "Oceanic", 
	age: 24,
	salary: 30000, 
	address: { 
		city: "Bangalore", 
		state: "Karnataka", 
		pin: 560068 },
	}
	 
console.log("The name is "+ employee['name'] + ", age  is "+ employee['age'] +", Salary is " + employee['salary'] );
console.log("Address: City " + employee.address.city);
console.log("State " + employee.address.state);
console.log("Pincode " + employee.address.pin);