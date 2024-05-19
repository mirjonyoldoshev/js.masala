// script.js

// Yangi o'quvchi qo'shish uchun form
const form = document.getElementById("student-form");
const studentList = document.getElementById("student-list");

// Avvaldan mavjud o'quvchilar ro'yxati
let students = [
  { name: "ibrohim", surname: "rustamov", age: 19 },
  { name: "jamshid ", surname: "turdiyev", age: 22 },
  { name: "mirjon", surname: "Y0ldashev", age: 20 },
];


function displayStudents() {
  studentList.innerHTML = "";
  students.forEach((student) => {
    const studentElement = createStudentElement(student);
    studentList.appendChild(studentElement);
  });
}

// Yangi o'quvchi qo'shish
function addStudent(event) {
  event.preventDefault();
  const nameInput = document.getElementById("name");
  const surnameInput = document.getElementById("surname");
  const ageInput = document.getElementById("age");

  const newStudent = {
    name: nameInput.value,
    surname: surnameInput.value,
    age: parseInt(ageInput.value),
  };

  students.push(newStudent);
  displayStudents();

  nameInput.value = "";
  surnameInput.value = "";
  ageInput.value = "";
}

// O'quvchini o'chirish
function deleteStudent(student) {
  const index = students.findIndex(
    (s) => s.name === student.name && s.surname === student.surname
  );
  if (index !== -1) {
    students.splice(index, 1);
    displayStudents();
  }
}

// O'quvchi elementini yaratish
function createStudentElement(student) {
  const studentElement = document.createElement("div");
  studentElement.classList.add("student");

  const nameElement = document.createElement("p");
  nameElement.textContent = `${student.name} ${student.surname}`;

  const ageElement = document.createElement("p");
  ageElement.textContent = `Yoshi: ${student.age}`;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.textContent = "O'chirish";
  deleteButton.addEventListener("click", () => deleteStudent(student));

  studentElement.appendChild(nameElement);
  studentElement.appendChild(ageElement);
  studentElement.appendChild(deleteButton);

  return studentElement;
}


form.addEventListener("submit", addStudent);


displayStudents();
