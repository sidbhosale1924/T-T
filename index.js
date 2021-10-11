let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let closeForm = document.querySelector("#form-close");
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let videoBtn = document.querySelectorAll(".vid-btn");

//to remove the search bar when tou start scrolling.

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};

//search button
searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});
//search button end

//log in form
formBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
});

closeForm.addEventListener("click", () => {
  loginForm.classList.remove("active");
});
//log in form end

//for to extend nav bar
menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});
//for to extend nav bar end

//for changing the activness of video button on home page
videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});

//for changing the activness of video button on home page end

//review swipper
