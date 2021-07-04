

// Retrieve
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user)
  if (!user){
    alert("credentials failure \nYou need to Identify to access the page");
    window.location.href = "/admin/login.html";
  }
  document.getElementById("usernameDisplay").innerText = `${user.name}`;


//LOGOUT
  document.getElementById("logout").addEventListener("click", logout);
  function logout() {
    localStorage.removeItem("user")
    console.log(localStorage.getItem("user"));
    window.location.href = "/admin/login.html";
  }

// GET PARAMETER
function getURLParameter(param) {
  var url = new URL(window.location.href);
  return url.searchParams.get(param); 
}