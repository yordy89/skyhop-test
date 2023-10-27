import { useForm, Controller, set } from "react-hook-form";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  RightSide,
  LeftSide,
  ModalBody,
  Divider,
  Text,
  ToleranceContainer,
  VerticalDivider,
  ToleranceText,
  AddClientButton,
  Footer,
  FooterButton,
  ButtonContainer,
} from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Select } from "../base/Select";
import { NameSelect } from "./data";
import { FileUploadStatus } from "../base/FileUploadStatus";
import { ToggleButton } from "../base/ToggleButton";
import { useEffect, useState } from "react";
import Clock from "../base/CircleSelect";
import TwoValueRadioGroup from "../base/RadioButtons";
import ClientSelect from "../ClientSelect";
import DragAndDrop from "../base/DragAndDrop";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

interface IFile {
  name: string;
  size: number;
  type: string;
  lastModified: number;
}

interface FormData {
  name: string;
  tolerance: boolean;
  socialDistancing: string;
  client: "Single" | "Multiple";
  clients: string[];
}
const Modal = ({ isOpen, onClose, title = "Modal Title" }: ModalProps) => {
  const [selectedFile, setSelectedFile] = useState<IFile | null>(null);
  const [selectedFileError, setSelectedFileError] = useState<string>("")
  const [clientSelectCount, setClientSelectCount] = useState<number>(1);
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    tolerance: yup.boolean(),
    socialDistancing: yup.string().required("Social Distancing is required"),
    client: yup.string().required("Client is required"),
    clients: yup.array().of(yup.string()),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const clientSelection = watch("client");

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log(files);
    setSelectedFile(files[0]);
    setSelectedFileError("")
  };

  const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    if (!files) return;
    console.log(files);
    setSelectedFile(files[0]);
    setSelectedFileError("")
  };

  const onSubmit = (data: FormData) => {
    if (!selectedFile) {
      setSelectedFileError('Please select a file to upload')
      return;
    }
    console.log(data);
  };

  useEffect(() => {
    setClientSelectCount(1);
  }, [clientSelection]);

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <CloseButton onClick={onClose}>X</CloseButton>
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <LeftSide>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <>
                    <Select
                      {...field}
                      placeholder="Select import Name:"
                      options={NameSelect}
                    />
                    {errors.name && (
                      <Text color="red">{errors.name.message}</Text>
                    )}
                  </>
                )}
              />
              <Divider width="50" />
              <Text>Select a manifest that you'd like to import</Text>
              <DragAndDrop onDrop={onDrop} onSelect={onSelect} />
              {
                selectedFileError && <Text color="red">{selectedFileError}</Text>
              }
              <Divider width="100" />
              <FileUploadStatus
                fileName={selectedFile?.name}
                fileSize={selectedFile?.size}
                uploadPercentage={selectedFile ? 10 : 0}
              />
              <Divider width="100" />
              <Divider width="50" />
              <Text>Elapse Data Checking:</Text>
              <br />
              <Text color="#58ce7f">No Elapsed Dates!</Text>
              <Divider width="50" />
              <Text>Tolerance Windows:</Text>
              <ToleranceContainer>
                <Controller
                  name="tolerance"
                  control={control}
                  defaultValue={false}
                  render={({ field: { onChange, value } }) => (
                    <ToggleButton
                      checked={value}
                      onChange={(e) => onChange(e.target.checked)}
                    />
                  )}
                />
                <VerticalDivider height="25" />
                <Clock />
                <ToleranceText>Select Tolerance Level</ToleranceText>
              </ToleranceContainer>
            </LeftSide>
            <RightSide>
              <Text>Split schedule using social distancing:</Text>
              <TwoValueRadioGroup
                control={control}
                name="socialDistancing"
                value1="Yes"
                value2="No"
                defaultValue="No"
              />
              {errors.socialDistancing && (
                <Text color="red">{errors.socialDistancing.message}</Text>
              )}
              <Divider width="100" />
              <Text>LocationChecking:</Text>
              <br />
              <Text color="#58ce7f">No Elapsed Dates!</Text>
              <Divider width="100" />
              <Text>Client:</Text>
              <TwoValueRadioGroup
                control={control}
                name="client"
                value1="Single"
                value2="Multiple"
                defaultValue="Multiple"
              />
              {errors.client && (
                <Text color="red">{errors.client.message}</Text>
              )}
              {Array.from({ length: clientSelectCount }, (_, i) => (
                <ClientSelect key={i} />
              ))}
              <AddClientButton
                disabled={clientSelection === "Single"}
                onClick={() => setClientSelectCount((prev) => prev + 1)}
              >
                Add ClientSelect
              </AddClientButton>
            </RightSide>
          </ModalBody>
          <Footer>
            {selectedFile && (
              <Text>
                Data im the import file is correct. Please press Continue to
                import
              </Text>
            )}
            <ButtonContainer>
              <FooterButton type='submit'>Continue Import</FooterButton>
              <FooterButton isCancel={true} onClick={onClose}>
                Cancel
              </FooterButton>
            </ButtonContainer>
          </Footer>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
