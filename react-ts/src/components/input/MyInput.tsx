import React, { PropsWithChildren } from "react";
import classes from '../input/MyInput.module.css';

const MyInput = React.forwardRef((props, ref) => {
    
    return (
        <input   className={classes.myInput} {...props}>

        </input>
    )

})

export default MyInput;

function useRef<T>(arg0: null) {
    throw new Error("Function not implemented.");
}
