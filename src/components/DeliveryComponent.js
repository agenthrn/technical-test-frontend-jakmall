import React from "react";
import { Div, Item, Text, Input, TextArea } from "../Style";

const DeliveryComponent = () => {
  return (
    <Div>
      <Item width="110px">
        <span
          style={{ fontSize: "17px" }}
          className="material-symbols-outlined"
        >
          arrow_back
        </span>
        <Text>Back to cart</Text>
      </Item>
      <Item>
        <Text
          fontFamily="Montserrat"
          color="#FF8A00"
          fontSize="36px"
          fontWeight="700"
        >
          Delivery details
        </Text>
        <Item alignItems="center">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label htmlFor="vehicle1">Send as dropshipper</label>
        </Item>
      </Item>
      <Item responsive>
        <div>
          <Input type="text" placeholder="Name"></Input>
          <Input type="text" placeholder="Phone Number"></Input>
          <TextArea rows="5" placeholder="Delivery address"></TextArea>
        </div>
        <div>
          <Input type="text" placeholder="Dropshipper name"></Input>
          <Input type="number" placeholder="Dropshipper phone Number"></Input>
        </div>
      </Item>
    </Div>
  );
};

export default DeliveryComponent;
