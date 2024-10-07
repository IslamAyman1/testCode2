let result = document.getElementById('result');
const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
let products = [ // array that hold values in object
    {
        id : 1,
        imgSrc : "sand.jpg",
        instock : 8
    },
    {
        id : 2,
        imgSrc : "sand2.jpg",
        instock : 8
    },
    {
        id : 3,
        imgSrc : "sand3.jpg",
        instock : 8
    }
]
// SELECT ELEMENTS
// const subtotalEl = document.querySelector(".subtotal");
// const totalItemsInCartEl = document.querySelector(".total-items-in-cart");

// RENDER PRODUCTS
function renderProdcuts() {
  products.forEach((product) => {
    productsEl.innerHTML += `
            <div class="item">
                <div class="item-container">
                    <div class="item-img">
                        <img src="${product.imgSrc}" >
                    </div>
                   
                    <div class="add-to-wishlist">
                    </div>
                    <div class="add-to-cart" onclick="addToCart(${product.id})">
                     <button>add</button>
                    </div>
                </div>
            </div>
        `;
  });
}
renderProdcuts();

// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// ADD TO CART
function addToCart(id) {
  // check if prodcut already exist in cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}

// update cart
function updateCart() {
  renderCartItems();

  // save cart to local storage
  localStorage.setItem("CART", JSON.stringify(cart));
}

// calculate and render subtotal


// render cart items
function renderCartItems() {
  cartItemsEl.innerHTML = ""; // clear cart element
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `
        <div class="cart-item">
            <div class="item-info">
                <img src="${item.imgSrc}" >
            </div>
           
            <div class="units">
                <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                <div class="number">${item.numberOfUnits}</div>
                <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
                  <button onclick='removeItemFromCart(${item.id})'>remove</button>
                </div>
        </div>
      `;
  });
}

// remove item from cart
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  updateCart();
}

// change number of units for an item
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}

console.log('hisadf');

// let allButton = document.querySelectorAll('.pagination button');
// allButton.forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         allButton.forEach(btn => btn.classList.remove('active'));
//          button.classList.add('active')
//     })
// })

// var array = ["sand.jpg" , "sand2.jpg" , "sand3.jpg"]
// var i = 0;
// var interval;
// var currentImage = document.getElementById("random")


// function test (action){
//     if(action === 'continues'){
//       interval  =  setInterval(function(){
//            currentImage.setAttribute('src' , array[i])
//         if(i === 2){
//             i = 0
//         }else{
//           i++   
//         }  
//        },2000)
//     }else if(action === 'stop'){
//         clearInterval(interval)
//     }
// }

// var buttons = document.querySelectorAll('.colors');
// let willChange = document.getElementById('willChange')
// var btn
// buttons.forEach((button)=>{
//  button.addEventListener('click' ,(e)=>{
//      console.log(e.target.dataset.color);
//      willChange.style.backgroundColor = e.target.dataset.color
//  })
// })


// function test(value){
//     result.innerHTML = value
//     result.style.cssText = "color:blue;font-size:50px"
// }

// let previous = document.getElementById('previous');
// let next = document.getElementById('next');
// let setImage = document.getElementById('setImage');


// let myArray = ["sand.jpg" , "sand2.jpg" , "Sand3.jpg"]

// var i = 1;
// next.onclick = function(){
//    setImage.setAttribute("src" , myArray[i])
//     if(i < 2){
//         i++
//     }else{
//         i = 0
//     }
// }

// previous.onclick = function(){ 
//     setImage.setAttribute("src" , myArray[i])
//     if(i == 0){
//         i = 2
//     }else{
//         i--
//     }
// }

// next.onclick = function(){
//     setImage.setAttribute('src' , myArray[1])
// }
// previous.onclick = function(){
//     setImage.setAttribute('src' , myArray[0])
// }


// let myArray = ["islam" , 2 , 5  ,"ayman" , 8 ,"farid"]
// let newArray = []

// for(let i = 0 ; i < myArray.length ; i++){
//      if(typeof myArray[i] === "number"){
//          continue;
//         }
//         newArray.push(myArray[i])
//     }
//     console.log(newArray.join(""))


  
// let arrayOfParams = []
// function restParameter(a){
// //     arrayOfParams = params;
// //    mainLoop : for(let i = 0 ; i < params.length ; i++){
// //         if(typeof params[i] === "number"){
// //             break;
// //         }
// //         console.log(params[i])
// //     }
      
//       if(isNaN(a)){
//          console.log("wow its string");
//       }else{
//         console.log("wow its number");
//       }
// }

// let element = document.createElement('h1')
// let text = document.createTextNode("this is h1 text")
// document.body.appendChild(element)
// element.appendChild(text)

