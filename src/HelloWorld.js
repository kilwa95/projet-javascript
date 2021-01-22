import { React } from './React';

class HelloWorld extends Component {
	render() {
		return React.createElement('div', null, 'hello world');
	}
}

export default HelloWorld;
