import React from "react";
import styled, { css } from "styled-components";

const Text = styled.span`
  font-weight: ${(props) => props.fontWeight || 300};
  font-family: ${(props) => props.fonfamily || "Inter"}, sans-serif;
  font-style: normal;
  font-size: ${(props) => props.fontSize || "14px"};
  color: ${(props) => props.color || "#000"};
  ${(props) => props.margin && `margin: ${props.margin}`}
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
