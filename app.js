// Flag indicating whether the cart is visible
var cartVisible = false;

// Wait for the page to load before executing the script
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

function ready() {
  // Add functionality to the "remove from cart" buttons
  var deleteItemButtons = document.getElementsByClassName('btn-eliminar');
  for (var i = 0; i < deleteItemButtons.length; i++) {
    var button = deleteItemButtons[i];
    button.addEventListener('click', removeItemFromCart);
  }

  // Add functionality to the "add quantity" buttons
  var addQuantityButtons = document.getElementsByClassName('sumar-cantidad');
  for (var i = 0; i < addQuantityButtons.length; i++) {
    var button = addQuantityButtons[i];
    button.addEventListener('click', addQuantity);
  }

  // Add functionality to the "subtract quantity" buttons
  var subtractQuantityButtons = document.getElementsByClassName('restar-cantidad');
  for (var i = 0; i < subtractQuantityButtons.length; i++) {
    var button = subtractQuantityButtons[i];
    button.addEventListener('click', subtractQuantity);
  }

  // Add functionality to the "add to cart" buttons
  var addToCartButtons = document.getElementsByClassName('boton-item');
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener('click', addToCartClicked);
  }

  // Add functionality to the "pay" button
  document.getElementsByClassName('btn-pagar')[0].addEventListener('click', payClicked);
}

// Remove all elements from the cart and hide it
function payClicked() {
  alert("Thank you for your purchase!");

  // Remove all elements from the cart
  var cartItems = document.getElementsByClassName('carrito-items')[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }

  updateCartTotal();
  hideCart();
}

// Function that handles clicking the "add to cart" button
function addToCartClicked(event) {
  var button = event.target;
  var item = button.parentElement;
  var title = item.getElementsByClassName('titulo-item')[0].innerText;
  var price = item.getElementsByClassName('precio-item')[0].innerText;
  var imageSource = item.getElementsByClassName('img-item')[0].src;

  console.log(imageSource);

  addItemToCart(title, price, imageSource);

  showCart();
}

// Function that shows the cart
function showCart() {
  cartVisible = true;
  var cart = document.getElementsByClassName('carrito')[0];
  cart.style.marginRight = '0';
  cart.style.opacity = '1';

  var items = document.getElementsByClassName('contenedor-items')[0];
  items.style.width = '60%';
}

// Function that adds an item to the cart
function addItemToCart(title, price, imageSource) {
  var item = document.createElement('div');
  item.classList.add('item');
  var cartItems = document.getElementsByClassName('carrito-items')[0];

  // Check if the item is already in the cart
  var cartItemTitles = cartItems.getElementsByClassName('carrito-item-titulo');
  for (var i = 0; i < cartItemTitles.length; i++) {
    if (cartItemTitles[i].innerText === title) {
      alert("Item already exists in the cart");
      return;
    }
  }

  var cartItemContent = `
    <div class="carrito-item">
      <img src="<span class="math-inline">\{imageSource\}" width\="80px" alt\=""\>
        <div class\="carrito\-item\-details"\>
        <span class\="carrito\-item\-title"\></span>{title}</span>
        <div class="quantity-selector">
          <i class="fa-solid fa-minus subtract-quantity"></i>
          <input type="text" value="1" class="carrito-item-quantity" disabled>
          <i class="fa-solid fa-plus add-quantity"></i>
    `
}