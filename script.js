document.getElementById("download-resume").addEventListener("click", function(){
    const link= document.createElement('a');
    link.href= "./img/resume/My Resume (2).pdf";
    link.download= "Prashant's Resume.pdf";
    link.click();
});




document.addEventListener("DOMContentLoaded", function() {
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const aside = document.querySelector("aside");

    dropdownBtn.addEventListener("click", function() {
        aside.classList.toggle("show");
    });
});






    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const formDataJSON = Object.fromEntries(formData.entries());

      try {
        const response = await fetch('http://localhost:3000/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formDataJSON)
        });

        if (response.ok) {
          alert('Form submitted successfully!');
          contactForm.reset();
        } else {
          alert('Failed to submit form.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to submit form. Please try again later.');
      }
    });
  



    
    const images = document.querySelectorAll('.project-image');
    let currentIndex = 0;

    document.getElementById('prev-btn').addEventListener('click', () => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].classList.add('active');
    });

    document.getElementById('next-btn').addEventListener('click', () => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    });

