import styled from 'styled-components';
import React from 'react';
import { Button } from '../../common/Button';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../router';

const Main: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MainWrapper>
      <TopSection>
        <Title>DeadLock</Title>
        <Description>
          몇가지 질문에 답하고
          <br />
          뇌졸중을 자가진단 해보세요!
        </Description>
      </TopSection>

      <MainImage src="/images/main.png" alt="main" />

      <FooterSection>
        <Button.Contained onClick={() => navigate(PATHS.SIGN_IN)}>로그인</Button.Contained>
        <Button.Outlined onClick={() => navigate(PATHS.SIGN_UP)}>회원가입</Button.Outlined>
      </FooterSection>
    </MainWrapper>
  );
};

const Description = styled.p`
  font-size: ${({ theme }) => theme.fonts.paragraph.fontSize};
  font-weight: ${({ theme }) => theme.fonts.paragraph.fontWeight};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 20px;
`;
const Title = styled.p`
  font-size: ${({ theme }) => theme.fonts.heading1.fontSize};
  font-weight: ${({ theme }) => theme.fonts.heading1.fontWeight};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 20px;
`;
const FooterSection = styled.section`
  width: 100%;
  margin-top: min(25%, 120px);
  padding: 0 32px;

  & > button:first-child {
    margin-bottom: 8px;
  }
`;
const MainImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;
const TopSection = styled.section`
  width: 100%;
  padding: 0 32px;
`;
const MainWrapper = styled.section`
  text-align: center;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 120px 0;

  background-color: ${({ theme }) => theme.colors.black};
`;

export default Main;
