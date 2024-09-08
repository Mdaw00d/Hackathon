"use strict";
// // Interface for the form data
// interface ResumeData {
//   firstName: string;
//   surname: string;
//   profession: string;
//   city: string;
//   country: string;
//   phone: string;
//   email: string;
//   jobTitle: string;
//   company: string;
//   jobDesc: string;
//   jobLocation: string;
//   startMonth: string;
//   startYear: string;
//   endMonth: string;
//   endYear: string;
//   educationLevel: string;
//   institute: string;
//   fieldOfStudy: string;
//   completionYear: string;
//   skills: string[];
// Function to gather form data
function getFormData() {
    const firstName = document.getElementById("firstName").value;
    const surname = document.getElementById("surname").value;
    const profession = document.getElementById("profession").value;
    const city = document.getElementById("city").value;
    const country = document.getElementById("country").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const jobTitle = document.getElementById("job-title").value;
    const company = document.getElementById("company").value;
    const jobDesc = document.getElementById("job-desc").value;
    const jobLocation = document.getElementById("job-location").value;
    const startMonth = document.getElementById("start-month").value;
    const startYear = document.getElementById("start-year").value;
    const endMonth = document.getElementById("end-month").value;
    const endYear = document.getElementById("end-year").value;
    const educationLevel = document.getElementById("education-level").value;
    const institute = document.getElementById("institute").value;
    const fieldOfStudy = document.getElementById("field-of-study").value;
    const completionYear = document.getElementById("completion-year").value;
    const skillElements = document.querySelectorAll('input[name="skills"]:checked');
    const skills = Array.from(skillElements).map(skill => skill.value);
    return {
        firstName,
        surname,
        profession,
        city,
        country,
        phone,
        email,
        jobTitle,
        company,
        jobDesc,
        jobLocation,
        startMonth,
        startYear,
        endMonth,
        endYear,
        educationLevel,
        institute,
        fieldOfStudy,
        completionYear,
        skills,
    };
}
// Function to display the resume
function displayResume(data) {
    const resumeContainer = document.createElement("div");
    resumeContainer.classList.add("resume-container");
    resumeContainer.innerHTML = `
    <div style="display: flex;">
      <div style="background-color: black ; padding: 20px; width: 35%; color: blue;">
        <h2>${data.firstName} ${data.surname}</h2>
        <p><strong>${data.profession}</strong></p>
        <p>${data.city}, ${data.country}</p>

        <h2> Contact</h2>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <br>
        <p><strong>Email:</strong> ${data.email}</p>

        <h3>Education</h3>
        <p><strong>${data.educationLevel}</strong> in ${data.fieldOfStudy}</p>
        <p>${data.institute}</p>
        <p>Expected Completion: ${data.completionYear}</p>
      </div>

      <div style="padding: 20px; width: 65%;">
        <h3>Experience</h3>
        <p><strong>${data.jobTitle}</strong> at ${data.company}</p>
        <p>${data.jobLocation} | ${data.startMonth} ${data.startYear} - ${data.endMonth} ${data.endYear}</p>
        <p>${data.jobDesc}</p>

        <h3>Skills</h3>
        <ul style="list-style-type: none; padding-left: 0;">
          ${data.skills.map(skill => `
            <li style="display: flex; justify-content: space-between; margin-bottom: 10px;">
              <span>${skill}</span>
              
              </span>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `;
    document.body.appendChild(resumeContainer);
}
// Event listener for the button
document.addEventListener("DOMContentLoaded", () => {
    const generateResumeButton = document.querySelector(".btn-next");
    if (generateResumeButton) {
        generateResumeButton.addEventListener("click", (event) => {
            event.preventDefault();
            const formData = getFormData();
            displayResume(formData);
        });
    }
    else {
        console.error('Button not found');
    }
});
