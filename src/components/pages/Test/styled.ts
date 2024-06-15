import { styled } from 'styled-components';

export const FooterSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;

  & > button:first-child {
    margin-right: 8px;
  }
`;
export const InputSection = styled.section`
  width: 100%;
  height: calc(100vh - 191px);
  overflow-y: auto;

  & > :not(:first-child) {
    margin-top: 12px;
  }
`;
export const SectionTitle = styled.p`
  margin: 18px 0 24px;
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;
