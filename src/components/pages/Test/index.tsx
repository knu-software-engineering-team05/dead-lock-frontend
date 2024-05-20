import styled from 'styled-components';
import React, { useEffect } from 'react';
import { RangeBar } from '../../common/RangeBar';
import { CommonWrapper } from '../../common/Wrapper';
import { useTestStore, TEST_STEP } from '../../../store/testStore';
import BasicInfoStep from './BasicInfoStep';
import HealthInfoStep from './HealthInfoStep';

const Test: React.FC = () => {
  const { step, clearStore } = useTestStore();

  useEffect(() => {
    return () => {
      clearStore();
    };
  }, []);

  return (
    <TestWrapper>
      <RangeBar $range={step === TEST_STEP.HEALTH_INFO_STEP ? 1 : 0.5} />

      {step === TEST_STEP.BASIC_INFO_STEP && <BasicInfoStep />}
      {step === TEST_STEP.HEALTH_INFO_STEP && <HealthInfoStep />}
    </TestWrapper>
  );
};

const TestWrapper = styled(CommonWrapper)`
  padding: 20px 16px 40px;
`;

export default Test;
