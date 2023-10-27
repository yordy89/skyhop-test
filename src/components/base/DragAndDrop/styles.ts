import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const DragDropContainer = styled.div`
  width: 100%;
  height: 200px;
  border: 2px solid #e8e8e8;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10px 0;
  margin-top: 15px;
`;

export const DragInner = styled.div`
  width: 90%;
  height: 70%;
  border: 2px dashed #e8e8e8;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 35px;
  border: none;
  background-color: #1b3d6e;
  color: white;
  cursor: pointer;
  border-radius: 5px;
`;


export const Text = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #1b3d6e;
`;

export const StyledFileIcon = styled(FontAwesomeIcon)`
  color: #fd9a20;
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
`;
