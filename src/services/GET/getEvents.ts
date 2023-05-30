import { api } from '@services/api';

import { EventsDTO } from '@dtos/EventsDTO';

export const getEvents = async () => {
  const { data } = await api.get<EventsDTO.Response[]>('/events');

  return data;
};
