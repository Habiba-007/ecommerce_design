
var header_cart_products = [
  {
    image_no: 1,
    name: `MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch`,
    price: `500`,
  },
  {
    image_no: 14,
    name: `Inateck 12.3-13 Inch MacBook Case Sleeve `,
    price: `300`,
  },
  {
    image_no: 13,
    name: `Laptop Privacy Screen for 13 inch MacBook Pro & MacBook Air`,
    price: `400`,
  }

];
// one way to capture image/icon handling
var catagory_list = [
  {
    icon: `mobile.svg`,
    name: `Mobile phones`,
  },
  {
    icon: `monitor.svg`,
    name: `Laptops & Computers`,
  },
  {
    icon: `mobile.svg`,
    name: `Tablets & E-reader`,
  },
  {
    icon: `watch.svg`,
    name: `Wearables`,
  },
  {
    icon: `headphone.svg`,
    name: `Audio`,
  },
  {
    icon: `camera.svg`,
    name: `Cameras`,
  },
  {
    icon: `game.svg`,
    name: `Gaming`,
  },
  {
    icon: `data.svg`,
    name: `Networking`,
  },
  {
    icon: 'accessories.svg',
    name: `Accessories`
  },

 
  // `Mobile phones`,
  // `Laptops & Computers`,
  // `Tablets & E-reader`,
  // `Wearables`,
  // `Audio`,
  // `Cameras`,
  // `Gaming`,
  // `Networking`,
  // `Accessories`,
]
// for_dynamic_with_top_product_items 
var top_product_items = [
  {
    image_no: 1,
    name: `clothes`
  },
  {
    image_no: 10,
    name: `Black-Shoe`
  },
  {
    image_no: 12,
    name: `Black-Device`
  },
  {
    image_no: 16,
    name: `Black-Phone`
  },
  {
    image_no: 8,
    name: `Black-Phone`
  },
  {
    image_no: 13,
    name: `Electronic-device`
  },

]
// another way to capture image/icon handling 
var subcatagory_list_icon = [
  {
    icon: `assets/images/icons/mobile.svg`,
    name: `Mobile-phones`,
  },
  {
    icon: `assets/images/icons/headphone.svg`,
    name: `Audio`,
  },
  {
    icon: `assets/images/icons/data.svg`,
    name: `Networking`,
  },
]

let search_keywords = [
  "MacBook Pro",
  "AirPods Pro",
  "Samsung S9",
  "Tablet",
  "xiaomi",
  "JBL speaker",
  "Canon",
  "AirPods Max",
  "Asus",
  "MagSafe"
]
let used_keywords = [
  "Tablets",
  "Headphones",
  "Smartphones",
  "Smartwatch",
  "Laptops",
  "USB Drive",
  "Phone Cases"
]

function decrementCart(price_target) {
  event.preventDefault()
  let input = event.currentTarget.nextElementSibling;
  input.value = parseInt(input.value) - 1;

  let price = document.getElementById(price_target);
  price.innerText = parseFloat(price.dataset.price) * input.value;
}

function incrementCart(price_target) {
  event.preventDefault();
  let input = event.currentTarget.previousElementSibling;
  input.value = parseInt(input.value) + 1;

  let price = document.getElementById(price_target)
  price.innerText = parseFloat(price.dataset.price) * input.value;
}


/*
let house_road = (number) => {
  let road = `road_number ${number}`
  return road
}
let final_result = house_road(254 / 1 / 4)
console.log(final_result)
 
const house = (num1, num2, num3) => {
  let houseNo = num1 - num2 - num3;
  return houseNo;
}
houseNo(10, 20, 30);
console.log(houseNo);


let presentTk = 0;
const sum = (num_1, num_2) => num_1 + num_2;

function bringSome(presentTk = 0, item = 0, price = 0){
  console.log(`item is-${item} & price is-${price}`)
  presentTk = (presentTk, price);
  return presentTk;
}
*/

/*
const theRider = (firsRider, secondRider) => {
  return  `the rider was ${firsRider}-> the secondRider ${secondRider}`
}
let riding = theRider('ami', 'tumi')
console.log(object);

const check = "400" == 400;
console.log(check);
const compare = (bangla, english) => {
  return `the confort languase was ${bangla} & the cretical languase was ${english}`;
}
let checkCompare = compare('bangla is not easy subject', 'other english is not hard subject');
console.log(checkCompare)
let banner = (print, picture) => {
  return `the print was ${print}, the pricture was ${picture}`
}
console.log(banner('liftlet,prospectus', 'banner picutre,large banner'));
console.log("server is crashed in down arrow");
*/