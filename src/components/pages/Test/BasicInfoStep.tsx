import React from 'react';
import { FooterSection, InputSection, SectionTitle } from './styled';
import { Button } from '../../common/Button';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../router';
import { useTestStore, TEST_STEP } from '../../../store/testStore';
import { Dropdown } from '../../common/Dropdown';
import { Selector } from '../../common/Selector';
import { COMMON_OPTIONS, RESIDENCE_OPTIONS, JOB_TYPE_OPTIONS } from '../../../constants/selectOption';

const BasicInfoStep: React.FC = () => {
  const navigate = useNavigate();
  const { setStep, residenceType, jobType, married, setResidenceType, setJobType, setMarried } = useTestStore();

  const handleConfirmNextStep = () => {
    if (!jobType || !married || !residenceType) {
      alert('모든 항목을 입력해주세요');
      return;
    }
    setStep(TEST_STEP.HEALTH_INFO_STEP);
  };

  return (
    <>
      <SectionTitle>기본정보 입력</SectionTitle>
      <InputSection>
        <Dropdown
          label="직업 유형"
          placeholder="직업 유형을 선택해 주세요"
          options={JOB_TYPE_OPTIONS}
          selected={jobType}
          onSelected={setJobType}
        />
        <Dropdown
          label="결혼 여부"
          placeholder="결혼 여부를 선택해 주세요"
          options={COMMON_OPTIONS}
          selected={married}
          onSelected={setMarried}
        />
        <Selector
          label="거주 유형"
          options={RESIDENCE_OPTIONS}
          selected={residenceType}
          onSelected={setResidenceType}
        />
      </InputSection>
      <FooterSection>
        <Button.Outlined onClick={() => navigate(PATHS.RESULT_LIST)}>취소</Button.Outlined>
        <Button.Contained onClick={handleConfirmNextStep}>다음</Button.Contained>
      </FooterSection>
    </>
  );
};

export default BasicInfoStep;
