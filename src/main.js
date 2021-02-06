import { ReactDOM, React } from './React/React.js';
import App from './Components/App.js';

let event = new Event('updateReactDom');
let root = document.getElementById('root');

root.addEventListener('updateReactDom', (e) => {
	root.innerHTML = '';
	ReactDOM.render(React.createElement({ id: 'root' }, App, null, null), root);
});
root.dispatchEvent(event);
