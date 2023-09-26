import React from 'react';

function Button(props) {
  return (
    <a href={props.href} style={{ display: 'inline-block', padding: '10px 20px', color: '#fff', backgroundColor: '#007bff', textDecoration: 'none', borderRadius: '5px' }}>
      {props.children}
    </a>
  );
}

export default Button;
