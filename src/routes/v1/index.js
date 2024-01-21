
const accountRoute = require('./account.route');
const helloRoute = require('./hello.route');
const express = require('express');
const router = express.Router();

const routes = [
	{
		path: '/accountManagement',
		route: accountRoute,
	},
	{
		path: '/home',
		route: helloRoute,
	}
];

routes.forEach((route) => {
	router.use(route.path, route.route);
});

module.exports = router;
