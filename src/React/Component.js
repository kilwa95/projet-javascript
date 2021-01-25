class Component {
	constructor() {
		this.id = this.getRandomInt(10000000);
		this.props = {};
		this.state = {};
		this.prevState = {};
		this.prevProps = {};
		this.prevRender = undefined;
	}
	updateDom() {
		var event = new Event('updateReactDom');
		let root = document.getElementById('root');
		root.dispatchEvent(event, this.id);
		console.log(this.id);
	}
	getRandomInt(max) {
		//return Math.floor(Math.random() * Math.floor(max));
		return this.constructor.name;
	}
	print() {
		console.log(this.id, {
			state: JSON.stringify(this.state),
			props: JSON.stringify(this.props)
		});
	}
	setState(newState) {
		this.prevState = this.state;
		this.state = { ...this.prevState, ...newState };
		this.updateDom();
		return this.updateAndGetTemplate();
	}

	display(newProps) {
		this.prevProps = this.props;
		this.props = { ...this.prevProps, ...newProps };
		return this.updateAndGetTemplate();
	}

	updateAndGetTemplate() {
		const shouldUpdate = this.shouldUpdate();
		if (shouldUpdate || !this.prevRender) {
			this.prevRender = this.render();
		}
		return this.prevRender;
	}

	shouldUpdate() {
		const equalProps = JSON.stringify(this.prevProps) === JSON.stringify(this.props);
		const equalState = JSON.stringify(this.prevState) === JSON.stringify(this.state);
		return true;
	}

	render() {
		return;
	}
}

export default Component;
