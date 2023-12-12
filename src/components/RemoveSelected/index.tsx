import {useCallback, useState} from "react";

import {StyledButton} from "./styles.ts";

import {Confirm} from "@/components/Confirm";
import {Modal} from "@/components/Modal";
import {useAppSelector} from "@/hooks/redux-hooks.ts";
import {useActions} from "@/hooks/useActions.ts";

export const RemoveSelected = () => {
    const {removeSelected} = useActions();
    const hasSelected = useAppSelector(state => (
        state.todos.items.some(({selected}) => selected)
    ));

    const [confirm, setConfirm] = useState(false);
    const handleCloseConfirm = useCallback(() => {
        setConfirm(false);
    }, [])

    const handleClick = () => {
        setConfirm(true);
    };

    const handleDelete = () => {
        removeSelected();
        setConfirm(false);
    }

    return <>
        <StyledButton variant="second" onClick={handleClick} disabled={!hasSelected}>Deleted selected</StyledButton>
        <Modal open={confirm} onClose={handleCloseConfirm}>
            <Confirm
                action={handleDelete}
                onClose={handleCloseConfirm}
                text="Delete all selected?"/>
        </Modal>
    </>
}