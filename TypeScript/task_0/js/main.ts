interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

let student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 22,
  location: 'Los Angeles',
};

let studentsList: Student[] = [student1, student2];

function createStudentTable(students: Student[]) {
  // Check if table already exists
  const existingTable = document.querySelector('table');
  if (existingTable) {
    existingTable.remove(); // Remove existing table
  }

  // Create table
  const tableElement = document.createElement('table');

  // Create table header
  const headerRow = tableElement.insertRow();
  const firstNameHeader = headerRow.insertCell(0);
  firstNameHeader.textContent = 'First Name';
  const locationHeader = headerRow.insertCell(1);
  locationHeader.textContent = 'Location';

  // Create table rows for each student
  students.forEach(student => {
    const tableRow = tableElement.insertRow();
    const firstNameCell = tableRow.insertCell(0);
    const locationCell = tableRow.insertCell(1);

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });

  // Append table to document body
  document.body.appendChild(tableElement);
}

createStudentTable(studentsList);
