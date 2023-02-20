import { results } from "./fetcher";




export type State = {
    url: string,
    description: string
};
let state = {
    url: '',
    description: ''
};
const template = (state: State) => `
    <div>
        <img src="${state.url}" alt="${state.description}">
    </div>`;
const render = (htmlString: string, el: Element) => {
    el.innerHTML = htmlString;
};
const update = (newState: State) => {
    state = { ...state, ...newState }; // patch state, overwrite old data with new properties
    window.dispatchEvent(new Event('statechange'));
};
window.addEventListener('statechange', () => {
    render(template(state), document.getElementById('image-container')!);
});
update({
    url: 'Is it me you are looking for?',
    description: });