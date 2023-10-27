import styled from "styled-components";


export const ClockFace = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #1b3d6e;
  position: relative;
`;


export const HourHand = styled.div`
  position: absolute;
  left: 50%;
  top: 50%; 
  width: 1px;
  height: 5px;
  background-color: black;
`;

export const MinuteHand = styled.div`
 position: absolute;
  top: 50%; 
  left: 50%;
  width: 8px;
  height: 1px;
  background-color: gray;
`;
