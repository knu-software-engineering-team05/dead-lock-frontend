import styled from 'styled-components';
import React, { useState } from 'react';
import { Input } from '../../common/Input';
import { BackButton, Button } from '../../common/Button';
import { SelectorWithLabel } from '../../common/Selector';

const SEX = {
  MAN: 'MAN',
  WOMAN: 'WOMAN',
} as const;
const SEX_OPTIONS = [
  { value: SEX.MAN, label: '남성' },
  { value: SEX.WOMAN, label: '여성' },
];

const SignUp: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [sex, setSex] = useState<keyof typeof SEX>(SEX.MAN);

  return (
    <SignUpWrapper>
      <BackButton />

      <ContentWrapper>
        <Title>회원가입</Title>
        <InputSection>
          <Input
            label="이름"
            placeholder="이름을 입력해 주세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 한 번 더 입력해 주세요"
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <Input label="나이" placeholder="나이를 입력해 주세요" value={age} onChange={(e) => setAge(e.target.value)} />
          <SelectorWithLabel label="성별" options={SEX_OPTIONS} selected={sex} onSelected={setSex} />
        </InputSection>
        <Button.Contained>가입하기</Button.Contained>
      </ContentWrapper>
    </SignUpWrapper>
  );
};

const InputSection = styled.section`
  width: 100%;
  height: calc(100vh - 270px);
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
const ContentWrapper = styled.section`
  margin-top: 24px;
  padding: 0 8px;
`;
const SignUpWrapper = styled.section`
  padding: 40px 16px;
  height: 100vh;
`;

export default SignUp;
