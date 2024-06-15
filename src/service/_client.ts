import axios, { AxiosError } from 'axios';
import { BASE_URL } from '../constants';

const client = axios.create({ baseURL: BASE_URL + '/api/v1' });

client.interceptors.response.use(
  (response) => response,
  (error: AxiosError): Promise<never> | void => {
    if (error.response?.status === 401) {
      window.alert('로그인이 만료되었습니다.\n다시 로그인해주세요.');
      window.location.href = '/signin';

      return;
    }

    window.alert('알 수 없는 오류가 발생되었습니다.\n잠시 후 다시 이용바랍니다.');

    return Promise.reject(error);
  }
);

export default client;
