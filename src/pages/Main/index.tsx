import {Wrapper} from "./styles.ts";

import {AddingTodo} from "@/components/AddingTodo";
import {RemoveSelected} from "@/components/RemoveSelected";
import {TaskList} from "@/components/TaskList";

export const Main = () => {
    return <Wrapper>
        <AddingTodo/>
        <TaskList/>
        <RemoveSelected/>
    </Wrapper>
};