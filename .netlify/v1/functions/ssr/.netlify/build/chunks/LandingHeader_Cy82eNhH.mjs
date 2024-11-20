import { c as createComponent, r as renderTemplate, a as addAttribute, b as createAstro, m as maybeRenderHead, d as renderComponent } from './astro/server_DdE926XU.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                   */

const $$Astro = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/usuario/Documents/BaldegonDev/Proyectos Web/LandingProyectProgII/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$LandingHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!--
    Este es el header de la pagina, es un componente reutilizable que se queda
    pegado en el top y tiene botones para moverse entre paginas
-->${maybeRenderHead()}<header id="landing-header" class="bg-transparent py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white bg-white-/20 backdrop-blur-sm"> <div class="flex flex-grow basis-0"> <a class="flex items-center" href="/home"> <img src="/tauroslogo.png" alt="BrandLogo" class="h-full w-auto object-contain max-w-[180px] py-1"> </a> </div> <nav> <ul class="flex text-sm font-sans [&>li>a]:text-current text-orange-300 border-solid border-inherit [&>li>a]:font-bold [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2"> <li><a href="/">Cartas (Coming Soon)</a></li> <li><a href="/CocktailDisplay">Tragos</a></li> <li><a href="/home">Descubrir Nuevas Combinaciones (Coming Soon)</a></li> <li> <a href="/CocktailList">Crear Carta</a> ${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})} </li> </ul> </nav> <nav class="flex flex-grow basis-0 justify-end"> <ul class="flex text-sm font-sans
         [&>li>a]:text-current text-orange-300 [&>li>a]:font-bold [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2"> <li><a href="/register">Register</a></li> <li><a href="/#">Login</a></li> <form action="/api/auth/signout"> <button type="submit" class="bg-red-300 text-black font-sans font-medium py-2 px-4 rounded-md hover:bg-red-600 transition-colors">Sign out</button> </form> </ul> </nav> <div id="menu-backdrop"${addAttribute(`
        absolute bg-white/5 backdrop-blur-lg rounded
        translate-x-[var(--left)] translate-y-[var(--top)]
        left-0 top-0
        w-[var(--width)] h-[var(--height)]
        transition-all duration-500
        ease-in-out opacity-0 -z-10
     `, "class")}></div></header> <!--
    Este script funciona tomando los Tags del HMLT y genera un Backdrop que simula un hover que sigue el mouse por donde se pasa 
-->  <!-- 
    Este es el observer, lo que hace que siga el mouse
     dependiendo de que Tag este señalando
--> `;
}, "C:/Users/usuario/Documents/BaldegonDev/Proyectos Web/LandingProyectProgII/src/components/LandingHeader.astro", void 0);

export { $$LandingHeader as $, $$ViewTransitions as a };
