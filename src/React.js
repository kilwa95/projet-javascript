import { getValue } from './String';

String.prototype.interpolate = function(props) {
	let template = this;
	while (template.indexOf('{{') > 0) {
		const start = template.indexOf('{{');
		const end = template.indexOf('}}');
		const keysString = template.substring(start + 2, end);
		const keys = keysString.trim().split('.');
		const toReplace = template.substring(start, end + 2);
		const value = getValue(props, keys);
		template = template.replace(toReplace, value);
	}
	//console.log("interpolate", { props, template });
	return template;
};

export let ReactDOM = {
	render(rElement, hElement) {
		if (rElement) {
			// il delcalncher le reRender ( state) Recuper  le valeur de setSate
			hElement.appendChild(rElement);
		}
	}
};

export let React = {
	createElement(tagOrComponent, props, children) {
		let element;
		let text;

		if (typeof tagOrComponent === 'string') {
			element = document.createElement(tagOrComponent);

			for (let attribute in props) {
				if (attribute.startsWith('on')) {
					const event = attribute.substring(2).toLowerCase();
					element.addEventListener(event, props[attribute]);
				} else {
					element.setAttribute(attribute, props[attribute]);
				}

				// si l'attrubut demare par on je recupere l'event: addEventListerner
			}

			if (typeof children === 'string') {
				text = document.createTextNode(children.interpolate(props));
				element.appendChild(text);
			} else {
				for (let subElement of children) {
					if (typeof subElement === 'string')
						subElement = document.createTextNode(subElement /**.interpolate(props) */);
					element.appendChild(subElement);
				}
			}
		} else {
			//if (!type_check(props, tagOrComponent.propTypes)) throw new TypeError();
			return tagOrComponent.display(props);
		}

		return element;
	}
};
