"use strict";

// Catalog filtres ///////////////////

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector('.common__btn[name="choice__button"]');
  const filterForm = document.getElementById("filter");

  button.addEventListener("click", function (event) {
    event.preventDefault();
    const filters = document.querySelector(".filters");
    filters.classList.toggle("open");
  });
});

// ///////////////////////////////////