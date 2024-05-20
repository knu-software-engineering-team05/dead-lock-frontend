import React from 'react';
import { FooterSection, InputSection, SectionTitle } from './styled';
import { Button } from '../../common/Button';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../router';
import { useTestStore, COMMON_OPTIONS, SMOKING_OPTIONS, TEST_STEP } from '../../../store/testStore';
import { Dropdown } from '../../common/Dropdown';
import { Input } from '../../common/Input';

const HealthInfoStep: React.FC = () => {
  const navigate = useNavigate();
  const {
    setStep,
    hypertension,
    heartDiseaseHistory,
    averageBloodSugarLevel,
    bmi,
    smoking,
    setHypertension,
    setHeartDiseaseHistory,
    setAverageBloodSugarLevel,
    setBmi,
    setSmoking,
  } = useTestStore();

  // TODO: 건강정보 입력 요청
  const handleConfirm = async () => {
    navigate(PATHS.RESULT_LIST);
  };

  return (
    <>
      <SectionTitle>건강정보 입력</SectionTitle>
      <InputSection>
        <Dropdown
          label="고혈압 여부"
          placeholder="고혈압이 있나요?"
          options={COMMON_OPTIONS}
          selected={hypertension}
          onSelected={setHypertension}
        />
        <Dropdown
          label="심장 질환 이력 여부"
          placeholder="심장 질환 이력이 있나요?"
          options={COMMON_OPTIONS}
          selected={heartDiseaseHistory}
          onSelected={setHeartDiseaseHistory}
        />
        <Input
          label="평균 혈당 수치"
          placeholder="평균 혈당 수치를 입력해 주세요"
          value={averageBloodSugarLevel}
          onChange={(e) => setAverageBloodSugarLevel(e.target.value)}
        />
        <Input
          label="BMI 지수"
          placeholder="BMI 지수를 입력해 주세요"
          value={bmi}
          onChange={(e) => setBmi(e.target.value)}
        />
        <Dropdown
          label="흡연 여부"
          placeholder="흡연 여부를 선택해 주세요"
          options={SMOKING_OPTIONS}
          selected={smoking}
          onSelected={setSmoking}
        />
      </InputSection>
      <FooterSection>
        <Button.Outlined onClick={() => setStep(TEST_STEP.BASIC_INFO_STEP)}>이전</Button.Outlined>
        <Button.Contained onClick={handleConfirm}>완료</Button.Contained>
      </FooterSection>
    </>
  );
};

export default HealthInfoStep;
