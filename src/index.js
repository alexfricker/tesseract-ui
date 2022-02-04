import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class UserProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: ''};
    }

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search)

        let token = query.get('token')
        let uid = query.get('uid')
        console.log(token) // take this out in prod...
        console.log(uid)

        if(token){  // it's the first time we receive the token
            // we save it
            console.log('Saving token');
            localStorage.setItem('userjwt', token);
            localStorage.setItem('uid', uid)
            this.state.username = token
        }
        else{
            // if qrstring is empty we load the token from storage
            token = localStorage.userjwt;
            uid = localStorage.uid;
            console.log('Loading token: ' + token);
        }

        if(token){
            const headers = new Headers({
                'x-access-token': token
            });

            const reqOptions = {
                method: 'GET',
                headers: headers
            };

            fetch('https://api-dev-mde.apps.tst.openshift-stg-ext.aws.myriad.com/users/' + localStorage.uid, reqOptions)
                .then(res => console.log(res.json()))
        }
    }
    render(){
        if(this.state.username === ''){
            return(
                <div className="social-profile">
                    <h2>Login first</h2>
                </div>
            );
        }
        else{
            return(
                <div className="social-profile">
                    <h2>User: {this.state.username}</h2>
                </div>
            );
        }
    }
}

class Square extends React.Component {
    render() {
        return (
            <button className="square">
                {/* TODO */}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square />;
    }

    render() {
        const status = 'Next player: X';

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
    renderUserProfile() {
        return <UserProfile />;
    }
    render() {
        return (
            <div className="game">
                {this.renderUserProfile()}
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
