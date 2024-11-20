/* empty css                                           */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_DdE926XU.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_y4kWyvKk.mjs';
import 'clsx';
import { a as $$ViewTransitions, $ as $$LandingHeader } from '../chunks/LandingHeader_Cy82eNhH.mjs';
export { renderers } from '../renderers.mjs';

const $$ChargeSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="landing-section bg-black h-screen w-screen text-center overflow-hidden relative" data-header-color="white"> <div class="z-30 relative h-full flex flex-col"> <header> <h2 class="text-orange-400 italic border-sm pt-40 text-5xl font-sans font-large">
The Best Cocktails From La Pampa - ARG
</h2> <p class=" font-serif italic text-lg text-white text-base">
More than 100 cocktails to choose for
</p> </header> <footer class="flex flex-col flex-grow justify-end pb-20"> <div class="gap-x-4"> <a class="border-[3px] border-white bg-white/5 backdrop-blur-sm text-sm rounded font-medium text-white px-12 py-2 inline-block hover:bg-white hover:text-black transition-colors" href="#">Order Now</a> <a class="border-[3px] backdrop-blur-sm text-sm rounded font-medium text-white px-12 py-2 inline-block hover:bg-black text-white hover:border-black inline-flex justify-center items-center transition-colors" href="/CocktailList">
Make a Cocktail Card</a> </div> </footer> </div> <div class="absolute top-0 bottom-0 h-cover w-cover bg-scroll"> <img class="brightness-50 h-full w-screen object-center object-cover" src="/h.jpeg" alt="coctel2"> </div> </section>`;
}, "C:/Users/usuario/Documents/BaldegonDev/Proyectos Web/LandingProyectProgII/src/components/ChargeSection.astro", void 0);

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="landing-section bg-black h-screen w-screen text-center overflow-hidden relative" data-header-color="white"> <div class="z-30 relative h-full flex flex-col"> <header> <h2 class="font-sans shadow-sm p-25 italic text-yellow-500 pt-40 text-6xl font-large">
Tauros Cocktails
</h2> <p class="font-sans italic text-yellow-400  transition-colors font-medium ml-1">
Un Bar diferente...
</p> </header> <footer class="flex flex-col flex-grow justify-end pb-20"> <div> <a class="border-[3px] border-white bg-white/5 backdrop-blur-sm text-sm rounded font-medium text-white px-12 py-2 inline-block hover:bg-white hover:text-black transition-colors" href="/CocktailList">Pedi Tu Carta</a> ${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})} </div> </footer> </div> <div class="absolute top-0 bottom-0 h-cover w-cover"> <img class="brightness-50 h-screen w-screen object-cover object-cover" src="/j.jpeg" alt="BarWall"> </div> </section>`;
}, "C:/Users/usuario/Documents/BaldegonDev/Proyectos Web/LandingProyectProgII/src/components/HeroSection.astro", void 0);

const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Base de la pagina
	Este es el Index, osea todo reside dentro de este archivo
-->${renderComponent($$result, "Layout", $$Layout, { "title": "TaurosCocktails" }, { "default": ($$result2) => renderTemplate` <link rel="stylesheet" href=""> ${renderComponent($$result2, "LandingHeader", $$LandingHeader, {})}  ${maybeRenderHead()}<main> <div class="flex flex-col"> ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "ViewTransitions", $$ViewTransitions, {})} </div> <div class="flex flex-col"> ${renderComponent($$result2, "ChargeSection", $$ChargeSection, {})} ${renderComponent($$result2, "ViewTransitions", $$ViewTransitions, {})} </div> <div class="flex flex-col"> ${renderComponent($$result2, "ViewTransitions", $$ViewTransitions, {})} </div> </main> ` })} <scrip></scrip>`;
}, "C:/Users/usuario/Documents/BaldegonDev/Proyectos Web/LandingProyectProgII/src/pages/home.astro", void 0);

const $$file = "C:/Users/usuario/Documents/BaldegonDev/Proyectos Web/LandingProyectProgII/src/pages/home.astro";
const $$url = "/home";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Home,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
