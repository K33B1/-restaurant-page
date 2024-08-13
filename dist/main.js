/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContactPage() {\r\n    const content = document.getElementById(\"content\");\r\n\r\n    const contactContainer = document.createElement(\"div\");\r\n    contactContainer.classList.add(\"contact-container\");\r\n\r\n    const contactTitle = document.createElement(\"h1\");\r\n    contactTitle.textContent = \"Contact Us\";\r\n\r\n    const address = document.createElement(\"p\");\r\n    address.textContent = \"123 Gourmet Lane, Food City, FC 45678\";\r\n\r\n    const phone = document.createElement(\"p\");\r\n    phone.textContent = \"Phone: (555) 123-4567\";\r\n\r\n    const email = document.createElement(\"p\");\r\n    email.textContent = \"Email: contact@roadhouserestaurant.com\";\r\n\r\n    const hours = document.createElement(\"p\");\r\n    hours.textContent = \"Hours: Mon-Sun, 11:00 AM - 10:00 PM\";\r\n\r\n    contactContainer.appendChild(contactTitle);\r\n    contactContainer.appendChild(address);\r\n    contactContainer.appendChild(phone);\r\n    contactContainer.appendChild(email);\r\n    contactContainer.appendChild(hours);\r\n\r\n    content.appendChild(contactContainer);\r\n\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contactPage.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage */ \"./src/contactPage.js\");\n\r\n\r\n\r\n\r\nfunction createHeader() {\r\n    const header = document.getElementById(\"header\");\r\n\r\n    const unorderedList = document.createElement(\"ul\");\r\n    header.appendChild(unorderedList);\r\n\r\n    const list1 = document.createElement(\"li\");\r\n    const button1 = document.createElement(\"button\");\r\n    button1.textContent = \"Home\";\r\n    list1.appendChild(button1);\r\n    unorderedList.appendChild(list1);\r\n\r\n    const list2 = document.createElement(\"li\");\r\n    const button2 = document.createElement(\"button\");\r\n    button2.textContent = \"Menu\";\r\n    list2.appendChild(button2);\r\n    unorderedList.appendChild(list2);\r\n\r\n    const list3 = document.createElement(\"li\");\r\n    const button3 = document.createElement(\"button\");\r\n    button3.textContent = \"Contact\";\r\n    list3.appendChild(button3);\r\n    unorderedList.appendChild(list3);\r\n\r\n    button1.addEventListener(\"click\", () => {\r\n        clearContent();\r\n        (0,_homePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    });\r\n\r\n    button2.addEventListener(\"click\", () => {\r\n        clearContent();\r\n        (0,_menuPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    });\r\n\r\n    button3.addEventListener(\"click\", () => {\r\n        clearContent();\r\n        (0,_contactPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    });\r\n}\r\n\r\nfunction clearContent() {\r\n    const content = document.getElementById(\"content\");\r\n    if (content.firstChild) {\r\n        content.removeChild(content.firstChild);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_restaurant_2623071_640_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/restaurant-2623071_640.jpg */ \"./src/assets/restaurant-2623071_640.jpg\");\n\r\nfunction createHomePage () {\r\n    const homePageContent = document.getElementById(\"content\")\r\n\r\n    const homePageContainer = document.createElement(\"div\")\r\n    homePageContainer.classList.add(\"home-container\")\r\n    homePageContent.appendChild(homePageContainer)\r\n\r\n    const header = document.createElement(\"h1\")\r\n    header.textContent = \"Welcome to Roadhouse Restaurant\"\r\n    homePageContainer.appendChild(header)\r\n\r\n    const paragraoh = document.createElement(\"p\")\r\n    paragraoh.textContent = \"Where great food meets a cozy, inviting atmosphere. Whether you're here for a casual meal or a special occasion, our diverse menu and warm service are sure to make your experience memorable. Relax, enjoy, and let us take care of the rest!\"\r\n    homePageContainer.appendChild(paragraoh)\r\n\r\n    const image = document.createElement(\"img\")\r\n    image.src = _assets_restaurant_2623071_640_jpg__WEBPACK_IMPORTED_MODULE_0__\r\n    image.alt = \"Restuarant image\"\r\n    homePageContainer.appendChild(image)\r\n\r\n    \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);\n\n//# sourceURL=webpack://restaurant-page/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ \"./src/pageLoad.js\");\n\r\n(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_StockCake_Fresh_Vegetable_Salad_1723545876_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/StockCake-Fresh Vegetable Salad_1723545876.jpg */ \"./src/assets/StockCake-Fresh Vegetable Salad_1723545876.jpg\");\n/* harmony import */ var _assets_StockCake_Delicious_Chicken_Sandwich_1723547756_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/StockCake-Delicious Chicken Sandwich_1723547756.jpg */ \"./src/assets/StockCake-Delicious Chicken Sandwich_1723547756.jpg\");\n/* harmony import */ var _assets_StockCake_Juicy_Gourmet_Burger_1723548872_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/StockCake-Juicy Gourmet Burger_1723548872.jpg */ \"./src/assets/StockCake-Juicy Gourmet Burger_1723548872.jpg\");\n/* harmony import */ var _assets_StockCake_Delicious_Pepperoni_Pizza_1723548882_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/StockCake-Delicious Pepperoni Pizza_1723548882.jpg */ \"./src/assets/StockCake-Delicious Pepperoni Pizza_1723548882.jpg\");\n/* harmony import */ var _assets_StockCake_Creamy_Fettuccine_Pasta_1723548886_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/StockCake-Creamy Fettuccine Pasta_1723548886.jpg */ \"./src/assets/StockCake-Creamy Fettuccine Pasta_1723548886.jpg\");\n/* harmony import */ var _assets_StockCake_Delicious_Rice_Dish_1723548988_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/StockCake-Delicious Rice Dish_1723548988.jpg */ \"./src/assets/StockCake-Delicious Rice Dish_1723548988.jpg\");\n/* harmony import */ var _assets_StockCake_Delicious_Shrimp_Noodles_1723549047_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/StockCake-Delicious Shrimp Noodles_1723549047.jpg */ \"./src/assets/StockCake-Delicious Shrimp Noodles_1723549047.jpg\");\n/* harmony import */ var _assets_StockCake_Spicy_Curry_Dish_1723554978_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/StockCake-Spicy Curry Dish_1723554978.jpg */ \"./src/assets/StockCake-Spicy Curry Dish_1723554978.jpg\");\n/* harmony import */ var _assets_StockCake_Sushi_Delight_Platter_1723555724_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/StockCake-Sushi Delight Platter_1723555724.jpg */ \"./src/assets/StockCake-Sushi Delight Platter_1723555724.jpg\");\n/* harmony import */ var _assets_StockCake_Savory_Steak_Dinner_1723556646_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/StockCake-Savory Steak Dinner_1723556646.jpg */ \"./src/assets/StockCake-Savory Steak Dinner_1723556646.jpg\");\n/* harmony import */ var _assets_StockCake_Delicious_BBQ_Ribs_1723556899_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/StockCake-Delicious BBQ Ribs_1723556899.jpg */ \"./src/assets/StockCake-Delicious BBQ Ribs_1723556899.jpg\");\n/* harmony import */ var _assets_StockCake_Healthy_tofu_bento_1723557044_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/StockCake-Healthy tofu bento_1723557044.jpg */ \"./src/assets/StockCake-Healthy tofu bento_1723557044.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction craeteMenuPage() {\r\n    const content = document.getElementById(\"content\")\r\n\r\n    const menuContainer = document.createElement(\"div\")\r\n    menuContainer.classList.add(\"menu-container\")\r\n    content.appendChild(menuContainer)\r\n\r\n    const header = document.createElement(\"h1\")\r\n    header.textContent = \"Our Menu\"\r\n    menuContainer.appendChild(header)\r\n\r\n    const gridContainer = document.createElement(\"div\")\r\n    gridContainer.classList.add(\"grid-container\")\r\n    menuContainer.appendChild(gridContainer)\r\n\r\n    const item1 = document.createElement(\"div\")\r\n    const item1Title = document.createElement(\"h3\")\r\n    item1Title.textContent = \"Fresh Vegetable Salad\"\r\n    const item1Image = document.createElement(\"img\")\r\n    item1Image.src = _assets_StockCake_Fresh_Vegetable_Salad_1723545876_jpg__WEBPACK_IMPORTED_MODULE_0__\r\n    item1Image.alt = \"Dish image\"\r\n    const item1Dicription = document.createElement(\"p\")\r\n    item1Dicription.textContent = \"A mouthwatering fresh vegetable salad with cherry tomatoes.\"\r\n    const item1Price = document.createElement(\"p\")\r\n    item1Price.textContent = \"$14.30\"\r\n    item1.appendChild(item1Image)\r\n    item1.appendChild(item1Title)\r\n    item1.appendChild(item1Dicription)\r\n    item1.appendChild(item1Price)\r\n    item1.classList.add(\"item\")\r\n    gridContainer.appendChild(item1)\r\n\r\n    const item2 = document.createElement(\"div\")\r\n    const item2Title = document.createElement(\"h3\")\r\n    item2Title.textContent = \"Chicken Sandwich\"\r\n    const item2Image = document.createElement(\"img\")\r\n    item2Image.src = _assets_StockCake_Delicious_Chicken_Sandwich_1723547756_jpg__WEBPACK_IMPORTED_MODULE_1__\r\n    item2Image.alt = \"Dish image\"\r\n    const item2Dicription = document.createElement(\"p\")\r\n    item2Dicription.textContent = \"Chicken sandwich served on multigrain bread.\"\r\n    const item2Price = document.createElement(\"p\")\r\n    item2Price.textContent = \"$21.73\"\r\n    item2.appendChild(item2Image)\r\n    item2.appendChild(item2Title)\r\n    item2.appendChild(item2Dicription)\r\n    item2.appendChild(item2Price)\r\n    item2.classList.add(\"item\")\r\n    gridContainer.appendChild(item2)\r\n\r\nconst item3 = document.createElement(\"div\");\r\nconst item3Title = document.createElement(\"h3\");\r\nitem3Title.textContent = \"Gourmet Burger\";\r\nconst item3Image = document.createElement(\"img\");\r\nitem3Image.src = _assets_StockCake_Juicy_Gourmet_Burger_1723548872_jpg__WEBPACK_IMPORTED_MODULE_2__; \r\nitem3Image.alt = \"Gourmet Burger\";\r\nconst item3Description = document.createElement(\"p\");\r\nitem3Description.textContent = \"A delicious gourmet burger\";\r\nconst item3Price = document.createElement(\"p\");\r\nitem3Price.textContent = \"$12.99\";\r\nitem3.appendChild(item3Image);\r\nitem3.appendChild(item3Title);\r\nitem3.appendChild(item3Description);\r\nitem3.appendChild(item3Price);\r\nitem3.classList.add(\"item\");\r\ngridContainer.appendChild(item3);\r\n\r\nconst item4 = document.createElement(\"div\");\r\nconst item4Title = document.createElement(\"h3\");\r\nitem4Title.textContent = \"Pepperoni Pizza\";\r\nconst item4Image = document.createElement(\"img\");\r\nitem4Image.src = _assets_StockCake_Delicious_Pepperoni_Pizza_1723548882_jpg__WEBPACK_IMPORTED_MODULE_3__; \r\nitem4Image.alt = \"Pepperoni Pizza\";\r\nconst item4Description = document.createElement(\"p\");\r\nitem4Description.textContent = \"A freshly baked pepperoni pizza\";\r\nconst item4Price = document.createElement(\"p\");\r\nitem4Price.textContent = \"$14.49\";\r\nitem4.appendChild(item4Image);\r\nitem4.appendChild(item4Title);\r\nitem4.appendChild(item4Description);\r\nitem4.appendChild(item4Price);\r\nitem4.classList.add(\"item\");\r\ngridContainer.appendChild(item4);\r\n\r\nconst item5 = document.createElement(\"div\");\r\nconst item5Title = document.createElement(\"h3\");\r\nitem5Title.textContent = \"Creamy Fettuccine Pasta\";\r\nconst item5Image = document.createElement(\"img\");\r\nitem5Image.src = _assets_StockCake_Creamy_Fettuccine_Pasta_1723548886_jpg__WEBPACK_IMPORTED_MODULE_4__; \r\nitem5Image.alt = \"Creamy Fettuccine Pasta\";\r\nconst item5Description = document.createElement(\"p\");\r\nitem5Description.textContent = \"A delicious bowl of creamy fettuccine pasta\";\r\nconst item5Price = document.createElement(\"p\");\r\nitem5Price.textContent = \"$13.99\";\r\nitem5.appendChild(item5Image);\r\nitem5.appendChild(item5Title);\r\nitem5.appendChild(item5Description);\r\nitem5.appendChild(item5Price);\r\nitem5.classList.add(\"item\");\r\ngridContainer.appendChild(item5);\r\n\r\nconst item6 = document.createElement(\"div\");\r\nconst item6Title = document.createElement(\"h3\");\r\nitem6Title.textContent = \"Rice Dish\";\r\nconst item6Image = document.createElement(\"img\");\r\nitem6Image.src = _assets_StockCake_Delicious_Rice_Dish_1723548988_jpg__WEBPACK_IMPORTED_MODULE_5__; \r\nitem6Image.alt = \"Rice Dish\";\r\nconst item6Description = document.createElement(\"p\");\r\nitem6Description.textContent = \"A beautifully served bowl of rice garnished with meat\";\r\nconst item6Price = document.createElement(\"p\");\r\nitem6Price.textContent = \"$11.49\";\r\nitem6.appendChild(item6Image);\r\nitem6.appendChild(item6Title);\r\nitem6.appendChild(item6Description);\r\nitem6.appendChild(item6Price);\r\nitem6.classList.add(\"item\");\r\ngridContainer.appendChild(item6);\r\n\r\nconst item7 = document.createElement(\"div\");\r\nconst item7Title = document.createElement(\"h3\");\r\nitem7Title.textContent = \"Shrimp Noodles\";\r\nconst item7Image = document.createElement(\"img\");\r\nitem7Image.src = _assets_StockCake_Delicious_Shrimp_Noodles_1723549047_jpg__WEBPACK_IMPORTED_MODULE_6__; \r\nitem7Image.alt = \"Shrimp Noodles\";\r\nconst item7Description = document.createElement(\"p\");\r\nitem7Description.textContent = \"A bowl of savory shrimp noodles\";\r\nconst item7Price = document.createElement(\"p\");\r\nitem7Price.textContent = \"$15.99\";\r\nitem7.appendChild(item7Image);\r\nitem7.appendChild(item7Title);\r\nitem7.appendChild(item7Description);\r\nitem7.appendChild(item7Price);\r\nitem7.classList.add(\"item\");\r\ngridContainer.appendChild(item7);\r\n\r\nconst item8 = document.createElement(\"div\");\r\nconst item8Title = document.createElement(\"h3\");\r\nitem8Title.textContent = \"Spicy Curry Dish\";\r\nconst item8Image = document.createElement(\"img\");\r\nitem8Image.src = _assets_StockCake_Spicy_Curry_Dish_1723554978_jpg__WEBPACK_IMPORTED_MODULE_7__; \r\nitem8Image.alt = \"Spicy Curry Dish\";\r\nconst item8Description = document.createElement(\"p\");\r\nitem8Description.textContent = \"A rich and vibrant spicy curry dish\";\r\nconst item8Price = document.createElement(\"p\");\r\nitem8Price.textContent = \"$11.32\";\r\nitem8.appendChild(item8Image);\r\nitem8.appendChild(item8Title);\r\nitem8.appendChild(item8Description);\r\nitem8.appendChild(item8Price);\r\nitem8.classList.add(\"item\");\r\ngridContainer.appendChild(item8);\r\n\r\nconst item9 = document.createElement(\"div\");\r\nconst item9Title = document.createElement(\"h3\");\r\nitem9Title.textContent = \"Sushi Delight Platter\";\r\nconst item9Image = document.createElement(\"img\");\r\nitem9Image.src = _assets_StockCake_Sushi_Delight_Platter_1723555724_jpg__WEBPACK_IMPORTED_MODULE_8__; \r\nitem9Image.alt = \"Spicy Curry Dish\";\r\nconst item9Description = document.createElement(\"p\");\r\nitem9Description.textContent = \"An appetizing array of sushi rolls served on a wooden platter\";\r\nconst item9Price = document.createElement(\"p\");\r\nitem9Price.textContent = \"$6.99\";\r\nitem9.appendChild(item9Image);\r\nitem9.appendChild(item9Title);\r\nitem9.appendChild(item9Description);\r\nitem9.appendChild(item9Price);\r\nitem9.classList.add(\"item\");\r\ngridContainer.appendChild(item9);\r\n\r\nconst item10 = document.createElement(\"div\");\r\nconst item10Title = document.createElement(\"h3\");\r\nitem10Title.textContent = \"Steak \";\r\nconst item10Image = document.createElement(\"img\");\r\nitem10Image.src = _assets_StockCake_Savory_Steak_Dinner_1723556646_jpg__WEBPACK_IMPORTED_MODULE_9__\r\nitem10Image.alt = \"Vegan Salad Bowl\";\r\nconst item10Description = document.createElement(\"p\");\r\nitem10Description.textContent = \"A perfectly cooked steak paired with seasoned fries\";\r\nconst item10Price = document.createElement(\"p\");\r\nitem10Price.textContent = \"$31.49\";\r\nitem10.appendChild(item10Image);\r\nitem10.appendChild(item10Title);\r\nitem10.appendChild(item10Description);\r\nitem10.appendChild(item10Price);\r\nitem10.classList.add(\"item\");\r\ngridContainer.appendChild(item10);\r\n\r\n// Item 11\r\nconst item11 = document.createElement(\"div\");\r\nconst item11Title = document.createElement(\"h3\");\r\nitem11Title.textContent = \"BBQ Ribs\";\r\nconst item11Image = document.createElement(\"img\");\r\nitem11Image.src = _assets_StockCake_Delicious_BBQ_Ribs_1723556899_jpg__WEBPACK_IMPORTED_MODULE_10__\r\nitem11Image.alt = \"BBQ Ribs\";\r\nconst item11Description = document.createElement(\"p\");\r\nitem11Description.textContent = \"Tender ribs coated in a smoky BBQ sauce and grilled to perfection.\";\r\nconst item11Price = document.createElement(\"p\");\r\nitem11Price.textContent = \"$12.99\";\r\nitem11.appendChild(item11Image);\r\nitem11.appendChild(item11Title);\r\nitem11.appendChild(item11Description);\r\nitem11.appendChild(item11Price);\r\nitem11.classList.add(\"item\");\r\ngridContainer.appendChild(item11);\r\n\r\n// Item 12\r\nconst item12 = document.createElement(\"div\");\r\nconst item12Title = document.createElement(\"h3\");\r\nitem12Title.textContent = \"tofu bento\";\r\nconst item12Image = document.createElement(\"img\");\r\nitem12Image.src = _assets_StockCake_Healthy_tofu_bento_1723557044_jpg__WEBPACK_IMPORTED_MODULE_11__\r\nitem12Image.alt = \"tofu bento\";\r\nconst item12Description = document.createElement(\"p\");\r\nitem12Description.textContent = \"A nutritious tofu bento box filled with grilled tofu\";\r\nconst item12Price = document.createElement(\"p\");\r\nitem12Price.textContent = \"$10.79\";\r\nitem12.appendChild(item12Image);\r\nitem12.appendChild(item12Title);\r\nitem12.appendChild(item12Description);\r\nitem12.appendChild(item12Price);\r\nitem12.classList.add(\"item\");\r\ngridContainer.appendChild(item12);\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (craeteMenuPage);\n\n//# sourceURL=webpack://restaurant-page/./src/menuPage.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage.js */ \"./src/homePage.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n\r\n\r\n\r\nfunction initialLoad() {\r\n    (0,_header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n    ;(0,_homePage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/pageLoad.js?");

/***/ }),

