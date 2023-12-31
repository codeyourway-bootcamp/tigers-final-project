import {
  useSteps,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  Box,
  StepTitle,
  StepDescription,
  StepSeparator,
} from "@chakra-ui/react";

const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];

export default function HistoricList() {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <div
      style={{
        borderWidth: "3px",
        margin: "19px",
        padding: "20px",
        borderRadius: "20px",
        Width: "100%",
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
      }}
    >
      <Stepper index={activeStep} orientation="vertical" height="400px" gap="0">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
