import { UserDTO } from '@dtos/UserDTO';

export namespace RegisterDTO {
  export interface Request {
    username: string;
    password: string;
    email: string;
    cellphone: string;
    person: {
      name: string;
      birthdate: string;
      gender: {
        name: string;
      };
    };
  }

  export interface Response extends UserDTO {}

  export interface Error {
    message: string;
  }
}
