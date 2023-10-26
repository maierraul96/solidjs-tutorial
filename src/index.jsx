/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import { Router } from '@solidjs/router';
import { CartContProvider } from './contexts/CartContext';

const root = document.getElementById('root')

render(() => (
    <Router>
      <CartContProvider>
        <App />
      </CartContProvider>
    </Router>
  ), root);