import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
`;

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  gap: 5px;
`;

export const ProgressTextContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color:  #e6e6e6;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 3px;
  background-color: #e8e8e8;
  border-radius: 5px;
`;

export const ProgressBar = styled.div<{ width: number }>`
  background-color: #fd9a20;
  width: ${(props) => props.width}%;
  height: 3px;
  text-align: center;
  line-height: 3px;
  border-radius: 5px;
  color: white;
  flex: 1;
`;

export const StyledFileIcon = styled(FontAwesomeIcon)`
  color: #fd9a20;
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
`;
