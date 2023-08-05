interface Coffee {
    id: number;
    name: string;
    coffeeTag: string[];
    description: string;
    price: number;
    image: string;
}

export const coffeeListArray: Coffee[] = [
    {
        id: 1,
        name: "Traditional espresso",
        coffeeTag: ["Traditional"],
        description: "The traditional coffee made with hot water and ground beans",
        price: 5.99,
        image: "traditional-espresso.png",
    },
    {
        id: 2,
        name: "Americano espresso",
        coffeeTag: ["Traditional"],
        description: "Diluted espresso, less intense than traditional",
        price: 4.99,
        image: "americano-espresso.png",
    },
    {
        id: 3,
        name: "Creamy Espresso",
        coffeeTag: ["Traditional"],
        description: "Traditional espresso with creamy foam",
        price: 7.99,
        image: "creamy-espresso.png",
    },
    {
        id: 4,
        name: "Iced Espresso",
        coffeeTag: ["Traditional", "Iced"],
        description: "Drink made with espresso and ice cubes",
        price: 6.99,
        image: "iced-espresso.png",
    },
    {
        id: 5,
        name: "Coffee with Milk",
        coffeeTag: ["Traditional", "Milk"],
        description: "Half and half of traditional espresso with steamed milk",
        price: 8.99,
        image: "coffee-with-milk.png",
    },
    {
        id: 6,
        name: "Latte",
        coffeeTag: ["Traditional", "Milk"],
        description: "A shot of espresso with double the amount of milk and creamy foam",
        price: 9.99,
        image: "latte.png",
    },
    {
        id: 7,
        name: "Capuccino",
        coffeeTag: ["Traditional", "Milk"],
        description: "Cinnamon drink made with equal parts of coffee, milk, and foam",
        price: 9.99,
        image: "capuccinoo.png",
    },
    {
        id: 8,
        name: "Macchiato",
        coffeeTag: ["Traditional", "Milk"],
        description: "Espresso mixed with a splash of hot milk and foam",
        price: 9.99,
        image: "macchiato.png",
    },
    {
        id: 9,
        name: "Mocaccino",
        coffeeTag: ["Traditional", "Milk"],
        description: "Espresso with chocolate syrup, a small amount of milk, and foam",
        price: 7.99,
        image: "mocaccino.png",
    },
    {
        id: 10,
        name: "Hot Chocolate",
        coffeeTag: ["Special", "Milk"],
        description: "A drink made with chocolate dissolved in hot milk and coffee",
        price: 3.99,
        image: "hot-chocolate.png",
    },
    {
        id: 11,
        name: "Cuban",
        coffeeTag: ["Traditional", "Alcoholic", "Milk"],
        description: "Iced espresso drink with rum, cream, and mint",
        price: 12.99,
        image: "cuban.png",
    },
    {
        id: 12,
        name: "Hawaiian",
        coffeeTag: ["Special"],
        description: "Sweetened beverage prepared with coffee and coconut milk",
        price: 5.99,
        image: "hawaiian.png",
    },
    {
        id: 13,
        name: "Arabic",
        coffeeTag: ["Special"],
        description: "Beverage prepared with Arabic coffee beans and spices",
        price: 5.99,
        image: "arabic.png",
    },
    {
        id: 14,
        name: "Irish",
        coffeeTag: ["Special", "Alcoholic"],
        description: "Beverage made with coffee, Irish whiskey, sugar, and whipped cream",
        price: 8.99,
        image: "irish.png",
    },
];