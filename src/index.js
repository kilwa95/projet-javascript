import ListUser from "./ListUser";
import App from "./App";
import "./styles.css";

import { interpolate } from "./utils.js";
/*eslint no-extend-native: */
String.prototype.interpolate = interpolate;

const app = new App();
const appTemplate = app.display();
document.getElementById("app").innerHTML = appTemplate;
