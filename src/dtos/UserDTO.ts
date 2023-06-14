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
  address: Address | null;
  birthdate: string;
  cpf: number | null;
  createdAt: string;
  gender: GenderDTO.Response;
  id: string;
  name: string;
  updatedAt: string;
}

export interface Image {
  url: string;
}

export interface User {
  cellphone: string;
  createdAt: string;
  email: string;
  facebookId: string;
  googleId: string;
  id: string;
  isAdmin: boolean;
  image: null | Image;
  person: Person;
  status: string;
  updatedAt: string;
  username: string;
}

export interface UserDTO {
  access_token: string;
  user: User;
}
