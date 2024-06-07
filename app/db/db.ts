import pizzaImg from "../images/pizza.png";
import burgerImg from "../images/burger.png";
import cocaImg from "../images/coca.png";
import saladImg from "../images/salad.png";
import waterImg from "../images/water.png";
import iceCreamImg from "../images/icecream.png";
import kebabImg from "../images/kebab.png";
import { FoodType } from "../types/cardTypes";

export function getData(): FoodType[] {
    return [
        { title: "Pizza", price: 17.99, imageUrl: pizzaImg, id: 1 },
        { title: "Burger", price: 15, imageUrl: burgerImg, id: 2 },
        { title: "Coca", price: 3.5, imageUrl: cocaImg, id: 3 },
        { title: "Kebab", price: 13.99, imageUrl: kebabImg, id: 4 },
        { title: "Salad", price: 2.5, imageUrl: saladImg, id: 5 },
        { title: "Bottle of water", price: 0.99, imageUrl: waterImg, id: 6 },
        { title: "Ice cream", price: 2.99, imageUrl: iceCreamImg, id: 7 },
    ];
}
