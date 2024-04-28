"use strict";

// Faq-open //////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion__item-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const item = this.parentElement;
      const content = item.querySelector(".accordion__item-content");
      const close = this.querySelector("span");

      item.classList.toggle("open");
      if (item.classList.contains("open")) {
        content.style.maxHeight = content.scrollHeight + "px";
        close.style.transform = "rotate(45deg)";
      } else {
        content.style.maxHeight = null;
        close.style.transform = "rotate(0deg)";
      }
    });
  });
});

// ////////////////////////////////////