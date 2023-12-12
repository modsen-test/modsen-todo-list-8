import {useState} from "react";

import {Input, Item, Items, Wrapper} from "@/components/Select/styles.ts";
import {SelectProps} from "@/components/Select/types.ts";

export const Select = ({items, value, onChangeValue, ...props}: SelectProps) => {
    const [open, setOpen] = useState(false);

    const handleClickInput = () => setOpen(prev => !prev)
    const handleClickItem = (value: string) => (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setOpen(false);
        onChangeValue(value)
    }

    return <Wrapper {...props} $open={open} onClick={handleClickInput}>
        <Input>{value}</Input>
        {
            open && <Items>
                {items.map(({label, value}) => <Item key={value} onClick={handleClickItem(value)}>{label}</Item>)}
            </Items>
        }
    </Wrapper>
}