/* empty css                                           */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_DdE926XU.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$LandingHeader } from '../chunks/LandingHeader_Cy82eNhH.mjs';
import { $ as $$Layout } from '../chunks/Layout_y4kWyvKk.mjs';
/* empty css                                           */
export { renderers } from '../renderers.mjs';

const $$CocktailCard = createComponent(($$result, $$props, $$slots) => {
  const cocktailOfTheDay = {
    title: "Old Fashioned",
    description: "A sophisticated blend of bourbon, bitters, and sugar, garnished with an orange peel and cocktail cherry. This timeless cocktail represents the perfect balance of sweet, bitter, and strong.",
    imageUrl: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800",
    ingredients: [
      "2 oz Bourbon",
      "1 Sugar Cube",
      "2-3 Dashes Angostura Bitters",
      "Orange Peel",
      "Cocktail Cherry"
    ],
    price: "$14",
    preparationTime: "5 mins"
  };
  const cocktailOfTheDay2 = {
    title: "Negroni",
    description: "A Glamorous blend of Gin, Campari and Vermouth, bitters, and sugar, garnished with an orange peel and cocktail cherry",
    imageUrl: "https://images.unsplash.com/photo-1626688445658-c948f32d68ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "2 oz Gin",
      "2 oz Campari Bitter",
      "2 oz Vermouth Rosso",
      "Orange Peel"
    ],
    price: "$17",
    preparationTime: "5 mins"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CocktailCards", "data-astro-cid-wbtvgvkf": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full max-w-2xl mx-auto" data-astro-cid-wbtvgvkf> <div class="bg-black/40 backdrop-blur-md rounded-xl border border-white/10 shadow-lg shadow-red-500/10 overflow-hidden" data-astro-cid-wbtvgvkf> <div class="relative" data-astro-cid-wbtvgvkf> <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-red-500/20 to-cyan-500/20 mix-blend-overlay" data-astro-cid-wbtvgvkf></div> <img class="w-full h-64 object-cover"${addAttribute(cocktailOfTheDay.imageUrl, "src")} alt="Cocktail of the Day" data-astro-cid-wbtvgvkf> <div class="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg" data-astro-cid-wbtvgvkf>
Featured Today
</div> </div> <div class="p-6" data-astro-cid-wbtvgvkf> <div class="flex justify-between items-start mb-4" data-astro-cid-wbtvgvkf> <h3 class="text-3xl font-bold" data-astro-cid-wbtvgvkf> <span class="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 text-transparent bg-clip-text" data-astro-cid-wbtvgvkf> ${cocktailOfTheDay.title} </span> </h3> <span class="text-2xl font-bold text-emerald-400" data-astro-cid-wbtvgvkf>${cocktailOfTheDay.price}</span> </div> <p class="text-gray-300 text-sm mb-6" data-astro-cid-wbtvgvkf> ${cocktailOfTheDay.description} </p> <div class="grid md:grid-cols-2 gap-6" data-astro-cid-wbtvgvkf> <div class="space-y-2" data-astro-cid-wbtvgvkf> <h4 class="text-emerald-400 text-sm font-medium flex items-center" data-astro-cid-wbtvgvkf> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-wbtvgvkf> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-wbtvgvkf></path> </svg>
Ingredients
</h4> <ul class="text-gray-400 text-sm space-y-1" data-astro-cid-wbtvgvkf> ${cocktailOfTheDay.ingredients.map((ingredient) => renderTemplate`<li class="flex items-center" data-astro-cid-wbtvgvkf> <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2" data-astro-cid-wbtvgvkf></span> ${ingredient} </li>`)} </ul> </div> <div class="space-y-4" data-astro-cid-wbtvgvkf> <div class="flex items-center text-gray-300" data-astro-cid-wbtvgvkf> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-wbtvgvkf> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-wbtvgvkf></path> </svg>
Preparation Time: ${cocktailOfTheDay.preparationTime} </div> <button onsubmit="action" class="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg shadow-red-500/20 font-medium" data-astro-cid-wbtvgvkf>
Order Now
</button> </div> </div> </div> </div> </div> <div class="w-full max-w-2xl mx-auto" data-astro-cid-wbtvgvkf> <div class="bg-black/40 backdrop-blur-md rounded-xl border border-white/10 shadow-lg shadow-red-500/10 overflow-hidden" data-astro-cid-wbtvgvkf> <div class="relative" data-astro-cid-wbtvgvkf> <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-red-500/20 to-cyan-500/20 mix-blend-overlay" data-astro-cid-wbtvgvkf></div> <img class="w-full h-64 object-cover"${addAttribute(cocktailOfTheDay2.imageUrl, "src")} alt="Cocktail of the Day" data-astro-cid-wbtvgvkf> <div class="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg" data-astro-cid-wbtvgvkf>
Featured Today
</div> </div> <div class="p-6" data-astro-cid-wbtvgvkf> <div class="flex justify-between items-start mb-4" data-astro-cid-wbtvgvkf> <h3 class="text-3xl font-bold" data-astro-cid-wbtvgvkf> <span class="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 text-transparent bg-clip-text" data-astro-cid-wbtvgvkf> ${cocktailOfTheDay2.title} </span> </h3> <span class="text-2xl font-bold text-emerald-400" data-astro-cid-wbtvgvkf>${cocktailOfTheDay2.price}</span> </div> <p class="text-gray-300 text-sm mb-6" data-astro-cid-wbtvgvkf> ${cocktailOfTheDay2.description} </p> <div class="grid md:grid-cols-2 gap-6" data-astro-cid-wbtvgvkf> <div class="space-y-2" data-astro-cid-wbtvgvkf> <h4 class="text-emerald-400 text-sm font-medium flex items-center" data-astro-cid-wbtvgvkf> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-wbtvgvkf> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-wbtvgvkf></path> </svg>
Ingredients
</h4> <ul class="text-gray-400 text-sm space-y-1" data-astro-cid-wbtvgvkf> ${cocktailOfTheDay2.ingredients.map((ingredient) => renderTemplate`<li class="flex items-center" data-astro-cid-wbtvgvkf> <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2" data-astro-cid-wbtvgvkf></span> ${ingredient} </li>`)} </ul> </div> <div class="space-y-4" data-astro-cid-wbtvgvkf> <div class="flex items-center text-gray-300" data-astro-cid-wbtvgvkf> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-wbtvgvkf> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-wbtvgvkf></path> </svg>
Preparation Time: ${cocktailOfTheDay2.preparationTime} </div> <button class="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg shadow-red-500/20 font-medium" data-astro-cid-wbtvgvkf>
Order Now
</button> </div> </div> </div> </div> </div> ` })} `;
}, "C:/Users/usuario/Documents/BaldegonDev/Proyectos Web/LandingProyectProgII/src/components/CocktailCard.astro", void 0);

const $$CocktailDisplay = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cocktail Display" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LandingHeader", $$LandingHeader, {})} ${maybeRenderHead()}<div class="py-20"></div> <main> <div class="flex flex-column px-10 py-10"> ${renderComponent($$result2, "CocktailCard", $$CocktailCard, {})} </div> </main> ` })}`;
}, "C:/Users/usuario/Documents/BaldegonDev/Proyectos Web/LandingProyectProgII/src/pages/CocktailDisplay.astro", void 0);

const $$file = "C:/Users/usuario/Documents/BaldegonDev/Proyectos Web/LandingProyectProgII/src/pages/CocktailDisplay.astro";
const $$url = "/CocktailDisplay";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CocktailDisplay,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
