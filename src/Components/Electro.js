import Component from '../React/Component.js';
import { React } from '../React/React.js';
import Menu from './Menu.js';

// import Loading from '../Components/Loading.js';

class Electro extends Component {
    render() {
		return React.createElement(
			this,
			'div',
			null,
			React.createElement(this, Menu, null, null),
			React.createElement(this, 'h1', null, 'Hello Khaled'),

		
		);
}
	
}
export default Electro;
