const cartButtons = document.querySelectorAll(".add-to-cart");

cartButtons.forEach(button => {
  button.addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let item = button.parentElement.parentElement.querySelector("li").textContent;

    cart.push(item);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Item added to cart!");
  });
});


const buyButtons = document.querySelectorAll(".buy-now");

buyButtons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Item purchased!");
  });
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartList = document.getElementById("cart-items");

if (cart.length === 0) {
  cartList.innerHTML = "<li>Your cart is empty</li>";
} else {
  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    cartList.appendChild(li);
  });
}

const checkoutButton = document.getElementById("checkout-btn");

if (checkoutButton) {
  checkoutButton.addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
      alert("Cart is empty!");
    } else {
      window.location.href = "checkout.html";
    }
  });
}

const discardButton = document.getElementById("discard-cart");

if (discardButton) {
  discardButton.addEventListener("click", () => {
    localStorage.removeItem("cart");

    alert("Cart discarded!");

    window.location.reload();
  });
}
