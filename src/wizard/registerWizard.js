// @flow
import React from 'react';
import type { ComponentType } from 'react';

import { StepID } from './types';

type WizardConfig = {
  initialStep: string,
}

type WizardState = {
  currentStep: StepID,
}

export const registerWizard =
  (name: string, config: WizardConfig) =>
    (WrappedComponent: ComponentType<P, S>) =>
      class extends React.Component<P, WizardState> {

        constructor(props) {
          super(props);
          this.state = {
            currentStep: config.initialStep,
          };

          this.setCurrentStep = this.setCurrentStep.bind(this);
        }

        setCurrentStep(step: StepID) {
          console.log('setCurrentStep CALLED WITH: ', step)
          this.setState({
            currentStep: step,
          });
        }

        get currentStep() {
          return this.state.currentStep;
        }

        render() {
          const wizard = {
            setCurrentStep: this.setCurrentStep,
            currentStep: this.currentStep,
          }
          return (
            <WrappedComponent
              wizard={wizard}
              {...this.props}
            />
          );
        }
      }
