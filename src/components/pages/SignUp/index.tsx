import styled from 'styled-components';
import React, { useState } from 'react';
import { Input } from '../../common/Input';
import { BackButton, Button } from '../../common/Button';
import { Selector } from '../../common/Selector';
import { CommonWrapper } from '../../common/Wrapper';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../router';
import { GENDER, Gender } from '../../../types/service';
import { postSignUp } from '../../../service/auth';

const GENDER_OPTIONS = [
  { value: GENDER.MALE, label: '남성' },
  { value: GENDER.FEMALE, label: '여성' },
];

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [birth, setBirth] = useState<string>('');
  const [gender, setGender] = useState<Gender>(GENDER.MALE);

  const handleSingUp = async () => {
    if (!name || !id || !password || !passwordConfirm || !birth) {
      alert('모든 항목을 입력해주세요');
      return;
    }
    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다');
      return;
    }

    const { data } = await postSignUp({
      userId: id,
      userPw: password,
      birth,
      gender,
    });
    localStorage.setItem('token', data.access);
    localStorage.setItem('refresh', data.refresh);

    navigate(PATHS.RESULT_LIST);
  };

  return (
    <CommonWrapper>
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
          <Input
            label="생년월일"
            placeholder="생년월일 8자리를 입력해 주세요 (YYYYMMDD)"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />
          <Selector label="성별" options={GENDER_OPTIONS} selected={gender} onSelected={setGender} />
        </InputSection>
        <Button.Contained onClick={handleSingUp}>가입하기</Button.Contained>
      </ContentWrapper>
    </CommonWrapper>
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

export default SignUp;
