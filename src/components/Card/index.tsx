import {Wrapper} from "./styles.ts";
import type {CardProps} from "./types.ts";


export const Card = ({avatar, login}: CardProps) => {
    return <Wrapper>
        <div>Login: {login}</div>
        <img src={avatar} alt="avatar"/>
    </Wrapper>
}