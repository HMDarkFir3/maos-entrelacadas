import { User } from '@dtos/UserDTO';

export namespace UpdateDTO {
  export interface Request {
    username?: string;
    password?: string;
    email?: string;
    cellphone?: string;
    person?: {
      name?: string;
      birthdate?: string;
      gender?: {
        name?: string;
      };
      address?: {
        country?: string;
        state?: string;
        district?: string;
        city?: string;
        street?: string;
        number?: string;
        zipcode?: number;
        complement?: string;
      };
    };
  }

  export interface Response extends User {}

  export interface Error {
    message: string;
  }
}
