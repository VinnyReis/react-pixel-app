import React from 'react';
import ReactDOM from 'react-dom/client';
import Editor from './components/Editor';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Editor />
  </React.StrictMode>
);