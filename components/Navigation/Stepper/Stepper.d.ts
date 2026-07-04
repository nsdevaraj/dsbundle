import * as React from 'react';

/**
 * Stepper — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Stepper.stories.tsx).
 */
export interface StepperProps {
  steps: Step[];
  orientation?: "horizontal" | "vertical";
}

export declare const Stepper: React.ComponentType<StepperProps>;
