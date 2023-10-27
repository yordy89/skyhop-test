import React from "react";
import { Controller } from "react-hook-form";
import { Label, StyledRadio } from "./styles";

interface TwoValueRadioGroupProps {
  control: any;
  name: string;
  value1: string;
  value2: string;
  label1?: string;
  label2?: string;
  defaultValue: string;
}

const TwoValueRadioGroup: React.FC<TwoValueRadioGroupProps> = ({
  control,
  name,
  value1,
  value2,
  label1 = value1,
  label2 = value2,
  defaultValue,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <div>
          <StyledRadio
            onChange={(e) => field.onChange(e.target.value)}
            checked={field.value === value1}
            value={value1}
          />
          <Label>{label1}</Label>
          <StyledRadio
            onChange={(e) => field.onChange(e.target.value)}
            checked={field.value === value2}
            value={value2}
          />
          <Label>{label2}</Label>
        </div>
      )}
    />
  );
};

export default TwoValueRadioGroup;
