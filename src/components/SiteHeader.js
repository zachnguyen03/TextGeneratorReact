import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    return(
        <div className="header">
            <h1>Welcome to React Text Generator, {props.name}</h1>

            <hr />
        </div>
    );
}

Header.propTypes = {
    name: PropTypes.string
};

export default Header;