const validBodyRequest = (schema) => async (req, res, next) => {
  try {
    const { error } = await schema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      const errors = error.details.map((item) => item.message);
      return res.status(400).json({
        message: "Invalid Body Request",
        errors,
      });
    }
    next();
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

export default validBodyRequest;
