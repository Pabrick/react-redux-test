import React from 'react';

import ProjectManager from './ProjectManager';
import ToggleManager from './../containers/ToggleManager';

const App = () => (
    <div>
        <ProjectManager />
        <ToggleManager name="Cheap" />
    </div>
);

export default App