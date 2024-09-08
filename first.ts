// I Have Mentioned Each Thing Why It Is Used Because It Is For Explanation /


import { jsPDF } from 'jspdf';

// Ensure the document elements are properly accessed and type-casted
const generateResumeBtn = document.getElementById('generateResume') as HTMLButtonElement;
const downloadPdfBtn = document.getElementById('downloadPdf') as HTMLButtonElement;

generateResumeBtn.addEventListener('click', () => {
  // Get form data
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value.split('\n');
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.split('\n');
  const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value.split('\n');

  // Update resume content
  const displayName = document.getElementById('display-name') as HTMLElement;
  const displayContact = document.getElementById('display-contact') as HTMLElement;
  const displayEducation = document.getElementById('display-education') as HTMLElement;
  const displaySkills = document.getElementById('display-skills') as HTMLElement;
  const displayWorkExperience = document.getElementById('display-work-experience') as HTMLElement;

  if (displayName && displayContact && displayEducation && displaySkills && displayWorkExperience) {
    displayName.textContent = name;
    displayContact.textContent = `Email: ${email} | Phone: ${phone}`;
    displayEducation.innerHTML = education.map(item => `<li>${item}</li>`).join('');
    displaySkills.innerHTML = skills.map(item => `<li>${item}</li>`).join('');
    displayWorkExperience.innerHTML = workExperience.map(item => `<li>${item}</li>`).join('');

    // Show resume container
    const resumeContainer = document.getElementById('resume') as HTMLElement;
    if (resumeContainer) {
      resumeContainer.style.display = 'block';
    }
  }
});

// Handle PDF download with jsPDF
downloadPdfBtn.addEventListener('click', () => {
  const doc = new jsPDF('portrait', 'pt', 'a4');
  
  const resumeContainer = document.getElementById('resume') as HTMLElement;

  if (resumeContainer) {
    doc.html(resumeContainer, {
      callback: function (pdf) {
        pdf.save('resume.pdf');
      },
      margin: [10, 10, 10, 10],
      autoPaging: true,
      x: 10,
      y: 10,
      width: 190, // target width in jsPDF units
      windowWidth: 650 // this controls how much of the page width it captures
    });
  }
});
