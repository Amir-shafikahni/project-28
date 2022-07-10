let $ = document;

///////////////////////////

// variables ///////////////
const body = $.body;
const cartProductsCountIcon = $.querySelector(".productsCount")
const alertsContainer = $.querySelector(".alertsContainer")
const paginationCardContainerRow = $.querySelector(
  ".paginationCardContainer .row"
);
const pagiantionButtonsContainer = $.querySelector(
  ".pagiantionButtonsContainer"
);0

let cardItemsArray = [
  {
    id: 1,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "100",
    src: "./Source/Media/Img/card-img-1.png",
    countInCart:0
  },
  {
    id: 2,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "200",
    src: "./Source/Media/Img/card-img-2.png",
    countInCart:0
  },
  {
    id: 3,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "300",
    src: "./Source/Media/Img/card-img-3.png",
    countInCart:0
  },
  {
    id: 4,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "400",
    src: "./Source/Media/Img/card-img-4.png",
    countInCart:0
  },
  {
    id: 5,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "500",
    src: "./Source/Media/Img/card-img-5.png",
    countInCart:0
  },
  {
    id: 6,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "600",
    src: "./Source/Media/Img/card-img-6.png",
    countInCart:0
  },
  {
    id: 7,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "700",
    src: "./Source/Media/Img/card-img-7.png",
    countInCart:0
  },
  {
    id: 8,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "800",
    src: "./Source/Media/Img/card-img-8.png",
    countInCart:0
  },
  {
    id: 9,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "900",
    src: "./Source/Media/Img/card-img-9.png",
    countInCart:0
  },
  {
    id: 10,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1000",
    src: "./Source/Media/Img/card-img-10.png",
    countInCart:0
  },
  {
    id: 11,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1100",
    src: "./Source/Media/Img/card-img-11.png",
    countInCart:0
  },
  {
    id: 12,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1200",
    src: "./Source/Media/Img/card-img-12.png",
    countInCart:0
  },
  {
    id: 13,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1300",
    src: "./Source/Media/Img/card-img-13.png",
    countInCart:0
  },
  {
    id: 14,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1400",
    src: "./Source/Media/Img/card-img-14.png",
    countInCart:0
  },
  {
    id: 15,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1500",
    src: "./Source/Media/Img/card-img-15.png",
    countInCart:0
  },
  {
    id: 16,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1600",
    src: "./Source/Media/Img/card-img-16.png",
    countInCart:0
  },
  {
    id: 17,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1700",
    src: "./Source/Media/Img/card-img-17.png",
    countInCart:0
  },
  {
    id: 18,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1800",
    src: "./Source/Media/Img/card-img-18.png",
    countInCart:0
  },
  {
    id: 19,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1900",
    src: "./Source/Media/Img/card-img-19.png",
    countInCart:0
  },
  {
    id: 20,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2000",
    src: "./Source/Media/Img/card-img-20.png",
    countInCart:0
  },
  {
    id: 21,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2100",
    src: "./Source/Media/Img/card-img-21.png",
    countInCart:0
  },
  {
    id: 22,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2200",
    src: "./Source/Media/Img/card-img-22.png",
    countInCart:0
  },
  {
    id: 23,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2300",
    src: "./Source/Media/Img/card-img-23.png",
    countInCart:0
  },
  {
    id: 24,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2400",
    src: "./Source/Media/Img/card-img-24.png",
    countInCart:0
  },
  {
    id: 25,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2500",
    src: "./Source/Media/Img/card-img-25.png",
    countInCart:0
  },
  {
    id: 26,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2600",
    src: "./Source/Media/Img/card-img-26.png",
    countInCart:0
  },
  {
    id: 27,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2700",
    src: "./Source/Media/Img/card-img-27.png",
    countInCart:0
  },
  {
    id: 28,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2800",
    src: "./Source/Media/Img/card-img-28.png",
    countInCart:0
  },
  {
    id: 29,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2900",
    src: "./Source/Media/Img/card-img-29.png",
    countInCart:0
  },
  {
    id: 30,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3000",
    src: "./Source/Media/Img/card-img-30.png",
    countInCart:0
  },
  {
    id: 31,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3100",
    src: "./Source/Media/Img/card-img-31.png",
    countInCart:0
  },
  {
    id: 32,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3200",
    src: "./Source/Media/Img/card-img-32.png",
    countInCart:0
  },
  {
    id: 33,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3300",
    src: "./Source/Media/Img/card-img-33.png",
    countInCart:0
  },
  {
    id: 34,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3400",
    src: "./Source/Media/Img/card-img-34.png",
    countInCart:0
  },
  {
    id: 35,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3500",
    src: "./Source/Media/Img/card-img-35.png",
    countInCart:0
  },
  {
    id: 36,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3600",
    src: "./Source/Media/Img/card-img-36.png",
    countInCart:0
  },
  {
    id: 37,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3700",
    src: "./Source/Media/Img/card-img-37.png",
    countInCart:0
  },
  {
    id: 38,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3800",
    src: "./Source/Media/Img/card-img-38.png",
    countInCart:0
  },
  {
    id: 39,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3900",
    src: "./Source/Media/Img/card-img-39.png",
    countInCart:0
  },
  {
    id: 40,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "4000",
    src: "./Source/Media/Img/card-img-40.png",
    countInCart:0
  },
  {
    id: 41,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "4100",
    src: "./Source/Media/Img/card-img-41.png",
    countInCart:0
  },
  {
    id: 42,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "4200",
    src: "./Source/Media/Img/card-img-42.png",
    countInCart:0
  },
  {
    id: 43,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "4300",
    src: "./Source/Media/Img/card-img-43.png",
    countInCart:0
  },
  {
    id: 44,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "4400",
    src: "./Source/Media/Img/card-img-44.png",
    countInCart:0
  },
  {
    id: 45,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "4500",
    src: "./Source/Media/Img/card-img-45.png",
    countInCart:0
  },
];

