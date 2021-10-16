window.onscroll = function() {resizeHeader()};

function resizeHeader() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    var headerElems = document.getElementsByTagName("header")[0].style.height = "124px";
    var headerImgElems = document.getElementsByTagName("header")[0].getElementsByTagName("img").style.height = "60px";
  } else {
    document.getElementsByTagName("header")[0].style.height = "184px";
    document.getElementsByTagName("header")[0].getElementsByTagName("img").style.height = "120px";
  }
}
