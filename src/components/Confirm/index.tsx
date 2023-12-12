import type {ConfirmProps} from "./types.ts";

import {Button} from "@/components/Button";
import {Wrapper} from "@/components/Confirm/styles.ts";

export const Confirm = ({text, action, onClose}: ConfirmProps) => {
    return <Wrapper>
        <div>{text}</div>
        <Button onClick={action} variant="second">Yes</Button>
        <Button onClick={onClose} variant="second">No</Button>
    </Wrapper>
}