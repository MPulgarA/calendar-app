import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const CalendarModal = () => {


    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        console.log('Cerrando')
        setIsOpen(false);
    }

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
                closeTimeoutMS={200}
                className="modal"
                overlayClassName="modal-fondo"
            >
                <h2>Hello</h2>
            </Modal>
        </div>
    )
}

export default CalendarModal;