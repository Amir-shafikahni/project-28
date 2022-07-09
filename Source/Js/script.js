let $ = document;

///////////////////////////

// variables ///////////////
const body = $.body;
const paginationCardContainerRow = $.querySelector(
  ".paginationCardContainer .row"
);
const pagiantionButtonsContainer = $.querySelector(
  ".pagiantionButtonsContainer"
);

let cardItemsArray = [
  {
    id: 1,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "100$",
    src: "./Source/Media/Img/card-img-1.png",
  },
  {
    id: 2,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "200$",
    src: "./Source/Media/Img/card-img-2.png",
  },
  {
    id: 3,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "300$",
    src: "./Source/Media/Img/card-img-3.png",
  },
  {
    id: 4,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "400$",
    src: "./Source/Media/Img/card-img-4.png",
  },
  {
    id: 5,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "500$",
    src: "./Source/Media/Img/card-img-5.png",
  },
  {
    id: 6,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "600$",
    src: "./Source/Media/Img/card-img-6.png",
  },
  {
    id: 7,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "700$",
    src: "./Source/Media/Img/card-img-7.png",
  },
  {
    id: 8,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "800$",
    src: "./Source/Media/Img/card-img-8.png",
  },
  {
    id: 9,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "900$",
    src: "./Source/Media/Img/card-img-9.png",
  },
  {
    id: 10,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1000$",
    src: "./Source/Media/Img/card-img-10.png",
  },
  {
    id: 11,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1100$",
    src: "./Source/Media/Img/card-img-11.png",
  },
  {
    id: 12,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1200$",
    src: "./Source/Media/Img/card-img-12.png",
  },
  {
    id: 13,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1300$",
    src: "./Source/Media/Img/card-img-13.png",
  },
  {
    id: 14,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1400$",
    src: "./Source/Media/Img/card-img-14.png",
  },
  {
    id: 15,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1500$",
    src: "./Source/Media/Img/card-img-15.png",
  },
  {
    id: 16,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1600$",
    src: "./Source/Media/Img/card-img-16.png",
  },
  {
    id: 17,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1700$",
    src: "./Source/Media/Img/card-img-17.png",
  },
  {
    id: 18,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1800$",
    src: "./Source/Media/Img/card-img-18.png",
  },
  {
    id: 19,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "1900$",
    src: "./Source/Media/Img/card-img-19.png",
  },
  {
    id: 20,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2000$",
    src: "./Source/Media/Img/card-img-20.png",
  },
  {
    id: 21,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2100$",
    src: "./Source/Media/Img/card-img-21.png",
  },
  {
    id: 22,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2200$",
    src: "./Source/Media/Img/card-img-22.png",
  },
  {
    id: 23,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2300$",
    src: "./Source/Media/Img/card-img-23.png",
  },
  {
    id: 24,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2400$",
    src: "./Source/Media/Img/card-img-24.png",
  },
  {
    id: 25,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2500$",
    src: "./Source/Media/Img/card-img-25.png",
  },
  {
    id: 26,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2600$",
    src: "./Source/Media/Img/card-img-26.png",
  },
  {
    id: 27,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2700$",
    src: "./Source/Media/Img/card-img-27.png",
  },
  {
    id: 28,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2800$",
    src: "./Source/Media/Img/card-img-28.png",
  },
  {
    id: 29,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "2900$",
    src: "./Source/Media/Img/card-img-29.png",
  },
  {
    id: 30,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3000$",
    src: "./Source/Media/Img/card-img-30.png",
  },
  {
    id: 31,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3100$",
    src: "./Source/Media/Img/card-img-31.png",
  },
  {
    id: 32,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3200$",
    src: "./Source/Media/Img/card-img-32.png",
  },
  {
    id: 33,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3300$",
    src: "./Source/Media/Img/card-img-33.png",
  },
  {
    id: 34,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3400$",
    src: "./Source/Media/Img/card-img-34.png",
  },
  {
    id: 35,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3500$",
    src: "./Source/Media/Img/card-img-35.png",
  },
  {
    id: 36,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3600$",
    src: "./Source/Media/Img/card-img-36.png",
  },
  {
    id: 37,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3700$",
    src: "./Source/Media/Img/card-img-37.png",
  },
  {
    id: 38,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3800$",
    src: "./Source/Media/Img/card-img-38.png",
  },
  {
    id: 39,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "3900$",
    src: "./Source/Media/Img/card-img-39.png",
  },
  {
    id: 40,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "4000$",
    src: "./Source/Media/Img/card-img-40.png",
  },
  {
    id: 41,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "4100$",
    src: "./Source/Media/Img/card-img-41.png",
  },
  {
    id: 42,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "4200$",
    src: "./Source/Media/Img/card-img-42.png",
  },
  {
    id: 43,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "4300$",
    src: "./Source/Media/Img/card-img-43.png",
  },
  {
    id: 44,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "4400$",
    src: "./Source/Media/Img/card-img-44.png",
  },
  {
    id: 45,
    title: "lorem Ipsum",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorem adipisci. Dolorem nostrum ab praesentium.",
    price: "4500$",
    src: "./Source/Media/Img/card-img-45.png",
  },
];

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
    cardPrice.innerHTML = card.price;

    let addToCartBtn = $.createElement("button");
    addToCartBtn.className = "btn btn-outline-primary";

    let cartIcon = $.createElement("i");
    cartIcon.className = "bi bi-cart2";

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
  let btnsCount = Math.floor(cardItemsArray.length / rowCounter);

  if (cardItemsArray.length % rowCounter) {
    btnsCount++;
  }

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
// event listeners //////////////
window.addEventListener("resize", liveUserScreenHeight);
window.addEventListener("load", liveUserScreenHeight);
window.addEventListener("load", setStartAndEndSliceIndex);
window.addEventListener("load", paginationBtnsUpdater);