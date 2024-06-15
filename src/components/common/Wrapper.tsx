import { styled } from 'styled-components';

export const CommonWrapper = styled.section`
  padding: 40px 16px;
  height: 100vh;
`;

export const ReportBox = styled.section<{ $height: string }>`
  border-radius: 15px;
  background-color: #eeeeee;
  width: 100%;
  height: ${({ $height }) => $height};
  padding: 20px 16px;

  color: #000000;
  font-size: 16px;

  overflow-y: auto;
`;
