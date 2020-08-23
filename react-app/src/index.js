import React from 'react';
import ReactDOM from 'react-dom';
import 'react-resizable/css/styles.css';
import './index.css';
import App from './App';

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}


if (!window.__POWERED_BY_QIANKUN__) {
  render()
  console.log(process.env, '-------');
}

export async function bootstrap() { }
export async function mount() {
  render()
}
export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}

