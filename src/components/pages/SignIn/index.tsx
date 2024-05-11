import styled from 'styled-components';
import React, { useState } from 'react';
import { Input } from '../../common/Input';
import { BackButton, Button } from '../../common/Button';

const SignIn: React.FC = () => {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <SignInWrapper>
      <BackButton />

      <ContentWrapper>
        <MainText>
          안녕하세요!
          <br />
          DeadLock 에 오신것을 환영합니다
        </MainText>
        <InputSection>
          <Input
            label="아이디"
            placeholder="아이디를 입력해 주세요"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해 주세요"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputSection>
        <Button.Contained>로그인</Button.Contained>
      </ContentWrapper>
    </SignInWrapper>
  );
};

const InputSection = styled.section`
  width: 100%;
  margin: 24px 0;
`;
const MainText = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;
const ContentWrapper = styled.section`
  margin-top: 24px;
  padding: 0 8px;
`;
const SignInWrapper = styled.section`
  padding: 40px 16px;
  height: 100vh;
`;

export default SignIn;
