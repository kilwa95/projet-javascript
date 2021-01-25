import Component from '../React/Component.js';
import { React } from '../React/React.js';
import Menu from './Menu.js';

class Home extends Component {
	render() {
		return React.createElement(this, Menu, null, null);
	}
}

export default Home;
