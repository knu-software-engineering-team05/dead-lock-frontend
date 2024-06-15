import styled from 'styled-components';
import { Label } from './Label';
import { CommonSelectType } from '../../types/select';

type SelectorProps<T> = CommonSelectType<T> & {
  label?: string;
};
const Selector = <T,>({ label, ...selectorProps }: SelectorProps<T>) => {
  if (!label) {
    return <SelectorBase {...selectorProps} />;
  }

  return (
    <SelectorWrapper>
      <Label>{label}</Label>
      <SelectorBase {...selectorProps} />
    </SelectorWrapper>
  );
};
const SelectorWrapper = styled.div`
  width: 100%;
  ${Label} {
    margin-bottom: 4px;
  }
`;

const SelectorBase = <T,>({ options, selected, onSelected }: CommonSelectType<T>) => (
  <SelectorBaseWrapper>
    {options.map((option) => (
      <SelectorItem
        key={option.label}
        $selected={selected === option.value}
        onClick={() => onSelected(option.value)}
        $widthPercent={`${100 / options.length}%`}
      >
        {option.label}
      </SelectorItem>
    ))}
  </SelectorBaseWrapper>
);
const SelectorItem = styled.button<{ $selected: boolean; $widthPercent: string }>`
  width: ${({ $widthPercent }) => $widthPercent};
  height: 100%;
  background-color: ${({ $selected, theme }) => ($selected ? theme.colors.primary : theme.colors.white)};
  color: ${({ $selected, theme }) => ($selected ? theme.colors.white : theme.colors.primary)};
  font-size: ${({ theme }) => theme.fonts.paragraph.fontSize};
  border-radius: 30px;
  cursor: pointer;
  border: none;
`;
const SelectorBaseWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  width: 100%;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 4px;
`;

export { Selector, SelectorBase };
