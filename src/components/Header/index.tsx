import {useMediaQuery} from "usehooks-ts";

import {Logo, Wrapper} from "./styles.ts";

import {FullscreenMenu} from "@/components/FullscreenMenu";
import {Nav} from "@/components/Nav";
import {Media} from "@/constants/media.ts";

export const Header = () => {
    const matches = useMediaQuery(Media.largeLaptop)

    return <Wrapper>
        <Logo>Modsen Todo list</Logo>
        {matches ? <FullscreenMenu/> : <Nav/>}
    </Wrapper>
}