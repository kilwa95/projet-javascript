import { ReactDOM } from './src/React';
import HelloWorld from './src/HelloWorld';

console.log(HelloWorld);

ReactDOM.render(React.createElement(HelloWorld, null, null), document.getElementById('root'));
