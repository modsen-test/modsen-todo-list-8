import {AddingTodo} from "@/components/AddingTodo";
import {NormalizedWrapper} from "@/components/NormalizedWrapper";
import {RemoveSelected} from "@/components/RemoveSelected";
import {TaskList} from "@/components/TaskList";

export const Main = () => (
    <NormalizedWrapper>
        <AddingTodo/>
        <TaskList/>
        <RemoveSelected/>
    </NormalizedWrapper>
)