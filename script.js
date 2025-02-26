document.addEventListener("DOMContentLoaded", function() {
   
    let isInsidePages = window.location.pathname.includes("/pages/");
    let navPath = isInsidePages ? "../layout/nav.html" : "layout/nav.html";

    fetch(navPath) 
    .then(response => response.text())
    .then(data => {
        document.getElementById("nav-container").innerHTML = data;

        document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);

        document.querySelectorAll(".nav-links a").forEach(link => {
            let href = link.getAttribute("href");

            if (!href.startsWith("..")) {
                link.href = isInsidePages ? "../" + href : href;
            }
        });
    })
    .catch(error => console.error("Error loading navigation:", error));
});


function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
}

function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  }

  function updateJobTitles() {
    const jobCategory = document.getElementById('job-category').value;
    const jobTitleSelect = document.getElementById('job-title');
    jobTitleSelect.innerHTML = '';

    const jobTitles = {
        it: ['Software Developer', 'Data Scientist', 'Cybersecurity Specialist', 'Cloud Architect', 'Network Engineer', 'IT Project Manager', 'Web Developer', 'Systems Analyst'],
        finance: ['Accountant', 'Financial Analyst', 'Investment Banker', 'Financial Planner', 'Risk Manager', 'Treasurer', 'Auditor', 'Credit Analyst'],
        healthcare: ['Doctor', 'Nurse', 'Pharmacist', 'Physical Therapist', 'Dentist', 'Medical Laboratory Technician', 'Radiologic Technologist', 'Occupational Therapist'],
        education: ['Teacher', 'Principal', 'School Counselor', 'Librarian', 'Education Consultant', 'Special Education Teacher', 'Curriculum Developer', 'Educational Administrator'],
        engineering: ['Mechanical Engineer', 'Electrical Engineer', 'Civil Engineer', 'Software Engineer', 'Chemical Engineer', 'Aerospace Engineer', 'Environmental Engineer', 'Biomedical Engineer']
    };

    jobTitles[jobCategory].forEach(function(title) {
        const option = document.createElement('option');
        option.value = title.toLowerCase().replace(/ /g, '-');
        option.textContent = title;
        jobTitleSelect.appendChild(option);
    });
}

function checkSalaryRange() {
    const salarySelect = document.getElementById('job-sallery');
    const customSalaryInput = document.getElementById('custom-salary');
    if (salarySelect.value === '5') {
        customSalaryInput.style.display = 'block';
    } else {
        customSalaryInput.style.display = 'none';
    }
}

function ageRange() {
    const ageSelect = document.getElementById('selectage');
    const customageInput = document.getElementById('custom-age');
    if (ageSelect.value === '3') {
        customageInput.style.display = 'block';
    } else {
        customageInput.style.display = 'none';
    }
}
function showPopup(event) {
    event.preventDefault(); 
    alert("Form submitted successfully!");
}
function showConfirmation(event) {
    event.preventDefault();
    var userConfirmed = confirm("Are you sure you want to reset?");
    if (userConfirmed) {
        alert("input fields are reset!");
        document.getElementById('experience').value = '';
    document.getElementById('education').value = '';
    document.getElementById('skills').value = '';
    document.getElementById('job-sallery').value = '1';
    document.getElementById('custom-salary').value = '';
    document.getElementById('comments').value = '';
    } else {
        alert("input fields are not reset!");
    }
}
function cancled (event) {
    event.preventDefault();
    var userConfirmed = confirm("Are you sure you want to cancel?");
    if (userConfirmed) {
        alert("process cancelled!");
        document.getElementById('experience').value = '';
    document.getElementById('education').value = '';
    document.getElementById('skills').value = '';
    document.getElementById('job-sallery').value = '1';
    document.getElementById('custom-salary').value = '';
    document.getElementById('comments').value = '';
    } else {
        alert("process not cancelled!");
    }
}