import { create } from 'zustand';

export const TEST_STEP = {
  BASIC_INFO_STEP: 'BASIC_INFO_STEP',
  HEALTH_INFO_STEP: 'HEALTH_INFO_STEP',
} as const;
export type TestStepType = keyof typeof TEST_STEP;

const COMMON = {
  YES: 'YES',
  NO: 'NO',
} as const;
export const COMMON_OPTIONS = [
  { value: COMMON.YES, label: '예' },
  { value: COMMON.NO, label: '아니오' },
];

const RESIDENCE = {
  URBAN: 'URBAN',
  RURAL: 'RURAL',
} as const;
export const RESIDENCE_OPTIONS = [
  { value: RESIDENCE.URBAN, label: '도시' },
  { value: RESIDENCE.RURAL, label: '비도시' },
];

const JOB = {
  PRIVATE: 'PRIVATE',
  SELF_EMPLOYED: 'SELF_EMPLOYED',
  GOVT_JOB: 'GOVT_JOB',
  CHILDREN: 'CHILDREN',
  NEVER_WORKED: 'NEVER_WORKED',
} as const;
export const JOB_OPTIONS = [
  { value: JOB.PRIVATE, label: '비공개' },
  { value: JOB.SELF_EMPLOYED, label: '자영업자' },
  { value: JOB.GOVT_JOB, label: '공무원' },
  { value: JOB.CHILDREN, label: '아이' },
  { value: JOB.NEVER_WORKED, label: '일한적 없음' },
];

const SMOKING = {
  FORMERLY_SMOKED: 'FORMERLY_SMOKED',
  NEVER_SMOKED: 'NEVER_SMOKED',
  SMOKES: 'SMOKES',
  UNKNOWN: 'UNKNOWN',
} as const;
export const SMOKING_OPTIONS = [
  { value: SMOKING.FORMERLY_SMOKED, label: '과거에 흡연함' },
  { value: SMOKING.NEVER_SMOKED, label: '흡연하지 않음' },
  { value: SMOKING.SMOKES, label: '흡연함' },
  { value: SMOKING.UNKNOWN, label: '알 수 없음' },
];

type State = {
  step: TestStepType;

  residence: keyof typeof RESIDENCE | null;
  job: keyof typeof JOB | null;
  married: keyof typeof COMMON | null;

  hypertension: keyof typeof COMMON | null;
  heartDiseaseHistory: keyof typeof COMMON | null;
  averageBloodSugarLevel: string;
  bmi: string;
  smoking: keyof typeof SMOKING | null;
};
type Action = {
  setStep: (currentStep: TestStepType) => void;

  setResidence: (residence: keyof typeof RESIDENCE) => void;
  setJob: (job: keyof typeof JOB) => void;
  setMarried: (married: keyof typeof COMMON) => void;

  setHypertension: (hypertension: keyof typeof COMMON) => void;
  setHeartDiseaseHistory: (heartDiseaseHistory: keyof typeof COMMON) => void;
  setAverageBloodSugarLevel: (averageBloodSugarLevel: string) => void;
  setBmi: (bmi: string) => void;
  setSmoking: (smoking: keyof typeof SMOKING) => void;

  clearStore: () => void;
};

const DEFAULT_STATE: State = {
  step: TEST_STEP.BASIC_INFO_STEP,

  residence: null,
  job: null,
  married: null,

  hypertension: null,
  heartDiseaseHistory: null,
  averageBloodSugarLevel: '',
  bmi: '',
  smoking: null,
} as const;

const useTestStore = create<State & Action>((set) => ({
  ...DEFAULT_STATE,

  setStep: (currentStep) => set(() => ({ step: currentStep })),

  setResidence: (residence) => set(() => ({ residence })),
  setJob: (job) => set(() => ({ job })),
  setMarried: (married) => set(() => ({ married })),

  setHypertension: (hypertension) => set(() => ({ hypertension })),
  setHeartDiseaseHistory: (heartDiseaseHistory) => set(() => ({ heartDiseaseHistory })),
  setAverageBloodSugarLevel: (averageBloodSugarLevel) => set(() => ({ averageBloodSugarLevel })),
  setBmi: (bmi) => set(() => ({ bmi })),
  setSmoking: (smoking) => set(() => ({ smoking })),

  clearStore: () => set(() => DEFAULT_STATE),
}));

export { useTestStore };
