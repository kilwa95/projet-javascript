import Component from './Component.js';
import { React } from './React.js';

class Menu extends Component {
	affichier() {
		alert();
	}
	render() {
		return React.createElement('div', null, [
			React.createElement(
				'button',
				{
					class: 'btn btn-danger',
					onDblclick: () => this.setState({ name: 'pierre' })
				},
				'Homme'
			),
			React.createElement('h1', { user: { name: this.state.name } }, ' hello {{user.name}}')
		]);
	}
}

export default Menu;
