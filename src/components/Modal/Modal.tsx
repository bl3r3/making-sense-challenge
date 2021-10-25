import React, { FC, useState } from 'react';

import Modal from '@mui/material/Modal';

// Styled Components
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ModalContainer from './ModalContainer.styled';
import HeaderModal from './HeaderModal/HeaderModal.styled';
import Form from './Form/Form';
import { HeaderTitle } from './HeaderModal/HeaderTitle.styled';
import { HeaderClose } from './HeaderModal/HeaderClose.styled';

import './modal.css';

const ModalComponent: FC = () => {
    const [modal, setModal] = useState(false);

    const showModal = () => {
        setModal(!modal);
    };

    const body = (
        <div className="modal">
            <ModalContainer>
                <HeaderModal>
                    <HeaderTitle>
                        <h3>Welcome Back</h3>
                    </HeaderTitle>
                    <HeaderClose role="button" onClick={showModal}>
                        <CloseIcon className="icon" />
                    </HeaderClose>
                </HeaderModal>
                <p>Please complete Email and Password</p>
                <Form />
            </ModalContainer>
        </div>
    );

    return (
        <div>
            <Button variant="contained" onClick={showModal}>
                open
            </Button>
            <Modal open={modal} onClose={showModal}>
                {body}
            </Modal>
        </div>
    );
};

export default ModalComponent;
