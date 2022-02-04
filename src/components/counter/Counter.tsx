import {Monitor} from "./monitor/Monitor";
import {useState} from "react";
import cl from './Counter.module.css'
import {ContainerButton} from "./containerButton/containerButton";

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5

export const Counter = () => {
    const [value, setValue] = useState<ValueType>(0)

    const Inc = () => {
        if (value < 5) setValue((value + 1) as ValueType)
    }
    const Rest = () => {
        setValue(0)
    }

    return (
        <div className={cl.counterContainer}>
            <Monitor value={value}/>
            <ContainerButton callbackInc={Inc} callbackRest={Rest} value={value}/>
        </div>
    )
}