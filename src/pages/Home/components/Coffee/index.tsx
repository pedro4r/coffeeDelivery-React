import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { AddRemoveButton, BuyButton, CoffeeContainer, CoffeeTag, CoffeeTagContainer, Footer, Price, Purchase, QuantityContainer } from "./styles";
import { useContext, useState } from "react";
import { CoffeeContext } from "../../../../context/CoffeeContext";

interface CoffeeProps {
    id: number;
    name: string;
    coffeeTag: string[];
    description: string;
    price: number;
    image: string;
}

export function Coffee({ id, name, coffeeTag, description, price, image }: CoffeeProps) {

    const { cartAdd } = useContext(CoffeeContext)
    const [coffeeQuantity, setcoffeeQuantity] = useState(1);

    const handleMoreCoffee = () => {
        setcoffeeQuantity((coffeeQuantity => coffeeQuantity + 1))
    }

    const handleLessCoffee = () => {
        setcoffeeQuantity((coffeeQuantity => coffeeQuantity - 1))
    }

    const handleAddInCart = () => {
        const cartObject = {
            id: id,
            quantity: coffeeQuantity,
        }

        cartAdd(cartObject);
    }

    return (<CoffeeContainer>
        <img src={`${image}`} alt="" />
        <CoffeeTagContainer>
            {coffeeTag.map(tag => (
                <CoffeeTag key={tag}>
                    <span>{tag}</span>
                </CoffeeTag>
            ))}
        </CoffeeTagContainer>
        <strong>{name}</strong>
        <span>{description}</span>
        <Footer>
            <Price>
                <span>U$</span>
                <strong>{price}</strong>
            </Price>
            <Purchase>
                <QuantityContainer>
                    <AddRemoveButton disabled={coffeeQuantity === 1} onClick={handleLessCoffee}>
                        <Minus size={14} weight="bold" />
                    </AddRemoveButton>
                    <span>{coffeeQuantity}</span>
                    <AddRemoveButton onClick={handleMoreCoffee}>
                        <Plus size={14} weight="bold" />
                    </AddRemoveButton>
                </QuantityContainer>
                <BuyButton onClick={handleAddInCart}>
                    <ShoppingCart size={22} weight="fill" />
                </BuyButton>
            </Purchase>
        </Footer>
    </CoffeeContainer >)
}