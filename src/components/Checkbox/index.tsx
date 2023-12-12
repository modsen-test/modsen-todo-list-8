import {useCallback, useState} from "react";

import {StyledChecked, Wrapper} from "./styles.ts";
import type {CheckboxProps} from "./types.ts";

import CheckedIcon from "@/assets/images/checked.svg";
import {useAppSelector} from "@/hooks/redux-hooks.ts";



export const Checkbox = ({checked = false, onClick, ...props}: CheckboxProps) => {
    const theme = useAppSelector(state => state.theme.theme);
    const [value, setValue] = useState(checked);

    const handleClick = useCallback((e: React.MouseEvent<HTMLInputElement>) => {
        setValue(prev => !prev);
        onClick?.(e);
    }, [onClick]);

    return <Wrapper {...props} onClick={handleClick}>
        {value && <StyledChecked src={CheckedIcon} alt="checked" $theme={theme}/>}
    </Wrapper>
}