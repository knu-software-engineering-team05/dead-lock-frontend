import styled from 'styled-components';

/**
 * @param $range - The range of the bar.(0~1)
 */
const RangeBar = styled.div<{ $range: number }>`
  width: 100%;
  height: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ $range }) => $range * 100}%;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
  }
`;

export { RangeBar };
