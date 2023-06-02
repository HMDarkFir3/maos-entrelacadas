import { api } from '@services/api';

import { EventsDTO } from '@dtos/EventsDTO';

export const createUserEvent = async (userId: string, eventId: string) => {
  const { data } = await api.patch<EventsDTO.Response>(`/events/signup/${userId}/${eventId}`);

  return data;
};
