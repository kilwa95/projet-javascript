import _ from 'lodash';

class Component {
	constructor(props) {
		this.props = props;
		this.state = {};
		this.prevState = {};
		this.prevProps = {};
		this.prevRender = undefined;
	}

	setState(newSate) {
		this.prevState = this.state;
		this.state = newSate;
	}

	display(props) {
		this.prevProps = this.props;
		this.props = props;
		const shouldUpdate = this.shouldUpdate();
		if (shouldUpdate || !this.prevRender) {
			this.prevRender = this.render();
		}
		return this.prevRender;
	}

	shouldUpdate() {
		const equalProps = _.isEqual(this.prevProps, this.props);
		return !equalProps;
	}

	render() {
		return;
	}
}
export default Component;