/***/ "./src/assets/StockCake-Creamy Fettuccine Pasta_1723548886.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/StockCake-Creamy Fettuccine Pasta_1723548886.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d701bc6bea90d1cc3d61.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/StockCake-Creamy_Fettuccine_Pasta_1723548886.jpg?");

/***/ }),

/***/ "./src/assets/StockCake-Delicious BBQ Ribs_1723556899.jpg":
/*!****************************************************************!*\
  !*** ./src/assets/StockCake-Delicious BBQ Ribs_1723556899.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"28a1f19f85ae67cea5fe.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/StockCake-Delicious_BBQ_Ribs_1723556899.jpg?");

/***/ }),

/***/ "./src/assets/StockCake-Delicious Chicken Sandwich_1723547756.jpg":
/*!************************************************************************!*\
  !*** ./src/assets/StockCake-Delicious Chicken Sandwich_1723547756.jpg ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e730fad12dbd4e2e2f3f.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/StockCake-Delicious_Chicken_Sandwich_1723547756.jpg?");

/***/ }),

/***/ "./src/assets/StockCake-Delicious Pepperoni Pizza_1723548882.jpg":
/*!***********************************************************************!*\
  !*** ./src/assets/StockCake-Delicious Pepperoni Pizza_1723548882.jpg ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3fcdc34b14ff4d62cdae.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/StockCake-Delicious_Pepperoni_Pizza_1723548882.jpg?");

/***/ }),

