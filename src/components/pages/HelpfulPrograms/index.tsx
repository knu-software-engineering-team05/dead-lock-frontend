import styled from 'styled-components';
import React, { useState } from 'react';
import { Button } from '../../common/Button';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../router';
import { CommonWrapper, ReportBox } from '../../common/Wrapper';
import { MOCK_RESULTS, MockResultType } from '../../../mock';

const HelpfulPrograms: React.FC = () => {
  const navigate = useNavigate();

  const [result, setResult] = useState<MockResultType>(MOCK_RESULTS[0]);

  return (
    <HelpfulProgramsWrapper>
      <Title>생활습관 개선 프로그램</Title>

      <ReportWrapper>
        <ReportLabel>식습관 개선</ReportLabel>
        <ReportBox $height="250px">{result.helpfulPrograms.eating}</ReportBox>
      </ReportWrapper>

      <ReportWrapper>
        <ReportLabel>생활습관 개선</ReportLabel>
        <ReportBox $height="calc(100vh - 487px)">{result.helpfulPrograms.lifestyle}</ReportBox>
      </ReportWrapper>

      <Button.Contained onClick={() => navigate(PATHS.SIGN_IN)} style={{ marginTop: '16px' }}>
        종합진단결과 확인
      </Button.Contained>
    </HelpfulProgramsWrapper>
  );
};
const ReportWrapper = styled.div`
  &:first-of-type {
    margin-top: 12px;
  }

  & + & {
    margin-top: 8px;
  }
`;
const ReportLabel = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 4px;
`;
const Title = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;
const HelpfulProgramsWrapper = styled(CommonWrapper)`
  padding: 40px 32px;
`;

export default HelpfulPrograms;
