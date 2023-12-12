import type {HTMLAttributes} from "react";

export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
    checked?: boolean
}