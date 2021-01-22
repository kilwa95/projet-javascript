import Component from './Component.js';
import { React } from './React.js';
import Menu from './Menu.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return React.createElement(new Menu(), null);
	}
}
export default App;
