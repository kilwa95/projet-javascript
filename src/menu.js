import Component from "./Component.js";
import api from "./api";

class menu extends Component {
  render() {
    const Api = new api().display();

    return `
    <div class="navbar">
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      ${Api}

    </div>
    `;
  }
}

export default menu;
