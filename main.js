
let cart = JSON.parse(localStorage.getItem('cart')) || [];


function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} has been added to your cart!`);
}


function loadCart() {
  const cartContainer = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");
  let total = 0;
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalElement.innerText = "0";
    return;
  }

  cart.forEach((item, index) => {
    total += item.price;
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
      <p>${item.name} - ₹${item.price}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartContainer.appendChild(itemDiv);
  });

  totalElement.innerText = total;
}
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart(); // Refresh cart
}