// let elementClass = element.classList.add('textStyle')
// if(element.classList.contains('textStyle')){
//   console.log(true);
// }
// if(element.hasAttributes()){
//   console.log('yes it has');
// }else{
//   console.log('no it not');
// }


// console.log(element)

// let arrayMap = [1 , 2 , 3, 4 , 5];
// let result = arrayMap.map((element)=>element > 0 ? element * -1 : element * -1)
// console.log(result.join("    "));

// let sentence = "islam6531ayman"
// console.log(sentence.split("").map((ele)=>isNaN(parseInt(ele))?ele : '').join(""));


// let email = "is606ay@gmail.com";
// console.log(email.slice(email.indexOf("@")))   
// console.log(sentence.includes(""));  

// let arrayReduce = [1,2,3,4,5];
// let result2 = arrayReduce.reduce((acc , currentValue , currentIndex , array)=>currentIndex)
// console.log(result2); 

// let myString = "EEElllzzzeroo"

// let removeLetters = myString.split("").filter(function(ele , index , array){
//     return array.indexOf(ele) == index
//   })  
//   // .reduce((acc , cur)=>acc + cur) 
    
// console.log(removeLetters);

// var user = new Object({
//   name : "islam",
//   age : 20,
//   address : "abd el wahab street",
//   "logs" : function(){
//     return console.log(this);
//   }
// });
// var myVar = 100
// console.log(this.myVar);

// let ok = document.getElementById('ok')
// ok.onclick = function(){
//   console.log(this);
// }

// let obj = Object.create(user);
// obj.address = "nasr city"
// console.log(obj.address); 


// let para = document.getElementsByTagName('p')
// para[0].className = 'class'
// para[0].id = 'id'
// let textOfParagraph = document.createTextNode("hello")
// para[0].appendChild(textOfParagraph)
// para[0].style.cssText = "background-color:blue;color:white;text-align:center"

// console.log(para[0].hasAttributes() ? "yes" : "no");

// if(para[0].hasAttributes()){
//   console.log("yes");
// }else{
//   console.log("no");
// }
// console.log(para[0].attributes);

// let myAtt = document.createAttribute("test")
// para[0].setAttributeNode(myAtt)

// console.log(document.body.childNodes);

// // window.onscroll = function(){
// //   console.log('scroll');
// // }

// para[0].style.setProperty("font-size" , "50px")
// para[0].style.removeProperty("color")

// window.onload = function(){
//   let open = document.getElementById("open")
//   // open.click()
// }


// var bring;
// function test(str = 'no arg'){
//   console.log(str);
// }
// test(bring)
// test(null)

// var value1 = 2;
// var value2 = 4

// console.log(value1 *= value1 + value2 / value1);  // 2(2+4/2) 3    8

// let object1 = {
//     a : 1,
//     b : 2,
//     c : 3,
// }

// let object2 = {
//      ...object1,
//      a : 0
// }
// console.log(object2.a); // result of a is 0


// let textTest = "web Designer";
// let endResult = document.getElementById("endResult")
// let splitText = textTest.split("")
// let i = 0  
// setInterval(function(){
//       if(i === 12){
//         i = 0
//       }else{
//         if(endResult.textContent === "web Designer"){
//            endResult.textContent = null
//         }else{
//         endResult.textContent += splitText[i]
//         ++i
//         }
//       }
// },1000)

// let you = Object.create({})
// you.a= "islam"
// console.log(you.a);

// let setTest = new Object()
// console.log()

// var result;
// function firstFactorial(num){
//     for(let i = num-1  ; i < num ;i--){ 
//       num*=i
//       if(i === 1){
//         break
//       }
//       result = num
//     }
//     console.log(result);
// }

// firstFactorial(16)   

// function FirstReverse(str){
//  console.log(str.split("").reverse().join(""))
// }
// FirstReverse("mohammed")

console.log("hi islam");

var results
var endresult = 0;
function AddNumbers(number){
  results = `${number}`
  for(let i = 0 ; i < results.length ; i++){
        console.log(parseInt(results[i])); 
        // var test = parseInt(results[i]);
        endresult += parseInt(results[i])
      }
      console.log("end result is " +endresult);
  }
AddNumbers(111)

let testElement = document.getElementById('testElement');
testElement.innerHTML = "Islam"
let splited = testElement.innerText.split('')
var i = 0; 
console.log(splited);
testElement.style.cssText = "background:red;color:blue;text-align:center;margin-bottom:20px"
setInterval(() => {
    if(i < splited.length){
      if(testElement.innerHTML == "Islam"){
         testElement.innerHTML = null
      }else{
        testElement.innerHTML += splited[i]
        ++i
      }  
  }else{
    i = 0
  }
  }, 1000);

