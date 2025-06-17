  function toggleForm(formId) {
    document.getElementById("loginPage").style.display = formId === "loginPage" ? "block" : "none";
    document.getElementById("signupPage").style.display = formId === "signupPage" ? "block" : "none";
  }

  function login() {
    const email = document.getElementById("loginEmail").value;
    const emailError = document.getElementById("loginEmailError");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
    } else {
      emailError.textContent = "";
      alert("Login Successful!");
    }
  }

  function signup() {
    const name = document.getElementById("signupName").value;
    const nameError = document.getElementById("signupNameError");

    const nameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(name)) {
      nameError.textContent = "Only alphabets are allowed in name.";
    } else {
      nameError.textContent = "";
      alert("Signup Successful!");
    }
  }
