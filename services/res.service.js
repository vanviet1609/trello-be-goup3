export const responseHandler = (res, statusCode, m, data) => {
    return res.status(statusCode).json({
        message: m,
        success: statusCode >= 200 && statusCode < 300,
        data: data || null,
    });
}

export default { responseHandler };