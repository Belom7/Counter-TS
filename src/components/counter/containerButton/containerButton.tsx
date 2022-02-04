import React from 'react';
import {Button} from "../../button/Button";
import cl from './ContainerButton.module.css';

type ContainerButtonType = {
    callbackInc:()=>void
    callbackRest:()=>void
    value:number
}

export const ContainerButton = (props:ContainerButtonType) => {

    const Inc = props.callbackInc
    const Rest = props.callbackRest

    return (
        <div className={cl.containerButton}>
            <Button name={'inc'} callback={Inc} disable={props.value > 4}/>
            <Button name={'reset'} callback={Rest} disable={props.value < 1}/>
        </div>
    );
};
