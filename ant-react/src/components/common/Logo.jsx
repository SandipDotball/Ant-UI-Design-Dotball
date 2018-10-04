import React from 'react';

function Logo(props) {
    return (
        <div className="sidebar__logo">
            <a href="https://dotball.com">
                <img src={props.logo} alt="" />
            </a>
        </div>
    );
}

export default Logo;
