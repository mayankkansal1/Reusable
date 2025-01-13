import React from 'react';
import styled from 'styled-components';

// Define the props for the Select component
export interface SelectProps {
  value?: string | number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  name?: string;
  required?: boolean;
  id?: string;
  className?: string;
  options: { value: string | number; label: string }[]; // Array of options
  placeholder?: string; // Optional placeholder-like behavior
  [key: string]: any; // Allow additional props
}

// Styled select component
const StyledSelect = styled.select`
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  disabled,
  name,
  required,
  id,
  className,
  options,
  placeholder,
  ...rest
}: SelectProps) => {
  return (
    <StyledSelect
      value={value}
      onChange={onChange}
      disabled={disabled}
      name={name}
      required={required}
      id={id}
      className={className}
      {...rest}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
