import React from "react";
import styled from "styled-components";
import SummaryComponent from "../components/SummaryComponent";

const OrderPageWrapper = styled.div`
  background-color: #fffae6;
  height: 100vh;
  width: 100vw;
`;

const OrderPageBody = styled.div`
  background-color: #fff;
  width: 1100px;
  height: 550px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
  border-radius: 4px;
  display: flex;
  flex-basis: auto;
`;

const OrderPage = () => {
  return (
    <OrderPageWrapper>
      <OrderPageBody>
        <p>cek</p>
        <SummaryComponent />
      </OrderPageBody>
    </OrderPageWrapper>
  );
};

export default OrderPage;
