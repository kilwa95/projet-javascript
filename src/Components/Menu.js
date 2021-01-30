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
			{ class: 'navbar navbar-expand-lg navbar-light bg-danger mb-5' },
			React.createElement(
				this,
				'div',
				{ class: 'container-fluid' },
				React.createElement(this, 'a', { class: 'navbar-brand text-white' }, 'Amazone'),
				React.createElement(
					this,
					'button',
					{ class: 'navbar-toggler', type: 'button' },
					React.createElement(this, 'span', { class: 'navbar-toggler-icon' })
				),
				React.createElement(
					this,
					'div',
					{ class: 'collapse navbar-collapse' },
					React.createElement(
						this,
						'div',
						{ class: 'navbar-nav' },
						React.createElement(this, 'a', { class: 'nav-link active text-white' }, 'Homme'),
						React.createElement(this, 'a', { class: 'nav-link text-white' }, 'Features'),
						React.createElement(this, 'a', { class: 'nav-link  text-white' }, 'Pricing')
					)
				)
			)
		);
	}
}

export default Menu;
