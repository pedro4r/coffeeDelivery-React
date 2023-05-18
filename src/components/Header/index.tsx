import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { HeaderContainer, HeaderLocation } from "./styles";
import logoCoffee from "../../assets/logo.svg";

export function Header() {
    return (
        <HeaderContainer>
            <img src={logoCoffee} alt="" />
            <nav>
                <HeaderLocation>
                    <MapPin size={32} weight="fill" />
                    <span>Orlando, FL</span>
                </HeaderLocation>

                <NavLink to="/checkout" title="Checkout">
                    <ShoppingCart size={32} weight="fill" />
                </NavLink>
            </nav>

        </HeaderContainer>
    )
}