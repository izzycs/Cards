import React from 'react';

function CardBody(props) {
  return (
    <div style={{ padding: '10px' }}>
      {props.children}
    </div>
  );
}

export default CardBody;
