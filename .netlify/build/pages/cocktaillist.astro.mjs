/* empty css                                           */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as createAstro, a as addAttribute } from '../chunks/astro/server_DdE926XU.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_y4kWyvKk.mjs';
import { s as supabase } from '../chunks/supabase_CfMgWXZK.mjs';
import { $ as $$LandingHeader } from '../chunks/LandingHeader_Cy82eNhH.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$CocktailList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CocktailList;
  const session = await supabase.auth.getSession();
  if (!session) {
    Astro2.redirect("/index");
  }
  const { data: cocktails, error } = await supabase.from("cocktails").select("*").order("created_at", { ascending: false });
  return renderTemplate`${maybeRenderHead()}<div class="py-4"> <!-- Componente que renderiza el header --> ${renderComponent($$result, "LandinHeader", $$LandingHeader, {})} </div> <br> <br> <br> ${renderComponent($$result, "Layout", $$Layout, { "title": "CockTail List" }, { "default": ($$result2) => renderTemplate` <section class=" min-h-screen bg-[#0A0A0F] bg-cover bg-center bg-fixed relative"> <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-red-500/10 to-cyan-500/10 pointer-events-none"></div> <h1 class="text-4xl font-bold py-10 text-white text-center relative"> <span class="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 text-transparent bg-clip-text">
Cocktail Manager
</span> </h1> <div class="container mx-auto px-4 flex flex-col md:flex-row gap-8 relative"> <!-- Create Cocktail Form --> <div class="md:w-1/3"> <form id="cocktailForm" class="sticky top-4 bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg shadow-red-500/10"> <input type="text" id="cocktailName" placeholder="Cocktail name" class="w-full p-3 mb-4 rounded-lg bg-black/50 border border-cyan-500/20 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all" required> <textarea id="cocktailDescription" placeholder="Cocktail description" class="w-full p-3 mb-4 rounded-lg bg-black/50 border border-cyan-500/20 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all" required></textarea> <textarea id="cocktailIngredients" placeholder="Ingredients (one per line)" class="w-full p-3 mb-4 rounded-lg bg-black/50 border border-cyan-500/20 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all" required></textarea> <textarea id="cocktailInstructions" placeholder="Instructions" class="w-full p-3 mb-4 rounded-lg bg-black/50 border border-cyan-500/20 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all" required></textarea> <button type="submit" class="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-3 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg shadow-red-500/20">
Add Cocktail
</button> </form> </div> <!-- Cocktail List --> <div class="md:w-2/3"> <div class="space-y-6"> ${cocktails?.map((cocktail) => renderTemplate`<div class="cocktail-item bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg shadow-cyan-500/10 text-white"> <div class="flex justify-between"> <div class="flex-grow"> <h3 class="font-bold text-2xl mb-2 bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text"> ${cocktail.name} </h3> <p class="text-gray-300 mb-4">${cocktail.description}</p> <div class="mb-4"> <h4 class="font-semibold text-emerald-400">Ingredients:</h4> <pre class="text-sm text-gray-300 whitespace-pre-wrap mt-2 font-sans">${cocktail.ingredients}</pre> </div> <div> <h4 class="font-semibold text-emerald-400">Instructions:</h4> <p class="text-gray-300 mt-2">${cocktail.instructions}</p> </div> </div> <div class="flex flex-col gap-3 ml-6"> <button class="edit-btn bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors shadow-lg shadow-cyan-500/20"${addAttribute(cocktail.id, "data-id")}>
Edit
</button> <button class="delete-btn bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors shadow-lg shadow-red-500/20"${addAttribute(cocktail.id, "data-id")}>
Delete
</button> </div> </div> </div>`)} </div> </div> </div> </section> ` })} `;
}, "C:/Users/usuario/Documents/BaldegonDev/Proyectos Web/LandingProyectProgII/src/pages/CocktailList.astro", void 0);

const $$file = "C:/Users/usuario/Documents/BaldegonDev/Proyectos Web/LandingProyectProgII/src/pages/CocktailList.astro";
const $$url = "/CocktailList";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CocktailList,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
