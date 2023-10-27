import styled from "styled-components";
import { Radio } from "@mui/material";

export const StyledRadio = styled(Radio)`
  &.MuiRadio-root {
    color: #1b3d6e;
  }

  &.MuiRadio-colorPrimary.Mui-checked {
    color: #1b3d6e;
  }
`;

export const Label = styled.label`
    font-size: 0.9rem;
    color: #6f87a7;
    margin: 0;
    font-weight: 600;
    font-family: Arial, Helvetica, sans-serif;
    `;
