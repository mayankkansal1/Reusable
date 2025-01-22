import React from "react";
import styled from "styled-components";

export interface NumberInputProps {
    value?:number;
    onChange?:(event:React.ChangeEvent<HTMLInputElement>)=>void;
    placeholder?:string;
    name?:string;
    required?:boolean;
    max?:number;
    min?:number;
    disabled?:boolean;
    readOnly?:boolean;
    className?:string;
    style?:React.CSSProperties;
    
}

const StyledNumberInput = styled.input`
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    outline:none;

    &:disabled{
    background-color: #f5f5f5;
    cursor: not-allowed;
    }
`
const RequiredAsterisk = styled.span`
color:red;
`

const NumberInput: React.FC<NumberInputProps>=({
    value,
    onChange,
    placeholder,
    name,
    required,
    max,
    min,
    disabled,
    readOnly,
    className,
    style,
    ...rest
}:NumberInputProps)=>{
    return(
        <StyledNumberInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        max={max}
        min={min}
        disabled={disabled}
        readOnly={readOnly}
        className={className}
        style={style}
        type="number"
        >
            {required && <RequiredAsterisk>*</RequiredAsterisk>}
        </StyledNumberInput>
    )
}

export default NumberInput