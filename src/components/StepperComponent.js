import React from "react";
import styled from "styled-components";

const Stepper = styled.div`
  max-width: 500px;
  height: 70px;
  background-color: #fffae6;
  border-radius: 35px;
  margin: 0 auto;
  padding: 0 20px;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 851px) {
    top: -35px;
    position: absolute;
  }
  @media (max-width: 850px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    overflow-x: scroll;
    border-radius: 0px;
  }
`;

const Text = styled.span`
  font-weight: ${(props) => props.fontWeight || 500};
  font-family: ${(props) => props.fonfamily || "Inter"}, sans-serif;
  font-style: normal;
  font-size: ${(props) => props.fontSize || "16px"};
  color: ${(props) => props.color || "#fff"};

  @media (max-width: 850px) {
    font-size: 12px;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.div`
  background: ${(props) => props.color || "#fff"};
  border-radius: 50%;
  height: 30px;
  width: 30px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-right: 10px;
`;

const StepperComponent = () => {
  const steps = ["Delivery", "Payment", "Finish"];
  const stepPosition = 2;
  return (
    <Stepper>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <Item>
            <Dot color={index + 1 <= stepPosition ? "#FF8A00" : "#FF8A0080"}>
              <Text>{index + 1}</Text>
            </Dot>
            <Text color={index + 1 <= stepPosition ? "#FF8A00" : "#FF8A0080"}>
              {step}
            </Text>
          </Item>
          {index < steps.length - 1 && (
            <span
              style={{
                color: index + 1 <= stepPosition ? "#FF8A00" : "#FF8A0080",
              }}
              className="material-symbols-outlined"
            >
              arrow_forward_ios
            </span>
          )}
        </React.Fragment>
      ))}
    </Stepper>
  );
};

export default StepperComponent;
