const { resolve4 } = require("dns");
const { resolve } = require("path/posix");

// User Registration (Signup)
document.getElementById('register-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    alert(data.message);
    if (res.ok) window.location.href = 'login.html';
});

// User Login
document.getElementById('login-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        alert('Login Successful');
        window.location.href = 'dashboard.html';
    } else {
        alert(data.message);
    }
});

// Protected Page Access (Dashboard)
document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        alert('Access Denied! Please log in first.');
        window.location.href = 'login.html';
        return;
    }

    const res = await fetch('http://localhost:5000/api/auth/protected', {
        method: 'GET',
        headers: { 'Authorization': token },
    });

    const data = await response.json();
    if (response.ok) {
        document.getElementById('welcome')?.innerText = `Welcome, ${data.user.name}`;
    } else {
        alert('Session expired. Please log in again.');
        localStorage.removeItem('token');
        window.location.href = 'login.html';
    }
});

// Logout Function
document.getElementById('logout-btn')?.addEventListener('click', () => {
    localStorage.removeItem('token');
    localStorage.removeItem("user");
    window.location.href = 'index.html';
});