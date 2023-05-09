import React from 'react';
import MyButton from '../../components/button/MyButton';
import classeces from './CardUser.module.css'

const CardUser = (props) => {
    return (
        <div className={classeces.card}>
            <div className='card_content'>
                props
                <div>
                By
            </div>
            <div>
            <MyButton>Удалить</MyButton>
            </div>
        </div>
                    
        </div>
    );
};

export default CardUser;