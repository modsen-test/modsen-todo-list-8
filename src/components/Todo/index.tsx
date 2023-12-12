import {useState} from "react";

import {DeleteButton, EditButton, Task, Wrapper} from "./styles";
import type {TodoProps} from "./types.ts";

import DeleteIcon from '@/assets/images/delete.svg?react';
import EditIcon from '@/assets/images/edit.svg?react';
import {Checkbox} from "@/components/Checkbox";
import {Confirm} from "@/components/Confirm";
import {EditTodo} from "@/components/EditTodo";
import {Modal} from "@/components/Modal";
import {useActions} from "@/hooks/useActions";



export const Todo = ({id, selected, text}: TodoProps) => {
    const {toggleChecked, removeTodo} = useActions();

    const handleToggle = () => {
        toggleChecked(id)
    };

    const [edit, setEdit] = useState(false);
    const handleCloseEdit = () => {
        setEdit(false);
    }

    const [confirm, setConfirm] = useState(false);
    const handleCloseConfirm = () => {
        setConfirm(false);
    }

    const handleDelete = () => {
        removeTodo(id);
    };

    return <Wrapper>
        <Checkbox checked={selected} onClick={handleToggle}/>

        <Task>{text}</Task>

        <EditButton onClick={() => setEdit(true)}>
            <EditIcon/>
        </EditButton>

        <DeleteButton onClick={() => setConfirm(true)}>
            <DeleteIcon/>
        </DeleteButton>

        <Modal open={edit} onClose={handleCloseEdit}>
            <EditTodo
                onClose={handleCloseEdit}
                todo={{id, text, selected}}
            />
        </Modal>

        <Modal open={confirm} onClose={handleCloseConfirm}>
            <Confirm
                action={handleDelete}
                onClose={handleCloseConfirm}
                text="Delete?"
            />
        </Modal>
    </Wrapper>
}