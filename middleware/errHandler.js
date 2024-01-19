const errHandler = (err, req, res, next) => {
	const statuscode = res.statusCode = 400
	res.status(statuscode).json({
		status: 'error',
		message: err?.message,
	});
};

module.exports = errHandler;
