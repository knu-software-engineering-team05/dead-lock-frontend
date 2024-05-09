import styled from 'styled-components';

const ButtonBase = styled.button`
  width: 100%;
  border-radius: 15px;
  padding: 12px 0;
  font-size: ${({ theme }) => theme.fonts.paragraph.fontSize};
  font-weight: ${({ theme }) => theme.fonts.paragraph.fontWeight};
  cursor: pointer;
`;

const ContainedButton = styled(ButtonBase)`
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

const OutlinedButton = styled(ButtonBase)`
  border: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
`;

const Button = {
  Contained: ContainedButton,
  Outlined: OutlinedButton,
};

export default Button;
