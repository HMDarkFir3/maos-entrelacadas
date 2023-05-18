import { GenderDTO } from '@dtos/GenderDTO';

export interface Address {
  id: number;
  country: string;
  state: string;
  district: string;
  city: string;
  street: string;
  number: string;
  zipcode: number;
  complement: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Person {
  birthdate: string;
  cpf: number | null;
  address: Address | null;
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
