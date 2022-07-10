let $ = document 

/////////////////////////////

// variables ////////////////
const body = $.body
const alertsContainer = $.querySelector(".alerts-container")
const cartBody = $.querySelector(".cart-body")
const cartItemTotalPrice = $.querySelector(".item-total-price")

// functions ////////////////////
// to change minHeight of body by window resize event
function liveUserScreenHeight() {
    let userScreenHeight = visualViewport.height + "px";
    body.style.minHeight = userScreenHeight;
  }

// to get user cart info from local storage and update the dom
function getCartInfoFromLocalStorage(){
    let cartItems = JSON.parse(localStorage.getItem("cartItems"))

    cartGenerator(cartItems)
}

// to update the dom based on user cart info
function cartGenerator(cartArray){
    cartBody.innerHTML = ""

    cartArray.forEach(function(item){
        let cartItem = $.createElement("div")
        cartItem.className = "cart-item col-12 col-lg-10 d-flex m-auto"
        
        let cartItemInfo = $.createElement("div")
        cartItemInfo.className = "cart-item-info d-flex me-2"
    
        let cartItemImg = $.createElement("img")
        cartItemImg.className = "cart-item-img img-fliud"
        cartItemImg.setAttribute("src" , item.src)
    
        let cartItemTitle = $.createElement("h5")
        cartItemTitle.className = "cart-item-title m-0 ps-2"
        cartItemTitle.innerHTML = item.title
        
        let cartItemPriceElem = $.createElement("div")
        cartItemPriceElem.className = "cart-item-price me-2"
    
        let cartItemPrice = $.createElement("h5")
        cartItemPrice.className = "item-price"
        cartItemPrice.innerHTML = item.price + "$"
    
        let cartItemQuantity = $.createElement("div")
        cartItemQuantity.className = "cart-item-quantity d-flex"
    
        let cartItemBtnContainer = $.createElement("div")
        cartItemBtnContainer.className = "cart-item-btn-container d-flex m-auto"

        let cartItemPlusBtn = $.createElement("i")
        cartItemPlusBtn.className = "cart-item-plus-btn bi bi-plus"
        cartItemPlusBtn.addEventListener("click" , function(){
            itemCountPlus(cartArray , item)
        })

        let cartItemCount = $.createElement("span")
        cartItemCount.className = "cart-item-count text-center my-1"
        cartItemCount.innerHTML = item.count

        let cartItemMinusBtn = $.createElement("i")
        cartItemMinusBtn.className = "cart-item-minus-btn bi bi-dash"
        cartItemMinusBtn.addEventListener("click" , function(){
            itemCountMinus(cartArray , item)
        })

        let cartItemTrashBtn = $.createElement("i")
        cartItemTrashBtn.className = "cart-item-trash-btn bi bi-trash"
        cartItemTrashBtn.addEventListener("click" , function(){
            removeCartItem(cartArray , item)
        })

        if(item.count !== 1){
            cartItemMinusBtn.style.display = "block"
            cartItemTrashBtn.style.display = "none"
        }

        let line = $.createElement("hr")
        line.className = "line my-3"

        cartItem.append(cartItemInfo , cartItemPriceElem , cartItemQuantity)
        cartItemInfo.append(cartItemImg , cartItemTitle)
        cartItemPriceElem.append(cartItemPrice)
        cartItemQuantity.append(cartItemBtnContainer)
        cartItemBtnContainer.append(cartItemPlusBtn ,cartItemCount,cartItemMinusBtn,cartItemTrashBtn)

        cartBody.append(cartItem , line)
    });

    totalCartPrice(cartArray)
}

// to calculate total price of user cart
function totalCartPrice(cartArray){
    let finallCartsPrice = 0

    cartArray.forEach(function(cart){
        let cartPrice = cart.price * cart.count    
        
        finallCartsPrice += cartPrice
    })

    cartItemTotalPrice.innerHTML = finallCartsPrice + "$"
}

// to update the item quantity by +1
function itemCountPlus(cartArray , item){
    cartArray.forEach(function(cartItem){
        if(cartItem.id === item.id && cartItem.count < 10){
            cartItem.count++
            return
        }
    })

    cartGenerator(cartArray)
    setCartInfoIntoLocalStorage(cartArray)
    showAlertAnimation("price-updated" , "Total Price updated")
}

// to update the item quantity by -1
function itemCountMinus(cartArray , item){
    cartArray.forEach(function(cartItem){
        if(cartItem.id === item.id){
            cartItem.count--
            return
        }
    })

    cartGenerator(cartArray)
    setCartInfoIntoLocalStorage(cartArray)
    showAlertAnimation("price-updated" , "Total Price updated")
}

// to remove an item by clicking on trash btn
function removeCartItem(cartArray , item){
    let itemIndex = cartArray.findIndex(function(cartItem){
        return cartItem.id === item.id
    })

    cartArray.splice(itemIndex , 1)

    cartGenerator(cartArray)
    setCartInfoIntoLocalStorage(cartArray)
    showAlertAnimation("item-deleted" , "Item successfully deleted")
}

// to set user cart info in to the local storage
function setCartInfoIntoLocalStorage(cartArray){
    localStorage.setItem("cartItems" , JSON.stringify(cartArray))
}

// to make an alert template based on alert classname and its masssage
// and then append it to dom
function showAlertAnimation(alertClass , alertMassage){
    let alertElem = $.createElement("div")
    alertElem.className = alertClass
    alertElem.innerHTML = alertMassage
    
    alertsContainer.append(alertElem)

    setTimeout(function(){
      alertElem.style.cssText = "transform: translateX(0px);opacity: 1;"
    },10)
    setTimeout(function(){
      alertElem.style.cssText = ""
    },4500)
    setTimeout(function(){
      alertElem.remove()
    },5000)
}

// event listeners //////////////
window.addEventListener("resize", liveUserScreenHeight);
window.addEventListener("load", liveUserScreenHeight);
window.addEventListener("load" , getCartInfoFromLocalStorage);