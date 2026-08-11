import ErrorHandler from "../utils/errorHandler.js";

export const validateRequest = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body || {});

        if (!result.success) {
            const message = result.error.issues
                .map((issue) => issue.message)
                .join(", ");

            return next(new ErrorHandler(message, 400));
        }

        next();
    };
};
