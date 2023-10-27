import styled from "styled-components";

interface DividerProps {
  width?: string;
  height?: string;
}

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #b3b3b3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  width: 1100px;
  max-height: 90vh;
  justify-content: center;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 30px;
`;

export const CloseButton = styled.button`
  background-color: #1b3d6e;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  padding: 3px;
  color: #b3b3b3;
  font-size: 1rem;
`;

export const ModalTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
  color: #1b3d6e;
  border-bottom: 1px solid #b3b3b3;
  font-family: Arial, sans-serif;
  align-self: center;
`;

export const ModalBody = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 60px;
  margin: 0 auto;
`;

export const RightSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const LeftSide = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Divider = styled.div<DividerProps>`
  width: ${(props) => props.width}%;
  height: 1px;
  background-color: #e8e8e8;
  margin: 15px 0;
`;

export const VerticalDivider = styled.div<DividerProps>`
  width: 1px;
  height: ${(props) => props.height}px;
  background-color: #1b3d6e;
  margin: 0 10px;
`;

export const Text = styled.p<{ color?: string }>`
  font-size: 0.9rem;
  color: ${(props) => props.color || "#1b3d6e"};
  margin: 0;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
`;

export const ToleranceContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ToleranceText = styled.p`
  font-size: 0.9rem;
  color: #6f87a7;
  margin: 0;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
`;

export const AddClientButton = styled.button<{ disabled: boolean }>`
  padding: 10px 25px;
  border: none;
  background-color: ${(props) => (props.disabled ? "#b3b3b3" : "#1b3d6e")};
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin-left: auto;
  margin-top: 10px;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const FooterButton = styled.button<{ isCancel?: boolean }>`
  width: 200px;
  padding: 10px 35px;
  border: none;
  background-color: ${(props) => (props.isCancel ? "transparent" : "#1b3d6e")};
  border: 1px solid ${(props) => (props.isCancel ? "#fd9a20" : "#1b3d6e")};
  color: ${(props) => (props.isCancel ? "#fd9a20" : "white")};
  cursor: pointer;
  border-radius: 5px;
  margin-left: auto;
  margin-top: 10px;
`;
