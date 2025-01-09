import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  name?: string;
  value?: string;
  form?: string;
  autoFocus?: boolean;
  title?: string;
  tabIndex?: number;
  ariaLabel?: string;
  ariaDisabled?: boolean;
  role?: string;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
  onFocus?: React.FocusEventHandler<HTMLButtonElement>;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLButtonElement>;
  children?: React.ReactNode; // For button content
}

const StyledButton = styled.button<ButtonProps>`
  /* Base styles */
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  /* Default styles */
  background-color: ${(props) => (props.disabled ? "#ccc" : "#007bff")};
  color: white;

  /* Hover effect */
  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#0056b3")};
  }

  /* Disabled state */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  /* Additional styles based on props */
  ${(props) =>
    props.role === "menuitem" &&
    `
    background-color:rgb(133, 167, 40);
    &:hover {
      background-color:rgb(83, 136, 33);
    }
  `}

  ${(props) =>
    props.type === "submit" &&
    `
    background-color: #28a745;
    &:hover {
      background-color: #218838;
    }
  `}

  ${(props) =>
    props.type === "reset" &&
    `
    background-color: #dc3545;
    &:hover {
      background-color: #c82333;
    }
  `}
`;
const Button: React.FC<ButtonProps> = ({
  type = "button",
  disabled = false,
  onClick,
  className,
  id,
  style,
  name,
  value,
  form,
  autoFocus,
  title,
  tabIndex,
  ariaLabel,
  ariaDisabled,
  role,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyUp,
  children,
}) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
      id={id}
      style={style}
      name={name}
      value={value}
      form={form}
      autoFocus={autoFocus}
      title={title}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      aria-disabled={ariaDisabled}
      role={role}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
