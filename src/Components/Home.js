import Component from '../React/Component.js';
import { React } from '../React/React.js';
import Menu from './Menu.js';
import Article from './Article.js';
import Electro from './ElectroArticle.js';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { products: [], isfetching: false };
	}
	async getFromLocalStorage(key) {
		let products = JSON.parse(window.localStorage.getItem(key))
		this.setState({ products:  products, isfetching: true });
	}
	async willComponentMount() {
		const responsse = await fetch('https://fakestoreapi.com/products');
		const resultat = await responsse.json();
		window.localStorage.setItem('products', JSON.stringify(resultat));
		this.getFromLocalStorage('products')
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
			React.createElement(this, Menu,{ products: this.state.products, isfetching: this.state.isfetching }, null),
			React.createElement(
				this,
				Article,
				null,
				null
			),
		
		);
		
	}
}

export default Home;
