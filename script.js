function openPopup(courseCode) {
    var title = document.getElementById("popup-title");
    var description = document.getElementById("popup-description");
    if (courseCode === "CSC510") {
      title.textContent = "CSC510 - Discrete Structure";
      description.textContent = "This course covers the basics of programming, including variables, control structures, functions, and arrays.";
    } 
    
    else if (courseCode === "CSC574") {
      title.textContent = "CSC574 - Dynamic Web Application Development";
      description.textContent = "This course covers advanced topics in calculus, including integration techniques, differential equations, and infinite series.";
    } 
    
    else if (courseCode === "ITT569") {
      title.textContent = "ITT569 - Internet of thing";
      description.textContent = "This course focuses on the principles of effective technical writing, including style, organization, and audience analysis.";
    }

    else if (courseCode === "ELC550") {
      title.textContent = "ELC550 - English for academic writing";
      description.textContent = "This course focuses on the principles of effective technical writing, including style, organization, and audience analysis.";
    }

    else if (courseCode === "IT462") {
      title.textContent = "ITS462 - Fundamental of Artificial Intelligence";
      description.textContent = "This course focuses on the principles of effective technical writing, including style, organization, and audience analysis.";
    }

    else if (courseCode === "ITT557") {
      title.textContent = "ITT557 - Web Application Security";
      description.textContent = "This course focuses on the principles of effective technical writing, including style, organization, and audience analysis.";
    }

    else if (courseCode === "ITT588") {
      title.textContent = "ITT588 - Front-end Technology";
      description.textContent = "This course focuses on the principles of effective technical writing, including style, organization, and audience analysis.";
    }
    
    else if (courseCode === "TMC401") {
      title.textContent = "TMC401 - Introductory Mandarin (Level 2)";
      description.textContent = "This course focuses on the principles of effective technical writing, including style, organization, and audience analysis.";
    }





    var popup = document.getElementById("popup");
    popup.style.display = "block";
  }
  
  function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }
  


  const filterButtons = document.querySelectorAll('.filter-buttons button');
const items = document.querySelectorAll('.item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(button => button.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    items.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
