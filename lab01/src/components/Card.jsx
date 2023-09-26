import React from 'react';

function Card(props) {
  return (
    <div style={{ width: '18rem', border: '1px solid #ccc', borderRadius: '5px', overflow: 'hidden' }}>
      {props.children}
    </div>
  );
}

export default Card;
