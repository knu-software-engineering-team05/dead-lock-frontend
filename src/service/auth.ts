import { AxiosResponse } from 'axios';
import { TokenResponse, SignInRequest, SignUpRequest } from '../types/service';
import client from './_client';

export const postSignUp = async (data: SignUpRequest): Promise<AxiosResponse<TokenResponse>> => {
  return client.post('/auth/signup', data);
};

export const postSignIn = async (data: SignInRequest): Promise<AxiosResponse<TokenResponse>> => {
  return client.post('/auth/signin', data);
};
