import { UserDTO } from '@dtos/UserDTO';

export namespace LoginDTO {
  export interface Request {
    email: string;
    password: string;
  }

  export interface Response extends UserDTO {}

  export interface Error {
    message: string;
  }
}
