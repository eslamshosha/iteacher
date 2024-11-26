$(window).on("load", function () {
  $("body").removeClass("overflow");
});
//showPass
function showPass(showPass) {
  sibling = showPass.parentElement.nextElementSibling;
  showIcon= $(".password-show i");
  
  // sibling.focus();
  if (showPass.checked) {
    sibling.setAttribute("type", "text");
    showIcon.addClass("active");
  } else {
    sibling.setAttribute("type", "password");
    showIcon.removeClass("active");
  }
}
