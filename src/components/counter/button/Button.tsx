import React from "react";
import cl from './Button.module.css'

type ButtonType = {
    name: string
    callback: () => void
    disable?: boolean
}


export const Button: React.FC<ButtonType> = (props) => {

    const onClickHandler = () => props.callback();

    return (
        <div className={cl.button}>
            <button className={props.disable ? cl.button_disable : cl.button_anable} disabled={props.disable}
                    onClick={onClickHandler}>
                {props.name}
            </button>
        </div>
    )
}