"use strict";

// Header-fixed ///////////////////////////

const hideNav = () => {
  const fixedNavClsssName = "fixed";
  const headerHeight = 172;

  let body = document.querySelector("body");

  window.addEventListener("scroll", (ev) => {
    const scrollY = window.scrollY;
    if (scrollY > headerHeight) {
      makeItFixed();
    } else {
      makeItNotFixed();
    }
  });

  function makeItFixed() {
    body.classList.add(fixedNavClsssName);
  }

  function makeItNotFixed() {
    body.classList.remove(fixedNavClsssName);
  }
};

hideNav();

// ///////////////////////////////////

// Header buttons ////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const headerCatalogInner = document.querySelector(".header__catalog-inner");
  const burgerMenu = document.querySelector(".burger__menu");
  const menuCatalog = document.querySelector(".menu__catalog");

  headerCatalogInner.addEventListener("click", function () {
    const headerCatalogMenu = document.querySelector(".header__catalog-menu");

    if (headerCatalogMenu.classList.contains("active__drop")) {
      headerCatalogMenu.classList.remove("active__drop");
    } else {
      headerCatalogMenu.classList.add("active__drop");
    }
  });

  burgerMenu.addEventListener("click", function () {
    // const menuList = document.querySelector('.menu__list');

    if (burgerMenu.classList.contains("active__drop")) {
      burgerMenu.classList.remove("active__drop");
    } else {
      burgerMenu.classList.add("active__drop");
    }
  });

  // menuCatalog.addEventListener('click', function() {
  //   const menuDropdown = document.querySelector('.menu__dropdown');

  //   if (menuDropdown.classList.contains('active__drop')) {
  //     menuDropdown.classList.remove('active__drop');
  //   } else {
  //     menuDropdown.classList.add('active__drop');
  //   }
  // });
});

/////////////////////////////////////

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

//  Product /////////////////////////

const product1 = {
  id: 1,
  name: "Штапель дрібний принт маки",
  price: "123.00",
  description: "Артикул: W-5117-д.9926",
  cover: "/images/products/product_1.jpg",
  badge: {
    title: "New",
    color: "var(--element-text-color)",
    bg: "var(--element-bg-color)",
  },
  popular: "popular",
  category1: "штапель",
  category2: "summer",
  category3: "dress",
  color1: "black",
  color2: "yellow",
}; // створюємо об'єкт нового продукту вручну

function Product(
  id,
  name,
  price,
  description,
  cover,
  badge,
  popular,
  category1,
  category2,
  category3,
  color1,
  color2
) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.description = description;
  this.cover = cover;
  this.badge = badge;
  this.popular = popular;
  this.category1 = category1;
  this.category2 = category2;
  this.category3 = category3;
  this.color1 = color1;
  this.color2 = color2;
} // шаблон конструктора для нового продукту

const product2 = new Product(
  2,
  "Штапель принт сакура",
  "123.00",
  "Артикул: W-5129",
  "/images/products/product_2.jpg",
  "popular",
  "штапель",
  "summer",
  "dress",
  "green",
  "yellow"
);
// конструктор створює новий об'єкт, в який передаються всі його властивості

const product3 = new Product(
  3,
  "Костюмна Prima під вовну",
  "237.80",
  "Артикул: М-16056",
  "/images/products/product_3.jpg",
  "Sale",
  "костюмна",
  "winter",
  "black",
  "gray"
);

const product4 = new Product(
  4,
  "Креп-мосс платтяний",
  "98.40",
  "Артикул: W-1883",
  "/images/products/product_4.jpg",
  "New",
  "креп",
  "summer",
  "blue",
  "green"
);

// //////////////////////////////////

// Cart /////////////////////////////

const currency = (total) =>
  parseFloat(Math.round(total * 100) / 100).toFixed(2); // підраховує вартість кількох одиниць

