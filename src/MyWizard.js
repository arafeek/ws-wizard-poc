// @flow
import React from 'react';
import { registerWizard, Step } from './wizard';


const StepNavigation = ({ navigateTo, prevStep, nextStep }) => (
  <div style={{ flexDirection: 'row', alignItems: 'space-between' }}>
    {prevStep && <button onClick={() => navigateTo(prevStep)}>Prev</button>}
    {nextStep && <button onClick={() => navigateTo(nextStep)}>Next</button>}
  </div>
)

const ExampleStep = ({ text, setCurrentStep, nextStep, prevStep }) => (
  <div>
    <span>{text}</span>
    <StepNavigation
      navigateTo={setCurrentStep}
      nextStep={nextStep}
      prevStep={prevStep}
    />
  </div>
);

type WizardProps = {
  wizard: any, // TODO
};

const MyWizardView = (props: WizardProps) => (
  <div>
    <Step
      id={'FirstStep'}
      renderComponent={ExampleStep}
      text="Hello there!"
      nextStep={'SecondStep'}
      {...props.wizard}
    />

    <Step
      id={'SecondStep'}
      renderComponent={ExampleStep}
      text="You should see me first! I'm step two!"
      prevStep={'FirstStep'}
      nextStep={'ThirdStep'}
      {...props.wizard}
    />

    <Step
      id={'ThirdStep'}
      renderComponent={ExampleStep}
      text="Three's a crowd!"
      prevStep={'SecondStep'}
      {...props.wizard}
    />
  </div>
);

export const MyWizard = registerWizard('myWizard', {
  initialStep: 'SecondStep',
})(MyWizardView);
