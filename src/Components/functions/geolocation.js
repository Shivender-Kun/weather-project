const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function errors() {
  alert("Location request denied...");
}

function geolocation(success) {
  // Check if browser support geolocation
  if (navigator.geolocation) {
    // Check for location permission
    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      if (result.state === "granted") {
        //call function if request granted
        navigator.geolocation.getCurrentPosition(success);
      } else if (result.state === "prompt") {
        navigator.geolocation.getCurrentPosition(success, errors, options);
      } else if (result.state === "denied") {
        console.warn("Location request denied...");
      }
      result.onchange = function () {
        console.warn("Location request " + result.state);
      };
    });
  } else {
    alert("Sorry Not available!");
  }
}

export default geolocation;
