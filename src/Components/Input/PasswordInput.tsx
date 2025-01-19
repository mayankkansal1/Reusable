import React, { useState } from "react";
import Input from "./Input";
import { Eye, EyeOff } from "lucide-react";
import Button from "../Button/Button";

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div style={{ position: "relative", width: "fit-content" }}>
      <Input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
      />
      <Button
        onClick={togglePasswordVisibility}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? (
          <Eye size={16} color="#666" />
        ) : (
          <EyeOff size={16} color="#666" />
        )}
      </Button>
    </div>
  );
};

export default PasswordInput;