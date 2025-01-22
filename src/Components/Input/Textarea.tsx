import React from 'react';
import styled from 'styled-components';

export interface TextareaProps {
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  readOnly?: boolean;
  autoFocus?: boolean;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  rows?: number;
  cols?: number;
  [key: string]: any;
}

const TextareaContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledTextarea = styled.textarea`
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  resize: vertical; /* Allows the user to resize the textarea vertically */

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

const RequiredAsterisk = styled.span`
  color: red;
`;

const Textarea: React.FC<TextareaProps> = ({
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
  rows,
  cols,
  ...rest
}: TextareaProps) => {
  return (
    <TextareaContainer>
      <StyledTextarea
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
        rows={rows}
        cols={cols}
        {...rest}
      />
      {required && <RequiredAsterisk>*</RequiredAsterisk>}
    </TextareaContainer>
  );
};

export default Textarea;