window.onscroll = function() {resizeHeader()};

function resizeHeader() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByTagName("header").style.height = "124px";
    document.getElementsByTagName("header").getElementsByTagName("img").style.height = "60px";
  } else {
    document.getElementsByTagName("header").style.height = "184px";
    document.getElementsByTagName("header").getElementsByTagName("img").style.height = "120px";
  }
}
