let $ = document 

/////////////////////////////

// variables ////////////////
const body = $.body
const alertsContainer = $.querySelector(".alertsContainer")
const cartBody = $.querySelector(".cartBody")
const TotalPrice = $.querySelector(".TotalPrice")

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

    cartArray.forEach(function(cart){
        let cartItem = $.createElement("div")
        cartItem.className = "cartItem col-12 col-lg-10 d-flex m-auto"
        
        let itemInfo = $.createElement("div")
        itemInfo.className = "itemInfo d-flex"
    
        let itemImg = $.createElement("img")
        itemImg.className = "itemImg img-fliud"
        itemImg.setAttribute("src" , cart.src)
    
        let itemTitle = $.createElement("h5")
        itemTitle.className = "itemTitle m-0 ps-2"
        itemTitle.innerHTML = cart.title
        
        let itemPriceElem = $.createElement("div")
        itemPriceElem.className = "itemPrice mx-3"
    
        let itemPrice = $.createElement("h5")
        itemPrice.className = "price"
        itemPrice.innerHTML = cart.price + "$"
    
        let itemQuantity = $.createElement("div")
        itemQuantity.className = "itemQuantity d-flex"
    
        let buttonsContainer = $.createElement("div")
        buttonsContainer.className = "buttonsContainer d-flex"

        let minusBtn = $.createElement("button")
        minusBtn.className = "minus btn btn-outline-primary mx-1"
        minusBtn.innerHTML = "-"
        minusBtn.setAttribute("onclick" , "substractFromCartQuantity(" + JSON.stringify(cartArray) +","+ cart.id +")")

        let plusBtn = $.createElement("button")
        plusBtn.className = "plus btn btn-outline-primary"
        plusBtn.innerHTML = "+"
        plusBtn.setAttribute("onclick" , "addToCartQuantity(" + JSON.stringify(cartArray) +","+ cart.id +")")

        let quantityInput = $.createElement("input")
        quantityInput.className = "form-control w-25 mx-1"
        quantityInput.setAttribute("type" , "text")
        quantityInput.setAttribute("value" , cart.countInCart)
        quantityInput.setAttribute("min" , "1")
        quantityInput.setAttribute("max" , "10")
        quantityInput.setAttribute("disabled" , "")

        let itemRemoveBtn = $.createElement("button")
        itemRemoveBtn.className = "btn btn-danger"
        itemRemoveBtn.setAttribute("onclick" , "removeItem(" + JSON.stringify(cartArray) + "," + cart.id + ")")

        let trashIcon = $.createElement("i")
        trashIcon.className = "bi bi-trash"

        let line = $.createElement("hr")
        line.className = "line my-3"

        cartItem.append(itemInfo , itemPriceElem , itemQuantity)
        itemInfo.append(itemImg , itemTitle)
        itemPriceElem.append(itemPrice)
        itemQuantity.append(buttonsContainer, quantityInput , itemRemoveBtn)
        buttonsContainer.append(minusBtn , plusBtn)
        itemRemoveBtn.append(trashIcon)

        cartBody.append(cartItem , line)
    });

    totalCartPrice(cartArray)
}

// to calculate total price of user cart
function totalCartPrice(cartArray){
    let finallCartsPrice = 0

    cartArray.forEach(function(cart){
        let cartPrice = cart.price * cart.countInCart    
        
        finallCartsPrice += cartPrice
    })

    TotalPrice.innerHTML = finallCartsPrice + "$"
}

// to remove an item by clicking on trash btn
function removeItem(cartArray , cartId){
    let cartIndex = cartArray.findIndex(function(cart){
        return cart.id === cartId
    })

    cartArray.splice(cartIndex , 1)

    cartGenerator(cartArray)
    setCartInfoIntoLocalStorage(cartArray)
    showAlertAnimation("itemDeleted" , "Item successfully deleted")
}

// to set user cart info in to the local storage
function setCartInfoIntoLocalStorage(cartArray){
    localStorage.setItem("cartItems" , JSON.stringify(cartArray))
}

// to update the item quantity by +1
// and item quantity must be between 1 and 10
function addToCartQuantity(cartArray , cartId){
    cartArray.forEach(function(cart){
        if(cart.id === cartId && cart.countInCart < 10){
            cart.countInCart++

            cartGenerator(cartArray)
            setCartInfoIntoLocalStorage(cartArray)
            showAlertAnimation("priceUpdated" , "Total Price updated")
            return
        }
    })
}

// to update the item quantity by -1
// and item quantity must be between 1 and 10
function substractFromCartQuantity(cartArray , cartId){
    cartArray.forEach(function(cart){
        if(cart.id === cartId && cart.countInCart > 1){
            cart.countInCart--
            
            cartGenerator(cartArray)
            setCartInfoIntoLocalStorage(cartArray)
            showAlertAnimation("priceUpdated" , "Total Price updated")
            return
        }
    })
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