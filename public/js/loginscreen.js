const loginFormHandler = async (e) => {
  e.preventDefault();

  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/signin", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/api/users/inscreen");
    } else {
      alert("error in login");
    }
  }
};

const signupFormHandler = async (e) => {
  e.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);

    if (response.ok) {
      document.location.replace("/api/users/inscreen");
      console.log("signup ok");
    } else {
      alert("Unable to complete signup/ check db");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
