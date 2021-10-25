import React from 'react';

import MediaCard from '../components/Card/MediaCard';
import SimpleCard from '../components/Card/SimpleCard';

export default {
    title: 'Card',
    component: MediaCard,
};

export const Mediacard: React.VFC = () => (
    <MediaCard
        contentParagraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
eiusmod tempor`}
        link1="ACTION 1"
        link2="ACTION 2"
    />
);

export const Simplecard: React.VFC = () => (
    <SimpleCard
        contentParagraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
eiusmod tempor`}
        link1="ACTION 1"
        link2="ACTION 2"
    />
);
