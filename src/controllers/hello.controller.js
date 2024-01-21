const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { homeService } = require('../services');


const getHomeInfo = catchAsync(async (req, res) => {
	const home = await homeService.getHomeInfo();
	res.status(home.code).send(home);
});

module.exports = {
    getHomeInfo,
};