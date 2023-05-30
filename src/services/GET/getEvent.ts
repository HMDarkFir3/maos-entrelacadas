import { api } from '@services/api';

import { EventsDTO } from '@dtos/EventsDTO';

export const getEvent = async (id: string) => {
  const { data } = await api.get<EventsDTO.Response>(`/events/${id}`);

  return data;
};
