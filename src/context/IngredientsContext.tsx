'use client';
import { IIngredients } from '@/types/common';
import { useState, createContext, Dispatch, SetStateAction, useMemo, Children } from 'react';
//type TypeSetState<T> = Dispatch<SetStateAction<T>>;
interface IContext {
    ingredientHistory: IIngredients[];
    setIngredientHistory: Dispatch<SetStateAction<IIngredients[]>>;
}
export const IngredientsContext = createContext<IContext>({
    ingredientHistory: [],
    setIngredientHistory: () => {},
});

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
    const [ingredientHistory, setIngredientHistory] = useState<IIngredients[]>([]);
    const value = useMemo(
        () => ({ ingredientHistory, setIngredientHistory }),
        [ingredientHistory, setIngredientHistory],
    );

    return <IngredientsContext.Provider value={value}>{children}</IngredientsContext.Provider>;
};
