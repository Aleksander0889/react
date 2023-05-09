import React from "react";
import classes from '../../components/button/MyButton.module.css'

const MyButton:React.FC<{children:any}> = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );

};
export default MyButton;