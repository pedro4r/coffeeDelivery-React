import { ShoppingCart, Timer } from "@phosphor-icons/react";
import { Background, Benefits, BenefitsList, CoffeePacking, FastDelivery, FreshCoffee, ImgContainer, Intro, Main, SecurityPurchase } from "./styles";
import coffeeIntro from '../../assets/coffee-intro.png';
import { CoffeeList } from "./components/CoffeeList";

export function Home() {

    return (
        <Main>
            <Background />
            <Intro>
                <div>
                    <strong>Find the perfect coffee<br />for any time of day</strong>
                    <p>With Coffee Delivery, you receive your coffee wherever you are, at any time.</p>
                    <Benefits>
                        <BenefitsList>
                            <SecurityPurchase>
                                <div>
                                    <ShoppingCart size={16} weight="fill" />
                                </div>
                                <span>Simple and secure purchase</span>
                            </SecurityPurchase>
                            <FastDelivery>
                                <div>
                                    <Timer size={16} weight="fill" />
                                </div>
                                <span>Fast and tracked delivery</span>
                            </FastDelivery>
                        </BenefitsList>
                        <BenefitsList>
                            <CoffeePacking>
                                <div>
                                    <ShoppingCart size={16} weight="fill" />
                                </div>
                                <span>Packaging keeps the coffee intact</span>
                            </CoffeePacking>
                            <FreshCoffee>
                                <div>
                                    <ShoppingCart size={16} weight="fill" />
                                </div>
                                <span>The coffee arrives fresh to you</span>
                            </FreshCoffee>
                        </BenefitsList>
                    </Benefits>
                </div>

                <ImgContainer>
                    <img src={coffeeIntro} alt="" />
                </ImgContainer>

            </Intro>
            <CoffeeList></CoffeeList>
        </Main>
    )
}