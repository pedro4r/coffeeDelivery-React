import { createContext, ReactNode, useEffect, useState } from "react";
import { coffeeListArray } from '../coffeeList'

interface CoffeeContextType {
    coffeeListArray: Coffee[];
    cart: Cart[];
    cartAdd: (cartObject: Cart) => void;
    setMoreCoffeeQuantity: (id: number) => void;
    setLessCoffeeQuantity: (id: number) => void;
    setRemoveCoffee: (id: number) => void;
    insertAddress: (address: Address) => void;
    paymentOption: (option: string) => void;
    cartAmount: number;
    payment: string;
}

export interface Coffee {
    id: number;
    name: string;
    coffeeTag: string[];
    description: string;
    price: number;
    image: string;
}

interface Address {
    zipcode: string;
    address: string;
    complement: string;
    city: string;
    state: string;
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

    const [order, setOrder] = useState({});

    const [cart, setCart] = useState<Cart[]>([]);
    const [cartAmount, setCartAmount] = useState(0);

    const [address, setAddress] = useState({});
    const [payment, setPayment] = useState('credit card');

    console.log(cart);

    function setMoreCoffeeQuantity(id: number) {
        setCart(cart => {
            const cartCopy = cart.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            return cartCopy;
        });
    }

    function setLessCoffeeQuantity(id: number) {
        setCart(cart => {
            const cartCopy = cart.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
            return cartCopy;
        });
    }

    function setRemoveCoffee(id: number) {
        setCart(cart => {
            const cartCopy = cart.filter(item => item.id !== id);
            return cartCopy;
        });
    }

    function insertAddress(addressObject: Address) {
        setAddress(addressObject);
    }

    function paymentOption(option: string) {
        setPayment(option);
    }

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

        const newOrder = {
            cart: cart,
            address: address,
            payment: payment
        }
        setOrder(newOrder);

    }, [cart, payment, address])

    return (
        <CoffeeContext.Provider
            value={{
                coffeeListArray,
                cartAdd,
                cartAmount,
                insertAddress,
                paymentOption,
                payment,
                cart,
                setMoreCoffeeQuantity,
                setLessCoffeeQuantity,
                setRemoveCoffee
            }}>
            {children}
        </CoffeeContext.Provider>
    );
}
