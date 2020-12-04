import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addNewMemberName, updateNewMemberName } from './state.js';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <>
      <BrowserRouter >
        <App state={state} updateNewMemberName={updateNewMemberName} addNewMemberName={addNewMemberName} />
      </BrowserRouter>
    </>,
    document.getElementById('root')
  );
};