function Cart(shipping = 0) {
  this.shipping = shipping;
  let cart = [];

  this.saveCart = function () {
    console.log(cart);
  };

  function Item(id, price, amount) {
    this.id = id;
    this.price = price;
    this.amount = amount;
  } // визначає властивості одиниці товару

  this.addItemToCart = function (product) {
    for (let item in cart) {
      if (cart[item].id === product.id) {
        // перевіряємо, чи є вже продукт у кошику
        cart[item].amount += product.amount;
        this.saveCart();
        return;
      }
    }

    let item = new Item(product.id, product.price, product.amount);
    cart.push(item);
    this.saveCart(); // додає товар у кошик і зберігає
  };

  this.setCountForItem = function (id, amount) {
    for (let i in cart) {
      if (cart[i].id === id) {
        cart[i].amount = amount;
      }
    }
  }; // перевіряє кількість товару з певним id

  this.totalAmount = function () {
    let total = 0;
    for (let item in cart) {
      total += cart[item].amount;
    }
    return total;
  }; // рахує загальну кількість одиниць товарів

  this.totalInCart = function () {
    let total = 0;
    for (let item in cart) {
      total += cart[item].price * cart[item].amount;
    }
    return currency(total + this.shipping);
  }; // рахує загальну суму всіх товарів

  this.removeItemFromCart = function (id) {
    for (let item in cart) {
      if (cart[item].id === id) {
        cart[item].amount--;
        if (cart[item].amount === 0) {
          cart.splice(item, 1);
        }
        break;
      }
    }
    this.saveCart();
  }; // видаляє одиницю товару по id

  this.removeAllItemFromCart = function (id) {
    for (let item in cart) {
      if (cart[item].id === id) {
        cart.splice(item, 1);
        break;
      }
    }
    this.saveCart();
  }; // видаляє всі товари з таким id

  this.clearCart = function () {
    cart = [];
    this.saveCart();
  };
}

let shoppingCart = new Cart();

let productItem = { ...product2, amount: 5 };
shoppingCart.addItemToCart(productItem);

productItem = { ...product3, amount: 2 };
shoppingCart.addItemToCart(productItem);

console.log(shoppingCart.totalAmount());
console.log(shoppingCart.totalInCart());
shoppingCart.removeItemFromCart(3);
shoppingCart.removeAllItemFromCart(2);
shoppingCart.clearCart();

// let cart = new cartItem(productItem);
// console.log(cart.total());

// Tabs//////////////////////////////

const tabs = document.querySelectorAll(".tabs li");

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    tabs.forEach((t) => t.classList.remove("is__active"));
    tab.classList.add("is__active");

    let li_index = Array.from(tab.parentNode.children).indexOf(tab);
    const panels = document.querySelectorAll(".tabs__panel");

    panels.forEach((panel, index) =>
      panel.classList.toggle("is__active", index === li_index)
    );
  });
});

// ///////////////////////////////////

// Form validation //////////////////

const form = document.getElementById("contactForm");
const errorMessages = document.getElementById("errorMessages");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  errorMessages.innerHTML = "";

  const firstName = document.getElementById("first__name").value.trim();
  const lastName = document.getElementById("last__name").value.trim();
  const email = document.getElementById("email").value.trim();
  const tel = document.getElementById("tel").value.trim();
  const text = document.getElementById("textarea").value.trim();

  if (firstName === "") {
    displayError("Введіть ваше ім'я", "first__name");
    return;
  }

  if (lastName === "") {
    displayError("Введіть ваше прізвище", "last__name");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    displayError("Неправильний формат адреси", "email");
    return;
  }

  const telTest = /^\+?3?8?(0\d{9})$/;
  if (!telTest.test(tel)) {
    displayError("Неправильний формат номеру", "tel");
    return;
  }

  if (text === "") {
    displayError("Ви нічого не написали", "textarea");
    return;
  }

  alert("Ваше повідомлення відправлено!");
  form.reset();
});

function displayError(message, inputName) {
  const errorMessage = document.createElement("div");
  errorMessage.textContent = message;
  errorMessages.appendChild(errorMessage);
  document.getElementById(inputName).classList.add("error");
}

form.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", function () {
    errorMessages.innerHTML = "";
    this.classList.remove("error");
  });
});
// ///////////////////////////////////

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

// Footer /////////////////////////////

const template = document.createElement("template");

