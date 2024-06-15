import { create } from 'zustand';
import { ResidenceType, SmokeType, JobType } from '../types/service';
import { CommonOption } from '../constants/selectOption';

export const TEST_STEP = {
  BASIC_INFO_STEP: 'BASIC_INFO_STEP',
  HEALTH_INFO_STEP: 'HEALTH_INFO_STEP',
} as const;
export type TestStepType = keyof typeof TEST_STEP;

type State = {
  step: TestStepType;

  residenceType: ResidenceType | null;
  jobType: JobType | null;
  married: CommonOption | null;

  highBloodPressure: CommonOption | null;
  heartDisease: CommonOption | null;
  bloodSugarLevel: string;
  bmi: string;
  smokeType: SmokeType | null;
};
type Action = {
  setStep: (currentStep: TestStepType) => void;

  setResidenceType: (residenceType: ResidenceType) => void;
  setJobType: (jobType: JobType) => void;
  setMarried: (married: CommonOption) => void;

  setHighBloodPressure: (highBloodPressure: CommonOption) => void;
  setHeartDisease: (heartDisease: CommonOption) => void;
  setBloodSugarLevel: (bloodSugarLevel: string) => void;
  setBmi: (bmi: string) => void;
  setSmokeType: (smokeType: SmokeType) => void;

  clearStore: () => void;
};

const DEFAULT_STATE: State = {
  step: TEST_STEP.BASIC_INFO_STEP,

  residenceType: null,
  jobType: null,
  married: null,

  highBloodPressure: null,
  heartDisease: null,
  bloodSugarLevel: '',
  bmi: '',
  smokeType: null,
} as const;

const useTestStore = create<State & Action>((set) => ({
  ...DEFAULT_STATE,

  setStep: (currentStep) => set(() => ({ step: currentStep })),

  setResidenceType: (residenceType) => set(() => ({ residenceType })),
  setJobType: (jobType) => set(() => ({ jobType })),
  setMarried: (married) => set(() => ({ married })),

  setHighBloodPressure: (highBloodPressure) => set(() => ({ highBloodPressure })),
  setHeartDisease: (heartDisease) => set(() => ({ heartDisease })),
  setBloodSugarLevel: (bloodSugarLevel) => set(() => ({ bloodSugarLevel })),
  setBmi: (bmi) => set(() => ({ bmi })),
  setSmokeType: (smokeType) => set(() => ({ smokeType })),

  clearStore: () => set(() => DEFAULT_STATE),
}));

export { useTestStore };
