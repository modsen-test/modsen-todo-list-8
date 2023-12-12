import {Wrapper} from "./styles.ts";

import {Select} from "@/components/Select";
import {useAppSelector} from "@/hooks/redux-hooks.ts";
import {useActions} from "@/hooks/useActions.ts";
import {useThemes} from "@/hooks/useThemes.ts";
import {Theme} from "@/types/theme.ts";

export const ChangeTheme = () => {
    const theme = useAppSelector(state => state.theme.theme);
    const {setTheme} = useActions();
    const themes = useThemes();

    const handleChange = (selectedOption: string) => {
        setTheme(selectedOption as Theme);
    };

    return <Wrapper>
        Change theme:
        <Select
            items={themes}
            value={theme}
            onChangeValue={handleChange}
        />
    </Wrapper>;
}