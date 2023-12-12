import {useId, useState} from "react";

import {StyledButton, StyledInput, StyledLabel, Wrapper} from "./styles.ts";

import {useActions} from "@/hooks/useActions";

export const AddingTodo = () => {
    const id = useId();
    const [task, setTask] = useState('');
    const [quake, setQuake] = useState(false);

    const {addTodo} = useActions();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    }

    const handleAdd = () => {
        if (!task) {
            setTimeout(() => setQuake(false), 500);
            return setQuake(true);
        }

        addTodo(task);
        setTask('');
    };

    return <Wrapper>
        <StyledLabel htmlFor={id}>Add a new task</StyledLabel>
        <StyledInput id={id} value={task} onChange={handleChange} $quake={quake} placeholder="???????"/>
        <StyledButton onClick={handleAdd}>Add todo</StyledButton>
    </Wrapper>
}