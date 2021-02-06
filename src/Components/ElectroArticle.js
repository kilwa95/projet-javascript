import Component from '../React/Component.js';
import { React } from '../React/React.js';
import Menu from './Menu.js';
import Electro from './Electro.js';

class ElectroArticle extends Component {
	constructor(props) {
		super(props);
		this.state = { products: history.state['products'], isfetching: false };
	}

	render() {
		return React.createElement(
			this,
			'div',
			null,
			React.createElement(this, Menu, this.state, null),
			React.createElement(
				this,
				Electro,
				null,
				null
			),
		
		);
		
	}
}

export default ElectroArticle;
