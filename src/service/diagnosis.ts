import { AxiosResponse } from 'axios';
import { DiagnosisRequest, DiagnosisResponse } from '../types/service';
import client from './_client';
import { serviceHeaderWithAuth } from '../utils/serviceHeaderWithAuth';

export const getDiagnosisList = async (): Promise<AxiosResponse<DiagnosisResponse[]>> => {
  return client.get('/diagnosis', { ...serviceHeaderWithAuth() });
};
export const getDiagnosisItem = async (id: string): Promise<AxiosResponse<DiagnosisResponse>> => {
  return client.get(`/diagnosis/${id}`, { ...serviceHeaderWithAuth() });
};

// TODO: 서버 - 모델을 비동기로 처리할 지 여부에 따라 response 수정 필요
export const postDiagnosis = async (data: DiagnosisRequest): Promise<AxiosResponse<DiagnosisResponse>> => {
  return client.post('/diagnosis', data, { ...serviceHeaderWithAuth() });
};