let cartItemsArray =[]

// number of rows per page
let rowCounter = 8

// fucntions ////////////////
// to change minHeight of body by window resize event
function liveUserScreenHeight() {
  let userScreenHeight = visualViewport.height + "px";
  body.style.minHeight = userScreenHeight;
}

// to set start and end slice Indexes on window laod
function setStartAndEndSliceIndex() {
  let slicerStratIndex = 0;
  let slicerEndIndex = rowCounter;

  cardItemsArraySlicer(slicerStratIndex, slicerEndIndex);
}

// to slice the main cards array to set pagiantion
function cardItemsArraySlicer(start, end) {
  let slicedCardItemArray = cardItemsArray.slice(start, end);

  domUpdater(slicedCardItemArray);

  scrollTo(0, 0);
}

// to update the dom with the sliced array and
//make a template and append it to dom
function domUpdater(cardArray) {
  paginationCardContainerRow.innerHTML = "";

  cardArray.forEach(function (card) {
    let cardContainer = $.createElement("div");
    cardContainer.className = "cardContainer col-12 col-md-6 col-lg-4 mb-4";

    let cardItem = $.createElement("div");
    cardItem.className = "cardItem";

    let cardImgContainer = $.createElement("div");
    cardImgContainer.className = "cardImgContainer w-100";

    let cardImg = $.createElement("img");
    cardImg.className = "img-fluid w-100";
    cardImg.setAttribute("src", card.src);

    let cardInfo = $.createElement("div");
    cardInfo.className = "cardInfo m-3";

    let cardTitle = $.createElement("h5");
    cardTitle.className = "cardTitle";
    cardTitle.innerHTML = card.title;

    let cardDetail = $.createElement("div");
    cardDetail.className = "cardDetail my-2";
    cardDetail.innerHTML = card.detail;

    let cardPrice = $.createElement("h6");
    cardPrice.className = "cardPrice text-end me-3 mt-3";
    cardPrice.innerHTML = card.price + "$";

    let addToCartBtn = $.createElement("button");
    addToCartBtn.className = "btn btn-outline-primary";
    addToCartBtn.setAttribute("title" , "Add To Cart")
    addToCartBtn.setAttribute("onclick" , "addToCart(" + JSON.stringify(card) +")")

    let cartIcon = $.createElement("i");
    cartIcon.className = "bi bi-cart-plus";

    cardContainer.append(cardItem);
    cardItem.append(cardImgContainer, cardInfo);
    cardImgContainer.append(cardImg);
    cardInfo.append(cardTitle, cardDetail, cardPrice, addToCartBtn);
    addToCartBtn.append(cartIcon);

    paginationCardContainerRow.append(cardContainer);
  });
}

