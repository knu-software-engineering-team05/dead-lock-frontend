import styled from 'styled-components';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '../../../common/Button';
import { ReportBox } from '../../../common/Wrapper';
import { RESULT_DETAIL_SEARCH_PARAMS } from '../../../../constants/searchParams';

type Props = {
  eatingHabits: string;
  lifestyleHabits: string;
};
const Helpful: React.FC<Props> = ({ eatingHabits, lifestyleHabits }) => {
  const [, setSearchParams] = useSearchParams();

  return (
    <>
      <Title>생활습관 개선 프로그램</Title>

      <ReportWrapper>
        <ReportLabel>식습관 개선</ReportLabel>
        <ReportBox $height="250px">{eatingHabits}</ReportBox>
      </ReportWrapper>

      <ReportWrapper>
        <ReportLabel>생활습관 개선</ReportLabel>
        <ReportBox $height="calc(100vh - 545px)">{lifestyleHabits}</ReportBox>
      </ReportWrapper>

      <Button.Contained
        onClick={() => setSearchParams({ type: RESULT_DETAIL_SEARCH_PARAMS.BASIC })}
        style={{ marginTop: '16px' }}
      >
        종합진단결과 확인
      </Button.Contained>
    </>
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

export default Helpful;
