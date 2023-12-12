import {useMemo} from "react";

import {navLinks} from "@/constants/nav-links.ts";

export const useLinks = () => {
    return useMemo(() => {
        return Object.keys(navLinks) as (keyof typeof navLinks)[]
    }, [])
}