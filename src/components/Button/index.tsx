import {StyledButton} from "./styles.ts";
import {ButtonProps} from "./types";


export const Button = ({children, variant = 'primary', ...props}: ButtonProps) => {
    return <StyledButton{...props} $variant={variant}>{children}</StyledButton>
}