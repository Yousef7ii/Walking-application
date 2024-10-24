let steps = 0;
let distance = 0; // in meters
let calories = 0;
let stepLength = 0.78; // average step length in meters
let caloriePerStep = 0.04; // average calories burned per step
let walking = false;

const stepsDisplay = document.getElementById('steps');
const distanceDisplay = document.getElementById('distance');
const caloriesDisplay = document.getElementById('calories');
const saveButton = document.getElementById('saveButton');
const savedRecords = document.getElementById('savedRecords');

document.getElementById('startButton').addEventListener('click', () => {
    walking = true;
    steps = 0;
    distance = 0;
    calories = 0;
    updateDisplay();

    // Simulate step counting
    stepCounter();
    document.getElementById('startButton').disabled = true;
    document.getElementById('stopButton').disabled = false;
    saveButton.disabled = false;
});

document.getElementById('stopButton').addEventListener('click', () => {
    walking = false;
    saveButton.disabled = false;
    document.getElementById('startButton').disabled = false;
    document.getElementById('stopButton').disabled = true;
});

saveButton.addEventListener('click', () => {
    const record = document.createElement('li');
    record.textContent = `عدد الخطوات: ${steps}, المسافة: ${distance.toFixed(2)} متر, السعرات: ${calories.toFixed(2)}`;
    savedRecords.appendChild(record);
});

function updateDisplay() {
    stepsDisplay.textContent = steps;
    distanceDisplay.textContent = distance.toFixed(2);
    caloriesDisplay.textContent = calories.toFixed(2);
}

function stepCounter() {
    if (!walking) return;

    steps++;
    distance = steps * stepLength;
    calories = steps * caloriePerStep;
    updateDisplay();

    setTimeout(stepCounter, 1000); // Simulate a step every second
}
