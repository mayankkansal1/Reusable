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
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "danger"
}

const StyledButton = styled.button<ButtonProps>`
 padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  background-color: ${({ variant }) =>
    variant === "primary"
      ? "#2563eb"
      : variant === "secondary"
      ? "#4b5563"
      : "#dc2626"};
  color: #fff;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ variant }) =>
      variant === "primary"
        ? "#1e40af"
        : variant === "secondary"
        ? "#374151"
        : "#b91c1c"};
  }
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
  variant = "primary"
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
      variant={variant}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
