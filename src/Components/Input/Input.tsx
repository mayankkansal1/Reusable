import React from 'react';
import styled from 'styled-components';

export interface InputProps {
  type?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string | any;
  disabled?: boolean;
  name?: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  readOnly?: boolean;
  autoFocus?: boolean;
  id?: string;
  className?: string;
  style?:React.CSSProperties;
  [key: string]: any;
}

const InputContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledInput = styled.input`
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

const RequiredAsterisk = styled.span`
  color: red;
`;

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  disabled,
  name,
  required,
  maxLength,
  minLength,
  readOnly,
  autoFocus,
  id,
  style,
  className,
  ...rest
}: InputProps) => {
  return (
    <InputContainer>
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        name={name}
        required={required}
        maxLength={maxLength}
        minLength={minLength}
        readOnly={readOnly}
        autoFocus={autoFocus}
        id={id}
        style={style}
        className={className}
        {...rest}
      />
      {required && <RequiredAsterisk>*</RequiredAsterisk>}
    </InputContainer>
  );
};

export default Input;