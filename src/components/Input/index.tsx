import {StyledInput} from "./styles.ts";
import type {InputProps} from "./types.ts";

import {useAppSelector} from "@/hooks/redux-hooks.ts";


export const Input = (props: InputProps) => {
    const theme = useAppSelector(state => state.theme.theme);

    return <StyledInput {...props} $theme={theme}/>;
};