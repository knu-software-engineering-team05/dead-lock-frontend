import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { SvgChevronLeft } from '../../svgs';

const ButtonBase = styled.button`
  width: 100%;
  height: 50px;
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

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <IconButton $width="35px" $height="35px" onClick={() => navigate(-1)}>
      <SvgChevronLeft width="35px" height="35px" />
    </IconButton>
  );
};
const IconButton = styled.button<{ $width: string; $height: string }>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export { Button, IconButton, BackButton };
