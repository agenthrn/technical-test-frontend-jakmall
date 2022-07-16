import React from "react";
import { Div, Item, Text } from "../Style";

const FinalComponent = () => {
  return (
    <Div>
      <Text
        fontFamily="Montserrat"
        color="#FF8A00"
        fontSize="24px"
        fontWeight="700"
        margin="0 0 26px 0"
      >
        Thank you
      </Text>
      <Text margin="0 0 9px 0" fontSize="14px" fontWeight="400">
        Order ID : XXX
      </Text>
      <Text
        margin="0 0 59px 0"
        color="#00000060"
        fontSize="14px"
        fontWeight="400"
      >
        Your order will be delivered today with GO-SEND
      </Text>
      <Item width="160px">
        <span
          style={{ fontSize: "17px" }}
          className="material-symbols-outlined"
        >
          arrow_back
        </span>
        <Text color="#00000060" fontWeight="500">
          Back to homepage
        </Text>
      </Item>
    </Div>
  );
};

export default FinalComponent;
