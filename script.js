window.onscroll = function() {resizeHeader()};
window.onload = function() {setHandlers()};

function setHandlers() {
  document.getElementById("nav-hamburger").addEventListener("click", openNavMenu);
  var heroNavButtons = document.getElementsByClassName("hero-navigation-button");
  Array.prototype.forEach.call(heroNavButtons, function(el) {
    el.addEventListener("click", function() {
      shiftHero(el);
    });
  });
}
                            
function resizeHeader() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByTagName("header")[0].style.height = "124px";
    document.getElementsByTagName("header")[0].getElementsByTagName("img")[0].style.height = "60px";
    document.getElementById("nav-hamburger").style.marginTop = "0";
    document.getElementsByTagName("nav")[0].style.top = "104px";
  } else {
    document.getElementsByTagName("header")[0].style.height = "184px";
    document.getElementsByTagName("header")[0].getElementsByTagName("img")[0].style.height = "120px";
    document.getElementById("nav-hamburger").style.marginTop = "32px";
    document.getElementsByTagName("nav")[0].style.top = "136px";
  }
}

function openNavMenu() {
  if (document.getElementById("nav-hamburger").classList.contains("selected")) {
    document.getElementById("nav-hamburger").classList.remove("selected");
    document.getElementsByTagName("nav")[0].style.right = "-250px";
  } else {
    document.getElementById("nav-hamburger").classList.add("selected");
    document.getElementsByTagName("nav")[0].style.right = "0px";
  }
}

function shiftHero(el) {
  document.getElementsByClassName("hero-navigation-button selected")[0].classList.remove("selected");
  el.classList.add("selected");
  var selectedImageNo = el.id.split("-")[2];
  var heroPositionOffset = (Number(selectedImageNo) - 1) * 100;
  console.log(selectedImageNo);
  document.getElementById("hero-image-1").css("left", String(0 - heroPositionOffset) + "%");
  document.getElementById("hero-image-2").css("left", String(100 - heroPositionOffset) + "%");
  document.getElementById("hero-image-3").css("left", String(200 - heroPositionOffset) + "%");
  document.getElementById("hero-image-4").css("left", String(300 - heroPositionOffset) + "%");
  document.getElementById("hero-image-5").css("left", String(400 - heroPositionOffset) + "%");
}
