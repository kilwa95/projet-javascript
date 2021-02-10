import Component from '../React/Component.js';
import { React } from '../React/React.js';
import Menu from './Menu.js';
import Article from './Article.js';
import Electro from './ElectroArticle.js';
import CommentArticle from './CommentArticle.js';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { products: [], comments: [], isfetching: false };
	}
	async getFromLocalStorage(key) {
		let products = JSON.parse(window.localStorage.getItem(key));
		let comments = JSON.parse(window.localStorage.getItem(key));

		this.setState({ products: products, comments: comments, isfetching: true });
	}
	async willComponentMount() {
		/*
		const responsse = await fetch('https://fakestoreapi.com/products');
		const resultat = await responsse.json();
		window.localStorage.setItem('products', JSON.stringify(resultat));
		this.getFromLocalStorage('products');
		*/
		
		try {
			let [responseProducts, responseComments] = await Promise.all([
				fetch("https://fakestoreapi.com/products"),
				fetch("https://jsonplaceholder.typicode.com/comments")
			]);
			
			const resultProducts = await responseProducts.json();
			const resultComments = await responseComments.json();

			//console.log("resultComments >> "+resultComments+"<< resultComments");
			//console.log("resultProducts >> "+resultProducts+"<< resultProducts");

			window.localStorage.setItem('products', JSON.stringify(resultProducts));
			this.getFromLocalStorage('products');
			window.localStorage.setItem('comments', JSON.stringify(resultComments));
			this.getFromLocalStorage('comments');
		}
		catch(err) {
			console.log(err);
		};

		/*
		const rep = await fetch('https://jsonplaceholder.typicode.com/comments');
		const res = await rep.json();
		window.localStorage.setItem('comments', JSON.stringify(res));
		this.getFromLocalStorage('comments');
		*/
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
			React.createElement(this, Menu, { products: this.state.products, comments: this.state.comments, isfetching: this.state.isfetching }, null),
			React.createElement(
				this,
				Article,
				CommentArticle,
				{ products: this.state.products, comments: this.state.comments, isfetching: this.state.isfetching },
				//{ products: this.state.products, isfetching: this.state.isfetching },
				//{ comments: this.state.comments, isfetching: this.state.isfetching },
				null
			)
		);
	}
}

export default Home;
