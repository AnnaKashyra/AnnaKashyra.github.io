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

// Add product to Cart ///////////////////

let shoppingCart = new Cart();

function CardProduct(item) {
  this.item = item;
  let addToCart = this.item.querySelector('.add-to-cart');
  if (addToCart) {
    addToCart.addEventListener('click', function(event) {

      let parent = event.target.closest('.product');
      let id = parent.dataset.id;
      let product = productList.getProductById(products, id);
      
      // let id = parent.querySelector('.product__content').getAttribute('id');
      // let name = parent.querySelector('.product__name').innerText;
      // let price = parent.querySelector('.product__price-retail').innerText.replace(',', '.');

      // let product = new Product(id, name, price);
      product = {...product, amount: 1};
      
      shoppingCart.addItemToCart(product);
      document.getElementById('cart-amount').textContent = shoppingCart.totalAmount();
      

      
      console.log(shoppingCart.totalInCart());
    });
  }
}                       // додавання товару до кошику

const productCards = document.querySelectorAll('.product');
productCards.forEach(item => new CardProduct(item));

/////////////////////////////////////

// Cart calculations ////////////////

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
    // for (let item in cart) {
    //   if (cart[item].id === product.id) {
    //     // перевіряємо, чи є вже продукт у кошику
    //     cart[item].amount += product.amount;
    //     this.saveCart();
    //     return;
    //   }
    // } ///////////////////// замінено кодом нижче

    let inCart = cart.some(item => item.id === product.id);
    if(inCart) {
      let index = cart.findIndex(item => item.id === product.id);
      cart[index].amount += product.amount;
    } else {
      let item = new Item(product.id, product.price, product.amount);
      cart.push(item);
    }

    
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

///////////////////////////////////////

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

////////////////////////////////////////////

// Product List ////////////////////////////

function ProductList() {
  this.productTemplate = (product) => `
    <article class="product">
      <div class="product__img">
        <div class="badge badge__${product.badge.bg}">${product.badge.title}</div>
        <a href="#">
          <img
            src="${product.cover}"
            alt="${product.name}"
          />
        </a>

        <div class="product__icons">
          <a href="#!" class="fas fa-heart add-to-wishlist"></a>
          <a href="#!" class="fas fa-eye show-detail"></a>
        </div>
      </div>

      <div class="product__content" data-id="${product.id}">
        <div class="product__article">${product.description}</div>
        <div class="product__colors"></div>
        <h3 class="product__name">
          <a href="#">${product.name}</a>
        </h3>

        <div class="product__buy">
          <div class="product__price">
            <div class="product__price-retail">${product.price}</div>
            <div class="product__price-wholesale">${product.priceWholesale}</div>
            <span>від 10 м. пог.</span>
          </div>

          <div class="common__button">
            <a href="#!" class="common__btn add-to-cart">У кошик</a>
          </div>
        </div>
      </div>
    </article>
  `;

  this.populateProductList = function(products) {
    let content = '';
    products.forEach(item => content += this.productTemplate(item));
    return content;
  }

  this.getProductById = (products, id) => products.find(item => item.id === id);
}

let productList = new ProductList();
console.log(products);

////////////////////////////////////////////

// Categories sort /////////////////////////
// const liElement = (item) =>
// `<li><a href="#!" data-id"${item.id}">${item.name}</a></li>`;

// const ulElement = items => {
//   let ul = document.createElement('ul');
//   ul.setAttribute('class', "aside__categories");

//   let res = '';
//   for (let item of items) {
//     res += liElement(item);
//   }
//   ul.innerHTML = res;
//   return ul;
// }

// const destinctSections = items => {
//   let mapped = [...items.map(item => item.section)];
//   let unique = [...new Set(mapped)];
//   return unique;
// }

// function categoriesCollation(distinct, categories) {
//   let result = [];
//   let i = 0;
//   for (let section of distinct) {
//     result[i] = categories.filter(item => item.section === section);
//     i++;
//   }
//   return result;
// }

// let sectionName = section => {
//   let div = document.createElement('div');
//   div.innerHTML = `<strong>${section}</strong>`;
//   return div;
// }

// const populateCategories = (categoryContainer, categories) => {
//   let distinct = destinctSections(categories);
//   let collation = categoriesCollation(distinct, categories);
//   for (let i = 0; i < distinct.length; i++) {
//     categoryContainer.append(sectionName(distinct[i]));
//     catigoryContainer.append(ulElement(collation[i]));
//   }
// }
//////////////////////////////////////////////


function main() {
  const productContainer = document.querySelector('.product__container');
  productContainer.innerHTML = productList.populateProductList(products);
  console.log(productContainer);

  let productCards = document.querySelectorAll('.product');
  productCards.forEach(item => new CardProduct(item));

  // const catalogAside = document.getElementById('catalog__aside');
  // if(catalogAside) {
  //   const categoryContainer = document.getElementById('category__container');
  //   populateCategories(categoryContainer, categories);
  // }

  // let products = [];
  // productCards.forEach(function(item) {
  //   let id = item.querySelector('.product__content').getAttribute('id');
  //   let name = item.querySelector('.product__name').innerText;
  //   let price = item.querySelector('.product__price-retail').innerText.replace(',', '.');
  //   let action = item.querySelector('.badge').textContent;
  //   products = [...products, {id: id, name: name, price: parseFloat(price), action: action}];    
  // });

  // console.log(products);  // отримання масиву з об'єктів, які представляють продукт з його властивостями

  // const findByProps = function(items, props, what) {
  //   let result = [];

  //   items.find((item, index) => {
  //     if (item[props] === what) {
  //       result.push(items[index])
  //     }
  //   })
  //   return result;
  // }
  // console.log(findByProps(products, "action", 'Sale'));
  // console.log(findByProps(products, "action", 'New')); 
  // // сортування продуктів за певною властивістю

  // const compare = (key, order='asc') => (a, b) => {
  //   if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;
  //   const A = (typeof a[key]  === 'string') ? a[key].toUpperCase() : a[key];
  //   const B = (typeof b[key]  === 'string') ? b[key].toUpperCase() : b[key];

  //   let comparison = 0;
  //   comparison = (A>B) ? 1 : -1;
  //   return (order === 'desc') ? -comparison : comparison;
  // }
  
  // let sorted = products.sort(compare('price', 'asc'));
  // console.log(sorted);
  // сортування товарів за ціною від найменшої до найбільшої
}                   

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    main();
  });
} else {
  main();
}

// /////////////////////////////////////////
