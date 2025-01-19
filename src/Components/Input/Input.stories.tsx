import React from "react";
import Input from "./Input";
import { InputProps } from "./Input";
import { StoryFn } from "@storybook/react/*";

export default {
    title: "Components/Input",
    component: Input,
    argTypes:{
        type:{
            control:{type:"text"},
            options:["text", "tel", "number", "password"]
        },
        disabled:{
            control:{type:"boolean"}
        }
    }
}


const Template: StoryFn<InputProps> = (args)=> <Input {...args}/>;

export const Default = Template.bind({})
Default.args = {
    placeholder: "Default Input"
}
export const Disabled = Template.bind({})
Disabled.args = {
    placeholder: "Disabled Input",
    disabled:true
}