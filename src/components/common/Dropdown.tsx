import { useMemo, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { SvgChevronDown } from '../../svgs';
import { CommonSelectType } from '../../types/select';
import useOutAreaClick from '../../utils/useOutAreaClick';
import { Label } from './Label';

type DropdownProps<T> = DropdownBaseProps<T> & {
  label?: string;
};
const Dropdown = <T extends string>({ label, ...dropdownProps }: DropdownProps<T>) => {
  if (!label) {
    return <DropdownBase {...dropdownProps} />;
  }

  return (
    <DropdownWrapper>
      <Label>{label}</Label>
      <DropdownBase {...dropdownProps} />
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.div`
  width: 100%;
  ${Label} {
    margin-bottom: 4px;
  }

  & + & {
    margin-top: 12px;
  }
`;

type DropdownBaseProps<T> = CommonSelectType<T> & {
  placeholder?: string;
};
const DropdownBase = <T extends string>({ options, selected, onSelected, placeholder }: DropdownBaseProps<T>) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = useMemo(() => options.find((option) => option.value === selected), [options, selected]);

  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (value: T) => {
    onSelected(value);
    setIsOpen(false);
  };

  useOutAreaClick(dropdownRef, () => setIsOpen(false));
  return (
    <DropdownBaseWrapper ref={dropdownRef}>
      <DropdownButton onClick={() => setIsOpen(!isOpen)} $isSelected={!!selected}>
        {selectedOption?.label || placeholder || '선택해주세요'}
        <DropdownIcon $isOpen={isOpen}>
          <SvgChevronDown width="24px" height="24px" fill="#000" />
        </DropdownIcon>
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownItem key={option.label} onClick={() => handleSelect(option.value)}>
              {option.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownBaseWrapper>
  );
};
const DropdownItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }

  & + & {
    border-top: 1px solid ${({ theme }) => theme.colors.borderGray};
  }
`;
const DropdownList = styled.ul`
  position: absolute;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  list-style: none;
  z-index: 1;
  padding: 0;
  margin: 0;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.white};
`;
const DropdownIcon = styled.span<{ $isOpen: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;
const DropdownButton = styled.button<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  width: 100%;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;

  ${({ $isSelected }) =>
    !$isSelected &&
    css`
      color: ${({ theme }) => theme.colors.gray};
    `}
`;
const DropdownBaseWrapper = styled.div`
  position: relative;
`;

export { Dropdown, DropdownButton, DropdownIcon, DropdownList, DropdownItem };
