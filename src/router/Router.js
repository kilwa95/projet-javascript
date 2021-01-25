//router instance
let Router = function(name, routes) {
	return {
		name,
		routes
	};
};
let routes = new Router('routerInstance', [
	{
		path: '/',
		name: 'Root'
	},
	{
		path: '/sport',
		name: 'About'
	},
	{
		path: '/jeux',
		name: 'Contact'
	}
]);

export default routes;
