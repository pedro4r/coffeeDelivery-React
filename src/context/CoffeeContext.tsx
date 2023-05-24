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
    cartQuantityCount: number;
    payment: string;
    order: Order;
}

interface Order {
    cart: Cart[],
    address: Address,
    payment: string,
    total: number
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

    const [order, setOrder] = useState<Order>({} as Order);
    const [cart, setCart] = useState<Cart[]>([]);
    const [cartQuantityCount, setCartQuantityCount] = useState(0);
    const [address, setAddress] = useState<Address>({} as Address);
    const [payment, setPayment] = useState('credit card');

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

        const amountQuantity = cart.reduce((acc, coffeObject) => {
            return acc + coffeObject.quantity;
        }, 0);

        const orderAmount = cart.reduce((acc, cartObject) => {
            coffeeListArray.find(coffee => {
                if (coffee.id == cartObject.id) {
                    const subtotal = cartObject.quantity * coffee.price
                    return acc += subtotal
                }
            })
            return acc
        }, 0);

        setCartQuantityCount(amountQuantity);

        setOrder((order) => {
            const newOrder = {
                cart: cart,
                address: address,
                payment: payment,
                total: orderAmount
            };
            return { ...order, ...newOrder };
        });
    }, [cart, payment, address])

    useEffect(() => {
        const stateJSON = JSON.stringify(order)
        localStorage.setItem('@coffee-delivery:order-state-1.0.0', stateJSON)
    }, [order])

    return (
        <CoffeeContext.Provider
            value={{
                coffeeListArray,
                cartAdd,
                cartQuantityCount,
                insertAddress,
                paymentOption,
                payment,
                cart,
                setMoreCoffeeQuantity,
                setLessCoffeeQuantity,
                setRemoveCoffee,
                order
            }}>
            {children}
        </CoffeeContext.Provider>
    );
}
