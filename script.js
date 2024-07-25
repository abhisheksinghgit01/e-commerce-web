document.addEventListener("DOMContentLoaded", function() {
    const cartIcon = document.getElementById("cart-icon");
    const cartContainer = document.getElementById("cart-container");
    const closeCart = document.getElementById("close-cart");

    cartIcon.addEventListener("click", function() {
        cartContainer.classList.add("open");
    });

    closeCart.addEventListener("click", function() {
        cartContainer.classList.remove("open");
    });
});

const cartContainer = document.getElementById('cart-container');
const cartContent = document.querySelector('.cart-content');
const totalPriceElement = document.querySelector('.total-price');
const totalTitleElement = document.querySelector('.total-title');
const btnBuy = document.querySelector('.btn-buy');

let cartBoxes = [];

// Function to update the total price
function updateTotalPrice() {
  let totalPrice = 0;
  cartBoxes.forEach(cartBox => {
    const priceElement = cartBox.querySelector('.cart-price');
    const quantityElement = cartBox.querySelector('.cart-quantity');
    const price = parseFloat(priceElement.textContent.replace('$', '')); // Remove dollar sign
    const quantity = parseInt(quantityElement.value); 
    totalPrice += price * quantity;
  });
  totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

function addCartClicked(event){
    var button = event.target
    var shopProducts = button.parentElement
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updateTotalPrice();
}

function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement('div')
    cartShopBox.classList.add('cart-box')
    var cartItems = document.getElementsByClassName('cart-content')[0]
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title')
    for (var i = 0; i < cartItemsNames.length; i++){
        if (cartItemsNames[i]. innerText === title){
            alert("Item already added to the cart!")
            return
        }
    }
    var cartBoxContent = `
        <img src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class='bx bxs-trash-alt cart-remove'></i>
    `;
    cartShopBox.innerHTML = cartBoxContent;
    cartContent.append(cartShopBox);
    cartBoxes.push(cartShopBox); // Add the new cart box to the cartBoxes array
    const deleteButton = cartShopBox.querySelector('.cart-remove');
    deleteButton.addEventListener('click', () => {
        cartShopBox.remove();
        cartBoxes = cartBoxes.filter(box => box!== cartShopBox); // Remove the cart box from the cartBoxes array
        updateTotalPrice();
    });
    const quantityElement = cartShopBox.querySelector('.cart-quantity');
    quantityElement.addEventListener('input', updateTotalPrice);
}

var addCartButtons = document.getElementsByClassName('add-cart');
for (var i = 0; i < addCartButtons.length; i++){
    var button = addCartButtons[i];
    button.addEventListener("click", addCartClicked);
}
document.getElementById("buy")[0]
document.getElementsByClassName("btn-buy")[0]
.addEventListener("click", buyButtonClicked);
function buyButtonClicked(){
    alert('Your Order Is Placed')
    var cartContent = document.getElementsByClassName('cart-content')[0]
    while (cartContent.hasChildNodes()){
        
    }
}
// Initial update of the total price
updateTotalPrice();