import Component from '../React/Component.js';
import { React } from '../React/React.js';
import Home from './Home.js';
import Electro from './Electro.js';
import Comment from './Comment.js';



class App extends Component {
	render() {
		const path = window.location.pathname;
		console.log('deubber', { pathname: window.location, history });

		switch (path) {
			case '/':
				return React.createElement(this, Home, null, null);
			case '/electro':
				return React.createElement(this, Electro, null, null);
			case '/comments':
				return React.createElement(this, Comment, null, null);
			case '/meteo':
				return React.createElement(this, Home, null, null);
			default:
				console.log("Désolé, nous n'avons plus de .");
		}
	}
	
}
export default App;
