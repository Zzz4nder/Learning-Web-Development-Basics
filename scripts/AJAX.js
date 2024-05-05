document.getElementById("club1").addEventListener("click", function () {
  fetchDescription("club1");
});

document.getElementById("club2").addEventListener("click", function () {
  fetchDescription("club2");
});

document.getElementById("club3").addEventListener("click", function () {
  fetchDescription("club3");
});

function fetchDescription(clubId) {
  fetch("scripts/club-insert.txt")
    .then((response) => response.text())
    .then((data) => {
      const descriptions = data.split("\n");

      const description = descriptions.find((desc) =>
        desc.startsWith(clubId + ":")
      );
      if (description) {
        document.getElementById("description").innerHTML =
          description.split(":")[1];
      } else {
        console.error("Description not found for club:", clubId);
      }
    })
    .catch((error) => {
      console.error("Error fetching description:", error);
    });
}
