//Bootstrap jQuery to allow me to open the Modals at the bottom of the html page.
$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});

// Below is the code that lets the user chech of checkboxes and type in preferred GPA requirement and -
// then press the "Apply" button to view the content that shows up with following tags to track whats showing

// get the "Apply" button and add a click event listener
document.getElementById("applyButton").addEventListener("click", function () {
  // get all checkboxes with class "filter-button"
  var checkboxes = document.querySelectorAll(".filter-button");
  var tags = []; // initialize an empty array to store the selected values
  // loop through each checkbox and check if it's checked
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      tags.push(checkboxes[i].value); // add its value to the array
    }
  }
  if (tags.length > 0) {
    // check if at least one checkbox is selected
    var tagHTML = ""; // initialize an empty string to store the HTML tags
    // loop through the array of selected values
    for (var i = 0; i < tags.length; i++) {
      tagHTML += '<div class="tag">' + tags[i] + "</div>"; // create a tag for each value and add it to the tagHTML string
    }
    // get the tag container and set its innerHTML to the tagHTML string
    document.getElementById("tagContainer").innerHTML = tagHTML;

    // show the code container
    document.getElementById("codeContainer").style.display = "block";
  }
  // get the input field and its value
  var inputField = document.getElementById("inputField");
  var inputValue = inputField.value.trim();
  if (inputValue.length > 0) {
    // check if the input field has a value
    var inputTag = '<div class="tag">GPA: ' + inputValue + "</div>"; // create a tag for the input value
    // get the tag container and append the input tag to it
    document
      .getElementById("tagContainer")
      .insertAdjacentHTML("beforeend", inputTag);
    // clear the input field value
    inputField.value = "";
  }
  // removes the "Nothing here" field
  document.getElementById("nothingHere").remove();
});

// Below is the trigger that allows my "dropdown" to show/hide when clicking the -
// "Show more details" button
const dropdowns = document.querySelectorAll(".dropdown");

function toggleDropdown(index) {
  const dropdown = dropdowns[index];
  const isDropdownOpen = dropdown.classList.contains("open");

  if (isDropdownOpen) {
    dropdown.classList.remove("open");
    dropdown.querySelector("span").textContent = "Show more details";
  } else {
    dropdown.classList.add("open");
    dropdown.querySelector("span").textContent = "Show less details";
  }
}

// The blocks below allows me to view/hide what type of content I have on the screen
//inside of the modals based on the radio buttons selected.

// Select all radio buttons with the name "timeperiod"
const radioButtons = document.querySelectorAll(
  'input[type="radio"][name="timeperiod"]'
);
// Select all elements with the "content" class
const contentDivs = document.querySelectorAll(".content");

// Function to show the selected content based on the checked radio button
function showSelectedContent() {
  // Hide all content divs
  contentDivs.forEach((contentDiv) => (contentDiv.style.display = "none"));
  // Find the checked radio button with the name "timeperiod"
  const selectedRadioButton = document.querySelector(
    'input[type="radio"][name="timeperiod"]:checked'
  );
  // Get the ID of the selected radio button and append "Graph" to form the class name of the selected content
  const selectedContentClass = selectedRadioButton.id + "Graph";
  // Find the content div with the selected content class
  const selectedContentDiv = document.querySelector(`.${selectedContentClass}`);
  // Show the selected content div
  selectedContentDiv.style.display = "block";

  // Update the graphs-content2 display status based on the radio button selection
  updateGraphsContent2Display();
}

// This function updates the display of the "graphs-content2" elements based on the selected radio buttons
function updateGraphsContent2Display() {
  // Find all checked "timeperiod" radio buttons
  const timeperiodRadioButtons = document.querySelectorAll(
    'input[type="radio"][name="timeperiod"]:checked'
  );
  
  // Find all checked "Graphs" radio buttons
  const graphsRadioButtons = document.querySelectorAll(
    'input[type="radio"][name^="radio"][value="Graphs"]:checked'
  );

  // Iterate over each content div
  contentDivs.forEach((contentDiv) => {
    // Find the "graphs-content2" element within the current content div
    const graphsContent2 = contentDiv.querySelector(".graphs-content2");
    
    // Check if the "graphs-content2" element is present
    if (graphsContent2) {
      // If both "timeperiod" and "Graphs" radio buttons are checked, set the display of "graphs-content2" to "block"
      if (timeperiodRadioButtons.length > 0 && graphsRadioButtons.length > 0) {
        graphsContent2.style.display = "block";
      } else {
        // Otherwise, set the display of "graphs-content2" to "none"
        graphsContent2.style.display = "none";
      }
    }
  });
}

// Add the "change" event listener to each radio button and trigger the showSelectedContent function when the event occurs
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", showSelectedContent);
});

// Call the showSelectedContent function to display the initial content based on the checked radio button
showSelectedContent();

