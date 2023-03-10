import { c as create_ssr_component, a as subscribe, d as add_attribute, e as escape } from './index-5b06290b.js';
import { d as derived, w as writable } from './index3-7d8eebd8.js';

const apiData = writable({});
const movieName = derived(apiData, ($apiData) => $apiData.Title ?? "");
const movieYear = derived(apiData, ($apiData) => $apiData.Year ?? "");
const moviePG = derived(apiData, ($apiData) => $apiData.Rated ?? "");
const moviePoster = derived(apiData, ($apiData) => $apiData.Poster ?? "");
const movieTime = derived(apiData, ($apiData) => $apiData.Runtime ?? "");
const moviePlot = derived(apiData, ($apiData) => $apiData.Plot ?? "");
const movieDirector = derived(apiData, ($apiData) => $apiData.Director ?? "");
const movieLenguaje = derived(apiData, ($apiData) => $apiData.Language ?? "");
const css = {
  code: "h1.svelte-1kjfw26{font-size:36px;margin-bottom:20px;color:#333333}.search-input.svelte-1kjfw26{font-size:24px;padding:10px 20px;border:none;border-radius:5px;margin-bottom:20px;box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.2);align-items:center}.search-button.svelte-1kjfw26{font-size:24px;padding:10px 20px;background-color:#333333;color:#ffffff;border:none;border-radius:5px;cursor:pointer;transition:all 0.2s ease-in-out;align-items:center}.search-button.svelte-1kjfw26:hover{background-color:#555555}.movie-details.svelte-1kjfw26{margin-top:50px;display:flex;flex-direction:column;align-items:center}.movie-poster.svelte-1kjfw26{max-width:400px;margin-top:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $movieName, $$unsubscribe_movieName;
  let $movieYear, $$unsubscribe_movieYear;
  let $moviePG, $$unsubscribe_moviePG;
  let $movieTime, $$unsubscribe_movieTime;
  let $movieDirector, $$unsubscribe_movieDirector;
  let $moviePlot, $$unsubscribe_moviePlot;
  let $movieLenguaje, $$unsubscribe_movieLenguaje;
  let $moviePoster, $$unsubscribe_moviePoster;
  $$unsubscribe_movieName = subscribe(movieName, (value) => $movieName = value);
  $$unsubscribe_movieYear = subscribe(movieYear, (value) => $movieYear = value);
  $$unsubscribe_moviePG = subscribe(moviePG, (value) => $moviePG = value);
  $$unsubscribe_movieTime = subscribe(movieTime, (value) => $movieTime = value);
  $$unsubscribe_movieDirector = subscribe(movieDirector, (value) => $movieDirector = value);
  $$unsubscribe_moviePlot = subscribe(moviePlot, (value) => $moviePlot = value);
  $$unsubscribe_movieLenguaje = subscribe(movieLenguaje, (value) => $movieLenguaje = value);
  $$unsubscribe_moviePoster = subscribe(moviePoster, (value) => $moviePoster = value);
  let search = "";
  $$result.css.add(css);
  $$unsubscribe_movieName();
  $$unsubscribe_movieYear();
  $$unsubscribe_moviePG();
  $$unsubscribe_movieTime();
  $$unsubscribe_movieDirector();
  $$unsubscribe_moviePlot();
  $$unsubscribe_movieLenguaje();
  $$unsubscribe_moviePoster();
  return `${$$result.head += `<!-- HEAD_svelte-2yy29f_START --><link rel="${"icon"}" type="${"image/x-icon"}" href="${"/assets/favicon.png"}">${$$result.title = `<title>Movie Information --- sebasopdev.com --- sebastian ocampo</title>`, ""}<meta title="${"Sebasopdev --- Sebastian Ocampo"}"><meta name="${"description"}" content="${"Hi i'm Sebasop320 an enthusiast developer, i`m verry passionate about tech and airplanes"}"><meta name="${"keywords"}" content="${"movie, sebasop320, sebastian ocampo, pelicula, cine, cinema, movie"}"><meta name="${"author"}" content="${"Sebastian Ocampo"}"><script async src="${"https://www.googletagmanager.com/gtag/js?id=G-TNQZ8BJ0PF"}"><\/script><script>window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TNQZ8BJ0PF');
<\/script><!-- HEAD_svelte-2yy29f_END -->`, ""}
  
  
  
  
  <div class="${"container"}"><h1 class="${"svelte-1kjfw26"}">Search for a movie</h1>
  
    <center><div><input class="${"search-input svelte-1kjfw26"}" type="${"text"}" placeholder="${"Enter a movie title"}"${add_attribute("value", search, 0)}></div></center>
  
    <center><button class="${"search-button svelte-1kjfw26"}">Search</button></center>
  
    ${$movieName ? `<div class="${"movie-details svelte-1kjfw26"}"><h2>${escape($movieName)} (${escape($movieYear)})</h2>
        <h3>${escape($moviePG)} Time: (${escape($movieTime)})</h3>
        <p>Director: ${escape($movieDirector)} (${escape($moviePlot)})</p>
        <h3>Lenguaje: ${escape($movieLenguaje)}</h3>
        ${$moviePoster ? `<img class="${"movie-poster svelte-1kjfw26"}"${add_attribute("src", $moviePoster, 0)} alt="${"Movie Poster"}">` : ``}</div>` : ``}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-0c0e12d9.js.map
