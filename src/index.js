import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Comment from './Comment';
import registerServiceWorker from './registerServiceWorker';
import CommentApp from "./CommentApp";

ReactDOM.render(<CommentApp />, document.getElementById('root'));
registerServiceWorker();
