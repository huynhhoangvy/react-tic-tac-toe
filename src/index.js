import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const Square = ({onClick, value}) => 
<button className="square" onClick={onClick}>
        {value}
    </button>

class Board extends React.Component {
    constructor ( props ){
        super( props )
        this.state = {
            squares: Array( 9 ).fill( null ),
            isXNext: true,
        }
    }
    
    handleClick( i ) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
          }
        squares[i] = this.state.isXNext ? "X" : "O";
        this.setState({ squares: squares, isXNext: !this.state.isXNext })
    }
    
    renderSquare( i ) {
        return (
            <Square 
            value={this.state.squares[i]} 
            onClick={() => this.handleClick(i)}
            />
        )
    }
    
    render() {
        const status = 'Next player: ' + (this.state.isXNext ? "X" : "O");
        console.log(this.state)
        
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    </div>
            </div>
      );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
        <div className="game-board">
            <Board />
        </div>
        <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
        </div>
        </div>
      );
    }
}

// ========================================

ReactDOM.render( <Game />, document.getElementById('root') );

function calculateWinner(squares) {
    const winCases = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for (let i = 0; i < winCases.length; i++) {
        const [a,b,c] = winCases[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return false    
}

    // class Square extends React.Component {
    //     render() {
    //       return (
    //         <button 
    //         className="square" 
    //         onClick={() => this.props.onClick()}
    //         >
    //           {this.props.value}
    //         </button>
    //       );
    //     }
    //   }
    
    // function Square(props) {
    //     return (
    //         <button className="square" onClick={props.onClick}>
    //             {props.value}
    //         </button>
    //     )
    // }
  