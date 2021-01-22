import Component from './Component';
import { React } from './React';
import Menu from './Menu';

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
