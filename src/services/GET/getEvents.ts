import { api } from '@services/api';

import { EventsDTO } from '@dtos/EventsDTO';

export const getEvents = async (userId: string) => {
  const { data } = await api.get<EventsDTO.Response[]>(`/events/${userId}`);

  return data;
};
