import React from 'react'

const StartBtn = (props) => {
  return (
    <button className="restart" onClick={props.restartGame}>開始遊戲</button>
  )
}

export default StartBtn