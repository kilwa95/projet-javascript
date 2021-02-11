import Component from '../React/Component.js';
import { React } from '../React/React.js';
import Menu from './Menu.js';
import Article from './Article.js';
import CommentArticle from './CommentArticle.js';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { products: [], comments: [], isfetching: false };
	}
	async getFromLocalStorage() {
		let products = JSON.parse(window.localStorage.getItem('products'));
		let cars = JSON.parse(window.localStorage.getItem('cars'));
		let comments = JSON.parse(window.localStorage.getItem('comments'));

		this.setState({ products: products, comments: comments, isfetching: true });
	}
	async willComponentMount() {
		
		try {
			let [responseProducts, responseCars, responseComments] = await Promise.all([
				fetch("https://fakestoreapi.com/products"),
				fetch("https://private-anon-d4f6e4b1f0-carsapi1.apiary-mock.com/manufacturers"),
				fetch("https://jsonplaceholder.typicode.com/comments")
			]);
			
			const resultProducts = await responseProducts.json();
			const resultCars = await responseCars.json();
			const resultComments = await responseComments.json();

			window.localStorage.setItem('products', JSON.stringify(resultProducts));
			window.localStorage.setItem('cars', JSON.stringify(resultCars));
			window.localStorage.setItem('comments', JSON.stringify(resultComments));
			this.getFromLocalStorage();
		}
		catch(err) {
			console.log(err);
		};
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
			React.createElement(this, Menu, { products: this.state.products, cars: this.state.cars, comments: this.state.comments, isfetching: this.state.isfetching }, null),
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
