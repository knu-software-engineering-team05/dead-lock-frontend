import styled from 'styled-components';
import { Label } from './Label';

type Item<T = string> = {
  value: T;
  label: string;
};
type SelectorProps<T> = {
  options: Item<T>[];
  selected: T;
  setSelected: (value: T) => void;
};
const Selector = <T,>({ options, selected, setSelected }: SelectorProps<T>) => (
  <SelectorWrapper>
    {options.map((option) => (
      <SelectorItem
        key={option.label}
        $selected={selected === option.value}
        onClick={() => setSelected(option.value)}
        $widthPercent={`${100 / options.length}%`}
      >
        {option.label}
      </SelectorItem>
    ))}
  </SelectorWrapper>
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
const SelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  width: 100%;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 4px;
`;

const SelectorWithLabel = <T,>({ label, ...restProps }: SelectorProps<T> & { label: string }) => (
  <SelectorWithLabelWrapper>
    <Label>{label}</Label>
    <Selector {...restProps} />
  </SelectorWithLabelWrapper>
);
const SelectorWithLabelWrapper = styled.div`
  width: 100%;
  ${Label} {
    margin-bottom: 4px;
  }
`;

export { Selector, SelectorWithLabel };
