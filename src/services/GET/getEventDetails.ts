import { api } from '@services/api';

import { EventsDTO } from '@dtos/EventsDTO';

export const getEventDetails = async (userId: string, eventId: string) => {
  const { data } = await api.get<EventsDTO.Response>(`/events/${userId}/${eventId}`);

  return data;
};
