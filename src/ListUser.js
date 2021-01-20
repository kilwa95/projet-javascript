import Component from "./Component.js";
import User from "./User.js";

class ListUserComponent extends Component {
  render(props) {
    const { users } = props;

    const templateUsers = users.reduce((acc, user) => {
      const userComp = new User();
      const userTemp = userComp.display(user);
      acc += userTemp;
      return acc;
    }, "");

    return `
      <div class="list-user">
        <h1>User Page</h1>
        ${templateUsers}
      </div>  
    `;
  }
}

export default ListUserComponent;
