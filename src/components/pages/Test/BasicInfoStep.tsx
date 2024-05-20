import React from 'react';
import { FooterSection, InputSection, SectionTitle } from './styled';
import { Button } from '../../common/Button';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../router';
import { useTestStore, COMMON_OPTIONS, JOB_OPTIONS, RESIDENCE_OPTIONS, TEST_STEP } from '../../../store/testStore';
import { Dropdown } from '../../common/Dropdown';
import { Selector } from '../../common/Selector';

const BasicInfoStep: React.FC = () => {
  const navigate = useNavigate();
  const { setStep, residence, job, married, setResidence, setJob, setMarried } = useTestStore();

  return (
    <>
      <SectionTitle>기본정보 입력</SectionTitle>
      <InputSection>
        <Dropdown
          label="직업 유형"
          placeholder="직업 유형을 선택해 주세요"
          options={JOB_OPTIONS}
          selected={job}
          onSelected={setJob}
        />
        <Dropdown
          label="결혼 여부"
          placeholder="결혼 여부를 선택해 주세요"
          options={COMMON_OPTIONS}
          selected={married}
          onSelected={setMarried}
        />
        <Selector label="거주 유형" options={RESIDENCE_OPTIONS} selected={residence} onSelected={setResidence} />
      </InputSection>
      <FooterSection>
        <Button.Outlined onClick={() => navigate(PATHS.RESULT_LIST)}>취소</Button.Outlined>
        <Button.Contained onClick={() => setStep(TEST_STEP.HEALTH_INFO_STEP)}>다음</Button.Contained>
      </FooterSection>
    </>
  );
};

export default BasicInfoStep;
