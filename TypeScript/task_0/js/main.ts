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
// Create table
let table = document.createElement('table');

function createStudentTable(Students: Student[]) {
    const tableElement = document.createElement('table');
  
    Students.forEach(Student => {
      const tableRow = tableElement.insertRow();
      const firstNameCell = tableRow.insertCell(0);
      const locationCell = tableRow.insertCell(1);
  
      firstNameCell.textContent = Student.firstName;
      locationCell.textContent = Student.location;
    });
  
    document.body.appendChild(tableElement);
}
  
createStudentTable(studentsList);