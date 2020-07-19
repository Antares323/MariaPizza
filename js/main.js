$(document).ready(function () {
	const circleType = new CircleType(document.querySelector('.head__name .name__text'));
	if (window.screen.height >= 768) {
	  circleType.radius(420).dir(1.5);
	} else {
		circleType.radius(420).dir(1);
	}
});

$(document).scroll(function (){
  if ($(document).width() > 785){
    if ($(document).scrollTop () > $('header').height() + 10)
      $('header').addClass('fixed');
    else
      $('header').removeClass('fixed');
  }
});

function createElement(elem, className, text) {
	var tag = document.createElement(elem);
	tag.classList.add(className);
	tag.textContent = text;

	return tag;
}

var pizza = [
	{
		name : "Гавайи",
		price : {
			0 : 79,
			1 : 129,
			2 : 169
		},
		img : "img/pizza-1.jpg",
		ingidients: "Соус, куриное филе, ананас"
	},
	{
		name : "Овощная",
		price : {
			0 : 79,
			1 : 129,
			2 : 169
		},
		img : "img/pizza-2.jpg",
		ingidients: "Соус томатный, сыр моцарелла, помидоры, грибы, перец болгарский, маслины, лук"
	},
	{
		name : "Барбекю",
		price : {
			0 : 79,
			1 : 129,
			2 : 169
		},
		img : "img/pizza-3.jpg",
		ingidients: "Лук, сыр моцарелла, бекон, куриное филе, грибы шампиньоны"
	},
	{
		name : "Неаполь",
		price : {
			0 : 79,
			1 : 129,
			2 : 169
		},
		img : "img/pizza-4.jpg",
		ingidients: "Сливочный соус, сыр моцарелла, грибы, салями, оливки, перец болгарский"
	},
	{
		name : "Премьер",
		price : {
			0 : 79,
			1 : 129,
			2 : 169
		},
		img : "img/pizza-5.jpg",
		ingidients: "Соус, сыр моцарелла, ветчина, бекон, курица, перец болгарский, лук"
	},
	{
		name : "Салями Чиз",
		price : {
			0 : 79,
			1 : 129,
			2 : 169 
		},
		img : "img/pizza-1.jpg",
		ingidients: "Соус, сыр моцарелла, сыр Рокфор"
	},
	{
		name : "Империя",
		price : {
			0 : 79,
			1 : 129,
			2 : 169
		},
		img : "img/pizza-2.jpg",
		ingidients: "Соус, колбаски баварские, ветчина, грибы, корнишоны, лук"
	},
	{
		name : "Дьябло",
		price : {
			0 : 79,
			1 : 129,
			2 : 169 
		},
		img : "img/pizza-3.jpg",
		ingidients: "Соус чили, сыр моцарелла, салями, соус из томатов пелати"
	}
];

const goods_list = document.querySelector(".goods__list");
const size = [22, 30, 36];

function createPrice (a) {
	let goods_item = createElement('li', 'goods__item');
	goods_list.appendChild(goods_item);

	let goods_title = createElement('div', 'goods__title', pizza[a].name);
	goods_item.appendChild(goods_title);

	let good_img = createElement('div', 'goods__img');
	let img = createElement('img');
	img.src = pizza[a].img;
	img.alt = pizza[a].name;
	good_img.appendChild(img);
	goods_item.appendChild(good_img);

	for (var i = 0; i < size.length; i++) {
		let goods_price = createElement('ul', 'goods__price');
		goods_item.appendChild(goods_price);

		let price_item = createElement('li', 'price__item');
		goods_price.appendChild(price_item);

		let label = createElement('label');
		label.textContent = size[i] + " см";
		price_item.appendChild(label);

		let input = createElement('input');
		input.setAttribute("type", "radio");
		input.setAttribute("name", pizza[a].name);
		input.setAttribute("value", size[i]);
		input.value = pizza[a].price[i];
		label.appendChild(input);

		let price = createElement('div', 'price');
		let sup = createElement('sup');
		sup.textContent = ".00";
		price.textContent = "₴" + pizza[a].price[i];
		price.appendChild(sup);
		price_item.appendChild(price);
		console.log(pizza[a].price[i]);
	}

	let goods_btn = createElement('a', 'goods__btn', 'Заказать');
	goods_btn.setAttribute('href', '#');
	goods_item.appendChild(goods_btn);
}

for (key in pizza) {
	createPrice(key);
}
