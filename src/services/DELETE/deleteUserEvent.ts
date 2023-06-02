import { api } from '@services/api';

export const deleteUserEvent = async (userId: string, eventId: string) => {
  const { data } = await api.delete(`/events/signup/${userId}/${eventId}`);

  return data;
};
