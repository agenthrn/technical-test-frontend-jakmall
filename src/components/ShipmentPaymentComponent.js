import React, { useState } from "react";
import styled, { css } from "styled-components";

const Text = styled.span`
  font-weight: ${(props) => props.fontWeight || 300};
  font-family: ${(props) => props.fonfamily || "Inter"}, sans-serif;
  font-style: normal;
  font-size: ${(props) => props.fontSize || "14px"};
  color: ${(props) => props.color || "#000"};
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 850px) {
    flex-basis: 700px;
  }
`;

const Item = styled.div`
  display: flex;
  gap: ${(props) => props.gap || "12px"};
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: space-between;
  ${(props) => props.width && `width: ${props.width}`}
  ${(props) => props.alignItems && `align-items: ${props.alignItems}`}
  ${(props) =>
    props.responsive &&
    css`
      @media (max-width: 850px) {
        flex-direction: column;
      }
    `}
`;

const Grid = styled.div`
  margin: 30px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  @media (max-width: 650px) {
    overflow-x: scroll;
  }
`;

const Card = styled.div`
  border: 1px solid #cccccc;
  display: flex;
  align-items: center;
  min-width: 180px;
  height: 60px;
  padding: 10px;
  position: relative;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  right: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;
`;

const RadioButton = styled.input`
  opacity: 0;
  position: absolute;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  right: 4px;
  &:checked + ${Card} {
    background: #1bd97b;
    border: 2px solid #1bd97b;
  }
  &:checked + ${RadioButtonLabel} {
    background: #1bd97b;
    border: 2px solid #1bd97b;
    &::after {
      font-family: "Material Icons";
      content: "check";
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
`;

const ShipmentPaymentComponent = () => {
  const courier = [
    { name: "GO-SEND", price: 50000 },
    { name: "JNE", price: 9000 },
    { name: "Personal Courier", price: 29000 },
  ];
  const payment = [
    { name: "e-Wallet", value: 15000000 },
    { name: "Bank Transfer", value: null },
    { name: "Virtual Account", value: null },
  ];
  const [selectCourier, setSelectCourier] = useState("GO-SEND");
  const [selectPayment, setSelectPayment] = useState("e-Wallet");
  const handleSelectChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    if (name === "radioCourier") {
      setSelectCourier(value);
    } else {
      setSelectPayment(value);
    }
  };
  return (
    <Div>
      <Item width="140px">
        <span
          style={{ fontSize: "17px" }}
          className="material-symbols-outlined"
        >
          arrow_back
        </span>
        <Text>Back to delivery</Text>
      </Item>
      <Text
        fontFamily="Montserrat"
        color="#FF8A00"
        fontSize="36px"
        fontWeight="700"
      >
        Shipment
      </Text>
      <Grid>
        {courier.map((courier, index) => (
          <Card key={index}>
            <Item gap="0" direction="column">
              <Text color="#000">{courier.name}</Text>
              <Text color="#000" fontSize="16px" fontWeight="700">
                {courier.price}
              </Text>
            </Item>
            <RadioButton
              type="radio"
              name="radioCourier"
              value={courier.name}
              checked={selectCourier === courier.name}
              onChange={(event) => handleSelectChange(event)}
            />
            <RadioButtonLabel />
          </Card>
        ))}
      </Grid>

      <Text
        fontFamily="Montserrat"
        color="#FF8A00"
        fontSize="36px"
        fontWeight="700"
      >
        Payment
      </Text>
      <Grid>
        {payment.map((payment, index) => (
          <Card key={index}>
            <Item gap="0" direction="column">
              <Text color="#000">{payment.name}</Text>
              <Text color="#000" fontSize="16px" fontWeight="700">
                {payment.value}
              </Text>
            </Item>
            <RadioButton
              type="radio"
              name="radioPayment"
              value={payment.name}
              checked={selectPayment === payment.name}
              onChange={(event) => handleSelectChange(event)}
            />
            <RadioButtonLabel />
          </Card>
        ))}
      </Grid>
    </Div>
  );
};

export default ShipmentPaymentComponent;
