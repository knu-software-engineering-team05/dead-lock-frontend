import styled from 'styled-components';
import { Label } from './Label';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};
const Input: React.FC<InputProps> = ({ label, ...restProps }) => {
  if (!label) {
    return <InputBase {...restProps} />;
  }

  return (
    <InputWrapper>
      <Label>{label}</Label>
      <InputBase {...restProps} />
    </InputWrapper>
  );
};
const InputBase = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 15px;
  padding: 8px 16px;

  font-size: ${({ theme }) => theme.fonts.paragraph.fontSize};
  color: ${({ theme }) => theme.colors.black};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;
const InputWrapper = styled.div`
  width: 100%;
  ${Label} {
    margin-bottom: 4px;
  }

  & + & {
    margin-top: 12px;
  }
`;

export { Input, InputBase };
