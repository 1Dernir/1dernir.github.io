var loginPopup    = document.querySelector(".login-popup"),
    loginLink     = document.querySelector(".login-link"),
    popupClose    = document.querySelector(".popup-close"),
    mapPopup      = document.querySelector(".map-popup"),
    mapLink       = document.querySelector(".map"),
    mapPopupClose = document.querySelector(".popup-map-close"),
    mapLinkFooter = document.querySelector(".map-link-footer");

loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("popup-show");
});
popupClose.addEventListener("click", function () {
  loginPopup.classList.remove("popup-show");
});
if (mapLink != null) {
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("popup-show");
  });
}
mapLinkFooter.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("popup-show");
});
mapPopupClose.addEventListener("click", function () {
  mapPopup.classList.remove("popup-show");
});
