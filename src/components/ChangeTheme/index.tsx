import {StyledSelect} from "./styles.ts";

import {useAppSelector} from "@/hooks/redux-hooks.ts";
import {useActions} from "@/hooks/useActions.ts";
import {useThemes} from "@/hooks/useThemes.ts";
import type {Theme} from "@/types/theme.ts";

export const ChangeTheme = () => {
    const theme = useAppSelector(state => state.theme.theme);
    const {setTheme} = useActions();
    const themes = useThemes();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTheme(e.target.value as Theme)
    }

    return <StyledSelect items={themes} onChange={handleChange} selected={theme}/>;
}