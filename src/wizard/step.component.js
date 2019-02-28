// @flow
import React from 'react';
import type { ComponentType } from 'react';
import * as WizardTypes from './types';

type StepProps = {
  id: WizardTypes.StepID,
  renderComponent: (props: T) => ComponentType<T>,
  currentStep: WizardTypes.StepID,
  onViewStep: (WizardTypes.StepID) => void,
};

export const Step = (props: StepProps) => {
  if (props.currentStep !== props.id) {
    return null;
  }

  return (
    <React.Fragment>
      {props.renderComponent(props)}
    </React.Fragment>
  );
}