/***/ "./src/assets/StockCake-Delicious Rice Dish_1723548988.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/StockCake-Delicious Rice Dish_1723548988.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9a54f3853fd4e9d1f00f.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/StockCake-Delicious_Rice_Dish_1723548988.jpg?");

/***/ }),

/***/ "./src/assets/StockCake-Delicious Shrimp Noodles_1723549047.jpg":
/*!**********************************************************************!*\
  !*** ./src/assets/StockCake-Delicious Shrimp Noodles_1723549047.jpg ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5ec3c074e1cd9a640c72.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/StockCake-Delicious_Shrimp_Noodles_1723549047.jpg?");

/***/ }),

/***/ "./src/assets/StockCake-Fresh Vegetable Salad_1723545876.jpg":
/*!*******************************************************************!*\
  !*** ./src/assets/StockCake-Fresh Vegetable Salad_1723545876.jpg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"850d7e489825abe78eca.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/StockCake-Fresh_Vegetable_Salad_1723545876.jpg?");

/***/ }),

/***/ "./src/assets/StockCake-Healthy tofu bento_1723557044.jpg":
/*!****************************************************************!*\
  !*** ./src/assets/StockCake-Healthy tofu bento_1723557044.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d303875be15d2cbbbb8f.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/StockCake-Healthy_tofu_bento_1723557044.jpg?");

/***/ }),

