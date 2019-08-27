import React from 'react';
import PropTypes from 'prop-types';

import './../styles/IconProject.css';

const IconProject = ({ icon }) => (
    <div className={`icon-project icon-project-${icon}`}>
        <span className="icon">
            { icon }
        </span>
    </div>
);

IconProject.propTypes = {
    icon: PropTypes.string.isRequired
};

export default IconProject;