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
      Announcement: undefined;
      Events: undefined;
      Donations: undefined;
      Profile: undefined;
      Settings: undefined;
      UserInfo: undefined;
      DonationHistory: undefined;
    }
  }
}
