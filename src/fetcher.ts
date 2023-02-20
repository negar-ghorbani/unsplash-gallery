const searchButton = document.getElementById('search') as HTMLButtonElement;
searchButton.addEventListener('click', () => {
    const search = document.getElementById('input') as HTMLElement;
    const url = `https://api.unsplash.com/search/photos/?client_id=q4swtOlzLBR4BJxfQEgQA-u3_3hNzATacG7eJtjYLcU&query=${search.value}`;
    fetchAPI(url);

})
export const fetchAPI = async (url: string) => {
    const images = await fetch(url)
        .then(response => response.json())
        .then(data => data.results)

    const container: HTMLElement = document.getElementById("image-container")!;
    images.forEach(image => {
        container.innerHTML += `<div>
        <img src="${image.urls.regular}" alt="${image.alt_description}">
      </div>`
    });
}