/***/ "./src/assets/StockCake-Juicy Gourmet Burger_1723548872.jpg":
/*!******************************************************************!*\
  !*** ./src/assets/StockCake-Juicy Gourmet Burger_1723548872.jpg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7dfb24a7a5d4b5d2cc90.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/StockCake-Juicy_Gourmet_Burger_1723548872.jpg?");

/***/ }),

/***/ "./src/assets/StockCake-Savory Steak Dinner_1723556646.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/StockCake-Savory Steak Dinner_1723556646.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"916cd2f5f082bd1d55ac.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/StockCake-Savory_Steak_Dinner_1723556646.jpg?");

/***/ }),

/***/ "./src/assets/StockCake-Spicy Curry Dish_1723554978.jpg":
/*!**************************************************************!*\
  !*** ./src/assets/StockCake-Spicy Curry Dish_1723554978.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"63ddbf35169fd4b140a3.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/StockCake-Spicy_Curry_Dish_1723554978.jpg?");

/***/ }),

/***/ "./src/assets/StockCake-Sushi Delight Platter_1723555724.jpg":
/*!*******************************************************************!*\
  !*** ./src/assets/StockCake-Sushi Delight Platter_1723555724.jpg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4532252d3382b006d16f.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/StockCake-Sushi_Delight_Platter_1723555724.jpg?");

/***/ }),

/***/ "./src/assets/restaurant-2623071_640.jpg":
/*!***********************************************!*\
  !*** ./src/assets/restaurant-2623071_640.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"56536f2af3418f144235.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/restaurant-2623071_640.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;