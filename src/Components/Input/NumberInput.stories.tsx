import React from "react";
import NumberInput from "./NumberInput";
import type { Meta, StoryObj } from '@storybook/react';

const Template: Meta<typeof NumberInput> = {
    component:NumberInput
}

export default Template
type Story = StoryObj<typeof NumberInput>

export const Default: Story = {
    args:{
        placeholder:"Number Input"
    }
}
export const Disabled:Story = {
    args:{
        placeholder:"Disable Input",
        disabled:true
    }
}

export const Max: Story = {
    args:{
        placeholder:"Max 10",
        max:10
    }
}
export const Min: Story={
    args:{
        placeholder: "Min 1",
        min:1
    }
}