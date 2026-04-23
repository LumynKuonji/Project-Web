// SIDEBAR
function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}

// PROFILE
function goProfile() {
  window.location.href = "profile.html";
}

// MODAL
function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// FILTER
function filterProduk(kategori) {
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (kategori === "semua" || card.dataset.kategori === kategori) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// CART
let cart = [];

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      let nama = card.querySelector("h4").innerText;
      let harga = card.querySelector("p").innerText;

      cart.push({ nama, harga });
      updateCart();
    });
  });
});

function updateCart() {
  let container = document.getElementById("cartItems");
  container.innerHTML = "";

  cart.forEach(item => {
    let div = document.createElement("div");
    div.innerText = item.nama + " - " + item.harga;
    container.appendChild(div);
  });
}