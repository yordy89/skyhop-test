import React, { useState } from "react";
import {
  SelectWrapper,
  StyledCarrotIcon,
  StyledSelect,
} from "./styles";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  placeholder: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  placeholder,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SelectWrapper>
      <StyledSelect
        {...props}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        defaultValue={""}
      >
        <option value="" disabled  style={{color: 'red'}}>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      <StyledCarrotIcon icon={isOpen ? faChevronUp : faChevronDown} />
    </SelectWrapper>
  );
};
