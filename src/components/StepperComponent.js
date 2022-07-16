import React from "react";
import { Stepper, ItemStepper, StepperText, Dot } from "../Style";

const StepperComponent = () => {
  const steps = ["Delivery", "Payment", "Finish"];
  const stepPosition = 2;
  return (
    <Stepper>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <ItemStepper>
            <Dot color={index + 1 <= stepPosition ? "#FF8A00" : "#FF8A0080"}>
              <StepperText>{index + 1}</StepperText>
            </Dot>
            <StepperText
              color={index + 1 <= stepPosition ? "#FF8A00" : "#FF8A0080"}
            >
              {step}
            </StepperText>
          </ItemStepper>
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
