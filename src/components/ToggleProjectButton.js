import React from 'react';
import PropTypes from 'prop-types';

import './../styles/ToggleProjectButton.css';


const ToggleProjectButton = ({ name, value, onClick }) => (
    <div className={
        `toggle-project-button
         toggle-project-button-${name}
        ${value ? 'toggle-project-button-' + name + '--enabled': 'toggle-project-button-' + name + '--disabled'}`
    }>
        <button onClick={ onClick }>
            { name }
        </button>
    </div>
);

ToggleProjectButton.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default ToggleProjectButton;