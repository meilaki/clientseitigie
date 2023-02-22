let toggle = document.querySelector('#toggle');
let navbar = document.querySelector('.navbarLeft');

toggle.onclick = () => {
  navbar.classList.toggle('active');
};

let cartToggle = document.querySelector('#cartToggle');
let cart = document.querySelector('.cart');

cartToggle.onclick = () => {
  cart.classList.toggle('active');
};

function darkMode() {
  const test = document.getElementById('openLight').className;
  console.log(test);
}

function myFunction() {
  var element = document.body;
  element.classList.toggle('dark-mode');
}
