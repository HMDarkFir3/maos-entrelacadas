import axios from 'axios';

export const getGoogleUserInfo = async (token: string) => {
  const { data } = await axios.get('https://www.googleapis.com/userinfo/v2/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
