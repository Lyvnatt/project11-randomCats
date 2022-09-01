const API = 'https://api.thecatapi.com/v1/images/search';

document.addEventListener('DOMContentLoaded', myKitten);

async function myKitten() {
  const res = await fetch(API);
  const data = await res.json();
  const img = document.querySelector('img');
    img.src = data[0].url;
}

const btn = document.querySelector('button');
btn.addEventListener('click', myKitten);