import Component from '../React/Component.js';
import { React } from '../React/React.js';
import Menu from './Menu.js';
import ElectroArticle from './ElectroArticle.js';

class Electro extends Component {
	constructor(props) {
		super(props);
		this.state = { products: history.state['products'], comments: history.state['comments'], isfetching: false };
	}

	render() {
		return React.createElement(
			this,
			'div',
			null,
			React.createElement(this, Menu, this.state, null),
			React.createElement(
				this,
				ElectroArticle,
				null,
				null
			),
		
		);
		
	}
}

export default Electro;
