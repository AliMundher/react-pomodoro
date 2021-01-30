
import React from 'react';

function Circle(props) {

    return (
        <div className="circle" >
            <div className="inner">
                <h2 className="hour_text">
                    {props.time.h > 0 ? props.time.h : "0" + props.time.h}:
                    {props.time.m > 0 ? props.time.m : "0" + props.time.m}:
                    {props.time.s > 0 ? props.time.s : "0" + props.time.s}:
                    {props.time.ms > 0 ? props.time.ms : "0" + props.time.ms}
                </h2>
            </div>
        </div >
    )

}

export default Circle;