// Add an event listener to run the code when the DOM has been fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Define the array of radio button groups
  const radioButtonGroups = [
    {
      name: "radio",
      rawContentClass: ".raw-data-content",
      graphsContentClass: ".graphs-content",
    },
    {
      name: "radio2",
      rawContentClass: ".raw-data-content2",
      graphsContentClass: ".graphs-content2",
    },
  ];

  // Iterate over each radio button group
  radioButtonGroups.forEach(function (group) {
    // Select all radio buttons in the current group
    const radioButtons = document.querySelectorAll(
      `input[type="radio"][name="${group.name}"]`
    );

    // Iterate over each radio button in the current group
    radioButtons.forEach(function (radio) {
      // Add an event listener for the 'change' event on each radio button
      radio.addEventListener("change", function () {
        // Select the raw content and graphs content elements for the current group
        const rawContent = document.querySelector(group.rawContentClass);
        const graphsContent = document.querySelector(group.graphsContentClass);
      
        // Check if the radio button value is "Graphs"
        if (this.value === "Graphs") {
          // Hide the raw content and show the graphs content
          rawContent.style.display = "none";
          graphsContent.style.display = "block";
        } else {
          // Show the raw content and hide the graphs content
          rawContent.style.display = "block";
          graphsContent.style.display = "none";
        }
        // Update the graphs-content2 display status based on the radio button selection
        updateGraphsContent2Display();
      });
      updateGraphsContent2Display();
    });
  });
});

