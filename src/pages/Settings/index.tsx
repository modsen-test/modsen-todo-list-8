import {ChangeTheme} from "@/components/ChangeTheme";
import {FindProfile} from "@/components/FindProfile";
import {Wrapper} from "@/pages/Settings/styles.ts";

export const Settings = () => {
    return <Wrapper>
        <ChangeTheme/>
        <FindProfile/>
    </Wrapper>
}