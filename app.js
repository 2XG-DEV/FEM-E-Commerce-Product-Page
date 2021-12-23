function myFunction() {
  var x = document.getElementById("menu");
  var y = document.getElementById("overlay");
  if (y.style.display === "none") {
    y.style.display = "block";
    x.src = "./images/icon-close.svg";
  } else {
    y.style.display = "none";
    x.src = "./images/icon-menu.svg";
  }
}

let counterDisplay = document.getElementById("amount");
let counterIncr = document.getElementById("increment");
let counterDecr = document.getElementById("decrement");
let cartDisplay = document.getElementById("cart");
let addButton = document.getElementById("addToCart");

let count = 0;
let inBasket = 0;

function updateAmount() {
  counterDisplay.innerHTML = count;
}

function updateCartIcon() {
  if (inBasket === 0) {
    cartDisplay.setAttribute("data-before", "");
    return;
  }
  cartDisplay.setAttribute("data-before", inBasket);
}

updateAmount();

counterIncr.addEventListener("click", () => {
  count++;
  updateAmount();
});

counterDecr.addEventListener("click", () => {
  if (count > 0) {
    count--;
  }
  updateAmount();
});

addButton.addEventListener("click", () => {
  addToCart();
});

function toggleMobileCart() {
  let cartView = document.getElementById("mCart");
  updateCartContent();

  if (cartView.style.display === "none") {
    cartView.style.display = "block";
  } else {
    cartView.style.display = "none";
  }
}

function updateCartContent() {
  let container = document.getElementById("cart-container");
  if (inBasket === 0) {
    container.innerHTML = "<p>No items in cart</p>";
  } else {
    container.innerHTML = `  <div class="item">
    <div class="item__container flex align-center">
      <div class="item__image-container mr-m">
        <img
          src="./images/image-product-1-thumbnail.jpg"
          alt="thumbnail"
        />
      </div>
      <div class="item__writing text-gray">
        <p>Autumn Limited Edition</p>
        <p>
          $125.00 x ${inBasket}
          <span class="item__total text-bold text-dark"
            >${"$" + inBasket * 125}</span
          >
        </p>
      </div>
      <button class="item__delete ml-auto" onclick="clearCart()">
        <img src="./images/icon-delete.svg" alt="" />
      </button>
    </div>
  </div>
  <div class="checkoutButton-container">
    <button class="checkoutButton text-white text-bold">
      Checkout
    </button>
  </div>`;
  }
}

function clearCart() {
  inBasket = 0;
  updateCartContent();
  updateCartIcon();
}

function addToCart() {
  inBasket += count;
  updateCartIcon();
  updateCartContent();
}
