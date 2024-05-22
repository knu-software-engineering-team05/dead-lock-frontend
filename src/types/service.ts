export const GENDER = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
} as const;

export type Gender = keyof typeof GENDER;

export interface SignUpRequest {
  userId: string;
  userPw: string;
  birth: string;
  gender: Gender;
}

export interface SignInRequest {
  userId: string;
  userPw: string;
}

export interface TokenResponse {
  access: string;
  refresh: string;
}
