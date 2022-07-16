import React from "react";
import styled, { css } from "styled-components";

const Text = styled.span`
  font-weight: ${(props) => props.fontWeight || 300};
  font-family: ${(props) => props.fonfamily || "Inter"}, sans-serif;
  font-style: normal;
  font-size: ${(props) => props.fontSize || "14px"};
  color: ${(props) => props.color || "#000"};
`;

const Delivery = styled.div`
//   flex-grow: auto;
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: row;
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

const Input = styled.input`
  border: 1px solid #cccccc;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  resize: none;
  border: 1px solid #cccccc;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 10px;
  overflow: hidden;
`;

const FormLabel = styled.label`
  display: block;
  transition: 0.2s;
  font-size: 1rem;
`;

const DeliveryComponent = () => {
  return (
    <Delivery>
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
    </Delivery>
  );
};

export default DeliveryComponent;
