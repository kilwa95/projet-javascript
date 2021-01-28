import Component from '../React/Component.js';
import { React } from '../React/React.js';

class Article extends Component {
	render() {
		const products = this.props.products;
		let templete = products.map((product) => {
			return React.createElement(
				this,
				'ul',
				{ class: 'list-unstyled card card-body w-50' },
				React.createElement(
					this,
					'li',
					{ class: 'media' },
					React.createElement(this, 'img', {
						src: ` ${product.image}`,
						height: '100',
						width: '100',
						class: 'mr-3'
					}),
					React.createElement(
						this,
						'div',
						{ class: 'media-body' },
						React.createElement(this, 'h5', { class: 'mt-0 mb-1' }, ` ${product.category}`),
						React.createElement(this, 'p', null, 'All my girls vintage Chanel baby.')
					)
				)
			);
		});

		return React.createElement(this, 'div', { class: 'container-fluid ' }, ...templete);
	}
}

export default Article;
