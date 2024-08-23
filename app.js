const opener = document.querySelector('#openNav');
const closer = document.querySelector('#closeNav');
const navbtn = document.querySelector('#nav');
const prev = document.querySelector('#prevImg');
const next = document.querySelector('#nextImg');
const slides = Array.from(track.children);
const slidertrack = document.querySelector('#slidesNav');
const thumbnails = Array.from(slidertrack.children);
const contentNum = document.querySelector('#num');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const cartNum = document.querySelector('#cartNum');
const openCart = document.querySelector('#cartOpen');
const addToCart = document.querySelector('#Add');

// hamburger button style
opener.addEventListener('click', () => {
	navbtn.style.width = '50%';
	navbtn.style.opacity = '1';
});

closer.addEventListener('click', () => {
	navbtn.style.width = '0';
	navbtn.style.opacity = '0';
});

// image slider function
// move to right
next.addEventListener('click', (e) => {
	const currSlide = track.querySelector('.currImg');
	let nextSlide = currSlide.nextElementSibling;
	const presentThumb = slidertrack.querySelector('.currThumb');
	let targetThumb = presentThumb.nextElementSibling;

	if (currSlide !== slides[slides.length - 1]) {
		changeSlide(track, currSlide, nextSlide);
		updatingThumb(presentThumb, targetThumb);
	} else {
		nextSlide = slides[0];
		targetThumb = thumbnails[0];
		changeSlide(track, currSlide, nextSlide);
		updatingThumb(presentThumb, targetThumb);
	}
});

// move to left
prev.addEventListener('click', (e) => {
	const currSlide = track.querySelector('.currImg');
	let prevSlide = currSlide.previousElementSibling;
	const presentThumb = slidertrack.querySelector('.currThumb');
	let targetThumb = presentThumb.previousElementSibling;

	if (currSlide !== slides[0]) {
		changeSlide(track, currSlide, prevSlide);
		updatingThumb(presentThumb, targetThumb);
	} else {
		prevSlide = slides[slides.length - 1];
		targetThumb = thumbnails[thumbnails.length - 1];
		changeSlide(track, currSlide, prevSlide);
		updatingThumb(presentThumb, targetThumb);
	}
});

// thumbnails effect
slidertrack.addEventListener('click', (e) => {
	const targetImg = e.target.closest('img');
	if (!targetImg) return;

	const currSlide = track.querySelector('.currImg');
	const presentThumb = slidertrack.querySelector('.currThumb');
	const targetIdx = thumbnails.findIndex(
		(thumbnail) => thumbnail === targetImg
	);

	const targetSlide = slides[targetIdx];
	const targetThumb = thumbnails[targetIdx];

	changeSlide(track, currSlide, targetSlide);
	updatingThumb(presentThumb, targetThumb);
});

// slide changer function
const changeSlide = (track, currSlide, targetSlide) => {
	currSlide.classList.add('hidden');
	currSlide.classList.remove('currImg');
	targetSlide.classList.remove('hidden');
	targetSlide.classList.add('currImg');
};

// changing thumbnail and slide
const updatingThumb = (presentThumb, targetThumb) => {
	presentThumb.classList.remove('currThumb');
	presentThumb.classList.remove('active');
	targetThumb.classList.add('active');
	targetThumb.classList.add('currThumb');
};

// add to cart
contentNum.textContent = '0';
cartNum.textContent = '0';

// add to content
plus.addEventListener('click', () => {
	contentNum.textContent++;
	// cartNum.textContent++;
});

// remove content
minus.addEventListener('click', () => {
	if (contentNum.textContent > '0') {
		contentNum.textContent--;
	} else {
		contentNum.textContent = '0';
	}
});

// add to Cart
addToCart.addEventListener('click', () => {
	if (contentNum.textContent > '0') {
		cartNum.classList.remove('hidden');
		cartNum.textContent = contentNum.textContent;
		contentNum.textContent = '0';
	}
});

// open cart
openCart.addEventListener('click', () => {
	if (cartNum.textContent === '0') {
		document.querySelector('#cart').classList.remove('hidden');
		document.querySelector('#cart').style.display = 'flex';
		document.querySelector('#cartTxt').innerHTML = `<h2>no items in cart</h2>`;
	} else {
		document.querySelector('#cart').style.display = 'flex';
		document.querySelector(
			'#cartTxt'
		).innerHTML = `<div class="flex flex-col items-center w-full">
		<div class="flex justify-around items-center gap-2 mt-2">
			<img
				src="../images/image-product-1-thumbnail.jpg"
				alt=""
				class="w-1/5 rounded-lg"
	
			/>
			<div class="flex flex-col">
				<p class="text-xs">Autumn Limited Edition</p>
				<p>
					$125.00 x ${parseInt(cartNum.textContent)}
					<span class="font-semibold pl-2"> $${125 * parseInt(cartNum.textContent)}</span>
				</p>
			</div>
			<img
				src="../images/icon-delete.svg"
				alt=""
				id="delete"
			/>
		</div>
		<button class="mt-3 py-2 rounded-md text-white bg-Org font-semibold w-full text-center uppercase" id="checkout">checkout</button>
	</div>
	`;
	}
	document.querySelector('#delete').addEventListener('click', () => {
		document.querySelector('#cartTxt').innerHTML = `<h2>no items in cart</h2>`;
		cartNum.textContent = '0';
	});
	document.querySelector('#checkout').addEventListener('click', () => {
		document.querySelector('#cartTxt').innerHTML = `<h2>no items in cart</h2>`;
		cartNum.textContent = '0';
	});
});

// close cart
document.querySelector('#cancel').addEventListener('click', () => {
	document.querySelector('#cart').style.display = 'none';
	cartNum.classList.add('hidden');
});
