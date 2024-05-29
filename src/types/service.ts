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

export const RESIDENCE_TYPE = {
  URBAN: 'URBAN',
  RURAL: 'RURAL',
} as const;
export type ResidenceType = keyof typeof RESIDENCE_TYPE;

export const JOB_TYPE = {
  PRIVATE: 'PRIVATE',
  SELF_EMPLOYED: 'SELF_EMPLOYED',
  GOVT_JOB: 'GOVT_JOB',
  CHILDREN: 'CHILDREN',
  NEVER_WORKED: 'NEVER_WORKED',
} as const;
export type JobType = keyof typeof JOB_TYPE;

export const SMOKING_TYPE = {
  FORMERLY: 'FORMERLY',
  NEVER: 'NEVER',
  SMOKES: 'SMOKES',
  UNKNOWN: 'UNKNOWN',
} as const;
export type SmokingType = keyof typeof SMOKING_TYPE;

export interface DiagnosisRequest {
  residenceType: ResidenceType;
  jobType: JobType;
  married: boolean;

  highBloodPressure: boolean;
  heartDisease: boolean;
  bloodSugarLevel: number;
  bmi: number;
  smokingType: SmokingType;
}

export interface DiagnosisResponse {
  id: string;
  createdAt: string;

  score: number;
  strokeProbability: number;
  totalDiagnosis: string;
  eatingHabits: string;
  lifestyleHabits: string;
}
