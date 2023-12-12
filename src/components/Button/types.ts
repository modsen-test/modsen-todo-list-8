import type {ButtonHTMLAttributes} from "react";

export type Variant = "primary" | "second";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant
}