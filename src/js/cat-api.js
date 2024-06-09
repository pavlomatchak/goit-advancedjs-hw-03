import axios from "axios";

const key = "live_xMPWYNspoKZWsSTxOBE4NVcN9Qc034AOnujPVcntJFWwJdwtdhebGWpMVMRJX65L";

export function fetchBreeds() {
  axios.defaults.headers.common["x-api-key"] = key;

  return axios({
    method: 'get',
    url: 'https://api.thecatapi.com/v1/breeds',
    responseType: 'json',
  });
}

export function fetchCatByBreed(breedId)  {
  axios.defaults.headers.common["x-api-key"] = key;
  let url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

  if (breedId === 0) {
    url = 'https://api.thecatapi.com/v1/images/searchfailedrequest';
  }

  return axios({
    method: 'get',
    url,
    responseType: 'json',
  });
}
