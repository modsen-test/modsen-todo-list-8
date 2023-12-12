import {bindActionCreators} from '@reduxjs/toolkit';
import {useMemo} from 'react';

import {useAppDispatch} from "@/hooks/redux-hooks";
import {themeActions} from '@/store/slices/theme.slice';
import {todoActions} from '@/store/slices/todo.slice';


const actions = {
    ...todoActions,
    ...themeActions,
};

export const useActions = () => {
    const dispatch = useAppDispatch();
    return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};