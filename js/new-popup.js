'use strict';

var popup = document.querySelector('.basket-popup');
var overlay = document.querySelector('.popup-overlay');
var basketMenu = document.querySelector('.user-block__basket-link');
var orderButton = document.querySelector('.goods-of-week__order');
var unitBasket = document.querySelector('.unit__basket');

var openPopup = function (evt) {
  evt.preventDefault();
  popup.classList.add('basket-popup--open');
  popup.classList.remove('basket-popup--close');
  overlay.classList.add('popup-overlay--open');
  overlay.classList.remove('popup-overlay--close');
};

var closePopup = function (evt) {
  evt.preventDefault();
  popup.classList.add('basket-popup--close');
  popup.classList.remove('basket-popup--open');
  overlay.classList.add('popup-overlay--close');
  overlay.classList.remove('popup-overlay--open');
};

basketMenu.addEventListener('click', openPopup);

overlay.addEventListener('click', closePopup);

orderButton.addEventListener('click', openPopup);

unitBasket.addEventListener('click', function (evt) {
  evt.preventDefault();
  openPopup();
});
