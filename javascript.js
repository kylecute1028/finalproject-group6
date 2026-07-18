const products = [
  { name: "Figurine", price: 500, category: "figurines" },
  { name: "Card", price: 50, category: "cards" },
  { name: "Poster", price: 200, category: "posters" },
  { name: "Sticker", price: 20, category: "stickers" },
  { name: "Plushie", price: 800, category: "plushies" },
  { name: "Guidebook", price: 300, category: "guidebooks" },
  { name: "Keychain", price: 100, category: "keychains" },
  { name: "Pin", price: 70, category: "pins" },
  { name: "Keyboard Mat", price: 600, category: "keyboard mats" },
  { name: "T-shirt", price: 400, category: "t-shirts" },
  { name: "Hoodie", price: 900, category: "hoodies" },
  { name: "Cosplay Costume", price: 1500, category: "cosplay" }
];

function displayProducts() {
  const container = document.getElementById("product-list");
  container.innerHTML = "";
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML =
      "<h3>" + p.name + "</h3>" +
      "<p>PHP" + p.price + "</p>" +
      "<button onclick=\"addToCart('" + p.name + "')\">Add to Cart</button>";
    container.appendChild(div);
  });
}

let cart = [];
function addToCart(productName) {
  cart.push(productName);
  alert(productName + " added to cart!");
}

displayProducts();
