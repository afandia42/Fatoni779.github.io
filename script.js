AOS.init();

const menuToggle = document.querySelector(".menu-toggle input");
const header = document.querySelector("header ul");

menuToggle.addEventListener("click", function () {
  header.classList.toggle("slide");
});

window.addEventListener("scroll", function () {
  const nav = document.getElementById("nav");
  if (window.pageYOffset > 0) {
    nav.classList.add("bg-black");
  } else {
    nav.classList.remove("bg-black");
  }
});

const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

function openKurikulum() {
  content1.style.transform = "translateX(0)";
  content2.style.transform = "translateX(100%)";
  btn1.style.color = "#f44336";
  btn2.style.color = "black";
  content1.style.transitionDelay = "0.3s";
  content2.style.transitionDelay = "0s";
}

function openMetode() {
  content1.style.transform = "translateX(100%)";
  content2.style.transform = "translateX(0)";
  btn1.style.color = "black";
  btn2.style.color = "#f44336";
  content1.style.transitionDelay = "0s";
  content2.style.transitionDelay = "0.3s";
}

const btn = document.querySelector(".btn-play");
const videoContainer = document.querySelector(".video-container");
const close = document.querySelector(".close");

btn.addEventListener("click", function () {
  videoContainer.classList.add("show");
});

close.addEventListener("click", function () {
  videoContainer.classList.remove("show");
});
