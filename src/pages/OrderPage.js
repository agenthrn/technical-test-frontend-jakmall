import React from "react";
import DeliveryComponent from "../components/DeliveryComponent";
import FinalComponent from "../components/FinalComponent";
import ShipmentPaymentComponent from "../components/ShipmentPaymentComponent";
import StepperComponent from "../components/StepperComponent";
import SummaryComponent from "../components/SummaryComponent";
import { GlobalStyle, OrderPageBody } from "../Style";

const OrderPage = () => {
  const stepPosition = 3;

  return (
    <>
      <GlobalStyle />
      <OrderPageBody>
        <StepperComponent />
        {stepPosition === 1 ? (
          <DeliveryComponent />
        ) : stepPosition === 2 ? (
          <ShipmentPaymentComponent />
        ) : (
          <FinalComponent />
        )}
        <SummaryComponent />
      </OrderPageBody>
    </>
  );
};

export default OrderPage;
