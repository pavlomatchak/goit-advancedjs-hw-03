import { fetchBreeds, fetchCatByBreed } from './cat-api';

const select = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const info = document.querySelector('.cat-info');

function startLoading() {
  info.classList.add('hidden');
  info.innerHTML = '';
  loader.classList.remove('hidden');
  
}

function finishedLoading() {
  loader.classList.add('hidden');
  info.classList.remove('hidden');
}

function hadleError(e) {
  console.log(e);
  loader.classList.add('hidden');
  select.classList.add('hidden');
  error.classList.remove('hidden');
}

fetchBreeds()
.then(({ data}) => {
  let options = '<option value="0">Failed request</option>';

  for (const item of data) {
    options += `<option value="${item.id}">${item.name}</option>`;
  }

  select.innerHTML = options;
  finishedLoading();
  select.classList.remove('hidden');
})
.catch(hadleError);

select?.addEventListener('change', e => {
  startLoading();

  fetchCatByBreed(e.target.value)
  .then(({ data }) => {
    console.log(data);
    const cat = data[0].breeds[0]
    info.innerHTML = `
      <div class="image">
        <img src="${data[0].url}" alt="${cat.name}" />
      </div>

      <div>
        <h1>${cat.name}</h1>

        <p class="description">${cat.description}</p>

        <p class="temperament"><strong>Temperament:</strong> ${cat.temperament}</p>
      </div>
    `;
    finishedLoading();
  })
  .catch(hadleError);
});
