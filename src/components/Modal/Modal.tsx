import React, { FC, useState, useCallback } from 'react';

import Modal from '@mui/material/Modal';

// Styled Components
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ModalContainer from './ModalContainer.styled';
import HeaderModal from './HeaderModal/HeaderModal.styled';
import Form from './Form/Form';
import { HeaderTitle } from './HeaderModal/HeaderTitle.styled';
import { HeaderClose } from './HeaderModal/HeaderClose.styled';
import { Modal as Main } from './Modal.styled';

import { Close } from './HeaderModal/Close.styled';

const ModalComponent: FC = () => {
    const [modal, setModal] = useState(false);

    const showModal = useCallback(() => {
        setModal((prevState) => !prevState);
    }, [setModal]);

    return (
        <div>
            <Button variant="contained" onClick={showModal}>
                open
            </Button>
            <Modal open={modal} onClose={showModal}>
                <Main>
                    <ModalContainer>
                        <HeaderModal>
                            <HeaderTitle>
                                <h3>Welcome Back</h3>
                            </HeaderTitle>
                            <HeaderClose role="button" onClick={showModal}>
                                <Close>
                                    <CloseIcon />
                                </Close>
                            </HeaderClose>
                        </HeaderModal>
                        <p>Please complete Email and Password</p>
                        <Form />
                    </ModalContainer>
                </Main>
            </Modal>
        </div>
    );
};

export default ModalComponent;
