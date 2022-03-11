// >> The Navigation's Functions:

// ------ Open and close the nav menu Function: 

let toggle_menu = document.querySelector('.toggle_menu');
let nav = document.querySelector('.main-nav');
let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2'); 
let line3 = document.querySelector('.line3');
let open = false;

toggle_menu.addEventListener("click", function(){
  if (open === true) {
    nav.style.cssText = `top: calc(100% + 40px);`;
    line1.style.cssText = `transform: rotate(0deg) translate(0px)`;
    line2.style.cssText = `transform: translateX(0px); opacity: 1`;
    line3.style.cssText = `transform: rotate(0deg) translate(0px)`;
    open = false;
  } else {
    nav.style.cssText = "top: calc(100% + 1px); opacity: 1; z-index: 5";
    line1.style.cssText = `transform: rotate(45deg) translate(6px, 5px); background-color: red; `;
    line2.style.cssText = `transform: translateX(-15px); opacity: 0`;
    line3.style.cssText = `transform: rotate(-45deg) translate(6px, -5px); background-color: red; `;
    open = true;
  } 
}); 






// ------- Search field (input) Function: 

// let search_icon = document.querySelector('#search-icon');
// let input = document.querySelector('#search-form');
// let search = false;

// search_icon.addEventListener("click", function(){
//   if (search === true) {
//       input.style.display = "none";
//       open = false;
//   } else {
//       input.style.display = "block";
//       open = true;
//   }
// });






// ------- nav active link function:

// --------- scroll to the top Function:

let scrollUp = document.querySelector('.scroll-up');

window.onscroll = function () {
    if (window.scrollY >= 600 ) {
      scrollUp.style.display = "block";
    }else {
      scrollUp.style.display = "none";
    }
};

scrollUp.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
};



// Testing the files: 
console.log("Hello from js files");

//# sourceMappingURL=main.js.map
