export const checkIsAdmin = async (req, res, next) => {
  try {
    // Lấy thông tin từ response từ file checkAuth
    if (req?.user?.role !== "admin") {
      return res.status(403).json({
        message: "Permission denied!",
      });
    }
    next();
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
