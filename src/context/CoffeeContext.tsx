import { createContext, ReactNode, useEffect, useState } from "react";

interface CoffeeContextType {
    coffeeListArray: Coffee[];
    cartAdd: (cartObject: Cart) => void;
}

interface Coffee {
    id: number;
    name: string;
    coffeeTag: string[];
    description: string;
    price: number;
    image: string;
}

interface Cart {
    id: number;
    quantity: number;
}

interface CoffeeContextProviderProps {
    children: ReactNode;
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider({ children }: CoffeeContextProviderProps) {

    const [cart, setCart] = useState<Cart[]>([]);
    const [cartAmount, setCartAmount] = useState(0);

    console.log(cartAmount);

    function cartAdd(cartObject: Cart) {

        const coffeeIndex = cart.findIndex(item => item.id === cartObject.id);

        if (coffeeIndex !== -1) {
            const cartCopy = [...cart];
            cartCopy[coffeeIndex] = {
                ...cartCopy[coffeeIndex],
                quantity: cartCopy[coffeeIndex].quantity + cartObject.quantity
            };
            setCart(cartCopy);
        }

        else {
            setCart([...cart, cartObject]);
        }
    }

    useEffect(() => {
        const amount = cart.reduce((acc, coffeObject) => {
            return acc + coffeObject.quantity;
        }, 0);

        setCartAmount(amount);
    }, [cart])

    const coffeeListArray: Coffee[] = [
        {
            id: 1,
            name: "Traditional espresso",
            coffeeTag: ["Traditional"],
            description: "The traditional coffee made with hot water and ground beans.",
            price: 5.99,
            image: "/src/assets/traditional-espresso.png",
        },
        {
            id: 2,
            name: "Americano espresso",
            coffeeTag: ["Traditional"],
            description: "Diluted espresso, less intense than traditional.",
            price: 4.99,
            image: "/src/assets/americano-espresso.png",
        },
        {
            id: 3,
            name: "Creamy Espresso",
            coffeeTag: ["Traditional"],
            description: "Traditional espresso with creamy foam.",
            price: 7.99,
            image: "/src/assets/creamy-espresso.png",
        },
        {
            id: 4,
            name: "Iced Espresso",
            coffeeTag: ["Traditional", "Iced"],
            description: "Drink made with espresso and ice cubes.",
            price: 6.99,
            image: "/src/assets/iced-espresso.png",
        },
    ];

    return (
        <CoffeeContext.Provider
            value={{
                coffeeListArray,
                cartAdd,
            }}>
            {children}
        </CoffeeContext.Provider>
    );
}
