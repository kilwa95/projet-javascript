import Component from '../React/Component.js';
import { React } from '../React/React.js';
import Electro from './ElectroArticle.js';
import Article from './Article.js';



class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = { routes: '' };
	}
	pushRoute(name, url) {
		history.pushState({ products: this.props.products}, name, url);
		this.setState({ routes: url });
		console.log(window.history.state);
	}
	render() {
		return React.createElement(
			this,
			'nav',
			{ class: 'navbar navbar-expand-lg navbar-light bg-danger mb-5' },
			React.createElement(
				this,
				'div',
				{ class: 'container-fluid' },
				React.createElement(this, 'a', { class: 'navbar-brand text-white' }, 'Amazone'),
				React.createElement(
					this,
					'button',
					{ class: 'navbar-toggler', type: 'button' },
					React.createElement(this, 'span', { class: 'navbar-toggler-icon' })
				),
				React.createElement(
					this,
					'div',
					{ class: 'collapse navbar-collapse' },
					React.createElement(
						this,
						'div',
						{ class: 'navbar-nav' },
						React.createElement(
							this,
							'a',
							{
								class: 'nav-link active text-white',
								onClick: () => this.pushRoute( 'Produits', '/' ),
								role: 'button'
							},
							'Produits'
						),
						React.createElement(
							this,
							'a',
							{
								class: 'nav-link text-white',
								onClick: () => this.pushRoute('Electro', 'electro'),
								role: 'button'
							},
							'Electronique'
						),
						React.createElement(
							this,
							'a',
							{
								class: 'nav-link  text-white',
								onClick: () => this.pushRoute('Sports', '/jeux'),
								role: 'button'
							},
							'jeux'
						)
					)
				)
			)
		);
	}
}

export default Menu;
