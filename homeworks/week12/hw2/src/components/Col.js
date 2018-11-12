import React from 'react'

const Col = (props) => {
  const {squares, cIndex, renderSquare} = props
    return (
      <div className="col">
        {squares.map((n, index) => renderSquare(index, cIndex))}
      </div>    
    )
}

export default Col