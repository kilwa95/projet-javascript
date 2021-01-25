import Component from '../React/Component.js';
import { React } from '../React/React.js';

class ChildComponent extends Component {
	render() {
		return React.createElement(
			this,
			'div',
			{ style: `border: 3px solid ${this.props.color}; padding: 10px;` },
			React.createElement(this, 'h1', this.props, `Child Component`),
			React.createElement(this, 'h2', null, 'Props: ' + JSON.stringify(this.props))
		);
	}
}

export default ChildComponent;
