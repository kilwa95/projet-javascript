import Component from '../React/Component.js';
import { React } from '../React/React.js';
import Home from './Home.js';

class App extends Component {
	render() {
		const path = window.location.pathname;

		switch (path) {
			case '/':
				return React.createElement(this, Home, null, null);
			case '/sport':
				return React.createElement(this, Home, null, null);
			case '/jeux':
				return React.createElement(this, Home, null, null);
			case '/meteo':
				return React.createElement(this, Home, null, null);
			default:
				console.log("Désolé, nous n'avons plus de " + expr + '.');
		}
	}
}

export default App;
