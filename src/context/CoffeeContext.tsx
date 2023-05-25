import { createContext, ReactNode, useEffect, useState } from "react";
import { coffeeListArray } from '../coffeeList'

interface CoffeeContextType {
    coffeeListArray: Coffee[];
    addToCart: (cartObject: Cart) => void;
    setMoreCoffeeQuantity: (id: number) => void;
    setLessCoffeeQuantity: (id: number) => void;
    setRemoveCoffee: (id: number) => void;
    insertAddress: (address: Address) => void;
    changeAddressInputState: (address: Address) => void;
    paymentOption: (option: string) => void;
    cartQuantityCount: number;
    order: Order;
    orderAmount: number;
    addressInputState: Address;
}

interface Order {
    cart: Cart[],
    address: Address,
    payment: string,
}

export interface Coffee {
    id: number;
    name: string;
    coffeeTag: string[];
    description: string;
    price: number;
    image: string;
}

export interface Address {
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

    const [order, setOrder] = useState<Order>({
        cart: [],
        address: {} as Address,
        payment: "credit card"
    });
    const [cartQuantityCount, setCartQuantityCount] = useState(0);
    const [orderAmount, setOrderAmount] = useState(0);
    const [addressInputState, setAddressInputState] = useState<Address>({} as Address);

    function changeAddressInputState(addressObject: Address) {
        setAddressInputState(addressObject);
    }

    function setMoreCoffeeQuantity(id: number) {
        setOrder(order => {
            const cartCopy = [...order.cart];

            const newCart = cartCopy.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });

            return {
                ...order,
                cart: newCart
            };
        });
    }

    function setLessCoffeeQuantity(id: number) {
        setOrder(order => {
            const cartCopy = [...order.cart];

            const newCart = cartCopy.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });

            return {
                ...order,
                cart: newCart
            };
        });
    }

    function setRemoveCoffee(id: number) {
        setOrder(order => {
            const cartCopy = [...order.cart];
            const newCart = cartCopy.filter(item => item.id !== id);

            return {
                ...order,
                cart: newCart
            };
        });
    }

    function insertAddress(addressObject: Address) {
        setOrder(order => ({
            ...order,
            address: {
                ...addressObject
            }
        }));
    }

    function paymentOption(option: string) {
        setOrder((order) => ({ ...order, payment: option }));
    }

    function addToCart(cartObject: Cart) {
        setOrder(order => {
            const cartCopy = order.cart ? [...order.cart] : [];
            const coffeeIndex = cartCopy.findIndex(item => item.id === cartObject.id);

            if (coffeeIndex !== -1) {
                cartCopy[coffeeIndex].quantity += cartObject.quantity;
            } else {
                cartCopy.push(cartObject);
            }

            return {
                ...order,
                cart: cartCopy
            };
        });
    }

    useEffect(() => {

        const amountQuantity = (order.cart ?? []).reduce((acc, coffeObject) => {
            return acc + coffeObject.quantity;
        }, 0);

        setCartQuantityCount(amountQuantity);

        const orderAmount = (order.cart ?? []).reduce((acc, cartObject) => {
            coffeeListArray.find(coffee => {
                if (coffee.id === cartObject.id) {
                    const subtotal = cartObject.quantity * coffee.price
                    return acc += subtotal
                }
            })
            return acc
        }, 0);

        setOrderAmount(orderAmount);

    }, [order])

    useEffect(() => {
        const stateJSON = JSON.stringify(order)
        localStorage.setItem('@coffee-delivery:order-state-1.0.0', stateJSON)
    }, [order])

    return (
        <CoffeeContext.Provider
            value={{
                coffeeListArray,
                addToCart,
                cartQuantityCount,
                insertAddress,
                paymentOption,
                setMoreCoffeeQuantity,
                setLessCoffeeQuantity,
                setRemoveCoffee,
                order,
                orderAmount,
                changeAddressInputState,
                addressInputState
            }}>
            {children}
        </CoffeeContext.Provider>
    );
}
