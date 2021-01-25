import Component from '../React/Component.js';
import { React } from '../React/React.js';

class Menu extends Component {
	render() {
		return React.createElement(
			this,
			'nav',
			{ class: 'navbar navbar-light bg-dark' },
			React.createElement(
				this,
				'div',
				{ class: 'container-fluid' },
				React.createElement(
					this,
					'a',
					{ class: 'navbar-brand', href: '/sport' },
					React.createElement(this, 'span', { class: 'navbar-brand mb-0 h1 text-white' }, 'HomePage')
				)
			)
		);
	}
}

export default Menu;
