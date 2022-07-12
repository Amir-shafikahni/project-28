let $ = document;

///////////////////////////

// variables ///////////////
const body = $.body;
const userBasketItemsCount = $.querySelector(".user-basket-items-count");
const alertsContainer = $.querySelector(".alerts-container");
const mainCardContainerRow = $.querySelector(".main-card-container .row");
const pagiantionButtonsContainer = $.querySelector(
  ".pagiantion-buttons-container"
);

let shopItemsArray = [
  {
    id: 1,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "100",
    src: "./Source/Media/Img/card-img-1.png",
    count: 0,
  },
  {
    id: 2,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "200",
    src: "./Source/Media/Img/card-img-2.png",
    count: 0,
  },
  {
    id: 3,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "300",
    src: "./Source/Media/Img/card-img-3.png",
    count: 0,
  },
  {
    id: 4,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "400",
    src: "./Source/Media/Img/card-img-4.png",
    count: 0,
  },
  {
    id: 5,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "500",
    src: "./Source/Media/Img/card-img-5.png",
    count: 0,
  },
  {
    id: 6,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "600",
    src: "./Source/Media/Img/card-img-6.png",
    count: 0,
  },
  {
    id: 7,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "700",
    src: "./Source/Media/Img/card-img-7.png",
    count: 0,
  },
  {
    id: 8,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "800",
    src: "./Source/Media/Img/card-img-8.png",
    count: 0,
  },
  {
    id: 9,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "900",
    src: "./Source/Media/Img/card-img-9.png",
    count: 0,
  },
  {
    id: 10,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1000",
    src: "./Source/Media/Img/card-img-10.png",
    count: 0,
  },
  {
    id: 11,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1100",
    src: "./Source/Media/Img/card-img-11.png",
    count: 0,
  },
  {
    id: 12,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1200",
    src: "./Source/Media/Img/card-img-12.png",
    count: 0,
  },
  {
    id: 13,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1300",
    src: "./Source/Media/Img/card-img-13.png",
    count: 0,
  },
  {
    id: 14,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1400",
    src: "./Source/Media/Img/card-img-14.png",
    count: 0,
  },
  {
    id: 15,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1500",
    src: "./Source/Media/Img/card-img-15.png",
    count: 0,
  },
  {
    id: 16,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1600",
    src: "./Source/Media/Img/card-img-16.png",
    count: 0,
  },
  {
    id: 17,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1700",
    src: "./Source/Media/Img/card-img-17.png",
    count: 0,
  },
  {
    id: 18,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1800",
    src: "./Source/Media/Img/card-img-18.png",
    count: 0,
  },
  {
    id: 19,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1900",
    src: "./Source/Media/Img/card-img-19.png",
    count: 0,
  },
  {
    id: 20,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2000",
    src: "./Source/Media/Img/card-img-20.png",
    count: 0,
  },
  {
    id: 21,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2100",
    src: "./Source/Media/Img/card-img-21.png",
    count: 0,
  },
  {
    id: 22,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2200",
    src: "./Source/Media/Img/card-img-22.png",
    count: 0,
  },
  {
    id: 23,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2300",
    src: "./Source/Media/Img/card-img-23.png",
    count: 0,
  },
  {
    id: 24,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2400",
    src: "./Source/Media/Img/card-img-24.png",
    count: 0,
  },
  {
    id: 25,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2500",
    src: "./Source/Media/Img/card-img-25.png",
    count: 0,
  },
  {
    id: 26,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2600",
    src: "./Source/Media/Img/card-img-26.png",
    count: 0,
  },
  {
    id: 27,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2700",
    src: "./Source/Media/Img/card-img-27.png",
    count: 0,
  },
  {
    id: 28,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2800",
    src: "./Source/Media/Img/card-img-28.png",
    count: 0,
  },
  {
    id: 29,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2900",
    src: "./Source/Media/Img/card-img-29.png",
    count: 0,
  },
  {
    id: 30,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3000",
    src: "./Source/Media/Img/card-img-30.png",
    count: 0,
  },
  {
    id: 31,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3100",
    src: "./Source/Media/Img/card-img-31.png",
    count: 0,
  },
  {
    id: 32,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3200",
    src: "./Source/Media/Img/card-img-32.png",
    count: 0,
  },
  {
    id: 33,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3300",
    src: "./Source/Media/Img/card-img-33.png",
    count: 0,
  },
  {
    id: 34,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3400",
    src: "./Source/Media/Img/card-img-34.png",
    count: 0,
  },
  {
    id: 35,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3500",
    src: "./Source/Media/Img/card-img-35.png",
    count: 0,
  },
  {
    id: 36,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3600",
    src: "./Source/Media/Img/card-img-36.png",
    count: 0,
  },
  {
    id: 37,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3700",
    src: "./Source/Media/Img/card-img-37.png",
    count: 0,
  },
  {
    id: 38,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3800",
    src: "./Source/Media/Img/card-img-38.png",
    count: 0,
  },
  {
    id: 39,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3900",
    src: "./Source/Media/Img/card-img-39.png",
    count: 0,
  },
  {
    id: 40,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "4000",
    src: "./Source/Media/Img/card-img-40.png",
    count: 0,
  },
  {
    id: 41,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "4100",
    src: "./Source/Media/Img/card-img-41.png",
    count: 0,
  },
  {
    id: 42,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "4200",
    src: "./Source/Media/Img/card-img-42.png",
    count: 0,
  },
  {
    id: 43,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "4300",
    src: "./Source/Media/Img/card-img-43.png",
    count: 0,
  },
  {
    id: 44,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "4400",
    src: "./Source/Media/Img/card-img-44.png",
    count: 0,
  },
  {
    id: 45,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "4500",
    src: "./Source/Media/Img/card-img-45.png",
    count: 0,
  },
];

