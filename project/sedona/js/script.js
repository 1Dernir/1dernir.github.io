var navListOpen = document.getElementById("openNav"),
    navListClose = document.getElementById("closeNav"),
    navListElements = document.getElementsByClassName("nav-list--element");

navListOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  for (var i = 0; i < navListElements.length; i++) {
    navListElements[i].classList.add("nav-list--show");
  }
  navListOpen.classList.add("hidden");
});

navListClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  for (var i = 0; i < navListElements.length; i++) {
    navListElements[i].classList.remove("nav-list--show");
  }
  navListOpen.classList.remove("hidden");
});
