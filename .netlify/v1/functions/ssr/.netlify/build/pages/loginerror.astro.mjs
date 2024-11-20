/* empty css                                           */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro } from '../chunks/astro/server_DdE926XU.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$LoginError = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LoginError;
  return renderTemplate`${maybeRenderHead()}<section> <div> <p>
Invalid Credentials Error : 500
</p> </div> </section> `;
}, "C:/Users/usuario/Documents/BaldegonDev/Proyectos Web/LandingProyectProgII/src/pages/LoginError.astro", void 0);

const $$file = "C:/Users/usuario/Documents/BaldegonDev/Proyectos Web/LandingProyectProgII/src/pages/LoginError.astro";
const $$url = "/LoginError";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$LoginError,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
