import Component from '../React/Component.js';
import { React } from '../React/React.js';

class CommentArticle extends Component {
	render() {
		const comments = history.state['comments'];
		let templete = comments.map((comment) => {
			return React.createElement(
				this,
				'ul',
			{ class: 'list-unstyled card card-body '},
				React.createElement(
					this,
					'li',
					{ class: 'media' },
					React.createElement(
						this,
						'div',
						{ class: 'media-body' },
						React.createElement(this, 'h5', { class: 'mt-0 mb-1' }, ` ${comment.name}`),
						React.createElement(this, 'h6', { class: 'mt-0 mb-1' }, ` ${comment.email}`),
						React.createElement(this, 'p', null, ` ${comment.body}`)
					)
				)
			);
		});

		return React.createElement(this, 'div', { class: 'container' }, ...templete);
	
	}
	
}
export default CommentArticle;
