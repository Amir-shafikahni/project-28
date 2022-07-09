let $ = document 

/////////////////////////////

// variables ////////////////
const body = $.body
const cartBody = $.querySelector(".cartBody")
const TotalPrice = $.querySelector(".TotalPrice")


// functions ////////////////////
// to change minHeight of body by window resize event
function liveUserScreenHeight() {
    let userScreenHeight = visualViewport.height + "px";
    body.style.minHeight = userScreenHeight;
  }

function getCartInfoFromLocalStorage(){
    let cartItems = JSON.parse(localStorage.getItem("cartItems"))

    if(cartItems){
        cartGenerator(cartItems)
    }
}

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
    
        let quantityInput = $.createElement("input")
        quantityInput.className = "form-control w-50 me-2"
        quantityInput.setAttribute("type" , "number")
        quantityInput.setAttribute("value" , "1")
        quantityInput.setAttribute("min" , "1")
        quantityInput.setAttribute("max" , "10")
        quantityInput.setAttribute("onchange" , "totalCartPrice(" + JSON.stringify(cartArray) + "," + cart.id + ")")

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
        itemQuantity.append(quantityInput , itemRemoveBtn)
        itemRemoveBtn.append(trashIcon)

        cartBody.append(cartItem , line)
    });


    totalCartPrice(cartArray)
}

function totalCartPrice(cartArray , cartId){

    const allquantityInputs = $.querySelectorAll(".form-control")

    let finallPrice = 0
    let inputIndex = 0

    cartArray.forEach(function(cart){
        let cartPrice = cart.price * allquantityInputs[inputIndex].value    
        
        finallPrice += cartPrice

        inputIndex++
    })

    // if(cartId){
    //     cartArray.forEach(function(cart){
    //         if (cart.id === cartId){
    //             cart.countInCart = inputValue
    //             console.log(cart.countInCart);
    //         }
    //     })
    // }

    TotalPrice.innerHTML = finallPrice + "$"
}

function removeItem(cartArray , cartId){
    let cartIndex = cartArray.findIndex(function(cart){
        return cart.id === cartId
    })

    cartArray.splice(cartIndex , 1)

    cartGenerator(cartArray)
    setCartInfoIntoLocalStorage(cartArray)
}

function setCartInfoIntoLocalStorage(cartArray){
    localStorage.setItem("cartItems" , JSON.stringify(cartArray))
}

// event listeners //////////////
window.addEventListener("resize", liveUserScreenHeight);
window.addEventListener("load", liveUserScreenHeight);
window.addEventListener("load" , getCartInfoFromLocalStorage)