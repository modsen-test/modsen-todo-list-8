import React, {useState} from "react";

import {StyledButton, StyledInput, Wrapper} from "./styles";

import Loupe from "@/assets/images/loupe.svg?react";
import {Card} from "@/components/Card";
import {useLazyGetUserQuery} from "@/store/api/github.rtk";


export const FindProfile = () => {
    const [name, setName] = useState('');
    const [quake, setQuake] = useState(false);
    const [requestUser, {data, isSuccess, isError}] = useLazyGetUserQuery();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleClick = () => {
        if (!name) {
            setTimeout(() => setQuake(false), 500);
            return setQuake(true);
        }
        requestUser(name)
    };

    return (
        <Wrapper>
            <h3>GitHub info</h3>
            <StyledInput $quake={quake} placeholder="Search name..." value={name} onChange={handleChange}/>
            <StyledButton onClick={handleClick}>
                <Loupe/>
            </StyledButton>

            {isError && <h4>Not Found</h4>}
            {isSuccess && data && <Card avatar={data?.avatar_url} login={data?.login}/>}
        </Wrapper>
    )
}