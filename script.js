window.onscroll = function() {resizeHeader()};
window.onload = function() {setHandlers()};

function setHandlers() {
  document.getElementById("nav-hamburger").onclick = function() {openNavMenu()};
}
                            
function resizeHeader() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByTagName("header")[0].style.height = "124px";
    document.getElementsByTagName("header")[0].getElementsByTagName("img")[0].style.height = "60px";
    document.getElementById("nav-hamburger").style.marginTop = "0";
    document.getElementsByTagName("nav")[0].style.top = "60px";
  } else {
    document.getElementsByTagName("header")[0].style.height = "184px";
    document.getElementsByTagName("header")[0].getElementsByTagName("img")[0].style.height = "120px";
    document.getElementById("nav-hamburger").style.marginTop = "32px";
    document.getElementsByTagName("nav")[0].style.top = "120px";
  }
}

function openNavMenu() {
  if (document.getElementById("nav-hamburger").classList.contains("selected")) {
    document.getElementById("nav-hamburger").classList.remove("selected");
  } else {
    document.getElementById("nav-hamburger").classList.add("selected");
  }
}
