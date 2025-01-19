import React from "react";
// import { StoryFn } from "@storybook/react/*";
import type { Meta, StoryObj } from '@storybook/react';
import Select from "./Select";
import { SelectProps } from "./Select";

const option = [
    {value:"1",label:"1"},
    {value:"2",label:"2" },
    {value:"3",label:"3" },
]

// export default {
//     title:"Components/Select",
//     component:Select,
//     argTypes:{

//     }
// }

const Template: Meta<typeof Select>={
    component:Select
}

export default Template
type Story = StoryObj<typeof Select>

export const Default: Story = {
    args:{
        options:option
    }
}
export const Disabled: Story ={
    args:{
        options:option,
        disabled:true
    }
}