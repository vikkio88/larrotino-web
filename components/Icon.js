import React from 'react';

export default ({ name, link = false }) => {
    return <img src={`/static/img/icons/${name}.svg`} className={link ? 'clickable' : null} width="20px" />;
};