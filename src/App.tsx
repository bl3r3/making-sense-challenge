import React, { FC } from 'react';

import MediaCard from './components/Card/MediaCard';
import SimpleCard from './components/Card/SimpleCard';
import Modal from './components/Modal/Modal';

import './App.css';

const App: FC = () => (
    <div className="app">
        <div className="title">
            <h1>Organism</h1>
        </div>

        <div className="content">
            <div className="media-card">
                <h3>Media Card</h3>
                <MediaCard
                    contentParagraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                    eiusmod tempor`}
                    link1="ACTION 1"
                    link2="ACTION 2"
                />
            </div>
            <div className="simple-card">
                <h3>Simple Card</h3>
                <SimpleCard
                    contentParagraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                    eiusmod tempor`}
                    link1="ACTION 1"
                    link2="ACTION 2"
                />
            </div>
            <div className="modal-app">
                <h3>Modal</h3>
                <p>Click for open modal</p>
                <Modal />
            </div>
        </div>
    </div>
);

export default App;
