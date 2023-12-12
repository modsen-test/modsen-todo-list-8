import type {SelectProps} from "./types.ts";


export const Select = ({items, selected, ...props}: SelectProps) => {
    return <select {...props} defaultValue={selected}>
        {items.map(({value, text}) => (
            <option key={value} value={value}>{text}</option>
        ))}
    </select>
}