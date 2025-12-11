// =================== NAVBAR & SEARCH ===================
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("navLinks");
const searchInput = document.getElementById("searchInput");

// Mobile menu toggle
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Search functionality: Enter key
searchInput.addEventListener("keypress", function(event){
  if(event.key === "Enter"){
    handleSearch();
  }
});

function handleSearch() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const data = {
    "apple": "https://www.apple.com",
    "google": "https://www.google.com",
    "openai": "https://www.openai.com"
  };
  if(data[searchTerm]){
    window.open(data[searchTerm], "_blank");
  } else {
    alert("No direct match found. Performing normal search for: " + searchTerm);
  }
}

// =================== ADD TO CART (theme intact) ===================
const cartCount = document.querySelector(".cart-count");
const addCartButtons = document.querySelectorAll(".add-cart-btn");

let totalItems = 0;
if(localStorage.getItem("cartItems")){
  totalItems = parseInt(localStorage.getItem("cartItems"));
  cartCount.textContent = totalItems;
}

addCartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    totalItems++;
    cartCount.textContent = totalItems;
    localStorage.setItem("cartItems", totalItems);
  });
});

// =================== NAVIGATION FUNCTION ===================
function navigateTo(pageUrl) {
  window.location.href = pageUrl;
}

// =================== LOGIN/SIGNUP ===================
const DEMO_EMAIL = "user@test.com";
const DEMO_PASSWORD = "123456";

function validateLogin() {
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value.trim();

  if(email === "" || password === "") {
    alert("Please enter both email and password.");
    return false;
  }

  if(email === DEMO_EMAIL && password === DEMO_PASSWORD) {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials. Please try again.");
  }
}

function validateSignup() {
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value.trim();

  if(name === "" || email === "" || password === "") {
    alert("Please fill all fields.");
    return false;
  }

  window.location.href = "dashboard.html";
}

// =================== NAV LINKS SMOOTH SCROLL ===================
document.querySelectorAll('nav ul.nav-links li a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if(targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    if(navbar.classList.contains('active')) {
      navbar.classList.remove('active');
    }
  });
});


// =================== NAV LINKS SMOOTH SCROLL ===================
document.querySelectorAll('nav ul.nav-links li a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if(targetSection){
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    if(navLinks.classList.contains('show')){
      navLinks.classList.remove('show');
    }
  });
});
function scrollToCategory(shop) {
    // Check if the element exists
    const element = document.getElementById(shop);
    if (element) {
        // Smooth scroll to the element
        element.scrollIntoView({
            behavior: "smooth"
        });
    } else {
        console.warn("No element found with ID:", shop);
    }
}
