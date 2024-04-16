window.addEventListener("load", function () {
  this.setTimeout(function open(event) {
    document.querySelector(".popup").style.display = "block";
  }, 1);
});

function changeColorToRed(circle) {
  circle.style.backgroundColor = "red";
}

function changeColorToOriginal(circle) {
  circle.style.backgroundColor = "rgb(33, 32, 32)";
}

window.addEventListener("load", function () {
  var circleIds = ["circle1", "circle2", "circle3", "circle4", "circle5"];
  var currentIndex = 0;

  function nextLight() {
    if (currentIndex < circleIds.length) {
      var currentCircle = document.getElementById(circleIds[currentIndex]);
      changeColorToRed(currentCircle);
      currentIndex++;
      setTimeout(nextLight, 1000); // 1 second interval between lights
    } else {
      // All lights have been turned on, turn them off together
      circleIds.forEach(function (id) {
        var circle = document.getElementById(id);
        changeColorToOriginal(circle);
      });

      // Reset the currentIndex to restart the sequence
      currentIndex = 0;
      setTimeout(nextLight, 2000); // 2 second interval before restarting
    }
  }

  setTimeout(function () {
    nextLight(); // Start the sequence immediately
  }, 500); // Initial delay of 0.5 seconds
});
