import { GenderDTO } from '@dtos/GenderDTO';

export interface Person {
  birthdate: string;
  cpf: null | string;
  createdAt: string;
  gender: GenderDTO.Response;
  id: string;
  name: string;
  updatedAt: string;
}

export interface User {
  cellphone: string;
  email: string;
  id: string;
  image: null | string;
  isAdmin: boolean;
  person: Person;
  status: string;
  username: string;
}

export interface UserDTO {
  access_token: string;
  user: User;
}
