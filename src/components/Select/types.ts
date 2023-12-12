import {SelectHTMLAttributes} from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    items: { value: string, text: string }[]
    selected?: string
}