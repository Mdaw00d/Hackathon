// Import jsPDF from jspdf
import { jsPDF } from 'jspdf';
function generateCV() {
    // Collect form data with proper type definitions
    const firstName = document.getElementById('firstName').value;
    const surname = document.getElementById('surname').value;
    const profession = document.getElementById('profession').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    // Work Experience
    const jobTitle = document.getElementById('job-title').value;
    const company = document.getElementById('company').value;
    const jobDescription = document.getElementById('job-desc').value;
    // Education
    const educationLevel = document.getElementById('education-level').value;
    const institute = document.getElementById('institute').value;
    const fieldOfStudy = document.getElementById('field-of-study').value;
    // Initialize jsPDF
    const doc = new jsPDF();
    // Formatting the CV
    doc.setFontSize(20);
    doc.text('Curriculum Vitae', 105, 20, { align: 'center' });
    doc.setFontSize(16);
    doc.text('Personal Information', 20, 40);
    doc.setFontSize(12);
    doc.text(`Name: ${firstName} ${surname}`, 20, 50);
    doc.text(`Profession: ${profession}`, 20, 60);
    doc.text(`Location: ${city}, ${country}`, 20, 70);
    doc.text(`Phone: ${phone}`, 20, 80);
    doc.text(`Email: ${email}`, 20, 90);
    // Work Experience
    doc.setFontSize(16);
    doc.text('Work Experience', 20, 110);
    doc.setFontSize(12);
    doc.text(`Job Title: ${jobTitle}`, 20, 120);
    doc.text(`Company: ${company}`, 20, 130);
    doc.text(`Job Description: ${jobDescription}`, 20, 140);
    // Education
    doc.setFontSize(16);
    doc.text('Education', 20, 160);
    doc.setFontSize(12);
    doc.text(`Level: ${educationLevel}`, 20, 170);
    doc.text(`Institute: ${institute}`, 20, 180);
    doc.text(`Field of Study: ${fieldOfStudy}`, 20, 190);
    // Generate and Save PDF
    doc.save(`${firstName}_CV.pdf`);
}
// Attach the function to the button click event
const generateButton = document.querySelector('.btn-next');
generateButton.addEventListener('click', generateCV);
