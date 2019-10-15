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
  var post = document.getElementsByClassName("page-post__guide");
  var text = document.getElementsByClassName("page-post__text__guide");
  post[0].classList.toggle("show__post");
  text[0].classList.toggle("show__post__text");
}
function viewPostTickets() {
  var post = document.getElementsByClassName("page-post__tickets");
  var text = document.getElementsByClassName("page-post__text__tickets");
  post[0].classList.toggle("show__post");
  text[0].classList.toggle("show__post__text");
}
function viewPostDressing() {
  var post = document.getElementsByClassName("page-post__dressing");
  var text = document.getElementsByClassName("page-post__text__dressing");
  post[0].classList.toggle("show__post");
  text[0].classList.toggle("show__post__text");
}