import React from "react";
import Textarea from "./Textarea";
import type { Meta, StoryObj } from '@storybook/react';

const Template: Meta <typeof Textarea> = {
    component:Textarea
}

export default Template
type Story = StoryObj<typeof Textarea>

export const Default: Story={
    args:{
        rows:3,
        placeholder:"Text Area"
    }
}

export const Disabled: Story={
    args:{
        rows:3,
        disabled:true,
        placeholder:"Disabled Text Area"
    }
}