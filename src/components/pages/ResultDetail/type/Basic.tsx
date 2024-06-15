import styled from 'styled-components';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '../../../common/Button';
import { ReportBox } from '../../../common/Wrapper';
import { RESULT_DETAIL_SEARCH_PARAMS } from '../../../../constants/searchParams';

type Props = {
  score: number;
  strokeProbability: number;
  totalDiagnosis: string;
};
const Basic: React.FC<Props> = ({ score, strokeProbability, totalDiagnosis }) => {
  const [, setSearchParams] = useSearchParams();

  return (
    <>
      <Title>종합진단결과</Title>

      <ResultCardWrapper>
        <ResultCard>
          <ResultCardTitle>건강점수</ResultCardTitle>
          <ScoreBox>
            <ScoreText>{score}</ScoreText>
            <ScoreLabel>점</ScoreLabel>
          </ScoreBox>
        </ResultCard>
        <ResultCard>
          <ResultCardTitle>뇌졸중 발병률</ResultCardTitle>
          <ScoreBox>
            <ScoreText>{strokeProbability}</ScoreText>
            <ScoreLabel>%</ScoreLabel>
          </ScoreBox>
        </ResultCard>
      </ResultCardWrapper>

      <ReportBox $height="calc(100vh - 404px)">{totalDiagnosis}</ReportBox>

      <Button.Contained
        onClick={() => setSearchParams({ type: RESULT_DETAIL_SEARCH_PARAMS.HELPFUL })}
        style={{ marginTop: '16px' }}
      >
        생활습관 개선 프로그램 확인
      </Button.Contained>
    </>
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

export default Basic;
