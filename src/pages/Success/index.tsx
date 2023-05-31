import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { Address, AddressIconContainer, ImgContainer, PaymentIconContainer, SuccessContainer, TimeIconContainer, Title, TrackingContainer, TrackingInfo } from "./styles";
import { CoffeeContext } from "../../context/CoffeeContext";
import { useContext } from "react";
import delivery from '../../assets/delivery.png';

export function Success() {

    const { order } = useContext(CoffeeContext)

    return (
        <SuccessContainer>
            <Title>
                <strong>Wow! Order Confirmed</strong>
                <span>Now just wait, soon the coffee will reach you.</span>
            </Title>
            <TrackingContainer>
                <TrackingInfo>
                    <AddressIconContainer>
                        <MapPin size={16} weight="fill" />
                    </AddressIconContainer>
                    <Address>
                        <span>Delivery at <b>{order.address.address} {order.address.complement}</b> {order.address.city} {order.address.state}</span>
                    </Address>
                </TrackingInfo>
                <TrackingInfo>
                    <TimeIconContainer>
                        <Timer size={16} weight="fill" />
                    </TimeIconContainer>
                    <Address>
                        <span>Estimated Delivery Time</span>
                        <p>20 min - 30 min</p>
                    </Address>
                </TrackingInfo>
                <TrackingInfo>
                    <PaymentIconContainer>
                        <CurrencyDollar size={16} />
                    </PaymentIconContainer>
                    <Address>
                        <span>Payment on Delivery</span>
                        <p>{order.payment}</p>
                    </Address>
                </TrackingInfo>
            </TrackingContainer>
            <ImgContainer>
                <img src={delivery} alt="" />
            </ImgContainer>
        </SuccessContainer>
    )
}