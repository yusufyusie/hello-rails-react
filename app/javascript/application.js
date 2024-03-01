// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import App from '../components/App';

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  );
});