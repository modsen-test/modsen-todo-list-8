import React from 'react';

import {Line, StyledList, Wrapper} from "@/components/TaskList/styles.ts";
import {Todo} from "@/components/Todo";
import {useAppSelector} from "@/hooks/redux-hooks.ts";

export const TaskList = () => {
    const todos = useAppSelector(state => state.todos.items);

    return <Wrapper>
        <h2>Task list</h2>
        <StyledList>
            <Line/>
            {todos?.map(({id, text, selected}) => (
                <React.Fragment key={id}>
                    <Todo id={id} text={text} selected={selected}/>
                    <Line/>
                </React.Fragment>
            ))}
        </StyledList>
    </Wrapper>
}