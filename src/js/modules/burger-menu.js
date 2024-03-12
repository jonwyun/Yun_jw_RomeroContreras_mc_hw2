export function burgerMenu() {
   const button = document.querySelector("#button");
   const burgerCon = document.querySelector("#burgerCon");

   function hamburgerMenu() {
     burgerCon.classList.toggle("slideToggle");
     button.classList.toggle("expanded");
   }
   button.addEventListener("click", hamburgerMenu);
}