import Component from '../React/Component.js';
import { React } from '../React/React.js';
import Menu from './Menu.js';

class Cars extends Component {
	constructor(props) {
		super(props);
		this.state = { cars: history.state['cars'], isfetching: false };
	}
}


export default Cars;
