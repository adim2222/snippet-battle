import ReactDOM from 'react-dom/client';
import codeExchange from './Hooks/codeExchange';
import './index.css';
import App from './App';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// global checks
if (urlParams.get('code')) {
  codeExchange(urlParams);
}