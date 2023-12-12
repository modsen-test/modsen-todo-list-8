import type {Todo} from "@/types/todo";

export interface EditTodoProps {
    todo: Todo
    onClose: () => void
}