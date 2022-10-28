import { hot } from 'react-hot-loader/root';
import React from 'react';
import Counter from './components/Counter';
import './styles.css';

const App = () => (
  <div className="wrapper">
    <Counter />
  </div>
);

export default hot(App);
