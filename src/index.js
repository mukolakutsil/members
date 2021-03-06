import ReactDOM from 'react-dom';
import store from './store';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <>
            <BrowserRouter >
                <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
            </BrowserRouter>
        </>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