// to update the pagiantion Btn numbers based on the main array lenght
// and then append them to dom
function paginationBtnsUpdater() {
  let btnsCount = Math.ceil(cardItemsArray.length / rowCounter);

  for (let i = 1; i <= btnsCount; i++) {
    let pagiantionBtn = $.createElement("button");
    pagiantionBtn.className = "pagiantionBtn btn btn-outline-primary";
    pagiantionBtn.setAttribute("onclick", "activeClassAndIndexChanger(event)");
    pagiantionBtn.innerHTML = i;

    pagiantionButtonsContainer.append(pagiantionBtn);
  }

  const firstPagiantionBtn = $.querySelector(".pagiantionBtn");
  firstPagiantionBtn.classList.add("active");
}

// to set active class to clicked Btn and 
// change the strat and end slice indexes
function activeClassAndIndexChanger(event) {
  const allPagiantionsBtns = $.querySelectorAll(".pagiantionBtn");

  allPagiantionsBtns.forEach(function (btn) {
    btn.classList.remove("active");
  });

  event.target.classList.add("active");
  event.target.blur();

  slicerStratIndex = event.target.innerHTML * rowCounter - rowCounter;
  slicerEndIndex = event.target.innerHTML * rowCounter;

  cardItemsArraySlicer(slicerStratIndex, slicerEndIndex);
}

function getCartInfoFromLocalStorage(){
  let cart = JSON.parse(localStorage.getItem("cartItems"))

  if(cart){
    cartItemsArray = cart

    updateCartProducstCount(cart.length)
  }
}

function addToCart(item , event){
  let isThisItemExistInCart = false
  cartItemsArray.forEach(function(cartItem){
    if(cartItem.id === item.id){
      isThisItemExistInCart = true
    }
  })    

  if(isThisItemExistInCart){
    alertAnimation("itemExist" , "This item already exists in your cart")
  }else{
    item.countInCart = 1
    cartItemsArray.push(item)

    updateCartProducstCount(cartItemsArray.length)
    setCartItemsInToLocalStorage(cartItemsArray)
    alertAnimation("itemAdded" , "Item successfully added to your cart")
  }
}

function updateCartProducstCount(count){
  cartProductsCountIcon.innerHTML = count
}

function setCartItemsInToLocalStorage(cartItemsArray){
  localStorage.setItem("cartItems" , JSON.stringify(cartItemsArray))
}

function alertAnimation(alertClass , alertMassage){
  let alertElem = $.createElement("div")
  alertElem.className = alertClass
  alertElem.innerHTML = alertMassage
  
  alertsContainer.append(alertElem)
  setTimeout(function(){
    alertElem.style.cssText = "transform: translateX(0px);opacity: 1;"
  },10)

  setTimeout(function(){
    alertElem.style.cssText = ""
  },6010)
  setTimeout(function(){
    alertElem.remove()
  },7000)
}

// event listeners //////////////
window.addEventListener("resize", liveUserScreenHeight);
window.addEventListener("load", liveUserScreenHeight);
window.addEventListener("load", getCartInfoFromLocalStorage)
window.addEventListener("load", setStartAndEndSliceIndex);
window.addEventListener("load", paginationBtnsUpdater);