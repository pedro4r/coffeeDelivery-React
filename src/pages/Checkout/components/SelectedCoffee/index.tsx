import { AddRemoveButton, CoffeeDataContainer, CoffeeDetailsContainer, Purchase, QuantityContainer, RemoveButton } from "./styles";
import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { useContext } from "react";
import { CoffeeContext } from "../../../../context/CoffeeContext";

interface Cart {
    id: number;
    quantity: number;
}

export function SelectedCoffee({ id, quantity }: Cart) {

    const { coffeeListArray, setLessCoffeeQuantity, setMoreCoffeeQuantity, setRemoveCoffee } = useContext(CoffeeContext)
    const coffeeSelected = coffeeListArray.find(coffee => coffee.id === id)

    const handleMoreCoffee = () => {
        setMoreCoffeeQuantity(id);
    }

    const handleLessCoffee = () => {
        setLessCoffeeQuantity(id);
    }

    const handleRemoveCoffee = () => {
        setRemoveCoffee(id);
    }

    if (coffeeSelected) {
        return (
            <CoffeeDetailsContainer>
                <img src={`${coffeeSelected.image}`} alt="" />
                <CoffeeDataContainer>
                    <span>{coffeeSelected.name}</span>
                    <Purchase>
                        <QuantityContainer>
                            <AddRemoveButton disabled={quantity === 1} onClick={handleLessCoffee}>
                                <Minus size={14} weight="bold" />
                            </AddRemoveButton>
                            <span>{quantity}</span>
                            <AddRemoveButton onClick={handleMoreCoffee}>
                                <Plus size={14} weight="bold" />
                            </AddRemoveButton>
                        </QuantityContainer>
                        <RemoveButton onClick={handleRemoveCoffee}>
                            <Trash size={16} />
                            <span>REMOVE</span>
                        </RemoveButton>
                    </Purchase>
                </CoffeeDataContainer>
                <strong>U$ {coffeeSelected.price}</strong>
            </CoffeeDetailsContainer>
        )

    }

    else {
        return (<h1>Coffee not found</h1>)
    }

}