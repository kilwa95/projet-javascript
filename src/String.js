function getValue(obj, keys) {
	let value = obj;
	for (keys of keys) {
		value = value[keys];
	}
	return value;
}
// prtops-accesse

export function interpolater(props) {
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
	return template;
}
