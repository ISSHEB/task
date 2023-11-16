import React from 'react'
import './cartInfo.css'
const CartInfo = ({ info, age, description, email, phone, name, openModal, picture }) => {;
    return (

        <div className='card' onClick={() => openModal(info)}>
            <img className='card_photo' src={picture} alt />
            <div className='card_div'>
                <p><b>Name:</b> {name}</p>
                <p><b>email:</b> {email}</p>
            </div>
            
        </div>

    )
}

export default CartInfo
