module.exports = {
  checkToken(req, res, next) {
    console.log(req.headers);
    // Get auth header value
    const bearerHeader = req.headers["authorization"];
    // Check if bearer is undefined
    if (typeof bearerHeader !== "undefined") {
      // Set the token
      req.token = bearerHeader;
      // Next middleware
      next();
    } else {
      // Forbidden
      res.sendStatus(403);
    }
  },
};
