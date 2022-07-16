import React, { useState } from "react";
import { Div, Item, Text, Grid, Card, RadioButton, RadioButtonLabel } from "../Style";

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
