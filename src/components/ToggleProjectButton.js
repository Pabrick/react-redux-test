import React from 'react';
import PropTypes from 'prop-types';

const ToggleProjectButton = ({ name, value }) => (
    <div>
        <button onClick={()=>{ console.log(value)}}>
            { name }
        </button>
    </div>
);

ToggleProjectButton.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired
};

export default ToggleProjectButton;