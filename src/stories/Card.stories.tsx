import React from 'react';

import MediaCard from '../components/Card/MediaCard';
import SimpleCard from '../components/Card/SimpleCard';

export default {
    title: 'Card',
    component: MediaCard,
};

export const Mediacard: React.VFC<{}> = () => <MediaCard />;

export const Simplecard: React.VFC<{}> = () => <SimpleCard />;
