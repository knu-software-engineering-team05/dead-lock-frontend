import styled from 'styled-components';
import React, { useState } from 'react';
import { Button } from '../../common/Button';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../router';
import { CommonWrapper } from '../../common/Wrapper';
import { SvgPlus, SvgStethoscope } from '../../../svgs';
import { theme } from '../../../theme';
import { MOCK_RESULTS, MockResultType } from '../../../mock';
import { createPathWithParams } from '../../../utils/createPathWithParams';

const ResultList: React.FC = () => {
  const navigate = useNavigate();

  const [results, setResults] = useState<MockResultType[]>(MOCK_RESULTS);

  return (
    <ResultListWrapper>
      <Title>내 진단 결과</Title>

      <ContentSection>
        {results.length === 0 && (
          <EmptyResultItem>
            <SvgTextWrapper className="empty">
              <SvgPlus width="24px" height="24px" fill={theme.colors.primary} />
              <CommonResultItemText>진단하기</CommonResultItemText>
            </SvgTextWrapper>
          </EmptyResultItem>
        )}
        {results.length > 0 &&
          results.map((result) => (
            <ResultItem
              key={result.id}
              onClick={() => navigate(createPathWithParams(PATHS.RESULT_DETAIL, { id: result.id }))}
            >
              <SvgTextWrapper>
                <SvgStethoscope width="24px" height="24px" fill={theme.colors.primary} />
                <CommonResultItemText>
                  {result.date}
                  <br />
                  {result.time}
                </CommonResultItemText>
              </SvgTextWrapper>

              <ResultItemRight>
                <ScoreText>{result.score}</ScoreText>
                <CommonResultItemText className="score-label">점</CommonResultItemText>
              </ResultItemRight>
            </ResultItem>
          ))}
      </ContentSection>

      <Button.Contained onClick={() => navigate(PATHS.SIGN_IN)}>진단하기</Button.Contained>
    </ResultListWrapper>
  );
};

const CommonResultItem = styled.button`
  width: 100%;
  height: 123px;
  border-radius: 15px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-width: 3px;

  & + & {
    margin-top: 20px;
  }
`;
const CommonResultItemText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};

  &.score-label {
    font-weight: bold;
    padding-left: 4px;
    padding-bottom: 10px;
  }
`;
const SvgTextWrapper = styled.div`
  & > svg {
    margin-bottom: 8px;
  }

  &:not(.empty) {
    text-align: left;
  }
`;
const EmptyResultItem = styled(CommonResultItem)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: dashed;
`;
const ScoreText = styled.p`
  margin-top: 24px;
  font-size: 64px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;
const ResultItemRight = styled.div`
  display: flex;
  align-items: flex-end;
`;
const ResultItem = styled(CommonResultItem)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-style: solid;
  padding: 16px;
  padding-top: 20px;
`;
const ContentSection = styled.section`
  width: 100%;
  height: calc(100vh - 207px);
  overflow-y: auto;
  margin: 24px 0;

  & > :not(:first-child) {
    margin-top: 12px;
  }
`;
const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;
const ResultListWrapper = styled(CommonWrapper)`
  padding: 40px 32px;
`;

export default ResultList;
