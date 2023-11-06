exports.get404 = (req, res, next) => {
 return res.status(404).json({ msg: 'Page Not Found'});
};