let userBasket = [];

// number of rows per page
let rowCounter = 8;


// fucntions ////////////////
// to change minHeight of body by window resize event
function liveUserScreenHeight() {
  let userScreenHeight = visualViewport.height + "px";
  body.style.minHeight = userScreenHeight;
}

function doesUserBasketExist() {
  let localBasket = localStorage.getItem("cartItems");

  if (!localBasket) {
    setBasketItemsInToLocalStorage(userBasket);
  }
}

// to set start and end slice Indexes on window laod
function setStartAndEndSliceIndex() {
  let slicerStratIndex = 0;
  let slicerEndIndex = rowCounter;

  shopItemsArraySlicer(slicerStratIndex, slicerEndIndex);
}

// to slice the main cards array to set pagiantion
function shopItemsArraySlicer(start, end) {
  let slicedShopItemsArray = shopItemsArray.slice(start, end);

  domUpdater(slicedShopItemsArray);

  scrollTo(0, 0);
}

// to update the dom with the sliced array and
//make a template and append it to dom
function domUpdater(itemsArray) {
  mainCardContainerRow.innerHTML = "";
  let cardsFragment = $.createDocumentFragment()

  itemsArray.forEach(function (card) {
    let cartContainer = $.createElement("div")
    cartContainer.className = "card-container col-12 col-md-6 col-lg-4 mb-4"

    cartContainer.insertAdjacentHTML("beforeend" , 
      '<div class="card-item">'+
        '<div class="card-item-img-container w-100">'+
          '<img class="card-item-img img-fluid w-100" src="' + card.src + '">'+
        '</div>'+
        '<div class="card-item-info m-3">'+
          '<h5 class="card-item-title">'+ card.title +'</h5>'+
          '<div class="card-item-detail my-2">'+ card.detail +'</div>'+
          '<h6 class="card-item-price text-end me-3 mt-3">'+ card.price + '$' +'</h6>'+
          '<button class="card-item-btn btn btn-outline-primary" title="Add To Cart" onclick=addToBasket('+ card.id +')>'+
            '<i class="card-item-Basket-icon bi bi-cart2"></i>'+
          '</button>'+
        '</div>'+
      '</div>'
    )

    cardsFragment.append(cartContainer)
  });

  mainCardContainerRow.append(cardsFragment)
}

// to update the pagiantion Btn numbers based on the main array length
// and then append them to dom
function paginationBtnsUpdater() {
  let paginationBtnsCount = Math.ceil(shopItemsArray.length / rowCounter);

  for (let i = 1; i <= paginationBtnsCount; i++) {
    let pagiantionBtn = $.createElement("button");
    pagiantionBtn.className = "pagiantion-btn btn btn-outline-primary me-1";
    pagiantionBtn.innerHTML = i;

    pagiantionBtn.addEventListener("click", function () {
      activeClassAdder(event);
      pagiantionIndexChanger(event);
    });

    pagiantionButtonsContainer.append(pagiantionBtn);
  }

  const firstPagiantionBtn = $.querySelector(".pagiantion-btn");
  firstPagiantionBtn.classList.add("active");
}

// to set active class to clicked Btn and
function activeClassAdder(event) {
  const allPagiantionsBtns = $.querySelectorAll(".pagiantion-btn");

  allPagiantionsBtns.forEach(function (btn) {
    btn.classList.remove("active");
  });

  event.target.classList.add("active");
  event.target.blur();
}

// change the strat and end slice indexes
function pagiantionIndexChanger(event) {
  slicerStratIndex = event.target.innerHTML * rowCounter - rowCounter;
  slicerEndIndex = event.target.innerHTML * rowCounter;

  shopItemsArraySlicer(slicerStratIndex, slicerEndIndex);
}

// to get user cart info from localStorage on load
function getBasketInfoFromLocalStorage() {
  let basket = JSON.parse(localStorage.getItem("cartItems"));

  if (basket) {
    userBasket = basket;

    updateBasketProducstCount(basket.length);
  }
}

// to add an item to user cart by clicking on add to cart Btn
function addToBasket(productId) {
  let product = shopItemsArray.find(function (item) {
    return item.id === productId;
  });

  let isThisItemExistInCart = false;

  userBasket.forEach(function (basketItem) {
    if (basketItem.id === product.id) {
      isThisItemExistInCart = true;
    }
  });

  if (isThisItemExistInCart) {
    showAlertAnimation("item-exist", "This item already exists in your cart");
  } else {
    product.count = 1;
    userBasket.push(product);

    updateBasketProducstCount(userBasket.length);
    setBasketItemsInToLocalStorage(userBasket);
    showAlertAnimation("item-added", "Item successfully added to your cart");
  }
}

// to update number of existing products in user cart
function updateBasketProducstCount(count) {
  userBasketItemsCount.innerHTML = count;
}

//  to set user cart info in to the local storage
function setBasketItemsInToLocalStorage(UserBasket) {
  localStorage.setItem("cartItems", JSON.stringify(UserBasket));
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
  }, 6000);
  setTimeout(function () {
    alertElem.remove();
  }, 6500);
}


// event listeners //////////////
window.addEventListener("resize", liveUserScreenHeight);
window.addEventListener("load", liveUserScreenHeight);
window.addEventListener("load", doesUserBasketExist);
window.addEventListener("load", getBasketInfoFromLocalStorage);
window.addEventListener("load", setStartAndEndSliceIndex);
window.addEventListener("load", paginationBtnsUpdater);
