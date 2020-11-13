import React from 'react';
import ReactDOM from 'react-dom';
import '~/h1.css';

type AppProps = {
    message: string
};

function App({message}: AppProps) {
    return <h1>Hello {message}!</h1>
}

ReactDOM.render(
    <App message="ANZx" />,
    document.getElementById('root')
);