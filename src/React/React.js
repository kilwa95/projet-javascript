import { interpolater } from '../String.js';

// eslint-disable-next-line no-extend-native
String.prototype.interpolate = interpolater;

const history = {};
const log = console.log;

export const ReactDOM = {
	render(rElement, hElement) {
		if (rElement && hElement) {
			hElement.appendChild(rElement);
		}
	}
};

export const React = {
	createElement({ id }, tag, props, ...children) {
		const isHtmlTag = typeof tag === 'string';
		const isReactTag = !isHtmlTag;

		if (isHtmlTag) {
			const element = document.createElement(tag);
			addAttributesToElement(element, props);
			addChildrenToElement(element, props, ...children);
			return element;
		}

		if (isReactTag) {
			//if (!type_check(props, tag.propTypes)) throw new TypeError();
			let reactElement = createOrGetComponent(id, tag);
			const docElement = reactElement.display(props);
			return docElement;
		}
	}
};

function createOrGetComponent(id, tag) {
	if (id in history && tag.name in history[id]) {
		//log("get", { id, tag, history });
		return history[id][tag.name];
	} else {
		if (history[id] === undefined) history[id] = {};
		if (history[id][tag.name] === undefined) history[id][tag.name] = [];
		let reactElement = new tag();
		history[id][tag.name] = reactElement;
		return reactElement;
	}
}

function addAttributesToElement(element, props) {
	for (let key in props) {
		if (key.startsWith('on')) {
			const event = key.substring(2).toLowerCase();
			element.addEventListener(event, props[key]);
		} else {
			element.setAttribute(key, props[key]);
		}
	}
}

/* 
    children: [null]
    children: ["text"]
    children: [elemnt]
    children: [elemnt, "text"]
  */
function addChildrenToElement(element, props, ...children) {
	for (let child of children) {
		if (child === null) return;
		const isTextChild = typeof child === 'string';
		const isDocementChild = typeof child === 'object';
		if (isTextChild) {
			const text = document.createTextNode(child.interpolate(props));
			element.appendChild(text);
		} else if (isDocementChild) {
			element.appendChild(child);
		}
	}
}
