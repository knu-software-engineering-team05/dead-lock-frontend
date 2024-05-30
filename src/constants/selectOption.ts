import { RESIDENCE_TYPE, SMOKE_TYPE, JOB_TYPE } from '../types/service';

const COMMON_OPTION = {
  YES: 'YES',
  NO: 'NO',
} as const;
export const COMMON_OPTIONS = [
  { value: COMMON_OPTION.YES, label: '예' },
  { value: COMMON_OPTION.NO, label: '아니오' },
];
export type CommonOption = keyof typeof COMMON_OPTION;

export const RESIDENCE_OPTIONS = [
  { value: RESIDENCE_TYPE.URBAN, label: '도시' },
  { value: RESIDENCE_TYPE.RURAL, label: '비도시' },
];

export const JOB_TYPE_OPTIONS = [
  { value: JOB_TYPE.PRIVATE, label: '비공개' },
  { value: JOB_TYPE.SELF_EMPLOYED, label: '자영업자' },
  { value: JOB_TYPE.GOVT_JOB, label: '공무원' },
  { value: JOB_TYPE.CHILDREN, label: '아이' },
  { value: JOB_TYPE.NEVER_WORKED, label: '일한적 없음' },
];

export const SMOKE_TYPE_OPTIONS = [
  { value: SMOKE_TYPE.FORMERLY, label: '과거에 흡연함' },
  { value: SMOKE_TYPE.NEVER, label: '흡연하지 않음' },
  { value: SMOKE_TYPE.SMOKES, label: '흡연함' },
  { value: SMOKE_TYPE.UNKNOWN, label: '알 수 없음' },
];
