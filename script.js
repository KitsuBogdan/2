const price = document.querySelector('.price');
const buy = document.querySelector('.buy');
const confrm = document.querySelector('.confirm');
const ok = document.querySelector('.ok');

confrm.style.display = 'none';
ok.style.display = 'none';


function changePrice() {
  price.textContent = Math.random() * 1000;
  alert('Price has changed!' + price.textContent);
}
setInterval(changePrice, 3000);

buy.addEventListener('click', () => {
  confrm.style.display = 'block';
});

confrm.addEventListener('click', () => {
    ok.style.display = 'block';
}