import { api } from '@services/api';

import { AnnouncementsDTO } from '@dtos/AnnouncementsDTO';

export const getAnnouncements = async () => {
  const { data } = await api.get<AnnouncementsDTO.Response[]>('/announcements');

  return data;
};
