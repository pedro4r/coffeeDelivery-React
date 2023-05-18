import { ListContainer, ListGrid } from "./styles";
import { Coffee } from "../Coffee";
import { useContext } from "react";
import { CoffeeContext } from "../../../../context/CoffeeContext";


export function CoffeeList() {

    const { coffeeListArray } = useContext(CoffeeContext)

    return (
        <ListContainer>
            <strong>Our Coffees</strong>
            <ListGrid>
                {coffeeListArray.map(coffee => (
                    <Coffee
                        key={coffee.id}
                        id={coffee.id}
                        name={coffee.name}
                        coffeeTag={coffee.coffeeTag}
                        description={coffee.description}
                        price={coffee.price}
                        image={coffee.image}
                    />
                ))}
            </ListGrid>
        </ListContainer>
    )
}
