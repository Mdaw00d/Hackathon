function generateCV(): void {
    // Create an instance of jsPDF
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();
  
    // Example PDF content
    doc.text('Test PDF', 20, 20);
    doc.save('test.pdf');
  


  // Collect form data with proper type definitions
  const firstName: string = (document.getElementById('firstName') as HTMLInputElement).value;
  const surname: string = (document.getElementById('surname') as HTMLInputElement).value;
  const profession: string = (document.getElementById('profession') as HTMLInputElement).value;
  const city: string = (document.getElementById('city') as HTMLInputElement).value;
  const country: string = (document.getElementById('country') as HTMLInputElement).value;
  const phone: string = (document.getElementById('phone') as HTMLInputElement).value;
  const email: string = (document.getElementById('email') as HTMLInputElement).value;

  // Work Experience
  const jobTitle: string = (document.getElementById('job-title') as HTMLInputElement).value;
  const company: string = (document.getElementById('company') as HTMLInputElement).value;
  const jobDescription: string = (document.getElementById('job-desc') as HTMLInputElement).value;

  // Education
  const educationLevel: string = (document.getElementById('education-level') as HTMLSelectElement).value;
  const institute: string = (document.getElementById('institute') as HTMLInputElement).value;
  const fieldOfStudy: string = (document.getElementById('field-of-study') as HTMLInputElement).value;


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
const generateButton = document.querySelector('.btn-next') as HTMLButtonElement;
generateButton.addEventListener('click', generateCV);
