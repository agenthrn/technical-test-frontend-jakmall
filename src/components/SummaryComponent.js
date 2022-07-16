import React from "react";
import styled, { css } from "styled-components";

const SummarySection = styled.section`
  // position: relative;
  // flex-basis: 300px;

  @media (min-width: 851px) {
    border-left: 1px solid #ff8a0020;
    padding: 20px;
  }
`;

const CalculationSection = styled.div`
  bottom: 20px;
  display: flex;
  flex-direction: column;
  @media (min-width: 851px) {
    position: absolute;
  }
  @media (max-width: 850px) {
    margin-top: 20px;
  }
`;

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 12px;
  ${(props) => {
    switch (props.direction) {
      case "row":
        return css`
          flex-direction: row;
          justify-content: space-between;
        `;
      default:
        return css`
          flex-direction: column;
        `;
    }
  }}
`;

const Text = styled.span`
  font-weight: ${(props) => props.fontWeight || 300};
  font-family: ${(props) => props.fonfamily || "Inter"}, sans-serif;
  font-style: normal;
  font-size: ${(props) => props.fontSize || "14px"};
  color: ${(props) => props.color || "#000"};
`;

const Divider = styled.div`
  background: #d8d8d8;
  width: 80px;
  height: 1px;
  margin: 21px 0;
`;

const Button = styled.button`
  background-color: #ff8a00;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 3px 5px 10px rgba(255, 138, 0, 0.2);
  border-radius: 2px;
  padding: 20px;
  cursor: pointer;

  &:hover {
    background-color: #ff8a0080;
  }
`;

const SummaryComponent = () => {
  return (
    <SummarySection>
      <Item>
        <Text
          fontFamily="Montserrat"
          color="#FF8A00"
          fontSize="24px"
          fontWeight="700"
        >
          Summary
        </Text>
        <Text>10 items purchased</Text>
      </Item>

      <Divider />

      <Item>
        <Text fontWeight="400">Delivery estimation</Text>
        <Text fontWeight="500" fontSize="16px" color="#1BD97B">
          today by GO-SEND
        </Text>
      </Item>

      <Divider />

      <Item>
        <Text fontWeight="400">Payment method</Text>
        <Text fontWeight="500" fontSize="16px" color="#1BD97B">
          Bank Transfer
        </Text>
      </Item>

      <CalculationSection>
        <Item direction="row">
          <Text>Cost of goods</Text>
          <Text fontWeight="700">500000</Text>
        </Item>
        <Item direction="row">
          <Text>Dropshipping Fee</Text>
          <Text fontWeight="700">5800</Text>
        </Item>
        <Item direction="row">
          <Text>GO-SEND shipment</Text>
          <Text fontWeight="700">15000</Text>
        </Item>
        <Item direction="row">
          <Text
            fontFamily="Montserrat"
            color="#FF8A00"
            fontSize="24px"
            fontWeight="700"
          >
            Total
          </Text>
          <Text
            fontFamily="Montserrat"
            color="#FF8A00"
            fontSize="24px"
            fontWeight="700"
          >
            500000
          </Text>
        </Item>
        <Button>
          <Text color="#fff" fontSize="18px" fontWeight="500">
            Pay with e-Wallet
          </Text>
        </Button>
      </CalculationSection>
    </SummarySection>
  );
};

export default SummaryComponent;
