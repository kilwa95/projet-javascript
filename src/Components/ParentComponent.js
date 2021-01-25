import Component from '../React/Component.js';
import { React } from '../React/React.js';
import ChildComponent from './ChildComponent.js';

class ParentComponent extends Component {
	changeColor(color) {
		this.setState({ color });
	}
	render() {
		return React.createElement(
			this,
			'div',
			{ style: 'border: 3px solid grey; padding: 10px;' },
			React.createElement(this, 'h1', this.props, `Parent Component`),
			React.createElement(
				this,
				'button',
				{
					class: 'btn btn-primary',
					style: 'margin: 5px;',
					onClick: () => this.changeColor('Blue')
				},
				'Blue'
			),
			React.createElement(
				this,
				'button',
				{
					class: 'btn btn-danger',
					onClick: () => this.changeColor('Red')
				},
				'Red'
			),
			React.createElement(this, ChildComponent, { color: this.state.color }, null)
		);
	}
}

export default ParentComponent;
