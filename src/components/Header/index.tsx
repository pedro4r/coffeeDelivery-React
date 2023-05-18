import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { CartContainer, CartCounter, HeaderContainer, HeaderLocation } from "./styles";
import logoCoffee from "../../assets/logo.svg";
import { useContext } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";

export function Header() {
    const { cartAmount } = useContext(CoffeeContext)
    return (
        <HeaderContainer>
            <img src={logoCoffee} alt="" />
            <nav>
                <HeaderLocation>
                    <MapPin size={32} weight="fill" />
                    <span>Orlando, FL</span>
                </HeaderLocation>

                <NavLink to="/checkout" title="Checkout">
                    <CartContainer>
                        <CartCounter>
                            <span>{cartAmount}</span>
                        </CartCounter>
                        <ShoppingCart size={32} weight="fill" />
                    </CartContainer>
                </NavLink>
            </nav>

        </HeaderContainer>
    )
}