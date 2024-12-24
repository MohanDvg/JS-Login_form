
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

const users = [
  { username: 'mohan', password: '1234' },
  { username: 'raju',  password: '456' },
  { username: 'sanju', password: '9876'},
];

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === '' || password === '') {
    errorMessage.textContent = 'Please fill in both fields.';
    return;
  }

  const user = users.find((user) => user.username === username && user.password === password);

  if (!user) {
    errorMessage.textContent = 'Invalid username or password.';
    return;
  }

  errorMessage.innerText="Login successful!";
  alert("Login successfull")
});
