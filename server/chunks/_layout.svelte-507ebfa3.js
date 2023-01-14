import { c as create_ssr_component, v as validate_component, b as subscribe, d as add_attribute } from './index-09f75f86.js';
import { p as page } from './stores-c510c51a.js';

const me = "/_app/immutable/assets/me-13a81963.jpg";
const github = "/_app/immutable/assets/github-1ea8d62e.svg";
const css$1 = {
  code: "header.svelte-pogd4k.svelte-pogd4k{display:flex;justify-content:space-between}.corner.svelte-pogd4k.svelte-pogd4k{width:3em;height:3em}.corner.svelte-pogd4k a.svelte-pogd4k{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.corner.svelte-pogd4k img.svelte-pogd4k{width:2em;height:2em;object-fit:contain}nav.svelte-pogd4k.svelte-pogd4k{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}svg.svelte-pogd4k.svelte-pogd4k{width:2em;height:3em;display:block}path.svelte-pogd4k.svelte-pogd4k{fill:var(--background)}ul.svelte-pogd4k.svelte-pogd4k{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-pogd4k.svelte-pogd4k{position:relative;height:100%}li[aria-current='page'].svelte-pogd4k.svelte-pogd4k::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--color-theme-1)}nav.svelte-pogd4k a.svelte-pogd4k{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--color-text);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-pogd4k.svelte-pogd4k:hover{color:var(--color-theme-1)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="${"svelte-pogd4k"}"><div class="${"corner svelte-pogd4k"}"><img${add_attribute("src", me, 0)} alt="${"yo"}" class="${"svelte-pogd4k"}"></div>

	<nav class="${"svelte-pogd4k"}"><svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-pogd4k"}"><path d="${"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"}" class="${"svelte-pogd4k"}"></path></svg>
		<ul class="${"svelte-pogd4k"}"><li${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)} class="${"svelte-pogd4k"}"><a href="${"/"}" class="${"svelte-pogd4k"}">Home</a></li>
			<li${add_attribute("aria-current", $page.url.pathname === "/about" ? "page" : void 0, 0)} class="${"svelte-pogd4k"}"><a href="${"/about"}" class="${"svelte-pogd4k"}">About</a></li>
			<li${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/contact") ? "page" : void 0,
    0
  )} class="${"svelte-pogd4k"}"><a href="${"/contact"}" class="${"svelte-pogd4k"}">contact</a></li></ul>
		<svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-pogd4k"}"><path d="${"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"}" class="${"svelte-pogd4k"}"></path></svg></nav>

	<div class="${"corner svelte-pogd4k"}"><a href="${"https://github.com/sebasop320"}" class="${"svelte-pogd4k"}"><img${add_attribute("src", github, 0)} alt="${"GitHub"}" class="${"svelte-pogd4k"}"></a></div>
</header>`;
});
const css = {
  code: ".app.svelte-8o1gnw.svelte-8o1gnw{display:flex;flex-direction:column;min-height:100vh}main.svelte-8o1gnw.svelte-8o1gnw{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-8o1gnw.svelte-8o1gnw{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}footer.svelte-8o1gnw a.svelte-8o1gnw{font-weight:bold}@media(min-width: 480px){footer.svelte-8o1gnw.svelte-8o1gnw{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"app svelte-8o1gnw"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main class="${"svelte-8o1gnw"}">${slots.default ? slots.default({}) : ``}</main>

	<footer class="${"svelte-8o1gnw"}"><p>Visit <a href="${"https://github.com/sebasop320"}" class="${"svelte-8o1gnw"}">My github</a> To learn more </p>
		<p>Made with ❤️ using <a href="${"https://svelte.dev"}" class="${"svelte-8o1gnw"}">svelte</a></p></footer>
</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-507ebfa3.js.map
