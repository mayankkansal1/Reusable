// src/stories/Button.stories.tsx
import React from "react";
import Button from "./Button"; // Adjust the import path as needed
import { Meta, StoryFn } from "@storybook/react";
import { ButtonProps } from "./Button"; // Adjust the import path

export default {
  title: "Components/Button", // Storybook title
  component: Button, // The component being documented
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    onClick: { action: "clicked" },
    className: {
      control: { type: "text" },
    },
    children: {
      control: { type: "text" },
    },
    ariaLabel: {
      control: { type: "text" },
    },
    ariaDisabled: {
      control: { type: "boolean" },
    },
    role: {
      control: { type: "text" },
    },
  },
};

// Template for the stories
const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  children: "Click Me",
};

// Disabled story
export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Button",
  disabled: true,
};

// Submit button story
export const Submit = Template.bind({});
Submit.args = {
  type: "submit",
  children: "Submit",
};

// Button with custom styles
export const Styled = Template.bind({});
Styled.args = {
  children: "Styled Button",
  style: { backgroundColor: "blue", color: "white", padding: "10px 20px" },
};

// Button with aria-label
export const Accessible = Template.bind({});
Accessible.args = {
  children: "Accessible Button",
  ariaLabel: "This is an accessible button",
};

// Button with role
export const RoleButton = Template.bind({});
RoleButton.args = {
  children: "Role Button",
  role: "menuitem",
};
