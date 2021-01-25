import Component from '../React/Component.js';
import { React } from '../React/React.js';

class Menu extends Component {
	pushRoute(name, url) {
		history.pushState({ id: '5' }, name, url);
		console.log(window.history.state);
	}
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
					{ class: 'navbar-brand', onClick: () => this.pushRoute('sport', '/sport') },
					React.createElement(this, 'span', { class: 'navbar-brand mb-0 h1 text-white' }, 'HomePage')
				)
			)
		);
	}
}

export default Menu;
