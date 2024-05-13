import styled from 'styled-components';
import { Label } from './Label';
import { CommonSelectType } from '../../types/select';

const Selector = <T,>({ options, selected, onSelected }: CommonSelectType<T>) => (
  <SelectorWrapper>
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

const SelectorWithLabel = <T,>({ label, ...restProps }: CommonSelectType<T> & { label: string }) => (
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
