import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';

// Add this import:
import { AppContainer } from 'react-hot-loader';

// Wrap the rendering in a function:
const render = Component => {
    ReactDOM.render(
      <AppContainer>
        <Component />
      </AppContainer>,
      document.getElementById('root')
    );
  };
  
render(Root);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./Root', () => {
      render(Root);
    });
  }


