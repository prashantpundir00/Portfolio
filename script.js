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


