import React from 'react';

function GenreIcon(prop) {
  const { name } = prop.genre;
  const size = prop.size || 'small';
  return (<div className="genre-container">
    <img className={`genre-icon ${size}`} alt={name} src={`/genre-icons/${name}.png`} />
    <span>{name}</span>
  </div>);
}

export default GenreIcon;
