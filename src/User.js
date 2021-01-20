import Component from "./Component.js";

class User extends Component {
  render() {
    return `
      <div class="user">
        <h2>User Info</h2>
        <p>Name: {{ name }}</p>
        <p>Mail: {{ mail }}</p>
      </div>
    `;
  }
}

export default User;
