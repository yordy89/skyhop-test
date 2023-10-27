import React, { FC, useRef } from "react";
import {
  Button,
  DragDropContainer,
  DragInner,
  StyledFileIcon,
  Text,
} from "./styles";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";

interface DragAndDropProps {
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DragAndDrop: FC<DragAndDropProps> = ({ onDrop, onSelect }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null); 

    const triggerFileInput = () => {
      fileInputRef.current?.click(); 
    };
  return (
    <DragDropContainer onDrop={onDrop} onDragOver={(e) => e.preventDefault()}>
      <DragInner onClick={triggerFileInput}> 
        <StyledFileIcon icon={faFileLines} />
        <Text>
          Drag & Drop here or <strong>Browse</strong>
        </Text>
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={onSelect}
        />
      </DragInner>
      <Button onClick={triggerFileInput}>Upload Manifest</Button>
    </DragDropContainer>
  );
};

export default DragAndDrop;
