import ReactDom from 'react-dom';
import React from 'react';
import Menu from './components/menu/menu.jsx';

const el = <Menu />;

ReactDom.render(
  el,
  document.getElementById('root')
);
