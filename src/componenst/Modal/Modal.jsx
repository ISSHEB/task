import './Modal.css'

const Modal = ({ selectedObject, closeModal, phone, id, name, about, age, email, picture, ...Item }) => {

    return (
        <div className="modal_block" key={id}>
            <div className="modal_block_row">
                <div className='dd'><img className="modal_block_row_icon" src='./img/ButtonClose.svg' onClick={closeModal} /></div>

                <img className="modal_block_row_photo" src={picture} alt />
                <div className="modal_block_row_div">
                    <p className='modal_block_row_div_text'><b>Name:</b> {name}</p>
                    <p className='modal_block_row_div_text'><b>Age:</b> {age}</p>
                    <p className='modal_block_row_div_text'><b>email:</b> {email}</p>
                    <p className='modal_block_row_div_text'><b>phone:</b> {phone}</p>
                    <p className='modal_block_row_div_text'><b>about:</b> {about}</p>
                </div>
                
                
            </div>
        </div>
    );
};
export default Modal