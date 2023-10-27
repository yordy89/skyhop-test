import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #e8e8e8;
  appearance: none;
  background-color: transparent;
  border-radius: 10px;
  color: #1b3d6e;
  font-size: 0.9rem;
  font-weight: 600;
`;

export const StyledCarrotIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.3s;
`;
