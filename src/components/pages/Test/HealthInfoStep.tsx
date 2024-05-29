import React, { useState } from 'react';
import { FooterSection, InputSection, SectionTitle } from './styled';
import { Button } from '../../common/Button';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../router';
import { useTestStore, TEST_STEP } from '../../../store/testStore';
import { Dropdown } from '../../common/Dropdown';
import { Input } from '../../common/Input';
import { COMMON_OPTIONS, SMOKE_TYPE_OPTIONS } from '../../../constants/selectOption';
import { DiagnosisRequest } from '../../../types/service';
import { postDiagnosis } from '../../../service/diagnosis';
import { createPathWithParams } from '../../../utils/createPathWithParams';
import { RESULT_DETAIL_SEARCH_PARAMS } from '../../../constants/searchParams';
import { GlobalLoading } from '../../common/Loading';

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
    smokeType,
    setHighBloodPressure,
    setHeartDisease,
    setBloodSugarLevel,
    setBmi,
    setSmokeType,
  } = useTestStore();

  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async () => {
    if (!highBloodPressure || !heartDisease || !bloodSugarLevel || !bmi || !smokeType) {
      alert('모든 항목을 입력해주세요');
      return;
    }

    setIsLoading(true);

    // 이전 & 현재 step에서 null 체크를 하기 때문에 !를 붙여 타입을 강제해도 무방
    const testRequestData: DiagnosisRequest = {
      residenceType: residenceType!,
      jobType: jobType!,
      married: married === 'YES',
      highBloodPressure: highBloodPressure === 'YES',
      heartDisease: heartDisease === 'YES',
      bloodSugarLevel: Number(bloodSugarLevel),
      bmi: Number(bmi),
      smokeType,
    };
    // const { data } = await postDiagnosis(testRequestData);
    const data = { id: 1 };

    setIsLoading(false);

    alert('진단이 완료되었습니다');

    navigate(createPathWithParams(PATHS.RESULT_DETAIL, { id: data.id }) + `?type=${RESULT_DETAIL_SEARCH_PARAMS.BASIC}`);
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
          options={SMOKE_TYPE_OPTIONS}
          selected={smokeType}
          onSelected={setSmokeType}
        />
      </InputSection>
      <FooterSection>
        <Button.Outlined onClick={() => setStep(TEST_STEP.BASIC_INFO_STEP)}>이전</Button.Outlined>
        <Button.Contained onClick={handleConfirm}>완료</Button.Contained>
      </FooterSection>
      {isLoading && <GlobalLoading />}
    </>
  );
};

export default HealthInfoStep;
