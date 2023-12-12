import {useLocation} from "react-router-dom";

import {StyledLink, Wrapper} from "./styles.ts";

import {navLinks} from "@/constants/nav-links.ts";
import {useLinks} from "@/hooks/useLinks.ts";


export const Nav = () => {
    const {pathname} = useLocation();
    const names = useLinks();

    return <Wrapper>
        {names.map(name => (
            <StyledLink
                $active={pathname === navLinks[name]}
                key={navLinks[name]}
                to={navLinks[name]}
            >{name}</StyledLink>
        ))}
    </Wrapper>
}