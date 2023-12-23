window.onload = function () {
  let toTop = document.getElementById("to-top");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 650 ||
      document.documentElement.scrollTop > 650
    ) {
      toTop.style.visibility = "visible";
    } else {
      toTop.style.visibility = "hidden";
    }
  }
};
