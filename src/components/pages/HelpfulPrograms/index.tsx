import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { Button } from '../../common/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { PATHS } from '../../../router';
import { CommonWrapper, ReportBox } from '../../common/Wrapper';
import { MOCK_RESULTS, MockResultType } from '../../../mock';
import { createPathWithParams } from '../../../utils/createPathWithParams';

const HelpfulPrograms: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [result, setResult] = useState<MockResultType | null>(null);

  const handleLoadResultDetail = async () => {
    // API 호출로 대체
    setResult(MOCK_RESULTS.find((result) => result.id.toString() === id) || MOCK_RESULTS[0]);
  };

  useEffect(() => {
    handleLoadResultDetail();
  }, []);

  // result가 없을 경우 렌더링 하지 않음
  if (!result) {
    return null;
  }
  return (
    <HelpfulProgramsWrapper>
      <Title>생활습관 개선 프로그램</Title>

      <ReportWrapper>
        <ReportLabel>식습관 개선</ReportLabel>
        <ReportBox $height="250px">{result.helpfulPrograms.eating}</ReportBox>
      </ReportWrapper>

      <ReportWrapper>
        <ReportLabel>생활습관 개선</ReportLabel>
        <ReportBox $height="calc(100vh - 545px)">{result.helpfulPrograms.lifestyle}</ReportBox>
      </ReportWrapper>

      <Button.Contained
        onClick={() => navigate(createPathWithParams(PATHS.RESULT_DETAIL, { id: result.id }))}
        style={{ marginTop: '16px' }}
      >
        종합진단결과 확인
      </Button.Contained>
      <Button.Outlined onClick={() => navigate(PATHS.RESULT_LIST)} style={{ marginTop: '8px' }}>
        진단결과 목록으로 돌아가기
      </Button.Outlined>
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