template.innerHTML = `
  <footer class="footer">
    <div class="container">
      <section class="footer__top">
        <nav class="footer__menu">
          <ul class="footer__menu-list">
            <li class="footer__menu-item">
              <a href="/html/about.html">Про нас</a>
            </li>
            <li class="footer__menu-item">
              <a href="/html/blog.html">Блог</a>
            </li>
            <li class="footer__menu-item">
              <a href="/html/delivery.html">Оплата і доставка</a>
            </li>
            <li class="footer__menu-item">
              <a href="/html/faq.html">Поширені питання</a>
            </li>
            <li class="footer__menu-item">
              <a href="/html/">Відгуки</a>
            </li>
          </ul>
        </nav>

        <nav class="footer__catalog">
          <ul class="footer__catalog-list">
            <li class="footer__catalog-item">
              <a href="/html/catalog.html">Всі товари</a>
            </li>
            <li class="footer__catalog-item">
              <a href="/html/catalog.html">Тканини за призначенням</a>
            </li>
            <li class="footer__catalog-item">
              <a href="/html/catalog.html">Новинки</a>
            </li>
            <li class="footer__catalog-item">
              <a href="/html/catalog.html">Хіти продаж</a>
            </li>
            <li class="footer__catalog-item">
              <a href="/html/catalog.html">Акції</a>
            </li>
            <li class="footer__catalog-item">
              <a href="/html/catalog.html">Оптовим покупцям</a>
            </li>
          </ul>
        </nav>

        <div class="footer__contacts">
          <ul class="footer__contacts-list">
            <li class="footer__contacts-item">
              <a href="/html/contacts.html">Зв'яжіться з нами</a>
            </li>
            <li class="footer__contacts-item">
              <a href="tel:+380962688839"
                ><i class="fa-solid fa-phone"></i>+380 96 268 88 39</a
              >
            </li>
            <li class="footer__contacts-item">
              <a href="#"
                ><i class="fa-brands fa-telegram"></i>Написати в Телеграм</a
              >
            </li>
            <li class="footer__contacts-item">
              <a href="#"
                ><i class="fa-brands fa-viber"></i>Написати у Вайбер</a
              >
            </li>
            <li class="footer__contacts-item">
              <a href="/html/account.html"
                ><i class="fa-solid fa-user"></i>Особистий кабінет</a
              >
            </li>
            <li class="footer__contacts-item">
              <a href="/exercises/index.html">Exercises</a>
            </li>
          </ul>
        </div>

        <div class="footer__address">
          <div class="address__list">
            <p class="address__list-title">
              <a href="/html/contacts.html">Наша адреса:</a>
            </p>
            <div class="address__list-item">
              м. Одеса, <br />
              ринок «7 км», маг. №4438
            </div>
            <div class="address__list-item">
              м. Хмельницький, <br />
              вул. Геологів 11
            </div>
          </div>

          <div class="social__list">
            <p class="social__list-title">Ми у соцмережах</p>
            <a
              href="https://www.facebook.com/PalmiraTextile/"
              target="_blank"
              ><i class="fa-brands fa-facebook"></i
            ></a>
            <a
              href="https://www.instagram.com/tkani_palmiratextile/"
              target="_blank"
              ><i class="fa-brands fa-instagram"></i
            ></a>
            <a
              href="https://www.youtube.com/@palmiratextile3853"
              target="_blank"
              ><i class="fa-brands fa-youtube"></i
            ></a>
            <a href="https://vm.tiktok.com/ZMenAk5jX/" target="_blank"
              ><i class="fa-brands fa-tiktok"></i
            ></a>
          </div>
        </div>
      </section>
    </div>
    <section class="footer__bottom">
      <a href="#"
        ><span class="footer__bottom-terms">Terms &amp; Conditions</span></a
      >
      <a href="#"
        ><span class="footer__bottom-privacy">Privacy Policy</span></a
      >
      <a href="#"
        ><span class="footer__bottom-copy"
        >&copy; 2024 All rights reserve</span
      ></a>
    </section>
  </footer>
`;

let clone = template.content.cloneNode(true);
document.body.appendChild(clone);

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    main();
  });
} else {
  main();
}
// /////////////////////////////////////////
