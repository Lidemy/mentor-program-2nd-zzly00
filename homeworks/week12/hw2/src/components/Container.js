import React from 'react'
import Col from './Col'
import Square from './Square'
import StartBtn from './StartBtn'
import Cover from './Cover'

export default class Container extends React.Component {
  constructor(props) {
    super(props)
    this.cols = Array(19).fill([])
    this.state = {
      squares: this.cols.map(n => Array(19).fill(null)),      
      whiteIsNext: true,
      gameHistory: []
    }
  }

  changeNext(rIndex, cIndex) {
    const {squares, whiteIsNext, gameHistory} = this.state
    if(squares[rIndex][cIndex] === null) {
      squares[rIndex][cIndex] = whiteIsNext ? <div className="piece"></div> : <div className="piece piece--black"></div>;
      const position = whiteIsNext ? {position: rIndex*19+cIndex, pieceColor: 'white'} : {position: rIndex*19+cIndex, pieceColor: 'black'}

      this.setState({
        squares: squares,
        whiteIsNext: !whiteIsNext,
        gameHistory: [...gameHistory, position]
      });
    }
    else return
  }

  renderSquare(rIndex, cIndex) {
    return (
      <Square key={rIndex+''+cIndex} value={this.state.squares[rIndex][cIndex]} onClick={() => this.changeNext(rIndex, cIndex)} />
    );
  }

  restartGame() {
    this.setState({
      squares: this.cols.map(n => Array(19).fill(null)),      
      whiteIsNext: true,
      gameHistory: []
    })
  }

  render() {
    const {squares, whiteIsNext, gameHistory} = this.state
    const piece = pieceHistory(gameHistory[gameHistory.length-1])

    return (
      <div className="game">
        <div className="game__info">
          <h1>{piece ? piece : '開始遊戲，白棋下'}</h1>
          {(piece === '白棋贏' || piece ==='黑棋贏') && <StartBtn restartGame={this.restartGame.bind(this)} />}
        </div>
        <div className="checkerboard">
          {squares.map((n, index) => <Col key={index} cIndex={index} squares={squares} whiteIsNext={whiteIsNext} changeNext={this.changeNext.bind(this)} renderSquare={this.renderSquare.bind(this)} />)}
          {(piece === '白棋贏' || piece ==='黑棋贏') && <Cover />}
        </div> 
      </div>
    )
  }
}

let white = [], black = []
function pieceHistory(piece) {
  if(piece && piece.pieceColor === 'white') {
    white.push(piece.position)
    white.sort((a,b) => a-b)
    const winner = calculateWinner(white)

    return winner ? '白棋贏' : '輪到黑棋'
  }
  else if(piece) {
    black.push(piece.position)
    black.sort((a,b) => a-b)
    const winner = calculateWinner(black)
    return winner ? '黑棋贏' : '輪到白棋'
  }
}

function calculateWinner(position) {
  for(let i=0; i<position.length; i++) {
    if(position.indexOf(position[i]+1)>0 && position.indexOf(position[i]+2)>0 && position.indexOf(position[i]+3)>0 && position.indexOf(position[i]+4)>0) {
      white = [], black = []
      return true
    }else if(position.indexOf(position[i]+1*19)>0 && position.indexOf(position[i]+2*19)>0 && position.indexOf(position[i]+3*19)>0 && position.indexOf(position[i]+4*19)>0) {
      white = [], black = []
      return true
    }else if(position.indexOf(position[i]+1*19+1)>0 && position.indexOf(position[i]+2*19+2)>0 && position.indexOf(position[i]+3*19+3)>0 && position.indexOf(position[i]+4*19+4)>0) {
      white = [], black = []
      return true
    }else if(position.indexOf(position[i]+1*19-1)>0 && position.indexOf(position[i]+2*19-2)>0 && position.indexOf(position[i]+3*19-3)>0 && position.indexOf(position[i]+4*19-4)>0) {
      white = [], black = []
      return true
    }
  }
  return false
}