import { styled } from 'styled-components';

const Label = styled.p`
  font-size: ${({ theme }) => theme.fonts.paragraph.fontSize};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  padding: 4px 0;
`;

export { Label };
