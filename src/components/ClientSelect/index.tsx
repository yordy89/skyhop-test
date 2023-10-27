import React from "react";
import { Container, SelectContainer, Text } from "./styles";
import { Select } from "../base/Select";
import { ClientSelectData } from "../modal/data";
import Clock from "../base/CircleSelect";

interface ClientSelectProps {
  testingCenterNumber?: string;
}

const ClientSelect: React.FC<ClientSelectProps> = ({ testingCenterNumber = 1 }) => {
  return (
    <Container>
      <Text>Testing Center {testingCenterNumber}</Text>
      <SelectContainer>
        <Select options={ClientSelectData} placeholder="Select Client" />
        <Clock />
      </SelectContainer>
    </Container>
  );
};

export default ClientSelect;
