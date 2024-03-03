function updateText() {
  var diet = document.getElementById("diet-dropdown").value;
  var exercise = document.getElementById("exercise-dropdown").value;
  var practices = document.getElementById("practices-dropdown").value;
  var selectedTopic = "";
  if (diet !== "") {
    selectedTopic = "Chosen Diet Topic: " + diet + "<br>" + "<br>";
  }
  if (exercise !== "") {
    selectedTopic = "Chosen Exercise Topic: " + exercise + "<br>" + "<br>";
  }
  if (practices !== "") {
    selectedTopic = "Chosen Practices Topic: " + practices + "<br>" + "<br>";
  }
  document.getElementById("selected-topic").innerHTML = selectedTopic;
}

function showWorksCited() {
  var worksCited = "Works Cited for the selected topic:<br>";
  var selectedTopic = document.getElementById("selected-topic").innerText;
  // You can customize the works cited based on the selected topic
  if (selectedTopic.includes("Diet")) {
    worksCited += "1. Source 1<br>";
    worksCited += "2. Source 2<br>";
    worksCited += "3. Source 3<br>";
  } else if (selectedTopic.includes("Exercise")) {
    worksCited += "1. Source A<br>";
    worksCited += "2. Source B<br>";
    worksCited += "3. Source C<br>";
  } else if (selectedTopic.includes("Practices")) {
    worksCited += "1. Source X<br>";
    worksCited += "2. Source Y<br>";
    worksCited += "3. Source Z<br>";
  }
  document.getElementById("works-cited").innerHTML = worksCited;
}

// Event listeners to trigger functions when dropdown values change
document.getElementById("diet-dropdown").addEventListener("change", function() {
  updateText();
  document.getElementById("works-cited").innerHTML = "";
});
document.getElementById("exercise-dropdown").addEventListener("change", function() {
  updateText();
  document.getElementById("works-cited").innerHTML = "";
});
document.getElementById("practices-dropdown").addEventListener("change", function() {
  updateText();
  document.getElementById("works-cited").innerHTML = "";
});

// Create button to show works cited
var worksCitedButton = document.createElement("button");
worksCitedButton.innerText = "Show Works Cited";
worksCitedButton.addEventListener("click", showWorksCited);
document.body.appendChild(worksCitedButton);
