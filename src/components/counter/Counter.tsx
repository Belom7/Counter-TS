import {Monitor} from "./monitor/Monitor";
import {Button} from "./button/Button";
import {useState} from "react";
import cl from './Counter.module.css'

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5

export const Counter = () => {
    const [value, setValue] = useState<ValueType>(0)

    const Inc = () => {if (value < 5) setValue((value+1) as ValueType)}
    const Rest = () => {setValue(0)}

    return (
        <div className={cl.counterContainer}>

                <Monitor value={value}/>

            <div className={cl.containerButton}>
                <Button name={'inc'} callback={Inc} disable={value>4}/>
                <Button name={'reset'} callback={Rest} disable={value<1}/>
            </div>
        </div>
    )
}