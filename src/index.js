/**
 * Created by yang on 2017/12/21.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let classNames = require('classnames');


// React 中的无状态函数组件
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squares: new Array(9).fill(null),
            xIsNext: true,
        };
    }
    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>;
    }

    handleClick(i){

        console.log(classNames('foo', {bar: true}));


        // React 官方建议不改变原始的数据指针
        const squares = this.state.squares.slice();






        /*
        * 1. squares[i] 已经被点击过的 squares 数组里面，会被填充一个 'X' 或者 'O'，
        *    squares[i] = 'X' 或者 'O'，默认的 squares[i] = null;
        *
        * 2. 通过 calculateWinner 函数 如果有人已经获胜，也会 return
        * */
        if (squares[i] || calculateWinner(squares)){
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        })
    }

    render() {
        // const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

        let titleClass = classNames('status', {'winner': false});

        const winner = calculateWinner(this.state.squares);
        let status;

        if(winner){
            status = 'Winner: ' + winner;
            titleClass = classNames('status', {'winner': true});
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className={titleClass}>{status}</div>
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

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);


// 计算哪一个是最后的胜利者

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
