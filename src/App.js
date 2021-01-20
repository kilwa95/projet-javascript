import Component from "./Component.js";
import ListUser from "./ListUser.js";
import menu from "./menu.js";
import footer from "./footer";

class App extends Component {
  render(props) {
    const Menue = new menu().display();
    const Footer = new footer().display();
    const listUser = new ListUser();
    const listUserTemplate = listUser.display({
      users: [
        {
          mail: "ahmed@gmail.com",
          name: "ahmed"
        },
        {
          mail: "sami@gmail.com",
          name: "sami"
        },
        {
          mail: "khaled@gmail.com",
          name: "khaled"
        }
      ]
    });

    return `
      ${Menue}
      ${listUserTemplate}
      ${Footer}

    `;
  }
}

export default App;
