import {useId, useState} from "react";

import {StyledInput, StyledLabel, Wrapper} from "./styles.ts";
import {EditTodoProps} from "./types.ts";

import {Button} from "@/components/Button";
import {useActions} from "@/hooks/useActions.ts";

export const EditTodo = ({todo: {id, text}, onClose}: EditTodoProps) => {
    const idLabel = useId();
    const {updateItem} = useActions();

    const [value, setValue] = useState(text);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    };

    const handleClick = () => {
        updateItem({id, text: value})
        onClose();
    };

    return <Wrapper>
        <StyledLabel htmlFor={idLabel}>Task: </StyledLabel>
        <StyledInput id={idLabel} value={value} onChange={handleChange}/>
        <Button variant="second" onClick={handleClick}>Save</Button>
    </Wrapper>
}