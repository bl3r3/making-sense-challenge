import React from 'react'

import MediaCard from './MediaCard'
import SimpleCard from './SimpleCard'

export default {
    title: 'Card',
    component: MediaCard,
}

export const Mediacard: React.VFC<{}> = () => <MediaCard />

export const Simplecard: React.VFC<{}> = () => <SimpleCard />
