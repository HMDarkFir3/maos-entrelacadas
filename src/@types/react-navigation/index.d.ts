import { StepOneFormState } from '@contexts/AuthContext';

export declare global {
  export namespace ReactNavigation {
    export interface RootParamList {
      Welcome: undefined;
      Login: undefined;

      // Register
      StepOne: undefined;
      StepTwo: { formStepOne: StepOneFormState };

      Home: undefined;
      Events: undefined;
      Donations: undefined;

      // Settings
      Profile: undefined;
      Settings: undefined;
      UserInfo: undefined;
    }
  }
}
