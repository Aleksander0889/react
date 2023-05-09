import React from "react";
import classeces from './MyModal.module.css' 

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [classeces.myModal]
     if(visible) {
        rootClasses.push(classeces.active);
     } 

    return (
        <div className={rootClasses.join('')}>
            <div className={classeces.myModalContent}>
                {children}
            </div>
        </div>
    )
};

export default MyModal;