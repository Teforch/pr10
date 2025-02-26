document.getElementById("sleepForm").addEventListener("submit", () => {
  const sleepHours = document.getElementById("sleepHours").value;
  const sleepDate = document.getElementById("sleepDate").value;

  addSleepRecord(sleepHours, sleepDate);
  document.getElementById("sleepForm");
});

function addSleepRecord(hours, date) {
  const recordsContainer = document.getElementById("recordsContainer");

  const recordDiv = document.createElement("div");
  recordDiv.className = "record";

  const recordText = document.createTextNode(
    `Сон: ${hours} часов, Дата: ${date}`,
  );
  recordDiv.appendChild(recordText);

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.appendChild(document.createTextNode("Удалить"));

  deleteButton.addEventListener("click", function () {
    recordsContainer.removeChild(recordDiv);
  });

  recordDiv.appendChild(deleteButton);
  recordsContainer.appendChild(recordDiv);
}
