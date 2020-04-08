import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom";
import {ThemeProvider} from "./context/Theme";
import {DrawerProvider} from "./context/Drawer";
import { ApolloProvider } from '@apollo/react-hooks';
import  ApolloClient from 'apollo-boost';


const client = new ApolloClient({
    uri: 'http://localhost:4000',
});
ReactDOM.render(
    <ApolloProvider client={client}>
        <DrawerProvider>
            <ThemeProvider>
                <Router>
                    <App/>
                </Router>
            </ThemeProvider>
        </DrawerProvider>
    </ApolloProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
