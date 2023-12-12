import {HTMLAttributes} from "react";

export interface SelectProps extends HTMLAttributes<HTMLDivElement> {
    items: { value: string, label: string }[]
    value: string,
    onChangeValue: (value: string) => void
}