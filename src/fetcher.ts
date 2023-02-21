export const searchButton = document.getElementById(
  'search'
) as HTMLButtonElement;

localStorage.setItem('myList', '[]');

searchButton.addEventListener('click', () => {
  const search = document.getElementById('input') as HTMLElement;
  const url = `https://api.unsplash.com/search/photos/?client_id=q4swtOlzLBR4BJxfQEgQA-u3_3hNzATacG7eJtjYLcU&query=${search.value}`;

  const myList = JSON.parse(localStorage.getItem('myList')!);
  if (search.value === '' || myList.includes(search.value)) {
    fetchAPI(url);
    return myList;
  }
  myList.push(search.value);
  localStorage.setItem('myList', JSON.stringify(myList));

  fetchAPI(url);
});

export const fetchAPI = async (url: string) => {
  const images = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.results);

  const container: HTMLElement = document.getElementById('image-container')!;
  container.innerHTML = '';
  images.forEach((image) => {
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

const input = document.getElementById('input')!;
input.addEventListener('input', function () {
  let data = JSON.parse(localStorage.getItem('myList')!);
  const suggestions = document.querySelector('.suggestions ul')!;
  suggestions.innerHTML = '';
  if (data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      console.log(data);
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
function useSuggestion(e) {
  const suggestions = document.querySelector('.suggestions ul')!;
  const input = document.getElementById('input')!;
  input.value = e.target.innerText;
  suggestions.innerHTML = '';
  suggestions.classList.remove('has-suggestions');
}
const suggestions = document.querySelector('.suggestions ul')!;
suggestions.addEventListener('click', useSuggestion);
