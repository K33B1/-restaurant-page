import item1DishImage from './assets/StockCake-Fresh Vegetable Salad_1723545876.jpg'
import item2DishImage from './assets/StockCake-Delicious Chicken Sandwich_1723547756.jpg'
import item3DishImage from './assets/StockCake-Juicy Gourmet Burger_1723548872.jpg'
import item4DishImage from './assets/StockCake-Delicious Pepperoni Pizza_1723548882.jpg'
import item5DishImage from './assets/StockCake-Creamy Fettuccine Pasta_1723548886.jpg'
import item6DishImage from './assets/StockCake-Delicious Rice Dish_1723548988.jpg'
import item7DishImage from './assets/StockCake-Delicious Shrimp Noodles_1723549047.jpg'
import item8DishImage from './assets/StockCake-Spicy Curry Dish_1723554978.jpg'
import item9DishImage from './assets/StockCake-Sushi Delight Platter_1723555724.jpg'
import item10DishImage from './assets/StockCake-Savory Steak Dinner_1723556646.jpg'
import item11DishImage from './assets/StockCake-Delicious BBQ Ribs_1723556899.jpg'
import item12DishImage from './assets/StockCake-Healthy tofu bento_1723557044.jpg'


function craeteMenuPage() {
    const content = document.getElementById("content")

    const menuContainer = document.createElement("div")
    menuContainer.classList.add("menu-container")
    content.appendChild(menuContainer)

    const header = document.createElement("h1")
    header.textContent = "Our Menu"
    menuContainer.appendChild(header)

    const gridContainer = document.createElement("div")
    gridContainer.classList.add("grid-container")
    menuContainer.appendChild(gridContainer)

    const item1 = document.createElement("div")
    const item1Title = document.createElement("h3")
    item1Title.textContent = "Fresh Vegetable Salad"
    const item1Image = document.createElement("img")
    item1Image.src = item1DishImage
    item1Image.alt = "Dish image"
    const item1Dicription = document.createElement("p")
    item1Dicription.textContent = "A mouthwatering fresh vegetable salad with cherry tomatoes."
    const item1Price = document.createElement("p")
    item1Price.textContent = "$14.30"
    item1.appendChild(item1Image)
    item1.appendChild(item1Title)
    item1.appendChild(item1Dicription)
    item1.appendChild(item1Price)
    item1.classList.add("item")
    gridContainer.appendChild(item1)

    const item2 = document.createElement("div")
    const item2Title = document.createElement("h3")
    item2Title.textContent = "Chicken Sandwich"
    const item2Image = document.createElement("img")
    item2Image.src = item2DishImage
    item2Image.alt = "Dish image"
    const item2Dicription = document.createElement("p")
    item2Dicription.textContent = "Chicken sandwich served on multigrain bread."
    const item2Price = document.createElement("p")
    item2Price.textContent = "$21.73"
    item2.appendChild(item2Image)
    item2.appendChild(item2Title)
    item2.appendChild(item2Dicription)
    item2.appendChild(item2Price)
    item2.classList.add("item")
    gridContainer.appendChild(item2)

const item3 = document.createElement("div");
const item3Title = document.createElement("h3");
item3Title.textContent = "Gourmet Burger";
const item3Image = document.createElement("img");
item3Image.src = item3DishImage; 
item3Image.alt = "Gourmet Burger";
const item3Description = document.createElement("p");
item3Description.textContent = "A delicious gourmet burger";
const item3Price = document.createElement("p");
item3Price.textContent = "$12.99";
item3.appendChild(item3Image);
item3.appendChild(item3Title);
item3.appendChild(item3Description);
item3.appendChild(item3Price);
item3.classList.add("item");
gridContainer.appendChild(item3);

const item4 = document.createElement("div");
const item4Title = document.createElement("h3");
item4Title.textContent = "Pepperoni Pizza";
const item4Image = document.createElement("img");
item4Image.src = item4DishImage; 
item4Image.alt = "Pepperoni Pizza";
const item4Description = document.createElement("p");
item4Description.textContent = "A freshly baked pepperoni pizza";
const item4Price = document.createElement("p");
item4Price.textContent = "$14.49";
item4.appendChild(item4Image);
item4.appendChild(item4Title);
item4.appendChild(item4Description);
item4.appendChild(item4Price);
item4.classList.add("item");
gridContainer.appendChild(item4);

const item5 = document.createElement("div");
const item5Title = document.createElement("h3");
item5Title.textContent = "Creamy Fettuccine Pasta";
const item5Image = document.createElement("img");
item5Image.src = item5DishImage; 
item5Image.alt = "Creamy Fettuccine Pasta";
const item5Description = document.createElement("p");
item5Description.textContent = "A delicious bowl of creamy fettuccine pasta";
const item5Price = document.createElement("p");
item5Price.textContent = "$13.99";
item5.appendChild(item5Image);
item5.appendChild(item5Title);
item5.appendChild(item5Description);
item5.appendChild(item5Price);
item5.classList.add("item");
gridContainer.appendChild(item5);

const item6 = document.createElement("div");
const item6Title = document.createElement("h3");
item6Title.textContent = "Rice Dish";
const item6Image = document.createElement("img");
item6Image.src = item6DishImage; 
item6Image.alt = "Rice Dish";
const item6Description = document.createElement("p");
item6Description.textContent = "A beautifully served bowl of rice garnished with meat";
const item6Price = document.createElement("p");
item6Price.textContent = "$11.49";
item6.appendChild(item6Image);
item6.appendChild(item6Title);
item6.appendChild(item6Description);
item6.appendChild(item6Price);
item6.classList.add("item");
gridContainer.appendChild(item6);

const item7 = document.createElement("div");
const item7Title = document.createElement("h3");
item7Title.textContent = "Shrimp Noodles";
const item7Image = document.createElement("img");
item7Image.src = item7DishImage; 
item7Image.alt = "Shrimp Noodles";
const item7Description = document.createElement("p");
item7Description.textContent = "A bowl of savory shrimp noodles";
const item7Price = document.createElement("p");
item7Price.textContent = "$15.99";
item7.appendChild(item7Image);
item7.appendChild(item7Title);
item7.appendChild(item7Description);
item7.appendChild(item7Price);
item7.classList.add("item");
gridContainer.appendChild(item7);

const item8 = document.createElement("div");
const item8Title = document.createElement("h3");
item8Title.textContent = "Spicy Curry Dish";
const item8Image = document.createElement("img");
item8Image.src = item8DishImage; 
item8Image.alt = "Spicy Curry Dish";
const item8Description = document.createElement("p");
item8Description.textContent = "A rich and vibrant spicy curry dish";
const item8Price = document.createElement("p");
item8Price.textContent = "$11.32";
item8.appendChild(item8Image);
item8.appendChild(item8Title);
item8.appendChild(item8Description);
item8.appendChild(item8Price);
item8.classList.add("item");
gridContainer.appendChild(item8);

const item9 = document.createElement("div");
const item9Title = document.createElement("h3");
item9Title.textContent = "Sushi Delight Platter";
const item9Image = document.createElement("img");
item9Image.src = item9DishImage; 
item9Image.alt = "Spicy Curry Dish";
const item9Description = document.createElement("p");
item9Description.textContent = "An appetizing array of sushi rolls served on a wooden platter";
const item9Price = document.createElement("p");
item9Price.textContent = "$6.99";
item9.appendChild(item9Image);
item9.appendChild(item9Title);
item9.appendChild(item9Description);
item9.appendChild(item9Price);
item9.classList.add("item");
gridContainer.appendChild(item9);

const item10 = document.createElement("div");
const item10Title = document.createElement("h3");
item10Title.textContent = "Steak ";
const item10Image = document.createElement("img");
item10Image.src = item10DishImage
item10Image.alt = "Vegan Salad Bowl";
const item10Description = document.createElement("p");
item10Description.textContent = "A perfectly cooked steak paired with seasoned fries";
const item10Price = document.createElement("p");
item10Price.textContent = "$31.49";
item10.appendChild(item10Image);
item10.appendChild(item10Title);
item10.appendChild(item10Description);
item10.appendChild(item10Price);
item10.classList.add("item");
gridContainer.appendChild(item10);

// Item 11
const item11 = document.createElement("div");
const item11Title = document.createElement("h3");
item11Title.textContent = "BBQ Ribs";
const item11Image = document.createElement("img");
item11Image.src = item11DishImage
item11Image.alt = "BBQ Ribs";
const item11Description = document.createElement("p");
item11Description.textContent = "Tender ribs coated in a smoky BBQ sauce and grilled to perfection.";
const item11Price = document.createElement("p");
item11Price.textContent = "$12.99";
item11.appendChild(item11Image);
item11.appendChild(item11Title);
item11.appendChild(item11Description);
item11.appendChild(item11Price);
item11.classList.add("item");
gridContainer.appendChild(item11);

// Item 12
const item12 = document.createElement("div");
const item12Title = document.createElement("h3");
item12Title.textContent = "tofu bento";
const item12Image = document.createElement("img");
item12Image.src = item12DishImage
item12Image.alt = "tofu bento";
const item12Description = document.createElement("p");
item12Description.textContent = "A nutritious tofu bento box filled with grilled tofu";
const item12Price = document.createElement("p");
item12Price.textContent = "$10.79";
item12.appendChild(item12Image);
item12.appendChild(item12Title);
item12.appendChild(item12Description);
item12.appendChild(item12Price);
item12.classList.add("item");
gridContainer.appendChild(item12);

}
export default craeteMenuPage