import Component from '../React/Component.js';
import { React } from '../React/React.js';
import ParentComponent from './ParentComponent.js';
const log = console.log;

class App extends Component {
	render() {
		return React.createElement(this, ParentComponent, null, null);
	}
}

export default App;
