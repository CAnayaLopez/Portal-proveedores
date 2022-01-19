const index = (req, res, next) => {
	res.render('../views/pages/home.ejs');
};

module.exports = {
  index
};
