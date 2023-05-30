import { StepOneFormState } from '@contexts/AuthContext';

export declare global {
  export namespace ReactNavigation {
    export interface RootParamList {
      // Auth
      Welcome: undefined;
      Login: undefined;
      StepOne: undefined;
      StepTwo: { formStepOne: StepOneFormState };

      // App
      Announcements: undefined;
      Events: undefined;
      EventDetails: { id: string };
      Donations: undefined;
      Profile: undefined;
      Settings: undefined;
      UserInfo: undefined;
      DonationHistory: undefined;
    }
  }
}
