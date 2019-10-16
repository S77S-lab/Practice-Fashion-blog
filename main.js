/* menu button */
function btnFunction() {
document.getElementById("menu-content").classList.toggle("show__menu");
}
window.onclick = function(event) {
    if (!event.target.matches('.navigation__menupic')) {
      var menu = document.getElementsByClassName("navigation__menu__content");
      var i;
      for (i = 0; i < menu.length; i++) {
        var openMenu = menu[i];
        if (openMenu.classList.contains('show__menu')) {
          openMenu.classList.remove('show__menu');
        }
      }
    }
  }
/* view posts */
function viewPostGuide() {
  var postView = document.getElementsByClassName("page-post__guide");
  var textView = document.getElementsByClassName("page-post__text__guide");
  postView[0].classList.toggle("show__post");
  textView[0].classList.toggle("show__post__text");
}
function viewPostTickets() {
  var postView = document.getElementsByClassName("page-post__tickets");
  var textView = document.getElementsByClassName("page-post__text__tickets");
  postView[0].classList.toggle("show__post");
  textView[0].classList.toggle("show__post__text");
}
function viewPostDressing() {
  var postView = document.getElementsByClassName("page-post__dressing");
  var textView = document.getElementsByClassName("page-post__text__dressing");
  postView[0].classList.toggle("show__post");
  textView[0].classList.toggle("show__post__text");
}