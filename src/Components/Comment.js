import Component from '../React/Component.js';
import { React } from '../React/React.js';
import Menu from './Menu.js';
import CommentArticle from './CommentArticle.js';

class Comment extends Component {
	constructor(props) {
		super(props);
		this.state = { jeux: history.state['comments'], isfetching: false };
	}

	render() {
		return React.createElement(
			this,
			'div',
			null,
			React.createElement(this, Menu, this.state, null),
			React.createElement(
				this,
				CommentArticle,
				null,
				null
			),
		
		);
		
	}
}

export default Comment;
