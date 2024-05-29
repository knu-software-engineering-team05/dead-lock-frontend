import React from 'react';
import { FooterSection, InputSection, SectionTitle } from './styled';
import { Button } from '../../common/Button';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../router';
import { useTestStore, TEST_STEP } from '../../../store/testStore';
import { Dropdown } from '../../common/Dropdown';
import { Input } from '../../common/Input';
import { COMMON_OPTIONS, SMOKING_TYPE_OPTIONS } from '../../../constants/selectOption';
import { TestRequest } from '../../../types/service';

const HealthInfoStep: React.FC = () => {
  const navigate = useNavigate();
  const {
    setStep,

    residenceType,
    jobType,
    married,

    highBloodPressure,
    heartDisease,
    bloodSugarLevel,
    bmi,
    smokingType,
    setHighBloodPressure,
    setHeartDisease,
    setBloodSugarLevel,
    setBmi,
    setSmokingType,
  } = useTestStore();

  // TODO: 건강정보 입력 요청
  const handleConfirm = async () => {
    if (!highBloodPressure || !heartDisease || !bloodSugarLevel || !bmi || !smokingType) {
      alert('모든 항목을 입력해주세요');
      return;
    }

    const testRequestData: TestRequest = {
      residenceType: residenceType!,
      jobType: jobType!,
      married: married === 'YES',
      highBloodPressure: highBloodPressure === 'YES',
      heartDisease: heartDisease === 'YES',
      bloodSugarLevel: Number(bloodSugarLevel),
      bmi: Number(bmi),
      smokingType,
    };

    console.log(testRequestData);

    // navigate(PATHS.RESULT_LIST);
  };

  return (
    <>
      <SectionTitle>건강정보 입력</SectionTitle>
      <InputSection>
        <Dropdown
          label="고혈압 여부"
          placeholder="고혈압이 있나요?"
          options={COMMON_OPTIONS}
          selected={highBloodPressure}
          onSelected={setHighBloodPressure}
        />
        <Dropdown
          label="심장 질환 이력 여부"
          placeholder="심장 질환 이력이 있나요?"
          options={COMMON_OPTIONS}
          selected={heartDisease}
          onSelected={setHeartDisease}
        />
        <Input
          label="평균 혈당 수치"
          placeholder="평균 혈당 수치를 입력해 주세요"
          value={bloodSugarLevel}
          onChange={(e) => setBloodSugarLevel(e.target.value)}
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
          options={SMOKING_TYPE_OPTIONS}
          selected={smokingType}
          onSelected={setSmokingType}
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
