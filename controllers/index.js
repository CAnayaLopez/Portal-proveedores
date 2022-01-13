var items = [
	{id: 1, name: 'product1'},
	{id: 2, name: 'product2'},
	{id: 3, name: 'product3'}
];

const index = (req, res, next) => {
	res.render('index', {
		title: 'Portal proveedores'
	});
};
const index2 = (req, res, next) => {
	res.render('index', {
		title: 'Portal proveedores'
	});
};
const login = (req, res, next) => {
	res.render('login', {
	});
};
const privacidad = (req, res, next) => {
	res.render('privacidad', {
		title: 'Portal proveedores'
	});
};
const terminos = (req, res, next) => {
	res.render('terminos', {
		title: 'Portal proveedores'
	});
};
const getProducts = (req, res, next) => {
	res.render('products', {
		title: 'List of Products',
		items
	});
};
const master = (req, res, next) => {
	res.render('master', {
	});
};

const addProduct = (req, res) => {

	var newItem = req.body.newItem;
	console.log(newItem);

	items.push({
		id: items.length + 1,
		name: newItem
	});

	res.redirect('/products');
};

module.exports = {
  index,
  getProducts,
  addProduct,
  login,
  privacidad,
  terminos,
  master, 
  index2
};
