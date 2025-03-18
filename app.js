// Strain Selection
const strainSelect = document.getElementById("strainSelect");
const growthStageSelect = document.getElementById("growthStage");
const reminderMessage = document.getElementById("reminderMessage");
const setReminderButton = document.getElementById("setReminder");
const moonPhaseDiv = document.getElementById("moonPhase");

// Strain options (you can expand these)
const strains = {
  indica: ["Afghan Kush", "Bubba Kush", "Granddaddy Purple", "Northern Lights"],
  sativa: ["Sour Diesel", "Jack Herer", "Green Crack", "Durban Poison"],
  hybrid: ["Blue Dream", "OG Kush", "Girl Scout Cookies", "White Widow"],
  highCBD: ["Harlequin", "Charlotte’s Web", "ACDC", "Ringo's Gift"]
};

// Default strain selection
strainSelect.addEventListener("change", function() {
  const selectedStrain = strainSelect.value;
  console.log(`Selected Strain Category: ${selectedStrain}`);
});

// Grow Stage selection
growthStageSelect.addEventListener("change", function() {
  const selectedStage = growthStageSelect.value;
  console.log(`Selected Growth Stage: ${selectedStage}`);
});

// Watering Reminder functionality
setReminderButton.addEventListener("click", function() {
  const selectedStrain = strainSelect.value;
  let reminderText;

  // Set watering reminder based on strain (example logic)
  if (selectedStrain === "indica") {
    reminderText = "Water every 4 days.";
  } else if (selectedStrain === "sativa") {
    reminderText = "Water every 3 days.";
  } else if (selectedStrain === "hybrid") {
    reminderText = "Water every 5 days.";
  } else if (selectedStrain === "highCBD") {
    reminderText = "Water every 2 days.";
  }

  reminderMessage.textContent = `Reminder: ${reminderText}`;
  localStorage.setItem("wateringReminder", reminderText);
});

// Moon Phase Calculation
function getMoonPhase() {
  const today = new Date();
  const moonPhase = (today.getDate() + 4) % 29.5;

  if (moonPhase < 1) {
    moonPhaseDiv.textContent = "New Moon";
  } else if (moonPhase < 7) {
    moonPhaseDiv.textContent = "First Quarter";
  } else if (moonPhase < 15) {
    moonPhaseDiv.textContent = "Full Moon";
  } else if (moonPhase < 22) {
    moonPhaseDiv.textContent = "Last Quarter";
  } else {
    moonPhaseDiv.textContent = "Waning Crescent";
  }
}

getMoonPhase();

// Load stored watering reminder on page load
window.onload = function() {
  const storedReminder = localStorage.getItem("wateringReminder");
  if (storedReminder) {
    reminderMessage.textContent = `Stored Reminder: ${storedReminder}`;
  }
};