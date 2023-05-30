import { api } from '@services/api';

import { EventsDTO } from '@dtos/EventsDTO';

export const getUserEvents = async (id: string) => {
  const { data } = await api.get<EventsDTO.Response[]>(`/users/signupEvents/${id}`);

  return data;
};
