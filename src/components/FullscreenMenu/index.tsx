import {useCallback, useState} from "react";
import {useLocation} from "react-router-dom";

import {StyledLink, Wrapper, Menu} from "./styles.ts";

import MenuIcon from "@/assets/images/menu.svg";
import {navLinks} from "@/constants/nav-links.ts";
import {useLinks} from "@/hooks/useLinks.ts";

export const FullscreenMenu = () => {
    const {pathname} = useLocation();

    const [open, setOpen] = useState(false);
    const handleClick = useCallback(() => {
        setOpen(prev => !prev)
    }, []);

    const names = useLinks();

    return <>
        <Menu onClick={handleClick}><img src={MenuIcon} alt="menu"/></Menu>
        {open && <Wrapper>
            {names.map(name => (
                <StyledLink
                    $active={pathname === navLinks[name]}
                    key={navLinks[name]}
                    to={navLinks[name]}
                >{name}</StyledLink>
            ))}
        </Wrapper>}
    </>
}