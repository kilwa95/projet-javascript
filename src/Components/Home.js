import Component from '../React/Component.js';
import { React } from '../React/React.js';
import Menu from './Menu.js';
import Article from './Article.js';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { products: [], isfetching: false };
	}
	async componentWillMount() {
		const responsse = await fetch('https://fakestoreapi.com/products');
		const resultat = await responsse.json();
		this.setState({ products: resultat, isfetching: true });
	}

	shouldUpdate() {
		const equalProps = JSON.stringify(this.prevProps) === JSON.stringify(this.props);
		const equalState = JSON.stringify(this.prevState) === JSON.stringify(this.state);
		return !equalProps || !equalState;
	}

	render() {
		return React.createElement(
			this,
			'div',
			null,
			React.createElement(this, Menu, null, null),
			React.createElement(
				this,
				Article,
				{ products: this.state.products, isfetching: this.state.isfetching },
				null
			)
		);
	}
}

export default Home;
