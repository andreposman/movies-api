module.exports = {
  health(req, res) {
    return res.json({
      message: "Everything up and running! 👍",
    });
  },
};
