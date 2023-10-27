import React, { FC } from "react";
import {
  Container,
  ProgressBar,
  ProgressBarContainer,
  ProgressContainer,
  ProgressTextContainer,
  StyledFileIcon,
  Text,
} from "./styles";
import { faFileImage } from "@fortawesome/free-solid-svg-icons";

interface FileUploadStatusProps {
  fileName?: string;
  fileSize?: number;
  uploadPercentage?: number;
}

export const FileUploadStatus: FC<FileUploadStatusProps> = ({
  fileName = "",
  fileSize = 0,
  uploadPercentage = 0,
}) => {
    const bytesToMegabytes = (bytes: number) => {
        return (bytes / 1048576).toFixed(2);
      }
  return (
    <Container>
      <StyledFileIcon icon={faFileImage} />

      <ProgressContainer>
        <ProgressTextContainer>
          <Text>{fileName}</Text>
          <Text>{bytesToMegabytes(fileSize)}MB</Text>
        </ProgressTextContainer>

        <ProgressBarContainer>
          <ProgressBar width={uploadPercentage} />
        </ProgressBarContainer>
      </ProgressContainer>
    </Container>
  );
};
