import { c as create_ssr_component, v as validate_component, a as subscribe, d as add_attribute } from './index-5b06290b.js';
import { p as page } from './stores-dfc3399d.js';

const me = "data:image/png;base64,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";
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
  return `<header class="${"svelte-pogd4k"}"><div class="${"corner svelte-pogd4k"}"><img${add_attribute("src", me, 0)} alt="${"logo"}" class="${"svelte-pogd4k"}"></div>

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
//# sourceMappingURL=_layout.svelte-5b998f3f.js.map
