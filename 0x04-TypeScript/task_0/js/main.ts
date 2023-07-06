//define the interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string
};

//create the two students
const Student1: Student = {
    firstName: "Innocent",
    lastName: "Omodiale",
    age: 35,
    location:"Canada"
};

const Student2: Student = {
    firstName: "Chinedu",
    lastName: "Okorie",
    age: 32,
    location:"Nigeria"
};

//create an array containing students
const studentsList: Student[] = [Student1, Student2];

//the table
const table = document.createElement("table");

//the table
const headerRow = document.createElement("tr");
const firstNameHeader = document.createElement("th");
firstNameHeader.textContent = "First Name";
const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Append rows for each student

studentsList.forEach((student) =>{
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});

//append table to document body
document.body.appendChild(table);
