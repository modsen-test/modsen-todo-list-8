import {useMemo} from "react";

export const useThemes = () => {
    return useMemo(() => {
        return [
            {value: 'dark', text: 'Dark'},
            {value: 'light', text: 'Light'}
        ]
    }, []);
}