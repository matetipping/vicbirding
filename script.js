window.onscroll = function() {resizeHeader()};

function resizeHeader() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByTagName("header")[0].style.height = "124px";
    document.getElementsByTagName("header")[0].getElementsByTagName("img")[0].style.height = "60px";
  } else {
    document.getElementsByTagName("header")[0].style.height = "184px";
    document.getElementsByTagName("header")[0].getElementsByTagName("img")[0].style.height = "120px";
  }
}
