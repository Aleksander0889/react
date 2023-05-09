import React from "react";
import classeces from '../MyModal.module.css' 

const MyModal = ({children}) => {
    return (
        <div className={[classeces.myModal, classeces.active].join('')}>
            <div className={classeces.myModalContent}>
                {children}
            </div>
        </div>
    )
}
export default MyModal;