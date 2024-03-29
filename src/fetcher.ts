export const searchButton = document.getElementById(
  'search',
) as HTMLButtonElement;

localStorage.setItem('myList', '[]');

type ResponseURL = {
  small: string;
};
type ResponseImage = {
  alt_description: string,
  urls: ResponseURL
};

export const fetchAPI = async (url: string) => {
  const images = await fetch(url)
    .then(response => response.json())
    .then(data => data.results);

  const container: HTMLElement = document.getElementById('image-container')!;
  container.innerHTML = '';
  images.forEach((image: ResponseImage) => {
    container.innerHTML += `
    <div class="imageDiv">
      <div class="flip-card">
      <div class="flip-card-inner">
    <div class="flip-card-front">
     <img src="${image.urls.small}" alt="${image.alt_description}" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
     ${image.alt_description}
    </div>
  </div>
</div>
</div>`;
  });
};

searchButton.addEventListener('click', () => {
  const search = document.getElementById('input') as HTMLInputElement;
  const url = `https://api.unsplash.com/search/photos/?client_id=${import.meta.env.VITE_UNSPLASH_KEY}&query=${search.value}&fit=crop&h=200px&w=300px`;

  const myList = JSON.parse(localStorage.getItem('myList')!);
  if (search.value === '' || myList.includes(search.value)) {
    fetchAPI(url);
    return myList;
  }
  myList.push(search.value);
  localStorage.setItem('myList', JSON.stringify(myList));

  fetchAPI(url);
  search.value = '';
  return true;
});


const input = document.getElementById('input')!;
input.addEventListener('focus', () => {
  let data = JSON.parse(localStorage.getItem('myList')!);
  const suggestions = document.querySelector('.suggestions ul')!;
  suggestions.innerHTML = '';
  if (data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      item = item.replace(item, `<strong>${item}</strong>`);
      suggestions.innerHTML += `<li>${item}</li>`;
    }
    suggestions.classList.add('has-suggestions');
  } else {
    data = [];
    suggestions.innerHTML = '';
    suggestions.classList.remove('has-suggestions');
  }
});
export function useSuggestion(searchQuery: any) {
  const suggestions = document.querySelector('.suggestions ul')!;
  const inputs = document.getElementById('input') as HTMLInputElement;
  inputs.value = searchQuery.target.innerText;
  inputs.focus();
  suggestions.innerHTML = '';
  suggestions.classList.remove('has-suggestions');
  const url = `https://api.unsplash.com/search/photos/?client_id=${import.meta.env.VITE_UNSPLASH_KEY}&query=${inputs.value}&fit=crop&h=200px&w=300px`;
  fetchAPI(url);
}
const suggestions = document.querySelector('.suggestions ul')!;
suggestions.addEventListener('click', useSuggestion);
