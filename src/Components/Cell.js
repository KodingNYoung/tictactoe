import React from 'react'

const Cell = ({showStatus, value, disabled}) => {
  return (
    <button 
    className="cell"
    onClick= {showStatus}
    disabled={disabled}
    >
      {value}
    </button>
  );
}
  
// .bind(this.props.value)
export default Cell
