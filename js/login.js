document.addEventListener("DOMContentLoaded", () => {
  // Tạo tài khoản mẫu nếu chưa có dữ liệu
  if (!localStorage.getItem("accounts")) {
    const defaultAccounts = [
      { username: "user1", password: "1111" },
      { username: "user2", password: "2222" },
      { username: "admin", password: "1234" }
    ];
    localStorage.setItem("accounts", JSON.stringify(defaultAccounts));
  }

  const formTitle = document.getElementById("form-title");
  const toggleBtn = document.getElementById("toggle-register");
  const submitBtn = document.querySelector("#login-form button[type='submit']");

  let isRegister = false;

  toggleBtn.addEventListener("click", () => {
    isRegister = !isRegister;

    if (isRegister) {
      formTitle.textContent = "Register";
      submitBtn.textContent = "Register";
      toggleBtn.textContent = "Already have an account?";
    } else {
      formTitle.textContent = "Login";
      submitBtn.textContent = "Login";
      toggleBtn.textContent = "Create an account";
    }
  });

  document.querySelector("#login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    if (isRegister) {
      const exists = accounts.some(acc => acc.username === username);
      if (exists) {
        alert("Username already exists.");
      } else {
        accounts.push({ username, password });
        localStorage.setItem("accounts", JSON.stringify(accounts));
        alert("Registration successful!");
        formTitle.textContent = "Login";
        submitBtn.textContent = "Login";
        toggleBtn.textContent = "Create an account";
        isRegister = false;
      }
    } else {
      const match = accounts.find(acc => acc.username === username && acc.password === password);
      if (match) {
        alert("Login successful!");
        localStorage.setItem("loggedInUser", username);
        window.location.href = "../index.html";
      } else {
        alert("Invalid username or password.");
      }
    }
  });
});
