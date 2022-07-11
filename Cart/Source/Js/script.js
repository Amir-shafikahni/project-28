let $ = document;

/////////////////////////////

// variables ////////////////
const body = $.body;
const alertsContainer = $.querySelector(".alerts-container");
const cartBody = $.querySelector(".cart-body");
const cartItemTotalPrice = $.querySelector(".item-total-price");

let userBasket = [];


// functions //////////////////////
// to change minHeight of body by window resize event
function liveUserScreenHeight() {
  let userScreenHeight = visualViewport.height + "px";
  body.style.minHeight = userScreenHeight;
}

// to get user cart info from local storage and update the dom
function getCartInfoFromLocalStorage() {
  userBasket = JSON.parse(localStorage.getItem("cartItems"));

  if (userBasket.length) {
    userCartGenerator(userBasket);
  }
}

// to update the dom based on user basket info
function userCartGenerator(basketArray) {
  cartBody.innerHTML = "";
  let counter = 0;

  basketArray.forEach(function (item) {
    cartBody.insertAdjacentHTML(
      "beforeend" ,
      '<div class="cart-item col-12 col-lg-10 d-flex m-auto">'+
        '<div class="cart-item-info d-flex me-2">'+
          '<img class="cart-item-img img-fliud" src="'+ item.src +'">'+
          '<h5 class="cart-item-title m-0 ps-2">'+ item.title +'</h5>'+
        '</div>'+
        '<div class="cart-item-price me-2">'+
          '<h5 class="item-price">'+ item.price + '$' +'</h5>'+
        '</div>'+
        '<div class="cart-item-quantity d-flex">'+
          '<div class="cart-item-btn-container d-flex m-auto">'+
            '<i class="cart-item-plus-btn bi bi-plus" onclick=itemCountPlus('+ item.id +')></i>'+
            '<span class="cart-item-count text-center my-1">'+ item.count +'</span>'+
            '<i class="cart-item-trash-btn bi bi-trash trash'+counter+'" onclick="removeCartItem('+ item.id +')"></i>'+
            '<i class="cart-item-minus-btn bi bi-dash minus'+counter+'" onclick=itemCountMinus('+ item.id +')></i>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<hr class="line col-12 col-lg-10 d-flex m-auto my-3">'
    );

    let cartItemTrashBtn = $.querySelector(".trash" + counter + "");
    let cartItemMinusBtn = $.querySelector(".minus" + counter + "");

    if (item.count !== 1) {
      cartItemMinusBtn.style.display = "block";
      cartItemTrashBtn.style.display = "none";
    }

    counter++;
  });

  totalCartPrice(userBasket);
}

// to calculate total price of user basket
function totalCartPrice(cartArray) {
  let finallItemssPrice = 0;

  cartArray.forEach(function (item) {
    let itemPrice = item.price * item.count;

    finallItemssPrice += itemPrice;
  });

  cartItemTotalPrice.innerHTML = finallItemssPrice + "$";
}

// to update the item quantity by +1
function itemCountPlus(itemId) {
  let product = userBasket.find(function (cartItem) {
    return cartItem.id === itemId;
  });

  userBasket.forEach(function (cartItem) {
    if (cartItem.id === product.id && cartItem.count < 10) {
      cartItem.count++;
      return;
    }
  });

  userCartGenerator(userBasket);
  setCartInfoIntoLocalStorage(userBasket);
  showAlertAnimation("price-updated", "Total Price updated");
}

// to update the item quantity by -1
function itemCountMinus(itemId) {
  let product = userBasket.find(function (cartItem) {
    return cartItem.id === itemId;
  });

  userBasket.forEach(function (cartItem) {
    if (cartItem.id === product.id) {
      cartItem.count--;
      return;
    }
  });

  userCartGenerator(userBasket);
  setCartInfoIntoLocalStorage(userBasket);
  showAlertAnimation("price-updated", "Total Price updated");
}

// to remove an item from user basket by clicking on trash btn
function removeCartItem(itemId) {
  let itemIndex = userBasket.findIndex(function (cartItem) {
    return cartItem.id === itemId;
  });

  userBasket.splice(itemIndex, 1);

  userCartGenerator(userBasket);
  setCartInfoIntoLocalStorage(userBasket);
  showAlertAnimation("item-deleted", "Item successfully deleted");
}

// to set user basket info in to the local storage
function setCartInfoIntoLocalStorage(cartArray) {
  localStorage.setItem("cartItems", JSON.stringify(cartArray));
}

// to make an alert template based on alert classname and its masssage
// and then append it to dom
function showAlertAnimation(alertClass, alertMassage) {
  let alertElem = $.createElement("div");
  alertElem.className = alertClass;
  alertElem.innerHTML = alertMassage;

  alertsContainer.append(alertElem);

  setTimeout(function () {
    alertElem.style.cssText = "transform: translateX(0px);opacity: 1;";
  }, 10);
  setTimeout(function () {
    alertElem.style.cssText = "";
  }, 4500);
  setTimeout(function () {
    alertElem.remove();
  }, 6000);
}


// event listeners //////////////////
window.addEventListener("resize", liveUserScreenHeight);
window.addEventListener("load", liveUserScreenHeight);
window.addEventListener("load", getCartInfoFromLocalStorage);