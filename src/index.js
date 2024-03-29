import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './context/FirebaseContext';
import firebase from './Firebase/config'
import Context from './context/FirebaseContext'

ReactDOM.render(

    <FirebaseContext.Provider value={{firebase}} >
        <Context>
            <App />
        </Context>
    </FirebaseContext.Provider>
, document.getElementById('root'));
