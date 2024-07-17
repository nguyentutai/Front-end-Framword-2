import { ReactNode, createContext, useReducer } from "react";
import { ICategory } from '../interfaces/ICategory';
import CategorysReducer from "../reducer/CategorysReducer";


interface Props {
    children:ReactNode
}

export const CategorysContext = createContext( {} as {
    categorys:ICategory[],
    dispatch:any
})

const CategorysProvider=(props:Props)=>{

    const [categorys, dispatch] = useReducer(CategorysReducer, [] as ICategory[])
    return (
        <CategorysContext.Provider value={{categorys,dispatch}}>
            {props.children}
        </CategorysContext.Provider>
    )
}

export default CategorysProvider

