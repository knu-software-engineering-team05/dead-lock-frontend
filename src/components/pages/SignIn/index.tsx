import styled from 'styled-components';
import React, { useState } from 'react';
import { Input } from '../../common/Input';
import { BackButton, Button } from '../../common/Button';
import { CommonWrapper } from '../../common/Wrapper';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../router';
import { postSignIn } from '../../../service/auth';

const SignIn: React.FC = () => {
  const navigate = useNavigate();

  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSingIn = async () => {
    if (!id || !password) {
      alert('아이디와 비밀번호를 입력해주세요');
      return;
    }

    const { data } = await postSignIn({
      userId: id,
      userPw: password,
    });
    localStorage.setItem('token', data.access);
    localStorage.setItem('refresh', data.refresh);

    navigate(PATHS.RESULT_LIST);
  };

  return (
    <CommonWrapper>
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
        <Button.Contained onClick={handleSingIn}>로그인</Button.Contained>
      </ContentWrapper>
    </CommonWrapper>
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

export default SignIn;
