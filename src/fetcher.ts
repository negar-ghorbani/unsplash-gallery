export const searchButton = document.getElementById('search') as HTMLButtonElement;

localStorage.setItem('myList', '[]');

searchButton.addEventListener('click', () => {
  const search = document.getElementById('input') as HTMLElement;
  const url = `https://api.unsplash.com/search/photos/?client_id=q4swtOlzLBR4BJxfQEgQA-u3_3hNzATacG7eJtjYLcU&query=${search.value}`;
  
  const myList = JSON.parse(localStorage.getItem('myList')!);
  myList.push(search.value);
  localStorage.setItem('myList', JSON.stringify(myList));
  
  fetchAPI(url);
});
export const fetchAPI = async (url: string) => {
  const images = await fetch(url)
    .then(response => response.json())
    .then(data => data.results);

  const container: HTMLElement = document.getElementById('image-container')!;
  container.innerHTML = '';
  images.forEach(image => {
    container.innerHTML += `<div>
        <img src="${image.urls.regular}" alt="${image.alt_description}">
      </div>`;
  });
};

function autocomplete(input, list) {
  //Add an event listener to compare the input value with all countries
  input.addEventListener('input', function () {
    console.log('hi');
    
      //Close the existing list if it is open
      closeList();

      //If the input is empty, exit the function
      if (!input.value)
          return;

      //Create a suggestions <div> and add it to the element containing the input field
      const suggestions = document.createElement('div');
      suggestions.setAttribute('id', 'suggestions');
      input.parentNode.appendChild(suggestions);

      //Iterate through all entries in the list and find matches
      for (let i=0; i<list.length; i++) {
          if (list[i].toUpperCase().includes(input.value.toUpperCase())) {
              //If a match is found, create a suggestion <div> and add it to the suggestions <div>
              const suggestion = document.createElement('div');
              suggestion.innerHTML = list[i];
              
              suggestion.addEventListener('click', function () {
                  input.value = this.innerHTML;
                  closeList();
              });
              suggestion.style.cursor = 'pointer';

              suggestions.appendChild(suggestion);
          }
      }

  });

  function closeList() {
      let suggestions = document.getElementById('suggestions');
      if (suggestions)
          suggestions.parentNode!.removeChild(suggestions);
  }
}
autocomplete(document.getElementById('input'), JSON.parse(localStorage.getItem('myList')!));