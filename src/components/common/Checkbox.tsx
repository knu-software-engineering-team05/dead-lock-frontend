import { useId } from 'react';
import styled from 'styled-components';

type CheckboxProps = {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};
const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }: CheckboxProps) => {
  const id = useId();

  return (
    <div>
      <CheckboxBase id={id} checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <label htmlFor={id}>
        <LabelText>{label}</LabelText>
      </label>
    </div>
  );
};

const CheckboxBase = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;

  & + label {
    display: inline-block;
    position: relative;
    padding-left: 24px;
    cursor: pointer;
  }

  & + label:before,
  &:checked + label:before {
    content: '';
    position: absolute;
    top: 6px;
    left: 0;
    width: 16px;
    height: 16px;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.colors.lightGray};
  }

  &:checked + label:before {
    background:
      url(../images/checked.svg) no-repeat,
      ${({ theme }) => theme.colors.lightGray};
    background-position: center center;
  }
`;

const LabelText = styled.p`
  color: #878787;
  font-size: 16px;
  padding: 4px 0;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

export { Checkbox };
