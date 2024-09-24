const buttonShop = document.getElementById('shop');
const sectionCart = document.getElementById('cart');
const closeCart = document.getElementById('close-cart');

buttonShop.addEventListener('click', function() {
	sectionCart.classList.add('cartOpen');
});

closeCart.addEventListener('click', function() {
	sectionCart.classList.remove('cartOpen');
});