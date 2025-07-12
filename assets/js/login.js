function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === "velveteyes" && pass === "withjusther") {
    window.location.href = "home.html";
  } else {
    alert("Incorrect username or password.");
  }
}
