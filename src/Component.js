class Component {
	state = {};
	constructor(props) {
		this.props = props;
	}
	display(props) {
		//...
		return this.render();
	}
	render() {
		return;
	}
}

export default Component;
