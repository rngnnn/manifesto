import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App'; // Named export olduğu için süslü parantez kullanıyoruz
import './styles/style.css'; // Eğer bir CSS dosyanız varsa

ReactDOM.render(<App />, document.getElementById('root'));