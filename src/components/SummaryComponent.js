import React, { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import {
  SummarySection,
  ItemSummary,
  Text,
  Divider,
  CalculationSection,
  Button,
} from "../Style";

const SummaryComponent = () => {
  const { getData, stepPosition, setStepper } = useContext(DataContext);

  useEffect(() => {
    getData();
  }, []);

  return (
    <SummarySection>
      <ItemSummary>
        <Text
          fontFamily="Montserrat"
          color="#FF8A00"
          fontSize="24px"
          fontWeight="700"
        >
          Summary
        </Text>
        <Text>10 items purchased</Text>
      </ItemSummary>

      {stepPosition && stepPosition === 2 && (
        <>
          <Divider />

          <ItemSummary>
            <Text fontWeight="400">Delivery estimation</Text>
            <Text fontWeight="500" fontSize="16px" color="#1BD97B">
              today by GO-SEND
            </Text>
          </ItemSummary>

          <Divider />

          <ItemSummary>
            <Text fontWeight="400">Payment method</Text>
            <Text fontWeight="500" fontSize="16px" color="#1BD97B">
              Bank Transfer
            </Text>
          </ItemSummary>
        </>
      )}

      <CalculationSection>
        <ItemSummary direction="row">
          <Text>Cost of goods</Text>
          <Text fontWeight="700">500000</Text>
        </ItemSummary>
        <ItemSummary direction="row">
          <Text>Dropshipping Fee</Text>
          <Text fontWeight="700">5800</Text>
        </ItemSummary>
        <ItemSummary direction="row">
          <Text>GO-SEND shipment</Text>
          <Text fontWeight="700">15000</Text>
        </ItemSummary>
        <ItemSummary direction="row">
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
        </ItemSummary>
        {stepPosition && stepPosition === 1 ? (
          <Button onClick={() => setStepper(2)}>
            <Text color="#fff" fontSize="18px" fontWeight="500">
              Continue to Payment
            </Text>
          </Button>
        ) : (
          <Button>
            <Text color="#fff" fontSize="18px" fontWeight="500">
              Pay with e-Wallet
            </Text>
          </Button>
        )}
      </CalculationSection>
    </SummarySection>
  );
};

export default SummaryComponent;
