import styled from 'styled-components';
import React, { useState } from 'react';
import { Button } from '../../common/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { PATHS } from '../../../router';
import { CommonWrapper, ReportBox } from '../../common/Wrapper';
import { MOCK_RESULTS, MockResultType } from '../../../mock';
import { createPathWithParams } from '../../../utils/createPathWithParams';

const ResultDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [result, setResult] = useState<MockResultType>(MOCK_RESULTS[0]);

  return (
    <ResultDetailWrapper>
      <Title>종합진단결과</Title>

      <ResultCardWrapper>
        <ResultCard>
          <ResultCardTitle>건강점수</ResultCardTitle>
          <ScoreBox>
            <ScoreText>{result.score}</ScoreText>
            <ScoreLabel>점</ScoreLabel>
          </ScoreBox>
        </ResultCard>
        <ResultCard>
          <ResultCardTitle>뇌졸중 발병률</ResultCardTitle>
          <ScoreBox>
            <ScoreText>{result.percentage}</ScoreText>
            <ScoreLabel>%</ScoreLabel>
          </ScoreBox>
        </ResultCard>
      </ResultCardWrapper>

      <ReportBox $height="calc(100vh - 404px)">{result.diagnosis}</ReportBox>

      <Button.Contained
        onClick={() => navigate(createPathWithParams(PATHS.HELPFUL_PROGRAMS, { id: result.id }))}
        style={{ marginTop: '16px' }}
      >
        생활습관 개선 프로그램 확인
      </Button.Contained>
      <Button.Outlined onClick={() => navigate(PATHS.RESULT_LIST)} style={{ marginTop: '8px' }}>
        진단결과 목록으로 돌아가기
      </Button.Outlined>
    </ResultDetailWrapper>
  );
};

const ScoreText = styled.p`
  font-size: 64px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;
const ScoreLabel = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  padding-left: 4px;
  padding-bottom: 10px;
`;
const ScoreBox = styled.div`
  display: flex;
  justify-content: right;
  align-items: flex-end;
  margin-top: 4px;
`;
const ResultCardTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;
const ResultCard = styled.div`
  width: 100%;
  padding: 12px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;
const ResultCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin: 32px 0 16px;
`;
const Title = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;
const ResultDetailWrapper = styled(CommonWrapper)`
  padding: 40px 32px;
`;

export default ResultDetail;
