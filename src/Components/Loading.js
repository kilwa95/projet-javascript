import Component from '../React/Component.js';
import { React } from '../React/React.js';

class Loading extends Component {
	render() {
		return React.createElement(
			this,
			'div',
			{ class: 'd-flex justify-content-center' },
			React.createElement(
				this,
				'div',
				{ class: 'spinner-border', role: 'status' },
				React.createElement(this, 'span', { class: 'sr-only' })
			)
		);
	}
}

export default Loading;
