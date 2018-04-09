import React from 'react';

const charComponent = (props) => {
  const style = {
    padding : '12px 0',
    textAlign: 'center',
    margin: '0 10px',
    border: '1px solid black',
    width: '45px',
    height: '44px'
  };

  return <li style={style} onClick={props.click} >{props.char}</li>
};

export default charComponent;
