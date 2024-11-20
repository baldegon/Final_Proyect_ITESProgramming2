import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CZEALn98.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/callback.astro.mjs');
const _page2 = () => import('./pages/api/auth/checksession.astro.mjs');
const _page3 = () => import('./pages/api/auth/ordernow.astro.mjs');
const _page4 = () => import('./pages/api/auth/register.astro.mjs');
const _page5 = () => import('./pages/api/auth/signin.astro.mjs');
const _page6 = () => import('./pages/api/auth/signout.astro.mjs');
const _page7 = () => import('./pages/cocktaildisplay.astro.mjs');
const _page8 = () => import('./pages/cocktaillist.astro.mjs');
const _page9 = () => import('./pages/dashboard.astro.mjs');
const _page10 = () => import('./pages/data.json.astro.mjs');
const _page11 = () => import('./pages/home.astro.mjs');
const _page12 = () => import('./pages/loginerror.astro.mjs');
const _page13 = () => import('./pages/makecocktail.astro.mjs');
const _page14 = () => import('./pages/register.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/auth/callback.ts", _page1],
    ["src/pages/api/auth/checksession.ts", _page2],
    ["src/pages/api/auth/ordernow.ts", _page3],
    ["src/pages/api/auth/register.ts", _page4],
    ["src/pages/api/auth/signin.ts", _page5],
    ["src/pages/api/auth/signout.ts", _page6],
    ["src/pages/CocktailDisplay.astro", _page7],
    ["src/pages/CocktailList.astro", _page8],
    ["src/pages/dashboard.astro", _page9],
    ["src/pages/data.json.ts", _page10],
    ["src/pages/home.astro", _page11],
    ["src/pages/LoginError.astro", _page12],
    ["src/pages/MakeCocktail.astro", _page13],
    ["src/pages/register.astro", _page14],
    ["src/pages/index.astro", _page15]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b19efbd9-0bc6-4d58-8e9e-d025250a5ae1"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
