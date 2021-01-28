import Component from '../React/Component.js';
import { React } from '../React/React.js';
import Menu from './Menu.js';
import Article from './Article.js';

// 8d438c7c57e0493ab615d641bd18d6b5

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { products: [], isfetching: true };
	}
	async componentWillMount() {
		const responsse = await fetch('https://fakestoreapi.com/products');
		const resultat = await responsse.json();
		this.setState({ products: resultat, isfetching: false });
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
			React.createElement(this, Article, { products: this.state.products }, null)
		);
	}
}

export default Home;