// Code for the API 
// I did not use jQuery as I am more familiar with plain JavaScript
// I declare the "jsonData" variable at the beginning of the script so our scope is clear
let jsonData;
function loadCourseData(courseName) {
  const fetchCourse =
    "https://api.npoint.io/e0042311c05207887ee0/" + courseName;
  // Fetch data from API
  fetch(fetchCourse)
    .then((response) => response.json()) // Convert response to JSON
    .then((data) => {
      jsonData = data.data; //Store the fetched data
      //Update tables with fetched data
      updateTables();
      updateNewTables();
      setupRadioButtons(); //Set up my radio buttons with event listener
    })
    .then(() => {
      //Display comments based on selected year and time period
      const selectedYear = parseInt(
        document.getElementById("yearSelect").value
      );
      const selectedTimePeriod = getSelectedCommentsTimePeriod();
      displayComments(selectedYear, selectedTimePeriod);
      // Set up event listeners for comments, radio buttons and year select
      setupCommentsRadioButtonsAndYearSelect();
    })
    .catch((error) => {
      //Log an error if I encounter an error fetching the data
      console.error("Error fetching data:", error);
    });
}
// Function to clear the content of a table
function clearTable(tableBody) {
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
}
// Function to create a table with the data, year range, and value key
function createTable(jsonData, minYear, maxYear, tableBody, valueKey) {
  jsonData.forEach((item) => {
    // If the item's year is within the specified range, create a row for the table
    if (item.year >= minYear && item.year <= maxYear) {
      // Code for creating and populating table rows
      const row = document.createElement("tr");

      const yearCell = document.createElement("td");
      yearCell.textContent = item.year;
      row.appendChild(yearCell);

      const valueCell = document.createElement("td");

      if (valueKey === "graduationRate") {
        valueCell.textContent = item.statistics[valueKey];
      } else if (
        valueKey === "applicants" ||
        valueKey === "passingGPA" ||
        valueKey === "salary" ||
        valueKey === "studyPlaces"
      ) {
        valueCell.textContent = item.statistics[valueKey];
      } else {
        // Fallback to show raw value if none of the conditions above are met
        valueCell.textContent = item.statistics[valueKey];
      }

      row.appendChild(valueCell);

      tableBody.appendChild(row);
    }
  });
}
// Function to update tables with new data for the  Statistics modal
function updateTables() {
  // Set minYear and maxYear for data
  // Clear and create tables for different data categories
  const minYear = 2017;
  const maxYear = parseInt(document.getElementById("yearRange").value);
  document.getElementById(
    "selectedYear"
  ).textContent = `From ${minYear} - ${maxYear}`;

  const applicantsTableBody = document.getElementById("applicantsTableBody");
  const gpaTableBody = document.getElementById("gpaTableBody");
  const graduationRateTableBody = document.getElementById(
    "graduationRateTableBody"
  );
  const salaryTableBody = document.getElementById("salaryTableBody");
  const studyPlacesTableBody = document.getElementById("studyPlacesTableBody");

  clearTable(applicantsTableBody);
  clearTable(gpaTableBody);
  clearTable(graduationRateTableBody);
  clearTable(salaryTableBody);
  clearTable(studyPlacesTableBody);

  createTable(jsonData, minYear, maxYear, applicantsTableBody, "applicants");
  createTable(jsonData, minYear, maxYear, gpaTableBody, "passingGPA");
  createTable(
    jsonData,
    minYear,
    maxYear,
    graduationRateTableBody,
    "graduationRate"
  );
  createTable(jsonData, minYear, maxYear, salaryTableBody, "salary");
  createTable(jsonData, minYear, maxYear, studyPlacesTableBody, "studyPlaces");
}
// Function to get the selected time period from radio buttons
function getSelectedTimePeriod() {
  const timePeriodRadios = document.getElementsByName("timeperiod");
  let selectedTimePeriod;
  timePeriodRadios.forEach((radio) => {
    if (radio.checked) {
      selectedTimePeriod = radio.value;
    }
  });
  return selectedTimePeriod;
}
// Function to create a new table with a specified dataKey
function createNewTableWithKey(
  jsonData,
  minYear,
  maxYear,
  tableBody,
  timePeriod,
  dataKey
) {
  //Loop through each item in jsonData and create a row for the table
  jsonData.forEach((item) => {
    if (item.year >= minYear && item.year <= maxYear) {
      const row = document.createElement("tr");
      const yearCell = document.createElement("td");
      yearCell.textContent = item.year;
      row.appendChild(yearCell);

      const valueCell = document.createElement("td");
      if (item.feedback[timePeriod] && item.feedback[timePeriod][dataKey]) {
        valueCell.textContent = item.feedback[timePeriod][dataKey];
      } else {
        valueCell.textContent = "-";
      }
      row.appendChild(valueCell);

      tableBody.appendChild(row);
    }
  });
}
// Function to set up event listeners for radio buttons
function setupRadioButtons() {
  const radioButtons = document.getElementsByName("timeperiod");
  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", updateNewTables);
  });
}
// Function to update new tables with new data for the Students Answer modal
function updateNewTables() {
  // Clear and create new tables for different data categories
  const minYear = 2017;
  const maxYear = parseInt(document.getElementById("yearRangeNew").value);
  document.getElementById(
    "selectedYearNew"
  ).textContent = `From ${minYear} - ${maxYear}`;

  const learnedSkillsTableBody = document.getElementById(
    "learnedSkillsTableBody"
  );
  const difficultyTableBody = document.getElementById("difficultyTableBody");
  const satisfactionRateTableBody = document.getElementById(
    "satisfactionRateTableBody"
  );
  const chanceOfJobTableBody = document.getElementById("chanceOfJobTableBody");

  const selectedTimePeriod = getSelectedTimePeriod();

  clearTable(learnedSkillsTableBody);
  clearTable(difficultyTableBody);
  clearTable(satisfactionRateTableBody);
  clearTable(chanceOfJobTableBody);

  createNewTableWithKey(
    jsonData,
    minYear,
    maxYear,
    learnedSkillsTableBody,
    selectedTimePeriod,
    "value"
  );
  createNewTableWithKey(
    jsonData,
    minYear,
    maxYear,
    difficultyTableBody,
    selectedTimePeriod,
    "difficulty"
  );
  createNewTableWithKey(
    jsonData,
    minYear,
    maxYear,
    satisfactionRateTableBody,
    selectedTimePeriod,
    "matchingExpectations"
  );
  createNewTableWithKey(
    jsonData,
    minYear,
    maxYear,
    chanceOfJobTableBody,
    selectedTimePeriod,
    "perceivedCareerOpportunities"
  );
}
// Function to display comments for the Questionnaire modal
function displayComments(year, selectedTimePeriod) {
  const commentsContainer = document.getElementById("commentsContainer");

  while (commentsContainer.firstChild) {
    commentsContainer.removeChild(commentsContainer.firstChild);
  }

  jsonData.forEach((item) => {
    if (item.year == year) {
      const comments = item.feedback[selectedTimePeriod]?.comments;
      if (comments) {
        comments.forEach((comment) => {
          const commentP = document.createElement("p");
          commentP.setAttribute("class", "commentsP");
          const commentDiv = document.createElement("div");
          commentDiv.setAttribute("class", "commentsDiv");
          commentDiv.textContent = comment;
          commentsContainer.appendChild(commentDiv);
        });
      }
    }
  });
}
// Function to display comments based on selected year and time period with radio buttons
function setupCommentsRadioButtonsAndYearSelect() {
  const radioButtons = document.getElementsByName("commentsTimeperiod");
  const yearSelect = document.getElementById("yearSelect");

  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", () => {
      const selectedYear = parseInt(yearSelect.value);
      const selectedTimePeriod = getSelectedCommentsTimePeriod();
      displayComments(selectedYear, selectedTimePeriod);
    });
  });

  yearSelect.addEventListener("change", () => {
    const selectedYear = parseInt(yearSelect.value);
    const selectedTimePeriod = getSelectedCommentsTimePeriod();
    displayComments(selectedYear, selectedTimePeriod);
  });
}

function getSelectedCommentsTimePeriod() {
  const timePeriodRadios = document.getElementsByName("commentsTimeperiod");
  let selectedTimePeriod;
  timePeriodRadios.forEach((radio) => {
    if (radio.checked) {
      selectedTimePeriod = radio.value;
    }
  });
  return selectedTimePeriod;
}
