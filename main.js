/* button functionality in navigation */
function btnFunction() {
document.getElementById("menu-content").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.navigation__menupic')) {
      var menu = document.getElementsByClassName("navigation__menu__content");
      var i;
      for (i = 0; i < menu.length; i++) {
        var openMenu = menu[i];
        if (openMenu.classList.contains('show')) {
          openMenu.classList.remove('show');
        }
      }
    }
  }