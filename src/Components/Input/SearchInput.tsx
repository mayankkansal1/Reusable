import React from "react";
import Input from "./Input";
import { InputProps } from "./Input";
import { Search } from "lucide-react";

const SearchInput = (props: InputProps) => {
  return (
    <div style={{
      margin: "10px 10px",
      position: "relative", // Added to position the icon correctly
    }}>
      <Input
        {...props} // Spread additional props to the Input component
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingLeft: "35px",
          paddingRight: "18px",
          width: "fit-content",
          ...props.style, // Merge any additional styles passed via props
        }}
        placeholder="Search"
      />
      <Search style={{
        position: "absolute",
        left: "10px", // Adjust this value to align the icon properly
        top: "50%",
        transform: "translateY(-50%)", // Center the icon vertically
        height: "24px",
        width: "27px",
        color: "gray"
      }} />
    </div>
  );
}

export default SearchInput;