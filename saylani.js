// script.js

const form = document.getElementById("studentForm");
const studentData = document.getElementById("studentData");

let students = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Inputs
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const course = document.getElementById("course").value;
  const message = document.getElementById("message").value.trim();

  const genderInput = document.querySelector('input[name="gender"]:checked');

  const hobbiesInput = document.querySelectorAll(".hobby:checked");

  let hobbies = [];

  hobbiesInput.forEach((hobby) => {
    hobbies.push(hobby.value);
  });

  // Error Fields
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";
  document.getElementById("confirmPasswordError").innerText = "";
  document.getElementById("phoneError").innerText = "";
  document.getElementById("genderError").innerText = "";
  document.getElementById("courseError").innerText = "";

  let isValid = true;

  // Name Validation
  if (fullName === "") {
    document.getElementById("nameError").innerText = "Full Name is required";
    isValid = false;
  }

  // Email Validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!email.match(emailPattern)) {
    document.getElementById("emailError").innerText = "Enter valid email";
    isValid = false;
  }

  // Password Validation
  if (password.length < 6) {
    document.getElementById("passwordError").innerText =
      "Password must be at least 6 characters";
    isValid = false;
  }

  // Confirm Password
  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").innerText =
      "Passwords do not match";
    isValid = false;
  }

  // Phone Validation
  const phonePattern = /^[0-9]{11}$/;

  if (!phone.match(phonePattern)) {
    document.getElementById("phoneError").innerText =
      "Enter valid 11-digit phone number";
    isValid = false;
  }

  // Gender Validation
  if (!genderInput) {
    document.getElementById("genderError").innerText =
      "Select gender";
    isValid = false;
  }

  // Course Validation
  if (course === "") {
    document.getElementById("courseError").innerText =
      "Select a course";
    isValid = false;
  }

  // Stop Submission
  if (!isValid) {
    return;
  }

  // Student Object
  const student = {
    fullName,
    email,
    phone,
    gender: genderInput.value,
    course,
    hobbies,
    message,
  };

  // Store in Array
  students.push(student);

  // Display Data
  displayStudents();

  // Reset Form
  form.reset();
});

// Display Function
function displayStudents() {
  studentData.innerHTML = "";

  students.forEach((student) => {
    studentData.innerHTML += `
      <div class="student-card">
        <p><strong>Name:</strong> ${student.fullName}</p>
        <p><strong>Email:</strong> ${student.email}</p>
        <p><strong>Phone:</strong> ${student.phone}</p>
        <p><strong>Gender:</strong> ${student.gender}</p>
        <p><strong>Course:</strong> ${student.course}</p>
        <p><strong>Hobbies:</strong> ${student.hobbies.join(", ")}</p>
        <p><strong>Message:</strong> ${student.message}</p>
      </div>
    `;
  });
}