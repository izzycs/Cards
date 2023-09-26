import React from 'react';

function CardImage(props) {
  return (
    <img src={props.src} alt="" style={{ width: '100%' }} />
  );
}

export default CardImage;
