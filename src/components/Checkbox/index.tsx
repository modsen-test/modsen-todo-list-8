import {useCallback, useState} from "react";

import {StyledChecked, Wrapper} from "./styles.ts";
import type {CheckboxProps} from "./types.ts";



export const Checkbox = ({checked = false, onClick, ...props}: CheckboxProps) => {
    const [value, setValue] = useState(checked);

    const handleClick = useCallback((e: React.MouseEvent<HTMLInputElement>) => {
        setValue(prev => !prev);
        onClick?.(e);
    }, [onClick]);

    return <Wrapper {...props} onClick={handleClick}>
        {value && <StyledChecked/>}
    </Wrapper>
}