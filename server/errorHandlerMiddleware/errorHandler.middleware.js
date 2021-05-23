const errorHandler = function (err, req, res, next) {
    const { status, ...error } = err;
    res.status(status).json({ sucess: 'failed', ...error });
}

export default errorHandler;