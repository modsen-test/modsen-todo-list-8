import {createSlice} from "@reduxjs/toolkit";

import {Todo} from "@/types/todo.ts";

export interface TodoStore {
    items: Todo[]
}

const initialState: TodoStore = {
    items: []
}

export const todoSlice = createSlice({
    initialState,
    name: 'todos',
    reducers: {
        addTodo: ({items}, {payload}: { payload: string }) => ({
            items: items.concat({id: Date.now().valueOf(), text: payload, selected: false})
        }),

        toggleChecked: ({items}, {payload}: { payload: number }) => {
            const currentTodo = items.find(({id}) => id === payload);
            currentTodo!.selected = !currentTodo!.selected;
        },

        removeTodo: ({items}, {payload}: { payload: number }) => ({
            items: items.filter(({id}) => id !== payload)
        }),

        removeSelected: ({items}) => ({
            items: items.filter(({selected}) => !selected)
        }),

        updateItem: ({items}, {payload: {id, text}}: { payload: { id: number, text: string } }) => {
            const currentTodo = items.find(({id: currentId}) => currentId === id);
            currentTodo!.text = text;
        }
    },
})

export default todoSlice.reducer;
export const {...todoActions} = todoSlice.actions;

