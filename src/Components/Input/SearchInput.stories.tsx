import React from "react";
import SearchInput from "./SearchInput";
import { InputProps } from "./Input";
import type { Meta, StoryObj } from '@storybook/react';

const Template: Meta <typeof SearchInput> = {
    component:SearchInput
}

export default Template
type Story = StoryObj<typeof SearchInput>

export const Default: Story = {
}