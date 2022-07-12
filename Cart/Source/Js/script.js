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
  let cartItemsFragment = $.createDocumentFragment();
  
  basketArray.forEach(function (item) {
    let cartItem = $.createElement("div");
    cartItem.className = "cart-item col-12 col-lg-10 d-flex m-auto";

    cartItem.insertAdjacentHTML("beforeend" ,
     '<div class="cart-item-info d-flex me-2">'+
        '<img class="cart-item-img img-fliud" src="'+ item.src +'">'+
        '<h5 class="cart-item-title m-0 ps-2">'+ item.title +'</h5>'+
      '</div>'+
      '<div class="cart-item-price me-2">'+
        '<h5 class="item-price">'+ item.price + '$' +'</h5>'+
      '</div>'
    )

    let cartItemQuantity = $.createElement("div")
    cartItemQuantity.className = "cart-item-quantity d-flex"

    let cartItemBtnContainer = $.createElement("div")
    cartItemBtnContainer.className = "cart-item-btn-container d-flex m-auto"

    let cartItemPlusBtn = $.createElement("i")
    cartItemPlusBtn.className = "cart-item-plus-btn bi bi-plus"
    cartItemPlusBtn.setAttribute("onclick" , "itemCountPlus("+ item.id+")")

    let cartItemCount = $.createElement("span")
    cartItemCount.innerHTML = item.count
    cartItemCount.className = "cart-item-count text-center my-1"

    let cartItemTrashBtn = $.createElement("i")
    cartItemTrashBtn.className = "cart-item-trash-btn bi bi-trash"
    cartItemTrashBtn.setAttribute("onclick" , "removeCartItem("+ item.id+")")

    let cartItemMinusBtn = $.createElement("i")
    cartItemMinusBtn.className = "cart-item-minus-btn bi bi-dash"
    cartItemMinusBtn.setAttribute("onclick" , "itemCountMinus("+ item.id+")")

    let line = $.createElement("hr");
    line.className = "line col-12 col-lg-10 d-flex m-auto my-3";

    if(item.count > 1){
      cartItemMinusBtn.style.display = "block"
      cartItemTrashBtn.style.display = "none"
    }

    cartItemBtnContainer.append(cartItemPlusBtn,cartItemCount,cartItemMinusBtn,cartItemTrashBtn)
    cartItemQuantity.append(cartItemBtnContainer)
    cartItem.append(cartItemQuantity)

    cartItemsFragment.append(cartItem,line);
  });

  cartBody.append(cartItemsFragment);

  totalCartPrice(userBasket);
}

// to calculate total price of user basket
function totalCartPrice(basket) {
  let finallItemssPrice = 0;

  basket.forEach(function (item) {
    let itemPrice = item.price * item.count;

    finallItemssPrice += itemPrice;
  });

  cartItemTotalPrice.innerHTML = finallItemssPrice + "$";
}

// to update the item quantity by +1
function itemCountPlus(itemId) {
  let product = userBasket.find(function (item) {
    return item.id === itemId;
  });

  userBasket.forEach(function (item) {
    if (item.id === product.id && item.count < 10) {
      item.count++;
      return;
    }
  });

  userCartGenerator(userBasket);
  setCartInfoIntoLocalStorage(userBasket);
  showAlertAnimation("price-updated", "Total Price updated");
}

// to update the item quantity by -1
function itemCountMinus(itemId) {
  let product = userBasket.find(function (item) {
    return item.id === itemId;
  });

  userBasket.forEach(function (item) {
    if (item.id === product.id) {
      item.count--;
      return;
    }
  });

  userCartGenerator(userBasket);
  setCartInfoIntoLocalStorage(userBasket);
  showAlertAnimation("price-updated", "Total Price updated");
}

// to remove an item from user basket by clicking on trash btn
function removeCartItem(itemId) {
  userBasket = userBasket.filter(function(item){
    return item.id !== itemId
  })

  userCartGenerator(userBasket);
  setCartInfoIntoLocalStorage(userBasket);
  showAlertAnimation("item-deleted", "Item successfully deleted");
}

// to set user basket info in to the local storage
function setCartInfoIntoLocalStorage(basket) {
  localStorage.setItem("cartItems", JSON.stringify(basket));
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