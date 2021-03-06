import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from 'react-testing-library';
import App from './App';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
