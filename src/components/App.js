import React from 'react';

import ToggleManager from './../containers/ToggleManager';
import IconManager from '../containers/IconManager';

import './../styles/App.css';

const App = () => (
    <div className="app">
        <ToggleManager name="cheap" />
        <ToggleManager name="fast" />
        <ToggleManager name="good" />

        <IconManager />
    </div>
);

export default App