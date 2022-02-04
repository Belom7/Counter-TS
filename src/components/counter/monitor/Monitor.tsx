import React from "react";
import cl from './Monitor.module.css'

type MonitorType = {
    value:number
}

export const Monitor:React.FC<MonitorType> = (props) => {
    return(
        <div className={cl.monitor}>
            <div className={props.value>4? cl.max: '' }>{props.value}</div>
        </div>
    )
}