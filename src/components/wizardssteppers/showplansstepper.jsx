import React, { useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Create an array of steps for your form
const steps = ['Step 1', 'Step 2', 'Step 3'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Step1Form />;
    case 1:
      return <Step2Form />;
    case 2:
      return <Step3Form />;
    default:
      return 'Unknown step';
  }
}

function Step1Form() {
  // Add your form fields for Step 1 here
  return (
    <div>
      <Typography>Step 1 Content</Typography>
      {/* Add your form fields here */}
    </div>
  );
}

function Step2Form() {
  // Add your form fields for Step 2 here
  return (
    <div>
      <Typography>Step 2 Content</Typography>
      {/* Add your form fields here */}
    </div>
  );
}

function Step3Form() {
  // Add your form fields for Step 3 here
  return (
    <div>
      <Typography>Step 3 Content</Typography>
      {/* Add your form fields here */}
    </div>
  );
}

function MultiStepForm() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography variant="h5">All steps completed</Typography>
            {/* You can display a summary of the form data here */}
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MultiStepForm;
