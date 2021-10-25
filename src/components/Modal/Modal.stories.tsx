import React from 'react';

import ModalComponent from './Modal';

export default {
    title: 'Modal',
    component: ModalComponent,
};

export const PrimaryComponent: React.VFC<{}> = () => <ModalComponent />;
