import React from "react";
import styled from "styled-components";
import DeliveryComponent from "../components/DeliveryComponent";
import StepperComponent from "../components/StepperComponent";
import SummaryComponent from "../components/SummaryComponent";

const OrderPageWrapper = styled.div`
  background-color: #fffae6;
  height: 100vh;
`;

const OrderPageBody = styled.div`
  background-color: #fff;
  width: 1000px;
  min-height: 550px;
  margin: 0 auto;
  position: absolute;
  box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
  border-radius: 4px;
  display: flex;
  gap: 12px;
  padding: 50px 20px;
  @media (min-width: 851px) {
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  @media (max-width: 1100px) {
    width: 90%;
  }
  @media (max-width: 850px) {
    flex-direction: column;
    width: 100%;
  }
`;

const OrderPage = () => {
  return (
    <OrderPageWrapper>
      <OrderPageBody>
        <StepperComponent />
        <DeliveryComponent />
        <SummaryComponent />
      </OrderPageBody>
    </OrderPageWrapper>
  );
};

export default OrderPage;
