import _ from "lodash";

class Component {
  constructor() {
    this.props = {};
    this.prevProps = {};
    this.state = {};
    this.template = "";
  }

  display(newProps) {
    this.props = newProps;
    const shouldUpdate = this.shouldUpdate();
    if (shouldUpdate) {
      this.template = this.render(this.props);
      if (newProps !== undefined && !_.isEmpty(newProps)) {
        //this.template = this.template.interpolate(this.props);
      }
    }
    return this.template;
  }

  shouldUpdate() {
    const equalProps = _.isEqual(this.prevProps, this.props);
    return !equalProps;
  }

  render() {
    return;
  }
}

export default Component;
