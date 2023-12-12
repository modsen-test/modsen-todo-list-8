import React, {useState} from "react";

import {StyledButton, Wrapper} from "./styles";

import Loupe from "@/assets/images/loupe.svg?react";
import {Card} from "@/components/Card";
import {Input} from "@/components/Input";
import {useLazyGetUserQuery} from "@/store/api/github.rtk";


export const FindProfile = () => {
    const [name, setName] = useState('');
    const [requestUser, {data, isSuccess, isError}] = useLazyGetUserQuery();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleClick = () => {
        requestUser(name)
    };

    return (
        <Wrapper>
            <h3>GitHub info</h3>
            <Input placeholder="Search name..." value={name} onChange={handleChange}/>
            <StyledButton onClick={handleClick}>
                <Loupe/>
            </StyledButton>

            {isError && <h4>?????</h4>}
            {isSuccess && data && <Card avatar={data?.avatar_url} login={data?.login}/>}
        </Wrapper>
    )
}