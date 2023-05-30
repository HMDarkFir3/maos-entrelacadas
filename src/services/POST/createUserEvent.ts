import { api } from '@services/api';

export const createUserEvent = async (userId: string, eventId: string) => {
  const { data } = await api.patch(`/events/signup/${userId}/${eventId}`);

  return data;
};
