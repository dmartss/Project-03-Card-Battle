import React from 'react';
import { render } from 'react-dom';
import { configureStore } from './configureStore';
import Root from './Root';
import './theme/global';

const store = configureStore();

render(<Root store={store} />, document.querySelector('#root'));
