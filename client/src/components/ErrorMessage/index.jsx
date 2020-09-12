import React from 'react';

var ErrorMessage = ({message}) => {
  return (
    <div className="message" style = {{
      width: 0 + 'px',
      height: 100 + '%',
      position: 'relative'
    }}>
      <p style = {{
        position: 'absolute',
        fontSize: 12 + 'px',
        color: 'red',
        left: -300 + 'px',
        top: 30 + 'px',
        width: 500 + 'px'
      }}>{message}</p>
    </div>
  )
}

export default ErrorMessage;